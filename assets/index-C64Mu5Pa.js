(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function a(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=a(s);fetch(s.href,n)}})();const Gt="daily-report-v2",wt=[{id:"mentally",label:"Mentally"},{id:"psychology",label:"Psychology"},{id:"physically",label:"Physically"},{id:"spiritually",label:"Spiritually"},{id:"socially",label:"Socially"}];wt.map(t=>t.id);const qt=[{id:"h1",name:"Wake up early",points:10,icon:"sunrise",category:"physically",pin:{mode:"forever"}},{id:"h2",name:"Drink water",points:5,icon:"drop",category:"physically",pin:{mode:"forever"}},{id:"h3",name:"Exercise",points:15,icon:"bolt",category:"physically",pin:{mode:"forever"}},{id:"h4",name:"Read 20 minutes",points:10,icon:"book",category:"mentally",pin:{mode:"forever"}},{id:"h5",name:"No junk food",points:10,icon:"leaf",category:"physically",pin:{mode:"forever"}}],Ut={lockTime:"21:00",autoLock:!0,showConscious:!0,habitSort:"default",taskSort:"default",theme:"dark",weekStart:1};function gt(t){const e=Number(t);return Number.isInteger(e)&&e>=0&&e<=6?e:1}const et=[{id:"iron",label:"Iron",medal:"🥉",rank:1},{id:"bronze",label:"Bronze",medal:"🥉",rank:2},{id:"silver",label:"Silver",medal:"🥈",rank:3},{id:"gold",label:"Gold",medal:"🥇",rank:4}],zt=[{id:"habit-streak",label:"Habit streak"},{id:"task-streak",label:"Pinned task streak"},{id:"perfect-days",label:"Perfect days (100%)"}];function At(t){var e;return((e=et.find(a=>a.id===t))==null?void 0:e.rank)||0}function ht(t){var e;return((e=et.find(a=>a.id===t))==null?void 0:e.medal)||"🏅"}function Vt(t){var e;return((e=et.find(a=>a.id===t))==null?void 0:e.label)||t||"Badge"}function D(t){const e=Array.isArray(t)?t:String(t||"").split(","),a=[];return e.forEach(i=>{const s=String(i||"").trim().slice(0,20);s&&!a.some(n=>n.toLowerCase()===s.toLowerCase())&&a.push(s),a.length>=10}),a.slice(0,10)}function ut(t,e){const a=[...t];return e==="points"?a.sort((i,s)=>(Number(s.points)||0)-(Number(i.points)||0)):e==="category"?a.sort((i,s)=>tt(P(i.category)).localeCompare(tt(P(s.category)))):e==="tags"&&a.sort((i,s)=>(i.tags&&i.tags[0]||"~~~").localeCompare(s.tags&&s.tags[0]||"~~~")),a}const z=[{value:1,label:"Mon"},{value:2,label:"Tue"},{value:3,label:"Wed"},{value:4,label:"Thu"},{value:5,label:"Fri"},{value:6,label:"Sat"},{value:0,label:"Sun"}];function I(t=new Date){const e=t.getFullYear(),a=String(t.getMonth()+1).padStart(2,"0"),i=String(t.getDate()).padStart(2,"0");return`${e}-${a}-${i}`}function St(){return{habits:{},habitRatings:{},habitMissed:{},habitForwarded:{},tasks:[],note:"",locked:!1,lockOverride:null,submittedAt:null,lockedHabits:null}}var N=[];function O(){return[...wt,...N]}function P(t){return O().map(a=>a.id).includes(t)?t:"mentally"}function tt(t){var e;return((e=O().find(a=>a.id===t))==null?void 0:e.label)||"Mentally"}const at=7e5;function _(t){const e=String(t||"");return e.startsWith("data:image/")?e.length>at?"":e:""}function Ct(t){const e=Math.max(0,Math.min(5,Number(t.rating)||0)),a=s=>/^\d{4}-\d{2}-\d{2}$/.test(String(s||""))?String(s):"",i=s=>Array.isArray(s)?s.filter(n=>/^\d{4}-\d{2}-\d{2}$/.test(String(n))).map(String).slice(0,50):[];return{...t,description:t.description||"",category:P(t.category),tags:D(t.tags),rating:e,done:!!t.done,missed:!!t.missed,forwardedFrom:a(t.forwardedFrom),forwardedHabitId:String(t.forwardedHabitId||""),forwardedTo:i(t.forwardedTo),image:_(t.image)}}function R(t){const e=Number(t);return!Number.isFinite(e)||e<0?0:Math.min(100,Math.round(e))}function q(t){if(!t||!t.mode)return null;const e=(s,n,o)=>Array.isArray(s)?s.map(Number).filter(r=>Number.isFinite(r)&&r>=n&&r<=o):[],a=s=>Array.isArray(s)?s.filter(n=>/^\d{4}-\d{2}-\d{2}$/.test(String(n))).map(String).slice(0,365):[],i=s=>Array.isArray(s)?s.filter(n=>/^\d{2}-\d{2}$/.test(String(n))).map(String).slice(0,366):[];return{mode:["forever","until","weekly","monthly","yearly","custom"].includes(t.mode)?t.mode:"forever",until:t.until||"",weekdays:e(t.weekdays,0,6),monthDays:e(t.monthDays,1,31),yearDays:i(t.yearDays),customDates:a(t.customDates),exceptDates:a(t.exceptDates||t.exceptions)}}function le(t,e){const a=`${t} ${e}`.toLowerCase();return a.includes("read")||a.includes("study")||a.includes("learn")?"mentally":a.includes("meditat")||a.includes("pray")||a.includes("journal")?"spiritually":a.includes("mood")||a.includes("calm")||a.includes("therapy")?"psychology":a.includes("friend")||a.includes("family")||a.includes("social")||a.includes("call")||a.includes("visit")?"socially":"physically"}function ft(t){const e=zt.some(a=>a.id===t.kind)?t.kind:"habit-streak";return{id:String(t.id||`g${Date.now()}`),title:String(t.title||"").trim().slice(0,60)||"My goal",kind:e,targetId:String(t.targetId||""),targetDays:Math.max(1,Math.min(365,Number(t.targetDays)||7)),tier:et.some(a=>a.id===t.tier)?t.tier:"bronze",rewardTitle:String(t.rewardTitle||"").trim().slice(0,60)||"Reward",createdAt:t.createdAt||new Date().toISOString()}}function ue(t){if(!Array.isArray(t))return[];const e=new Set(wt.map(i=>i.id)),a=[];return t.forEach(i=>{if(!i||typeof i!="object")return;const s=String(i.id||"").trim().slice(0,40),n=String(i.label||"").trim().slice(0,30);!s||!n||e.has(s.toLowerCase())||(e.add(s.toLowerCase()),a.push({id:s,label:n}))}),a.slice(0,20)}function pe(t,e){const a=String(t&&t.installedAt||"");if(/^\d{4}-\d{2}-\d{2}/.test(a))return a;const i=Object.keys(e||{}).sort();return i.length?`${i[0]}T00:00:00.000`:new Date().toISOString()}function Jt(t){N=ue(t.customCategories||[]);const e=(Array.isArray(t.habits)&&t.habits.length?t.habits:qt).map(i=>({...i,description:String(i.description||"").slice(0,240),category:P(i.category||le(i.id,i.name)),consciousPoints:R(i.consciousPoints),tags:D(i.tags),pin:q(i.pin)})),a={};return Object.entries(t.days||{}).forEach(([i,s])=>{a[i]={...St(),habits:s.habits||{},habitRatings:s.habitRatings||{},habitMissed:s.habitMissed||{},habitForwarded:s.habitForwarded&&typeof s.habitForwarded=="object"?s.habitForwarded:{},tasks:Array.isArray(s.tasks)?s.tasks.map(Ct):[],note:s.note||"",locked:!!s.locked,lockOverride:s.lockOverride||(s.locked?"locked":null),submittedAt:s.submittedAt||null,lockedHabits:Array.isArray(s.lockedHabits)?s.lockedHabits:null}}),{habits:e,customCategories:N,installedAt:pe(t,a),pinnedTasks:Array.isArray(t.pinnedTasks)?t.pinnedTasks.map(i=>({...Ct(i),pin:q(i.pin)})):[],days:a,goals:Array.isArray(t.goals)?t.goals.map(ft):[],badges:Array.isArray(t.badges)?t.badges.filter(i=>i&&i.id&&i.goalId).map(i=>({id:String(i.id),goalId:String(i.goalId),title:String(i.title||""),tier:i.tier||"bronze",rewardTitle:String(i.rewardTitle||""),earnedAt:i.earnedAt||new Date().toISOString()})):[],settings:{lockTime:t.settings&&t.settings.lockTime||Ut.lockTime,autoLock:!t.settings||t.settings.autoLock!==!1,showConscious:!t.settings||t.settings.showConscious!==!1,habitSort:["default","points","category","tags"].includes(t.settings&&t.settings.habitSort)?t.settings.habitSort:"default",taskSort:["default","points","category","tags"].includes(t.settings&&t.settings.taskSort)?t.settings.taskSort:"default",theme:["light","dark"].includes(t.settings&&t.settings.theme)?t.settings.theme:"dark",weekStart:gt(t.settings&&t.settings.weekStart)}}}function Pt(){return{habits:qt.map(t=>({...t,description:"",tags:[]})),customCategories:[],installedAt:new Date().toISOString(),pinnedTasks:[],days:{},goals:[],badges:[],settings:{...Ut}}}function me(){try{const t=localStorage.getItem(Gt)||localStorage.getItem("daily-report-v1");return t?Jt(JSON.parse(t)):Pt()}catch{return Pt()}}let p=me();N=p.customCategories||[];p.customCategories=N;let Yt=0,pt={key:null,value:null};function S(){Yt+=1;try{localStorage.setItem(Gt,JSON.stringify(p))}catch{}}function ge(t){return new Date(`${t}T00:00:00`).getDay()}function X(t){const e=new Date(`${t}T00:00:00`);return e.setDate(e.getDate()-1),I(e)}function st(t,e){if(!t)return!0;if(Array.isArray(t.exceptDates)&&t.exceptDates.includes(e)||Array.isArray(t.exceptions)&&t.exceptions.includes(e))return!1;if((Array.isArray(t.customDates)?t.customDates:[]).includes(e)||t.mode==="forever")return!0;if(t.mode==="until")return!!t.until&&e<=t.until;if(t.mode==="weekly")return Array.isArray(t.weekdays)&&t.weekdays.includes(ge(e));if(t.mode==="monthly"){const i=Array.isArray(t.monthDays)?t.monthDays.map(Number):[];return i.length?i.includes(Number(String(e).slice(8,10))):!0}if(t.mode==="yearly"){const i=Array.isArray(t.yearDays)?t.yearDays:[];return i.length?i.includes(String(e).slice(5,10)):!0}return t.mode!=="custom"}function it(t){if(!t)return"Not pinned";const e=(t.exceptDates||t.exceptions||[]).length,a=e?` · ⛔ ${e} exception${e>1?"s":""}`:"",i=t.mode==="custom"?0:Array.isArray(t.customDates)?t.customDates.length:0,s=i?` +${i} custom`:"";if(t.mode==="forever")return`Pinned forever${s}${a}`;if(t.mode==="until")return`${t.until?`Pinned until ${t.until}`:"Pinned until a date"}${s}${a}`;if(t.mode==="weekly"){const n=Array.isArray(t.weekdays)?t.weekdays:[],o=z.filter(r=>n.includes(r.value)).map(r=>r.label);return`${o.length?`Weekly: ${o.join(", ")}`:"Weekly (no days)"}${s}${a}`}if(t.mode==="monthly"){const n=Array.isArray(t.monthDays)?t.monthDays:[];return`${n.length?`Monthly: day${n.length>1?"s":""} ${[...n].sort((o,r)=>o-r).join(", ")}`:"Monthly"}${s}${a}`}if(t.mode==="yearly"){const n=Array.isArray(t.yearDays)?t.yearDays:[];return`${n.length?`Yearly: ${[...n].sort().join(", ")}`:"Yearly"}${s}${a}`}if(t.mode==="custom"){const n=Array.isArray(t.customDates)?t.customDates:[];return`${n.length?`Custom: ${n.length} date${n.length>1?"s":""}`:"Custom dates"}${a}`}return"Pinned"}function Lt(t){const[e,a]=(p.settings.lockTime||"21:00").split(":").map(Number),i=new Date(`${t}T00:00:00`);return i.setHours(e||0,a||0,0,0),i}function Xt(t){const e=p.days[t];return e?e.lockOverride==="locked"||e.locked===!0:!1}function yt(t,e){const a=p.days[t];return a?a.habitRatings&&a.habitRatings[e]!=null?Number(a.habitRatings[e])||0:a.habits&&a.habits[e]?5:0:0}function bt(t){const e=C(t),a=p.habits.filter(i=>st(i.pin,t));e.lockedHabits=a.map(i=>({id:i.id,name:i.name,description:String(i.description||"").slice(0,240),points:Number(i.points)||0,icon:i.icon||"star",category:P(i.category),consciousPoints:R(i.consciousPoints),tags:D(i.tags),pin:q(i.pin)})),e.habitMissed={},a.forEach(i=>{yt(t,i.id)<=0?(e.habitMissed[i.id]=!0,e.habitRatings[i.id]=0,e.habits[i.id]=!1):e.habitMissed&&delete e.habitMissed[i.id]}),e.tasks.forEach(i=>{i.missed=!i.done})}function Et(t){const e=C(t);return e.lockOverride==="unlocked"?!1:e.lockOverride==="locked"||e.locked?((!e.lockedHabits||e.habitMissed==null)&&bt(t),!0):p.settings.autoLock&&Date.now()>=Lt(t).getTime()?(e.locked=!0,e.lockOverride="locked",e.submittedAt=e.submittedAt||Lt(t).toISOString(),bt(t),S(),!0):!1}function C(t){return p.days[t]||(p.days[t]=St()),p.days[t]}function he(t){const e=C(t);if(Xt(t))return e;let a=!1;return p.pinnedTasks.forEach(i=>{st(i.pin,t)&&(e.tasks.some(s=>s.sourcePinId===i.id)||(e.tasks.push({id:`ptask-${i.id}-${t}`,title:i.title,points:i.points,description:i.description||"",category:P(i.category),tags:D(i.tags),rating:0,done:!1,missed:!1,sourcePinId:i.id,image:_(i.image)}),a=!0))}),a&&S(),e}function j(t){return!l.isLocked(t)}function Mt(t){const e=O().find(a=>a.label.toLowerCase()===String(t||"").trim().toLowerCase());return e?e.id:"mentally"}function Nt(t){return!t||typeof t!="object"||Array.isArray(t)?[]:Array.isArray(t.days)?t.days.filter(e=>e&&/^\d{4}-\d{2}-\d{2}$/.test(String(e.date||""))):[]}const l={todayKey:I,exportBackup(){return JSON.stringify({app:"Daily Report",kind:"full-backup",version:1,exportedAt:new Date().toISOString(),data:p},null,2)},backupKind(t){if(!t||typeof t!="object"||Array.isArray(t))return"invalid";const e=t.data&&typeof t.data=="object"&&!Array.isArray(t.data)?t.data:t;return Array.isArray(e.days)?"report-export":Array.isArray(e.categories)||Array.isArray(e.plans)||Array.isArray(e.schedule)?"wrong-app":typeof e!="object"||e===null||e.habits!==void 0&&!Array.isArray(e.habits)||e.days!==void 0&&(typeof e.days!="object"||e.days===null||Array.isArray(e.days))||e.settings!==void 0&&(typeof e.settings!="object"||e.settings===null||Array.isArray(e.settings))||!["habits","pinnedTasks","days","goals","badges","settings"].some(i=>e[i]!==void 0)?"invalid":"ok"},importBackup(t){if(this.backupKind(t)!=="ok")return!1;const e=t.data&&typeof t.data=="object"&&!Array.isArray(t.data)?t.data:t;return p=Jt(e),N=p.customCategories||[],p.customCategories=N,S(),!0},previewReport(t){const e=Nt(t);if(!e.length)return{days:0,start:"",end:"",newHabits:0};const a=new Set(p.habits.map(n=>String(n.name||"").trim().toLowerCase())),i=new Set;e.forEach(n=>{(Array.isArray(n.habits)?n.habits:[]).forEach(o=>{const r=String(o&&o.name||"").trim().toLowerCase();r&&!a.has(r)&&i.add(r)})});const s=e.map(n=>String(n.date)).sort();return{days:e.length,start:s[0],end:s[s.length-1],newHabits:i.size}},importReport(t){const e=Nt(t);if(!e.length)return!1;const a=e.map(r=>String(r.date)).sort(),i=a[a.length-1],s={};p.habits.forEach(r=>{s[String(r.name||"").trim().toLowerCase()]=r});let n=0;const o=Date.now();return e.forEach((r,c)=>{const d=String(r.date);(Array.isArray(r.habits)?r.habits:[]).forEach(u=>{const k=String(u&&u.name||"").trim().slice(0,80);if(!k)return;const T=k.toLowerCase();if(!s[T]){const v={id:`h${o}_${n}`,name:k,description:String(u&&u.description||"").slice(0,240),points:Number(u&&u.points||10)||10,icon:"star",category:Mt(u&&u.category),consciousPoints:R(u&&u.consciousPoints),tags:D(u&&u.tags),pin:{mode:"until",until:i,weekdays:[],monthDays:[],yearDays:[],customDates:[],exceptDates:[]}};p.habits.push(v),s[T]=v,n+=1}});const g=St();g.note=String(r.note||""),g.locked=!0,g.lockOverride="locked",g.submittedAt=null;const b=[];(Array.isArray(r.habits)?r.habits:[]).forEach(u=>{const k=s[String(u&&u.name||"").trim().toLowerCase()];if(!k)return;const T=Math.max(0,Math.min(5,Number(u&&u.rating||0)));g.habitRatings[k.id]=T,g.habits[k.id]=T>0,T<=0&&(g.habitMissed[k.id]=!0),b.push({id:k.id,name:k.name,description:k.description,points:k.points,icon:k.icon||"star",category:P(k.category),consciousPoints:R(k.consciousPoints),tags:D(k.tags),pin:q(k.pin)})}),g.lockedHabits=b,g.tasks=(Array.isArray(r.tasks)?r.tasks:[]).map((u,k)=>({id:`t${o}_${c}_${k}`,title:String(u&&u.title||"Task").slice(0,120),points:Number(u&&u.points||5)||5,description:String(u&&u.description||""),category:Mt(u&&u.category),tags:D(u&&u.tags),rating:Math.max(0,Math.min(5,Number(u&&u.rating||0))),done:!!(u&&u.done),missed:!(u&&u.done),image:"",forwardedFrom:/^\d{4}-\d{2}-\d{2}$/.test(String(u&&u.forwardedFrom||""))?String(u.forwardedFrom):"",forwardedHabitId:"",forwardedTo:Array.isArray(u&&u.forwardedTo)?u.forwardedTo.filter(T=>/^\d{4}-\d{2}-\d{2}$/.test(String(T))).map(String).slice(0,50):[]})),p.days[d]=g}),S(),{days:e.length,habits:n}},getSettings(){return p.settings},setLockTime(t){p.settings.lockTime=t||"21:00",S()},setAutoLock(t){p.settings.autoLock=!!t,S()},setShowConscious(t){p.settings.showConscious=!!t,S()},consciousEnabled(){return p.settings.showConscious!==!1},setHabitSort(t){p.settings.habitSort=["default","points","category","tags"].includes(t)?t:"default",S()},setTaskSort(t){p.settings.taskSort=["default","points","category","tags"].includes(t)?t:"default",S()},getWeekStart(){return gt(p.settings.weekStart)},setWeekStart(t){p.settings.weekStart=gt(t),S()},getTheme(){return p.settings.theme==="light"?"light":"dark"},setTheme(t){p.settings.theme=t==="light"?"light":"dark",S()},getHabits(t,e){if(t&&Xt(t)){const n=p.days[t];if(n&&Array.isArray(n.lockedHabits)){const o=e||p.settings.habitSort||"default",r=[...n.lockedHabits];return o==="default"?r:ut(r,o)}}const i=p.habits.filter(n=>t?st(n.pin,t):!0).sort((n,o)=>+!!o.pin-+!!n.pin),s=e||p.settings.habitSort||"default";return s==="default"?i:ut(i,s)},getTasks(t,e){const a=this.getDay(t),i=e||p.settings.taskSort||"default";return i==="default"?a.tasks:ut(a.tasks,i)},getAllHabits(){return p.habits},getPinnedTasks(){return p.pinnedTasks},getDay(t){return Et(t),he(t)},isLocked(t){return Et(t)},submitDay(t){const e=C(t);e.locked=!0,e.lockOverride="locked",e.submittedAt=new Date().toISOString(),bt(t),S(),this.checkGoals(t)},unlockDay(t){const e=C(t);e.locked=!1,e.lockOverride="unlocked",e.habitMissed={},e.lockedHabits=null,e.tasks.forEach(a=>{a.missed=!1}),S()},isHabitMissed(t,e){const a=p.days[t];return!a||!(a.locked||a.lockOverride==="locked")?!1:a.habitMissed&&a.habitMissed[e]?!0:yt(t,e)<=0},isTaskMissed(t,e){const a=p.days[t];if(!a)return!1;const i=(a.tasks||[]).find(s=>s.id===e);return i?i.missed===!0?!0:i.missed===!1?!1:!!(a.locked||a.lockOverride==="locked")&&!i.done:!1},missedCounts(t){const e=this.getDay(t),a=this.getHabits(t),i=!!(e.locked||e.lockOverride==="locked");return{habits:a.filter(s=>e.habitMissed&&e.habitMissed[s.id]?!0:i&&yt(t,s.id)<=0).length,tasks:e.tasks.filter(s=>s.done?!1:s.missed===!0?!0:s.missed===!1?!1:i).length}},lockDay(t){this.submitDay(t)},lockedReports(){return Object.keys(p.days).sort().reverse().filter(t=>this.isLocked(t)).map(t=>({date:t,submittedAt:p.days[t].submittedAt,...this.scoreFor(t)}))},habitRating(t,e){const a=p.days[t];return a?a.habitRatings&&a.habitRatings[e]!=null?Number(a.habitRatings[e])||0:a.habits&&a.habits[e]?5:0:0},setHabitRating(t,e,a){if(!j(t))return;const i=C(t),s=Math.max(0,Math.min(5,Number(a)||0));i.habitRatings[e]=s,i.habits[e]=s>0,S(),this.checkGoals(t)},toggleHabit(t,e){if(!j(t))return;const a=this.habitRating(t,e)>0?0:5;this.setHabitRating(t,e,a)},addTask(t,e,a,i={}){if(!j(t))return;C(t).tasks.push({id:`t${Date.now()}`,title:e.trim(),points:Number(a)||5,description:String(i.description||"").trim(),category:P(i.category),tags:D(i.tags),rating:Math.max(0,Math.min(5,Number(i.rating)||0)),done:!1,missed:!1,forwardedFrom:/^\d{4}-\d{2}-\d{2}$/.test(String(i.forwardedFrom||""))?String(i.forwardedFrom):"",forwardedHabitId:String(i.forwardedHabitId||""),forwardedTo:[],image:_(i.image)}),S(),this.checkGoals(t)},setTaskRating(t,e,a){if(!j(t))return;const s=C(t).tasks.find(o=>o.id===e);if(!s)return;const n=Math.max(0,Math.min(5,Number(a)||0));s.rating=n,S()},toggleTask(t,e){if(!j(t))return;const i=C(t).tasks.find(s=>s.id===e);i&&(i.done=!i.done,S(),this.checkGoals(t))},removeTask(t,e){if(!j(t))return;const a=C(t);a.tasks=a.tasks.filter(i=>i.id!==e),S()},forwardTask(t,e,a){if(!/^\d{4}-\d{2}-\d{2}$/.test(String(a||"")))return{ok:!1,reason:"Pick a valid date"};if(t===a)return{ok:!1,reason:"Already on that day"};if(!j(t))return{ok:!1,reason:"Source day is locked"};if(this.isLocked(a))return{ok:!1,reason:"Target day is locked"};const s=C(t).tasks.find(r=>r.id===e);if(!s)return{ok:!1,reason:"Task not found"};C(a).tasks.push({id:`t${Date.now()}`,title:s.title,points:Number(s.points)||5,description:String(s.description||""),category:P(s.category),tags:D(s.tags),rating:0,done:!1,missed:!1,forwardedFrom:t,forwardedHabitId:String(s.forwardedHabitId||""),forwardedTo:[],image:_(s.image)});const o=Array.isArray(s.forwardedTo)?s.forwardedTo:[];return o.includes(a)||o.push(a),s.forwardedTo=o.slice(0,50),S(),this.checkGoals(a),{ok:!0}},forwardHabit(t,e,a){if(!/^\d{4}-\d{2}-\d{2}$/.test(String(a||"")))return{ok:!1,reason:"Pick a valid date"};if(t===a)return{ok:!1,reason:"Already on that day"};if(!j(t))return{ok:!1,reason:"Source day is locked"};if(this.isLocked(a))return{ok:!1,reason:"Target day is locked"};const i=p.habits.find(r=>r.id===e);if(!i)return{ok:!1,reason:"Habit not found"};C(a).tasks.push({id:`t${Date.now()}`,title:i.name,points:Number(i.points)||10,description:String(i.description||""),category:P(i.category),tags:D(i.tags),rating:0,done:!1,missed:!1,forwardedFrom:t,forwardedHabitId:e,forwardedTo:[]});const n=C(t);(!n.habitForwarded||typeof n.habitForwarded!="object")&&(n.habitForwarded={});const o=Array.isArray(n.habitForwarded[e])?n.habitForwarded[e]:[];return o.includes(a)||o.push(a),n.habitForwarded[e]=o.slice(0,50),S(),this.checkGoals(a),{ok:!0}},habitForwardedTo(t,e){const a=p.days[t];if(!a||!a.habitForwarded)return[];const i=a.habitForwarded[e];return Array.isArray(i)?i:[]},setNote(t,e){j(t)&&(C(t).note=e,S())},addHabit(t,e,a={}){p.habits.push({id:`h${Date.now()}`,name:t.trim(),description:String(a.description||"").trim().slice(0,240),points:Number(e)||10,icon:"star",category:P(a.category||"physically"),consciousPoints:R(a.consciousPoints),tags:D(a.tags),pin:{mode:"forever",until:"",weekdays:[]}}),S()},updateHabit(t,e){const a=p.habits.find(i=>i.id===t);a&&(e.name!=null&&(a.name=String(e.name).trim()||a.name),e.description!=null&&(a.description=String(e.description).trim().slice(0,240)),e.points!=null&&(a.points=Number(e.points)||a.points),e.category!=null&&(a.category=P(e.category)),e.consciousPoints!=null&&(a.consciousPoints=R(e.consciousPoints)),e.tags!=null&&(a.tags=D(e.tags)),S())},updateTask(t,e,a){if(!j(t))return;const s=C(t).tasks.find(n=>n.id===e);if(s){if(a.title!=null&&(s.title=String(a.title).trim()||s.title),a.points!=null&&(s.points=Number(a.points)||s.points),a.description!=null&&(s.description=String(a.description).trim()),a.category!=null&&(s.category=P(a.category)),a.tags!=null&&(s.tags=D(a.tags)),a.image!==void 0&&(s.image=_(a.image)),a.rating!=null&&(s.rating=Math.max(0,Math.min(5,Number(a.rating)||0))),s.sourcePinId){const n=p.pinnedTasks.find(o=>o.id===s.sourcePinId);n&&(n.title=s.title,n.points=s.points,n.description=s.description,n.category=s.category,a.tags!=null&&(n.tags=D(a.tags)),a.image!==void 0&&(n.image=_(a.image)))}S()}},habitStreak(t,e){const a=p.habits.find(o=>o.id===t);if(!a)return 0;let i=e,s=0;this.habitRating(i,t)===0&&(i=X(i));let n=0;for(;s<400;){if(s+=1,!st(a.pin,i)){i=X(i);continue}if(this.habitRating(i,t)>0){n+=1,i=X(i);continue}break}return n},categoryBreakdown(t){const e=this.getDay(t),a=this.getHabits(t);return O().map(i=>{const s=a.filter(v=>P(v.category)===i.id),n=e.tasks.filter(v=>P(v.category)===i.id),o=s.reduce((v,x)=>{const lt=this.habitRating(t,x.id);return v+Math.round(x.points*lt/5)},0),r=p.settings.showConscious!==!1,c=r?s.reduce((v,x)=>v+(this.habitRating(t,x.id)>0?R(x.consciousPoints):0),0):0,d=s.reduce((v,x)=>v+x.points,0),g=r?s.reduce((v,x)=>v+R(x.consciousPoints),0):0,b=n.reduce((v,x)=>v+(x.done?x.points:0),0),u=n.reduce((v,x)=>v+x.points,0),k=s.map(v=>this.habitRating(t,v.id)),T=k.length?Math.round(k.reduce((v,x)=>v+x,0)/k.length*10)/10:0;return{...i,habits:s,tasks:n,earned:o+c+b,max:d+g+u,habitAvg:T,consciousEarned:c,consciousMax:g,completed:s.filter(v=>this.habitRating(t,v.id)>0).length+n.filter(v=>v.done).length,total:s.length+n.length}})},removeHabit(t){p.habits=p.habits.filter(e=>e.id!==t),S()},pinHabit(t,e){const a=p.habits.find(i=>i.id===t);a&&(a.pin=q(e),S())},unpinHabit(t){const e=p.habits.find(a=>a.id===t);e&&(e.pin=null,S())},pinTask(t,e,a){const s=C(t).tasks.find(o=>o.id===e);if(!s)return;if(s.sourcePinId){const o=p.pinnedTasks.find(r=>r.id===s.sourcePinId);if(o){o.pin=q(a),S();return}}const n=`p${Date.now()}`;p.pinnedTasks.push({id:n,title:s.title,points:s.points,description:s.description||"",category:P(s.category),tags:D(s.tags),pin:q(a),image:_(s.image)}),s.sourcePinId=n,S()},unpinTaskTemplate(t){p.pinnedTasks=p.pinnedTasks.filter(e=>e.id!==t),S()},updatePinnedTask(t,e){const a=p.pinnedTasks.find(i=>i.id===t);a&&(a.pin=q(e),S())},findHabit(t){return p.habits.find(e=>e.id===t)||null},findTask(t,e){return C(t).tasks.find(a=>a.id===e)||null},findPinnedTask(t){return p.pinnedTasks.find(e=>e.id===t)||null},getInstalledAt(){return String(p.installedAt||new Date().toISOString())},getCategories(){return O().map(t=>({...t}))},getCustomCategories(){return N.map(t=>({...t}))},addCategory(t){const e=String(t||"").trim().slice(0,30);if(!e)return{ok:!1,reason:"Type a category name"};if(O().some(s=>s.label.toLowerCase()===e.toLowerCase()))return{ok:!1,reason:"That category already exists"};if(N.length>=20)return{ok:!1,reason:"Too many categories (max 20 custom)"};let i=`c${Date.now().toString(36)}`;return O().some(s=>s.id===i)&&(i=`c${Date.now().toString(36)}${Math.floor(Math.random()*99)}`),N.push({id:i,label:e}),S(),{ok:!0,id:i}},renameCategory(t,e){const a=N.find(n=>n.id===t);if(!a)return{ok:!1,reason:"Built-in categories can’t be renamed"};const i=String(e||"").trim().slice(0,30);return i?O().some(n=>n.id!==t&&n.label.toLowerCase()===i.toLowerCase())?{ok:!1,reason:"That category already exists"}:(a.label=i,S(),{ok:!0}):{ok:!1,reason:"Type a category name"}},deleteCategory(t){const e=N.findIndex(a=>a.id===t);return e<0?{ok:!1,reason:"Built-in categories can’t be deleted"}:(N.splice(e,1),p.habits.forEach(a=>{a.category===t&&(a.category="mentally")}),p.pinnedTasks.forEach(a=>{a.category===t&&(a.category="mentally")}),Object.values(p.days).forEach(a=>{(a.tasks||[]).forEach(i=>{i.category===t&&(i.category="mentally")})}),S(),{ok:!0})},getAllTags(){const t=new Map,e=a=>{D(a).forEach(i=>{t.set(i,(t.get(i)||0)+1)})};return p.habits.forEach(a=>e(a.tags)),p.pinnedTasks.forEach(a=>e(a.tags)),Object.values(p.days).forEach(a=>{(a.tasks||[]).forEach(i=>e(i.tags))}),[...t.entries()].map(([a,i])=>({tag:a,count:i})).sort((a,i)=>i.count-a.count||a.tag.localeCompare(i.tag))},renameTag(t,e){const a=String(t||"").trim(),i=D(e)[0]||"";if(!a||!i)return{ok:!1,reason:"Type a tag name"};if(a.toLowerCase()===i.toLowerCase()){const o=r=>D((r||[]).map(c=>String(c).toLowerCase()===a.toLowerCase()?i:c));return p.habits.forEach(r=>{r.tags=o(r.tags)}),p.pinnedTasks.forEach(r=>{r.tags=o(r.tags)}),Object.values(p.days).forEach(r=>{(r.tasks||[]).forEach(c=>{c.tags=o(c.tags)})}),S(),{ok:!0}}const s=this.getAllTags().some(o=>o.tag.toLowerCase()===i.toLowerCase()),n=o=>{const r=(o||[]).map(c=>String(c).toLowerCase()===a.toLowerCase()?i:c);return D(r)};return p.habits.forEach(o=>{o.tags=n(o.tags)}),p.pinnedTasks.forEach(o=>{o.tags=n(o.tags)}),Object.values(p.days).forEach(o=>{(o.tasks||[]).forEach(r=>{r.tags=n(r.tags)})}),S(),{ok:!0,merged:s}},deleteTag(t){const e=String(t||"").trim().toLowerCase();if(!e)return{ok:!1,reason:"Pick a tag first"};const a=i=>(i||[]).filter(s=>String(s).toLowerCase()!==e);return p.habits.forEach(i=>{i.tags=a(i.tags)}),p.pinnedTasks.forEach(i=>{i.tags=a(i.tags)}),Object.values(p.days).forEach(i=>{(i.tasks||[]).forEach(s=>{s.tags=a(s.tags)})}),S(),{ok:!0}},addTagToHabit(t,e){const a=p.habits.find(s=>s.id===t);if(!a)return{ok:!1,reason:"Pick a habit first"};const i=D(e)[0]||"";return i?(a.tags=D([...a.tags||[],i]),S(),{ok:!0}):{ok:!1,reason:"Type a tag name"}},categoryChart(t,e){const a=["week","month","year"].includes(t)?t:"week",i=`${a}|${e}|${Yt}`;if(pt.key===i)return pt.value;const s=O(),n=[];if(a==="year"){const b=String(e).slice(0,4);for(let u=0;u<12;u++){const k=String(u+1).padStart(2,"0"),T=new Date(Number(b),u+1,0).getDate();n.push({label:new Date(Number(b),u,1).toLocaleDateString(void 0,{month:"short"}),title:new Date(Number(b),u,1).toLocaleDateString(void 0,{month:"long",year:"numeric"}),keys:this.rangeKeys(`${b}-${k}-01`,`${b}-${k}-${String(T).padStart(2,"0")}`)})}}else{const[b,u]=this.resolveRange(a,e);this.rangeKeys(b,u).forEach(k=>{const T=new Date(`${k}T00:00:00`);n.push({label:a==="week"?T.toLocaleDateString(void 0,{weekday:"narrow"}):String(T.getDate()),title:k,keys:[k]})})}const o={},r={};s.forEach(b=>{o[b.id]=n.map(()=>0),r[b.id]=0}),n.forEach((b,u)=>{b.keys.forEach(k=>{this.categoryBreakdown(k).forEach(T=>{T.id in o||(o[T.id]=n.map(()=>0),r[T.id]=0),o[T.id][u]+=T.earned||0,r[T.id]+=T.earned||0})})});const c=n.map((b,u)=>s.reduce((k,T)=>k+(o[T.id]?o[T.id][u]:0),0)),d=Math.max(1,...c),g={kind:a,labels:n.map(b=>b.label),titles:n.map(b=>b.title),cats:s.map(b=>({...b})),perCat:o,totals:r,max:d,grandTotal:c.reduce((b,u)=>b+u,0)};return pt={key:i,value:g},g},getGoals(){return p.goals},getBadges(){return[...p.badges].sort((t,e)=>{const a=At(e.tier)-At(t.tier);return a!==0?a:String(e.earnedAt).localeCompare(String(t.earnedAt))})},topBadges(t=3){return this.getBadges().slice(0,t)},addGoal(t={}){const e=ft({...t,id:`g${Date.now()}`});return p.goals.push(e),S(),this.checkGoals(I()),e},updateGoal(t,e={}){const a=p.goals.find(s=>s.id===t);if(!a)return;const i=ft({...a,...e,id:t});Object.assign(a,i),S(),this.checkGoals(I())},removeGoal(t){p.goals=p.goals.filter(e=>e.id!==t),S()},removeBadge(t){p.badges=p.badges.filter(e=>e.id!==t),S()},perfectDaysCount(){return Object.keys(p.days).filter(t=>{const e=this.scoreFor(t);return e.max>0&&e.percent===100}).length},taskStreak(t,e){let a=e,i=0;(o=>{const r=p.days[o];return!r||!Array.isArray(r.tasks)?!1:r.tasks.some(c=>c.sourcePinId===t&&c.done)})(a)||(a=X(a));let n=0;for(;i<400;){i+=1;const o=p.days[a];if(!o||!Array.isArray(o.tasks))break;if(o.tasks.some(r=>r.sourcePinId===t&&r.done)){n+=1,a=X(a);continue}break}return n},goalProgress(t,e){const a=e||I();if(t.kind==="habit-streak"){const s=this.habitStreak(t.targetId,a);return{current:s,target:t.targetDays,done:s>=t.targetDays}}if(t.kind==="task-streak"){const s=this.taskStreak(t.targetId,a);return{current:s,target:t.targetDays,done:s>=t.targetDays}}const i=this.perfectDaysCount();return{current:i,target:t.targetDays,done:i>=t.targetDays}},checkGoals(t){const e=t||I();let a=[];return p.goals.forEach(i=>{if(p.badges.some(n=>n.goalId===i.id))return;if(this.goalProgress(i,e).done){const n={id:`b${Date.now()}-${i.id}`,goalId:i.id,title:i.title,tier:i.tier,rewardTitle:i.rewardTitle,earnedAt:new Date().toISOString()};p.badges.push(n),a.push(n)}}),a.length&&S(),a},scoreFor(t){const e=this.getDay(t),a=this.getHabits(t),i=this.isLocked(t),s=p.settings.showConscious!==!1,n=a.reduce((v,x)=>{const lt=this.habitRating(t,x.id);return v+Math.round(x.points*lt/5)},0),o=s?a.reduce((v,x)=>v+(this.habitRating(t,x.id)>0?R(x.consciousPoints):0),0):0,r=e.tasks.reduce((v,x)=>v+(x.done?x.points:0),0),c=a.reduce((v,x)=>v+x.points,0),d=s?a.reduce((v,x)=>v+R(x.consciousPoints),0):0,g=e.tasks.reduce((v,x)=>v+x.points,0),b=n+o+r,u=c+d+g,k=a.filter(v=>e.habitMissed&&e.habitMissed[v.id]?!0:i&&this.habitRating(t,v.id)<=0).length,T=e.tasks.filter(v=>v.done?!1:v.missed===!0?!0:v.missed===!1?!1:i).length;return{earned:b,max:u,habitScore:n,consciousScore:o,maxConscious:d,taskScore:r,completedHabits:a.filter(v=>this.habitRating(t,v.id)>0).length,habitAvg:a.length?Math.round(a.reduce((v,x)=>v+this.habitRating(t,x.id),0)/a.length*10)/10:0,totalHabits:a.length,completedTasks:e.tasks.filter(v=>v.done).length,totalTasks:e.tasks.length,missedHabits:k,missedTasks:T,percent:u?Math.round(b/u*100):0,locked:i,submittedAt:e.submittedAt}},monthKeys(t){const e=String(t).slice(0,7);return Object.keys(p.days).filter(a=>a.startsWith(e)).sort()},rangeKeys(t,e){const a=[],i=new Date(`${t}T00:00:00`),s=new Date(`${e}T00:00:00`);let n=0;for(;i<=s&&n<732;)n+=1,a.push(I(i)),i.setDate(i.getDate()+1);return a},resolveRange(t,e){if(t==="day")return[e,e];if(t==="week"){const i=new Date(`${e}T00:00:00`),s=new Date(i);s.setDate(i.getDate()-(i.getDay()-this.getWeekStart()+7)%7);const n=new Date(s);return n.setDate(s.getDate()+6),[I(s),I(n)]}if(t==="month"){const[i,s]=e.split("-").map(Number),n=`${i}-${String(s).padStart(2,"0")}-01`,o=new Date(i,s,0).getDate(),r=`${i}-${String(s).padStart(2,"0")}-${String(o).padStart(2,"0")}`;return[n,r]}if(t==="year"){const i=e.slice(0,4);return[`${i}-01-01`,`${i}-12-31`]}const a=Object.keys(p.days).sort();return a.length?[a[0],a[a.length-1]>e?a[a.length-1]:e]:[e,e]},exportRows(t,e){return this.rangeKeys(t,e).map(a=>{const i=this.getDay(a),s=this.getHabits(a),n=this.scoreFor(a),o=this.isLocked(a),r=(d,g)=>g>0?"done":o?"missed":"pending",c=d=>d.done?"done":o?"missed":"pending";return{date:a,earned:n.earned,max:n.max,percent:n.percent,habitScore:n.habitScore,consciousScore:n.consciousScore||0,taskScore:n.taskScore,locked:o,missedHabits:n.missedHabits||0,missedTasks:n.missedTasks||0,note:i.note||"",habits:s.map(d=>{const g=this.habitRating(a,d.id);return{name:d.name,description:String(d.description||""),category:tt(P(d.category)),tags:D(d.tags),points:d.points,consciousPoints:this.consciousEnabled()?R(d.consciousPoints):0,rating:g,earned:Math.round(d.points*g/5)+(g>0&&this.consciousEnabled()?R(d.consciousPoints):0),status:r(d.id,g)}}),tasks:i.tasks.map(d=>({title:d.title,category:tt(P(d.category)),tags:D(d.tags),points:d.points,rating:Math.max(0,Math.min(5,Number(d.rating)||0)),done:!!d.done,earned:d.done?d.points:0,status:d.forwardedFrom?`forwarded from ${d.forwardedFrom}`:c(d),forwardedFrom:d.forwardedFrom||"",forwardedTo:Array.isArray(d.forwardedTo)?d.forwardedTo:[],description:d.description||"",hasImage:!!d.image}))}})},history(t=14){return Object.keys(p.days).sort().reverse().slice(0,t).map(a=>({date:a,...this.scoreFor(a),note:p.days[a].note,locked:this.isLocked(a),submittedAt:p.days[a].submittedAt}))},week(t){const e=new Date(t);return e.setDate(e.getDate()-(e.getDay()-this.getWeekStart()+7)%7),e.setHours(0,0,0,0),Array.from({length:7},(a,i)=>{const s=new Date(e);s.setDate(e.getDate()+i);const n=I(s);return{date:n,label:s.toLocaleDateString(void 0,{weekday:"short"}),locked:this.isLocked(n),...this.scoreFor(n)}})}};function Qt(t){return t>=90?"Excellent":t>=75?"Great day":t>=50?"Keep going":t>0?"Started":"No score yet"}function F(t){return new Date(`${t}T00:00:00`).toLocaleDateString(void 0,{weekday:"long",month:"short",day:"numeric"})}function Zt(t){return t?new Date(t).toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"}):""}function nt(t){return t>=5?"Excellent":t>=4?"Great":t>=3?"Good":t>=2?"Fair":t>=1?"Low":"Not rated"}const mt=document.getElementById("app"),Kt="daily-report-2026-09-28T20-13-02-muloprol",fe=`v1.1 — Auto-update · Offline · Backup (${Kt.slice(-8)})`;let f=l.todayKey(),E="today",w=null,m=null,U=!1,ot=!1,V=null,W=!1,vt=!1,kt=null,G="Idle.",Z="week",L=null,A="boot";window.addEventListener("beforeinstallprompt",t=>{t.preventDefault(),V=t});window.addEventListener("appinstalled",()=>{V=null,h("Daily Report installed"),$()});const ye=[["default","Default"],["points","Points"],["category","Category"],["tags","Tags"]];function Ht(t){const e=new Date(`${f}T00:00:00`);e.setDate(e.getDate()+t),f=l.todayKey(e)}function H(t){return{home:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1z"/></svg>',week:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>',history:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 8v5l3 2"/><circle cx="12" cy="12" r="9"/></svg>',settings:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H8a1.7 1.7 0 0 0 1-1.5V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V8c.3.7.9 1.2 1.6 1.3H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1.7z"/></svg>',pin:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 4h6l-1 7 3 3v2H7v-2l3-3z" fill="currentColor" stroke="none"/><path d="M12 16v5"/></svg>',forward:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',habit:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7h16M4 12h10M4 17h13"/></svg>'}[t]}function te(t,e,a){return`
    <div class="stars" data-habit="${t}">
      ${[1,2,3,4,5].map(i=>`
            <button type="button" class="star ${i<=e?"on":""}" data-action="rate-habit" data-id="${t}" data-rating="${i}" ${a?"disabled":""} aria-label="${i} star">★</button>
          `).join("")}
    </div>
  `}function ee(t,e,a){return`
    <div class="stars stars-small" data-task="${t}">
      ${[1,2,3,4,5].map(i=>`
            <button type="button" class="star small ${i<=e?"on":""}" data-action="rate-task" data-id="${t}" data-rating="${i}" ${a?"disabled":""} aria-label="${i} star">★</button>
          `).join("")}
    </div>
  `}function ae(t){const e=Number(t)||0;return e?`<span class="conscious-badge">🧠 +${e}</span>`:'<span class="item-meta">No conscious pts</span>'}const be=["mentally","psychology","physically","spiritually","socially"];function K(t){return`<span class="cat-badge ${be.includes(t)?`cat-${t}`:"cat-custom"}">${y(tt(t))}</span>`}const Rt={mentally:"#5b8cff",psychology:"#a06bff",physically:"#22b07d",spiritually:"#e8a51c",socially:"#14b8a6"},jt=["#f472b6","#38bdf8","#fb923c","#a3e635","#facc15","#e879f9"];function It(t,e){return Rt[t]?Rt[t]:jt[(e??0)%jt.length]}function J(t){const e=Array.isArray(t)?t.filter(Boolean):[];return e.length?`<div class="tag-row">${e.map(a=>`<span class="tag-chip">#${y(a)}</span>`).join("")}</div>`:""}function se(t){return!t||!t.image?"":`<button type="button" class="task-img-thumb" data-action="view-task-image" data-id="${t.id}" aria-label="View attached photo"><img src="${t.image}" alt="Task photo" loading="lazy" /></button>`}function ve(t){const e=String(t||"");if(!e.trim())return"";const a=e.split(`
`),i=/^\s*(?:•|-|[*])\s+(.*)$/,s=/^\s*\d+[.)]\s+(.*)$/;let n="",o=null;const r=()=>{o&&(n+=o==="ul"?"</ul>":"</ol>",o=null)};return a.forEach(c=>{const d=i.exec(c),g=!d&&s.exec(c);d?(o!=="ul"&&(r(),n+='<ul class="note-list">',o="ul"),n+=`<li>${y(d[1])||"&nbsp;"}</li>`):g?(o!=="ol"&&(r(),n+='<ol class="note-list">',o="ol"),n+=`<li>${y(g[1])||"&nbsp;"}</li>`):c.trim()?(r(),n+=`<p class="note-text">${y(c)}</p>`):(r(),n+='<p class="note-text">&nbsp;</p>')}),r(),`<div class="note" style="margin-top:10px">${n}</div>`}function Ft(t){const e=document.getElementById("day-note");if(!e||e.disabled)return;const a=e.value||"",i=a.split(`
`),s=a.slice(0,e.selectionStart).split(`
`).length-1,n=a.slice(0,e.selectionEnd).split(`
`).length-1,o=e.selectionStart!==e.selectionEnd,r=o?s:0,c=o?n:i.length-1;if(t==="bullets"){const d=i.slice(r,c+1).every(g=>/^\s*(?:•|-|[*])\s+/.test(g)||!g.trim());for(let g=r;g<=c;g++)i[g].trim()&&(d?i[g]=i[g].replace(/^\s*(?:•|-|[*])\s+/,""):/^\s*(?:•|-|[*])\s+/.test(i[g])||(i[g]=`• ${i[g].replace(/^\s*/,"")}`))}else{const d=i.slice(r,c+1).every(b=>/^\s*\d+[.)]\s+/.test(b)||!b.trim());let g=1;for(let b=r;b<=c;b++){if(!i[b].trim())continue;const u=i[b].replace(/^\s*(?:\d+[.)]|•|-|[*])\s+/,"").replace(/^\s*/,"");i[b]=d?u:`${g}. ${u}`,g+=1}}e.value=i.join(`
`),l.setNote(f,e.value);try{e.focus()}catch{}}function ke(t){return new Promise(e=>{if(!t||!String(t.type||"").startsWith("image/"))return e(null);const a=URL.createObjectURL(t),i=new Image,s=()=>{try{URL.revokeObjectURL(a)}catch{}},n=(o,r)=>new Promise(c=>{let d=i.naturalWidth||0,g=i.naturalHeight||0;if(!d||!g)return c(null);const b=Math.min(1,o/Math.max(d,g));d=Math.max(1,Math.round(d*b)),g=Math.max(1,Math.round(g*b));const u=document.createElement("canvas");u.width=d,u.height=g;try{u.getContext("2d").drawImage(i,0,0,d,g),c(u.toDataURL("image/jpeg",r))}catch{c(null)}});i.onload=async()=>{try{let o=await n(900,.72);o&&o.length>at&&(o=await n(600,.62)),o&&o.length>at&&(o=await n(400,.55)),s(),e(o&&o.length<=at?o:null)}catch{s(),e(null)}},i.onerror=()=>{s(),e(null)},i.src=a})}function Bt(t,e){return`
    <select class="sort-select" data-sort-kind="${t}" aria-label="Sort ${t}">
      ${ye.map(([a,i])=>`<option value="${a}" ${e===a?"selected":""}>${i}</option>`).join("")}
    </select>
  `}function $e(t){const e=l.getBadges(),a=l.topBadges(3),i=t.max>0&&t.percent===100,s=ot?e:a;return`
    <section class="section rewards-section">
      <div class="section-head">
        <h2>Rewards</h2>
        ${e.length>3?`<button class="ghost-btn compact" data-action="toggle-badges">${ot?"Show less":`More (${e.length}) ›`}</button>`:""}
      </div>
      ${i?`
        <div class="trophy-card">
          <div class="trophy-cup">🏆</div>
          <div>
            <div class="item-title">Gold Cup — Perfect day!</div>
            <div class="item-meta">100% of points on ${F(f)}</div>
          </div>
        </div>
      `:""}
      ${e.length?`
        <div class="rewards-grid">
          ${s.map(n=>`
            <article class="reward-card tier-${n.tier}">
              <div class="reward-medal">${ht(n.tier)}</div>
              <div>
                <div class="item-title">${y(n.rewardTitle||n.title)}</div>
                <div class="item-meta">${y(n.title)} · ${Vt(n.tier)} · ${F((n.earnedAt||"").slice(0,10))}</div>
              </div>
            </article>
          `).join("")}
        </div>
      `:'<div class="empty">No rewards yet. Set a goal in Settings → Goals &amp; Rewards.</div>'}
    </section>
  `}function rt(t){return`<span class="streak-badge">${t} day streak</span>`}function ie(t){return t?`<span class="forward-badge from">↩ Forwarded from ${y(t)}</span>`:""}function dt(t){const e=Array.isArray(t)?t.filter(Boolean):[];return e.length?`<span class="forward-badge to">↪ Forwarded to ${y(e[e.length-1])}</span>`:""}function we(t){const e=new Date(`${t}T00:00:00`);return e.setDate(e.getDate()+1),l.todayKey(e)}function $t(){return`<button class="ghost-btn compact ${U?"on":""}" data-action="toggle-edit">${U?"Done":"Edit Mode"}</button>`}function Se(t){return t?'<span class="lock-badge">Locked</span>':'<span class="open-badge">Open</span>'}function Te(){l.checkGoals(f);const t=l.getDay(f),e=l.getSettings(),a=e.showConscious!==!1,i=l.getHabits(f),s=l.getTasks(f),n=l.scoreFor(f),o=Qt(n.percent),r=f===l.todayKey(),c=l.isLocked(f);return`
    <div class="topbar">
      <div>
        <p class="kicker">${r?"Today":"Daily report"}</p>
        <h1>${F(f)}</h1>
      </div>
      <div class="date-nav">
        <button class="icon-btn" data-action="prev-day" aria-label="Previous day">‹</button>
        <button class="icon-btn" data-action="next-day" aria-label="Next day">›</button>
      </div>
    </div>

    <section class="score-hero ${c?"is-locked":""}">
      <div class="score-row">
        <div>
          <div class="score-value">${n.earned}</div>
          <div class="score-unit">of ${n.max||0} points</div>
        </div>
        <div class="hero-side">
          ${Se(c)}
          <div class="grade-pill">${o}</div>
        </div>
      </div>
      <div class="progress-track"><div class="progress-fill" style="width:${n.percent}%"></div></div>
      <div class="stats-grid ${a?"stats-4":"stats-3"}">
        <div class="stat"><span class="muted">Habits</span><b>${n.completedHabits}/${n.totalHabits}</b></div>
        <div class="stat"><span class="muted">Tasks</span><b>${n.completedTasks}/${n.totalTasks}</b></div>
        ${a?`<div class="stat"><span class="muted">Conscious</span><b>+${n.consciousScore||0}</b></div>`:""}
        <div class="stat"><span class="muted">Score</span><b>${n.percent}%</b></div>
      </div>
      <p class="lock-hint">
        ${c?`Submitted${t.submittedAt?` at ${Zt(t.submittedAt)}`:""}.${(n.missedHabits||0)+(n.missedTasks||0)>0?` ${(n.missedHabits||0)+(n.missedTasks||0)} missed (${n.missedHabits||0} habits, ${n.missedTasks||0} tasks) — unchecked items count as missed.`:" Nothing missed — all done."} Unlock in Settings to edit.`:`Auto-locks at ${e.lockTime}. Submit when the day is done. Unchecked items will count as missed once locked.`}
      </p>
      ${c?'<button class="ghost-btn full" data-action="goto-settings">Unlock in Settings</button>':'<button class="primary-btn full" data-action="submit-day">Submit and lock report</button>'}
      <div class="export-row">
        <span class="muted">Export:</span>
        <button class="ghost-btn compact" data-action="open-export">Excel / JSON / PDF</button>
      </div>
    </section>

    ${$e(n)}

    <section class="section">
      <div class="section-head">
        <h2>Habits</h2>
        <div class="head-actions">
          ${Bt("habit",e.habitSort||"default")}
          ${$t()}
          <span class="points">+${n.habitScore}${a&&n.consciousScore?` +${n.consciousScore}🧠`:""} pts</span>
        </div>
      </div>
      <div class="list">
        ${i.length?i.map(d=>{const g=l.habitRating(f,d.id),b=g>0,u=!b&&c,k=l.habitStreak(d.id,f),T=a&&Number(d.consciousPoints)||0;return`
                    <article class="item-card ${b?"done":""} ${u?"missed":""} ${c?"is-locked":""}">
                      <button class="check" data-action="toggle-habit" data-id="${d.id}" ${c?"disabled":""}>✓</button>
                      <div class="item-body">
                        <div class="item-title">${y(d.name)} ${u?'<span class="missed-badge">Missed</span>':""}</div>
                        <div class="item-meta">${K(d.category)} ${d.pin?it(d.pin):"Not pinned"} · ${g?`${g}/5 ${nt(g)}`:c?"Missed":"Not rated"}</div>
                        ${d.description?`<p class="item-desc">${y(d.description)}</p>`:""}
                        ${a?`<div class="item-meta">${rt(k)} ${ae(T)}</div>`:`<div class="item-meta">${rt(k)}</div>`}
                        ${dt(l.habitForwardedTo(f,d.id))}
                        ${J(d.tags)}
                        ${te(d.id,g,c)}
                      </div>
                      <div class="item-side">
                        <div class="points">+${d.points}${T?` +${T}🧠`:""}</div>
                        <div class="mini-actions">
                          ${U?`<button class="mini-btn on" data-action="open-edit-habit" data-id="${d.id}" ${c?"disabled":""}>Edit</button>`:""}
                          <button class="mini-btn" data-action="open-forward-habit" data-id="${d.id}" ${c?"disabled":""} title="Forward habit to another day">${H("forward")}</button>
                          <button class="mini-btn ${d.pin?"on":""}" data-action="open-pin-habit" data-id="${d.id}" ${c?"disabled":""} title="Pin habit">${H("pin")}</button>
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
          ${Bt("task",e.taskSort||"default")}
          ${$t()}
          <span class="points">+${n.taskScore} pts</span>
        </div>
      </div>
      <div class="list">
        ${s.length?s.map(d=>{const g=!!d.sourcePinId,b=g?l.findPinnedTask(d.sourcePinId):null,u=Math.max(0,Math.min(5,Number(d.rating)||0)),k=!d.done&&c;return`
                    <article class="item-card ${d.done?"done":""} ${k?"missed":""} ${c?"is-locked":""}">
                      <button class="check" data-action="toggle-task" data-id="${d.id}" ${c?"disabled":""}>✓</button>
                      <div class="item-body">
                        <div class="item-title">${y(d.title)} ${k?'<span class="missed-badge">Missed</span>':""}</div>
                        <div class="item-meta">${K(d.category)} ${b?it(b.pin):"One-time task"} · ${d.done?"Done":c?"Missed":"Pending"} · ${u?`${u}/5 ${nt(u)}`:"No rating"}</div>
                        ${d.description?`<p class="item-desc">${y(d.description)}</p>`:""}
                        ${ie(d.forwardedFrom)}
                        ${dt(d.forwardedTo)}
                        ${J(d.tags)}
                        ${d.image?'<span class="task-img-badge">📷 Photo attached</span>':""}
                        ${se(d)}
                        ${ee(d.id,u,c)}
                      </div>
                      <div class="item-side">
                        <div class="points">+${d.points}</div>
                        <div class="mini-actions">
                          ${U?`<button class="mini-btn on" data-action="open-edit-task" data-id="${d.id}" ${c?"disabled":""}>Edit</button>`:""}
                          <button class="mini-btn" data-action="open-forward-task" data-id="${d.id}" ${c?"disabled":""} title="Forward task to another day">${H("forward")}</button>
                          <button class="mini-btn ${g?"on":""}" data-action="open-pin-task" data-id="${d.id}" ${c?"disabled":""} title="Pin task">${H("pin")}</button>
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
  `}function xe(){const t=l.week(new Date(`${f}T00:00:00`)),e=t.reduce((i,s)=>i+s.earned,0),a=Math.round(e/7);return`
    <div class="topbar">
      <div>
        <p class="kicker">This week</p>
        <h1>Weekly score</h1>
      </div>
    </div>
    <section class="score-hero">
      <div class="export-row" style="margin:0 0 12px">
        <span class="muted">Export week:</span>
        <button class="ghost-btn compact" data-action="open-export">Excel / JSON / PDF</button>
      </div>
      <div class="score-row">
        <div>
          <div class="score-value">${e}</div>
          <div class="score-unit">points this week</div>
        </div>
        <div class="grade-pill">Avg ${a} pts</div>
      </div>
      <div class="week-days">
        ${t.map(i=>`
              <button class="day-cell ${i.date===f?"active":""} ${i.earned>0?"done":""}" data-action="pick-date" data-date="${i.date}">
                <span>${i.label.slice(0,2)}</span>
                <b>${i.earned}</b>
                ${i.locked?'<i class="dot-lock"></i>':""}
              </button>
            `).join("")}
      </div>
    </section>
    <section class="section week-grid">
      ${t.map(i=>`
            <article class="week-card">
              <div class="section-head">
                <div>
                  <div class="item-title">${F(i.date)}</div>
                  <div class="item-meta">${i.locked?"Locked":"Open"} · ${i.completedHabits} habits · ${i.completedTasks} tasks${i.locked&&(i.missedHabits||0)+(i.missedTasks||0)>0?` · ❌ ${(i.missedHabits||0)+(i.missedTasks||0)} missed`:""}</div>
                </div>
                <div class="points">${i.earned} pts</div>
              </div>
              <div class="bar"><span style="width:${i.percent}%"></span></div>
            </article>
          `).join("")}
    </section>
  `}function De(){const t=l.history(21);return`
    <div class="topbar">
      <div>
        <p class="kicker">Archive</p>
        <h1>Past reports</h1>
      </div>
      <button class="ghost-btn compact" data-action="open-export">Export</button>
    </div>
    <section class="manage-card export-card">
      <div class="section-head">
        <div>
          <div class="item-title">Export reports</div>
          <div class="item-meta">Day, week, month or year as Excel (CSV), JSON or PDF.</div>
        </div>
        <button class="primary-btn compact-btn" data-action="open-export">Export</button>
      </div>
    </section>
    <div class="history-list">
      ${t.length?t.map(e=>`
                  <article class="history-card">
                    <div class="section-head">
                      <div>
                        <div class="item-title">${F(e.date)}</div>
                        <div class="item-meta">${e.locked?"Locked":"Open"} · ${Qt(e.percent)} · ${e.percent}%${e.locked&&(e.missedHabits||0)+(e.missedTasks||0)>0?` · ❌ ${(e.missedHabits||0)+(e.missedTasks||0)} missed`:""}</div>
                      </div>
                      <button class="ghost-btn compact" data-action="pick-date" data-date="${e.date}">Open</button>
                    </div>
                    <div class="bar"><span style="width:${e.percent}%"></span></div>
                    ${e.note?ve(e.note):""}
                  </article>
                `).join(""):'<div class="empty">Complete today to start your history.</div>'}
    </div>
  `}function Ae(){const t=l.categoryChart(Z,f),e=Z==="week"?"This week":Z==="month"?"This month":"This year",a=t.labels.map((s,n)=>{const o=t.cats.reduce((c,d)=>c+(t.perCat[d.id]?t.perCat[d.id][n]:0),0),r=t.cats.map((c,d)=>({cat:c,value:t.perCat[c.id]?t.perCat[c.id][n]:0,ci:d})).filter(c=>c.value>0).map(c=>`<span class="chart-seg" style="height:${Math.max(2,Math.round(c.value/t.max*100))}%;background:${It(c.cat.id,c.ci)}" title="${y(c.cat.label)}: ${c.value} pts"></span>`).join("");return`
      <div class="chart-col" title="${y(t.titles[n])}: ${o} pts">
        <div class="chart-bar">${r||'<span class="chart-empty"></span>'}</div>
        <span class="chart-x">${y(s)}</span>
      </div>
    `}).join(""),i=t.cats.map((s,n)=>`
      <span class="chart-legend-item"><i style="background:${It(s.id,n)}"></i>${y(s.label)} <b>${t.totals[s.id]||0}</b></span>
    `).join("");return`
    <section class="score-hero">
      <div class="section-head" style="margin-bottom:4px">
        <div>
          <div class="item-title">Progress chart</div>
          <div class="item-meta">${e} · ${t.grandTotal} pts total</div>
        </div>
        <div class="chip-row">
          ${["week","month","year"].map(s=>`<button type="button" class="chip ${Z===s?"on":""}" data-action="set-chart-range" data-range="${s}">${s[0].toUpperCase()}${s.slice(1)}</button>`).join("")}
        </div>
      </div>
      <div class="chart-wrap">${a}</div>
      <div class="chart-legend">${i}</div>
    </section>
  `}function Ce(){const t=l.isLocked(f),e=l.consciousEnabled(),a=l.categoryBreakdown(f),i=a.reduce((n,o)=>n+o.earned,0),s=a.reduce((n,o)=>n+o.max,0);return`
    <div class="topbar">
      <div>
        <p class="kicker">Activities</p>
        <h1>By category</h1>
      </div>
      <div class="date-nav">
        ${$t()}
        <button class="icon-btn" data-action="prev-day" aria-label="Previous day">‹</button>
        <button class="icon-btn" data-action="next-day" aria-label="Next day">›</button>
      </div>
    </div>
    <section class="score-hero">
      <div class="score-row">
        <div>
          <div class="score-value">${i}</div>
          <div class="score-unit">of ${s||0} category points</div>
        </div>
        <div class="grade-pill">${F(f)}</div>
      </div>
      <p class="lock-hint">Habits and tasks grouped by category.</p>
    </section>
    ${Ae()}
    ${a.map(n=>{const o=n.max?Math.round(n.earned/n.max*100):0;return`
          <section class="section">
            <article class="manage-card cat-card cat-${n.id}">
              <div class="section-head">
                <div>
                  <div class="item-title">${n.label}</div>
                  <div class="item-meta">${n.completed}/${n.total} done · rating ${n.habitAvg||0}/5</div>
                </div>
                <div class="points">${n.earned}/${n.max} pts</div>
              </div>
              <div class="bar"><span style="width:${o}%"></span></div>
            </article>
            <div class="list" style="margin-top:10px">
              ${n.habits.length||n.tasks.length?`
                    ${n.habits.map(r=>{const c=l.habitRating(f,r.id),d=!c&&t,g=l.habitStreak(r.id,f),b=e&&Number(r.consciousPoints)||0,u=c>0?b:0,k=Math.round(r.points*c/5)+u,T=r.points+b;return`
                          <article class="item-card ${c?"done":""} ${d?"missed":""} ${t?"is-locked":""}">
                            <button class="check" data-action="toggle-habit" data-id="${r.id}" ${t?"disabled":""}>✓</button>
                            <div class="item-body">
                              <div class="item-title">${y(r.name)} ${d?'<span class="missed-badge">Missed</span>':""}</div>
                              <div class="item-meta">Habit · ${c?`${c}/5 ${nt(c)}`:t?"Missed":"Not rated"} · ${rt(g)}${e?` ${ae(b)}`:""}</div>
                              ${r.description?`<p class="item-desc">${y(r.description)}</p>`:""}
                              ${dt(l.habitForwardedTo(f,r.id))}
                              ${J(r.tags)}
                              ${te(r.id,c,t)}
                            </div>
                            <div class="item-side">
                              <div class="points">${k}/${T}</div>
                              <div class="mini-actions">
                                ${U?`<button class="mini-btn on" data-action="open-edit-habit" data-id="${r.id}" ${t?"disabled":""}>Edit</button>`:""}
                                <button class="mini-btn" data-action="open-forward-habit" data-id="${r.id}" ${t?"disabled":""} title="Forward habit to another day">${H("forward")}</button>
                              </div>
                            </div>
                          </article>
                        `}).join("")}
                    ${n.tasks.map(r=>{const c=Math.max(0,Math.min(5,Number(r.rating)||0)),d=!r.done&&t;return`
                          <article class="item-card ${r.done?"done":""} ${d?"missed":""} ${t?"is-locked":""}">
                            <button class="check" data-action="toggle-task" data-id="${r.id}" ${t?"disabled":""}>✓</button>
                            <div class="item-body">
                              <div class="item-title">${y(r.title)} ${d?'<span class="missed-badge">Missed</span>':""}</div>
                              <div class="item-meta">Task · ${r.done?"Done":t?"Missed":"Pending"} · ${c?`${c}/5 ${nt(c)}`:"No rating"}${r.description?` · ${y(r.description)}`:""}</div>
                              ${ie(r.forwardedFrom)}
                              ${dt(r.forwardedTo)}
                              ${J(r.tags)}
                              ${r.image?'<span class="task-img-badge">📷 Photo attached</span>':""}
                              ${se(r)}
                              ${ee(r.id,c,t)}
                            </div>
                            <div class="item-side">
                              <div class="points">+${r.points}</div>
                              <div class="mini-actions">
                                ${U?`<button class="mini-btn on" data-action="open-edit-task" data-id="${r.id}" ${t?"disabled":""}>Edit</button>`:""}
                                <button class="mini-btn" data-action="open-forward-task" data-id="${r.id}" ${t?"disabled":""} title="Forward task to another day">${H("forward")}</button>
                              </div>
                            </div>
                          </article>
                        `}).join("")}
                  `:'<div class="empty">No activities in this category.</div>'}
            </div>
          </section>
        `}).join("")}
  `}function ct(t){return`${t||"daily-report-backup"}-${l.todayKey()}.json`}function Pe(){const t=l.getInstalledAt(),e=String(t).slice(0,10),a=new Date(`${e}T00:00:00`),i=new Date(`${l.todayKey()}T00:00:00`),s=Number.isNaN(a.getTime())?1:Math.max(1,Math.round((i-a)/864e5)+1);return`Using Daily Report since ${/^\d{4}-\d{2}-\d{2}$/.test(e)?F(e):e} · day ${s}`}function ne(){return typeof window.showDirectoryPicker=="function"}function Tt(){return new Promise((t,e)=>{const a=indexedDB.open("daily-report-pwa",1);a.onupgradeneeded=()=>a.result.createObjectStore("kv"),a.onsuccess=()=>t(a.result),a.onerror=()=>e(a.error)})}function Le(t){return Tt().then(e=>new Promise((a,i)=>{const s=e.transaction("kv","readonly").objectStore("kv").get(t);s.onsuccess=()=>a(s.result),s.onerror=()=>i(s.error)}))}function Ee(t,e){return Tt().then(a=>new Promise((i,s)=>{const n=a.transaction("kv","readwrite");n.objectStore("kv").put(e,t),n.oncomplete=()=>i(),n.onerror=()=>s(n.error)}))}function Me(t){return Tt().then(e=>new Promise((a,i)=>{const s=e.transaction("kv","readwrite");s.objectStore("kv").delete(t),s.oncomplete=()=>a(),s.onerror=()=>i(s.error)}))}function Ne(){return!ne()||typeof indexedDB>"u"?(A="unsupported",Promise.resolve()):Le("backupDir").then(t=>{if(L=t||null,!L){A="unset";return}return L.queryPermission({mode:"readwrite"}).then(e=>{A=e==="granted"?"granted":"prompt"}).catch(()=>{A="prompt"})}).catch(()=>{L=null,A="unset"})}function He(){return A==="unsupported"?"Folder picking needs Chrome/Edge on desktop — on phones backups download instead.":A==="unset"?"No folder chosen yet.":A==="prompt"?"Tap Choose folder to allow access again.":A==="denied"?"Access was denied — choose the folder again.":A==="granted"&&L?`Folder: ${L.name}`:"Checking…"}async function Re(){if(!ne()){h("Folder access needs Chrome or Edge");return}try{const t=await window.showDirectoryPicker({id:"daily-report-backup",mode:"readwrite"});await Ee("backupDir",t),L=t,A="granted",h("Backup folder set")}catch(t){t&&t.name==="AbortError"||h("Couldn't open that folder")}$()}async function je(){try{await Me("backupDir")}catch{h("Couldn't remove folder");return}L=null,A="unset",h("Backup folder removed"),$()}async function Ie(){if(L){try{const t=await L.requestPermission({mode:"readwrite"});A=t==="granted"?"granted":"denied",h(t==="granted"?"Folder access granted":"Access denied")}catch{A="denied"}$()}}async function Fe(){const t=l.exportBackup(),e=ct();if(A==="granted"&&L)try{const i=await(await L.getFileHandle(e,{create:!0})).createWritable();await i.write(t),await i.close(),h("Backup saved to your folder"),oe();return}catch{}Y(e,t,"application/json"),h("Backup downloaded")}async function Be(){if(A!=="granted"||!L)return[];const t=[];try{for await(const e of L.values())if(e&&e.kind==="file"&&/\.json$/i.test(e.name))try{const a=await e.getFile();t.push({name:e.name,modified:a.lastModified})}catch{}}catch{return t}return t.sort((e,a)=>a.modified-e.modified),t}async function oe(){const t=document.getElementById("folder-backup-list");if(!t)return;if(A!=="granted"||!L){t.innerHTML='<button class="ghost-btn compact" data-action="trigger-import">Import from a file instead</button>';return}t.innerHTML='<p class="item-meta">Loading backups…</p>';const e=await Be();if(!document.getElementById("folder-backup-list"))return;e.length?t.innerHTML=e.map(i=>`
            <div style="display:flex;gap:8px;align-items:center;margin-bottom:6px">
              <span class="item-meta" style="flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${y(i.name)}</span>
              <button class="ghost-btn compact" data-action="restore-backup" data-name="${y(i.name)}">Restore</button>
            </div>
          `).join(""):t.innerHTML='<p class="item-meta">Folder is empty — press Export backup now to create the first backup.</p>';const a=document.createElement("div");a.innerHTML='<button class="ghost-btn compact" data-action="trigger-import">Import from a file instead</button>',t.appendChild(a)}async function Oe(t){if(L)try{const a=await(await L.getFileHandle(t)).getFile();re(await a.text(),t)}catch{h("Couldn't read that backup")}}function re(t,e){let a;try{a=JSON.parse(t)}catch{h("That file isn't valid JSON.");return}const i=l.backupKind(a);if(i==="ok"){if(!window.confirm(`Replace ALL app data with "${e}"?`))return;Y(ct("daily-report-pre-import"),l.exportBackup(),"application/json"),l.importBackup(a),h("Backup imported"),$();return}if(i==="report-export"){const s=l.previewReport(a);if(!s.days){h("That report file has no day rows to import.");return}if(!window.confirm(`Import ${s.days} day(s) (${s.start} → ${s.end}) from "${e}" as locked history?

${s.newHabits} new habit(s) will be added to your list.
Days already in the app on those dates will be overwritten.`))return;Y(ct("daily-report-pre-import"),l.exportBackup(),"application/json");const o=l.importReport(a);if(!o){h("That file doesn't look like a valid Daily Report backup.");return}h(`Imported ${o.days} day(s)${o.habits?` + ${o.habits} new habit(s)`:""}`),$();return}if(i==="wrong-app"){h("That backup belongs to another app (e.g. Iron Log) — it can’t be imported into Daily Report.");return}h("That file doesn't look like a valid Daily Report backup.")}async function _e(){if(!V){h("Use the browser menu: Install / Add to Home Screen");return}try{V.prompt();const t=await V.userChoice;t&&t.outcome==="accepted"&&h("Installing Daily Report…")}catch{}V=null,$()}async function We(){const t=`./version.json?v=${Date.now()}`,e=await fetch(t,{cache:"no-store"});if(!e.ok)throw new Error(`http ${e.status}`);const a=await e.json(),i=a&&(a.version||a.v)||null;if(!i)throw new Error("no version field");return String(i)}async function Ge(){W=!0,vt=!1,G="Checking for updates… (needs internet)",$();try{if("serviceWorker"in navigator&&navigator.serviceWorker.getRegistration){const e=await navigator.serviceWorker.getRegistration().catch(()=>null);e&&e.update&&e.update().catch(()=>{})}}catch{}if(typeof fetch>"u"){W=!1,G="This browser can’t check — but the app itself works offline. Use Export backup to protect your data.",$();return}const t=setTimeout(()=>{W&&(W=!1,G="Couldn't reach the server — offline? The app itself works offline; updating needs internet.",$())},15e3);try{const e=await We();if(clearTimeout(t),W=!1,kt=e,e&&e!==Kt){vt=!0,G="Update found — updating automatically…",$(),await de(!0);return}G="You're on the latest version. The app works offline."}catch{clearTimeout(t),W=!1,G="Couldn't reach the server — offline, or this file wasn't opened from the installed/hosted app. The app itself works offline; updating needs internet."}$()}function Ot(t){return new Promise(e=>{if(!("serviceWorker"in navigator))return e();const a=()=>e(),i=setTimeout(()=>{try{navigator.serviceWorker.removeEventListener("controllerchange",a)}catch{}e()},t||4e3),s=()=>{clearTimeout(i);try{navigator.serviceWorker.removeEventListener("controllerchange",s)}catch{}e()};try{navigator.serviceWorker.addEventListener("controllerchange",s)}catch{e()}})}async function de(t){var a;try{Y(ct("daily-report-pre-update"),l.exportBackup(),"application/json")}catch{}h("Backup saved — updating app…"),G=`Backup saved — updating${kt?` to ${String(kt).slice(-8)}`:""}…`,$();const e=()=>{const i=window.location.href.includes("?")?"&":"?";try{window.location.replace(`${window.location.href.split("#")[0]}${i}v=${Date.now()}#updated`)}catch{window.location.reload()}setTimeout(()=>{try{window.location.reload()}catch{}},2500)};try{if("serviceWorker"in navigator&&navigator.serviceWorker.getRegistration){const i=await navigator.serviceWorker.getRegistration().catch(()=>null);if(i){const s=i.waiting;if(s){try{s.postMessage("SKIP_WAITING")}catch{try{i.waiting.postMessage({type:"SKIP_WAITING"})}catch{}}await Ot(4e3),e();return}try{await i.update()}catch{}const n=await navigator.serviceWorker.getRegistration().catch(()=>i),o=(n||i).waiting||(n||i).installing;if(o){try{o.postMessage("SKIP_WAITING")}catch{}try{(a=(n||i).waiting)==null||a.postMessage("SKIP_WAITING")}catch{}await Ot(5e3),e();return}try{const r=navigator.serviceWorker.controller;r&&r.postMessage({type:"CLEAR_APP_CACHES"})}catch{}try{if(typeof caches<"u"){const r=await caches.keys().catch(()=>[]);await Promise.all(r.filter(c=>c.startsWith("daily-report-")).map(c=>caches.delete(c).catch(()=>!1)))}}catch{}try{await fetch(`./index.html?v=${Date.now()}`,{cache:"reload"})}catch{}try{await fetch(`./version.json?v=${Date.now()}`,{cache:"reload"})}catch{}try{await(n||i).unregister()}catch{}e();return}}}catch{}try{await fetch(`./index.html?v=${Date.now()}`,{cache:"reload"})}catch{}setTimeout(e,600)}function qe(){const t=l.getSettings(),e=l.getAllHabits(),a=l.getPinnedTasks(),i=l.lockedReports();return`
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
          ${[0,1,2,3,4,5,6].map(s=>{const n=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];return`<option value="${s}" ${l.getWeekStart()===s?"selected":""}>${n[s]}</option>`}).join("")}
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
      <p class="item-meta">Version: ${y(fe)}</p>
      <p class="item-meta">📅 ${y(Pe())}</p>
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:8px">
        <button class="primary-btn" data-action="check-updates" ${W?"disabled":""}>${W?"Checking…":"Check for updates"}</button>
        ${vt?'<button class="primary-btn" data-action="apply-update">Restart with update</button>':""}
      </div>
      <p class="item-meta">${y(G)}</p>
    </section>

    <section class="manage-card">
      <h2>Data backup</h2>
      <p class="muted tight">Pick a backup folder once (Chrome/Edge on desktop) and exports save straight into it. On phones, backups download to your Downloads folder instead. Import accepts full backups (<b>daily-report-backup-*.json</b>) or month/week report exports, which are added as locked history.</p>
      <p class="item-meta">${y(He())}</p>
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
        ${l.getCategories().map(s=>{const n=l.getCustomCategories().some(o=>o.id===s.id);return`
              <article class="manage-card">
                <div class="section-head">
                  <div>${K(s.id)}</div>
                  <div class="mini-actions">
                    ${n?`<button class="mini-btn on" data-action="rename-category" data-id="${s.id}">Rename</button>`:'<span class="item-meta">🔒</span>'}
                    ${n?`<button class="mini-btn" data-action="delete-category" data-id="${s.id}">✕</button>`:""}
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
        ${(()=>{const s=l.getAllTags();return s.length?s.map(({tag:n,count:o})=>`
              <article class="manage-card">
                <div class="section-head">
                  <div>
                    <div class="item-title">#${y(n)}</div>
                    <div class="item-meta">Used ${o} time${o===1?"":"s"}</div>
                  </div>
                  <div class="mini-actions">
                    <button class="mini-btn on" data-action="rename-tag" data-tag="${y(n)}">Rename</button>
                    <button class="mini-btn" data-action="delete-tag" data-tag="${y(n)}">✕</button>
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
        ${l.getGoals().length?l.getGoals().map(s=>{var c,d;const n=l.goalProgress(s,f),o=l.getBadges().some(g=>g.goalId===s.id),r=s.kind==="habit-streak"?((c=l.findHabit(s.targetId))==null?void 0:c.name)||"Deleted habit":s.kind==="task-streak"?((d=l.findPinnedTask(s.targetId))==null?void 0:d.title)||"Deleted task":"Any day at 100%";return`
                    <article class="manage-card goal-card ${o?"goal-earned":""}">
                      <div class="section-head">
                        <div>
                          <div class="item-title">${ht(s.tier)} ${y(s.title)}</div>
                          <div class="item-meta">${Vt(s.tier)} · “${y(s.rewardTitle)}” · ${y(r)}</div>
                          <div class="item-meta">${n.current}/${n.target} days ${o?"· Earned ✓":""}</div>
                          <div class="bar"><span style="width:${Math.min(100,Math.round(n.current/n.target*100))}%"></span></div>
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
                  <div class="reward-medal">${ht(s.tier)}</div>
                  <div>
                    <div class="item-title">${y(s.rewardTitle||s.title)}</div>
                    <div class="item-meta">${y(s.title)} · ${F((s.earnedAt||"").slice(0,10))}</div>
                  </div>
                  <button class="mini-btn" data-action="remove-badge" data-id="${s.id}">✕</button>
                </article>
              `).join("")}
            </div>
          `:""}
    </section>

    <section class="section">
      <div class="section-head"><h2>Locked reports</h2></div>
      <div class="list">
        ${i.length?i.map(s=>`
                    <article class="manage-card">
                      <div class="section-head">
                        <div>
                          <div class="item-title">${F(s.date)}</div>
                          <div class="item-meta">${s.submittedAt?`Submitted ${Zt(s.submittedAt)}`:"Locked"} · ${s.earned} pts</div>
                        </div>
                        <button class="ghost-btn compact" data-action="unlock-day" data-date="${s.date}">Unlock</button>
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
      <p class="muted tight">Pin a habit forever, until a date, weekly, monthly, yearly, on custom dates, with optional exception days.</p>
      <div class="habit-manage">
        ${e.length?e.map(s=>`
                    <article class="manage-card">
                      <div class="section-head">
                        <div>
                          <div class="item-title">${y(s.name)}</div>
                          <div class="item-meta">${K(s.category)} · ${s.pin?it(s.pin):"Not pinned"} · +${s.points} pts ${t.showConscious!==!1?Number(s.consciousPoints)?`· 🧠 +${s.consciousPoints}`:"· No conscious pts":""} · ${rt(l.habitStreak(s.id,f))}</div>
                          ${s.description?`<p class="item-desc">${y(s.description)}</p>`:""}
                          ${J(s.tags)}
                        </div>
                        <div class="mini-actions">
                          <button class="mini-btn ${s.pin?"on":""}" data-action="open-pin-habit" data-id="${s.id}">${H("pin")}</button>
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
                          <div class="item-meta">${K(s.category)} · ${it(s.pin)} · +${s.points} pts</div>
                          ${s.description?`<p class="item-desc">${y(s.description)}</p>`:""}
                          ${J(s.tags)}
                        </div>
                        <div class="mini-actions">
                          <button class="mini-btn on" data-action="open-pin-template" data-id="${s.id}">${H("pin")}</button>
                          <button class="mini-btn" data-action="unpin-template" data-id="${s.id}">✕</button>
                        </div>
                      </div>
                    </article>
                  `).join(""):'<div class="empty">Pin a task from Today to repeat it.</div>'}
      </div>
    </section>
  `}function B(t){if(/^\d{4}-\d{2}$/.test(String(t||"")))return String(t);if(/^\d{4}-\d{2}-\d{2}$/.test(String(t||"")))return String(t).slice(0,7);const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}`}function _t(t,e){const[a,i]=String(t).split("-").map(Number),s=new Date(a,(i||1)-1+e,1);return`${s.getFullYear()}-${String(s.getMonth()+1).padStart(2,"0")}`}function Ue(t){const[e,a]=String(t).split("-").map(Number);return new Date(e,(a||1)-1,1).toLocaleDateString(void 0,{month:"long",year:"numeric"})}function ze(){const t=l.getWeekStart(),e=z.findIndex(a=>a.value===t);return e<=0?z:[...z.slice(e),...z.slice(0,e)]}function Ve(t){const[e,a]=String(t).split("-").map(Number),s=(new Date(e,a-1,1).getDay()-l.getWeekStart()+7)%7,n=new Date(e,a,0).getDate(),o=[];for(let r=0;r<s;r++)o.push(null);for(let r=1;r<=n;r++)o.push(`${e}-${String(a).padStart(2,"0")}-${String(r).padStart(2,"0")}`);return o}function Wt(t,e,a){const i=new Set(a||[]),s=Ve(e);return`
    <div class="pin-cal" data-cal="${t}">
      <div class="pin-cal-head">
        <button type="button" class="mini-btn" data-action="pin-cal-nav" data-target="${t}" data-dir="-1" aria-label="Previous month">‹</button>
        <b>${Ue(e)}</b>
        <button type="button" class="mini-btn" data-action="pin-cal-nav" data-target="${t}" data-dir="1" aria-label="Next month">›</button>
      </div>
      <div class="pin-cal-grid pin-cal-week">
        ${ze().map(n=>`<span>${n.label.slice(0,1)}</span>`).join("")}
      </div>
      <div class="pin-cal-grid">
        ${s.map(n=>n?`<button type="button" class="pin-cal-day ${i.has(n)?"on":""}" data-action="toggle-pin-date" data-target="${t}" data-date="${n}">${Number(n.slice(8,10))}</button>`:"<span></span>").join("")}
      </div>
    </div>
  `}function Je(t,e){const a=(t==null?void 0:t.mode)||"forever",i=(t==null?void 0:t.until)||"",s=((t==null?void 0:t.weekdays)||[]).map(Number),n=((t==null?void 0:t.monthDays)||[]).map(Number),o=Array.isArray(t==null?void 0:t.yearDays)?[...t.yearDays].sort():[],r=Array.isArray(t==null?void 0:t.customDates)?[...t.customDates].sort():[],c=Array.isArray(t==null?void 0:t.exceptDates)?[...t.exceptDates].sort():Array.isArray(t==null?void 0:t.exceptions)?[...t.exceptions].sort():[],d=e&&e._exceptCal||B(f),g=e&&e._customCal||B(f),b=e&&e._yearMonth||"01";return`
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
      <input name="until" type="date" value="${i}" />
    </label>
    <div class="pin-weekdays" style="${a==="weekly"?"":"display:none"}">
      <p class="item-meta">Repeat every</p>
      <div class="chip-row">
        ${z.map(u=>`
            <button type="button" class="chip weekday ${s.includes(u.value)?"on":""}" data-action="toggle-weekday" data-day="${u.value}">
              ${u.label}
            </button>
          `).join("")}
      </div>
    </div>
    <div class="pin-monthdays" style="${a==="monthly"?"":"display:none"}">
      <p class="item-meta">Repeat every month on day</p>
      <div class="chip-row">
        ${Array.from({length:31},(u,k)=>k+1).map(u=>`<button type="button" class="chip monthday ${n.includes(u)?"on":""}" data-action="toggle-monthday" data-day="${u}">${u}</button>`).join("")}
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
      ${Wt("custom",g,r)}
      <div class="chip-row" style="margin-top:8px">
        ${r.length?r.map(u=>`<button type="button" class="chip on" data-action="toggle-pin-date" data-target="custom" data-date="${u}" title="Tap to remove">${u} ✕</button>`).join(""):'<span class="item-meta">No extra custom dates.</span>'}
      </div>
    </div>
    <div class="pin-exceptions" style="margin-top:4px">
      <p class="item-meta"><b style="color:var(--text)">Exceptions</b> — skip these days (tap days on the calendar). Applies to every repeat mode.</p>
      ${Wt("except",d,c)}
      <div class="chip-row" style="margin-top:8px">
        ${c.length?c.map(u=>`<button type="button" class="chip on" data-action="toggle-pin-date" data-target="except" data-date="${u}" title="Tap to remove">${u} ✕</button>`).join(""):'<span class="item-meta">No exceptions.</span>'}
      </div>
    </div>
  `}function Ye(){if(!w)return"";if(w==="choose")return`
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
    `;if(w==="habit"||w==="task"||w==="edit-habit"||w==="edit-task"){const t=w==="habit"||w==="edit-habit",e=w.startsWith("edit-"),a=m||{},i=a.category||(t?"physically":"mentally"),s=Math.max(0,Math.min(5,Number(a.rating)||0)),n=Array.isArray(a.tags)?a.tags.join(", "):a.tags||"",o=a.consciousPoints!=null?Number(a.consciousPoints):a.conscious!=null?Number(a.conscious):0;return`
      <div class="modal-backdrop open" data-action="close-modal">
        <form class="sheet" data-form="${w}" data-id="${a.id||""}">
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
                    <button type="button" class="chip ${i===r.id?"on":""}" data-action="set-category" data-category="${r.id}">${y(r.label)}</button>
                  `).join("")}
              </div>
              <input type="hidden" name="category" value="${i}" />
            </div>
            <label>
              Tags (optional, comma separated)
              <input name="tags" maxlength="120" value="${y(n)}" placeholder="morning, health" />
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
    `}if(w==="export"){const t=m&&m.range||"day";return`
      <div class="modal-backdrop open" data-action="close-modal">
        <div class="sheet">
          <div class="handle"></div>
          <h2>Export report</h2>
          <p class="muted tight">Date: ${F(f)}. Pick a range, then a format.</p>
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
    `}if(w==="goal"||w==="edit-goal"){const t=w==="edit-goal",e=m||{},a=e.kind||"habit-streak",i=l.getAllHabits(),s=l.getPinnedTasks(),n=e.targetId||"";return`
      <div class="modal-backdrop open" data-action="close-modal">
        <form class="sheet" data-form="${w}" data-id="${e.id||""}">
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
                ${zt.map(o=>`<button type="button" class="chip ${a===o.id?"on":""}" data-action="set-goal-kind" data-kind="${o.id}">${o.label}</button>`).join("")}
              </div>
              <input type="hidden" name="kind" value="${a}" />
            </div>
            <label class="goal-target-habit" style="${a==="habit-streak"?"":"display:none"}">
              Habit
              <select name="habitTarget">
                ${i.map(o=>`<option value="${o.id}" ${n===o.id?"selected":""}>${y(o.name)}</option>`).join("")}
              </select>
            </label>
            <label class="goal-target-task" style="${a==="task-streak"?"":"display:none"}">
              Pinned task
              <select name="taskTarget">
                ${s.length?s.map(o=>`<option value="${o.id}" ${n===o.id?"selected":""}>${y(o.title)}</option>`).join(""):'<option value="">No pinned tasks yet</option>'}
              </select>
            </label>
            <label>
              Number of days
              <input name="targetDays" type="number" min="1" max="365" value="${e.targetDays||7}" />
            </label>
            <div>
              <p class="item-meta">Badge</p>
              <div class="chip-row goal-tier-row">
                ${et.map(o=>`<button type="button" class="chip ${(e.tier||"bronze")===o.id?"on":""}" data-action="set-goal-tier" data-tier="${o.id}">${o.medal} ${o.label}</button>`).join("")}
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
    `}if(w==="pin"){const{kind:t,id:e,title:a,pin:i}=m||{};return`
      <div class="modal-backdrop open" data-action="close-modal">
        <form class="sheet sheet-wide" data-form="pin" data-kind="${t}" data-id="${e}">
          <div class="handle"></div>
          <h2>Pin ${t==="habit"?"habit":"task"}</h2>
          <p class="muted tight">${y(a||"")}</p>
          <div class="form" style="margin-top:14px">
            ${Je(i,m)}
            <button class="primary-btn" type="submit">Save pin</button>
            ${i?'<button class="ghost-btn danger" type="button" data-action="clear-pin">Unpin</button>':""}
            <button class="ghost-btn" type="button" data-action="close-modal">Cancel</button>
          </div>
        </form>
      </div>
    `}if(w==="forward"){const{kind:t,id:e,title:a,from:i}=m||{},s=t==="habit";return`
      <div class="modal-backdrop open" data-action="close-modal">
        <form class="sheet" data-form="forward" data-kind="${t}" data-id="${e}">
          <div class="handle"></div>
          <h2>Forward ${s?"habit":"task"}</h2>
          <p class="muted tight">${y(a||"")}</p>
          <p class="item-meta">From ${y(i||f)} — a copy will be created on the day you pick, marked “↩ Forwarded from ${y(i||f)}”.</p>
          <div class="form" style="margin-top:14px">
            <label>
              Forward to day
              <input name="targetDate" type="date" required value="${we(i||f)}" />
            </label>
            <button class="primary-btn" type="submit">Forward ${s?"habit":"task"} →</button>
            <button class="ghost-btn" type="button" data-action="close-modal">Cancel</button>
          </div>
        </form>
      </div>
    `}if(w==="image"){const{image:t,title:e}=m||{};return t?`
      <div class="lightbox-backdrop" data-action="close-modal">
        <img src="${t}" alt="${y(e||"Task photo")}" />
        <button type="button" class="ghost-btn compact lightbox-close" data-action="close-modal">✕ Close</button>
      </div>
    `:""}return""}function $(){if(mt)try{const t=l.isLocked(f);mt.innerHTML=`
    <div class="app-shell">
      <main class="screen active">
        ${E==="today"?Te():""}
        ${E==="week"?xe():""}
        ${E==="history"?De():""}
        ${E==="habits"?Ce():""}
        ${E==="settings"?qe():""}
      </main>
      ${["today","habits"].includes(E)&&!t?'<button class="fab" data-action="open-add" aria-label="Add">+</button>':""}
      ${E==="settings"?'<button class="fab" data-action="open-add-habit" aria-label="Add habit">+</button>':""}
      <nav class="tabbar tabs-5">
        <button class="tab ${E==="today"?"active":""}" data-screen="today">${H("home")}Today</button>
        <button class="tab ${E==="week"?"active":""}" data-screen="week">${H("week")}Week</button>
        <button class="tab ${E==="history"?"active":""}" data-screen="history">${H("history")}History</button>
        <button class="tab ${E==="habits"?"active":""}" data-screen="habits">${H("habit")}Activities</button>
        <button class="tab ${E==="settings"?"active":""}" data-screen="settings">${H("settings")}Settings</button>
      </nav>
    </div>
    ${Ye()}
    <div class="toast" id="toast"></div>
  `,Qe(),Ze(),oe(),Xe()}catch(t){const e=t&&t.stack?String(t.stack).slice(0,400):t&&t.message?t.message:"Unknown error";mt.innerHTML=`<div class="app-shell"><section class="manage-card"><h2>Could not load (Error B)</h2><p class="muted tight">${y(e)}</p><button class="primary-btn full" data-action="reload-app">Reload</button></section></div>`}}function Xe(){if(w!=="habit"&&w!=="task")return;const t=document.querySelector(".sheet");t&&(t.scrollTop=0);const e=document.querySelector('.sheet input[name="title"]');if(e)try{e.focus({preventScroll:!0})}catch{try{e.focus()}catch{}}}function Qe(){const t=document.getElementById("day-note");t&&t.addEventListener("input",()=>{l.isLocked(f)||l.setNote(f,t.value)})}function Ze(){const t=document.getElementById("lock-time"),e=document.getElementById("auto-lock");t&&t.addEventListener("change",()=>{l.setLockTime(t.value),h(`Lock time set to ${t.value}`),$()}),e&&e.addEventListener("change",()=>{l.setAutoLock(e.checked),h(e.checked?"Auto-lock on":"Auto-lock off"),$()});const a=document.getElementById("backup-file");a&&a.addEventListener("change",()=>{const i=a.files[0];if(!i)return;const s=new FileReader;s.onload=()=>{re(String(s.result||""),i.name),a.value=""},s.onerror=()=>{h("Couldn't read that file."),a.value=""},s.readAsText(i)})}function h(t){const e=document.getElementById("toast");e&&(e.textContent=t,e.classList.add("show"),setTimeout(()=>e.classList.remove("show"),1800))}function ce(){const t=l.getTheme();document.documentElement.dataset.theme=t;const e=document.querySelector('meta[name="theme-color"]');e&&(e.content=t==="light"?"#f3f1ea":"#0e1116")}function y(t){return String(t||"").split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;").split('"').join("&quot;")}function M(){return l.isLocked(f)?(h("This report is locked. Unlock it in Settings."),!0):!1}function xt(t){return{mode:(t==null?void 0:t.mode)||"forever",until:(t==null?void 0:t.until)||"",weekdays:Array.isArray(t==null?void 0:t.weekdays)?t.weekdays.map(Number):[],monthDays:Array.isArray(t==null?void 0:t.monthDays)?t.monthDays.map(Number):[],yearDays:Array.isArray(t==null?void 0:t.yearDays)?[...t.yearDays]:[],customDates:Array.isArray(t==null?void 0:t.customDates)?[...t.customDates]:[],exceptDates:Array.isArray(t==null?void 0:t.exceptDates)?[...t.exceptDates]:Array.isArray(t==null?void 0:t.exceptions)?[...t.exceptions]:[]}}function Ke(t){const e=l.findHabit(t);e&&(w="pin",m={kind:"habit",id:t,title:e.name,pin:e.pin?xt(e.pin):{mode:"forever",until:"",weekdays:[],monthDays:[],yearDays:[],customDates:[],exceptDates:[]},_exceptCal:B(f),_customCal:B(f),_yearMonth:"01"})}function ta(t){const e=l.findTask(f,t);if(!e)return;const a=e.sourcePinId?l.findPinnedTask(e.sourcePinId):null;w="pin",m={kind:"task",id:t,title:e.title,pin:a!=null&&a.pin?xt(a.pin):{mode:"forever",until:"",weekdays:[],monthDays:[],yearDays:[],customDates:[],exceptDates:[]},_exceptCal:B(f),_customCal:B(f),_yearMonth:"01"}}function ea(t){const e=l.findPinnedTask(t);e&&(w="pin",m={kind:"template",id:t,title:e.title,pin:e.pin?xt(e.pin):{mode:"forever",until:"",weekdays:[],monthDays:[],yearDays:[],customDates:[],exceptDates:[]},_exceptCal:B(f),_customCal:B(f),_yearMonth:"01"})}function aa(t){var d;const e=t.querySelector('input[name="mode"]').value,a=((d=t.querySelector('input[name="until"]'))==null?void 0:d.value)||"",i=[...t.querySelectorAll(".weekday.on")].map(g=>Number(g.dataset.day)),s=[...t.querySelectorAll(".monthday.on")].map(g=>Number(g.dataset.day)),n=m&&m.pin||{},o=Array.isArray(n.yearDays)?n.yearDays:[],r=Array.isArray(n.customDates)?n.customDates:[],c=Array.isArray(n.exceptDates)?n.exceptDates:[];return e==="until"&&!a?(h("Pick an until date"),null):e==="weekly"&&!i.length?(h("Pick at least one weekday"),null):e==="monthly"&&!s.length?(h("Pick at least one day of month"),null):e==="yearly"&&!o.length?(h("Add at least one yearly date"),null):e==="custom"&&!r.length?(h("Pick at least one custom date"),null):{mode:e,until:a,weekdays:i,monthDays:s,yearDays:o,customDates:r,exceptDates:c}}function Y(t,e,a){const i=e instanceof Blob?e:new Blob([e],{type:a||"text/plain;charset=utf-8"}),s=URL.createObjectURL(i),n=document.createElement("a");n.href=s,n.download=t,document.body.appendChild(n),n.click(),setTimeout(()=>{document.body.removeChild(n),URL.revokeObjectURL(s)},500)}function Q(t){const e=String(t??"");return/[",\n]/.test(e)?`"${e.replace(/"/g,'""')}"`:e}function Dt(t){const[e,a]=l.resolveRange(t,f);return{range:t,start:e,end:a,rows:l.exportRows(e,a)}}function sa(){const t=m&&m.range||"day",{start:e,end:a,rows:i}=Dt(t),s=[];s.push(["Daily Report export",`${e} to ${a}`].map(Q).join(",")),s.push(["Date","Type","Name","Category","Tags","Points","Rating","Earned","ConsciousPts","Status","Note/Description"].map(Q).join(",")),i.forEach(n=>{n.habits.forEach(o=>{s.push([n.date,"Habit",o.name,o.category,(o.tags||[]).join("|"),o.points,o.rating,o.earned,o.consciousPoints,o.status||(o.rating>0?"done":n.locked?"missed":"pending"),o.description||""].map(Q).join(","))}),n.tasks.forEach(o=>{s.push([n.date,"Task",o.hasImage?`${o.title} [photo]`:o.title,o.category,(o.tags||[]).join("|"),o.points,o.rating||"",o.earned,"",o.status||(o.done?"done":n.locked?"missed":"pending"),o.description||""].map(Q).join(","))}),s.push([n.date,"Summary",`Earned ${n.earned}/${n.max} (${n.percent}%)`,"","","","","","",n.locked?"locked":"open",n.note||""].map(Q).join(","))}),Y(`daily-report-${t}-${e}-to-${a}.csv`,"\uFEFF"+s.join(`
`),"text/csv;charset=utf-8"),h("Excel (CSV) exported")}function ia(){const t=m&&m.range||"day",{start:e,end:a,rows:i}=Dt(t),s={app:"Daily Report",exportedAt:new Date().toISOString(),range:t,start:e,end:a,days:i};Y(`daily-report-${t}-${e}-to-${a}.json`,JSON.stringify(s,null,2),"application/json"),h("JSON exported")}function na(){const t=m&&m.range||"day",{start:e,end:a,rows:i}=Dt(t),s=i.map(o=>`
        <section style="margin-bottom:18px;border:1px solid #ddd;border-radius:12px;padding:12px">
          <h2 style="margin:0 0 4px;font-size:16px">${y(o.date)} — ${o.earned}/${o.max} pts (${o.percent}%)</h2>
          <p style="margin:0 0 8px;font-size:12px;color:#555">Habits ${o.habitScore} + Conscious ${o.consciousScore} + Tasks ${o.taskScore} · ${o.locked?"Locked":"Open"}${o.note?` · Note: ${y(o.note)}`:""}</p>
          <table style="width:100%;border-collapse:collapse;font-size:12px">
            <thead><tr><th align="left">Type</th><th align="left">Name</th><th align="left">Category</th><th>Points</th><th>Rating</th><th>Earned</th><th>Status</th></tr></thead>
            <tbody>
              ${o.habits.map(r=>`<tr><td>Habit</td><td>${y(r.name)}${r.description?` (${y(r.description)})`:""}</td><td>${y(r.category)}</td><td align="center">${r.points}${r.consciousPoints?`+${r.consciousPoints}🧠`:""}</td><td align="center">${r.rating||"-"}/5</td><td align="center">${r.earned}</td><td align="center">${r.status||(r.rating>0?"done":o.locked?"missed":"pending")}</td></tr>`).join("")}
              ${o.tasks.map(r=>`<tr><td>Task</td><td>${y(r.title)}${r.hasImage?" 📷":""}${r.description?` (${y(r.description)})`:""}</td><td>${y(r.category)}</td><td align="center">${r.points}</td><td align="center">${r.rating?`${r.rating}/5`:"-"}</td><td align="center">${r.earned}</td><td align="center">${r.status||(r.done?"done":o.locked?"missed":"pending")}</td></tr>`).join("")}
            </tbody>
          </table>
        </section>
      `).join(""),n=window.open("","_blank");if(!n){h("Popup blocked — allow popups to export PDF");return}n.document.write(`<!DOCTYPE html><html><head><title>Daily Report ${e} to ${a}</title></head><body style="font-family:sans-serif;padding:24px"><h1>Daily Report — ${e} to ${a}</h1>${s}<script>window.onload=function(){window.print()}<\/script></body></html>`),n.document.close(),h("PDF print view opened")}document.addEventListener("click",t=>{const e=t.target.closest("[data-screen]");if(e){E=e.dataset.screen,$();return}const a=t.target.closest("[data-action]");if(!a)return;const i=a.dataset.action;if(i==="close-modal"){if(w==="image"){w=null,m=null,$();return}(t.target.classList.contains("modal-backdrop")||a.classList.contains("ghost-btn"))&&(w=null,m=null,$());return}if(i==="note-bullets"){Ft("bullets");return}if(i==="note-numbered"){Ft("numbered");return}if(i==="pick-task-image"){const s=document.getElementById("task-image-input");s?s.click():h("Photo picking needs a browser file picker");return}if(i==="remove-task-image"){m&&(m._image="",$(),h("Photo removed — save to apply"));return}if(i==="view-task-image"){const s=l.findTask(f,a.dataset.id),n=s&&s.image?s.image:m&&(m._image||m.image)||"";if(!n){h("No photo on this task");return}w="image",m={image:n,title:s&&s.title||"Task photo"},$();return}if(i==="prev-day"&&Ht(-1),i==="next-day"&&Ht(1),i==="reload-app"){window.location.reload();return}if(i==="set-theme"){const s=a.dataset.theme==="light"?"light":"dark";l.setTheme(s),ce(),h(s==="light"?"Light mode on":"Dark mode on")}if(i==="install-app"){_e();return}if(i==="check-updates"){Ge();return}if(i==="apply-update"){de();return}if(i==="backup-now"){Fe();return}if(i==="trigger-import"){const s=document.getElementById("backup-file");s&&s.click();return}if(i==="choose-folder"){Re();return}if(i==="grant-folder"){Ie();return}if(i==="forget-folder"){je();return}if(i==="restore-backup"){Oe(a.dataset.name);return}if(i==="goto-settings"&&(E="settings"),i==="open-add-habit"&&(w="habit",m=null),i==="open-add-task"){if(M())return;w="task",m={category:"mentally"}}if(i==="open-add"){if(M())return;w="choose",m={category:"mentally"}}if(i==="toggle-edit"&&(U=!U),i==="open-edit-habit"){const s=l.findHabit(a.dataset.id);if(!s)return;w="edit-habit",m={id:s.id,name:s.name,description:s.description||"",points:s.points,category:s.category,tags:s.tags||[],consciousPoints:Number(s.consciousPoints)||0}}if(i==="open-edit-task"){if(M())return;const s=l.findTask(f,a.dataset.id);if(!s)return;w="edit-task",m={id:s.id,title:s.title,points:s.points,description:s.description,category:s.category,tags:s.tags||[],rating:Number(s.rating)||0,image:s.image||"",_image:void 0}}if(i==="toggle-badges"&&(ot=!ot),i==="open-goal"&&(w="goal",m={kind:"habit-streak",targetDays:7,tier:"bronze"}),i==="open-edit-goal"){const s=l.getGoals().find(n=>n.id===a.dataset.id);if(!s)return;w="edit-goal",m={...s}}if(i==="remove-goal"&&(l.removeGoal(a.dataset.id),h("Goal removed")),i==="remove-badge"&&(l.removeBadge(a.dataset.id),h("Badge removed")),i==="rate-habit"){if(M())return;const n=l.habitRating(f,a.dataset.id)===Number(a.dataset.rating)?0:Number(a.dataset.rating);l.setHabitRating(f,a.dataset.id,n)}if(i==="rate-task"){if(M())return;const s=l.findTask(f,a.dataset.id);if(!s)return;const o=(Number(s.rating)||0)===Number(a.dataset.rating)?0:Number(a.dataset.rating);l.setTaskRating(f,a.dataset.id,o)}if(i==="open-export"&&(w="export",m={range:m&&m.range||"day"}),i==="set-export-range"){w="export",m={range:a.dataset.range||"day"},$();return}if(i==="do-export"){const s=a.dataset.format;s==="csv"&&sa(),s==="json"&&ia(),s==="pdf"&&na(),w=null,m=null}if(i==="submit-day"&&(l.submitDay(f),h("Report submitted and locked")),i==="unlock-day"&&(l.unlockDay(a.dataset.date),h("Report unlocked")),i==="toggle-habit"){if(M())return;l.toggleHabit(f,a.dataset.id)}if(i==="toggle-task"){if(M())return;l.toggleTask(f,a.dataset.id)}if(i==="remove-task"){if(M())return;l.removeTask(f,a.dataset.id)}if(i==="remove-habit"&&l.removeHabit(a.dataset.id),i==="open-pin-habit"&&Ke(a.dataset.id),i==="open-forward-habit"){if(M())return;const s=l.findHabit(a.dataset.id);if(!s)return;w="forward",m={kind:"habit",id:s.id,title:s.name,from:f}}if(i==="open-forward-task"){if(M())return;const s=l.findTask(f,a.dataset.id);if(!s)return;w="forward",m={kind:"task",id:s.id,title:s.title,from:f}}if(i==="open-pin-task"){if(M())return;ta(a.dataset.id)}if(i==="open-pin-template"&&ea(a.dataset.id),i==="unpin-template"&&(l.unpinTaskTemplate(a.dataset.id),h("Task unpinned")),i==="pick-date"&&(f=a.dataset.date,E="today"),i==="set-chart-range"){Z=["week","month","year"].includes(a.dataset.range)?a.dataset.range:"week",$();return}if(i==="add-category"){const s=document.getElementById("new-category"),n=l.addCategory(s?s.value:"");h(n.ok?"Category added":n.reason||"Couldn't add category"),$();return}if(i==="rename-category"){const s=l.getCustomCategories().find(r=>r.id===a.dataset.id),n=window.prompt("Rename category",s?s.label:"");if(n==null)return;const o=l.renameCategory(a.dataset.id,n);h(o.ok?"Category renamed":o.reason||"Couldn't rename"),$();return}if(i==="delete-category"){if(!window.confirm("Delete this category? Its habits and tasks move to Mentally."))return;const s=l.deleteCategory(a.dataset.id);h(s.ok?"Category deleted":s.reason||"Couldn't delete"),$();return}if(i==="rename-tag"){const s=window.prompt("Rename tag everywhere",a.dataset.tag||"");if(s==null)return;const n=l.renameTag(a.dataset.tag,s);h(n.ok?n.merged?"Tags merged":"Tag renamed everywhere":n.reason||"Couldn't rename"),$();return}if(i==="delete-tag"){if(!window.confirm(`Delete tag "#${a.dataset.tag}" from all habits and tasks?`))return;l.deleteTag(a.dataset.tag),h("Tag deleted everywhere"),$();return}if(i==="add-tag"){const s=document.getElementById("tag-habit-pick"),n=document.getElementById("new-tag"),o=l.addTagToHabit(s?s.value:"",n?n.value:"");h(o.ok?"Tag added to habit":o.reason||"Couldn't add tag"),$();return}if(i==="set-points"){const s=document.querySelector('input[name="points"]');s&&(s.value=a.dataset.points),document.querySelectorAll(".chip-row .chip[data-points]").forEach(n=>n.classList.remove("on")),a.classList.add("on");return}if(i==="set-category"){const s=a.closest("form")||a.closest(".sheet"),n=s.querySelector('input[name="category"]');n&&(n.value=a.dataset.category),s.querySelectorAll(".cat-row .chip").forEach(o=>o.classList.remove("on")),a.classList.add("on");return}if(i==="set-rating"){const s=a.closest(".sheet")||a.closest("form")||document,n=s.querySelector('input[name="rating"]');n&&(n.value=a.dataset.rating),s.querySelectorAll(".rating-row .chip").forEach(o=>o.classList.remove("on")),a.classList.add("on");return}if(i==="set-conscious"){const s=a.closest(".sheet")||a.closest("form")||document,n=s.querySelector('input[name="consciousPoints"]');n&&(n.value=a.dataset.conscious),s.querySelectorAll(".conscious-row .chip").forEach(o=>o.classList.remove("on")),a.classList.add("on");return}if(i==="set-goal-kind"){const s=a.closest(".sheet")||document,n=s.querySelector('input[name="kind"]');n&&(n.value=a.dataset.kind),s.querySelectorAll(".goal-kind-row .chip").forEach(d=>d.classList.remove("on")),a.classList.add("on");const o=a.dataset.kind,r=s.querySelector(".goal-target-habit"),c=s.querySelector(".goal-target-task");r&&(r.style.display=o==="habit-streak"?"":"none"),c&&(c.style.display=o==="task-streak"?"":"none"),m&&(m.kind=o);return}if(i==="set-goal-tier"){const s=a.closest(".sheet")||document,n=s.querySelector('input[name="tier"]');n&&(n.value=a.dataset.tier),s.querySelectorAll(".goal-tier-row .chip").forEach(o=>o.classList.remove("on")),a.classList.add("on");return}if(i==="pin-mode"){const s=a.closest("form"),n=a.dataset.mode;s.querySelector('input[name="mode"]').value=n,s.querySelectorAll(".pin-modes .chip").forEach(r=>r.classList.remove("on")),a.classList.add("on");const o=(r,c)=>{const d=s.querySelector(r);d&&(d.style.display=c?"":"none")};o(".pin-until",n==="until"),o(".pin-weekdays",n==="weekly"),o(".pin-monthdays",n==="monthly"),o(".pin-yeardays",n==="yearly"),m&&m.pin&&(m.pin.mode=n);return}if(i==="toggle-weekday"){a.classList.toggle("on");return}if(i==="toggle-monthday"){a.classList.toggle("on");return}if(i==="pin-cal-nav"){if(!m)return;const s=a.dataset.target,n=Number(a.dataset.dir)||0;s==="except"?m._exceptCal=_t(m._exceptCal||B(f),n):m._customCal=_t(m._customCal||B(f),n),$();return}if(i==="toggle-pin-date"){if(!m||!m.pin)return;const s=a.dataset.target,n=a.dataset.date,o=s==="custom"?"customDates":"exceptDates",r=Array.isArray(m.pin[o])?[...m.pin[o]]:[],c=r.indexOf(n);c>=0?r.splice(c,1):(r.push(n),r.length>365&&r.shift()),m.pin[o]=r.sort(),$();return}if(i==="add-year-day"){if(!m||!m.pin)return;const s=a.closest("form")||document,n=s.querySelector("#year-month-select"),o=s.querySelector("#year-day-select");n&&(m._yearMonth=n.value);const r=`${n?n.value:"01"}-${o?o.value:"01"}`,c=Array.isArray(m.pin.yearDays)?[...m.pin.yearDays]:[];c.includes(r)||c.push(r),m.pin.yearDays=c.sort(),$();return}if(i==="remove-year-day"){if(!m||!m.pin)return;const s=a.dataset.date;m.pin.yearDays=(m.pin.yearDays||[]).filter(n=>n!==s),$();return}if(i==="clear-pin"){const s=a.closest("form"),n=s.dataset.kind,o=s.dataset.id;if(n==="habit"&&l.unpinHabit(o),n==="task"){const r=l.findTask(f,o);r!=null&&r.sourcePinId&&l.unpinTaskTemplate(r.sourcePinId)}n==="template"&&l.unpinTaskTemplate(o),w=null,m=null,h("Unpinned"),$();return}$()});document.addEventListener("submit",t=>{const e=t.target.closest("[data-form]");if(!e)return;t.preventDefault();const a=e.dataset.form;if(a==="habit"||a==="task"||a==="edit-habit"||a==="edit-task"){const i=new FormData(e),s=String(i.get("title")||""),n=Number(i.get("points")||0),o=String(i.get("category")||"mentally"),r=String(i.get("description")||""),c=String(i.get("tags")||""),d=Math.max(0,Math.min(5,Number(i.get("rating")||0))),g=Math.max(0,Math.min(100,Number(i.get("consciousPoints")||0)));if(!s.trim())return;const b=m&&m._image!==void 0?_(m._image):_(m&&m.image);if(a==="habit")l.addHabit(s,n,{description:r,category:o,consciousPoints:g,tags:c}),h("Habit added");else if(a==="task"){if(M())return;l.addTask(f,s,n,{description:r,category:o,rating:d,tags:c,image:b}),h("Task added")}else if(a==="edit-habit")l.updateHabit(e.dataset.id,{name:s,description:r,points:n,category:o,consciousPoints:g,tags:c}),h("Habit updated");else{if(M())return;l.updateTask(f,e.dataset.id,{title:s,points:n,description:r,category:o,rating:d,tags:c,image:b}),h("Task updated")}w=null,m=null,$();return}if(a==="pin"){const i=aa(e);if(!i)return;const s=e.dataset.kind,n=e.dataset.id;s==="habit"&&l.pinHabit(n,i),s==="task"&&l.pinTask(f,n,i),s==="template"&&l.updatePinnedTask(n,i),w=null,m=null,h("Pin saved"),$();return}if(a==="forward"){const i=new FormData(e),s=String(i.get("targetDate")||""),n=e.dataset.kind,o=e.dataset.id,r=m&&m.from||f;if(!/^\d{4}-\d{2}-\d{2}$/.test(s)){h("Pick a valid date");return}const c=n==="habit"?l.forwardHabit(r,o,s):l.forwardTask(r,o,s);if(!c.ok){h(c.reason||"Could not forward");return}w=null,m=null,f=s,E="today",h(`Forwarded to ${s}`),$();return}if(a==="goal"||a==="edit-goal"){const i=new FormData(e),s=String(i.get("title")||"").trim(),n=String(i.get("kind")||"habit-streak"),o=String(i.get("tier")||"bronze"),r=String(i.get("rewardTitle")||"").trim(),c=Math.max(1,Math.min(365,Number(i.get("targetDays")||7)));if(!s||!r){h("Goal title and reward title are required");return}let d="";if(n==="habit-streak"&&(d=String(i.get("habitTarget")||"")),n==="task-streak"&&(d=String(i.get("taskTarget")||"")),(n==="habit-streak"||n==="task-streak")&&!d){h(n==="habit-streak"?"Pick a habit":"Pin a task first, then pick it");return}a==="goal"?(l.addGoal({title:s,kind:n,targetId:d,targetDays:c,tier:o,rewardTitle:r}),h("Goal added")):(l.updateGoal(e.dataset.id,{title:s,kind:n,targetId:d,targetDays:c,tier:o,rewardTitle:r}),h("Goal updated"));const g=l.checkGoals(f);g.length&&h(`🏅 Reward earned: ${g[0].rewardTitle}!`),w=null,m=null,$()}});document.addEventListener("change",t=>{const e=t.target.closest(".sort-select");if(e){const a=e.dataset.sortKind;a==="habit"&&l.setHabitSort(e.value),a==="task"&&l.setTaskSort(e.value),$()}if(t.target&&t.target.id==="show-conscious"&&(l.setShowConscious(t.target.checked),h(t.target.checked?"Conscious points on":"Conscious points hidden"),$()),t.target&&t.target.id==="week-start"&&(l.setWeekStart(Number(t.target.value)),h("Week starts on "+t.target.selectedOptions[0].textContent),$()),t.target&&t.target.id==="year-month-select"&&m&&(m._yearMonth=t.target.value),t.target&&t.target.id==="task-image-input"){const a=t.target.files&&t.target.files[0];if(!a)return;if(!String(a.type||"").startsWith("image/")){h("Please pick an image file"),t.target.value="";return}h("Processing photo…"),ke(a).then(i=>{if(t.target.value="",!i){h("Photo too large or unreadable — try a smaller one");return}m&&(m._image=i,$(),h("Photo attached — save to apply"))})}});if("serviceWorker"in navigator){window.addEventListener("load",()=>{navigator.serviceWorker.register("./sw.js").catch(()=>{})});let t=!1;try{sessionStorage.getItem("dr-updated-reload")&&(t=!0)}catch{}navigator.serviceWorker.addEventListener("controllerchange",()=>{if(!t){t=!0;try{sessionStorage.setItem("dr-updated-reload","1")}catch{}window.location.reload()}})}function oa(){const t=document.getElementById("boot-error");t&&(t.style.display="none")}oa();ce();$();Ne().then(()=>{E==="settings"&&$()});
