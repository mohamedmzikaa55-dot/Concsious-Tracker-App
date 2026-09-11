import './styles.css'
import {
  store,
  gradeFromPercent,
  formatDate,
  formatTime,
  pinLabel,
  WEEKDAYS,
  CATEGORIES,
  categoryLabel,
  ratingLabel
} from './store.js'

const app = document.getElementById('app')

let selectedDate = store.todayKey()
let screen = 'today'
let modal = null
let modalPayload = null
let editMode = false

function shiftDate(days) {
  const date = new Date(`${selectedDate}T00:00:00`)
  date.setDate(date.getDate() + days)
  selectedDate = store.todayKey(date)
}

function icon(name) {
  const icons = {
    home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1z"/></svg>',
    week: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>',
    history: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 8v5l3 2"/><circle cx="12" cy="12" r="9"/></svg>',
    settings: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H8a1.7 1.7 0 0 0 1-1.5V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V8c.3.7.9 1.2 1.6 1.3H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1.7z"/></svg>',
    pin: '<svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><path d="M14.5 3.5 12 9l5 3.2-8.7 8.7-1.4-1.4L15.2 12 12 9.8l2.5-5.5 2.1.7-2.1-1.5z"/></svg>',
    habit: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7h16M4 12h10M4 17h13"/></svg>'
  }
  return icons[name]
}

function stars(habitId, rating, locked) {
  return `
    <div class="stars" data-habit="${habitId}">
      ${[1, 2, 3, 4, 5]
        .map(
          (value) => `
            <button type="button" class="star ${value <= rating ? 'on' : ''}" data-action="rate-habit" data-id="${habitId}" data-rating="${value}" ${locked ? 'disabled' : ''} aria-label="${value} star">★</button>
          `
        )
        .join('')}
    </div>
  `
}

function categoryBadge(category) {
  return `<span class="cat-badge cat-${category}">${categoryLabel(category)}</span>`
}

function streakBadge(days) {
  return `<span class="streak-badge">${days} day streak</span>`
}

function editToggle() {
  return `<button class="ghost-btn compact ${editMode ? 'on' : ''}" data-action="toggle-edit">${editMode ? 'Done' : 'Edit Mode'}</button>`
}

function lockBadge(locked) {
  return locked ? '<span class="lock-badge">Locked</span>' : '<span class="open-badge">Open</span>'
}

function renderToday() {
  const day = store.getDay(selectedDate)
  const habits = store.getHabits(selectedDate)
  const score = store.scoreFor(selectedDate)
  const grade = gradeFromPercent(score.percent)
  const isToday = selectedDate === store.todayKey()
  const locked = store.isLocked(selectedDate)
  const settings = store.getSettings()

  return `
    <div class="topbar">
      <div>
        <p class="kicker">${isToday ? 'Today' : 'Daily report'}</p>
        <h1>${formatDate(selectedDate)}</h1>
      </div>
      <div class="date-nav">
        <button class="icon-btn" data-action="prev-day" aria-label="Previous day">‹</button>
        <button class="icon-btn" data-action="next-day" aria-label="Next day">›</button>
      </div>
    </div>

    <section class="score-hero ${locked ? 'is-locked' : ''}">
      <div class="score-row">
        <div>
          <div class="score-value">${score.earned}</div>
          <div class="score-unit">of ${score.max || 0} points</div>
        </div>
        <div class="hero-side">
          ${lockBadge(locked)}
          <div class="grade-pill">${grade}</div>
        </div>
      </div>
      <div class="progress-track"><div class="progress-fill" style="width:${score.percent}%"></div></div>
      <div class="stats-grid">
        <div class="stat"><span class="muted">Habits</span><b>${score.completedHabits}/${score.totalHabits}</b></div>
        <div class="stat"><span class="muted">Tasks</span><b>${score.completedTasks}/${score.totalTasks}</b></div>
        <div class="stat"><span class="muted">Score</span><b>${score.percent}%</b></div>
      </div>
      <p class="lock-hint">
        ${
          locked
            ? `Submitted${day.submittedAt ? ` at ${formatTime(day.submittedAt)}` : ''}. Unlock in Settings to edit.`
            : `Auto-locks at ${settings.lockTime}. Submit when the day is done.`
        }
      </p>
      ${
        locked
          ? '<button class="ghost-btn full" data-action="goto-settings">Unlock in Settings</button>'
          : '<button class="primary-btn full" data-action="submit-day">Submit and lock report</button>'
      }
    </section>

    <section class="section">
      <div class="section-head">
        <h2>Habits</h2>
        <div class="head-actions">
          ${editToggle()}
          <span class="points">+${score.habitScore} pts</span>
        </div>
      </div>
      <div class="list">
        ${
          habits.length
            ? habits
                .map((habit) => {
                  const rating = store.habitRating(selectedDate, habit.id)
                  const done = rating > 0
                  const streak = store.habitStreak(habit.id, selectedDate)
                  return `
                    <article class="item-card ${done ? 'done' : ''} ${locked ? 'is-locked' : ''}">
                      <button class="check" data-action="toggle-habit" data-id="${habit.id}" ${locked ? 'disabled' : ''}>✓</button>
                      <div>
                        <div class="item-title">${escapeHtml(habit.name)}</div>
                        <div class="item-meta">${categoryBadge(habit.category)} ${habit.pin ? pinLabel(habit.pin) : 'Not pinned'} · ${rating ? `${rating}/5` : 'Not rated'}</div>
                        <div class="item-meta">${streakBadge(streak)}</div>
                      </div>
                      <div class="item-side">
                        <div class="points">+${habit.points}</div>
                        <div class="mini-actions">
                          ${editMode ? `<button class="mini-btn on" data-action="open-edit-habit" data-id="${habit.id}" ${locked ? 'disabled' : ''}>Edit</button>` : ''}
                          <button class="mini-btn ${habit.pin ? 'on' : ''}" data-action="open-pin-habit" data-id="${habit.id}" ${locked ? 'disabled' : ''} title="Pin habit">${icon('pin')}</button>
                        </div>
                      </div>
                    </article>
                  `
                })
                .join('')
            : '<div class="empty">No habits for this day. Tap + to add one.</div>'
        }
      </div>
    </section>

    <section class="section">
      <div class="section-head">
        <h2>Tasks</h2>
        <div class="head-actions">
          ${editToggle()}
          <span class="points">+${score.taskScore} pts</span>
        </div>
      </div>
      <div class="list">
        ${
          day.tasks.length
            ? day.tasks
                .map((task) => {
                  const pinned = Boolean(task.sourcePinId)
                  const template = pinned ? store.findPinnedTask(task.sourcePinId) : null
                  return `
                    <article class="item-card ${task.done ? 'done' : ''} ${locked ? 'is-locked' : ''}">
                      <button class="check" data-action="toggle-task" data-id="${task.id}" ${locked ? 'disabled' : ''}>✓</button>
                      <div>
                        <div class="item-title">${escapeHtml(task.title)}</div>
                        <div class="item-meta">${categoryBadge(task.category)} ${template ? pinLabel(template.pin) : 'One-time task'}</div>
                        ${task.description ? `<p class="item-desc">${escapeHtml(task.description)}</p>` : ''}
                      </div>
                      <div class="item-side">
                        <div class="points">+${task.points}</div>
                        <div class="mini-actions">
                          ${editMode ? `<button class="mini-btn on" data-action="open-edit-task" data-id="${task.id}" ${locked ? 'disabled' : ''}>Edit</button>` : ''}
                          <button class="mini-btn ${pinned ? 'on' : ''}" data-action="open-pin-task" data-id="${task.id}" ${locked ? 'disabled' : ''} title="Pin task">${icon('pin')}</button>
                          <button class="mini-btn" data-action="remove-task" data-id="${task.id}" ${locked ? 'disabled' : ''}>✕</button>
                        </div>
                      </div>
                    </article>
                  `
                })
                .join('')
            : '<div class="empty">No tasks yet. Tap + to add one.</div>'
        }
      </div>
    </section>

    <section class="section">
      <div class="section-head"><h2>Day note</h2></div>
      <textarea id="day-note" placeholder="How did today go?" ${locked ? 'disabled' : ''}>${escapeHtml(day.note)}</textarea>
    </section>
  `
}

function renderWeek() {
  const week = store.week(new Date(`${selectedDate}T00:00:00`))
  const total = week.reduce((sum, day) => sum + day.earned, 0)
  const avg = Math.round(total / 7)

  return `
    <div class="topbar">
      <div>
        <p class="kicker">This week</p>
        <h1>Weekly score</h1>
      </div>
    </div>
    <section class="score-hero">
      <div class="score-row">
        <div>
          <div class="score-value">${total}</div>
          <div class="score-unit">points this week</div>
        </div>
        <div class="grade-pill">Avg ${avg} pts</div>
      </div>
      <div class="week-days">
        ${week
          .map(
            (day) => `
              <button class="day-cell ${day.date === selectedDate ? 'active' : ''} ${day.earned > 0 ? 'done' : ''}" data-action="pick-date" data-date="${day.date}">
                <span>${day.label.slice(0, 2)}</span>
                <b>${day.earned}</b>
                ${day.locked ? '<i class="dot-lock"></i>' : ''}
              </button>
            `
          )
          .join('')}
      </div>
    </section>
    <section class="section week-grid">
      ${week
        .map(
          (day) => `
            <article class="week-card">
              <div class="section-head">
                <div>
                  <div class="item-title">${formatDate(day.date)}</div>
                  <div class="item-meta">${day.locked ? 'Locked' : 'Open'} · ${day.completedHabits} habits · ${day.completedTasks} tasks</div>
                </div>
                <div class="points">${day.earned} pts</div>
              </div>
              <div class="bar"><span style="width:${day.percent}%"></span></div>
            </article>
          `
        )
        .join('')}
    </section>
  `
}

function renderHistory() {
  const items = store.history(21)
  return `
    <div class="topbar">
      <div>
        <p class="kicker">Archive</p>
        <h1>Past reports</h1>
      </div>
    </div>
    <div class="history-list">
      ${
        items.length
          ? items
              .map(
                (item) => `
                  <article class="history-card">
                    <div class="section-head">
                      <div>
                        <div class="item-title">${formatDate(item.date)}</div>
                        <div class="item-meta">${item.locked ? 'Locked' : 'Open'} · ${gradeFromPercent(item.percent)} · ${item.percent}%</div>
                      </div>
                      <button class="ghost-btn compact" data-action="pick-date" data-date="${item.date}">Open</button>
                    </div>
                    <div class="bar"><span style="width:${item.percent}%"></span></div>
                    ${item.note ? `<p class="note" style="margin-top:10px">${escapeHtml(item.note)}</p>` : ''}
                  </article>
                `
              )
              .join('')
          : '<div class="empty">Complete today to start your history.</div>'
      }
    </div>
  `
}

function renderActivities() {
  const locked = store.isLocked(selectedDate)
  const groups = store.categoryBreakdown(selectedDate)
  const totalEarned = groups.reduce((sum, group) => sum + group.earned, 0)
  const totalMax = groups.reduce((sum, group) => sum + group.max, 0)

  return `
    <div class="topbar">
      <div>
        <p class="kicker">Activities</p>
        <h1>By category</h1>
      </div>
      <div class="date-nav">
        ${editToggle()}
        <button class="icon-btn" data-action="prev-day" aria-label="Previous day">‹</button>
        <button class="icon-btn" data-action="next-day" aria-label="Next day">›</button>
      </div>
    </div>
    <section class="score-hero">
      <div class="score-row">
        <div>
          <div class="score-value">${totalEarned}</div>
          <div class="score-unit">of ${totalMax || 0} category points</div>
        </div>
        <div class="grade-pill">${formatDate(selectedDate)}</div>
      </div>
      <p class="lock-hint">Habits and tasks grouped by Mentally, Psychology, Physically, and Spiritually.</p>
    </section>
    ${groups
      .map((group) => {
        const percent = group.max ? Math.round((group.earned / group.max) * 100) : 0
        return `
          <section class="section">
            <article class="manage-card cat-card cat-${group.id}">
              <div class="section-head">
                <div>
                  <div class="item-title">${group.label}</div>
                  <div class="item-meta">${group.completed}/${group.total} done · rating ${group.habitAvg || 0}/5</div>
                </div>
                <div class="points">${group.earned}/${group.max} pts</div>
              </div>
              <div class="bar"><span style="width:${percent}%"></span></div>
            </article>
            <div class="list" style="margin-top:10px">
              ${
                group.habits.length || group.tasks.length
                  ? `
                    ${group.habits
                      .map((habit) => {
                        const rating = store.habitRating(selectedDate, habit.id)
                        const streak = store.habitStreak(habit.id, selectedDate)
                        const earned = Math.round((habit.points * rating) / 5)
                        return `
                          <article class="item-card ${rating ? 'done' : ''} ${locked ? 'is-locked' : ''}">
                            <button class="check" data-action="toggle-habit" data-id="${habit.id}" ${locked ? 'disabled' : ''}>✓</button>
                            <div>
                              <div class="item-title">${escapeHtml(habit.name)}</div>
                              <div class="item-meta">Habit · ${rating ? `${rating}/5 ${ratingLabel(rating)}` : 'Not rated'} · ${streakBadge(streak)}</div>
                              ${stars(habit.id, rating, locked)}
                            </div>
                            <div class="item-side">
                              <div class="points">${earned}/${habit.points}</div>
                              ${editMode ? `<button class="mini-btn on" data-action="open-edit-habit" data-id="${habit.id}" ${locked ? 'disabled' : ''}>Edit</button>` : ''}
                            </div>
                          </article>
                        `
                      })
                      .join('')}
                    ${group.tasks
                      .map((task) => {
                        return `
                          <article class="item-card ${task.done ? 'done' : ''} ${locked ? 'is-locked' : ''}">
                            <button class="check" data-action="toggle-task" data-id="${task.id}" ${locked ? 'disabled' : ''}>✓</button>
                            <div>
                              <div class="item-title">${escapeHtml(task.title)}</div>
                              <div class="item-meta">Task${task.description ? ` · ${escapeHtml(task.description)}` : ''}</div>
                            </div>
                            <div class="item-side">
                              <div class="points">+${task.points}</div>
                              ${editMode ? `<button class="mini-btn on" data-action="open-edit-task" data-id="${task.id}" ${locked ? 'disabled' : ''}>Edit</button>` : ''}
                            </div>
                          </article>
                        `
                      })
                      .join('')}
                  `
                  : '<div class="empty">No activities in this category.</div>'
              }
            </div>
          </section>
        `
      })
      .join('')}
  `
}

function renderSettings() {
  const settings = store.getSettings()
  const habits = store.getAllHabits()
  const pinnedTasks = store.getPinnedTasks()
  const lockedDays = store.lockedReports()

  return `
    <div class="topbar">
      <div>
        <p class="kicker">Admin rules</p>
        <h1>Settings</h1>
      </div>
    </div>

    <section class="manage-card">
      <h2>Report lock</h2>
      <p class="muted tight">When a past day is submitted and locked, it cannot be edited until you unlock it here.</p>
      <label>
        Auto lock time
        <input id="lock-time" type="time" value="${settings.lockTime}" />
      </label>
      <label class="switch-row">
        <span>Auto-lock after that time</span>
        <input id="auto-lock" type="checkbox" ${settings.autoLock ? 'checked' : ''} />
      </label>
      <p class="item-meta">Today still editable until ${settings.lockTime}. After that, the day locks automatically.</p>
    </section>

    <section class="section">
      <div class="section-head"><h2>Locked reports</h2></div>
      <div class="list">
        ${
          lockedDays.length
            ? lockedDays
                .map(
                  (item) => `
                    <article class="manage-card">
                      <div class="section-head">
                        <div>
                          <div class="item-title">${formatDate(item.date)}</div>
                          <div class="item-meta">${item.submittedAt ? `Submitted ${formatTime(item.submittedAt)}` : 'Locked'} · ${item.earned} pts</div>
                        </div>
                        <button class="ghost-btn compact" data-action="unlock-day" data-date="${item.date}">Unlock</button>
                      </div>
                    </article>
                  `
                )
                .join('')
            : '<div class="empty">No locked reports yet.</div>'
        }
      </div>
    </section>

    <section class="section">
      <div class="section-head">
        <h2>Habits</h2>
        <button class="ghost-btn compact" data-action="open-add-habit">Add</button>
      </div>
      <p class="muted tight">Pin a habit forever, until a date, or weekly on specific days.</p>
      <div class="habit-manage">
        ${
          habits.length
            ? habits
                .map(
                  (habit) => `
                    <article class="manage-card">
                      <div class="section-head">
                        <div>
                          <div class="item-title">${escapeHtml(habit.name)}</div>
                          <div class="item-meta">${categoryBadge(habit.category)} · ${habit.pin ? pinLabel(habit.pin) : 'Not pinned'} · +${habit.points} pts · ${streakBadge(store.habitStreak(habit.id, selectedDate))}</div>
                        </div>
                        <div class="mini-actions">
                          <button class="mini-btn ${habit.pin ? 'on' : ''}" data-action="open-pin-habit" data-id="${habit.id}">${icon('pin')}</button>
                          <button class="mini-btn" data-action="remove-habit" data-id="${habit.id}">✕</button>
                        </div>
                      </div>
                    </article>
                  `
                )
                .join('')
            : '<div class="empty">No habits yet.</div>'
        }
      </div>
    </section>

    <section class="section">
      <div class="section-head"><h2>Pinned tasks</h2></div>
      <p class="muted tight">Pinned tasks appear automatically on matching days.</p>
      <div class="habit-manage">
        ${
          pinnedTasks.length
            ? pinnedTasks
                .map(
                  (task) => `
                    <article class="manage-card">
                      <div class="section-head">
                        <div>
                          <div class="item-title">${escapeHtml(task.title)}</div>
                          <div class="item-meta">${categoryBadge(task.category)} · ${pinLabel(task.pin)} · +${task.points} pts</div>
                          ${task.description ? `<p class="item-desc">${escapeHtml(task.description)}</p>` : ''}
                        </div>
                        <div class="mini-actions">
                          <button class="mini-btn on" data-action="open-pin-template" data-id="${task.id}">${icon('pin')}</button>
                          <button class="mini-btn" data-action="unpin-template" data-id="${task.id}">✕</button>
                        </div>
                      </div>
                    </article>
                  `
                )
                .join('')
            : '<div class="empty">Pin a task from Today to repeat it.</div>'
        }
      </div>
    </section>
  `
}

function pinFormFields(pin) {
  const mode = pin?.mode || 'forever'
  const until = pin?.until || ''
  const weekdays = pin?.weekdays || []
  return `
    <div class="chip-row pin-modes">
      <button type="button" class="chip ${mode === 'forever' ? 'on' : ''}" data-action="pin-mode" data-mode="forever">Forever</button>
      <button type="button" class="chip ${mode === 'until' ? 'on' : ''}" data-action="pin-mode" data-mode="until">Until date</button>
      <button type="button" class="chip ${mode === 'weekly' ? 'on' : ''}" data-action="pin-mode" data-mode="weekly">Weekly</button>
    </div>
    <input type="hidden" name="mode" value="${mode}" />
    <label class="pin-until" style="${mode === 'until' ? '' : 'display:none'}">
      Until
      <input name="until" type="date" value="${until}" />
    </label>
    <div class="pin-weekdays" style="${mode === 'weekly' ? '' : 'display:none'}">
      <p class="item-meta">Repeat every</p>
      <div class="chip-row">
        ${WEEKDAYS.map(
          (day) => `
            <button type="button" class="chip weekday ${weekdays.includes(day.value) ? 'on' : ''}" data-action="toggle-weekday" data-day="${day.value}">
              ${day.label}
            </button>
          `
        ).join('')}
      </div>
    </div>
  `
}

function renderModal() {
  if (!modal) return ''

  if (modal === 'choose') {
    return `
      <div class="modal-backdrop open" data-action="close-modal">
        <div class="sheet">
          <div class="handle"></div>
          <h2>Add to today</h2>
          <p class="muted tight">Choose what you want to record.</p>
          <div class="choose-grid">
            <button class="choose-card" data-action="open-add-task">
              <b>Task</b>
              <span>One-time work with category and optional description</span>
            </button>
            <button class="choose-card" data-action="open-add-habit">
              <b>Habit</b>
              <span>Repeats on pinned days and can be rated 1 to 5</span>
            </button>
          </div>
          <button class="ghost-btn full" type="button" data-action="close-modal">Cancel</button>
        </div>
      </div>
    `
  }

  if (modal === 'habit' || modal === 'task' || modal === 'edit-habit' || modal === 'edit-task') {
    const isHabit = modal === 'habit' || modal === 'edit-habit'
    const isEdit = modal.startsWith('edit-')
    const item = modalPayload || {}
    const selectedCategory = item.category || (isHabit ? 'physically' : 'mentally')
    return `
      <div class="modal-backdrop open" data-action="close-modal">
        <form class="sheet" data-form="${modal}" data-id="${item.id || ''}">
          <div class="handle"></div>
          <h2>${isEdit ? 'Edit' : 'New'} ${isHabit ? 'habit' : 'task'}</h2>
          <div class="form" style="margin-top:14px">
            <label>
              ${isHabit ? 'Habit name' : 'Task name'}
              <input name="title" required maxlength="60" value="${escapeHtml(item.title || item.name || '')}" placeholder="${isHabit ? 'Meditate' : 'Finish report'}" />
            </label>
            ${
              isHabit
                ? ''
                : `
                  <label>
                    Description (optional)
                    <textarea name="description" maxlength="240" placeholder="Why this matters, extra notes...">${escapeHtml(item.description || '')}</textarea>
                  </label>
                `
            }
            <div>
              <p class="item-meta">Category</p>
              <div class="chip-row cat-row">
                ${CATEGORIES.map(
                  (cat) => `
                    <button type="button" class="chip ${selectedCategory === cat.id ? 'on' : ''}" data-action="set-category" data-category="${cat.id}">${cat.label}</button>
                  `
                ).join('')}
              </div>
              <input type="hidden" name="category" value="${selectedCategory}" />
            </div>
            <label>
              Points
              <input name="points" type="number" min="1" max="100" value="${item.points || (isHabit ? 10 : 5)}" />
            </label>
            <div class="chip-row">
              ${(isHabit ? [5, 10, 15, 20] : [5, 10, 15, 25])
                .map((value) => `<button type="button" class="chip" data-action="set-points" data-points="${value}">${value} pts</button>`)
                .join('')}
            </div>
            <button class="primary-btn" type="submit">Save ${isHabit ? 'habit' : 'task'}</button>
            <button class="ghost-btn" type="button" data-action="close-modal">Cancel</button>
          </div>
        </form>
      </div>
    `
  }

  if (modal === 'pin') {
    const { kind, id, title, pin } = modalPayload || {}
    return `
      <div class="modal-backdrop open" data-action="close-modal">
        <form class="sheet" data-form="pin" data-kind="${kind}" data-id="${id}">
          <div class="handle"></div>
          <h2>Pin ${kind === 'habit' ? 'habit' : 'task'}</h2>
          <p class="muted tight">${escapeHtml(title || '')}</p>
          <div class="form" style="margin-top:14px">
            ${pinFormFields(pin)}
            <button class="primary-btn" type="submit">Save pin</button>
            ${pin ? '<button class="ghost-btn danger" type="button" data-action="clear-pin">Unpin</button>' : ''}
            <button class="ghost-btn" type="button" data-action="close-modal">Cancel</button>
          </div>
        </form>
      </div>
    `
  }

  return ''
}

function render() {
  const locked = store.isLocked(selectedDate)
  app.innerHTML = `
    <div class="app-shell">
      <main class="screen active">
        ${screen === 'today' ? renderToday() : ''}
        ${screen === 'week' ? renderWeek() : ''}
        ${screen === 'history' ? renderHistory() : ''}
        ${screen === 'habits' ? renderActivities() : ''}
        ${screen === 'settings' ? renderSettings() : ''}
      </main>
      ${['today', 'habits'].includes(screen) && !locked ? '<button class="fab" data-action="open-add" aria-label="Add">+</button>' : ''}
      ${screen === 'settings' ? '<button class="fab" data-action="open-add-habit" aria-label="Add habit">+</button>' : ''}
      <nav class="tabbar tabs-5">
        <button class="tab ${screen === 'today' ? 'active' : ''}" data-screen="today">${icon('home')}Today</button>
        <button class="tab ${screen === 'week' ? 'active' : ''}" data-screen="week">${icon('week')}Week</button>
        <button class="tab ${screen === 'history' ? 'active' : ''}" data-screen="history">${icon('history')}History</button>
        <button class="tab ${screen === 'habits' ? 'active' : ''}" data-screen="habits">${icon('habit')}Activities</button>
        <button class="tab ${screen === 'settings' ? 'active' : ''}" data-screen="settings">${icon('settings')}Settings</button>
      </nav>
    </div>
    ${renderModal()}
    <div class="toast" id="toast"></div>
  `
  bindNote()
  bindSettings()
}

function bindNote() {
  const note = document.getElementById('day-note')
  if (!note) return
  note.addEventListener('input', () => {
    if (store.isLocked(selectedDate)) return
    store.setNote(selectedDate, note.value)
  })
}

function bindSettings() {
  const time = document.getElementById('lock-time')
  const auto = document.getElementById('auto-lock')
  if (time) {
    time.addEventListener('change', () => {
      store.setLockTime(time.value)
      toast(`Lock time set to ${time.value}`)
      render()
    })
  }
  if (auto) {
    auto.addEventListener('change', () => {
      store.setAutoLock(auto.checked)
      toast(auto.checked ? 'Auto-lock on' : 'Auto-lock off')
      render()
    })
  }
}

function toast(message) {
  const el = document.getElementById('toast')
  if (!el) return
  el.textContent = message
  el.classList.add('show')
  setTimeout(() => el.classList.remove('show'), 1800)
}

function escapeHtml(value) {
  return String(value || '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

function guardLocked() {
  if (store.isLocked(selectedDate)) {
    toast('This report is locked. Unlock it in Settings.')
    return true
  }
  return false
}

function openPinHabit(id) {
  const habit = store.findHabit(id)
  if (!habit) return
  modal = 'pin'
  modalPayload = { kind: 'habit', id, title: habit.name, pin: habit.pin }
}

function openPinTask(id) {
  const task = store.findTask(selectedDate, id)
  if (!task) return
  const template = task.sourcePinId ? store.findPinnedTask(task.sourcePinId) : null
  modal = 'pin'
  modalPayload = {
    kind: 'task',
    id,
    title: task.title,
    pin: template ? template.pin : null
  }
}

function openPinTemplate(id) {
  const task = store.findPinnedTask(id)
  if (!task) return
  modal = 'pin'
  modalPayload = { kind: 'template', id, title: task.title, pin: task.pin }
}

function collectPinFromForm(form) {
  const mode = form.querySelector('input[name="mode"]').value
  const until = form.querySelector('input[name="until"]')?.value || ''
  const weekdays = [...form.querySelectorAll('.weekday.on')].map((el) => Number(el.dataset.day))
  if (mode === 'until' && !until) {
    toast('Pick an until date')
    return null
  }
  if (mode === 'weekly' && !weekdays.length) {
    toast('Pick at least one weekday')
    return null
  }
  return { mode, until, weekdays }
}

document.addEventListener('click', (event) => {
  const tab = event.target.closest('[data-screen]')
  if (tab) {
    screen = tab.dataset.screen
    render()
    return
  }

  const actionEl = event.target.closest('[data-action]')
  if (!actionEl) return
  const action = actionEl.dataset.action

  if (action === 'close-modal') {
    if (event.target.classList.contains('modal-backdrop') || actionEl.classList.contains('ghost-btn')) {
      modal = null
      modalPayload = null
      render()
    }
    return
  }

  if (action === 'prev-day') shiftDate(-1)
  if (action === 'next-day') shiftDate(1)
  if (action === 'goto-settings') screen = 'settings'
  if (action === 'open-add-habit') {
    modal = 'habit'
    modalPayload = null
  }
  if (action === 'open-add-task') {
    if (guardLocked()) return
    modal = 'task'
    modalPayload = { category: 'mentally' }
  }
  if (action === 'open-add') {
    if (guardLocked()) return
    modal = 'choose'
    modalPayload = { category: 'mentally' }
  }
  if (action === 'toggle-edit') {
    editMode = !editMode
  }
  if (action === 'open-edit-habit') {
    const habit = store.findHabit(actionEl.dataset.id)
    if (!habit) return
    modal = 'edit-habit'
    modalPayload = { id: habit.id, name: habit.name, points: habit.points, category: habit.category }
  }
  if (action === 'open-edit-task') {
    if (guardLocked()) return
    const task = store.findTask(selectedDate, actionEl.dataset.id)
    if (!task) return
    modal = 'edit-task'
    modalPayload = {
      id: task.id,
      title: task.title,
      points: task.points,
      description: task.description,
      category: task.category
    }
  }
  if (action === 'rate-habit') {
    if (guardLocked()) return
    const current = store.habitRating(selectedDate, actionEl.dataset.id)
    const next = current === Number(actionEl.dataset.rating) ? 0 : Number(actionEl.dataset.rating)
    store.setHabitRating(selectedDate, actionEl.dataset.id, next)
  }
  if (action === 'submit-day') {
    store.submitDay(selectedDate)
    toast('Report submitted and locked')
  }
  if (action === 'unlock-day') {
    store.unlockDay(actionEl.dataset.date)
    toast('Report unlocked')
  }
  if (action === 'toggle-habit') {
    if (guardLocked()) return
    store.toggleHabit(selectedDate, actionEl.dataset.id)
  }
  if (action === 'toggle-task') {
    if (guardLocked()) return
    store.toggleTask(selectedDate, actionEl.dataset.id)
  }
  if (action === 'remove-task') {
    if (guardLocked()) return
    store.removeTask(selectedDate, actionEl.dataset.id)
  }
  if (action === 'remove-habit') store.removeHabit(actionEl.dataset.id)
  if (action === 'open-pin-habit') openPinHabit(actionEl.dataset.id)
  if (action === 'open-pin-task') {
    if (guardLocked()) return
    openPinTask(actionEl.dataset.id)
  }
  if (action === 'open-pin-template') openPinTemplate(actionEl.dataset.id)
  if (action === 'unpin-template') {
    store.unpinTaskTemplate(actionEl.dataset.id)
    toast('Task unpinned')
  }
  if (action === 'pick-date') {
    selectedDate = actionEl.dataset.date
    screen = 'today'
  }
  if (action === 'set-points') {
    const input = document.querySelector('input[name="points"]')
    if (input) input.value = actionEl.dataset.points
    document.querySelectorAll('.chip-row .chip[data-points]').forEach((chip) => chip.classList.remove('on'))
    actionEl.classList.add('on')
    return
  }
  if (action === 'set-category') {
    const form = actionEl.closest('form')
    const hidden = form.querySelector('input[name="category"]')
    if (hidden) hidden.value = actionEl.dataset.category
    form.querySelectorAll('.cat-row .chip').forEach((chip) => chip.classList.remove('on'))
    actionEl.classList.add('on')
    return
  }
  if (action === 'pin-mode') {
    const form = actionEl.closest('form')
    form.querySelector('input[name="mode"]').value = actionEl.dataset.mode
    form.querySelectorAll('.pin-modes .chip').forEach((chip) => chip.classList.remove('on'))
    actionEl.classList.add('on')
    form.querySelector('.pin-until').style.display = actionEl.dataset.mode === 'until' ? '' : 'none'
    form.querySelector('.pin-weekdays').style.display = actionEl.dataset.mode === 'weekly' ? '' : 'none'
    return
  }
  if (action === 'toggle-weekday') {
    actionEl.classList.toggle('on')
    return
  }
  if (action === 'clear-pin') {
    const form = actionEl.closest('form')
    const kind = form.dataset.kind
    const id = form.dataset.id
    if (kind === 'habit') store.unpinHabit(id)
    if (kind === 'task') {
      const task = store.findTask(selectedDate, id)
      if (task?.sourcePinId) store.unpinTaskTemplate(task.sourcePinId)
    }
    if (kind === 'template') store.unpinTaskTemplate(id)
    modal = null
    modalPayload = null
    toast('Unpinned')
    render()
    return
  }

  render()
})

document.addEventListener('submit', (event) => {
  const form = event.target.closest('[data-form]')
  if (!form) return
  event.preventDefault()
  const type = form.dataset.form

  if (type === 'habit' || type === 'task' || type === 'edit-habit' || type === 'edit-task') {
    const data = new FormData(form)
    const title = String(data.get('title') || '')
    const points = Number(data.get('points') || 0)
    const category = String(data.get('category') || 'mentally')
    const description = String(data.get('description') || '')
    if (!title.trim()) return
    if (type === 'habit') {
      store.addHabit(title, points, { category })
      toast('Habit added')
    } else if (type === 'task') {
      if (guardLocked()) return
      store.addTask(selectedDate, title, points, { description, category })
      toast('Task added')
    } else if (type === 'edit-habit') {
      store.updateHabit(form.dataset.id, { name: title, points, category })
      toast('Habit updated')
    } else {
      if (guardLocked()) return
      store.updateTask(selectedDate, form.dataset.id, { title, points, description, category })
      toast('Task updated')
    }
    modal = null
    modalPayload = null
    render()
    return
  }

  if (type === 'pin') {
    const pin = collectPinFromForm(form)
    if (!pin) return
    const kind = form.dataset.kind
    const id = form.dataset.id
    if (kind === 'habit') store.pinHabit(id, pin)
    if (kind === 'task') store.pinTask(selectedDate, id, pin)
    if (kind === 'template') store.updatePinnedTask(id, pin)
    modal = null
    modalPayload = null
    toast('Pin saved')
    render()
  }
})

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(() => {})
}

render()
