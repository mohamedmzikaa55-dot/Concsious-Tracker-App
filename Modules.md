# Conscious Tracker v3 - Module Architecture

## Directory Structure

```
conscious-tracker-v3/
├── index.html                    # Main entry point (HTML shell + modals)
├── sw.js                         # Service Worker (offline cache + updates)
├── manifest.webmanifest          # PWA manifest
├── icons/                        # PWA icons
│   ├── icon-192.png
│   └── icon-512.png
├── css/
│   ├── base.css                  # Reset, layout, flex/grid utilities, pillar colors, responsive breakpoints
│   ├── components.css            # Buttons, inputs, modals, cards, progress rings, toasts, ratio lock, PWA UI
│   └── mobile.css                # Mobile-first enhancements: bottom nav, sidebar, touch targets, slide-up modals
├── js/
│   ├── api.js                    # localStorage API layer (CRUD for tasks, habits, routines, pomodoro, etc.)
│   ├── utils.js                  # DateUtils + PointsUtils (date formatting, pillar colors, rating helpers)
│   ├── stats.js                  # Stats UI helpers (progress rings, pillar bars, stat cards)
│   ├── modal.js                  # Modal utility (recurrence toggles, day checkboxes)
│   ├── sidebar.js                # Sidebar state management (active view, progress ring, mobile nav)
│   ├── taskCard.js               # Task card component (create, compact, drag/drop, edit, delete)
│   ├── app.js                    # Main controller (view routing, form handlers, export/import, boot)
│   └── views/
│       ├── overview.js           # Overview dashboard (daily rating, ratio lock, pillar breakdown)
│       ├── matrix.js             # Eisenhower Matrix (4-quadrant drag-and-drop)
│       ├── kanban.js             # Kanban/Panel board (To Do / In Progress / Done)
│       ├── timeline.js           # Timeline with time blocks
│       ├── pomodoro.js           # Pomodoro timer with settings and task linking
│       ├── gallery.js            # Gallery (week/month/year browsing)
│       ├── habits.js             # Habits tracker (quick score, custom score, stats)
│       ├── routines.js           # Routines manager (add/edit/log)
│       ├── recommended.js        # Recommended activities (quick add, suggestions)
│       ├── planning.js           # Daily planning (upcoming tasks, overdue)
│       ├── consciousness.js      # Consciousness raising (task significance toggle)
│       └── alltasks.js           # All Tasks list (filter, summary stats)
└── Modules.md                    # This file
```

## Module Dependency Order

Scripts must be loaded in this order:

1. `js/api.js` - Data layer (no dependencies)
2. `js/utils.js` - DateUtils, PointsUtils (no dependencies)
3. `js/stats.js` - Stats helpers (depends on PointsUtils)
4. `js/modal.js` - Modal utilities (no dependencies)
5. `js/sidebar.js` - Sidebar controller (depends on PointsUtils)
6. `js/taskCard.js` - Task card component (depends on api, PointsUtils, Modal)
7. `js/views/overview.js` - Overview (depends on api, Stats, TaskCard, PointsUtils, Sidebar, DateUtils)
8. `js/views/matrix.js` - Matrix (depends on api, TaskCard, PointsUtils, DateUtils)
9. `js/views/kanban.js` - Kanban (depends on api, TaskCard, DateUtils)
10. `js/views/timeline.js` - Timeline (depends on api, PointsUtils, DateUtils)
11. `js/views/pomodoro.js` - Pomodoro (depends on api, DateUtils, PointsUtils)
12. `js/views/gallery.js` - Gallery (depends on api, Stats, DateUtils, PointsUtils)
13. `js/views/habits.js` - Habits (depends on api, Stats, PointsUtils, DateUtils)
14. `js/views/routines.js` - Routines (depends on api, Stats, PointsUtils, DateUtils)
15. `js/views/recommended.js` - Recommended (depends on api, PointsUtils)
16. `js/views/planning.js` - Planning (depends on api, TaskCard, DateUtils)
17. `js/views/consciousness.js` - Consciousness (depends on api, Stats, PointsUtils, DateUtils)
18. `js/views/alltasks.js` - All Tasks (depends on api, TaskCard)
19. `js/app.js` - Main controller (depends on all above)

## CSS Load Order

1. `css/base.css` - Foundation styles
2. `css/components.css` - UI components
3. `css/mobile.css` - Mobile-specific overrides

## Key Features

### Ratio Lock (Overview)
- Locks the task/habit weight ratio on the Overview dashboard
- Persisted in localStorage via `api.getRatioLock()` / `api.setRatioLock()`
- Toggle with the lock/unlock button in the Overview weight slider

### All Tasks Fix
- Each view is now a self-contained module with its own render function
- AllTasks view uses `AllTasks.tasksCache` instead of global `allTasksCache`
- Filter changes re-render only the task list, not the entire view
- Removed duplicate bottom nav that caused tap conflicts

### Sync Fix
- Service worker updated with new file paths for cache-first strategy
- All JS/CSS modules are in the APP_SHELL cache list
- Network-first for navigation, cache-first for static assets

### Mobile Enhancements
- Slide-up modals on mobile with safe-area support
- Improved bottom nav with center "+" add button
- Touch targets >= 44px for all interactive elements
- Horizontal scroll for Kanban on small screens
- Score grid layout for quick habit scoring
- Disabled double-tap zoom on buttons

### Performance
- CSS is split into 3 focused files (base/components/mobile)
- JS is split into 18 focused modules instead of one 367-line monolith
- Views only re-render what's needed
- `contain: layout paint` on cards for paint isolation
- Reduced-motion media query respected
