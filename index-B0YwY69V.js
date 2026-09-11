(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function i(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(a){if(a.ep)return;a.ep=!0;const s=i(a);fetch(a.href,s)}})();const V="daily-report-v2",M=[{id:"mentally",label:"Mentally"},{id:"psychology",label:"Psychology"},{id:"physically",label:"Physically"},{id:"spiritually",label:"Spiritually"}],K=M.map(t=>t.id),j=[{id:"h1",name:"Wake up early",points:10,icon:"sunrise",category:"physically",pin:{mode:"forever"}},{id:"h2",name:"Drink water",points:5,icon:"drop",category:"physically",pin:{mode:"forever"}},{id:"h3",name:"Exercise",points:15,icon:"bolt",category:"physically",pin:{mode:"forever"}},{id:"h4",name:"Read 20 minutes",points:10,icon:"book",category:"mentally",pin:{mode:"forever"}},{id:"h5",name:"No junk food",points:10,icon:"leaf",category:"physically",pin:{mode:"forever"}}],I={lockTime:"21:00",autoLock:!0},Y=[{value:1,label:"Mon"},{value:2,label:"Tue"},{value:3,label:"Wed"},{value:4,label:"Thu"},{value:5,label:"Fri"},{value:6,label:"Sat"},{value:0,label:"Sun"}];function C(t=new Date){const e=t.getFullYear(),i=String(t.getMonth()+1).padStart(2,"0"),n=String(t.getDate()).padStart(2,"0");return`${e}-${i}-${n}`}function J(){return{habits:{},habitRatings:{},tasks:[],note:"",locked:!1,lockOverride:null,submittedAt:null}}function S(t){return K.includes(t)?t:"mentally"}function tt(t){var e;return((e=M.find(i=>i.id===t))==null?void 0:e.label)||"Mentally"}function U(t){return{...t,description:t.description||"",category:S(t.category)}}function P(t){return!t||!t.mode?null:{mode:t.mode,until:t.until||"",weekdays:Array.isArray(t.weekdays)?t.weekdays.map(Number):[]}}function et(t,e){const i=`${t} ${e}`.toLowerCase();return i.includes("read")||i.includes("study")||i.includes("learn")?"mentally":i.includes("meditat")||i.includes("pray")||i.includes("journal")?"spiritually":i.includes("mood")||i.includes("calm")||i.includes("therapy")?"psychology":"physically"}function it(t){const e=(Array.isArray(t.habits)&&t.habits.length?t.habits:j).map(n=>({...n,category:S(n.category||et(n.id,n.name)),pin:P(n.pin)})),i={};return Object.entries(t.days||{}).forEach(([n,a])=>{i[n]={...J(),habits:a.habits||{},habitRatings:a.habitRatings||{},tasks:Array.isArray(a.tasks)?a.tasks.map(U):[],note:a.note||"",locked:!!a.locked,lockOverride:a.lockOverride||(a.locked?"locked":null),submittedAt:a.submittedAt||null}}),{habits:e,pinnedTasks:Array.isArray(t.pinnedTasks)?t.pinnedTasks.map(n=>({...U(n),pin:P(n.pin)})):[],days:i,settings:{lockTime:t.settings&&t.settings.lockTime||I.lockTime,autoLock:!t.settings||t.settings.autoLock!==!1}}}function at(){try{const t=localStorage.getItem(V)||localStorage.getItem("daily-report-v1");return t?it(JSON.parse(t)):{habits:j,pinnedTasks:[],days:{},settings:{...I}}}catch{return{habits:j,pinnedTasks:[],days:{},settings:{...I}}}}let l=at();function b(){try{localStorage.setItem(V,JSON.stringify(l))}catch{}}function nt(t){return new Date(`${t}T00:00:00`).getDay()}function O(t){const e=new Date(`${t}T00:00:00`);return e.setDate(e.getDate()-1),C(e)}function F(t,e){return!t||t.mode==="forever"?!0:t.mode==="until"?!!t.until&&e<=t.until:t.mode==="weekly"?Array.isArray(t.weekdays)&&t.weekdays.includes(nt(e)):!0}function E(t){if(!t)return"Not pinned";if(t.mode==="forever")return"Pinned forever";if(t.mode==="until")return t.until?`Pinned until ${t.until}`:"Pinned until a date";if(t.mode==="weekly"){const e=Array.isArray(t.weekdays)?t.weekdays:[],i=Y.filter(n=>e.includes(n.value)).map(n=>n.label);return i.length?`Weekly: ${i.join(", ")}`:"Weekly (no days)"}return"Pinned"}function z(t){const[e,i]=(l.settings.lockTime||"21:00").split(":").map(Number),n=new Date(`${t}T00:00:00`);return n.setHours(e||0,i||0,0,0),n}function G(t){const e=$(t);return e.lockOverride==="unlocked"?!1:e.lockOverride==="locked"||e.locked?!0:l.settings.autoLock&&Date.now()>=z(t).getTime()?(e.locked=!0,e.lockOverride="locked",e.submittedAt=e.submittedAt||z(t).toISOString(),b(),!0):!1}function $(t){return l.days[t]||(l.days[t]=J()),l.days[t]}function st(t){const e=$(t);let i=!1;return l.pinnedTasks.forEach(n=>{F(n.pin,t)&&(e.tasks.some(a=>a.sourcePinId===n.id)||(e.tasks.push({id:`ptask-${n.id}-${t}`,title:n.title,points:n.points,description:n.description||"",category:S(n.category),done:!1,sourcePinId:n.id}),i=!0))}),i&&b(),e}function D(t){return!o.isLocked(t)}const o={todayKey:C,getSettings(){return l.settings},setLockTime(t){l.settings.lockTime=t||"21:00",b()},setAutoLock(t){l.settings.autoLock=!!t,b()},getHabits(t){return l.habits.filter(i=>t?F(i.pin,t):!0).sort((i,n)=>+!!n.pin-+!!i.pin)},getAllHabits(){return l.habits},getPinnedTasks(){return l.pinnedTasks},getDay(t){return G(t),st(t)},isLocked(t){return G(t)},submitDay(t){const e=$(t);e.locked=!0,e.lockOverride="locked",e.submittedAt=new Date().toISOString(),b()},unlockDay(t){const e=$(t);e.locked=!1,e.lockOverride="unlocked",b()},lockDay(t){this.submitDay(t)},lockedReports(){return Object.keys(l.days).sort().reverse().filter(t=>this.isLocked(t)).map(t=>({date:t,submittedAt:l.days[t].submittedAt,...this.scoreFor(t)}))},habitRating(t,e){const i=l.days[t];return i?i.habitRatings&&i.habitRatings[e]!=null?Number(i.habitRatings[e])||0:i.habits&&i.habits[e]?5:0:0},setHabitRating(t,e,i){if(!D(t))return;const n=$(t),a=Math.max(0,Math.min(5,Number(i)||0));n.habitRatings[e]=a,n.habits[e]=a>0,b()},toggleHabit(t,e){if(!D(t))return;const i=this.habitRating(t,e)>0?0:5;this.setHabitRating(t,e,i)},addTask(t,e,i,n={}){if(!D(t))return;$(t).tasks.push({id:`t${Date.now()}`,title:e.trim(),points:Number(i)||5,description:String(n.description||"").trim(),category:S(n.category),done:!1}),b()},toggleTask(t,e){if(!D(t))return;const n=$(t).tasks.find(a=>a.id===e);n&&(n.done=!n.done,b())},removeTask(t,e){if(!D(t))return;const i=$(t);i.tasks=i.tasks.filter(n=>n.id!==e),b()},setNote(t,e){D(t)&&($(t).note=e,b())},addHabit(t,e,i={}){l.habits.push({id:`h${Date.now()}`,name:t.trim(),points:Number(e)||10,icon:"star",category:S(i.category||"physically"),pin:{mode:"forever",until:"",weekdays:[]}}),b()},updateHabit(t,e){const i=l.habits.find(n=>n.id===t);i&&(e.name!=null&&(i.name=String(e.name).trim()||i.name),e.points!=null&&(i.points=Number(e.points)||i.points),e.category!=null&&(i.category=S(e.category)),b())},updateTask(t,e,i){if(!D(t))return;const a=$(t).tasks.find(s=>s.id===e);if(a){if(i.title!=null&&(a.title=String(i.title).trim()||a.title),i.points!=null&&(a.points=Number(i.points)||a.points),i.description!=null&&(a.description=String(i.description).trim()),i.category!=null&&(a.category=S(i.category)),a.sourcePinId){const s=l.pinnedTasks.find(d=>d.id===a.sourcePinId);s&&(s.title=a.title,s.points=a.points,s.description=a.description,s.category=a.category)}b()}},habitStreak(t,e){const i=l.habits.find(d=>d.id===t);if(!i)return 0;let n=e,a=0;this.habitRating(n,t)===0&&(n=O(n));let s=0;for(;a<400;){if(a+=1,!F(i.pin,n)){n=O(n);continue}if(this.habitRating(n,t)>0){s+=1,n=O(n);continue}break}return s},categoryBreakdown(t){const e=this.getDay(t),i=this.getHabits(t);return M.map(n=>{const a=i.filter(m=>S(m.category)===n.id),s=e.tasks.filter(m=>S(m.category)===n.id),d=a.reduce((m,w)=>{const Z=this.habitRating(t,w.id);return m+Math.round(w.points*Z/5)},0),c=a.reduce((m,w)=>m+w.points,0),y=s.reduce((m,w)=>m+(w.done?w.points:0),0),p=s.reduce((m,w)=>m+w.points,0),v=a.map(m=>this.habitRating(t,m.id)),R=v.length?Math.round(v.reduce((m,w)=>m+w,0)/v.length*10)/10:0;return{...n,habits:a,tasks:s,earned:d+y,max:c+p,habitAvg:R,completed:a.filter(m=>this.habitRating(t,m.id)>0).length+s.filter(m=>m.done).length,total:a.length+s.length}})},removeHabit(t){l.habits=l.habits.filter(e=>e.id!==t),b()},pinHabit(t,e){const i=l.habits.find(n=>n.id===t);i&&(i.pin=P(e),b())},unpinHabit(t){const e=l.habits.find(i=>i.id===t);e&&(e.pin=null,b())},pinTask(t,e,i){const a=$(t).tasks.find(d=>d.id===e);if(!a)return;if(a.sourcePinId){const d=l.pinnedTasks.find(c=>c.id===a.sourcePinId);if(d){d.pin=P(i),b();return}}const s=`p${Date.now()}`;l.pinnedTasks.push({id:s,title:a.title,points:a.points,description:a.description||"",category:S(a.category),pin:P(i)}),a.sourcePinId=s,b()},unpinTaskTemplate(t){l.pinnedTasks=l.pinnedTasks.filter(e=>e.id!==t),b()},updatePinnedTask(t,e){const i=l.pinnedTasks.find(n=>n.id===t);i&&(i.pin=P(e),b())},findHabit(t){return l.habits.find(e=>e.id===t)||null},findTask(t,e){return $(t).tasks.find(i=>i.id===e)||null},findPinnedTask(t){return l.pinnedTasks.find(e=>e.id===t)||null},scoreFor(t){const e=this.getDay(t),i=this.getHabits(t),n=i.reduce((p,v)=>{const R=this.habitRating(t,v.id);return p+Math.round(v.points*R/5)},0),a=e.tasks.reduce((p,v)=>p+(v.done?v.points:0),0),s=i.reduce((p,v)=>p+v.points,0),d=e.tasks.reduce((p,v)=>p+v.points,0),c=n+a,y=s+d;return{earned:c,max:y,habitScore:n,taskScore:a,completedHabits:i.filter(p=>this.habitRating(t,p.id)>0).length,habitAvg:i.length?Math.round(i.reduce((p,v)=>p+this.habitRating(t,v.id),0)/i.length*10)/10:0,totalHabits:i.length,completedTasks:e.tasks.filter(p=>p.done).length,totalTasks:e.tasks.length,percent:y?Math.round(c/y*100):0,locked:this.isLocked(t),submittedAt:e.submittedAt}},history(t=14){return Object.keys(l.days).sort().reverse().slice(0,t).map(i=>({date:i,...this.scoreFor(i),note:l.days[i].note,locked:this.isLocked(i),submittedAt:l.days[i].submittedAt}))},week(t){const e=new Date(t),i=e.getDay(),n=i===0?-6:1-i;return e.setDate(e.getDate()+n),e.setHours(0,0,0,0),Array.from({length:7},(a,s)=>{const d=new Date(e);d.setDate(e.getDate()+s);const c=C(d);return{date:c,label:d.toLocaleDateString(void 0,{weekday:"short"}),locked:this.isLocked(c),...this.scoreFor(c)}})}};function Q(t){return t>=90?"Excellent":t>=75?"Great day":t>=50?"Keep going":t>0?"Started":"No score yet"}function x(t){return new Date(`${t}T00:00:00`).toLocaleDateString(void 0,{weekday:"long",month:"short",day:"numeric"})}function X(t){return t?new Date(t).toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"}):""}function ot(t){return t>=5?"Excellent":t>=4?"Great":t>=3?"Good":t>=2?"Fair":t>=1?"Low":"Not rated"}const B=document.getElementById("app");let r=o.todayKey(),h="today",u=null,f=null,H=!1;function _(t){const e=new Date(`${r}T00:00:00`);e.setDate(e.getDate()+t),r=o.todayKey(e)}function A(t){return{home:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1z"/></svg>',week:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>',history:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 8v5l3 2"/><circle cx="12" cy="12" r="9"/></svg>',settings:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H8a1.7 1.7 0 0 0 1-1.5V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V8c.3.7.9 1.2 1.6 1.3H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1.7z"/></svg>',pin:'<svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><path d="M14.5 3.5 12 9l5 3.2-8.7 8.7-1.4-1.4L15.2 12 12 9.8l2.5-5.5 2.1.7-2.1-1.5z"/></svg>',habit:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7h16M4 12h10M4 17h13"/></svg>'}[t]}function dt(t,e,i){return`
    <div class="stars" data-habit="${t}">
      ${[1,2,3,4,5].map(n=>`
            <button type="button" class="star ${n<=e?"on":""}" data-action="rate-habit" data-id="${t}" data-rating="${n}" ${i?"disabled":""} aria-label="${n} star">★</button>
          `).join("")}
    </div>
  `}function N(t){return`<span class="cat-badge cat-${t}">${tt(t)}</span>`}function W(t){return`<span class="streak-badge">${t} day streak</span>`}function q(){return`<button class="ghost-btn compact ${H?"on":""}" data-action="toggle-edit">${H?"Done":"Edit Mode"}</button>`}function ct(t){return t?'<span class="lock-badge">Locked</span>':'<span class="open-badge">Open</span>'}function rt(){const t=o.getDay(r),e=o.getHabits(r),i=o.scoreFor(r),n=Q(i.percent),a=r===o.todayKey(),s=o.isLocked(r),d=o.getSettings();return`
    <div class="topbar">
      <div>
        <p class="kicker">${a?"Today":"Daily report"}</p>
        <h1>${x(r)}</h1>
      </div>
      <div class="date-nav">
        <button class="icon-btn" data-action="prev-day" aria-label="Previous day">‹</button>
        <button class="icon-btn" data-action="next-day" aria-label="Next day">›</button>
      </div>
    </div>

    <section class="score-hero ${s?"is-locked":""}">
      <div class="score-row">
        <div>
          <div class="score-value">${i.earned}</div>
          <div class="score-unit">of ${i.max||0} points</div>
        </div>
        <div class="hero-side">
          ${ct(s)}
          <div class="grade-pill">${n}</div>
        </div>
      </div>
      <div class="progress-track"><div class="progress-fill" style="width:${i.percent}%"></div></div>
      <div class="stats-grid">
        <div class="stat"><span class="muted">Habits</span><b>${i.completedHabits}/${i.totalHabits}</b></div>
        <div class="stat"><span class="muted">Tasks</span><b>${i.completedTasks}/${i.totalTasks}</b></div>
        <div class="stat"><span class="muted">Score</span><b>${i.percent}%</b></div>
      </div>
      <p class="lock-hint">
        ${s?`Submitted${t.submittedAt?` at ${X(t.submittedAt)}`:""}. Unlock in Settings to edit.`:`Auto-locks at ${d.lockTime}. Submit when the day is done.`}
      </p>
      ${s?'<button class="ghost-btn full" data-action="goto-settings">Unlock in Settings</button>':'<button class="primary-btn full" data-action="submit-day">Submit and lock report</button>'}
    </section>

    <section class="section">
      <div class="section-head">
        <h2>Habits</h2>
        <div class="head-actions">
          ${q()}
          <span class="points">+${i.habitScore} pts</span>
        </div>
      </div>
      <div class="list">
        ${e.length?e.map(c=>{const y=o.habitRating(r,c.id),p=y>0,v=o.habitStreak(c.id,r);return`
                    <article class="item-card ${p?"done":""} ${s?"is-locked":""}">
                      <button class="check" data-action="toggle-habit" data-id="${c.id}" ${s?"disabled":""}>✓</button>
                      <div>
                        <div class="item-title">${g(c.name)}</div>
                        <div class="item-meta">${N(c.category)} ${c.pin?E(c.pin):"Not pinned"} · ${y?`${y}/5`:"Not rated"}</div>
                        <div class="item-meta">${W(v)}</div>
                      </div>
                      <div class="item-side">
                        <div class="points">+${c.points}</div>
                        <div class="mini-actions">
                          ${H?`<button class="mini-btn on" data-action="open-edit-habit" data-id="${c.id}" ${s?"disabled":""}>Edit</button>`:""}
                          <button class="mini-btn ${c.pin?"on":""}" data-action="open-pin-habit" data-id="${c.id}" ${s?"disabled":""} title="Pin habit">${A("pin")}</button>
                        </div>
                      </div>
                    </article>
                  `}).join(""):'<div class="empty">No habits for this day. Tap + to add one.</div>'}
      </div>
    </section>

    <section class="section">
      <div class="section-head">
        <h2>Tasks</h2>
        <div class="head-actions">
          ${q()}
          <span class="points">+${i.taskScore} pts</span>
        </div>
      </div>
      <div class="list">
        ${t.tasks.length?t.tasks.map(c=>{const y=!!c.sourcePinId,p=y?o.findPinnedTask(c.sourcePinId):null;return`
                    <article class="item-card ${c.done?"done":""} ${s?"is-locked":""}">
                      <button class="check" data-action="toggle-task" data-id="${c.id}" ${s?"disabled":""}>✓</button>
                      <div>
                        <div class="item-title">${g(c.title)}</div>
                        <div class="item-meta">${N(c.category)} ${p?E(p.pin):"One-time task"}</div>
                        ${c.description?`<p class="item-desc">${g(c.description)}</p>`:""}
                      </div>
                      <div class="item-side">
                        <div class="points">+${c.points}</div>
                        <div class="mini-actions">
                          ${H?`<button class="mini-btn on" data-action="open-edit-task" data-id="${c.id}" ${s?"disabled":""}>Edit</button>`:""}
                          <button class="mini-btn ${y?"on":""}" data-action="open-pin-task" data-id="${c.id}" ${s?"disabled":""} title="Pin task">${A("pin")}</button>
                          <button class="mini-btn" data-action="remove-task" data-id="${c.id}" ${s?"disabled":""}>✕</button>
                        </div>
                      </div>
                    </article>
                  `}).join(""):'<div class="empty">No tasks yet. Tap + to add one.</div>'}
      </div>
    </section>

    <section class="section">
      <div class="section-head"><h2>Day note</h2></div>
      <textarea id="day-note" placeholder="How did today go?" ${s?"disabled":""}>${g(t.note)}</textarea>
    </section>
  `}function lt(){const t=o.week(new Date(`${r}T00:00:00`)),e=t.reduce((n,a)=>n+a.earned,0),i=Math.round(e/7);return`
    <div class="topbar">
      <div>
        <p class="kicker">This week</p>
        <h1>Weekly score</h1>
      </div>
    </div>
    <section class="score-hero">
      <div class="score-row">
        <div>
          <div class="score-value">${e}</div>
          <div class="score-unit">points this week</div>
        </div>
        <div class="grade-pill">Avg ${i} pts</div>
      </div>
      <div class="week-days">
        ${t.map(n=>`
              <button class="day-cell ${n.date===r?"active":""} ${n.earned>0?"done":""}" data-action="pick-date" data-date="${n.date}">
                <span>${n.label.slice(0,2)}</span>
                <b>${n.earned}</b>
                ${n.locked?'<i class="dot-lock"></i>':""}
              </button>
            `).join("")}
      </div>
    </section>
    <section class="section week-grid">
      ${t.map(n=>`
            <article class="week-card">
              <div class="section-head">
                <div>
                  <div class="item-title">${x(n.date)}</div>
                  <div class="item-meta">${n.locked?"Locked":"Open"} · ${n.completedHabits} habits · ${n.completedTasks} tasks</div>
                </div>
                <div class="points">${n.earned} pts</div>
              </div>
              <div class="bar"><span style="width:${n.percent}%"></span></div>
            </article>
          `).join("")}
    </section>
  `}function ut(){const t=o.history(21);return`
    <div class="topbar">
      <div>
        <p class="kicker">Archive</p>
        <h1>Past reports</h1>
      </div>
    </div>
    <div class="history-list">
      ${t.length?t.map(e=>`
                  <article class="history-card">
                    <div class="section-head">
                      <div>
                        <div class="item-title">${x(e.date)}</div>
                        <div class="item-meta">${e.locked?"Locked":"Open"} · ${Q(e.percent)} · ${e.percent}%</div>
                      </div>
                      <button class="ghost-btn compact" data-action="pick-date" data-date="${e.date}">Open</button>
                    </div>
                    <div class="bar"><span style="width:${e.percent}%"></span></div>
                    ${e.note?`<p class="note" style="margin-top:10px">${g(e.note)}</p>`:""}
                  </article>
                `).join(""):'<div class="empty">Complete today to start your history.</div>'}
    </div>
  `}function pt(){const t=o.isLocked(r),e=o.categoryBreakdown(r),i=e.reduce((a,s)=>a+s.earned,0),n=e.reduce((a,s)=>a+s.max,0);return`
    <div class="topbar">
      <div>
        <p class="kicker">Activities</p>
        <h1>By category</h1>
      </div>
      <div class="date-nav">
        ${q()}
        <button class="icon-btn" data-action="prev-day" aria-label="Previous day">‹</button>
        <button class="icon-btn" data-action="next-day" aria-label="Next day">›</button>
      </div>
    </div>
    <section class="score-hero">
      <div class="score-row">
        <div>
          <div class="score-value">${i}</div>
          <div class="score-unit">of ${n||0} category points</div>
        </div>
        <div class="grade-pill">${x(r)}</div>
      </div>
      <p class="lock-hint">Habits and tasks grouped by Mentally, Psychology, Physically, and Spiritually.</p>
    </section>
    ${e.map(a=>{const s=a.max?Math.round(a.earned/a.max*100):0;return`
          <section class="section">
            <article class="manage-card cat-card cat-${a.id}">
              <div class="section-head">
                <div>
                  <div class="item-title">${a.label}</div>
                  <div class="item-meta">${a.completed}/${a.total} done · rating ${a.habitAvg||0}/5</div>
                </div>
                <div class="points">${a.earned}/${a.max} pts</div>
              </div>
              <div class="bar"><span style="width:${s}%"></span></div>
            </article>
            <div class="list" style="margin-top:10px">
              ${a.habits.length||a.tasks.length?`
                    ${a.habits.map(d=>{const c=o.habitRating(r,d.id),y=o.habitStreak(d.id,r),p=Math.round(d.points*c/5);return`
                          <article class="item-card ${c?"done":""} ${t?"is-locked":""}">
                            <button class="check" data-action="toggle-habit" data-id="${d.id}" ${t?"disabled":""}>✓</button>
                            <div>
                              <div class="item-title">${g(d.name)}</div>
                              <div class="item-meta">Habit · ${c?`${c}/5 ${ot(c)}`:"Not rated"} · ${W(y)}</div>
                              ${dt(d.id,c,t)}
                            </div>
                            <div class="item-side">
                              <div class="points">${p}/${d.points}</div>
                              ${H?`<button class="mini-btn on" data-action="open-edit-habit" data-id="${d.id}" ${t?"disabled":""}>Edit</button>`:""}
                            </div>
                          </article>
                        `}).join("")}
                    ${a.tasks.map(d=>`
                          <article class="item-card ${d.done?"done":""} ${t?"is-locked":""}">
                            <button class="check" data-action="toggle-task" data-id="${d.id}" ${t?"disabled":""}>✓</button>
                            <div>
                              <div class="item-title">${g(d.title)}</div>
                              <div class="item-meta">Task${d.description?` · ${g(d.description)}`:""}</div>
                            </div>
                            <div class="item-side">
                              <div class="points">+${d.points}</div>
                              ${H?`<button class="mini-btn on" data-action="open-edit-task" data-id="${d.id}" ${t?"disabled":""}>Edit</button>`:""}
                            </div>
                          </article>
                        `).join("")}
                  `:'<div class="empty">No activities in this category.</div>'}
            </div>
          </section>
        `}).join("")}
  `}function bt(){const t=o.getSettings(),e=o.getAllHabits(),i=o.getPinnedTasks(),n=o.lockedReports();return`
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
        <input id="lock-time" type="time" value="${t.lockTime}" />
      </label>
      <label class="switch-row">
        <span>Auto-lock after that time</span>
        <input id="auto-lock" type="checkbox" ${t.autoLock?"checked":""} />
      </label>
      <p class="item-meta">Today still editable until ${t.lockTime}. After that, the day locks automatically.</p>
    </section>

    <section class="section">
      <div class="section-head"><h2>Locked reports</h2></div>
      <div class="list">
        ${n.length?n.map(a=>`
                    <article class="manage-card">
                      <div class="section-head">
                        <div>
                          <div class="item-title">${x(a.date)}</div>
                          <div class="item-meta">${a.submittedAt?`Submitted ${X(a.submittedAt)}`:"Locked"} · ${a.earned} pts</div>
                        </div>
                        <button class="ghost-btn compact" data-action="unlock-day" data-date="${a.date}">Unlock</button>
                      </div>
                    </article>
                  `).join(""):'<div class="empty">No locked reports yet.</div>'}
      </div>
    </section>

    <section class="section">
      <div class="section-head">
        <h2>Habits</h2>
        <button class="ghost-btn compact" data-action="open-add-habit">Add</button>
      </div>
      <p class="muted tight">Pin a habit forever, until a date, or weekly on specific days.</p>
      <div class="habit-manage">
        ${e.length?e.map(a=>`
                    <article class="manage-card">
                      <div class="section-head">
                        <div>
                          <div class="item-title">${g(a.name)}</div>
                          <div class="item-meta">${N(a.category)} · ${a.pin?E(a.pin):"Not pinned"} · +${a.points} pts · ${W(o.habitStreak(a.id,r))}</div>
                        </div>
                        <div class="mini-actions">
                          <button class="mini-btn ${a.pin?"on":""}" data-action="open-pin-habit" data-id="${a.id}">${A("pin")}</button>
                          <button class="mini-btn" data-action="remove-habit" data-id="${a.id}">✕</button>
                        </div>
                      </div>
                    </article>
                  `).join(""):'<div class="empty">No habits yet.</div>'}
      </div>
    </section>

    <section class="section">
      <div class="section-head"><h2>Pinned tasks</h2></div>
      <p class="muted tight">Pinned tasks appear automatically on matching days.</p>
      <div class="habit-manage">
        ${i.length?i.map(a=>`
                    <article class="manage-card">
                      <div class="section-head">
                        <div>
                          <div class="item-title">${g(a.title)}</div>
                          <div class="item-meta">${N(a.category)} · ${E(a.pin)} · +${a.points} pts</div>
                          ${a.description?`<p class="item-desc">${g(a.description)}</p>`:""}
                        </div>
                        <div class="mini-actions">
                          <button class="mini-btn on" data-action="open-pin-template" data-id="${a.id}">${A("pin")}</button>
                          <button class="mini-btn" data-action="unpin-template" data-id="${a.id}">✕</button>
                        </div>
                      </div>
                    </article>
                  `).join(""):'<div class="empty">Pin a task from Today to repeat it.</div>'}
      </div>
    </section>
  `}function mt(t){const e=(t==null?void 0:t.mode)||"forever",i=(t==null?void 0:t.until)||"",n=(t==null?void 0:t.weekdays)||[];return`
    <div class="chip-row pin-modes">
      <button type="button" class="chip ${e==="forever"?"on":""}" data-action="pin-mode" data-mode="forever">Forever</button>
      <button type="button" class="chip ${e==="until"?"on":""}" data-action="pin-mode" data-mode="until">Until date</button>
      <button type="button" class="chip ${e==="weekly"?"on":""}" data-action="pin-mode" data-mode="weekly">Weekly</button>
    </div>
    <input type="hidden" name="mode" value="${e}" />
    <label class="pin-until" style="${e==="until"?"":"display:none"}">
      Until
      <input name="until" type="date" value="${i}" />
    </label>
    <div class="pin-weekdays" style="${e==="weekly"?"":"display:none"}">
      <p class="item-meta">Repeat every</p>
      <div class="chip-row">
        ${Y.map(a=>`
            <button type="button" class="chip weekday ${n.includes(a.value)?"on":""}" data-action="toggle-weekday" data-day="${a.value}">
              ${a.label}
            </button>
          `).join("")}
      </div>
    </div>
  `}function vt(){if(!u)return"";if(u==="choose")return`
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
    `;if(u==="habit"||u==="task"||u==="edit-habit"||u==="edit-task"){const t=u==="habit"||u==="edit-habit",e=u.startsWith("edit-"),i=f||{},n=i.category||(t?"physically":"mentally");return`
      <div class="modal-backdrop open" data-action="close-modal">
        <form class="sheet" data-form="${u}" data-id="${i.id||""}">
          <div class="handle"></div>
          <h2>${e?"Edit":"New"} ${t?"habit":"task"}</h2>
          <div class="form" style="margin-top:14px">
            <label>
              ${t?"Habit name":"Task name"}
              <input name="title" required maxlength="60" value="${g(i.title||i.name||"")}" placeholder="${t?"Meditate":"Finish report"}" />
            </label>
            ${t?"":`
                  <label>
                    Description (optional)
                    <textarea name="description" maxlength="240" placeholder="Why this matters, extra notes...">${g(i.description||"")}</textarea>
                  </label>
                `}
            <div>
              <p class="item-meta">Category</p>
              <div class="chip-row cat-row">
                ${M.map(a=>`
                    <button type="button" class="chip ${n===a.id?"on":""}" data-action="set-category" data-category="${a.id}">${a.label}</button>
                  `).join("")}
              </div>
              <input type="hidden" name="category" value="${n}" />
            </div>
            <label>
              Points
              <input name="points" type="number" min="1" max="100" value="${i.points||(t?10:5)}" />
            </label>
            <div class="chip-row">
              ${(t?[5,10,15,20]:[5,10,15,25]).map(a=>`<button type="button" class="chip" data-action="set-points" data-points="${a}">${a} pts</button>`).join("")}
            </div>
            <button class="primary-btn" type="submit">Save ${t?"habit":"task"}</button>
            <button class="ghost-btn" type="button" data-action="close-modal">Cancel</button>
          </div>
        </form>
      </div>
    `}if(u==="pin"){const{kind:t,id:e,title:i,pin:n}=f||{};return`
      <div class="modal-backdrop open" data-action="close-modal">
        <form class="sheet" data-form="pin" data-kind="${t}" data-id="${e}">
          <div class="handle"></div>
          <h2>Pin ${t==="habit"?"habit":"task"}</h2>
          <p class="muted tight">${g(i||"")}</p>
          <div class="form" style="margin-top:14px">
            ${mt(n)}
            <button class="primary-btn" type="submit">Save pin</button>
            ${n?'<button class="ghost-btn danger" type="button" data-action="clear-pin">Unpin</button>':""}
            <button class="ghost-btn" type="button" data-action="close-modal">Cancel</button>
          </div>
        </form>
      </div>
    `}return""}function L(){if(B)try{const t=o.isLocked(r);B.innerHTML=`
    <div class="app-shell">
      <main class="screen active">
        ${h==="today"?rt():""}
        ${h==="week"?lt():""}
        ${h==="history"?ut():""}
        ${h==="habits"?pt():""}
        ${h==="settings"?bt():""}
      </main>
      ${["today","habits"].includes(h)&&!t?'<button class="fab" data-action="open-add" aria-label="Add">+</button>':""}
      ${h==="settings"?'<button class="fab" data-action="open-add-habit" aria-label="Add habit">+</button>':""}
      <nav class="tabbar tabs-5">
        <button class="tab ${h==="today"?"active":""}" data-screen="today">${A("home")}Today</button>
        <button class="tab ${h==="week"?"active":""}" data-screen="week">${A("week")}Week</button>
        <button class="tab ${h==="history"?"active":""}" data-screen="history">${A("history")}History</button>
        <button class="tab ${h==="habits"?"active":""}" data-screen="habits">${A("habit")}Activities</button>
        <button class="tab ${h==="settings"?"active":""}" data-screen="settings">${A("settings")}Settings</button>
      </nav>
    </div>
    ${vt()}
    <div class="toast" id="toast"></div>
  `,ht(),gt()}catch(t){B.innerHTML=`<div class="app-shell"><section class="manage-card"><h2>Could not load</h2><p class="muted tight">${g(t&&t.message?t.message:"Unknown error")}</p><button class="primary-btn full" data-action="reload-app">Reload</button></section></div>`}}function ht(){const t=document.getElementById("day-note");t&&t.addEventListener("input",()=>{o.isLocked(r)||o.setNote(r,t.value)})}function gt(){const t=document.getElementById("lock-time"),e=document.getElementById("auto-lock");t&&t.addEventListener("change",()=>{o.setLockTime(t.value),k(`Lock time set to ${t.value}`),L()}),e&&e.addEventListener("change",()=>{o.setAutoLock(e.checked),k(e.checked?"Auto-lock on":"Auto-lock off"),L()})}function k(t){const e=document.getElementById("toast");e&&(e.textContent=t,e.classList.add("show"),setTimeout(()=>e.classList.remove("show"),1800))}function g(t){return String(t||"").split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;").split('"').join("&quot;")}function T(){return o.isLocked(r)?(k("This report is locked. Unlock it in Settings."),!0):!1}function yt(t){const e=o.findHabit(t);e&&(u="pin",f={kind:"habit",id:t,title:e.name,pin:e.pin})}function ft(t){const e=o.findTask(r,t);if(!e)return;const i=e.sourcePinId?o.findPinnedTask(e.sourcePinId):null;u="pin",f={kind:"task",id:t,title:e.title,pin:i?i.pin:null}}function kt(t){const e=o.findPinnedTask(t);e&&(u="pin",f={kind:"template",id:t,title:e.title,pin:e.pin})}function $t(t){var a;const e=t.querySelector('input[name="mode"]').value,i=((a=t.querySelector('input[name="until"]'))==null?void 0:a.value)||"",n=[...t.querySelectorAll(".weekday.on")].map(s=>Number(s.dataset.day));return e==="until"&&!i?(k("Pick an until date"),null):e==="weekly"&&!n.length?(k("Pick at least one weekday"),null):{mode:e,until:i,weekdays:n}}document.addEventListener("click",t=>{const e=t.target.closest("[data-screen]");if(e){h=e.dataset.screen,L();return}const i=t.target.closest("[data-action]");if(!i)return;const n=i.dataset.action;if(n==="close-modal"){(t.target.classList.contains("modal-backdrop")||i.classList.contains("ghost-btn"))&&(u=null,f=null,L());return}if(n==="prev-day"&&_(-1),n==="next-day"&&_(1),n==="reload-app"){window.location.reload();return}if(n==="goto-settings"&&(h="settings"),n==="open-add-habit"&&(u="habit",f=null),n==="open-add-task"){if(T())return;u="task",f={category:"mentally"}}if(n==="open-add"){if(T())return;u="choose",f={category:"mentally"}}if(n==="toggle-edit"&&(H=!H),n==="open-edit-habit"){const a=o.findHabit(i.dataset.id);if(!a)return;u="edit-habit",f={id:a.id,name:a.name,points:a.points,category:a.category}}if(n==="open-edit-task"){if(T())return;const a=o.findTask(r,i.dataset.id);if(!a)return;u="edit-task",f={id:a.id,title:a.title,points:a.points,description:a.description,category:a.category}}if(n==="rate-habit"){if(T())return;const s=o.habitRating(r,i.dataset.id)===Number(i.dataset.rating)?0:Number(i.dataset.rating);o.setHabitRating(r,i.dataset.id,s)}if(n==="submit-day"&&(o.submitDay(r),k("Report submitted and locked")),n==="unlock-day"&&(o.unlockDay(i.dataset.date),k("Report unlocked")),n==="toggle-habit"){if(T())return;o.toggleHabit(r,i.dataset.id)}if(n==="toggle-task"){if(T())return;o.toggleTask(r,i.dataset.id)}if(n==="remove-task"){if(T())return;o.removeTask(r,i.dataset.id)}if(n==="remove-habit"&&o.removeHabit(i.dataset.id),n==="open-pin-habit"&&yt(i.dataset.id),n==="open-pin-task"){if(T())return;ft(i.dataset.id)}if(n==="open-pin-template"&&kt(i.dataset.id),n==="unpin-template"&&(o.unpinTaskTemplate(i.dataset.id),k("Task unpinned")),n==="pick-date"&&(r=i.dataset.date,h="today"),n==="set-points"){const a=document.querySelector('input[name="points"]');a&&(a.value=i.dataset.points),document.querySelectorAll(".chip-row .chip[data-points]").forEach(s=>s.classList.remove("on")),i.classList.add("on");return}if(n==="set-category"){const a=i.closest("form"),s=a.querySelector('input[name="category"]');s&&(s.value=i.dataset.category),a.querySelectorAll(".cat-row .chip").forEach(d=>d.classList.remove("on")),i.classList.add("on");return}if(n==="pin-mode"){const a=i.closest("form");a.querySelector('input[name="mode"]').value=i.dataset.mode,a.querySelectorAll(".pin-modes .chip").forEach(s=>s.classList.remove("on")),i.classList.add("on"),a.querySelector(".pin-until").style.display=i.dataset.mode==="until"?"":"none",a.querySelector(".pin-weekdays").style.display=i.dataset.mode==="weekly"?"":"none";return}if(n==="toggle-weekday"){i.classList.toggle("on");return}if(n==="clear-pin"){const a=i.closest("form"),s=a.dataset.kind,d=a.dataset.id;if(s==="habit"&&o.unpinHabit(d),s==="task"){const c=o.findTask(r,d);c!=null&&c.sourcePinId&&o.unpinTaskTemplate(c.sourcePinId)}s==="template"&&o.unpinTaskTemplate(d),u=null,f=null,k("Unpinned"),L();return}L()});document.addEventListener("submit",t=>{const e=t.target.closest("[data-form]");if(!e)return;t.preventDefault();const i=e.dataset.form;if(i==="habit"||i==="task"||i==="edit-habit"||i==="edit-task"){const n=new FormData(e),a=String(n.get("title")||""),s=Number(n.get("points")||0),d=String(n.get("category")||"mentally"),c=String(n.get("description")||"");if(!a.trim())return;if(i==="habit")o.addHabit(a,s,{category:d}),k("Habit added");else if(i==="task"){if(T())return;o.addTask(r,a,s,{description:c,category:d}),k("Task added")}else if(i==="edit-habit")o.updateHabit(e.dataset.id,{name:a,points:s,category:d}),k("Habit updated");else{if(T())return;o.updateTask(r,e.dataset.id,{title:a,points:s,description:c,category:d}),k("Task updated")}u=null,f=null,L();return}if(i==="pin"){const n=$t(e);if(!n)return;const a=e.dataset.kind,s=e.dataset.id;a==="habit"&&o.pinHabit(s,n),a==="task"&&o.pinTask(r,s,n),a==="template"&&o.updatePinnedTask(s,n),u=null,f=null,k("Pin saved"),L()}});"serviceWorker"in navigator&&(navigator.serviceWorker.getRegistrations().then(t=>{t.forEach(e=>e.unregister())}).catch(()=>{}),"caches"in window&&caches.keys().then(t=>Promise.all(t.map(e=>caches.delete(e)))).catch(()=>{}));function wt(){const t=document.getElementById("boot-error");t&&(t.style.display="none")}wt();L();
