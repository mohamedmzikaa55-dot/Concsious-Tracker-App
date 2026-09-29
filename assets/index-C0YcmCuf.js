(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function a(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=a(s);fetch(s.href,i)}})();const ae="daily-report-v2",Et=[{id:"mentally",label:"Mentally"},{id:"psychology",label:"Psychology"},{id:"physically",label:"Physically"},{id:"spiritually",label:"Spiritually"},{id:"socially",label:"Socially"}];Et.map(t=>t.id);const se=[{id:"h1",name:"Wake up early",points:10,icon:"sunrise",category:"physically",pin:{mode:"forever"}},{id:"h2",name:"Drink water",points:5,icon:"drop",category:"physically",pin:{mode:"forever"}},{id:"h3",name:"Exercise",points:15,icon:"bolt",category:"physically",pin:{mode:"forever"}},{id:"h4",name:"Read 20 minutes",points:10,icon:"book",category:"mentally",pin:{mode:"forever"}},{id:"h5",name:"No junk food",points:10,icon:"leaf",category:"physically",pin:{mode:"forever"}}],ne={lockTime:"21:00",autoLock:!0,showConscious:!0,habitSort:"default",taskSort:"default",theme:"dark",weekStart:1};function kt(t){const e=Number(t);return Number.isInteger(e)&&e>=0&&e<=6?e:1}const it=[{id:"iron",label:"Iron",medal:"🥉",rank:1},{id:"bronze",label:"Bronze",medal:"🥉",rank:2},{id:"silver",label:"Silver",medal:"🥈",rank:3},{id:"gold",label:"Gold",medal:"🥇",rank:4}],ie=[{id:"habit-streak",label:"Habit streak"},{id:"task-streak",label:"Pinned task streak"},{id:"perfect-days",label:"Perfect days (100%)"}];function Ft(t){var e;return((e=it.find(a=>a.id===t))==null?void 0:e.rank)||0}function $t(t){var e;return((e=it.find(a=>a.id===t))==null?void 0:e.medal)||"🏅"}function oe(t){var e;return((e=it.find(a=>a.id===t))==null?void 0:e.label)||t||"Badge"}function D(t){const e=Array.isArray(t)?t:String(t||"").split(","),a=[];return e.forEach(n=>{const s=String(n||"").trim().slice(0,20);s&&!a.some(i=>i.toLowerCase()===s.toLowerCase())&&a.push(s),a.length>=10}),a.slice(0,10)}function yt(t,e){const a=[...t];return e==="points"?a.sort((n,s)=>(Number(s.points)||0)-(Number(n.points)||0)):e==="category"?a.sort((n,s)=>nt(P(n.category)).localeCompare(nt(P(s.category)))):e==="tags"&&a.sort((n,s)=>(n.tags&&n.tags[0]||"~~~").localeCompare(s.tags&&s.tags[0]||"~~~")),a}const X=[{value:1,label:"Mon"},{value:2,label:"Tue"},{value:3,label:"Wed"},{value:4,label:"Thu"},{value:5,label:"Fri"},{value:6,label:"Sat"},{value:0,label:"Sun"}];function _(t=new Date){const e=t.getFullYear(),a=String(t.getMonth()+1).padStart(2,"0"),n=String(t.getDate()).padStart(2,"0");return`${e}-${a}-${n}`}function Nt(){return{habits:{},habitRatings:{},habitMissed:{},habitForwarded:{},tasks:[],note:"",locked:!1,lockOverride:null,submittedAt:null,lockedHabits:null}}var H=[];function G(){return[...Et,...H]}function P(t){return G().map(a=>a.id).includes(t)?t:"mentally"}function nt(t){var e;return((e=G().find(a=>a.id===t))==null?void 0:e.label)||"Mentally"}const ot=7e5;function q(t){const e=String(t||"");return e.startsWith("data:image/")?e.length>ot?"":e:""}function Bt(t){const e=Math.max(0,Math.min(5,Number(t.rating)||0)),a=s=>/^\d{4}-\d{2}-\d{2}$/.test(String(s||""))?String(s):"",n=s=>Array.isArray(s)?s.filter(i=>/^\d{4}-\d{2}-\d{2}$/.test(String(i))).map(String).slice(0,50):[];return{...t,description:t.description||"",category:P(t.category),tags:D(t.tags),rating:e,done:!!t.done,missed:!!t.missed,forwardedFrom:a(t.forwardedFrom),forwardedHabitId:String(t.forwardedHabitId||""),forwardedTo:n(t.forwardedTo),image:q(t.image)}}function I(t){const e=Number(t);return!Number.isFinite(e)||e<0?0:Math.min(100,Math.round(e))}function V(t){if(!t||!t.mode)return null;const e=(s,i,o)=>Array.isArray(s)?s.map(Number).filter(r=>Number.isFinite(r)&&r>=i&&r<=o):[],a=s=>Array.isArray(s)?s.filter(i=>/^\d{4}-\d{2}-\d{2}$/.test(String(i))).map(String).slice(0,365):[],n=s=>Array.isArray(s)?s.filter(i=>/^\d{2}-\d{2}$/.test(String(i))).map(String).slice(0,366):[];return{mode:["forever","until","weekly","monthly","yearly","custom"].includes(t.mode)?t.mode:"forever",until:t.until||"",weekdays:e(t.weekdays,0,6),monthDays:e(t.monthDays,1,31),yearDays:n(t.yearDays),customDates:a(t.customDates),exceptDates:a(t.exceptDates||t.exceptions)}}function we(t,e){const a=`${t} ${e}`.toLowerCase();return a.includes("read")||a.includes("study")||a.includes("learn")?"mentally":a.includes("meditat")||a.includes("pray")||a.includes("journal")?"spiritually":a.includes("mood")||a.includes("calm")||a.includes("therapy")?"psychology":a.includes("friend")||a.includes("family")||a.includes("social")||a.includes("call")||a.includes("visit")?"socially":"physically"}function wt(t){const e=ie.some(a=>a.id===t.kind)?t.kind:"habit-streak";return{id:String(t.id||`g${Date.now()}`),title:String(t.title||"").trim().slice(0,60)||"My goal",kind:e,targetId:String(t.targetId||""),targetDays:Math.max(1,Math.min(365,Number(t.targetDays)||7)),tier:it.some(a=>a.id===t.tier)?t.tier:"bronze",rewardTitle:String(t.rewardTitle||"").trim().slice(0,60)||"Reward",createdAt:t.createdAt||new Date().toISOString()}}function Se(t){if(!Array.isArray(t))return[];const e=new Set(Et.map(n=>n.id)),a=[];return t.forEach(n=>{if(!n||typeof n!="object")return;const s=String(n.id||"").trim().slice(0,40),i=String(n.label||"").trim().slice(0,30);!s||!i||e.has(s.toLowerCase())||(e.add(s.toLowerCase()),a.push({id:s,label:i}))}),a.slice(0,20)}const St={name:80,about:1e3,lifeAreas:1e3,vision:1e3,goalsShort:1e3,goalsMid:1e3,goalsLong:1e3,values:1e3};function rt(t){const e=t&&typeof t=="object"?t:{},a={};return Object.entries(St).forEach(([n,s])=>{a[n]=String(e[n]||"").slice(0,s)}),a}function xe(t,e){const a=String(t&&t.installedAt||"");if(/^\d{4}-\d{2}-\d{2}/.test(a))return a;const n=Object.keys(e||{}).sort();return n.length?`${n[0]}T00:00:00.000`:new Date().toISOString()}function re(t){H=Se(t.customCategories||[]);const e=(Array.isArray(t.habits)&&t.habits.length?t.habits:se).map(n=>({...n,description:String(n.description||"").slice(0,240),category:P(n.category||we(n.id,n.name)),consciousPoints:I(n.consciousPoints),tags:D(n.tags),pin:V(n.pin)})),a={};return Object.entries(t.days||{}).forEach(([n,s])=>{a[n]={...Nt(),habits:s.habits||{},habitRatings:s.habitRatings||{},habitMissed:s.habitMissed||{},habitForwarded:s.habitForwarded&&typeof s.habitForwarded=="object"?s.habitForwarded:{},tasks:Array.isArray(s.tasks)?s.tasks.map(Bt):[],note:s.note||"",locked:!!s.locked,lockOverride:s.lockOverride||(s.locked?"locked":null),submittedAt:s.submittedAt||null,lockedHabits:Array.isArray(s.lockedHabits)?s.lockedHabits:null}}),{habits:e,customCategories:H,installedAt:xe(t,a),profile:rt(t.profile),pinnedTasks:Array.isArray(t.pinnedTasks)?t.pinnedTasks.map(n=>({...Bt(n),pin:V(n.pin)})):[],days:a,goals:Array.isArray(t.goals)?t.goals.map(wt):[],badges:Array.isArray(t.badges)?t.badges.filter(n=>n&&n.id&&n.goalId).map(n=>({id:String(n.id),goalId:String(n.goalId),title:String(n.title||""),tier:n.tier||"bronze",rewardTitle:String(n.rewardTitle||""),earnedAt:n.earnedAt||new Date().toISOString()})):[],settings:{lockTime:t.settings&&t.settings.lockTime||ne.lockTime,autoLock:!t.settings||t.settings.autoLock!==!1,showConscious:!t.settings||t.settings.showConscious!==!1,habitSort:["default","points","category","tags"].includes(t.settings&&t.settings.habitSort)?t.settings.habitSort:"default",taskSort:["default","points","category","tags"].includes(t.settings&&t.settings.taskSort)?t.settings.taskSort:"default",theme:["light","dark"].includes(t.settings&&t.settings.theme)?t.settings.theme:"dark",weekStart:kt(t.settings&&t.settings.weekStart)}}}function Ot(){return{habits:se.map(t=>({...t,description:"",tags:[]})),customCategories:[],installedAt:new Date().toISOString(),profile:rt({}),pinnedTasks:[],days:{},goals:[],badges:[],settings:{...ne}}}function Te(){try{const t=localStorage.getItem(ae)||localStorage.getItem("daily-report-v1");return t?re(JSON.parse(t)):Ot()}catch{return Ot()}}let p=Te();H=p.customCategories||[];p.customCategories=H;let de=0,bt={key:null,value:null};function w(){de+=1;try{localStorage.setItem(ae,JSON.stringify(p))}catch{}}function De(t){return new Date(`${t}T00:00:00`).getDay()}function tt(t){const e=new Date(`${t}T00:00:00`);return e.setDate(e.getDate()-1),_(e)}function dt(t,e){if(!t)return!0;if(Array.isArray(t.exceptDates)&&t.exceptDates.includes(e)||Array.isArray(t.exceptions)&&t.exceptions.includes(e))return!1;if((Array.isArray(t.customDates)?t.customDates:[]).includes(e)||t.mode==="forever")return!0;if(t.mode==="until")return!!t.until&&e<=t.until;if(t.mode==="weekly")return Array.isArray(t.weekdays)&&t.weekdays.includes(De(e));if(t.mode==="monthly"){const n=Array.isArray(t.monthDays)?t.monthDays.map(Number):[];return n.length?n.includes(Number(String(e).slice(8,10))):!0}if(t.mode==="yearly"){const n=Array.isArray(t.yearDays)?t.yearDays:[];return n.length?n.includes(String(e).slice(5,10)):!0}return t.mode!=="custom"}function ct(t){if(!t)return"Not pinned";const e=(t.exceptDates||t.exceptions||[]).length,a=e?` · ⛔ ${e} exception${e>1?"s":""}`:"",n=t.mode==="custom"?0:Array.isArray(t.customDates)?t.customDates.length:0,s=n?` +${n} custom`:"";if(t.mode==="forever")return`Pinned forever${s}${a}`;if(t.mode==="until")return`${t.until?`Pinned until ${t.until}`:"Pinned until a date"}${s}${a}`;if(t.mode==="weekly"){const i=Array.isArray(t.weekdays)?t.weekdays:[],o=X.filter(r=>i.includes(r.value)).map(r=>r.label);return`${o.length?`Weekly: ${o.join(", ")}`:"Weekly (no days)"}${s}${a}`}if(t.mode==="monthly"){const i=Array.isArray(t.monthDays)?t.monthDays:[];return`${i.length?`Monthly: day${i.length>1?"s":""} ${[...i].sort((o,r)=>o-r).join(", ")}`:"Monthly"}${s}${a}`}if(t.mode==="yearly"){const i=Array.isArray(t.yearDays)?t.yearDays:[];return`${i.length?`Yearly: ${[...i].sort().join(", ")}`:"Yearly"}${s}${a}`}if(t.mode==="custom"){const i=Array.isArray(t.customDates)?t.customDates:[];return`${i.length?`Custom: ${i.length} date${i.length>1?"s":""}`:"Custom dates"}${a}`}return"Pinned"}function _t(t){const[e,a]=(p.settings.lockTime||"21:00").split(":").map(Number),n=new Date(`${t}T00:00:00`);return n.setHours(e||0,a||0,0,0),n}function ce(t){const e=p.days[t];return e?e.lockOverride==="locked"||e.locked===!0:!1}function xt(t,e){const a=p.days[t];return a?a.habitRatings&&a.habitRatings[e]!=null?Number(a.habitRatings[e])||0:a.habits&&a.habits[e]?5:0:0}function Tt(t){const e=C(t),a=p.habits.filter(n=>dt(n.pin,t));e.lockedHabits=a.map(n=>({id:n.id,name:n.name,description:String(n.description||"").slice(0,240),points:Number(n.points)||0,icon:n.icon||"star",category:P(n.category),consciousPoints:I(n.consciousPoints),tags:D(n.tags),pin:V(n.pin)})),e.habitMissed={},a.forEach(n=>{xt(t,n.id)<=0?(e.habitMissed[n.id]=!0,e.habitRatings[n.id]=0,e.habits[n.id]=!1):e.habitMissed&&delete e.habitMissed[n.id]}),e.tasks.forEach(n=>{n.missed=!n.done})}function Wt(t){const e=C(t);return e.lockOverride==="unlocked"?!1:e.lockOverride==="locked"||e.locked?((!e.lockedHabits||e.habitMissed==null)&&Tt(t),!0):p.settings.autoLock&&Date.now()>=_t(t).getTime()?(e.locked=!0,e.lockOverride="locked",e.submittedAt=e.submittedAt||_t(t).toISOString(),Tt(t),w(),!0):!1}function C(t){return p.days[t]||(p.days[t]=Nt()),p.days[t]}function Ae(t){const e=C(t);if(ce(t))return e;let a=!1;return p.pinnedTasks.forEach(n=>{dt(n.pin,t)&&(e.tasks.some(s=>s.sourcePinId===n.id)||(e.tasks.push({id:`ptask-${n.id}-${t}`,title:n.title,points:n.points,description:n.description||"",category:P(n.category),tags:D(n.tags),rating:0,done:!1,missed:!1,sourcePinId:n.id,image:q(n.image)}),a=!0))}),a&&w(),e}function O(t){return!l.isLocked(t)}function Gt(t){const e=G().find(a=>a.label.toLowerCase()===String(t||"").trim().toLowerCase());return e?e.id:"mentally"}function qt(t){return!t||typeof t!="object"||Array.isArray(t)?[]:Array.isArray(t.days)?t.days.filter(e=>e&&/^\d{4}-\d{2}-\d{2}$/.test(String(e.date||""))):[]}const l={todayKey:_,exportBackup(){return JSON.stringify({app:"Daily Report",kind:"full-backup",version:1,exportedAt:new Date().toISOString(),data:p},null,2)},backupKind(t){if(!t||typeof t!="object"||Array.isArray(t))return"invalid";const e=t.data&&typeof t.data=="object"&&!Array.isArray(t.data)?t.data:t;return Array.isArray(e.days)?"report-export":Array.isArray(e.categories)||Array.isArray(e.plans)||Array.isArray(e.schedule)?"wrong-app":typeof e!="object"||e===null||e.habits!==void 0&&!Array.isArray(e.habits)||e.days!==void 0&&(typeof e.days!="object"||e.days===null||Array.isArray(e.days))||e.settings!==void 0&&(typeof e.settings!="object"||e.settings===null||Array.isArray(e.settings))||!["habits","pinnedTasks","days","goals","badges","settings"].some(n=>e[n]!==void 0)?"invalid":"ok"},importBackup(t){if(this.backupKind(t)!=="ok")return!1;const e=t.data&&typeof t.data=="object"&&!Array.isArray(t.data)?t.data:t;return p=re(e),H=p.customCategories||[],p.customCategories=H,w(),!0},previewReport(t){const e=qt(t);if(!e.length)return{days:0,start:"",end:"",newHabits:0};const a=new Set(p.habits.map(i=>String(i.name||"").trim().toLowerCase())),n=new Set;e.forEach(i=>{(Array.isArray(i.habits)?i.habits:[]).forEach(o=>{const r=String(o&&o.name||"").trim().toLowerCase();r&&!a.has(r)&&n.add(r)})});const s=e.map(i=>String(i.date)).sort();return{days:e.length,start:s[0],end:s[s.length-1],newHabits:n.size}},importReport(t){const e=qt(t);if(!e.length)return!1;const a=e.map(r=>String(r.date)).sort(),n=a[a.length-1],s={};p.habits.forEach(r=>{s[String(r.name||"").trim().toLowerCase()]=r});let i=0;const o=Date.now();return e.forEach((r,c)=>{const d=String(r.date);(Array.isArray(r.habits)?r.habits:[]).forEach(u=>{const k=String(u&&u.name||"").trim().slice(0,80);if(!k)return;const x=k.toLowerCase();if(!s[x]){const v={id:`h${o}_${i}`,name:k,description:String(u&&u.description||"").slice(0,240),points:Number(u&&u.points||10)||10,icon:"star",category:Gt(u&&u.category),consciousPoints:I(u&&u.consciousPoints),tags:D(u&&u.tags),pin:{mode:"until",until:n,weekdays:[],monthDays:[],yearDays:[],customDates:[],exceptDates:[]}};p.habits.push(v),s[x]=v,i+=1}});const h=Nt();h.note=String(r.note||""),h.locked=!0,h.lockOverride="locked",h.submittedAt=null;const b=[];(Array.isArray(r.habits)?r.habits:[]).forEach(u=>{const k=s[String(u&&u.name||"").trim().toLowerCase()];if(!k)return;const x=Math.max(0,Math.min(5,Number(u&&u.rating||0)));h.habitRatings[k.id]=x,h.habits[k.id]=x>0,x<=0&&(h.habitMissed[k.id]=!0),b.push({id:k.id,name:k.name,description:k.description,points:k.points,icon:k.icon||"star",category:P(k.category),consciousPoints:I(k.consciousPoints),tags:D(k.tags),pin:V(k.pin)})}),h.lockedHabits=b,h.tasks=(Array.isArray(r.tasks)?r.tasks:[]).map((u,k)=>({id:`t${o}_${c}_${k}`,title:String(u&&u.title||"Task").slice(0,120),points:Number(u&&u.points||5)||5,description:String(u&&u.description||""),category:Gt(u&&u.category),tags:D(u&&u.tags),rating:Math.max(0,Math.min(5,Number(u&&u.rating||0))),done:!!(u&&u.done),missed:!(u&&u.done),image:"",forwardedFrom:/^\d{4}-\d{2}-\d{2}$/.test(String(u&&u.forwardedFrom||""))?String(u.forwardedFrom):"",forwardedHabitId:"",forwardedTo:Array.isArray(u&&u.forwardedTo)?u.forwardedTo.filter(x=>/^\d{4}-\d{2}-\d{2}$/.test(String(x))).map(String).slice(0,50):[]})),p.days[d]=h}),w(),{days:e.length,habits:i}},getSettings(){return p.settings},setLockTime(t){p.settings.lockTime=t||"21:00",w()},setAutoLock(t){p.settings.autoLock=!!t,w()},setShowConscious(t){p.settings.showConscious=!!t,w()},consciousEnabled(){return p.settings.showConscious!==!1},setHabitSort(t){p.settings.habitSort=["default","points","category","tags"].includes(t)?t:"default",w()},setTaskSort(t){p.settings.taskSort=["default","points","category","tags"].includes(t)?t:"default",w()},getWeekStart(){return kt(p.settings.weekStart)},setWeekStart(t){p.settings.weekStart=kt(t),w()},getTheme(){return p.settings.theme==="light"?"light":"dark"},setTheme(t){p.settings.theme=t==="light"?"light":"dark",w()},getHabits(t,e){if(t&&ce(t)){const i=p.days[t];if(i&&Array.isArray(i.lockedHabits)){const o=e||p.settings.habitSort||"default",r=[...i.lockedHabits];return o==="default"?r:yt(r,o)}}const n=p.habits.filter(i=>t?dt(i.pin,t):!0).sort((i,o)=>+!!o.pin-+!!i.pin),s=e||p.settings.habitSort||"default";return s==="default"?n:yt(n,s)},getTasks(t,e){const a=this.getDay(t),n=e||p.settings.taskSort||"default";return n==="default"?a.tasks:yt(a.tasks,n)},getAllHabits(){return p.habits},getPinnedTasks(){return p.pinnedTasks},getDay(t){return Wt(t),Ae(t)},isLocked(t){return Wt(t)},submitDay(t){const e=C(t);e.locked=!0,e.lockOverride="locked",e.submittedAt=new Date().toISOString(),Tt(t),w(),this.checkGoals(t)},unlockDay(t){const e=C(t);e.locked=!1,e.lockOverride="unlocked",e.habitMissed={},e.lockedHabits=null,e.tasks.forEach(a=>{a.missed=!1}),w()},isHabitMissed(t,e){const a=p.days[t];return!a||!(a.locked||a.lockOverride==="locked")?!1:a.habitMissed&&a.habitMissed[e]?!0:xt(t,e)<=0},isTaskMissed(t,e){const a=p.days[t];if(!a)return!1;const n=(a.tasks||[]).find(s=>s.id===e);return n?n.missed===!0?!0:n.missed===!1?!1:!!(a.locked||a.lockOverride==="locked")&&!n.done:!1},missedCounts(t){const e=this.getDay(t),a=this.getHabits(t),n=!!(e.locked||e.lockOverride==="locked");return{habits:a.filter(s=>e.habitMissed&&e.habitMissed[s.id]?!0:n&&xt(t,s.id)<=0).length,tasks:e.tasks.filter(s=>s.done?!1:s.missed===!0?!0:s.missed===!1?!1:n).length}},lockDay(t){this.submitDay(t)},lockedReports(){return Object.keys(p.days).sort().reverse().filter(t=>this.isLocked(t)).map(t=>({date:t,submittedAt:p.days[t].submittedAt,...this.scoreFor(t)}))},habitRating(t,e){const a=p.days[t];return a?a.habitRatings&&a.habitRatings[e]!=null?Number(a.habitRatings[e])||0:a.habits&&a.habits[e]?5:0:0},setHabitRating(t,e,a){if(!O(t))return;const n=C(t),s=Math.max(0,Math.min(5,Number(a)||0));n.habitRatings[e]=s,n.habits[e]=s>0,w(),this.checkGoals(t)},toggleHabit(t,e){if(!O(t))return;const a=this.habitRating(t,e)>0?0:5;this.setHabitRating(t,e,a)},addTask(t,e,a,n={}){if(!O(t))return;C(t).tasks.push({id:`t${Date.now()}`,title:e.trim(),points:Number(a)||5,description:String(n.description||"").trim(),category:P(n.category),tags:D(n.tags),rating:Math.max(0,Math.min(5,Number(n.rating)||0)),done:!1,missed:!1,forwardedFrom:/^\d{4}-\d{2}-\d{2}$/.test(String(n.forwardedFrom||""))?String(n.forwardedFrom):"",forwardedHabitId:String(n.forwardedHabitId||""),forwardedTo:[],image:q(n.image)}),w(),this.checkGoals(t)},setTaskRating(t,e,a){if(!O(t))return;const s=C(t).tasks.find(o=>o.id===e);if(!s)return;const i=Math.max(0,Math.min(5,Number(a)||0));s.rating=i,w()},toggleTask(t,e){if(!O(t))return;const n=C(t).tasks.find(s=>s.id===e);n&&(n.done=!n.done,w(),this.checkGoals(t))},removeTask(t,e){if(!O(t))return;const a=C(t);a.tasks=a.tasks.filter(n=>n.id!==e),w()},forwardTask(t,e,a){if(!/^\d{4}-\d{2}-\d{2}$/.test(String(a||"")))return{ok:!1,reason:"Pick a valid date"};if(t===a)return{ok:!1,reason:"Already on that day"};if(!O(t))return{ok:!1,reason:"Source day is locked"};if(this.isLocked(a))return{ok:!1,reason:"Target day is locked"};const s=C(t).tasks.find(r=>r.id===e);if(!s)return{ok:!1,reason:"Task not found"};C(a).tasks.push({id:`t${Date.now()}`,title:s.title,points:Number(s.points)||5,description:String(s.description||""),category:P(s.category),tags:D(s.tags),rating:0,done:!1,missed:!1,forwardedFrom:t,forwardedHabitId:String(s.forwardedHabitId||""),forwardedTo:[],image:q(s.image)});const o=Array.isArray(s.forwardedTo)?s.forwardedTo:[];return o.includes(a)||o.push(a),s.forwardedTo=o.slice(0,50),w(),this.checkGoals(a),{ok:!0}},forwardHabit(t,e,a){if(!/^\d{4}-\d{2}-\d{2}$/.test(String(a||"")))return{ok:!1,reason:"Pick a valid date"};if(t===a)return{ok:!1,reason:"Already on that day"};if(!O(t))return{ok:!1,reason:"Source day is locked"};if(this.isLocked(a))return{ok:!1,reason:"Target day is locked"};const n=p.habits.find(r=>r.id===e);if(!n)return{ok:!1,reason:"Habit not found"};C(a).tasks.push({id:`t${Date.now()}`,title:n.name,points:Number(n.points)||10,description:String(n.description||""),category:P(n.category),tags:D(n.tags),rating:0,done:!1,missed:!1,forwardedFrom:t,forwardedHabitId:e,forwardedTo:[]});const i=C(t);(!i.habitForwarded||typeof i.habitForwarded!="object")&&(i.habitForwarded={});const o=Array.isArray(i.habitForwarded[e])?i.habitForwarded[e]:[];return o.includes(a)||o.push(a),i.habitForwarded[e]=o.slice(0,50),w(),this.checkGoals(a),{ok:!0}},habitForwardedTo(t,e){const a=p.days[t];if(!a||!a.habitForwarded)return[];const n=a.habitForwarded[e];return Array.isArray(n)?n:[]},setNote(t,e){O(t)&&(C(t).note=e,w())},addHabit(t,e,a={}){p.habits.push({id:`h${Date.now()}`,name:t.trim(),description:String(a.description||"").trim().slice(0,240),points:Number(e)||10,icon:"star",category:P(a.category||"physically"),consciousPoints:I(a.consciousPoints),tags:D(a.tags),pin:{mode:"forever",until:"",weekdays:[]}}),w()},updateHabit(t,e){const a=p.habits.find(n=>n.id===t);a&&(e.name!=null&&(a.name=String(e.name).trim()||a.name),e.description!=null&&(a.description=String(e.description).trim().slice(0,240)),e.points!=null&&(a.points=Number(e.points)||a.points),e.category!=null&&(a.category=P(e.category)),e.consciousPoints!=null&&(a.consciousPoints=I(e.consciousPoints)),e.tags!=null&&(a.tags=D(e.tags)),w())},updateTask(t,e,a){if(!O(t))return;const s=C(t).tasks.find(i=>i.id===e);if(s){if(a.title!=null&&(s.title=String(a.title).trim()||s.title),a.points!=null&&(s.points=Number(a.points)||s.points),a.description!=null&&(s.description=String(a.description).trim()),a.category!=null&&(s.category=P(a.category)),a.tags!=null&&(s.tags=D(a.tags)),a.image!==void 0&&(s.image=q(a.image)),a.rating!=null&&(s.rating=Math.max(0,Math.min(5,Number(a.rating)||0))),s.sourcePinId){const i=p.pinnedTasks.find(o=>o.id===s.sourcePinId);i&&(i.title=s.title,i.points=s.points,i.description=s.description,i.category=s.category,a.tags!=null&&(i.tags=D(a.tags)),a.image!==void 0&&(i.image=q(a.image)))}w()}},habitStreak(t,e){const a=p.habits.find(o=>o.id===t);if(!a)return 0;let n=e,s=0;this.habitRating(n,t)===0&&(n=tt(n));let i=0;for(;s<400;){if(s+=1,!dt(a.pin,n)){n=tt(n);continue}if(this.habitRating(n,t)>0){i+=1,n=tt(n);continue}break}return i},categoryBreakdown(t){const e=this.getDay(t),a=this.getHabits(t);return G().map(n=>{const s=a.filter(v=>P(v.category)===n.id),i=e.tasks.filter(v=>P(v.category)===n.id),o=s.reduce((v,T)=>{const ft=this.habitRating(t,T.id);return v+Math.round(T.points*ft/5)},0),r=p.settings.showConscious!==!1,c=r?s.reduce((v,T)=>v+(this.habitRating(t,T.id)>0?I(T.consciousPoints):0),0):0,d=s.reduce((v,T)=>v+T.points,0),h=r?s.reduce((v,T)=>v+I(T.consciousPoints),0):0,b=i.reduce((v,T)=>v+(T.done?T.points:0),0),u=i.reduce((v,T)=>v+T.points,0),k=s.map(v=>this.habitRating(t,v.id)),x=k.length?Math.round(k.reduce((v,T)=>v+T,0)/k.length*10)/10:0;return{...n,habits:s,tasks:i,earned:o+c+b,max:d+h+u,habitAvg:x,consciousEarned:c,consciousMax:h,completed:s.filter(v=>this.habitRating(t,v.id)>0).length+i.filter(v=>v.done).length,total:s.length+i.length}})},removeHabit(t){p.habits=p.habits.filter(e=>e.id!==t),w()},pinHabit(t,e){const a=p.habits.find(n=>n.id===t);a&&(a.pin=V(e),w())},unpinHabit(t){const e=p.habits.find(a=>a.id===t);e&&(e.pin=null,w())},pinTask(t,e,a){const s=C(t).tasks.find(o=>o.id===e);if(!s)return;if(s.sourcePinId){const o=p.pinnedTasks.find(r=>r.id===s.sourcePinId);if(o){o.pin=V(a),w();return}}const i=`p${Date.now()}`;p.pinnedTasks.push({id:i,title:s.title,points:s.points,description:s.description||"",category:P(s.category),tags:D(s.tags),pin:V(a),image:q(s.image)}),s.sourcePinId=i,w()},unpinTaskTemplate(t){p.pinnedTasks=p.pinnedTasks.filter(e=>e.id!==t),w()},updatePinnedTask(t,e){const a=p.pinnedTasks.find(n=>n.id===t);a&&(a.pin=V(e),w())},findHabit(t){return p.habits.find(e=>e.id===t)||null},findTask(t,e){return C(t).tasks.find(a=>a.id===e)||null},findPinnedTask(t){return p.pinnedTasks.find(e=>e.id===t)||null},getInstalledAt(){return String(p.installedAt||new Date().toISOString())},getProfile(){return{...rt(p.profile)}},setProfileField(t,e){return Object.prototype.hasOwnProperty.call(St,t)?((!p.profile||typeof p.profile!="object")&&(p.profile=rt({})),p.profile[t]=String(e||"").slice(0,St[t]),w(),!0):!1},getCategories(){return G().map(t=>({...t}))},getCustomCategories(){return H.map(t=>({...t}))},addCategory(t){const e=String(t||"").trim().slice(0,30);if(!e)return{ok:!1,reason:"Type a category name"};if(G().some(s=>s.label.toLowerCase()===e.toLowerCase()))return{ok:!1,reason:"That category already exists"};if(H.length>=20)return{ok:!1,reason:"Too many categories (max 20 custom)"};let n=`c${Date.now().toString(36)}`;return G().some(s=>s.id===n)&&(n=`c${Date.now().toString(36)}${Math.floor(Math.random()*99)}`),H.push({id:n,label:e}),w(),{ok:!0,id:n}},renameCategory(t,e){const a=H.find(i=>i.id===t);if(!a)return{ok:!1,reason:"Built-in categories can’t be renamed"};const n=String(e||"").trim().slice(0,30);return n?G().some(i=>i.id!==t&&i.label.toLowerCase()===n.toLowerCase())?{ok:!1,reason:"That category already exists"}:(a.label=n,w(),{ok:!0}):{ok:!1,reason:"Type a category name"}},deleteCategory(t){const e=H.findIndex(a=>a.id===t);return e<0?{ok:!1,reason:"Built-in categories can’t be deleted"}:(H.splice(e,1),p.habits.forEach(a=>{a.category===t&&(a.category="mentally")}),p.pinnedTasks.forEach(a=>{a.category===t&&(a.category="mentally")}),Object.values(p.days).forEach(a=>{(a.tasks||[]).forEach(n=>{n.category===t&&(n.category="mentally")})}),w(),{ok:!0})},getAllTags(){const t=new Map,e=a=>{D(a).forEach(n=>{t.set(n,(t.get(n)||0)+1)})};return p.habits.forEach(a=>e(a.tags)),p.pinnedTasks.forEach(a=>e(a.tags)),Object.values(p.days).forEach(a=>{(a.tasks||[]).forEach(n=>e(n.tags))}),[...t.entries()].map(([a,n])=>({tag:a,count:n})).sort((a,n)=>n.count-a.count||a.tag.localeCompare(n.tag))},renameTag(t,e){const a=String(t||"").trim(),n=D(e)[0]||"";if(!a||!n)return{ok:!1,reason:"Type a tag name"};if(a.toLowerCase()===n.toLowerCase()){const o=r=>D((r||[]).map(c=>String(c).toLowerCase()===a.toLowerCase()?n:c));return p.habits.forEach(r=>{r.tags=o(r.tags)}),p.pinnedTasks.forEach(r=>{r.tags=o(r.tags)}),Object.values(p.days).forEach(r=>{(r.tasks||[]).forEach(c=>{c.tags=o(c.tags)})}),w(),{ok:!0}}const s=this.getAllTags().some(o=>o.tag.toLowerCase()===n.toLowerCase()),i=o=>{const r=(o||[]).map(c=>String(c).toLowerCase()===a.toLowerCase()?n:c);return D(r)};return p.habits.forEach(o=>{o.tags=i(o.tags)}),p.pinnedTasks.forEach(o=>{o.tags=i(o.tags)}),Object.values(p.days).forEach(o=>{(o.tasks||[]).forEach(r=>{r.tags=i(r.tags)})}),w(),{ok:!0,merged:s}},deleteTag(t){const e=String(t||"").trim().toLowerCase();if(!e)return{ok:!1,reason:"Pick a tag first"};const a=n=>(n||[]).filter(s=>String(s).toLowerCase()!==e);return p.habits.forEach(n=>{n.tags=a(n.tags)}),p.pinnedTasks.forEach(n=>{n.tags=a(n.tags)}),Object.values(p.days).forEach(n=>{(n.tasks||[]).forEach(s=>{s.tags=a(s.tags)})}),w(),{ok:!0}},addTagToHabit(t,e){const a=p.habits.find(s=>s.id===t);if(!a)return{ok:!1,reason:"Pick a habit first"};const n=D(e)[0]||"";return n?(a.tags=D([...a.tags||[],n]),w(),{ok:!0}):{ok:!1,reason:"Type a tag name"}},categoryChart(t,e){const a=["week","month","year"].includes(t)?t:"week",n=`${a}|${e}|${de}`;if(bt.key===n)return bt.value;const s=G(),i=[];if(a==="year"){const b=String(e).slice(0,4);for(let u=0;u<12;u++){const k=String(u+1).padStart(2,"0"),x=new Date(Number(b),u+1,0).getDate();i.push({label:new Date(Number(b),u,1).toLocaleDateString(void 0,{month:"short"}),title:new Date(Number(b),u,1).toLocaleDateString(void 0,{month:"long",year:"numeric"}),keys:this.rangeKeys(`${b}-${k}-01`,`${b}-${k}-${String(x).padStart(2,"0")}`)})}}else{const[b,u]=this.resolveRange(a,e);this.rangeKeys(b,u).forEach(k=>{const x=new Date(`${k}T00:00:00`);i.push({label:a==="week"?x.toLocaleDateString(void 0,{weekday:"narrow"}):String(x.getDate()),title:k,keys:[k]})})}const o={},r={};s.forEach(b=>{o[b.id]=i.map(()=>0),r[b.id]=0}),i.forEach((b,u)=>{b.keys.forEach(k=>{this.categoryBreakdown(k).forEach(x=>{x.id in o||(o[x.id]=i.map(()=>0),r[x.id]=0),o[x.id][u]+=x.earned||0,r[x.id]+=x.earned||0})})});const c=i.map((b,u)=>s.reduce((k,x)=>k+(o[x.id]?o[x.id][u]:0),0)),d=Math.max(1,...c),h={kind:a,labels:i.map(b=>b.label),titles:i.map(b=>b.title),cats:s.map(b=>({...b})),perCat:o,totals:r,max:d,grandTotal:c.reduce((b,u)=>b+u,0)};return bt={key:n,value:h},h},getGoals(){return p.goals},getBadges(){return[...p.badges].sort((t,e)=>{const a=Ft(e.tier)-Ft(t.tier);return a!==0?a:String(e.earnedAt).localeCompare(String(t.earnedAt))})},topBadges(t=3){return this.getBadges().slice(0,t)},addGoal(t={}){const e=wt({...t,id:`g${Date.now()}`});return p.goals.push(e),w(),this.checkGoals(_()),e},updateGoal(t,e={}){const a=p.goals.find(s=>s.id===t);if(!a)return;const n=wt({...a,...e,id:t});Object.assign(a,n),w(),this.checkGoals(_())},removeGoal(t){p.goals=p.goals.filter(e=>e.id!==t),w()},removeBadge(t){p.badges=p.badges.filter(e=>e.id!==t),w()},perfectDaysCount(){return Object.keys(p.days).filter(t=>{const e=this.scoreFor(t);return e.max>0&&e.percent===100}).length},taskStreak(t,e){let a=e,n=0;(o=>{const r=p.days[o];return!r||!Array.isArray(r.tasks)?!1:r.tasks.some(c=>c.sourcePinId===t&&c.done)})(a)||(a=tt(a));let i=0;for(;n<400;){n+=1;const o=p.days[a];if(!o||!Array.isArray(o.tasks))break;if(o.tasks.some(r=>r.sourcePinId===t&&r.done)){i+=1,a=tt(a);continue}break}return i},goalProgress(t,e){const a=e||_();if(t.kind==="habit-streak"){const s=this.habitStreak(t.targetId,a);return{current:s,target:t.targetDays,done:s>=t.targetDays}}if(t.kind==="task-streak"){const s=this.taskStreak(t.targetId,a);return{current:s,target:t.targetDays,done:s>=t.targetDays}}const n=this.perfectDaysCount();return{current:n,target:t.targetDays,done:n>=t.targetDays}},checkGoals(t){const e=t||_();let a=[];return p.goals.forEach(n=>{if(p.badges.some(i=>i.goalId===n.id))return;if(this.goalProgress(n,e).done){const i={id:`b${Date.now()}-${n.id}`,goalId:n.id,title:n.title,tier:n.tier,rewardTitle:n.rewardTitle,earnedAt:new Date().toISOString()};p.badges.push(i),a.push(i)}}),a.length&&w(),a},scoreFor(t){const e=this.getDay(t),a=this.getHabits(t),n=this.isLocked(t),s=p.settings.showConscious!==!1,i=a.reduce((v,T)=>{const ft=this.habitRating(t,T.id);return v+Math.round(T.points*ft/5)},0),o=s?a.reduce((v,T)=>v+(this.habitRating(t,T.id)>0?I(T.consciousPoints):0),0):0,r=e.tasks.reduce((v,T)=>v+(T.done?T.points:0),0),c=a.reduce((v,T)=>v+T.points,0),d=s?a.reduce((v,T)=>v+I(T.consciousPoints),0):0,h=e.tasks.reduce((v,T)=>v+T.points,0),b=i+o+r,u=c+d+h,k=a.filter(v=>e.habitMissed&&e.habitMissed[v.id]?!0:n&&this.habitRating(t,v.id)<=0).length,x=e.tasks.filter(v=>v.done?!1:v.missed===!0?!0:v.missed===!1?!1:n).length;return{earned:b,max:u,habitScore:i,consciousScore:o,maxConscious:d,taskScore:r,completedHabits:a.filter(v=>this.habitRating(t,v.id)>0).length,habitAvg:a.length?Math.round(a.reduce((v,T)=>v+this.habitRating(t,T.id),0)/a.length*10)/10:0,totalHabits:a.length,completedTasks:e.tasks.filter(v=>v.done).length,totalTasks:e.tasks.length,missedHabits:k,missedTasks:x,percent:u?Math.round(b/u*100):0,locked:n,submittedAt:e.submittedAt}},monthKeys(t){const e=String(t).slice(0,7);return Object.keys(p.days).filter(a=>a.startsWith(e)).sort()},rangeKeys(t,e){const a=[],n=new Date(`${t}T00:00:00`),s=new Date(`${e}T00:00:00`);let i=0;for(;n<=s&&i<732;)i+=1,a.push(_(n)),n.setDate(n.getDate()+1);return a},resolveRange(t,e){if(t==="day")return[e,e];if(t==="week"){const n=new Date(`${e}T00:00:00`),s=new Date(n);s.setDate(n.getDate()-(n.getDay()-this.getWeekStart()+7)%7);const i=new Date(s);return i.setDate(s.getDate()+6),[_(s),_(i)]}if(t==="month"){const[n,s]=e.split("-").map(Number),i=`${n}-${String(s).padStart(2,"0")}-01`,o=new Date(n,s,0).getDate(),r=`${n}-${String(s).padStart(2,"0")}-${String(o).padStart(2,"0")}`;return[i,r]}if(t==="year"){const n=e.slice(0,4);return[`${n}-01-01`,`${n}-12-31`]}const a=Object.keys(p.days).sort();return a.length?[a[0],a[a.length-1]>e?a[a.length-1]:e]:[e,e]},exportRows(t,e){return this.rangeKeys(t,e).map(a=>{const n=this.getDay(a),s=this.getHabits(a),i=this.scoreFor(a),o=this.isLocked(a),r=(d,h)=>h>0?"done":o?"missed":"pending",c=d=>d.done?"done":o?"missed":"pending";return{date:a,earned:i.earned,max:i.max,percent:i.percent,habitScore:i.habitScore,consciousScore:i.consciousScore||0,taskScore:i.taskScore,locked:o,missedHabits:i.missedHabits||0,missedTasks:i.missedTasks||0,note:n.note||"",habits:s.map(d=>{const h=this.habitRating(a,d.id);return{name:d.name,description:String(d.description||""),category:nt(P(d.category)),tags:D(d.tags),points:d.points,consciousPoints:this.consciousEnabled()?I(d.consciousPoints):0,rating:h,earned:Math.round(d.points*h/5)+(h>0&&this.consciousEnabled()?I(d.consciousPoints):0),status:r(d.id,h)}}),tasks:n.tasks.map(d=>({title:d.title,category:nt(P(d.category)),tags:D(d.tags),points:d.points,rating:Math.max(0,Math.min(5,Number(d.rating)||0)),done:!!d.done,earned:d.done?d.points:0,status:d.forwardedFrom?`forwarded from ${d.forwardedFrom}`:c(d),forwardedFrom:d.forwardedFrom||"",forwardedTo:Array.isArray(d.forwardedTo)?d.forwardedTo:[],description:d.description||"",hasImage:!!d.image}))}})},history(t=14){return Object.keys(p.days).sort().reverse().slice(0,t).map(a=>({date:a,...this.scoreFor(a),note:p.days[a].note,locked:this.isLocked(a),submittedAt:p.days[a].submittedAt}))},week(t){const e=new Date(t);return e.setDate(e.getDate()-(e.getDay()-this.getWeekStart()+7)%7),e.setHours(0,0,0,0),Array.from({length:7},(a,n)=>{const s=new Date(e);s.setDate(e.getDate()+n);const i=_(s);return{date:i,label:s.toLocaleDateString(void 0,{weekday:"short"}),locked:this.isLocked(i),...this.scoreFor(i)}})}};function le(t){return t>=90?"Excellent":t>=75?"Great day":t>=50?"Keep going":t>0?"Started":"No score yet"}function W(t){return new Date(`${t}T00:00:00`).toLocaleDateString(void 0,{weekday:"long",month:"short",day:"numeric"})}function Ce(t){return t?new Date(t).toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"}):""}function lt(t){return t>=5?"Excellent":t>=4?"Great":t>=3?"Good":t>=2?"Fair":t>=1?"Low":"Not rated"}const vt=document.getElementById("app"),ue="daily-report-2026-09-28T21-00-51-mulqf9b5",Pe=`v1.1 — Auto-update · Offline · Backup (${ue.slice(-8)})`;let g=l.todayKey(),E="today",S=null,m=null,J=!1,ut=!1,Q=null,U=!1,Dt=!1,At=null,z="Idle.",F="week",Ct=null,M="month",Pt=null,B=[],Y=0,L=null,A="boot";window.addEventListener("beforeinstallprompt",t=>{t.preventDefault(),Q=t});window.addEventListener("appinstalled",()=>{Q=null,f("Daily Report installed"),$()});const Le=[["default","Default"],["points","Points"],["category","Category"],["tags","Tags"]];function Ut(t){const e=new Date(`${g}T00:00:00`);e.setDate(e.getDate()+t),g=l.todayKey(e)}function j(t){return{home:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1z"/></svg>',profile:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-6 8-6s8 2 8 6"/></svg>',history:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 8v5l3 2"/><circle cx="12" cy="12" r="9"/></svg>',settings:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H8a1.7 1.7 0 0 0 1-1.5V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V8c.3.7.9 1.2 1.6 1.3H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1.7z"/></svg>',pin:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 4h6l-1 7 3 3v2H7v-2l3-3z" fill="currentColor" stroke="none"/><path d="M12 16v5"/></svg>',forward:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',habit:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7h16M4 12h10M4 17h13"/></svg>'}[t]}function pe(t,e,a){return`
    <div class="stars" data-habit="${t}">
      ${[1,2,3,4,5].map(n=>`
            <button type="button" class="star ${n<=e?"on":""}" data-action="rate-habit" data-id="${t}" data-rating="${n}" ${a?"disabled":""} aria-label="${n} star">★</button>
          `).join("")}
    </div>
  `}function me(t,e,a){return`
    <div class="stars stars-small" data-task="${t}">
      ${[1,2,3,4,5].map(n=>`
            <button type="button" class="star small ${n<=e?"on":""}" data-action="rate-task" data-id="${t}" data-rating="${n}" ${a?"disabled":""} aria-label="${n} star">★</button>
          `).join("")}
    </div>
  `}function ge(t){const e=Number(t)||0;return e?`<span class="conscious-badge">🧠 +${e}</span>`:'<span class="item-meta">No conscious pts</span>'}const Ee=["mentally","psychology","physically","spiritually","socially"];function st(t){return`<span class="cat-badge ${Ee.includes(t)?`cat-${t}`:"cat-custom"}">${y(nt(t))}</span>`}const zt={mentally:"#5b8cff",psychology:"#a06bff",physically:"#22b07d",spiritually:"#e8a51c",socially:"#14b8a6"},Vt=["#f472b6","#38bdf8","#fb923c","#a3e635","#facc15","#e879f9"];function Yt(t,e){return zt[t]?zt[t]:Vt[(e??0)%Vt.length]}function Z(t){const e=Array.isArray(t)?t.filter(Boolean):[];return e.length?`<div class="tag-row">${e.map(a=>`<span class="tag-chip">#${y(a)}</span>`).join("")}</div>`:""}function he(t){return!t||!t.image?"":`<button type="button" class="task-img-thumb" data-action="view-task-image" data-id="${t.id}" aria-label="View attached photo"><img src="${t.image}" alt="Task photo" loading="lazy" /></button>`}function Ne(t){const e=String(t||"");if(!e.trim())return"";const a=e.split(`
`),n=/^\s*(?:•|-|[*])\s+(.*)$/,s=/^\s*\d+[.)]\s+(.*)$/;let i="",o=null;const r=()=>{o&&(i+=o==="ul"?"</ul>":"</ol>",o=null)};return a.forEach(c=>{const d=n.exec(c),h=!d&&s.exec(c);d?(o!=="ul"&&(r(),i+='<ul class="note-list">',o="ul"),i+=`<li>${y(d[1])||"&nbsp;"}</li>`):h?(o!=="ol"&&(r(),i+='<ol class="note-list">',o="ol"),i+=`<li>${y(h[1])||"&nbsp;"}</li>`):c.trim()?(r(),i+=`<p class="note-text">${y(c)}</p>`):(r(),i+='<p class="note-text">&nbsp;</p>')}),r(),`<div class="note" style="margin-top:10px">${i}</div>`}function Jt(t){const e=document.getElementById("day-note");if(!e||e.disabled)return;const a=e.value||"",n=a.split(`
`),s=a.slice(0,e.selectionStart).split(`
`).length-1,i=a.slice(0,e.selectionEnd).split(`
`).length-1,o=e.selectionStart!==e.selectionEnd,r=o?s:0,c=o?i:n.length-1;if(t==="bullets"){const d=n.slice(r,c+1).every(h=>/^\s*(?:•|-|[*])\s+/.test(h)||!h.trim());for(let h=r;h<=c;h++)n[h].trim()&&(d?n[h]=n[h].replace(/^\s*(?:•|-|[*])\s+/,""):/^\s*(?:•|-|[*])\s+/.test(n[h])||(n[h]=`• ${n[h].replace(/^\s*/,"")}`))}else{const d=n.slice(r,c+1).every(b=>/^\s*\d+[.)]\s+/.test(b)||!b.trim());let h=1;for(let b=r;b<=c;b++){if(!n[b].trim())continue;const u=n[b].replace(/^\s*(?:\d+[.)]|•|-|[*])\s+/,"").replace(/^\s*/,"");n[b]=d?u:`${h}. ${u}`,h+=1}}e.value=n.join(`
`),l.setNote(g,e.value);try{e.focus()}catch{}}function Me(t){return new Promise(e=>{if(!t||!String(t.type||"").startsWith("image/"))return e(null);const a=URL.createObjectURL(t),n=new Image,s=()=>{try{URL.revokeObjectURL(a)}catch{}},i=(o,r)=>new Promise(c=>{let d=n.naturalWidth||0,h=n.naturalHeight||0;if(!d||!h)return c(null);const b=Math.min(1,o/Math.max(d,h));d=Math.max(1,Math.round(d*b)),h=Math.max(1,Math.round(h*b));const u=document.createElement("canvas");u.width=d,u.height=h;try{u.getContext("2d").drawImage(n,0,0,d,h),c(u.toDataURL("image/jpeg",r))}catch{c(null)}});n.onload=async()=>{try{let o=await i(900,.72);o&&o.length>ot&&(o=await i(600,.62)),o&&o.length>ot&&(o=await i(400,.55)),s(),e(o&&o.length<=ot?o:null)}catch{s(),e(null)}},n.onerror=()=>{s(),e(null)},n.src=a})}function Xt(t,e){return`
    <select class="sort-select" data-sort-kind="${t}" aria-label="Sort ${t}">
      ${Le.map(([a,n])=>`<option value="${a}" ${e===a?"selected":""}>${n}</option>`).join("")}
    </select>
  `}function Re(t){const e=l.getBadges(),a=l.topBadges(3),n=t.max>0&&t.percent===100,s=ut?e:a;return`
    <section class="section rewards-section">
      <div class="section-head">
        <h2>Rewards</h2>
        ${e.length>3?`<button class="ghost-btn compact" data-action="toggle-badges">${ut?"Show less":`More (${e.length}) ›`}</button>`:""}
      </div>
      ${n?`
        <div class="trophy-card">
          <div class="trophy-cup">🏆</div>
          <div>
            <div class="item-title">Gold Cup — Perfect day!</div>
            <div class="item-meta">100% of points on ${W(g)}</div>
          </div>
        </div>
      `:""}
      ${e.length?`
        <div class="rewards-grid">
          ${s.map(i=>`
            <article class="reward-card tier-${i.tier}">
              <div class="reward-medal">${$t(i.tier)}</div>
              <div>
                <div class="item-title">${y(i.rewardTitle||i.title)}</div>
                <div class="item-meta">${y(i.title)} · ${oe(i.tier)} · ${W((i.earnedAt||"").slice(0,10))}</div>
              </div>
            </article>
          `).join("")}
        </div>
      `:'<div class="empty">No rewards yet. Set a goal in Settings → Goals &amp; Rewards.</div>'}
    </section>
  `}function pt(t){return`<span class="streak-badge">${t} day streak</span>`}function fe(t){return t?`<span class="forward-badge from">↩ Forwarded from ${y(t)}</span>`:""}function mt(t){const e=Array.isArray(t)?t.filter(Boolean):[];return e.length?`<span class="forward-badge to">↪ Forwarded to ${y(e[e.length-1])}</span>`:""}function He(t){const e=new Date(`${t}T00:00:00`);return e.setDate(e.getDate()+1),l.todayKey(e)}function Lt(){return`<button class="ghost-btn compact ${J?"on":""}" data-action="toggle-edit">${J?"Done":"Edit Mode"}</button>`}function je(t){return t?'<span class="lock-badge">Locked</span>':'<span class="open-badge">Open</span>'}function Ie(){l.checkGoals(g);const t=l.getDay(g),e=l.getSettings(),a=e.showConscious!==!1,n=l.getHabits(g),s=l.getTasks(g),i=l.scoreFor(g),o=le(i.percent),r=g===l.todayKey(),c=l.isLocked(g);return`
    <div class="topbar">
      <div>
        <p class="kicker">${r?"Today":"Daily report"}</p>
        <h1>${W(g)}</h1>
      </div>
      <div class="date-nav">
        <button class="icon-btn" data-action="prev-day" aria-label="Previous day">‹</button>
        <button class="icon-btn" data-action="next-day" aria-label="Next day">›</button>
      </div>
    </div>

    <section class="score-hero ${c?"is-locked":""}">
      <div class="score-row">
        <div>
          <div class="score-value">${i.earned}</div>
          <div class="score-unit">of ${i.max||0} points</div>
        </div>
        <div class="hero-side">
          ${je(c)}
          <div class="grade-pill">${o}</div>
        </div>
      </div>
      <div class="progress-track"><div class="progress-fill" style="width:${i.percent}%"></div></div>
      <div class="stats-grid ${a?"stats-4":"stats-3"}">
        <div class="stat"><span class="muted">Habits</span><b>${i.completedHabits}/${i.totalHabits}</b></div>
        <div class="stat"><span class="muted">Tasks</span><b>${i.completedTasks}/${i.totalTasks}</b></div>
        ${a?`<div class="stat"><span class="muted">Conscious</span><b>+${i.consciousScore||0}</b></div>`:""}
        <div class="stat"><span class="muted">Score</span><b>${i.percent}%</b></div>
      </div>
      <p class="lock-hint">
        ${c?`Submitted${t.submittedAt?` at ${Ce(t.submittedAt)}`:""}.${(i.missedHabits||0)+(i.missedTasks||0)>0?` ${(i.missedHabits||0)+(i.missedTasks||0)} missed (${i.missedHabits||0} habits, ${i.missedTasks||0} tasks) — unchecked items count as missed.`:" Nothing missed — all done."} Unlock in Settings to edit.`:`Auto-locks at ${e.lockTime}. Submit when the day is done. Unchecked items will count as missed once locked.`}
      </p>
      ${c?'<button class="ghost-btn full" data-action="goto-settings">Unlock in Settings</button>':'<button class="primary-btn full" data-action="submit-day">Submit and lock report</button>'}
      <div class="export-row">
        <span class="muted">Export:</span>
        <button class="ghost-btn compact" data-action="open-export">Excel / JSON / PDF</button>
      </div>
    </section>

    ${Re(i)}

    <section class="section">
      <div class="section-head">
        <h2>Habits</h2>
        <div class="head-actions">
          ${Xt("habit",e.habitSort||"default")}
          ${Lt()}
          <span class="points">+${i.habitScore}${a&&i.consciousScore?` +${i.consciousScore}🧠`:""} pts</span>
        </div>
      </div>
      <div class="list">
        ${n.length?n.map(d=>{const h=l.habitRating(g,d.id),b=h>0,u=!b&&c,k=l.habitStreak(d.id,g),x=a&&Number(d.consciousPoints)||0;return`
                    <article class="item-card ${b?"done":""} ${u?"missed":""} ${c?"is-locked":""}">
                      <button class="check" data-action="toggle-habit" data-id="${d.id}" ${c?"disabled":""}>✓</button>
                      <div class="item-body">
                        <div class="item-title">${y(d.name)} ${u?'<span class="missed-badge">Missed</span>':""}</div>
                        <div class="item-meta">${st(d.category)} ${d.pin?ct(d.pin):"Not pinned"} · ${h?`${h}/5 ${lt(h)}`:c?"Missed":"Not rated"}</div>
                        ${d.description?`<p class="item-desc">${y(d.description)}</p>`:""}
                        ${a?`<div class="item-meta">${pt(k)} ${ge(x)}</div>`:`<div class="item-meta">${pt(k)}</div>`}
                        ${mt(l.habitForwardedTo(g,d.id))}
                        ${Z(d.tags)}
                        ${pe(d.id,h,c)}
                      </div>
                      <div class="item-side">
                        <div class="points">+${d.points}${x?` +${x}🧠`:""}</div>
                        <div class="mini-actions">
                          ${J?`<button class="mini-btn on" data-action="open-edit-habit" data-id="${d.id}" ${c?"disabled":""}>Edit</button>`:""}
                          <button class="mini-btn" data-action="open-forward-habit" data-id="${d.id}" ${c?"disabled":""} title="Forward habit to another day">${j("forward")}</button>
                          <button class="mini-btn ${d.pin?"on":""}" data-action="open-pin-habit" data-id="${d.id}" ${c?"disabled":""} title="Pin habit">${j("pin")}</button>
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
          ${Xt("task",e.taskSort||"default")}
          ${Lt()}
          <span class="points">+${i.taskScore} pts</span>
        </div>
      </div>
      <div class="list">
        ${s.length?s.map(d=>{const h=!!d.sourcePinId,b=h?l.findPinnedTask(d.sourcePinId):null,u=Math.max(0,Math.min(5,Number(d.rating)||0)),k=!d.done&&c;return`
                    <article class="item-card ${d.done?"done":""} ${k?"missed":""} ${c?"is-locked":""}">
                      <button class="check" data-action="toggle-task" data-id="${d.id}" ${c?"disabled":""}>✓</button>
                      <div class="item-body">
                        <div class="item-title">${y(d.title)} ${k?'<span class="missed-badge">Missed</span>':""}</div>
                        <div class="item-meta">${st(d.category)} ${b?ct(b.pin):"One-time task"} · ${d.done?"Done":c?"Missed":"Pending"} · ${u?`${u}/5 ${lt(u)}`:"No rating"}</div>
                        ${d.description?`<p class="item-desc">${y(d.description)}</p>`:""}
                        ${fe(d.forwardedFrom)}
                        ${mt(d.forwardedTo)}
                        ${Z(d.tags)}
                        ${d.image?'<span class="task-img-badge">📷 Photo attached</span>':""}
                        ${he(d)}
                        ${me(d.id,u,c)}
                      </div>
                      <div class="item-side">
                        <div class="points">+${d.points}</div>
                        <div class="mini-actions">
                          ${J?`<button class="mini-btn on" data-action="open-edit-task" data-id="${d.id}" ${c?"disabled":""}>Edit</button>`:""}
                          <button class="mini-btn" data-action="open-forward-task" data-id="${d.id}" ${c?"disabled":""} title="Forward task to another day">${j("forward")}</button>
                          <button class="mini-btn ${h?"on":""}" data-action="open-pin-task" data-id="${d.id}" ${c?"disabled":""} title="Pin task">${j("pin")}</button>
                          <button class="mini-btn" data-action="remove-task" data-id="${d.id}" ${c?"disabled":""}>✕</button>
                        </div>
                      </div>
                    </article>
                  `}).join(""):'<div class="empty">No tasks yet. Tap + to add one.</div>'}
      </div>
    </section>

    <section class="section">
      <div class="section-head"><h2>Day note</h2></div>
      ${c?"":`
        <div class="note-toolbar">
          <button type="button" class="ghost-btn compact" data-action="note-bullets" title="Bullet list (select lines or whole note)">• Bullets</button>
          <button type="button" class="ghost-btn compact" data-action="note-numbered" title="Numbered list (select lines or whole note)">1. Numbered</button>
        </div>
      `}
      <textarea id="day-note" placeholder="How did today go? Tip: use • Bullets for lists." ${c?"disabled":""}>${y(t.note)}</textarea>
    </section>
  `}const Fe=[["name","Who I am","Your name — shown at the top of your profile.","input"],["about","About — the person I want to be","A short brief about who you are becoming.","textarea"],["lifeAreas","Life Areas","Health, family, career, faith… the areas of life that matter to you.","textarea"],["vision","My Vision","The future you are working toward.","textarea"],["goalsShort","Goals — Short term","Weeks to months from now.","textarea"],["goalsMid","Goals — Mid term","Months to a year from now.","textarea"],["goalsLong","Goals — Long term","Years ahead.","textarea"],["values","Core & personal values","The principles you live by.","textarea"]];function Be(){const t=l.getProfile();return`
    <div class="topbar">
      <div>
        <p class="kicker">Profile</p>
        <h1>${y(t.name)||"My profile"}</h1>
      </div>
    </div>
    <p class="muted tight" style="margin-bottom:14px">Everything here saves automatically on this device and is included in backups.</p>
    ${Fe.map(([e,a,n,s])=>`
      <section class="manage-card" style="margin-bottom:10px">
        <h2>${a}</h2>
        <p class="muted tight">${n}</p>
        ${s==="input"?`<input data-profile="${e}" maxlength="80" value="${y(t[e])}" placeholder="Type here…" />`:`<textarea data-profile="${e}" maxlength="1000" placeholder="Type here…" style="min-height:76px">${y(t[e])}</textarea>`}
      </section>
    `).join("")}
  `}function Oe(){document.querySelectorAll("[data-profile]").forEach(t=>{t.addEventListener("input",()=>{l.setProfileField(t.dataset.profile,t.value)})})}function _e(){const t=l.week(new Date(`${g}T00:00:00`)),e=t.reduce((n,s)=>n+s.earned,0),a=Math.round(e/7);return`
    <section class="section">
      <div class="section-head"><h2>Weekly score</h2></div>
      <section class="score-hero">
        <div class="score-row">
          <div>
            <div class="score-value">${e}</div>
            <div class="score-unit">points this week</div>
          </div>
          <div class="grade-pill">Avg ${a} pts</div>
        </div>
        <div class="week-days">
          ${t.map(n=>`
                <button class="day-cell ${n.date===g?"active":""} ${n.earned>0?"done":""}" data-action="pick-date" data-date="${n.date}">
                  <span>${n.label.slice(0,2)}</span>
                  <b>${n.earned}</b>
                  ${n.locked?'<i class="dot-lock"></i>':""}
                </button>
              `).join("")}
        </div>
      </section>
    </section>
  `}function We(){const t=Ct||N(g),e=Ht(t),a=l.todayKey();return`
    <section class="section">
      <div class="section-head">
        <h2>Reports calendar</h2>
        <div class="date-nav">
          <button class="icon-btn" data-action="history-cal-nav" data-dir="-1" aria-label="Previous month">‹</button>
          <button class="icon-btn" data-action="history-cal-nav" data-dir="1" aria-label="Next month">›</button>
        </div>
      </div>
      <div class="pin-cal">
        <div class="pin-cal-head"><b>${ht(t)}</b></div>
        <div class="pin-cal-grid pin-cal-week">
          ${Rt().map(n=>`<span>${n.label.slice(0,1)}</span>`).join("")}
        </div>
        <div class="pin-cal-grid">
          ${e.map(n=>{if(!n)return"<span></span>";const s=l.scoreFor(n),i=n===g?"on-selected":s.percent>=100?"on-perfect":s.earned>0?"on":"",o=s.locked?'<i class="dot-lock"></i>':"";return`<button type="button" class="pin-cal-day hist-cal-day ${i} ${n===a?"is-today":""}" data-action="pick-date" data-date="${n}" title="${y(n)}: ${s.earned}/${s.max} pts (${s.percent}%)"><b>${Number(n.slice(8,10))}</b><span>${s.earned}</span>${o}</button>`}).join("")}
        </div>
      </div>
    </section>
  `}function Ge(t){const e=new Map((t||[]).map(s=>[s.date,s]));if(!e.size)return'<div class="empty">No locked reports yet.</div>';B=B.filter(s=>e.has(s));const a=Pt||N(g),n=Ht(a);return`
    <div class="pin-cal">
      <div class="pin-cal-head"><b>${ht(a)}</b><span class="item-meta">${e.size} locked</span></div>
      <div class="pin-cal-grid pin-cal-week">
        ${Rt().map(s=>`<span>${s.label.slice(0,1)}</span>`).join("")}
      </div>
      <div class="pin-cal-grid">
        ${n.map(s=>{if(!s)return"<span></span>";const i=e.get(s);return i?`<button type="button" class="pin-cal-day hist-cal-day ${B.includes(s)?"on-selected":"on-locked"}" data-action="toggle-locked-day" data-date="${s}" title="${y(s)}: ${i.earned} pts — tap to select"><b>${Number(s.slice(8,10))}</b><span>${i.earned}</span></button>`:`<span class="pin-cal-day hist-cal-day is-empty"><b>${Number(s.slice(8,10))}</b></span>`}).join("")}
      </div>
    </div>
  `}function qe(){return`
    <section class="manage-card export-card">
      <div class="section-head">
        <div>
          <div class="item-title">Select &amp; export</div>
          <div class="item-meta">Pick a day, week, month or year, then a format.</div>
        </div>
      </div>
      <div class="chip-row" style="margin-bottom:10px">
        ${["day","week","month","year"].map(t=>`<button type="button" class="chip ${M===t?"on":""}" data-action="set-histexp-range" data-range="${t}">${t[0].toUpperCase()}${t.slice(1)}</button>`).join("")}
      </div>
      ${M==="day"||M==="week"?`
        <label>Which ${M==="day"?"day":"week (pick any day in it)"}
          <input id="histexp-date" type="date" value="${g}" />
        </label>
      `:""}
      ${M==="month"?`
        <label>Which month
          <input id="histexp-month" type="month" value="${g.slice(0,7)}" />
        </label>
      `:""}
      ${M==="year"?`
        <label>Which year
          <input id="histexp-year" type="number" min="2000" max="2100" value="${g.slice(0,4)}" />
        </label>
      `:""}
      <div class="export-grid" style="margin-top:10px">
        <button class="choose-card" data-action="histexp-do" data-format="csv"><b>Excel (CSV)</b><span>Opens in Excel / Sheets</span></button>
        <button class="choose-card" data-action="histexp-do" data-format="json"><b>JSON</b><span>Raw data backup</span></button>
        <button class="choose-card" data-action="histexp-do" data-format="pdf"><b>PDF</b><span>Print / save as PDF</span></button>
      </div>
    </section>
  `}function Ue(){const t=l.history(21);return`
    <div class="topbar">
      <div>
        <p class="kicker">Archive</p>
        <h1>Past reports</h1>
      </div>
      <button class="ghost-btn compact" data-action="open-export">Export</button>
    </div>
    ${We()}
    ${_e()}
    ${qe()}
    <div class="history-list">
      ${t.length?t.map(e=>`
                  <article class="history-card">
                    <div class="section-head">
                      <div>
                        <div class="item-title">${W(e.date)}</div>
                        <div class="item-meta">${e.locked?"Locked":"Open"} · ${le(e.percent)} · ${e.percent}%${e.locked&&(e.missedHabits||0)+(e.missedTasks||0)>0?` · ❌ ${(e.missedHabits||0)+(e.missedTasks||0)} missed`:""}</div>
                      </div>
                      <button class="ghost-btn compact" data-action="pick-date" data-date="${e.date}">Open</button>
                    </div>
                    <div class="bar"><span style="width:${e.percent}%"></span></div>
                    ${e.note?Ne(e.note):""}
                  </article>
                `).join(""):'<div class="empty">Complete today to start your history.</div>'}
    </div>
  `}function ze(t,e){const a=new Date(`${t}T00:00:00`);return a.setDate(a.getDate()+e),l.todayKey(a)}function Ve(){return F==="month"?`${at(N(g),Y)}-15`:F==="year"?`${Number(g.slice(0,4))+Y}-06-15`:ze(g,Y*7)}function Ye(t){const[e,a]=l.resolveRange(F,t);return F==="week"?`${W(e)} – ${W(a)}`:F==="month"?ht(e.slice(0,7)):e.slice(0,4)}function Je(){const t=Ve(),e=l.categoryChart(F,t),a=Y===0?F==="week"?"This week":F==="month"?"This month":"This year":Ye(t),n=e.labels.map((i,o)=>{const r=e.cats.reduce((d,h)=>d+(e.perCat[h.id]?e.perCat[h.id][o]:0),0),c=e.cats.map((d,h)=>({cat:d,value:e.perCat[d.id]?e.perCat[d.id][o]:0,ci:h})).filter(d=>d.value>0).map(d=>`<span class="chart-seg" style="height:${Math.max(2,Math.round(d.value/e.max*100))}%;background:${Yt(d.cat.id,d.ci)}" title="${y(d.cat.label)}: ${d.value} pts"></span>`).join("");return`
      <div class="chart-col" title="${y(e.titles[o])}: ${r} pts">
        <div class="chart-bar">${c||'<span class="chart-empty"></span>'}</div>
        <span class="chart-x">${y(i)}</span>
      </div>
    `}).join(""),s=e.cats.map((i,o)=>`
      <span class="chart-legend-item"><i style="background:${Yt(i.id,o)}"></i>${y(i.label)} <b>${e.totals[i.id]||0}</b></span>
    `).join("");return`
    <section class="score-hero">
      <div class="section-head" style="margin-bottom:4px">
        <div>
          <div class="item-title">Progress chart</div>
          <div class="item-meta">${a} · ${e.grandTotal} pts total</div>
        </div>
      </div>
      <div class="chart-nav-row">
        <button type="button" class="mini-btn" data-action="chart-nav" data-dir="-1" aria-label="Previous ${F}">‹</button>
        <div class="chip-row">
          ${["week","month","year"].map(i=>`<button type="button" class="chip ${F===i?"on":""}" data-action="set-chart-range" data-range="${i}">${i[0].toUpperCase()}${i.slice(1)}</button>`).join("")}
        </div>
        <button type="button" class="mini-btn" data-action="chart-nav" data-dir="1" aria-label="Next ${F}">›</button>
      </div>
      <div class="chart-wrap${e.labels.length>12?" scroll-x":""}">${n}</div>
      <div class="chart-legend">${s}</div>
    </section>
  `}function Xe(){const t=l.isLocked(g),e=l.consciousEnabled(),a=l.categoryBreakdown(g),n=a.reduce((i,o)=>i+o.earned,0),s=a.reduce((i,o)=>i+o.max,0);return`
    <div class="topbar">
      <div>
        <p class="kicker">Activities</p>
        <h1>By category</h1>
      </div>
      <div class="date-nav">
        ${Lt()}
        <button class="icon-btn" data-action="prev-day" aria-label="Previous day">‹</button>
        <button class="icon-btn" data-action="next-day" aria-label="Next day">›</button>
      </div>
    </div>
    <section class="score-hero">
      <div class="score-row">
        <div>
          <div class="score-value">${n}</div>
          <div class="score-unit">of ${s||0} category points</div>
        </div>
        <div class="grade-pill">${W(g)}</div>
      </div>
      <p class="lock-hint">Habits and tasks grouped by category.</p>
    </section>
    ${Je()}
    ${a.map(i=>{const o=i.max?Math.round(i.earned/i.max*100):0;return`
          <section class="section">
            <article class="manage-card cat-card cat-${i.id}">
              <div class="section-head">
                <div>
                  <div class="item-title">${i.label}</div>
                  <div class="item-meta">${i.completed}/${i.total} done · rating ${i.habitAvg||0}/5</div>
                </div>
                <div class="points">${i.earned}/${i.max} pts</div>
              </div>
              <div class="bar"><span style="width:${o}%"></span></div>
            </article>
            <div class="list" style="margin-top:10px">
              ${i.habits.length||i.tasks.length?`
                    ${i.habits.map(r=>{const c=l.habitRating(g,r.id),d=!c&&t,h=l.habitStreak(r.id,g),b=e&&Number(r.consciousPoints)||0,u=c>0?b:0,k=Math.round(r.points*c/5)+u,x=r.points+b;return`
                          <article class="item-card ${c?"done":""} ${d?"missed":""} ${t?"is-locked":""}">
                            <button class="check" data-action="toggle-habit" data-id="${r.id}" ${t?"disabled":""}>✓</button>
                            <div class="item-body">
                              <div class="item-title">${y(r.name)} ${d?'<span class="missed-badge">Missed</span>':""}</div>
                              <div class="item-meta">Habit · ${c?`${c}/5 ${lt(c)}`:t?"Missed":"Not rated"} · ${pt(h)}${e?` ${ge(b)}`:""}</div>
                              ${r.description?`<p class="item-desc">${y(r.description)}</p>`:""}
                              ${mt(l.habitForwardedTo(g,r.id))}
                              ${Z(r.tags)}
                              ${pe(r.id,c,t)}
                            </div>
                            <div class="item-side">
                              <div class="points">${k}/${x}</div>
                              <div class="mini-actions">
                                ${J?`<button class="mini-btn on" data-action="open-edit-habit" data-id="${r.id}" ${t?"disabled":""}>Edit</button>`:""}
                                <button class="mini-btn" data-action="open-forward-habit" data-id="${r.id}" ${t?"disabled":""} title="Forward habit to another day">${j("forward")}</button>
                              </div>
                            </div>
                          </article>
                        `}).join("")}
                    ${i.tasks.map(r=>{const c=Math.max(0,Math.min(5,Number(r.rating)||0)),d=!r.done&&t;return`
                          <article class="item-card ${r.done?"done":""} ${d?"missed":""} ${t?"is-locked":""}">
                            <button class="check" data-action="toggle-task" data-id="${r.id}" ${t?"disabled":""}>✓</button>
                            <div class="item-body">
                              <div class="item-title">${y(r.title)} ${d?'<span class="missed-badge">Missed</span>':""}</div>
                              <div class="item-meta">Task · ${r.done?"Done":t?"Missed":"Pending"} · ${c?`${c}/5 ${lt(c)}`:"No rating"}${r.description?` · ${y(r.description)}`:""}</div>
                              ${fe(r.forwardedFrom)}
                              ${mt(r.forwardedTo)}
                              ${Z(r.tags)}
                              ${r.image?'<span class="task-img-badge">📷 Photo attached</span>':""}
                              ${he(r)}
                              ${me(r.id,c,t)}
                            </div>
                            <div class="item-side">
                              <div class="points">+${r.points}</div>
                              <div class="mini-actions">
                                ${J?`<button class="mini-btn on" data-action="open-edit-task" data-id="${r.id}" ${t?"disabled":""}>Edit</button>`:""}
                                <button class="mini-btn" data-action="open-forward-task" data-id="${r.id}" ${t?"disabled":""} title="Forward task to another day">${j("forward")}</button>
                              </div>
                            </div>
                          </article>
                        `}).join("")}
                  `:'<div class="empty">No activities in this category.</div>'}
            </div>
          </section>
        `}).join("")}
  `}function gt(t){return`${t||"daily-report-backup"}-${l.todayKey()}.json`}function Qe(){const t=l.getInstalledAt(),e=String(t).slice(0,10),a=new Date(`${e}T00:00:00`),n=new Date(`${l.todayKey()}T00:00:00`),s=Number.isNaN(a.getTime())?1:Math.max(1,Math.round((n-a)/864e5)+1),i=/^\d{4}-\d{2}-\d{2}$/.test(e)?W(e):e,o=Math.floor((s-1)/365)+1;return`Using Daily Report since ${i} · day ${s} · year ${o}`}function ye(){return typeof window.showDirectoryPicker=="function"}function Mt(){return new Promise((t,e)=>{const a=indexedDB.open("daily-report-pwa",1);a.onupgradeneeded=()=>a.result.createObjectStore("kv"),a.onsuccess=()=>t(a.result),a.onerror=()=>e(a.error)})}function Ze(t){return Mt().then(e=>new Promise((a,n)=>{const s=e.transaction("kv","readonly").objectStore("kv").get(t);s.onsuccess=()=>a(s.result),s.onerror=()=>n(s.error)}))}function Ke(t,e){return Mt().then(a=>new Promise((n,s)=>{const i=a.transaction("kv","readwrite");i.objectStore("kv").put(e,t),i.oncomplete=()=>n(),i.onerror=()=>s(i.error)}))}function ta(t){return Mt().then(e=>new Promise((a,n)=>{const s=e.transaction("kv","readwrite");s.objectStore("kv").delete(t),s.oncomplete=()=>a(),s.onerror=()=>n(s.error)}))}function ea(){return!ye()||typeof indexedDB>"u"?(A="unsupported",Promise.resolve()):Ze("backupDir").then(t=>{if(L=t||null,!L){A="unset";return}return L.queryPermission({mode:"readwrite"}).then(e=>{A=e==="granted"?"granted":"prompt"}).catch(()=>{A="prompt"})}).catch(()=>{L=null,A="unset"})}function aa(){return A==="unsupported"?"Folder picking needs Chrome/Edge on desktop — on phones backups download instead.":A==="unset"?"No folder chosen yet.":A==="prompt"?"Tap Choose folder to allow access again.":A==="denied"?"Access was denied — choose the folder again.":A==="granted"&&L?`Folder: ${L.name}`:"Checking…"}async function sa(){if(!ye()){f("Folder access needs Chrome or Edge");return}try{const t=await window.showDirectoryPicker({id:"daily-report-backup",mode:"readwrite"});await Ke("backupDir",t),L=t,A="granted",f("Backup folder set")}catch(t){t&&t.name==="AbortError"||f("Couldn't open that folder")}$()}async function na(){try{await ta("backupDir")}catch{f("Couldn't remove folder");return}L=null,A="unset",f("Backup folder removed"),$()}async function ia(){if(L){try{const t=await L.requestPermission({mode:"readwrite"});A=t==="granted"?"granted":"denied",f(t==="granted"?"Folder access granted":"Access denied")}catch{A="denied"}$()}}async function oa(){const t=l.exportBackup(),e=gt();if(A==="granted"&&L)try{const n=await(await L.getFileHandle(e,{create:!0})).createWritable();await n.write(t),await n.close(),f("Backup saved to your folder"),be();return}catch{}K(e,t,"application/json"),f("Backup downloaded")}async function ra(){if(A!=="granted"||!L)return[];const t=[];try{for await(const e of L.values())if(e&&e.kind==="file"&&/\.json$/i.test(e.name))try{const a=await e.getFile();t.push({name:e.name,modified:a.lastModified})}catch{}}catch{return t}return t.sort((e,a)=>a.modified-e.modified),t}async function be(){const t=document.getElementById("folder-backup-list");if(!t)return;if(A!=="granted"||!L){t.innerHTML='<button class="ghost-btn compact" data-action="trigger-import">Import from a file instead</button>';return}t.innerHTML='<p class="item-meta">Loading backups…</p>';const e=await ra();if(!document.getElementById("folder-backup-list"))return;e.length?t.innerHTML=e.map(n=>`
            <div style="display:flex;gap:8px;align-items:center;margin-bottom:6px">
              <span class="item-meta" style="flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${y(n.name)}</span>
              <button class="ghost-btn compact" data-action="restore-backup" data-name="${y(n.name)}">Restore</button>
            </div>
          `).join(""):t.innerHTML='<p class="item-meta">Folder is empty — press Export backup now to create the first backup.</p>';const a=document.createElement("div");a.innerHTML='<button class="ghost-btn compact" data-action="trigger-import">Import from a file instead</button>',t.appendChild(a)}async function da(t){if(L)try{const a=await(await L.getFileHandle(t)).getFile();ve(await a.text(),t)}catch{f("Couldn't read that backup")}}function ve(t,e){let a;try{a=JSON.parse(t)}catch{f("That file isn't valid JSON.");return}const n=l.backupKind(a);if(n==="ok"){if(!window.confirm(`Replace ALL app data with "${e}"?`))return;K(gt("daily-report-pre-import"),l.exportBackup(),"application/json"),l.importBackup(a),f("Backup imported"),$();return}if(n==="report-export"){const s=l.previewReport(a);if(!s.days){f("That report file has no day rows to import.");return}if(!window.confirm(`Import ${s.days} day(s) (${s.start} → ${s.end}) from "${e}" as locked history?

${s.newHabits} new habit(s) will be added to your list.
Days already in the app on those dates will be overwritten.`))return;K(gt("daily-report-pre-import"),l.exportBackup(),"application/json");const o=l.importReport(a);if(!o){f("That file doesn't look like a valid Daily Report backup.");return}f(`Imported ${o.days} day(s)${o.habits?` + ${o.habits} new habit(s)`:""}`),$();return}if(n==="wrong-app"){f("That backup belongs to another app (e.g. Iron Log) — it can’t be imported into Daily Report.");return}f("That file doesn't look like a valid Daily Report backup.")}async function ca(){if(!Q){f("Use the browser menu: Install / Add to Home Screen");return}try{Q.prompt();const t=await Q.userChoice;t&&t.outcome==="accepted"&&f("Installing Daily Report…")}catch{}Q=null,$()}async function la(){const t=`./version.json?v=${Date.now()}`,e=await fetch(t,{cache:"no-store"});if(!e.ok)throw new Error(`http ${e.status}`);const a=await e.json(),n=a&&(a.version||a.v)||null;if(!n)throw new Error("no version field");return String(n)}async function ua(){U=!0,Dt=!1,z="Checking for updates… (needs internet)",$();try{if("serviceWorker"in navigator&&navigator.serviceWorker.getRegistration){const e=await navigator.serviceWorker.getRegistration().catch(()=>null);e&&e.update&&e.update().catch(()=>{})}}catch{}if(typeof fetch>"u"){U=!1,z="This browser can’t check — but the app itself works offline. Use Export backup to protect your data.",$();return}const t=setTimeout(()=>{U&&(U=!1,z="Couldn't reach the server — offline? The app itself works offline; updating needs internet.",$())},15e3);try{const e=await la();if(clearTimeout(t),U=!1,At=e,e&&e!==ue){Dt=!0,z="Update found — updating automatically…",$(),await ke(!0);return}z="You're on the latest version. The app works offline."}catch{clearTimeout(t),U=!1,z="Couldn't reach the server — offline, or this file wasn't opened from the installed/hosted app. The app itself works offline; updating needs internet."}$()}function Qt(t){return new Promise(e=>{if(!("serviceWorker"in navigator))return e();const a=()=>e(),n=setTimeout(()=>{try{navigator.serviceWorker.removeEventListener("controllerchange",a)}catch{}e()},t||4e3),s=()=>{clearTimeout(n);try{navigator.serviceWorker.removeEventListener("controllerchange",s)}catch{}e()};try{navigator.serviceWorker.addEventListener("controllerchange",s)}catch{e()}})}async function ke(t){var a;try{K(gt("daily-report-pre-update"),l.exportBackup(),"application/json")}catch{}f("Backup saved — updating app…"),z=`Backup saved — updating${At?` to ${String(At).slice(-8)}`:""}…`,$();const e=()=>{const n=window.location.href.includes("?")?"&":"?";try{window.location.replace(`${window.location.href.split("#")[0]}${n}v=${Date.now()}#updated`)}catch{window.location.reload()}setTimeout(()=>{try{window.location.reload()}catch{}},2500)};try{if("serviceWorker"in navigator&&navigator.serviceWorker.getRegistration){const n=await navigator.serviceWorker.getRegistration().catch(()=>null);if(n){const s=n.waiting;if(s){try{s.postMessage("SKIP_WAITING")}catch{try{n.waiting.postMessage({type:"SKIP_WAITING"})}catch{}}await Qt(4e3),e();return}try{await n.update()}catch{}const i=await navigator.serviceWorker.getRegistration().catch(()=>n),o=(i||n).waiting||(i||n).installing;if(o){try{o.postMessage("SKIP_WAITING")}catch{}try{(a=(i||n).waiting)==null||a.postMessage("SKIP_WAITING")}catch{}await Qt(5e3),e();return}try{const r=navigator.serviceWorker.controller;r&&r.postMessage({type:"CLEAR_APP_CACHES"})}catch{}try{if(typeof caches<"u"){const r=await caches.keys().catch(()=>[]);await Promise.all(r.filter(c=>c.startsWith("daily-report-")).map(c=>caches.delete(c).catch(()=>!1)))}}catch{}try{await fetch(`./index.html?v=${Date.now()}`,{cache:"reload"})}catch{}try{await fetch(`./version.json?v=${Date.now()}`,{cache:"reload"})}catch{}try{await(i||n).unregister()}catch{}e();return}}}catch{}try{await fetch(`./index.html?v=${Date.now()}`,{cache:"reload"})}catch{}setTimeout(e,600)}function pa(){const t=l.getSettings(),e=l.getAllHabits(),a=l.getPinnedTasks(),n=l.lockedReports();return`
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
      <label class="switch-row" style="margin-top:12px">
        <span>Show conscious points 🧠</span>
        <input id="show-conscious" type="checkbox" ${t.showConscious!==!1?"checked":""} />
      </label>
      <p class="item-meta">Turn off to hide conscious points everywhere (scoring ignores them).</p>
      <label style="margin-top:12px">
        Week starts on
        <select id="week-start">
          ${[0,1,2,3,4,5,6].map(s=>{const i=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];return`<option value="${s}" ${l.getWeekStart()===s?"selected":""}>${i[s]}</option>`}).join("")}
        </select>
      </label>
      <p class="item-meta">Applies to the Week tab, week exports, and pin calendars.</p>
    </section>

    <section class="manage-card">
      <h2>Appearance</h2>
      <p class="muted tight">Pick Dark or Light mode. It applies everywhere, instantly.</p>
      <div class="chip-row">
        <button type="button" class="chip ${l.getTheme()==="dark"?"on":""}" data-action="set-theme" data-theme="dark">🌙 Dark</button>
        <button type="button" class="chip ${l.getTheme()==="light"?"on":""}" data-action="set-theme" data-theme="light">☀️ Light</button>
      </div>
    </section>

    <section class="manage-card">
      <h2>Install app</h2>
      <p class="muted tight">Put Daily Report on your home screen for fullscreen offline use. Open it over http://localhost or https — it cannot install from a file:// page.</p>
      ${window.matchMedia&&window.matchMedia("(display-mode: standalone)").matches?'<p class="item-meta">Installed — running as app ✓</p>':'<button class="primary-btn full" data-action="install-app">Install Daily Report</button>'}
    </section>

    <section class="manage-card">
      <h2>App updates</h2>
      <p class="muted tight">The app works fully offline. Only checking for updates needs internet. Tapping Check for updates installs the newest version automatically (a JSON backup of your data is saved first). Your data stays on this device.</p>
      <p class="item-meta">Version: ${y(Pe)}</p>
      <p class="item-meta">📅 ${y(Qe())}</p>
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:8px">
        <button class="primary-btn" data-action="check-updates" ${U?"disabled":""}>${U?"Checking…":"Check for updates"}</button>
        ${Dt?'<button class="primary-btn" data-action="apply-update">Restart with update</button>':""}
      </div>
      <p class="item-meta">${y(z)}</p>
    </section>

    <section class="manage-card">
      <h2>Data backup</h2>
      <p class="muted tight">Pick a backup folder once (Chrome/Edge on desktop) and exports save straight into it. On phones, backups download to your Downloads folder instead. Import accepts full backups (<b>daily-report-backup-*.json</b>) or month/week report exports, which are added as locked history.</p>
      <p class="item-meta">${y(aa())}</p>
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:8px">
        ${A==="prompt"?'<button class="primary-btn" data-action="grant-folder">Allow access</button>':'<button class="ghost-btn compact" data-action="choose-folder">Choose folder</button>'}
        ${L?'<button class="ghost-btn compact" data-action="forget-folder">Remove</button>':""}
        <button class="primary-btn" data-action="backup-now">Export backup now</button>
        <button class="ghost-btn compact" data-action="trigger-import">Import backup</button>
      </div>
      <input type="file" id="backup-file" accept="application/json,.json" hidden />
      <div id="folder-backup-list" style="margin-top:10px"></div>
    </section>

    <section class="manage-card">
      <h2>Categories</h2>
      <p class="muted tight">Add your own categories — they appear in forms, Activities and exports. Built-in ones are locked.</p>
      <div class="habit-manage">
        ${l.getCategories().map(s=>{const i=l.getCustomCategories().some(o=>o.id===s.id);return`
              <article class="manage-card">
                <div class="section-head">
                  <div>${st(s.id)}</div>
                  <div class="mini-actions">
                    ${i?`<button class="mini-btn on" data-action="rename-category" data-id="${s.id}">Rename</button>`:'<span class="item-meta">🔒</span>'}
                    ${i?`<button class="mini-btn" data-action="delete-category" data-id="${s.id}">✕</button>`:""}
                  </div>
                </div>
              </article>
            `}).join("")}
      </div>
      <div style="display:flex;gap:8px;margin-top:10px">
        <input id="new-category" maxlength="30" placeholder="New category name…" style="flex:1;min-width:0" />
        <button class="primary-btn compact-btn" data-action="add-category">Add</button>
      </div>
    </section>

    <section class="manage-card">
      <h2>Tags</h2>
      <p class="muted tight">Rename a tag everywhere at once, or delete it from all habits and tasks. New tags are added inside any habit/task form.</p>
      <div class="habit-manage">
        ${(()=>{const s=l.getAllTags();return s.length?s.map(({tag:i,count:o})=>`
              <article class="manage-card">
                <div class="section-head">
                  <div>
                    <div class="item-title">#${y(i)}</div>
                    <div class="item-meta">Used ${o} time${o===1?"":"s"}</div>
                  </div>
                  <div class="mini-actions">
                    <button class="mini-btn on" data-action="rename-tag" data-tag="${y(i)}">Rename</button>
                    <button class="mini-btn" data-action="delete-tag" data-tag="${y(i)}">✕</button>
                  </div>
                </div>
              </article>
            `).join(""):'<div class="empty">No tags yet — add some in a habit or task form.</div>'})()}
      </div>
      <div style="display:flex;gap:8px;margin-top:10px;flex-wrap:wrap">
        <select id="tag-habit-pick" style="flex:1;min-width:0">
          ${l.getAllHabits().map(s=>`<option value="${s.id}">${y(s.name)}</option>`).join("")}
        </select>
        <input id="new-tag" maxlength="20" placeholder="New tag…" style="flex:1;min-width:0" />
        <button class="primary-btn compact-btn" data-action="add-tag">Add</button>
      </div>
    </section>

    <section class="section">
      <div class="section-head">
        <h2>Goals &amp; Rewards</h2>
        <button class="ghost-btn compact" data-action="open-goal">Add goal</button>
      </div>
      <p class="muted tight">Do a habit / pinned task N days in a row, or collect N perfect (100%) days — earn an Iron, Bronze, Silver or Gold badge with your own title.</p>
      <div class="habit-manage">
        ${l.getGoals().length?l.getGoals().map(s=>{var c,d;const i=l.goalProgress(s,g),o=l.getBadges().some(h=>h.goalId===s.id),r=s.kind==="habit-streak"?((c=l.findHabit(s.targetId))==null?void 0:c.name)||"Deleted habit":s.kind==="task-streak"?((d=l.findPinnedTask(s.targetId))==null?void 0:d.title)||"Deleted task":"Any day at 100%";return`
                    <article class="manage-card goal-card ${o?"goal-earned":""}">
                      <div class="section-head">
                        <div>
                          <div class="item-title">${$t(s.tier)} ${y(s.title)}</div>
                          <div class="item-meta">${oe(s.tier)} · “${y(s.rewardTitle)}” · ${y(r)}</div>
                          <div class="item-meta">${i.current}/${i.target} days ${o?"· Earned ✓":""}</div>
                          <div class="bar"><span style="width:${Math.min(100,Math.round(i.current/i.target*100))}%"></span></div>
                        </div>
                        <div class="mini-actions">
                          <button class="mini-btn on" data-action="open-edit-goal" data-id="${s.id}">Edit</button>
                          <button class="mini-btn" data-action="remove-goal" data-id="${s.id}">✕</button>
                        </div>
                      </div>
                    </article>
                  `}).join(""):'<div class="empty">No goals yet. Tap Add goal to create your first reward.</div>'}
      </div>
      ${l.getBadges().length?`
            <div class="section-head" style="margin-top:14px"><h2>Earned badges</h2></div>
            <div class="rewards-grid">
              ${l.getBadges().map(s=>`
                <article class="reward-card tier-${s.tier}">
                  <div class="reward-medal">${$t(s.tier)}</div>
                  <div>
                    <div class="item-title">${y(s.rewardTitle||s.title)}</div>
                    <div class="item-meta">${y(s.title)} · ${W((s.earnedAt||"").slice(0,10))}</div>
                  </div>
                  <button class="mini-btn" data-action="remove-badge" data-id="${s.id}">✕</button>
                </article>
              `).join("")}
            </div>
          `:""}
    </section>

    <section class="section">
      <div class="section-head">
        <h2>Locked reports</h2>
        <div class="date-nav">
          <button class="icon-btn" data-action="locked-cal-nav" data-dir="-1" aria-label="Previous month">‹</button>
          <button class="icon-btn" data-action="locked-cal-nav" data-dir="1" aria-label="Next month">›</button>
        </div>
      </div>
      <p class="muted tight">Locked days are red — tap days to select them, then unlock all at once.</p>
      ${Ge(n)}
      ${B.length?`
        <div class="chip-row" style="margin-top:10px">
          ${[...B].sort().map(s=>`<button type="button" class="chip on" data-action="toggle-locked-day" data-date="${s}" title="Tap to remove">${s} ✕</button>`).join("")}
        </div>
        <button class="primary-btn full" style="margin-top:10px" data-action="unlock-selected">Unlock ${B.length} day${B.length===1?"":"s"}</button>
      `:""}
    </section>

    <section class="section">
      <div class="section-head">
        <h2>Habits</h2>
        <button class="ghost-btn compact" data-action="open-add-habit">Add</button>
      </div>
      <p class="muted tight">Pin a habit forever, until a date, weekly, monthly, yearly, on custom dates, with optional exception days.</p>
      <div class="habit-manage">
        ${e.length?e.map(s=>`
                    <article class="manage-card">
                      <div class="section-head">
                        <div>
                          <div class="item-title">${y(s.name)}</div>
                          <div class="item-meta">${st(s.category)} · ${s.pin?ct(s.pin):"Not pinned"} · +${s.points} pts ${t.showConscious!==!1?Number(s.consciousPoints)?`· 🧠 +${s.consciousPoints}`:"· No conscious pts":""} · ${pt(l.habitStreak(s.id,g))}</div>
                          ${s.description?`<p class="item-desc">${y(s.description)}</p>`:""}
                          ${Z(s.tags)}
                        </div>
                        <div class="mini-actions">
                          <button class="mini-btn ${s.pin?"on":""}" data-action="open-pin-habit" data-id="${s.id}">${j("pin")}</button>
                          <button class="mini-btn" data-action="remove-habit" data-id="${s.id}">✕</button>
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
        ${a.length?a.map(s=>`
                    <article class="manage-card">
                      <div class="section-head">
                        <div>
                          <div class="item-title">${y(s.title)}</div>
                          <div class="item-meta">${st(s.category)} · ${ct(s.pin)} · +${s.points} pts</div>
                          ${s.description?`<p class="item-desc">${y(s.description)}</p>`:""}
                          ${Z(s.tags)}
                        </div>
                        <div class="mini-actions">
                          <button class="mini-btn on" data-action="open-pin-template" data-id="${s.id}">${j("pin")}</button>
                          <button class="mini-btn" data-action="unpin-template" data-id="${s.id}">✕</button>
                        </div>
                      </div>
                    </article>
                  `).join(""):'<div class="empty">Pin a task from Today to repeat it.</div>'}
      </div>
    </section>
  `}function N(t){if(/^\d{4}-\d{2}$/.test(String(t||"")))return String(t);if(/^\d{4}-\d{2}-\d{2}$/.test(String(t||"")))return String(t).slice(0,7);const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}`}function at(t,e){const[a,n]=String(t).split("-").map(Number),s=new Date(a,(n||1)-1+e,1);return`${s.getFullYear()}-${String(s.getMonth()+1).padStart(2,"0")}`}function ht(t){const[e,a]=String(t).split("-").map(Number);return new Date(e,(a||1)-1,1).toLocaleDateString(void 0,{month:"long",year:"numeric"})}function Rt(){const t=l.getWeekStart(),e=X.findIndex(a=>a.value===t);return e<=0?X:[...X.slice(e),...X.slice(0,e)]}function Ht(t){const[e,a]=String(t).split("-").map(Number),s=(new Date(e,a-1,1).getDay()-l.getWeekStart()+7)%7,i=new Date(e,a,0).getDate(),o=[];for(let r=0;r<s;r++)o.push(null);for(let r=1;r<=i;r++)o.push(`${e}-${String(a).padStart(2,"0")}-${String(r).padStart(2,"0")}`);return o}function Zt(t,e,a){const n=new Set(a||[]),s=Ht(e);return`
    <div class="pin-cal" data-cal="${t}">
      <div class="pin-cal-head">
        <button type="button" class="mini-btn" data-action="pin-cal-nav" data-target="${t}" data-dir="-1" aria-label="Previous month">‹</button>
        <b>${ht(e)}</b>
        <button type="button" class="mini-btn" data-action="pin-cal-nav" data-target="${t}" data-dir="1" aria-label="Next month">›</button>
      </div>
      <div class="pin-cal-grid pin-cal-week">
        ${Rt().map(i=>`<span>${i.label.slice(0,1)}</span>`).join("")}
      </div>
      <div class="pin-cal-grid">
        ${s.map(i=>i?`<button type="button" class="pin-cal-day ${n.has(i)?"on":""}" data-action="toggle-pin-date" data-target="${t}" data-date="${i}">${Number(i.slice(8,10))}</button>`:"<span></span>").join("")}
      </div>
    </div>
  `}function ma(t,e){const a=(t==null?void 0:t.mode)||"forever",n=(t==null?void 0:t.until)||"",s=((t==null?void 0:t.weekdays)||[]).map(Number),i=((t==null?void 0:t.monthDays)||[]).map(Number),o=Array.isArray(t==null?void 0:t.yearDays)?[...t.yearDays].sort():[],r=Array.isArray(t==null?void 0:t.customDates)?[...t.customDates].sort():[],c=Array.isArray(t==null?void 0:t.exceptDates)?[...t.exceptDates].sort():Array.isArray(t==null?void 0:t.exceptions)?[...t.exceptions].sort():[],d=e&&e._exceptCal||N(g),h=e&&e._customCal||N(g),b=e&&e._yearMonth||"01";return`
    <div class="chip-row pin-modes">
      <button type="button" class="chip ${a==="forever"?"on":""}" data-action="pin-mode" data-mode="forever">Forever</button>
      <button type="button" class="chip ${a==="until"?"on":""}" data-action="pin-mode" data-mode="until">Until date</button>
      <button type="button" class="chip ${a==="weekly"?"on":""}" data-action="pin-mode" data-mode="weekly">Weekly</button>
      <button type="button" class="chip ${a==="monthly"?"on":""}" data-action="pin-mode" data-mode="monthly">Monthly</button>
      <button type="button" class="chip ${a==="yearly"?"on":""}" data-action="pin-mode" data-mode="yearly">Yearly</button>
      <button type="button" class="chip ${a==="custom"?"on":""}" data-action="pin-mode" data-mode="custom">Custom</button>
    </div>
    <input type="hidden" name="mode" value="${a}" />
    <label class="pin-until" style="${a==="until"?"":"display:none"}">
      Until
      <input name="until" type="date" value="${n}" />
    </label>
    <div class="pin-weekdays" style="${a==="weekly"?"":"display:none"}">
      <p class="item-meta">Repeat every</p>
      <div class="chip-row">
        ${X.map(u=>`
            <button type="button" class="chip weekday ${s.includes(u.value)?"on":""}" data-action="toggle-weekday" data-day="${u.value}">
              ${u.label}
            </button>
          `).join("")}
      </div>
    </div>
    <div class="pin-monthdays" style="${a==="monthly"?"":"display:none"}">
      <p class="item-meta">Repeat every month on day</p>
      <div class="chip-row">
        ${Array.from({length:31},(u,k)=>k+1).map(u=>`<button type="button" class="chip monthday ${i.includes(u)?"on":""}" data-action="toggle-monthday" data-day="${u}">${u}</button>`).join("")}
      </div>
    </div>
    <div class="pin-yeardays" style="${a==="yearly"?"":"display:none"}">
      <p class="item-meta">Repeat every year on (month + day)</p>
      <div class="row-2">
        <label>Month
          <select id="year-month-select">
            ${Array.from({length:12},(u,k)=>k+1).map(u=>`<option value="${String(u).padStart(2,"0")}" ${b===String(u).padStart(2,"0")?"selected":""}>${new Date(2e3,u-1,1).toLocaleDateString(void 0,{month:"long"})}</option>`).join("")}
          </select>
        </label>
        <label>Day
          <select id="year-day-select">
            ${Array.from({length:31},(u,k)=>k+1).map(u=>`<option value="${String(u).padStart(2,"0")}">${u}</option>`).join("")}
          </select>
        </label>
      </div>
      <button type="button" class="ghost-btn compact" data-action="add-year-day" style="margin-top:8px">Add yearly date</button>
      <div class="chip-row" style="margin-top:8px">
        ${o.length?o.map(u=>`<button type="button" class="chip on" data-action="remove-year-day" data-date="${u}" title="Tap to remove">${u} ✕</button>`).join(""):'<span class="item-meta">No yearly dates yet.</span>'}
      </div>
    </div>
    <div class="pin-customdays" style="margin-top:4px">
      <p class="item-meta"><b style="color:var(--text)">Extra custom dates</b> — also show on these days. Combines with Weekly / Monthly / Yearly; pick the <b style="color:var(--text)">Custom</b> mode to show <i>only</i> on these days. Tap days on the calendar.</p>
      ${Zt("custom",h,r)}
      <div class="chip-row" style="margin-top:8px">
        ${r.length?r.map(u=>`<button type="button" class="chip on" data-action="toggle-pin-date" data-target="custom" data-date="${u}" title="Tap to remove">${u} ✕</button>`).join(""):'<span class="item-meta">No extra custom dates.</span>'}
      </div>
    </div>
    <div class="pin-exceptions" style="margin-top:4px">
      <p class="item-meta"><b style="color:var(--text)">Exceptions</b> — skip these days (tap days on the calendar). Applies to every repeat mode.</p>
      ${Zt("except",d,c)}
      <div class="chip-row" style="margin-top:8px">
        ${c.length?c.map(u=>`<button type="button" class="chip on" data-action="toggle-pin-date" data-target="except" data-date="${u}" title="Tap to remove">${u} ✕</button>`).join(""):'<span class="item-meta">No exceptions.</span>'}
      </div>
    </div>
  `}function ga(){if(!S)return"";if(S==="choose")return`
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
    `;if(S==="habit"||S==="task"||S==="edit-habit"||S==="edit-task"){const t=S==="habit"||S==="edit-habit",e=S.startsWith("edit-"),a=m||{},n=a.category||(t?"physically":"mentally"),s=Math.max(0,Math.min(5,Number(a.rating)||0)),i=Array.isArray(a.tags)?a.tags.join(", "):a.tags||"",o=a.consciousPoints!=null?Number(a.consciousPoints):a.conscious!=null?Number(a.conscious):0;return`
      <div class="modal-backdrop open" data-action="close-modal">
        <form class="sheet" data-form="${S}" data-id="${a.id||""}">
          <div class="handle"></div>
          <h2>${e?"Edit":"New"} ${t?"habit":"task"}</h2>
          <div class="form" style="margin-top:14px">
            <label>
              ${t?"Habit name":"Task name"}
              <input name="title" required maxlength="60" value="${y(a.title||a.name||"")}" placeholder="${t?"Meditate":"Finish report"}" />
            </label>
            ${t?`
                  <label>
                    Description (optional)
                    <textarea name="description" maxlength="240" placeholder="Why this habit matters, extra notes...">${y(a.description||"")}</textarea>
                  </label>
                `:`
                  <label>
                    Description (optional)
                    <textarea name="description" maxlength="240" placeholder="Why this matters, extra notes...">${y(a.description||"")}</textarea>
                  </label>
                  <div>
                    <p class="item-meta">Rating (optional, info only — does not change points)</p>
                    <div class="chip-row rating-row">
                      <button type="button" class="chip ${s===0?"on":""}" data-action="set-rating" data-rating="0">No rating</button>
                      ${[1,2,3,4,5].map(r=>`
                            <button type="button" class="chip ${s===r?"on":""}" data-action="set-rating" data-rating="${r}">${r}★</button>
                          `).join("")}
                    </div>
                    <input type="hidden" name="rating" value="${s}" />
                  </div>
                  <div>
                    <p class="item-meta">Photo (optional — stored on this device, exported with backups)</p>
                    <div style="display:flex;gap:8px;flex-wrap:wrap">
                      <button type="button" class="ghost-btn compact" data-action="pick-task-image">📷 ${(a._image!==void 0?a._image:a.image)?"Change photo":"Attach photo"}</button>
                      ${(a._image!==void 0?a._image:a.image)?'<button type="button" class="ghost-btn compact danger" data-action="remove-task-image">Remove</button>':""}
                    </div>
                    <input type="file" id="task-image-input" accept="image/*" hidden />
                    ${(a._image!==void 0?a._image:a.image)?`<div class="img-picker-preview"><img src="${a._image!==void 0?a._image:a.image}" alt="Attached photo preview" /><button type="button" class="mini-btn" data-action="remove-task-image" title="Remove photo">✕</button></div>`:""}
                  </div>
                `}
            <div>
              <p class="item-meta">Category</p>
              <div class="chip-row cat-row">
                ${l.getCategories().map(r=>`
                    <button type="button" class="chip ${n===r.id?"on":""}" data-action="set-category" data-category="${r.id}">${y(r.label)}</button>
                  `).join("")}
              </div>
              <input type="hidden" name="category" value="${n}" />
            </div>
            <label>
              Tags (optional, comma separated)
              <input name="tags" maxlength="120" value="${y(i)}" placeholder="morning, health" />
            </label>
            <label>
              Points
              <input name="points" type="number" min="1" max="100" value="${a.points||(t?10:5)}" />
            </label>
            <div class="chip-row">
              ${(t?[5,10,15,20]:[5,10,15,25]).map(r=>`<button type="button" class="chip" data-action="set-points" data-points="${r}">${r} pts</button>`).join("")}
            </div>
            ${t?`
                  <div>
                    <p class="item-meta">Conscious points (bonus when habit is done, 0 = Never)</p>
                    <div class="chip-row conscious-row">
                      ${[0,5,10,15,20].map(r=>`
                            <button type="button" class="chip ${o===r?"on":""}" data-action="set-conscious" data-conscious="${r}">${r===0?"Never":`+${r}🧠`}</button>
                          `).join("")}
                    </div>
                    <label style="margin-top:8px">
                      Custom conscious points
                      <input name="consciousPoints" type="number" min="0" max="100" value="${o||0}" />
                    </label>
                  </div>
                `:""}
            <button class="primary-btn" type="submit">Save ${t?"habit":"task"}</button>
            <button class="ghost-btn" type="button" data-action="close-modal">Cancel</button>
          </div>
        </form>
      </div>
    `}if(S==="export"){const t=m&&m.range||"day";return`
      <div class="modal-backdrop open" data-action="close-modal">
        <div class="sheet">
          <div class="handle"></div>
          <h2>Export report</h2>
          <p class="muted tight">Date: ${W(g)}. Pick a range, then a format.</p>
          <div class="form" style="margin-top:14px">
            <div class="chip-row">
              ${[["day","Day"],["week","Week"],["month","Month"],["year","Year"],["all","All"]].map(([e,a])=>`<button type="button" class="chip ${t===e?"on":""}" data-action="set-export-range" data-range="${e}">${a}</button>`).join("")}
            </div>
            <div class="export-grid">
              <button class="choose-card" data-action="do-export" data-format="csv"><b>Excel (CSV)</b><span>Opens in Excel / Sheets</span></button>
              <button class="choose-card" data-action="do-export" data-format="json"><b>JSON</b><span>Raw data backup</span></button>
              <button class="choose-card" data-action="do-export" data-format="pdf"><b>PDF</b><span>Print / save as PDF</span></button>
            </div>
            <button class="ghost-btn" type="button" data-action="close-modal">Cancel</button>
          </div>
        </div>
      </div>
    `}if(S==="goal"||S==="edit-goal"){const t=S==="edit-goal",e=m||{},a=e.kind||"habit-streak",n=l.getAllHabits(),s=l.getPinnedTasks(),i=e.targetId||"";return`
      <div class="modal-backdrop open" data-action="close-modal">
        <form class="sheet" data-form="${S}" data-id="${e.id||""}">
          <div class="handle"></div>
          <h2>${t?"Edit":"New"} goal</h2>
          <div class="form" style="margin-top:14px">
            <label>
              Goal title
              <input name="title" required maxlength="60" value="${y(e.title||"")}" placeholder="Exercise every day" />
            </label>
            <div>
              <p class="item-meta">Goal type</p>
              <div class="chip-row goal-kind-row">
                ${ie.map(o=>`<button type="button" class="chip ${a===o.id?"on":""}" data-action="set-goal-kind" data-kind="${o.id}">${o.label}</button>`).join("")}
              </div>
              <input type="hidden" name="kind" value="${a}" />
            </div>
            <label class="goal-target-habit" style="${a==="habit-streak"?"":"display:none"}">
              Habit
              <select name="habitTarget">
                ${n.map(o=>`<option value="${o.id}" ${i===o.id?"selected":""}>${y(o.name)}</option>`).join("")}
              </select>
            </label>
            <label class="goal-target-task" style="${a==="task-streak"?"":"display:none"}">
              Pinned task
              <select name="taskTarget">
                ${s.length?s.map(o=>`<option value="${o.id}" ${i===o.id?"selected":""}>${y(o.title)}</option>`).join(""):'<option value="">No pinned tasks yet</option>'}
              </select>
            </label>
            <label>
              Number of days
              <input name="targetDays" type="number" min="1" max="365" value="${e.targetDays||7}" />
            </label>
            <div>
              <p class="item-meta">Badge</p>
              <div class="chip-row goal-tier-row">
                ${it.map(o=>`<button type="button" class="chip ${(e.tier||"bronze")===o.id?"on":""}" data-action="set-goal-tier" data-tier="${o.id}">${o.medal} ${o.label}</button>`).join("")}
              </div>
              <input type="hidden" name="tier" value="${e.tier||"bronze"}" />
            </div>
            <label>
              Reward title (yours)
              <input name="rewardTitle" required maxlength="60" value="${y(e.rewardTitle||"")}" placeholder="Champion" />
            </label>
            <button class="primary-btn" type="submit">Save goal</button>
            <button class="ghost-btn" type="button" data-action="close-modal">Cancel</button>
          </div>
        </form>
      </div>
    `}if(S==="pin"){const{kind:t,id:e,title:a,pin:n}=m||{};return`
      <div class="modal-backdrop open" data-action="close-modal">
        <form class="sheet sheet-wide" data-form="pin" data-kind="${t}" data-id="${e}">
          <div class="handle"></div>
          <h2>Pin ${t==="habit"?"habit":"task"}</h2>
          <p class="muted tight">${y(a||"")}</p>
          <div class="form" style="margin-top:14px">
            ${ma(n,m)}
            <button class="primary-btn" type="submit">Save pin</button>
            ${n?'<button class="ghost-btn danger" type="button" data-action="clear-pin">Unpin</button>':""}
            <button class="ghost-btn" type="button" data-action="close-modal">Cancel</button>
          </div>
        </form>
      </div>
    `}if(S==="forward"){const{kind:t,id:e,title:a,from:n}=m||{},s=t==="habit";return`
      <div class="modal-backdrop open" data-action="close-modal">
        <form class="sheet" data-form="forward" data-kind="${t}" data-id="${e}">
          <div class="handle"></div>
          <h2>Forward ${s?"habit":"task"}</h2>
          <p class="muted tight">${y(a||"")}</p>
          <p class="item-meta">From ${y(n||g)} — a copy will be created on the day you pick, marked “↩ Forwarded from ${y(n||g)}”.</p>
          <div class="form" style="margin-top:14px">
            <label>
              Forward to day
              <input name="targetDate" type="date" required value="${He(n||g)}" />
            </label>
            <button class="primary-btn" type="submit">Forward ${s?"habit":"task"} →</button>
            <button class="ghost-btn" type="button" data-action="close-modal">Cancel</button>
          </div>
        </form>
      </div>
    `}if(S==="image"){const{image:t,title:e}=m||{};return t?`
      <div class="lightbox-backdrop" data-action="close-modal">
        <img src="${t}" alt="${y(e||"Task photo")}" />
        <button type="button" class="ghost-btn compact lightbox-close" data-action="close-modal">✕ Close</button>
      </div>
    `:""}return""}function $(){if(vt)try{const t=l.isLocked(g);vt.innerHTML=`
    <div class="app-shell">
      <main class="screen active">
        ${E==="today"?Ie():""}
        ${E==="profile"?Be():""}
        ${E==="history"?Ue():""}
        ${E==="habits"?Xe():""}
        ${E==="settings"?pa():""}
      </main>
      ${["today","habits"].includes(E)&&!t?'<button class="fab" data-action="open-add" aria-label="Add">+</button>':""}
      ${E==="settings"?'<button class="fab" data-action="open-add-habit" aria-label="Add habit">+</button>':""}
      <nav class="tabbar tabs-5">
        <button class="tab ${E==="today"?"active":""}" data-screen="today">${j("home")}Today</button>
        <button class="tab ${E==="profile"?"active":""}" data-screen="profile">${j("profile")}Profile</button>
        <button class="tab ${E==="history"?"active":""}" data-screen="history">${j("history")}History</button>
        <button class="tab ${E==="habits"?"active":""}" data-screen="habits">${j("habit")}Activities</button>
        <button class="tab ${E==="settings"?"active":""}" data-screen="settings">${j("settings")}Settings</button>
      </nav>
    </div>
    ${ga()}
    <div class="toast" id="toast"></div>
  `,fa(),Oe(),ya(),be(),ha()}catch(t){const e=t&&t.stack?String(t.stack).slice(0,400):t&&t.message?t.message:"Unknown error";vt.innerHTML=`<div class="app-shell"><section class="manage-card"><h2>Could not load (Error B)</h2><p class="muted tight">${y(e)}</p><button class="primary-btn full" data-action="reload-app">Reload</button></section></div>`}}function ha(){if(S!=="habit"&&S!=="task")return;const t=document.querySelector(".sheet");t&&(t.scrollTop=0);const e=document.querySelector('.sheet input[name="title"]');if(e)try{e.focus({preventScroll:!0})}catch{try{e.focus()}catch{}}}function fa(){const t=document.getElementById("day-note");t&&t.addEventListener("input",()=>{l.isLocked(g)||l.setNote(g,t.value)})}function ya(){const t=document.getElementById("lock-time"),e=document.getElementById("auto-lock");t&&t.addEventListener("change",()=>{l.setLockTime(t.value),f(`Lock time set to ${t.value}`),$()}),e&&e.addEventListener("change",()=>{l.setAutoLock(e.checked),f(e.checked?"Auto-lock on":"Auto-lock off"),$()});const a=document.getElementById("backup-file");a&&a.addEventListener("change",()=>{const n=a.files[0];if(!n)return;const s=new FileReader;s.onload=()=>{ve(String(s.result||""),n.name),a.value=""},s.onerror=()=>{f("Couldn't read that file."),a.value=""},s.readAsText(n)})}function f(t){const e=document.getElementById("toast");e&&(e.textContent=t,e.classList.add("show"),setTimeout(()=>e.classList.remove("show"),1800))}function $e(){const t=l.getTheme();document.documentElement.dataset.theme=t;const e=document.querySelector('meta[name="theme-color"]');e&&(e.content=t==="light"?"#f3f1ea":"#0e1116")}function y(t){return String(t||"").split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;").split('"').join("&quot;")}function R(){return l.isLocked(g)?(f("This report is locked. Unlock it in Settings."),!0):!1}function jt(t){return{mode:(t==null?void 0:t.mode)||"forever",until:(t==null?void 0:t.until)||"",weekdays:Array.isArray(t==null?void 0:t.weekdays)?t.weekdays.map(Number):[],monthDays:Array.isArray(t==null?void 0:t.monthDays)?t.monthDays.map(Number):[],yearDays:Array.isArray(t==null?void 0:t.yearDays)?[...t.yearDays]:[],customDates:Array.isArray(t==null?void 0:t.customDates)?[...t.customDates]:[],exceptDates:Array.isArray(t==null?void 0:t.exceptDates)?[...t.exceptDates]:Array.isArray(t==null?void 0:t.exceptions)?[...t.exceptions]:[]}}function ba(t){const e=l.findHabit(t);e&&(S="pin",m={kind:"habit",id:t,title:e.name,pin:e.pin?jt(e.pin):{mode:"forever",until:"",weekdays:[],monthDays:[],yearDays:[],customDates:[],exceptDates:[]},_exceptCal:N(g),_customCal:N(g),_yearMonth:"01"})}function va(t){const e=l.findTask(g,t);if(!e)return;const a=e.sourcePinId?l.findPinnedTask(e.sourcePinId):null;S="pin",m={kind:"task",id:t,title:e.title,pin:a!=null&&a.pin?jt(a.pin):{mode:"forever",until:"",weekdays:[],monthDays:[],yearDays:[],customDates:[],exceptDates:[]},_exceptCal:N(g),_customCal:N(g),_yearMonth:"01"}}function ka(t){const e=l.findPinnedTask(t);e&&(S="pin",m={kind:"template",id:t,title:e.title,pin:e.pin?jt(e.pin):{mode:"forever",until:"",weekdays:[],monthDays:[],yearDays:[],customDates:[],exceptDates:[]},_exceptCal:N(g),_customCal:N(g),_yearMonth:"01"})}function $a(t){var d;const e=t.querySelector('input[name="mode"]').value,a=((d=t.querySelector('input[name="until"]'))==null?void 0:d.value)||"",n=[...t.querySelectorAll(".weekday.on")].map(h=>Number(h.dataset.day)),s=[...t.querySelectorAll(".monthday.on")].map(h=>Number(h.dataset.day)),i=m&&m.pin||{},o=Array.isArray(i.yearDays)?i.yearDays:[],r=Array.isArray(i.customDates)?i.customDates:[],c=Array.isArray(i.exceptDates)?i.exceptDates:[];return e==="until"&&!a?(f("Pick an until date"),null):e==="weekly"&&!n.length?(f("Pick at least one weekday"),null):e==="monthly"&&!s.length?(f("Pick at least one day of month"),null):e==="yearly"&&!o.length?(f("Add at least one yearly date"),null):e==="custom"&&!r.length?(f("Pick at least one custom date"),null):{mode:e,until:a,weekdays:n,monthDays:s,yearDays:o,customDates:r,exceptDates:c}}function K(t,e,a){const n=e instanceof Blob?e:new Blob([e],{type:a||"text/plain;charset=utf-8"}),s=URL.createObjectURL(n),i=document.createElement("a");i.href=s,i.download=t,document.body.appendChild(i),i.click(),setTimeout(()=>{document.body.removeChild(i),URL.revokeObjectURL(s)},500)}function et(t){const e=String(t??"");return/[",\n]/.test(e)?`"${e.replace(/"/g,'""')}"`:e}function It(t,e){const[a,n]=l.resolveRange(t,e||g);return{range:t,start:a,end:n,rows:l.exportRows(a,n)}}function Kt(t,e){const a=t||m&&m.range||"day",{start:n,end:s,rows:i}=It(a,e),o=[];o.push(["Daily Report export",`${n} to ${s}`].map(et).join(",")),o.push(["Date","Type","Name","Category","Tags","Points","Rating","Earned","ConsciousPts","Status","Note/Description"].map(et).join(",")),i.forEach(r=>{r.habits.forEach(c=>{o.push([r.date,"Habit",c.name,c.category,(c.tags||[]).join("|"),c.points,c.rating,c.earned,c.consciousPoints,c.status||(c.rating>0?"done":r.locked?"missed":"pending"),c.description||""].map(et).join(","))}),r.tasks.forEach(c=>{o.push([r.date,"Task",c.hasImage?`${c.title} [photo]`:c.title,c.category,(c.tags||[]).join("|"),c.points,c.rating||"",c.earned,"",c.status||(c.done?"done":r.locked?"missed":"pending"),c.description||""].map(et).join(","))}),o.push([r.date,"Summary",`Earned ${r.earned}/${r.max} (${r.percent}%)`,"","","","","","",r.locked?"locked":"open",r.note||""].map(et).join(","))}),K(`daily-report-${a}-${n}-to-${s}.csv`,"\uFEFF"+o.join(`
`),"text/csv;charset=utf-8"),f("Excel (CSV) exported")}function te(t,e){const a=t||m&&m.range||"day",{start:n,end:s,rows:i}=It(a,e),o={app:"Daily Report",exportedAt:new Date().toISOString(),range:a,start:n,end:s,days:i};K(`daily-report-${a}-${n}-to-${s}.json`,JSON.stringify(o,null,2),"application/json"),f("JSON exported")}function ee(t,e){const a=t||m&&m.range||"day",{start:n,end:s,rows:i}=It(a,e),o=i.map(c=>`
        <section style="margin-bottom:18px;border:1px solid #ddd;border-radius:12px;padding:12px">
          <h2 style="margin:0 0 4px;font-size:16px">${y(c.date)} — ${c.earned}/${c.max} pts (${c.percent}%)</h2>
          <p style="margin:0 0 8px;font-size:12px;color:#555">Habits ${c.habitScore} + Conscious ${c.consciousScore} + Tasks ${c.taskScore} · ${c.locked?"Locked":"Open"}${c.note?` · Note: ${y(c.note)}`:""}</p>
          <table style="width:100%;border-collapse:collapse;font-size:12px">
            <thead><tr><th align="left">Type</th><th align="left">Name</th><th align="left">Category</th><th>Points</th><th>Rating</th><th>Earned</th><th>Status</th></tr></thead>
            <tbody>
              ${c.habits.map(d=>`<tr><td>Habit</td><td>${y(d.name)}${d.description?` (${y(d.description)})`:""}</td><td>${y(d.category)}</td><td align="center">${d.points}${d.consciousPoints?`+${d.consciousPoints}🧠`:""}</td><td align="center">${d.rating||"-"}/5</td><td align="center">${d.earned}</td><td align="center">${d.status||(d.rating>0?"done":c.locked?"missed":"pending")}</td></tr>`).join("")}
              ${c.tasks.map(d=>`<tr><td>Task</td><td>${y(d.title)}${d.hasImage?" 📷":""}${d.description?` (${y(d.description)})`:""}</td><td>${y(d.category)}</td><td align="center">${d.points}</td><td align="center">${d.rating?`${d.rating}/5`:"-"}</td><td align="center">${d.earned}</td><td align="center">${d.status||(d.done?"done":c.locked?"missed":"pending")}</td></tr>`).join("")}
            </tbody>
          </table>
        </section>
      `).join(""),r=window.open("","_blank");if(!r){f("Popup blocked — allow popups to export PDF");return}r.document.write(`<!DOCTYPE html><html><head><title>Daily Report ${n} to ${s}</title></head><body style="font-family:sans-serif;padding:24px"><h1>Daily Report — ${n} to ${s}</h1>${o}<script>window.onload=function(){window.print()}<\/script></body></html>`),r.document.close(),f("PDF print view opened")}document.addEventListener("click",t=>{const e=t.target.closest("[data-screen]");if(e){E=e.dataset.screen,$();return}const a=t.target.closest("[data-action]");if(!a)return;const n=a.dataset.action;if(n==="close-modal"){if(S==="image"){S=null,m=null,$();return}(t.target.classList.contains("modal-backdrop")||a.classList.contains("ghost-btn"))&&(S=null,m=null,$());return}if(n==="note-bullets"){Jt("bullets");return}if(n==="note-numbered"){Jt("numbered");return}if(n==="pick-task-image"){const s=document.getElementById("task-image-input");s?s.click():f("Photo picking needs a browser file picker");return}if(n==="remove-task-image"){m&&(m._image="",$(),f("Photo removed — save to apply"));return}if(n==="view-task-image"){const s=l.findTask(g,a.dataset.id),i=s&&s.image?s.image:m&&(m._image||m.image)||"";if(!i){f("No photo on this task");return}S="image",m={image:i,title:s&&s.title||"Task photo"},$();return}if(n==="prev-day"&&Ut(-1),n==="next-day"&&Ut(1),n==="reload-app"){window.location.reload();return}if(n==="set-theme"){const s=a.dataset.theme==="light"?"light":"dark";l.setTheme(s),$e(),f(s==="light"?"Light mode on":"Dark mode on")}if(n==="install-app"){ca();return}if(n==="check-updates"){ua();return}if(n==="apply-update"){ke();return}if(n==="backup-now"){oa();return}if(n==="trigger-import"){const s=document.getElementById("backup-file");s&&s.click();return}if(n==="choose-folder"){sa();return}if(n==="grant-folder"){ia();return}if(n==="forget-folder"){na();return}if(n==="restore-backup"){da(a.dataset.name);return}if(n==="goto-settings"&&(E="settings"),n==="open-add-habit"&&(S="habit",m=null),n==="open-add-task"){if(R())return;S="task",m={category:"mentally"}}if(n==="open-add"){if(R())return;S="choose",m={category:"mentally"}}if(n==="toggle-edit"&&(J=!J),n==="open-edit-habit"){const s=l.findHabit(a.dataset.id);if(!s)return;S="edit-habit",m={id:s.id,name:s.name,description:s.description||"",points:s.points,category:s.category,tags:s.tags||[],consciousPoints:Number(s.consciousPoints)||0}}if(n==="open-edit-task"){if(R())return;const s=l.findTask(g,a.dataset.id);if(!s)return;S="edit-task",m={id:s.id,title:s.title,points:s.points,description:s.description,category:s.category,tags:s.tags||[],rating:Number(s.rating)||0,image:s.image||"",_image:void 0}}if(n==="toggle-badges"&&(ut=!ut),n==="open-goal"&&(S="goal",m={kind:"habit-streak",targetDays:7,tier:"bronze"}),n==="open-edit-goal"){const s=l.getGoals().find(i=>i.id===a.dataset.id);if(!s)return;S="edit-goal",m={...s}}if(n==="remove-goal"&&(l.removeGoal(a.dataset.id),f("Goal removed")),n==="remove-badge"&&(l.removeBadge(a.dataset.id),f("Badge removed")),n==="rate-habit"){if(R())return;const i=l.habitRating(g,a.dataset.id)===Number(a.dataset.rating)?0:Number(a.dataset.rating);l.setHabitRating(g,a.dataset.id,i)}if(n==="rate-task"){if(R())return;const s=l.findTask(g,a.dataset.id);if(!s)return;const o=(Number(s.rating)||0)===Number(a.dataset.rating)?0:Number(a.dataset.rating);l.setTaskRating(g,a.dataset.id,o)}if(n==="open-export"&&(S="export",m={range:m&&m.range||"day"}),n==="set-export-range"){S="export",m={range:a.dataset.range||"day"},$();return}if(n==="do-export"){const s=a.dataset.format,i=m&&m.range||"day";s==="csv"&&Kt(i,g),s==="json"&&te(i,g),s==="pdf"&&ee(i,g),S=null,m=null}if(n==="set-histexp-range"){M=["day","week","month","year"].includes(a.dataset.range)?a.dataset.range:"day",$();return}if(n==="histexp-do"){const s=a.dataset.format;let i=g;if(M==="day"||M==="week"){const o=document.getElementById("histexp-date");o&&/^\d{4}-\d{2}-\d{2}$/.test(o.value)&&(i=o.value)}else if(M==="month"){const o=document.getElementById("histexp-month");o&&/^\d{4}-\d{2}$/.test(o.value)&&(i=`${o.value}-15`)}else if(M==="year"){const o=document.getElementById("histexp-year"),r=Number(o&&o.value);Number.isInteger(r)&&r>=2e3&&r<=2100&&(i=`${String(r)}-06-15`)}s==="csv"&&Kt(M,i),s==="json"&&te(M,i),s==="pdf"&&ee(M,i);return}if(n==="history-cal-nav"){const s=Ct||N(g);Ct=at(s,Number(a.dataset.dir)||0),$();return}if(n==="locked-cal-nav"){const s=Pt||N(g);Pt=at(s,Number(a.dataset.dir)||0),$();return}if(n==="toggle-locked-day"){const s=a.dataset.date;if(!new Set(l.lockedReports().map(r=>r.date)).has(s)){f("Only locked days can be selected");return}const o=B.indexOf(s);o>=0?B.splice(o,1):B.push(s),$();return}if(n==="unlock-selected"){const s=[...B].sort();if(!s.length)return;s.forEach(i=>l.unlockDay(i)),B=[],f(s.length===1?`Unlocked ${s[0]}`:`Unlocked ${s.length} days`),$();return}if(n==="submit-day"&&(l.submitDay(g),f("Report submitted and locked")),n==="unlock-day"&&(l.unlockDay(a.dataset.date),f("Report unlocked")),n==="toggle-habit"){if(R())return;l.toggleHabit(g,a.dataset.id)}if(n==="toggle-task"){if(R())return;l.toggleTask(g,a.dataset.id)}if(n==="remove-task"){if(R())return;l.removeTask(g,a.dataset.id)}if(n==="remove-habit"&&l.removeHabit(a.dataset.id),n==="open-pin-habit"&&ba(a.dataset.id),n==="open-forward-habit"){if(R())return;const s=l.findHabit(a.dataset.id);if(!s)return;S="forward",m={kind:"habit",id:s.id,title:s.name,from:g}}if(n==="open-forward-task"){if(R())return;const s=l.findTask(g,a.dataset.id);if(!s)return;S="forward",m={kind:"task",id:s.id,title:s.title,from:g}}if(n==="open-pin-task"){if(R())return;va(a.dataset.id)}if(n==="open-pin-template"&&ka(a.dataset.id),n==="unpin-template"&&(l.unpinTaskTemplate(a.dataset.id),f("Task unpinned")),n==="pick-date"&&(g=a.dataset.date,E="today"),n==="set-chart-range"){F=["week","month","year"].includes(a.dataset.range)?a.dataset.range:"week",Y=0,$();return}if(n==="chart-nav"){Y+=Number(a.dataset.dir)||0,Y>0&&(Y=0),$();return}if(n==="add-category"){const s=document.getElementById("new-category"),i=l.addCategory(s?s.value:"");f(i.ok?"Category added":i.reason||"Couldn't add category"),$();return}if(n==="rename-category"){const s=l.getCustomCategories().find(r=>r.id===a.dataset.id),i=window.prompt("Rename category",s?s.label:"");if(i==null)return;const o=l.renameCategory(a.dataset.id,i);f(o.ok?"Category renamed":o.reason||"Couldn't rename"),$();return}if(n==="delete-category"){if(!window.confirm("Delete this category? Its habits and tasks move to Mentally."))return;const s=l.deleteCategory(a.dataset.id);f(s.ok?"Category deleted":s.reason||"Couldn't delete"),$();return}if(n==="rename-tag"){const s=window.prompt("Rename tag everywhere",a.dataset.tag||"");if(s==null)return;const i=l.renameTag(a.dataset.tag,s);f(i.ok?i.merged?"Tags merged":"Tag renamed everywhere":i.reason||"Couldn't rename"),$();return}if(n==="delete-tag"){if(!window.confirm(`Delete tag "#${a.dataset.tag}" from all habits and tasks?`))return;l.deleteTag(a.dataset.tag),f("Tag deleted everywhere"),$();return}if(n==="add-tag"){const s=document.getElementById("tag-habit-pick"),i=document.getElementById("new-tag"),o=l.addTagToHabit(s?s.value:"",i?i.value:"");f(o.ok?"Tag added to habit":o.reason||"Couldn't add tag"),$();return}if(n==="set-points"){const s=document.querySelector('input[name="points"]');s&&(s.value=a.dataset.points),document.querySelectorAll(".chip-row .chip[data-points]").forEach(i=>i.classList.remove("on")),a.classList.add("on");return}if(n==="set-category"){const s=a.closest("form")||a.closest(".sheet"),i=s.querySelector('input[name="category"]');i&&(i.value=a.dataset.category),s.querySelectorAll(".cat-row .chip").forEach(o=>o.classList.remove("on")),a.classList.add("on");return}if(n==="set-rating"){const s=a.closest(".sheet")||a.closest("form")||document,i=s.querySelector('input[name="rating"]');i&&(i.value=a.dataset.rating),s.querySelectorAll(".rating-row .chip").forEach(o=>o.classList.remove("on")),a.classList.add("on");return}if(n==="set-conscious"){const s=a.closest(".sheet")||a.closest("form")||document,i=s.querySelector('input[name="consciousPoints"]');i&&(i.value=a.dataset.conscious),s.querySelectorAll(".conscious-row .chip").forEach(o=>o.classList.remove("on")),a.classList.add("on");return}if(n==="set-goal-kind"){const s=a.closest(".sheet")||document,i=s.querySelector('input[name="kind"]');i&&(i.value=a.dataset.kind),s.querySelectorAll(".goal-kind-row .chip").forEach(d=>d.classList.remove("on")),a.classList.add("on");const o=a.dataset.kind,r=s.querySelector(".goal-target-habit"),c=s.querySelector(".goal-target-task");r&&(r.style.display=o==="habit-streak"?"":"none"),c&&(c.style.display=o==="task-streak"?"":"none"),m&&(m.kind=o);return}if(n==="set-goal-tier"){const s=a.closest(".sheet")||document,i=s.querySelector('input[name="tier"]');i&&(i.value=a.dataset.tier),s.querySelectorAll(".goal-tier-row .chip").forEach(o=>o.classList.remove("on")),a.classList.add("on");return}if(n==="pin-mode"){const s=a.closest("form"),i=a.dataset.mode;s.querySelector('input[name="mode"]').value=i,s.querySelectorAll(".pin-modes .chip").forEach(r=>r.classList.remove("on")),a.classList.add("on");const o=(r,c)=>{const d=s.querySelector(r);d&&(d.style.display=c?"":"none")};o(".pin-until",i==="until"),o(".pin-weekdays",i==="weekly"),o(".pin-monthdays",i==="monthly"),o(".pin-yeardays",i==="yearly"),m&&m.pin&&(m.pin.mode=i);return}if(n==="toggle-weekday"){a.classList.toggle("on");return}if(n==="toggle-monthday"){a.classList.toggle("on");return}if(n==="pin-cal-nav"){if(!m)return;const s=a.dataset.target,i=Number(a.dataset.dir)||0;s==="except"?m._exceptCal=at(m._exceptCal||N(g),i):m._customCal=at(m._customCal||N(g),i),$();return}if(n==="toggle-pin-date"){if(!m||!m.pin)return;const s=a.dataset.target,i=a.dataset.date,o=s==="custom"?"customDates":"exceptDates",r=Array.isArray(m.pin[o])?[...m.pin[o]]:[],c=r.indexOf(i);c>=0?r.splice(c,1):(r.push(i),r.length>365&&r.shift()),m.pin[o]=r.sort(),$();return}if(n==="add-year-day"){if(!m||!m.pin)return;const s=a.closest("form")||document,i=s.querySelector("#year-month-select"),o=s.querySelector("#year-day-select");i&&(m._yearMonth=i.value);const r=`${i?i.value:"01"}-${o?o.value:"01"}`,c=Array.isArray(m.pin.yearDays)?[...m.pin.yearDays]:[];c.includes(r)||c.push(r),m.pin.yearDays=c.sort(),$();return}if(n==="remove-year-day"){if(!m||!m.pin)return;const s=a.dataset.date;m.pin.yearDays=(m.pin.yearDays||[]).filter(i=>i!==s),$();return}if(n==="clear-pin"){const s=a.closest("form"),i=s.dataset.kind,o=s.dataset.id;if(i==="habit"&&l.unpinHabit(o),i==="task"){const r=l.findTask(g,o);r!=null&&r.sourcePinId&&l.unpinTaskTemplate(r.sourcePinId)}i==="template"&&l.unpinTaskTemplate(o),S=null,m=null,f("Unpinned"),$();return}$()});document.addEventListener("submit",t=>{const e=t.target.closest("[data-form]");if(!e)return;t.preventDefault();const a=e.dataset.form;if(a==="habit"||a==="task"||a==="edit-habit"||a==="edit-task"){const n=new FormData(e),s=String(n.get("title")||""),i=Number(n.get("points")||0),o=String(n.get("category")||"mentally"),r=String(n.get("description")||""),c=String(n.get("tags")||""),d=Math.max(0,Math.min(5,Number(n.get("rating")||0))),h=Math.max(0,Math.min(100,Number(n.get("consciousPoints")||0)));if(!s.trim())return;const b=m&&m._image!==void 0?q(m._image):q(m&&m.image);if(a==="habit")l.addHabit(s,i,{description:r,category:o,consciousPoints:h,tags:c}),f("Habit added");else if(a==="task"){if(R())return;l.addTask(g,s,i,{description:r,category:o,rating:d,tags:c,image:b}),f("Task added")}else if(a==="edit-habit")l.updateHabit(e.dataset.id,{name:s,description:r,points:i,category:o,consciousPoints:h,tags:c}),f("Habit updated");else{if(R())return;l.updateTask(g,e.dataset.id,{title:s,points:i,description:r,category:o,rating:d,tags:c,image:b}),f("Task updated")}S=null,m=null,$();return}if(a==="pin"){const n=$a(e);if(!n)return;const s=e.dataset.kind,i=e.dataset.id;s==="habit"&&l.pinHabit(i,n),s==="task"&&l.pinTask(g,i,n),s==="template"&&l.updatePinnedTask(i,n),S=null,m=null,f("Pin saved"),$();return}if(a==="forward"){const n=new FormData(e),s=String(n.get("targetDate")||""),i=e.dataset.kind,o=e.dataset.id,r=m&&m.from||g;if(!/^\d{4}-\d{2}-\d{2}$/.test(s)){f("Pick a valid date");return}const c=i==="habit"?l.forwardHabit(r,o,s):l.forwardTask(r,o,s);if(!c.ok){f(c.reason||"Could not forward");return}S=null,m=null,g=s,E="today",f(`Forwarded to ${s}`),$();return}if(a==="goal"||a==="edit-goal"){const n=new FormData(e),s=String(n.get("title")||"").trim(),i=String(n.get("kind")||"habit-streak"),o=String(n.get("tier")||"bronze"),r=String(n.get("rewardTitle")||"").trim(),c=Math.max(1,Math.min(365,Number(n.get("targetDays")||7)));if(!s||!r){f("Goal title and reward title are required");return}let d="";if(i==="habit-streak"&&(d=String(n.get("habitTarget")||"")),i==="task-streak"&&(d=String(n.get("taskTarget")||"")),(i==="habit-streak"||i==="task-streak")&&!d){f(i==="habit-streak"?"Pick a habit":"Pin a task first, then pick it");return}a==="goal"?(l.addGoal({title:s,kind:i,targetId:d,targetDays:c,tier:o,rewardTitle:r}),f("Goal added")):(l.updateGoal(e.dataset.id,{title:s,kind:i,targetId:d,targetDays:c,tier:o,rewardTitle:r}),f("Goal updated"));const h=l.checkGoals(g);h.length&&f(`🏅 Reward earned: ${h[0].rewardTitle}!`),S=null,m=null,$()}});document.addEventListener("change",t=>{const e=t.target.closest(".sort-select");if(e){const a=e.dataset.sortKind;a==="habit"&&l.setHabitSort(e.value),a==="task"&&l.setTaskSort(e.value),$()}if(t.target&&t.target.id==="show-conscious"&&(l.setShowConscious(t.target.checked),f(t.target.checked?"Conscious points on":"Conscious points hidden"),$()),t.target&&t.target.id==="week-start"&&(l.setWeekStart(Number(t.target.value)),f("Week starts on "+t.target.selectedOptions[0].textContent),$()),t.target&&t.target.id==="year-month-select"&&m&&(m._yearMonth=t.target.value),t.target&&t.target.id==="task-image-input"){const a=t.target.files&&t.target.files[0];if(!a)return;if(!String(a.type||"").startsWith("image/")){f("Please pick an image file"),t.target.value="";return}f("Processing photo…"),Me(a).then(n=>{if(t.target.value="",!n){f("Photo too large or unreadable — try a smaller one");return}m&&(m._image=n,$(),f("Photo attached — save to apply"))})}});if("serviceWorker"in navigator){window.addEventListener("load",()=>{navigator.serviceWorker.register("./sw.js").catch(()=>{})});let t=!1;try{sessionStorage.getItem("dr-updated-reload")&&(t=!0)}catch{}navigator.serviceWorker.addEventListener("controllerchange",()=>{if(!t){t=!0;try{sessionStorage.setItem("dr-updated-reload","1")}catch{}window.location.reload()}})}function wa(){const t=document.getElementById("boot-error");t&&(t.style.display="none")}wa();$e();$();ea().then(()=>{E==="settings"&&$()});
