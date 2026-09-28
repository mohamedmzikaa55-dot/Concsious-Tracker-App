(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function a(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=a(i);fetch(i.href,n)}})();const Ht="daily-report-v2",X=[{id:"mentally",label:"Mentally"},{id:"psychology",label:"Psychology"},{id:"physically",label:"Physically"},{id:"spiritually",label:"Spiritually"},{id:"socially",label:"Socially"}],ee=X.map(t=>t.id),Rt=[{id:"h1",name:"Wake up early",points:10,icon:"sunrise",category:"physically",pin:{mode:"forever"}},{id:"h2",name:"Drink water",points:5,icon:"drop",category:"physically",pin:{mode:"forever"}},{id:"h3",name:"Exercise",points:15,icon:"bolt",category:"physically",pin:{mode:"forever"}},{id:"h4",name:"Read 20 minutes",points:10,icon:"book",category:"mentally",pin:{mode:"forever"}},{id:"h5",name:"No junk food",points:10,icon:"leaf",category:"physically",pin:{mode:"forever"}}],Ft={lockTime:"21:00",autoLock:!0,showConscious:!0,habitSort:"default",taskSort:"default",theme:"dark"},Q=[{id:"iron",label:"Iron",medal:"🥉",rank:1},{id:"bronze",label:"Bronze",medal:"🥉",rank:2},{id:"silver",label:"Silver",medal:"🥈",rank:3},{id:"gold",label:"Gold",medal:"🥇",rank:4}],jt=[{id:"habit-streak",label:"Habit streak"},{id:"task-streak",label:"Pinned task streak"},{id:"perfect-days",label:"Perfect days (100%)"}];function $t(t){var e;return((e=Q.find(a=>a.id===t))==null?void 0:e.rank)||0}function lt(t){var e;return((e=Q.find(a=>a.id===t))==null?void 0:e.medal)||"🏅"}function It(t){var e;return((e=Q.find(a=>a.id===t))==null?void 0:e.label)||t||"Badge"}function N(t){const e=Array.isArray(t)?t:String(t||"").split(","),a=[];return e.forEach(s=>{const i=String(s||"").trim().slice(0,20);i&&!a.some(n=>n.toLowerCase()===i.toLowerCase())&&a.push(i),a.length>=10}),a.slice(0,10)}function dt(t,e){const a=[...t];return e==="points"?a.sort((s,i)=>(Number(i.points)||0)-(Number(s.points)||0)):e==="category"?a.sort((s,i)=>J(P(s.category)).localeCompare(J(P(i.category)))):e==="tags"&&a.sort((s,i)=>(s.tags&&s.tags[0]||"~~~").localeCompare(i.tags&&i.tags[0]||"~~~")),a}const Bt=[{value:1,label:"Mon"},{value:2,label:"Tue"},{value:3,label:"Wed"},{value:4,label:"Thu"},{value:5,label:"Fri"},{value:6,label:"Sat"},{value:0,label:"Sun"}];function F(t=new Date){const e=t.getFullYear(),a=String(t.getMonth()+1).padStart(2,"0"),s=String(t.getDate()).padStart(2,"0");return`${e}-${a}-${s}`}function bt(){return{habits:{},habitRatings:{},habitMissed:{},habitForwarded:{},tasks:[],note:"",locked:!1,lockOverride:null,submittedAt:null,lockedHabits:null}}function P(t){return ee.includes(t)?t:"mentally"}function J(t){var e;return((e=X.find(a=>a.id===t))==null?void 0:e.label)||"Mentally"}const Z=7e5;function I(t){const e=String(t||"");return e.startsWith("data:image/")?e.length>Z?"":e:""}function wt(t){const e=Math.max(0,Math.min(5,Number(t.rating)||0)),a=i=>/^\d{4}-\d{2}-\d{2}$/.test(String(i||""))?String(i):"",s=i=>Array.isArray(i)?i.filter(n=>/^\d{4}-\d{2}-\d{2}$/.test(String(n))).map(String).slice(0,50):[];return{...t,description:t.description||"",category:P(t.category),tags:N(t.tags),rating:e,done:!!t.done,missed:!!t.missed,forwardedFrom:a(t.forwardedFrom),forwardedHabitId:String(t.forwardedHabitId||""),forwardedTo:s(t.forwardedTo),image:I(t.image)}}function H(t){const e=Number(t);return!Number.isFinite(e)||e<0?0:Math.min(100,Math.round(e))}function G(t){if(!t||!t.mode)return null;const e=(i,n,o)=>Array.isArray(i)?i.map(Number).filter(r=>Number.isFinite(r)&&r>=n&&r<=o):[],a=i=>Array.isArray(i)?i.filter(n=>/^\d{4}-\d{2}-\d{2}$/.test(String(n))).map(String).slice(0,365):[],s=i=>Array.isArray(i)?i.filter(n=>/^\d{2}-\d{2}$/.test(String(n))).map(String).slice(0,366):[];return{mode:["forever","until","weekly","monthly","yearly","custom"].includes(t.mode)?t.mode:"forever",until:t.until||"",weekdays:e(t.weekdays,0,6),monthDays:e(t.monthDays,1,31),yearDays:s(t.yearDays),customDates:a(t.customDates),exceptDates:a(t.exceptDates||t.exceptions)}}function ae(t,e){const a=`${t} ${e}`.toLowerCase();return a.includes("read")||a.includes("study")||a.includes("learn")?"mentally":a.includes("meditat")||a.includes("pray")||a.includes("journal")?"spiritually":a.includes("mood")||a.includes("calm")||a.includes("therapy")?"psychology":a.includes("friend")||a.includes("family")||a.includes("social")||a.includes("call")||a.includes("visit")?"socially":"physically"}function ut(t){const e=jt.some(a=>a.id===t.kind)?t.kind:"habit-streak";return{id:String(t.id||`g${Date.now()}`),title:String(t.title||"").trim().slice(0,60)||"My goal",kind:e,targetId:String(t.targetId||""),targetDays:Math.max(1,Math.min(365,Number(t.targetDays)||7)),tier:Q.some(a=>a.id===t.tier)?t.tier:"bronze",rewardTitle:String(t.rewardTitle||"").trim().slice(0,60)||"Reward",createdAt:t.createdAt||new Date().toISOString()}}function Ot(t){const e=(Array.isArray(t.habits)&&t.habits.length?t.habits:Rt).map(s=>({...s,description:String(s.description||"").slice(0,240),category:P(s.category||ae(s.id,s.name)),consciousPoints:H(s.consciousPoints),tags:N(s.tags),pin:G(s.pin)})),a={};return Object.entries(t.days||{}).forEach(([s,i])=>{a[s]={...bt(),habits:i.habits||{},habitRatings:i.habitRatings||{},habitMissed:i.habitMissed||{},habitForwarded:i.habitForwarded&&typeof i.habitForwarded=="object"?i.habitForwarded:{},tasks:Array.isArray(i.tasks)?i.tasks.map(wt):[],note:i.note||"",locked:!!i.locked,lockOverride:i.lockOverride||(i.locked?"locked":null),submittedAt:i.submittedAt||null,lockedHabits:Array.isArray(i.lockedHabits)?i.lockedHabits:null}}),{habits:e,pinnedTasks:Array.isArray(t.pinnedTasks)?t.pinnedTasks.map(s=>({...wt(s),pin:G(s.pin)})):[],days:a,goals:Array.isArray(t.goals)?t.goals.map(ut):[],badges:Array.isArray(t.badges)?t.badges.filter(s=>s&&s.id&&s.goalId).map(s=>({id:String(s.id),goalId:String(s.goalId),title:String(s.title||""),tier:s.tier||"bronze",rewardTitle:String(s.rewardTitle||""),earnedAt:s.earnedAt||new Date().toISOString()})):[],settings:{lockTime:t.settings&&t.settings.lockTime||Ft.lockTime,autoLock:!t.settings||t.settings.autoLock!==!1,showConscious:!t.settings||t.settings.showConscious!==!1,habitSort:["default","points","category","tags"].includes(t.settings&&t.settings.habitSort)?t.settings.habitSort:"default",taskSort:["default","points","category","tags"].includes(t.settings&&t.settings.taskSort)?t.settings.taskSort:"default",theme:["light","dark"].includes(t.settings&&t.settings.theme)?t.settings.theme:"dark"}}}function St(){return{habits:Rt.map(t=>({...t,description:"",tags:[]})),pinnedTasks:[],days:{},goals:[],badges:[],settings:{...Ft}}}function se(){try{const t=localStorage.getItem(Ht)||localStorage.getItem("daily-report-v1");return t?Ot(JSON.parse(t)):St()}catch{return St()}}let m=se();function w(){try{localStorage.setItem(Ht,JSON.stringify(m))}catch{}}function ie(t){return new Date(`${t}T00:00:00`).getDay()}function V(t){const e=new Date(`${t}T00:00:00`);return e.setDate(e.getDate()-1),F(e)}function K(t,e){if(!t)return!0;if(Array.isArray(t.exceptDates)&&t.exceptDates.includes(e)||Array.isArray(t.exceptions)&&t.exceptions.includes(e))return!1;if((Array.isArray(t.customDates)?t.customDates:[]).includes(e)||t.mode==="forever")return!0;if(t.mode==="until")return!!t.until&&e<=t.until;if(t.mode==="weekly")return Array.isArray(t.weekdays)&&t.weekdays.includes(ie(e));if(t.mode==="monthly"){const s=Array.isArray(t.monthDays)?t.monthDays.map(Number):[];return s.length?s.includes(Number(String(e).slice(8,10))):!0}if(t.mode==="yearly"){const s=Array.isArray(t.yearDays)?t.yearDays:[];return s.length?s.includes(String(e).slice(5,10)):!0}return t.mode!=="custom"}function tt(t){if(!t)return"Not pinned";const e=(t.exceptDates||t.exceptions||[]).length,a=e?` · ⛔ ${e} exception${e>1?"s":""}`:"",s=t.mode==="custom"?0:Array.isArray(t.customDates)?t.customDates.length:0,i=s?` +${s} custom`:"";if(t.mode==="forever")return`Pinned forever${i}${a}`;if(t.mode==="until")return`${t.until?`Pinned until ${t.until}`:"Pinned until a date"}${i}${a}`;if(t.mode==="weekly"){const n=Array.isArray(t.weekdays)?t.weekdays:[],o=Bt.filter(r=>n.includes(r.value)).map(r=>r.label);return`${o.length?`Weekly: ${o.join(", ")}`:"Weekly (no days)"}${i}${a}`}if(t.mode==="monthly"){const n=Array.isArray(t.monthDays)?t.monthDays:[];return`${n.length?`Monthly: day${n.length>1?"s":""} ${[...n].sort((o,r)=>o-r).join(", ")}`:"Monthly"}${i}${a}`}if(t.mode==="yearly"){const n=Array.isArray(t.yearDays)?t.yearDays:[];return`${n.length?`Yearly: ${[...n].sort().join(", ")}`:"Yearly"}${i}${a}`}if(t.mode==="custom"){const n=Array.isArray(t.customDates)?t.customDates:[];return`${n.length?`Custom: ${n.length} date${n.length>1?"s":""}`:"Custom dates"}${a}`}return"Pinned"}function xt(t){const[e,a]=(m.settings.lockTime||"21:00").split(":").map(Number),s=new Date(`${t}T00:00:00`);return s.setHours(e||0,a||0,0,0),s}function _t(t){const e=m.days[t];return e?e.lockOverride==="locked"||e.locked===!0:!1}function pt(t,e){const a=m.days[t];return a?a.habitRatings&&a.habitRatings[e]!=null?Number(a.habitRatings[e])||0:a.habits&&a.habits[e]?5:0:0}function mt(t){const e=A(t),a=m.habits.filter(s=>K(s.pin,t));e.lockedHabits=a.map(s=>({id:s.id,name:s.name,description:String(s.description||"").slice(0,240),points:Number(s.points)||0,icon:s.icon||"star",category:P(s.category),consciousPoints:H(s.consciousPoints),tags:N(s.tags),pin:G(s.pin)})),e.habitMissed={},a.forEach(s=>{pt(t,s.id)<=0?(e.habitMissed[s.id]=!0,e.habitRatings[s.id]=0,e.habits[s.id]=!1):e.habitMissed&&delete e.habitMissed[s.id]}),e.tasks.forEach(s=>{s.missed=!s.done})}function Dt(t){const e=A(t);return e.lockOverride==="unlocked"?!1:e.lockOverride==="locked"||e.locked?((!e.lockedHabits||e.habitMissed==null)&&mt(t),!0):m.settings.autoLock&&Date.now()>=xt(t).getTime()?(e.locked=!0,e.lockOverride="locked",e.submittedAt=e.submittedAt||xt(t).toISOString(),mt(t),w(),!0):!1}function A(t){return m.days[t]||(m.days[t]=bt()),m.days[t]}function ne(t){const e=A(t);if(_t(t))return e;let a=!1;return m.pinnedTasks.forEach(s=>{K(s.pin,t)&&(e.tasks.some(i=>i.sourcePinId===s.id)||(e.tasks.push({id:`ptask-${s.id}-${t}`,title:s.title,points:s.points,description:s.description||"",category:P(s.category),tags:N(s.tags),rating:0,done:!1,missed:!1,sourcePinId:s.id,image:I(s.image)}),a=!0))}),a&&w(),e}function R(t){return!c.isLocked(t)}function Tt(t){const e=X.find(a=>a.label.toLowerCase()===String(t||"").trim().toLowerCase());return e?e.id:"mentally"}function At(t){return!t||typeof t!="object"||Array.isArray(t)?[]:Array.isArray(t.days)?t.days.filter(e=>e&&/^\d{4}-\d{2}-\d{2}$/.test(String(e.date||""))):[]}const c={todayKey:F,exportBackup(){return JSON.stringify({app:"Daily Report",kind:"full-backup",version:1,exportedAt:new Date().toISOString(),data:m},null,2)},backupKind(t){if(!t||typeof t!="object"||Array.isArray(t))return"invalid";const e=t.data&&typeof t.data=="object"&&!Array.isArray(t.data)?t.data:t;return Array.isArray(e.days)?"report-export":Array.isArray(e.categories)||Array.isArray(e.plans)||Array.isArray(e.schedule)?"wrong-app":typeof e!="object"||e===null||e.habits!==void 0&&!Array.isArray(e.habits)||e.days!==void 0&&(typeof e.days!="object"||e.days===null||Array.isArray(e.days))||e.settings!==void 0&&(typeof e.settings!="object"||e.settings===null||Array.isArray(e.settings))||!["habits","pinnedTasks","days","goals","badges","settings"].some(s=>e[s]!==void 0)?"invalid":"ok"},importBackup(t){if(this.backupKind(t)!=="ok")return!1;const e=t.data&&typeof t.data=="object"&&!Array.isArray(t.data)?t.data:t;return m=Ot(e),w(),!0},previewReport(t){const e=At(t);if(!e.length)return{days:0,start:"",end:"",newHabits:0};const a=new Set(m.habits.map(n=>String(n.name||"").trim().toLowerCase())),s=new Set;e.forEach(n=>{(Array.isArray(n.habits)?n.habits:[]).forEach(o=>{const r=String(o&&o.name||"").trim().toLowerCase();r&&!a.has(r)&&s.add(r)})});const i=e.map(n=>String(n.date)).sort();return{days:e.length,start:i[0],end:i[i.length-1],newHabits:s.size}},importReport(t){const e=At(t);if(!e.length)return!1;const a=e.map(r=>String(r.date)).sort(),s=a[a.length-1],i={};m.habits.forEach(r=>{i[String(r.name||"").trim().toLowerCase()]=r});let n=0;const o=Date.now();return e.forEach((r,l)=>{const d=String(r.date);(Array.isArray(r.habits)?r.habits:[]).forEach(u=>{const k=String(u&&u.name||"").trim().slice(0,80);if(!k)return;const T=k.toLowerCase();if(!i[T]){const y={id:`h${o}_${n}`,name:k,description:String(u&&u.description||"").slice(0,240),points:Number(u&&u.points||10)||10,icon:"star",category:Tt(u&&u.category),consciousPoints:H(u&&u.consciousPoints),tags:N(u&&u.tags),pin:{mode:"until",until:s,weekdays:[],monthDays:[],yearDays:[],customDates:[],exceptDates:[]}};m.habits.push(y),i[T]=y,n+=1}});const g=bt();g.note=String(r.note||""),g.locked=!0,g.lockOverride="locked",g.submittedAt=null;const S=[];(Array.isArray(r.habits)?r.habits:[]).forEach(u=>{const k=i[String(u&&u.name||"").trim().toLowerCase()];if(!k)return;const T=Math.max(0,Math.min(5,Number(u&&u.rating||0)));g.habitRatings[k.id]=T,g.habits[k.id]=T>0,T<=0&&(g.habitMissed[k.id]=!0),S.push({id:k.id,name:k.name,description:k.description,points:k.points,icon:k.icon||"star",category:P(k.category),consciousPoints:H(k.consciousPoints),tags:N(k.tags),pin:G(k.pin)})}),g.lockedHabits=S,g.tasks=(Array.isArray(r.tasks)?r.tasks:[]).map((u,k)=>({id:`t${o}_${l}_${k}`,title:String(u&&u.title||"Task").slice(0,120),points:Number(u&&u.points||5)||5,description:String(u&&u.description||""),category:Tt(u&&u.category),tags:N(u&&u.tags),rating:Math.max(0,Math.min(5,Number(u&&u.rating||0))),done:!!(u&&u.done),missed:!(u&&u.done),image:"",forwardedFrom:/^\d{4}-\d{2}-\d{2}$/.test(String(u&&u.forwardedFrom||""))?String(u.forwardedFrom):"",forwardedHabitId:"",forwardedTo:Array.isArray(u&&u.forwardedTo)?u.forwardedTo.filter(T=>/^\d{4}-\d{2}-\d{2}$/.test(String(T))).map(String).slice(0,50):[]})),m.days[d]=g}),w(),{days:e.length,habits:n}},getSettings(){return m.settings},setLockTime(t){m.settings.lockTime=t||"21:00",w()},setAutoLock(t){m.settings.autoLock=!!t,w()},setShowConscious(t){m.settings.showConscious=!!t,w()},consciousEnabled(){return m.settings.showConscious!==!1},setHabitSort(t){m.settings.habitSort=["default","points","category","tags"].includes(t)?t:"default",w()},setTaskSort(t){m.settings.taskSort=["default","points","category","tags"].includes(t)?t:"default",w()},getTheme(){return m.settings.theme==="light"?"light":"dark"},setTheme(t){m.settings.theme=t==="light"?"light":"dark",w()},getHabits(t,e){if(t&&_t(t)){const n=m.days[t];if(n&&Array.isArray(n.lockedHabits)){const o=e||m.settings.habitSort||"default",r=[...n.lockedHabits];return o==="default"?r:dt(r,o)}}const s=m.habits.filter(n=>t?K(n.pin,t):!0).sort((n,o)=>+!!o.pin-+!!n.pin),i=e||m.settings.habitSort||"default";return i==="default"?s:dt(s,i)},getTasks(t,e){const a=this.getDay(t),s=e||m.settings.taskSort||"default";return s==="default"?a.tasks:dt(a.tasks,s)},getAllHabits(){return m.habits},getPinnedTasks(){return m.pinnedTasks},getDay(t){return Dt(t),ne(t)},isLocked(t){return Dt(t)},submitDay(t){const e=A(t);e.locked=!0,e.lockOverride="locked",e.submittedAt=new Date().toISOString(),mt(t),w(),this.checkGoals(t)},unlockDay(t){const e=A(t);e.locked=!1,e.lockOverride="unlocked",e.habitMissed={},e.lockedHabits=null,e.tasks.forEach(a=>{a.missed=!1}),w()},isHabitMissed(t,e){const a=m.days[t];return!a||!(a.locked||a.lockOverride==="locked")?!1:a.habitMissed&&a.habitMissed[e]?!0:pt(t,e)<=0},isTaskMissed(t,e){const a=m.days[t];if(!a)return!1;const s=(a.tasks||[]).find(i=>i.id===e);return s?s.missed===!0?!0:s.missed===!1?!1:!!(a.locked||a.lockOverride==="locked")&&!s.done:!1},missedCounts(t){const e=this.getDay(t),a=this.getHabits(t),s=!!(e.locked||e.lockOverride==="locked");return{habits:a.filter(i=>e.habitMissed&&e.habitMissed[i.id]?!0:s&&pt(t,i.id)<=0).length,tasks:e.tasks.filter(i=>i.done?!1:i.missed===!0?!0:i.missed===!1?!1:s).length}},lockDay(t){this.submitDay(t)},lockedReports(){return Object.keys(m.days).sort().reverse().filter(t=>this.isLocked(t)).map(t=>({date:t,submittedAt:m.days[t].submittedAt,...this.scoreFor(t)}))},habitRating(t,e){const a=m.days[t];return a?a.habitRatings&&a.habitRatings[e]!=null?Number(a.habitRatings[e])||0:a.habits&&a.habits[e]?5:0:0},setHabitRating(t,e,a){if(!R(t))return;const s=A(t),i=Math.max(0,Math.min(5,Number(a)||0));s.habitRatings[e]=i,s.habits[e]=i>0,w(),this.checkGoals(t)},toggleHabit(t,e){if(!R(t))return;const a=this.habitRating(t,e)>0?0:5;this.setHabitRating(t,e,a)},addTask(t,e,a,s={}){if(!R(t))return;A(t).tasks.push({id:`t${Date.now()}`,title:e.trim(),points:Number(a)||5,description:String(s.description||"").trim(),category:P(s.category),tags:N(s.tags),rating:Math.max(0,Math.min(5,Number(s.rating)||0)),done:!1,missed:!1,forwardedFrom:/^\d{4}-\d{2}-\d{2}$/.test(String(s.forwardedFrom||""))?String(s.forwardedFrom):"",forwardedHabitId:String(s.forwardedHabitId||""),forwardedTo:[],image:I(s.image)}),w(),this.checkGoals(t)},setTaskRating(t,e,a){if(!R(t))return;const i=A(t).tasks.find(o=>o.id===e);if(!i)return;const n=Math.max(0,Math.min(5,Number(a)||0));i.rating=n,w()},toggleTask(t,e){if(!R(t))return;const s=A(t).tasks.find(i=>i.id===e);s&&(s.done=!s.done,w(),this.checkGoals(t))},removeTask(t,e){if(!R(t))return;const a=A(t);a.tasks=a.tasks.filter(s=>s.id!==e),w()},forwardTask(t,e,a){if(!/^\d{4}-\d{2}-\d{2}$/.test(String(a||"")))return{ok:!1,reason:"Pick a valid date"};if(t===a)return{ok:!1,reason:"Already on that day"};if(!R(t))return{ok:!1,reason:"Source day is locked"};if(this.isLocked(a))return{ok:!1,reason:"Target day is locked"};const i=A(t).tasks.find(r=>r.id===e);if(!i)return{ok:!1,reason:"Task not found"};A(a).tasks.push({id:`t${Date.now()}`,title:i.title,points:Number(i.points)||5,description:String(i.description||""),category:P(i.category),tags:N(i.tags),rating:0,done:!1,missed:!1,forwardedFrom:t,forwardedHabitId:String(i.forwardedHabitId||""),forwardedTo:[],image:I(i.image)});const o=Array.isArray(i.forwardedTo)?i.forwardedTo:[];return o.includes(a)||o.push(a),i.forwardedTo=o.slice(0,50),w(),this.checkGoals(a),{ok:!0}},forwardHabit(t,e,a){if(!/^\d{4}-\d{2}-\d{2}$/.test(String(a||"")))return{ok:!1,reason:"Pick a valid date"};if(t===a)return{ok:!1,reason:"Already on that day"};if(!R(t))return{ok:!1,reason:"Source day is locked"};if(this.isLocked(a))return{ok:!1,reason:"Target day is locked"};const s=m.habits.find(r=>r.id===e);if(!s)return{ok:!1,reason:"Habit not found"};A(a).tasks.push({id:`t${Date.now()}`,title:s.name,points:Number(s.points)||10,description:String(s.description||""),category:P(s.category),tags:N(s.tags),rating:0,done:!1,missed:!1,forwardedFrom:t,forwardedHabitId:e,forwardedTo:[]});const n=A(t);(!n.habitForwarded||typeof n.habitForwarded!="object")&&(n.habitForwarded={});const o=Array.isArray(n.habitForwarded[e])?n.habitForwarded[e]:[];return o.includes(a)||o.push(a),n.habitForwarded[e]=o.slice(0,50),w(),this.checkGoals(a),{ok:!0}},habitForwardedTo(t,e){const a=m.days[t];if(!a||!a.habitForwarded)return[];const s=a.habitForwarded[e];return Array.isArray(s)?s:[]},setNote(t,e){R(t)&&(A(t).note=e,w())},addHabit(t,e,a={}){m.habits.push({id:`h${Date.now()}`,name:t.trim(),description:String(a.description||"").trim().slice(0,240),points:Number(e)||10,icon:"star",category:P(a.category||"physically"),consciousPoints:H(a.consciousPoints),tags:N(a.tags),pin:{mode:"forever",until:"",weekdays:[]}}),w()},updateHabit(t,e){const a=m.habits.find(s=>s.id===t);a&&(e.name!=null&&(a.name=String(e.name).trim()||a.name),e.description!=null&&(a.description=String(e.description).trim().slice(0,240)),e.points!=null&&(a.points=Number(e.points)||a.points),e.category!=null&&(a.category=P(e.category)),e.consciousPoints!=null&&(a.consciousPoints=H(e.consciousPoints)),e.tags!=null&&(a.tags=N(e.tags)),w())},updateTask(t,e,a){if(!R(t))return;const i=A(t).tasks.find(n=>n.id===e);if(i){if(a.title!=null&&(i.title=String(a.title).trim()||i.title),a.points!=null&&(i.points=Number(a.points)||i.points),a.description!=null&&(i.description=String(a.description).trim()),a.category!=null&&(i.category=P(a.category)),a.tags!=null&&(i.tags=N(a.tags)),a.image!==void 0&&(i.image=I(a.image)),a.rating!=null&&(i.rating=Math.max(0,Math.min(5,Number(a.rating)||0))),i.sourcePinId){const n=m.pinnedTasks.find(o=>o.id===i.sourcePinId);n&&(n.title=i.title,n.points=i.points,n.description=i.description,n.category=i.category,a.tags!=null&&(n.tags=N(a.tags)),a.image!==void 0&&(n.image=I(a.image)))}w()}},habitStreak(t,e){const a=m.habits.find(o=>o.id===t);if(!a)return 0;let s=e,i=0;this.habitRating(s,t)===0&&(s=V(s));let n=0;for(;i<400;){if(i+=1,!K(a.pin,s)){s=V(s);continue}if(this.habitRating(s,t)>0){n+=1,s=V(s);continue}break}return n},categoryBreakdown(t){const e=this.getDay(t),a=this.getHabits(t);return X.map(s=>{const i=a.filter(y=>P(y.category)===s.id),n=e.tasks.filter(y=>P(y.category)===s.id),o=i.reduce((y,x)=>{const rt=this.habitRating(t,x.id);return y+Math.round(x.points*rt/5)},0),r=m.settings.showConscious!==!1,l=r?i.reduce((y,x)=>y+(this.habitRating(t,x.id)>0?H(x.consciousPoints):0),0):0,d=i.reduce((y,x)=>y+x.points,0),g=r?i.reduce((y,x)=>y+H(x.consciousPoints),0):0,S=n.reduce((y,x)=>y+(x.done?x.points:0),0),u=n.reduce((y,x)=>y+x.points,0),k=i.map(y=>this.habitRating(t,y.id)),T=k.length?Math.round(k.reduce((y,x)=>y+x,0)/k.length*10)/10:0;return{...s,habits:i,tasks:n,earned:o+l+S,max:d+g+u,habitAvg:T,consciousEarned:l,consciousMax:g,completed:i.filter(y=>this.habitRating(t,y.id)>0).length+n.filter(y=>y.done).length,total:i.length+n.length}})},removeHabit(t){m.habits=m.habits.filter(e=>e.id!==t),w()},pinHabit(t,e){const a=m.habits.find(s=>s.id===t);a&&(a.pin=G(e),w())},unpinHabit(t){const e=m.habits.find(a=>a.id===t);e&&(e.pin=null,w())},pinTask(t,e,a){const i=A(t).tasks.find(o=>o.id===e);if(!i)return;if(i.sourcePinId){const o=m.pinnedTasks.find(r=>r.id===i.sourcePinId);if(o){o.pin=G(a),w();return}}const n=`p${Date.now()}`;m.pinnedTasks.push({id:n,title:i.title,points:i.points,description:i.description||"",category:P(i.category),tags:N(i.tags),pin:G(a),image:I(i.image)}),i.sourcePinId=n,w()},unpinTaskTemplate(t){m.pinnedTasks=m.pinnedTasks.filter(e=>e.id!==t),w()},updatePinnedTask(t,e){const a=m.pinnedTasks.find(s=>s.id===t);a&&(a.pin=G(e),w())},findHabit(t){return m.habits.find(e=>e.id===t)||null},findTask(t,e){return A(t).tasks.find(a=>a.id===e)||null},findPinnedTask(t){return m.pinnedTasks.find(e=>e.id===t)||null},getGoals(){return m.goals},getBadges(){return[...m.badges].sort((t,e)=>{const a=$t(e.tier)-$t(t.tier);return a!==0?a:String(e.earnedAt).localeCompare(String(t.earnedAt))})},topBadges(t=3){return this.getBadges().slice(0,t)},addGoal(t={}){const e=ut({...t,id:`g${Date.now()}`});return m.goals.push(e),w(),this.checkGoals(F()),e},updateGoal(t,e={}){const a=m.goals.find(i=>i.id===t);if(!a)return;const s=ut({...a,...e,id:t});Object.assign(a,s),w(),this.checkGoals(F())},removeGoal(t){m.goals=m.goals.filter(e=>e.id!==t),w()},removeBadge(t){m.badges=m.badges.filter(e=>e.id!==t),w()},perfectDaysCount(){return Object.keys(m.days).filter(t=>{const e=this.scoreFor(t);return e.max>0&&e.percent===100}).length},taskStreak(t,e){let a=e,s=0;(o=>{const r=m.days[o];return!r||!Array.isArray(r.tasks)?!1:r.tasks.some(l=>l.sourcePinId===t&&l.done)})(a)||(a=V(a));let n=0;for(;s<400;){s+=1;const o=m.days[a];if(!o||!Array.isArray(o.tasks))break;if(o.tasks.some(r=>r.sourcePinId===t&&r.done)){n+=1,a=V(a);continue}break}return n},goalProgress(t,e){const a=e||F();if(t.kind==="habit-streak"){const i=this.habitStreak(t.targetId,a);return{current:i,target:t.targetDays,done:i>=t.targetDays}}if(t.kind==="task-streak"){const i=this.taskStreak(t.targetId,a);return{current:i,target:t.targetDays,done:i>=t.targetDays}}const s=this.perfectDaysCount();return{current:s,target:t.targetDays,done:s>=t.targetDays}},checkGoals(t){const e=t||F();let a=[];return m.goals.forEach(s=>{if(m.badges.some(n=>n.goalId===s.id))return;if(this.goalProgress(s,e).done){const n={id:`b${Date.now()}-${s.id}`,goalId:s.id,title:s.title,tier:s.tier,rewardTitle:s.rewardTitle,earnedAt:new Date().toISOString()};m.badges.push(n),a.push(n)}}),a.length&&w(),a},scoreFor(t){const e=this.getDay(t),a=this.getHabits(t),s=this.isLocked(t),i=m.settings.showConscious!==!1,n=a.reduce((y,x)=>{const rt=this.habitRating(t,x.id);return y+Math.round(x.points*rt/5)},0),o=i?a.reduce((y,x)=>y+(this.habitRating(t,x.id)>0?H(x.consciousPoints):0),0):0,r=e.tasks.reduce((y,x)=>y+(x.done?x.points:0),0),l=a.reduce((y,x)=>y+x.points,0),d=i?a.reduce((y,x)=>y+H(x.consciousPoints),0):0,g=e.tasks.reduce((y,x)=>y+x.points,0),S=n+o+r,u=l+d+g,k=a.filter(y=>e.habitMissed&&e.habitMissed[y.id]?!0:s&&this.habitRating(t,y.id)<=0).length,T=e.tasks.filter(y=>y.done?!1:y.missed===!0?!0:y.missed===!1?!1:s).length;return{earned:S,max:u,habitScore:n,consciousScore:o,maxConscious:d,taskScore:r,completedHabits:a.filter(y=>this.habitRating(t,y.id)>0).length,habitAvg:a.length?Math.round(a.reduce((y,x)=>y+this.habitRating(t,x.id),0)/a.length*10)/10:0,totalHabits:a.length,completedTasks:e.tasks.filter(y=>y.done).length,totalTasks:e.tasks.length,missedHabits:k,missedTasks:T,percent:u?Math.round(S/u*100):0,locked:s,submittedAt:e.submittedAt}},monthKeys(t){const e=String(t).slice(0,7);return Object.keys(m.days).filter(a=>a.startsWith(e)).sort()},rangeKeys(t,e){const a=[],s=new Date(`${t}T00:00:00`),i=new Date(`${e}T00:00:00`);let n=0;for(;s<=i&&n<732;)n+=1,a.push(F(s)),s.setDate(s.getDate()+1);return a},resolveRange(t,e){if(t==="day")return[e,e];if(t==="week"){const s=new Date(`${e}T00:00:00`),i=s.getDay(),n=i===0?-6:1-i,o=new Date(s);o.setDate(s.getDate()+n);const r=new Date(o);return r.setDate(o.getDate()+6),[F(o),F(r)]}if(t==="month"){const[s,i]=e.split("-").map(Number),n=`${s}-${String(i).padStart(2,"0")}-01`,o=new Date(s,i,0).getDate(),r=`${s}-${String(i).padStart(2,"0")}-${String(o).padStart(2,"0")}`;return[n,r]}if(t==="year"){const s=e.slice(0,4);return[`${s}-01-01`,`${s}-12-31`]}const a=Object.keys(m.days).sort();return a.length?[a[0],a[a.length-1]>e?a[a.length-1]:e]:[e,e]},exportRows(t,e){return this.rangeKeys(t,e).map(a=>{const s=this.getDay(a),i=this.getHabits(a),n=this.scoreFor(a),o=this.isLocked(a),r=(d,g)=>g>0?"done":o?"missed":"pending",l=d=>d.done?"done":o?"missed":"pending";return{date:a,earned:n.earned,max:n.max,percent:n.percent,habitScore:n.habitScore,consciousScore:n.consciousScore||0,taskScore:n.taskScore,locked:o,missedHabits:n.missedHabits||0,missedTasks:n.missedTasks||0,note:s.note||"",habits:i.map(d=>{const g=this.habitRating(a,d.id);return{name:d.name,description:String(d.description||""),category:J(P(d.category)),tags:N(d.tags),points:d.points,consciousPoints:this.consciousEnabled()?H(d.consciousPoints):0,rating:g,earned:Math.round(d.points*g/5)+(g>0&&this.consciousEnabled()?H(d.consciousPoints):0),status:r(d.id,g)}}),tasks:s.tasks.map(d=>({title:d.title,category:J(P(d.category)),tags:N(d.tags),points:d.points,rating:Math.max(0,Math.min(5,Number(d.rating)||0)),done:!!d.done,earned:d.done?d.points:0,status:d.forwardedFrom?`forwarded from ${d.forwardedFrom}`:l(d),forwardedFrom:d.forwardedFrom||"",forwardedTo:Array.isArray(d.forwardedTo)?d.forwardedTo:[],description:d.description||"",hasImage:!!d.image}))}})},history(t=14){return Object.keys(m.days).sort().reverse().slice(0,t).map(a=>({date:a,...this.scoreFor(a),note:m.days[a].note,locked:this.isLocked(a),submittedAt:m.days[a].submittedAt}))},week(t){const e=new Date(t),a=e.getDay(),s=a===0?-6:1-a;return e.setDate(e.getDate()+s),e.setHours(0,0,0,0),Array.from({length:7},(i,n)=>{const o=new Date(e);o.setDate(e.getDate()+n);const r=F(o);return{date:r,label:o.toLocaleDateString(void 0,{weekday:"short"}),locked:this.isLocked(r),...this.scoreFor(r)}})}};function Gt(t){return t>=90?"Excellent":t>=75?"Great day":t>=50?"Keep going":t>0?"Started":"No score yet"}function B(t){return new Date(`${t}T00:00:00`).toLocaleDateString(void 0,{weekday:"long",month:"short",day:"numeric"})}function Wt(t){return t?new Date(t).toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"}):""}function et(t){return t>=5?"Excellent":t>=4?"Great":t>=3?"Good":t>=2?"Fair":t>=1?"Low":"Not rated"}const ct=document.getElementById("app"),qt="daily-report-2026-09-28T18-58-48-mulm2asp",oe=`v1.1 — Auto-update · Offline · Backup (${qt.slice(-8)})`;let h=c.todayKey(),L="today",v=null,p=null,W=!1,at=!1,q=null,O=!1,gt=!1,ht=null,_="Idle.",M=null,D="boot";window.addEventListener("beforeinstallprompt",t=>{t.preventDefault(),q=t});window.addEventListener("appinstalled",()=>{q=null,f("Daily Report installed"),$()});const re=[["default","Default"],["points","Points"],["category","Category"],["tags","Tags"]];function Pt(t){const e=new Date(`${h}T00:00:00`);e.setDate(e.getDate()+t),h=c.todayKey(e)}function E(t){return{home:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1z"/></svg>',week:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>',history:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 8v5l3 2"/><circle cx="12" cy="12" r="9"/></svg>',settings:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H8a1.7 1.7 0 0 0 1-1.5V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V8c.3.7.9 1.2 1.6 1.3H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1.7z"/></svg>',pin:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 4h6l-1 7 3 3v2H7v-2l3-3z" fill="currentColor" stroke="none"/><path d="M12 16v5"/></svg>',forward:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',habit:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7h16M4 12h10M4 17h13"/></svg>'}[t]}function Ut(t,e,a){return`
    <div class="stars" data-habit="${t}">
      ${[1,2,3,4,5].map(s=>`
            <button type="button" class="star ${s<=e?"on":""}" data-action="rate-habit" data-id="${t}" data-rating="${s}" ${a?"disabled":""} aria-label="${s} star">★</button>
          `).join("")}
    </div>
  `}function zt(t,e,a){return`
    <div class="stars stars-small" data-task="${t}">
      ${[1,2,3,4,5].map(s=>`
            <button type="button" class="star small ${s<=e?"on":""}" data-action="rate-task" data-id="${t}" data-rating="${s}" ${a?"disabled":""} aria-label="${s} star">★</button>
          `).join("")}
    </div>
  `}function Vt(t){const e=Number(t)||0;return e?`<span class="conscious-badge">🧠 +${e}</span>`:'<span class="item-meta">No conscious pts</span>'}function st(t){return`<span class="cat-badge cat-${t}">${J(t)}</span>`}function U(t){const e=Array.isArray(t)?t.filter(Boolean):[];return e.length?`<div class="tag-row">${e.map(a=>`<span class="tag-chip">#${b(a)}</span>`).join("")}</div>`:""}function Yt(t){return!t||!t.image?"":`<button type="button" class="task-img-thumb" data-action="view-task-image" data-id="${t.id}" aria-label="View attached photo"><img src="${t.image}" alt="Task photo" loading="lazy" /></button>`}function de(t){const e=String(t||"");if(!e.trim())return"";const a=e.split(`
`),s=/^\s*(?:•|-|[*])\s+(.*)$/,i=/^\s*\d+[.)]\s+(.*)$/;let n="",o=null;const r=()=>{o&&(n+=o==="ul"?"</ul>":"</ol>",o=null)};return a.forEach(l=>{const d=s.exec(l),g=!d&&i.exec(l);d?(o!=="ul"&&(r(),n+='<ul class="note-list">',o="ul"),n+=`<li>${b(d[1])||"&nbsp;"}</li>`):g?(o!=="ol"&&(r(),n+='<ol class="note-list">',o="ol"),n+=`<li>${b(g[1])||"&nbsp;"}</li>`):l.trim()?(r(),n+=`<p class="note-text">${b(l)}</p>`):(r(),n+='<p class="note-text">&nbsp;</p>')}),r(),`<div class="note" style="margin-top:10px">${n}</div>`}function Mt(t){const e=document.getElementById("day-note");if(!e||e.disabled)return;const a=e.value||"",s=a.split(`
`),i=a.slice(0,e.selectionStart).split(`
`).length-1,n=a.slice(0,e.selectionEnd).split(`
`).length-1,o=e.selectionStart!==e.selectionEnd,r=o?i:0,l=o?n:s.length-1;if(t==="bullets"){const d=s.slice(r,l+1).every(g=>/^\s*(?:•|-|[*])\s+/.test(g)||!g.trim());for(let g=r;g<=l;g++)s[g].trim()&&(d?s[g]=s[g].replace(/^\s*(?:•|-|[*])\s+/,""):/^\s*(?:•|-|[*])\s+/.test(s[g])||(s[g]=`• ${s[g].replace(/^\s*/,"")}`))}else{const d=s.slice(r,l+1).every(S=>/^\s*\d+[.)]\s+/.test(S)||!S.trim());let g=1;for(let S=r;S<=l;S++){if(!s[S].trim())continue;const u=s[S].replace(/^\s*(?:\d+[.)]|•|-|[*])\s+/,"").replace(/^\s*/,"");s[S]=d?u:`${g}. ${u}`,g+=1}}e.value=s.join(`
`),c.setNote(h,e.value);try{e.focus()}catch{}}function ce(t){return new Promise(e=>{if(!t||!String(t.type||"").startsWith("image/"))return e(null);const a=URL.createObjectURL(t),s=new Image,i=()=>{try{URL.revokeObjectURL(a)}catch{}},n=(o,r)=>new Promise(l=>{let d=s.naturalWidth||0,g=s.naturalHeight||0;if(!d||!g)return l(null);const S=Math.min(1,o/Math.max(d,g));d=Math.max(1,Math.round(d*S)),g=Math.max(1,Math.round(g*S));const u=document.createElement("canvas");u.width=d,u.height=g;try{u.getContext("2d").drawImage(s,0,0,d,g),l(u.toDataURL("image/jpeg",r))}catch{l(null)}});s.onload=async()=>{try{let o=await n(900,.72);o&&o.length>Z&&(o=await n(600,.62)),o&&o.length>Z&&(o=await n(400,.55)),i(),e(o&&o.length<=Z?o:null)}catch{i(),e(null)}},s.onerror=()=>{i(),e(null)},s.src=a})}function Nt(t,e){return`
    <select class="sort-select" data-sort-kind="${t}" aria-label="Sort ${t}">
      ${re.map(([a,s])=>`<option value="${a}" ${e===a?"selected":""}>${s}</option>`).join("")}
    </select>
  `}function le(t){const e=c.getBadges(),a=c.topBadges(3),s=t.max>0&&t.percent===100,i=at?e:a;return`
    <section class="section rewards-section">
      <div class="section-head">
        <h2>Rewards</h2>
        ${e.length>3?`<button class="ghost-btn compact" data-action="toggle-badges">${at?"Show less":`More (${e.length}) ›`}</button>`:""}
      </div>
      ${s?`
        <div class="trophy-card">
          <div class="trophy-cup">🏆</div>
          <div>
            <div class="item-title">Gold Cup — Perfect day!</div>
            <div class="item-meta">100% of points on ${B(h)}</div>
          </div>
        </div>
      `:""}
      ${e.length?`
        <div class="rewards-grid">
          ${i.map(n=>`
            <article class="reward-card tier-${n.tier}">
              <div class="reward-medal">${lt(n.tier)}</div>
              <div>
                <div class="item-title">${b(n.rewardTitle||n.title)}</div>
                <div class="item-meta">${b(n.title)} · ${It(n.tier)} · ${B((n.earnedAt||"").slice(0,10))}</div>
              </div>
            </article>
          `).join("")}
        </div>
      `:'<div class="empty">No rewards yet. Set a goal in Settings → Goals &amp; Rewards.</div>'}
    </section>
  `}function it(t){return`<span class="streak-badge">${t} day streak</span>`}function Jt(t){return t?`<span class="forward-badge from">↩ Forwarded from ${b(t)}</span>`:""}function nt(t){const e=Array.isArray(t)?t.filter(Boolean):[];return e.length?`<span class="forward-badge to">↪ Forwarded to ${b(e[e.length-1])}</span>`:""}function ue(t){const e=new Date(`${t}T00:00:00`);return e.setDate(e.getDate()+1),c.todayKey(e)}function ft(){return`<button class="ghost-btn compact ${W?"on":""}" data-action="toggle-edit">${W?"Done":"Edit Mode"}</button>`}function pe(t){return t?'<span class="lock-badge">Locked</span>':'<span class="open-badge">Open</span>'}function me(){c.checkGoals(h);const t=c.getDay(h),e=c.getSettings(),a=e.showConscious!==!1,s=c.getHabits(h),i=c.getTasks(h),n=c.scoreFor(h),o=Gt(n.percent),r=h===c.todayKey(),l=c.isLocked(h);return`
    <div class="topbar">
      <div>
        <p class="kicker">${r?"Today":"Daily report"}</p>
        <h1>${B(h)}</h1>
      </div>
      <div class="date-nav">
        <button class="icon-btn" data-action="prev-day" aria-label="Previous day">‹</button>
        <button class="icon-btn" data-action="next-day" aria-label="Next day">›</button>
      </div>
    </div>

    <section class="score-hero ${l?"is-locked":""}">
      <div class="score-row">
        <div>
          <div class="score-value">${n.earned}</div>
          <div class="score-unit">of ${n.max||0} points</div>
        </div>
        <div class="hero-side">
          ${pe(l)}
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
        ${l?`Submitted${t.submittedAt?` at ${Wt(t.submittedAt)}`:""}.${(n.missedHabits||0)+(n.missedTasks||0)>0?` ${(n.missedHabits||0)+(n.missedTasks||0)} missed (${n.missedHabits||0} habits, ${n.missedTasks||0} tasks) — unchecked items count as missed.`:" Nothing missed — all done."} Unlock in Settings to edit.`:`Auto-locks at ${e.lockTime}. Submit when the day is done. Unchecked items will count as missed once locked.`}
      </p>
      ${l?'<button class="ghost-btn full" data-action="goto-settings">Unlock in Settings</button>':'<button class="primary-btn full" data-action="submit-day">Submit and lock report</button>'}
      <div class="export-row">
        <span class="muted">Export:</span>
        <button class="ghost-btn compact" data-action="open-export">Excel / JSON / PDF</button>
      </div>
    </section>

    ${le(n)}

    <section class="section">
      <div class="section-head">
        <h2>Habits</h2>
        <div class="head-actions">
          ${Nt("habit",e.habitSort||"default")}
          ${ft()}
          <span class="points">+${n.habitScore}${a&&n.consciousScore?` +${n.consciousScore}🧠`:""} pts</span>
        </div>
      </div>
      <div class="list">
        ${s.length?s.map(d=>{const g=c.habitRating(h,d.id),S=g>0,u=!S&&l,k=c.habitStreak(d.id,h),T=a&&Number(d.consciousPoints)||0;return`
                    <article class="item-card ${S?"done":""} ${u?"missed":""} ${l?"is-locked":""}">
                      <button class="check" data-action="toggle-habit" data-id="${d.id}" ${l?"disabled":""}>✓</button>
                      <div class="item-body">
                        <div class="item-title">${b(d.name)} ${u?'<span class="missed-badge">Missed</span>':""}</div>
                        <div class="item-meta">${st(d.category)} ${d.pin?tt(d.pin):"Not pinned"} · ${g?`${g}/5 ${et(g)}`:l?"Missed":"Not rated"}</div>
                        ${d.description?`<p class="item-desc">${b(d.description)}</p>`:""}
                        ${a?`<div class="item-meta">${it(k)} ${Vt(T)}</div>`:`<div class="item-meta">${it(k)}</div>`}
                        ${nt(c.habitForwardedTo(h,d.id))}
                        ${U(d.tags)}
                        ${Ut(d.id,g,l)}
                      </div>
                      <div class="item-side">
                        <div class="points">+${d.points}${T?` +${T}🧠`:""}</div>
                        <div class="mini-actions">
                          ${W?`<button class="mini-btn on" data-action="open-edit-habit" data-id="${d.id}" ${l?"disabled":""}>Edit</button>`:""}
                          <button class="mini-btn" data-action="open-forward-habit" data-id="${d.id}" ${l?"disabled":""} title="Forward habit to another day">${E("forward")}</button>
                          <button class="mini-btn ${d.pin?"on":""}" data-action="open-pin-habit" data-id="${d.id}" ${l?"disabled":""} title="Pin habit">${E("pin")}</button>
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
          ${Nt("task",e.taskSort||"default")}
          ${ft()}
          <span class="points">+${n.taskScore} pts</span>
        </div>
      </div>
      <div class="list">
        ${i.length?i.map(d=>{const g=!!d.sourcePinId,S=g?c.findPinnedTask(d.sourcePinId):null,u=Math.max(0,Math.min(5,Number(d.rating)||0)),k=!d.done&&l;return`
                    <article class="item-card ${d.done?"done":""} ${k?"missed":""} ${l?"is-locked":""}">
                      <button class="check" data-action="toggle-task" data-id="${d.id}" ${l?"disabled":""}>✓</button>
                      <div class="item-body">
                        <div class="item-title">${b(d.title)} ${k?'<span class="missed-badge">Missed</span>':""}</div>
                        <div class="item-meta">${st(d.category)} ${S?tt(S.pin):"One-time task"} · ${d.done?"Done":l?"Missed":"Pending"} · ${u?`${u}/5 ${et(u)}`:"No rating"}</div>
                        ${d.description?`<p class="item-desc">${b(d.description)}</p>`:""}
                        ${Jt(d.forwardedFrom)}
                        ${nt(d.forwardedTo)}
                        ${U(d.tags)}
                        ${d.image?'<span class="task-img-badge">📷 Photo attached</span>':""}
                        ${Yt(d)}
                        ${zt(d.id,u,l)}
                      </div>
                      <div class="item-side">
                        <div class="points">+${d.points}</div>
                        <div class="mini-actions">
                          ${W?`<button class="mini-btn on" data-action="open-edit-task" data-id="${d.id}" ${l?"disabled":""}>Edit</button>`:""}
                          <button class="mini-btn" data-action="open-forward-task" data-id="${d.id}" ${l?"disabled":""} title="Forward task to another day">${E("forward")}</button>
                          <button class="mini-btn ${g?"on":""}" data-action="open-pin-task" data-id="${d.id}" ${l?"disabled":""} title="Pin task">${E("pin")}</button>
                          <button class="mini-btn" data-action="remove-task" data-id="${d.id}" ${l?"disabled":""}>✕</button>
                        </div>
                      </div>
                    </article>
                  `}).join(""):'<div class="empty">No tasks yet. Tap + to add one.</div>'}
      </div>
    </section>

    <section class="section">
      <div class="section-head"><h2>Day note</h2></div>
      ${l?"":`
        <div class="note-toolbar">
          <button type="button" class="ghost-btn compact" data-action="note-bullets" title="Bullet list (select lines or whole note)">• Bullets</button>
          <button type="button" class="ghost-btn compact" data-action="note-numbered" title="Numbered list (select lines or whole note)">1. Numbered</button>
        </div>
      `}
      <textarea id="day-note" placeholder="How did today go? Tip: use • Bullets for lists." ${l?"disabled":""}>${b(t.note)}</textarea>
    </section>
  `}function ge(){const t=c.week(new Date(`${h}T00:00:00`)),e=t.reduce((s,i)=>s+i.earned,0),a=Math.round(e/7);return`
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
        ${t.map(s=>`
              <button class="day-cell ${s.date===h?"active":""} ${s.earned>0?"done":""}" data-action="pick-date" data-date="${s.date}">
                <span>${s.label.slice(0,2)}</span>
                <b>${s.earned}</b>
                ${s.locked?'<i class="dot-lock"></i>':""}
              </button>
            `).join("")}
      </div>
    </section>
    <section class="section week-grid">
      ${t.map(s=>`
            <article class="week-card">
              <div class="section-head">
                <div>
                  <div class="item-title">${B(s.date)}</div>
                  <div class="item-meta">${s.locked?"Locked":"Open"} · ${s.completedHabits} habits · ${s.completedTasks} tasks${s.locked&&(s.missedHabits||0)+(s.missedTasks||0)>0?` · ❌ ${(s.missedHabits||0)+(s.missedTasks||0)} missed`:""}</div>
                </div>
                <div class="points">${s.earned} pts</div>
              </div>
              <div class="bar"><span style="width:${s.percent}%"></span></div>
            </article>
          `).join("")}
    </section>
  `}function he(){const t=c.history(21);return`
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
                        <div class="item-title">${B(e.date)}</div>
                        <div class="item-meta">${e.locked?"Locked":"Open"} · ${Gt(e.percent)} · ${e.percent}%${e.locked&&(e.missedHabits||0)+(e.missedTasks||0)>0?` · ❌ ${(e.missedHabits||0)+(e.missedTasks||0)} missed`:""}</div>
                      </div>
                      <button class="ghost-btn compact" data-action="pick-date" data-date="${e.date}">Open</button>
                    </div>
                    <div class="bar"><span style="width:${e.percent}%"></span></div>
                    ${e.note?de(e.note):""}
                  </article>
                `).join(""):'<div class="empty">Complete today to start your history.</div>'}
    </div>
  `}function fe(){const t=c.isLocked(h),e=c.consciousEnabled(),a=c.categoryBreakdown(h),s=a.reduce((n,o)=>n+o.earned,0),i=a.reduce((n,o)=>n+o.max,0);return`
    <div class="topbar">
      <div>
        <p class="kicker">Activities</p>
        <h1>By category</h1>
      </div>
      <div class="date-nav">
        ${ft()}
        <button class="icon-btn" data-action="prev-day" aria-label="Previous day">‹</button>
        <button class="icon-btn" data-action="next-day" aria-label="Next day">›</button>
      </div>
    </div>
    <section class="score-hero">
      <div class="score-row">
        <div>
          <div class="score-value">${s}</div>
          <div class="score-unit">of ${i||0} category points</div>
        </div>
        <div class="grade-pill">${B(h)}</div>
      </div>
      <p class="lock-hint">Habits and tasks grouped by Mentally, Psychology, Physically, Spiritually, and Socially.</p>
    </section>
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
                    ${n.habits.map(r=>{const l=c.habitRating(h,r.id),d=!l&&t,g=c.habitStreak(r.id,h),S=e&&Number(r.consciousPoints)||0,u=l>0?S:0,k=Math.round(r.points*l/5)+u,T=r.points+S;return`
                          <article class="item-card ${l?"done":""} ${d?"missed":""} ${t?"is-locked":""}">
                            <button class="check" data-action="toggle-habit" data-id="${r.id}" ${t?"disabled":""}>✓</button>
                            <div class="item-body">
                              <div class="item-title">${b(r.name)} ${d?'<span class="missed-badge">Missed</span>':""}</div>
                              <div class="item-meta">Habit · ${l?`${l}/5 ${et(l)}`:t?"Missed":"Not rated"} · ${it(g)}${e?` ${Vt(S)}`:""}</div>
                              ${r.description?`<p class="item-desc">${b(r.description)}</p>`:""}
                              ${nt(c.habitForwardedTo(h,r.id))}
                              ${U(r.tags)}
                              ${Ut(r.id,l,t)}
                            </div>
                            <div class="item-side">
                              <div class="points">${k}/${T}</div>
                              <div class="mini-actions">
                                ${W?`<button class="mini-btn on" data-action="open-edit-habit" data-id="${r.id}" ${t?"disabled":""}>Edit</button>`:""}
                                <button class="mini-btn" data-action="open-forward-habit" data-id="${r.id}" ${t?"disabled":""} title="Forward habit to another day">${E("forward")}</button>
                              </div>
                            </div>
                          </article>
                        `}).join("")}
                    ${n.tasks.map(r=>{const l=Math.max(0,Math.min(5,Number(r.rating)||0)),d=!r.done&&t;return`
                          <article class="item-card ${r.done?"done":""} ${d?"missed":""} ${t?"is-locked":""}">
                            <button class="check" data-action="toggle-task" data-id="${r.id}" ${t?"disabled":""}>✓</button>
                            <div class="item-body">
                              <div class="item-title">${b(r.title)} ${d?'<span class="missed-badge">Missed</span>':""}</div>
                              <div class="item-meta">Task · ${r.done?"Done":t?"Missed":"Pending"} · ${l?`${l}/5 ${et(l)}`:"No rating"}${r.description?` · ${b(r.description)}`:""}</div>
                              ${Jt(r.forwardedFrom)}
                              ${nt(r.forwardedTo)}
                              ${U(r.tags)}
                              ${r.image?'<span class="task-img-badge">📷 Photo attached</span>':""}
                              ${Yt(r)}
                              ${zt(r.id,l,t)}
                            </div>
                            <div class="item-side">
                              <div class="points">+${r.points}</div>
                              <div class="mini-actions">
                                ${W?`<button class="mini-btn on" data-action="open-edit-task" data-id="${r.id}" ${t?"disabled":""}>Edit</button>`:""}
                                <button class="mini-btn" data-action="open-forward-task" data-id="${r.id}" ${t?"disabled":""} title="Forward task to another day">${E("forward")}</button>
                              </div>
                            </div>
                          </article>
                        `}).join("")}
                  `:'<div class="empty">No activities in this category.</div>'}
            </div>
          </section>
        `}).join("")}
  `}function ot(t){return`${t||"daily-report-backup"}-${c.todayKey()}.json`}function Xt(){return typeof window.showDirectoryPicker=="function"}function yt(){return new Promise((t,e)=>{const a=indexedDB.open("daily-report-pwa",1);a.onupgradeneeded=()=>a.result.createObjectStore("kv"),a.onsuccess=()=>t(a.result),a.onerror=()=>e(a.error)})}function be(t){return yt().then(e=>new Promise((a,s)=>{const i=e.transaction("kv","readonly").objectStore("kv").get(t);i.onsuccess=()=>a(i.result),i.onerror=()=>s(i.error)}))}function ye(t,e){return yt().then(a=>new Promise((s,i)=>{const n=a.transaction("kv","readwrite");n.objectStore("kv").put(e,t),n.oncomplete=()=>s(),n.onerror=()=>i(n.error)}))}function ve(t){return yt().then(e=>new Promise((a,s)=>{const i=e.transaction("kv","readwrite");i.objectStore("kv").delete(t),i.oncomplete=()=>a(),i.onerror=()=>s(i.error)}))}function ke(){return!Xt()||typeof indexedDB>"u"?(D="unsupported",Promise.resolve()):be("backupDir").then(t=>{if(M=t||null,!M){D="unset";return}return M.queryPermission({mode:"readwrite"}).then(e=>{D=e==="granted"?"granted":"prompt"}).catch(()=>{D="prompt"})}).catch(()=>{M=null,D="unset"})}function $e(){return D==="unsupported"?"Folder picking needs Chrome/Edge on desktop — on phones backups download instead.":D==="unset"?"No folder chosen yet.":D==="prompt"?"Tap Choose folder to allow access again.":D==="denied"?"Access was denied — choose the folder again.":D==="granted"&&M?`Folder: ${M.name}`:"Checking…"}async function we(){if(!Xt()){f("Folder access needs Chrome or Edge");return}try{const t=await window.showDirectoryPicker({id:"daily-report-backup",mode:"readwrite"});await ye("backupDir",t),M=t,D="granted",f("Backup folder set")}catch(t){t&&t.name==="AbortError"||f("Couldn't open that folder")}$()}async function Se(){try{await ve("backupDir")}catch{f("Couldn't remove folder");return}M=null,D="unset",f("Backup folder removed"),$()}async function xe(){if(M){try{const t=await M.requestPermission({mode:"readwrite"});D=t==="granted"?"granted":"denied",f(t==="granted"?"Folder access granted":"Access denied")}catch{D="denied"}$()}}async function De(){const t=c.exportBackup(),e=ot();if(D==="granted"&&M)try{const s=await(await M.getFileHandle(e,{create:!0})).createWritable();await s.write(t),await s.close(),f("Backup saved to your folder"),Qt();return}catch{}z(e,t,"application/json"),f("Backup downloaded")}async function Te(){if(D!=="granted"||!M)return[];const t=[];try{for await(const e of M.values())if(e&&e.kind==="file"&&/\.json$/i.test(e.name))try{const a=await e.getFile();t.push({name:e.name,modified:a.lastModified})}catch{}}catch{return t}return t.sort((e,a)=>a.modified-e.modified),t}async function Qt(){const t=document.getElementById("folder-backup-list");if(!t)return;if(D!=="granted"||!M){t.innerHTML='<button class="ghost-btn compact" data-action="trigger-import">Import from a file instead</button>';return}t.innerHTML='<p class="item-meta">Loading backups…</p>';const e=await Te();if(!document.getElementById("folder-backup-list"))return;e.length?t.innerHTML=e.map(s=>`
            <div style="display:flex;gap:8px;align-items:center;margin-bottom:6px">
              <span class="item-meta" style="flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${b(s.name)}</span>
              <button class="ghost-btn compact" data-action="restore-backup" data-name="${b(s.name)}">Restore</button>
            </div>
          `).join(""):t.innerHTML='<p class="item-meta">Folder is empty — press Export backup now to create the first backup.</p>';const a=document.createElement("div");a.innerHTML='<button class="ghost-btn compact" data-action="trigger-import">Import from a file instead</button>',t.appendChild(a)}async function Ae(t){if(M)try{const a=await(await M.getFileHandle(t)).getFile();Zt(await a.text(),t)}catch{f("Couldn't read that backup")}}function Zt(t,e){let a;try{a=JSON.parse(t)}catch{f("That file isn't valid JSON.");return}const s=c.backupKind(a);if(s==="ok"){if(!window.confirm(`Replace ALL app data with "${e}"?`))return;z(ot("daily-report-pre-import"),c.exportBackup(),"application/json"),c.importBackup(a),f("Backup imported"),$();return}if(s==="report-export"){const i=c.previewReport(a);if(!i.days){f("That report file has no day rows to import.");return}if(!window.confirm(`Import ${i.days} day(s) (${i.start} → ${i.end}) from "${e}" as locked history?

${i.newHabits} new habit(s) will be added to your list.
Days already in the app on those dates will be overwritten.`))return;z(ot("daily-report-pre-import"),c.exportBackup(),"application/json");const o=c.importReport(a);if(!o){f("That file doesn't look like a valid Daily Report backup.");return}f(`Imported ${o.days} day(s)${o.habits?` + ${o.habits} new habit(s)`:""}`),$();return}if(s==="wrong-app"){f("That backup belongs to another app (e.g. Iron Log) — it can’t be imported into Daily Report.");return}f("That file doesn't look like a valid Daily Report backup.")}async function Pe(){if(!q){f("Use the browser menu: Install / Add to Home Screen");return}try{q.prompt();const t=await q.userChoice;t&&t.outcome==="accepted"&&f("Installing Daily Report…")}catch{}q=null,$()}async function Me(){const t=`./version.json?v=${Date.now()}`,e=await fetch(t,{cache:"no-store"});if(!e.ok)throw new Error(`http ${e.status}`);const a=await e.json(),s=a&&(a.version||a.v)||null;if(!s)throw new Error("no version field");return String(s)}async function Ne(){O=!0,gt=!1,_="Checking for updates… (needs internet)",$();try{if("serviceWorker"in navigator&&navigator.serviceWorker.getRegistration){const e=await navigator.serviceWorker.getRegistration().catch(()=>null);e&&e.update&&e.update().catch(()=>{})}}catch{}if(typeof fetch>"u"){O=!1,_="This browser can’t check — but the app itself works offline. Use Export backup to protect your data.",$();return}const t=setTimeout(()=>{O&&(O=!1,_="Couldn't reach the server — offline? The app itself works offline; updating needs internet.",$())},15e3);try{const e=await Me();if(clearTimeout(t),O=!1,ht=e,e&&e!==qt){gt=!0,_="Update found — updating automatically…",$(),await Kt(!0);return}_="You're on the latest version. The app works offline."}catch{clearTimeout(t),O=!1,_="Couldn't reach the server — offline, or this file wasn't opened from the installed/hosted app. The app itself works offline; updating needs internet."}$()}function Lt(t){return new Promise(e=>{if(!("serviceWorker"in navigator))return e();const a=()=>e(),s=setTimeout(()=>{try{navigator.serviceWorker.removeEventListener("controllerchange",a)}catch{}e()},t||4e3),i=()=>{clearTimeout(s);try{navigator.serviceWorker.removeEventListener("controllerchange",i)}catch{}e()};try{navigator.serviceWorker.addEventListener("controllerchange",i)}catch{e()}})}async function Kt(t){var a;try{z(ot("daily-report-pre-update"),c.exportBackup(),"application/json")}catch{}f("Backup saved — updating app…"),_=`Backup saved — updating${ht?` to ${String(ht).slice(-8)}`:""}…`,$();const e=()=>{const s=window.location.href.includes("?")?"&":"?";try{window.location.replace(`${window.location.href.split("#")[0]}${s}v=${Date.now()}#updated`)}catch{window.location.reload()}setTimeout(()=>{try{window.location.reload()}catch{}},2500)};try{if("serviceWorker"in navigator&&navigator.serviceWorker.getRegistration){const s=await navigator.serviceWorker.getRegistration().catch(()=>null);if(s){const i=s.waiting;if(i){try{i.postMessage("SKIP_WAITING")}catch{try{s.waiting.postMessage({type:"SKIP_WAITING"})}catch{}}await Lt(4e3),e();return}try{await s.update()}catch{}const n=await navigator.serviceWorker.getRegistration().catch(()=>s),o=(n||s).waiting||(n||s).installing;if(o){try{o.postMessage("SKIP_WAITING")}catch{}try{(a=(n||s).waiting)==null||a.postMessage("SKIP_WAITING")}catch{}await Lt(5e3),e();return}try{const r=navigator.serviceWorker.controller;r&&r.postMessage({type:"CLEAR_APP_CACHES"})}catch{}try{if(typeof caches<"u"){const r=await caches.keys().catch(()=>[]);await Promise.all(r.filter(l=>l.startsWith("daily-report-")).map(l=>caches.delete(l).catch(()=>!1)))}}catch{}try{await fetch(`./index.html?v=${Date.now()}`,{cache:"reload"})}catch{}try{await fetch(`./version.json?v=${Date.now()}`,{cache:"reload"})}catch{}try{await(n||s).unregister()}catch{}e();return}}}catch{}try{await fetch(`./index.html?v=${Date.now()}`,{cache:"reload"})}catch{}setTimeout(e,600)}function Le(){const t=c.getSettings(),e=c.getAllHabits(),a=c.getPinnedTasks(),s=c.lockedReports();return`
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
    </section>

    <section class="manage-card">
      <h2>Appearance</h2>
      <p class="muted tight">Pick Dark or Light mode. It applies everywhere, instantly.</p>
      <div class="chip-row">
        <button type="button" class="chip ${c.getTheme()==="dark"?"on":""}" data-action="set-theme" data-theme="dark">🌙 Dark</button>
        <button type="button" class="chip ${c.getTheme()==="light"?"on":""}" data-action="set-theme" data-theme="light">☀️ Light</button>
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
      <p class="item-meta">Version: ${b(oe)}</p>
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:8px">
        <button class="primary-btn" data-action="check-updates" ${O?"disabled":""}>${O?"Checking…":"Check for updates"}</button>
        ${gt?'<button class="primary-btn" data-action="apply-update">Restart with update</button>':""}
      </div>
      <p class="item-meta">${b(_)}</p>
    </section>

    <section class="manage-card">
      <h2>Data backup</h2>
      <p class="muted tight">Pick a backup folder once (Chrome/Edge on desktop) and exports save straight into it. On phones, backups download to your Downloads folder instead. Import accepts full backups (<b>daily-report-backup-*.json</b>) or month/week report exports, which are added as locked history.</p>
      <p class="item-meta">${b($e())}</p>
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:8px">
        ${D==="prompt"?'<button class="primary-btn" data-action="grant-folder">Allow access</button>':'<button class="ghost-btn compact" data-action="choose-folder">Choose folder</button>'}
        ${M?'<button class="ghost-btn compact" data-action="forget-folder">Remove</button>':""}
        <button class="primary-btn" data-action="backup-now">Export backup now</button>
        <button class="ghost-btn compact" data-action="trigger-import">Import backup</button>
      </div>
      <input type="file" id="backup-file" accept="application/json,.json" hidden />
      <div id="folder-backup-list" style="margin-top:10px"></div>
    </section>

    <section class="section">
      <div class="section-head">
        <h2>Goals &amp; Rewards</h2>
        <button class="ghost-btn compact" data-action="open-goal">Add goal</button>
      </div>
      <p class="muted tight">Do a habit / pinned task N days in a row, or collect N perfect (100%) days — earn an Iron, Bronze, Silver or Gold badge with your own title.</p>
      <div class="habit-manage">
        ${c.getGoals().length?c.getGoals().map(i=>{var l,d;const n=c.goalProgress(i,h),o=c.getBadges().some(g=>g.goalId===i.id),r=i.kind==="habit-streak"?((l=c.findHabit(i.targetId))==null?void 0:l.name)||"Deleted habit":i.kind==="task-streak"?((d=c.findPinnedTask(i.targetId))==null?void 0:d.title)||"Deleted task":"Any day at 100%";return`
                    <article class="manage-card goal-card ${o?"goal-earned":""}">
                      <div class="section-head">
                        <div>
                          <div class="item-title">${lt(i.tier)} ${b(i.title)}</div>
                          <div class="item-meta">${It(i.tier)} · “${b(i.rewardTitle)}” · ${b(r)}</div>
                          <div class="item-meta">${n.current}/${n.target} days ${o?"· Earned ✓":""}</div>
                          <div class="bar"><span style="width:${Math.min(100,Math.round(n.current/n.target*100))}%"></span></div>
                        </div>
                        <div class="mini-actions">
                          <button class="mini-btn on" data-action="open-edit-goal" data-id="${i.id}">Edit</button>
                          <button class="mini-btn" data-action="remove-goal" data-id="${i.id}">✕</button>
                        </div>
                      </div>
                    </article>
                  `}).join(""):'<div class="empty">No goals yet. Tap Add goal to create your first reward.</div>'}
      </div>
      ${c.getBadges().length?`
            <div class="section-head" style="margin-top:14px"><h2>Earned badges</h2></div>
            <div class="rewards-grid">
              ${c.getBadges().map(i=>`
                <article class="reward-card tier-${i.tier}">
                  <div class="reward-medal">${lt(i.tier)}</div>
                  <div>
                    <div class="item-title">${b(i.rewardTitle||i.title)}</div>
                    <div class="item-meta">${b(i.title)} · ${B((i.earnedAt||"").slice(0,10))}</div>
                  </div>
                  <button class="mini-btn" data-action="remove-badge" data-id="${i.id}">✕</button>
                </article>
              `).join("")}
            </div>
          `:""}
    </section>

    <section class="section">
      <div class="section-head"><h2>Locked reports</h2></div>
      <div class="list">
        ${s.length?s.map(i=>`
                    <article class="manage-card">
                      <div class="section-head">
                        <div>
                          <div class="item-title">${B(i.date)}</div>
                          <div class="item-meta">${i.submittedAt?`Submitted ${Wt(i.submittedAt)}`:"Locked"} · ${i.earned} pts</div>
                        </div>
                        <button class="ghost-btn compact" data-action="unlock-day" data-date="${i.date}">Unlock</button>
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
        ${e.length?e.map(i=>`
                    <article class="manage-card">
                      <div class="section-head">
                        <div>
                          <div class="item-title">${b(i.name)}</div>
                          <div class="item-meta">${st(i.category)} · ${i.pin?tt(i.pin):"Not pinned"} · +${i.points} pts ${t.showConscious!==!1?Number(i.consciousPoints)?`· 🧠 +${i.consciousPoints}`:"· No conscious pts":""} · ${it(c.habitStreak(i.id,h))}</div>
                          ${i.description?`<p class="item-desc">${b(i.description)}</p>`:""}
                          ${U(i.tags)}
                        </div>
                        <div class="mini-actions">
                          <button class="mini-btn ${i.pin?"on":""}" data-action="open-pin-habit" data-id="${i.id}">${E("pin")}</button>
                          <button class="mini-btn" data-action="remove-habit" data-id="${i.id}">✕</button>
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
        ${a.length?a.map(i=>`
                    <article class="manage-card">
                      <div class="section-head">
                        <div>
                          <div class="item-title">${b(i.title)}</div>
                          <div class="item-meta">${st(i.category)} · ${tt(i.pin)} · +${i.points} pts</div>
                          ${i.description?`<p class="item-desc">${b(i.description)}</p>`:""}
                          ${U(i.tags)}
                        </div>
                        <div class="mini-actions">
                          <button class="mini-btn on" data-action="open-pin-template" data-id="${i.id}">${E("pin")}</button>
                          <button class="mini-btn" data-action="unpin-template" data-id="${i.id}">✕</button>
                        </div>
                      </div>
                    </article>
                  `).join(""):'<div class="empty">Pin a task from Today to repeat it.</div>'}
      </div>
    </section>
  `}function j(t){if(/^\d{4}-\d{2}$/.test(String(t||"")))return String(t);if(/^\d{4}-\d{2}-\d{2}$/.test(String(t||"")))return String(t).slice(0,7);const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}`}function Ct(t,e){const[a,s]=String(t).split("-").map(Number),i=new Date(a,(s||1)-1+e,1);return`${i.getFullYear()}-${String(i.getMonth()+1).padStart(2,"0")}`}function Ce(t){const[e,a]=String(t).split("-").map(Number);return new Date(e,(a||1)-1,1).toLocaleDateString(void 0,{month:"long",year:"numeric"})}function Ee(t){const[e,a]=String(t).split("-").map(Number),i=(new Date(e,a-1,1).getDay()+6)%7,n=new Date(e,a,0).getDate(),o=[];for(let r=0;r<i;r++)o.push(null);for(let r=1;r<=n;r++)o.push(`${e}-${String(a).padStart(2,"0")}-${String(r).padStart(2,"0")}`);return o}function Et(t,e,a){const s=new Set(a||[]),i=Ee(e);return`
    <div class="pin-cal" data-cal="${t}">
      <div class="pin-cal-head">
        <button type="button" class="mini-btn" data-action="pin-cal-nav" data-target="${t}" data-dir="-1" aria-label="Previous month">‹</button>
        <b>${Ce(e)}</b>
        <button type="button" class="mini-btn" data-action="pin-cal-nav" data-target="${t}" data-dir="1" aria-label="Next month">›</button>
      </div>
      <div class="pin-cal-grid pin-cal-week">
        ${["M","T","W","T","F","S","S"].map(n=>`<span>${n}</span>`).join("")}
      </div>
      <div class="pin-cal-grid">
        ${i.map(n=>n?`<button type="button" class="pin-cal-day ${s.has(n)?"on":""}" data-action="toggle-pin-date" data-target="${t}" data-date="${n}">${Number(n.slice(8,10))}</button>`:"<span></span>").join("")}
      </div>
    </div>
  `}function He(t,e){const a=(t==null?void 0:t.mode)||"forever",s=(t==null?void 0:t.until)||"",i=((t==null?void 0:t.weekdays)||[]).map(Number),n=((t==null?void 0:t.monthDays)||[]).map(Number),o=Array.isArray(t==null?void 0:t.yearDays)?[...t.yearDays].sort():[],r=Array.isArray(t==null?void 0:t.customDates)?[...t.customDates].sort():[],l=Array.isArray(t==null?void 0:t.exceptDates)?[...t.exceptDates].sort():Array.isArray(t==null?void 0:t.exceptions)?[...t.exceptions].sort():[],d=e&&e._exceptCal||j(h),g=e&&e._customCal||j(h),S=e&&e._yearMonth||"01";return`
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
      <input name="until" type="date" value="${s}" />
    </label>
    <div class="pin-weekdays" style="${a==="weekly"?"":"display:none"}">
      <p class="item-meta">Repeat every</p>
      <div class="chip-row">
        ${Bt.map(u=>`
            <button type="button" class="chip weekday ${i.includes(u.value)?"on":""}" data-action="toggle-weekday" data-day="${u.value}">
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
            ${Array.from({length:12},(u,k)=>k+1).map(u=>`<option value="${String(u).padStart(2,"0")}" ${S===String(u).padStart(2,"0")?"selected":""}>${new Date(2e3,u-1,1).toLocaleDateString(void 0,{month:"long"})}</option>`).join("")}
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
      ${Et("custom",g,r)}
      <div class="chip-row" style="margin-top:8px">
        ${r.length?r.map(u=>`<button type="button" class="chip on" data-action="toggle-pin-date" data-target="custom" data-date="${u}" title="Tap to remove">${u} ✕</button>`).join(""):'<span class="item-meta">No extra custom dates.</span>'}
      </div>
    </div>
    <div class="pin-exceptions" style="margin-top:4px">
      <p class="item-meta"><b style="color:var(--text)">Exceptions</b> — skip these days (tap days on the calendar). Applies to every repeat mode.</p>
      ${Et("except",d,l)}
      <div class="chip-row" style="margin-top:8px">
        ${l.length?l.map(u=>`<button type="button" class="chip on" data-action="toggle-pin-date" data-target="except" data-date="${u}" title="Tap to remove">${u} ✕</button>`).join(""):'<span class="item-meta">No exceptions.</span>'}
      </div>
    </div>
  `}function Re(){if(!v)return"";if(v==="choose")return`
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
    `;if(v==="habit"||v==="task"||v==="edit-habit"||v==="edit-task"){const t=v==="habit"||v==="edit-habit",e=v.startsWith("edit-"),a=p||{},s=a.category||(t?"physically":"mentally"),i=Math.max(0,Math.min(5,Number(a.rating)||0)),n=Array.isArray(a.tags)?a.tags.join(", "):a.tags||"",o=a.consciousPoints!=null?Number(a.consciousPoints):a.conscious!=null?Number(a.conscious):0;return`
      <div class="modal-backdrop open" data-action="close-modal">
        <form class="sheet" data-form="${v}" data-id="${a.id||""}">
          <div class="handle"></div>
          <h2>${e?"Edit":"New"} ${t?"habit":"task"}</h2>
          <div class="form" style="margin-top:14px">
            <label>
              ${t?"Habit name":"Task name"}
              <input name="title" required maxlength="60" value="${b(a.title||a.name||"")}" placeholder="${t?"Meditate":"Finish report"}" />
            </label>
            ${t?`
                  <label>
                    Description (optional)
                    <textarea name="description" maxlength="240" placeholder="Why this habit matters, extra notes...">${b(a.description||"")}</textarea>
                  </label>
                `:`
                  <label>
                    Description (optional)
                    <textarea name="description" maxlength="240" placeholder="Why this matters, extra notes...">${b(a.description||"")}</textarea>
                  </label>
                  <div>
                    <p class="item-meta">Rating (optional, info only — does not change points)</p>
                    <div class="chip-row rating-row">
                      <button type="button" class="chip ${i===0?"on":""}" data-action="set-rating" data-rating="0">No rating</button>
                      ${[1,2,3,4,5].map(r=>`
                            <button type="button" class="chip ${i===r?"on":""}" data-action="set-rating" data-rating="${r}">${r}★</button>
                          `).join("")}
                    </div>
                    <input type="hidden" name="rating" value="${i}" />
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
                ${X.map(r=>`
                    <button type="button" class="chip ${s===r.id?"on":""}" data-action="set-category" data-category="${r.id}">${r.label}</button>
                  `).join("")}
              </div>
              <input type="hidden" name="category" value="${s}" />
            </div>
            <label>
              Tags (optional, comma separated)
              <input name="tags" maxlength="120" value="${b(n)}" placeholder="morning, health" />
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
    `}if(v==="export"){const t=p&&p.range||"day";return`
      <div class="modal-backdrop open" data-action="close-modal">
        <div class="sheet">
          <div class="handle"></div>
          <h2>Export report</h2>
          <p class="muted tight">Date: ${B(h)}. Pick a range, then a format.</p>
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
    `}if(v==="goal"||v==="edit-goal"){const t=v==="edit-goal",e=p||{},a=e.kind||"habit-streak",s=c.getAllHabits(),i=c.getPinnedTasks(),n=e.targetId||"";return`
      <div class="modal-backdrop open" data-action="close-modal">
        <form class="sheet" data-form="${v}" data-id="${e.id||""}">
          <div class="handle"></div>
          <h2>${t?"Edit":"New"} goal</h2>
          <div class="form" style="margin-top:14px">
            <label>
              Goal title
              <input name="title" required maxlength="60" value="${b(e.title||"")}" placeholder="Exercise every day" />
            </label>
            <div>
              <p class="item-meta">Goal type</p>
              <div class="chip-row goal-kind-row">
                ${jt.map(o=>`<button type="button" class="chip ${a===o.id?"on":""}" data-action="set-goal-kind" data-kind="${o.id}">${o.label}</button>`).join("")}
              </div>
              <input type="hidden" name="kind" value="${a}" />
            </div>
            <label class="goal-target-habit" style="${a==="habit-streak"?"":"display:none"}">
              Habit
              <select name="habitTarget">
                ${s.map(o=>`<option value="${o.id}" ${n===o.id?"selected":""}>${b(o.name)}</option>`).join("")}
              </select>
            </label>
            <label class="goal-target-task" style="${a==="task-streak"?"":"display:none"}">
              Pinned task
              <select name="taskTarget">
                ${i.length?i.map(o=>`<option value="${o.id}" ${n===o.id?"selected":""}>${b(o.title)}</option>`).join(""):'<option value="">No pinned tasks yet</option>'}
              </select>
            </label>
            <label>
              Number of days
              <input name="targetDays" type="number" min="1" max="365" value="${e.targetDays||7}" />
            </label>
            <div>
              <p class="item-meta">Badge</p>
              <div class="chip-row goal-tier-row">
                ${Q.map(o=>`<button type="button" class="chip ${(e.tier||"bronze")===o.id?"on":""}" data-action="set-goal-tier" data-tier="${o.id}">${o.medal} ${o.label}</button>`).join("")}
              </div>
              <input type="hidden" name="tier" value="${e.tier||"bronze"}" />
            </div>
            <label>
              Reward title (yours)
              <input name="rewardTitle" required maxlength="60" value="${b(e.rewardTitle||"")}" placeholder="Champion" />
            </label>
            <button class="primary-btn" type="submit">Save goal</button>
            <button class="ghost-btn" type="button" data-action="close-modal">Cancel</button>
          </div>
        </form>
      </div>
    `}if(v==="pin"){const{kind:t,id:e,title:a,pin:s}=p||{};return`
      <div class="modal-backdrop open" data-action="close-modal">
        <form class="sheet sheet-wide" data-form="pin" data-kind="${t}" data-id="${e}">
          <div class="handle"></div>
          <h2>Pin ${t==="habit"?"habit":"task"}</h2>
          <p class="muted tight">${b(a||"")}</p>
          <div class="form" style="margin-top:14px">
            ${He(s,p)}
            <button class="primary-btn" type="submit">Save pin</button>
            ${s?'<button class="ghost-btn danger" type="button" data-action="clear-pin">Unpin</button>':""}
            <button class="ghost-btn" type="button" data-action="close-modal">Cancel</button>
          </div>
        </form>
      </div>
    `}if(v==="forward"){const{kind:t,id:e,title:a,from:s}=p||{},i=t==="habit";return`
      <div class="modal-backdrop open" data-action="close-modal">
        <form class="sheet" data-form="forward" data-kind="${t}" data-id="${e}">
          <div class="handle"></div>
          <h2>Forward ${i?"habit":"task"}</h2>
          <p class="muted tight">${b(a||"")}</p>
          <p class="item-meta">From ${b(s||h)} — a copy will be created on the day you pick, marked “↩ Forwarded from ${b(s||h)}”.</p>
          <div class="form" style="margin-top:14px">
            <label>
              Forward to day
              <input name="targetDate" type="date" required value="${ue(s||h)}" />
            </label>
            <button class="primary-btn" type="submit">Forward ${i?"habit":"task"} →</button>
            <button class="ghost-btn" type="button" data-action="close-modal">Cancel</button>
          </div>
        </form>
      </div>
    `}if(v==="image"){const{image:t,title:e}=p||{};return t?`
      <div class="lightbox-backdrop" data-action="close-modal">
        <img src="${t}" alt="${b(e||"Task photo")}" />
        <button type="button" class="ghost-btn compact lightbox-close" data-action="close-modal">✕ Close</button>
      </div>
    `:""}return""}function $(){if(ct)try{const t=c.isLocked(h);ct.innerHTML=`
    <div class="app-shell">
      <main class="screen active">
        ${L==="today"?me():""}
        ${L==="week"?ge():""}
        ${L==="history"?he():""}
        ${L==="habits"?fe():""}
        ${L==="settings"?Le():""}
      </main>
      ${["today","habits"].includes(L)&&!t?'<button class="fab" data-action="open-add" aria-label="Add">+</button>':""}
      ${L==="settings"?'<button class="fab" data-action="open-add-habit" aria-label="Add habit">+</button>':""}
      <nav class="tabbar tabs-5">
        <button class="tab ${L==="today"?"active":""}" data-screen="today">${E("home")}Today</button>
        <button class="tab ${L==="week"?"active":""}" data-screen="week">${E("week")}Week</button>
        <button class="tab ${L==="history"?"active":""}" data-screen="history">${E("history")}History</button>
        <button class="tab ${L==="habits"?"active":""}" data-screen="habits">${E("habit")}Activities</button>
        <button class="tab ${L==="settings"?"active":""}" data-screen="settings">${E("settings")}Settings</button>
      </nav>
    </div>
    ${Re()}
    <div class="toast" id="toast"></div>
  `,je(),Ie(),Qt(),Fe()}catch(t){const e=t&&t.stack?String(t.stack).slice(0,400):t&&t.message?t.message:"Unknown error";ct.innerHTML=`<div class="app-shell"><section class="manage-card"><h2>Could not load (Error B)</h2><p class="muted tight">${b(e)}</p><button class="primary-btn full" data-action="reload-app">Reload</button></section></div>`}}function Fe(){if(v!=="habit"&&v!=="task")return;const t=document.querySelector(".sheet");t&&(t.scrollTop=0);const e=document.querySelector('.sheet input[name="title"]');if(e)try{e.focus({preventScroll:!0})}catch{try{e.focus()}catch{}}}function je(){const t=document.getElementById("day-note");t&&t.addEventListener("input",()=>{c.isLocked(h)||c.setNote(h,t.value)})}function Ie(){const t=document.getElementById("lock-time"),e=document.getElementById("auto-lock");t&&t.addEventListener("change",()=>{c.setLockTime(t.value),f(`Lock time set to ${t.value}`),$()}),e&&e.addEventListener("change",()=>{c.setAutoLock(e.checked),f(e.checked?"Auto-lock on":"Auto-lock off"),$()});const a=document.getElementById("backup-file");a&&a.addEventListener("change",()=>{const s=a.files[0];if(!s)return;const i=new FileReader;i.onload=()=>{Zt(String(i.result||""),s.name),a.value=""},i.onerror=()=>{f("Couldn't read that file."),a.value=""},i.readAsText(s)})}function f(t){const e=document.getElementById("toast");e&&(e.textContent=t,e.classList.add("show"),setTimeout(()=>e.classList.remove("show"),1800))}function te(){const t=c.getTheme();document.documentElement.dataset.theme=t;const e=document.querySelector('meta[name="theme-color"]');e&&(e.content=t==="light"?"#f3f1ea":"#0e1116")}function b(t){return String(t||"").split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;").split('"').join("&quot;")}function C(){return c.isLocked(h)?(f("This report is locked. Unlock it in Settings."),!0):!1}function vt(t){return{mode:(t==null?void 0:t.mode)||"forever",until:(t==null?void 0:t.until)||"",weekdays:Array.isArray(t==null?void 0:t.weekdays)?t.weekdays.map(Number):[],monthDays:Array.isArray(t==null?void 0:t.monthDays)?t.monthDays.map(Number):[],yearDays:Array.isArray(t==null?void 0:t.yearDays)?[...t.yearDays]:[],customDates:Array.isArray(t==null?void 0:t.customDates)?[...t.customDates]:[],exceptDates:Array.isArray(t==null?void 0:t.exceptDates)?[...t.exceptDates]:Array.isArray(t==null?void 0:t.exceptions)?[...t.exceptions]:[]}}function Be(t){const e=c.findHabit(t);e&&(v="pin",p={kind:"habit",id:t,title:e.name,pin:e.pin?vt(e.pin):{mode:"forever",until:"",weekdays:[],monthDays:[],yearDays:[],customDates:[],exceptDates:[]},_exceptCal:j(h),_customCal:j(h),_yearMonth:"01"})}function Oe(t){const e=c.findTask(h,t);if(!e)return;const a=e.sourcePinId?c.findPinnedTask(e.sourcePinId):null;v="pin",p={kind:"task",id:t,title:e.title,pin:a!=null&&a.pin?vt(a.pin):{mode:"forever",until:"",weekdays:[],monthDays:[],yearDays:[],customDates:[],exceptDates:[]},_exceptCal:j(h),_customCal:j(h),_yearMonth:"01"}}function _e(t){const e=c.findPinnedTask(t);e&&(v="pin",p={kind:"template",id:t,title:e.title,pin:e.pin?vt(e.pin):{mode:"forever",until:"",weekdays:[],monthDays:[],yearDays:[],customDates:[],exceptDates:[]},_exceptCal:j(h),_customCal:j(h),_yearMonth:"01"})}function Ge(t){var d;const e=t.querySelector('input[name="mode"]').value,a=((d=t.querySelector('input[name="until"]'))==null?void 0:d.value)||"",s=[...t.querySelectorAll(".weekday.on")].map(g=>Number(g.dataset.day)),i=[...t.querySelectorAll(".monthday.on")].map(g=>Number(g.dataset.day)),n=p&&p.pin||{},o=Array.isArray(n.yearDays)?n.yearDays:[],r=Array.isArray(n.customDates)?n.customDates:[],l=Array.isArray(n.exceptDates)?n.exceptDates:[];return e==="until"&&!a?(f("Pick an until date"),null):e==="weekly"&&!s.length?(f("Pick at least one weekday"),null):e==="monthly"&&!i.length?(f("Pick at least one day of month"),null):e==="yearly"&&!o.length?(f("Add at least one yearly date"),null):e==="custom"&&!r.length?(f("Pick at least one custom date"),null):{mode:e,until:a,weekdays:s,monthDays:i,yearDays:o,customDates:r,exceptDates:l}}function z(t,e,a){const s=e instanceof Blob?e:new Blob([e],{type:a||"text/plain;charset=utf-8"}),i=URL.createObjectURL(s),n=document.createElement("a");n.href=i,n.download=t,document.body.appendChild(n),n.click(),setTimeout(()=>{document.body.removeChild(n),URL.revokeObjectURL(i)},500)}function Y(t){const e=String(t??"");return/[",\n]/.test(e)?`"${e.replace(/"/g,'""')}"`:e}function kt(t){const[e,a]=c.resolveRange(t,h);return{range:t,start:e,end:a,rows:c.exportRows(e,a)}}function We(){const t=p&&p.range||"day",{start:e,end:a,rows:s}=kt(t),i=[];i.push(["Daily Report export",`${e} to ${a}`].map(Y).join(",")),i.push(["Date","Type","Name","Category","Tags","Points","Rating","Earned","ConsciousPts","Status","Note/Description"].map(Y).join(",")),s.forEach(n=>{n.habits.forEach(o=>{i.push([n.date,"Habit",o.name,o.category,(o.tags||[]).join("|"),o.points,o.rating,o.earned,o.consciousPoints,o.status||(o.rating>0?"done":n.locked?"missed":"pending"),o.description||""].map(Y).join(","))}),n.tasks.forEach(o=>{i.push([n.date,"Task",o.hasImage?`${o.title} [photo]`:o.title,o.category,(o.tags||[]).join("|"),o.points,o.rating||"",o.earned,"",o.status||(o.done?"done":n.locked?"missed":"pending"),o.description||""].map(Y).join(","))}),i.push([n.date,"Summary",`Earned ${n.earned}/${n.max} (${n.percent}%)`,"","","","","","",n.locked?"locked":"open",n.note||""].map(Y).join(","))}),z(`daily-report-${t}-${e}-to-${a}.csv`,"\uFEFF"+i.join(`
`),"text/csv;charset=utf-8"),f("Excel (CSV) exported")}function qe(){const t=p&&p.range||"day",{start:e,end:a,rows:s}=kt(t),i={app:"Daily Report",exportedAt:new Date().toISOString(),range:t,start:e,end:a,days:s};z(`daily-report-${t}-${e}-to-${a}.json`,JSON.stringify(i,null,2),"application/json"),f("JSON exported")}function Ue(){const t=p&&p.range||"day",{start:e,end:a,rows:s}=kt(t),i=s.map(o=>`
        <section style="margin-bottom:18px;border:1px solid #ddd;border-radius:12px;padding:12px">
          <h2 style="margin:0 0 4px;font-size:16px">${b(o.date)} — ${o.earned}/${o.max} pts (${o.percent}%)</h2>
          <p style="margin:0 0 8px;font-size:12px;color:#555">Habits ${o.habitScore} + Conscious ${o.consciousScore} + Tasks ${o.taskScore} · ${o.locked?"Locked":"Open"}${o.note?` · Note: ${b(o.note)}`:""}</p>
          <table style="width:100%;border-collapse:collapse;font-size:12px">
            <thead><tr><th align="left">Type</th><th align="left">Name</th><th align="left">Category</th><th>Points</th><th>Rating</th><th>Earned</th><th>Status</th></tr></thead>
            <tbody>
              ${o.habits.map(r=>`<tr><td>Habit</td><td>${b(r.name)}${r.description?` (${b(r.description)})`:""}</td><td>${b(r.category)}</td><td align="center">${r.points}${r.consciousPoints?`+${r.consciousPoints}🧠`:""}</td><td align="center">${r.rating||"-"}/5</td><td align="center">${r.earned}</td><td align="center">${r.status||(r.rating>0?"done":o.locked?"missed":"pending")}</td></tr>`).join("")}
              ${o.tasks.map(r=>`<tr><td>Task</td><td>${b(r.title)}${r.hasImage?" 📷":""}${r.description?` (${b(r.description)})`:""}</td><td>${b(r.category)}</td><td align="center">${r.points}</td><td align="center">${r.rating?`${r.rating}/5`:"-"}</td><td align="center">${r.earned}</td><td align="center">${r.status||(r.done?"done":o.locked?"missed":"pending")}</td></tr>`).join("")}
            </tbody>
          </table>
        </section>
      `).join(""),n=window.open("","_blank");if(!n){f("Popup blocked — allow popups to export PDF");return}n.document.write(`<!DOCTYPE html><html><head><title>Daily Report ${e} to ${a}</title></head><body style="font-family:sans-serif;padding:24px"><h1>Daily Report — ${e} to ${a}</h1>${i}<script>window.onload=function(){window.print()}<\/script></body></html>`),n.document.close(),f("PDF print view opened")}document.addEventListener("click",t=>{const e=t.target.closest("[data-screen]");if(e){L=e.dataset.screen,$();return}const a=t.target.closest("[data-action]");if(!a)return;const s=a.dataset.action;if(s==="close-modal"){if(v==="image"){v=null,p=null,$();return}(t.target.classList.contains("modal-backdrop")||a.classList.contains("ghost-btn"))&&(v=null,p=null,$());return}if(s==="note-bullets"){Mt("bullets");return}if(s==="note-numbered"){Mt("numbered");return}if(s==="pick-task-image"){const i=document.getElementById("task-image-input");i?i.click():f("Photo picking needs a browser file picker");return}if(s==="remove-task-image"){p&&(p._image="",$(),f("Photo removed — save to apply"));return}if(s==="view-task-image"){const i=c.findTask(h,a.dataset.id),n=i&&i.image?i.image:p&&(p._image||p.image)||"";if(!n){f("No photo on this task");return}v="image",p={image:n,title:i&&i.title||"Task photo"},$();return}if(s==="prev-day"&&Pt(-1),s==="next-day"&&Pt(1),s==="reload-app"){window.location.reload();return}if(s==="set-theme"){const i=a.dataset.theme==="light"?"light":"dark";c.setTheme(i),te(),f(i==="light"?"Light mode on":"Dark mode on")}if(s==="install-app"){Pe();return}if(s==="check-updates"){Ne();return}if(s==="apply-update"){Kt();return}if(s==="backup-now"){De();return}if(s==="trigger-import"){const i=document.getElementById("backup-file");i&&i.click();return}if(s==="choose-folder"){we();return}if(s==="grant-folder"){xe();return}if(s==="forget-folder"){Se();return}if(s==="restore-backup"){Ae(a.dataset.name);return}if(s==="goto-settings"&&(L="settings"),s==="open-add-habit"&&(v="habit",p=null),s==="open-add-task"){if(C())return;v="task",p={category:"mentally"}}if(s==="open-add"){if(C())return;v="choose",p={category:"mentally"}}if(s==="toggle-edit"&&(W=!W),s==="open-edit-habit"){const i=c.findHabit(a.dataset.id);if(!i)return;v="edit-habit",p={id:i.id,name:i.name,description:i.description||"",points:i.points,category:i.category,tags:i.tags||[],consciousPoints:Number(i.consciousPoints)||0}}if(s==="open-edit-task"){if(C())return;const i=c.findTask(h,a.dataset.id);if(!i)return;v="edit-task",p={id:i.id,title:i.title,points:i.points,description:i.description,category:i.category,tags:i.tags||[],rating:Number(i.rating)||0,image:i.image||"",_image:void 0}}if(s==="toggle-badges"&&(at=!at),s==="open-goal"&&(v="goal",p={kind:"habit-streak",targetDays:7,tier:"bronze"}),s==="open-edit-goal"){const i=c.getGoals().find(n=>n.id===a.dataset.id);if(!i)return;v="edit-goal",p={...i}}if(s==="remove-goal"&&(c.removeGoal(a.dataset.id),f("Goal removed")),s==="remove-badge"&&(c.removeBadge(a.dataset.id),f("Badge removed")),s==="rate-habit"){if(C())return;const n=c.habitRating(h,a.dataset.id)===Number(a.dataset.rating)?0:Number(a.dataset.rating);c.setHabitRating(h,a.dataset.id,n)}if(s==="rate-task"){if(C())return;const i=c.findTask(h,a.dataset.id);if(!i)return;const o=(Number(i.rating)||0)===Number(a.dataset.rating)?0:Number(a.dataset.rating);c.setTaskRating(h,a.dataset.id,o)}if(s==="open-export"&&(v="export",p={range:p&&p.range||"day"}),s==="set-export-range"){v="export",p={range:a.dataset.range||"day"},$();return}if(s==="do-export"){const i=a.dataset.format;i==="csv"&&We(),i==="json"&&qe(),i==="pdf"&&Ue(),v=null,p=null}if(s==="submit-day"&&(c.submitDay(h),f("Report submitted and locked")),s==="unlock-day"&&(c.unlockDay(a.dataset.date),f("Report unlocked")),s==="toggle-habit"){if(C())return;c.toggleHabit(h,a.dataset.id)}if(s==="toggle-task"){if(C())return;c.toggleTask(h,a.dataset.id)}if(s==="remove-task"){if(C())return;c.removeTask(h,a.dataset.id)}if(s==="remove-habit"&&c.removeHabit(a.dataset.id),s==="open-pin-habit"&&Be(a.dataset.id),s==="open-forward-habit"){if(C())return;const i=c.findHabit(a.dataset.id);if(!i)return;v="forward",p={kind:"habit",id:i.id,title:i.name,from:h}}if(s==="open-forward-task"){if(C())return;const i=c.findTask(h,a.dataset.id);if(!i)return;v="forward",p={kind:"task",id:i.id,title:i.title,from:h}}if(s==="open-pin-task"){if(C())return;Oe(a.dataset.id)}if(s==="open-pin-template"&&_e(a.dataset.id),s==="unpin-template"&&(c.unpinTaskTemplate(a.dataset.id),f("Task unpinned")),s==="pick-date"&&(h=a.dataset.date,L="today"),s==="set-points"){const i=document.querySelector('input[name="points"]');i&&(i.value=a.dataset.points),document.querySelectorAll(".chip-row .chip[data-points]").forEach(n=>n.classList.remove("on")),a.classList.add("on");return}if(s==="set-category"){const i=a.closest("form")||a.closest(".sheet"),n=i.querySelector('input[name="category"]');n&&(n.value=a.dataset.category),i.querySelectorAll(".cat-row .chip").forEach(o=>o.classList.remove("on")),a.classList.add("on");return}if(s==="set-rating"){const i=a.closest(".sheet")||a.closest("form")||document,n=i.querySelector('input[name="rating"]');n&&(n.value=a.dataset.rating),i.querySelectorAll(".rating-row .chip").forEach(o=>o.classList.remove("on")),a.classList.add("on");return}if(s==="set-conscious"){const i=a.closest(".sheet")||a.closest("form")||document,n=i.querySelector('input[name="consciousPoints"]');n&&(n.value=a.dataset.conscious),i.querySelectorAll(".conscious-row .chip").forEach(o=>o.classList.remove("on")),a.classList.add("on");return}if(s==="set-goal-kind"){const i=a.closest(".sheet")||document,n=i.querySelector('input[name="kind"]');n&&(n.value=a.dataset.kind),i.querySelectorAll(".goal-kind-row .chip").forEach(d=>d.classList.remove("on")),a.classList.add("on");const o=a.dataset.kind,r=i.querySelector(".goal-target-habit"),l=i.querySelector(".goal-target-task");r&&(r.style.display=o==="habit-streak"?"":"none"),l&&(l.style.display=o==="task-streak"?"":"none"),p&&(p.kind=o);return}if(s==="set-goal-tier"){const i=a.closest(".sheet")||document,n=i.querySelector('input[name="tier"]');n&&(n.value=a.dataset.tier),i.querySelectorAll(".goal-tier-row .chip").forEach(o=>o.classList.remove("on")),a.classList.add("on");return}if(s==="pin-mode"){const i=a.closest("form"),n=a.dataset.mode;i.querySelector('input[name="mode"]').value=n,i.querySelectorAll(".pin-modes .chip").forEach(r=>r.classList.remove("on")),a.classList.add("on");const o=(r,l)=>{const d=i.querySelector(r);d&&(d.style.display=l?"":"none")};o(".pin-until",n==="until"),o(".pin-weekdays",n==="weekly"),o(".pin-monthdays",n==="monthly"),o(".pin-yeardays",n==="yearly"),p&&p.pin&&(p.pin.mode=n);return}if(s==="toggle-weekday"){a.classList.toggle("on");return}if(s==="toggle-monthday"){a.classList.toggle("on");return}if(s==="pin-cal-nav"){if(!p)return;const i=a.dataset.target,n=Number(a.dataset.dir)||0;i==="except"?p._exceptCal=Ct(p._exceptCal||j(h),n):p._customCal=Ct(p._customCal||j(h),n),$();return}if(s==="toggle-pin-date"){if(!p||!p.pin)return;const i=a.dataset.target,n=a.dataset.date,o=i==="custom"?"customDates":"exceptDates",r=Array.isArray(p.pin[o])?[...p.pin[o]]:[],l=r.indexOf(n);l>=0?r.splice(l,1):(r.push(n),r.length>365&&r.shift()),p.pin[o]=r.sort(),$();return}if(s==="add-year-day"){if(!p||!p.pin)return;const i=a.closest("form")||document,n=i.querySelector("#year-month-select"),o=i.querySelector("#year-day-select");n&&(p._yearMonth=n.value);const r=`${n?n.value:"01"}-${o?o.value:"01"}`,l=Array.isArray(p.pin.yearDays)?[...p.pin.yearDays]:[];l.includes(r)||l.push(r),p.pin.yearDays=l.sort(),$();return}if(s==="remove-year-day"){if(!p||!p.pin)return;const i=a.dataset.date;p.pin.yearDays=(p.pin.yearDays||[]).filter(n=>n!==i),$();return}if(s==="clear-pin"){const i=a.closest("form"),n=i.dataset.kind,o=i.dataset.id;if(n==="habit"&&c.unpinHabit(o),n==="task"){const r=c.findTask(h,o);r!=null&&r.sourcePinId&&c.unpinTaskTemplate(r.sourcePinId)}n==="template"&&c.unpinTaskTemplate(o),v=null,p=null,f("Unpinned"),$();return}$()});document.addEventListener("submit",t=>{const e=t.target.closest("[data-form]");if(!e)return;t.preventDefault();const a=e.dataset.form;if(a==="habit"||a==="task"||a==="edit-habit"||a==="edit-task"){const s=new FormData(e),i=String(s.get("title")||""),n=Number(s.get("points")||0),o=String(s.get("category")||"mentally"),r=String(s.get("description")||""),l=String(s.get("tags")||""),d=Math.max(0,Math.min(5,Number(s.get("rating")||0))),g=Math.max(0,Math.min(100,Number(s.get("consciousPoints")||0)));if(!i.trim())return;const S=p&&p._image!==void 0?I(p._image):I(p&&p.image);if(a==="habit")c.addHabit(i,n,{description:r,category:o,consciousPoints:g,tags:l}),f("Habit added");else if(a==="task"){if(C())return;c.addTask(h,i,n,{description:r,category:o,rating:d,tags:l,image:S}),f("Task added")}else if(a==="edit-habit")c.updateHabit(e.dataset.id,{name:i,description:r,points:n,category:o,consciousPoints:g,tags:l}),f("Habit updated");else{if(C())return;c.updateTask(h,e.dataset.id,{title:i,points:n,description:r,category:o,rating:d,tags:l,image:S}),f("Task updated")}v=null,p=null,$();return}if(a==="pin"){const s=Ge(e);if(!s)return;const i=e.dataset.kind,n=e.dataset.id;i==="habit"&&c.pinHabit(n,s),i==="task"&&c.pinTask(h,n,s),i==="template"&&c.updatePinnedTask(n,s),v=null,p=null,f("Pin saved"),$();return}if(a==="forward"){const s=new FormData(e),i=String(s.get("targetDate")||""),n=e.dataset.kind,o=e.dataset.id,r=p&&p.from||h;if(!/^\d{4}-\d{2}-\d{2}$/.test(i)){f("Pick a valid date");return}const l=n==="habit"?c.forwardHabit(r,o,i):c.forwardTask(r,o,i);if(!l.ok){f(l.reason||"Could not forward");return}v=null,p=null,h=i,L="today",f(`Forwarded to ${i}`),$();return}if(a==="goal"||a==="edit-goal"){const s=new FormData(e),i=String(s.get("title")||"").trim(),n=String(s.get("kind")||"habit-streak"),o=String(s.get("tier")||"bronze"),r=String(s.get("rewardTitle")||"").trim(),l=Math.max(1,Math.min(365,Number(s.get("targetDays")||7)));if(!i||!r){f("Goal title and reward title are required");return}let d="";if(n==="habit-streak"&&(d=String(s.get("habitTarget")||"")),n==="task-streak"&&(d=String(s.get("taskTarget")||"")),(n==="habit-streak"||n==="task-streak")&&!d){f(n==="habit-streak"?"Pick a habit":"Pin a task first, then pick it");return}a==="goal"?(c.addGoal({title:i,kind:n,targetId:d,targetDays:l,tier:o,rewardTitle:r}),f("Goal added")):(c.updateGoal(e.dataset.id,{title:i,kind:n,targetId:d,targetDays:l,tier:o,rewardTitle:r}),f("Goal updated"));const g=c.checkGoals(h);g.length&&f(`🏅 Reward earned: ${g[0].rewardTitle}!`),v=null,p=null,$()}});document.addEventListener("change",t=>{const e=t.target.closest(".sort-select");if(e){const a=e.dataset.sortKind;a==="habit"&&c.setHabitSort(e.value),a==="task"&&c.setTaskSort(e.value),$()}if(t.target&&t.target.id==="show-conscious"&&(c.setShowConscious(t.target.checked),f(t.target.checked?"Conscious points on":"Conscious points hidden"),$()),t.target&&t.target.id==="year-month-select"&&p&&(p._yearMonth=t.target.value),t.target&&t.target.id==="task-image-input"){const a=t.target.files&&t.target.files[0];if(!a)return;if(!String(a.type||"").startsWith("image/")){f("Please pick an image file"),t.target.value="";return}f("Processing photo…"),ce(a).then(s=>{if(t.target.value="",!s){f("Photo too large or unreadable — try a smaller one");return}p&&(p._image=s,$(),f("Photo attached — save to apply"))})}});if("serviceWorker"in navigator){window.addEventListener("load",()=>{navigator.serviceWorker.register("./sw.js").catch(()=>{})});let t=!1;try{sessionStorage.getItem("dr-updated-reload")&&(t=!0)}catch{}navigator.serviceWorker.addEventListener("controllerchange",()=>{if(!t){t=!0;try{sessionStorage.setItem("dr-updated-reload","1")}catch{}window.location.reload()}})}function ze(){const t=document.getElementById("boot-error");t&&(t.style.display="none")}ze();te();$();ke().then(()=>{L==="settings"&&$()});
