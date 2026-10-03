(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function a(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=a(n);fetch(n.href,s)}})();const je="daily-report-v2",xt=[{id:"mentally",label:"Mentally"},{id:"psychology",label:"Psychology"},{id:"physically",label:"Physically"},{id:"spiritually",label:"Spiritually"},{id:"socially",label:"Socially"}];xt.map(t=>t.id);const Fe=[{id:"h1",name:"Wake up early",points:10,icon:"sunrise",category:"physically",pin:{mode:"forever"}},{id:"h2",name:"Drink water",points:5,icon:"drop",category:"physically",pin:{mode:"forever"}},{id:"h3",name:"Exercise",points:15,icon:"bolt",category:"physically",pin:{mode:"forever"}},{id:"h4",name:"Read 20 minutes",points:10,icon:"book",category:"mentally",pin:{mode:"forever"}},{id:"h5",name:"No junk food",points:10,icon:"leaf",category:"physically",pin:{mode:"forever"}}],Oe={lockTime:"21:00",autoLock:!0,showConscious:!0,habitSort:"default",taskSort:"default",theme:"dark",habitOrder:[],weekStart:1};function qt(t){const e=Number(t);return Number.isInteger(e)&&e>=0&&e<=6?e:1}const At=[{id:"iron",label:"Iron",medal:"🥉",rank:1},{id:"bronze",label:"Bronze",medal:"🥉",rank:2},{id:"silver",label:"Silver",medal:"🥈",rank:3},{id:"gold",label:"Gold",medal:"🥇",rank:4}],Be=[{id:"habit-streak",label:"Habit streak"},{id:"task-streak",label:"Pinned task streak"},{id:"perfect-days",label:"Perfect days (100%)"}];function ge(t){var e;return((e=At.find(a=>a.id===t))==null?void 0:e.rank)||0}function Wt(t){var e;return((e=At.find(a=>a.id===t))==null?void 0:e.medal)||"🏅"}function _e(t){var e;return((e=At.find(a=>a.id===t))==null?void 0:e.label)||t||"Badge"}function D(t){const e=Array.isArray(t)?t:String(t||"").split(","),a=[];return e.forEach(i=>{const n=String(i||"").trim().slice(0,20);n&&!a.some(s=>s.toLowerCase()===n.toLowerCase())&&a.push(n),a.length>=10}),a.slice(0,10)}function Ot(t,e){const a=[...t];return e==="points"?a.sort((i,n)=>(Number(n.points)||0)-(Number(i.points)||0)):e==="category"?a.sort((i,n)=>K(E(i.category)).localeCompare(K(E(n.category)))):e==="tags"&&a.sort((i,n)=>(i.tags&&i.tags[0]||"~~~").localeCompare(n.tags&&n.tags[0]||"~~~")),a}const dt=[{value:1,label:"Mon"},{value:2,label:"Tue"},{value:3,label:"Wed"},{value:4,label:"Thu"},{value:5,label:"Fri"},{value:6,label:"Sat"},{value:0,label:"Sun"}];function q(t=new Date){const e=t.getFullYear(),a=String(t.getMonth()+1).padStart(2,"0"),i=String(t.getDate()).padStart(2,"0");return`${e}-${a}-${i}`}function ae(){return{habits:{},habitRatings:{},habitMissed:{},habitForwarded:{},tasks:[],note:"",locked:!1,lockOverride:null,submittedAt:null,lockedHabits:null,skippedPins:[]}}var R=[],J={};function ra(t){const e=J[t.id];return e?{...t,color:e.color||t.color,goals:e.goals!==void 0?e.goals:t.goals}:t}function Q(){return[...xt.map(ra),...R]}function E(t){return Q().map(a=>a.id).includes(t)?t:"mentally"}function K(t){var e;return((e=Q().find(a=>a.id===t))==null?void 0:e.label)||"Mentally"}const Ct=7e5;function X(t){const e=String(t||"");return e.startsWith("data:image/")?e.length>Ct?"":e:""}function fe(t){const e=Math.max(0,Math.min(5,Number(t.rating)||0)),a=n=>/^\d{4}-\d{2}-\d{2}$/.test(String(n||""))?String(n):"",i=n=>Array.isArray(n)?n.filter(s=>/^\d{4}-\d{2}-\d{2}$/.test(String(s))).map(String).slice(0,50):[];return{...t,description:t.description||"",category:E(t.category),tags:D(t.tags),rating:e,done:!!t.done,missed:!!t.missed,forwardedFrom:a(t.forwardedFrom),forwardedHabitId:String(t.forwardedHabitId||""),forwardedTo:i(t.forwardedTo),image:X(t.image)}}function B(t){const e=Number(t);return!Number.isFinite(e)||e<0?0:Math.min(100,Math.round(e))}function Tt(t){const e=String(t??"").slice(0,10);return/^\d{4}-\d{2}-\d{2}$/.test(e)?e:""}function ie(t,e){const a=Tt(t&&t.startFrom);return a?String(e)>=a:!0}function se(t,e){return{id:String(t.id||""),name:String(t.name||"").slice(0,80),description:String(t.description||"").slice(0,240),points:Number(t.points)||0,icon:t.icon||"star",category:E(t.category),consciousPoints:B(t.consciousPoints),tags:D(t.tags),pin:Y(t.pin),startFrom:Tt(t.startFrom),archivedAt:e||t.archivedAt||null}}function Y(t){if(!t||!t.mode)return null;const e=(n,s,o)=>Array.isArray(n)?n.map(Number).filter(r=>Number.isFinite(r)&&r>=s&&r<=o):[],a=n=>Array.isArray(n)?n.filter(s=>/^\d{4}-\d{2}-\d{2}$/.test(String(s))).map(String).slice(0,365):[],i=n=>Array.isArray(n)?n.filter(s=>/^\d{2}-\d{2}$/.test(String(s))).map(String).slice(0,366):[];return{mode:["forever","until","weekly","monthly","yearly","custom"].includes(t.mode)?t.mode:"forever",until:t.until||"",weekdays:e(t.weekdays,0,6),monthDays:e(t.monthDays,1,31),yearDays:i(t.yearDays),customDates:a(t.customDates),exceptDates:a(t.exceptDates||t.exceptions)}}function da(t,e){const a=`${t} ${e}`.toLowerCase();return a.includes("read")||a.includes("study")||a.includes("learn")?"mentally":a.includes("meditat")||a.includes("pray")||a.includes("journal")?"spiritually":a.includes("mood")||a.includes("calm")||a.includes("therapy")?"psychology":a.includes("friend")||a.includes("family")||a.includes("social")||a.includes("call")||a.includes("visit")?"socially":"physically"}function Ut(t){const e=Be.some(a=>a.id===t.kind)?t.kind:"habit-streak";return{id:String(t.id||`g${Date.now()}`),title:String(t.title||"").trim().slice(0,60)||"My goal",kind:e,targetId:String(t.targetId||""),targetDays:Math.max(1,Math.min(365,Number(t.targetDays)||7)),tier:At.some(a=>a.id===t.tier)?t.tier:"bronze",rewardTitle:String(t.rewardTitle||"").trim().slice(0,60)||"Reward",createdAt:t.createdAt||new Date().toISOString()}}function ca(t){if(!Array.isArray(t))return[];const e=new Set(xt.map(i=>i.id)),a=[];return t.forEach(i=>{if(!i||typeof i!="object")return;const n=String(i.id||"").trim().slice(0,40),s=String(i.label||"").trim().slice(0,30);!n||!s||e.has(n.toLowerCase())||(e.add(n.toLowerCase()),a.push({id:n,label:s,color:String(i.color||"").slice(0,20),goals:String(i.goals||"").slice(0,1e3)}))}),a.slice(0,20)}function la(t){const e=t&&typeof t=="object"?t:{},a={};return xt.forEach(i=>{const n=e[i.id];if(!n||typeof n!="object")return;const s=String(n.color||"").trim().slice(0,20),o=n.goals===void 0?void 0:String(n.goals||"").slice(0,1e3);!s&&o===void 0||(a[i.id]={},s&&(a[i.id].color=s),o!==void 0&&(a[i.id].goals=o))}),a}const zt={name:80,wantToBe:1e3,vision:1e3,values:1e3,ideas:4e3},Yt=["short","medium","long"],ft={short:["1 Week","2 Weeks","3 Weeks","4 Weeks"],medium:["1 Month","2 Months","3 Months"],long:["1 Year","2 Years","3 Years","5 Years","10+ Years"]};function O(t){return`${t||"id"}${Date.now().toString(36)}${Math.floor(Math.random()*9999)}`}function ua(t){return Array.isArray(t)?t.map(e=>{if(typeof e=="string")return{id:O("w"),text:e.trim().slice(0,120)};if(!e||typeof e!="object")return null;const a=String(e.text||e.label||e.name||"").trim().slice(0,120);return a?{id:String(e.id||O("w")),text:a}:null}).filter(Boolean).slice(0,50):[]}function pa(t){return typeof t=="string"?t.split(`
`).map(e=>e.trim().replace(/^[-•*]\s+/,"")).filter(Boolean).slice(0,20).map(e=>({id:O("a"),title:e.slice(0,60),description:""})):Array.isArray(t)?t.map(e=>{if(typeof e=="string"){const i=e.trim().slice(0,60);return i?{id:O("a"),title:i,description:""}:null}if(!e||typeof e!="object")return null;const a=String(e.title||e.name||"").trim().slice(0,60);return a?{id:String(e.id||O("a")),title:a,description:String(e.description||"").slice(0,1e3)}:null}).filter(Boolean).slice(0,20):[]}function ma(t){return Array.isArray(t)?t.map(e=>{if(typeof e=="string"){const o=e.trim().slice(0,200);return o?{id:O("g"),text:o,term:"short",duration:"1 Week",createdAt:new Date().toISOString()}:null}if(!e||typeof e!="object")return null;const a=String(e.text||e.title||"").trim().slice(0,200);if(!a)return null;const i=Yt.includes(e.term)?e.term:"short",n=ft[i],s=n.includes(e.duration)?e.duration:n[0];return{id:String(e.id||O("g")),text:a,term:i,duration:s,createdAt:e.createdAt||new Date().toISOString()}}).filter(Boolean).slice(0,100):[]}function ga(t){return Array.isArray(t)?t.map(e=>{if(typeof e=="string"){const i=e.trim().slice(0,500);return i?{id:O("q"),text:i,author:"",fav:!1,createdAt:new Date().toISOString()}:null}if(!e||typeof e!="object")return null;const a=String(e.text||e.quote||"").trim().slice(0,500);return a?{id:String(e.id||O("q")),text:a,author:String(e.author||"").trim().slice(0,80),fav:!!(e.fav||e.favorite),createdAt:e.createdAt||new Date().toISOString()}:null}).filter(Boolean).slice(0,200):[]}function yt(t){const e=t&&typeof t=="object"?t:{},a={};Object.entries(zt).forEach(([n,s])=>{n==="wantToBe"&&!e.wantToBe&&e.about?a[n]=String(e.about||"").slice(0,s):a[n]=String(e[n]||"").slice(0,s)}),a.locked=!!e.locked,a.whoAmI=ua(e.whoAmI||e.whoIAm||[]),a.lifeAreas=pa(Array.isArray(e.lifeAreas)||typeof e.lifeAreas=="string"?e.lifeAreas:[]);let i=ma(e.pGoals||e.goalsList||e.profileGoals||[]);return i.length||[["goalsShort","short","1 Week"],["goalsMid","medium","1 Month"],["goalsLong","long","1 Year"]].forEach(([s,o,r])=>{const c=String(e[s]||"");c.trim()&&c.split(`
`).map(d=>d.trim().replace(/^[-•*]\s+/,"")).filter(Boolean).forEach(d=>{i.length>=100||i.push({id:O("g"),text:d.slice(0,200),term:o,duration:r,createdAt:new Date().toISOString()})})}),a.pGoals=i,a.quotes=ga(e.quotes||e.favQuotes||[]),a}function fa(t,e){const a=String(t&&t.installedAt||"");if(/^\d{4}-\d{2}-\d{2}/.test(a))return a;const i=Object.keys(e||{}).sort();return i.length?`${i[0]}T00:00:00.000`:new Date().toISOString()}function ha(t,e){if(!t)return!1;if(re(t,e)>0)return!0;const a=t.habitForwarded&&t.habitForwarded[e];return Array.isArray(a)&&a.length>0?!0:Array.isArray(t.tasks)&&t.tasks.some(i=>String(i&&i.forwardedHabitId||"")===String(e))}function ba(t,e){return!t||!Array.isArray(t.lockedHabits)?!1:t.lockedHabits.some(a=>String(a&&a.id||"")===String(e))}function ya(t,e,a){const i=String(t||"");for(const n of e){const s=a[n];if(ha(s,i)||ba(s,i))return n}return""}function va(t,e){const a=Object.keys(e).sort(),i=a[0]||"";return t.map(n=>{const s=Tt(n&&n.startFrom);return s?{...n,startFrom:s}:{...n,startFrom:ya(n&&n.id,a,e)||i}})}function ka(t,e){const a=Object.keys(e).sort(),i=a[0]||"",n={};return a.forEach(s=>{const o=e[s]&&e[s].tasks;Array.isArray(o)&&o.forEach(r=>{const c=String(r&&r.sourcePinId||"");!c||n[c]||(n[c]=s)})}),t.map(s=>{const o=Tt(s&&s.startFrom);if(o)return{...s,startFrom:o};const r=String(s&&s.id||"");return{...s,startFrom:n[r]||i}})}function Ge(t){R=ca(t.customCategories||[]),J=la(t.categoryOverrides);const e={};Object.entries(t.days||{}).forEach(([s,o])=>{e[s]={...ae(),habits:o.habits||{},habitRatings:o.habitRatings||{},habitMissed:o.habitMissed||{},habitForwarded:o.habitForwarded&&typeof o.habitForwarded=="object"?o.habitForwarded:{},tasks:Array.isArray(o.tasks)?o.tasks.map(fe):[],note:o.note||"",locked:!!o.locked,lockOverride:o.lockOverride||(o.locked?"locked":null),submittedAt:o.submittedAt||null,lockedHabits:Array.isArray(o.lockedHabits)?o.lockedHabits:null,skippedPins:Array.isArray(o.skippedPins)?o.skippedPins.map(String).filter(r=>r.length<=60).slice(0,100):[]}});const a=va(Array.isArray(t.habits)&&t.habits.length?t.habits:Fe,e).map(s=>({...s,description:String(s.description||"").slice(0,240),category:E(s.category||da(s.id,s.name)),consciousPoints:B(s.consciousPoints),tags:D(s.tags),pin:Y(s.pin)})),i=(Array.isArray(t.archivedHabits)?t.archivedHabits:[]).filter(s=>s&&typeof s=="object"&&s.id).map(s=>se(s,s.archivedAt||null)).filter(s=>s.id.length<=60).slice(0,500),n=ka(Array.isArray(t.pinnedTasks)?t.pinnedTasks.map(s=>({...fe(s),pin:Y(s.pin)})):[],e);return{habits:a,archivedHabits:i,customCategories:R,categoryOverrides:J,installedAt:fa(t,e),profile:yt(t.profile),pinnedTasks:n,days:e,goals:Array.isArray(t.goals)?t.goals.map(Ut):[],badges:Array.isArray(t.badges)?t.badges.filter(s=>s&&s.id&&s.goalId).map(s=>({id:String(s.id),goalId:String(s.goalId),title:String(s.title||""),tier:s.tier||"bronze",rewardTitle:String(s.rewardTitle||""),earnedAt:s.earnedAt||new Date().toISOString()})):[],settings:{lockTime:t.settings&&t.settings.lockTime||Oe.lockTime,autoLock:!t.settings||t.settings.autoLock!==!1,showConscious:!t.settings||t.settings.showConscious!==!1,habitSort:["default","points","category","tags","custom"].includes(t.settings&&t.settings.habitSort)?t.settings.habitSort:"default",taskSort:["default","points","category","tags","custom"].includes(t.settings&&t.settings.taskSort)?t.settings.taskSort:"default",theme:["light","dark"].includes(t.settings&&t.settings.theme)?t.settings.theme:"dark",weekStart:qt(t.settings&&t.settings.weekStart),habitOrder:Array.isArray(t.settings&&t.settings.habitOrder)?t.settings.habitOrder.map(String).filter(Boolean).slice(0,300):[]}}}function he(){const t=q();return{habits:Fe.map(e=>({...e,description:"",tags:[],startFrom:t})),archivedHabits:[],customCategories:[],categoryOverrides:{},installedAt:new Date().toISOString(),profile:yt({}),pinnedTasks:[],days:{},goals:[],badges:[],settings:{...Oe}}}function $a(){try{const t=localStorage.getItem(je)||localStorage.getItem("daily-report-v1");return t?Ge(JSON.parse(t)):he()}catch{return he()}}let l=$a();R=l.customCategories||[];l.customCategories=R;J=l.categoryOverrides||{};l.categoryOverrides=J;let qe=0,Bt={key:null,value:null},Vt=0;function ne(){return Vt>0}function tt(t){Vt+=1;try{return t()}finally{Vt-=1}}function $(){qe+=1;try{localStorage.setItem(je,JSON.stringify(l))}catch{}}let be=0;function st(t){return be+=1,`${t||"id"}${Date.now().toString(36)}${be.toString(36)}${Math.floor(Math.random()*1296).toString(36)}`}function wa(t){return new Date(`${t}T00:00:00`).getDay()}function mt(t){const e=new Date(`${t}T00:00:00`);return e.setDate(e.getDate()-1),q(e)}function oe(t,e){if(!t)return!0;if(Array.isArray(t.exceptDates)&&t.exceptDates.includes(e)||Array.isArray(t.exceptions)&&t.exceptions.includes(e))return!1;if((Array.isArray(t.customDates)?t.customDates:[]).includes(e)||t.mode==="forever")return!0;if(t.mode==="until")return!!t.until&&e<=t.until;if(t.mode==="weekly")return Array.isArray(t.weekdays)&&t.weekdays.includes(wa(e));if(t.mode==="monthly"){const i=Array.isArray(t.monthDays)?t.monthDays.map(Number):[];return i.length?i.includes(Number(String(e).slice(8,10))):!0}if(t.mode==="yearly"){const i=Array.isArray(t.yearDays)?t.yearDays:[];return i.length?i.includes(String(e).slice(5,10)):!0}return t.mode!=="custom"}function vt(t){if(!t)return"Not pinned";const e=(t.exceptDates||t.exceptions||[]).length,a=e?` · ⛔ ${e} exception${e>1?"s":""}`:"",i=t.mode==="custom"?0:Array.isArray(t.customDates)?t.customDates.length:0,n=i?` +${i} custom`:"";if(t.mode==="forever")return`Pinned forever${n}${a}`;if(t.mode==="until")return`${t.until?`Pinned until ${t.until}`:"Pinned until a date"}${n}${a}`;if(t.mode==="weekly"){const s=Array.isArray(t.weekdays)?t.weekdays:[],o=dt.filter(r=>s.includes(r.value)).map(r=>r.label);return`${o.length?`Weekly: ${o.join(", ")}`:"Weekly (no days)"}${n}${a}`}if(t.mode==="monthly"){const s=Array.isArray(t.monthDays)?t.monthDays:[];return`${s.length?`Monthly: day${s.length>1?"s":""} ${[...s].sort((o,r)=>o-r).join(", ")}`:"Monthly"}${n}${a}`}if(t.mode==="yearly"){const s=Array.isArray(t.yearDays)?t.yearDays:[];return`${s.length?`Yearly: ${[...s].sort().join(", ")}`:"Yearly"}${n}${a}`}if(t.mode==="custom"){const s=Array.isArray(t.customDates)?t.customDates:[];return`${s.length?`Custom: ${s.length} date${s.length>1?"s":""}`:"Custom dates"}${a}`}return"Pinned"}function Jt(t){const[e,a]=(l.settings.lockTime||"21:00").split(":").map(Number),i=new Date(`${t}T00:00:00`);return i.setHours(e||0,a||0,0,0),i}function We(t){const e=l.days[t];return e?e.lockOverride==="locked"||e.locked===!0:!1}function re(t,e){return t?t.habitRatings&&t.habitRatings[e]!=null?Number(t.habitRatings[e])||0:t.habits&&t.habits[e]?5:0:0}function Qt(t,e){return re(l.days[t],e)}function Sa(t,e){if(!t)return!1;if(re(t,e)>0||t.habitMissed&&t.habitMissed[e])return!0;const i=t.habitForwarded&&t.habitForwarded[e];return Array.isArray(i)&&i.length>0?!0:Array.isArray(t.tasks)&&t.tasks.some(n=>String(n&&n.forwardedHabitId||"")===String(e))}function Ue(t){if(!t)return[...l.habits];const e=l.habits.filter(i=>ie(i,t)&&oe(i.pin,t)),a=l.days[t];if(a){const i=new Set(e.map(s=>s.id)),n=s=>{!s||i.has(s.id)||Sa(a,s.id)&&(i.add(s.id),e.push(s))};l.habits.forEach(n),l.archivedHabits&&l.archivedHabits.length&&l.archivedHabits.forEach(n)}return e}function ye(t,e){if(!Array.isArray(e)||!e.length)return t;const a=new Map(e.map((i,n)=>[String(i),n]));return t.some(i=>a.has(String(i&&i.id)))?t.map((i,n)=>({item:i,i:n})).sort((i,n)=>{const s=a.has(String(i.item&&i.item.id))?a.get(String(i.item.id)):Number.MAX_SAFE_INTEGER,o=a.has(String(n.item&&n.item.id))?a.get(String(n.item.id)):Number.MAX_SAFE_INTEGER;return s===o?i.i-n.i:s-o}).map(i=>i.item):t}function xa(t){const e=l.habits.find(a=>a.id===t);return e||(l.archivedHabits||[]).find(a=>a.id===t)||null}function Aa(t){l.archivedHabits||(l.archivedHabits=[]),!l.archivedHabits.some(e=>e.id===t.id)&&(l.archivedHabits.push(se(t,new Date().toISOString())),l.archivedHabits.length>500&&l.archivedHabits.splice(0,l.archivedHabits.length-500))}function Xt(t){const e=P(t),a=Ue(t);e.lockedHabits=a.map(i=>se(i)),e.habitMissed={},a.forEach(i=>{Qt(t,i.id)<=0&&(e.habitMissed[i.id]=!0)}),e.tasks.forEach(i=>{i.missed=!i.done})}function ht(t){const e=l.days[t];return!e||e.lockOverride==="unlocked"?!1:e.lockOverride==="locked"||e.locked===!0?!0:l.settings.autoLock?Date.now()>=Jt(t).getTime():!1}function ve(t){if(ne())return ht(t);const e=P(t);return e.lockOverride==="unlocked"?!1:e.lockOverride==="locked"||e.locked?((!Array.isArray(e.lockedHabits)||!e.habitMissed)&&Xt(t),!0):l.settings.autoLock&&Date.now()>=Jt(t).getTime()?(e.locked=!0,e.lockOverride="locked",e.submittedAt=e.submittedAt||Jt(t).toISOString(),Xt(t),$(),!0):!1}function P(t){if(!l.days[t]){const e=ae();if(ne())return e;l.days[t]=e}return l.days[t]}function Ta(t){const e=P(t);if(We(t)||ne())return e;let a=!1;const i=new Set(Array.isArray(e.skippedPins)?e.skippedPins.map(String):[]);return l.pinnedTasks.forEach(n=>{ie(n,t)&&oe(n.pin,t)&&(i.has(String(n.id))||e.tasks.some(s=>s.sourcePinId===n.id)||(e.tasks.push({id:`ptask-${n.id}-${t}`,title:n.title,points:n.points,description:n.description||"",category:E(n.category),tags:D(n.tags),rating:0,done:!1,missed:!1,sourcePinId:n.id,image:X(n.image)}),a=!0))}),a&&$(),e}function G(t){return!u.isLocked(t)}function ke(t){const e=Q().find(a=>a.label.toLowerCase()===String(t||"").trim().toLowerCase());return e?e.id:"mentally"}function $e(t){return!t||typeof t!="object"||Array.isArray(t)?[]:Array.isArray(t.days)?t.days.filter(e=>e&&/^\d{4}-\d{2}-\d{2}$/.test(String(e.date||""))):[]}const u={todayKey:q,exportBackup(){return JSON.stringify({app:"Daily Report",kind:"full-backup",version:1,exportedAt:new Date().toISOString(),data:l},null,2)},backupKind(t){if(!t||typeof t!="object"||Array.isArray(t))return"invalid";const e=t.data&&typeof t.data=="object"&&!Array.isArray(t.data)?t.data:t;return Array.isArray(e.days)?"report-export":Array.isArray(e.categories)||Array.isArray(e.plans)||Array.isArray(e.schedule)?"wrong-app":typeof e!="object"||e===null||e.habits!==void 0&&!Array.isArray(e.habits)||e.days!==void 0&&(typeof e.days!="object"||e.days===null||Array.isArray(e.days))||e.settings!==void 0&&(typeof e.settings!="object"||e.settings===null||Array.isArray(e.settings))||!["habits","pinnedTasks","days","goals","badges","settings"].some(i=>e[i]!==void 0)?"invalid":"ok"},importBackup(t){if(this.backupKind(t)!=="ok")return!1;const e=t.data&&typeof t.data=="object"&&!Array.isArray(t.data)?t.data:t;return l=Ge(e),R=l.customCategories||[],l.customCategories=R,J=l.categoryOverrides||{},l.categoryOverrides=J,$(),!0},previewReport(t){const e=$e(t);if(!e.length)return{days:0,start:"",end:"",newHabits:0};const a=new Set(l.habits.map(s=>String(s.name||"").trim().toLowerCase())),i=new Set;e.forEach(s=>{(Array.isArray(s.habits)?s.habits:[]).forEach(o=>{const r=String(o&&o.name||"").trim().toLowerCase();r&&!a.has(r)&&i.add(r)})});const n=e.map(s=>String(s.date)).sort();return{days:e.length,start:n[0],end:n[n.length-1],newHabits:i.size}},importReport(t){const e=$e(t);if(!e.length)return!1;const a=e.map(r=>String(r.date)).sort(),i=a[a.length-1],n={};l.habits.forEach(r=>{n[String(r.name||"").trim().toLowerCase()]=r});let s=0;const o=Date.now();return e.forEach((r,c)=>{const d=String(r.date);(Array.isArray(r.habits)?r.habits:[]).forEach(p=>{const k=String(p&&p.name||"").trim().slice(0,80);if(!k)return;const C=k.toLowerCase();if(!n[C]){const S={id:`h${o}_${s}`,name:k,description:String(p&&p.description||"").slice(0,240),points:Number(p&&p.points||10)||10,icon:"star",category:ke(p&&p.category),consciousPoints:B(p&&p.consciousPoints),tags:D(p&&p.tags),pin:{mode:"until",until:i,weekdays:[],monthDays:[],yearDays:[],customDates:[],exceptDates:[]},startFrom:a[0]};l.habits.push(S),n[C]=S,s+=1}});const m=ae();m.note=String(r.note||""),m.locked=!0,m.lockOverride="locked",m.submittedAt=null;const w=[];(Array.isArray(r.habits)?r.habits:[]).forEach(p=>{const k=n[String(p&&p.name||"").trim().toLowerCase()];if(!k)return;const C=Math.max(0,Math.min(5,Number(p&&p.rating||0)));m.habitRatings[k.id]=C,m.habits[k.id]=C>0,C<=0&&(m.habitMissed[k.id]=!0),k.startFrom&&d<k.startFrom&&(k.startFrom=d),w.push({id:k.id,name:k.name,description:k.description,points:k.points,icon:k.icon||"star",category:E(k.category),consciousPoints:B(k.consciousPoints),tags:D(k.tags),pin:Y(k.pin)})}),m.lockedHabits=w,m.tasks=(Array.isArray(r.tasks)?r.tasks:[]).map((p,k)=>({id:`t${o}_${c}_${k}`,title:String(p&&p.title||"Task").slice(0,120),points:Number(p&&p.points||5)||5,description:String(p&&p.description||""),category:ke(p&&p.category),tags:D(p&&p.tags),rating:Math.max(0,Math.min(5,Number(p&&p.rating||0))),done:!!(p&&p.done),missed:!(p&&p.done),image:"",forwardedFrom:/^\d{4}-\d{2}-\d{2}$/.test(String(p&&p.forwardedFrom||""))?String(p.forwardedFrom):"",forwardedHabitId:"",forwardedTo:Array.isArray(p&&p.forwardedTo)?p.forwardedTo.filter(C=>/^\d{4}-\d{2}-\d{2}$/.test(String(C))).map(String).slice(0,50):[]})),l.days[d]=m}),$(),{days:e.length,habits:s}},getSettings(){return l.settings},setLockTime(t){l.settings.lockTime=t||"21:00",$()},setAutoLock(t){l.settings.autoLock=!!t,$()},setShowConscious(t){l.settings.showConscious=!!t,$()},consciousEnabled(){return l.settings.showConscious!==!1},setHabitSort(t){l.settings.habitSort=["default","points","category","tags","custom"].includes(t)?t:"default",$()},setTaskSort(t){l.settings.taskSort=["default","points","category","tags","custom"].includes(t)?t:"default",$()},getWeekStart(){return qt(l.settings.weekStart)},setWeekStart(t){l.settings.weekStart=qt(t),$()},getTheme(){return l.settings.theme==="light"?"light":"dark"},setTheme(t){l.settings.theme=t==="light"?"light":"dark",$()},getHabits(t,e){if(t&&We(t)){const s=l.days[t];if(s&&Array.isArray(s.lockedHabits)){const o=e||l.settings.habitSort||"default",r=[...s.lockedHabits];return o==="default"||o==="custom"?ye(r,l.settings.habitOrder):Ot(r,o)}}const a=e||l.settings.habitSort||"default",i=Ue(t),n=a==="default"||a==="custom"?ye(i,l.settings.habitOrder):Ot(i,a);return a==="default"||a==="custom"?n.slice().sort((s,o)=>+!!o.pin-+!!s.pin):n},getTasks(t,e){const a=this.getDay(t),i=e||l.settings.taskSort||"default";return i==="default"||i==="custom"?a.tasks:Ot(a.tasks,i)},getAllHabits(){return l.habits},getPinnedTasks(){return l.pinnedTasks},getDay(t){return ve(t),Ta(t)},isLocked(t){return ve(t)},submitDay(t){const e=P(t);e.locked=!0,e.lockOverride="locked",e.submittedAt=new Date().toISOString(),Xt(t),$(),this.checkGoals(t)},unlockDay(t){const e=P(t);e.locked=!1,e.lockOverride="unlocked",e.habitMissed={},e.lockedHabits=null,e.tasks.forEach(a=>{a.missed=!1}),$()},isHabitMissed(t,e){const a=l.days[t];return!a||!(a.locked||a.lockOverride==="locked")||!this.getHabits(t).some(i=>i.id===e)||Qt(t,e)>0?!1:(a.habitMissed&&a.habitMissed[e],!0)},isTaskMissed(t,e){const a=l.days[t];if(!a)return!1;const i=(a.tasks||[]).find(n=>n.id===e);return i?i.missed===!0?!0:i.missed===!1?!1:!!(a.locked||a.lockOverride==="locked")&&!i.done:!1},missedCounts(t){return tt(()=>{const e=this.getDay(t),a=this.getHabits(t),i=ht(t);return{habits:a.filter(n=>e.habitMissed&&e.habitMissed[n.id]?!0:i&&Qt(t,n.id)<=0).length,tasks:e.tasks.filter(n=>n.done?!1:n.missed===!0?!0:n.missed===!1?!1:i).length}})},lockDay(t){this.submitDay(t)},lockDays(t){let e=0;return t.forEach(a=>{this.isLocked(a)||(this.submitDay(a),e+=1)}),e},unlockDays(t){let e=0;return t.forEach(a=>{this.isLocked(a)&&(this.unlockDay(a),e+=1)}),e},lockedReports(){return tt(()=>Object.keys(l.days).sort().reverse().filter(t=>ht(t)).map(t=>({date:t,submittedAt:l.days[t].submittedAt,...this.scoreFor(t)})))},habitRating(t,e){const a=l.days[t];return a?a.habitRatings&&a.habitRatings[e]!=null?Number(a.habitRatings[e])||0:a.habits&&a.habits[e]?5:0:0},setHabitRating(t,e,a){if(!G(t))return;const i=P(t),n=Math.max(0,Math.min(5,Number(a)||0));i.habitRatings[e]=n,i.habits[e]=n>0,$(),this.checkGoals(t)},toggleHabit(t,e){if(!G(t))return;const a=this.habitRating(t,e)>0?0:5;this.setHabitRating(t,e,a)},addTask(t,e,a,i={}){if(!G(t))return;P(t).tasks.push({id:st("t"),title:e.trim(),points:Number(a)||5,description:String(i.description||"").trim(),category:E(i.category),tags:D(i.tags),rating:Math.max(0,Math.min(5,Number(i.rating)||0)),done:!1,missed:!1,forwardedFrom:/^\d{4}-\d{2}-\d{2}$/.test(String(i.forwardedFrom||""))?String(i.forwardedFrom):"",forwardedHabitId:String(i.forwardedHabitId||""),forwardedTo:[],image:X(i.image)}),$(),this.checkGoals(t)},setTaskRating(t,e,a){if(!G(t))return;const n=P(t).tasks.find(o=>o.id===e);if(!n)return;const s=Math.max(0,Math.min(5,Number(a)||0));n.rating=s,$()},setTaskOrder(t,e){if(!G(t))return;const a=P(t),i=(Array.isArray(e)?e:[]).map(String).filter(Boolean);if(!i.length)return;const n=new Map(i.map((o,r)=>[o,r])),s=a.tasks.slice().sort((o,r)=>{const c=n.has(o.id)?n.get(o.id):Number.MAX_SAFE_INTEGER,d=n.has(r.id)?n.get(r.id):Number.MAX_SAFE_INTEGER;return c-d});a.tasks=s,$()},setHabitOrder(t){const e=(Array.isArray(t)?t:[]).map(String).filter(Boolean);e.length&&(l.settings.habitOrder=e.slice(0,300),$())},toggleTask(t,e){if(!G(t))return;const i=P(t).tasks.find(n=>n.id===e);i&&(i.done=!i.done,$(),this.checkGoals(t))},removeTask(t,e){if(!G(t))return;const a=P(t),i=a.tasks.find(s=>s.id===e);a.tasks=a.tasks.filter(s=>s.id!==e);const n=i&&i.sourcePinId?String(i.sourcePinId):"";n&&(Array.isArray(a.skippedPins)||(a.skippedPins=[]),a.skippedPins.includes(n)||a.skippedPins.push(n),a.skippedPins.length>100&&a.skippedPins.splice(0,a.skippedPins.length-100)),$()},forwardTask(t,e,a){if(!/^\d{4}-\d{2}-\d{2}$/.test(String(a||"")))return{ok:!1,reason:"Pick a valid date"};if(t===a)return{ok:!1,reason:"Already on that day"};if(!G(t))return{ok:!1,reason:"Source day is locked"};if(this.isLocked(a))return{ok:!1,reason:"Target day is locked"};const n=P(t).tasks.find(r=>r.id===e);if(!n)return{ok:!1,reason:"Task not found"};P(a).tasks.push({id:st("t"),title:n.title,points:Number(n.points)||5,description:String(n.description||""),category:E(n.category),tags:D(n.tags),rating:0,done:!1,missed:!1,forwardedFrom:t,forwardedHabitId:String(n.forwardedHabitId||""),forwardedTo:[],image:X(n.image)});const o=Array.isArray(n.forwardedTo)?n.forwardedTo:[];return o.includes(a)||o.push(a),n.forwardedTo=o.slice(0,50),$(),this.checkGoals(a),{ok:!0}},forwardHabit(t,e,a){if(!/^\d{4}-\d{2}-\d{2}$/.test(String(a||"")))return{ok:!1,reason:"Pick a valid date"};if(t===a)return{ok:!1,reason:"Already on that day"};if(!G(t))return{ok:!1,reason:"Source day is locked"};if(this.isLocked(a))return{ok:!1,reason:"Target day is locked"};const i=l.habits.find(r=>r.id===e);if(!i)return{ok:!1,reason:"Habit not found"};P(a).tasks.push({id:st("t"),title:i.name,points:Number(i.points)||10,description:String(i.description||""),category:E(i.category),tags:D(i.tags),rating:0,done:!1,missed:!1,forwardedFrom:t,forwardedHabitId:e,forwardedTo:[]});const s=P(t);(!s.habitForwarded||typeof s.habitForwarded!="object")&&(s.habitForwarded={});const o=Array.isArray(s.habitForwarded[e])?s.habitForwarded[e]:[];return o.includes(a)||o.push(a),s.habitForwarded[e]=o.slice(0,50),$(),this.checkGoals(a),{ok:!0}},habitForwardedTo(t,e){const a=l.days[t];if(!a||!a.habitForwarded)return[];const i=a.habitForwarded[e];return Array.isArray(i)?i:[]},setNote(t,e){G(t)&&(P(t).note=e,$())},addHabit(t,e,a={}){l.habits.push({id:st("h"),name:t.trim(),description:String(a.description||"").trim().slice(0,240),points:Number(e)||10,icon:"star",category:E(a.category||"physically"),consciousPoints:B(a.consciousPoints),tags:D(a.tags),pin:Y({mode:"forever"}),startFrom:Tt(a.startFrom)||q()}),$()},updateHabit(t,e){const a=l.habits.find(i=>i.id===t);a&&(e.name!=null&&(a.name=String(e.name).trim()||a.name),e.description!=null&&(a.description=String(e.description).trim().slice(0,240)),e.points!=null&&(a.points=Number(e.points)||a.points),e.category!=null&&(a.category=E(e.category)),e.consciousPoints!=null&&(a.consciousPoints=B(e.consciousPoints)),e.tags!=null&&(a.tags=D(e.tags)),$())},updateTask(t,e,a){if(!G(t))return;const n=P(t).tasks.find(s=>s.id===e);if(n){if(a.title!=null&&(n.title=String(a.title).trim()||n.title),a.points!=null&&(n.points=Number(a.points)||n.points),a.description!=null&&(n.description=String(a.description).trim()),a.category!=null&&(n.category=E(a.category)),a.tags!=null&&(n.tags=D(a.tags)),a.image!==void 0&&(n.image=X(a.image)),a.rating!=null&&(n.rating=Math.max(0,Math.min(5,Number(a.rating)||0))),n.sourcePinId){const s=l.pinnedTasks.find(o=>o.id===n.sourcePinId);s&&(s.title=n.title,s.points=n.points,s.description=n.description,s.category=n.category,a.tags!=null&&(s.tags=D(a.tags)),a.image!==void 0&&(s.image=X(a.image)))}$()}},habitStreak(t,e){const a=xa(t);if(!a)return 0;let i=e,n=0;this.habitRating(i,t)===0&&(i=mt(i));let s=0;for(;n<400;){if(n+=1,!ie(a,i)||!oe(a.pin,i)){i=mt(i);continue}if(this.habitRating(i,t)>0){s+=1,i=mt(i);continue}break}return s},categoryBreakdown(t){const e=this.getDay(t),a=this.getHabits(t);return Q().map(i=>{const n=a.filter(S=>E(S.category)===i.id),s=e.tasks.filter(S=>E(S.category)===i.id),o=n.reduce((S,f)=>{const T=this.habitRating(t,f.id);return S+Math.round(f.points*T/5)},0),r=l.settings.showConscious!==!1,c=r?n.reduce((S,f)=>S+(this.habitRating(t,f.id)>0?B(f.consciousPoints):0),0):0,d=n.reduce((S,f)=>S+f.points,0),m=r?n.reduce((S,f)=>S+B(f.consciousPoints),0):0,w=s.reduce((S,f)=>S+(f.done?f.points:0),0),p=s.reduce((S,f)=>S+f.points,0),k=n.map(S=>this.habitRating(t,S.id)),C=k.length?Math.round(k.reduce((S,f)=>S+f,0)/k.length*10)/10:0;return{...i,habits:n,tasks:s,earned:o+c+w,max:d+m+p,habitAvg:C,consciousEarned:c,consciousMax:m,completed:n.filter(S=>this.habitRating(t,S.id)>0).length+s.filter(S=>S.done).length,total:n.length+s.length}})},removeHabit(t){const e=l.habits.find(a=>a.id===t);e&&Aa(e),l.habits=l.habits.filter(a=>a.id!==t),$()},getArchivedHabits(){return(l.archivedHabits||[]).map(t=>({...t}))},restoreHabit(t){const e=(l.archivedHabits||[]).findIndex(n=>n.id===t);if(e<0)return{ok:!1,reason:"That habit is no longer archived"};const a=l.archivedHabits[e];if(l.habits.some(n=>n.id===a.id))return l.archivedHabits.splice(e,1),$(),{ok:!0};const i={...a,description:String(a.description||"").slice(0,240),category:E(a.category),consciousPoints:B(a.consciousPoints),tags:D(a.tags),pin:Y(a.pin),archivedAt:null};return l.habits.push(i),l.archivedHabits.splice(e,1),$(),{ok:!0,habit:{...i}}},pinHabit(t,e){const a=l.habits.find(i=>i.id===t);a&&(a.pin=Y(e),$())},unpinHabit(t){const e=l.habits.find(a=>a.id===t);e&&(e.pin=null,$())},pinTask(t,e,a){if(!G(t))return;const n=P(t).tasks.find(r=>r.id===e);if(!n)return;const s=n.sourcePinId?l.pinnedTasks.find(r=>r.id===n.sourcePinId):null;if(s){s.pin=Y(a),$();return}const o=st("p");l.pinnedTasks.push({id:o,title:n.title,points:n.points,description:n.description||"",category:E(n.category),tags:D(n.tags),pin:Y(a),startFrom:t,image:X(n.image)}),n.sourcePinId=o,$()},unpinTaskTemplate(t){l.pinnedTasks=l.pinnedTasks.filter(a=>a.id!==t);const e=String(t);Object.values(l.days).forEach(a=>{!Array.isArray(a.skippedPins)||!a.skippedPins.includes(e)||(a.skippedPins=a.skippedPins.filter(i=>i!==e))}),$()},updatePinnedTask(t,e){const a=l.pinnedTasks.find(i=>i.id===t);a&&(a.pin=Y(e),$())},findHabit(t){return l.habits.find(e=>e.id===t)||null},findTask(t,e){return P(t).tasks.find(a=>a.id===e)||null},findPinnedTask(t){return l.pinnedTasks.find(e=>e.id===t)||null},getInstalledAt(){return String(l.installedAt||new Date().toISOString())},getProfile(){const t=yt(l.profile);return l.profile=t,JSON.parse(JSON.stringify(t))},setProfileField(t,e){return!Object.prototype.hasOwnProperty.call(zt,t)||l.profile.locked?!1:((!l.profile||typeof l.profile!="object")&&(l.profile=yt({})),l.profile[t]=String(e||"").slice(0,zt[t]),$(),!0)},setProfileLocked(t){(!l.profile||typeof l.profile!="object")&&(l.profile=yt({})),l.profile.locked=!!t,$()},isProfileLocked(){return!!(l.profile&&l.profile.locked)},profileGoalDurations(){return JSON.parse(JSON.stringify(ft))},addWhoAmI(t){if(l.profile.locked)return{ok:!1,reason:"Profile is locked"};const e=String(t||"").trim().slice(0,120);return e?(l.profile.whoAmI||[]).length>=50?{ok:!1,reason:"List is full (50)"}:(l.profile.whoAmI.push({id:O("w"),text:e}),$(),{ok:!0}):{ok:!1,reason:"Type something first"}},updateWhoAmI(t,e){if(l.profile.locked)return;const a=(l.profile.whoAmI||[]).find(n=>n.id===t);if(!a)return;const i=String(e||"").trim().slice(0,120);i?a.text=i:l.profile.whoAmI=l.profile.whoAmI.filter(n=>n.id!==t),$()},moveWhoAmI(t,e){if(l.profile.locked)return;const a=l.profile.whoAmI||[],i=a.findIndex(o=>o.id===t),n=i+e;if(i<0||n<0||n>=a.length)return;const[s]=a.splice(i,1);a.splice(n,0,s),$()},removeWhoAmI(t){l.profile.locked||(l.profile.whoAmI=(l.profile.whoAmI||[]).filter(e=>e.id!==t),$())},addLifeArea(t){if(l.profile.locked)return{ok:!1,reason:"Profile is locked"};const e=String(t||"").trim().slice(0,60);if(!e)return{ok:!1,reason:"Name the life area"};if((l.profile.lifeAreas||[]).length>=20)return{ok:!1,reason:"Max 20 areas"};const a={id:O("a"),title:e,description:""};return l.profile.lifeAreas.push(a),$(),{ok:!0,id:a.id}},updateLifeArea(t,e={}){if(l.profile.locked)return;const a=(l.profile.lifeAreas||[]).find(i=>i.id===t);a&&(e.title!=null&&(a.title=String(e.title).trim().slice(0,60)||a.title),e.description!=null&&(a.description=String(e.description).slice(0,1e3)),$())},moveLifeArea(t,e){if(l.profile.locked)return;const a=l.profile.lifeAreas||[],i=a.findIndex(o=>o.id===t),n=i+e;if(i<0||n<0||n>=a.length)return;const[s]=a.splice(i,1);a.splice(n,0,s),$()},removeLifeArea(t){l.profile.locked||(l.profile.lifeAreas=(l.profile.lifeAreas||[]).filter(e=>e.id!==t),$())},addProfileGoal(t,e,a){if(l.profile.locked)return{ok:!1,reason:"Profile is locked"};const i=String(t||"").trim().slice(0,200);if(!i)return{ok:!1,reason:"Write your goal first"};const n=Yt.includes(e)?e:"short",s=ft[n],o=s.includes(a)?a:s[0];if((l.profile.pGoals||[]).length>=100)return{ok:!1,reason:"Too many goals (100)"};const r={id:O("g"),text:i,term:n,duration:o,createdAt:new Date().toISOString()};return l.profile.pGoals.push(r),$(),{ok:!0,id:r.id}},updateProfileGoal(t,e={}){if(l.profile.locked)return;const a=(l.profile.pGoals||[]).find(i=>i.id===t);if(a){if(e.text!=null&&(a.text=String(e.text).trim().slice(0,200)||a.text),e.term!=null&&Yt.includes(e.term)){a.term=e.term;const i=ft[a.term];i.includes(a.duration)||(a.duration=i[0])}e.duration!=null&&ft[a.term].includes(e.duration)&&(a.duration=e.duration),$()}},removeProfileGoal(t){l.profile.locked||(l.profile.pGoals=(l.profile.pGoals||[]).filter(e=>e.id!==t),$())},addQuote(t,e){if(l.profile.locked)return{ok:!1,reason:"Profile is locked"};const a=String(t||"").trim().slice(0,500);if(!a)return{ok:!1,reason:"Write the quote first"};if((l.profile.quotes||[]).length>=200)return{ok:!1,reason:"Too many quotes (200)"};const i={id:O("q"),text:a,author:String(e||"").trim().slice(0,80),fav:!1,createdAt:new Date().toISOString()};return l.profile.quotes.push(i),$(),{ok:!0,id:i.id}},updateQuote(t,e={}){if(l.profile.locked)return;const a=(l.profile.quotes||[]).find(i=>i.id===t);a&&(e.text!=null&&(a.text=String(e.text).trim().slice(0,500)||a.text),e.author!=null&&(a.author=String(e.author).trim().slice(0,80)),$())},toggleQuoteFav(t){if(l.profile.locked)return;const e=(l.profile.quotes||[]).find(a=>a.id===t);e&&(e.fav=!e.fav,$())},removeQuote(t){l.profile.locked||(l.profile.quotes=(l.profile.quotes||[]).filter(e=>e.id!==t),$())},getCategories(){return Q().map(t=>({...t}))},getCustomCategories(){return R.map(t=>({...t}))},addCategory(t){const e=String(t||"").trim().slice(0,30);if(!e)return{ok:!1,reason:"Type a category name"};if(Q().some(n=>n.label.toLowerCase()===e.toLowerCase()))return{ok:!1,reason:"That category already exists"};if(R.length>=20)return{ok:!1,reason:"Too many categories (max 20 custom)"};let i=`c${Date.now().toString(36)}`;return Q().some(n=>n.id===i)&&(i=`c${Date.now().toString(36)}${Math.floor(Math.random()*99)}`),R.push({id:i,label:e}),$(),{ok:!0,id:i}},renameCategory(t,e){const a=R.find(s=>s.id===t);if(!a)return{ok:!1,reason:"Built-in categories can’t be renamed"};const i=String(e||"").trim().slice(0,30);return i?Q().some(s=>s.id!==t&&s.label.toLowerCase()===i.toLowerCase())?{ok:!1,reason:"That category already exists"}:(a.label=i,$(),{ok:!0}):{ok:!1,reason:"Type a category name"}},updateCategory(t,e={}){const a=R.find(i=>i.id===t);if(!a){if(!xt.find(s=>s.id===t))return{ok:!1,reason:"Category not found"};const n={...J[t]||{}};return e.color!==void 0&&(n.color=String(e.color).slice(0,20)),e.goals!==void 0&&(n.goals=String(e.goals).slice(0,1e3)),J[t]=n,l.categoryOverrides=J,$(),{ok:!0}}return e.color!==void 0&&(a.color=String(e.color).slice(0,20)),e.goals!==void 0&&(a.goals=String(e.goals).slice(0,1e3)),$(),{ok:!0}},deleteCategory(t){const e=R.findIndex(a=>a.id===t);return e<0?{ok:!1,reason:"Built-in categories can’t be deleted"}:(R.splice(e,1),l.habits.forEach(a=>{a.category===t&&(a.category="mentally")}),(l.archivedHabits||[]).forEach(a=>{a.category===t&&(a.category="mentally")}),l.pinnedTasks.forEach(a=>{a.category===t&&(a.category="mentally")}),Object.values(l.days).forEach(a=>{(a.tasks||[]).forEach(i=>{i.category===t&&(i.category="mentally")})}),$(),{ok:!0})},getAllTags(){const t=new Map,e=a=>{D(a).forEach(i=>{t.set(i,(t.get(i)||0)+1)})};return l.habits.forEach(a=>e(a.tags)),(l.archivedHabits||[]).forEach(a=>e(a.tags)),l.pinnedTasks.forEach(a=>e(a.tags)),Object.values(l.days).forEach(a=>{(a.tasks||[]).forEach(i=>e(i.tags))}),[...t.entries()].map(([a,i])=>({tag:a,count:i})).sort((a,i)=>i.count-a.count||a.tag.localeCompare(i.tag))},renameTag(t,e){const a=String(t||"").trim(),i=D(e)[0]||"";if(!a||!i)return{ok:!1,reason:"Type a tag name"};if(a.toLowerCase()===i.toLowerCase()){const o=r=>D((r||[]).map(c=>String(c).toLowerCase()===a.toLowerCase()?i:c));return l.habits.forEach(r=>{r.tags=o(r.tags)}),(l.archivedHabits||[]).forEach(r=>{r.tags=o(r.tags)}),l.pinnedTasks.forEach(r=>{r.tags=o(r.tags)}),Object.values(l.days).forEach(r=>{(r.tasks||[]).forEach(c=>{c.tags=o(c.tags)})}),$(),{ok:!0}}const n=this.getAllTags().some(o=>o.tag.toLowerCase()===i.toLowerCase()),s=o=>{const r=(o||[]).map(c=>String(c).toLowerCase()===a.toLowerCase()?i:c);return D(r)};return l.habits.forEach(o=>{o.tags=s(o.tags)}),(l.archivedHabits||[]).forEach(o=>{o.tags=s(o.tags)}),l.pinnedTasks.forEach(o=>{o.tags=s(o.tags)}),Object.values(l.days).forEach(o=>{(o.tasks||[]).forEach(r=>{r.tags=s(r.tags)})}),$(),{ok:!0,merged:n}},deleteTag(t){const e=String(t||"").trim().toLowerCase();if(!e)return{ok:!1,reason:"Pick a tag first"};const a=i=>(i||[]).filter(n=>String(n).toLowerCase()!==e);return l.habits.forEach(i=>{i.tags=a(i.tags)}),(l.archivedHabits||[]).forEach(i=>{i.tags=a(i.tags)}),l.pinnedTasks.forEach(i=>{i.tags=a(i.tags)}),Object.values(l.days).forEach(i=>{(i.tasks||[]).forEach(n=>{n.tags=a(n.tags)})}),$(),{ok:!0}},addTagToHabit(t,e){const a=l.habits.find(n=>n.id===t);if(!a)return{ok:!1,reason:"Pick a habit first"};const i=D(e)[0]||"";return i?(a.tags=D([...a.tags||[],i]),$(),{ok:!0}):{ok:!1,reason:"Type a tag name"}},categoryChart(t,e){const a=["week","month","year"].includes(t)?t:"week",i=`${a}|${e}|${qe}`;return Bt.key===i?Bt.value:tt(()=>this._buildCategoryChart(a,e,i))},_buildCategoryChart(t,e,a){const i=Q(),n=[];if(t==="year"){const m=String(e).slice(0,4);for(let w=0;w<12;w++){const p=String(w+1).padStart(2,"0"),k=new Date(Number(m),w+1,0).getDate();n.push({label:new Date(Number(m),w,1).toLocaleDateString(void 0,{month:"short"}),title:new Date(Number(m),w,1).toLocaleDateString(void 0,{month:"long",year:"numeric"}),keys:this.rangeKeys(`${m}-${p}-01`,`${m}-${p}-${String(k).padStart(2,"0")}`)})}}else{const[m,w]=this.resolveRange(t,e);this.rangeKeys(m,w).forEach(p=>{const k=new Date(`${p}T00:00:00`);n.push({label:t==="week"?k.toLocaleDateString(void 0,{weekday:"narrow"}):String(k.getDate()),title:p,keys:[p]})})}const s={},o={};i.forEach(m=>{s[m.id]=n.map(()=>0),o[m.id]=0}),n.forEach((m,w)=>{m.keys.forEach(p=>{this.categoryBreakdown(p).forEach(k=>{k.id in s||(s[k.id]=n.map(()=>0),o[k.id]=0),s[k.id][w]+=k.earned||0,o[k.id]+=k.earned||0})})});const r=n.map((m,w)=>i.reduce((p,k)=>p+(s[k.id]?s[k.id][w]:0),0)),c=Math.max(1,...r),d={kind:t,labels:n.map(m=>m.label),titles:n.map(m=>m.title),cats:i.map(m=>({...m})),perCat:s,totals:o,max:c,grandTotal:r.reduce((m,w)=>m+w,0)};return Bt={key:a,value:d},d},getGoals(){return l.goals},getBadges(){return[...l.badges].sort((t,e)=>{const a=ge(e.tier)-ge(t.tier);return a!==0?a:String(e.earnedAt).localeCompare(String(t.earnedAt))})},topBadges(t=3){return this.getBadges().slice(0,t)},addGoal(t={}){const e=Ut({...t,id:st("g")});return l.goals.push(e),$(),this.checkGoals(q()),e},updateGoal(t,e={}){const a=l.goals.find(n=>n.id===t);if(!a)return;const i=Ut({...a,...e,id:t});Object.assign(a,i),$(),this.checkGoals(q())},removeGoal(t){l.goals=l.goals.filter(e=>e.id!==t),$()},removeBadge(t){l.badges=l.badges.filter(e=>e.id!==t),$()},perfectDaysCount(){return tt(()=>Object.keys(l.days).filter(t=>{const e=this.scoreFor(t);return e.max>0&&e.percent===100}).length)},taskStreak(t,e){let a=e,i=0;(o=>{const r=l.days[o];return!r||!Array.isArray(r.tasks)?!1:r.tasks.some(c=>c.sourcePinId===t&&c.done)})(a)||(a=mt(a));let s=0;for(;i<400;){i+=1;const o=l.days[a];if(!o||!Array.isArray(o.tasks))break;if(o.tasks.some(r=>r.sourcePinId===t&&r.done)){s+=1,a=mt(a);continue}break}return s},goalProgress(t,e){const a=e||q();if(t.kind==="habit-streak"){const n=this.habitStreak(t.targetId,a);return{current:n,target:t.targetDays,done:n>=t.targetDays}}if(t.kind==="task-streak"){const n=this.taskStreak(t.targetId,a);return{current:n,target:t.targetDays,done:n>=t.targetDays}}const i=this.perfectDaysCount();return{current:i,target:t.targetDays,done:i>=t.targetDays}},checkGoals(t){const e=t||q();let a=[];return l.goals.forEach(i=>{if(l.badges.some(s=>s.goalId===i.id))return;if(this.goalProgress(i,e).done){const s={id:st("b"),goalId:i.id,title:i.title,tier:i.tier,rewardTitle:i.rewardTitle,earnedAt:new Date().toISOString()};l.badges.push(s),a.push(s)}}),a.length&&$(),a},scoreFor(t){return tt(()=>this._scoreFor(t))},_scoreFor(t){const e=this.getDay(t),a=this.getHabits(t),i=this.isLocked(t),n=l.settings.showConscious!==!1,s=a.reduce((S,f)=>{const T=this.habitRating(t,f.id);return S+Math.round(f.points*T/5)},0),o=n?a.reduce((S,f)=>S+(this.habitRating(t,f.id)>0?B(f.consciousPoints):0),0):0,r=e.tasks.reduce((S,f)=>S+(f.done?f.points:0),0),c=a.reduce((S,f)=>S+f.points,0),d=n?a.reduce((S,f)=>S+B(f.consciousPoints),0):0,m=e.tasks.reduce((S,f)=>S+f.points,0),w=s+o+r,p=c+d+m,k=a.filter(S=>e.habitMissed&&e.habitMissed[S.id]?!0:i&&this.habitRating(t,S.id)<=0).length,C=e.tasks.filter(S=>S.done?!1:S.missed===!0?!0:S.missed===!1?!1:i).length;return{earned:w,max:p,habitScore:s,consciousScore:o,maxConscious:d,taskScore:r,completedHabits:a.filter(S=>this.habitRating(t,S.id)>0).length,habitAvg:a.length?Math.round(a.reduce((S,f)=>S+this.habitRating(t,f.id),0)/a.length*10)/10:0,totalHabits:a.length,completedTasks:e.tasks.filter(S=>S.done).length,totalTasks:e.tasks.length,missedHabits:k,missedTasks:C,percent:p?Math.round(w/p*100):0,locked:i,submittedAt:e.submittedAt}},monthKeys(t){const e=String(t).slice(0,7);return Object.keys(l.days).filter(a=>a.startsWith(e)).sort()},rangeKeys(t,e){const a=[],i=new Date(`${t}T00:00:00`),n=new Date(`${e}T00:00:00`);let s=0;for(;i<=n&&s<732;)s+=1,a.push(q(i)),i.setDate(i.getDate()+1);return a},resolveRange(t,e){if(t==="day")return[e,e];if(t==="week"){const i=new Date(`${e}T00:00:00`),n=new Date(i);n.setDate(i.getDate()-(i.getDay()-this.getWeekStart()+7)%7);const s=new Date(n);return s.setDate(n.getDate()+6),[q(n),q(s)]}if(t==="month"){const[i,n]=e.split("-").map(Number),s=`${i}-${String(n).padStart(2,"0")}-01`,o=new Date(i,n,0).getDate(),r=`${i}-${String(n).padStart(2,"0")}-${String(o).padStart(2,"0")}`;return[s,r]}if(t==="year"){const i=e.slice(0,4);return[`${i}-01-01`,`${i}-12-31`]}const a=Object.keys(l.days).sort();return a.length?[a[0],a[a.length-1]>e?a[a.length-1]:e]:[e,e]},exportRows(t,e){return tt(()=>this._exportRows(t,e))},_exportRows(t,e){return this.rangeKeys(t,e).map(a=>{const i=this.getDay(a),n=this.getHabits(a),s=this.scoreFor(a),o=this.isLocked(a),r=(d,m)=>m>0?"done":o?"missed":"pending",c=d=>d.done?"done":o?"missed":"pending";return{date:a,earned:s.earned,max:s.max,percent:s.percent,habitScore:s.habitScore,consciousScore:s.consciousScore||0,taskScore:s.taskScore,locked:o,missedHabits:s.missedHabits||0,missedTasks:s.missedTasks||0,note:i.note||"",habits:n.map(d=>{const m=this.habitRating(a,d.id);return{name:d.name,description:String(d.description||""),category:K(E(d.category)),tags:D(d.tags),points:d.points,consciousPoints:this.consciousEnabled()?B(d.consciousPoints):0,rating:m,earned:Math.round(d.points*m/5)+(m>0&&this.consciousEnabled()?B(d.consciousPoints):0),status:r(d.id,m)}}),tasks:i.tasks.map(d=>({title:d.title,category:K(E(d.category)),tags:D(d.tags),points:d.points,rating:Math.max(0,Math.min(5,Number(d.rating)||0)),done:!!d.done,earned:d.done?d.points:0,status:d.forwardedFrom?`forwarded from ${d.forwardedFrom}`:c(d),forwardedFrom:d.forwardedFrom||"",forwardedTo:Array.isArray(d.forwardedTo)?d.forwardedTo:[],description:d.description||"",hasImage:!!d.image}))}})},history(t=14){return tt(()=>Object.keys(l.days).sort().reverse().slice(0,t).map(a=>({date:a,...this.scoreFor(a),note:l.days[a].note,locked:ht(a),submittedAt:l.days[a].submittedAt})))},week(t){return tt(()=>{const e=new Date(t);return e.setDate(e.getDate()-(e.getDay()-this.getWeekStart()+7)%7),e.setHours(0,0,0,0),Array.from({length:7},(a,i)=>{const n=new Date(e);n.setDate(e.getDate()+i);const s=q(n),o=l.days[s];return{date:s,label:n.toLocaleDateString(void 0,{weekday:"short"}),dayOfMonth:n.getDate(),hasRecord:!!o,note:String(o&&o.note||""),locked:ht(s),...this.scoreFor(s)}})})}};function ze(t){return t>=90?"Excellent":t>=75?"Great day":t>=50?"Keep going":t>0?"Started":"No score yet"}function z(t){return new Date(`${t}T00:00:00`).toLocaleDateString(void 0,{weekday:"long",month:"short",day:"numeric"})}function Da(t){return t?new Date(t).toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"}):""}function Lt(t){return t>=5?"Excellent":t>=4?"Great":t>=3?"Good":t>=2?"Fair":t>=1?"Low":"Not rated"}const _t=document.getElementById("app"),Ye="daily-report-2026-10-03T10-49-51-mus9sr72",Ca=`v1.1 — Auto-update · Offline · Backup (${Ye.slice(-8)})`;let b=u.todayKey(),M="today",x=null,y=null,it=!1,Nt=!1,ct=null,et=!1,Zt=!1,Kt=null,at="Idle.",W="week",Mt=null,j="month",Ht=null,H=[],Z=0,N=null,L="boot",rt=null;const nt=new Set,lt=new Map;let kt=!1,Pt="all",V="short",ut="1 Week";window.addEventListener("beforeinstallprompt",t=>{t.preventDefault(),ct=t});window.addEventListener("appinstalled",()=>{ct=null,h("Daily Report installed"),v()});const Pa=[["default","Default"],["points","Points"],["category","Category"],["tags","Tags"],["custom","Custom"]];function we(t){const e=new Date(`${b}T00:00:00`);e.setDate(e.getDate()+t),b=u.todayKey(e)}let Gt=u.todayKey();function de(){const t=u.todayKey();if(t===Gt)return!1;const e=Gt;return Gt=t,b===e&&(b=t),Mt=null,Ht=null,H=[],Z=0,!0}function F(t){return{home:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1z"/></svg>',profile:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-6 8-6s8 2 8 6"/></svg>',history:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 8v5l3 2"/><circle cx="12" cy="12" r="9"/></svg>',settings:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H8a1.7 1.7 0 0 0 1-1.5V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V8c.3.7.9 1.2 1.6 1.3H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1.7z"/></svg>',pin:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 4h6l-1 7 3 3v2H7v-2l3-3z" fill="currentColor" stroke="none"/><path d="M12 16v5"/></svg>',forward:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',undo:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9h11a5 5 0 0 1 0 10H8"/><path d="M8 5 4 9l4 4"/></svg>',habit:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7h16M4 12h10M4 17h13"/></svg>'}[t]}function Ve(t,e,a){return`
    <div class="stars" data-habit="${t}">
      ${[1,2,3,4,5].map(i=>`
            <button type="button" class="star ${i<=e?"on":""}" data-action="rate-habit" data-id="${t}" data-rating="${i}" ${a?"disabled":""} aria-label="${i} star">★</button>
          `).join("")}
    </div>
  `}function Je(t,e,a){return`
    <div class="stars stars-small" data-task="${t}">
      ${[1,2,3,4,5].map(i=>`
            <button type="button" class="star small ${i<=e?"on":""}" data-action="rate-task" data-id="${t}" data-rating="${i}" ${a?"disabled":""} aria-label="${i} star">★</button>
          `).join("")}
    </div>
  `}function Qe(t){const e=Number(t)||0;return e?`<span class="conscious-badge">🧠 +${e}</span>`:'<span class="item-meta">No conscious pts</span>'}const Ea=["mentally","psychology","physically","spiritually","socially"];function $t(t){const a=u.getCategories().find(s=>s.id===t),i=a&&a.color?a.color:U(t);return`<span class="cat-badge ${Ea.includes(t)?`cat-${t}`:"cat-custom"}" style="background:${i}22;color:${i};box-shadow:inset 0 0 0 1px ${i}55">${g(K(t))}</span>`}function La(t){const e=String(t||"");if(!e)return"Deleted";const a=new Date(e);return Number.isNaN(a.getTime())?"Deleted":`Deleted ${a.toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})}`}const Se={mentally:"#5b8cff",psychology:"#a06bff",physically:"#22b07d",spiritually:"#e8a51c",socially:"#14b8a6"},xe=["#f472b6","#38bdf8","#fb923c","#a3e635","#facc15","#e879f9"];function U(t,e){const i=u.getCategories().find(n=>n.id===t);return i&&i.color?i.color:Se[t]?Se[t]:xe[(e??0)%xe.length]}function ot(t){const e=Array.isArray(t)?t.filter(Boolean):[];return e.length?`<div class="tag-row">${e.map(a=>`<span class="tag-chip">#${g(a)}</span>`).join("")}</div>`:""}function Xe(t){return!t||!t.image?"":`<button type="button" class="task-img-thumb" data-action="view-task-image" data-id="${t.id}" aria-label="View attached photo"><img src="${t.image}" alt="Task photo" loading="lazy" /></button>`}function Ze(t){const e=String(t||"");if(!e.trim())return"";const a=e.split(`
`),i=/^\s*(?:•|-|[*])\s+(.*)$/,n=/^\s*\d+[.)]\s+(.*)$/;let s="",o=null;const r=()=>{o&&(s+=o==="ul"?"</ul>":"</ol>",o=null)};return a.forEach(c=>{const d=i.exec(c),m=!d&&n.exec(c);d?(o!=="ul"&&(r(),s+='<ul class="note-list">',o="ul"),s+=`<li>${g(d[1])||"&nbsp;"}</li>`):m?(o!=="ol"&&(r(),s+='<ol class="note-list">',o="ol"),s+=`<li>${g(m[1])||"&nbsp;"}</li>`):c.trim()?(r(),s+=`<p class="note-text">${g(c)}</p>`):(r(),s+='<p class="note-text">&nbsp;</p>')}),r(),s}function Na(t){const e=Ze(t);return e?`<div class="note" style="margin-top:10px">${e}</div>`:""}function wt(t){return String(t||"").split(`
`).map(e=>e.replace(/^\s*(?:•|-|\*|\d+[.)])\s*/,"").trim()).filter(Boolean)}function St(t){return t.map(e=>`• ${e}`).join(`
`)}function Ae(t,e){const a=String(t||"").split(`
`).map(i=>i.replace(/^\s*(?:•|-|\*)\s+/,"").trim()).filter(Boolean);return a.length?`<ul class="note-list idea-list">${a.map((i,n)=>`
        <li>
          <span>${g(i)}</span>
          ${e?"":`<button class="idea-remove" data-action="remove-idea" data-index="${n}" title="Remove idea" aria-label="Remove idea">✕</button>`}
        </li>`).join("")}</ul>`:""}function Ke(t,e,a){if(!t||t.disabled)return;const i=t.value||"",n=i.split(`
`),s=i.slice(0,t.selectionStart).split(`
`).length-1,o=i.slice(0,t.selectionEnd).split(`
`).length-1,r=t.selectionStart!==t.selectionEnd,c=r?s:0,d=r?o:n.length-1;if(e==="bullets"){const m=n.slice(c,d+1).every(w=>/^\s*(?:•|-|[*])\s+/.test(w)||!w.trim());for(let w=c;w<=d;w++)n[w].trim()&&(m?n[w]=n[w].replace(/^\s*(?:•|-|[*])\s+/,""):/^\s*(?:•|-|[*])\s+/.test(n[w])||(n[w]=`• ${n[w].replace(/^\s*/,"")}`))}else{const m=n.slice(c,d+1).every(p=>/^\s*\d+[.)]\s+/.test(p)||!p.trim());let w=1;for(let p=c;p<=d;p++){if(!n[p].trim())continue;const k=n[p].replace(/^\s*(?:\d+[.)]|•|-|[*])\s+/,"").replace(/^\s*/,"");n[p]=m?k:`${w}. ${k}`,w+=1}}t.value=n.join(`
`),a&&a(t.value);try{t.focus()}catch{}}function Te(t){Ke(document.getElementById("day-note"),t,e=>u.setNote(b,e))}function De(t){Ke(document.getElementById("profile-values"),t,e=>u.setProfileField("values",e))}function Ma(t){return new Promise(e=>{if(!t||!String(t.type||"").startsWith("image/"))return e(null);const a=URL.createObjectURL(t),i=new Image,n=()=>{try{URL.revokeObjectURL(a)}catch{}},s=(o,r)=>new Promise(c=>{let d=i.naturalWidth||0,m=i.naturalHeight||0;if(!d||!m)return c(null);const w=Math.min(1,o/Math.max(d,m));d=Math.max(1,Math.round(d*w)),m=Math.max(1,Math.round(m*w));const p=document.createElement("canvas");p.width=d,p.height=m;try{p.getContext("2d").drawImage(i,0,0,d,m),c(p.toDataURL("image/jpeg",r))}catch{c(null)}});i.onload=async()=>{try{let o=await s(900,.72);o&&o.length>Ct&&(o=await s(600,.62)),o&&o.length>Ct&&(o=await s(400,.55)),n(),e(o&&o.length<=Ct?o:null)}catch{n(),e(null)}},i.onerror=()=>{n(),e(null)},i.src=a})}function Ce(t,e){return`
    <select class="sort-select" data-sort-kind="${t}" aria-label="Sort ${t}">
      ${Pa.map(([a,i])=>`<option value="${a}" ${e===a?"selected":""}>${i}</option>`).join("")}
    </select>
  `}function Ha(t){const e=u.getBadges(),a=u.topBadges(3),i=t.max>0&&t.percent===100,n=Nt?e:a;return`
    <section class="section rewards-section">
      <div class="section-head">
        <h2>Rewards</h2>
        ${e.length>3?`<button class="ghost-btn compact" data-action="toggle-badges">${Nt?"Show less":`More (${e.length}) ›`}</button>`:""}
      </div>
      ${i?`
        <div class="trophy-card">
          <div class="trophy-cup">🏆</div>
          <div>
            <div class="item-title">Gold Cup — Perfect day!</div>
            <div class="item-meta">100% of points on ${z(b)}</div>
          </div>
        </div>
      `:""}
      ${e.length?`
        <div class="rewards-grid">
          ${n.map(s=>`
            <article class="reward-card tier-${s.tier}">
              <div class="reward-medal">${Wt(s.tier)}</div>
              <div>
                <div class="item-title">${g(s.rewardTitle||s.title)}</div>
                <div class="item-meta">${g(s.title)} · ${_e(s.tier)} · ${z((s.earnedAt||"").slice(0,10))}</div>
              </div>
            </article>
          `).join("")}
        </div>
      `:'<div class="empty">No rewards yet. Set a goal in Settings → Goals &amp; Rewards.</div>'}
    </section>
  `}function It(t){return`<span class="streak-badge">${t} day streak</span>`}function ta(t){return t?`<span class="forward-badge from">↩ Forwarded from ${g(t)}</span>`:""}function Rt(t){const e=Array.isArray(t)?t.filter(Boolean):[];return e.length?`<span class="forward-badge to">↪ Forwarded to ${g(e[e.length-1])}</span>`:""}function Ia(t){const e=new Date(`${t}T00:00:00`);return e.setDate(e.getDate()+1),u.todayKey(e)}function te(){return`<button class="ghost-btn compact ${it?"on":""}" data-action="toggle-edit">${it?"Done":"Edit Mode"}</button>`}function Ra(t){return t?'<span class="lock-badge">Locked</span>':'<span class="open-badge">Open</span>'}function ja(){u.checkGoals(b);const t=u.getDay(b),e=u.getSettings(),a=e.showConscious!==!1,i=u.getHabits(b),n=u.getTasks(b),s=u.scoreFor(b),o=ze(s.percent),r=b===u.todayKey(),c=u.isLocked(b);return`
    <div class="topbar">
      <div>
        <p class="kicker">${r?"Today":"Daily report"}</p>
        <h1>${z(b)}</h1>
      </div>
      <div class="date-nav">
        <button class="icon-btn" data-action="prev-day" aria-label="Previous day">‹</button>
        <button class="icon-btn" data-action="next-day" aria-label="Next day">›</button>
      </div>
    </div>

    <section class="score-hero ${c?"is-locked":""}">
      <div class="score-row">
        <div>
          <div class="score-value">${s.earned}</div>
          <div class="score-unit">of ${s.max||0} points</div>
        </div>
        <div class="hero-side">
          ${Ra(c)}
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
        ${c?`Submitted${t.submittedAt?` at ${Da(t.submittedAt)}`:""}.${(s.missedHabits||0)+(s.missedTasks||0)>0?` ${(s.missedHabits||0)+(s.missedTasks||0)} missed (${s.missedHabits||0} habits, ${s.missedTasks||0} tasks) — unchecked items count as missed.`:" Nothing missed — all done."} Unlock in Settings to edit.`:`Auto-locks at ${e.lockTime}. Submit when the day is done. Unchecked items will count as missed once locked.`}
      </p>
      ${c?'<button class="ghost-btn full" data-action="goto-settings">Unlock in Settings</button>':'<button class="primary-btn full" data-action="submit-day">Submit and lock report</button>'}
      <div class="export-row">
        <span class="muted">Export:</span>
        <button class="ghost-btn compact" data-action="open-export">Excel / JSON / PDF</button>
      </div>
    </section>

    ${Ha(s)}

    <section class="section">
      <div class="section-head">
        <h2>Habits</h2>
        <div class="head-actions">
          ${Ce("habit",e.habitSort||"default")}
          ${te()}
          <span class="points">+${s.habitScore}${a&&s.consciousScore?` +${s.consciousScore}🧠`:""} pts</span>
        </div>
      </div>
      ${["default","custom"].includes(e.habitSort||"default")&&i.length>1?'<p class="muted tight">Hold the ⋮⋮ dots on a card, then drag it to a new spot.</p>':""}
      <div class="list">
        ${i.length?i.map(d=>{const m=u.habitRating(b,d.id),w=m>0,p=!w&&c,k=u.habitStreak(d.id,b),C=a&&Number(d.consciousPoints)||0;return`
                    <article class="item-card ${w?"done":""} ${p?"missed":""} ${c?"is-locked":""}" style="border-left:3px solid ${U(d.category)}" data-sortable="habit" data-id="${d.id}">
                      <button class="check" data-action="toggle-habit" data-id="${d.id}" ${c?"disabled":""}>✓</button>
                      <div class="item-body">
                        <div class="item-title">${g(d.name)} ${p?'<span class="missed-badge">Missed</span>':""}</div>
                        <div class="item-meta">${$t(d.category)} ${d.pin?vt(d.pin):"Not pinned"} · ${m?`${m}/5 ${Lt(m)}`:c?"Missed":"Not rated"}</div>
                        ${d.description?`<p class="item-desc">${g(d.description)}</p>`:""}
                        ${a?`<div class="item-meta">${It(k)} ${Qe(C)}</div>`:`<div class="item-meta">${It(k)}</div>`}
                        ${Rt(u.habitForwardedTo(b,d.id))}
                        ${ot(d.tags)}
                        ${Ve(d.id,m,c)}
                      </div>
                      <div class="item-side">
                        <div class="points">+${d.points}${C?` +${C}🧠`:""}</div>
                        <div class="mini-actions">
                          ${it?`<button class="mini-btn on" data-action="open-edit-habit" data-id="${d.id}" ${c?"disabled":""}>Edit</button>`:""}
                          <button class="mini-btn" data-action="open-forward-habit" data-id="${d.id}" ${c?"disabled":""} title="Forward habit to another day">${F("forward")}</button>
                          <button class="mini-btn ${d.pin?"on":""}" data-action="open-pin-habit" data-id="${d.id}" ${c?"disabled":""} title="Pin habit">${F("pin")}</button>
                        </div>
                      </div>
                      <button class="drag-handle" data-action="drag-handle" aria-label="Hold and drag to reorder" title="Hold and drag to reorder" ${c?"disabled":""}>⋮⋮</button>
                    </article>
                  `}).join(""):'<div class="empty">No habits for this day. Tap + to add one.</div>'}
      </div>
    </section>

    <section class="section">
      <div class="section-head">
        <h2>Tasks</h2>
        <div class="head-actions">
          ${Ce("task",e.taskSort||"default")}
          ${te()}
          <span class="points">+${s.taskScore} pts</span>
        </div>
      </div>
      ${["default","custom"].includes(e.taskSort||"default")&&n.length>1?'<p class="muted tight">Hold the ⋮⋮ dots on a card, then drag it to a new spot.</p>':""}
      <div class="list">
        ${n.length?n.map(d=>{const m=!!d.sourcePinId,w=m?u.findPinnedTask(d.sourcePinId):null,p=Math.max(0,Math.min(5,Number(d.rating)||0)),k=!d.done&&c;return`
                    <article class="item-card ${d.done?"done":""} ${k?"missed":""} ${c?"is-locked":""}" style="border-left:3px solid ${U(d.category)}" data-sortable="task" data-id="${d.id}">
                      <button class="check" data-action="toggle-task" data-id="${d.id}" ${c?"disabled":""}>✓</button>
                      <div class="item-body">
                        <div class="item-title">${g(d.title)} ${k?'<span class="missed-badge">Missed</span>':""}</div>
                        <div class="item-meta">${$t(d.category)} ${w?vt(w.pin):"One-time task"} · ${d.done?"Done":c?"Missed":"Pending"} · ${p?`${p}/5 ${Lt(p)}`:"No rating"}</div>
                        ${d.description?`<p class="item-desc">${g(d.description)}</p>`:""}
                        ${ta(d.forwardedFrom)}
                        ${Rt(d.forwardedTo)}
                        ${ot(d.tags)}
                        ${d.image?'<span class="task-img-badge">📷 Photo attached</span>':""}
                        ${Xe(d)}
                        ${Je(d.id,p,c)}
                      </div>
                      <div class="item-side">
                        <div class="points">+${d.points}</div>
                        <div class="mini-actions">
                          ${it?`<button class="mini-btn on" data-action="open-edit-task" data-id="${d.id}" ${c?"disabled":""}>Edit</button>`:""}
                          <button class="mini-btn" data-action="open-forward-task" data-id="${d.id}" ${c?"disabled":""} title="Forward task to another day">${F("forward")}</button>
                          <button class="mini-btn ${m?"on":""}" data-action="open-pin-task" data-id="${d.id}" ${c?"disabled":""} title="Pin task">${F("pin")}</button>
                          <button class="mini-btn" data-action="remove-task" data-id="${d.id}" ${c?"disabled":""}>✕</button>
                        </div>
                      </div>
                      <button class="drag-handle" data-action="drag-handle" aria-label="Hold and drag to reorder" title="Hold and drag to reorder" ${c?"disabled":""}>⋮⋮</button>
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
      <textarea id="day-note" placeholder="How did today go? Tip: use • Bullets for lists." ${c?"disabled":""}>${g(t.note)}</textarea>
    </section>
  `}function Et(t){return t==="short"?"#short":t==="medium"?"#medium":"#long"}function Fa(){const t=u.getProfile(),e=!!t.locked,a=e?"disabled":"",i=Array.isArray(t.whoAmI)?t.whoAmI:[],n=Array.isArray(t.lifeAreas)?t.lifeAreas:[],s=Array.isArray(t.pGoals)?t.pGoals:[],o=Array.isArray(t.quotes)?t.quotes:[],r=u.profileGoalDurations();r[V].includes(ut)||(ut=r[V][0]);const c=f=>s.filter(T=>T.term===f).length,d=(Pt==="all"?s:s.filter(f=>f.term===Pt)).slice().sort((f,T)=>String(f.createdAt).localeCompare(String(T.createdAt))),m=o.slice().sort((f,T)=>!!f.fav!=!!T.fav?f.fav?-1:1:String(T.createdAt).localeCompare(String(f.createdAt))),w=m.slice(0,3),p=m.slice(3),k=String(t.name||"?").trim().slice(0,1).toUpperCase()||"?",S=String(t.ideas||"").split(`
`).map(f=>f.replace(/^\s*(?:•|-|\*)\s+/,"").trim()).filter(Boolean).length;return`
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
        <div class="profile-avatar">${g(k)}</div>
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
        ${i.length?i.map((f,T)=>`
          <article class="manage-card whoami-row">
            <span class="whoami-num">${T+1}</span>
            <input class="whoami-input" data-whoami="${f.id}" maxlength="120" value="${g(f.text)}" ${a} aria-label="Who I am ${T+1}" />
            ${e?"":`
              <div class="mini-actions">
                <button class="mini-btn" data-action="move-whoami" data-id="${f.id}" data-dir="-1" ${T===0?"disabled":""} title="Move up">↑</button>
                <button class="mini-btn" data-action="move-whoami" data-id="${f.id}" data-dir="1" ${T===i.length-1?"disabled":""} title="Move down">↓</button>
                <button class="mini-btn" data-action="remove-whoami" data-id="${f.id}" title="Remove">✕</button>
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
          ${n.map((f,T)=>{const Dt=rt===f.id;return`
              <article class="life-card ${Dt?"open":""}">
                <div class="life-head">
                  <button type="button" class="life-toggle" data-action="toggle-lifearea" data-id="${f.id}" aria-expanded="${Dt?"true":"false"}">
                    <b>${g(f.title)}</b>
                    <span>${Dt?"▾":"▸"}</span>
                  </button>
                  ${e?"":`
                    <div class="mini-actions">
                      <button class="mini-btn" data-action="move-lifearea" data-id="${f.id}" data-dir="-1" ${T===0?"disabled":""} title="Move up">↑</button>
                      <button class="mini-btn" data-action="move-lifearea" data-id="${f.id}" data-dir="1" ${T===n.length-1?"disabled":""} title="Move down">↓</button>
                    </div>
                  `}
                </div>
                ${Dt?`
                  <div class="life-body">
                    ${e?f.description?`<p class="item-desc">${g(f.description)}</p>`:'<p class="item-meta">No description yet.</p>':`
                      <label>Title
                        <input data-lifearea-title="${f.id}" maxlength="60" value="${g(f.title)}" />
                      </label>
                      <label>Description
                        <textarea data-lifearea-desc="${f.id}" maxlength="1000" placeholder="What does this area mean to you? What is going well?" style="min-height:70px">${g(f.description)}</textarea>
                      </label>
                      <button class="ghost-btn compact danger" data-action="remove-lifearea" data-id="${f.id}">Remove area</button>
                    `}
                  </div>
                `:f.description?`<p class="item-desc life-preview">${g(f.description.slice(0,90))}${f.description.length>90?"…":""}</p>`:""}
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
        ${e?t.values.trim()?`<div class="values-list">${Ze(t.values)}</div>`:'<p class="item-meta">No values yet.</p>':`
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
          <h2>Personal Ideas</h2>
          <p class="muted tight">Write down ideas, one per line — they show as bullet points. Tap a bullet to delete it.</p>
        </div>
        <span class="item-meta">${S}</span>
      </div>
      ${e?S?Ae(t.ideas,!0):'<p class="item-meta">No ideas yet.</p>':`
          <div class="form" style="margin-bottom:10px">
            <label>New idea
              <input id="new-idea" maxlength="200" placeholder="e.g. Build a habit tracker app" />
            </label>
            <div style="display:flex;gap:8px">
              <button class="primary-btn compact-btn" data-action="add-idea">Add idea</button>
            </div>
          </div>
          ${S?`${Ae(t.ideas,!1)}
               <p class="item-meta">Edit the text below — it saves itself.</p>
               <textarea data-profile="ideas" maxlength="4000" placeholder="• Idea one&#10;• Idea two" style="min-height:110px">${g(t.ideas)}</textarea>`:'<p class="item-meta">Empty — add your first idea above.</p>'}
        `}
    </section>

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
              ${["short","medium","long"].map(f=>`<button type="button" class="chip hashtag-${f} ${V===f?"on":""}" data-action="set-pgoal-term" data-term="${f}">${Et(f)}</button>`).join("")}
            </div>
          </div>
          <div class="row-2">
            <label>Timeframe
              <select id="new-pgoal-duration">
                ${r[V].map(f=>`<option value="${g(f)}" ${ut===f?"selected":""}>${g(f)}</option>`).join("")}
              </select>
            </label>
            <label style="justify-content:flex-end">&nbsp;
              <button class="primary-btn compact-btn" data-action="add-pgoal">Add goal</button>
            </label>
          </div>
          <p class="item-meta">${V==="short"?"Short term → pick a week (1–4 weeks).":V==="medium"?"Medium term → pick a month up to 3 months.":"Long term → a year or more."}</p>
        </div>
      `}
      <div class="chip-row" style="margin-bottom:10px">
        ${[["all",`All (${s.length})`],["short",`#short (${c("short")})`],["medium",`#medium (${c("medium")})`],["long",`#long (${c("long")})`]].map(([f,T])=>`<button type="button" class="chip ${Pt===f?"on":""}" data-action="set-pgoal-filter" data-filter="${f}">${T}</button>`).join("")}
      </div>
      <div class="habit-manage">
        ${d.length?d.map(f=>`
          <article class="manage-card pgoal-card term-${f.term}">
            <div class="pgoal-top">
              <span class="hashtag hashtag-${f.term}">${Et(f.term)}</span>
              <span class="duration-pill">⏳ ${g(f.duration)}</span>
              ${e?"":`<button class="mini-btn" data-action="remove-pgoal" data-id="${f.id}" title="Remove goal">✕</button>`}
            </div>
            ${e?`<div class="item-title" style="margin-top:6px">${g(f.text)}</div>`:`
                <input data-pgoal-text="${f.id}" maxlength="200" value="${g(f.text)}" style="margin-top:8px" aria-label="Goal text" />
                <div class="row-2" style="margin-top:8px">
                  <select data-pgoal-term="${f.id}" aria-label="Goal term">
                    ${["short","medium","long"].map(T=>`<option value="${T}" ${f.term===T?"selected":""}>${Et(T)}</option>`).join("")}
                  </select>
                  <select data-pgoal-duration="${f.id}" aria-label="Goal duration">
                    ${r[f.term].map(T=>`<option value="${g(T)}" ${f.duration===T?"selected":""}>${g(T)}</option>`).join("")}
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
        <span class="item-meta">★ ${o.filter(f=>f.fav).length} · ${o.length} total</span>
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
          ${w.map(f=>Pe(f,e)).join("")}
        </div>
        ${p.length?`
          <button class="ghost-btn compact full" data-action="toggle-quotes">${kt?"Show less ▴":`More (${p.length}) — see the rest ▾`}</button>
          ${kt?`<div class="habit-manage" style="margin-top:8px">${p.map(f=>Pe(f,e)).join("")}</div>`:""}
        `:kt&&!p.length?'<p class="item-meta">No more quotes — that is all of them.</p>':""}
      `:'<div class="empty">No quotes yet — add the words that move you.</div>'}
    </section>
  `}function Pe(t,e){return`
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
  `}function Oa(){document.querySelectorAll("[data-profile]").forEach(t=>{t.addEventListener("input",()=>{u.setProfileField(t.dataset.profile,t.value)||v()})}),document.querySelectorAll("[data-lifearea-title]").forEach(t=>{t.addEventListener("change",()=>{u.updateLifeArea(t.dataset.lifeareaTitle,{title:t.value}),v()})}),document.querySelectorAll("[data-lifearea-desc]").forEach(t=>{t.addEventListener("input",()=>{u.updateLifeArea(t.dataset.lifeareaDesc,{description:t.value})})}),document.querySelectorAll("[data-pgoal-text]").forEach(t=>{t.addEventListener("change",()=>{u.updateProfileGoal(t.dataset.pgoalText,{text:t.value}),v()})}),document.querySelectorAll("[data-pgoal-term]").forEach(t=>{t.addEventListener("change",()=>{u.updateProfileGoal(t.dataset.pgoalTerm,{term:t.value}),v()})}),document.querySelectorAll("[data-pgoal-duration]").forEach(t=>{t.addEventListener("change",()=>{u.updateProfileGoal(t.dataset.pgoalDuration,{duration:t.value}),v()})})}function Ba(){const t=u.week(new Date(`${b}T00:00:00`)),e=t.reduce((i,n)=>i+n.earned,0),a=Math.round(e/7);return`
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
                <button class="day-cell ${i.date===b?"active":""} ${i.earned>0?"done":""}" data-action="pick-date" data-date="${i.date}">
                  <span>${i.label.slice(0,2)}</span>
                  <b>${i.earned}</b>
                  ${i.locked?'<i class="dot-lock"></i>':""}
                </button>
              `).join("")}
        </div>
      </section>
    </section>
  `}function _a(){const t=Mt||I(b),e=ue(t),a=u.todayKey();return`
    <section class="section">
      <div class="section-head">
        <h2>Reports calendar</h2>
        <div class="date-nav">
          <button class="icon-btn" data-action="history-cal-nav" data-dir="-1" aria-label="Previous month">‹</button>
          <button class="icon-btn" data-action="history-cal-nav" data-dir="1" aria-label="Next month">›</button>
        </div>
      </div>
      <div class="pin-cal">
        <div class="pin-cal-head"><b>${Ft(t)}</b></div>
        <div class="pin-cal-grid pin-cal-week">
          ${le().map(i=>`<span>${i.label.slice(0,1)}</span>`).join("")}
        </div>
        <div class="pin-cal-grid">
          ${e.map(i=>{if(!i)return"<span></span>";const n=u.scoreFor(i),s=i===b?"on-selected":n.percent>=100?"on-perfect":n.earned>0?"on":"",o=n.locked?'<i class="dot-lock"></i>':"";return`<button type="button" class="pin-cal-day hist-cal-day ${s} ${i===a?"is-today":""}" data-action="pick-date" data-date="${i}" title="${g(i)}: ${n.earned}/${n.max} pts (${n.percent}%)"><b>${Number(i.slice(8,10))}</b><span>${n.earned}</span>${o}</button>`}).join("")}
        </div>
      </div>
    </section>
  `}function Ga(t){const e=new Map((t||[]).map(s=>[s.date,s])),a=Ht||I(b),i=ue(a),n=u.todayKey();return`
    <div class="pin-cal">
      <div class="pin-cal-head"><b>${Ft(a)}</b><span class="item-meta">${e.size} locked</span></div>
      <div class="pin-cal-grid pin-cal-week">
        ${le().map(s=>`<span>${s.label.slice(0,1)}</span>`).join("")}
      </div>
      <div class="pin-cal-grid">
        ${i.map(s=>{if(!s)return"<span></span>";const o=e.get(s),r=!!o,c=H.includes(s)?"on-selected":r?"on-locked":"on-open",d=u.scoreFor(s),m=o?o.earned:d.earned;return`<button type="button" class="pin-cal-day hist-cal-day ${c} ${s===n?"is-today":""}" data-action="toggle-locked-day" data-date="${s}" title="${g(s)}: ${r?"Locked":"Open"} — ${m} pts"><b>${Number(s.slice(8,10))}</b><span>${m}</span></button>`}).join("")}
      </div>
    </div>
  `}function qa(){return`
    <section class="manage-card export-card">
      <div class="section-head">
        <div>
          <div class="item-title">Select &amp; export</div>
          <div class="item-meta">Pick a day, week, month or year, then a format.</div>
        </div>
      </div>
      <div class="chip-row" style="margin-bottom:10px">
        ${["day","week","month","year"].map(t=>`<button type="button" class="chip ${j===t?"on":""}" data-action="set-histexp-range" data-range="${t}">${t[0].toUpperCase()}${t.slice(1)}</button>`).join("")}
      </div>
      ${j==="day"||j==="week"?`
        <label>Which ${j==="day"?"day":"week (pick any day in it)"}
          <input id="histexp-date" type="date" value="${b}" />
        </label>
      `:""}
      ${j==="month"?`
        <label>Which month
          <input id="histexp-month" type="month" value="${b.slice(0,7)}" />
        </label>
      `:""}
      ${j==="year"?`
        <label>Which year
          <input id="histexp-year" type="number" min="2000" max="2100" value="${b.slice(0,4)}" />
        </label>
      `:""}
      <div class="export-grid" style="margin-top:10px">
        <button class="choose-card" data-action="histexp-do" data-format="csv"><b>Excel (CSV)</b><span>Opens in Excel / Sheets</span></button>
        <button class="choose-card" data-action="histexp-do" data-format="json"><b>JSON</b><span>Raw data backup</span></button>
        <button class="choose-card" data-action="histexp-do" data-format="pdf"><b>PDF</b><span>Print / save as PDF</span></button>
      </div>
    </section>
  `}function Wa(){const t=u.week(new Date(`${b}T00:00:00`)),e=u.todayKey(),a=`${z(t[0].date)} – ${z(t[6].date)}`,i=t.reduce((o,r)=>o+(r.earned||0),0),n=t.reduce((o,r)=>o+(r.max||0),0),s=t.filter(o=>o.hasRecord).length;return`
    <div class="topbar">
      <div>
        <p class="kicker">Archive</p>
        <h1>Past reports</h1>
      </div>
      <button class="ghost-btn compact" data-action="open-export">Export</button>
    </div>
    ${_a()}
    ${Ba()}
    ${qa()}
    <section class="section">
      <div class="section-head">
        <h2>Week</h2>
        <span class="item-meta">${a}</span>
      </div>
      <p class="item-meta">${s} of 7 days reported · ${i} of ${n} pts</p>
      <div class="history-list">
        ${t.map(o=>{const r=!o.hasRecord,c=(o.missedHabits||0)+(o.missedTasks||0),d=r?"No report":`${o.locked?"Locked":"Open"} · ${ze(o.percent)} · ${o.earned}/${o.max} pts (${o.percent}%)${o.locked&&c>0?` · ❌ ${c} missed`:""}`;return`
              <article class="history-card ${r?"is-empty":""} ${o.date===e?"is-today":""} ${o.date===b?"is-selected":""}">
                <div class="section-head">
                  <div>
                    <div class="item-title">${g(o.label)} ${z(o.date)}</div>
                    <div class="item-meta">${g(d)}</div>
                  </div>
                  <button class="ghost-btn compact" data-action="pick-date" data-date="${o.date}">${r?"Add":"Open"}</button>
                </div>
                <div class="bar"><span style="width:${o.percent}%"></span></div>
                ${o.note?Na(o.note):`<p class="item-meta">${r?"Nothing recorded this day.":"No note."}</p>`}
              </article>
            `}).join("")}
      </div>
    </section>
  `}function Ua(t,e){const a=new Date(`${t}T00:00:00`);return a.setDate(a.getDate()+e),u.todayKey(a)}function za(){return W==="month"?`${bt(I(b),Z)}-15`:W==="year"?`${Number(b.slice(0,4))+Z}-06-15`:Ua(b,Z*7)}function Ya(t){const[e,a]=u.resolveRange(W,t);return W==="week"?`${z(e)} – ${z(a)}`:W==="month"?Ft(e.slice(0,7)):e.slice(0,4)}function Va(){const t=za(),e=u.categoryChart(W,t),a=Z===0?W==="week"?"This week":W==="month"?"This month":"This year":Ya(t),i=e.labels.map((s,o)=>{const r=e.cats.reduce((d,m)=>d+(e.perCat[m.id]?e.perCat[m.id][o]:0),0),c=e.cats.map((d,m)=>({cat:d,value:e.perCat[d.id]?e.perCat[d.id][o]:0,ci:m})).filter(d=>d.value>0).map(d=>`<span class="chart-seg" style="height:${Math.max(2,Math.round(d.value/e.max*100))}%;background:${U(d.cat.id,d.ci)}" title="${g(d.cat.label)}: ${d.value} pts"></span>`).join("");return`
      <div class="chart-col" title="${g(e.titles[o])}: ${r} pts">
        <div class="chart-bar">${c||'<span class="chart-empty"></span>'}</div>
        <span class="chart-x">${g(s)}</span>
      </div>
    `}).join(""),n=e.cats.map((s,o)=>`
      <span class="chart-legend-item"><i style="background:${U(s.id,o)}"></i>${g(s.label)} <b>${e.totals[s.id]||0}</b></span>
    `).join("");return`
    <section class="score-hero">
      <div class="section-head" style="margin-bottom:4px">
        <div>
          <div class="item-title">Progress chart</div>
          <div class="item-meta">${a} · ${e.grandTotal} pts total</div>
        </div>
      </div>
      <div class="chart-nav-row">
        <button type="button" class="mini-btn" data-action="chart-nav" data-dir="-1" aria-label="Previous ${W}">‹</button>
        <div class="chip-row">
          ${["week","month","year"].map(s=>`<button type="button" class="chip ${W===s?"on":""}" data-action="set-chart-range" data-range="${s}">${s[0].toUpperCase()}${s.slice(1)}</button>`).join("")}
        </div>
        <button type="button" class="mini-btn" data-action="chart-nav" data-dir="1" aria-label="Next ${W}">›</button>
      </div>
      <div class="chart-wrap${e.labels.length>12?" scroll-x":""}">${i}</div>
      <div class="chart-legend">${n}</div>
    </section>
  `}function Ja(){u.getDay(b);const t=u.isLocked(b),e=u.consciousEnabled(),a=u.categoryBreakdown(b),i=a.reduce((s,o)=>s+o.earned,0),n=a.reduce((s,o)=>s+o.max,0);return`
    <div class="topbar">
      <div>
        <p class="kicker">Activities</p>
        <h1>By category</h1>
      </div>
      <div class="date-nav">
        ${te()}
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
        <div class="grade-pill">${z(b)}</div>
      </div>
      <p class="lock-hint">Habits and tasks grouped by category.</p>
    </section>
    ${Va()}
    ${a.map(s=>{const o=s.max?Math.round(s.earned/s.max*100):0,r=U(s.id);return`
          <section class="section">
            <article class="manage-card cat-card cat-${s.id}" style="border-left:4px solid ${r};background:linear-gradient(180deg, ${r}2e, ${r}14 55%, var(--card) 100%)">
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
                    ${s.habits.map(c=>{const d=u.habitRating(b,c.id),m=!d&&t,w=u.habitStreak(c.id,b),p=e&&Number(c.consciousPoints)||0,k=d>0?p:0,C=Math.round(c.points*d/5)+k,S=c.points+p;return`
                           <article class="item-card ${d?"done":""} ${m?"missed":""} ${t?"is-locked":""}" style="border-left:3px solid ${U(c.category)}">
                             <button class="check" data-action="toggle-habit" data-id="${c.id}" ${t?"disabled":""}>✓</button>
                             <div class="item-body">
                               <div class="item-title">${g(c.name)} ${m?'<span class="missed-badge">Missed</span>':""}</div>
                               <div class="item-meta">Habit · ${d?`${d}/5 ${Lt(d)}`:t?"Missed":"Not rated"} · ${It(w)}${e?` ${Qe(p)}`:""}</div>
                              ${c.description?`<p class="item-desc">${g(c.description)}</p>`:""}
                              ${Rt(u.habitForwardedTo(b,c.id))}
                              ${ot(c.tags)}
                              ${Ve(c.id,d,t)}
                            </div>
                            <div class="item-side">
                              <div class="points">${C}/${S}</div>
                              <div class="mini-actions">
                                ${it?`<button class="mini-btn on" data-action="open-edit-habit" data-id="${c.id}" ${t?"disabled":""}>Edit</button>`:""}
                                <button class="mini-btn" data-action="open-forward-habit" data-id="${c.id}" ${t?"disabled":""} title="Forward habit to another day">${F("forward")}</button>
                              </div>
                            </div>
                          </article>
                        `}).join("")}
                    ${s.tasks.map(c=>{const d=Math.max(0,Math.min(5,Number(c.rating)||0)),m=!c.done&&t;return`
                           <article class="item-card ${c.done?"done":""} ${m?"missed":""} ${t?"is-locked":""}" style="border-left:3px solid ${U(c.category)}">
                             <button class="check" data-action="toggle-task" data-id="${c.id}" ${t?"disabled":""}>✓</button>
                             <div class="item-body">
                               <div class="item-title">${g(c.title)} ${m?'<span class="missed-badge">Missed</span>':""}</div>
                               <div class="item-meta">Task · ${c.done?"Done":t?"Missed":"Pending"} · ${d?`${d}/5 ${Lt(d)}`:"No rating"}${c.description?` · ${g(c.description)}`:""}</div>
                              ${ta(c.forwardedFrom)}
                              ${Rt(c.forwardedTo)}
                              ${ot(c.tags)}
                              ${c.image?'<span class="task-img-badge">📷 Photo attached</span>':""}
                              ${Xe(c)}
                              ${Je(c.id,d,t)}
                            </div>
                            <div class="item-side">
                              <div class="points">+${c.points}</div>
                              <div class="mini-actions">
                                ${it?`<button class="mini-btn on" data-action="open-edit-task" data-id="${c.id}" ${t?"disabled":""}>Edit</button>`:""}
                                <button class="mini-btn" data-action="open-forward-task" data-id="${c.id}" ${t?"disabled":""} title="Forward task to another day">${F("forward")}</button>
                              </div>
                            </div>
                          </article>
                        `}).join("")}
                  `:'<div class="empty">No activities in this category.</div>'}
            </div>
          </section>
        `}).join("")}
  `}function jt(t){return`${t||"daily-report-backup"}-${u.todayKey()}.json`}function Qa(){const t=u.getInstalledAt(),e=String(t).slice(0,10),a=new Date(`${e}T00:00:00`),i=new Date(`${u.todayKey()}T00:00:00`),n=Number.isNaN(a.getTime())?1:Math.max(1,Math.round((i-a)/864e5)+1),s=String(Number(e.slice(8,10))).padStart(2,"0"),o=e.slice(5,7),r=e.slice(2,4),c=/^\d{4}-\d{2}-\d{2}$/.test(e)?`${s}/${o}/${r}`:e,d=Math.floor((n-1)/365)+1;return`Using Daily Report since ${c} · day ${n} · year ${d}`}function ea(){return typeof window.showDirectoryPicker=="function"}function ce(){return new Promise((t,e)=>{const a=indexedDB.open("daily-report-pwa",1);a.onupgradeneeded=()=>a.result.createObjectStore("kv"),a.onsuccess=()=>t(a.result),a.onerror=()=>e(a.error)})}function Xa(t){return ce().then(e=>new Promise((a,i)=>{const n=e.transaction("kv","readonly").objectStore("kv").get(t);n.onsuccess=()=>a(n.result),n.onerror=()=>i(n.error)}))}function Za(t,e){return ce().then(a=>new Promise((i,n)=>{const s=a.transaction("kv","readwrite");s.objectStore("kv").put(e,t),s.oncomplete=()=>i(),s.onerror=()=>n(s.error)}))}function Ka(t){return ce().then(e=>new Promise((a,i)=>{const n=e.transaction("kv","readwrite");n.objectStore("kv").delete(t),n.oncomplete=()=>a(),n.onerror=()=>i(n.error)}))}function ti(){return!ea()||typeof indexedDB>"u"?(L="unsupported",Promise.resolve()):Xa("backupDir").then(t=>{if(N=t||null,!N){L="unset";return}return N.queryPermission({mode:"readwrite"}).then(e=>{L=e==="granted"?"granted":"prompt"}).catch(()=>{L="prompt"})}).catch(()=>{N=null,L="unset"})}function ei(){return L==="unsupported"?"Folder picking needs Chrome/Edge on desktop — on phones backups download instead.":L==="unset"?"No folder chosen yet.":L==="prompt"?"Tap Choose folder to allow access again.":L==="denied"?"Access was denied — choose the folder again.":L==="granted"&&N?`Folder: ${N.name}`:"Checking…"}async function ai(){if(!ea()){h("Folder access needs Chrome or Edge");return}try{const t=await window.showDirectoryPicker({id:"daily-report-backup",mode:"readwrite"});await Za("backupDir",t),N=t,L="granted",h("Backup folder set")}catch(t){t&&t.name==="AbortError"||h("Couldn't open that folder")}v()}async function ii(){try{await Ka("backupDir")}catch{h("Couldn't remove folder");return}N=null,L="unset",h("Backup folder removed"),v()}async function si(){if(N){try{const t=await N.requestPermission({mode:"readwrite"});L=t==="granted"?"granted":"denied",h(t==="granted"?"Folder access granted":"Access denied")}catch{L="denied"}v()}}async function ni(){const t=u.exportBackup(),e=jt();if(L==="granted"&&N)try{const i=await(await N.getFileHandle(e,{create:!0})).createWritable();await i.write(t),await i.close(),h("Backup saved to your folder"),aa();return}catch{}pt(e,t,"application/json"),h("Backup downloaded")}async function oi(){if(L!=="granted"||!N)return[];const t=[];try{for await(const e of N.values())if(e&&e.kind==="file"&&/\.json$/i.test(e.name))try{const a=await e.getFile();t.push({name:e.name,modified:a.lastModified})}catch{}}catch{return t}return t.sort((e,a)=>a.modified-e.modified),t}async function aa(){const t=document.getElementById("folder-backup-list");if(!t)return;if(L!=="granted"||!N){t.innerHTML='<button class="ghost-btn compact" data-action="trigger-import">Import from a file instead</button>';return}t.innerHTML='<p class="item-meta">Loading backups…</p>';const e=await oi();if(!document.getElementById("folder-backup-list"))return;e.length?t.innerHTML=e.map(i=>`
            <div style="display:flex;gap:8px;align-items:center;margin-bottom:6px">
              <span class="item-meta" style="flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${g(i.name)}</span>
              <button class="ghost-btn compact" data-action="restore-backup" data-name="${g(i.name)}">Restore</button>
            </div>
          `).join(""):t.innerHTML='<p class="item-meta">Folder is empty — press Export backup now to create the first backup.</p>';const a=document.createElement("div");a.innerHTML='<button class="ghost-btn compact" data-action="trigger-import">Import from a file instead</button>',t.appendChild(a)}async function ri(t){if(N)try{const a=await(await N.getFileHandle(t)).getFile();ia(await a.text(),t)}catch{h("Couldn't read that backup")}}function ia(t,e){let a;try{a=JSON.parse(t)}catch{h("That file isn't valid JSON.");return}const i=u.backupKind(a);if(i==="ok"){if(!window.confirm(`Replace ALL app data with "${e}"?`))return;pt(jt("daily-report-pre-import"),u.exportBackup(),"application/json"),u.importBackup(a),h("Backup imported"),v();return}if(i==="report-export"){const n=u.previewReport(a);if(!n.days){h("That report file has no day rows to import.");return}if(!window.confirm(`Import ${n.days} day(s) (${n.start} → ${n.end}) from "${e}" as locked history?

${n.newHabits} new habit(s) will be added to your list.
Days already in the app on those dates will be overwritten.`))return;pt(jt("daily-report-pre-import"),u.exportBackup(),"application/json");const o=u.importReport(a);if(!o){h("That file doesn't look like a valid Daily Report backup.");return}h(`Imported ${o.days} day(s)${o.habits?` + ${o.habits} new habit(s)`:""}`),v();return}if(i==="wrong-app"){h("That backup belongs to another app (e.g. Iron Log) — it can’t be imported into Daily Report.");return}h("That file doesn't look like a valid Daily Report backup.")}async function di(){if(!ct){h("Use the browser menu: Install / Add to Home Screen");return}try{ct.prompt();const t=await ct.userChoice;t&&t.outcome==="accepted"&&h("Installing Daily Report…")}catch{}ct=null,v()}async function ci(){const t=`./version.json?v=${Date.now()}`,e=await fetch(t,{cache:"no-store"});if(!e.ok)throw new Error(`http ${e.status}`);const a=await e.json(),i=a&&(a.version||a.v)||null;if(!i)throw new Error("no version field");return String(i)}async function li(){et=!0,Zt=!1,at="Checking for updates… (needs internet)",v();try{if("serviceWorker"in navigator&&navigator.serviceWorker.getRegistration){const e=await navigator.serviceWorker.getRegistration().catch(()=>null);e&&e.update&&e.update().catch(()=>{})}}catch{}if(typeof fetch>"u"){et=!1,at="This browser can’t check — but the app itself works offline. Use Export backup to protect your data.",v();return}const t=setTimeout(()=>{et&&(et=!1,at="Couldn't reach the server — offline? The app itself works offline; updating needs internet.",v())},15e3);try{const e=await ci();if(clearTimeout(t),et=!1,Kt=e,e&&e!==Ye){Zt=!0,at="Update found — updating automatically…",v(),await sa(!0);return}at="You're on the latest version. The app works offline."}catch{clearTimeout(t),et=!1,at="Couldn't reach the server — offline, or this file wasn't opened from the installed/hosted app. The app itself works offline; updating needs internet."}v()}function Ee(t){return new Promise(e=>{if(!("serviceWorker"in navigator))return e();const a=()=>e(),i=setTimeout(()=>{try{navigator.serviceWorker.removeEventListener("controllerchange",a)}catch{}e()},t||4e3),n=()=>{clearTimeout(i);try{navigator.serviceWorker.removeEventListener("controllerchange",n)}catch{}e()};try{navigator.serviceWorker.addEventListener("controllerchange",n)}catch{e()}})}async function sa(t){var a;try{pt(jt("daily-report-pre-update"),u.exportBackup(),"application/json")}catch{}h("Backup saved — updating app…"),at=`Backup saved — updating${Kt?` to ${String(Kt).slice(-8)}`:""}…`,v();const e=()=>{const i=window.location.href.includes("?")?"&":"?";try{window.location.replace(`${window.location.href.split("#")[0]}${i}v=${Date.now()}#updated`)}catch{window.location.reload()}setTimeout(()=>{try{window.location.reload()}catch{}},2500)};try{if("serviceWorker"in navigator&&navigator.serviceWorker.getRegistration){const i=await navigator.serviceWorker.getRegistration().catch(()=>null);if(i){const n=i.waiting;if(n){try{n.postMessage("SKIP_WAITING")}catch{try{i.waiting.postMessage({type:"SKIP_WAITING"})}catch{}}await Ee(4e3),e();return}try{await i.update()}catch{}const s=await navigator.serviceWorker.getRegistration().catch(()=>i),o=(s||i).waiting||(s||i).installing;if(o){try{o.postMessage("SKIP_WAITING")}catch{}try{(a=(s||i).waiting)==null||a.postMessage("SKIP_WAITING")}catch{}await Ee(5e3),e();return}try{const r=navigator.serviceWorker.controller;r&&r.postMessage({type:"CLEAR_APP_CACHES"})}catch{}try{if(typeof caches<"u"){const r=await caches.keys().catch(()=>[]);await Promise.all(r.filter(c=>c.startsWith("daily-report-")).map(c=>caches.delete(c).catch(()=>!1)))}}catch{}try{await fetch(`./index.html?v=${Date.now()}`,{cache:"reload"})}catch{}try{await fetch(`./version.json?v=${Date.now()}`,{cache:"reload"})}catch{}try{await(s||i).unregister()}catch{}e();return}}}catch{}try{await fetch(`./index.html?v=${Date.now()}`,{cache:"reload"})}catch{}setTimeout(e,600)}function ui(){const t=u.getSettings(),e=u.getAllHabits(),a=u.getArchivedHabits(),i=u.getPinnedTasks(),n=u.lockedReports();return`
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
      <p class="item-meta">Version: ${g(Ca)}</p>
      <p class="item-meta">📅 ${g(Qa())}</p>
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:8px">
        <button class="primary-btn" data-action="check-updates" ${et?"disabled":""}>${et?"Checking…":"Check for updates"}</button>
        ${Zt?'<button class="primary-btn" data-action="apply-update">Restart with update</button>':""}
      </div>
      <p class="item-meta">${g(at)}</p>
    </section>

    <section class="manage-card">
      <h2>Data backup</h2>
      <p class="muted tight">Pick a backup folder once (Chrome/Edge on desktop) and exports save straight into it. On phones, backups download to your Downloads folder instead. Import accepts full backups (<b>daily-report-backup-*.json</b>) or month/week report exports, which are added as locked history.</p>
      <p class="item-meta">${g(ei())}</p>
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:8px">
        ${L==="prompt"?'<button class="primary-btn" data-action="grant-folder">Allow access</button>':'<button class="ghost-btn compact" data-action="choose-folder">Choose folder</button>'}
        ${N?'<button class="ghost-btn compact" data-action="forget-folder">Remove</button>':""}
        <button class="primary-btn" data-action="backup-now">Export backup now</button>
        <button class="ghost-btn compact" data-action="trigger-import">Import backup</button>
      </div>
      <input type="file" id="backup-file" accept="application/json,.json" hidden />
      <div id="folder-backup-list" style="margin-top:10px"></div>
    </section>

    <section class="manage-card">
      <h2>Categories</h2>
      <p class="muted tight">Add your own categories — they appear in forms, Activities and exports. Tap a category to open it, set its colour, then type its goals as bullet points and press Save.</p>
      <div class="cat-expand-row">
        <button class="mini-btn" data-action="expand-cats">Expand all</button>
        <button class="mini-btn" data-action="collapse-cats">Collapse all</button>
      </div>
      <div class="habit-manage">
        ${u.getCategories().map(s=>{const o=u.getCustomCategories().some(k=>k.id===s.id),r=s.color||U(s.id),c=s.goals||"",d=wt(c),m=lt.has(s.id)?lt.get(s.id):c,w=St(wt(m))!==St(d),p=nt.has(s.id);return`
              <article class="manage-card cat-manage-card ${p?"open":""}">
                <div class="cat-manage-head">
                  <button type="button" class="cat-manage-toggle" data-action="toggle-cat" data-id="${s.id}" aria-expanded="${p?"true":"false"}" aria-controls="cat-editor-${s.id}">
                    <span class="cat-chevron" aria-hidden="true">${p?"▾":"▸"}</span>
                    <i class="cat-swatch" style="background:${g(r)}"></i>
                    <span class="cat-manage-name">${g(K(s.id))}</span>
                    ${d.length?`<span class="cat-goal-flag">${d.length} goal${d.length===1?"":"s"}</span>`:""}
                  </button>
                  <div class="mini-actions">
                    ${o?`<button class="mini-btn on" data-action="rename-category" data-id="${s.id}">Rename</button>`:""}
                    ${o?`<button class="mini-btn" data-action="delete-category" data-id="${s.id}">✕</button>`:""}
                  </div>
                </div>
                ${p?`
                      <div class="cat-manage-body" id="cat-editor-${s.id}">
                        <div class="cat-manage-row">
                          <label>Colour
                            <input type="color" data-cat-color="${s.id}" value="${g(r)}" aria-label="Colour for ${g(s.label||K(s.id))}" />
                          </label>
                          <div class="cat-goals-wrap">
                            <label>Goals — one per line
                              <textarea data-cat-goals="${s.id}" maxlength="1000" placeholder="• Goal one&#10;• Goal two&#10;• Goal three" style="min-height:90px">${g(m)}</textarea>
                            </label>
                            <div class="cat-save-row">
                              <button class="primary-btn compact-btn" data-action="save-cat-goals" data-id="${s.id}">${w?"Save goals":"Saved"}</button>
                              <button class="ghost-btn compact" data-action="reset-cat-goals" data-id="${s.id}" ${w?"":"hidden"}>Discard</button>
                            </div>
                            <p class="item-meta cat-goal-hint">${w?"Unsaved changes — press Save to keep them offline and in backups.":"Saved on this device and included in every backup."}</p>
                          </div>
                        </div>
                      </div>
                    `:d.length?`<ul class="note-list cat-goal-preview">${d.map(k=>`<li>${g(k)}</li>`).join("")}</ul>`:'<p class="item-meta">No goals yet — open this category to add some.</p>'}
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
        ${u.getGoals().length?u.getGoals().map(s=>{var d,m;const o=u.goalProgress(s,b),r=u.getBadges().some(w=>w.goalId===s.id),c=s.kind==="habit-streak"?((d=u.findHabit(s.targetId))==null?void 0:d.name)||"Deleted habit":s.kind==="task-streak"?((m=u.findPinnedTask(s.targetId))==null?void 0:m.title)||"Deleted task":"Any day at 100%";return`
                    <article class="manage-card goal-card ${r?"goal-earned":""}">
                      <div class="section-head">
                        <div>
                          <div class="item-title">${Wt(s.tier)} ${g(s.title)}</div>
                          <div class="item-meta">${_e(s.tier)} · “${g(s.rewardTitle)}” · ${g(c)}</div>
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
                  <div class="reward-medal">${Wt(s.tier)}</div>
                  <div>
                    <div class="item-title">${g(s.rewardTitle||s.title)}</div>
                    <div class="item-meta">${g(s.title)} · ${z((s.earnedAt||"").slice(0,10))}</div>
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
      ${Ga(n)}
      ${H.length?`
        <div class="chip-row" style="margin-top:10px">
          ${[...H].sort().map(s=>`<button type="button" class="chip on" data-action="toggle-locked-day" data-date="${s}" title="Tap to remove">${s} ✕</button>`).join("")}
        </div>
        <div style="display:flex;gap:8px;margin-top:10px">
          <button class="primary-btn" style="flex:1" data-action="lock-selected">🔒 Lock ${H.length} day${H.length===1?"":"s"}</button>
          <button class="ghost-btn" style="flex:1" data-action="unlock-selected">🔓 Unlock ${H.length} day${H.length===1?"":"s"}</button>
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
                    <article class="manage-card" style="${s.pin?`border-left:4px solid ${U(s.category)}`:""}">
                      <div class="section-head">
                        <div>
                          <div class="item-title">${g(s.name)}</div>
                          <div class="item-meta">${$t(s.category)} · ${s.pin?vt(s.pin):"Not pinned"} · +${s.points} pts ${t.showConscious!==!1?Number(s.consciousPoints)?`· 🧠 +${s.consciousPoints}`:"· No conscious pts":""} · ${It(u.habitStreak(s.id,b))}</div>
                          ${s.description?`<p class="item-desc">${g(s.description)}</p>`:""}
                          ${ot(s.tags)}
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
                    <article class="manage-card archived" style="border-left:4px solid ${U(s.category)}">
                      <div class="section-head">
                        <div>
                          <div class="item-title">${g(s.name)}</div>
                          <div class="item-meta">${$t(s.category)} · +${s.points} pts${s.pin?` · ${vt(s.pin)}`:" · Pin ended"} · ${La(s.archivedAt)}</div>
                          ${s.description?`<p class="item-desc">${g(s.description)}</p>`:""}
                          ${ot(s.tags)}
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
                    <article class="manage-card" style="border-left:4px solid ${U(s.category)}">
                      <div class="section-head">
                        <div>
                          <div class="item-title">${g(s.title)}</div>
                          <div class="item-meta">${$t(s.category)} · ${vt(s.pin)} · +${s.points} pts</div>
                          ${s.description?`<p class="item-desc">${g(s.description)}</p>`:""}
                          ${ot(s.tags)}
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
  `}function I(t){if(/^\d{4}-\d{2}$/.test(String(t||"")))return String(t);if(/^\d{4}-\d{2}-\d{2}$/.test(String(t||"")))return String(t).slice(0,7);const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}`}function bt(t,e){const[a,i]=String(t).split("-").map(Number),n=new Date(a,(i||1)-1+e,1);return`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}`}function Ft(t){const[e,a]=String(t).split("-").map(Number);return new Date(e,(a||1)-1,1).toLocaleDateString(void 0,{month:"long",year:"numeric"})}function le(){const t=u.getWeekStart(),e=dt.findIndex(a=>a.value===t);return e<=0?dt:[...dt.slice(e),...dt.slice(0,e)]}function ue(t){const[e,a]=String(t).split("-").map(Number),n=(new Date(e,a-1,1).getDay()-u.getWeekStart()+7)%7,s=new Date(e,a,0).getDate(),o=[];for(let r=0;r<n;r++)o.push(null);for(let r=1;r<=s;r++)o.push(`${e}-${String(a).padStart(2,"0")}-${String(r).padStart(2,"0")}`);return o}function Le(t,e,a){const i=new Set(a||[]),n=ue(e);return`
    <div class="pin-cal" data-cal="${t}">
      <div class="pin-cal-head">
        <button type="button" class="mini-btn" data-action="pin-cal-nav" data-target="${t}" data-dir="-1" aria-label="Previous month">‹</button>
        <b>${Ft(e)}</b>
        <button type="button" class="mini-btn" data-action="pin-cal-nav" data-target="${t}" data-dir="1" aria-label="Next month">›</button>
      </div>
      <div class="pin-cal-grid pin-cal-week">
        ${le().map(s=>`<span>${s.label.slice(0,1)}</span>`).join("")}
      </div>
      <div class="pin-cal-grid">
        ${n.map(s=>s?`<button type="button" class="pin-cal-day ${i.has(s)?"on":""}" data-action="toggle-pin-date" data-target="${t}" data-date="${s}">${Number(s.slice(8,10))}</button>`:"<span></span>").join("")}
      </div>
    </div>
  `}function pi(t,e){const a=(t==null?void 0:t.mode)||"forever",i=(t==null?void 0:t.until)||"",n=((t==null?void 0:t.weekdays)||[]).map(Number),s=((t==null?void 0:t.monthDays)||[]).map(Number),o=Array.isArray(t==null?void 0:t.yearDays)?[...t.yearDays].sort():[],r=Array.isArray(t==null?void 0:t.customDates)?[...t.customDates].sort():[],c=Array.isArray(t==null?void 0:t.exceptDates)?[...t.exceptDates].sort():Array.isArray(t==null?void 0:t.exceptions)?[...t.exceptions].sort():[],d=e&&e._exceptCal||I(b),m=e&&e._customCal||I(b),w=e&&e._yearMonth||"01";return`
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
        ${dt.map(p=>`
            <button type="button" class="chip weekday ${n.includes(p.value)?"on":""}" data-action="toggle-weekday" data-day="${p.value}">
              ${p.label}
            </button>
          `).join("")}
      </div>
    </div>
    <div class="pin-monthdays" style="${a==="monthly"?"":"display:none"}">
      <p class="item-meta">Repeat every month on day</p>
      <div class="chip-row">
        ${Array.from({length:31},(p,k)=>k+1).map(p=>`<button type="button" class="chip monthday ${s.includes(p)?"on":""}" data-action="toggle-monthday" data-day="${p}">${p}</button>`).join("")}
      </div>
    </div>
    <div class="pin-yeardays" style="${a==="yearly"?"":"display:none"}">
      <p class="item-meta">Repeat every year on (month + day)</p>
      <div class="row-2">
        <label>Month
          <select id="year-month-select">
            ${Array.from({length:12},(p,k)=>k+1).map(p=>`<option value="${String(p).padStart(2,"0")}" ${w===String(p).padStart(2,"0")?"selected":""}>${new Date(2e3,p-1,1).toLocaleDateString(void 0,{month:"long"})}</option>`).join("")}
          </select>
        </label>
        <label>Day
          <select id="year-day-select">
            ${Array.from({length:31},(p,k)=>k+1).map(p=>`<option value="${String(p).padStart(2,"0")}">${p}</option>`).join("")}
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
      ${Le("custom",m,r)}
      <div class="chip-row" style="margin-top:8px">
        ${r.length?r.map(p=>`<button type="button" class="chip on" data-action="toggle-pin-date" data-target="custom" data-date="${p}" title="Tap to remove">${p} ✕</button>`).join(""):'<span class="item-meta">No extra custom dates.</span>'}
      </div>
    </div>
    <div class="pin-exceptions" style="margin-top:4px">
      <p class="item-meta"><b style="color:var(--text)">Exceptions</b> — skip these days (tap days on the calendar). Applies to every repeat mode.</p>
      ${Le("except",d,c)}
      <div class="chip-row" style="margin-top:8px">
        ${c.length?c.map(p=>`<button type="button" class="chip on" data-action="toggle-pin-date" data-target="except" data-date="${p}" title="Tap to remove">${p} ✕</button>`).join(""):'<span class="item-meta">No exceptions.</span>'}
      </div>
    </div>
  `}function mi(){if(!x)return"";if(x==="choose")return`
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
    `;if(x==="habit"||x==="task"||x==="edit-habit"||x==="edit-task"){const t=x==="habit"||x==="edit-habit",e=x.startsWith("edit-"),a=y||{},i=a.category||(t?"physically":"mentally"),n=Math.max(0,Math.min(5,Number(a.rating)||0)),s=Array.isArray(a.tags)?a.tags.join(", "):a.tags||"",o=a.consciousPoints!=null?Number(a.consciousPoints):a.conscious!=null?Number(a.conscious):0;return`
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
    `}if(x==="export"){const t=y&&y.range||"day";return`
      <div class="modal-backdrop open" data-action="close-modal">
        <div class="sheet">
          <div class="handle"></div>
          <h2>Export report</h2>
          <p class="muted tight">Date: ${z(b)}. Pick a range, then a format.</p>
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
    `}if(x==="goal"||x==="edit-goal"){const t=x==="edit-goal",e=y||{},a=e.kind||"habit-streak",i=u.getAllHabits(),n=u.getPinnedTasks(),s=e.targetId||"";return`
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
                ${Be.map(o=>`<button type="button" class="chip ${a===o.id?"on":""}" data-action="set-goal-kind" data-kind="${o.id}">${o.label}</button>`).join("")}
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
                ${At.map(o=>`<button type="button" class="chip ${(e.tier||"bronze")===o.id?"on":""}" data-action="set-goal-tier" data-tier="${o.id}">${o.medal} ${o.label}</button>`).join("")}
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
    `}if(x==="pin"){const{kind:t,id:e,title:a,pin:i}=y||{};return`
      <div class="modal-backdrop open" data-action="close-modal">
        <form class="sheet sheet-wide" data-form="pin" data-kind="${t}" data-id="${e}">
          <div class="handle"></div>
          <h2>Pin ${t==="habit"?"habit":"task"}</h2>
          <p class="muted tight">${g(a||"")}</p>
          <div class="form" style="margin-top:14px">
            ${pi(i,y)}
            <button class="primary-btn" type="submit">Save pin</button>
            ${i?'<button class="ghost-btn danger" type="button" data-action="clear-pin">Unpin</button>':""}
            <button class="ghost-btn" type="button" data-action="close-modal">Cancel</button>
          </div>
        </form>
      </div>
    `}if(x==="forward"){const{kind:t,id:e,title:a,from:i}=y||{},n=t==="habit";return`
      <div class="modal-backdrop open" data-action="close-modal">
        <form class="sheet" data-form="forward" data-kind="${t}" data-id="${e}">
          <div class="handle"></div>
          <h2>Forward ${n?"habit":"task"}</h2>
          <p class="muted tight">${g(a||"")}</p>
          <p class="item-meta">From ${g(i||b)} — a copy will be created on the day you pick, marked “↩ Forwarded from ${g(i||b)}”.</p>
          <div class="form" style="margin-top:14px">
            <label>
              Forward to day
              <input name="targetDate" type="date" required value="${Ia(i||b)}" />
            </label>
            <button class="primary-btn" type="submit">Forward ${n?"habit":"task"} →</button>
            <button class="ghost-btn" type="button" data-action="close-modal">Cancel</button>
          </div>
        </form>
      </div>
    `}if(x==="image"){const{image:t,title:e}=y||{};return t?`
      <div class="lightbox-backdrop" data-action="close-modal">
        <img src="${t}" alt="${g(e||"Task photo")}" />
        <button type="button" class="ghost-btn compact lightbox-close" data-action="close-modal">✕ Close</button>
      </div>
    `:""}return""}function v(){if(_t){de();try{const t=u.isLocked(b);_t.innerHTML=`
    <div class="app-shell">
      <main class="screen active">
        ${M==="today"?ja():""}
        ${M==="profile"?Fa():""}
        ${M==="history"?Wa():""}
        ${M==="habits"?Ja():""}
        ${M==="settings"?ui():""}
      </main>
      ${["today","habits"].includes(M)&&!t?'<button class="fab" data-action="open-add" aria-label="Add">+</button>':""}
      ${M==="settings"?'<button class="fab" data-action="open-add-habit" aria-label="Add habit">+</button>':""}
      <nav class="tabbar tabs-5">
        <button class="tab ${M==="today"?"active":""}" data-screen="today">${F("home")}Today</button>
        <button class="tab ${M==="profile"?"active":""}" data-screen="profile">${F("profile")}Profile</button>
        <button class="tab ${M==="history"?"active":""}" data-screen="history">${F("history")}History</button>
        <button class="tab ${M==="habits"?"active":""}" data-screen="habits">${F("habit")}Activities</button>
        <button class="tab ${M==="settings"?"active":""}" data-screen="settings">${F("settings")}Settings</button>
      </nav>
    </div>
    ${mi()}
    <div class="toast" id="toast"></div>
  `,fi(),Oa(),vi(),yi(),aa(),gi()}catch(t){const e=t&&t.stack?String(t.stack).slice(0,400):t&&t.message?t.message:"Unknown error";_t.innerHTML=`<div class="app-shell"><section class="manage-card"><h2>Could not load (Error B)</h2><p class="muted tight">${g(e)}</p><button class="primary-btn full" data-action="reload-app">Reload</button></section></div>`}}}function gi(){if(x!=="habit"&&x!=="task")return;const t=document.querySelector(".sheet");t&&(t.scrollTop=0);const e=document.querySelector('.sheet input[name="title"]');if(e)try{e.focus({preventScroll:!0})}catch{try{e.focus()}catch{}}}function fi(){const t=document.getElementById("day-note");t&&t.addEventListener("input",()=>{u.isLocked(b)||u.setNote(b,t.value)})}const hi=3e3,bi=180,Ne=10,A={list:null,card:null,timer:null,startX:0,startY:0,dragging:!1,order0:"",swallowClick:!1,fromHandle:!1,bound:!1};function ee(){A.timer&&(clearTimeout(A.timer),A.timer=null),A.card=null,A.fromHandle=!1}function na(t,e){return[...t.querySelectorAll(".item-card[data-sortable]")].filter(a=>a.dataset.sortable===e).map(a=>a.dataset.id)}function Me(t){const e=A.card,a=A.list;if(ee(),A.list=null,A.dragging=!1,!e||(e.classList.remove("is-dragging"),a&&a.classList.remove("is-reordering"),document.body.classList.remove("is-reordering-body"),!t))return;const i=e.dataset.sortable,n=na(a,i);n.join("|")!==A.order0&&(A.swallowClick=!0,setTimeout(()=>{A.swallowClick=!1},400),i==="habit"?(u.setHabitOrder(n),u.setHabitSort("custom")):i==="task"&&(u.setTaskOrder(b,n),u.setTaskSort("custom")),v(),h("Order saved"))}function yi(){A.bound||(A.bound=!0,document.addEventListener("pointerdown",t=>{if(t.button!=null&&t.button!==0||t.target.closest("input, textarea, select, img, video, .stars, .mini-btn, .check, .fab, .tabbar"))return;const e=t.target.closest(".item-card[data-sortable]");if(!e)return;const a=e.closest(".list");if(!a||u.isLocked(b))return;const i=e.dataset.sortable,n=u.getSettings(),s=(i==="habit"?n.habitSort:n.taskSort)||"default";s!=="default"&&s!=="custom"&&(i==="habit"?u.setHabitSort("custom"):u.setTaskSort("custom"),h("Switched to Custom order so your drag sticks"));const o=t.target.closest(".drag-handle");o&&t.preventDefault(),ee(),A.list=a,A.card=e,A.fromHandle=!!o,A.startX=t.clientX,A.startY=t.clientY,A.order0=na(a,i).join("|"),A.timer=setTimeout(()=>{A.timer=null,!(!A.card||!A.card.isConnected)&&(A.dragging=!0,navigator.vibrate&&navigator.vibrate(15),A.card.classList.add("is-dragging"),A.list.classList.add("is-reordering"),document.body.classList.add("is-reordering-body"),h("Drag to reorder, lift to drop"))},o?bi:hi)},!0),document.addEventListener("pointermove",t=>{if(A.timer&&A.card&&!A.fromHandle&&(Math.abs(t.clientX-A.startX)>Ne||Math.abs(t.clientY-A.startY)>Ne)){ee(),A.list=null;return}if(!A.dragging||!A.card)return;t.preventDefault();const e=A.card,a=A.list;if(!a)return;const i=t.clientY,n=e.dataset.sortable,s=[...a.querySelectorAll(".item-card[data-sortable]")].filter(r=>r!==e&&r.dataset.sortable===n);let o=!1;for(const r of s){const c=r.getBoundingClientRect();if(i<c.top+c.height/2){a.insertBefore(e,r),o=!0;break}}o||a.appendChild(e)},{passive:!1}),document.addEventListener("pointerup",()=>Me(A.dragging)),document.addEventListener("pointercancel",()=>Me(!1)),document.addEventListener("contextmenu",t=>{(A.dragging||A.card)&&t.preventDefault()}),document.addEventListener("touchmove",t=>{A.dragging&&t.preventDefault()},{passive:!1}),document.addEventListener("click",t=>{A.swallowClick&&(t.stopPropagation(),t.preventDefault())},!0))}function vi(){const t=document.getElementById("lock-time"),e=document.getElementById("auto-lock");t&&t.addEventListener("change",()=>{u.setLockTime(t.value),h(`Lock time set to ${t.value}`),v()}),e&&e.addEventListener("change",()=>{u.setAutoLock(e.checked),h(e.checked?"Auto-lock on":"Auto-lock off"),v()}),document.querySelectorAll("[data-cat-color]").forEach(i=>{i.addEventListener("input",()=>{var s;u.updateCategory(i.dataset.catColor,{color:i.value});const n=(s=i.closest(".cat-manage-card"))==null?void 0:s.querySelector(".cat-swatch");n&&(n.style.background=i.value)})}),document.querySelectorAll("[data-cat-goals]").forEach(i=>{const n=()=>{const s=i.dataset.catGoals,o=i.closest(".cat-manage-card");if(!o)return;const r=wt((u.getCategories().find(p=>p.id===s)||{}).goals||""),c=St(wt(i.value))!==St(r),d=o.querySelector('[data-action="save-cat-goals"]');d&&(d.textContent=c?"Save goals":"Saved");const m=o.querySelector('[data-action="reset-cat-goals"]');m&&(m.hidden=!c);const w=o.querySelector(".cat-goal-hint");w&&(w.textContent=c?"Unsaved changes — press Save to keep them offline and in backups.":"Saved on this device and included in every backup.")};i.addEventListener("input",()=>{lt.set(i.dataset.catGoals,i.value),n()}),i.addEventListener("change",n)});const a=document.getElementById("backup-file");a&&a.addEventListener("change",()=>{const i=a.files[0];if(!i)return;const n=new FileReader;n.onload=()=>{ia(String(n.result||""),i.name),a.value=""},n.onerror=()=>{h("Couldn't read that file."),a.value=""},n.readAsText(i)})}function h(t){const e=document.getElementById("toast");e&&(e.textContent=t,e.classList.add("show"),setTimeout(()=>e.classList.remove("show"),1800))}function oa(){const t=u.getTheme();document.documentElement.dataset.theme=t;const e=document.querySelector('meta[name="theme-color"]');e&&(e.content=t==="light"?"#f3f1ea":"#0e1116")}function g(t){return String(t||"").split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;").split('"').join("&quot;")}function _(){return u.isLocked(b)?(h("This report is locked. Unlock it in Settings."),!0):!1}function pe(t){return{mode:(t==null?void 0:t.mode)||"forever",until:(t==null?void 0:t.until)||"",weekdays:Array.isArray(t==null?void 0:t.weekdays)?t.weekdays.map(Number):[],monthDays:Array.isArray(t==null?void 0:t.monthDays)?t.monthDays.map(Number):[],yearDays:Array.isArray(t==null?void 0:t.yearDays)?[...t.yearDays]:[],customDates:Array.isArray(t==null?void 0:t.customDates)?[...t.customDates]:[],exceptDates:Array.isArray(t==null?void 0:t.exceptDates)?[...t.exceptDates]:Array.isArray(t==null?void 0:t.exceptions)?[...t.exceptions]:[]}}function ki(t){const e=u.findHabit(t);e&&(x="pin",y={kind:"habit",id:t,title:e.name,pin:e.pin?pe(e.pin):{mode:"forever",until:"",weekdays:[],monthDays:[],yearDays:[],customDates:[],exceptDates:[]},_exceptCal:I(b),_customCal:I(b),_yearMonth:"01"})}function $i(t){const e=u.findTask(b,t);if(!e)return;const a=e.sourcePinId?u.findPinnedTask(e.sourcePinId):null;x="pin",y={kind:"task",id:t,title:e.title,pin:a!=null&&a.pin?pe(a.pin):{mode:"forever",until:"",weekdays:[],monthDays:[],yearDays:[],customDates:[],exceptDates:[]},_exceptCal:I(b),_customCal:I(b),_yearMonth:"01"}}function wi(t){const e=u.findPinnedTask(t);e&&(x="pin",y={kind:"template",id:t,title:e.title,pin:e.pin?pe(e.pin):{mode:"forever",until:"",weekdays:[],monthDays:[],yearDays:[],customDates:[],exceptDates:[]},_exceptCal:I(b),_customCal:I(b),_yearMonth:"01"})}function Si(t){var d;const e=t.querySelector('input[name="mode"]').value,a=((d=t.querySelector('input[name="until"]'))==null?void 0:d.value)||"",i=[...t.querySelectorAll(".weekday.on")].map(m=>Number(m.dataset.day)),n=[...t.querySelectorAll(".monthday.on")].map(m=>Number(m.dataset.day)),s=y&&y.pin||{},o=Array.isArray(s.yearDays)?s.yearDays:[],r=Array.isArray(s.customDates)?s.customDates:[],c=Array.isArray(s.exceptDates)?s.exceptDates:[];return e==="until"&&!a?(h("Pick an until date"),null):e==="weekly"&&!i.length?(h("Pick at least one weekday"),null):e==="monthly"&&!n.length?(h("Pick at least one day of month"),null):e==="yearly"&&!o.length?(h("Add at least one yearly date"),null):e==="custom"&&!r.length?(h("Pick at least one custom date"),null):{mode:e,until:a,weekdays:i,monthDays:n,yearDays:o,customDates:r,exceptDates:c}}function pt(t,e,a){const i=e instanceof Blob?e:new Blob([e],{type:a||"text/plain;charset=utf-8"}),n=URL.createObjectURL(i),s=document.createElement("a");s.href=n,s.download=t,document.body.appendChild(s),s.click(),setTimeout(()=>{document.body.removeChild(s),URL.revokeObjectURL(n)},500)}function gt(t){const e=String(t??"");return/[",\n]/.test(e)?`"${e.replace(/"/g,'""')}"`:e}function me(t,e){const[a,i]=u.resolveRange(t,e||b);return{range:t,start:a,end:i,rows:u.exportRows(a,i)}}function He(t,e){const a=t||y&&y.range||"day",{start:i,end:n,rows:s}=me(a,e),o=[];o.push(["Daily Report export",`${i} to ${n}`].map(gt).join(",")),o.push(["Date","Type","Name","Category","Tags","Points","Rating","Earned","ConsciousPts","Status","Note/Description"].map(gt).join(",")),s.forEach(r=>{r.habits.forEach(c=>{o.push([r.date,"Habit",c.name,c.category,(c.tags||[]).join("|"),c.points,c.rating,c.earned,c.consciousPoints,c.status||(c.rating>0?"done":r.locked?"missed":"pending"),c.description||""].map(gt).join(","))}),r.tasks.forEach(c=>{o.push([r.date,"Task",c.hasImage?`${c.title} [photo]`:c.title,c.category,(c.tags||[]).join("|"),c.points,c.rating||"",c.earned,"",c.status||(c.done?"done":r.locked?"missed":"pending"),c.description||""].map(gt).join(","))}),o.push([r.date,"Summary",`Earned ${r.earned}/${r.max} (${r.percent}%)`,"","","","","","",r.locked?"locked":"open",r.note||""].map(gt).join(","))}),pt(`daily-report-${a}-${i}-to-${n}.csv`,"\uFEFF"+o.join(`
`),"text/csv;charset=utf-8"),h("Excel (CSV) exported")}function Ie(t,e){const a=t||y&&y.range||"day",{start:i,end:n,rows:s}=me(a,e),o={app:"Daily Report",exportedAt:new Date().toISOString(),range:a,start:i,end:n,days:s};pt(`daily-report-${a}-${i}-to-${n}.json`,JSON.stringify(o,null,2),"application/json"),h("JSON exported")}function Re(t,e){const a=t||y&&y.range||"day",{start:i,end:n,rows:s}=me(a,e),o=s.map(c=>`
        <section style="margin-bottom:18px;border:1px solid #ddd;border-radius:12px;padding:12px">
          <h2 style="margin:0 0 4px;font-size:16px">${g(c.date)} — ${c.earned}/${c.max} pts (${c.percent}%)</h2>
          <p style="margin:0 0 8px;font-size:12px;color:#555">Habits ${c.habitScore} + Conscious ${c.consciousScore} + Tasks ${c.taskScore} · ${c.locked?"Locked":"Open"}${c.note?` · Note: ${g(c.note)}`:""}</p>
          <table style="width:100%;border-collapse:collapse;font-size:12px">
            <thead><tr><th align="left">Type</th><th align="left">Name</th><th align="left">Category</th><th>Points</th><th>Rating</th><th>Earned</th><th>Status</th></tr></thead>
            <tbody>
              ${c.habits.map(d=>`<tr><td>Habit</td><td>${g(d.name)}${d.description?` (${g(d.description)})`:""}</td><td>${g(d.category)}</td><td align="center">${d.points}${d.consciousPoints?`+${d.consciousPoints}🧠`:""}</td><td align="center">${d.rating||"-"}/5</td><td align="center">${d.earned}</td><td align="center">${d.status||(d.rating>0?"done":c.locked?"missed":"pending")}</td></tr>`).join("")}
              ${c.tasks.map(d=>`<tr><td>Task</td><td>${g(d.title)}${d.hasImage?" 📷":""}${d.description?` (${g(d.description)})`:""}</td><td>${g(d.category)}</td><td align="center">${d.points}</td><td align="center">${d.rating?`${d.rating}/5`:"-"}</td><td align="center">${d.earned}</td><td align="center">${d.status||(d.done?"done":c.locked?"missed":"pending")}</td></tr>`).join("")}
            </tbody>
          </table>
        </section>
      `).join(""),r=window.open("","_blank");if(!r){h("Popup blocked — allow popups to export PDF");return}r.document.write(`<!DOCTYPE html><html><head><title>Daily Report ${i} to ${n}</title></head><body style="font-family:sans-serif;padding:24px"><h1>Daily Report — ${i} to ${n}</h1>${o}<script>window.onload=function(){window.print()}<\/script></body></html>`),r.document.close(),h("PDF print view opened")}document.addEventListener("click",t=>{const e=t.target.closest("[data-screen]");if(e){M=e.dataset.screen,v();return}const a=t.target.closest("[data-action]");if(!a)return;const i=a.dataset.action;if(i==="close-modal"){if(x==="image"){x=null,y=null,v();return}(t.target.classList.contains("modal-backdrop")||a.classList.contains("ghost-btn"))&&(x=null,y=null,v());return}if(i==="note-bullets"){Te("bullets");return}if(i==="note-numbered"){Te("numbered");return}if(i==="values-bullets"){De("bullets");return}if(i==="values-numbered"){De("numbered");return}if(i==="pick-task-image"){const n=document.getElementById("task-image-input");n?n.click():h("Photo picking needs a browser file picker");return}if(i==="remove-task-image"){y&&(y._image="",v(),h("Photo removed — save to apply"));return}if(i==="view-task-image"){const n=u.findTask(b,a.dataset.id),s=n&&n.image?n.image:y&&(y._image||y.image)||"";if(!s){h("No photo on this task");return}x="image",y={image:s,title:n&&n.title||"Task photo"},v();return}if(i==="prev-day"&&we(-1),i==="next-day"&&we(1),i==="reload-app"){window.location.reload();return}if(i==="set-theme"){const n=a.dataset.theme==="light"?"light":"dark";u.setTheme(n),oa(),h(n==="light"?"Light mode on":"Dark mode on")}if(i==="install-app"){di();return}if(i==="check-updates"){li();return}if(i==="apply-update"){sa();return}if(i==="backup-now"){ni();return}if(i==="trigger-import"){const n=document.getElementById("backup-file");n&&n.click();return}if(i==="choose-folder"){ai();return}if(i==="grant-folder"){si();return}if(i==="forget-folder"){ii();return}if(i==="restore-backup"){ri(a.dataset.name);return}if(i==="goto-settings"&&(M="settings"),i==="open-add-habit"&&(x="habit",y=null),i==="open-add-task"){if(_())return;x="task",y={category:"mentally"}}if(i==="open-add"){if(_())return;x="choose",y={category:"mentally"}}if(i==="toggle-edit"&&(it=!it),i==="open-edit-habit"){const n=u.findHabit(a.dataset.id);if(!n)return;x="edit-habit",y={id:n.id,name:n.name,description:n.description||"",points:n.points,category:n.category,tags:n.tags||[],consciousPoints:Number(n.consciousPoints)||0}}if(i==="open-edit-task"){if(_())return;const n=u.findTask(b,a.dataset.id);if(!n)return;x="edit-task",y={id:n.id,title:n.title,points:n.points,description:n.description,category:n.category,tags:n.tags||[],rating:Number(n.rating)||0,image:n.image||"",_image:void 0}}if(i==="toggle-badges"&&(Nt=!Nt),i==="open-goal"&&(x="goal",y={kind:"habit-streak",targetDays:7,tier:"bronze"}),i==="open-edit-goal"){const n=u.getGoals().find(s=>s.id===a.dataset.id);if(!n)return;x="edit-goal",y={...n}}if(i==="remove-goal"&&(u.removeGoal(a.dataset.id),h("Goal removed")),i==="remove-badge"&&(u.removeBadge(a.dataset.id),h("Badge removed")),i==="rate-habit"){if(_())return;const s=u.habitRating(b,a.dataset.id)===Number(a.dataset.rating)?0:Number(a.dataset.rating);u.setHabitRating(b,a.dataset.id,s)}if(i==="rate-task"){if(_())return;const n=u.findTask(b,a.dataset.id);if(!n)return;const o=(Number(n.rating)||0)===Number(a.dataset.rating)?0:Number(a.dataset.rating);u.setTaskRating(b,a.dataset.id,o)}if(i==="open-export"&&(x="export",y={range:y&&y.range||"day"}),i==="set-export-range"){x="export",y={range:a.dataset.range||"day"},v();return}if(i==="do-export"){const n=a.dataset.format,s=y&&y.range||"day";n==="csv"&&He(s,b),n==="json"&&Ie(s,b),n==="pdf"&&Re(s,b),x=null,y=null}if(i==="set-histexp-range"){j=["day","week","month","year"].includes(a.dataset.range)?a.dataset.range:"day",v();return}if(i==="histexp-do"){const n=a.dataset.format;let s=b;if(j==="day"||j==="week"){const o=document.getElementById("histexp-date");o&&/^\d{4}-\d{2}-\d{2}$/.test(o.value)&&(s=o.value)}else if(j==="month"){const o=document.getElementById("histexp-month");o&&/^\d{4}-\d{2}$/.test(o.value)&&(s=`${o.value}-15`)}else if(j==="year"){const o=document.getElementById("histexp-year"),r=Number(o&&o.value);Number.isInteger(r)&&r>=2e3&&r<=2100&&(s=`${String(r)}-06-15`)}n==="csv"&&He(j,s),n==="json"&&Ie(j,s),n==="pdf"&&Re(j,s);return}if(i==="history-cal-nav"){const n=Mt||I(b);Mt=bt(n,Number(a.dataset.dir)||0),v();return}if(i==="locked-cal-nav"){const n=Ht||I(b);Ht=bt(n,Number(a.dataset.dir)||0),v();return}if(i==="toggle-locked-day"){const n=a.dataset.date,s=H.indexOf(n);s>=0?H.splice(s,1):H.push(n),v();return}if(i==="lock-selected"){const n=[...H].sort();if(!n.length)return;const s=u.lockDays(n);H=[],h(s===1?`Locked ${s} day`:`Locked ${s} days`),v();return}if(i==="unlock-selected"){const n=[...H].sort();if(!n.length)return;const s=u.unlockDays(n);H=[],h(s===1?`Unlocked ${s} day`:`Unlocked ${s} days`),v();return}if(i==="submit-day"&&(u.submitDay(b),h("Report submitted and locked")),i==="unlock-day"&&(u.unlockDay(a.dataset.date),h("Report unlocked")),i==="toggle-habit"){if(_())return;u.toggleHabit(b,a.dataset.id)}if(i==="toggle-task"){if(_())return;u.toggleTask(b,a.dataset.id)}if(i==="remove-task"){if(_())return;u.removeTask(b,a.dataset.id)}if(i==="remove-habit"&&u.removeHabit(a.dataset.id),i==="restore-habit"){const n=u.restoreHabit(a.dataset.id);h(n.ok?"Habit restored":n.reason||"Could not restore that habit")}if(i==="open-pin-habit"&&ki(a.dataset.id),i==="open-forward-habit"){if(_())return;const n=u.findHabit(a.dataset.id);if(!n)return;x="forward",y={kind:"habit",id:n.id,title:n.name,from:b}}if(i==="open-forward-task"){if(_())return;const n=u.findTask(b,a.dataset.id);if(!n)return;x="forward",y={kind:"task",id:n.id,title:n.title,from:b}}if(i==="open-pin-task"){if(_())return;$i(a.dataset.id)}if(i==="open-pin-template"&&wi(a.dataset.id),i==="unpin-template"&&(u.unpinTaskTemplate(a.dataset.id),h("Task unpinned")),i==="pick-date"&&(b=a.dataset.date,M="today"),i==="set-chart-range"){W=["week","month","year"].includes(a.dataset.range)?a.dataset.range:"week",Z=0,v();return}if(i==="chart-nav"){Z+=Number(a.dataset.dir)||0,Z>0&&(Z=0),v();return}if(i==="add-category"){const n=document.getElementById("new-category"),s=u.addCategory(n?n.value:"");h(s.ok?"Category added":s.reason||"Couldn't add category"),v();return}if(i==="rename-category"){const n=u.getCustomCategories().find(r=>r.id===a.dataset.id),s=window.prompt("Rename category",n?n.label:"");if(s==null)return;const o=u.renameCategory(a.dataset.id,s);h(o.ok?"Category renamed":o.reason||"Couldn't rename"),v();return}if(i==="delete-category"){if(!window.confirm("Delete this category? Its habits and tasks move to Mentally."))return;const n=u.deleteCategory(a.dataset.id);n.ok&&nt.delete(a.dataset.id),h(n.ok?"Category deleted":n.reason||"Couldn't delete"),v();return}if(i==="rename-tag"){const n=window.prompt("Rename tag everywhere",a.dataset.tag||"");if(n==null)return;const s=u.renameTag(a.dataset.tag,n);h(s.ok?s.merged?"Tags merged":"Tag renamed everywhere":s.reason||"Couldn't rename"),v();return}if(i==="delete-tag"){if(!window.confirm(`Delete tag "#${a.dataset.tag}" from all habits and tasks?`))return;u.deleteTag(a.dataset.tag),h("Tag deleted everywhere"),v();return}if(i==="add-tag"){const n=document.getElementById("tag-habit-pick"),s=document.getElementById("new-tag"),o=u.addTagToHabit(n?n.value:"",s?s.value:"");h(o.ok?"Tag added to habit":o.reason||"Couldn't add tag"),v();return}if(i==="set-points"){const n=document.querySelector('input[name="points"]');n&&(n.value=a.dataset.points),document.querySelectorAll(".chip-row .chip[data-points]").forEach(s=>s.classList.remove("on")),a.classList.add("on");return}if(i==="set-category"){const n=a.closest("form")||a.closest(".sheet"),s=n.querySelector('input[name="category"]');s&&(s.value=a.dataset.category),n.querySelectorAll(".cat-row .chip").forEach(o=>o.classList.remove("on")),a.classList.add("on");return}if(i==="set-rating"){const n=a.closest(".sheet")||a.closest("form")||document,s=n.querySelector('input[name="rating"]');s&&(s.value=a.dataset.rating),n.querySelectorAll(".rating-row .chip").forEach(o=>o.classList.remove("on")),a.classList.add("on");return}if(i==="set-conscious"){const n=a.closest(".sheet")||a.closest("form")||document,s=n.querySelector('input[name="consciousPoints"]');s&&(s.value=a.dataset.conscious),n.querySelectorAll(".conscious-row .chip").forEach(o=>o.classList.remove("on")),a.classList.add("on");return}if(i==="set-goal-kind"){const n=a.closest(".sheet")||document,s=n.querySelector('input[name="kind"]');s&&(s.value=a.dataset.kind),n.querySelectorAll(".goal-kind-row .chip").forEach(d=>d.classList.remove("on")),a.classList.add("on");const o=a.dataset.kind,r=n.querySelector(".goal-target-habit"),c=n.querySelector(".goal-target-task");r&&(r.style.display=o==="habit-streak"?"":"none"),c&&(c.style.display=o==="task-streak"?"":"none"),y&&(y.kind=o);return}if(i==="set-goal-tier"){const n=a.closest(".sheet")||document,s=n.querySelector('input[name="tier"]');s&&(s.value=a.dataset.tier),n.querySelectorAll(".goal-tier-row .chip").forEach(o=>o.classList.remove("on")),a.classList.add("on");return}if(i==="pin-mode"){const n=a.closest("form"),s=a.dataset.mode;n.querySelector('input[name="mode"]').value=s,n.querySelectorAll(".pin-modes .chip").forEach(r=>r.classList.remove("on")),a.classList.add("on");const o=(r,c)=>{const d=n.querySelector(r);d&&(d.style.display=c?"":"none")};o(".pin-until",s==="until"),o(".pin-weekdays",s==="weekly"),o(".pin-monthdays",s==="monthly"),o(".pin-yeardays",s==="yearly"),y&&y.pin&&(y.pin.mode=s);return}if(i==="toggle-weekday"){a.classList.toggle("on");return}if(i==="toggle-monthday"){a.classList.toggle("on");return}if(i==="pin-cal-nav"){if(!y)return;const n=a.dataset.target,s=Number(a.dataset.dir)||0;n==="except"?y._exceptCal=bt(y._exceptCal||I(b),s):y._customCal=bt(y._customCal||I(b),s),v();return}if(i==="toggle-pin-date"){if(!y||!y.pin)return;const n=a.dataset.target,s=a.dataset.date,o=n==="custom"?"customDates":"exceptDates",r=Array.isArray(y.pin[o])?[...y.pin[o]]:[],c=r.indexOf(s);c>=0?r.splice(c,1):(r.push(s),r.length>365&&r.shift()),y.pin[o]=r.sort(),v();return}if(i==="add-year-day"){if(!y||!y.pin)return;const n=a.closest("form")||document,s=n.querySelector("#year-month-select"),o=n.querySelector("#year-day-select");s&&(y._yearMonth=s.value);const r=`${s?s.value:"01"}-${o?o.value:"01"}`,c=Array.isArray(y.pin.yearDays)?[...y.pin.yearDays]:[];c.includes(r)||c.push(r),y.pin.yearDays=c.sort(),v();return}if(i==="remove-year-day"){if(!y||!y.pin)return;const n=a.dataset.date;y.pin.yearDays=(y.pin.yearDays||[]).filter(s=>s!==n),v();return}if(i==="clear-pin"){const n=a.closest("form"),s=n.dataset.kind,o=n.dataset.id;if(s==="habit"&&u.unpinHabit(o),s==="task"){const r=u.findTask(b,o);r!=null&&r.sourcePinId&&u.unpinTaskTemplate(r.sourcePinId)}s==="template"&&u.unpinTaskTemplate(o),x=null,y=null,h("Unpinned"),v();return}if(i==="lock-profile"){u.setProfileLocked(!0),h("Profile locked — read only"),v();return}if(i==="unlock-profile"){u.setProfileLocked(!1),h("Profile unlocked"),v();return}if(i==="add-whoami"){const n=document.getElementById("new-whoami"),s=u.addWhoAmI(n?n.value:"");h(s.ok?"Added":s.reason||"Couldn't add"),v();return}if(i==="move-whoami"){u.moveWhoAmI(a.dataset.id,Number(a.dataset.dir)||0),v();return}if(i==="remove-whoami"){u.removeWhoAmI(a.dataset.id),h("Removed"),v();return}if(i==="add-lifearea"){const n=document.getElementById("new-lifearea"),s=u.addLifeArea(n?n.value:"");s.ok?(rt=s.id,h("Life area added")):h(s.reason||"Couldn't add"),v();return}if(i==="toggle-lifearea"){const n=a.dataset.id;rt=rt===n?null:n,v();return}if(i==="move-lifearea"){u.moveLifeArea(a.dataset.id,Number(a.dataset.dir)||0),v();return}if(i==="toggle-cat"){const n=a.dataset.id;nt.has(n)?nt.delete(n):nt.add(n),v();const s=document.querySelector(`[data-action="toggle-cat"][data-id="${CSS.escape(n)}"]`);s&&s.focus({preventScroll:!0});return}if(i==="expand-cats"){u.getCategories().forEach(n=>nt.add(n.id)),v();return}if(i==="collapse-cats"){nt.clear(),v();return}if(i==="save-cat-goals"){const n=a.dataset.id,s=document.querySelector(`[data-cat-goals="${CSS.escape(n)}"]`),o=s?s.value:lt.get(n)||"",r=wt(o);u.updateCategory(n,{goals:St(r)}),lt.delete(n),h(r.length?`Saved ${r.length} goal${r.length===1?"":"s"} for ${K(n)}`:`Cleared goals for ${K(n)}`),v();return}if(i==="reset-cat-goals"){const n=a.dataset.id;lt.delete(n),v();return}if(i==="remove-lifearea"){u.removeLifeArea(a.dataset.id),rt===a.dataset.id&&(rt=null),h("Life area removed"),v();return}if(i==="set-pgoal-term"){V=["short","medium","long"].includes(a.dataset.term)?a.dataset.term:"short",ut=u.profileGoalDurations()[V][0],v();return}if(i==="set-pgoal-filter"){Pt=["all","short","medium","long"].includes(a.dataset.filter)?a.dataset.filter:"all",v();return}if(i==="add-pgoal"){const n=document.getElementById("new-pgoal"),s=document.getElementById("new-pgoal-duration"),o=u.addProfileGoal(n?n.value:"",V,s?s.value:ut);h(o.ok?`Goal added ${Et(V)}`:o.reason||"Couldn't add"),v();return}if(i==="remove-pgoal"){u.removeProfileGoal(a.dataset.id),h("Goal removed"),v();return}if(i==="add-idea"){const n=document.getElementById("new-idea"),s=String(n?n.value:"").trim().slice(0,200);if(!s){h("Write an idea first");return}if(u.isProfileLocked()){h("Profile is locked");return}const o=String(u.getProfile().ideas||"").split(`
`).map(r=>r.trim()).filter(Boolean);o.push(`• ${s}`),u.setProfileField("ideas",o.join(`
`)),h("Idea added"),v();return}if(i==="remove-idea"){if(u.isProfileLocked())return;const n=Number(a.dataset.index),s=String(u.getProfile().ideas||"").split(`
`).filter(o=>o.trim());if(!Number.isInteger(n)||n<0||n>=s.length)return;s.splice(n,1),u.setProfileField("ideas",s.join(`
`)),h("Idea removed"),v();return}if(i==="add-quote"){const n=document.getElementById("new-quote"),s=document.getElementById("new-quote-author"),o=u.addQuote(n?n.value:"",s?s.value:"");h(o.ok?"Quote added":o.reason||"Couldn't add"),v();return}if(i==="toggle-quote-fav"){u.toggleQuoteFav(a.dataset.id),v();return}if(i==="remove-quote"){u.removeQuote(a.dataset.id),h("Quote removed"),v();return}if(i==="toggle-quotes"){kt=!kt,v();return}v()});document.addEventListener("submit",t=>{const e=t.target.closest("[data-form]");if(!e)return;t.preventDefault();const a=e.dataset.form;if(a==="habit"||a==="task"||a==="edit-habit"||a==="edit-task"){const i=new FormData(e),n=String(i.get("title")||""),s=Number(i.get("points")||0),o=String(i.get("category")||"mentally"),r=String(i.get("description")||""),c=String(i.get("tags")||""),d=Math.max(0,Math.min(5,Number(i.get("rating")||0))),m=Math.max(0,Math.min(100,Number(i.get("consciousPoints")||0)));if(!n.trim())return;const w=y&&y._image!==void 0?X(y._image):X(y&&y.image);if(a==="habit")u.addHabit(n,s,{description:r,category:o,consciousPoints:m,tags:c,startFrom:b}),h("Habit added");else if(a==="task"){if(_())return;u.addTask(b,n,s,{description:r,category:o,rating:d,tags:c,image:w}),h("Task added")}else if(a==="edit-habit")u.updateHabit(e.dataset.id,{name:n,description:r,points:s,category:o,consciousPoints:m,tags:c}),h("Habit updated");else{if(_())return;u.updateTask(b,e.dataset.id,{title:n,points:s,description:r,category:o,rating:d,tags:c,image:w}),h("Task updated")}x=null,y=null,v();return}if(a==="pin"){const i=Si(e);if(!i)return;const n=e.dataset.kind,s=e.dataset.id;n==="habit"&&u.pinHabit(s,i),n==="task"&&u.pinTask(b,s,i),n==="template"&&u.updatePinnedTask(s,i),x=null,y=null,h("Pin saved"),v();return}if(a==="forward"){const i=new FormData(e),n=String(i.get("targetDate")||""),s=e.dataset.kind,o=e.dataset.id,r=y&&y.from||b;if(!/^\d{4}-\d{2}-\d{2}$/.test(n)){h("Pick a valid date");return}const c=s==="habit"?u.forwardHabit(r,o,n):u.forwardTask(r,o,n);if(!c.ok){h(c.reason||"Could not forward");return}x=null,y=null,b=n,M="today",h(`Forwarded to ${n}`),v();return}if(a==="goal"||a==="edit-goal"){const i=new FormData(e),n=String(i.get("title")||"").trim(),s=String(i.get("kind")||"habit-streak"),o=String(i.get("tier")||"bronze"),r=String(i.get("rewardTitle")||"").trim(),c=Math.max(1,Math.min(365,Number(i.get("targetDays")||7)));if(!n||!r){h("Goal title and reward title are required");return}let d="";if(s==="habit-streak"&&(d=String(i.get("habitTarget")||"")),s==="task-streak"&&(d=String(i.get("taskTarget")||"")),(s==="habit-streak"||s==="task-streak")&&!d){h(s==="habit-streak"?"Pick a habit":"Pin a task first, then pick it");return}a==="goal"?(u.addGoal({title:n,kind:s,targetId:d,targetDays:c,tier:o,rewardTitle:r}),h("Goal added")):(u.updateGoal(e.dataset.id,{title:n,kind:s,targetId:d,targetDays:c,tier:o,rewardTitle:r}),h("Goal updated"));const m=u.checkGoals(b);m.length&&h(`🏅 Reward earned: ${m[0].rewardTitle}!`),x=null,y=null,v()}});document.addEventListener("change",t=>{const e=t.target.closest(".sort-select");if(e){const a=e.dataset.sortKind;a==="habit"&&u.setHabitSort(e.value),a==="task"&&u.setTaskSort(e.value),v()}if(t.target&&t.target.id==="show-conscious"&&(u.setShowConscious(t.target.checked),h(t.target.checked?"Conscious points on":"Conscious points hidden"),v()),t.target&&t.target.id==="week-start"&&(u.setWeekStart(Number(t.target.value)),h("Week starts on "+t.target.selectedOptions[0].textContent),v()),t.target&&t.target.id==="new-pgoal-duration"){ut=t.target.value;return}if(t.target&&t.target.id==="year-month-select"&&y&&(y._yearMonth=t.target.value),t.target&&t.target.id==="task-image-input"){const a=t.target.files&&t.target.files[0];if(!a)return;if(!String(a.type||"").startsWith("image/")){h("Please pick an image file"),t.target.value="";return}h("Processing photo…"),Ma(a).then(i=>{if(t.target.value="",!i){h("Photo too large or unreadable — try a smaller one");return}y&&(y._image=i,v(),h("Photo attached — save to apply"))})}});if("serviceWorker"in navigator){window.addEventListener("load",()=>{navigator.serviceWorker.register("./sw.js").catch(()=>{})});let t=!1;try{sessionStorage.getItem("dr-updated-reload")&&(t=!0)}catch{}navigator.serviceWorker.addEventListener("controllerchange",()=>{if(!t){t=!0;try{sessionStorage.setItem("dr-updated-reload","1")}catch{}window.location.reload()}})}function xi(){const t=document.getElementById("boot-error");t&&(t.style.display="none")}xi();oa();v();ti().then(()=>{M==="settings"&&v()});setInterval(()=>{!document.hidden&&de()&&v()},6e4);document.addEventListener("visibilitychange",()=>{!document.hidden&&de()&&v()});
