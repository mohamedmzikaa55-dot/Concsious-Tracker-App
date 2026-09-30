(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function a(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=a(n);fetch(n.href,s)}})();const Ae="daily-report-v2",Et=[{id:"mentally",label:"Mentally"},{id:"psychology",label:"Psychology"},{id:"physically",label:"Physically"},{id:"spiritually",label:"Spiritually"},{id:"socially",label:"Socially"}];Et.map(t=>t.id);const Te=[{id:"h1",name:"Wake up early",points:10,icon:"sunrise",category:"physically",pin:{mode:"forever"}},{id:"h2",name:"Drink water",points:5,icon:"drop",category:"physically",pin:{mode:"forever"}},{id:"h3",name:"Exercise",points:15,icon:"bolt",category:"physically",pin:{mode:"forever"}},{id:"h4",name:"Read 20 minutes",points:10,icon:"book",category:"mentally",pin:{mode:"forever"}},{id:"h5",name:"No junk food",points:10,icon:"leaf",category:"physically",pin:{mode:"forever"}}],De={lockTime:"21:00",autoLock:!0,showConscious:!0,habitSort:"default",taskSort:"default",theme:"dark",weekStart:1};function Rt(t){const e=Number(t);return Number.isInteger(e)&&e>=0&&e<=6?e:1}const yt=[{id:"iron",label:"Iron",medal:"🥉",rank:1},{id:"bronze",label:"Bronze",medal:"🥉",rank:2},{id:"silver",label:"Silver",medal:"🥈",rank:3},{id:"gold",label:"Gold",medal:"🥇",rank:4}],Ce=[{id:"habit-streak",label:"Habit streak"},{id:"task-streak",label:"Pinned task streak"},{id:"perfect-days",label:"Perfect days (100%)"}];function re(t){var e;return((e=yt.find(a=>a.id===t))==null?void 0:e.rank)||0}function jt(t){var e;return((e=yt.find(a=>a.id===t))==null?void 0:e.medal)||"🏅"}function Pe(t){var e;return((e=yt.find(a=>a.id===t))==null?void 0:e.label)||t||"Badge"}function T(t){const e=Array.isArray(t)?t:String(t||"").split(","),a=[];return e.forEach(i=>{const n=String(i||"").trim().slice(0,20);n&&!a.some(s=>s.toLowerCase()===n.toLowerCase())&&a.push(n),a.length>=10}),a.slice(0,10)}function Mt(t,e){const a=[...t];return e==="points"?a.sort((i,n)=>(Number(n.points)||0)-(Number(i.points)||0)):e==="category"?a.sort((i,n)=>it(D(i.category)).localeCompare(it(D(n.category)))):e==="tags"&&a.sort((i,n)=>(i.tags&&i.tags[0]||"~~~").localeCompare(n.tags&&n.tags[0]||"~~~")),a}const nt=[{value:1,label:"Mon"},{value:2,label:"Tue"},{value:3,label:"Wed"},{value:4,label:"Thu"},{value:5,label:"Fri"},{value:6,label:"Sat"},{value:0,label:"Sun"}];function G(t=new Date){const e=t.getFullYear(),a=String(t.getMonth()+1).padStart(2,"0"),i=String(t.getDate()).padStart(2,"0");return`${e}-${a}-${i}`}function Jt(){return{habits:{},habitRatings:{},habitMissed:{},habitForwarded:{},tasks:[],note:"",locked:!1,lockOverride:null,submittedAt:null,lockedHabits:null,skippedPins:[]}}var H=[];function Y(){return[...Et,...H]}function D(t){return Y().map(a=>a.id).includes(t)?t:"mentally"}function it(t){var e;return((e=Y().find(a=>a.id===t))==null?void 0:e.label)||"Mentally"}const kt=7e5;function V(t){const e=String(t||"");return e.startsWith("data:image/")?e.length>kt?"":e:""}function de(t){const e=Math.max(0,Math.min(5,Number(t.rating)||0)),a=n=>/^\d{4}-\d{2}-\d{2}$/.test(String(n||""))?String(n):"",i=n=>Array.isArray(n)?n.filter(s=>/^\d{4}-\d{2}-\d{2}$/.test(String(s))).map(String).slice(0,50):[];return{...t,description:t.description||"",category:D(t.category),tags:T(t.tags),rating:e,done:!!t.done,missed:!!t.missed,forwardedFrom:a(t.forwardedFrom),forwardedHabitId:String(t.forwardedHabitId||""),forwardedTo:i(t.forwardedTo),image:V(t.image)}}function B(t){const e=Number(t);return!Number.isFinite(e)||e<0?0:Math.min(100,Math.round(e))}function vt(t){const e=String(t??"").slice(0,10);return/^\d{4}-\d{2}-\d{2}$/.test(e)?e:""}function Qt(t,e){const a=vt(t&&t.startFrom);return a?String(e)>=a:!0}function Xt(t,e){return{id:String(t.id||""),name:String(t.name||"").slice(0,80),description:String(t.description||"").slice(0,240),points:Number(t.points)||0,icon:t.icon||"star",category:D(t.category),consciousPoints:B(t.consciousPoints),tags:T(t.tags),pin:U(t.pin),startFrom:vt(t.startFrom),archivedAt:e||t.archivedAt||null}}function U(t){if(!t||!t.mode)return null;const e=(n,s,o)=>Array.isArray(n)?n.map(Number).filter(r=>Number.isFinite(r)&&r>=s&&r<=o):[],a=n=>Array.isArray(n)?n.filter(s=>/^\d{4}-\d{2}-\d{2}$/.test(String(s))).map(String).slice(0,365):[],i=n=>Array.isArray(n)?n.filter(s=>/^\d{2}-\d{2}$/.test(String(s))).map(String).slice(0,366):[];return{mode:["forever","until","weekly","monthly","yearly","custom"].includes(t.mode)?t.mode:"forever",until:t.until||"",weekdays:e(t.weekdays,0,6),monthDays:e(t.monthDays,1,31),yearDays:i(t.yearDays),customDates:a(t.customDates),exceptDates:a(t.exceptDates||t.exceptions)}}function ze(t,e){const a=`${t} ${e}`.toLowerCase();return a.includes("read")||a.includes("study")||a.includes("learn")?"mentally":a.includes("meditat")||a.includes("pray")||a.includes("journal")?"spiritually":a.includes("mood")||a.includes("calm")||a.includes("therapy")?"psychology":a.includes("friend")||a.includes("family")||a.includes("social")||a.includes("call")||a.includes("visit")?"socially":"physically"}function Bt(t){const e=Ce.some(a=>a.id===t.kind)?t.kind:"habit-streak";return{id:String(t.id||`g${Date.now()}`),title:String(t.title||"").trim().slice(0,60)||"My goal",kind:e,targetId:String(t.targetId||""),targetDays:Math.max(1,Math.min(365,Number(t.targetDays)||7)),tier:yt.some(a=>a.id===t.tier)?t.tier:"bronze",rewardTitle:String(t.rewardTitle||"").trim().slice(0,60)||"Reward",createdAt:t.createdAt||new Date().toISOString()}}function Ye(t){if(!Array.isArray(t))return[];const e=new Set(Et.map(i=>i.id)),a=[];return t.forEach(i=>{if(!i||typeof i!="object")return;const n=String(i.id||"").trim().slice(0,40),s=String(i.label||"").trim().slice(0,30);!n||!s||e.has(n.toLowerCase())||(e.add(n.toLowerCase()),a.push({id:n,label:s,color:String(i.color||"").slice(0,20),goals:String(i.goals||"").slice(0,1e3)}))}),a.slice(0,20)}const Ot={name:80,wantToBe:1e3,vision:1e3,values:1e3},Gt=["short","medium","long"],ut={short:["1 Week","2 Weeks","3 Weeks","4 Weeks"],medium:["1 Month","2 Months","3 Months"],long:["1 Year","2 Years","3 Years","5 Years","10+ Years"]};function j(t){return`${t||"id"}${Date.now().toString(36)}${Math.floor(Math.random()*9999)}`}function Ve(t){return Array.isArray(t)?t.map(e=>{if(typeof e=="string")return{id:j("w"),text:e.trim().slice(0,120)};if(!e||typeof e!="object")return null;const a=String(e.text||e.label||e.name||"").trim().slice(0,120);return a?{id:String(e.id||j("w")),text:a}:null}).filter(Boolean).slice(0,50):[]}function Je(t){return typeof t=="string"?t.split(`
`).map(e=>e.trim().replace(/^[-•*]\s+/,"")).filter(Boolean).slice(0,20).map(e=>({id:j("a"),title:e.slice(0,60),description:""})):Array.isArray(t)?t.map(e=>{if(typeof e=="string"){const i=e.trim().slice(0,60);return i?{id:j("a"),title:i,description:""}:null}if(!e||typeof e!="object")return null;const a=String(e.title||e.name||"").trim().slice(0,60);return a?{id:String(e.id||j("a")),title:a,description:String(e.description||"").slice(0,1e3)}:null}).filter(Boolean).slice(0,20):[]}function Qe(t){return Array.isArray(t)?t.map(e=>{if(typeof e=="string"){const o=e.trim().slice(0,200);return o?{id:j("g"),text:o,term:"short",duration:"1 Week",createdAt:new Date().toISOString()}:null}if(!e||typeof e!="object")return null;const a=String(e.text||e.title||"").trim().slice(0,200);if(!a)return null;const i=Gt.includes(e.term)?e.term:"short",n=ut[i],s=n.includes(e.duration)?e.duration:n[0];return{id:String(e.id||j("g")),text:a,term:i,duration:s,createdAt:e.createdAt||new Date().toISOString()}}).filter(Boolean).slice(0,100):[]}function Xe(t){return Array.isArray(t)?t.map(e=>{if(typeof e=="string"){const i=e.trim().slice(0,500);return i?{id:j("q"),text:i,author:"",fav:!1,createdAt:new Date().toISOString()}:null}if(!e||typeof e!="object")return null;const a=String(e.text||e.quote||"").trim().slice(0,500);return a?{id:String(e.id||j("q")),text:a,author:String(e.author||"").trim().slice(0,80),fav:!!(e.fav||e.favorite),createdAt:e.createdAt||new Date().toISOString()}:null}).filter(Boolean).slice(0,200):[]}function gt(t){const e=t&&typeof t=="object"?t:{},a={};Object.entries(Ot).forEach(([n,s])=>{n==="wantToBe"&&!e.wantToBe&&e.about?a[n]=String(e.about||"").slice(0,s):a[n]=String(e[n]||"").slice(0,s)}),a.locked=!!e.locked,a.whoAmI=Ve(e.whoAmI||e.whoIAm||[]),a.lifeAreas=Je(Array.isArray(e.lifeAreas)||typeof e.lifeAreas=="string"?e.lifeAreas:[]);let i=Qe(e.pGoals||e.goalsList||e.profileGoals||[]);return i.length||[["goalsShort","short","1 Week"],["goalsMid","medium","1 Month"],["goalsLong","long","1 Year"]].forEach(([s,o,r])=>{const d=String(e[s]||"");d.trim()&&d.split(`
`).map(c=>c.trim().replace(/^[-•*]\s+/,"")).filter(Boolean).forEach(c=>{i.length>=100||i.push({id:j("g"),text:c.slice(0,200),term:o,duration:r,createdAt:new Date().toISOString()})})}),a.pGoals=i,a.quotes=Xe(e.quotes||e.favQuotes||[]),a}function Ze(t,e){const a=String(t&&t.installedAt||"");if(/^\d{4}-\d{2}-\d{2}/.test(a))return a;const i=Object.keys(e||{}).sort();return i.length?`${i[0]}T00:00:00.000`:new Date().toISOString()}function Ke(t,e){if(!t)return!1;if(te(t,e)>0)return!0;const a=t.habitForwarded&&t.habitForwarded[e];return Array.isArray(a)&&a.length>0?!0:Array.isArray(t.tasks)&&t.tasks.some(i=>String(i&&i.forwardedHabitId||"")===String(e))}function ta(t,e){return!t||!Array.isArray(t.lockedHabits)?!1:t.lockedHabits.some(a=>String(a&&a.id||"")===String(e))}function ea(t,e,a){const i=String(t||"");for(const n of e){const s=a[n];if(Ke(s,i)||ta(s,i))return n}return""}function aa(t,e){const a=Object.keys(e).sort(),i=a[0]||"";return t.map(n=>{const s=vt(n&&n.startFrom);return s?{...n,startFrom:s}:{...n,startFrom:ea(n&&n.id,a,e)||i}})}function ia(t,e){const a=Object.keys(e).sort(),i=a[0]||"",n={};return a.forEach(s=>{const o=e[s]&&e[s].tasks;Array.isArray(o)&&o.forEach(r=>{const d=String(r&&r.sourcePinId||"");!d||n[d]||(n[d]=s)})}),t.map(s=>{const o=vt(s&&s.startFrom);if(o)return{...s,startFrom:o};const r=String(s&&s.id||"");return{...s,startFrom:n[r]||i}})}function Ee(t){H=Ye(t.customCategories||[]);const e={};Object.entries(t.days||{}).forEach(([s,o])=>{e[s]={...Jt(),habits:o.habits||{},habitRatings:o.habitRatings||{},habitMissed:o.habitMissed||{},habitForwarded:o.habitForwarded&&typeof o.habitForwarded=="object"?o.habitForwarded:{},tasks:Array.isArray(o.tasks)?o.tasks.map(de):[],note:o.note||"",locked:!!o.locked,lockOverride:o.lockOverride||(o.locked?"locked":null),submittedAt:o.submittedAt||null,lockedHabits:Array.isArray(o.lockedHabits)?o.lockedHabits:null,skippedPins:Array.isArray(o.skippedPins)?o.skippedPins.map(String).filter(r=>r.length<=60).slice(0,100):[]}});const a=aa(Array.isArray(t.habits)&&t.habits.length?t.habits:Te,e).map(s=>({...s,description:String(s.description||"").slice(0,240),category:D(s.category||ze(s.id,s.name)),consciousPoints:B(s.consciousPoints),tags:T(s.tags),pin:U(s.pin)})),i=(Array.isArray(t.archivedHabits)?t.archivedHabits:[]).filter(s=>s&&typeof s=="object"&&s.id).map(s=>Xt(s,s.archivedAt||null)).filter(s=>s.id.length<=60).slice(0,500),n=ia(Array.isArray(t.pinnedTasks)?t.pinnedTasks.map(s=>({...de(s),pin:U(s.pin)})):[],e);return{habits:a,archivedHabits:i,customCategories:H,installedAt:Ze(t,e),profile:gt(t.profile),pinnedTasks:n,days:e,goals:Array.isArray(t.goals)?t.goals.map(Bt):[],badges:Array.isArray(t.badges)?t.badges.filter(s=>s&&s.id&&s.goalId).map(s=>({id:String(s.id),goalId:String(s.goalId),title:String(s.title||""),tier:s.tier||"bronze",rewardTitle:String(s.rewardTitle||""),earnedAt:s.earnedAt||new Date().toISOString()})):[],settings:{lockTime:t.settings&&t.settings.lockTime||De.lockTime,autoLock:!t.settings||t.settings.autoLock!==!1,showConscious:!t.settings||t.settings.showConscious!==!1,habitSort:["default","points","category","tags"].includes(t.settings&&t.settings.habitSort)?t.settings.habitSort:"default",taskSort:["default","points","category","tags"].includes(t.settings&&t.settings.taskSort)?t.settings.taskSort:"default",theme:["light","dark"].includes(t.settings&&t.settings.theme)?t.settings.theme:"dark",weekStart:Rt(t.settings&&t.settings.weekStart)}}}function ce(){const t=G();return{habits:Te.map(e=>({...e,description:"",tags:[],startFrom:t})),archivedHabits:[],customCategories:[],installedAt:new Date().toISOString(),profile:gt({}),pinnedTasks:[],days:{},goals:[],badges:[],settings:{...De}}}function sa(){try{const t=localStorage.getItem(Ae)||localStorage.getItem("daily-report-v1");return t?Ee(JSON.parse(t)):ce()}catch{return ce()}}let l=sa();H=l.customCategories||[];l.customCategories=H;let Le=0,Ht={key:null,value:null},qt=0;function Zt(){return qt>0}function Q(t){qt+=1;try{return t()}finally{qt-=1}}function $(){Le+=1;try{localStorage.setItem(Ae,JSON.stringify(l))}catch{}}let le=0;function tt(t){return le+=1,`${t||"id"}${Date.now().toString(36)}${le.toString(36)}${Math.floor(Math.random()*1296).toString(36)}`}function na(t){return new Date(`${t}T00:00:00`).getDay()}function ct(t){const e=new Date(`${t}T00:00:00`);return e.setDate(e.getDate()-1),G(e)}function Kt(t,e){if(!t)return!0;if(Array.isArray(t.exceptDates)&&t.exceptDates.includes(e)||Array.isArray(t.exceptions)&&t.exceptions.includes(e))return!1;if((Array.isArray(t.customDates)?t.customDates:[]).includes(e)||t.mode==="forever")return!0;if(t.mode==="until")return!!t.until&&e<=t.until;if(t.mode==="weekly")return Array.isArray(t.weekdays)&&t.weekdays.includes(na(e));if(t.mode==="monthly"){const i=Array.isArray(t.monthDays)?t.monthDays.map(Number):[];return i.length?i.includes(Number(String(e).slice(8,10))):!0}if(t.mode==="yearly"){const i=Array.isArray(t.yearDays)?t.yearDays:[];return i.length?i.includes(String(e).slice(5,10)):!0}return t.mode!=="custom"}function ft(t){if(!t)return"Not pinned";const e=(t.exceptDates||t.exceptions||[]).length,a=e?` · ⛔ ${e} exception${e>1?"s":""}`:"",i=t.mode==="custom"?0:Array.isArray(t.customDates)?t.customDates.length:0,n=i?` +${i} custom`:"";if(t.mode==="forever")return`Pinned forever${n}${a}`;if(t.mode==="until")return`${t.until?`Pinned until ${t.until}`:"Pinned until a date"}${n}${a}`;if(t.mode==="weekly"){const s=Array.isArray(t.weekdays)?t.weekdays:[],o=nt.filter(r=>s.includes(r.value)).map(r=>r.label);return`${o.length?`Weekly: ${o.join(", ")}`:"Weekly (no days)"}${n}${a}`}if(t.mode==="monthly"){const s=Array.isArray(t.monthDays)?t.monthDays:[];return`${s.length?`Monthly: day${s.length>1?"s":""} ${[...s].sort((o,r)=>o-r).join(", ")}`:"Monthly"}${n}${a}`}if(t.mode==="yearly"){const s=Array.isArray(t.yearDays)?t.yearDays:[];return`${s.length?`Yearly: ${[...s].sort().join(", ")}`:"Yearly"}${n}${a}`}if(t.mode==="custom"){const s=Array.isArray(t.customDates)?t.customDates:[];return`${s.length?`Custom: ${s.length} date${s.length>1?"s":""}`:"Custom dates"}${a}`}return"Pinned"}function Wt(t){const[e,a]=(l.settings.lockTime||"21:00").split(":").map(Number),i=new Date(`${t}T00:00:00`);return i.setHours(e||0,a||0,0,0),i}function Ne(t){const e=l.days[t];return e?e.lockOverride==="locked"||e.locked===!0:!1}function te(t,e){return t?t.habitRatings&&t.habitRatings[e]!=null?Number(t.habitRatings[e])||0:t.habits&&t.habits[e]?5:0:0}function _t(t,e){return te(l.days[t],e)}function oa(t,e){if(!t)return!1;if(te(t,e)>0||t.habitMissed&&t.habitMissed[e])return!0;const i=t.habitForwarded&&t.habitForwarded[e];return Array.isArray(i)&&i.length>0?!0:Array.isArray(t.tasks)&&t.tasks.some(n=>String(n&&n.forwardedHabitId||"")===String(e))}function Me(t){if(!t)return[...l.habits];const e=l.habits.filter(i=>Qt(i,t)&&Kt(i.pin,t)),a=l.days[t];if(a){const i=new Set(e.map(s=>s.id)),n=s=>{!s||i.has(s.id)||oa(a,s.id)&&(i.add(s.id),e.push(s))};l.habits.forEach(n),l.archivedHabits&&l.archivedHabits.length&&l.archivedHabits.forEach(n)}return e}function ra(t){const e=l.habits.find(a=>a.id===t);return e||(l.archivedHabits||[]).find(a=>a.id===t)||null}function da(t){l.archivedHabits||(l.archivedHabits=[]),!l.archivedHabits.some(e=>e.id===t.id)&&(l.archivedHabits.push(Xt(t,new Date().toISOString())),l.archivedHabits.length>500&&l.archivedHabits.splice(0,l.archivedHabits.length-500))}function Ut(t){const e=P(t),a=Me(t);e.lockedHabits=a.map(i=>Xt(i)),e.habitMissed={},a.forEach(i=>{_t(t,i.id)<=0&&(e.habitMissed[i.id]=!0)}),e.tasks.forEach(i=>{i.missed=!i.done})}function pt(t){const e=l.days[t];return!e||e.lockOverride==="unlocked"?!1:e.lockOverride==="locked"||e.locked===!0?!0:l.settings.autoLock?Date.now()>=Wt(t).getTime():!1}function ue(t){if(Zt())return pt(t);const e=P(t);return e.lockOverride==="unlocked"?!1:e.lockOverride==="locked"||e.locked?((!Array.isArray(e.lockedHabits)||!e.habitMissed)&&Ut(t),!0):l.settings.autoLock&&Date.now()>=Wt(t).getTime()?(e.locked=!0,e.lockOverride="locked",e.submittedAt=e.submittedAt||Wt(t).toISOString(),Ut(t),$(),!0):!1}function P(t){if(!l.days[t]){const e=Jt();if(Zt())return e;l.days[t]=e}return l.days[t]}function ca(t){const e=P(t);if(Ne(t)||Zt())return e;let a=!1;const i=new Set(Array.isArray(e.skippedPins)?e.skippedPins.map(String):[]);return l.pinnedTasks.forEach(n=>{Qt(n,t)&&Kt(n.pin,t)&&(i.has(String(n.id))||e.tasks.some(s=>s.sourcePinId===n.id)||(e.tasks.push({id:`ptask-${n.id}-${t}`,title:n.title,points:n.points,description:n.description||"",category:D(n.category),tags:T(n.tags),rating:0,done:!1,missed:!1,sourcePinId:n.id,image:V(n.image)}),a=!0))}),a&&$(),e}function W(t){return!u.isLocked(t)}function pe(t){const e=Y().find(a=>a.label.toLowerCase()===String(t||"").trim().toLowerCase());return e?e.id:"mentally"}function me(t){return!t||typeof t!="object"||Array.isArray(t)?[]:Array.isArray(t.days)?t.days.filter(e=>e&&/^\d{4}-\d{2}-\d{2}$/.test(String(e.date||""))):[]}const u={todayKey:G,exportBackup(){return JSON.stringify({app:"Daily Report",kind:"full-backup",version:1,exportedAt:new Date().toISOString(),data:l},null,2)},backupKind(t){if(!t||typeof t!="object"||Array.isArray(t))return"invalid";const e=t.data&&typeof t.data=="object"&&!Array.isArray(t.data)?t.data:t;return Array.isArray(e.days)?"report-export":Array.isArray(e.categories)||Array.isArray(e.plans)||Array.isArray(e.schedule)?"wrong-app":typeof e!="object"||e===null||e.habits!==void 0&&!Array.isArray(e.habits)||e.days!==void 0&&(typeof e.days!="object"||e.days===null||Array.isArray(e.days))||e.settings!==void 0&&(typeof e.settings!="object"||e.settings===null||Array.isArray(e.settings))||!["habits","pinnedTasks","days","goals","badges","settings"].some(i=>e[i]!==void 0)?"invalid":"ok"},importBackup(t){if(this.backupKind(t)!=="ok")return!1;const e=t.data&&typeof t.data=="object"&&!Array.isArray(t.data)?t.data:t;return l=Ee(e),H=l.customCategories||[],l.customCategories=H,$(),!0},previewReport(t){const e=me(t);if(!e.length)return{days:0,start:"",end:"",newHabits:0};const a=new Set(l.habits.map(s=>String(s.name||"").trim().toLowerCase())),i=new Set;e.forEach(s=>{(Array.isArray(s.habits)?s.habits:[]).forEach(o=>{const r=String(o&&o.name||"").trim().toLowerCase();r&&!a.has(r)&&i.add(r)})});const n=e.map(s=>String(s.date)).sort();return{days:e.length,start:n[0],end:n[n.length-1],newHabits:i.size}},importReport(t){const e=me(t);if(!e.length)return!1;const a=e.map(r=>String(r.date)).sort(),i=a[a.length-1],n={};l.habits.forEach(r=>{n[String(r.name||"").trim().toLowerCase()]=r});let s=0;const o=Date.now();return e.forEach((r,d)=>{const c=String(r.date);(Array.isArray(r.habits)?r.habits:[]).forEach(m=>{const w=String(m&&m.name||"").trim().slice(0,80);if(!w)return;const y=w.toLowerCase();if(!n[y]){const v={id:`h${o}_${s}`,name:w,description:String(m&&m.description||"").slice(0,240),points:Number(m&&m.points||10)||10,icon:"star",category:pe(m&&m.category),consciousPoints:B(m&&m.consciousPoints),tags:T(m&&m.tags),pin:{mode:"until",until:i,weekdays:[],monthDays:[],yearDays:[],customDates:[],exceptDates:[]},startFrom:a[0]};l.habits.push(v),n[y]=v,s+=1}});const p=Jt();p.note=String(r.note||""),p.locked=!0,p.lockOverride="locked",p.submittedAt=null;const S=[];(Array.isArray(r.habits)?r.habits:[]).forEach(m=>{const w=n[String(m&&m.name||"").trim().toLowerCase()];if(!w)return;const y=Math.max(0,Math.min(5,Number(m&&m.rating||0)));p.habitRatings[w.id]=y,p.habits[w.id]=y>0,y<=0&&(p.habitMissed[w.id]=!0),w.startFrom&&c<w.startFrom&&(w.startFrom=c),S.push({id:w.id,name:w.name,description:w.description,points:w.points,icon:w.icon||"star",category:D(w.category),consciousPoints:B(w.consciousPoints),tags:T(w.tags),pin:U(w.pin)})}),p.lockedHabits=S,p.tasks=(Array.isArray(r.tasks)?r.tasks:[]).map((m,w)=>({id:`t${o}_${d}_${w}`,title:String(m&&m.title||"Task").slice(0,120),points:Number(m&&m.points||5)||5,description:String(m&&m.description||""),category:pe(m&&m.category),tags:T(m&&m.tags),rating:Math.max(0,Math.min(5,Number(m&&m.rating||0))),done:!!(m&&m.done),missed:!(m&&m.done),image:"",forwardedFrom:/^\d{4}-\d{2}-\d{2}$/.test(String(m&&m.forwardedFrom||""))?String(m.forwardedFrom):"",forwardedHabitId:"",forwardedTo:Array.isArray(m&&m.forwardedTo)?m.forwardedTo.filter(y=>/^\d{4}-\d{2}-\d{2}$/.test(String(y))).map(String).slice(0,50):[]})),l.days[c]=p}),$(),{days:e.length,habits:s}},getSettings(){return l.settings},setLockTime(t){l.settings.lockTime=t||"21:00",$()},setAutoLock(t){l.settings.autoLock=!!t,$()},setShowConscious(t){l.settings.showConscious=!!t,$()},consciousEnabled(){return l.settings.showConscious!==!1},setHabitSort(t){l.settings.habitSort=["default","points","category","tags"].includes(t)?t:"default",$()},setTaskSort(t){l.settings.taskSort=["default","points","category","tags"].includes(t)?t:"default",$()},getWeekStart(){return Rt(l.settings.weekStart)},setWeekStart(t){l.settings.weekStart=Rt(t),$()},getTheme(){return l.settings.theme==="light"?"light":"dark"},setTheme(t){l.settings.theme=t==="light"?"light":"dark",$()},getHabits(t,e){if(t&&Ne(t)){const s=l.days[t];if(s&&Array.isArray(s.lockedHabits)){const o=e||l.settings.habitSort||"default",r=[...s.lockedHabits];return o==="default"?r:Mt(r,o)}}const a=e||l.settings.habitSort||"default",n=Me(t).sort((s,o)=>+!!o.pin-+!!s.pin);return a==="default"?n:Mt(n,a)},getTasks(t,e){const a=this.getDay(t),i=e||l.settings.taskSort||"default";return i==="default"?a.tasks:Mt(a.tasks,i)},getAllHabits(){return l.habits},getPinnedTasks(){return l.pinnedTasks},getDay(t){return ue(t),ca(t)},isLocked(t){return ue(t)},submitDay(t){const e=P(t);e.locked=!0,e.lockOverride="locked",e.submittedAt=new Date().toISOString(),Ut(t),$(),this.checkGoals(t)},unlockDay(t){const e=P(t);e.locked=!1,e.lockOverride="unlocked",e.habitMissed={},e.lockedHabits=null,e.tasks.forEach(a=>{a.missed=!1}),$()},isHabitMissed(t,e){const a=l.days[t];return!a||!(a.locked||a.lockOverride==="locked")||!this.getHabits(t).some(i=>i.id===e)||_t(t,e)>0?!1:(a.habitMissed&&a.habitMissed[e],!0)},isTaskMissed(t,e){const a=l.days[t];if(!a)return!1;const i=(a.tasks||[]).find(n=>n.id===e);return i?i.missed===!0?!0:i.missed===!1?!1:!!(a.locked||a.lockOverride==="locked")&&!i.done:!1},missedCounts(t){return Q(()=>{const e=this.getDay(t),a=this.getHabits(t),i=pt(t);return{habits:a.filter(n=>e.habitMissed&&e.habitMissed[n.id]?!0:i&&_t(t,n.id)<=0).length,tasks:e.tasks.filter(n=>n.done?!1:n.missed===!0?!0:n.missed===!1?!1:i).length}})},lockDay(t){this.submitDay(t)},lockDays(t){let e=0;return t.forEach(a=>{this.isLocked(a)||(this.submitDay(a),e+=1)}),e},unlockDays(t){let e=0;return t.forEach(a=>{this.isLocked(a)&&(this.unlockDay(a),e+=1)}),e},lockedReports(){return Q(()=>Object.keys(l.days).sort().reverse().filter(t=>pt(t)).map(t=>({date:t,submittedAt:l.days[t].submittedAt,...this.scoreFor(t)})))},habitRating(t,e){const a=l.days[t];return a?a.habitRatings&&a.habitRatings[e]!=null?Number(a.habitRatings[e])||0:a.habits&&a.habits[e]?5:0:0},setHabitRating(t,e,a){if(!W(t))return;const i=P(t),n=Math.max(0,Math.min(5,Number(a)||0));i.habitRatings[e]=n,i.habits[e]=n>0,$(),this.checkGoals(t)},toggleHabit(t,e){if(!W(t))return;const a=this.habitRating(t,e)>0?0:5;this.setHabitRating(t,e,a)},addTask(t,e,a,i={}){if(!W(t))return;P(t).tasks.push({id:tt("t"),title:e.trim(),points:Number(a)||5,description:String(i.description||"").trim(),category:D(i.category),tags:T(i.tags),rating:Math.max(0,Math.min(5,Number(i.rating)||0)),done:!1,missed:!1,forwardedFrom:/^\d{4}-\d{2}-\d{2}$/.test(String(i.forwardedFrom||""))?String(i.forwardedFrom):"",forwardedHabitId:String(i.forwardedHabitId||""),forwardedTo:[],image:V(i.image)}),$(),this.checkGoals(t)},setTaskRating(t,e,a){if(!W(t))return;const n=P(t).tasks.find(o=>o.id===e);if(!n)return;const s=Math.max(0,Math.min(5,Number(a)||0));n.rating=s,$()},toggleTask(t,e){if(!W(t))return;const i=P(t).tasks.find(n=>n.id===e);i&&(i.done=!i.done,$(),this.checkGoals(t))},removeTask(t,e){if(!W(t))return;const a=P(t),i=a.tasks.find(s=>s.id===e);a.tasks=a.tasks.filter(s=>s.id!==e);const n=i&&i.sourcePinId?String(i.sourcePinId):"";n&&(Array.isArray(a.skippedPins)||(a.skippedPins=[]),a.skippedPins.includes(n)||a.skippedPins.push(n),a.skippedPins.length>100&&a.skippedPins.splice(0,a.skippedPins.length-100)),$()},forwardTask(t,e,a){if(!/^\d{4}-\d{2}-\d{2}$/.test(String(a||"")))return{ok:!1,reason:"Pick a valid date"};if(t===a)return{ok:!1,reason:"Already on that day"};if(!W(t))return{ok:!1,reason:"Source day is locked"};if(this.isLocked(a))return{ok:!1,reason:"Target day is locked"};const n=P(t).tasks.find(r=>r.id===e);if(!n)return{ok:!1,reason:"Task not found"};P(a).tasks.push({id:tt("t"),title:n.title,points:Number(n.points)||5,description:String(n.description||""),category:D(n.category),tags:T(n.tags),rating:0,done:!1,missed:!1,forwardedFrom:t,forwardedHabitId:String(n.forwardedHabitId||""),forwardedTo:[],image:V(n.image)});const o=Array.isArray(n.forwardedTo)?n.forwardedTo:[];return o.includes(a)||o.push(a),n.forwardedTo=o.slice(0,50),$(),this.checkGoals(a),{ok:!0}},forwardHabit(t,e,a){if(!/^\d{4}-\d{2}-\d{2}$/.test(String(a||"")))return{ok:!1,reason:"Pick a valid date"};if(t===a)return{ok:!1,reason:"Already on that day"};if(!W(t))return{ok:!1,reason:"Source day is locked"};if(this.isLocked(a))return{ok:!1,reason:"Target day is locked"};const i=l.habits.find(r=>r.id===e);if(!i)return{ok:!1,reason:"Habit not found"};P(a).tasks.push({id:tt("t"),title:i.name,points:Number(i.points)||10,description:String(i.description||""),category:D(i.category),tags:T(i.tags),rating:0,done:!1,missed:!1,forwardedFrom:t,forwardedHabitId:e,forwardedTo:[]});const s=P(t);(!s.habitForwarded||typeof s.habitForwarded!="object")&&(s.habitForwarded={});const o=Array.isArray(s.habitForwarded[e])?s.habitForwarded[e]:[];return o.includes(a)||o.push(a),s.habitForwarded[e]=o.slice(0,50),$(),this.checkGoals(a),{ok:!0}},habitForwardedTo(t,e){const a=l.days[t];if(!a||!a.habitForwarded)return[];const i=a.habitForwarded[e];return Array.isArray(i)?i:[]},setNote(t,e){W(t)&&(P(t).note=e,$())},addHabit(t,e,a={}){l.habits.push({id:tt("h"),name:t.trim(),description:String(a.description||"").trim().slice(0,240),points:Number(e)||10,icon:"star",category:D(a.category||"physically"),consciousPoints:B(a.consciousPoints),tags:T(a.tags),pin:U({mode:"forever"}),startFrom:vt(a.startFrom)||G()}),$()},updateHabit(t,e){const a=l.habits.find(i=>i.id===t);a&&(e.name!=null&&(a.name=String(e.name).trim()||a.name),e.description!=null&&(a.description=String(e.description).trim().slice(0,240)),e.points!=null&&(a.points=Number(e.points)||a.points),e.category!=null&&(a.category=D(e.category)),e.consciousPoints!=null&&(a.consciousPoints=B(e.consciousPoints)),e.tags!=null&&(a.tags=T(e.tags)),$())},updateTask(t,e,a){if(!W(t))return;const n=P(t).tasks.find(s=>s.id===e);if(n){if(a.title!=null&&(n.title=String(a.title).trim()||n.title),a.points!=null&&(n.points=Number(a.points)||n.points),a.description!=null&&(n.description=String(a.description).trim()),a.category!=null&&(n.category=D(a.category)),a.tags!=null&&(n.tags=T(a.tags)),a.image!==void 0&&(n.image=V(a.image)),a.rating!=null&&(n.rating=Math.max(0,Math.min(5,Number(a.rating)||0))),n.sourcePinId){const s=l.pinnedTasks.find(o=>o.id===n.sourcePinId);s&&(s.title=n.title,s.points=n.points,s.description=n.description,s.category=n.category,a.tags!=null&&(s.tags=T(a.tags)),a.image!==void 0&&(s.image=V(a.image)))}$()}},habitStreak(t,e){const a=ra(t);if(!a)return 0;let i=e,n=0;this.habitRating(i,t)===0&&(i=ct(i));let s=0;for(;n<400;){if(n+=1,!Qt(a,i)||!Kt(a.pin,i)){i=ct(i);continue}if(this.habitRating(i,t)>0){s+=1,i=ct(i);continue}break}return s},categoryBreakdown(t){const e=this.getDay(t),a=this.getHabits(t);return Y().map(i=>{const n=a.filter(v=>D(v.category)===i.id),s=e.tasks.filter(v=>D(v.category)===i.id),o=n.reduce((v,A)=>{const Nt=this.habitRating(t,A.id);return v+Math.round(A.points*Nt/5)},0),r=l.settings.showConscious!==!1,d=r?n.reduce((v,A)=>v+(this.habitRating(t,A.id)>0?B(A.consciousPoints):0),0):0,c=n.reduce((v,A)=>v+A.points,0),p=r?n.reduce((v,A)=>v+B(A.consciousPoints),0):0,S=s.reduce((v,A)=>v+(A.done?A.points:0),0),m=s.reduce((v,A)=>v+A.points,0),w=n.map(v=>this.habitRating(t,v.id)),y=w.length?Math.round(w.reduce((v,A)=>v+A,0)/w.length*10)/10:0;return{...i,habits:n,tasks:s,earned:o+d+S,max:c+p+m,habitAvg:y,consciousEarned:d,consciousMax:p,completed:n.filter(v=>this.habitRating(t,v.id)>0).length+s.filter(v=>v.done).length,total:n.length+s.length}})},removeHabit(t){const e=l.habits.find(a=>a.id===t);e&&da(e),l.habits=l.habits.filter(a=>a.id!==t),$()},getArchivedHabits(){return(l.archivedHabits||[]).map(t=>({...t}))},restoreHabit(t){const e=(l.archivedHabits||[]).findIndex(n=>n.id===t);if(e<0)return{ok:!1,reason:"That habit is no longer archived"};const a=l.archivedHabits[e];if(l.habits.some(n=>n.id===a.id))return l.archivedHabits.splice(e,1),$(),{ok:!0};const i={...a,description:String(a.description||"").slice(0,240),category:D(a.category),consciousPoints:B(a.consciousPoints),tags:T(a.tags),pin:U(a.pin),archivedAt:null};return l.habits.push(i),l.archivedHabits.splice(e,1),$(),{ok:!0,habit:{...i}}},pinHabit(t,e){const a=l.habits.find(i=>i.id===t);a&&(a.pin=U(e),$())},unpinHabit(t){const e=l.habits.find(a=>a.id===t);e&&(e.pin=null,$())},pinTask(t,e,a){if(!W(t))return;const n=P(t).tasks.find(r=>r.id===e);if(!n)return;const s=n.sourcePinId?l.pinnedTasks.find(r=>r.id===n.sourcePinId):null;if(s){s.pin=U(a),$();return}const o=tt("p");l.pinnedTasks.push({id:o,title:n.title,points:n.points,description:n.description||"",category:D(n.category),tags:T(n.tags),pin:U(a),startFrom:t,image:V(n.image)}),n.sourcePinId=o,$()},unpinTaskTemplate(t){l.pinnedTasks=l.pinnedTasks.filter(a=>a.id!==t);const e=String(t);Object.values(l.days).forEach(a=>{!Array.isArray(a.skippedPins)||!a.skippedPins.includes(e)||(a.skippedPins=a.skippedPins.filter(i=>i!==e))}),$()},updatePinnedTask(t,e){const a=l.pinnedTasks.find(i=>i.id===t);a&&(a.pin=U(e),$())},findHabit(t){return l.habits.find(e=>e.id===t)||null},findTask(t,e){return P(t).tasks.find(a=>a.id===e)||null},findPinnedTask(t){return l.pinnedTasks.find(e=>e.id===t)||null},getInstalledAt(){return String(l.installedAt||new Date().toISOString())},getProfile(){const t=gt(l.profile);return l.profile=t,JSON.parse(JSON.stringify(t))},setProfileField(t,e){return!Object.prototype.hasOwnProperty.call(Ot,t)||l.profile.locked?!1:((!l.profile||typeof l.profile!="object")&&(l.profile=gt({})),l.profile[t]=String(e||"").slice(0,Ot[t]),$(),!0)},setProfileLocked(t){(!l.profile||typeof l.profile!="object")&&(l.profile=gt({})),l.profile.locked=!!t,$()},isProfileLocked(){return!!(l.profile&&l.profile.locked)},profileGoalDurations(){return JSON.parse(JSON.stringify(ut))},addWhoAmI(t){if(l.profile.locked)return{ok:!1,reason:"Profile is locked"};const e=String(t||"").trim().slice(0,120);return e?(l.profile.whoAmI||[]).length>=50?{ok:!1,reason:"List is full (50)"}:(l.profile.whoAmI.push({id:j("w"),text:e}),$(),{ok:!0}):{ok:!1,reason:"Type something first"}},updateWhoAmI(t,e){if(l.profile.locked)return;const a=(l.profile.whoAmI||[]).find(n=>n.id===t);if(!a)return;const i=String(e||"").trim().slice(0,120);i?a.text=i:l.profile.whoAmI=l.profile.whoAmI.filter(n=>n.id!==t),$()},moveWhoAmI(t,e){if(l.profile.locked)return;const a=l.profile.whoAmI||[],i=a.findIndex(o=>o.id===t),n=i+e;if(i<0||n<0||n>=a.length)return;const[s]=a.splice(i,1);a.splice(n,0,s),$()},removeWhoAmI(t){l.profile.locked||(l.profile.whoAmI=(l.profile.whoAmI||[]).filter(e=>e.id!==t),$())},addLifeArea(t){if(l.profile.locked)return{ok:!1,reason:"Profile is locked"};const e=String(t||"").trim().slice(0,60);if(!e)return{ok:!1,reason:"Name the life area"};if((l.profile.lifeAreas||[]).length>=20)return{ok:!1,reason:"Max 20 areas"};const a={id:j("a"),title:e,description:""};return l.profile.lifeAreas.push(a),$(),{ok:!0,id:a.id}},updateLifeArea(t,e={}){if(l.profile.locked)return;const a=(l.profile.lifeAreas||[]).find(i=>i.id===t);a&&(e.title!=null&&(a.title=String(e.title).trim().slice(0,60)||a.title),e.description!=null&&(a.description=String(e.description).slice(0,1e3)),$())},removeLifeArea(t){l.profile.locked||(l.profile.lifeAreas=(l.profile.lifeAreas||[]).filter(e=>e.id!==t),$())},addProfileGoal(t,e,a){if(l.profile.locked)return{ok:!1,reason:"Profile is locked"};const i=String(t||"").trim().slice(0,200);if(!i)return{ok:!1,reason:"Write your goal first"};const n=Gt.includes(e)?e:"short",s=ut[n],o=s.includes(a)?a:s[0];if((l.profile.pGoals||[]).length>=100)return{ok:!1,reason:"Too many goals (100)"};const r={id:j("g"),text:i,term:n,duration:o,createdAt:new Date().toISOString()};return l.profile.pGoals.push(r),$(),{ok:!0,id:r.id}},updateProfileGoal(t,e={}){if(l.profile.locked)return;const a=(l.profile.pGoals||[]).find(i=>i.id===t);if(a){if(e.text!=null&&(a.text=String(e.text).trim().slice(0,200)||a.text),e.term!=null&&Gt.includes(e.term)){a.term=e.term;const i=ut[a.term];i.includes(a.duration)||(a.duration=i[0])}e.duration!=null&&ut[a.term].includes(e.duration)&&(a.duration=e.duration),$()}},removeProfileGoal(t){l.profile.locked||(l.profile.pGoals=(l.profile.pGoals||[]).filter(e=>e.id!==t),$())},addQuote(t,e){if(l.profile.locked)return{ok:!1,reason:"Profile is locked"};const a=String(t||"").trim().slice(0,500);if(!a)return{ok:!1,reason:"Write the quote first"};if((l.profile.quotes||[]).length>=200)return{ok:!1,reason:"Too many quotes (200)"};const i={id:j("q"),text:a,author:String(e||"").trim().slice(0,80),fav:!1,createdAt:new Date().toISOString()};return l.profile.quotes.push(i),$(),{ok:!0,id:i.id}},updateQuote(t,e={}){if(l.profile.locked)return;const a=(l.profile.quotes||[]).find(i=>i.id===t);a&&(e.text!=null&&(a.text=String(e.text).trim().slice(0,500)||a.text),e.author!=null&&(a.author=String(e.author).trim().slice(0,80)),$())},toggleQuoteFav(t){if(l.profile.locked)return;const e=(l.profile.quotes||[]).find(a=>a.id===t);e&&(e.fav=!e.fav,$())},removeQuote(t){l.profile.locked||(l.profile.quotes=(l.profile.quotes||[]).filter(e=>e.id!==t),$())},getCategories(){return Y().map(t=>({...t}))},getCustomCategories(){return H.map(t=>({...t}))},addCategory(t){const e=String(t||"").trim().slice(0,30);if(!e)return{ok:!1,reason:"Type a category name"};if(Y().some(n=>n.label.toLowerCase()===e.toLowerCase()))return{ok:!1,reason:"That category already exists"};if(H.length>=20)return{ok:!1,reason:"Too many categories (max 20 custom)"};let i=`c${Date.now().toString(36)}`;return Y().some(n=>n.id===i)&&(i=`c${Date.now().toString(36)}${Math.floor(Math.random()*99)}`),H.push({id:i,label:e}),$(),{ok:!0,id:i}},renameCategory(t,e){const a=H.find(s=>s.id===t);if(!a)return{ok:!1,reason:"Built-in categories can’t be renamed"};const i=String(e||"").trim().slice(0,30);return i?Y().some(s=>s.id!==t&&s.label.toLowerCase()===i.toLowerCase())?{ok:!1,reason:"That category already exists"}:(a.label=i,$(),{ok:!0}):{ok:!1,reason:"Type a category name"}},updateCategory(t,e={}){const a=H.find(i=>i.id===t);if(!a){const i=Et.find(n=>n.id===t);return i?(e.color!==void 0&&(i.color=String(e.color).slice(0,20)),e.goals!==void 0&&(i.goals=String(e.goals).slice(0,1e3)),$(),{ok:!0}):{ok:!1,reason:"Category not found"}}return e.color!==void 0&&(a.color=String(e.color).slice(0,20)),e.goals!==void 0&&(a.goals=String(e.goals).slice(0,1e3)),$(),{ok:!0}},deleteCategory(t){const e=H.findIndex(a=>a.id===t);return e<0?{ok:!1,reason:"Built-in categories can’t be deleted"}:(H.splice(e,1),l.habits.forEach(a=>{a.category===t&&(a.category="mentally")}),(l.archivedHabits||[]).forEach(a=>{a.category===t&&(a.category="mentally")}),l.pinnedTasks.forEach(a=>{a.category===t&&(a.category="mentally")}),Object.values(l.days).forEach(a=>{(a.tasks||[]).forEach(i=>{i.category===t&&(i.category="mentally")})}),$(),{ok:!0})},getAllTags(){const t=new Map,e=a=>{T(a).forEach(i=>{t.set(i,(t.get(i)||0)+1)})};return l.habits.forEach(a=>e(a.tags)),(l.archivedHabits||[]).forEach(a=>e(a.tags)),l.pinnedTasks.forEach(a=>e(a.tags)),Object.values(l.days).forEach(a=>{(a.tasks||[]).forEach(i=>e(i.tags))}),[...t.entries()].map(([a,i])=>({tag:a,count:i})).sort((a,i)=>i.count-a.count||a.tag.localeCompare(i.tag))},renameTag(t,e){const a=String(t||"").trim(),i=T(e)[0]||"";if(!a||!i)return{ok:!1,reason:"Type a tag name"};if(a.toLowerCase()===i.toLowerCase()){const o=r=>T((r||[]).map(d=>String(d).toLowerCase()===a.toLowerCase()?i:d));return l.habits.forEach(r=>{r.tags=o(r.tags)}),(l.archivedHabits||[]).forEach(r=>{r.tags=o(r.tags)}),l.pinnedTasks.forEach(r=>{r.tags=o(r.tags)}),Object.values(l.days).forEach(r=>{(r.tasks||[]).forEach(d=>{d.tags=o(d.tags)})}),$(),{ok:!0}}const n=this.getAllTags().some(o=>o.tag.toLowerCase()===i.toLowerCase()),s=o=>{const r=(o||[]).map(d=>String(d).toLowerCase()===a.toLowerCase()?i:d);return T(r)};return l.habits.forEach(o=>{o.tags=s(o.tags)}),(l.archivedHabits||[]).forEach(o=>{o.tags=s(o.tags)}),l.pinnedTasks.forEach(o=>{o.tags=s(o.tags)}),Object.values(l.days).forEach(o=>{(o.tasks||[]).forEach(r=>{r.tags=s(r.tags)})}),$(),{ok:!0,merged:n}},deleteTag(t){const e=String(t||"").trim().toLowerCase();if(!e)return{ok:!1,reason:"Pick a tag first"};const a=i=>(i||[]).filter(n=>String(n).toLowerCase()!==e);return l.habits.forEach(i=>{i.tags=a(i.tags)}),(l.archivedHabits||[]).forEach(i=>{i.tags=a(i.tags)}),l.pinnedTasks.forEach(i=>{i.tags=a(i.tags)}),Object.values(l.days).forEach(i=>{(i.tasks||[]).forEach(n=>{n.tags=a(n.tags)})}),$(),{ok:!0}},addTagToHabit(t,e){const a=l.habits.find(n=>n.id===t);if(!a)return{ok:!1,reason:"Pick a habit first"};const i=T(e)[0]||"";return i?(a.tags=T([...a.tags||[],i]),$(),{ok:!0}):{ok:!1,reason:"Type a tag name"}},categoryChart(t,e){const a=["week","month","year"].includes(t)?t:"week",i=`${a}|${e}|${Le}`;return Ht.key===i?Ht.value:Q(()=>this._buildCategoryChart(a,e,i))},_buildCategoryChart(t,e,a){const i=Y(),n=[];if(t==="year"){const p=String(e).slice(0,4);for(let S=0;S<12;S++){const m=String(S+1).padStart(2,"0"),w=new Date(Number(p),S+1,0).getDate();n.push({label:new Date(Number(p),S,1).toLocaleDateString(void 0,{month:"short"}),title:new Date(Number(p),S,1).toLocaleDateString(void 0,{month:"long",year:"numeric"}),keys:this.rangeKeys(`${p}-${m}-01`,`${p}-${m}-${String(w).padStart(2,"0")}`)})}}else{const[p,S]=this.resolveRange(t,e);this.rangeKeys(p,S).forEach(m=>{const w=new Date(`${m}T00:00:00`);n.push({label:t==="week"?w.toLocaleDateString(void 0,{weekday:"narrow"}):String(w.getDate()),title:m,keys:[m]})})}const s={},o={};i.forEach(p=>{s[p.id]=n.map(()=>0),o[p.id]=0}),n.forEach((p,S)=>{p.keys.forEach(m=>{this.categoryBreakdown(m).forEach(w=>{w.id in s||(s[w.id]=n.map(()=>0),o[w.id]=0),s[w.id][S]+=w.earned||0,o[w.id]+=w.earned||0})})});const r=n.map((p,S)=>i.reduce((m,w)=>m+(s[w.id]?s[w.id][S]:0),0)),d=Math.max(1,...r),c={kind:t,labels:n.map(p=>p.label),titles:n.map(p=>p.title),cats:i.map(p=>({...p})),perCat:s,totals:o,max:d,grandTotal:r.reduce((p,S)=>p+S,0)};return Ht={key:a,value:c},c},getGoals(){return l.goals},getBadges(){return[...l.badges].sort((t,e)=>{const a=re(e.tier)-re(t.tier);return a!==0?a:String(e.earnedAt).localeCompare(String(t.earnedAt))})},topBadges(t=3){return this.getBadges().slice(0,t)},addGoal(t={}){const e=Bt({...t,id:tt("g")});return l.goals.push(e),$(),this.checkGoals(G()),e},updateGoal(t,e={}){const a=l.goals.find(n=>n.id===t);if(!a)return;const i=Bt({...a,...e,id:t});Object.assign(a,i),$(),this.checkGoals(G())},removeGoal(t){l.goals=l.goals.filter(e=>e.id!==t),$()},removeBadge(t){l.badges=l.badges.filter(e=>e.id!==t),$()},perfectDaysCount(){return Q(()=>Object.keys(l.days).filter(t=>{const e=this.scoreFor(t);return e.max>0&&e.percent===100}).length)},taskStreak(t,e){let a=e,i=0;(o=>{const r=l.days[o];return!r||!Array.isArray(r.tasks)?!1:r.tasks.some(d=>d.sourcePinId===t&&d.done)})(a)||(a=ct(a));let s=0;for(;i<400;){i+=1;const o=l.days[a];if(!o||!Array.isArray(o.tasks))break;if(o.tasks.some(r=>r.sourcePinId===t&&r.done)){s+=1,a=ct(a);continue}break}return s},goalProgress(t,e){const a=e||G();if(t.kind==="habit-streak"){const n=this.habitStreak(t.targetId,a);return{current:n,target:t.targetDays,done:n>=t.targetDays}}if(t.kind==="task-streak"){const n=this.taskStreak(t.targetId,a);return{current:n,target:t.targetDays,done:n>=t.targetDays}}const i=this.perfectDaysCount();return{current:i,target:t.targetDays,done:i>=t.targetDays}},checkGoals(t){const e=t||G();let a=[];return l.goals.forEach(i=>{if(l.badges.some(s=>s.goalId===i.id))return;if(this.goalProgress(i,e).done){const s={id:tt("b"),goalId:i.id,title:i.title,tier:i.tier,rewardTitle:i.rewardTitle,earnedAt:new Date().toISOString()};l.badges.push(s),a.push(s)}}),a.length&&$(),a},scoreFor(t){return Q(()=>this._scoreFor(t))},_scoreFor(t){const e=this.getDay(t),a=this.getHabits(t),i=this.isLocked(t),n=l.settings.showConscious!==!1,s=a.reduce((v,A)=>{const Nt=this.habitRating(t,A.id);return v+Math.round(A.points*Nt/5)},0),o=n?a.reduce((v,A)=>v+(this.habitRating(t,A.id)>0?B(A.consciousPoints):0),0):0,r=e.tasks.reduce((v,A)=>v+(A.done?A.points:0),0),d=a.reduce((v,A)=>v+A.points,0),c=n?a.reduce((v,A)=>v+B(A.consciousPoints),0):0,p=e.tasks.reduce((v,A)=>v+A.points,0),S=s+o+r,m=d+c+p,w=a.filter(v=>e.habitMissed&&e.habitMissed[v.id]?!0:i&&this.habitRating(t,v.id)<=0).length,y=e.tasks.filter(v=>v.done?!1:v.missed===!0?!0:v.missed===!1?!1:i).length;return{earned:S,max:m,habitScore:s,consciousScore:o,maxConscious:c,taskScore:r,completedHabits:a.filter(v=>this.habitRating(t,v.id)>0).length,habitAvg:a.length?Math.round(a.reduce((v,A)=>v+this.habitRating(t,A.id),0)/a.length*10)/10:0,totalHabits:a.length,completedTasks:e.tasks.filter(v=>v.done).length,totalTasks:e.tasks.length,missedHabits:w,missedTasks:y,percent:m?Math.round(S/m*100):0,locked:i,submittedAt:e.submittedAt}},monthKeys(t){const e=String(t).slice(0,7);return Object.keys(l.days).filter(a=>a.startsWith(e)).sort()},rangeKeys(t,e){const a=[],i=new Date(`${t}T00:00:00`),n=new Date(`${e}T00:00:00`);let s=0;for(;i<=n&&s<732;)s+=1,a.push(G(i)),i.setDate(i.getDate()+1);return a},resolveRange(t,e){if(t==="day")return[e,e];if(t==="week"){const i=new Date(`${e}T00:00:00`),n=new Date(i);n.setDate(i.getDate()-(i.getDay()-this.getWeekStart()+7)%7);const s=new Date(n);return s.setDate(n.getDate()+6),[G(n),G(s)]}if(t==="month"){const[i,n]=e.split("-").map(Number),s=`${i}-${String(n).padStart(2,"0")}-01`,o=new Date(i,n,0).getDate(),r=`${i}-${String(n).padStart(2,"0")}-${String(o).padStart(2,"0")}`;return[s,r]}if(t==="year"){const i=e.slice(0,4);return[`${i}-01-01`,`${i}-12-31`]}const a=Object.keys(l.days).sort();return a.length?[a[0],a[a.length-1]>e?a[a.length-1]:e]:[e,e]},exportRows(t,e){return Q(()=>this._exportRows(t,e))},_exportRows(t,e){return this.rangeKeys(t,e).map(a=>{const i=this.getDay(a),n=this.getHabits(a),s=this.scoreFor(a),o=this.isLocked(a),r=(c,p)=>p>0?"done":o?"missed":"pending",d=c=>c.done?"done":o?"missed":"pending";return{date:a,earned:s.earned,max:s.max,percent:s.percent,habitScore:s.habitScore,consciousScore:s.consciousScore||0,taskScore:s.taskScore,locked:o,missedHabits:s.missedHabits||0,missedTasks:s.missedTasks||0,note:i.note||"",habits:n.map(c=>{const p=this.habitRating(a,c.id);return{name:c.name,description:String(c.description||""),category:it(D(c.category)),tags:T(c.tags),points:c.points,consciousPoints:this.consciousEnabled()?B(c.consciousPoints):0,rating:p,earned:Math.round(c.points*p/5)+(p>0&&this.consciousEnabled()?B(c.consciousPoints):0),status:r(c.id,p)}}),tasks:i.tasks.map(c=>({title:c.title,category:it(D(c.category)),tags:T(c.tags),points:c.points,rating:Math.max(0,Math.min(5,Number(c.rating)||0)),done:!!c.done,earned:c.done?c.points:0,status:c.forwardedFrom?`forwarded from ${c.forwardedFrom}`:d(c),forwardedFrom:c.forwardedFrom||"",forwardedTo:Array.isArray(c.forwardedTo)?c.forwardedTo:[],description:c.description||"",hasImage:!!c.image}))}})},history(t=14){return Q(()=>Object.keys(l.days).sort().reverse().slice(0,t).map(a=>({date:a,...this.scoreFor(a),note:l.days[a].note,locked:pt(a),submittedAt:l.days[a].submittedAt})))},week(t){return Q(()=>{const e=new Date(t);return e.setDate(e.getDate()-(e.getDay()-this.getWeekStart()+7)%7),e.setHours(0,0,0,0),Array.from({length:7},(a,i)=>{const n=new Date(e);n.setDate(e.getDate()+i);const s=G(n),o=l.days[s];return{date:s,label:n.toLocaleDateString(void 0,{weekday:"short"}),dayOfMonth:n.getDate(),hasRecord:!!o,note:String(o&&o.note||""),locked:pt(s),...this.scoreFor(s)}})})}};function He(t){return t>=90?"Excellent":t>=75?"Great day":t>=50?"Keep going":t>0?"Started":"No score yet"}function _(t){return new Date(`${t}T00:00:00`).toLocaleDateString(void 0,{weekday:"long",month:"short",day:"numeric"})}function la(t){return t?new Date(t).toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"}):""}function St(t){return t>=5?"Excellent":t>=4?"Great":t>=3?"Good":t>=2?"Fair":t>=1?"Low":"Not rated"}const It=document.getElementById("app"),Ie="daily-report-2026-09-30T20-44-11-muokpimf",ua=`v1.1 — Auto-update · Offline · Backup (${Ie.slice(-8)})`;let f=u.todayKey(),L="today",x=null,h=null,K=!1,xt=!1,ot=null,X=!1,zt=!1,Yt=null,Z="Idle.",q="week",At=null,I="month",Tt=null,N=[],J=0,E=null,C="boot",st=null;const et=new Set;let ht=!1,$t="all",z="short",rt="1 Week";window.addEventListener("beforeinstallprompt",t=>{t.preventDefault(),ot=t});window.addEventListener("appinstalled",()=>{ot=null,b("Daily Report installed"),k()});const pa=[["default","Default"],["points","Points"],["category","Category"],["tags","Tags"]];function ge(t){const e=new Date(`${f}T00:00:00`);e.setDate(e.getDate()+t),f=u.todayKey(e)}let Ft=u.todayKey();function ee(){const t=u.todayKey();if(t===Ft)return!1;const e=Ft;return Ft=t,f===e&&(f=t),At=null,Tt=null,N=[],J=0,!0}function F(t){return{home:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1z"/></svg>',profile:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-6 8-6s8 2 8 6"/></svg>',history:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 8v5l3 2"/><circle cx="12" cy="12" r="9"/></svg>',settings:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H8a1.7 1.7 0 0 0 1-1.5V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V8c.3.7.9 1.2 1.6 1.3H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1.7z"/></svg>',pin:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 4h6l-1 7 3 3v2H7v-2l3-3z" fill="currentColor" stroke="none"/><path d="M12 16v5"/></svg>',forward:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',undo:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9h11a5 5 0 0 1 0 10H8"/><path d="M8 5 4 9l4 4"/></svg>',habit:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7h16M4 12h10M4 17h13"/></svg>'}[t]}function Fe(t,e,a){return`
    <div class="stars" data-habit="${t}">
      ${[1,2,3,4,5].map(i=>`
            <button type="button" class="star ${i<=e?"on":""}" data-action="rate-habit" data-id="${t}" data-rating="${i}" ${a?"disabled":""} aria-label="${i} star">★</button>
          `).join("")}
    </div>
  `}function Re(t,e,a){return`
    <div class="stars stars-small" data-task="${t}">
      ${[1,2,3,4,5].map(i=>`
            <button type="button" class="star small ${i<=e?"on":""}" data-action="rate-task" data-id="${t}" data-rating="${i}" ${a?"disabled":""} aria-label="${i} star">★</button>
          `).join("")}
    </div>
  `}function je(t){const e=Number(t)||0;return e?`<span class="conscious-badge">🧠 +${e}</span>`:'<span class="item-meta">No conscious pts</span>'}const ma=["mentally","psychology","physically","spiritually","socially"];function bt(t){const a=u.getCategories().find(s=>s.id===t),i=a&&a.color?a.color:R(t);return`<span class="cat-badge ${ma.includes(t)?`cat-${t}`:"cat-custom"}" style="background:${i}22;color:${i};box-shadow:inset 0 0 0 1px ${i}55">${g(it(t))}</span>`}function ga(t){const e=String(t||"");if(!e)return"Deleted";const a=new Date(e);return Number.isNaN(a.getTime())?"Deleted":`Deleted ${a.toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})}`}const fe={mentally:"#5b8cff",psychology:"#a06bff",physically:"#22b07d",spiritually:"#e8a51c",socially:"#14b8a6"},he=["#f472b6","#38bdf8","#fb923c","#a3e635","#facc15","#e879f9"];function R(t,e){const i=u.getCategories().find(n=>n.id===t);return i&&i.color?i.color:fe[t]?fe[t]:he[(e??0)%he.length]}function at(t){const e=Array.isArray(t)?t.filter(Boolean):[];return e.length?`<div class="tag-row">${e.map(a=>`<span class="tag-chip">#${g(a)}</span>`).join("")}</div>`:""}function Be(t){return!t||!t.image?"":`<button type="button" class="task-img-thumb" data-action="view-task-image" data-id="${t.id}" aria-label="View attached photo"><img src="${t.image}" alt="Task photo" loading="lazy" /></button>`}function fa(t){const e=String(t||"");if(!e.trim())return"";const a=e.split(`
`),i=/^\s*(?:•|-|[*])\s+(.*)$/,n=/^\s*\d+[.)]\s+(.*)$/;let s="",o=null;const r=()=>{o&&(s+=o==="ul"?"</ul>":"</ol>",o=null)};return a.forEach(d=>{const c=i.exec(d),p=!c&&n.exec(d);c?(o!=="ul"&&(r(),s+='<ul class="note-list">',o="ul"),s+=`<li>${g(c[1])||"&nbsp;"}</li>`):p?(o!=="ol"&&(r(),s+='<ol class="note-list">',o="ol"),s+=`<li>${g(p[1])||"&nbsp;"}</li>`):d.trim()?(r(),s+=`<p class="note-text">${g(d)}</p>`):(r(),s+='<p class="note-text">&nbsp;</p>')}),r(),`<div class="note" style="margin-top:10px">${s}</div>`}function be(t){const e=document.getElementById("day-note");if(!e||e.disabled)return;const a=e.value||"",i=a.split(`
`),n=a.slice(0,e.selectionStart).split(`
`).length-1,s=a.slice(0,e.selectionEnd).split(`
`).length-1,o=e.selectionStart!==e.selectionEnd,r=o?n:0,d=o?s:i.length-1;if(t==="bullets"){const c=i.slice(r,d+1).every(p=>/^\s*(?:•|-|[*])\s+/.test(p)||!p.trim());for(let p=r;p<=d;p++)i[p].trim()&&(c?i[p]=i[p].replace(/^\s*(?:•|-|[*])\s+/,""):/^\s*(?:•|-|[*])\s+/.test(i[p])||(i[p]=`• ${i[p].replace(/^\s*/,"")}`))}else{const c=i.slice(r,d+1).every(S=>/^\s*\d+[.)]\s+/.test(S)||!S.trim());let p=1;for(let S=r;S<=d;S++){if(!i[S].trim())continue;const m=i[S].replace(/^\s*(?:\d+[.)]|•|-|[*])\s+/,"").replace(/^\s*/,"");i[S]=c?m:`${p}. ${m}`,p+=1}}e.value=i.join(`
`),u.setNote(f,e.value);try{e.focus()}catch{}}function ha(t){return new Promise(e=>{if(!t||!String(t.type||"").startsWith("image/"))return e(null);const a=URL.createObjectURL(t),i=new Image,n=()=>{try{URL.revokeObjectURL(a)}catch{}},s=(o,r)=>new Promise(d=>{let c=i.naturalWidth||0,p=i.naturalHeight||0;if(!c||!p)return d(null);const S=Math.min(1,o/Math.max(c,p));c=Math.max(1,Math.round(c*S)),p=Math.max(1,Math.round(p*S));const m=document.createElement("canvas");m.width=c,m.height=p;try{m.getContext("2d").drawImage(i,0,0,c,p),d(m.toDataURL("image/jpeg",r))}catch{d(null)}});i.onload=async()=>{try{let o=await s(900,.72);o&&o.length>kt&&(o=await s(600,.62)),o&&o.length>kt&&(o=await s(400,.55)),n(),e(o&&o.length<=kt?o:null)}catch{n(),e(null)}},i.onerror=()=>{n(),e(null)},i.src=a})}function ye(t,e){return`
    <select class="sort-select" data-sort-kind="${t}" aria-label="Sort ${t}">
      ${pa.map(([a,i])=>`<option value="${a}" ${e===a?"selected":""}>${i}</option>`).join("")}
    </select>
  `}function ba(t){const e=u.getBadges(),a=u.topBadges(3),i=t.max>0&&t.percent===100,n=xt?e:a;return`
    <section class="section rewards-section">
      <div class="section-head">
        <h2>Rewards</h2>
        ${e.length>3?`<button class="ghost-btn compact" data-action="toggle-badges">${xt?"Show less":`More (${e.length}) ›`}</button>`:""}
      </div>
      ${i?`
        <div class="trophy-card">
          <div class="trophy-cup">🏆</div>
          <div>
            <div class="item-title">Gold Cup — Perfect day!</div>
            <div class="item-meta">100% of points on ${_(f)}</div>
          </div>
        </div>
      `:""}
      ${e.length?`
        <div class="rewards-grid">
          ${n.map(s=>`
            <article class="reward-card tier-${s.tier}">
              <div class="reward-medal">${jt(s.tier)}</div>
              <div>
                <div class="item-title">${g(s.rewardTitle||s.title)}</div>
                <div class="item-meta">${g(s.title)} · ${Pe(s.tier)} · ${_((s.earnedAt||"").slice(0,10))}</div>
              </div>
            </article>
          `).join("")}
        </div>
      `:'<div class="empty">No rewards yet. Set a goal in Settings → Goals &amp; Rewards.</div>'}
    </section>
  `}function Dt(t){return`<span class="streak-badge">${t} day streak</span>`}function Oe(t){return t?`<span class="forward-badge from">↩ Forwarded from ${g(t)}</span>`:""}function Ct(t){const e=Array.isArray(t)?t.filter(Boolean):[];return e.length?`<span class="forward-badge to">↪ Forwarded to ${g(e[e.length-1])}</span>`:""}function ya(t){const e=new Date(`${t}T00:00:00`);return e.setDate(e.getDate()+1),u.todayKey(e)}function Vt(){return`<button class="ghost-btn compact ${K?"on":""}" data-action="toggle-edit">${K?"Done":"Edit Mode"}</button>`}function va(t){return t?'<span class="lock-badge">Locked</span>':'<span class="open-badge">Open</span>'}function ka(){u.checkGoals(f);const t=u.getDay(f),e=u.getSettings(),a=e.showConscious!==!1,i=u.getHabits(f),n=u.getTasks(f),s=u.scoreFor(f),o=He(s.percent),r=f===u.todayKey(),d=u.isLocked(f);return`
    <div class="topbar">
      <div>
        <p class="kicker">${r?"Today":"Daily report"}</p>
        <h1>${_(f)}</h1>
      </div>
      <div class="date-nav">
        <button class="icon-btn" data-action="prev-day" aria-label="Previous day">‹</button>
        <button class="icon-btn" data-action="next-day" aria-label="Next day">›</button>
      </div>
    </div>

    <section class="score-hero ${d?"is-locked":""}">
      <div class="score-row">
        <div>
          <div class="score-value">${s.earned}</div>
          <div class="score-unit">of ${s.max||0} points</div>
        </div>
        <div class="hero-side">
          ${va(d)}
          <div class="grade-pill">${o}</div>
        </div>
      </div>
      <div class="progress-track"><div class="progress-fill" style="width:${s.percent}%"></div></div>
      <div class="stats-grid ${a?"stats-4":"stats-3"}">
        <div class="stat"><span class="muted">Habits</span><b>${s.completedHabits}/${s.totalHabits}</b></div>
        <div class="stat"><span class="muted">Tasks</span><b>${s.completedTasks}/${s.totalTasks}</b></div>
        ${a?`<div class="stat"><span class="muted">Conscious</span><b>+${s.consciousScore||0}</b></div>`:""}
        <div class="stat"><span class="muted">Score</span><b>${s.percent}%</b></div>
      </div>
      <p class="lock-hint">
        ${d?`Submitted${t.submittedAt?` at ${la(t.submittedAt)}`:""}.${(s.missedHabits||0)+(s.missedTasks||0)>0?` ${(s.missedHabits||0)+(s.missedTasks||0)} missed (${s.missedHabits||0} habits, ${s.missedTasks||0} tasks) — unchecked items count as missed.`:" Nothing missed — all done."} Unlock in Settings to edit.`:`Auto-locks at ${e.lockTime}. Submit when the day is done. Unchecked items will count as missed once locked.`}
      </p>
      ${d?'<button class="ghost-btn full" data-action="goto-settings">Unlock in Settings</button>':'<button class="primary-btn full" data-action="submit-day">Submit and lock report</button>'}
      <div class="export-row">
        <span class="muted">Export:</span>
        <button class="ghost-btn compact" data-action="open-export">Excel / JSON / PDF</button>
      </div>
    </section>

    ${ba(s)}

    <section class="section">
      <div class="section-head">
        <h2>Habits</h2>
        <div class="head-actions">
          ${ye("habit",e.habitSort||"default")}
          ${Vt()}
          <span class="points">+${s.habitScore}${a&&s.consciousScore?` +${s.consciousScore}🧠`:""} pts</span>
        </div>
      </div>
      <div class="list">
        ${i.length?i.map(c=>{const p=u.habitRating(f,c.id),S=p>0,m=!S&&d,w=u.habitStreak(c.id,f),y=a&&Number(c.consciousPoints)||0;return`
                    <article class="item-card ${S?"done":""} ${m?"missed":""} ${d?"is-locked":""}" style="border-left:3px solid ${R(c.category)}">
                      <button class="check" data-action="toggle-habit" data-id="${c.id}" ${d?"disabled":""}>✓</button>
                      <div class="item-body">
                        <div class="item-title">${g(c.name)} ${m?'<span class="missed-badge">Missed</span>':""}</div>
                        <div class="item-meta">${bt(c.category)} ${c.pin?ft(c.pin):"Not pinned"} · ${p?`${p}/5 ${St(p)}`:d?"Missed":"Not rated"}</div>
                        ${c.description?`<p class="item-desc">${g(c.description)}</p>`:""}
                        ${a?`<div class="item-meta">${Dt(w)} ${je(y)}</div>`:`<div class="item-meta">${Dt(w)}</div>`}
                        ${Ct(u.habitForwardedTo(f,c.id))}
                        ${at(c.tags)}
                        ${Fe(c.id,p,d)}
                      </div>
                      <div class="item-side">
                        <div class="points">+${c.points}${y?` +${y}🧠`:""}</div>
                        <div class="mini-actions">
                          ${K?`<button class="mini-btn on" data-action="open-edit-habit" data-id="${c.id}" ${d?"disabled":""}>Edit</button>`:""}
                          <button class="mini-btn" data-action="open-forward-habit" data-id="${c.id}" ${d?"disabled":""} title="Forward habit to another day">${F("forward")}</button>
                          <button class="mini-btn ${c.pin?"on":""}" data-action="open-pin-habit" data-id="${c.id}" ${d?"disabled":""} title="Pin habit">${F("pin")}</button>
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
          ${ye("task",e.taskSort||"default")}
          ${Vt()}
          <span class="points">+${s.taskScore} pts</span>
        </div>
      </div>
      <div class="list">
        ${n.length?n.map(c=>{const p=!!c.sourcePinId,S=p?u.findPinnedTask(c.sourcePinId):null,m=Math.max(0,Math.min(5,Number(c.rating)||0)),w=!c.done&&d;return`
                    <article class="item-card ${c.done?"done":""} ${w?"missed":""} ${d?"is-locked":""}" style="border-left:3px solid ${R(c.category)}">
                      <button class="check" data-action="toggle-task" data-id="${c.id}" ${d?"disabled":""}>✓</button>
                      <div class="item-body">
                        <div class="item-title">${g(c.title)} ${w?'<span class="missed-badge">Missed</span>':""}</div>
                        <div class="item-meta">${bt(c.category)} ${S?ft(S.pin):"One-time task"} · ${c.done?"Done":d?"Missed":"Pending"} · ${m?`${m}/5 ${St(m)}`:"No rating"}</div>
                        ${c.description?`<p class="item-desc">${g(c.description)}</p>`:""}
                        ${Oe(c.forwardedFrom)}
                        ${Ct(c.forwardedTo)}
                        ${at(c.tags)}
                        ${c.image?'<span class="task-img-badge">📷 Photo attached</span>':""}
                        ${Be(c)}
                        ${Re(c.id,m,d)}
                      </div>
                      <div class="item-side">
                        <div class="points">+${c.points}</div>
                        <div class="mini-actions">
                          ${K?`<button class="mini-btn on" data-action="open-edit-task" data-id="${c.id}" ${d?"disabled":""}>Edit</button>`:""}
                          <button class="mini-btn" data-action="open-forward-task" data-id="${c.id}" ${d?"disabled":""} title="Forward task to another day">${F("forward")}</button>
                          <button class="mini-btn ${p?"on":""}" data-action="open-pin-task" data-id="${c.id}" ${d?"disabled":""} title="Pin task">${F("pin")}</button>
                          <button class="mini-btn" data-action="remove-task" data-id="${c.id}" ${d?"disabled":""}>✕</button>
                        </div>
                      </div>
                    </article>
                  `}).join(""):'<div class="empty">No tasks yet. Tap + to add one.</div>'}
      </div>
    </section>

    <section class="section">
      <div class="section-head"><h2>Day note</h2></div>
      ${d?"":`
        <div class="note-toolbar">
          <button type="button" class="ghost-btn compact" data-action="note-bullets" title="Bullet list (select lines or whole note)">• Bullets</button>
          <button type="button" class="ghost-btn compact" data-action="note-numbered" title="Numbered list (select lines or whole note)">1. Numbered</button>
        </div>
      `}
      <textarea id="day-note" placeholder="How did today go? Tip: use • Bullets for lists." ${d?"disabled":""}>${g(t.note)}</textarea>
    </section>
  `}function wt(t){return t==="short"?"#short":t==="medium"?"#medium":"#long"}function $a(){const t=u.getProfile(),e=!!t.locked,a=e?"disabled":"",i=Array.isArray(t.whoAmI)?t.whoAmI:[],n=Array.isArray(t.lifeAreas)?t.lifeAreas:[],s=Array.isArray(t.pGoals)?t.pGoals:[],o=Array.isArray(t.quotes)?t.quotes:[],r=u.profileGoalDurations();r[z].includes(rt)||(rt=r[z][0]);const d=y=>s.filter(v=>v.term===y).length,c=($t==="all"?s:s.filter(y=>y.term===$t)).slice().sort((y,v)=>String(y.createdAt).localeCompare(String(v.createdAt))),p=o.slice().sort((y,v)=>!!y.fav!=!!v.fav?y.fav?-1:1:String(v.createdAt).localeCompare(String(y.createdAt))),S=p.slice(0,3),m=p.slice(3),w=String(t.name||"?").trim().slice(0,1).toUpperCase()||"?";return`
    <div class="topbar">
      <div>
        <p class="kicker">Profile</p>
        <h1>${g(t.name)||"My profile"}</h1>
      </div>
      <div class="date-nav">
        ${e?'<span class="lock-badge">🔒 Locked</span>':'<span class="open-badge">Open</span>'}
        <button class="ghost-btn compact" data-action="${e?"unlock-profile":"lock-profile"}">${e?"Unlock":"Lock"}</button>
      </div>
    </div>

    ${e?'<div class="profile-lock-banner">🔒 Profile is locked — read only. Tap <b>Unlock</b> to edit.</div>':'<p class="muted tight" style="margin-bottom:14px">Everything here saves automatically on this device and is included in backups. Tap <b>Lock</b> when your profile is final.</p>'}

    <section class="score-hero profile-hero">
      <div class="profile-hero-row">
        <div class="profile-avatar">${g(w)}</div>
        <div style="flex:1;min-width:0">
          <div class="item-title" style="font-size:18px">${g(t.name)||"Your name"}</div>
          <div class="item-meta">${i.length?`${i.length} identities`:"No identities yet"} · ${n.length} life areas · ${s.length} goals · ${o.length} quotes</div>
          ${t.wantToBe?`<p class="item-desc" style="margin-top:6px">“${g(t.wantToBe.slice(0,140))}${t.wantToBe.length>140?"…":""}”</p>`:""}
        </div>
      </div>
    </section>

    <section class="manage-card" style="margin-bottom:10px">
      <h2>Identity</h2>
      <p class="muted tight">Your display name and who you want to be.</p>
      <label>Name
        <input data-profile="name" maxlength="80" value="${g(t.name)}" placeholder="Your name…" ${a} />
      </label>
      <label>Want to be
        <textarea data-profile="wantToBe" maxlength="1000" placeholder="The person I want to be…" style="min-height:76px" ${a}>${g(t.wantToBe)}</textarea>
      </label>
    </section>

    <section class="manage-card" style="margin-bottom:10px">
      <div class="section-head">
        <div>
          <h2>Who I am</h2>
          <p class="muted tight">A list — reorder with ↑ ↓.</p>
        </div>
        <span class="item-meta">${i.length}/50</span>
      </div>
      ${e?"":`
        <div style="display:flex;gap:8px;margin-bottom:10px">
          <input id="new-whoami" maxlength="120" placeholder="e.g. A disciplined father…" style="flex:1;min-width:0" />
          <button class="primary-btn compact-btn" data-action="add-whoami">Add</button>
        </div>
      `}
      <div class="habit-manage">
        ${i.length?i.map((y,v)=>`
          <article class="manage-card whoami-row">
            <span class="whoami-num">${v+1}</span>
            <input class="whoami-input" data-whoami="${y.id}" maxlength="120" value="${g(y.text)}" ${a} aria-label="Who I am ${v+1}" />
            ${e?"":`
              <div class="mini-actions">
                <button class="mini-btn" data-action="move-whoami" data-id="${y.id}" data-dir="-1" ${v===0?"disabled":""} title="Move up">↑</button>
                <button class="mini-btn" data-action="move-whoami" data-id="${y.id}" data-dir="1" ${v===i.length-1?"disabled":""} title="Move down">↓</button>
                <button class="mini-btn" data-action="remove-whoami" data-id="${y.id}" title="Remove">✕</button>
              </div>
            `}
          </article>
        `).join(""):'<div class="empty">Empty — add the roles and identities that define you.</div>'}
      </div>
    </section>

    <section class="manage-card" style="margin-bottom:10px">
      <div class="section-head">
        <div>
          <h2>Life Areas</h2>
          <p class="muted tight">Cards — tap one to open and describe it.</p>
        </div>
        <span class="item-meta">${n.length}/20</span>
      </div>
      ${e?"":`
        <div style="display:flex;gap:8px;margin-bottom:10px">
          <input id="new-lifearea" maxlength="60" placeholder="e.g. Health, Family, Career…" style="flex:1;min-width:0" />
          <button class="primary-btn compact-btn" data-action="add-lifearea">Add</button>
        </div>
      `}
      ${n.length?`
        <div class="life-grid">
          ${n.map(y=>{const v=st===y.id;return`
              <article class="life-card ${v?"open":""}">
                <button type="button" class="life-head" data-action="toggle-lifearea" data-id="${y.id}" aria-expanded="${v?"true":"false"}">
                  <b>${g(y.title)}</b>
                  <span>${v?"▾":"▸"}</span>
                </button>
                ${v?`
                  <div class="life-body">
                    ${e?y.description?`<p class="item-desc">${g(y.description)}</p>`:'<p class="item-meta">No description yet.</p>':`
                      <label>Title
                        <input data-lifearea-title="${y.id}" maxlength="60" value="${g(y.title)}" />
                      </label>
                      <label>Description
                        <textarea data-lifearea-desc="${y.id}" maxlength="1000" placeholder="What does this area mean to you? What is going well?" style="min-height:70px">${g(y.description)}</textarea>
                      </label>
                      <button class="ghost-btn compact danger" data-action="remove-lifearea" data-id="${y.id}">Remove area</button>
                    `}
                  </div>
                `:y.description?`<p class="item-desc life-preview">${g(y.description.slice(0,90))}${y.description.length>90?"…":""}</p>`:""}
              </article>
            `}).join("")}
        </div>
      `:'<div class="empty">No life areas yet — add Health, Family, Career, Faith…</div>'}
    </section>

    <div class="profile-duo">
      <section class="manage-card">
        <h2>My Vision</h2>
        <p class="muted tight">The future you are working toward.</p>
        <textarea data-profile="vision" maxlength="1000" placeholder="Describe your vision…" style="min-height:110px" ${a}>${g(t.vision)}</textarea>
      </section>
      <section class="manage-card">
        <h2>Core &amp; Personal Values</h2>
        <p class="muted tight">The principles you live by.</p>
        <textarea data-profile="values" maxlength="1000" placeholder="e.g. Honesty, Discipline, Mercy…" style="min-height:110px" ${a}>${g(t.values)}</textarea>
      </section>
    </div>

    <section class="manage-card" style="margin-bottom:10px;margin-top:10px">
      <div class="section-head">
        <div>
          <h2>Goals</h2>
          <p class="muted tight">One goal, one hashtag: <b>#short</b> = weeks · <b>#medium</b> = 1–3 months · <b>#long</b> = a year or more.</p>
        </div>
      </div>
      ${e?"":`
        <div class="form" style="margin-bottom:10px">
          <label>Goal
            <input id="new-pgoal" maxlength="200" placeholder="e.g. Read 12 books…" />
          </label>
          <div>
            <p class="item-meta">Hashtag it</p>
            <div class="chip-row">
              ${["short","medium","long"].map(y=>`<button type="button" class="chip hashtag-${y} ${z===y?"on":""}" data-action="set-pgoal-term" data-term="${y}">${wt(y)}</button>`).join("")}
            </div>
          </div>
          <div class="row-2">
            <label>Timeframe
              <select id="new-pgoal-duration">
                ${r[z].map(y=>`<option value="${g(y)}" ${rt===y?"selected":""}>${g(y)}</option>`).join("")}
              </select>
            </label>
            <label style="justify-content:flex-end">&nbsp;
              <button class="primary-btn compact-btn" data-action="add-pgoal">Add goal</button>
            </label>
          </div>
          <p class="item-meta">${z==="short"?"Short term → pick a week (1–4 weeks).":z==="medium"?"Medium term → pick a month up to 3 months.":"Long term → a year or more."}</p>
        </div>
      `}
      <div class="chip-row" style="margin-bottom:10px">
        ${[["all",`All (${s.length})`],["short",`#short (${d("short")})`],["medium",`#medium (${d("medium")})`],["long",`#long (${d("long")})`]].map(([y,v])=>`<button type="button" class="chip ${$t===y?"on":""}" data-action="set-pgoal-filter" data-filter="${y}">${v}</button>`).join("")}
      </div>
      <div class="habit-manage">
        ${c.length?c.map(y=>`
          <article class="manage-card pgoal-card term-${y.term}">
            <div class="pgoal-top">
              <span class="hashtag hashtag-${y.term}">${wt(y.term)}</span>
              <span class="duration-pill">⏳ ${g(y.duration)}</span>
              ${e?"":`<button class="mini-btn" data-action="remove-pgoal" data-id="${y.id}" title="Remove goal">✕</button>`}
            </div>
            ${e?`<div class="item-title" style="margin-top:6px">${g(y.text)}</div>`:`
                <input data-pgoal-text="${y.id}" maxlength="200" value="${g(y.text)}" style="margin-top:8px" aria-label="Goal text" />
                <div class="row-2" style="margin-top:8px">
                  <select data-pgoal-term="${y.id}" aria-label="Goal term">
                    ${["short","medium","long"].map(v=>`<option value="${v}" ${y.term===v?"selected":""}>${wt(v)}</option>`).join("")}
                  </select>
                  <select data-pgoal-duration="${y.id}" aria-label="Goal duration">
                    ${r[y.term].map(v=>`<option value="${g(v)}" ${y.duration===v?"selected":""}>${g(v)}</option>`).join("")}
                  </select>
                </div>
              `}
          </article>
        `).join(""):'<div class="empty">No goals here yet — add your first one above.</div>'}
      </div>
    </section>

    <section class="manage-card" style="margin-bottom:10px">
      <div class="section-head">
        <div>
          <h2>Quotes</h2>
          <p class="muted tight">Star your best 3 favourites — tap below to see the rest.</p>
        </div>
        <span class="item-meta">★ ${o.filter(y=>y.fav).length} · ${o.length} total</span>
      </div>
      ${e?"":`
        <div class="form" style="margin-bottom:10px">
          <label>Quote
            <textarea id="new-quote" maxlength="500" placeholder="Write a quote you live by…" style="min-height:64px"></textarea>
          </label>
          <div style="display:flex;gap:8px">
            <input id="new-quote-author" maxlength="80" placeholder="Author (optional)" style="flex:1;min-width:0" />
            <button class="primary-btn compact-btn" data-action="add-quote">Add</button>
          </div>
        </div>
      `}
      ${p.length?`
        <div class="quote-fav-head"><span class="item-title">★ Top 3 favourites</span></div>
        <div class="habit-manage" style="margin-bottom:8px">
          ${S.map(y=>ve(y,e)).join("")}
        </div>
        ${m.length?`
          <button class="ghost-btn compact full" data-action="toggle-quotes">${ht?"Show less ▴":`More (${m.length}) — see the rest ▾`}</button>
          ${ht?`<div class="habit-manage" style="margin-top:8px">${m.map(y=>ve(y,e)).join("")}</div>`:""}
        `:ht&&!m.length?'<p class="item-meta">No more quotes — that is all of them.</p>':""}
      `:'<div class="empty">No quotes yet — add the words that move you.</div>'}
    </section>
  `}function ve(t,e){return`
    <article class="manage-card quote-card ${t.fav?"is-fav":""}">
      <p class="quote-text">“${g(t.text)}”</p>
      ${t.author?`<p class="item-meta">— ${g(t.author)}</p>`:""}
      <div class="quote-foot">
        ${e?`<span class="item-meta">${t.fav?"★ Favourite":""}</span>`:`
            <button class="mini-btn ${t.fav?"on":""}" data-action="toggle-quote-fav" data-id="${t.id}" title="Toggle favourite">★</button>
            <button class="mini-btn" data-action="remove-quote" data-id="${t.id}" title="Remove quote">✕</button>
          `}
      </div>
    </article>
  `}function wa(){document.querySelectorAll("[data-profile]").forEach(t=>{t.addEventListener("input",()=>{u.setProfileField(t.dataset.profile,t.value)||k()})}),document.querySelectorAll("[data-lifearea-title]").forEach(t=>{t.addEventListener("change",()=>{u.updateLifeArea(t.dataset.lifeareaTitle,{title:t.value}),k()})}),document.querySelectorAll("[data-lifearea-desc]").forEach(t=>{t.addEventListener("input",()=>{u.updateLifeArea(t.dataset.lifeareaDesc,{description:t.value})})}),document.querySelectorAll("[data-pgoal-text]").forEach(t=>{t.addEventListener("change",()=>{u.updateProfileGoal(t.dataset.pgoalText,{text:t.value}),k()})}),document.querySelectorAll("[data-pgoal-term]").forEach(t=>{t.addEventListener("change",()=>{u.updateProfileGoal(t.dataset.pgoalTerm,{term:t.value}),k()})}),document.querySelectorAll("[data-pgoal-duration]").forEach(t=>{t.addEventListener("change",()=>{u.updateProfileGoal(t.dataset.pgoalDuration,{duration:t.value}),k()})})}function Sa(){const t=u.week(new Date(`${f}T00:00:00`)),e=t.reduce((i,n)=>i+n.earned,0),a=Math.round(e/7);return`
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
          ${t.map(i=>`
                <button class="day-cell ${i.date===f?"active":""} ${i.earned>0?"done":""}" data-action="pick-date" data-date="${i.date}">
                  <span>${i.label.slice(0,2)}</span>
                  <b>${i.earned}</b>
                  ${i.locked?'<i class="dot-lock"></i>':""}
                </button>
              `).join("")}
        </div>
      </section>
    </section>
  `}function xa(){const t=At||M(f),e=se(t),a=u.todayKey();return`
    <section class="section">
      <div class="section-head">
        <h2>Reports calendar</h2>
        <div class="date-nav">
          <button class="icon-btn" data-action="history-cal-nav" data-dir="-1" aria-label="Previous month">‹</button>
          <button class="icon-btn" data-action="history-cal-nav" data-dir="1" aria-label="Next month">›</button>
        </div>
      </div>
      <div class="pin-cal">
        <div class="pin-cal-head"><b>${Lt(t)}</b></div>
        <div class="pin-cal-grid pin-cal-week">
          ${ie().map(i=>`<span>${i.label.slice(0,1)}</span>`).join("")}
        </div>
        <div class="pin-cal-grid">
          ${e.map(i=>{if(!i)return"<span></span>";const n=u.scoreFor(i),s=i===f?"on-selected":n.percent>=100?"on-perfect":n.earned>0?"on":"",o=n.locked?'<i class="dot-lock"></i>':"";return`<button type="button" class="pin-cal-day hist-cal-day ${s} ${i===a?"is-today":""}" data-action="pick-date" data-date="${i}" title="${g(i)}: ${n.earned}/${n.max} pts (${n.percent}%)"><b>${Number(i.slice(8,10))}</b><span>${n.earned}</span>${o}</button>`}).join("")}
        </div>
      </div>
    </section>
  `}function Aa(t){const e=new Map((t||[]).map(s=>[s.date,s])),a=Tt||M(f),i=se(a),n=u.todayKey();return`
    <div class="pin-cal">
      <div class="pin-cal-head"><b>${Lt(a)}</b><span class="item-meta">${e.size} locked</span></div>
      <div class="pin-cal-grid pin-cal-week">
        ${ie().map(s=>`<span>${s.label.slice(0,1)}</span>`).join("")}
      </div>
      <div class="pin-cal-grid">
        ${i.map(s=>{if(!s)return"<span></span>";const o=e.get(s),r=!!o,d=N.includes(s)?"on-selected":r?"on-locked":"on-open",c=u.scoreFor(s),p=o?o.earned:c.earned;return`<button type="button" class="pin-cal-day hist-cal-day ${d} ${s===n?"is-today":""}" data-action="toggle-locked-day" data-date="${s}" title="${g(s)}: ${r?"Locked":"Open"} — ${p} pts"><b>${Number(s.slice(8,10))}</b><span>${p}</span></button>`}).join("")}
      </div>
    </div>
  `}function Ta(){return`
    <section class="manage-card export-card">
      <div class="section-head">
        <div>
          <div class="item-title">Select &amp; export</div>
          <div class="item-meta">Pick a day, week, month or year, then a format.</div>
        </div>
      </div>
      <div class="chip-row" style="margin-bottom:10px">
        ${["day","week","month","year"].map(t=>`<button type="button" class="chip ${I===t?"on":""}" data-action="set-histexp-range" data-range="${t}">${t[0].toUpperCase()}${t.slice(1)}</button>`).join("")}
      </div>
      ${I==="day"||I==="week"?`
        <label>Which ${I==="day"?"day":"week (pick any day in it)"}
          <input id="histexp-date" type="date" value="${f}" />
        </label>
      `:""}
      ${I==="month"?`
        <label>Which month
          <input id="histexp-month" type="month" value="${f.slice(0,7)}" />
        </label>
      `:""}
      ${I==="year"?`
        <label>Which year
          <input id="histexp-year" type="number" min="2000" max="2100" value="${f.slice(0,4)}" />
        </label>
      `:""}
      <div class="export-grid" style="margin-top:10px">
        <button class="choose-card" data-action="histexp-do" data-format="csv"><b>Excel (CSV)</b><span>Opens in Excel / Sheets</span></button>
        <button class="choose-card" data-action="histexp-do" data-format="json"><b>JSON</b><span>Raw data backup</span></button>
        <button class="choose-card" data-action="histexp-do" data-format="pdf"><b>PDF</b><span>Print / save as PDF</span></button>
      </div>
    </section>
  `}function Da(){const t=u.week(new Date(`${f}T00:00:00`)),e=u.todayKey(),a=`${_(t[0].date)} – ${_(t[6].date)}`,i=t.reduce((o,r)=>o+(r.earned||0),0),n=t.reduce((o,r)=>o+(r.max||0),0),s=t.filter(o=>o.hasRecord).length;return`
    <div class="topbar">
      <div>
        <p class="kicker">Archive</p>
        <h1>Past reports</h1>
      </div>
      <button class="ghost-btn compact" data-action="open-export">Export</button>
    </div>
    ${xa()}
    ${Sa()}
    ${Ta()}
    <section class="section">
      <div class="section-head">
        <h2>Week</h2>
        <span class="item-meta">${a}</span>
      </div>
      <p class="item-meta">${s} of 7 days reported · ${i} of ${n} pts</p>
      <div class="history-list">
        ${t.map(o=>{const r=!o.hasRecord,d=(o.missedHabits||0)+(o.missedTasks||0),c=r?"No report":`${o.locked?"Locked":"Open"} · ${He(o.percent)} · ${o.earned}/${o.max} pts (${o.percent}%)${o.locked&&d>0?` · ❌ ${d} missed`:""}`;return`
              <article class="history-card ${r?"is-empty":""} ${o.date===e?"is-today":""} ${o.date===f?"is-selected":""}">
                <div class="section-head">
                  <div>
                    <div class="item-title">${g(o.label)} ${_(o.date)}</div>
                    <div class="item-meta">${g(c)}</div>
                  </div>
                  <button class="ghost-btn compact" data-action="pick-date" data-date="${o.date}">${r?"Add":"Open"}</button>
                </div>
                <div class="bar"><span style="width:${o.percent}%"></span></div>
                ${o.note?fa(o.note):`<p class="item-meta">${r?"Nothing recorded this day.":"No note."}</p>`}
              </article>
            `}).join("")}
      </div>
    </section>
  `}function Ca(t,e){const a=new Date(`${t}T00:00:00`);return a.setDate(a.getDate()+e),u.todayKey(a)}function Pa(){return q==="month"?`${mt(M(f),J)}-15`:q==="year"?`${Number(f.slice(0,4))+J}-06-15`:Ca(f,J*7)}function Ea(t){const[e,a]=u.resolveRange(q,t);return q==="week"?`${_(e)} – ${_(a)}`:q==="month"?Lt(e.slice(0,7)):e.slice(0,4)}function La(){const t=Pa(),e=u.categoryChart(q,t),a=J===0?q==="week"?"This week":q==="month"?"This month":"This year":Ea(t),i=e.labels.map((s,o)=>{const r=e.cats.reduce((c,p)=>c+(e.perCat[p.id]?e.perCat[p.id][o]:0),0),d=e.cats.map((c,p)=>({cat:c,value:e.perCat[c.id]?e.perCat[c.id][o]:0,ci:p})).filter(c=>c.value>0).map(c=>`<span class="chart-seg" style="height:${Math.max(2,Math.round(c.value/e.max*100))}%;background:${R(c.cat.id,c.ci)}" title="${g(c.cat.label)}: ${c.value} pts"></span>`).join("");return`
      <div class="chart-col" title="${g(e.titles[o])}: ${r} pts">
        <div class="chart-bar">${d||'<span class="chart-empty"></span>'}</div>
        <span class="chart-x">${g(s)}</span>
      </div>
    `}).join(""),n=e.cats.map((s,o)=>`
      <span class="chart-legend-item"><i style="background:${R(s.id,o)}"></i>${g(s.label)} <b>${e.totals[s.id]||0}</b></span>
    `).join("");return`
    <section class="score-hero">
      <div class="section-head" style="margin-bottom:4px">
        <div>
          <div class="item-title">Progress chart</div>
          <div class="item-meta">${a} · ${e.grandTotal} pts total</div>
        </div>
      </div>
      <div class="chart-nav-row">
        <button type="button" class="mini-btn" data-action="chart-nav" data-dir="-1" aria-label="Previous ${q}">‹</button>
        <div class="chip-row">
          ${["week","month","year"].map(s=>`<button type="button" class="chip ${q===s?"on":""}" data-action="set-chart-range" data-range="${s}">${s[0].toUpperCase()}${s.slice(1)}</button>`).join("")}
        </div>
        <button type="button" class="mini-btn" data-action="chart-nav" data-dir="1" aria-label="Next ${q}">›</button>
      </div>
      <div class="chart-wrap${e.labels.length>12?" scroll-x":""}">${i}</div>
      <div class="chart-legend">${n}</div>
    </section>
  `}function Na(){u.getDay(f);const t=u.isLocked(f),e=u.consciousEnabled(),a=u.categoryBreakdown(f),i=a.reduce((s,o)=>s+o.earned,0),n=a.reduce((s,o)=>s+o.max,0);return`
    <div class="topbar">
      <div>
        <p class="kicker">Activities</p>
        <h1>By category</h1>
      </div>
      <div class="date-nav">
        ${Vt()}
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
        <div class="grade-pill">${_(f)}</div>
      </div>
      <p class="lock-hint">Habits and tasks grouped by category.</p>
    </section>
    ${La()}
    ${a.map(s=>{const o=s.max?Math.round(s.earned/s.max*100):0,r=R(s.id);return`
          <section class="section">
            <article class="manage-card cat-card cat-${s.id}" style="border-left:4px solid ${r};background:linear-gradient(180deg, ${r}14, var(--card) 60%)">
              <div class="section-head">
                <div>
                  <div class="item-title">${s.label}</div>
                  <div class="item-meta">${s.completed}/${s.total} done · rating ${s.habitAvg||0}/5</div>
                </div>
                <div class="points">${s.earned}/${s.max} pts</div>
              </div>
              <div class="bar"><span style="width:${o}%;background:${r}"></span></div>
            </article>
            <div class="list" style="margin-top:10px">
              ${s.habits.length||s.tasks.length?`
                    ${s.habits.map(d=>{const c=u.habitRating(f,d.id),p=!c&&t,S=u.habitStreak(d.id,f),m=e&&Number(d.consciousPoints)||0,w=c>0?m:0,y=Math.round(d.points*c/5)+w,v=d.points+m;return`
                           <article class="item-card ${c?"done":""} ${p?"missed":""} ${t?"is-locked":""}" style="border-left:3px solid ${R(d.category)};background:linear-gradient(180deg, ${R(d.category)}10, var(--card) 60%)">
                             <button class="check" data-action="toggle-habit" data-id="${d.id}" ${t?"disabled":""}>✓</button>
                             <div class="item-body">
                               <div class="item-title">${g(d.name)} ${p?'<span class="missed-badge">Missed</span>':""}</div>
                               <div class="item-meta">Habit · ${c?`${c}/5 ${St(c)}`:t?"Missed":"Not rated"} · ${Dt(S)}${e?` ${je(m)}`:""}</div>
                              ${d.description?`<p class="item-desc">${g(d.description)}</p>`:""}
                              ${Ct(u.habitForwardedTo(f,d.id))}
                              ${at(d.tags)}
                              ${Fe(d.id,c,t)}
                            </div>
                            <div class="item-side">
                              <div class="points">${y}/${v}</div>
                              <div class="mini-actions">
                                ${K?`<button class="mini-btn on" data-action="open-edit-habit" data-id="${d.id}" ${t?"disabled":""}>Edit</button>`:""}
                                <button class="mini-btn" data-action="open-forward-habit" data-id="${d.id}" ${t?"disabled":""} title="Forward habit to another day">${F("forward")}</button>
                              </div>
                            </div>
                          </article>
                        `}).join("")}
                    ${s.tasks.map(d=>{const c=Math.max(0,Math.min(5,Number(d.rating)||0)),p=!d.done&&t;return`
                           <article class="item-card ${d.done?"done":""} ${p?"missed":""} ${t?"is-locked":""}" style="border-left:3px solid ${R(d.category)};background:linear-gradient(180deg, ${R(d.category)}10, var(--card) 60%)">
                             <button class="check" data-action="toggle-task" data-id="${d.id}" ${t?"disabled":""}>✓</button>
                             <div class="item-body">
                               <div class="item-title">${g(d.title)} ${p?'<span class="missed-badge">Missed</span>':""}</div>
                               <div class="item-meta">Task · ${d.done?"Done":t?"Missed":"Pending"} · ${c?`${c}/5 ${St(c)}`:"No rating"}${d.description?` · ${g(d.description)}`:""}</div>
                              ${Oe(d.forwardedFrom)}
                              ${Ct(d.forwardedTo)}
                              ${at(d.tags)}
                              ${d.image?'<span class="task-img-badge">📷 Photo attached</span>':""}
                              ${Be(d)}
                              ${Re(d.id,c,t)}
                            </div>
                            <div class="item-side">
                              <div class="points">+${d.points}</div>
                              <div class="mini-actions">
                                ${K?`<button class="mini-btn on" data-action="open-edit-task" data-id="${d.id}" ${t?"disabled":""}>Edit</button>`:""}
                                <button class="mini-btn" data-action="open-forward-task" data-id="${d.id}" ${t?"disabled":""} title="Forward task to another day">${F("forward")}</button>
                              </div>
                            </div>
                          </article>
                        `}).join("")}
                  `:'<div class="empty">No activities in this category.</div>'}
            </div>
          </section>
        `}).join("")}
  `}function Pt(t){return`${t||"daily-report-backup"}-${u.todayKey()}.json`}function Ma(){const t=u.getInstalledAt(),e=String(t).slice(0,10),a=new Date(`${e}T00:00:00`),i=new Date(`${u.todayKey()}T00:00:00`),n=Number.isNaN(a.getTime())?1:Math.max(1,Math.round((i-a)/864e5)+1),s=String(Number(e.slice(8,10))).padStart(2,"0"),o=e.slice(5,7),r=e.slice(2,4),d=/^\d{4}-\d{2}-\d{2}$/.test(e)?`${s}/${o}/${r}`:e,c=Math.floor((n-1)/365)+1;return`Using Daily Report since ${d} · day ${n} · year ${c}`}function Ge(){return typeof window.showDirectoryPicker=="function"}function ae(){return new Promise((t,e)=>{const a=indexedDB.open("daily-report-pwa",1);a.onupgradeneeded=()=>a.result.createObjectStore("kv"),a.onsuccess=()=>t(a.result),a.onerror=()=>e(a.error)})}function Ha(t){return ae().then(e=>new Promise((a,i)=>{const n=e.transaction("kv","readonly").objectStore("kv").get(t);n.onsuccess=()=>a(n.result),n.onerror=()=>i(n.error)}))}function Ia(t,e){return ae().then(a=>new Promise((i,n)=>{const s=a.transaction("kv","readwrite");s.objectStore("kv").put(e,t),s.oncomplete=()=>i(),s.onerror=()=>n(s.error)}))}function Fa(t){return ae().then(e=>new Promise((a,i)=>{const n=e.transaction("kv","readwrite");n.objectStore("kv").delete(t),n.oncomplete=()=>a(),n.onerror=()=>i(n.error)}))}function Ra(){return!Ge()||typeof indexedDB>"u"?(C="unsupported",Promise.resolve()):Ha("backupDir").then(t=>{if(E=t||null,!E){C="unset";return}return E.queryPermission({mode:"readwrite"}).then(e=>{C=e==="granted"?"granted":"prompt"}).catch(()=>{C="prompt"})}).catch(()=>{E=null,C="unset"})}function ja(){return C==="unsupported"?"Folder picking needs Chrome/Edge on desktop — on phones backups download instead.":C==="unset"?"No folder chosen yet.":C==="prompt"?"Tap Choose folder to allow access again.":C==="denied"?"Access was denied — choose the folder again.":C==="granted"&&E?`Folder: ${E.name}`:"Checking…"}async function Ba(){if(!Ge()){b("Folder access needs Chrome or Edge");return}try{const t=await window.showDirectoryPicker({id:"daily-report-backup",mode:"readwrite"});await Ia("backupDir",t),E=t,C="granted",b("Backup folder set")}catch(t){t&&t.name==="AbortError"||b("Couldn't open that folder")}k()}async function Oa(){try{await Fa("backupDir")}catch{b("Couldn't remove folder");return}E=null,C="unset",b("Backup folder removed"),k()}async function Ga(){if(E){try{const t=await E.requestPermission({mode:"readwrite"});C=t==="granted"?"granted":"denied",b(t==="granted"?"Folder access granted":"Access denied")}catch{C="denied"}k()}}async function qa(){const t=u.exportBackup(),e=Pt();if(C==="granted"&&E)try{const i=await(await E.getFileHandle(e,{create:!0})).createWritable();await i.write(t),await i.close(),b("Backup saved to your folder"),qe();return}catch{}dt(e,t,"application/json"),b("Backup downloaded")}async function Wa(){if(C!=="granted"||!E)return[];const t=[];try{for await(const e of E.values())if(e&&e.kind==="file"&&/\.json$/i.test(e.name))try{const a=await e.getFile();t.push({name:e.name,modified:a.lastModified})}catch{}}catch{return t}return t.sort((e,a)=>a.modified-e.modified),t}async function qe(){const t=document.getElementById("folder-backup-list");if(!t)return;if(C!=="granted"||!E){t.innerHTML='<button class="ghost-btn compact" data-action="trigger-import">Import from a file instead</button>';return}t.innerHTML='<p class="item-meta">Loading backups…</p>';const e=await Wa();if(!document.getElementById("folder-backup-list"))return;e.length?t.innerHTML=e.map(i=>`
            <div style="display:flex;gap:8px;align-items:center;margin-bottom:6px">
              <span class="item-meta" style="flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${g(i.name)}</span>
              <button class="ghost-btn compact" data-action="restore-backup" data-name="${g(i.name)}">Restore</button>
            </div>
          `).join(""):t.innerHTML='<p class="item-meta">Folder is empty — press Export backup now to create the first backup.</p>';const a=document.createElement("div");a.innerHTML='<button class="ghost-btn compact" data-action="trigger-import">Import from a file instead</button>',t.appendChild(a)}async function _a(t){if(E)try{const a=await(await E.getFileHandle(t)).getFile();We(await a.text(),t)}catch{b("Couldn't read that backup")}}function We(t,e){let a;try{a=JSON.parse(t)}catch{b("That file isn't valid JSON.");return}const i=u.backupKind(a);if(i==="ok"){if(!window.confirm(`Replace ALL app data with "${e}"?`))return;dt(Pt("daily-report-pre-import"),u.exportBackup(),"application/json"),u.importBackup(a),b("Backup imported"),k();return}if(i==="report-export"){const n=u.previewReport(a);if(!n.days){b("That report file has no day rows to import.");return}if(!window.confirm(`Import ${n.days} day(s) (${n.start} → ${n.end}) from "${e}" as locked history?

${n.newHabits} new habit(s) will be added to your list.
Days already in the app on those dates will be overwritten.`))return;dt(Pt("daily-report-pre-import"),u.exportBackup(),"application/json");const o=u.importReport(a);if(!o){b("That file doesn't look like a valid Daily Report backup.");return}b(`Imported ${o.days} day(s)${o.habits?` + ${o.habits} new habit(s)`:""}`),k();return}if(i==="wrong-app"){b("That backup belongs to another app (e.g. Iron Log) — it can’t be imported into Daily Report.");return}b("That file doesn't look like a valid Daily Report backup.")}async function Ua(){if(!ot){b("Use the browser menu: Install / Add to Home Screen");return}try{ot.prompt();const t=await ot.userChoice;t&&t.outcome==="accepted"&&b("Installing Daily Report…")}catch{}ot=null,k()}async function za(){const t=`./version.json?v=${Date.now()}`,e=await fetch(t,{cache:"no-store"});if(!e.ok)throw new Error(`http ${e.status}`);const a=await e.json(),i=a&&(a.version||a.v)||null;if(!i)throw new Error("no version field");return String(i)}async function Ya(){X=!0,zt=!1,Z="Checking for updates… (needs internet)",k();try{if("serviceWorker"in navigator&&navigator.serviceWorker.getRegistration){const e=await navigator.serviceWorker.getRegistration().catch(()=>null);e&&e.update&&e.update().catch(()=>{})}}catch{}if(typeof fetch>"u"){X=!1,Z="This browser can’t check — but the app itself works offline. Use Export backup to protect your data.",k();return}const t=setTimeout(()=>{X&&(X=!1,Z="Couldn't reach the server — offline? The app itself works offline; updating needs internet.",k())},15e3);try{const e=await za();if(clearTimeout(t),X=!1,Yt=e,e&&e!==Ie){zt=!0,Z="Update found — updating automatically…",k(),await _e(!0);return}Z="You're on the latest version. The app works offline."}catch{clearTimeout(t),X=!1,Z="Couldn't reach the server — offline, or this file wasn't opened from the installed/hosted app. The app itself works offline; updating needs internet."}k()}function ke(t){return new Promise(e=>{if(!("serviceWorker"in navigator))return e();const a=()=>e(),i=setTimeout(()=>{try{navigator.serviceWorker.removeEventListener("controllerchange",a)}catch{}e()},t||4e3),n=()=>{clearTimeout(i);try{navigator.serviceWorker.removeEventListener("controllerchange",n)}catch{}e()};try{navigator.serviceWorker.addEventListener("controllerchange",n)}catch{e()}})}async function _e(t){var a;try{dt(Pt("daily-report-pre-update"),u.exportBackup(),"application/json")}catch{}b("Backup saved — updating app…"),Z=`Backup saved — updating${Yt?` to ${String(Yt).slice(-8)}`:""}…`,k();const e=()=>{const i=window.location.href.includes("?")?"&":"?";try{window.location.replace(`${window.location.href.split("#")[0]}${i}v=${Date.now()}#updated`)}catch{window.location.reload()}setTimeout(()=>{try{window.location.reload()}catch{}},2500)};try{if("serviceWorker"in navigator&&navigator.serviceWorker.getRegistration){const i=await navigator.serviceWorker.getRegistration().catch(()=>null);if(i){const n=i.waiting;if(n){try{n.postMessage("SKIP_WAITING")}catch{try{i.waiting.postMessage({type:"SKIP_WAITING"})}catch{}}await ke(4e3),e();return}try{await i.update()}catch{}const s=await navigator.serviceWorker.getRegistration().catch(()=>i),o=(s||i).waiting||(s||i).installing;if(o){try{o.postMessage("SKIP_WAITING")}catch{}try{(a=(s||i).waiting)==null||a.postMessage("SKIP_WAITING")}catch{}await ke(5e3),e();return}try{const r=navigator.serviceWorker.controller;r&&r.postMessage({type:"CLEAR_APP_CACHES"})}catch{}try{if(typeof caches<"u"){const r=await caches.keys().catch(()=>[]);await Promise.all(r.filter(d=>d.startsWith("daily-report-")).map(d=>caches.delete(d).catch(()=>!1)))}}catch{}try{await fetch(`./index.html?v=${Date.now()}`,{cache:"reload"})}catch{}try{await fetch(`./version.json?v=${Date.now()}`,{cache:"reload"})}catch{}try{await(s||i).unregister()}catch{}e();return}}}catch{}try{await fetch(`./index.html?v=${Date.now()}`,{cache:"reload"})}catch{}setTimeout(e,600)}function Va(){const t=u.getSettings(),e=u.getAllHabits(),a=u.getArchivedHabits(),i=u.getPinnedTasks(),n=u.lockedReports();return`
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
          ${[0,1,2,3,4,5,6].map(s=>{const o=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];return`<option value="${s}" ${u.getWeekStart()===s?"selected":""}>${o[s]}</option>`}).join("")}
        </select>
      </label>
      <p class="item-meta">Applies to the Week tab, week exports, and pin calendars.</p>
    </section>

    <section class="manage-card">
      <h2>Appearance</h2>
      <p class="muted tight">Pick Dark or Light mode. It applies everywhere, instantly.</p>
      <div class="chip-row">
        <button type="button" class="chip ${u.getTheme()==="dark"?"on":""}" data-action="set-theme" data-theme="dark">🌙 Dark</button>
        <button type="button" class="chip ${u.getTheme()==="light"?"on":""}" data-action="set-theme" data-theme="light">☀️ Light</button>
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
      <p class="item-meta">Version: ${g(ua)}</p>
      <p class="item-meta">📅 ${g(Ma())}</p>
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:8px">
        <button class="primary-btn" data-action="check-updates" ${X?"disabled":""}>${X?"Checking…":"Check for updates"}</button>
        ${zt?'<button class="primary-btn" data-action="apply-update">Restart with update</button>':""}
      </div>
      <p class="item-meta">${g(Z)}</p>
    </section>

    <section class="manage-card">
      <h2>Data backup</h2>
      <p class="muted tight">Pick a backup folder once (Chrome/Edge on desktop) and exports save straight into it. On phones, backups download to your Downloads folder instead. Import accepts full backups (<b>daily-report-backup-*.json</b>) or month/week report exports, which are added as locked history.</p>
      <p class="item-meta">${g(ja())}</p>
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:8px">
        ${C==="prompt"?'<button class="primary-btn" data-action="grant-folder">Allow access</button>':'<button class="ghost-btn compact" data-action="choose-folder">Choose folder</button>'}
        ${E?'<button class="ghost-btn compact" data-action="forget-folder">Remove</button>':""}
        <button class="primary-btn" data-action="backup-now">Export backup now</button>
        <button class="ghost-btn compact" data-action="trigger-import">Import backup</button>
      </div>
      <input type="file" id="backup-file" accept="application/json,.json" hidden />
      <div id="folder-backup-list" style="margin-top:10px"></div>
    </section>

    <section class="manage-card">
      <h2>Categories</h2>
      <p class="muted tight">Add your own categories — they appear in forms, Activities and exports. Tap a category to expand it and set its colour or add bullet-point goals.</p>
      <div class="cat-expand-row">
        <button class="mini-btn" data-action="expand-cats">Expand all</button>
        <button class="mini-btn" data-action="collapse-cats">Collapse all</button>
      </div>
      <div class="habit-manage">
        ${u.getCategories().map(s=>{const o=u.getCustomCategories().some(p=>p.id===s.id),r=s.color||R(s.id),d=s.goals||"",c=et.has(s.id);return`
              <article class="manage-card cat-manage-card ${c?"open":""}">
                <div class="cat-manage-head">
                  <button type="button" class="cat-manage-toggle" data-action="toggle-cat" data-id="${s.id}" aria-expanded="${c?"true":"false"}" aria-controls="cat-editor-${s.id}">
                    <span class="cat-chevron" aria-hidden="true">${c?"▾":"▸"}</span>
                    <i class="cat-swatch" style="background:${g(r)}"></i>
                    <span class="cat-manage-name">${g(it(s.id))}</span>
                    ${d?'<span class="cat-goal-flag">goals</span>':""}
                  </button>
                  <div class="mini-actions">
                    ${o?`<button class="mini-btn on" data-action="rename-category" data-id="${s.id}">Rename</button>`:""}
                    ${o?`<button class="mini-btn" data-action="delete-category" data-id="${s.id}">✕</button>`:""}
                  </div>
                </div>
                ${c?`
                      <div class="cat-manage-body" id="cat-editor-${s.id}">
                        <div class="cat-manage-row">
                          <label>Colour
                            <input type="color" data-cat-color="${s.id}" value="${g(r)}" aria-label="Colour for ${g(s.label||it(s.id))}" />
                          </label>
                          <div class="cat-goals-wrap">
                            <label>Goals (bullet points)
                              <textarea data-cat-goals="${s.id}" maxlength="1000" placeholder="• Goal one&#10;• Goal two&#10;• Goal three" style="min-height:80px">${g(d)}</textarea>
                            </label>
                          </div>
                        </div>
                      </div>
                    `:d?`<p class="item-meta cat-goal-preview">${g(d.split(`
`).filter(Boolean).slice(0,2).join(" · "))}${d.split(`
`).filter(Boolean).length>2?"…":""}</p>`:""}
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
        ${(()=>{const s=u.getAllTags();return s.length?s.map(({tag:o,count:r})=>`
              <article class="manage-card">
                <div class="section-head">
                  <div>
                    <div class="item-title">#${g(o)}</div>
                    <div class="item-meta">Used ${r} time${r===1?"":"s"}</div>
                  </div>
                  <div class="mini-actions">
                    <button class="mini-btn on" data-action="rename-tag" data-tag="${g(o)}">Rename</button>
                    <button class="mini-btn" data-action="delete-tag" data-tag="${g(o)}">✕</button>
                  </div>
                </div>
              </article>
            `).join(""):'<div class="empty">No tags yet — add some in a habit or task form.</div>'})()}
      </div>
      <div style="display:flex;gap:8px;margin-top:10px;flex-wrap:wrap">
        <select id="tag-habit-pick" style="flex:1;min-width:0">
          ${u.getAllHabits().map(s=>`<option value="${s.id}">${g(s.name)}</option>`).join("")}
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
        ${u.getGoals().length?u.getGoals().map(s=>{var c,p;const o=u.goalProgress(s,f),r=u.getBadges().some(S=>S.goalId===s.id),d=s.kind==="habit-streak"?((c=u.findHabit(s.targetId))==null?void 0:c.name)||"Deleted habit":s.kind==="task-streak"?((p=u.findPinnedTask(s.targetId))==null?void 0:p.title)||"Deleted task":"Any day at 100%";return`
                    <article class="manage-card goal-card ${r?"goal-earned":""}">
                      <div class="section-head">
                        <div>
                          <div class="item-title">${jt(s.tier)} ${g(s.title)}</div>
                          <div class="item-meta">${Pe(s.tier)} · “${g(s.rewardTitle)}” · ${g(d)}</div>
                          <div class="item-meta">${o.current}/${o.target} days ${r?"· Earned ✓":""}</div>
                          <div class="bar"><span style="width:${Math.min(100,Math.round(o.current/o.target*100))}%"></span></div>
                        </div>
                        <div class="mini-actions">
                          <button class="mini-btn on" data-action="open-edit-goal" data-id="${s.id}">Edit</button>
                          <button class="mini-btn" data-action="remove-goal" data-id="${s.id}">✕</button>
                        </div>
                      </div>
                    </article>
                  `}).join(""):'<div class="empty">No goals yet. Tap Add goal to create your first reward.</div>'}
      </div>
      ${u.getBadges().length?`
            <div class="section-head" style="margin-top:14px"><h2>Earned badges</h2></div>
            <div class="rewards-grid">
              ${u.getBadges().map(s=>`
                <article class="reward-card tier-${s.tier}">
                  <div class="reward-medal">${jt(s.tier)}</div>
                  <div>
                    <div class="item-title">${g(s.rewardTitle||s.title)}</div>
                    <div class="item-meta">${g(s.title)} · ${_((s.earnedAt||"").slice(0,10))}</div>
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
      <p class="muted tight">Red = locked, green = open. Tap days to select them, then lock or unlock all at once.</p>
      ${Aa(n)}
      ${N.length?`
        <div class="chip-row" style="margin-top:10px">
          ${[...N].sort().map(s=>`<button type="button" class="chip on" data-action="toggle-locked-day" data-date="${s}" title="Tap to remove">${s} ✕</button>`).join("")}
        </div>
        <div style="display:flex;gap:8px;margin-top:10px">
          <button class="primary-btn" style="flex:1" data-action="lock-selected">🔒 Lock ${N.length} day${N.length===1?"":"s"}</button>
          <button class="ghost-btn" style="flex:1" data-action="unlock-selected">🔓 Unlock ${N.length} day${N.length===1?"":"s"}</button>
        </div>
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
                    <article class="manage-card" style="${s.pin?`border-left:4px solid ${R(s.category)}`:""}">
                      <div class="section-head">
                        <div>
                          <div class="item-title">${g(s.name)}</div>
                          <div class="item-meta">${bt(s.category)} · ${s.pin?ft(s.pin):"Not pinned"} · +${s.points} pts ${t.showConscious!==!1?Number(s.consciousPoints)?`· 🧠 +${s.consciousPoints}`:"· No conscious pts":""} · ${Dt(u.habitStreak(s.id,f))}</div>
                          ${s.description?`<p class="item-desc">${g(s.description)}</p>`:""}
                          ${at(s.tags)}
                        </div>
                        <div class="mini-actions">
                          <button class="mini-btn ${s.pin?"on":""}" data-action="open-pin-habit" data-id="${s.id}">${F("pin")}</button>
                          <button class="mini-btn" data-action="remove-habit" data-id="${s.id}">✕</button>
                        </div>
                      </div>
                    </article>
                  `).join(""):'<div class="empty">No habits yet.</div>'}
      </div>
    </section>

    ${a.length?`
    <section class="section">
      <div class="section-head">
        <h2>Deleted habits</h2>
      </div>
      <p class="muted tight">Deleting a habit never erases history: days that already recorded it keep it and its points. Restore a habit to bring it back on future days.</p>
      <div class="habit-manage">
        ${a.map(s=>`
                    <article class="manage-card archived" style="border-left:4px solid ${R(s.category)}">
                      <div class="section-head">
                        <div>
                          <div class="item-title">${g(s.name)}</div>
                          <div class="item-meta">${bt(s.category)} · +${s.points} pts${s.pin?` · ${ft(s.pin)}`:" · Pin ended"} · ${ga(s.archivedAt)}</div>
                          ${s.description?`<p class="item-desc">${g(s.description)}</p>`:""}
                          ${at(s.tags)}
                        </div>
                        <div class="mini-actions">
                          <button class="mini-btn on" data-action="restore-habit" data-id="${s.id}">${F("undo")}</button>
                        </div>
                      </div>
                    </article>
                  `).join("")}
      </div>
    </section>`:""}

    <section class="section">
      <div class="section-head"><h2>Pinned tasks</h2></div>
      <p class="muted tight">Pinned tasks appear automatically on matching days.</p>
      <div class="habit-manage">
        ${i.length?i.map(s=>`
                    <article class="manage-card" style="border-left:4px solid ${R(s.category)}">
                      <div class="section-head">
                        <div>
                          <div class="item-title">${g(s.title)}</div>
                          <div class="item-meta">${bt(s.category)} · ${ft(s.pin)} · +${s.points} pts</div>
                          ${s.description?`<p class="item-desc">${g(s.description)}</p>`:""}
                          ${at(s.tags)}
                        </div>
                        <div class="mini-actions">
                          <button class="mini-btn on" data-action="open-pin-template" data-id="${s.id}">${F("pin")}</button>
                          <button class="mini-btn" data-action="unpin-template" data-id="${s.id}">✕</button>
                        </div>
                      </div>
                    </article>
                  `).join(""):'<div class="empty">Pin a task from Today to repeat it.</div>'}
      </div>
    </section>
  `}function M(t){if(/^\d{4}-\d{2}$/.test(String(t||"")))return String(t);if(/^\d{4}-\d{2}-\d{2}$/.test(String(t||"")))return String(t).slice(0,7);const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}`}function mt(t,e){const[a,i]=String(t).split("-").map(Number),n=new Date(a,(i||1)-1+e,1);return`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}`}function Lt(t){const[e,a]=String(t).split("-").map(Number);return new Date(e,(a||1)-1,1).toLocaleDateString(void 0,{month:"long",year:"numeric"})}function ie(){const t=u.getWeekStart(),e=nt.findIndex(a=>a.value===t);return e<=0?nt:[...nt.slice(e),...nt.slice(0,e)]}function se(t){const[e,a]=String(t).split("-").map(Number),n=(new Date(e,a-1,1).getDay()-u.getWeekStart()+7)%7,s=new Date(e,a,0).getDate(),o=[];for(let r=0;r<n;r++)o.push(null);for(let r=1;r<=s;r++)o.push(`${e}-${String(a).padStart(2,"0")}-${String(r).padStart(2,"0")}`);return o}function $e(t,e,a){const i=new Set(a||[]),n=se(e);return`
    <div class="pin-cal" data-cal="${t}">
      <div class="pin-cal-head">
        <button type="button" class="mini-btn" data-action="pin-cal-nav" data-target="${t}" data-dir="-1" aria-label="Previous month">‹</button>
        <b>${Lt(e)}</b>
        <button type="button" class="mini-btn" data-action="pin-cal-nav" data-target="${t}" data-dir="1" aria-label="Next month">›</button>
      </div>
      <div class="pin-cal-grid pin-cal-week">
        ${ie().map(s=>`<span>${s.label.slice(0,1)}</span>`).join("")}
      </div>
      <div class="pin-cal-grid">
        ${n.map(s=>s?`<button type="button" class="pin-cal-day ${i.has(s)?"on":""}" data-action="toggle-pin-date" data-target="${t}" data-date="${s}">${Number(s.slice(8,10))}</button>`:"<span></span>").join("")}
      </div>
    </div>
  `}function Ja(t,e){const a=(t==null?void 0:t.mode)||"forever",i=(t==null?void 0:t.until)||"",n=((t==null?void 0:t.weekdays)||[]).map(Number),s=((t==null?void 0:t.monthDays)||[]).map(Number),o=Array.isArray(t==null?void 0:t.yearDays)?[...t.yearDays].sort():[],r=Array.isArray(t==null?void 0:t.customDates)?[...t.customDates].sort():[],d=Array.isArray(t==null?void 0:t.exceptDates)?[...t.exceptDates].sort():Array.isArray(t==null?void 0:t.exceptions)?[...t.exceptions].sort():[],c=e&&e._exceptCal||M(f),p=e&&e._customCal||M(f),S=e&&e._yearMonth||"01";return`
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
        ${nt.map(m=>`
            <button type="button" class="chip weekday ${n.includes(m.value)?"on":""}" data-action="toggle-weekday" data-day="${m.value}">
              ${m.label}
            </button>
          `).join("")}
      </div>
    </div>
    <div class="pin-monthdays" style="${a==="monthly"?"":"display:none"}">
      <p class="item-meta">Repeat every month on day</p>
      <div class="chip-row">
        ${Array.from({length:31},(m,w)=>w+1).map(m=>`<button type="button" class="chip monthday ${s.includes(m)?"on":""}" data-action="toggle-monthday" data-day="${m}">${m}</button>`).join("")}
      </div>
    </div>
    <div class="pin-yeardays" style="${a==="yearly"?"":"display:none"}">
      <p class="item-meta">Repeat every year on (month + day)</p>
      <div class="row-2">
        <label>Month
          <select id="year-month-select">
            ${Array.from({length:12},(m,w)=>w+1).map(m=>`<option value="${String(m).padStart(2,"0")}" ${S===String(m).padStart(2,"0")?"selected":""}>${new Date(2e3,m-1,1).toLocaleDateString(void 0,{month:"long"})}</option>`).join("")}
          </select>
        </label>
        <label>Day
          <select id="year-day-select">
            ${Array.from({length:31},(m,w)=>w+1).map(m=>`<option value="${String(m).padStart(2,"0")}">${m}</option>`).join("")}
          </select>
        </label>
      </div>
      <button type="button" class="ghost-btn compact" data-action="add-year-day" style="margin-top:8px">Add yearly date</button>
      <div class="chip-row" style="margin-top:8px">
        ${o.length?o.map(m=>`<button type="button" class="chip on" data-action="remove-year-day" data-date="${m}" title="Tap to remove">${m} ✕</button>`).join(""):'<span class="item-meta">No yearly dates yet.</span>'}
      </div>
    </div>
    <div class="pin-customdays" style="margin-top:4px">
      <p class="item-meta"><b style="color:var(--text)">Extra custom dates</b> — also show on these days. Combines with Weekly / Monthly / Yearly; pick the <b style="color:var(--text)">Custom</b> mode to show <i>only</i> on these days. Tap days on the calendar.</p>
      ${$e("custom",p,r)}
      <div class="chip-row" style="margin-top:8px">
        ${r.length?r.map(m=>`<button type="button" class="chip on" data-action="toggle-pin-date" data-target="custom" data-date="${m}" title="Tap to remove">${m} ✕</button>`).join(""):'<span class="item-meta">No extra custom dates.</span>'}
      </div>
    </div>
    <div class="pin-exceptions" style="margin-top:4px">
      <p class="item-meta"><b style="color:var(--text)">Exceptions</b> — skip these days (tap days on the calendar). Applies to every repeat mode.</p>
      ${$e("except",c,d)}
      <div class="chip-row" style="margin-top:8px">
        ${d.length?d.map(m=>`<button type="button" class="chip on" data-action="toggle-pin-date" data-target="except" data-date="${m}" title="Tap to remove">${m} ✕</button>`).join(""):'<span class="item-meta">No exceptions.</span>'}
      </div>
    </div>
  `}function Qa(){if(!x)return"";if(x==="choose")return`
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
    `;if(x==="habit"||x==="task"||x==="edit-habit"||x==="edit-task"){const t=x==="habit"||x==="edit-habit",e=x.startsWith("edit-"),a=h||{},i=a.category||(t?"physically":"mentally"),n=Math.max(0,Math.min(5,Number(a.rating)||0)),s=Array.isArray(a.tags)?a.tags.join(", "):a.tags||"",o=a.consciousPoints!=null?Number(a.consciousPoints):a.conscious!=null?Number(a.conscious):0;return`
      <div class="modal-backdrop open" data-action="close-modal">
        <form class="sheet" data-form="${x}" data-id="${a.id||""}">
          <div class="handle"></div>
          <h2>${e?"Edit":"New"} ${t?"habit":"task"}</h2>
          <div class="form" style="margin-top:14px">
            <label>
              ${t?"Habit name":"Task name"}
              <input name="title" required maxlength="60" value="${g(a.title||a.name||"")}" placeholder="${t?"Meditate":"Finish report"}" />
            </label>
            ${t?`
                  <label>
                    Description (optional)
                    <textarea name="description" maxlength="240" placeholder="Why this habit matters, extra notes...">${g(a.description||"")}</textarea>
                  </label>
                `:`
                  <label>
                    Description (optional)
                    <textarea name="description" maxlength="240" placeholder="Why this matters, extra notes...">${g(a.description||"")}</textarea>
                  </label>
                  <div>
                    <p class="item-meta">Rating (optional, info only — does not change points)</p>
                    <div class="chip-row rating-row">
                      <button type="button" class="chip ${n===0?"on":""}" data-action="set-rating" data-rating="0">No rating</button>
                      ${[1,2,3,4,5].map(r=>`
                            <button type="button" class="chip ${n===r?"on":""}" data-action="set-rating" data-rating="${r}">${r}★</button>
                          `).join("")}
                    </div>
                    <input type="hidden" name="rating" value="${n}" />
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
                ${u.getCategories().map(r=>`
                    <button type="button" class="chip ${i===r.id?"on":""}" data-action="set-category" data-category="${r.id}">${g(r.label)}</button>
                  `).join("")}
              </div>
              <input type="hidden" name="category" value="${i}" />
            </div>
            <label>
              Tags (optional, comma separated)
              <input name="tags" maxlength="120" value="${g(s)}" placeholder="morning, health" />
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
    `}if(x==="export"){const t=h&&h.range||"day";return`
      <div class="modal-backdrop open" data-action="close-modal">
        <div class="sheet">
          <div class="handle"></div>
          <h2>Export report</h2>
          <p class="muted tight">Date: ${_(f)}. Pick a range, then a format.</p>
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
    `}if(x==="goal"||x==="edit-goal"){const t=x==="edit-goal",e=h||{},a=e.kind||"habit-streak",i=u.getAllHabits(),n=u.getPinnedTasks(),s=e.targetId||"";return`
      <div class="modal-backdrop open" data-action="close-modal">
        <form class="sheet" data-form="${x}" data-id="${e.id||""}">
          <div class="handle"></div>
          <h2>${t?"Edit":"New"} goal</h2>
          <div class="form" style="margin-top:14px">
            <label>
              Goal title
              <input name="title" required maxlength="60" value="${g(e.title||"")}" placeholder="Exercise every day" />
            </label>
            <div>
              <p class="item-meta">Goal type</p>
              <div class="chip-row goal-kind-row">
                ${Ce.map(o=>`<button type="button" class="chip ${a===o.id?"on":""}" data-action="set-goal-kind" data-kind="${o.id}">${o.label}</button>`).join("")}
              </div>
              <input type="hidden" name="kind" value="${a}" />
            </div>
            <label class="goal-target-habit" style="${a==="habit-streak"?"":"display:none"}">
              Habit
              <select name="habitTarget">
                ${i.map(o=>`<option value="${o.id}" ${s===o.id?"selected":""}>${g(o.name)}</option>`).join("")}
              </select>
            </label>
            <label class="goal-target-task" style="${a==="task-streak"?"":"display:none"}">
              Pinned task
              <select name="taskTarget">
                ${n.length?n.map(o=>`<option value="${o.id}" ${s===o.id?"selected":""}>${g(o.title)}</option>`).join(""):'<option value="">No pinned tasks yet</option>'}
              </select>
            </label>
            <label>
              Number of days
              <input name="targetDays" type="number" min="1" max="365" value="${e.targetDays||7}" />
            </label>
            <div>
              <p class="item-meta">Badge</p>
              <div class="chip-row goal-tier-row">
                ${yt.map(o=>`<button type="button" class="chip ${(e.tier||"bronze")===o.id?"on":""}" data-action="set-goal-tier" data-tier="${o.id}">${o.medal} ${o.label}</button>`).join("")}
              </div>
              <input type="hidden" name="tier" value="${e.tier||"bronze"}" />
            </div>
            <label>
              Reward title (yours)
              <input name="rewardTitle" required maxlength="60" value="${g(e.rewardTitle||"")}" placeholder="Champion" />
            </label>
            <button class="primary-btn" type="submit">Save goal</button>
            <button class="ghost-btn" type="button" data-action="close-modal">Cancel</button>
          </div>
        </form>
      </div>
    `}if(x==="pin"){const{kind:t,id:e,title:a,pin:i}=h||{};return`
      <div class="modal-backdrop open" data-action="close-modal">
        <form class="sheet sheet-wide" data-form="pin" data-kind="${t}" data-id="${e}">
          <div class="handle"></div>
          <h2>Pin ${t==="habit"?"habit":"task"}</h2>
          <p class="muted tight">${g(a||"")}</p>
          <div class="form" style="margin-top:14px">
            ${Ja(i,h)}
            <button class="primary-btn" type="submit">Save pin</button>
            ${i?'<button class="ghost-btn danger" type="button" data-action="clear-pin">Unpin</button>':""}
            <button class="ghost-btn" type="button" data-action="close-modal">Cancel</button>
          </div>
        </form>
      </div>
    `}if(x==="forward"){const{kind:t,id:e,title:a,from:i}=h||{},n=t==="habit";return`
      <div class="modal-backdrop open" data-action="close-modal">
        <form class="sheet" data-form="forward" data-kind="${t}" data-id="${e}">
          <div class="handle"></div>
          <h2>Forward ${n?"habit":"task"}</h2>
          <p class="muted tight">${g(a||"")}</p>
          <p class="item-meta">From ${g(i||f)} — a copy will be created on the day you pick, marked “↩ Forwarded from ${g(i||f)}”.</p>
          <div class="form" style="margin-top:14px">
            <label>
              Forward to day
              <input name="targetDate" type="date" required value="${ya(i||f)}" />
            </label>
            <button class="primary-btn" type="submit">Forward ${n?"habit":"task"} →</button>
            <button class="ghost-btn" type="button" data-action="close-modal">Cancel</button>
          </div>
        </form>
      </div>
    `}if(x==="image"){const{image:t,title:e}=h||{};return t?`
      <div class="lightbox-backdrop" data-action="close-modal">
        <img src="${t}" alt="${g(e||"Task photo")}" />
        <button type="button" class="ghost-btn compact lightbox-close" data-action="close-modal">✕ Close</button>
      </div>
    `:""}return""}function k(){if(It){ee();try{const t=u.isLocked(f);It.innerHTML=`
    <div class="app-shell">
      <main class="screen active">
        ${L==="today"?ka():""}
        ${L==="profile"?$a():""}
        ${L==="history"?Da():""}
        ${L==="habits"?Na():""}
        ${L==="settings"?Va():""}
      </main>
      ${["today","habits"].includes(L)&&!t?'<button class="fab" data-action="open-add" aria-label="Add">+</button>':""}
      ${L==="settings"?'<button class="fab" data-action="open-add-habit" aria-label="Add habit">+</button>':""}
      <nav class="tabbar tabs-5">
        <button class="tab ${L==="today"?"active":""}" data-screen="today">${F("home")}Today</button>
        <button class="tab ${L==="profile"?"active":""}" data-screen="profile">${F("profile")}Profile</button>
        <button class="tab ${L==="history"?"active":""}" data-screen="history">${F("history")}History</button>
        <button class="tab ${L==="habits"?"active":""}" data-screen="habits">${F("habit")}Activities</button>
        <button class="tab ${L==="settings"?"active":""}" data-screen="settings">${F("settings")}Settings</button>
      </nav>
    </div>
    ${Qa()}
    <div class="toast" id="toast"></div>
  `,Za(),wa(),Ka(),qe(),Xa()}catch(t){const e=t&&t.stack?String(t.stack).slice(0,400):t&&t.message?t.message:"Unknown error";It.innerHTML=`<div class="app-shell"><section class="manage-card"><h2>Could not load (Error B)</h2><p class="muted tight">${g(e)}</p><button class="primary-btn full" data-action="reload-app">Reload</button></section></div>`}}}function Xa(){if(x!=="habit"&&x!=="task")return;const t=document.querySelector(".sheet");t&&(t.scrollTop=0);const e=document.querySelector('.sheet input[name="title"]');if(e)try{e.focus({preventScroll:!0})}catch{try{e.focus()}catch{}}}function Za(){const t=document.getElementById("day-note");t&&t.addEventListener("input",()=>{u.isLocked(f)||u.setNote(f,t.value)})}function Ka(){const t=document.getElementById("lock-time"),e=document.getElementById("auto-lock");t&&t.addEventListener("change",()=>{u.setLockTime(t.value),b(`Lock time set to ${t.value}`),k()}),e&&e.addEventListener("change",()=>{u.setAutoLock(e.checked),b(e.checked?"Auto-lock on":"Auto-lock off"),k()}),document.querySelectorAll("[data-cat-color]").forEach(i=>{i.addEventListener("input",()=>{var s;u.updateCategory(i.dataset.catColor,{color:i.value});const n=(s=i.closest(".cat-manage-card"))==null?void 0:s.querySelector(".cat-swatch");n&&(n.style.background=i.value)})}),document.querySelectorAll("[data-cat-goals]").forEach(i=>{i.addEventListener("input",()=>{u.updateCategory(i.dataset.catGoals,{goals:i.value});const n=i.closest(".cat-manage-card"),s=n==null?void 0:n.querySelector(".cat-goal-flag");s&&(i.value.trim()?s.textContent="goals":s.remove())})});const a=document.getElementById("backup-file");a&&a.addEventListener("change",()=>{const i=a.files[0];if(!i)return;const n=new FileReader;n.onload=()=>{We(String(n.result||""),i.name),a.value=""},n.onerror=()=>{b("Couldn't read that file."),a.value=""},n.readAsText(i)})}function b(t){const e=document.getElementById("toast");e&&(e.textContent=t,e.classList.add("show"),setTimeout(()=>e.classList.remove("show"),1800))}function Ue(){const t=u.getTheme();document.documentElement.dataset.theme=t;const e=document.querySelector('meta[name="theme-color"]');e&&(e.content=t==="light"?"#f3f1ea":"#0e1116")}function g(t){return String(t||"").split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;").split('"').join("&quot;")}function O(){return u.isLocked(f)?(b("This report is locked. Unlock it in Settings."),!0):!1}function ne(t){return{mode:(t==null?void 0:t.mode)||"forever",until:(t==null?void 0:t.until)||"",weekdays:Array.isArray(t==null?void 0:t.weekdays)?t.weekdays.map(Number):[],monthDays:Array.isArray(t==null?void 0:t.monthDays)?t.monthDays.map(Number):[],yearDays:Array.isArray(t==null?void 0:t.yearDays)?[...t.yearDays]:[],customDates:Array.isArray(t==null?void 0:t.customDates)?[...t.customDates]:[],exceptDates:Array.isArray(t==null?void 0:t.exceptDates)?[...t.exceptDates]:Array.isArray(t==null?void 0:t.exceptions)?[...t.exceptions]:[]}}function ti(t){const e=u.findHabit(t);e&&(x="pin",h={kind:"habit",id:t,title:e.name,pin:e.pin?ne(e.pin):{mode:"forever",until:"",weekdays:[],monthDays:[],yearDays:[],customDates:[],exceptDates:[]},_exceptCal:M(f),_customCal:M(f),_yearMonth:"01"})}function ei(t){const e=u.findTask(f,t);if(!e)return;const a=e.sourcePinId?u.findPinnedTask(e.sourcePinId):null;x="pin",h={kind:"task",id:t,title:e.title,pin:a!=null&&a.pin?ne(a.pin):{mode:"forever",until:"",weekdays:[],monthDays:[],yearDays:[],customDates:[],exceptDates:[]},_exceptCal:M(f),_customCal:M(f),_yearMonth:"01"}}function ai(t){const e=u.findPinnedTask(t);e&&(x="pin",h={kind:"template",id:t,title:e.title,pin:e.pin?ne(e.pin):{mode:"forever",until:"",weekdays:[],monthDays:[],yearDays:[],customDates:[],exceptDates:[]},_exceptCal:M(f),_customCal:M(f),_yearMonth:"01"})}function ii(t){var c;const e=t.querySelector('input[name="mode"]').value,a=((c=t.querySelector('input[name="until"]'))==null?void 0:c.value)||"",i=[...t.querySelectorAll(".weekday.on")].map(p=>Number(p.dataset.day)),n=[...t.querySelectorAll(".monthday.on")].map(p=>Number(p.dataset.day)),s=h&&h.pin||{},o=Array.isArray(s.yearDays)?s.yearDays:[],r=Array.isArray(s.customDates)?s.customDates:[],d=Array.isArray(s.exceptDates)?s.exceptDates:[];return e==="until"&&!a?(b("Pick an until date"),null):e==="weekly"&&!i.length?(b("Pick at least one weekday"),null):e==="monthly"&&!n.length?(b("Pick at least one day of month"),null):e==="yearly"&&!o.length?(b("Add at least one yearly date"),null):e==="custom"&&!r.length?(b("Pick at least one custom date"),null):{mode:e,until:a,weekdays:i,monthDays:n,yearDays:o,customDates:r,exceptDates:d}}function dt(t,e,a){const i=e instanceof Blob?e:new Blob([e],{type:a||"text/plain;charset=utf-8"}),n=URL.createObjectURL(i),s=document.createElement("a");s.href=n,s.download=t,document.body.appendChild(s),s.click(),setTimeout(()=>{document.body.removeChild(s),URL.revokeObjectURL(n)},500)}function lt(t){const e=String(t??"");return/[",\n]/.test(e)?`"${e.replace(/"/g,'""')}"`:e}function oe(t,e){const[a,i]=u.resolveRange(t,e||f);return{range:t,start:a,end:i,rows:u.exportRows(a,i)}}function we(t,e){const a=t||h&&h.range||"day",{start:i,end:n,rows:s}=oe(a,e),o=[];o.push(["Daily Report export",`${i} to ${n}`].map(lt).join(",")),o.push(["Date","Type","Name","Category","Tags","Points","Rating","Earned","ConsciousPts","Status","Note/Description"].map(lt).join(",")),s.forEach(r=>{r.habits.forEach(d=>{o.push([r.date,"Habit",d.name,d.category,(d.tags||[]).join("|"),d.points,d.rating,d.earned,d.consciousPoints,d.status||(d.rating>0?"done":r.locked?"missed":"pending"),d.description||""].map(lt).join(","))}),r.tasks.forEach(d=>{o.push([r.date,"Task",d.hasImage?`${d.title} [photo]`:d.title,d.category,(d.tags||[]).join("|"),d.points,d.rating||"",d.earned,"",d.status||(d.done?"done":r.locked?"missed":"pending"),d.description||""].map(lt).join(","))}),o.push([r.date,"Summary",`Earned ${r.earned}/${r.max} (${r.percent}%)`,"","","","","","",r.locked?"locked":"open",r.note||""].map(lt).join(","))}),dt(`daily-report-${a}-${i}-to-${n}.csv`,"\uFEFF"+o.join(`
`),"text/csv;charset=utf-8"),b("Excel (CSV) exported")}function Se(t,e){const a=t||h&&h.range||"day",{start:i,end:n,rows:s}=oe(a,e),o={app:"Daily Report",exportedAt:new Date().toISOString(),range:a,start:i,end:n,days:s};dt(`daily-report-${a}-${i}-to-${n}.json`,JSON.stringify(o,null,2),"application/json"),b("JSON exported")}function xe(t,e){const a=t||h&&h.range||"day",{start:i,end:n,rows:s}=oe(a,e),o=s.map(d=>`
        <section style="margin-bottom:18px;border:1px solid #ddd;border-radius:12px;padding:12px">
          <h2 style="margin:0 0 4px;font-size:16px">${g(d.date)} — ${d.earned}/${d.max} pts (${d.percent}%)</h2>
          <p style="margin:0 0 8px;font-size:12px;color:#555">Habits ${d.habitScore} + Conscious ${d.consciousScore} + Tasks ${d.taskScore} · ${d.locked?"Locked":"Open"}${d.note?` · Note: ${g(d.note)}`:""}</p>
          <table style="width:100%;border-collapse:collapse;font-size:12px">
            <thead><tr><th align="left">Type</th><th align="left">Name</th><th align="left">Category</th><th>Points</th><th>Rating</th><th>Earned</th><th>Status</th></tr></thead>
            <tbody>
              ${d.habits.map(c=>`<tr><td>Habit</td><td>${g(c.name)}${c.description?` (${g(c.description)})`:""}</td><td>${g(c.category)}</td><td align="center">${c.points}${c.consciousPoints?`+${c.consciousPoints}🧠`:""}</td><td align="center">${c.rating||"-"}/5</td><td align="center">${c.earned}</td><td align="center">${c.status||(c.rating>0?"done":d.locked?"missed":"pending")}</td></tr>`).join("")}
              ${d.tasks.map(c=>`<tr><td>Task</td><td>${g(c.title)}${c.hasImage?" 📷":""}${c.description?` (${g(c.description)})`:""}</td><td>${g(c.category)}</td><td align="center">${c.points}</td><td align="center">${c.rating?`${c.rating}/5`:"-"}</td><td align="center">${c.earned}</td><td align="center">${c.status||(c.done?"done":d.locked?"missed":"pending")}</td></tr>`).join("")}
            </tbody>
          </table>
        </section>
      `).join(""),r=window.open("","_blank");if(!r){b("Popup blocked — allow popups to export PDF");return}r.document.write(`<!DOCTYPE html><html><head><title>Daily Report ${i} to ${n}</title></head><body style="font-family:sans-serif;padding:24px"><h1>Daily Report — ${i} to ${n}</h1>${o}<script>window.onload=function(){window.print()}<\/script></body></html>`),r.document.close(),b("PDF print view opened")}document.addEventListener("click",t=>{const e=t.target.closest("[data-screen]");if(e){L=e.dataset.screen,k();return}const a=t.target.closest("[data-action]");if(!a)return;const i=a.dataset.action;if(i==="close-modal"){if(x==="image"){x=null,h=null,k();return}(t.target.classList.contains("modal-backdrop")||a.classList.contains("ghost-btn"))&&(x=null,h=null,k());return}if(i==="note-bullets"){be("bullets");return}if(i==="note-numbered"){be("numbered");return}if(i==="pick-task-image"){const n=document.getElementById("task-image-input");n?n.click():b("Photo picking needs a browser file picker");return}if(i==="remove-task-image"){h&&(h._image="",k(),b("Photo removed — save to apply"));return}if(i==="view-task-image"){const n=u.findTask(f,a.dataset.id),s=n&&n.image?n.image:h&&(h._image||h.image)||"";if(!s){b("No photo on this task");return}x="image",h={image:s,title:n&&n.title||"Task photo"},k();return}if(i==="prev-day"&&ge(-1),i==="next-day"&&ge(1),i==="reload-app"){window.location.reload();return}if(i==="set-theme"){const n=a.dataset.theme==="light"?"light":"dark";u.setTheme(n),Ue(),b(n==="light"?"Light mode on":"Dark mode on")}if(i==="install-app"){Ua();return}if(i==="check-updates"){Ya();return}if(i==="apply-update"){_e();return}if(i==="backup-now"){qa();return}if(i==="trigger-import"){const n=document.getElementById("backup-file");n&&n.click();return}if(i==="choose-folder"){Ba();return}if(i==="grant-folder"){Ga();return}if(i==="forget-folder"){Oa();return}if(i==="restore-backup"){_a(a.dataset.name);return}if(i==="goto-settings"&&(L="settings"),i==="open-add-habit"&&(x="habit",h=null),i==="open-add-task"){if(O())return;x="task",h={category:"mentally"}}if(i==="open-add"){if(O())return;x="choose",h={category:"mentally"}}if(i==="toggle-edit"&&(K=!K),i==="open-edit-habit"){const n=u.findHabit(a.dataset.id);if(!n)return;x="edit-habit",h={id:n.id,name:n.name,description:n.description||"",points:n.points,category:n.category,tags:n.tags||[],consciousPoints:Number(n.consciousPoints)||0}}if(i==="open-edit-task"){if(O())return;const n=u.findTask(f,a.dataset.id);if(!n)return;x="edit-task",h={id:n.id,title:n.title,points:n.points,description:n.description,category:n.category,tags:n.tags||[],rating:Number(n.rating)||0,image:n.image||"",_image:void 0}}if(i==="toggle-badges"&&(xt=!xt),i==="open-goal"&&(x="goal",h={kind:"habit-streak",targetDays:7,tier:"bronze"}),i==="open-edit-goal"){const n=u.getGoals().find(s=>s.id===a.dataset.id);if(!n)return;x="edit-goal",h={...n}}if(i==="remove-goal"&&(u.removeGoal(a.dataset.id),b("Goal removed")),i==="remove-badge"&&(u.removeBadge(a.dataset.id),b("Badge removed")),i==="rate-habit"){if(O())return;const s=u.habitRating(f,a.dataset.id)===Number(a.dataset.rating)?0:Number(a.dataset.rating);u.setHabitRating(f,a.dataset.id,s)}if(i==="rate-task"){if(O())return;const n=u.findTask(f,a.dataset.id);if(!n)return;const o=(Number(n.rating)||0)===Number(a.dataset.rating)?0:Number(a.dataset.rating);u.setTaskRating(f,a.dataset.id,o)}if(i==="open-export"&&(x="export",h={range:h&&h.range||"day"}),i==="set-export-range"){x="export",h={range:a.dataset.range||"day"},k();return}if(i==="do-export"){const n=a.dataset.format,s=h&&h.range||"day";n==="csv"&&we(s,f),n==="json"&&Se(s,f),n==="pdf"&&xe(s,f),x=null,h=null}if(i==="set-histexp-range"){I=["day","week","month","year"].includes(a.dataset.range)?a.dataset.range:"day",k();return}if(i==="histexp-do"){const n=a.dataset.format;let s=f;if(I==="day"||I==="week"){const o=document.getElementById("histexp-date");o&&/^\d{4}-\d{2}-\d{2}$/.test(o.value)&&(s=o.value)}else if(I==="month"){const o=document.getElementById("histexp-month");o&&/^\d{4}-\d{2}$/.test(o.value)&&(s=`${o.value}-15`)}else if(I==="year"){const o=document.getElementById("histexp-year"),r=Number(o&&o.value);Number.isInteger(r)&&r>=2e3&&r<=2100&&(s=`${String(r)}-06-15`)}n==="csv"&&we(I,s),n==="json"&&Se(I,s),n==="pdf"&&xe(I,s);return}if(i==="history-cal-nav"){const n=At||M(f);At=mt(n,Number(a.dataset.dir)||0),k();return}if(i==="locked-cal-nav"){const n=Tt||M(f);Tt=mt(n,Number(a.dataset.dir)||0),k();return}if(i==="toggle-locked-day"){const n=a.dataset.date,s=N.indexOf(n);s>=0?N.splice(s,1):N.push(n),k();return}if(i==="lock-selected"){const n=[...N].sort();if(!n.length)return;const s=u.lockDays(n);N=[],b(s===1?`Locked ${s} day`:`Locked ${s} days`),k();return}if(i==="unlock-selected"){const n=[...N].sort();if(!n.length)return;const s=u.unlockDays(n);N=[],b(s===1?`Unlocked ${s} day`:`Unlocked ${s} days`),k();return}if(i==="submit-day"&&(u.submitDay(f),b("Report submitted and locked")),i==="unlock-day"&&(u.unlockDay(a.dataset.date),b("Report unlocked")),i==="toggle-habit"){if(O())return;u.toggleHabit(f,a.dataset.id)}if(i==="toggle-task"){if(O())return;u.toggleTask(f,a.dataset.id)}if(i==="remove-task"){if(O())return;u.removeTask(f,a.dataset.id)}if(i==="remove-habit"&&u.removeHabit(a.dataset.id),i==="restore-habit"){const n=u.restoreHabit(a.dataset.id);b(n.ok?"Habit restored":n.reason||"Could not restore that habit")}if(i==="open-pin-habit"&&ti(a.dataset.id),i==="open-forward-habit"){if(O())return;const n=u.findHabit(a.dataset.id);if(!n)return;x="forward",h={kind:"habit",id:n.id,title:n.name,from:f}}if(i==="open-forward-task"){if(O())return;const n=u.findTask(f,a.dataset.id);if(!n)return;x="forward",h={kind:"task",id:n.id,title:n.title,from:f}}if(i==="open-pin-task"){if(O())return;ei(a.dataset.id)}if(i==="open-pin-template"&&ai(a.dataset.id),i==="unpin-template"&&(u.unpinTaskTemplate(a.dataset.id),b("Task unpinned")),i==="pick-date"&&(f=a.dataset.date,L="today"),i==="set-chart-range"){q=["week","month","year"].includes(a.dataset.range)?a.dataset.range:"week",J=0,k();return}if(i==="chart-nav"){J+=Number(a.dataset.dir)||0,J>0&&(J=0),k();return}if(i==="add-category"){const n=document.getElementById("new-category"),s=u.addCategory(n?n.value:"");b(s.ok?"Category added":s.reason||"Couldn't add category"),k();return}if(i==="rename-category"){const n=u.getCustomCategories().find(r=>r.id===a.dataset.id),s=window.prompt("Rename category",n?n.label:"");if(s==null)return;const o=u.renameCategory(a.dataset.id,s);b(o.ok?"Category renamed":o.reason||"Couldn't rename"),k();return}if(i==="delete-category"){if(!window.confirm("Delete this category? Its habits and tasks move to Mentally."))return;const n=u.deleteCategory(a.dataset.id);n.ok&&et.delete(a.dataset.id),b(n.ok?"Category deleted":n.reason||"Couldn't delete"),k();return}if(i==="rename-tag"){const n=window.prompt("Rename tag everywhere",a.dataset.tag||"");if(n==null)return;const s=u.renameTag(a.dataset.tag,n);b(s.ok?s.merged?"Tags merged":"Tag renamed everywhere":s.reason||"Couldn't rename"),k();return}if(i==="delete-tag"){if(!window.confirm(`Delete tag "#${a.dataset.tag}" from all habits and tasks?`))return;u.deleteTag(a.dataset.tag),b("Tag deleted everywhere"),k();return}if(i==="add-tag"){const n=document.getElementById("tag-habit-pick"),s=document.getElementById("new-tag"),o=u.addTagToHabit(n?n.value:"",s?s.value:"");b(o.ok?"Tag added to habit":o.reason||"Couldn't add tag"),k();return}if(i==="set-points"){const n=document.querySelector('input[name="points"]');n&&(n.value=a.dataset.points),document.querySelectorAll(".chip-row .chip[data-points]").forEach(s=>s.classList.remove("on")),a.classList.add("on");return}if(i==="set-category"){const n=a.closest("form")||a.closest(".sheet"),s=n.querySelector('input[name="category"]');s&&(s.value=a.dataset.category),n.querySelectorAll(".cat-row .chip").forEach(o=>o.classList.remove("on")),a.classList.add("on");return}if(i==="set-rating"){const n=a.closest(".sheet")||a.closest("form")||document,s=n.querySelector('input[name="rating"]');s&&(s.value=a.dataset.rating),n.querySelectorAll(".rating-row .chip").forEach(o=>o.classList.remove("on")),a.classList.add("on");return}if(i==="set-conscious"){const n=a.closest(".sheet")||a.closest("form")||document,s=n.querySelector('input[name="consciousPoints"]');s&&(s.value=a.dataset.conscious),n.querySelectorAll(".conscious-row .chip").forEach(o=>o.classList.remove("on")),a.classList.add("on");return}if(i==="set-goal-kind"){const n=a.closest(".sheet")||document,s=n.querySelector('input[name="kind"]');s&&(s.value=a.dataset.kind),n.querySelectorAll(".goal-kind-row .chip").forEach(c=>c.classList.remove("on")),a.classList.add("on");const o=a.dataset.kind,r=n.querySelector(".goal-target-habit"),d=n.querySelector(".goal-target-task");r&&(r.style.display=o==="habit-streak"?"":"none"),d&&(d.style.display=o==="task-streak"?"":"none"),h&&(h.kind=o);return}if(i==="set-goal-tier"){const n=a.closest(".sheet")||document,s=n.querySelector('input[name="tier"]');s&&(s.value=a.dataset.tier),n.querySelectorAll(".goal-tier-row .chip").forEach(o=>o.classList.remove("on")),a.classList.add("on");return}if(i==="pin-mode"){const n=a.closest("form"),s=a.dataset.mode;n.querySelector('input[name="mode"]').value=s,n.querySelectorAll(".pin-modes .chip").forEach(r=>r.classList.remove("on")),a.classList.add("on");const o=(r,d)=>{const c=n.querySelector(r);c&&(c.style.display=d?"":"none")};o(".pin-until",s==="until"),o(".pin-weekdays",s==="weekly"),o(".pin-monthdays",s==="monthly"),o(".pin-yeardays",s==="yearly"),h&&h.pin&&(h.pin.mode=s);return}if(i==="toggle-weekday"){a.classList.toggle("on");return}if(i==="toggle-monthday"){a.classList.toggle("on");return}if(i==="pin-cal-nav"){if(!h)return;const n=a.dataset.target,s=Number(a.dataset.dir)||0;n==="except"?h._exceptCal=mt(h._exceptCal||M(f),s):h._customCal=mt(h._customCal||M(f),s),k();return}if(i==="toggle-pin-date"){if(!h||!h.pin)return;const n=a.dataset.target,s=a.dataset.date,o=n==="custom"?"customDates":"exceptDates",r=Array.isArray(h.pin[o])?[...h.pin[o]]:[],d=r.indexOf(s);d>=0?r.splice(d,1):(r.push(s),r.length>365&&r.shift()),h.pin[o]=r.sort(),k();return}if(i==="add-year-day"){if(!h||!h.pin)return;const n=a.closest("form")||document,s=n.querySelector("#year-month-select"),o=n.querySelector("#year-day-select");s&&(h._yearMonth=s.value);const r=`${s?s.value:"01"}-${o?o.value:"01"}`,d=Array.isArray(h.pin.yearDays)?[...h.pin.yearDays]:[];d.includes(r)||d.push(r),h.pin.yearDays=d.sort(),k();return}if(i==="remove-year-day"){if(!h||!h.pin)return;const n=a.dataset.date;h.pin.yearDays=(h.pin.yearDays||[]).filter(s=>s!==n),k();return}if(i==="clear-pin"){const n=a.closest("form"),s=n.dataset.kind,o=n.dataset.id;if(s==="habit"&&u.unpinHabit(o),s==="task"){const r=u.findTask(f,o);r!=null&&r.sourcePinId&&u.unpinTaskTemplate(r.sourcePinId)}s==="template"&&u.unpinTaskTemplate(o),x=null,h=null,b("Unpinned"),k();return}if(i==="lock-profile"){u.setProfileLocked(!0),b("Profile locked — read only"),k();return}if(i==="unlock-profile"){u.setProfileLocked(!1),b("Profile unlocked"),k();return}if(i==="add-whoami"){const n=document.getElementById("new-whoami"),s=u.addWhoAmI(n?n.value:"");b(s.ok?"Added":s.reason||"Couldn't add"),k();return}if(i==="move-whoami"){u.moveWhoAmI(a.dataset.id,Number(a.dataset.dir)||0),k();return}if(i==="remove-whoami"){u.removeWhoAmI(a.dataset.id),b("Removed"),k();return}if(i==="add-lifearea"){const n=document.getElementById("new-lifearea"),s=u.addLifeArea(n?n.value:"");s.ok?(st=s.id,b("Life area added")):b(s.reason||"Couldn't add"),k();return}if(i==="toggle-lifearea"){const n=a.dataset.id;st=st===n?null:n,k();return}if(i==="toggle-cat"){const n=a.dataset.id;et.has(n)?et.delete(n):et.add(n),k();const s=document.querySelector(`[data-action="toggle-cat"][data-id="${CSS.escape(n)}"]`);s&&s.focus({preventScroll:!0});return}if(i==="expand-cats"){u.getCategories().forEach(n=>et.add(n.id)),k();return}if(i==="collapse-cats"){et.clear(),k();return}if(i==="remove-lifearea"){u.removeLifeArea(a.dataset.id),st===a.dataset.id&&(st=null),b("Life area removed"),k();return}if(i==="set-pgoal-term"){z=["short","medium","long"].includes(a.dataset.term)?a.dataset.term:"short",rt=u.profileGoalDurations()[z][0],k();return}if(i==="set-pgoal-filter"){$t=["all","short","medium","long"].includes(a.dataset.filter)?a.dataset.filter:"all",k();return}if(i==="add-pgoal"){const n=document.getElementById("new-pgoal"),s=document.getElementById("new-pgoal-duration"),o=u.addProfileGoal(n?n.value:"",z,s?s.value:rt);b(o.ok?`Goal added ${wt(z)}`:o.reason||"Couldn't add"),k();return}if(i==="remove-pgoal"){u.removeProfileGoal(a.dataset.id),b("Goal removed"),k();return}if(i==="add-quote"){const n=document.getElementById("new-quote"),s=document.getElementById("new-quote-author"),o=u.addQuote(n?n.value:"",s?s.value:"");b(o.ok?"Quote added":o.reason||"Couldn't add"),k();return}if(i==="toggle-quote-fav"){u.toggleQuoteFav(a.dataset.id),k();return}if(i==="remove-quote"){u.removeQuote(a.dataset.id),b("Quote removed"),k();return}if(i==="toggle-quotes"){ht=!ht,k();return}k()});document.addEventListener("submit",t=>{const e=t.target.closest("[data-form]");if(!e)return;t.preventDefault();const a=e.dataset.form;if(a==="habit"||a==="task"||a==="edit-habit"||a==="edit-task"){const i=new FormData(e),n=String(i.get("title")||""),s=Number(i.get("points")||0),o=String(i.get("category")||"mentally"),r=String(i.get("description")||""),d=String(i.get("tags")||""),c=Math.max(0,Math.min(5,Number(i.get("rating")||0))),p=Math.max(0,Math.min(100,Number(i.get("consciousPoints")||0)));if(!n.trim())return;const S=h&&h._image!==void 0?V(h._image):V(h&&h.image);if(a==="habit")u.addHabit(n,s,{description:r,category:o,consciousPoints:p,tags:d,startFrom:f}),b("Habit added");else if(a==="task"){if(O())return;u.addTask(f,n,s,{description:r,category:o,rating:c,tags:d,image:S}),b("Task added")}else if(a==="edit-habit")u.updateHabit(e.dataset.id,{name:n,description:r,points:s,category:o,consciousPoints:p,tags:d}),b("Habit updated");else{if(O())return;u.updateTask(f,e.dataset.id,{title:n,points:s,description:r,category:o,rating:c,tags:d,image:S}),b("Task updated")}x=null,h=null,k();return}if(a==="pin"){const i=ii(e);if(!i)return;const n=e.dataset.kind,s=e.dataset.id;n==="habit"&&u.pinHabit(s,i),n==="task"&&u.pinTask(f,s,i),n==="template"&&u.updatePinnedTask(s,i),x=null,h=null,b("Pin saved"),k();return}if(a==="forward"){const i=new FormData(e),n=String(i.get("targetDate")||""),s=e.dataset.kind,o=e.dataset.id,r=h&&h.from||f;if(!/^\d{4}-\d{2}-\d{2}$/.test(n)){b("Pick a valid date");return}const d=s==="habit"?u.forwardHabit(r,o,n):u.forwardTask(r,o,n);if(!d.ok){b(d.reason||"Could not forward");return}x=null,h=null,f=n,L="today",b(`Forwarded to ${n}`),k();return}if(a==="goal"||a==="edit-goal"){const i=new FormData(e),n=String(i.get("title")||"").trim(),s=String(i.get("kind")||"habit-streak"),o=String(i.get("tier")||"bronze"),r=String(i.get("rewardTitle")||"").trim(),d=Math.max(1,Math.min(365,Number(i.get("targetDays")||7)));if(!n||!r){b("Goal title and reward title are required");return}let c="";if(s==="habit-streak"&&(c=String(i.get("habitTarget")||"")),s==="task-streak"&&(c=String(i.get("taskTarget")||"")),(s==="habit-streak"||s==="task-streak")&&!c){b(s==="habit-streak"?"Pick a habit":"Pin a task first, then pick it");return}a==="goal"?(u.addGoal({title:n,kind:s,targetId:c,targetDays:d,tier:o,rewardTitle:r}),b("Goal added")):(u.updateGoal(e.dataset.id,{title:n,kind:s,targetId:c,targetDays:d,tier:o,rewardTitle:r}),b("Goal updated"));const p=u.checkGoals(f);p.length&&b(`🏅 Reward earned: ${p[0].rewardTitle}!`),x=null,h=null,k()}});document.addEventListener("change",t=>{const e=t.target.closest(".sort-select");if(e){const a=e.dataset.sortKind;a==="habit"&&u.setHabitSort(e.value),a==="task"&&u.setTaskSort(e.value),k()}if(t.target&&t.target.id==="show-conscious"&&(u.setShowConscious(t.target.checked),b(t.target.checked?"Conscious points on":"Conscious points hidden"),k()),t.target&&t.target.id==="week-start"&&(u.setWeekStart(Number(t.target.value)),b("Week starts on "+t.target.selectedOptions[0].textContent),k()),t.target&&t.target.id==="new-pgoal-duration"){rt=t.target.value;return}if(t.target&&t.target.id==="year-month-select"&&h&&(h._yearMonth=t.target.value),t.target&&t.target.id==="task-image-input"){const a=t.target.files&&t.target.files[0];if(!a)return;if(!String(a.type||"").startsWith("image/")){b("Please pick an image file"),t.target.value="";return}b("Processing photo…"),ha(a).then(i=>{if(t.target.value="",!i){b("Photo too large or unreadable — try a smaller one");return}h&&(h._image=i,k(),b("Photo attached — save to apply"))})}});if("serviceWorker"in navigator){window.addEventListener("load",()=>{navigator.serviceWorker.register("./sw.js").catch(()=>{})});let t=!1;try{sessionStorage.getItem("dr-updated-reload")&&(t=!0)}catch{}navigator.serviceWorker.addEventListener("controllerchange",()=>{if(!t){t=!0;try{sessionStorage.setItem("dr-updated-reload","1")}catch{}window.location.reload()}})}function si(){const t=document.getElementById("boot-error");t&&(t.style.display="none")}si();Ue();k();Ra().then(()=>{L==="settings"&&k()});setInterval(()=>{!document.hidden&&ee()&&k()},6e4);document.addEventListener("visibilitychange",()=>{!document.hidden&&ee()&&k()});
