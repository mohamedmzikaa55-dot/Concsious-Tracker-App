CONSCIOUS TRACKER — ANDROID V3 PWA (Modular)

Files:
- index.html              App shell (HTML + modals)
- manifest.webmanifest    Android install metadata
- sw.js                   Offline cache + automatic updates
- Modules.md              Module architecture documentation
- icons/                  PWA icons
- css/
  - base.css              Reset, layout, utilities
  - components.css        UI components (buttons, inputs, cards, modals)
  - mobile.css            Mobile-first responsive enhancements
- js/
  - api.js                localStorage API layer
  - utils.js              Date and pillar utilities
  - stats.js              Stats UI helpers
  - modal.js              Modal utilities
  - sidebar.js            Sidebar state management
  - taskCard.js           Task card component
  - app.js                Main application controller
  - views/
    - overview.js         Overview dashboard
    - matrix.js           Eisenhower Matrix
    - kanban.js           Panel/Kanban board
    - timeline.js         Timeline view
    - pomodoro.js         Pomodoro timer
    - gallery.js          Gallery browser
    - habits.js           Habits tracker
    - routines.js         Routines manager
    - recommended.js      Recommended activities
    - planning.js         Daily planning
    - consciousness.js    Consciousness raising
    - alltasks.js         All Tasks list

IMPORTANT:
A service worker cannot be installed from file://. To install this as a PWA on Android,
serve this folder from HTTPS (or localhost for development). The app itself has no
runtime CDN dependency and works offline after its first successful load/cache.

Recommended deployment:
1. Upload this folder to any HTTPS static host.
2. Open the HTTPS URL in Chrome on Android.
3. Use the browser menu -> Add to Home screen / Install app.
4. Launch from the home-screen icon.

Updates:
The service worker checks for a new app version when the app starts online. A new
version is downloaded and activated through the in-app Update prompt.

Data:
The app's existing local browser storage/database logic is kept intact. Do not clear
site data if you want to preserve existing tracker data.

Features:
- Ratio Lock: Lock the task/habit weight ratio on the Overview dashboard
- All Tasks: Fixed tap stucking issue (modularized view, no duplicate navs)
- Sync: Service worker updated for modular file structure
- Mobile: Enhanced touch targets, slide-up modals, improved bottom nav
