(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function a(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(n){if(n.ep)return;n.ep=!0;const i=a(n);fetch(n.href,i)}})();const Te="daily-report-v2",Et=[{id:"mentally",label:"Mentally"},{id:"psychology",label:"Psychology"},{id:"physically",label:"Physically"},{id:"spiritually",label:"Spiritually"},{id:"socially",label:"Socially"}];Et.map(t=>t.id);const De=[{id:"h1",name:"Wake up early",points:10,icon:"sunrise",category:"physically",pin:{mode:"forever"}},{id:"h2",name:"Drink water",points:5,icon:"drop",category:"physically",pin:{mode:"forever"}},{id:"h3",name:"Exercise",points:15,icon:"bolt",category:"physically",pin:{mode:"forever"}},{id:"h4",name:"Read 20 minutes",points:10,icon:"book",category:"mentally",pin:{mode:"forever"}},{id:"h5",name:"No junk food",points:10,icon:"leaf",category:"physically",pin:{mode:"forever"}}],Pe={lockTime:"21:00",autoLock:!0,showConscious:!0,habitSort:"default",taskSort:"default",theme:"dark",weekStart:1};function Rt(t){const e=Number(t);return Number.isInteger(e)&&e>=0&&e<=6?e:1}const yt=[{id:"iron",label:"Iron",medal:"🥉",rank:1},{id:"bronze",label:"Bronze",medal:"🥉",rank:2},{id:"silver",label:"Silver",medal:"🥈",rank:3},{id:"gold",label:"Gold",medal:"🥇",rank:4}],Ce=[{id:"habit-streak",label:"Habit streak"},{id:"task-streak",label:"Pinned task streak"},{id:"perfect-days",label:"Perfect days (100%)"}];function re(t){var e;return((e=yt.find(a=>a.id===t))==null?void 0:e.rank)||0}function jt(t){var e;return((e=yt.find(a=>a.id===t))==null?void 0:e.medal)||"🏅"}function Ee(t){var e;return((e=yt.find(a=>a.id===t))==null?void 0:e.label)||t||"Badge"}function T(t){const e=Array.isArray(t)?t:String(t||"").split(","),a=[];return e.forEach(s=>{const n=String(s||"").trim().slice(0,20);n&&!a.some(i=>i.toLowerCase()===n.toLowerCase())&&a.push(n),a.length>=10}),a.slice(0,10)}function Mt(t,e){const a=[...t];return e==="points"?a.sort((s,n)=>(Number(n.points)||0)-(Number(s.points)||0)):e==="category"?a.sort((s,n)=>it(D(s.category)).localeCompare(it(D(n.category)))):e==="tags"&&a.sort((s,n)=>(s.tags&&s.tags[0]||"~~~").localeCompare(n.tags&&n.tags[0]||"~~~")),a}const nt=[{value:1,label:"Mon"},{value:2,label:"Tue"},{value:3,label:"Wed"},{value:4,label:"Thu"},{value:5,label:"Fri"},{value:6,label:"Sat"},{value:0,label:"Sun"}];function G(t=new Date){const e=t.getFullYear(),a=String(t.getMonth()+1).padStart(2,"0"),s=String(t.getDate()).padStart(2,"0");return`${e}-${a}-${s}`}function Jt(){return{habits:{},habitRatings:{},habitMissed:{},habitForwarded:{},tasks:[],note:"",locked:!1,lockOverride:null,submittedAt:null,lockedHabits:null,skippedPins:[]}}var H=[];function Y(){return[...Et,...H]}function D(t){return Y().map(a=>a.id).includes(t)?t:"mentally"}function it(t){var e;return((e=Y().find(a=>a.id===t))==null?void 0:e.label)||"Mentally"}const kt=7e5;function V(t){const e=String(t||"");return e.startsWith("data:image/")?e.length>kt?"":e:""}function de(t){const e=Math.max(0,Math.min(5,Number(t.rating)||0)),a=n=>/^\d{4}-\d{2}-\d{2}$/.test(String(n||""))?String(n):"",s=n=>Array.isArray(n)?n.filter(i=>/^\d{4}-\d{2}-\d{2}$/.test(String(i))).map(String).slice(0,50):[];return{...t,description:t.description||"",category:D(t.category),tags:T(t.tags),rating:e,done:!!t.done,missed:!!t.missed,forwardedFrom:a(t.forwardedFrom),forwardedHabitId:String(t.forwardedHabitId||""),forwardedTo:s(t.forwardedTo),image:V(t.image)}}function B(t){const e=Number(t);return!Number.isFinite(e)||e<0?0:Math.min(100,Math.round(e))}function vt(t){const e=String(t??"").slice(0,10);return/^\d{4}-\d{2}-\d{2}$/.test(e)?e:""}function Qt(t,e){const a=vt(t&&t.startFrom);return a?String(e)>=a:!0}function Xt(t,e){return{id:String(t.id||""),name:String(t.name||"").slice(0,80),description:String(t.description||"").slice(0,240),points:Number(t.points)||0,icon:t.icon||"star",category:D(t.category),consciousPoints:B(t.consciousPoints),tags:T(t.tags),pin:U(t.pin),startFrom:vt(t.startFrom),archivedAt:e||t.archivedAt||null}}function U(t){if(!t||!t.mode)return null;const e=(n,i,o)=>Array.isArray(n)?n.map(Number).filter(r=>Number.isFinite(r)&&r>=i&&r<=o):[],a=n=>Array.isArray(n)?n.filter(i=>/^\d{4}-\d{2}-\d{2}$/.test(String(i))).map(String).slice(0,365):[],s=n=>Array.isArray(n)?n.filter(i=>/^\d{2}-\d{2}$/.test(String(i))).map(String).slice(0,366):[];return{mode:["forever","until","weekly","monthly","yearly","custom"].includes(t.mode)?t.mode:"forever",until:t.until||"",weekdays:e(t.weekdays,0,6),monthDays:e(t.monthDays,1,31),yearDays:s(t.yearDays),customDates:a(t.customDates),exceptDates:a(t.exceptDates||t.exceptions)}}function Je(t,e){const a=`${t} ${e}`.toLowerCase();return a.includes("read")||a.includes("study")||a.includes("learn")?"mentally":a.includes("meditat")||a.includes("pray")||a.includes("journal")?"spiritually":a.includes("mood")||a.includes("calm")||a.includes("therapy")?"psychology":a.includes("friend")||a.includes("family")||a.includes("social")||a.includes("call")||a.includes("visit")?"socially":"physically"}function Bt(t){const e=Ce.some(a=>a.id===t.kind)?t.kind:"habit-streak";return{id:String(t.id||`g${Date.now()}`),title:String(t.title||"").trim().slice(0,60)||"My goal",kind:e,targetId:String(t.targetId||""),targetDays:Math.max(1,Math.min(365,Number(t.targetDays)||7)),tier:yt.some(a=>a.id===t.tier)?t.tier:"bronze",rewardTitle:String(t.rewardTitle||"").trim().slice(0,60)||"Reward",createdAt:t.createdAt||new Date().toISOString()}}function Qe(t){if(!Array.isArray(t))return[];const e=new Set(Et.map(s=>s.id)),a=[];return t.forEach(s=>{if(!s||typeof s!="object")return;const n=String(s.id||"").trim().slice(0,40),i=String(s.label||"").trim().slice(0,30);!n||!i||e.has(n.toLowerCase())||(e.add(n.toLowerCase()),a.push({id:n,label:i,color:String(s.color||"").slice(0,20),goals:String(s.goals||"").slice(0,1e3)}))}),a.slice(0,20)}const Ot={name:80,wantToBe:1e3,vision:1e3,values:1e3},Gt=["short","medium","long"],ut={short:["1 Week","2 Weeks","3 Weeks","4 Weeks"],medium:["1 Month","2 Months","3 Months"],long:["1 Year","2 Years","3 Years","5 Years","10+ Years"]};function j(t){return`${t||"id"}${Date.now().toString(36)}${Math.floor(Math.random()*9999)}`}function Xe(t){return Array.isArray(t)?t.map(e=>{if(typeof e=="string")return{id:j("w"),text:e.trim().slice(0,120)};if(!e||typeof e!="object")return null;const a=String(e.text||e.label||e.name||"").trim().slice(0,120);return a?{id:String(e.id||j("w")),text:a}:null}).filter(Boolean).slice(0,50):[]}function Ze(t){return typeof t=="string"?t.split(`
`).map(e=>e.trim().replace(/^[-•*]\s+/,"")).filter(Boolean).slice(0,20).map(e=>({id:j("a"),title:e.slice(0,60),description:""})):Array.isArray(t)?t.map(e=>{if(typeof e=="string"){const s=e.trim().slice(0,60);return s?{id:j("a"),title:s,description:""}:null}if(!e||typeof e!="object")return null;const a=String(e.title||e.name||"").trim().slice(0,60);return a?{id:String(e.id||j("a")),title:a,description:String(e.description||"").slice(0,1e3)}:null}).filter(Boolean).slice(0,20):[]}function Ke(t){return Array.isArray(t)?t.map(e=>{if(typeof e=="string"){const o=e.trim().slice(0,200);return o?{id:j("g"),text:o,term:"short",duration:"1 Week",createdAt:new Date().toISOString()}:null}if(!e||typeof e!="object")return null;const a=String(e.text||e.title||"").trim().slice(0,200);if(!a)return null;const s=Gt.includes(e.term)?e.term:"short",n=ut[s],i=n.includes(e.duration)?e.duration:n[0];return{id:String(e.id||j("g")),text:a,term:s,duration:i,createdAt:e.createdAt||new Date().toISOString()}}).filter(Boolean).slice(0,100):[]}function ta(t){return Array.isArray(t)?t.map(e=>{if(typeof e=="string"){const s=e.trim().slice(0,500);return s?{id:j("q"),text:s,author:"",fav:!1,createdAt:new Date().toISOString()}:null}if(!e||typeof e!="object")return null;const a=String(e.text||e.quote||"").trim().slice(0,500);return a?{id:String(e.id||j("q")),text:a,author:String(e.author||"").trim().slice(0,80),fav:!!(e.fav||e.favorite),createdAt:e.createdAt||new Date().toISOString()}:null}).filter(Boolean).slice(0,200):[]}function gt(t){const e=t&&typeof t=="object"?t:{},a={};Object.entries(Ot).forEach(([n,i])=>{n==="wantToBe"&&!e.wantToBe&&e.about?a[n]=String(e.about||"").slice(0,i):a[n]=String(e[n]||"").slice(0,i)}),a.locked=!!e.locked,a.whoAmI=Xe(e.whoAmI||e.whoIAm||[]),a.lifeAreas=Ze(Array.isArray(e.lifeAreas)||typeof e.lifeAreas=="string"?e.lifeAreas:[]);let s=Ke(e.pGoals||e.goalsList||e.profileGoals||[]);return s.length||[["goalsShort","short","1 Week"],["goalsMid","medium","1 Month"],["goalsLong","long","1 Year"]].forEach(([i,o,r])=>{const d=String(e[i]||"");d.trim()&&d.split(`
`).map(c=>c.trim().replace(/^[-•*]\s+/,"")).filter(Boolean).forEach(c=>{s.length>=100||s.push({id:j("g"),text:c.slice(0,200),term:o,duration:r,createdAt:new Date().toISOString()})})}),a.pGoals=s,a.quotes=ta(e.quotes||e.favQuotes||[]),a}function ea(t,e){const a=String(t&&t.installedAt||"");if(/^\d{4}-\d{2}-\d{2}/.test(a))return a;const s=Object.keys(e||{}).sort();return s.length?`${s[0]}T00:00:00.000`:new Date().toISOString()}function aa(t,e){if(!t)return!1;if(te(t,e)>0)return!0;const a=t.habitForwarded&&t.habitForwarded[e];return Array.isArray(a)&&a.length>0?!0:Array.isArray(t.tasks)&&t.tasks.some(s=>String(s&&s.forwardedHabitId||"")===String(e))}function ia(t,e){return!t||!Array.isArray(t.lockedHabits)?!1:t.lockedHabits.some(a=>String(a&&a.id||"")===String(e))}function sa(t,e,a){const s=String(t||"");for(const n of e){const i=a[n];if(aa(i,s)||ia(i,s))return n}return""}function na(t,e){const a=Object.keys(e).sort(),s=a[0]||"";return t.map(n=>{const i=vt(n&&n.startFrom);return i?{...n,startFrom:i}:{...n,startFrom:sa(n&&n.id,a,e)||s}})}function oa(t,e){const a=Object.keys(e).sort(),s=a[0]||"",n={};return a.forEach(i=>{const o=e[i]&&e[i].tasks;Array.isArray(o)&&o.forEach(r=>{const d=String(r&&r.sourcePinId||"");!d||n[d]||(n[d]=i)})}),t.map(i=>{const o=vt(i&&i.startFrom);if(o)return{...i,startFrom:o};const r=String(i&&i.id||"");return{...i,startFrom:n[r]||s}})}function Le(t){H=Qe(t.customCategories||[]);const e={};Object.entries(t.days||{}).forEach(([i,o])=>{e[i]={...Jt(),habits:o.habits||{},habitRatings:o.habitRatings||{},habitMissed:o.habitMissed||{},habitForwarded:o.habitForwarded&&typeof o.habitForwarded=="object"?o.habitForwarded:{},tasks:Array.isArray(o.tasks)?o.tasks.map(de):[],note:o.note||"",locked:!!o.locked,lockOverride:o.lockOverride||(o.locked?"locked":null),submittedAt:o.submittedAt||null,lockedHabits:Array.isArray(o.lockedHabits)?o.lockedHabits:null,skippedPins:Array.isArray(o.skippedPins)?o.skippedPins.map(String).filter(r=>r.length<=60).slice(0,100):[]}});const a=na(Array.isArray(t.habits)&&t.habits.length?t.habits:De,e).map(i=>({...i,description:String(i.description||"").slice(0,240),category:D(i.category||Je(i.id,i.name)),consciousPoints:B(i.consciousPoints),tags:T(i.tags),pin:U(i.pin)})),s=(Array.isArray(t.archivedHabits)?t.archivedHabits:[]).filter(i=>i&&typeof i=="object"&&i.id).map(i=>Xt(i,i.archivedAt||null)).filter(i=>i.id.length<=60).slice(0,500),n=oa(Array.isArray(t.pinnedTasks)?t.pinnedTasks.map(i=>({...de(i),pin:U(i.pin)})):[],e);return{habits:a,archivedHabits:s,customCategories:H,installedAt:ea(t,e),profile:gt(t.profile),pinnedTasks:n,days:e,goals:Array.isArray(t.goals)?t.goals.map(Bt):[],badges:Array.isArray(t.badges)?t.badges.filter(i=>i&&i.id&&i.goalId).map(i=>({id:String(i.id),goalId:String(i.goalId),title:String(i.title||""),tier:i.tier||"bronze",rewardTitle:String(i.rewardTitle||""),earnedAt:i.earnedAt||new Date().toISOString()})):[],settings:{lockTime:t.settings&&t.settings.lockTime||Pe.lockTime,autoLock:!t.settings||t.settings.autoLock!==!1,showConscious:!t.settings||t.settings.showConscious!==!1,habitSort:["default","points","category","tags"].includes(t.settings&&t.settings.habitSort)?t.settings.habitSort:"default",taskSort:["default","points","category","tags"].includes(t.settings&&t.settings.taskSort)?t.settings.taskSort:"default",theme:["light","dark"].includes(t.settings&&t.settings.theme)?t.settings.theme:"dark",weekStart:Rt(t.settings&&t.settings.weekStart)}}}function ce(){const t=G();return{habits:De.map(e=>({...e,description:"",tags:[],startFrom:t})),archivedHabits:[],customCategories:[],installedAt:new Date().toISOString(),profile:gt({}),pinnedTasks:[],days:{},goals:[],badges:[],settings:{...Pe}}}function ra(){try{const t=localStorage.getItem(Te)||localStorage.getItem("daily-report-v1");return t?Le(JSON.parse(t)):ce()}catch{return ce()}}let l=ra();H=l.customCategories||[];l.customCategories=H;let Ne=0,Ht={key:null,value:null},qt=0;function Zt(){return qt>0}function Q(t){qt+=1;try{return t()}finally{qt-=1}}function $(){Ne+=1;try{localStorage.setItem(Te,JSON.stringify(l))}catch{}}let le=0;function tt(t){return le+=1,`${t||"id"}${Date.now().toString(36)}${le.toString(36)}${Math.floor(Math.random()*1296).toString(36)}`}function da(t){return new Date(`${t}T00:00:00`).getDay()}function ct(t){const e=new Date(`${t}T00:00:00`);return e.setDate(e.getDate()-1),G(e)}function Kt(t,e){if(!t)return!0;if(Array.isArray(t.exceptDates)&&t.exceptDates.includes(e)||Array.isArray(t.exceptions)&&t.exceptions.includes(e))return!1;if((Array.isArray(t.customDates)?t.customDates:[]).includes(e)||t.mode==="forever")return!0;if(t.mode==="until")return!!t.until&&e<=t.until;if(t.mode==="weekly")return Array.isArray(t.weekdays)&&t.weekdays.includes(da(e));if(t.mode==="monthly"){const s=Array.isArray(t.monthDays)?t.monthDays.map(Number):[];return s.length?s.includes(Number(String(e).slice(8,10))):!0}if(t.mode==="yearly"){const s=Array.isArray(t.yearDays)?t.yearDays:[];return s.length?s.includes(String(e).slice(5,10)):!0}return t.mode!=="custom"}function ft(t){if(!t)return"Not pinned";const e=(t.exceptDates||t.exceptions||[]).length,a=e?` · ⛔ ${e} exception${e>1?"s":""}`:"",s=t.mode==="custom"?0:Array.isArray(t.customDates)?t.customDates.length:0,n=s?` +${s} custom`:"";if(t.mode==="forever")return`Pinned forever${n}${a}`;if(t.mode==="until")return`${t.until?`Pinned until ${t.until}`:"Pinned until a date"}${n}${a}`;if(t.mode==="weekly"){const i=Array.isArray(t.weekdays)?t.weekdays:[],o=nt.filter(r=>i.includes(r.value)).map(r=>r.label);return`${o.length?`Weekly: ${o.join(", ")}`:"Weekly (no days)"}${n}${a}`}if(t.mode==="monthly"){const i=Array.isArray(t.monthDays)?t.monthDays:[];return`${i.length?`Monthly: day${i.length>1?"s":""} ${[...i].sort((o,r)=>o-r).join(", ")}`:"Monthly"}${n}${a}`}if(t.mode==="yearly"){const i=Array.isArray(t.yearDays)?t.yearDays:[];return`${i.length?`Yearly: ${[...i].sort().join(", ")}`:"Yearly"}${n}${a}`}if(t.mode==="custom"){const i=Array.isArray(t.customDates)?t.customDates:[];return`${i.length?`Custom: ${i.length} date${i.length>1?"s":""}`:"Custom dates"}${a}`}return"Pinned"}function Wt(t){const[e,a]=(l.settings.lockTime||"21:00").split(":").map(Number),s=new Date(`${t}T00:00:00`);return s.setHours(e||0,a||0,0,0),s}function Me(t){const e=l.days[t];return e?e.lockOverride==="locked"||e.locked===!0:!1}function te(t,e){return t?t.habitRatings&&t.habitRatings[e]!=null?Number(t.habitRatings[e])||0:t.habits&&t.habits[e]?5:0:0}function _t(t,e){return te(l.days[t],e)}function ca(t,e){if(!t)return!1;if(te(t,e)>0||t.habitMissed&&t.habitMissed[e])return!0;const s=t.habitForwarded&&t.habitForwarded[e];return Array.isArray(s)&&s.length>0?!0:Array.isArray(t.tasks)&&t.tasks.some(n=>String(n&&n.forwardedHabitId||"")===String(e))}function He(t){if(!t)return[...l.habits];const e=l.habits.filter(s=>Qt(s,t)&&Kt(s.pin,t)),a=l.days[t];if(a){const s=new Set(e.map(i=>i.id)),n=i=>{!i||s.has(i.id)||ca(a,i.id)&&(s.add(i.id),e.push(i))};l.habits.forEach(n),l.archivedHabits&&l.archivedHabits.length&&l.archivedHabits.forEach(n)}return e}function la(t){const e=l.habits.find(a=>a.id===t);return e||(l.archivedHabits||[]).find(a=>a.id===t)||null}function ua(t){l.archivedHabits||(l.archivedHabits=[]),!l.archivedHabits.some(e=>e.id===t.id)&&(l.archivedHabits.push(Xt(t,new Date().toISOString())),l.archivedHabits.length>500&&l.archivedHabits.splice(0,l.archivedHabits.length-500))}function Ut(t){const e=C(t),a=He(t);e.lockedHabits=a.map(s=>Xt(s)),e.habitMissed={},a.forEach(s=>{_t(t,s.id)<=0&&(e.habitMissed[s.id]=!0)}),e.tasks.forEach(s=>{s.missed=!s.done})}function pt(t){const e=l.days[t];return!e||e.lockOverride==="unlocked"?!1:e.lockOverride==="locked"||e.locked===!0?!0:l.settings.autoLock?Date.now()>=Wt(t).getTime():!1}function ue(t){if(Zt())return pt(t);const e=C(t);return e.lockOverride==="unlocked"?!1:e.lockOverride==="locked"||e.locked?((!Array.isArray(e.lockedHabits)||!e.habitMissed)&&Ut(t),!0):l.settings.autoLock&&Date.now()>=Wt(t).getTime()?(e.locked=!0,e.lockOverride="locked",e.submittedAt=e.submittedAt||Wt(t).toISOString(),Ut(t),$(),!0):!1}function C(t){if(!l.days[t]){const e=Jt();if(Zt())return e;l.days[t]=e}return l.days[t]}function pa(t){const e=C(t);if(Me(t)||Zt())return e;let a=!1;const s=new Set(Array.isArray(e.skippedPins)?e.skippedPins.map(String):[]);return l.pinnedTasks.forEach(n=>{Qt(n,t)&&Kt(n.pin,t)&&(s.has(String(n.id))||e.tasks.some(i=>i.sourcePinId===n.id)||(e.tasks.push({id:`ptask-${n.id}-${t}`,title:n.title,points:n.points,description:n.description||"",category:D(n.category),tags:T(n.tags),rating:0,done:!1,missed:!1,sourcePinId:n.id,image:V(n.image)}),a=!0))}),a&&$(),e}function W(t){return!u.isLocked(t)}function pe(t){const e=Y().find(a=>a.label.toLowerCase()===String(t||"").trim().toLowerCase());return e?e.id:"mentally"}function me(t){return!t||typeof t!="object"||Array.isArray(t)?[]:Array.isArray(t.days)?t.days.filter(e=>e&&/^\d{4}-\d{2}-\d{2}$/.test(String(e.date||""))):[]}const u={todayKey:G,exportBackup(){return JSON.stringify({app:"Daily Report",kind:"full-backup",version:1,exportedAt:new Date().toISOString(),data:l},null,2)},backupKind(t){if(!t||typeof t!="object"||Array.isArray(t))return"invalid";const e=t.data&&typeof t.data=="object"&&!Array.isArray(t.data)?t.data:t;return Array.isArray(e.days)?"report-export":Array.isArray(e.categories)||Array.isArray(e.plans)||Array.isArray(e.schedule)?"wrong-app":typeof e!="object"||e===null||e.habits!==void 0&&!Array.isArray(e.habits)||e.days!==void 0&&(typeof e.days!="object"||e.days===null||Array.isArray(e.days))||e.settings!==void 0&&(typeof e.settings!="object"||e.settings===null||Array.isArray(e.settings))||!["habits","pinnedTasks","days","goals","badges","settings"].some(s=>e[s]!==void 0)?"invalid":"ok"},importBackup(t){if(this.backupKind(t)!=="ok")return!1;const e=t.data&&typeof t.data=="object"&&!Array.isArray(t.data)?t.data:t;return l=Le(e),H=l.customCategories||[],l.customCategories=H,$(),!0},previewReport(t){const e=me(t);if(!e.length)return{days:0,start:"",end:"",newHabits:0};const a=new Set(l.habits.map(i=>String(i.name||"").trim().toLowerCase())),s=new Set;e.forEach(i=>{(Array.isArray(i.habits)?i.habits:[]).forEach(o=>{const r=String(o&&o.name||"").trim().toLowerCase();r&&!a.has(r)&&s.add(r)})});const n=e.map(i=>String(i.date)).sort();return{days:e.length,start:n[0],end:n[n.length-1],newHabits:s.size}},importReport(t){const e=me(t);if(!e.length)return!1;const a=e.map(r=>String(r.date)).sort(),s=a[a.length-1],n={};l.habits.forEach(r=>{n[String(r.name||"").trim().toLowerCase()]=r});let i=0;const o=Date.now();return e.forEach((r,d)=>{const c=String(r.date);(Array.isArray(r.habits)?r.habits:[]).forEach(p=>{const w=String(p&&p.name||"").trim().slice(0,80);if(!w)return;const b=w.toLowerCase();if(!n[b]){const v={id:`h${o}_${i}`,name:w,description:String(p&&p.description||"").slice(0,240),points:Number(p&&p.points||10)||10,icon:"star",category:pe(p&&p.category),consciousPoints:B(p&&p.consciousPoints),tags:T(p&&p.tags),pin:{mode:"until",until:s,weekdays:[],monthDays:[],yearDays:[],customDates:[],exceptDates:[]},startFrom:a[0]};l.habits.push(v),n[b]=v,i+=1}});const m=Jt();m.note=String(r.note||""),m.locked=!0,m.lockOverride="locked",m.submittedAt=null;const S=[];(Array.isArray(r.habits)?r.habits:[]).forEach(p=>{const w=n[String(p&&p.name||"").trim().toLowerCase()];if(!w)return;const b=Math.max(0,Math.min(5,Number(p&&p.rating||0)));m.habitRatings[w.id]=b,m.habits[w.id]=b>0,b<=0&&(m.habitMissed[w.id]=!0),w.startFrom&&c<w.startFrom&&(w.startFrom=c),S.push({id:w.id,name:w.name,description:w.description,points:w.points,icon:w.icon||"star",category:D(w.category),consciousPoints:B(w.consciousPoints),tags:T(w.tags),pin:U(w.pin)})}),m.lockedHabits=S,m.tasks=(Array.isArray(r.tasks)?r.tasks:[]).map((p,w)=>({id:`t${o}_${d}_${w}`,title:String(p&&p.title||"Task").slice(0,120),points:Number(p&&p.points||5)||5,description:String(p&&p.description||""),category:pe(p&&p.category),tags:T(p&&p.tags),rating:Math.max(0,Math.min(5,Number(p&&p.rating||0))),done:!!(p&&p.done),missed:!(p&&p.done),image:"",forwardedFrom:/^\d{4}-\d{2}-\d{2}$/.test(String(p&&p.forwardedFrom||""))?String(p.forwardedFrom):"",forwardedHabitId:"",forwardedTo:Array.isArray(p&&p.forwardedTo)?p.forwardedTo.filter(b=>/^\d{4}-\d{2}-\d{2}$/.test(String(b))).map(String).slice(0,50):[]})),l.days[c]=m}),$(),{days:e.length,habits:i}},getSettings(){return l.settings},setLockTime(t){l.settings.lockTime=t||"21:00",$()},setAutoLock(t){l.settings.autoLock=!!t,$()},setShowConscious(t){l.settings.showConscious=!!t,$()},consciousEnabled(){return l.settings.showConscious!==!1},setHabitSort(t){l.settings.habitSort=["default","points","category","tags"].includes(t)?t:"default",$()},setTaskSort(t){l.settings.taskSort=["default","points","category","tags"].includes(t)?t:"default",$()},getWeekStart(){return Rt(l.settings.weekStart)},setWeekStart(t){l.settings.weekStart=Rt(t),$()},getTheme(){return l.settings.theme==="light"?"light":"dark"},setTheme(t){l.settings.theme=t==="light"?"light":"dark",$()},getHabits(t,e){if(t&&Me(t)){const i=l.days[t];if(i&&Array.isArray(i.lockedHabits)){const o=e||l.settings.habitSort||"default",r=[...i.lockedHabits];return o==="default"?r:Mt(r,o)}}const a=e||l.settings.habitSort||"default",n=He(t).sort((i,o)=>+!!o.pin-+!!i.pin);return a==="default"?n:Mt(n,a)},getTasks(t,e){const a=this.getDay(t),s=e||l.settings.taskSort||"default";return s==="default"?a.tasks:Mt(a.tasks,s)},getAllHabits(){return l.habits},getPinnedTasks(){return l.pinnedTasks},getDay(t){return ue(t),pa(t)},isLocked(t){return ue(t)},submitDay(t){const e=C(t);e.locked=!0,e.lockOverride="locked",e.submittedAt=new Date().toISOString(),Ut(t),$(),this.checkGoals(t)},unlockDay(t){const e=C(t);e.locked=!1,e.lockOverride="unlocked",e.habitMissed={},e.lockedHabits=null,e.tasks.forEach(a=>{a.missed=!1}),$()},isHabitMissed(t,e){const a=l.days[t];return!a||!(a.locked||a.lockOverride==="locked")||!this.getHabits(t).some(s=>s.id===e)||_t(t,e)>0?!1:(a.habitMissed&&a.habitMissed[e],!0)},isTaskMissed(t,e){const a=l.days[t];if(!a)return!1;const s=(a.tasks||[]).find(n=>n.id===e);return s?s.missed===!0?!0:s.missed===!1?!1:!!(a.locked||a.lockOverride==="locked")&&!s.done:!1},missedCounts(t){return Q(()=>{const e=this.getDay(t),a=this.getHabits(t),s=pt(t);return{habits:a.filter(n=>e.habitMissed&&e.habitMissed[n.id]?!0:s&&_t(t,n.id)<=0).length,tasks:e.tasks.filter(n=>n.done?!1:n.missed===!0?!0:n.missed===!1?!1:s).length}})},lockDay(t){this.submitDay(t)},lockDays(t){let e=0;return t.forEach(a=>{this.isLocked(a)||(this.submitDay(a),e+=1)}),e},unlockDays(t){let e=0;return t.forEach(a=>{this.isLocked(a)&&(this.unlockDay(a),e+=1)}),e},lockedReports(){return Q(()=>Object.keys(l.days).sort().reverse().filter(t=>pt(t)).map(t=>({date:t,submittedAt:l.days[t].submittedAt,...this.scoreFor(t)})))},habitRating(t,e){const a=l.days[t];return a?a.habitRatings&&a.habitRatings[e]!=null?Number(a.habitRatings[e])||0:a.habits&&a.habits[e]?5:0:0},setHabitRating(t,e,a){if(!W(t))return;const s=C(t),n=Math.max(0,Math.min(5,Number(a)||0));s.habitRatings[e]=n,s.habits[e]=n>0,$(),this.checkGoals(t)},toggleHabit(t,e){if(!W(t))return;const a=this.habitRating(t,e)>0?0:5;this.setHabitRating(t,e,a)},addTask(t,e,a,s={}){if(!W(t))return;C(t).tasks.push({id:tt("t"),title:e.trim(),points:Number(a)||5,description:String(s.description||"").trim(),category:D(s.category),tags:T(s.tags),rating:Math.max(0,Math.min(5,Number(s.rating)||0)),done:!1,missed:!1,forwardedFrom:/^\d{4}-\d{2}-\d{2}$/.test(String(s.forwardedFrom||""))?String(s.forwardedFrom):"",forwardedHabitId:String(s.forwardedHabitId||""),forwardedTo:[],image:V(s.image)}),$(),this.checkGoals(t)},setTaskRating(t,e,a){if(!W(t))return;const n=C(t).tasks.find(o=>o.id===e);if(!n)return;const i=Math.max(0,Math.min(5,Number(a)||0));n.rating=i,$()},toggleTask(t,e){if(!W(t))return;const s=C(t).tasks.find(n=>n.id===e);s&&(s.done=!s.done,$(),this.checkGoals(t))},removeTask(t,e){if(!W(t))return;const a=C(t),s=a.tasks.find(i=>i.id===e);a.tasks=a.tasks.filter(i=>i.id!==e);const n=s&&s.sourcePinId?String(s.sourcePinId):"";n&&(Array.isArray(a.skippedPins)||(a.skippedPins=[]),a.skippedPins.includes(n)||a.skippedPins.push(n),a.skippedPins.length>100&&a.skippedPins.splice(0,a.skippedPins.length-100)),$()},forwardTask(t,e,a){if(!/^\d{4}-\d{2}-\d{2}$/.test(String(a||"")))return{ok:!1,reason:"Pick a valid date"};if(t===a)return{ok:!1,reason:"Already on that day"};if(!W(t))return{ok:!1,reason:"Source day is locked"};if(this.isLocked(a))return{ok:!1,reason:"Target day is locked"};const n=C(t).tasks.find(r=>r.id===e);if(!n)return{ok:!1,reason:"Task not found"};C(a).tasks.push({id:tt("t"),title:n.title,points:Number(n.points)||5,description:String(n.description||""),category:D(n.category),tags:T(n.tags),rating:0,done:!1,missed:!1,forwardedFrom:t,forwardedHabitId:String(n.forwardedHabitId||""),forwardedTo:[],image:V(n.image)});const o=Array.isArray(n.forwardedTo)?n.forwardedTo:[];return o.includes(a)||o.push(a),n.forwardedTo=o.slice(0,50),$(),this.checkGoals(a),{ok:!0}},forwardHabit(t,e,a){if(!/^\d{4}-\d{2}-\d{2}$/.test(String(a||"")))return{ok:!1,reason:"Pick a valid date"};if(t===a)return{ok:!1,reason:"Already on that day"};if(!W(t))return{ok:!1,reason:"Source day is locked"};if(this.isLocked(a))return{ok:!1,reason:"Target day is locked"};const s=l.habits.find(r=>r.id===e);if(!s)return{ok:!1,reason:"Habit not found"};C(a).tasks.push({id:tt("t"),title:s.name,points:Number(s.points)||10,description:String(s.description||""),category:D(s.category),tags:T(s.tags),rating:0,done:!1,missed:!1,forwardedFrom:t,forwardedHabitId:e,forwardedTo:[]});const i=C(t);(!i.habitForwarded||typeof i.habitForwarded!="object")&&(i.habitForwarded={});const o=Array.isArray(i.habitForwarded[e])?i.habitForwarded[e]:[];return o.includes(a)||o.push(a),i.habitForwarded[e]=o.slice(0,50),$(),this.checkGoals(a),{ok:!0}},habitForwardedTo(t,e){const a=l.days[t];if(!a||!a.habitForwarded)return[];const s=a.habitForwarded[e];return Array.isArray(s)?s:[]},setNote(t,e){W(t)&&(C(t).note=e,$())},addHabit(t,e,a={}){l.habits.push({id:tt("h"),name:t.trim(),description:String(a.description||"").trim().slice(0,240),points:Number(e)||10,icon:"star",category:D(a.category||"physically"),consciousPoints:B(a.consciousPoints),tags:T(a.tags),pin:U({mode:"forever"}),startFrom:vt(a.startFrom)||G()}),$()},updateHabit(t,e){const a=l.habits.find(s=>s.id===t);a&&(e.name!=null&&(a.name=String(e.name).trim()||a.name),e.description!=null&&(a.description=String(e.description).trim().slice(0,240)),e.points!=null&&(a.points=Number(e.points)||a.points),e.category!=null&&(a.category=D(e.category)),e.consciousPoints!=null&&(a.consciousPoints=B(e.consciousPoints)),e.tags!=null&&(a.tags=T(e.tags)),$())},updateTask(t,e,a){if(!W(t))return;const n=C(t).tasks.find(i=>i.id===e);if(n){if(a.title!=null&&(n.title=String(a.title).trim()||n.title),a.points!=null&&(n.points=Number(a.points)||n.points),a.description!=null&&(n.description=String(a.description).trim()),a.category!=null&&(n.category=D(a.category)),a.tags!=null&&(n.tags=T(a.tags)),a.image!==void 0&&(n.image=V(a.image)),a.rating!=null&&(n.rating=Math.max(0,Math.min(5,Number(a.rating)||0))),n.sourcePinId){const i=l.pinnedTasks.find(o=>o.id===n.sourcePinId);i&&(i.title=n.title,i.points=n.points,i.description=n.description,i.category=n.category,a.tags!=null&&(i.tags=T(a.tags)),a.image!==void 0&&(i.image=V(a.image)))}$()}},habitStreak(t,e){const a=la(t);if(!a)return 0;let s=e,n=0;this.habitRating(s,t)===0&&(s=ct(s));let i=0;for(;n<400;){if(n+=1,!Qt(a,s)||!Kt(a.pin,s)){s=ct(s);continue}if(this.habitRating(s,t)>0){i+=1,s=ct(s);continue}break}return i},categoryBreakdown(t){const e=this.getDay(t),a=this.getHabits(t);return Y().map(s=>{const n=a.filter(v=>D(v.category)===s.id),i=e.tasks.filter(v=>D(v.category)===s.id),o=n.reduce((v,A)=>{const Nt=this.habitRating(t,A.id);return v+Math.round(A.points*Nt/5)},0),r=l.settings.showConscious!==!1,d=r?n.reduce((v,A)=>v+(this.habitRating(t,A.id)>0?B(A.consciousPoints):0),0):0,c=n.reduce((v,A)=>v+A.points,0),m=r?n.reduce((v,A)=>v+B(A.consciousPoints),0):0,S=i.reduce((v,A)=>v+(A.done?A.points:0),0),p=i.reduce((v,A)=>v+A.points,0),w=n.map(v=>this.habitRating(t,v.id)),b=w.length?Math.round(w.reduce((v,A)=>v+A,0)/w.length*10)/10:0;return{...s,habits:n,tasks:i,earned:o+d+S,max:c+m+p,habitAvg:b,consciousEarned:d,consciousMax:m,completed:n.filter(v=>this.habitRating(t,v.id)>0).length+i.filter(v=>v.done).length,total:n.length+i.length}})},removeHabit(t){const e=l.habits.find(a=>a.id===t);e&&ua(e),l.habits=l.habits.filter(a=>a.id!==t),$()},getArchivedHabits(){return(l.archivedHabits||[]).map(t=>({...t}))},restoreHabit(t){const e=(l.archivedHabits||[]).findIndex(n=>n.id===t);if(e<0)return{ok:!1,reason:"That habit is no longer archived"};const a=l.archivedHabits[e];if(l.habits.some(n=>n.id===a.id))return l.archivedHabits.splice(e,1),$(),{ok:!0};const s={...a,description:String(a.description||"").slice(0,240),category:D(a.category),consciousPoints:B(a.consciousPoints),tags:T(a.tags),pin:U(a.pin),archivedAt:null};return l.habits.push(s),l.archivedHabits.splice(e,1),$(),{ok:!0,habit:{...s}}},pinHabit(t,e){const a=l.habits.find(s=>s.id===t);a&&(a.pin=U(e),$())},unpinHabit(t){const e=l.habits.find(a=>a.id===t);e&&(e.pin=null,$())},pinTask(t,e,a){if(!W(t))return;const n=C(t).tasks.find(r=>r.id===e);if(!n)return;const i=n.sourcePinId?l.pinnedTasks.find(r=>r.id===n.sourcePinId):null;if(i){i.pin=U(a),$();return}const o=tt("p");l.pinnedTasks.push({id:o,title:n.title,points:n.points,description:n.description||"",category:D(n.category),tags:T(n.tags),pin:U(a),startFrom:t,image:V(n.image)}),n.sourcePinId=o,$()},unpinTaskTemplate(t){l.pinnedTasks=l.pinnedTasks.filter(a=>a.id!==t);const e=String(t);Object.values(l.days).forEach(a=>{!Array.isArray(a.skippedPins)||!a.skippedPins.includes(e)||(a.skippedPins=a.skippedPins.filter(s=>s!==e))}),$()},updatePinnedTask(t,e){const a=l.pinnedTasks.find(s=>s.id===t);a&&(a.pin=U(e),$())},findHabit(t){return l.habits.find(e=>e.id===t)||null},findTask(t,e){return C(t).tasks.find(a=>a.id===e)||null},findPinnedTask(t){return l.pinnedTasks.find(e=>e.id===t)||null},getInstalledAt(){return String(l.installedAt||new Date().toISOString())},getProfile(){const t=gt(l.profile);return l.profile=t,JSON.parse(JSON.stringify(t))},setProfileField(t,e){return!Object.prototype.hasOwnProperty.call(Ot,t)||l.profile.locked?!1:((!l.profile||typeof l.profile!="object")&&(l.profile=gt({})),l.profile[t]=String(e||"").slice(0,Ot[t]),$(),!0)},setProfileLocked(t){(!l.profile||typeof l.profile!="object")&&(l.profile=gt({})),l.profile.locked=!!t,$()},isProfileLocked(){return!!(l.profile&&l.profile.locked)},profileGoalDurations(){return JSON.parse(JSON.stringify(ut))},addWhoAmI(t){if(l.profile.locked)return{ok:!1,reason:"Profile is locked"};const e=String(t||"").trim().slice(0,120);return e?(l.profile.whoAmI||[]).length>=50?{ok:!1,reason:"List is full (50)"}:(l.profile.whoAmI.push({id:j("w"),text:e}),$(),{ok:!0}):{ok:!1,reason:"Type something first"}},updateWhoAmI(t,e){if(l.profile.locked)return;const a=(l.profile.whoAmI||[]).find(n=>n.id===t);if(!a)return;const s=String(e||"").trim().slice(0,120);s?a.text=s:l.profile.whoAmI=l.profile.whoAmI.filter(n=>n.id!==t),$()},moveWhoAmI(t,e){if(l.profile.locked)return;const a=l.profile.whoAmI||[],s=a.findIndex(o=>o.id===t),n=s+e;if(s<0||n<0||n>=a.length)return;const[i]=a.splice(s,1);a.splice(n,0,i),$()},removeWhoAmI(t){l.profile.locked||(l.profile.whoAmI=(l.profile.whoAmI||[]).filter(e=>e.id!==t),$())},addLifeArea(t){if(l.profile.locked)return{ok:!1,reason:"Profile is locked"};const e=String(t||"").trim().slice(0,60);if(!e)return{ok:!1,reason:"Name the life area"};if((l.profile.lifeAreas||[]).length>=20)return{ok:!1,reason:"Max 20 areas"};const a={id:j("a"),title:e,description:""};return l.profile.lifeAreas.push(a),$(),{ok:!0,id:a.id}},updateLifeArea(t,e={}){if(l.profile.locked)return;const a=(l.profile.lifeAreas||[]).find(s=>s.id===t);a&&(e.title!=null&&(a.title=String(e.title).trim().slice(0,60)||a.title),e.description!=null&&(a.description=String(e.description).slice(0,1e3)),$())},moveLifeArea(t,e){if(l.profile.locked)return;const a=l.profile.lifeAreas||[],s=a.findIndex(o=>o.id===t),n=s+e;if(s<0||n<0||n>=a.length)return;const[i]=a.splice(s,1);a.splice(n,0,i),$()},removeLifeArea(t){l.profile.locked||(l.profile.lifeAreas=(l.profile.lifeAreas||[]).filter(e=>e.id!==t),$())},addProfileGoal(t,e,a){if(l.profile.locked)return{ok:!1,reason:"Profile is locked"};const s=String(t||"").trim().slice(0,200);if(!s)return{ok:!1,reason:"Write your goal first"};const n=Gt.includes(e)?e:"short",i=ut[n],o=i.includes(a)?a:i[0];if((l.profile.pGoals||[]).length>=100)return{ok:!1,reason:"Too many goals (100)"};const r={id:j("g"),text:s,term:n,duration:o,createdAt:new Date().toISOString()};return l.profile.pGoals.push(r),$(),{ok:!0,id:r.id}},updateProfileGoal(t,e={}){if(l.profile.locked)return;const a=(l.profile.pGoals||[]).find(s=>s.id===t);if(a){if(e.text!=null&&(a.text=String(e.text).trim().slice(0,200)||a.text),e.term!=null&&Gt.includes(e.term)){a.term=e.term;const s=ut[a.term];s.includes(a.duration)||(a.duration=s[0])}e.duration!=null&&ut[a.term].includes(e.duration)&&(a.duration=e.duration),$()}},removeProfileGoal(t){l.profile.locked||(l.profile.pGoals=(l.profile.pGoals||[]).filter(e=>e.id!==t),$())},addQuote(t,e){if(l.profile.locked)return{ok:!1,reason:"Profile is locked"};const a=String(t||"").trim().slice(0,500);if(!a)return{ok:!1,reason:"Write the quote first"};if((l.profile.quotes||[]).length>=200)return{ok:!1,reason:"Too many quotes (200)"};const s={id:j("q"),text:a,author:String(e||"").trim().slice(0,80),fav:!1,createdAt:new Date().toISOString()};return l.profile.quotes.push(s),$(),{ok:!0,id:s.id}},updateQuote(t,e={}){if(l.profile.locked)return;const a=(l.profile.quotes||[]).find(s=>s.id===t);a&&(e.text!=null&&(a.text=String(e.text).trim().slice(0,500)||a.text),e.author!=null&&(a.author=String(e.author).trim().slice(0,80)),$())},toggleQuoteFav(t){if(l.profile.locked)return;const e=(l.profile.quotes||[]).find(a=>a.id===t);e&&(e.fav=!e.fav,$())},removeQuote(t){l.profile.locked||(l.profile.quotes=(l.profile.quotes||[]).filter(e=>e.id!==t),$())},getCategories(){return Y().map(t=>({...t}))},getCustomCategories(){return H.map(t=>({...t}))},addCategory(t){const e=String(t||"").trim().slice(0,30);if(!e)return{ok:!1,reason:"Type a category name"};if(Y().some(n=>n.label.toLowerCase()===e.toLowerCase()))return{ok:!1,reason:"That category already exists"};if(H.length>=20)return{ok:!1,reason:"Too many categories (max 20 custom)"};let s=`c${Date.now().toString(36)}`;return Y().some(n=>n.id===s)&&(s=`c${Date.now().toString(36)}${Math.floor(Math.random()*99)}`),H.push({id:s,label:e}),$(),{ok:!0,id:s}},renameCategory(t,e){const a=H.find(i=>i.id===t);if(!a)return{ok:!1,reason:"Built-in categories can’t be renamed"};const s=String(e||"").trim().slice(0,30);return s?Y().some(i=>i.id!==t&&i.label.toLowerCase()===s.toLowerCase())?{ok:!1,reason:"That category already exists"}:(a.label=s,$(),{ok:!0}):{ok:!1,reason:"Type a category name"}},updateCategory(t,e={}){const a=H.find(s=>s.id===t);if(!a){const s=Et.find(n=>n.id===t);return s?(e.color!==void 0&&(s.color=String(e.color).slice(0,20)),e.goals!==void 0&&(s.goals=String(e.goals).slice(0,1e3)),$(),{ok:!0}):{ok:!1,reason:"Category not found"}}return e.color!==void 0&&(a.color=String(e.color).slice(0,20)),e.goals!==void 0&&(a.goals=String(e.goals).slice(0,1e3)),$(),{ok:!0}},deleteCategory(t){const e=H.findIndex(a=>a.id===t);return e<0?{ok:!1,reason:"Built-in categories can’t be deleted"}:(H.splice(e,1),l.habits.forEach(a=>{a.category===t&&(a.category="mentally")}),(l.archivedHabits||[]).forEach(a=>{a.category===t&&(a.category="mentally")}),l.pinnedTasks.forEach(a=>{a.category===t&&(a.category="mentally")}),Object.values(l.days).forEach(a=>{(a.tasks||[]).forEach(s=>{s.category===t&&(s.category="mentally")})}),$(),{ok:!0})},getAllTags(){const t=new Map,e=a=>{T(a).forEach(s=>{t.set(s,(t.get(s)||0)+1)})};return l.habits.forEach(a=>e(a.tags)),(l.archivedHabits||[]).forEach(a=>e(a.tags)),l.pinnedTasks.forEach(a=>e(a.tags)),Object.values(l.days).forEach(a=>{(a.tasks||[]).forEach(s=>e(s.tags))}),[...t.entries()].map(([a,s])=>({tag:a,count:s})).sort((a,s)=>s.count-a.count||a.tag.localeCompare(s.tag))},renameTag(t,e){const a=String(t||"").trim(),s=T(e)[0]||"";if(!a||!s)return{ok:!1,reason:"Type a tag name"};if(a.toLowerCase()===s.toLowerCase()){const o=r=>T((r||[]).map(d=>String(d).toLowerCase()===a.toLowerCase()?s:d));return l.habits.forEach(r=>{r.tags=o(r.tags)}),(l.archivedHabits||[]).forEach(r=>{r.tags=o(r.tags)}),l.pinnedTasks.forEach(r=>{r.tags=o(r.tags)}),Object.values(l.days).forEach(r=>{(r.tasks||[]).forEach(d=>{d.tags=o(d.tags)})}),$(),{ok:!0}}const n=this.getAllTags().some(o=>o.tag.toLowerCase()===s.toLowerCase()),i=o=>{const r=(o||[]).map(d=>String(d).toLowerCase()===a.toLowerCase()?s:d);return T(r)};return l.habits.forEach(o=>{o.tags=i(o.tags)}),(l.archivedHabits||[]).forEach(o=>{o.tags=i(o.tags)}),l.pinnedTasks.forEach(o=>{o.tags=i(o.tags)}),Object.values(l.days).forEach(o=>{(o.tasks||[]).forEach(r=>{r.tags=i(r.tags)})}),$(),{ok:!0,merged:n}},deleteTag(t){const e=String(t||"").trim().toLowerCase();if(!e)return{ok:!1,reason:"Pick a tag first"};const a=s=>(s||[]).filter(n=>String(n).toLowerCase()!==e);return l.habits.forEach(s=>{s.tags=a(s.tags)}),(l.archivedHabits||[]).forEach(s=>{s.tags=a(s.tags)}),l.pinnedTasks.forEach(s=>{s.tags=a(s.tags)}),Object.values(l.days).forEach(s=>{(s.tasks||[]).forEach(n=>{n.tags=a(n.tags)})}),$(),{ok:!0}},addTagToHabit(t,e){const a=l.habits.find(n=>n.id===t);if(!a)return{ok:!1,reason:"Pick a habit first"};const s=T(e)[0]||"";return s?(a.tags=T([...a.tags||[],s]),$(),{ok:!0}):{ok:!1,reason:"Type a tag name"}},categoryChart(t,e){const a=["week","month","year"].includes(t)?t:"week",s=`${a}|${e}|${Ne}`;return Ht.key===s?Ht.value:Q(()=>this._buildCategoryChart(a,e,s))},_buildCategoryChart(t,e,a){const s=Y(),n=[];if(t==="year"){const m=String(e).slice(0,4);for(let S=0;S<12;S++){const p=String(S+1).padStart(2,"0"),w=new Date(Number(m),S+1,0).getDate();n.push({label:new Date(Number(m),S,1).toLocaleDateString(void 0,{month:"short"}),title:new Date(Number(m),S,1).toLocaleDateString(void 0,{month:"long",year:"numeric"}),keys:this.rangeKeys(`${m}-${p}-01`,`${m}-${p}-${String(w).padStart(2,"0")}`)})}}else{const[m,S]=this.resolveRange(t,e);this.rangeKeys(m,S).forEach(p=>{const w=new Date(`${p}T00:00:00`);n.push({label:t==="week"?w.toLocaleDateString(void 0,{weekday:"narrow"}):String(w.getDate()),title:p,keys:[p]})})}const i={},o={};s.forEach(m=>{i[m.id]=n.map(()=>0),o[m.id]=0}),n.forEach((m,S)=>{m.keys.forEach(p=>{this.categoryBreakdown(p).forEach(w=>{w.id in i||(i[w.id]=n.map(()=>0),o[w.id]=0),i[w.id][S]+=w.earned||0,o[w.id]+=w.earned||0})})});const r=n.map((m,S)=>s.reduce((p,w)=>p+(i[w.id]?i[w.id][S]:0),0)),d=Math.max(1,...r),c={kind:t,labels:n.map(m=>m.label),titles:n.map(m=>m.title),cats:s.map(m=>({...m})),perCat:i,totals:o,max:d,grandTotal:r.reduce((m,S)=>m+S,0)};return Ht={key:a,value:c},c},getGoals(){return l.goals},getBadges(){return[...l.badges].sort((t,e)=>{const a=re(e.tier)-re(t.tier);return a!==0?a:String(e.earnedAt).localeCompare(String(t.earnedAt))})},topBadges(t=3){return this.getBadges().slice(0,t)},addGoal(t={}){const e=Bt({...t,id:tt("g")});return l.goals.push(e),$(),this.checkGoals(G()),e},updateGoal(t,e={}){const a=l.goals.find(n=>n.id===t);if(!a)return;const s=Bt({...a,...e,id:t});Object.assign(a,s),$(),this.checkGoals(G())},removeGoal(t){l.goals=l.goals.filter(e=>e.id!==t),$()},removeBadge(t){l.badges=l.badges.filter(e=>e.id!==t),$()},perfectDaysCount(){return Q(()=>Object.keys(l.days).filter(t=>{const e=this.scoreFor(t);return e.max>0&&e.percent===100}).length)},taskStreak(t,e){let a=e,s=0;(o=>{const r=l.days[o];return!r||!Array.isArray(r.tasks)?!1:r.tasks.some(d=>d.sourcePinId===t&&d.done)})(a)||(a=ct(a));let i=0;for(;s<400;){s+=1;const o=l.days[a];if(!o||!Array.isArray(o.tasks))break;if(o.tasks.some(r=>r.sourcePinId===t&&r.done)){i+=1,a=ct(a);continue}break}return i},goalProgress(t,e){const a=e||G();if(t.kind==="habit-streak"){const n=this.habitStreak(t.targetId,a);return{current:n,target:t.targetDays,done:n>=t.targetDays}}if(t.kind==="task-streak"){const n=this.taskStreak(t.targetId,a);return{current:n,target:t.targetDays,done:n>=t.targetDays}}const s=this.perfectDaysCount();return{current:s,target:t.targetDays,done:s>=t.targetDays}},checkGoals(t){const e=t||G();let a=[];return l.goals.forEach(s=>{if(l.badges.some(i=>i.goalId===s.id))return;if(this.goalProgress(s,e).done){const i={id:tt("b"),goalId:s.id,title:s.title,tier:s.tier,rewardTitle:s.rewardTitle,earnedAt:new Date().toISOString()};l.badges.push(i),a.push(i)}}),a.length&&$(),a},scoreFor(t){return Q(()=>this._scoreFor(t))},_scoreFor(t){const e=this.getDay(t),a=this.getHabits(t),s=this.isLocked(t),n=l.settings.showConscious!==!1,i=a.reduce((v,A)=>{const Nt=this.habitRating(t,A.id);return v+Math.round(A.points*Nt/5)},0),o=n?a.reduce((v,A)=>v+(this.habitRating(t,A.id)>0?B(A.consciousPoints):0),0):0,r=e.tasks.reduce((v,A)=>v+(A.done?A.points:0),0),d=a.reduce((v,A)=>v+A.points,0),c=n?a.reduce((v,A)=>v+B(A.consciousPoints),0):0,m=e.tasks.reduce((v,A)=>v+A.points,0),S=i+o+r,p=d+c+m,w=a.filter(v=>e.habitMissed&&e.habitMissed[v.id]?!0:s&&this.habitRating(t,v.id)<=0).length,b=e.tasks.filter(v=>v.done?!1:v.missed===!0?!0:v.missed===!1?!1:s).length;return{earned:S,max:p,habitScore:i,consciousScore:o,maxConscious:c,taskScore:r,completedHabits:a.filter(v=>this.habitRating(t,v.id)>0).length,habitAvg:a.length?Math.round(a.reduce((v,A)=>v+this.habitRating(t,A.id),0)/a.length*10)/10:0,totalHabits:a.length,completedTasks:e.tasks.filter(v=>v.done).length,totalTasks:e.tasks.length,missedHabits:w,missedTasks:b,percent:p?Math.round(S/p*100):0,locked:s,submittedAt:e.submittedAt}},monthKeys(t){const e=String(t).slice(0,7);return Object.keys(l.days).filter(a=>a.startsWith(e)).sort()},rangeKeys(t,e){const a=[],s=new Date(`${t}T00:00:00`),n=new Date(`${e}T00:00:00`);let i=0;for(;s<=n&&i<732;)i+=1,a.push(G(s)),s.setDate(s.getDate()+1);return a},resolveRange(t,e){if(t==="day")return[e,e];if(t==="week"){const s=new Date(`${e}T00:00:00`),n=new Date(s);n.setDate(s.getDate()-(s.getDay()-this.getWeekStart()+7)%7);const i=new Date(n);return i.setDate(n.getDate()+6),[G(n),G(i)]}if(t==="month"){const[s,n]=e.split("-").map(Number),i=`${s}-${String(n).padStart(2,"0")}-01`,o=new Date(s,n,0).getDate(),r=`${s}-${String(n).padStart(2,"0")}-${String(o).padStart(2,"0")}`;return[i,r]}if(t==="year"){const s=e.slice(0,4);return[`${s}-01-01`,`${s}-12-31`]}const a=Object.keys(l.days).sort();return a.length?[a[0],a[a.length-1]>e?a[a.length-1]:e]:[e,e]},exportRows(t,e){return Q(()=>this._exportRows(t,e))},_exportRows(t,e){return this.rangeKeys(t,e).map(a=>{const s=this.getDay(a),n=this.getHabits(a),i=this.scoreFor(a),o=this.isLocked(a),r=(c,m)=>m>0?"done":o?"missed":"pending",d=c=>c.done?"done":o?"missed":"pending";return{date:a,earned:i.earned,max:i.max,percent:i.percent,habitScore:i.habitScore,consciousScore:i.consciousScore||0,taskScore:i.taskScore,locked:o,missedHabits:i.missedHabits||0,missedTasks:i.missedTasks||0,note:s.note||"",habits:n.map(c=>{const m=this.habitRating(a,c.id);return{name:c.name,description:String(c.description||""),category:it(D(c.category)),tags:T(c.tags),points:c.points,consciousPoints:this.consciousEnabled()?B(c.consciousPoints):0,rating:m,earned:Math.round(c.points*m/5)+(m>0&&this.consciousEnabled()?B(c.consciousPoints):0),status:r(c.id,m)}}),tasks:s.tasks.map(c=>({title:c.title,category:it(D(c.category)),tags:T(c.tags),points:c.points,rating:Math.max(0,Math.min(5,Number(c.rating)||0)),done:!!c.done,earned:c.done?c.points:0,status:c.forwardedFrom?`forwarded from ${c.forwardedFrom}`:d(c),forwardedFrom:c.forwardedFrom||"",forwardedTo:Array.isArray(c.forwardedTo)?c.forwardedTo:[],description:c.description||"",hasImage:!!c.image}))}})},history(t=14){return Q(()=>Object.keys(l.days).sort().reverse().slice(0,t).map(a=>({date:a,...this.scoreFor(a),note:l.days[a].note,locked:pt(a),submittedAt:l.days[a].submittedAt})))},week(t){return Q(()=>{const e=new Date(t);return e.setDate(e.getDate()-(e.getDay()-this.getWeekStart()+7)%7),e.setHours(0,0,0,0),Array.from({length:7},(a,s)=>{const n=new Date(e);n.setDate(e.getDate()+s);const i=G(n),o=l.days[i];return{date:i,label:n.toLocaleDateString(void 0,{weekday:"short"}),dayOfMonth:n.getDate(),hasRecord:!!o,note:String(o&&o.note||""),locked:pt(i),...this.scoreFor(i)}})})}};function Ie(t){return t>=90?"Excellent":t>=75?"Great day":t>=50?"Keep going":t>0?"Started":"No score yet"}function _(t){return new Date(`${t}T00:00:00`).toLocaleDateString(void 0,{weekday:"long",month:"short",day:"numeric"})}function ma(t){return t?new Date(t).toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"}):""}function St(t){return t>=5?"Excellent":t>=4?"Great":t>=3?"Good":t>=2?"Fair":t>=1?"Low":"Not rated"}const It=document.getElementById("app"),Fe="daily-report-2026-10-01T20-10-50-mupyyh43",ga=`v1.1 — Auto-update · Offline · Backup (${Fe.slice(-8)})`;let f=u.todayKey(),L="today",x=null,h=null,K=!1,xt=!1,ot=null,X=!1,zt=!1,Yt=null,Z="Idle.",q="week",At=null,I="month",Tt=null,N=[],J=0,E=null,P="boot",st=null;const et=new Set;let ht=!1,$t="all",z="short",rt="1 Week";window.addEventListener("beforeinstallprompt",t=>{t.preventDefault(),ot=t});window.addEventListener("appinstalled",()=>{ot=null,y("Daily Report installed"),k()});const fa=[["default","Default"],["points","Points"],["category","Category"],["tags","Tags"]];function ge(t){const e=new Date(`${f}T00:00:00`);e.setDate(e.getDate()+t),f=u.todayKey(e)}let Ft=u.todayKey();function ee(){const t=u.todayKey();if(t===Ft)return!1;const e=Ft;return Ft=t,f===e&&(f=t),At=null,Tt=null,N=[],J=0,!0}function F(t){return{home:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1z"/></svg>',profile:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-6 8-6s8 2 8 6"/></svg>',history:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 8v5l3 2"/><circle cx="12" cy="12" r="9"/></svg>',settings:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H8a1.7 1.7 0 0 0 1-1.5V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V8c.3.7.9 1.2 1.6 1.3H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1.7z"/></svg>',pin:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 4h6l-1 7 3 3v2H7v-2l3-3z" fill="currentColor" stroke="none"/><path d="M12 16v5"/></svg>',forward:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',undo:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9h11a5 5 0 0 1 0 10H8"/><path d="M8 5 4 9l4 4"/></svg>',habit:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7h16M4 12h10M4 17h13"/></svg>'}[t]}function Re(t,e,a){return`
    <div class="stars" data-habit="${t}">
      ${[1,2,3,4,5].map(s=>`
            <button type="button" class="star ${s<=e?"on":""}" data-action="rate-habit" data-id="${t}" data-rating="${s}" ${a?"disabled":""} aria-label="${s} star">★</button>
          `).join("")}
    </div>
  `}function je(t,e,a){return`
    <div class="stars stars-small" data-task="${t}">
      ${[1,2,3,4,5].map(s=>`
            <button type="button" class="star small ${s<=e?"on":""}" data-action="rate-task" data-id="${t}" data-rating="${s}" ${a?"disabled":""} aria-label="${s} star">★</button>
          `).join("")}
    </div>
  `}function Be(t){const e=Number(t)||0;return e?`<span class="conscious-badge">🧠 +${e}</span>`:'<span class="item-meta">No conscious pts</span>'}const ha=["mentally","psychology","physically","spiritually","socially"];function bt(t){const a=u.getCategories().find(i=>i.id===t),s=a&&a.color?a.color:R(t);return`<span class="cat-badge ${ha.includes(t)?`cat-${t}`:"cat-custom"}" style="background:${s}22;color:${s};box-shadow:inset 0 0 0 1px ${s}55">${g(it(t))}</span>`}function ba(t){const e=String(t||"");if(!e)return"Deleted";const a=new Date(e);return Number.isNaN(a.getTime())?"Deleted":`Deleted ${a.toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})}`}const fe={mentally:"#5b8cff",psychology:"#a06bff",physically:"#22b07d",spiritually:"#e8a51c",socially:"#14b8a6"},he=["#f472b6","#38bdf8","#fb923c","#a3e635","#facc15","#e879f9"];function R(t,e){const s=u.getCategories().find(n=>n.id===t);return s&&s.color?s.color:fe[t]?fe[t]:he[(e??0)%he.length]}function at(t){const e=Array.isArray(t)?t.filter(Boolean):[];return e.length?`<div class="tag-row">${e.map(a=>`<span class="tag-chip">#${g(a)}</span>`).join("")}</div>`:""}function Oe(t){return!t||!t.image?"":`<button type="button" class="task-img-thumb" data-action="view-task-image" data-id="${t.id}" aria-label="View attached photo"><img src="${t.image}" alt="Task photo" loading="lazy" /></button>`}function Ge(t){const e=String(t||"");if(!e.trim())return"";const a=e.split(`
`),s=/^\s*(?:•|-|[*])\s+(.*)$/,n=/^\s*\d+[.)]\s+(.*)$/;let i="",o=null;const r=()=>{o&&(i+=o==="ul"?"</ul>":"</ol>",o=null)};return a.forEach(d=>{const c=s.exec(d),m=!c&&n.exec(d);c?(o!=="ul"&&(r(),i+='<ul class="note-list">',o="ul"),i+=`<li>${g(c[1])||"&nbsp;"}</li>`):m?(o!=="ol"&&(r(),i+='<ol class="note-list">',o="ol"),i+=`<li>${g(m[1])||"&nbsp;"}</li>`):d.trim()?(r(),i+=`<p class="note-text">${g(d)}</p>`):(r(),i+='<p class="note-text">&nbsp;</p>')}),r(),i}function ya(t){const e=Ge(t);return e?`<div class="note" style="margin-top:10px">${e}</div>`:""}function qe(t,e,a){if(!t||t.disabled)return;const s=t.value||"",n=s.split(`
`),i=s.slice(0,t.selectionStart).split(`
`).length-1,o=s.slice(0,t.selectionEnd).split(`
`).length-1,r=t.selectionStart!==t.selectionEnd,d=r?i:0,c=r?o:n.length-1;if(e==="bullets"){const m=n.slice(d,c+1).every(S=>/^\s*(?:•|-|[*])\s+/.test(S)||!S.trim());for(let S=d;S<=c;S++)n[S].trim()&&(m?n[S]=n[S].replace(/^\s*(?:•|-|[*])\s+/,""):/^\s*(?:•|-|[*])\s+/.test(n[S])||(n[S]=`• ${n[S].replace(/^\s*/,"")}`))}else{const m=n.slice(d,c+1).every(p=>/^\s*\d+[.)]\s+/.test(p)||!p.trim());let S=1;for(let p=d;p<=c;p++){if(!n[p].trim())continue;const w=n[p].replace(/^\s*(?:\d+[.)]|•|-|[*])\s+/,"").replace(/^\s*/,"");n[p]=m?w:`${S}. ${w}`,S+=1}}t.value=n.join(`
`),a&&a(t.value);try{t.focus()}catch{}}function be(t){qe(document.getElementById("day-note"),t,e=>u.setNote(f,e))}function ye(t){qe(document.getElementById("profile-values"),t,e=>u.setProfileField("values",e))}function va(t){return new Promise(e=>{if(!t||!String(t.type||"").startsWith("image/"))return e(null);const a=URL.createObjectURL(t),s=new Image,n=()=>{try{URL.revokeObjectURL(a)}catch{}},i=(o,r)=>new Promise(d=>{let c=s.naturalWidth||0,m=s.naturalHeight||0;if(!c||!m)return d(null);const S=Math.min(1,o/Math.max(c,m));c=Math.max(1,Math.round(c*S)),m=Math.max(1,Math.round(m*S));const p=document.createElement("canvas");p.width=c,p.height=m;try{p.getContext("2d").drawImage(s,0,0,c,m),d(p.toDataURL("image/jpeg",r))}catch{d(null)}});s.onload=async()=>{try{let o=await i(900,.72);o&&o.length>kt&&(o=await i(600,.62)),o&&o.length>kt&&(o=await i(400,.55)),n(),e(o&&o.length<=kt?o:null)}catch{n(),e(null)}},s.onerror=()=>{n(),e(null)},s.src=a})}function ve(t,e){return`
    <select class="sort-select" data-sort-kind="${t}" aria-label="Sort ${t}">
      ${fa.map(([a,s])=>`<option value="${a}" ${e===a?"selected":""}>${s}</option>`).join("")}
    </select>
  `}function ka(t){const e=u.getBadges(),a=u.topBadges(3),s=t.max>0&&t.percent===100,n=xt?e:a;return`
    <section class="section rewards-section">
      <div class="section-head">
        <h2>Rewards</h2>
        ${e.length>3?`<button class="ghost-btn compact" data-action="toggle-badges">${xt?"Show less":`More (${e.length}) ›`}</button>`:""}
      </div>
      ${s?`
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
          ${n.map(i=>`
            <article class="reward-card tier-${i.tier}">
              <div class="reward-medal">${jt(i.tier)}</div>
              <div>
                <div class="item-title">${g(i.rewardTitle||i.title)}</div>
                <div class="item-meta">${g(i.title)} · ${Ee(i.tier)} · ${_((i.earnedAt||"").slice(0,10))}</div>
              </div>
            </article>
          `).join("")}
        </div>
      `:'<div class="empty">No rewards yet. Set a goal in Settings → Goals &amp; Rewards.</div>'}
    </section>
  `}function Dt(t){return`<span class="streak-badge">${t} day streak</span>`}function We(t){return t?`<span class="forward-badge from">↩ Forwarded from ${g(t)}</span>`:""}function Pt(t){const e=Array.isArray(t)?t.filter(Boolean):[];return e.length?`<span class="forward-badge to">↪ Forwarded to ${g(e[e.length-1])}</span>`:""}function $a(t){const e=new Date(`${t}T00:00:00`);return e.setDate(e.getDate()+1),u.todayKey(e)}function Vt(){return`<button class="ghost-btn compact ${K?"on":""}" data-action="toggle-edit">${K?"Done":"Edit Mode"}</button>`}function wa(t){return t?'<span class="lock-badge">Locked</span>':'<span class="open-badge">Open</span>'}function Sa(){u.checkGoals(f);const t=u.getDay(f),e=u.getSettings(),a=e.showConscious!==!1,s=u.getHabits(f),n=u.getTasks(f),i=u.scoreFor(f),o=Ie(i.percent),r=f===u.todayKey(),d=u.isLocked(f);return`
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
          <div class="score-value">${i.earned}</div>
          <div class="score-unit">of ${i.max||0} points</div>
        </div>
        <div class="hero-side">
          ${wa(d)}
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
        ${d?`Submitted${t.submittedAt?` at ${ma(t.submittedAt)}`:""}.${(i.missedHabits||0)+(i.missedTasks||0)>0?` ${(i.missedHabits||0)+(i.missedTasks||0)} missed (${i.missedHabits||0} habits, ${i.missedTasks||0} tasks) — unchecked items count as missed.`:" Nothing missed — all done."} Unlock in Settings to edit.`:`Auto-locks at ${e.lockTime}. Submit when the day is done. Unchecked items will count as missed once locked.`}
      </p>
      ${d?'<button class="ghost-btn full" data-action="goto-settings">Unlock in Settings</button>':'<button class="primary-btn full" data-action="submit-day">Submit and lock report</button>'}
      <div class="export-row">
        <span class="muted">Export:</span>
        <button class="ghost-btn compact" data-action="open-export">Excel / JSON / PDF</button>
      </div>
    </section>

    ${ka(i)}

    <section class="section">
      <div class="section-head">
        <h2>Habits</h2>
        <div class="head-actions">
          ${ve("habit",e.habitSort||"default")}
          ${Vt()}
          <span class="points">+${i.habitScore}${a&&i.consciousScore?` +${i.consciousScore}🧠`:""} pts</span>
        </div>
      </div>
      <div class="list">
        ${s.length?s.map(c=>{const m=u.habitRating(f,c.id),S=m>0,p=!S&&d,w=u.habitStreak(c.id,f),b=a&&Number(c.consciousPoints)||0;return`
                    <article class="item-card ${S?"done":""} ${p?"missed":""} ${d?"is-locked":""}" style="border-left:3px solid ${R(c.category)}">
                      <button class="check" data-action="toggle-habit" data-id="${c.id}" ${d?"disabled":""}>✓</button>
                      <div class="item-body">
                        <div class="item-title">${g(c.name)} ${p?'<span class="missed-badge">Missed</span>':""}</div>
                        <div class="item-meta">${bt(c.category)} ${c.pin?ft(c.pin):"Not pinned"} · ${m?`${m}/5 ${St(m)}`:d?"Missed":"Not rated"}</div>
                        ${c.description?`<p class="item-desc">${g(c.description)}</p>`:""}
                        ${a?`<div class="item-meta">${Dt(w)} ${Be(b)}</div>`:`<div class="item-meta">${Dt(w)}</div>`}
                        ${Pt(u.habitForwardedTo(f,c.id))}
                        ${at(c.tags)}
                        ${Re(c.id,m,d)}
                      </div>
                      <div class="item-side">
                        <div class="points">+${c.points}${b?` +${b}🧠`:""}</div>
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
          ${ve("task",e.taskSort||"default")}
          ${Vt()}
          <span class="points">+${i.taskScore} pts</span>
        </div>
      </div>
      <div class="list">
        ${n.length?n.map(c=>{const m=!!c.sourcePinId,S=m?u.findPinnedTask(c.sourcePinId):null,p=Math.max(0,Math.min(5,Number(c.rating)||0)),w=!c.done&&d;return`
                    <article class="item-card ${c.done?"done":""} ${w?"missed":""} ${d?"is-locked":""}" style="border-left:3px solid ${R(c.category)}">
                      <button class="check" data-action="toggle-task" data-id="${c.id}" ${d?"disabled":""}>✓</button>
                      <div class="item-body">
                        <div class="item-title">${g(c.title)} ${w?'<span class="missed-badge">Missed</span>':""}</div>
                        <div class="item-meta">${bt(c.category)} ${S?ft(S.pin):"One-time task"} · ${c.done?"Done":d?"Missed":"Pending"} · ${p?`${p}/5 ${St(p)}`:"No rating"}</div>
                        ${c.description?`<p class="item-desc">${g(c.description)}</p>`:""}
                        ${We(c.forwardedFrom)}
                        ${Pt(c.forwardedTo)}
                        ${at(c.tags)}
                        ${c.image?'<span class="task-img-badge">📷 Photo attached</span>':""}
                        ${Oe(c)}
                        ${je(c.id,p,d)}
                      </div>
                      <div class="item-side">
                        <div class="points">+${c.points}</div>
                        <div class="mini-actions">
                          ${K?`<button class="mini-btn on" data-action="open-edit-task" data-id="${c.id}" ${d?"disabled":""}>Edit</button>`:""}
                          <button class="mini-btn" data-action="open-forward-task" data-id="${c.id}" ${d?"disabled":""} title="Forward task to another day">${F("forward")}</button>
                          <button class="mini-btn ${m?"on":""}" data-action="open-pin-task" data-id="${c.id}" ${d?"disabled":""} title="Pin task">${F("pin")}</button>
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
  `}function wt(t){return t==="short"?"#short":t==="medium"?"#medium":"#long"}function xa(){const t=u.getProfile(),e=!!t.locked,a=e?"disabled":"",s=Array.isArray(t.whoAmI)?t.whoAmI:[],n=Array.isArray(t.lifeAreas)?t.lifeAreas:[],i=Array.isArray(t.pGoals)?t.pGoals:[],o=Array.isArray(t.quotes)?t.quotes:[],r=u.profileGoalDurations();r[z].includes(rt)||(rt=r[z][0]);const d=b=>i.filter(v=>v.term===b).length,c=($t==="all"?i:i.filter(b=>b.term===$t)).slice().sort((b,v)=>String(b.createdAt).localeCompare(String(v.createdAt))),m=o.slice().sort((b,v)=>!!b.fav!=!!v.fav?b.fav?-1:1:String(v.createdAt).localeCompare(String(b.createdAt))),S=m.slice(0,3),p=m.slice(3),w=String(t.name||"?").trim().slice(0,1).toUpperCase()||"?";return`
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
          <div class="item-meta">${s.length?`${s.length} identities`:"No identities yet"} · ${n.length} life areas · ${i.length} goals · ${o.length} quotes</div>
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
        <span class="item-meta">${s.length}/50</span>
      </div>
      ${e?"":`
        <div style="display:flex;gap:8px;margin-bottom:10px">
          <input id="new-whoami" maxlength="120" placeholder="e.g. A disciplined father…" style="flex:1;min-width:0" />
          <button class="primary-btn compact-btn" data-action="add-whoami">Add</button>
        </div>
      `}
      <div class="habit-manage">
        ${s.length?s.map((b,v)=>`
          <article class="manage-card whoami-row">
            <span class="whoami-num">${v+1}</span>
            <input class="whoami-input" data-whoami="${b.id}" maxlength="120" value="${g(b.text)}" ${a} aria-label="Who I am ${v+1}" />
            ${e?"":`
              <div class="mini-actions">
                <button class="mini-btn" data-action="move-whoami" data-id="${b.id}" data-dir="-1" ${v===0?"disabled":""} title="Move up">↑</button>
                <button class="mini-btn" data-action="move-whoami" data-id="${b.id}" data-dir="1" ${v===s.length-1?"disabled":""} title="Move down">↓</button>
                <button class="mini-btn" data-action="remove-whoami" data-id="${b.id}" title="Remove">✕</button>
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
          <p class="muted tight">Cards — tap one to open and describe it. Reorder with ↑ ↓.</p>
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
          ${n.map((b,v)=>{const A=st===b.id;return`
              <article class="life-card ${A?"open":""}">
                <div class="life-head">
                  <button type="button" class="life-toggle" data-action="toggle-lifearea" data-id="${b.id}" aria-expanded="${A?"true":"false"}">
                    <b>${g(b.title)}</b>
                    <span>${A?"▾":"▸"}</span>
                  </button>
                  ${e?"":`
                    <div class="mini-actions">
                      <button class="mini-btn" data-action="move-lifearea" data-id="${b.id}" data-dir="-1" ${v===0?"disabled":""} title="Move up">↑</button>
                      <button class="mini-btn" data-action="move-lifearea" data-id="${b.id}" data-dir="1" ${v===n.length-1?"disabled":""} title="Move down">↓</button>
                    </div>
                  `}
                </div>
                ${A?`
                  <div class="life-body">
                    ${e?b.description?`<p class="item-desc">${g(b.description)}</p>`:'<p class="item-meta">No description yet.</p>':`
                      <label>Title
                        <input data-lifearea-title="${b.id}" maxlength="60" value="${g(b.title)}" />
                      </label>
                      <label>Description
                        <textarea data-lifearea-desc="${b.id}" maxlength="1000" placeholder="What does this area mean to you? What is going well?" style="min-height:70px">${g(b.description)}</textarea>
                      </label>
                      <button class="ghost-btn compact danger" data-action="remove-lifearea" data-id="${b.id}">Remove area</button>
                    `}
                  </div>
                `:b.description?`<p class="item-desc life-preview">${g(b.description.slice(0,90))}${b.description.length>90?"…":""}</p>`:""}
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
        <p class="muted tight">The principles you live by — one per line.</p>
        ${e?t.values.trim()?`<div class="values-list">${Ge(t.values)}</div>`:'<p class="item-meta">No values yet.</p>':`
            <div class="note-toolbar">
              <button type="button" class="ghost-btn compact" data-action="values-bullets" title="Bullet list (select lines or all values)">• Bullets</button>
              <button type="button" class="ghost-btn compact" data-action="values-numbered" title="Numbered list (select lines or all values)">1. Numbered</button>
            </div>
            <textarea id="profile-values" data-profile="values" maxlength="1000" placeholder="e.g.&#10;• Honesty&#10;• Discipline&#10;• Mercy" style="min-height:110px">${g(t.values)}</textarea>
          `}
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
              ${["short","medium","long"].map(b=>`<button type="button" class="chip hashtag-${b} ${z===b?"on":""}" data-action="set-pgoal-term" data-term="${b}">${wt(b)}</button>`).join("")}
            </div>
          </div>
          <div class="row-2">
            <label>Timeframe
              <select id="new-pgoal-duration">
                ${r[z].map(b=>`<option value="${g(b)}" ${rt===b?"selected":""}>${g(b)}</option>`).join("")}
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
        ${[["all",`All (${i.length})`],["short",`#short (${d("short")})`],["medium",`#medium (${d("medium")})`],["long",`#long (${d("long")})`]].map(([b,v])=>`<button type="button" class="chip ${$t===b?"on":""}" data-action="set-pgoal-filter" data-filter="${b}">${v}</button>`).join("")}
      </div>
      <div class="habit-manage">
        ${c.length?c.map(b=>`
          <article class="manage-card pgoal-card term-${b.term}">
            <div class="pgoal-top">
              <span class="hashtag hashtag-${b.term}">${wt(b.term)}</span>
              <span class="duration-pill">⏳ ${g(b.duration)}</span>
              ${e?"":`<button class="mini-btn" data-action="remove-pgoal" data-id="${b.id}" title="Remove goal">✕</button>`}
            </div>
            ${e?`<div class="item-title" style="margin-top:6px">${g(b.text)}</div>`:`
                <input data-pgoal-text="${b.id}" maxlength="200" value="${g(b.text)}" style="margin-top:8px" aria-label="Goal text" />
                <div class="row-2" style="margin-top:8px">
                  <select data-pgoal-term="${b.id}" aria-label="Goal term">
                    ${["short","medium","long"].map(v=>`<option value="${v}" ${b.term===v?"selected":""}>${wt(v)}</option>`).join("")}
                  </select>
                  <select data-pgoal-duration="${b.id}" aria-label="Goal duration">
                    ${r[b.term].map(v=>`<option value="${g(v)}" ${b.duration===v?"selected":""}>${g(v)}</option>`).join("")}
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
        <span class="item-meta">★ ${o.filter(b=>b.fav).length} · ${o.length} total</span>
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
      ${m.length?`
        <div class="quote-fav-head"><span class="item-title">★ Top 3 favourites</span></div>
        <div class="habit-manage" style="margin-bottom:8px">
          ${S.map(b=>ke(b,e)).join("")}
        </div>
        ${p.length?`
          <button class="ghost-btn compact full" data-action="toggle-quotes">${ht?"Show less ▴":`More (${p.length}) — see the rest ▾`}</button>
          ${ht?`<div class="habit-manage" style="margin-top:8px">${p.map(b=>ke(b,e)).join("")}</div>`:""}
        `:ht&&!p.length?'<p class="item-meta">No more quotes — that is all of them.</p>':""}
      `:'<div class="empty">No quotes yet — add the words that move you.</div>'}
    </section>
  `}function ke(t,e){return`
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
  `}function Aa(){document.querySelectorAll("[data-profile]").forEach(t=>{t.addEventListener("input",()=>{u.setProfileField(t.dataset.profile,t.value)||k()})}),document.querySelectorAll("[data-lifearea-title]").forEach(t=>{t.addEventListener("change",()=>{u.updateLifeArea(t.dataset.lifeareaTitle,{title:t.value}),k()})}),document.querySelectorAll("[data-lifearea-desc]").forEach(t=>{t.addEventListener("input",()=>{u.updateLifeArea(t.dataset.lifeareaDesc,{description:t.value})})}),document.querySelectorAll("[data-pgoal-text]").forEach(t=>{t.addEventListener("change",()=>{u.updateProfileGoal(t.dataset.pgoalText,{text:t.value}),k()})}),document.querySelectorAll("[data-pgoal-term]").forEach(t=>{t.addEventListener("change",()=>{u.updateProfileGoal(t.dataset.pgoalTerm,{term:t.value}),k()})}),document.querySelectorAll("[data-pgoal-duration]").forEach(t=>{t.addEventListener("change",()=>{u.updateProfileGoal(t.dataset.pgoalDuration,{duration:t.value}),k()})})}function Ta(){const t=u.week(new Date(`${f}T00:00:00`)),e=t.reduce((s,n)=>s+n.earned,0),a=Math.round(e/7);return`
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
          ${t.map(s=>`
                <button class="day-cell ${s.date===f?"active":""} ${s.earned>0?"done":""}" data-action="pick-date" data-date="${s.date}">
                  <span>${s.label.slice(0,2)}</span>
                  <b>${s.earned}</b>
                  ${s.locked?'<i class="dot-lock"></i>':""}
                </button>
              `).join("")}
        </div>
      </section>
    </section>
  `}function Da(){const t=At||M(f),e=se(t),a=u.todayKey();return`
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
          ${ie().map(s=>`<span>${s.label.slice(0,1)}</span>`).join("")}
        </div>
        <div class="pin-cal-grid">
          ${e.map(s=>{if(!s)return"<span></span>";const n=u.scoreFor(s),i=s===f?"on-selected":n.percent>=100?"on-perfect":n.earned>0?"on":"",o=n.locked?'<i class="dot-lock"></i>':"";return`<button type="button" class="pin-cal-day hist-cal-day ${i} ${s===a?"is-today":""}" data-action="pick-date" data-date="${s}" title="${g(s)}: ${n.earned}/${n.max} pts (${n.percent}%)"><b>${Number(s.slice(8,10))}</b><span>${n.earned}</span>${o}</button>`}).join("")}
        </div>
      </div>
    </section>
  `}function Pa(t){const e=new Map((t||[]).map(i=>[i.date,i])),a=Tt||M(f),s=se(a),n=u.todayKey();return`
    <div class="pin-cal">
      <div class="pin-cal-head"><b>${Lt(a)}</b><span class="item-meta">${e.size} locked</span></div>
      <div class="pin-cal-grid pin-cal-week">
        ${ie().map(i=>`<span>${i.label.slice(0,1)}</span>`).join("")}
      </div>
      <div class="pin-cal-grid">
        ${s.map(i=>{if(!i)return"<span></span>";const o=e.get(i),r=!!o,d=N.includes(i)?"on-selected":r?"on-locked":"on-open",c=u.scoreFor(i),m=o?o.earned:c.earned;return`<button type="button" class="pin-cal-day hist-cal-day ${d} ${i===n?"is-today":""}" data-action="toggle-locked-day" data-date="${i}" title="${g(i)}: ${r?"Locked":"Open"} — ${m} pts"><b>${Number(i.slice(8,10))}</b><span>${m}</span></button>`}).join("")}
      </div>
    </div>
  `}function Ca(){return`
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
  `}function Ea(){const t=u.week(new Date(`${f}T00:00:00`)),e=u.todayKey(),a=`${_(t[0].date)} – ${_(t[6].date)}`,s=t.reduce((o,r)=>o+(r.earned||0),0),n=t.reduce((o,r)=>o+(r.max||0),0),i=t.filter(o=>o.hasRecord).length;return`
    <div class="topbar">
      <div>
        <p class="kicker">Archive</p>
        <h1>Past reports</h1>
      </div>
      <button class="ghost-btn compact" data-action="open-export">Export</button>
    </div>
    ${Da()}
    ${Ta()}
    ${Ca()}
    <section class="section">
      <div class="section-head">
        <h2>Week</h2>
        <span class="item-meta">${a}</span>
      </div>
      <p class="item-meta">${i} of 7 days reported · ${s} of ${n} pts</p>
      <div class="history-list">
        ${t.map(o=>{const r=!o.hasRecord,d=(o.missedHabits||0)+(o.missedTasks||0),c=r?"No report":`${o.locked?"Locked":"Open"} · ${Ie(o.percent)} · ${o.earned}/${o.max} pts (${o.percent}%)${o.locked&&d>0?` · ❌ ${d} missed`:""}`;return`
              <article class="history-card ${r?"is-empty":""} ${o.date===e?"is-today":""} ${o.date===f?"is-selected":""}">
                <div class="section-head">
                  <div>
                    <div class="item-title">${g(o.label)} ${_(o.date)}</div>
                    <div class="item-meta">${g(c)}</div>
                  </div>
                  <button class="ghost-btn compact" data-action="pick-date" data-date="${o.date}">${r?"Add":"Open"}</button>
                </div>
                <div class="bar"><span style="width:${o.percent}%"></span></div>
                ${o.note?ya(o.note):`<p class="item-meta">${r?"Nothing recorded this day.":"No note."}</p>`}
              </article>
            `}).join("")}
      </div>
    </section>
  `}function La(t,e){const a=new Date(`${t}T00:00:00`);return a.setDate(a.getDate()+e),u.todayKey(a)}function Na(){return q==="month"?`${mt(M(f),J)}-15`:q==="year"?`${Number(f.slice(0,4))+J}-06-15`:La(f,J*7)}function Ma(t){const[e,a]=u.resolveRange(q,t);return q==="week"?`${_(e)} – ${_(a)}`:q==="month"?Lt(e.slice(0,7)):e.slice(0,4)}function Ha(){const t=Na(),e=u.categoryChart(q,t),a=J===0?q==="week"?"This week":q==="month"?"This month":"This year":Ma(t),s=e.labels.map((i,o)=>{const r=e.cats.reduce((c,m)=>c+(e.perCat[m.id]?e.perCat[m.id][o]:0),0),d=e.cats.map((c,m)=>({cat:c,value:e.perCat[c.id]?e.perCat[c.id][o]:0,ci:m})).filter(c=>c.value>0).map(c=>`<span class="chart-seg" style="height:${Math.max(2,Math.round(c.value/e.max*100))}%;background:${R(c.cat.id,c.ci)}" title="${g(c.cat.label)}: ${c.value} pts"></span>`).join("");return`
      <div class="chart-col" title="${g(e.titles[o])}: ${r} pts">
        <div class="chart-bar">${d||'<span class="chart-empty"></span>'}</div>
        <span class="chart-x">${g(i)}</span>
      </div>
    `}).join(""),n=e.cats.map((i,o)=>`
      <span class="chart-legend-item"><i style="background:${R(i.id,o)}"></i>${g(i.label)} <b>${e.totals[i.id]||0}</b></span>
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
          ${["week","month","year"].map(i=>`<button type="button" class="chip ${q===i?"on":""}" data-action="set-chart-range" data-range="${i}">${i[0].toUpperCase()}${i.slice(1)}</button>`).join("")}
        </div>
        <button type="button" class="mini-btn" data-action="chart-nav" data-dir="1" aria-label="Next ${q}">›</button>
      </div>
      <div class="chart-wrap${e.labels.length>12?" scroll-x":""}">${s}</div>
      <div class="chart-legend">${n}</div>
    </section>
  `}function Ia(){u.getDay(f);const t=u.isLocked(f),e=u.consciousEnabled(),a=u.categoryBreakdown(f),s=a.reduce((i,o)=>i+o.earned,0),n=a.reduce((i,o)=>i+o.max,0);return`
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
          <div class="score-value">${s}</div>
          <div class="score-unit">of ${n||0} category points</div>
        </div>
        <div class="grade-pill">${_(f)}</div>
      </div>
      <p class="lock-hint">Habits and tasks grouped by category.</p>
    </section>
    ${Ha()}
    ${a.map(i=>{const o=i.max?Math.round(i.earned/i.max*100):0,r=R(i.id);return`
          <section class="section">
            <article class="manage-card cat-card cat-${i.id}" style="border-left:4px solid ${r};background:linear-gradient(180deg, ${r}14, var(--card) 60%)">
              <div class="section-head">
                <div>
                  <div class="item-title">${i.label}</div>
                  <div class="item-meta">${i.completed}/${i.total} done · rating ${i.habitAvg||0}/5</div>
                </div>
                <div class="points">${i.earned}/${i.max} pts</div>
              </div>
              <div class="bar"><span style="width:${o}%;background:${r}"></span></div>
            </article>
            <div class="list" style="margin-top:10px">
              ${i.habits.length||i.tasks.length?`
                    ${i.habits.map(d=>{const c=u.habitRating(f,d.id),m=!c&&t,S=u.habitStreak(d.id,f),p=e&&Number(d.consciousPoints)||0,w=c>0?p:0,b=Math.round(d.points*c/5)+w,v=d.points+p;return`
                           <article class="item-card ${c?"done":""} ${m?"missed":""} ${t?"is-locked":""}" style="border-left:3px solid ${R(d.category)};background:linear-gradient(180deg, ${R(d.category)}10, var(--card) 60%)">
                             <button class="check" data-action="toggle-habit" data-id="${d.id}" ${t?"disabled":""}>✓</button>
                             <div class="item-body">
                               <div class="item-title">${g(d.name)} ${m?'<span class="missed-badge">Missed</span>':""}</div>
                               <div class="item-meta">Habit · ${c?`${c}/5 ${St(c)}`:t?"Missed":"Not rated"} · ${Dt(S)}${e?` ${Be(p)}`:""}</div>
                              ${d.description?`<p class="item-desc">${g(d.description)}</p>`:""}
                              ${Pt(u.habitForwardedTo(f,d.id))}
                              ${at(d.tags)}
                              ${Re(d.id,c,t)}
                            </div>
                            <div class="item-side">
                              <div class="points">${b}/${v}</div>
                              <div class="mini-actions">
                                ${K?`<button class="mini-btn on" data-action="open-edit-habit" data-id="${d.id}" ${t?"disabled":""}>Edit</button>`:""}
                                <button class="mini-btn" data-action="open-forward-habit" data-id="${d.id}" ${t?"disabled":""} title="Forward habit to another day">${F("forward")}</button>
                              </div>
                            </div>
                          </article>
                        `}).join("")}
                    ${i.tasks.map(d=>{const c=Math.max(0,Math.min(5,Number(d.rating)||0)),m=!d.done&&t;return`
                           <article class="item-card ${d.done?"done":""} ${m?"missed":""} ${t?"is-locked":""}" style="border-left:3px solid ${R(d.category)};background:linear-gradient(180deg, ${R(d.category)}10, var(--card) 60%)">
                             <button class="check" data-action="toggle-task" data-id="${d.id}" ${t?"disabled":""}>✓</button>
                             <div class="item-body">
                               <div class="item-title">${g(d.title)} ${m?'<span class="missed-badge">Missed</span>':""}</div>
                               <div class="item-meta">Task · ${d.done?"Done":t?"Missed":"Pending"} · ${c?`${c}/5 ${St(c)}`:"No rating"}${d.description?` · ${g(d.description)}`:""}</div>
                              ${We(d.forwardedFrom)}
                              ${Pt(d.forwardedTo)}
                              ${at(d.tags)}
                              ${d.image?'<span class="task-img-badge">📷 Photo attached</span>':""}
                              ${Oe(d)}
                              ${je(d.id,c,t)}
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
  `}function Ct(t){return`${t||"daily-report-backup"}-${u.todayKey()}.json`}function Fa(){const t=u.getInstalledAt(),e=String(t).slice(0,10),a=new Date(`${e}T00:00:00`),s=new Date(`${u.todayKey()}T00:00:00`),n=Number.isNaN(a.getTime())?1:Math.max(1,Math.round((s-a)/864e5)+1),i=String(Number(e.slice(8,10))).padStart(2,"0"),o=e.slice(5,7),r=e.slice(2,4),d=/^\d{4}-\d{2}-\d{2}$/.test(e)?`${i}/${o}/${r}`:e,c=Math.floor((n-1)/365)+1;return`Using Daily Report since ${d} · day ${n} · year ${c}`}function _e(){return typeof window.showDirectoryPicker=="function"}function ae(){return new Promise((t,e)=>{const a=indexedDB.open("daily-report-pwa",1);a.onupgradeneeded=()=>a.result.createObjectStore("kv"),a.onsuccess=()=>t(a.result),a.onerror=()=>e(a.error)})}function Ra(t){return ae().then(e=>new Promise((a,s)=>{const n=e.transaction("kv","readonly").objectStore("kv").get(t);n.onsuccess=()=>a(n.result),n.onerror=()=>s(n.error)}))}function ja(t,e){return ae().then(a=>new Promise((s,n)=>{const i=a.transaction("kv","readwrite");i.objectStore("kv").put(e,t),i.oncomplete=()=>s(),i.onerror=()=>n(i.error)}))}function Ba(t){return ae().then(e=>new Promise((a,s)=>{const n=e.transaction("kv","readwrite");n.objectStore("kv").delete(t),n.oncomplete=()=>a(),n.onerror=()=>s(n.error)}))}function Oa(){return!_e()||typeof indexedDB>"u"?(P="unsupported",Promise.resolve()):Ra("backupDir").then(t=>{if(E=t||null,!E){P="unset";return}return E.queryPermission({mode:"readwrite"}).then(e=>{P=e==="granted"?"granted":"prompt"}).catch(()=>{P="prompt"})}).catch(()=>{E=null,P="unset"})}function Ga(){return P==="unsupported"?"Folder picking needs Chrome/Edge on desktop — on phones backups download instead.":P==="unset"?"No folder chosen yet.":P==="prompt"?"Tap Choose folder to allow access again.":P==="denied"?"Access was denied — choose the folder again.":P==="granted"&&E?`Folder: ${E.name}`:"Checking…"}async function qa(){if(!_e()){y("Folder access needs Chrome or Edge");return}try{const t=await window.showDirectoryPicker({id:"daily-report-backup",mode:"readwrite"});await ja("backupDir",t),E=t,P="granted",y("Backup folder set")}catch(t){t&&t.name==="AbortError"||y("Couldn't open that folder")}k()}async function Wa(){try{await Ba("backupDir")}catch{y("Couldn't remove folder");return}E=null,P="unset",y("Backup folder removed"),k()}async function _a(){if(E){try{const t=await E.requestPermission({mode:"readwrite"});P=t==="granted"?"granted":"denied",y(t==="granted"?"Folder access granted":"Access denied")}catch{P="denied"}k()}}async function Ua(){const t=u.exportBackup(),e=Ct();if(P==="granted"&&E)try{const s=await(await E.getFileHandle(e,{create:!0})).createWritable();await s.write(t),await s.close(),y("Backup saved to your folder"),Ue();return}catch{}dt(e,t,"application/json"),y("Backup downloaded")}async function za(){if(P!=="granted"||!E)return[];const t=[];try{for await(const e of E.values())if(e&&e.kind==="file"&&/\.json$/i.test(e.name))try{const a=await e.getFile();t.push({name:e.name,modified:a.lastModified})}catch{}}catch{return t}return t.sort((e,a)=>a.modified-e.modified),t}async function Ue(){const t=document.getElementById("folder-backup-list");if(!t)return;if(P!=="granted"||!E){t.innerHTML='<button class="ghost-btn compact" data-action="trigger-import">Import from a file instead</button>';return}t.innerHTML='<p class="item-meta">Loading backups…</p>';const e=await za();if(!document.getElementById("folder-backup-list"))return;e.length?t.innerHTML=e.map(s=>`
            <div style="display:flex;gap:8px;align-items:center;margin-bottom:6px">
              <span class="item-meta" style="flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${g(s.name)}</span>
              <button class="ghost-btn compact" data-action="restore-backup" data-name="${g(s.name)}">Restore</button>
            </div>
          `).join(""):t.innerHTML='<p class="item-meta">Folder is empty — press Export backup now to create the first backup.</p>';const a=document.createElement("div");a.innerHTML='<button class="ghost-btn compact" data-action="trigger-import">Import from a file instead</button>',t.appendChild(a)}async function Ya(t){if(E)try{const a=await(await E.getFileHandle(t)).getFile();ze(await a.text(),t)}catch{y("Couldn't read that backup")}}function ze(t,e){let a;try{a=JSON.parse(t)}catch{y("That file isn't valid JSON.");return}const s=u.backupKind(a);if(s==="ok"){if(!window.confirm(`Replace ALL app data with "${e}"?`))return;dt(Ct("daily-report-pre-import"),u.exportBackup(),"application/json"),u.importBackup(a),y("Backup imported"),k();return}if(s==="report-export"){const n=u.previewReport(a);if(!n.days){y("That report file has no day rows to import.");return}if(!window.confirm(`Import ${n.days} day(s) (${n.start} → ${n.end}) from "${e}" as locked history?

${n.newHabits} new habit(s) will be added to your list.
Days already in the app on those dates will be overwritten.`))return;dt(Ct("daily-report-pre-import"),u.exportBackup(),"application/json");const o=u.importReport(a);if(!o){y("That file doesn't look like a valid Daily Report backup.");return}y(`Imported ${o.days} day(s)${o.habits?` + ${o.habits} new habit(s)`:""}`),k();return}if(s==="wrong-app"){y("That backup belongs to another app (e.g. Iron Log) — it can’t be imported into Daily Report.");return}y("That file doesn't look like a valid Daily Report backup.")}async function Va(){if(!ot){y("Use the browser menu: Install / Add to Home Screen");return}try{ot.prompt();const t=await ot.userChoice;t&&t.outcome==="accepted"&&y("Installing Daily Report…")}catch{}ot=null,k()}async function Ja(){const t=`./version.json?v=${Date.now()}`,e=await fetch(t,{cache:"no-store"});if(!e.ok)throw new Error(`http ${e.status}`);const a=await e.json(),s=a&&(a.version||a.v)||null;if(!s)throw new Error("no version field");return String(s)}async function Qa(){X=!0,zt=!1,Z="Checking for updates… (needs internet)",k();try{if("serviceWorker"in navigator&&navigator.serviceWorker.getRegistration){const e=await navigator.serviceWorker.getRegistration().catch(()=>null);e&&e.update&&e.update().catch(()=>{})}}catch{}if(typeof fetch>"u"){X=!1,Z="This browser can’t check — but the app itself works offline. Use Export backup to protect your data.",k();return}const t=setTimeout(()=>{X&&(X=!1,Z="Couldn't reach the server — offline? The app itself works offline; updating needs internet.",k())},15e3);try{const e=await Ja();if(clearTimeout(t),X=!1,Yt=e,e&&e!==Fe){zt=!0,Z="Update found — updating automatically…",k(),await Ye(!0);return}Z="You're on the latest version. The app works offline."}catch{clearTimeout(t),X=!1,Z="Couldn't reach the server — offline, or this file wasn't opened from the installed/hosted app. The app itself works offline; updating needs internet."}k()}function $e(t){return new Promise(e=>{if(!("serviceWorker"in navigator))return e();const a=()=>e(),s=setTimeout(()=>{try{navigator.serviceWorker.removeEventListener("controllerchange",a)}catch{}e()},t||4e3),n=()=>{clearTimeout(s);try{navigator.serviceWorker.removeEventListener("controllerchange",n)}catch{}e()};try{navigator.serviceWorker.addEventListener("controllerchange",n)}catch{e()}})}async function Ye(t){var a;try{dt(Ct("daily-report-pre-update"),u.exportBackup(),"application/json")}catch{}y("Backup saved — updating app…"),Z=`Backup saved — updating${Yt?` to ${String(Yt).slice(-8)}`:""}…`,k();const e=()=>{const s=window.location.href.includes("?")?"&":"?";try{window.location.replace(`${window.location.href.split("#")[0]}${s}v=${Date.now()}#updated`)}catch{window.location.reload()}setTimeout(()=>{try{window.location.reload()}catch{}},2500)};try{if("serviceWorker"in navigator&&navigator.serviceWorker.getRegistration){const s=await navigator.serviceWorker.getRegistration().catch(()=>null);if(s){const n=s.waiting;if(n){try{n.postMessage("SKIP_WAITING")}catch{try{s.waiting.postMessage({type:"SKIP_WAITING"})}catch{}}await $e(4e3),e();return}try{await s.update()}catch{}const i=await navigator.serviceWorker.getRegistration().catch(()=>s),o=(i||s).waiting||(i||s).installing;if(o){try{o.postMessage("SKIP_WAITING")}catch{}try{(a=(i||s).waiting)==null||a.postMessage("SKIP_WAITING")}catch{}await $e(5e3),e();return}try{const r=navigator.serviceWorker.controller;r&&r.postMessage({type:"CLEAR_APP_CACHES"})}catch{}try{if(typeof caches<"u"){const r=await caches.keys().catch(()=>[]);await Promise.all(r.filter(d=>d.startsWith("daily-report-")).map(d=>caches.delete(d).catch(()=>!1)))}}catch{}try{await fetch(`./index.html?v=${Date.now()}`,{cache:"reload"})}catch{}try{await fetch(`./version.json?v=${Date.now()}`,{cache:"reload"})}catch{}try{await(i||s).unregister()}catch{}e();return}}}catch{}try{await fetch(`./index.html?v=${Date.now()}`,{cache:"reload"})}catch{}setTimeout(e,600)}function Xa(){const t=u.getSettings(),e=u.getAllHabits(),a=u.getArchivedHabits(),s=u.getPinnedTasks(),n=u.lockedReports();return`
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
          ${[0,1,2,3,4,5,6].map(i=>{const o=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];return`<option value="${i}" ${u.getWeekStart()===i?"selected":""}>${o[i]}</option>`}).join("")}
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
      <p class="item-meta">Version: ${g(ga)}</p>
      <p class="item-meta">📅 ${g(Fa())}</p>
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:8px">
        <button class="primary-btn" data-action="check-updates" ${X?"disabled":""}>${X?"Checking…":"Check for updates"}</button>
        ${zt?'<button class="primary-btn" data-action="apply-update">Restart with update</button>':""}
      </div>
      <p class="item-meta">${g(Z)}</p>
    </section>

    <section class="manage-card">
      <h2>Data backup</h2>
      <p class="muted tight">Pick a backup folder once (Chrome/Edge on desktop) and exports save straight into it. On phones, backups download to your Downloads folder instead. Import accepts full backups (<b>daily-report-backup-*.json</b>) or month/week report exports, which are added as locked history.</p>
      <p class="item-meta">${g(Ga())}</p>
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:8px">
        ${P==="prompt"?'<button class="primary-btn" data-action="grant-folder">Allow access</button>':'<button class="ghost-btn compact" data-action="choose-folder">Choose folder</button>'}
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
        ${u.getCategories().map(i=>{const o=u.getCustomCategories().some(m=>m.id===i.id),r=i.color||R(i.id),d=i.goals||"",c=et.has(i.id);return`
              <article class="manage-card cat-manage-card ${c?"open":""}">
                <div class="cat-manage-head">
                  <button type="button" class="cat-manage-toggle" data-action="toggle-cat" data-id="${i.id}" aria-expanded="${c?"true":"false"}" aria-controls="cat-editor-${i.id}">
                    <span class="cat-chevron" aria-hidden="true">${c?"▾":"▸"}</span>
                    <i class="cat-swatch" style="background:${g(r)}"></i>
                    <span class="cat-manage-name">${g(it(i.id))}</span>
                    ${d?'<span class="cat-goal-flag">goals</span>':""}
                  </button>
                  <div class="mini-actions">
                    ${o?`<button class="mini-btn on" data-action="rename-category" data-id="${i.id}">Rename</button>`:""}
                    ${o?`<button class="mini-btn" data-action="delete-category" data-id="${i.id}">✕</button>`:""}
                  </div>
                </div>
                ${c?`
                      <div class="cat-manage-body" id="cat-editor-${i.id}">
                        <div class="cat-manage-row">
                          <label>Colour
                            <input type="color" data-cat-color="${i.id}" value="${g(r)}" aria-label="Colour for ${g(i.label||it(i.id))}" />
                          </label>
                          <div class="cat-goals-wrap">
                            <label>Goals (bullet points)
                              <textarea data-cat-goals="${i.id}" maxlength="1000" placeholder="• Goal one&#10;• Goal two&#10;• Goal three" style="min-height:80px">${g(d)}</textarea>
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
        ${(()=>{const i=u.getAllTags();return i.length?i.map(({tag:o,count:r})=>`
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
          ${u.getAllHabits().map(i=>`<option value="${i.id}">${g(i.name)}</option>`).join("")}
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
        ${u.getGoals().length?u.getGoals().map(i=>{var c,m;const o=u.goalProgress(i,f),r=u.getBadges().some(S=>S.goalId===i.id),d=i.kind==="habit-streak"?((c=u.findHabit(i.targetId))==null?void 0:c.name)||"Deleted habit":i.kind==="task-streak"?((m=u.findPinnedTask(i.targetId))==null?void 0:m.title)||"Deleted task":"Any day at 100%";return`
                    <article class="manage-card goal-card ${r?"goal-earned":""}">
                      <div class="section-head">
                        <div>
                          <div class="item-title">${jt(i.tier)} ${g(i.title)}</div>
                          <div class="item-meta">${Ee(i.tier)} · “${g(i.rewardTitle)}” · ${g(d)}</div>
                          <div class="item-meta">${o.current}/${o.target} days ${r?"· Earned ✓":""}</div>
                          <div class="bar"><span style="width:${Math.min(100,Math.round(o.current/o.target*100))}%"></span></div>
                        </div>
                        <div class="mini-actions">
                          <button class="mini-btn on" data-action="open-edit-goal" data-id="${i.id}">Edit</button>
                          <button class="mini-btn" data-action="remove-goal" data-id="${i.id}">✕</button>
                        </div>
                      </div>
                    </article>
                  `}).join(""):'<div class="empty">No goals yet. Tap Add goal to create your first reward.</div>'}
      </div>
      ${u.getBadges().length?`
            <div class="section-head" style="margin-top:14px"><h2>Earned badges</h2></div>
            <div class="rewards-grid">
              ${u.getBadges().map(i=>`
                <article class="reward-card tier-${i.tier}">
                  <div class="reward-medal">${jt(i.tier)}</div>
                  <div>
                    <div class="item-title">${g(i.rewardTitle||i.title)}</div>
                    <div class="item-meta">${g(i.title)} · ${_((i.earnedAt||"").slice(0,10))}</div>
                  </div>
                  <button class="mini-btn" data-action="remove-badge" data-id="${i.id}">✕</button>
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
      ${Pa(n)}
      ${N.length?`
        <div class="chip-row" style="margin-top:10px">
          ${[...N].sort().map(i=>`<button type="button" class="chip on" data-action="toggle-locked-day" data-date="${i}" title="Tap to remove">${i} ✕</button>`).join("")}
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
        ${e.length?e.map(i=>`
                    <article class="manage-card" style="${i.pin?`border-left:4px solid ${R(i.category)}`:""}">
                      <div class="section-head">
                        <div>
                          <div class="item-title">${g(i.name)}</div>
                          <div class="item-meta">${bt(i.category)} · ${i.pin?ft(i.pin):"Not pinned"} · +${i.points} pts ${t.showConscious!==!1?Number(i.consciousPoints)?`· 🧠 +${i.consciousPoints}`:"· No conscious pts":""} · ${Dt(u.habitStreak(i.id,f))}</div>
                          ${i.description?`<p class="item-desc">${g(i.description)}</p>`:""}
                          ${at(i.tags)}
                        </div>
                        <div class="mini-actions">
                          <button class="mini-btn ${i.pin?"on":""}" data-action="open-pin-habit" data-id="${i.id}">${F("pin")}</button>
                          <button class="mini-btn" data-action="remove-habit" data-id="${i.id}">✕</button>
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
        ${a.map(i=>`
                    <article class="manage-card archived" style="border-left:4px solid ${R(i.category)}">
                      <div class="section-head">
                        <div>
                          <div class="item-title">${g(i.name)}</div>
                          <div class="item-meta">${bt(i.category)} · +${i.points} pts${i.pin?` · ${ft(i.pin)}`:" · Pin ended"} · ${ba(i.archivedAt)}</div>
                          ${i.description?`<p class="item-desc">${g(i.description)}</p>`:""}
                          ${at(i.tags)}
                        </div>
                        <div class="mini-actions">
                          <button class="mini-btn on" data-action="restore-habit" data-id="${i.id}">${F("undo")}</button>
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
        ${s.length?s.map(i=>`
                    <article class="manage-card" style="border-left:4px solid ${R(i.category)}">
                      <div class="section-head">
                        <div>
                          <div class="item-title">${g(i.title)}</div>
                          <div class="item-meta">${bt(i.category)} · ${ft(i.pin)} · +${i.points} pts</div>
                          ${i.description?`<p class="item-desc">${g(i.description)}</p>`:""}
                          ${at(i.tags)}
                        </div>
                        <div class="mini-actions">
                          <button class="mini-btn on" data-action="open-pin-template" data-id="${i.id}">${F("pin")}</button>
                          <button class="mini-btn" data-action="unpin-template" data-id="${i.id}">✕</button>
                        </div>
                      </div>
                    </article>
                  `).join(""):'<div class="empty">Pin a task from Today to repeat it.</div>'}
      </div>
    </section>
  `}function M(t){if(/^\d{4}-\d{2}$/.test(String(t||"")))return String(t);if(/^\d{4}-\d{2}-\d{2}$/.test(String(t||"")))return String(t).slice(0,7);const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}`}function mt(t,e){const[a,s]=String(t).split("-").map(Number),n=new Date(a,(s||1)-1+e,1);return`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}`}function Lt(t){const[e,a]=String(t).split("-").map(Number);return new Date(e,(a||1)-1,1).toLocaleDateString(void 0,{month:"long",year:"numeric"})}function ie(){const t=u.getWeekStart(),e=nt.findIndex(a=>a.value===t);return e<=0?nt:[...nt.slice(e),...nt.slice(0,e)]}function se(t){const[e,a]=String(t).split("-").map(Number),n=(new Date(e,a-1,1).getDay()-u.getWeekStart()+7)%7,i=new Date(e,a,0).getDate(),o=[];for(let r=0;r<n;r++)o.push(null);for(let r=1;r<=i;r++)o.push(`${e}-${String(a).padStart(2,"0")}-${String(r).padStart(2,"0")}`);return o}function we(t,e,a){const s=new Set(a||[]),n=se(e);return`
    <div class="pin-cal" data-cal="${t}">
      <div class="pin-cal-head">
        <button type="button" class="mini-btn" data-action="pin-cal-nav" data-target="${t}" data-dir="-1" aria-label="Previous month">‹</button>
        <b>${Lt(e)}</b>
        <button type="button" class="mini-btn" data-action="pin-cal-nav" data-target="${t}" data-dir="1" aria-label="Next month">›</button>
      </div>
      <div class="pin-cal-grid pin-cal-week">
        ${ie().map(i=>`<span>${i.label.slice(0,1)}</span>`).join("")}
      </div>
      <div class="pin-cal-grid">
        ${n.map(i=>i?`<button type="button" class="pin-cal-day ${s.has(i)?"on":""}" data-action="toggle-pin-date" data-target="${t}" data-date="${i}">${Number(i.slice(8,10))}</button>`:"<span></span>").join("")}
      </div>
    </div>
  `}function Za(t,e){const a=(t==null?void 0:t.mode)||"forever",s=(t==null?void 0:t.until)||"",n=((t==null?void 0:t.weekdays)||[]).map(Number),i=((t==null?void 0:t.monthDays)||[]).map(Number),o=Array.isArray(t==null?void 0:t.yearDays)?[...t.yearDays].sort():[],r=Array.isArray(t==null?void 0:t.customDates)?[...t.customDates].sort():[],d=Array.isArray(t==null?void 0:t.exceptDates)?[...t.exceptDates].sort():Array.isArray(t==null?void 0:t.exceptions)?[...t.exceptions].sort():[],c=e&&e._exceptCal||M(f),m=e&&e._customCal||M(f),S=e&&e._yearMonth||"01";return`
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
        ${nt.map(p=>`
            <button type="button" class="chip weekday ${n.includes(p.value)?"on":""}" data-action="toggle-weekday" data-day="${p.value}">
              ${p.label}
            </button>
          `).join("")}
      </div>
    </div>
    <div class="pin-monthdays" style="${a==="monthly"?"":"display:none"}">
      <p class="item-meta">Repeat every month on day</p>
      <div class="chip-row">
        ${Array.from({length:31},(p,w)=>w+1).map(p=>`<button type="button" class="chip monthday ${i.includes(p)?"on":""}" data-action="toggle-monthday" data-day="${p}">${p}</button>`).join("")}
      </div>
    </div>
    <div class="pin-yeardays" style="${a==="yearly"?"":"display:none"}">
      <p class="item-meta">Repeat every year on (month + day)</p>
      <div class="row-2">
        <label>Month
          <select id="year-month-select">
            ${Array.from({length:12},(p,w)=>w+1).map(p=>`<option value="${String(p).padStart(2,"0")}" ${S===String(p).padStart(2,"0")?"selected":""}>${new Date(2e3,p-1,1).toLocaleDateString(void 0,{month:"long"})}</option>`).join("")}
          </select>
        </label>
        <label>Day
          <select id="year-day-select">
            ${Array.from({length:31},(p,w)=>w+1).map(p=>`<option value="${String(p).padStart(2,"0")}">${p}</option>`).join("")}
          </select>
        </label>
      </div>
      <button type="button" class="ghost-btn compact" data-action="add-year-day" style="margin-top:8px">Add yearly date</button>
      <div class="chip-row" style="margin-top:8px">
        ${o.length?o.map(p=>`<button type="button" class="chip on" data-action="remove-year-day" data-date="${p}" title="Tap to remove">${p} ✕</button>`).join(""):'<span class="item-meta">No yearly dates yet.</span>'}
      </div>
    </div>
    <div class="pin-customdays" style="margin-top:4px">
      <p class="item-meta"><b style="color:var(--text)">Extra custom dates</b> — also show on these days. Combines with Weekly / Monthly / Yearly; pick the <b style="color:var(--text)">Custom</b> mode to show <i>only</i> on these days. Tap days on the calendar.</p>
      ${we("custom",m,r)}
      <div class="chip-row" style="margin-top:8px">
        ${r.length?r.map(p=>`<button type="button" class="chip on" data-action="toggle-pin-date" data-target="custom" data-date="${p}" title="Tap to remove">${p} ✕</button>`).join(""):'<span class="item-meta">No extra custom dates.</span>'}
      </div>
    </div>
    <div class="pin-exceptions" style="margin-top:4px">
      <p class="item-meta"><b style="color:var(--text)">Exceptions</b> — skip these days (tap days on the calendar). Applies to every repeat mode.</p>
      ${we("except",c,d)}
      <div class="chip-row" style="margin-top:8px">
        ${d.length?d.map(p=>`<button type="button" class="chip on" data-action="toggle-pin-date" data-target="except" data-date="${p}" title="Tap to remove">${p} ✕</button>`).join(""):'<span class="item-meta">No exceptions.</span>'}
      </div>
    </div>
  `}function Ka(){if(!x)return"";if(x==="choose")return`
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
    `;if(x==="habit"||x==="task"||x==="edit-habit"||x==="edit-task"){const t=x==="habit"||x==="edit-habit",e=x.startsWith("edit-"),a=h||{},s=a.category||(t?"physically":"mentally"),n=Math.max(0,Math.min(5,Number(a.rating)||0)),i=Array.isArray(a.tags)?a.tags.join(", "):a.tags||"",o=a.consciousPoints!=null?Number(a.consciousPoints):a.conscious!=null?Number(a.conscious):0;return`
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
                    <button type="button" class="chip ${s===r.id?"on":""}" data-action="set-category" data-category="${r.id}">${g(r.label)}</button>
                  `).join("")}
              </div>
              <input type="hidden" name="category" value="${s}" />
            </div>
            <label>
              Tags (optional, comma separated)
              <input name="tags" maxlength="120" value="${g(i)}" placeholder="morning, health" />
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
    `}if(x==="goal"||x==="edit-goal"){const t=x==="edit-goal",e=h||{},a=e.kind||"habit-streak",s=u.getAllHabits(),n=u.getPinnedTasks(),i=e.targetId||"";return`
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
                ${s.map(o=>`<option value="${o.id}" ${i===o.id?"selected":""}>${g(o.name)}</option>`).join("")}
              </select>
            </label>
            <label class="goal-target-task" style="${a==="task-streak"?"":"display:none"}">
              Pinned task
              <select name="taskTarget">
                ${n.length?n.map(o=>`<option value="${o.id}" ${i===o.id?"selected":""}>${g(o.title)}</option>`).join(""):'<option value="">No pinned tasks yet</option>'}
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
    `}if(x==="pin"){const{kind:t,id:e,title:a,pin:s}=h||{};return`
      <div class="modal-backdrop open" data-action="close-modal">
        <form class="sheet sheet-wide" data-form="pin" data-kind="${t}" data-id="${e}">
          <div class="handle"></div>
          <h2>Pin ${t==="habit"?"habit":"task"}</h2>
          <p class="muted tight">${g(a||"")}</p>
          <div class="form" style="margin-top:14px">
            ${Za(s,h)}
            <button class="primary-btn" type="submit">Save pin</button>
            ${s?'<button class="ghost-btn danger" type="button" data-action="clear-pin">Unpin</button>':""}
            <button class="ghost-btn" type="button" data-action="close-modal">Cancel</button>
          </div>
        </form>
      </div>
    `}if(x==="forward"){const{kind:t,id:e,title:a,from:s}=h||{},n=t==="habit";return`
      <div class="modal-backdrop open" data-action="close-modal">
        <form class="sheet" data-form="forward" data-kind="${t}" data-id="${e}">
          <div class="handle"></div>
          <h2>Forward ${n?"habit":"task"}</h2>
          <p class="muted tight">${g(a||"")}</p>
          <p class="item-meta">From ${g(s||f)} — a copy will be created on the day you pick, marked “↩ Forwarded from ${g(s||f)}”.</p>
          <div class="form" style="margin-top:14px">
            <label>
              Forward to day
              <input name="targetDate" type="date" required value="${$a(s||f)}" />
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
        ${L==="today"?Sa():""}
        ${L==="profile"?xa():""}
        ${L==="history"?Ea():""}
        ${L==="habits"?Ia():""}
        ${L==="settings"?Xa():""}
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
    ${Ka()}
    <div class="toast" id="toast"></div>
  `,ei(),Aa(),ai(),Ue(),ti()}catch(t){const e=t&&t.stack?String(t.stack).slice(0,400):t&&t.message?t.message:"Unknown error";It.innerHTML=`<div class="app-shell"><section class="manage-card"><h2>Could not load (Error B)</h2><p class="muted tight">${g(e)}</p><button class="primary-btn full" data-action="reload-app">Reload</button></section></div>`}}}function ti(){if(x!=="habit"&&x!=="task")return;const t=document.querySelector(".sheet");t&&(t.scrollTop=0);const e=document.querySelector('.sheet input[name="title"]');if(e)try{e.focus({preventScroll:!0})}catch{try{e.focus()}catch{}}}function ei(){const t=document.getElementById("day-note");t&&t.addEventListener("input",()=>{u.isLocked(f)||u.setNote(f,t.value)})}function ai(){const t=document.getElementById("lock-time"),e=document.getElementById("auto-lock");t&&t.addEventListener("change",()=>{u.setLockTime(t.value),y(`Lock time set to ${t.value}`),k()}),e&&e.addEventListener("change",()=>{u.setAutoLock(e.checked),y(e.checked?"Auto-lock on":"Auto-lock off"),k()}),document.querySelectorAll("[data-cat-color]").forEach(s=>{s.addEventListener("input",()=>{var i;u.updateCategory(s.dataset.catColor,{color:s.value});const n=(i=s.closest(".cat-manage-card"))==null?void 0:i.querySelector(".cat-swatch");n&&(n.style.background=s.value)})}),document.querySelectorAll("[data-cat-goals]").forEach(s=>{s.addEventListener("input",()=>{u.updateCategory(s.dataset.catGoals,{goals:s.value});const n=s.closest(".cat-manage-card"),i=n==null?void 0:n.querySelector(".cat-goal-flag");i&&(s.value.trim()?i.textContent="goals":i.remove())})});const a=document.getElementById("backup-file");a&&a.addEventListener("change",()=>{const s=a.files[0];if(!s)return;const n=new FileReader;n.onload=()=>{ze(String(n.result||""),s.name),a.value=""},n.onerror=()=>{y("Couldn't read that file."),a.value=""},n.readAsText(s)})}function y(t){const e=document.getElementById("toast");e&&(e.textContent=t,e.classList.add("show"),setTimeout(()=>e.classList.remove("show"),1800))}function Ve(){const t=u.getTheme();document.documentElement.dataset.theme=t;const e=document.querySelector('meta[name="theme-color"]');e&&(e.content=t==="light"?"#f3f1ea":"#0e1116")}function g(t){return String(t||"").split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;").split('"').join("&quot;")}function O(){return u.isLocked(f)?(y("This report is locked. Unlock it in Settings."),!0):!1}function ne(t){return{mode:(t==null?void 0:t.mode)||"forever",until:(t==null?void 0:t.until)||"",weekdays:Array.isArray(t==null?void 0:t.weekdays)?t.weekdays.map(Number):[],monthDays:Array.isArray(t==null?void 0:t.monthDays)?t.monthDays.map(Number):[],yearDays:Array.isArray(t==null?void 0:t.yearDays)?[...t.yearDays]:[],customDates:Array.isArray(t==null?void 0:t.customDates)?[...t.customDates]:[],exceptDates:Array.isArray(t==null?void 0:t.exceptDates)?[...t.exceptDates]:Array.isArray(t==null?void 0:t.exceptions)?[...t.exceptions]:[]}}function ii(t){const e=u.findHabit(t);e&&(x="pin",h={kind:"habit",id:t,title:e.name,pin:e.pin?ne(e.pin):{mode:"forever",until:"",weekdays:[],monthDays:[],yearDays:[],customDates:[],exceptDates:[]},_exceptCal:M(f),_customCal:M(f),_yearMonth:"01"})}function si(t){const e=u.findTask(f,t);if(!e)return;const a=e.sourcePinId?u.findPinnedTask(e.sourcePinId):null;x="pin",h={kind:"task",id:t,title:e.title,pin:a!=null&&a.pin?ne(a.pin):{mode:"forever",until:"",weekdays:[],monthDays:[],yearDays:[],customDates:[],exceptDates:[]},_exceptCal:M(f),_customCal:M(f),_yearMonth:"01"}}function ni(t){const e=u.findPinnedTask(t);e&&(x="pin",h={kind:"template",id:t,title:e.title,pin:e.pin?ne(e.pin):{mode:"forever",until:"",weekdays:[],monthDays:[],yearDays:[],customDates:[],exceptDates:[]},_exceptCal:M(f),_customCal:M(f),_yearMonth:"01"})}function oi(t){var c;const e=t.querySelector('input[name="mode"]').value,a=((c=t.querySelector('input[name="until"]'))==null?void 0:c.value)||"",s=[...t.querySelectorAll(".weekday.on")].map(m=>Number(m.dataset.day)),n=[...t.querySelectorAll(".monthday.on")].map(m=>Number(m.dataset.day)),i=h&&h.pin||{},o=Array.isArray(i.yearDays)?i.yearDays:[],r=Array.isArray(i.customDates)?i.customDates:[],d=Array.isArray(i.exceptDates)?i.exceptDates:[];return e==="until"&&!a?(y("Pick an until date"),null):e==="weekly"&&!s.length?(y("Pick at least one weekday"),null):e==="monthly"&&!n.length?(y("Pick at least one day of month"),null):e==="yearly"&&!o.length?(y("Add at least one yearly date"),null):e==="custom"&&!r.length?(y("Pick at least one custom date"),null):{mode:e,until:a,weekdays:s,monthDays:n,yearDays:o,customDates:r,exceptDates:d}}function dt(t,e,a){const s=e instanceof Blob?e:new Blob([e],{type:a||"text/plain;charset=utf-8"}),n=URL.createObjectURL(s),i=document.createElement("a");i.href=n,i.download=t,document.body.appendChild(i),i.click(),setTimeout(()=>{document.body.removeChild(i),URL.revokeObjectURL(n)},500)}function lt(t){const e=String(t??"");return/[",\n]/.test(e)?`"${e.replace(/"/g,'""')}"`:e}function oe(t,e){const[a,s]=u.resolveRange(t,e||f);return{range:t,start:a,end:s,rows:u.exportRows(a,s)}}function Se(t,e){const a=t||h&&h.range||"day",{start:s,end:n,rows:i}=oe(a,e),o=[];o.push(["Daily Report export",`${s} to ${n}`].map(lt).join(",")),o.push(["Date","Type","Name","Category","Tags","Points","Rating","Earned","ConsciousPts","Status","Note/Description"].map(lt).join(",")),i.forEach(r=>{r.habits.forEach(d=>{o.push([r.date,"Habit",d.name,d.category,(d.tags||[]).join("|"),d.points,d.rating,d.earned,d.consciousPoints,d.status||(d.rating>0?"done":r.locked?"missed":"pending"),d.description||""].map(lt).join(","))}),r.tasks.forEach(d=>{o.push([r.date,"Task",d.hasImage?`${d.title} [photo]`:d.title,d.category,(d.tags||[]).join("|"),d.points,d.rating||"",d.earned,"",d.status||(d.done?"done":r.locked?"missed":"pending"),d.description||""].map(lt).join(","))}),o.push([r.date,"Summary",`Earned ${r.earned}/${r.max} (${r.percent}%)`,"","","","","","",r.locked?"locked":"open",r.note||""].map(lt).join(","))}),dt(`daily-report-${a}-${s}-to-${n}.csv`,"\uFEFF"+o.join(`
`),"text/csv;charset=utf-8"),y("Excel (CSV) exported")}function xe(t,e){const a=t||h&&h.range||"day",{start:s,end:n,rows:i}=oe(a,e),o={app:"Daily Report",exportedAt:new Date().toISOString(),range:a,start:s,end:n,days:i};dt(`daily-report-${a}-${s}-to-${n}.json`,JSON.stringify(o,null,2),"application/json"),y("JSON exported")}function Ae(t,e){const a=t||h&&h.range||"day",{start:s,end:n,rows:i}=oe(a,e),o=i.map(d=>`
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
      `).join(""),r=window.open("","_blank");if(!r){y("Popup blocked — allow popups to export PDF");return}r.document.write(`<!DOCTYPE html><html><head><title>Daily Report ${s} to ${n}</title></head><body style="font-family:sans-serif;padding:24px"><h1>Daily Report — ${s} to ${n}</h1>${o}<script>window.onload=function(){window.print()}<\/script></body></html>`),r.document.close(),y("PDF print view opened")}document.addEventListener("click",t=>{const e=t.target.closest("[data-screen]");if(e){L=e.dataset.screen,k();return}const a=t.target.closest("[data-action]");if(!a)return;const s=a.dataset.action;if(s==="close-modal"){if(x==="image"){x=null,h=null,k();return}(t.target.classList.contains("modal-backdrop")||a.classList.contains("ghost-btn"))&&(x=null,h=null,k());return}if(s==="note-bullets"){be("bullets");return}if(s==="note-numbered"){be("numbered");return}if(s==="values-bullets"){ye("bullets");return}if(s==="values-numbered"){ye("numbered");return}if(s==="pick-task-image"){const n=document.getElementById("task-image-input");n?n.click():y("Photo picking needs a browser file picker");return}if(s==="remove-task-image"){h&&(h._image="",k(),y("Photo removed — save to apply"));return}if(s==="view-task-image"){const n=u.findTask(f,a.dataset.id),i=n&&n.image?n.image:h&&(h._image||h.image)||"";if(!i){y("No photo on this task");return}x="image",h={image:i,title:n&&n.title||"Task photo"},k();return}if(s==="prev-day"&&ge(-1),s==="next-day"&&ge(1),s==="reload-app"){window.location.reload();return}if(s==="set-theme"){const n=a.dataset.theme==="light"?"light":"dark";u.setTheme(n),Ve(),y(n==="light"?"Light mode on":"Dark mode on")}if(s==="install-app"){Va();return}if(s==="check-updates"){Qa();return}if(s==="apply-update"){Ye();return}if(s==="backup-now"){Ua();return}if(s==="trigger-import"){const n=document.getElementById("backup-file");n&&n.click();return}if(s==="choose-folder"){qa();return}if(s==="grant-folder"){_a();return}if(s==="forget-folder"){Wa();return}if(s==="restore-backup"){Ya(a.dataset.name);return}if(s==="goto-settings"&&(L="settings"),s==="open-add-habit"&&(x="habit",h=null),s==="open-add-task"){if(O())return;x="task",h={category:"mentally"}}if(s==="open-add"){if(O())return;x="choose",h={category:"mentally"}}if(s==="toggle-edit"&&(K=!K),s==="open-edit-habit"){const n=u.findHabit(a.dataset.id);if(!n)return;x="edit-habit",h={id:n.id,name:n.name,description:n.description||"",points:n.points,category:n.category,tags:n.tags||[],consciousPoints:Number(n.consciousPoints)||0}}if(s==="open-edit-task"){if(O())return;const n=u.findTask(f,a.dataset.id);if(!n)return;x="edit-task",h={id:n.id,title:n.title,points:n.points,description:n.description,category:n.category,tags:n.tags||[],rating:Number(n.rating)||0,image:n.image||"",_image:void 0}}if(s==="toggle-badges"&&(xt=!xt),s==="open-goal"&&(x="goal",h={kind:"habit-streak",targetDays:7,tier:"bronze"}),s==="open-edit-goal"){const n=u.getGoals().find(i=>i.id===a.dataset.id);if(!n)return;x="edit-goal",h={...n}}if(s==="remove-goal"&&(u.removeGoal(a.dataset.id),y("Goal removed")),s==="remove-badge"&&(u.removeBadge(a.dataset.id),y("Badge removed")),s==="rate-habit"){if(O())return;const i=u.habitRating(f,a.dataset.id)===Number(a.dataset.rating)?0:Number(a.dataset.rating);u.setHabitRating(f,a.dataset.id,i)}if(s==="rate-task"){if(O())return;const n=u.findTask(f,a.dataset.id);if(!n)return;const o=(Number(n.rating)||0)===Number(a.dataset.rating)?0:Number(a.dataset.rating);u.setTaskRating(f,a.dataset.id,o)}if(s==="open-export"&&(x="export",h={range:h&&h.range||"day"}),s==="set-export-range"){x="export",h={range:a.dataset.range||"day"},k();return}if(s==="do-export"){const n=a.dataset.format,i=h&&h.range||"day";n==="csv"&&Se(i,f),n==="json"&&xe(i,f),n==="pdf"&&Ae(i,f),x=null,h=null}if(s==="set-histexp-range"){I=["day","week","month","year"].includes(a.dataset.range)?a.dataset.range:"day",k();return}if(s==="histexp-do"){const n=a.dataset.format;let i=f;if(I==="day"||I==="week"){const o=document.getElementById("histexp-date");o&&/^\d{4}-\d{2}-\d{2}$/.test(o.value)&&(i=o.value)}else if(I==="month"){const o=document.getElementById("histexp-month");o&&/^\d{4}-\d{2}$/.test(o.value)&&(i=`${o.value}-15`)}else if(I==="year"){const o=document.getElementById("histexp-year"),r=Number(o&&o.value);Number.isInteger(r)&&r>=2e3&&r<=2100&&(i=`${String(r)}-06-15`)}n==="csv"&&Se(I,i),n==="json"&&xe(I,i),n==="pdf"&&Ae(I,i);return}if(s==="history-cal-nav"){const n=At||M(f);At=mt(n,Number(a.dataset.dir)||0),k();return}if(s==="locked-cal-nav"){const n=Tt||M(f);Tt=mt(n,Number(a.dataset.dir)||0),k();return}if(s==="toggle-locked-day"){const n=a.dataset.date,i=N.indexOf(n);i>=0?N.splice(i,1):N.push(n),k();return}if(s==="lock-selected"){const n=[...N].sort();if(!n.length)return;const i=u.lockDays(n);N=[],y(i===1?`Locked ${i} day`:`Locked ${i} days`),k();return}if(s==="unlock-selected"){const n=[...N].sort();if(!n.length)return;const i=u.unlockDays(n);N=[],y(i===1?`Unlocked ${i} day`:`Unlocked ${i} days`),k();return}if(s==="submit-day"&&(u.submitDay(f),y("Report submitted and locked")),s==="unlock-day"&&(u.unlockDay(a.dataset.date),y("Report unlocked")),s==="toggle-habit"){if(O())return;u.toggleHabit(f,a.dataset.id)}if(s==="toggle-task"){if(O())return;u.toggleTask(f,a.dataset.id)}if(s==="remove-task"){if(O())return;u.removeTask(f,a.dataset.id)}if(s==="remove-habit"&&u.removeHabit(a.dataset.id),s==="restore-habit"){const n=u.restoreHabit(a.dataset.id);y(n.ok?"Habit restored":n.reason||"Could not restore that habit")}if(s==="open-pin-habit"&&ii(a.dataset.id),s==="open-forward-habit"){if(O())return;const n=u.findHabit(a.dataset.id);if(!n)return;x="forward",h={kind:"habit",id:n.id,title:n.name,from:f}}if(s==="open-forward-task"){if(O())return;const n=u.findTask(f,a.dataset.id);if(!n)return;x="forward",h={kind:"task",id:n.id,title:n.title,from:f}}if(s==="open-pin-task"){if(O())return;si(a.dataset.id)}if(s==="open-pin-template"&&ni(a.dataset.id),s==="unpin-template"&&(u.unpinTaskTemplate(a.dataset.id),y("Task unpinned")),s==="pick-date"&&(f=a.dataset.date,L="today"),s==="set-chart-range"){q=["week","month","year"].includes(a.dataset.range)?a.dataset.range:"week",J=0,k();return}if(s==="chart-nav"){J+=Number(a.dataset.dir)||0,J>0&&(J=0),k();return}if(s==="add-category"){const n=document.getElementById("new-category"),i=u.addCategory(n?n.value:"");y(i.ok?"Category added":i.reason||"Couldn't add category"),k();return}if(s==="rename-category"){const n=u.getCustomCategories().find(r=>r.id===a.dataset.id),i=window.prompt("Rename category",n?n.label:"");if(i==null)return;const o=u.renameCategory(a.dataset.id,i);y(o.ok?"Category renamed":o.reason||"Couldn't rename"),k();return}if(s==="delete-category"){if(!window.confirm("Delete this category? Its habits and tasks move to Mentally."))return;const n=u.deleteCategory(a.dataset.id);n.ok&&et.delete(a.dataset.id),y(n.ok?"Category deleted":n.reason||"Couldn't delete"),k();return}if(s==="rename-tag"){const n=window.prompt("Rename tag everywhere",a.dataset.tag||"");if(n==null)return;const i=u.renameTag(a.dataset.tag,n);y(i.ok?i.merged?"Tags merged":"Tag renamed everywhere":i.reason||"Couldn't rename"),k();return}if(s==="delete-tag"){if(!window.confirm(`Delete tag "#${a.dataset.tag}" from all habits and tasks?`))return;u.deleteTag(a.dataset.tag),y("Tag deleted everywhere"),k();return}if(s==="add-tag"){const n=document.getElementById("tag-habit-pick"),i=document.getElementById("new-tag"),o=u.addTagToHabit(n?n.value:"",i?i.value:"");y(o.ok?"Tag added to habit":o.reason||"Couldn't add tag"),k();return}if(s==="set-points"){const n=document.querySelector('input[name="points"]');n&&(n.value=a.dataset.points),document.querySelectorAll(".chip-row .chip[data-points]").forEach(i=>i.classList.remove("on")),a.classList.add("on");return}if(s==="set-category"){const n=a.closest("form")||a.closest(".sheet"),i=n.querySelector('input[name="category"]');i&&(i.value=a.dataset.category),n.querySelectorAll(".cat-row .chip").forEach(o=>o.classList.remove("on")),a.classList.add("on");return}if(s==="set-rating"){const n=a.closest(".sheet")||a.closest("form")||document,i=n.querySelector('input[name="rating"]');i&&(i.value=a.dataset.rating),n.querySelectorAll(".rating-row .chip").forEach(o=>o.classList.remove("on")),a.classList.add("on");return}if(s==="set-conscious"){const n=a.closest(".sheet")||a.closest("form")||document,i=n.querySelector('input[name="consciousPoints"]');i&&(i.value=a.dataset.conscious),n.querySelectorAll(".conscious-row .chip").forEach(o=>o.classList.remove("on")),a.classList.add("on");return}if(s==="set-goal-kind"){const n=a.closest(".sheet")||document,i=n.querySelector('input[name="kind"]');i&&(i.value=a.dataset.kind),n.querySelectorAll(".goal-kind-row .chip").forEach(c=>c.classList.remove("on")),a.classList.add("on");const o=a.dataset.kind,r=n.querySelector(".goal-target-habit"),d=n.querySelector(".goal-target-task");r&&(r.style.display=o==="habit-streak"?"":"none"),d&&(d.style.display=o==="task-streak"?"":"none"),h&&(h.kind=o);return}if(s==="set-goal-tier"){const n=a.closest(".sheet")||document,i=n.querySelector('input[name="tier"]');i&&(i.value=a.dataset.tier),n.querySelectorAll(".goal-tier-row .chip").forEach(o=>o.classList.remove("on")),a.classList.add("on");return}if(s==="pin-mode"){const n=a.closest("form"),i=a.dataset.mode;n.querySelector('input[name="mode"]').value=i,n.querySelectorAll(".pin-modes .chip").forEach(r=>r.classList.remove("on")),a.classList.add("on");const o=(r,d)=>{const c=n.querySelector(r);c&&(c.style.display=d?"":"none")};o(".pin-until",i==="until"),o(".pin-weekdays",i==="weekly"),o(".pin-monthdays",i==="monthly"),o(".pin-yeardays",i==="yearly"),h&&h.pin&&(h.pin.mode=i);return}if(s==="toggle-weekday"){a.classList.toggle("on");return}if(s==="toggle-monthday"){a.classList.toggle("on");return}if(s==="pin-cal-nav"){if(!h)return;const n=a.dataset.target,i=Number(a.dataset.dir)||0;n==="except"?h._exceptCal=mt(h._exceptCal||M(f),i):h._customCal=mt(h._customCal||M(f),i),k();return}if(s==="toggle-pin-date"){if(!h||!h.pin)return;const n=a.dataset.target,i=a.dataset.date,o=n==="custom"?"customDates":"exceptDates",r=Array.isArray(h.pin[o])?[...h.pin[o]]:[],d=r.indexOf(i);d>=0?r.splice(d,1):(r.push(i),r.length>365&&r.shift()),h.pin[o]=r.sort(),k();return}if(s==="add-year-day"){if(!h||!h.pin)return;const n=a.closest("form")||document,i=n.querySelector("#year-month-select"),o=n.querySelector("#year-day-select");i&&(h._yearMonth=i.value);const r=`${i?i.value:"01"}-${o?o.value:"01"}`,d=Array.isArray(h.pin.yearDays)?[...h.pin.yearDays]:[];d.includes(r)||d.push(r),h.pin.yearDays=d.sort(),k();return}if(s==="remove-year-day"){if(!h||!h.pin)return;const n=a.dataset.date;h.pin.yearDays=(h.pin.yearDays||[]).filter(i=>i!==n),k();return}if(s==="clear-pin"){const n=a.closest("form"),i=n.dataset.kind,o=n.dataset.id;if(i==="habit"&&u.unpinHabit(o),i==="task"){const r=u.findTask(f,o);r!=null&&r.sourcePinId&&u.unpinTaskTemplate(r.sourcePinId)}i==="template"&&u.unpinTaskTemplate(o),x=null,h=null,y("Unpinned"),k();return}if(s==="lock-profile"){u.setProfileLocked(!0),y("Profile locked — read only"),k();return}if(s==="unlock-profile"){u.setProfileLocked(!1),y("Profile unlocked"),k();return}if(s==="add-whoami"){const n=document.getElementById("new-whoami"),i=u.addWhoAmI(n?n.value:"");y(i.ok?"Added":i.reason||"Couldn't add"),k();return}if(s==="move-whoami"){u.moveWhoAmI(a.dataset.id,Number(a.dataset.dir)||0),k();return}if(s==="remove-whoami"){u.removeWhoAmI(a.dataset.id),y("Removed"),k();return}if(s==="add-lifearea"){const n=document.getElementById("new-lifearea"),i=u.addLifeArea(n?n.value:"");i.ok?(st=i.id,y("Life area added")):y(i.reason||"Couldn't add"),k();return}if(s==="toggle-lifearea"){const n=a.dataset.id;st=st===n?null:n,k();return}if(s==="move-lifearea"){u.moveLifeArea(a.dataset.id,Number(a.dataset.dir)||0),k();return}if(s==="toggle-cat"){const n=a.dataset.id;et.has(n)?et.delete(n):et.add(n),k();const i=document.querySelector(`[data-action="toggle-cat"][data-id="${CSS.escape(n)}"]`);i&&i.focus({preventScroll:!0});return}if(s==="expand-cats"){u.getCategories().forEach(n=>et.add(n.id)),k();return}if(s==="collapse-cats"){et.clear(),k();return}if(s==="remove-lifearea"){u.removeLifeArea(a.dataset.id),st===a.dataset.id&&(st=null),y("Life area removed"),k();return}if(s==="set-pgoal-term"){z=["short","medium","long"].includes(a.dataset.term)?a.dataset.term:"short",rt=u.profileGoalDurations()[z][0],k();return}if(s==="set-pgoal-filter"){$t=["all","short","medium","long"].includes(a.dataset.filter)?a.dataset.filter:"all",k();return}if(s==="add-pgoal"){const n=document.getElementById("new-pgoal"),i=document.getElementById("new-pgoal-duration"),o=u.addProfileGoal(n?n.value:"",z,i?i.value:rt);y(o.ok?`Goal added ${wt(z)}`:o.reason||"Couldn't add"),k();return}if(s==="remove-pgoal"){u.removeProfileGoal(a.dataset.id),y("Goal removed"),k();return}if(s==="add-quote"){const n=document.getElementById("new-quote"),i=document.getElementById("new-quote-author"),o=u.addQuote(n?n.value:"",i?i.value:"");y(o.ok?"Quote added":o.reason||"Couldn't add"),k();return}if(s==="toggle-quote-fav"){u.toggleQuoteFav(a.dataset.id),k();return}if(s==="remove-quote"){u.removeQuote(a.dataset.id),y("Quote removed"),k();return}if(s==="toggle-quotes"){ht=!ht,k();return}k()});document.addEventListener("submit",t=>{const e=t.target.closest("[data-form]");if(!e)return;t.preventDefault();const a=e.dataset.form;if(a==="habit"||a==="task"||a==="edit-habit"||a==="edit-task"){const s=new FormData(e),n=String(s.get("title")||""),i=Number(s.get("points")||0),o=String(s.get("category")||"mentally"),r=String(s.get("description")||""),d=String(s.get("tags")||""),c=Math.max(0,Math.min(5,Number(s.get("rating")||0))),m=Math.max(0,Math.min(100,Number(s.get("consciousPoints")||0)));if(!n.trim())return;const S=h&&h._image!==void 0?V(h._image):V(h&&h.image);if(a==="habit")u.addHabit(n,i,{description:r,category:o,consciousPoints:m,tags:d,startFrom:f}),y("Habit added");else if(a==="task"){if(O())return;u.addTask(f,n,i,{description:r,category:o,rating:c,tags:d,image:S}),y("Task added")}else if(a==="edit-habit")u.updateHabit(e.dataset.id,{name:n,description:r,points:i,category:o,consciousPoints:m,tags:d}),y("Habit updated");else{if(O())return;u.updateTask(f,e.dataset.id,{title:n,points:i,description:r,category:o,rating:c,tags:d,image:S}),y("Task updated")}x=null,h=null,k();return}if(a==="pin"){const s=oi(e);if(!s)return;const n=e.dataset.kind,i=e.dataset.id;n==="habit"&&u.pinHabit(i,s),n==="task"&&u.pinTask(f,i,s),n==="template"&&u.updatePinnedTask(i,s),x=null,h=null,y("Pin saved"),k();return}if(a==="forward"){const s=new FormData(e),n=String(s.get("targetDate")||""),i=e.dataset.kind,o=e.dataset.id,r=h&&h.from||f;if(!/^\d{4}-\d{2}-\d{2}$/.test(n)){y("Pick a valid date");return}const d=i==="habit"?u.forwardHabit(r,o,n):u.forwardTask(r,o,n);if(!d.ok){y(d.reason||"Could not forward");return}x=null,h=null,f=n,L="today",y(`Forwarded to ${n}`),k();return}if(a==="goal"||a==="edit-goal"){const s=new FormData(e),n=String(s.get("title")||"").trim(),i=String(s.get("kind")||"habit-streak"),o=String(s.get("tier")||"bronze"),r=String(s.get("rewardTitle")||"").trim(),d=Math.max(1,Math.min(365,Number(s.get("targetDays")||7)));if(!n||!r){y("Goal title and reward title are required");return}let c="";if(i==="habit-streak"&&(c=String(s.get("habitTarget")||"")),i==="task-streak"&&(c=String(s.get("taskTarget")||"")),(i==="habit-streak"||i==="task-streak")&&!c){y(i==="habit-streak"?"Pick a habit":"Pin a task first, then pick it");return}a==="goal"?(u.addGoal({title:n,kind:i,targetId:c,targetDays:d,tier:o,rewardTitle:r}),y("Goal added")):(u.updateGoal(e.dataset.id,{title:n,kind:i,targetId:c,targetDays:d,tier:o,rewardTitle:r}),y("Goal updated"));const m=u.checkGoals(f);m.length&&y(`🏅 Reward earned: ${m[0].rewardTitle}!`),x=null,h=null,k()}});document.addEventListener("change",t=>{const e=t.target.closest(".sort-select");if(e){const a=e.dataset.sortKind;a==="habit"&&u.setHabitSort(e.value),a==="task"&&u.setTaskSort(e.value),k()}if(t.target&&t.target.id==="show-conscious"&&(u.setShowConscious(t.target.checked),y(t.target.checked?"Conscious points on":"Conscious points hidden"),k()),t.target&&t.target.id==="week-start"&&(u.setWeekStart(Number(t.target.value)),y("Week starts on "+t.target.selectedOptions[0].textContent),k()),t.target&&t.target.id==="new-pgoal-duration"){rt=t.target.value;return}if(t.target&&t.target.id==="year-month-select"&&h&&(h._yearMonth=t.target.value),t.target&&t.target.id==="task-image-input"){const a=t.target.files&&t.target.files[0];if(!a)return;if(!String(a.type||"").startsWith("image/")){y("Please pick an image file"),t.target.value="";return}y("Processing photo…"),va(a).then(s=>{if(t.target.value="",!s){y("Photo too large or unreadable — try a smaller one");return}h&&(h._image=s,k(),y("Photo attached — save to apply"))})}});if("serviceWorker"in navigator){window.addEventListener("load",()=>{navigator.serviceWorker.register("./sw.js").catch(()=>{})});let t=!1;try{sessionStorage.getItem("dr-updated-reload")&&(t=!0)}catch{}navigator.serviceWorker.addEventListener("controllerchange",()=>{if(!t){t=!0;try{sessionStorage.setItem("dr-updated-reload","1")}catch{}window.location.reload()}})}function ri(){const t=document.getElementById("boot-error");t&&(t.style.display="none")}ri();Ve();k();Oa().then(()=>{L==="settings"&&k()});setInterval(()=>{!document.hidden&&ee()&&k()},6e4);document.addEventListener("visibilitychange",()=>{!document.hidden&&ee()&&k()});
