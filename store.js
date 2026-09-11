const STORAGE_KEY = 'daily-report-v2'

export const CATEGORIES = [
  { id: 'mentally', label: 'Mentally' },
  { id: 'psychology', label: 'Psychology' },
  { id: 'physically', label: 'Physically' },
  { id: 'spiritually', label: 'Spiritually' }
]

const CATEGORY_IDS = CATEGORIES.map((item) => item.id)

const DEFAULT_HABITS = [
  { id: 'h1', name: 'Wake up early', points: 10, icon: 'sunrise', category: 'physically', pin: { mode: 'forever' } },
  { id: 'h2', name: 'Drink water', points: 5, icon: 'drop', category: 'physically', pin: { mode: 'forever' } },
  { id: 'h3', name: 'Exercise', points: 15, icon: 'bolt', category: 'physically', pin: { mode: 'forever' } },
  { id: 'h4', name: 'Read 20 minutes', points: 10, icon: 'book', category: 'mentally', pin: { mode: 'forever' } },
  { id: 'h5', name: 'No junk food', points: 10, icon: 'leaf', category: 'physically', pin: { mode: 'forever' } }
]

const DEFAULT_SETTINGS = {
  lockTime: '21:00',
  autoLock: true
}

export const WEEKDAYS = [
  { value: 1, label: 'Mon' },
  { value: 2, label: 'Tue' },
  { value: 3, label: 'Wed' },
  { value: 4, label: 'Thu' },
  { value: 5, label: 'Fri' },
  { value: 6, label: 'Sat' },
  { value: 0, label: 'Sun' }
]

export function todayKey(date = new Date()) {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

function emptyDay() {
  return {
    habits: {},
    habitRatings: {},
    tasks: [],
    note: '',
    locked: false,
    lockOverride: null,
    submittedAt: null
  }
}

export function normalizeCategory(value) {
  return CATEGORY_IDS.includes(value) ? value : 'mentally'
}

export function categoryLabel(id) {
  return CATEGORIES.find((item) => item.id === id)?.label || 'Mentally'
}

function normalizeTask(task) {
  return {
    ...task,
    description: task.description || '',
    category: normalizeCategory(task.category)
  }
}

function normalizePin(pin) {
  if (!pin || !pin.mode) return null
  return {
    mode: pin.mode,
    until: pin.until || '',
    weekdays: Array.isArray(pin.weekdays) ? pin.weekdays.map(Number) : []
  }
}

function defaultHabitCategory(id, name) {
  const text = `${id} ${name}`.toLowerCase()
  if (text.includes('read') || text.includes('study') || text.includes('learn')) return 'mentally'
  if (text.includes('meditat') || text.includes('pray') || text.includes('journal')) return 'spiritually'
  if (text.includes('mood') || text.includes('calm') || text.includes('therapy')) return 'psychology'
  return 'physically'
}

function migrate(data) {
  const habits = (Array.isArray(data.habits) && data.habits.length ? data.habits : DEFAULT_HABITS).map((habit) => ({
    ...habit,
    category: normalizeCategory(habit.category || defaultHabitCategory(habit.id, habit.name)),
    pin: normalizePin(habit.pin)
  }))
  const days = {}
  Object.entries(data.days || {}).forEach(([key, day]) => {
    days[key] = {
      ...emptyDay(),
      habits: day.habits || {},
      habitRatings: day.habitRatings || {},
      tasks: Array.isArray(day.tasks) ? day.tasks.map(normalizeTask) : [],
      note: day.note || '',
      locked: Boolean(day.locked),
      lockOverride: day.lockOverride || (day.locked ? 'locked' : null),
      submittedAt: day.submittedAt || null
    }
  })
  return {
    habits,
    pinnedTasks: Array.isArray(data.pinnedTasks)
      ? data.pinnedTasks.map((task) => ({
          ...normalizeTask(task),
          pin: normalizePin(task.pin)
        }))
      : [],
    days,
    settings: {
      lockTime: (data.settings && data.settings.lockTime) || DEFAULT_SETTINGS.lockTime,
      autoLock: !data.settings || data.settings.autoLock !== false
    }
  }
}

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY) || localStorage.getItem('daily-report-v1')
    if (!raw) {
      return {
        habits: DEFAULT_HABITS,
        pinnedTasks: [],
        days: {},
        settings: { ...DEFAULT_SETTINGS }
      }
    }
    return migrate(JSON.parse(raw))
  } catch {
    return {
      habits: DEFAULT_HABITS,
      pinnedTasks: [],
      days: {},
      settings: { ...DEFAULT_SETTINGS }
    }
  }
}

let state = load()

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
}

function weekdayOf(dateKey) {
  return new Date(`${dateKey}T00:00:00`).getDay()
}

function prevDateKey(dateKey) {
  const date = new Date(`${dateKey}T00:00:00`)
  date.setDate(date.getDate() - 1)
  return todayKey(date)
}

export function pinApplies(pin, dateKey) {
  if (!pin) return true
  if (pin.mode === 'forever') return true
  if (pin.mode === 'until') return Boolean(pin.until) && dateKey <= pin.until
  if (pin.mode === 'weekly') return Array.isArray(pin.weekdays) && pin.weekdays.includes(weekdayOf(dateKey))
  return true
}

export function pinLabel(pin) {
  if (!pin) return 'Not pinned'
  if (pin.mode === 'forever') return 'Pinned forever'
  if (pin.mode === 'until') return pin.until ? `Pinned until ${pin.until}` : 'Pinned until a date'
  if (pin.mode === 'weekly') {
    const selected = Array.isArray(pin.weekdays) ? pin.weekdays : []
    const labels = WEEKDAYS.filter((day) => selected.includes(day.value)).map((day) => day.label)
    return labels.length ? `Weekly: ${labels.join(', ')}` : 'Weekly (no days)'
  }
  return 'Pinned'
}

function lockMoment(dateKey) {
  const [hours, minutes] = (state.settings.lockTime || '21:00').split(':').map(Number)
  const when = new Date(`${dateKey}T00:00:00`)
  when.setHours(hours || 0, minutes || 0, 0, 0)
  return when
}

function applyAutoLock(dateKey) {
  const day = ensureDay(dateKey)
  if (day.lockOverride === 'unlocked') return false
  if (day.lockOverride === 'locked' || day.locked) return true
  if (!state.settings.autoLock) return false
  if (Date.now() >= lockMoment(dateKey).getTime()) {
    day.locked = true
    day.lockOverride = 'locked'
    day.submittedAt = day.submittedAt || lockMoment(dateKey).toISOString()
    save()
    return true
  }
  return false
}

function ensureDay(dateKey) {
  if (!state.days[dateKey]) {
    state.days[dateKey] = emptyDay()
  }
  return state.days[dateKey]
}

function materializePinnedTasks(dateKey) {
  const day = ensureDay(dateKey)
  let changed = false
  state.pinnedTasks.forEach((template) => {
    if (!pinApplies(template.pin, dateKey)) return
    if (day.tasks.some((task) => task.sourcePinId === template.id)) return
    day.tasks.push({
      id: `ptask-${template.id}-${dateKey}`,
      title: template.title,
      points: template.points,
      description: template.description || '',
      category: normalizeCategory(template.category),
      done: false,
      sourcePinId: template.id
    })
    changed = true
  })
  if (changed) save()
  return day
}

function assertUnlocked(dateKey) {
  return !store.isLocked(dateKey)
}

const store = {
  todayKey,
  getSettings() {
    return state.settings
  },
  setLockTime(value) {
    state.settings.lockTime = value || '21:00'
    save()
  },
  setAutoLock(enabled) {
    state.settings.autoLock = Boolean(enabled)
    save()
  },
  getHabits(dateKey) {
    const habits = state.habits.filter((habit) => (dateKey ? pinApplies(habit.pin, dateKey) : true))
    return habits.sort((a, b) => Number(Boolean(b.pin)) - Number(Boolean(a.pin)))
  },
  getAllHabits() {
    return state.habits
  },
  getPinnedTasks() {
    return state.pinnedTasks
  },
  getDay(dateKey) {
    applyAutoLock(dateKey)
    return materializePinnedTasks(dateKey)
  },
  isLocked(dateKey) {
    return applyAutoLock(dateKey)
  },
  submitDay(dateKey) {
    const day = ensureDay(dateKey)
    day.locked = true
    day.lockOverride = 'locked'
    day.submittedAt = new Date().toISOString()
    save()
  },
  unlockDay(dateKey) {
    const day = ensureDay(dateKey)
    day.locked = false
    day.lockOverride = 'unlocked'
    save()
  },
  lockDay(dateKey) {
    this.submitDay(dateKey)
  },
  lockedReports() {
    return Object.keys(state.days)
      .sort()
      .reverse()
      .filter((key) => this.isLocked(key))
      .map((key) => ({
        date: key,
        submittedAt: state.days[key].submittedAt,
        ...this.scoreFor(key)
      }))
  },
  habitRating(dateKey, habitId) {
    const day = state.days[dateKey]
    if (!day) return 0
    if (day.habitRatings && day.habitRatings[habitId] != null) return Number(day.habitRatings[habitId]) || 0
    return day.habits && day.habits[habitId] ? 5 : 0
  },
  setHabitRating(dateKey, habitId, rating) {
    if (!assertUnlocked(dateKey)) return
    const day = ensureDay(dateKey)
    const value = Math.max(0, Math.min(5, Number(rating) || 0))
    day.habitRatings[habitId] = value
    day.habits[habitId] = value > 0
    save()
  },
  toggleHabit(dateKey, habitId) {
    if (!assertUnlocked(dateKey)) return
    const next = this.habitRating(dateKey, habitId) > 0 ? 0 : 5
    this.setHabitRating(dateKey, habitId, next)
  },
  addTask(dateKey, title, points, extra = {}) {
    if (!assertUnlocked(dateKey)) return
    const day = ensureDay(dateKey)
    day.tasks.push({
      id: `t${Date.now()}`,
      title: title.trim(),
      points: Number(points) || 5,
      description: String(extra.description || '').trim(),
      category: normalizeCategory(extra.category),
      done: false
    })
    save()
  },
  toggleTask(dateKey, taskId) {
    if (!assertUnlocked(dateKey)) return
    const day = ensureDay(dateKey)
    const task = day.tasks.find((item) => item.id === taskId)
    if (task) {
      task.done = !task.done
      save()
    }
  },
  removeTask(dateKey, taskId) {
    if (!assertUnlocked(dateKey)) return
    const day = ensureDay(dateKey)
    day.tasks = day.tasks.filter((item) => item.id !== taskId)
    save()
  },
  setNote(dateKey, note) {
    if (!assertUnlocked(dateKey)) return
    ensureDay(dateKey).note = note
    save()
  },
  addHabit(name, points, extra = {}) {
    state.habits.push({
      id: `h${Date.now()}`,
      name: name.trim(),
      points: Number(points) || 10,
      icon: 'star',
      category: normalizeCategory(extra.category || 'physically'),
      pin: { mode: 'forever', until: '', weekdays: [] }
    })
    save()
  },
  updateHabit(habitId, fields) {
    const habit = state.habits.find((item) => item.id === habitId)
    if (!habit) return
    if (fields.name != null) habit.name = String(fields.name).trim() || habit.name
    if (fields.points != null) habit.points = Number(fields.points) || habit.points
    if (fields.category != null) habit.category = normalizeCategory(fields.category)
    save()
  },
  updateTask(dateKey, taskId, fields) {
    if (!assertUnlocked(dateKey)) return
    const day = ensureDay(dateKey)
    const task = day.tasks.find((item) => item.id === taskId)
    if (!task) return
    if (fields.title != null) task.title = String(fields.title).trim() || task.title
    if (fields.points != null) task.points = Number(fields.points) || task.points
    if (fields.description != null) task.description = String(fields.description).trim()
    if (fields.category != null) task.category = normalizeCategory(fields.category)
    if (task.sourcePinId) {
      const template = state.pinnedTasks.find((item) => item.id === task.sourcePinId)
      if (template) {
        template.title = task.title
        template.points = task.points
        template.description = task.description
        template.category = task.category
      }
    }
    save()
  },
  habitStreak(habitId, dateKey) {
    const habit = state.habits.find((item) => item.id === habitId)
    if (!habit) return 0
    let cursor = dateKey
    let guard = 0
    if (this.habitRating(cursor, habitId) === 0) {
      cursor = prevDateKey(cursor)
    }
    let streak = 0
    while (guard < 400) {
      guard += 1
      if (!pinApplies(habit.pin, cursor)) {
        cursor = prevDateKey(cursor)
        continue
      }
      if (this.habitRating(cursor, habitId) > 0) {
        streak += 1
        cursor = prevDateKey(cursor)
        continue
      }
      break
    }
    return streak
  },
  categoryBreakdown(dateKey) {
    const day = this.getDay(dateKey)
    const habits = this.getHabits(dateKey)
    return CATEGORIES.map((cat) => {
      const catHabits = habits.filter((habit) => normalizeCategory(habit.category) === cat.id)
      const catTasks = day.tasks.filter((task) => normalizeCategory(task.category) === cat.id)
      const habitEarned = catHabits.reduce((sum, habit) => {
        const rating = this.habitRating(dateKey, habit.id)
        return sum + Math.round((habit.points * rating) / 5)
      }, 0)
      const habitMax = catHabits.reduce((sum, habit) => sum + habit.points, 0)
      const taskEarned = catTasks.reduce((sum, task) => sum + (task.done ? task.points : 0), 0)
      const taskMax = catTasks.reduce((sum, task) => sum + task.points, 0)
      const ratings = catHabits.map((habit) => this.habitRating(dateKey, habit.id))
      const avg = ratings.length ? Math.round((ratings.reduce((sum, value) => sum + value, 0) / ratings.length) * 10) / 10 : 0
      return {
        ...cat,
        habits: catHabits,
        tasks: catTasks,
        earned: habitEarned + taskEarned,
        max: habitMax + taskMax,
        habitAvg: avg,
        completed: catHabits.filter((habit) => this.habitRating(dateKey, habit.id) > 0).length + catTasks.filter((task) => task.done).length,
        total: catHabits.length + catTasks.length
      }
    })
  },
  removeHabit(habitId) {
    state.habits = state.habits.filter((item) => item.id !== habitId)
    save()
  },
  pinHabit(habitId, pin) {
    const habit = state.habits.find((item) => item.id === habitId)
    if (habit) {
      habit.pin = normalizePin(pin)
      save()
    }
  },
  unpinHabit(habitId) {
    const habit = state.habits.find((item) => item.id === habitId)
    if (habit) {
      habit.pin = null
      save()
    }
  },
  pinTask(dateKey, taskId, pin) {
    const day = ensureDay(dateKey)
    const task = day.tasks.find((item) => item.id === taskId)
    if (!task) return
    if (task.sourcePinId) {
      const existing = state.pinnedTasks.find((item) => item.id === task.sourcePinId)
      if (existing) {
        existing.pin = normalizePin(pin)
        save()
        return
      }
    }
    const id = `p${Date.now()}`
    state.pinnedTasks.push({
      id,
      title: task.title,
      points: task.points,
      description: task.description || '',
      category: normalizeCategory(task.category),
      pin: normalizePin(pin)
    })
    task.sourcePinId = id
    save()
  },
  unpinTaskTemplate(pinId) {
    state.pinnedTasks = state.pinnedTasks.filter((item) => item.id !== pinId)
    save()
  },
  updatePinnedTask(pinId, pin) {
    const task = state.pinnedTasks.find((item) => item.id === pinId)
    if (task) {
      task.pin = normalizePin(pin)
      save()
    }
  },
  findHabit(habitId) {
    return state.habits.find((item) => item.id === habitId) || null
  },
  findTask(dateKey, taskId) {
    return ensureDay(dateKey).tasks.find((item) => item.id === taskId) || null
  },
  findPinnedTask(pinId) {
    return state.pinnedTasks.find((item) => item.id === pinId) || null
  },
  scoreFor(dateKey) {
    const day = this.getDay(dateKey)
    const habits = this.getHabits(dateKey)
    const habitScore = habits.reduce((sum, habit) => {
      const rating = this.habitRating(dateKey, habit.id)
      return sum + Math.round((habit.points * rating) / 5)
    }, 0)
    const taskScore = day.tasks.reduce((sum, task) => sum + (task.done ? task.points : 0), 0)
    const maxHabits = habits.reduce((sum, habit) => sum + habit.points, 0)
    const maxTasks = day.tasks.reduce((sum, task) => sum + task.points, 0)
    const earned = habitScore + taskScore
    const max = maxHabits + maxTasks
    return {
      earned,
      max,
      habitScore,
      taskScore,
      completedHabits: habits.filter((habit) => this.habitRating(dateKey, habit.id) > 0).length,
      habitAvg: habits.length
        ? Math.round((habits.reduce((sum, habit) => sum + this.habitRating(dateKey, habit.id), 0) / habits.length) * 10) / 10
        : 0,
      totalHabits: habits.length,
      completedTasks: day.tasks.filter((task) => task.done).length,
      totalTasks: day.tasks.length,
      percent: max ? Math.round((earned / max) * 100) : 0,
      locked: this.isLocked(dateKey),
      submittedAt: day.submittedAt
    }
  },
  history(limit = 14) {
    const keys = Object.keys(state.days).sort().reverse().slice(0, limit)
    return keys.map((key) => ({
      date: key,
      ...this.scoreFor(key),
      note: state.days[key].note,
      locked: this.isLocked(key),
      submittedAt: state.days[key].submittedAt
    }))
  },
  week(anchorDate) {
    const start = new Date(anchorDate)
    const day = start.getDay()
    const diff = day === 0 ? -6 : 1 - day
    start.setDate(start.getDate() + diff)
    start.setHours(0, 0, 0, 0)
    return Array.from({ length: 7 }, (_, index) => {
      const date = new Date(start)
      date.setDate(start.getDate() + index)
      const key = todayKey(date)
      return {
        date: key,
        label: date.toLocaleDateString(undefined, { weekday: 'short' }),
        locked: this.isLocked(key),
        ...this.scoreFor(key)
      }
    })
  }
}

export { store }

export function gradeFromPercent(percent) {
  if (percent >= 90) return 'Excellent'
  if (percent >= 75) return 'Great day'
  if (percent >= 50) return 'Keep going'
  if (percent > 0) return 'Started'
  return 'No score yet'
}

export function formatDate(dateKey) {
  const date = new Date(`${dateKey}T00:00:00`)
  return date.toLocaleDateString(undefined, {
    weekday: 'long',
    month: 'short',
    day: 'numeric'
  })
}

export function formatTime(iso) {
  if (!iso) return ''
  const date = new Date(iso)
  return date.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })
}

export function ratingLabel(rating) {
  if (rating >= 5) return 'Excellent'
  if (rating >= 4) return 'Great'
  if (rating >= 3) return 'Good'
  if (rating >= 2) return 'Fair'
  if (rating >= 1) return 'Low'
  return 'Not rated'
}
