(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function a(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=a(i);fetch(i.href,n)}})();const _e="daily-report-v2",At=[{id:"mentally",label:"Mentally"},{id:"psychology",label:"Psychology"},{id:"physically",label:"Physically"},{id:"spiritually",label:"Spiritually"},{id:"socially",label:"Socially"}];At.map(t=>t.id);const Ge=[{id:"h1",name:"Wake up early",points:10,icon:"sunrise",category:"physically",pin:{mode:"forever"}},{id:"h2",name:"Drink water",points:5,icon:"drop",category:"physically",pin:{mode:"forever"}},{id:"h3",name:"Exercise",points:15,icon:"bolt",category:"physically",pin:{mode:"forever"}},{id:"h4",name:"Read 20 minutes",points:10,icon:"book",category:"mentally",pin:{mode:"forever"}},{id:"h5",name:"No junk food",points:10,icon:"leaf",category:"physically",pin:{mode:"forever"}}],qe={lockTime:"21:00",autoLock:!0,showConscious:!0,habitSort:"default",taskSort:"default",theme:"dark",habitOrder:[],weekStart:1};function Wt(t){const e=Number(t);return Number.isInteger(e)&&e>=0&&e<=6?e:1}const Tt=[{id:"iron",label:"Iron",medal:"🥉",rank:1},{id:"bronze",label:"Bronze",medal:"🥉",rank:2},{id:"silver",label:"Silver",medal:"🥈",rank:3},{id:"gold",label:"Gold",medal:"🥇",rank:4}],We=[{id:"habit-streak",label:"Habit streak"},{id:"task-streak",label:"Pinned task streak"},{id:"perfect-days",label:"Perfect days (100%)"}];function he(t){var e;return((e=Tt.find(a=>a.id===t))==null?void 0:e.rank)||0}function Ut(t){var e;return((e=Tt.find(a=>a.id===t))==null?void 0:e.medal)||"🏅"}function Ue(t){var e;return((e=Tt.find(a=>a.id===t))==null?void 0:e.label)||t||"Badge"}function D(t){const e=Array.isArray(t)?t:String(t||"").split(","),a=[];return e.forEach(s=>{const i=String(s||"").trim().slice(0,20);i&&!a.some(n=>n.toLowerCase()===i.toLowerCase())&&a.push(i),a.length>=10}),a.slice(0,10)}function Bt(t,e){const a=[...t];return e==="points"?a.sort((s,i)=>(Number(i.points)||0)-(Number(s.points)||0)):e==="category"?a.sort((s,i)=>et(E(s.category)).localeCompare(et(E(i.category)))):e==="tags"&&a.sort((s,i)=>(s.tags&&s.tags[0]||"~~~").localeCompare(i.tags&&i.tags[0]||"~~~")),a}const lt=[{value:1,label:"Mon"},{value:2,label:"Tue"},{value:3,label:"Wed"},{value:4,label:"Thu"},{value:5,label:"Fri"},{value:6,label:"Sat"},{value:0,label:"Sun"}];function q(t=new Date){const e=t.getFullYear(),a=String(t.getMonth()+1).padStart(2,"0"),s=String(t.getDate()).padStart(2,"0");return`${e}-${a}-${s}`}function se(){return{habits:{},habitRatings:{},habitMissed:{},habitForwarded:{},tasks:[],note:"",locked:!1,lockOverride:null,submittedAt:null,lockedHabits:null,skippedPins:[]}}var F=[],X={};function ma(t){const e=X[t.id];return e?{...t,color:e.color||t.color,goals:e.goals!==void 0?e.goals:t.goals}:t}function Z(){return[...At.map(ma),...F]}function E(t){return Z().map(a=>a.id).includes(t)?t:"mentally"}function et(t){var e;return((e=Z().find(a=>a.id===t))==null?void 0:e.label)||"Mentally"}const Ct=7e5;function Y(t){const e=String(t||"");return e.startsWith("data:image/")?e.length>Ct?"":e:""}function be(t){const e=Math.max(0,Math.min(5,Number(t.rating)||0)),a=i=>/^\d{4}-\d{2}-\d{2}$/.test(String(i||""))?String(i):"",s=i=>Array.isArray(i)?i.filter(n=>/^\d{4}-\d{2}-\d{2}$/.test(String(n))).map(String).slice(0,50):[];return{...t,description:t.description||"",category:E(t.category),tags:D(t.tags),rating:e,done:!!t.done,missed:!!t.missed,forwardedFrom:a(t.forwardedFrom),forwardedHabitId:String(t.forwardedHabitId||""),forwardedTo:s(t.forwardedTo),image:Y(t.image)}}function W(t){const e=Number(t);return!Number.isFinite(e)||e<0?0:Math.min(100,Math.round(e))}function Dt(t){const e=String(t??"").slice(0,10);return/^\d{4}-\d{2}-\d{2}$/.test(e)?e:""}function ne(t,e){const a=Dt(t&&t.startFrom);return a?String(e)>=a:!0}function oe(t,e){return{id:String(t.id||""),name:String(t.name||"").slice(0,80),description:String(t.description||"").slice(0,240),points:Number(t.points)||0,icon:t.icon||"star",category:E(t.category),consciousPoints:W(t.consciousPoints),tags:D(t.tags),pin:J(t.pin),startFrom:Dt(t.startFrom),archivedAt:e||t.archivedAt||null}}function ze(t,e,a){return{id:String(t.id||""),title:String(t.title||"Task").slice(0,120),points:Number(t.points)||0,description:String(t.description||"").slice(0,500),category:E(t.category),tags:D(t.tags),image:Y(t.image),fromDate:/^\d{4}-\d{2}-\d{2}$/.test(String(a||""))?String(a):"",archivedAt:e||t.archivedAt||null,sourcePinId:String(t.sourcePinId||"")}}function ga(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object"&&e.id).map(e=>ze(e,e.archivedAt||null,e.fromDate)).filter(e=>e.id.length<=80).slice(0,500):[]}function J(t){if(!t||!t.mode)return null;const e=(i,n,o)=>Array.isArray(i)?i.map(Number).filter(r=>Number.isFinite(r)&&r>=n&&r<=o):[],a=i=>Array.isArray(i)?i.filter(n=>/^\d{4}-\d{2}-\d{2}$/.test(String(n))).map(String).slice(0,365):[],s=i=>Array.isArray(i)?i.filter(n=>/^\d{2}-\d{2}$/.test(String(n))).map(String).slice(0,366):[];return{mode:["forever","until","weekly","monthly","yearly","custom"].includes(t.mode)?t.mode:"forever",until:t.until||"",weekdays:e(t.weekdays,0,6),monthDays:e(t.monthDays,1,31),yearDays:s(t.yearDays),customDates:a(t.customDates),exceptDates:a(t.exceptDates||t.exceptions)}}function fa(t,e){const a=`${t} ${e}`.toLowerCase();return a.includes("read")||a.includes("study")||a.includes("learn")?"mentally":a.includes("meditat")||a.includes("pray")||a.includes("journal")?"spiritually":a.includes("mood")||a.includes("calm")||a.includes("therapy")?"psychology":a.includes("friend")||a.includes("family")||a.includes("social")||a.includes("call")||a.includes("visit")?"socially":"physically"}function zt(t){const e=We.some(a=>a.id===t.kind)?t.kind:"habit-streak";return{id:String(t.id||`g${Date.now()}`),title:String(t.title||"").trim().slice(0,60)||"My goal",kind:e,targetId:String(t.targetId||""),targetDays:Math.max(1,Math.min(365,Number(t.targetDays)||7)),tier:Tt.some(a=>a.id===t.tier)?t.tier:"bronze",rewardTitle:String(t.rewardTitle||"").trim().slice(0,60)||"Reward",createdAt:t.createdAt||new Date().toISOString()}}function ha(t){if(!Array.isArray(t))return[];const e=new Set(At.map(s=>s.id)),a=[];return t.forEach(s=>{if(!s||typeof s!="object")return;const i=String(s.id||"").trim().slice(0,40),n=String(s.label||"").trim().slice(0,30);!i||!n||e.has(i.toLowerCase())||(e.add(i.toLowerCase()),a.push({id:i,label:n,color:String(s.color||"").slice(0,20),goals:String(s.goals||"").slice(0,1e3)}))}),a.slice(0,20)}function ba(t){const e=t&&typeof t=="object"?t:{},a={};return At.forEach(s=>{const i=e[s.id];if(!i||typeof i!="object")return;const n=String(i.color||"").trim().slice(0,20),o=i.goals===void 0?void 0:String(i.goals||"").slice(0,1e3);!n&&o===void 0||(a[s.id]={},n&&(a[s.id].color=n),o!==void 0&&(a[s.id].goals=o))}),a}const Yt={name:80,wantToBe:1e3,vision:1e3,values:1e3,ideas:4e3},Vt=["short","medium","long"],yt={short:["1 Week","2 Weeks","3 Weeks","4 Weeks"],medium:["1 Month","2 Months","3 Months"],long:["1 Year","2 Years","3 Years","5 Years","10+ Years"]};function B(t){return`${t||"id"}${Date.now().toString(36)}${Math.floor(Math.random()*9999)}`}function ya(t){return Array.isArray(t)?t.map(e=>{if(typeof e=="string")return{id:B("w"),text:e.trim().slice(0,120)};if(!e||typeof e!="object")return null;const a=String(e.text||e.label||e.name||"").trim().slice(0,120);return a?{id:String(e.id||B("w")),text:a}:null}).filter(Boolean).slice(0,50):[]}function va(t){return typeof t=="string"?t.split(`
`).map(e=>e.trim().replace(/^[-•*]\s+/,"")).filter(Boolean).slice(0,20).map(e=>({id:B("a"),title:e.slice(0,60),description:""})):Array.isArray(t)?t.map(e=>{if(typeof e=="string"){const s=e.trim().slice(0,60);return s?{id:B("a"),title:s,description:""}:null}if(!e||typeof e!="object")return null;const a=String(e.title||e.name||"").trim().slice(0,60);return a?{id:String(e.id||B("a")),title:a,description:String(e.description||"").slice(0,1e3)}:null}).filter(Boolean).slice(0,20):[]}function ka(t){return Array.isArray(t)?t.map(e=>{if(typeof e=="string"){const o=e.trim().slice(0,200);return o?{id:B("g"),text:o,term:"short",duration:"1 Week",createdAt:new Date().toISOString()}:null}if(!e||typeof e!="object")return null;const a=String(e.text||e.title||"").trim().slice(0,200);if(!a)return null;const s=Vt.includes(e.term)?e.term:"short",i=yt[s],n=i.includes(e.duration)?e.duration:i[0];return{id:String(e.id||B("g")),text:a,term:s,duration:n,createdAt:e.createdAt||new Date().toISOString()}}).filter(Boolean).slice(0,100):[]}function $a(t){return Array.isArray(t)?t.map(e=>{if(typeof e=="string"){const s=e.trim().slice(0,500);return s?{id:B("q"),text:s,author:"",fav:!1,createdAt:new Date().toISOString()}:null}if(!e||typeof e!="object")return null;const a=String(e.text||e.quote||"").trim().slice(0,500);return a?{id:String(e.id||B("q")),text:a,author:String(e.author||"").trim().slice(0,80),fav:!!(e.fav||e.favorite),createdAt:e.createdAt||new Date().toISOString()}:null}).filter(Boolean).slice(0,200):[]}function $t(t){const e=t&&typeof t=="object"?t:{},a={};Object.entries(Yt).forEach(([i,n])=>{i==="wantToBe"&&!e.wantToBe&&e.about?a[i]=String(e.about||"").slice(0,n):a[i]=String(e[i]||"").slice(0,n)}),a.locked=!!e.locked,a.whoAmI=ya(e.whoAmI||e.whoIAm||[]),a.lifeAreas=va(Array.isArray(e.lifeAreas)||typeof e.lifeAreas=="string"?e.lifeAreas:[]);let s=ka(e.pGoals||e.goalsList||e.profileGoals||[]);return s.length||[["goalsShort","short","1 Week"],["goalsMid","medium","1 Month"],["goalsLong","long","1 Year"]].forEach(([n,o,r])=>{const d=String(e[n]||"");d.trim()&&d.split(`
`).map(l=>l.trim().replace(/^[-•*]\s+/,"")).filter(Boolean).forEach(l=>{s.length>=100||s.push({id:B("g"),text:l.slice(0,200),term:o,duration:r,createdAt:new Date().toISOString()})})}),a.pGoals=s,a.quotes=$a(e.quotes||e.favQuotes||[]),a}function wa(t,e){const a=String(t&&t.installedAt||"");if(/^\d{4}-\d{2}-\d{2}/.test(a))return a;const s=Object.keys(e||{}).sort();return s.length?`${s[0]}T00:00:00.000`:new Date().toISOString()}function Sa(t,e){if(!t)return!1;if(ce(t,e)>0)return!0;const a=t.habitForwarded&&t.habitForwarded[e];return Array.isArray(a)&&a.length>0?!0:Array.isArray(t.tasks)&&t.tasks.some(s=>String(s&&s.forwardedHabitId||"")===String(e))}function xa(t,e){return!t||!Array.isArray(t.lockedHabits)?!1:t.lockedHabits.some(a=>String(a&&a.id||"")===String(e))}function Aa(t,e,a){const s=String(t||"");for(const i of e){const n=a[i];if(Sa(n,s)||xa(n,s))return i}return""}function Ta(t,e){const a=Object.keys(e).sort(),s=a[0]||"";return t.map(i=>{const n=Dt(i&&i.startFrom);return n?{...i,startFrom:n}:{...i,startFrom:Aa(i&&i.id,a,e)||s}})}function Da(t,e){const a=Object.keys(e).sort(),s=a[0]||"",i={};return a.forEach(n=>{const o=e[n]&&e[n].tasks;Array.isArray(o)&&o.forEach(r=>{const d=String(r&&r.sourcePinId||"");!d||i[d]||(i[d]=n)})}),t.map(n=>{const o=Dt(n&&n.startFrom);if(o)return{...n,startFrom:o};const r=String(n&&n.id||"");return{...n,startFrom:i[r]||s}})}function Ye(t){const e=new Set,a=new Set,s=new Set;return t.filter(i=>{if(!i||typeof i!="object")return!1;const n=String(i.id||"");if(n&&e.has(n))return!1;n&&e.add(n);const o=String(i.sourcePinId||"");if(o){if(a.has(o))return!1;a.add(o)}const r=`${String(i.title||"").trim().toLowerCase()}|${Number(i.points)||0}|${String(i.category||"")}`;return s.has(r)?!1:(s.add(r),!0)})}function Ve(t){F=ha(t.customCategories||[]),X=ba(t.categoryOverrides);const e={};Object.entries(t.days||{}).forEach(([n,o])=>{e[n]={...se(),habits:o.habits||{},habitRatings:o.habitRatings||{},habitMissed:o.habitMissed||{},habitForwarded:o.habitForwarded&&typeof o.habitForwarded=="object"?o.habitForwarded:{},tasks:Ye(Array.isArray(o.tasks)?o.tasks.map(be):[]),note:o.note||"",locked:!!o.locked,lockOverride:o.lockOverride||(o.locked?"locked":null),submittedAt:o.submittedAt||null,lockedHabits:Array.isArray(o.lockedHabits)?o.lockedHabits:null,skippedPins:Array.isArray(o.skippedPins)?o.skippedPins.map(String).filter(r=>r.length<=60).slice(0,100):[]}});const a=Ta(Array.isArray(t.habits)&&t.habits.length?t.habits:Ge,e).map(n=>({...n,description:String(n.description||"").slice(0,240),category:E(n.category||fa(n.id,n.name)),consciousPoints:W(n.consciousPoints),tags:D(n.tags),pin:J(n.pin)})),s=(Array.isArray(t.archivedHabits)?t.archivedHabits:[]).filter(n=>n&&typeof n=="object"&&n.id).map(n=>oe(n,n.archivedAt||null)).filter(n=>n.id.length<=60).slice(0,500),i=Da(Array.isArray(t.pinnedTasks)?t.pinnedTasks.map(n=>({...be(n),pin:J(n.pin)})):[],e);return{habits:a,archivedHabits:s,archivedTasks:ga(t.archivedTasks),customCategories:F,categoryOverrides:X,installedAt:wa(t,e),profile:$t(t.profile),pinnedTasks:i,days:e,goals:Array.isArray(t.goals)?t.goals.map(zt):[],badges:Array.isArray(t.badges)?t.badges.filter(n=>n&&n.id&&n.goalId).map(n=>({id:String(n.id),goalId:String(n.goalId),title:String(n.title||""),tier:n.tier||"bronze",rewardTitle:String(n.rewardTitle||""),earnedAt:n.earnedAt||new Date().toISOString()})):[],settings:{lockTime:t.settings&&t.settings.lockTime||qe.lockTime,autoLock:!t.settings||t.settings.autoLock!==!1,showConscious:!t.settings||t.settings.showConscious!==!1,habitSort:["default","points","category","tags","custom"].includes(t.settings&&t.settings.habitSort)?t.settings.habitSort:"default",taskSort:["default","points","category","tags","custom"].includes(t.settings&&t.settings.taskSort)?t.settings.taskSort:"default",theme:["light","dark"].includes(t.settings&&t.settings.theme)?t.settings.theme:"dark",weekStart:Wt(t.settings&&t.settings.weekStart),habitOrder:Array.isArray(t.settings&&t.settings.habitOrder)?t.settings.habitOrder.map(String).filter(Boolean).slice(0,300):[]}}}function ye(){const t=q();return{habits:Ge.map(e=>({...e,description:"",tags:[],startFrom:t})),archivedHabits:[],archivedTasks:[],customCategories:[],categoryOverrides:{},installedAt:new Date().toISOString(),profile:$t({}),pinnedTasks:[],days:{},goals:[],badges:[],settings:{...qe}}}function Pa(){try{const t=localStorage.getItem(_e)||localStorage.getItem("daily-report-v1");return t?Ve(JSON.parse(t)):ye()}catch{return ye()}}let c=Pa();F=c.customCategories||[];c.customCategories=F;X=c.categoryOverrides||{};c.categoryOverrides=X;let Je=0,_t={key:null,value:null},Jt=0;function re(){return Jt>0}function at(t){Jt+=1;try{return t()}finally{Jt-=1}}function k(){Je+=1;try{localStorage.setItem(_e,JSON.stringify(c))}catch{}}let ve=0;function it(t){return ve+=1,`${t||"id"}${Date.now().toString(36)}${ve.toString(36)}${Math.floor(Math.random()*1296).toString(36)}`}function Ca(t){return new Date(`${t}T00:00:00`).getDay()}function ht(t){const e=new Date(`${t}T00:00:00`);return e.setDate(e.getDate()-1),q(e)}function de(t,e){if(!t)return!0;if(Array.isArray(t.exceptDates)&&t.exceptDates.includes(e)||Array.isArray(t.exceptions)&&t.exceptions.includes(e))return!1;if((Array.isArray(t.customDates)?t.customDates:[]).includes(e)||t.mode==="forever")return!0;if(t.mode==="until")return!!t.until&&e<=t.until;if(t.mode==="weekly")return Array.isArray(t.weekdays)&&t.weekdays.includes(Ca(e));if(t.mode==="monthly"){const s=Array.isArray(t.monthDays)?t.monthDays.map(Number):[];return s.length?s.includes(Number(String(e).slice(8,10))):!0}if(t.mode==="yearly"){const s=Array.isArray(t.yearDays)?t.yearDays:[];return s.length?s.includes(String(e).slice(5,10)):!0}return t.mode!=="custom"}function pt(t){if(!t)return"Not pinned";const e=(t.exceptDates||t.exceptions||[]).length,a=e?` · ⛔ ${e} exception${e>1?"s":""}`:"",s=t.mode==="custom"?0:Array.isArray(t.customDates)?t.customDates.length:0,i=s?` +${s} custom`:"";if(t.mode==="forever")return`Pinned forever${i}${a}`;if(t.mode==="until")return`${t.until?`Pinned until ${t.until}`:"Pinned until a date"}${i}${a}`;if(t.mode==="weekly"){const n=Array.isArray(t.weekdays)?t.weekdays:[],o=lt.filter(r=>n.includes(r.value)).map(r=>r.label);return`${o.length?`Weekly: ${o.join(", ")}`:"Weekly (no days)"}${i}${a}`}if(t.mode==="monthly"){const n=Array.isArray(t.monthDays)?t.monthDays:[];return`${n.length?`Monthly: day${n.length>1?"s":""} ${[...n].sort((o,r)=>o-r).join(", ")}`:"Monthly"}${i}${a}`}if(t.mode==="yearly"){const n=Array.isArray(t.yearDays)?t.yearDays:[];return`${n.length?`Yearly: ${[...n].sort().join(", ")}`:"Yearly"}${i}${a}`}if(t.mode==="custom"){const n=Array.isArray(t.customDates)?t.customDates:[];return`${n.length?`Custom: ${n.length} date${n.length>1?"s":""}`:"Custom dates"}${a}`}return"Pinned"}function Qt(t){const[e,a]=(c.settings.lockTime||"21:00").split(":").map(Number),s=new Date(`${t}T00:00:00`);return s.setHours(e||0,a||0,0,0),s}function Qe(t){const e=c.days[t];return e?e.lockOverride==="locked"||e.locked===!0:!1}function ce(t,e){return t?t.habitRatings&&t.habitRatings[e]!=null?Number(t.habitRatings[e])||0:t.habits&&t.habits[e]?5:0:0}function Xt(t,e){return ce(c.days[t],e)}function Ea(t,e){if(!t)return!1;if(ce(t,e)>0||t.habitMissed&&t.habitMissed[e])return!0;const s=t.habitForwarded&&t.habitForwarded[e];return Array.isArray(s)&&s.length>0?!0:Array.isArray(t.tasks)&&t.tasks.some(i=>String(i&&i.forwardedHabitId||"")===String(e))}function Xe(t){if(!t)return[...c.habits];const e=c.habits.filter(s=>ne(s,t)&&de(s.pin,t)),a=c.days[t];if(a){const s=new Set(e.map(n=>n.id)),i=n=>{!n||s.has(n.id)||Ea(a,n.id)&&(s.add(n.id),e.push(n))};c.habits.forEach(i),c.archivedHabits&&c.archivedHabits.length&&c.archivedHabits.forEach(i)}return e}function ke(t,e){if(!Array.isArray(e)||!e.length)return t;const a=new Map(e.map((s,i)=>[String(s),i]));return t.some(s=>a.has(String(s&&s.id)))?t.map((s,i)=>({item:s,i})).sort((s,i)=>{const n=a.has(String(s.item&&s.item.id))?a.get(String(s.item.id)):Number.MAX_SAFE_INTEGER,o=a.has(String(i.item&&i.item.id))?a.get(String(i.item.id)):Number.MAX_SAFE_INTEGER;return n===o?s.i-i.i:n-o}).map(s=>s.item):t}function La(t){const e=c.habits.find(a=>a.id===t);return e||(c.archivedHabits||[]).find(a=>a.id===t)||null}function Na(t){c.archivedHabits||(c.archivedHabits=[]),!c.archivedHabits.some(e=>e.id===t.id)&&(c.archivedHabits.push(oe(t,new Date().toISOString())),c.archivedHabits.length>500&&c.archivedHabits.splice(0,c.archivedHabits.length-500))}function Zt(t){const e=C(t),a=Xe(t);e.lockedHabits=a.map(s=>oe(s)),e.habitMissed={},a.forEach(s=>{Xt(t,s.id)<=0&&(e.habitMissed[s.id]=!0)}),e.tasks.forEach(s=>{s.missed=!s.done})}function vt(t){const e=c.days[t];return!e||e.lockOverride==="unlocked"?!1:e.lockOverride==="locked"||e.locked===!0?!0:c.settings.autoLock?Date.now()>=Qt(t).getTime():!1}function $e(t){if(re())return vt(t);const e=C(t);return e.lockOverride==="unlocked"?!1:e.lockOverride==="locked"||e.locked?((!Array.isArray(e.lockedHabits)||!e.habitMissed)&&Zt(t),!0):c.settings.autoLock&&Date.now()>=Qt(t).getTime()?(e.locked=!0,e.lockOverride="locked",e.submittedAt=e.submittedAt||Qt(t).toISOString(),Zt(t),k(),!0):!1}function C(t){if(!c.days[t]){const e=se();if(re())return e;c.days[t]=e}return c.days[t]}function we(t){const e=String(t);Object.values(c.days).forEach(a=>{!Array.isArray(a.skippedPins)||!a.skippedPins.includes(e)||(a.skippedPins=a.skippedPins.filter(s=>s!==e))})}function Se(t){const e=C(t);if(Qe(t)||re())return e;let a=!1;const s=new Set(Array.isArray(e.skippedPins)?e.skippedPins.map(String):[]);if(e.tasks.length>1){const i=Ye(e.tasks);i.length!==e.tasks.length&&(e.tasks=i,a=!0)}return c.pinnedTasks.forEach(i=>{ne(i,t)&&de(i.pin,t)&&(s.has(String(i.id))||e.tasks.some(n=>n.sourcePinId===i.id)||(e.tasks.push({id:`ptask-${i.id}-${t}`,title:i.title,points:i.points,description:i.description||"",category:E(i.category),tags:D(i.tags),rating:0,done:!1,missed:!1,sourcePinId:i.id,image:Y(i.image)}),a=!0))}),a&&k(),e}function G(t){return!u.isLocked(t)}function xe(t){const e=Z().find(a=>a.label.toLowerCase()===String(t||"").trim().toLowerCase());return e?e.id:"mentally"}function Ae(t){return!t||typeof t!="object"||Array.isArray(t)?[]:Array.isArray(t.days)?t.days.filter(e=>e&&/^\d{4}-\d{2}-\d{2}$/.test(String(e.date||""))):[]}const u={todayKey:q,exportBackup(){return JSON.stringify({app:"Daily Report",kind:"full-backup",version:1,exportedAt:new Date().toISOString(),data:c},null,2)},backupKind(t){if(!t||typeof t!="object"||Array.isArray(t))return"invalid";const e=t.data&&typeof t.data=="object"&&!Array.isArray(t.data)?t.data:t;return Array.isArray(e.days)?"report-export":Array.isArray(e.categories)||Array.isArray(e.plans)||Array.isArray(e.schedule)?"wrong-app":typeof e!="object"||e===null||e.habits!==void 0&&!Array.isArray(e.habits)||e.days!==void 0&&(typeof e.days!="object"||e.days===null||Array.isArray(e.days))||e.settings!==void 0&&(typeof e.settings!="object"||e.settings===null||Array.isArray(e.settings))||!["habits","pinnedTasks","days","goals","badges","settings"].some(s=>e[s]!==void 0)?"invalid":"ok"},importBackup(t){if(this.backupKind(t)!=="ok")return!1;const e=t.data&&typeof t.data=="object"&&!Array.isArray(t.data)?t.data:t;return c=Ve(e),F=c.customCategories||[],c.customCategories=F,X=c.categoryOverrides||{},c.categoryOverrides=X,k(),!0},previewReport(t){const e=Ae(t);if(!e.length)return{days:0,start:"",end:"",newHabits:0};const a=new Set(c.habits.map(n=>String(n.name||"").trim().toLowerCase())),s=new Set;e.forEach(n=>{(Array.isArray(n.habits)?n.habits:[]).forEach(o=>{const r=String(o&&o.name||"").trim().toLowerCase();r&&!a.has(r)&&s.add(r)})});const i=e.map(n=>String(n.date)).sort();return{days:e.length,start:i[0],end:i[i.length-1],newHabits:s.size}},importReport(t){const e=Ae(t);if(!e.length)return!1;const a=e.map(r=>String(r.date)).sort(),s=a[a.length-1],i={};c.habits.forEach(r=>{i[String(r.name||"").trim().toLowerCase()]=r});let n=0;const o=Date.now();return e.forEach((r,d)=>{const l=String(r.date);(Array.isArray(r.habits)?r.habits:[]).forEach(p=>{const $=String(p&&p.name||"").trim().slice(0,80);if(!$)return;const L=$.toLowerCase();if(!i[L]){const S={id:`h${o}_${n}`,name:$,description:String(p&&p.description||"").slice(0,240),points:Number(p&&p.points||10)||10,icon:"star",category:xe(p&&p.category),consciousPoints:W(p&&p.consciousPoints),tags:D(p&&p.tags),pin:{mode:"until",until:s,weekdays:[],monthDays:[],yearDays:[],customDates:[],exceptDates:[]},startFrom:a[0]};c.habits.push(S),i[L]=S,n+=1}});const m=se();m.note=String(r.note||""),m.locked=!0,m.lockOverride="locked",m.submittedAt=null;const w=[];(Array.isArray(r.habits)?r.habits:[]).forEach(p=>{const $=i[String(p&&p.name||"").trim().toLowerCase()];if(!$)return;const L=Math.max(0,Math.min(5,Number(p&&p.rating||0)));m.habitRatings[$.id]=L,m.habits[$.id]=L>0,L<=0&&(m.habitMissed[$.id]=!0),$.startFrom&&l<$.startFrom&&($.startFrom=l),w.push({id:$.id,name:$.name,description:$.description,points:$.points,icon:$.icon||"star",category:E($.category),consciousPoints:W($.consciousPoints),tags:D($.tags),pin:J($.pin)})}),m.lockedHabits=w,m.tasks=(Array.isArray(r.tasks)?r.tasks:[]).map((p,$)=>({id:`t${o}_${d}_${$}`,title:String(p&&p.title||"Task").slice(0,120),points:Number(p&&p.points||5)||5,description:String(p&&p.description||""),category:xe(p&&p.category),tags:D(p&&p.tags),rating:Math.max(0,Math.min(5,Number(p&&p.rating||0))),done:!!(p&&p.done),missed:!(p&&p.done),image:"",forwardedFrom:/^\d{4}-\d{2}-\d{2}$/.test(String(p&&p.forwardedFrom||""))?String(p.forwardedFrom):"",forwardedHabitId:"",forwardedTo:Array.isArray(p&&p.forwardedTo)?p.forwardedTo.filter(L=>/^\d{4}-\d{2}-\d{2}$/.test(String(L))).map(String).slice(0,50):[]})),c.days[l]=m}),k(),{days:e.length,habits:n}},getSettings(){return c.settings},setLockTime(t){c.settings.lockTime=t||"21:00",k()},setAutoLock(t){c.settings.autoLock=!!t,k()},setShowConscious(t){c.settings.showConscious=!!t,k()},consciousEnabled(){return c.settings.showConscious!==!1},setHabitSort(t){c.settings.habitSort=["default","points","category","tags","custom"].includes(t)?t:"default",k()},setTaskSort(t){c.settings.taskSort=["default","points","category","tags","custom"].includes(t)?t:"default",k()},getWeekStart(){return Wt(c.settings.weekStart)},setWeekStart(t){c.settings.weekStart=Wt(t),k()},getTheme(){return c.settings.theme==="light"?"light":"dark"},setTheme(t){c.settings.theme=t==="light"?"light":"dark",k()},getHabits(t,e){if(t&&Qe(t)){const n=c.days[t];if(n&&Array.isArray(n.lockedHabits)){const o=e||c.settings.habitSort||"default",r=[...n.lockedHabits];return o==="default"||o==="custom"?ke(r,c.settings.habitOrder):Bt(r,o)}}const a=e||c.settings.habitSort||"default",s=Xe(t),i=a==="default"||a==="custom"?ke(s,c.settings.habitOrder):Bt(s,a);return a==="default"||a==="custom"?i.slice().sort((n,o)=>+!!o.pin-+!!n.pin):i},getTasks(t,e){const a=this.getDay(t),s=e||c.settings.taskSort||"default";return s==="default"||s==="custom"?a.tasks:Bt(a.tasks,s)},getAllHabits(){return c.habits},getPinnedTasks(){return c.pinnedTasks},getDay(t){return $e(t),Se(t)},isLocked(t){return $e(t)},submitDay(t){const e=C(t);e.locked=!0,e.lockOverride="locked",e.submittedAt=new Date().toISOString(),Zt(t),k(),this.checkGoals(t)},unlockDay(t){const e=C(t);e.locked=!1,e.lockOverride="unlocked",e.habitMissed={},e.lockedHabits=null,e.tasks.forEach(a=>{a.missed=!1}),k()},isHabitMissed(t,e){const a=c.days[t];return!a||!(a.locked||a.lockOverride==="locked")||!this.getHabits(t).some(s=>s.id===e)||Xt(t,e)>0?!1:(a.habitMissed&&a.habitMissed[e],!0)},isTaskMissed(t,e){const a=c.days[t];if(!a)return!1;const s=(a.tasks||[]).find(i=>i.id===e);return s?s.missed===!0?!0:s.missed===!1?!1:!!(a.locked||a.lockOverride==="locked")&&!s.done:!1},missedCounts(t){return at(()=>{const e=this.getDay(t),a=this.getHabits(t),s=vt(t);return{habits:a.filter(i=>e.habitMissed&&e.habitMissed[i.id]?!0:s&&Xt(t,i.id)<=0).length,tasks:e.tasks.filter(i=>i.done?!1:i.missed===!0?!0:i.missed===!1?!1:s).length}})},lockDay(t){this.submitDay(t)},lockDays(t){let e=0;return t.forEach(a=>{this.isLocked(a)||(this.submitDay(a),e+=1)}),e},unlockDays(t){let e=0;return t.forEach(a=>{this.isLocked(a)&&(this.unlockDay(a),e+=1)}),e},lockedReports(){return at(()=>Object.keys(c.days).sort().reverse().filter(t=>vt(t)).map(t=>({date:t,submittedAt:c.days[t].submittedAt,...this.scoreFor(t)})))},habitRating(t,e){const a=c.days[t];return a?a.habitRatings&&a.habitRatings[e]!=null?Number(a.habitRatings[e])||0:a.habits&&a.habits[e]?5:0:0},setHabitRating(t,e,a){if(!G(t))return;const s=C(t),i=Math.max(0,Math.min(5,Number(a)||0));s.habitRatings[e]=i,s.habits[e]=i>0,k(),this.checkGoals(t)},toggleHabit(t,e){if(!G(t))return;const a=this.habitRating(t,e)>0?0:5;this.setHabitRating(t,e,a)},addTask(t,e,a,s={}){if(!G(t))return;C(t).tasks.push({id:it("t"),title:e.trim(),points:Number(a)||5,description:String(s.description||"").trim(),category:E(s.category),tags:D(s.tags),rating:Math.max(0,Math.min(5,Number(s.rating)||0)),done:!1,missed:!1,forwardedFrom:/^\d{4}-\d{2}-\d{2}$/.test(String(s.forwardedFrom||""))?String(s.forwardedFrom):"",forwardedHabitId:String(s.forwardedHabitId||""),forwardedTo:[],image:Y(s.image)}),k(),this.checkGoals(t)},setTaskRating(t,e,a){if(!G(t))return;const i=C(t).tasks.find(o=>o.id===e);if(!i)return;const n=Math.max(0,Math.min(5,Number(a)||0));i.rating=n,k()},setTaskOrder(t,e){if(!G(t))return;const a=C(t),s=(Array.isArray(e)?e:[]).map(String).filter(Boolean);if(!s.length)return;const i=new Map(s.map((o,r)=>[o,r])),n=a.tasks.slice().sort((o,r)=>{const d=i.has(o.id)?i.get(o.id):Number.MAX_SAFE_INTEGER,l=i.has(r.id)?i.get(r.id):Number.MAX_SAFE_INTEGER;return d-l});a.tasks=n,k()},setHabitOrder(t){const e=(Array.isArray(t)?t:[]).map(String).filter(Boolean);e.length&&(c.settings.habitOrder=e.slice(0,300),k())},toggleTask(t,e){if(!G(t))return;const s=C(t).tasks.find(i=>i.id===e);s&&(s.done=!s.done,k(),this.checkGoals(t))},removeTask(t,e){if(!G(t))return;const a=C(t),s=a.tasks.find(n=>n.id===e);a.tasks=a.tasks.filter(n=>n.id!==e);const i=s&&s.sourcePinId?String(s.sourcePinId):"";i&&(Array.isArray(a.skippedPins)||(a.skippedPins=[]),a.skippedPins.includes(i)||a.skippedPins.push(i),a.skippedPins.length>100&&a.skippedPins.splice(0,a.skippedPins.length-100)),k()},forwardTask(t,e,a){if(!/^\d{4}-\d{2}-\d{2}$/.test(String(a||"")))return{ok:!1,reason:"Pick a valid date"};if(t===a)return{ok:!1,reason:"Already on that day"};if(!G(t))return{ok:!1,reason:"Source day is locked"};if(this.isLocked(a))return{ok:!1,reason:"Target day is locked"};const i=C(t).tasks.find(d=>d.id===e);if(!i)return{ok:!1,reason:"Task not found"};const n=C(a),o=String(i.title||"").trim().toLowerCase();if(n.tasks.some(d=>String(d.title||"").trim().toLowerCase()===o))return{ok:!1,reason:"That task is already on that day"};n.tasks.push({id:it("t"),title:i.title,points:Number(i.points)||5,description:String(i.description||""),category:E(i.category),tags:D(i.tags),rating:0,done:!1,missed:!1,forwardedFrom:t,forwardedHabitId:String(i.forwardedHabitId||""),forwardedTo:[],image:Y(i.image)});const r=Array.isArray(i.forwardedTo)?i.forwardedTo:[];return r.includes(a)||r.push(a),i.forwardedTo=r.slice(0,50),k(),this.checkGoals(a),{ok:!0}},forwardHabit(t,e,a){if(!/^\d{4}-\d{2}-\d{2}$/.test(String(a||"")))return{ok:!1,reason:"Pick a valid date"};if(t===a)return{ok:!1,reason:"Already on that day"};if(!G(t))return{ok:!1,reason:"Source day is locked"};if(this.isLocked(a))return{ok:!1,reason:"Target day is locked"};const s=c.habits.find(r=>r.id===e);if(!s)return{ok:!1,reason:"Habit not found"};C(a).tasks.push({id:it("t"),title:s.name,points:Number(s.points)||10,description:String(s.description||""),category:E(s.category),tags:D(s.tags),rating:0,done:!1,missed:!1,forwardedFrom:t,forwardedHabitId:e,forwardedTo:[]});const n=C(t);(!n.habitForwarded||typeof n.habitForwarded!="object")&&(n.habitForwarded={});const o=Array.isArray(n.habitForwarded[e])?n.habitForwarded[e]:[];return o.includes(a)||o.push(a),n.habitForwarded[e]=o.slice(0,50),k(),this.checkGoals(a),{ok:!0}},habitForwardedTo(t,e){const a=c.days[t];if(!a||!a.habitForwarded)return[];const s=a.habitForwarded[e];return Array.isArray(s)?s:[]},setNote(t,e){G(t)&&(C(t).note=e,k())},addHabit(t,e,a={}){c.habits.push({id:it("h"),name:t.trim(),description:String(a.description||"").trim().slice(0,240),points:Number(e)||10,icon:"star",category:E(a.category||"physically"),consciousPoints:W(a.consciousPoints),tags:D(a.tags),pin:J({mode:"forever"}),startFrom:Dt(a.startFrom)||q()}),k()},updateHabit(t,e){const a=c.habits.find(s=>s.id===t);a&&(e.name!=null&&(a.name=String(e.name).trim()||a.name),e.description!=null&&(a.description=String(e.description).trim().slice(0,240)),e.points!=null&&(a.points=Number(e.points)||a.points),e.category!=null&&(a.category=E(e.category)),e.consciousPoints!=null&&(a.consciousPoints=W(e.consciousPoints)),e.tags!=null&&(a.tags=D(e.tags)),k())},updateTask(t,e,a){if(!G(t))return;const i=C(t).tasks.find(n=>n.id===e);if(i){if(a.title!=null&&(i.title=String(a.title).trim()||i.title),a.points!=null&&(i.points=Number(a.points)||i.points),a.description!=null&&(i.description=String(a.description).trim()),a.category!=null&&(i.category=E(a.category)),a.tags!=null&&(i.tags=D(a.tags)),a.image!==void 0&&(i.image=Y(a.image)),a.rating!=null&&(i.rating=Math.max(0,Math.min(5,Number(a.rating)||0))),i.sourcePinId){const n=c.pinnedTasks.find(o=>o.id===i.sourcePinId);n&&(n.title=i.title,n.points=i.points,n.description=i.description,n.category=i.category,a.tags!=null&&(n.tags=D(a.tags)),a.image!==void 0&&(n.image=Y(a.image)))}k()}},habitStreak(t,e){const a=La(t);if(!a)return 0;let s=e,i=0;this.habitRating(s,t)===0&&(s=ht(s));let n=0;for(;i<400;){if(i+=1,!ne(a,s)||!de(a.pin,s)){s=ht(s);continue}if(this.habitRating(s,t)>0){n+=1,s=ht(s);continue}break}return n},categoryBreakdown(t){const e=this.getDay(t),a=this.getHabits(t);return Z().map(s=>{const i=a.filter(S=>E(S.category)===s.id),n=e.tasks.filter(S=>E(S.category)===s.id),o=i.reduce((S,f)=>{const T=this.habitRating(t,f.id);return S+Math.round(f.points*T/5)},0),r=c.settings.showConscious!==!1,d=r?i.reduce((S,f)=>S+(this.habitRating(t,f.id)>0?W(f.consciousPoints):0),0):0,l=i.reduce((S,f)=>S+f.points,0),m=r?i.reduce((S,f)=>S+W(f.consciousPoints),0):0,w=n.reduce((S,f)=>S+(f.done?f.points:0),0),p=n.reduce((S,f)=>S+f.points,0),$=i.map(S=>this.habitRating(t,S.id)),L=$.length?Math.round($.reduce((S,f)=>S+f,0)/$.length*10)/10:0;return{...s,habits:i,tasks:n,earned:o+d+w,max:l+m+p,habitAvg:L,consciousEarned:d,consciousMax:m,completed:i.filter(S=>this.habitRating(t,S.id)>0).length+n.filter(S=>S.done).length,total:i.length+n.length}})},removeHabit(t){const e=c.habits.find(a=>a.id===t);e&&Na(e),c.habits=c.habits.filter(a=>a.id!==t),k()},getArchivedHabits(){return(c.archivedHabits||[]).map(t=>({...t}))},deleteArchivedHabit(t){const e=(c.archivedHabits||[]).length;return c.archivedHabits=(c.archivedHabits||[]).filter(a=>a.id!==t),c.archivedHabits.length===e?{ok:!1,reason:"That habit is no longer archived"}:(k(),{ok:!0})},archiveTask(t,e){if(!G(t))return{ok:!1,reason:"Day is locked"};const a=C(t),s=a.tasks.find(n=>n.id===e);if(!s)return{ok:!1,reason:"Task not found"};c.archivedTasks||(c.archivedTasks=[]),c.archivedTasks.unshift(ze(s,new Date().toISOString(),t)),c.archivedTasks.length>500&&(c.archivedTasks.length=500),a.tasks=a.tasks.filter(n=>n.id!==e);const i=s.sourcePinId?String(s.sourcePinId):"";return i&&(Array.isArray(a.skippedPins)||(a.skippedPins=[]),a.skippedPins.includes(i)||a.skippedPins.push(i)),k(),{ok:!0}},getArchivedTasks(){return(c.archivedTasks||[]).map(t=>({...t}))},restoreTask(t,e){const a=(c.archivedTasks||[]).findIndex(d=>d.id===t);if(a<0)return{ok:!1,reason:"That task is no longer archived"};const s=c.archivedTasks[a],i=e||q();Se(i);const n=C(i),o=String(s.title||"").trim().toLowerCase();return n.tasks.some(d=>String(d.title||"").trim().toLowerCase()===o)?{ok:!1,reason:"That task is already on that day"}:(n.tasks.push({id:it("t"),title:s.title,points:Number(s.points)||5,description:String(s.description||""),category:E(s.category),tags:D(s.tags),rating:0,done:!1,missed:!1,image:Y(s.image),sourcePinId:String(s.sourcePinId||"")}),c.archivedTasks.splice(a,1),k(),{ok:!0})},deleteArchivedTask(t){const e=(c.archivedTasks||[]).length;return c.archivedTasks=(c.archivedTasks||[]).filter(a=>a.id!==t),c.archivedTasks.length===e?{ok:!1,reason:"That task is no longer archived"}:(k(),{ok:!0})},restoreHabit(t){const e=(c.archivedHabits||[]).findIndex(i=>i.id===t);if(e<0)return{ok:!1,reason:"That habit is no longer archived"};const a=c.archivedHabits[e];if(c.habits.some(i=>i.id===a.id))return c.archivedHabits.splice(e,1),k(),{ok:!0};const s={...a,description:String(a.description||"").slice(0,240),category:E(a.category),consciousPoints:W(a.consciousPoints),tags:D(a.tags),pin:J(a.pin),archivedAt:null};return c.habits.push(s),c.archivedHabits.splice(e,1),k(),{ok:!0,habit:{...s}}},pinHabit(t,e){const a=c.habits.find(s=>s.id===t);a&&(a.pin=J(e),k())},unpinHabit(t){const e=c.habits.find(a=>a.id===t);e&&(e.pin=null,k())},pinTask(t,e,a){if(!G(t))return;const i=C(t).tasks.find(r=>r.id===e);if(!i)return;const n=i.sourcePinId?c.pinnedTasks.find(r=>r.id===i.sourcePinId):null;if(n){n.pin=J(a),we(n.id),k();return}const o=it("p");c.pinnedTasks.push({id:o,title:i.title,points:i.points,description:i.description||"",category:E(i.category),tags:D(i.tags),pin:J(a),startFrom:t,image:Y(i.image)}),i.sourcePinId=o,k()},unpinTaskTemplate(t){c.pinnedTasks=c.pinnedTasks.filter(a=>a.id!==t);const e=String(t);Object.values(c.days).forEach(a=>{!Array.isArray(a.skippedPins)||!a.skippedPins.includes(e)||(a.skippedPins=a.skippedPins.filter(s=>s!==e))}),k()},updatePinnedTask(t,e){const a=c.pinnedTasks.find(s=>s.id===t);a&&(a.pin=J(e),we(t),k())},findHabit(t){return c.habits.find(e=>e.id===t)||null},findTask(t,e){return C(t).tasks.find(a=>a.id===e)||null},findPinnedTask(t){return c.pinnedTasks.find(e=>e.id===t)||null},getInstalledAt(){return String(c.installedAt||new Date().toISOString())},getProfile(){const t=$t(c.profile);return c.profile=t,JSON.parse(JSON.stringify(t))},setProfileField(t,e){return!Object.prototype.hasOwnProperty.call(Yt,t)||c.profile.locked?!1:((!c.profile||typeof c.profile!="object")&&(c.profile=$t({})),c.profile[t]=String(e||"").slice(0,Yt[t]),k(),!0)},setProfileLocked(t){(!c.profile||typeof c.profile!="object")&&(c.profile=$t({})),c.profile.locked=!!t,k()},isProfileLocked(){return!!(c.profile&&c.profile.locked)},profileGoalDurations(){return JSON.parse(JSON.stringify(yt))},addWhoAmI(t){if(c.profile.locked)return{ok:!1,reason:"Profile is locked"};const e=String(t||"").trim().slice(0,120);return e?(c.profile.whoAmI||[]).length>=50?{ok:!1,reason:"List is full (50)"}:(c.profile.whoAmI.push({id:B("w"),text:e}),k(),{ok:!0}):{ok:!1,reason:"Type something first"}},updateWhoAmI(t,e){if(c.profile.locked)return;const a=(c.profile.whoAmI||[]).find(i=>i.id===t);if(!a)return;const s=String(e||"").trim().slice(0,120);s?a.text=s:c.profile.whoAmI=c.profile.whoAmI.filter(i=>i.id!==t),k()},moveWhoAmI(t,e){if(c.profile.locked)return;const a=c.profile.whoAmI||[],s=a.findIndex(o=>o.id===t),i=s+e;if(s<0||i<0||i>=a.length)return;const[n]=a.splice(s,1);a.splice(i,0,n),k()},removeWhoAmI(t){c.profile.locked||(c.profile.whoAmI=(c.profile.whoAmI||[]).filter(e=>e.id!==t),k())},addLifeArea(t){if(c.profile.locked)return{ok:!1,reason:"Profile is locked"};const e=String(t||"").trim().slice(0,60);if(!e)return{ok:!1,reason:"Name the life area"};if((c.profile.lifeAreas||[]).length>=20)return{ok:!1,reason:"Max 20 areas"};const a={id:B("a"),title:e,description:""};return c.profile.lifeAreas.push(a),k(),{ok:!0,id:a.id}},updateLifeArea(t,e={}){if(c.profile.locked)return;const a=(c.profile.lifeAreas||[]).find(s=>s.id===t);a&&(e.title!=null&&(a.title=String(e.title).trim().slice(0,60)||a.title),e.description!=null&&(a.description=String(e.description).slice(0,1e3)),k())},moveLifeArea(t,e){if(c.profile.locked)return;const a=c.profile.lifeAreas||[],s=a.findIndex(o=>o.id===t),i=s+e;if(s<0||i<0||i>=a.length)return;const[n]=a.splice(s,1);a.splice(i,0,n),k()},removeLifeArea(t){c.profile.locked||(c.profile.lifeAreas=(c.profile.lifeAreas||[]).filter(e=>e.id!==t),k())},addProfileGoal(t,e,a){if(c.profile.locked)return{ok:!1,reason:"Profile is locked"};const s=String(t||"").trim().slice(0,200);if(!s)return{ok:!1,reason:"Write your goal first"};const i=Vt.includes(e)?e:"short",n=yt[i],o=n.includes(a)?a:n[0];if((c.profile.pGoals||[]).length>=100)return{ok:!1,reason:"Too many goals (100)"};const r={id:B("g"),text:s,term:i,duration:o,createdAt:new Date().toISOString()};return c.profile.pGoals.push(r),k(),{ok:!0,id:r.id}},updateProfileGoal(t,e={}){if(c.profile.locked)return;const a=(c.profile.pGoals||[]).find(s=>s.id===t);if(a){if(e.text!=null&&(a.text=String(e.text).trim().slice(0,200)||a.text),e.term!=null&&Vt.includes(e.term)){a.term=e.term;const s=yt[a.term];s.includes(a.duration)||(a.duration=s[0])}e.duration!=null&&yt[a.term].includes(e.duration)&&(a.duration=e.duration),k()}},removeProfileGoal(t){c.profile.locked||(c.profile.pGoals=(c.profile.pGoals||[]).filter(e=>e.id!==t),k())},addQuote(t,e){if(c.profile.locked)return{ok:!1,reason:"Profile is locked"};const a=String(t||"").trim().slice(0,500);if(!a)return{ok:!1,reason:"Write the quote first"};if((c.profile.quotes||[]).length>=200)return{ok:!1,reason:"Too many quotes (200)"};const s={id:B("q"),text:a,author:String(e||"").trim().slice(0,80),fav:!1,createdAt:new Date().toISOString()};return c.profile.quotes.push(s),k(),{ok:!0,id:s.id}},updateQuote(t,e={}){if(c.profile.locked)return;const a=(c.profile.quotes||[]).find(s=>s.id===t);a&&(e.text!=null&&(a.text=String(e.text).trim().slice(0,500)||a.text),e.author!=null&&(a.author=String(e.author).trim().slice(0,80)),k())},toggleQuoteFav(t){if(c.profile.locked)return;const e=(c.profile.quotes||[]).find(a=>a.id===t);e&&(e.fav=!e.fav,k())},removeQuote(t){c.profile.locked||(c.profile.quotes=(c.profile.quotes||[]).filter(e=>e.id!==t),k())},getCategories(){return Z().map(t=>({...t}))},getCustomCategories(){return F.map(t=>({...t}))},addCategory(t){const e=String(t||"").trim().slice(0,30);if(!e)return{ok:!1,reason:"Type a category name"};if(Z().some(i=>i.label.toLowerCase()===e.toLowerCase()))return{ok:!1,reason:"That category already exists"};if(F.length>=20)return{ok:!1,reason:"Too many categories (max 20 custom)"};let s=`c${Date.now().toString(36)}`;return Z().some(i=>i.id===s)&&(s=`c${Date.now().toString(36)}${Math.floor(Math.random()*99)}`),F.push({id:s,label:e}),k(),{ok:!0,id:s}},renameCategory(t,e){const a=F.find(n=>n.id===t);if(!a)return{ok:!1,reason:"Built-in categories can’t be renamed"};const s=String(e||"").trim().slice(0,30);return s?Z().some(n=>n.id!==t&&n.label.toLowerCase()===s.toLowerCase())?{ok:!1,reason:"That category already exists"}:(a.label=s,k(),{ok:!0}):{ok:!1,reason:"Type a category name"}},updateCategory(t,e={}){const a=F.find(s=>s.id===t);if(!a){if(!At.find(n=>n.id===t))return{ok:!1,reason:"Category not found"};const i={...X[t]||{}};return e.color!==void 0&&(i.color=String(e.color).slice(0,20)),e.goals!==void 0&&(i.goals=String(e.goals).slice(0,1e3)),X[t]=i,c.categoryOverrides=X,k(),{ok:!0}}return e.color!==void 0&&(a.color=String(e.color).slice(0,20)),e.goals!==void 0&&(a.goals=String(e.goals).slice(0,1e3)),k(),{ok:!0}},deleteCategory(t){const e=F.findIndex(a=>a.id===t);return e<0?{ok:!1,reason:"Built-in categories can’t be deleted"}:(F.splice(e,1),c.habits.forEach(a=>{a.category===t&&(a.category="mentally")}),(c.archivedHabits||[]).forEach(a=>{a.category===t&&(a.category="mentally")}),c.pinnedTasks.forEach(a=>{a.category===t&&(a.category="mentally")}),Object.values(c.days).forEach(a=>{(a.tasks||[]).forEach(s=>{s.category===t&&(s.category="mentally")})}),k(),{ok:!0})},getAllTags(){const t=new Map,e=a=>{D(a).forEach(s=>{t.set(s,(t.get(s)||0)+1)})};return c.habits.forEach(a=>e(a.tags)),(c.archivedHabits||[]).forEach(a=>e(a.tags)),c.pinnedTasks.forEach(a=>e(a.tags)),Object.values(c.days).forEach(a=>{(a.tasks||[]).forEach(s=>e(s.tags))}),[...t.entries()].map(([a,s])=>({tag:a,count:s})).sort((a,s)=>s.count-a.count||a.tag.localeCompare(s.tag))},renameTag(t,e){const a=String(t||"").trim(),s=D(e)[0]||"";if(!a||!s)return{ok:!1,reason:"Type a tag name"};if(a.toLowerCase()===s.toLowerCase()){const o=r=>D((r||[]).map(d=>String(d).toLowerCase()===a.toLowerCase()?s:d));return c.habits.forEach(r=>{r.tags=o(r.tags)}),(c.archivedHabits||[]).forEach(r=>{r.tags=o(r.tags)}),c.pinnedTasks.forEach(r=>{r.tags=o(r.tags)}),Object.values(c.days).forEach(r=>{(r.tasks||[]).forEach(d=>{d.tags=o(d.tags)})}),k(),{ok:!0}}const i=this.getAllTags().some(o=>o.tag.toLowerCase()===s.toLowerCase()),n=o=>{const r=(o||[]).map(d=>String(d).toLowerCase()===a.toLowerCase()?s:d);return D(r)};return c.habits.forEach(o=>{o.tags=n(o.tags)}),(c.archivedHabits||[]).forEach(o=>{o.tags=n(o.tags)}),c.pinnedTasks.forEach(o=>{o.tags=n(o.tags)}),Object.values(c.days).forEach(o=>{(o.tasks||[]).forEach(r=>{r.tags=n(r.tags)})}),k(),{ok:!0,merged:i}},deleteTag(t){const e=String(t||"").trim().toLowerCase();if(!e)return{ok:!1,reason:"Pick a tag first"};const a=s=>(s||[]).filter(i=>String(i).toLowerCase()!==e);return c.habits.forEach(s=>{s.tags=a(s.tags)}),(c.archivedHabits||[]).forEach(s=>{s.tags=a(s.tags)}),c.pinnedTasks.forEach(s=>{s.tags=a(s.tags)}),Object.values(c.days).forEach(s=>{(s.tasks||[]).forEach(i=>{i.tags=a(i.tags)})}),k(),{ok:!0}},addTagToHabit(t,e){const a=c.habits.find(i=>i.id===t);if(!a)return{ok:!1,reason:"Pick a habit first"};const s=D(e)[0]||"";return s?(a.tags=D([...a.tags||[],s]),k(),{ok:!0}):{ok:!1,reason:"Type a tag name"}},categoryChart(t,e){const a=["week","month","year"].includes(t)?t:"week",s=`${a}|${e}|${Je}`;return _t.key===s?_t.value:at(()=>this._buildCategoryChart(a,e,s))},_buildCategoryChart(t,e,a){const s=Z(),i=[];if(t==="year"){const m=String(e).slice(0,4);for(let w=0;w<12;w++){const p=String(w+1).padStart(2,"0"),$=new Date(Number(m),w+1,0).getDate();i.push({label:new Date(Number(m),w,1).toLocaleDateString(void 0,{month:"short"}),title:new Date(Number(m),w,1).toLocaleDateString(void 0,{month:"long",year:"numeric"}),keys:this.rangeKeys(`${m}-${p}-01`,`${m}-${p}-${String($).padStart(2,"0")}`)})}}else{const[m,w]=this.resolveRange(t,e);this.rangeKeys(m,w).forEach(p=>{const $=new Date(`${p}T00:00:00`);i.push({label:t==="week"?$.toLocaleDateString(void 0,{weekday:"narrow"}):String($.getDate()),title:p,keys:[p]})})}const n={},o={};s.forEach(m=>{n[m.id]=i.map(()=>0),o[m.id]=0}),i.forEach((m,w)=>{m.keys.forEach(p=>{this.categoryBreakdown(p).forEach($=>{$.id in n||(n[$.id]=i.map(()=>0),o[$.id]=0),n[$.id][w]+=$.earned||0,o[$.id]+=$.earned||0})})});const r=i.map((m,w)=>s.reduce((p,$)=>p+(n[$.id]?n[$.id][w]:0),0)),d=Math.max(1,...r),l={kind:t,labels:i.map(m=>m.label),titles:i.map(m=>m.title),cats:s.map(m=>({...m})),perCat:n,totals:o,max:d,grandTotal:r.reduce((m,w)=>m+w,0)};return _t={key:a,value:l},l},getGoals(){return c.goals},getBadges(){return[...c.badges].sort((t,e)=>{const a=he(e.tier)-he(t.tier);return a!==0?a:String(e.earnedAt).localeCompare(String(t.earnedAt))})},topBadges(t=3){return this.getBadges().slice(0,t)},addGoal(t={}){const e=zt({...t,id:it("g")});return c.goals.push(e),k(),this.checkGoals(q()),e},updateGoal(t,e={}){const a=c.goals.find(i=>i.id===t);if(!a)return;const s=zt({...a,...e,id:t});Object.assign(a,s),k(),this.checkGoals(q())},removeGoal(t){c.goals=c.goals.filter(e=>e.id!==t),k()},removeBadge(t){c.badges=c.badges.filter(e=>e.id!==t),k()},perfectDaysCount(){return at(()=>Object.keys(c.days).filter(t=>{const e=this.scoreFor(t);return e.max>0&&e.percent===100}).length)},taskStreak(t,e){let a=e,s=0;(o=>{const r=c.days[o];return!r||!Array.isArray(r.tasks)?!1:r.tasks.some(d=>d.sourcePinId===t&&d.done)})(a)||(a=ht(a));let n=0;for(;s<400;){s+=1;const o=c.days[a];if(!o||!Array.isArray(o.tasks))break;if(o.tasks.some(r=>r.sourcePinId===t&&r.done)){n+=1,a=ht(a);continue}break}return n},goalProgress(t,e){const a=e||q();if(t.kind==="habit-streak"){const i=this.habitStreak(t.targetId,a);return{current:i,target:t.targetDays,done:i>=t.targetDays}}if(t.kind==="task-streak"){const i=this.taskStreak(t.targetId,a);return{current:i,target:t.targetDays,done:i>=t.targetDays}}const s=this.perfectDaysCount();return{current:s,target:t.targetDays,done:s>=t.targetDays}},checkGoals(t){const e=t||q();let a=[];return c.goals.forEach(s=>{if(c.badges.some(n=>n.goalId===s.id))return;if(this.goalProgress(s,e).done){const n={id:it("b"),goalId:s.id,title:s.title,tier:s.tier,rewardTitle:s.rewardTitle,earnedAt:new Date().toISOString()};c.badges.push(n),a.push(n)}}),a.length&&k(),a},scoreFor(t){return at(()=>this._scoreFor(t))},_scoreFor(t){const e=this.getDay(t),a=this.getHabits(t),s=this.isLocked(t),i=c.settings.showConscious!==!1,n=a.reduce((S,f)=>{const T=this.habitRating(t,f.id);return S+Math.round(f.points*T/5)},0),o=i?a.reduce((S,f)=>S+(this.habitRating(t,f.id)>0?W(f.consciousPoints):0),0):0,r=e.tasks.reduce((S,f)=>S+(f.done?f.points:0),0),d=a.reduce((S,f)=>S+f.points,0),l=i?a.reduce((S,f)=>S+W(f.consciousPoints),0):0,m=e.tasks.reduce((S,f)=>S+f.points,0),w=n+o+r,p=d+l+m,$=a.filter(S=>e.habitMissed&&e.habitMissed[S.id]?!0:s&&this.habitRating(t,S.id)<=0).length,L=e.tasks.filter(S=>S.done?!1:S.missed===!0?!0:S.missed===!1?!1:s).length;return{earned:w,max:p,habitScore:n,consciousScore:o,maxConscious:l,taskScore:r,completedHabits:a.filter(S=>this.habitRating(t,S.id)>0).length,habitAvg:a.length?Math.round(a.reduce((S,f)=>S+this.habitRating(t,f.id),0)/a.length*10)/10:0,totalHabits:a.length,completedTasks:e.tasks.filter(S=>S.done).length,totalTasks:e.tasks.length,missedHabits:$,missedTasks:L,percent:p?Math.round(w/p*100):0,locked:s,submittedAt:e.submittedAt}},monthKeys(t){const e=String(t).slice(0,7);return Object.keys(c.days).filter(a=>a.startsWith(e)).sort()},rangeKeys(t,e){const a=[],s=new Date(`${t}T00:00:00`),i=new Date(`${e}T00:00:00`);let n=0;for(;s<=i&&n<732;)n+=1,a.push(q(s)),s.setDate(s.getDate()+1);return a},resolveRange(t,e){if(t==="day")return[e,e];if(t==="week"){const s=new Date(`${e}T00:00:00`),i=new Date(s);i.setDate(s.getDate()-(s.getDay()-this.getWeekStart()+7)%7);const n=new Date(i);return n.setDate(i.getDate()+6),[q(i),q(n)]}if(t==="month"){const[s,i]=e.split("-").map(Number),n=`${s}-${String(i).padStart(2,"0")}-01`,o=new Date(s,i,0).getDate(),r=`${s}-${String(i).padStart(2,"0")}-${String(o).padStart(2,"0")}`;return[n,r]}if(t==="year"){const s=e.slice(0,4);return[`${s}-01-01`,`${s}-12-31`]}const a=Object.keys(c.days).sort();return a.length?[a[0],a[a.length-1]>e?a[a.length-1]:e]:[e,e]},exportRows(t,e){return at(()=>this._exportRows(t,e))},_exportRows(t,e){return this.rangeKeys(t,e).map(a=>{const s=this.getDay(a),i=this.getHabits(a),n=this.scoreFor(a),o=this.isLocked(a),r=(l,m)=>m>0?"done":o?"missed":"pending",d=l=>l.done?"done":o?"missed":"pending";return{date:a,earned:n.earned,max:n.max,percent:n.percent,habitScore:n.habitScore,consciousScore:n.consciousScore||0,taskScore:n.taskScore,locked:o,missedHabits:n.missedHabits||0,missedTasks:n.missedTasks||0,note:s.note||"",habits:i.map(l=>{const m=this.habitRating(a,l.id);return{name:l.name,description:String(l.description||""),category:et(E(l.category)),tags:D(l.tags),points:l.points,consciousPoints:this.consciousEnabled()?W(l.consciousPoints):0,rating:m,earned:Math.round(l.points*m/5)+(m>0&&this.consciousEnabled()?W(l.consciousPoints):0),status:r(l.id,m)}}),tasks:s.tasks.map(l=>({title:l.title,category:et(E(l.category)),tags:D(l.tags),points:l.points,rating:Math.max(0,Math.min(5,Number(l.rating)||0)),done:!!l.done,earned:l.done?l.points:0,status:l.forwardedFrom?`forwarded from ${l.forwardedFrom}`:d(l),forwardedFrom:l.forwardedFrom||"",forwardedTo:Array.isArray(l.forwardedTo)?l.forwardedTo:[],description:l.description||"",hasImage:!!l.image}))}})},history(t=14){return at(()=>Object.keys(c.days).sort().reverse().slice(0,t).map(a=>({date:a,...this.scoreFor(a),note:c.days[a].note,locked:vt(a),submittedAt:c.days[a].submittedAt})))},week(t){return at(()=>{const e=new Date(t);return e.setDate(e.getDate()-(e.getDay()-this.getWeekStart()+7)%7),e.setHours(0,0,0,0),Array.from({length:7},(a,s)=>{const i=new Date(e);i.setDate(e.getDate()+s);const n=q(i),o=c.days[n];return{date:n,label:i.toLocaleDateString(void 0,{weekday:"short"}),dayOfMonth:i.getDate(),hasRecord:!!o,note:String(o&&o.note||""),locked:vt(n),...this.scoreFor(n)}})})}};function Ze(t){return t>=90?"Excellent":t>=75?"Great day":t>=50?"Keep going":t>0?"Started":"No score yet"}function V(t){return new Date(`${t}T00:00:00`).toLocaleDateString(void 0,{weekday:"long",month:"short",day:"numeric"})}function Ha(t){return t?new Date(t).toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"}):""}function Nt(t){return t>=5?"Excellent":t>=4?"Great":t>=3?"Good":t>=2?"Fair":t>=1?"Low":"Not rated"}const Gt=document.getElementById("app"),Ke="daily-report-2026-10-04T20-48-12-muuam3dy",Ma=`v1.1 — Auto-update · Offline · Backup (${Ke.slice(-8)})`;let y=u.todayKey(),M="today",x=null,v=null,z=!1,rt=!1,Ht=!1,ut=null,st=!1,Kt=!1,te=null,nt="Idle.",U="week",Mt=null,O="month",It=null,I=[],K=0,H=null,N="boot",ct=null;const ot=new Set,mt=new Map;let wt=!1,Et="all",Q="short",gt="1 Week";window.addEventListener("beforeinstallprompt",t=>{t.preventDefault(),ut=t});window.addEventListener("appinstalled",()=>{ut=null,h("Daily Report installed"),b()});const Ia=[["default","Default"],["points","Points"],["category","Category"],["tags","Tags"],["custom","Custom"]];function Te(t){const e=new Date(`${y}T00:00:00`);e.setDate(e.getDate()+t),y=u.todayKey(e)}let qt=u.todayKey();function le(){const t=u.todayKey();if(t===qt)return!1;const e=qt;return qt=t,y===e&&(y=t),Mt=null,It=null,I=[],K=0,!0}function P(t){return{home:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1z"/></svg>',profile:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-6 8-6s8 2 8 6"/></svg>',history:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 8v5l3 2"/><circle cx="12" cy="12" r="9"/></svg>',settings:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H8a1.7 1.7 0 0 0 1-1.5V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V8c.3.7.9 1.2 1.6 1.3H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1.7z"/></svg>',pin:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 4h6l-1 7 3 3v2H7v-2l3-3z" fill="currentColor" stroke="none"/><path d="M12 16v5"/></svg>',forward:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',undo:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9h11a5 5 0 0 1 0 10H8"/><path d="M8 5 4 9l4 4"/></svg>',habit:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7h16M4 12h10M4 17h13"/></svg>',archive:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7h18v4H3zM5 11v9h14v-9M9.5 15h5"/></svg>',trash:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16M9 7V5h6v2M6 7l1 13h10l1-13M10 11v6M14 11v6"/></svg>',grip:'<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><circle cx="9" cy="6" r="1.7"/><circle cx="15" cy="6" r="1.7"/><circle cx="9" cy="12" r="1.7"/><circle cx="15" cy="12" r="1.7"/><circle cx="9" cy="18" r="1.7"/><circle cx="15" cy="18" r="1.7"/></svg>'}[t]}function ta(t,e,a){return`
    <div class="stars" data-habit="${t}">
      ${[1,2,3,4,5].map(s=>`
            <button type="button" class="star ${s<=e?"on":""}" data-action="rate-habit" data-id="${t}" data-rating="${s}" ${a?"disabled":""} aria-label="${s} star">★</button>
          `).join("")}
    </div>
  `}function ea(t,e,a){return`
    <div class="stars stars-small" data-task="${t}">
      ${[1,2,3,4,5].map(s=>`
            <button type="button" class="star small ${s<=e?"on":""}" data-action="rate-task" data-id="${t}" data-rating="${s}" ${a?"disabled":""} aria-label="${s} star">★</button>
          `).join("")}
    </div>
  `}function aa(t){const e=Number(t)||0;return e?`<span class="conscious-badge">🧠 +${e}</span>`:'<span class="item-meta">No conscious pts</span>'}const Ra=["mentally","psychology","physically","spiritually","socially"];function dt(t){const a=u.getCategories().find(n=>n.id===t),s=a&&a.color?a.color:_(t);return`<span class="cat-badge ${Ra.includes(t)?`cat-${t}`:"cat-custom"}" style="background:${s}22;color:${s};box-shadow:inset 0 0 0 1px ${s}55">${g(et(t))}</span>`}function ee(t){const e=String(t||"");if(!e)return"Deleted";const a=new Date(e);return Number.isNaN(a.getTime())?"Deleted":`Deleted ${a.toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})}`}const De={mentally:"#5b8cff",psychology:"#a06bff",physically:"#22b07d",spiritually:"#e8a51c",socially:"#14b8a6"},Pe=["#f472b6","#38bdf8","#fb923c","#a3e635","#facc15","#e879f9"];function _(t,e){const s=u.getCategories().find(i=>i.id===t);return s&&s.color?s.color:De[t]?De[t]:Pe[(e??0)%Pe.length]}function tt(t){const e=Array.isArray(t)?t.filter(Boolean):[];return e.length?`<div class="tag-row">${e.map(a=>`<span class="tag-chip">#${g(a)}</span>`).join("")}</div>`:""}function ia(t){return!t||!t.image?"":`<button type="button" class="task-img-thumb" data-action="view-task-image" data-id="${t.id}" aria-label="View attached photo"><img src="${t.image}" alt="Task photo" loading="lazy" /></button>`}function sa(t){const e=String(t||"");if(!e.trim())return"";const a=e.split(`
`),s=/^\s*(?:•|-|[*])\s+(.*)$/,i=/^\s*\d+[.)]\s+(.*)$/;let n="",o=null;const r=()=>{o&&(n+=o==="ul"?"</ul>":"</ol>",o=null)};return a.forEach(d=>{const l=s.exec(d),m=!l&&i.exec(d);l?(o!=="ul"&&(r(),n+='<ul class="note-list">',o="ul"),n+=`<li>${g(l[1])||"&nbsp;"}</li>`):m?(o!=="ol"&&(r(),n+='<ol class="note-list">',o="ol"),n+=`<li>${g(m[1])||"&nbsp;"}</li>`):d.trim()?(r(),n+=`<p class="note-text">${g(d)}</p>`):(r(),n+='<p class="note-text">&nbsp;</p>')}),r(),n}function ja(t){const e=sa(t);return e?`<div class="note" style="margin-top:10px">${e}</div>`:""}function St(t){return String(t||"").split(`
`).map(e=>e.replace(/^\s*(?:•|-|\*|\d+[.)])\s*/,"").trim()).filter(Boolean)}function xt(t){return t.map(e=>`• ${e}`).join(`
`)}function Ce(t,e){const a=String(t||"").split(`
`).map(s=>s.replace(/^\s*(?:•|-|\*)\s+/,"").trim()).filter(Boolean);return a.length?`<ul class="note-list idea-list">${a.map((s,i)=>`
        <li>
          <span>${g(s)}</span>
          ${e?"":`<button class="idea-remove" data-action="remove-idea" data-index="${i}" title="Remove idea" aria-label="Remove idea">✕</button>`}
        </li>`).join("")}</ul>`:""}function na(t,e,a){if(!t||t.disabled)return;const s=t.value||"",i=s.split(`
`),n=s.slice(0,t.selectionStart).split(`
`).length-1,o=s.slice(0,t.selectionEnd).split(`
`).length-1,r=t.selectionStart!==t.selectionEnd,d=r?n:0,l=r?o:i.length-1;if(e==="bullets"){const m=i.slice(d,l+1).every(w=>/^\s*(?:•|-|[*])\s+/.test(w)||!w.trim());for(let w=d;w<=l;w++)i[w].trim()&&(m?i[w]=i[w].replace(/^\s*(?:•|-|[*])\s+/,""):/^\s*(?:•|-|[*])\s+/.test(i[w])||(i[w]=`• ${i[w].replace(/^\s*/,"")}`))}else{const m=i.slice(d,l+1).every(p=>/^\s*\d+[.)]\s+/.test(p)||!p.trim());let w=1;for(let p=d;p<=l;p++){if(!i[p].trim())continue;const $=i[p].replace(/^\s*(?:\d+[.)]|•|-|[*])\s+/,"").replace(/^\s*/,"");i[p]=m?$:`${w}. ${$}`,w+=1}}t.value=i.join(`
`),a&&a(t.value);try{t.focus()}catch{}}function Ee(t){na(document.getElementById("day-note"),t,e=>u.setNote(y,e))}function Le(t){na(document.getElementById("profile-values"),t,e=>u.setProfileField("values",e))}function Fa(t){return new Promise(e=>{if(!t||!String(t.type||"").startsWith("image/"))return e(null);const a=URL.createObjectURL(t),s=new Image,i=()=>{try{URL.revokeObjectURL(a)}catch{}},n=(o,r)=>new Promise(d=>{let l=s.naturalWidth||0,m=s.naturalHeight||0;if(!l||!m)return d(null);const w=Math.min(1,o/Math.max(l,m));l=Math.max(1,Math.round(l*w)),m=Math.max(1,Math.round(m*w));const p=document.createElement("canvas");p.width=l,p.height=m;try{p.getContext("2d").drawImage(s,0,0,l,m),d(p.toDataURL("image/jpeg",r))}catch{d(null)}});s.onload=async()=>{try{let o=await n(900,.72);o&&o.length>Ct&&(o=await n(600,.62)),o&&o.length>Ct&&(o=await n(400,.55)),i(),e(o&&o.length<=Ct?o:null)}catch{i(),e(null)}},s.onerror=()=>{i(),e(null)},s.src=a})}function Ne(t,e){return`
    <select class="sort-select" data-sort-kind="${t}" aria-label="Sort ${t}">
      ${Ia.map(([a,s])=>`<option value="${a}" ${e===a?"selected":""}>${s}</option>`).join("")}
    </select>
  `}function Oa(t){const e=u.getBadges(),a=u.topBadges(3),s=t.max>0&&t.percent===100,i=Ht?e:a;return`
    <section class="section rewards-section">
      <div class="section-head">
        <h2>Rewards</h2>
        ${e.length>3?`<button class="ghost-btn compact" data-action="toggle-badges">${Ht?"Show less":`More (${e.length}) ›`}</button>`:""}
      </div>
      ${s?`
        <div class="trophy-card">
          <div class="trophy-cup">🏆</div>
          <div>
            <div class="item-title">Gold Cup — Perfect day!</div>
            <div class="item-meta">100% of points on ${V(y)}</div>
          </div>
        </div>
      `:""}
      ${e.length?`
        <div class="rewards-grid">
          ${i.map(n=>`
            <article class="reward-card tier-${n.tier}">
              <div class="reward-medal">${Ut(n.tier)}</div>
              <div>
                <div class="item-title">${g(n.rewardTitle||n.title)}</div>
                <div class="item-meta">${g(n.title)} · ${Ue(n.tier)} · ${V((n.earnedAt||"").slice(0,10))}</div>
              </div>
            </article>
          `).join("")}
        </div>
      `:'<div class="empty">No rewards yet. Set a goal in Settings → Goals &amp; Rewards.</div>'}
    </section>
  `}function Rt(t){return`<span class="streak-badge">${t} day streak</span>`}function oa(t){return t?`<span class="forward-badge from">↩ Forwarded from ${g(t)}</span>`:""}function jt(t){const e=Array.isArray(t)?t.filter(Boolean):[];return e.length?`<span class="forward-badge to">↪ Forwarded to ${g(e[e.length-1])}</span>`:""}function Ba(t){const e=new Date(`${t}T00:00:00`);return e.setDate(e.getDate()+1),u.todayKey(e)}function ae(){return`<button class="ghost-btn compact ${z?"on":""}" data-action="toggle-edit">${z?"Done":"Edit Mode"}</button>`}function _a(t){return t?'<span class="lock-badge">Locked</span>':'<span class="open-badge">Open</span>'}function Ga(){u.checkGoals(y);const t=u.getDay(y),e=u.getSettings(),a=e.showConscious!==!1,s=u.getHabits(y),i=u.getTasks(y),n=u.scoreFor(y),o=Ze(n.percent),r=y===u.todayKey(),d=u.isLocked(y);return`
    <div class="topbar">
      <div>
        <p class="kicker">${r?"Today":"Daily report"}</p>
        <h1>${V(y)}</h1>
      </div>
      <div class="date-nav">
        <button class="icon-btn" data-action="prev-day" aria-label="Previous day">‹</button>
        <button class="icon-btn" data-action="next-day" aria-label="Next day">›</button>
      </div>
    </div>

    <section class="score-hero ${d?"is-locked":""}">
      <div class="score-row">
        <div>
          <div class="score-value">${n.earned}</div>
          <div class="score-unit">of ${n.max||0} points</div>
        </div>
        <div class="hero-side">
          ${_a(d)}
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
        ${d?`Submitted${t.submittedAt?` at ${Ha(t.submittedAt)}`:""}.${(n.missedHabits||0)+(n.missedTasks||0)>0?` ${(n.missedHabits||0)+(n.missedTasks||0)} missed (${n.missedHabits||0} habits, ${n.missedTasks||0} tasks) — unchecked items count as missed.`:" Nothing missed — all done."} Unlock in Settings to edit.`:`Auto-locks at ${e.lockTime}. Submit when the day is done. Unchecked items will count as missed once locked.`}
      </p>
      ${d?'<button class="ghost-btn full" data-action="goto-settings">Unlock in Settings</button>':'<button class="primary-btn full" data-action="submit-day">Submit and lock report</button>'}
      <div class="export-row">
        <span class="muted">Export:</span>
        <button class="ghost-btn compact" data-action="open-export">Excel / JSON / PDF</button>
      </div>
    </section>

    ${Oa(n)}

    <section class="section">
      <div class="section-head">
        <h2>Habits</h2>
        <div class="head-actions">
          ${Ne("habit",e.habitSort||"default")}
          ${ae()}
          <span class="points">+${n.habitScore}${a&&n.consciousScore?` +${n.consciousScore}🧠`:""} pts</span>
        </div>
      </div>
      ${["default","custom"].includes(e.habitSort||"default")&&s.length>1?'<p class="muted tight">Hold the grip button on a card, then drag it to a new spot.</p>':""}
      <div class="list">
        ${s.length?s.map(l=>{const m=u.habitRating(y,l.id),w=m>0,p=!w&&d,$=u.habitStreak(l.id,y),L=a&&Number(l.consciousPoints)||0;return`
                    <article class="item-card ${w?"done":""} ${p?"missed":""} ${d?"is-locked":""}" style="border-left:3px solid ${_(l.category)}" data-sortable="habit" data-id="${l.id}">
                      <button class="check" data-action="toggle-habit" data-id="${l.id}" ${d?"disabled":""}>✓</button>
                      <div class="item-body">
                        <div class="item-title">${g(l.name)} ${p?'<span class="missed-badge">Missed</span>':""}</div>
                        <div class="item-meta">${dt(l.category)} ${l.pin?pt(l.pin):"Not pinned"} · ${m?`${m}/5 ${Nt(m)}`:d?"Missed":"Not rated"}</div>
                        ${l.description?`<p class="item-desc">${g(l.description)}</p>`:""}
                        ${a?`<div class="item-meta">${Rt($)} ${aa(L)}</div>`:`<div class="item-meta">${Rt($)}</div>`}
                        ${jt(u.habitForwardedTo(y,l.id))}
                        ${tt(l.tags)}
                        ${ta(l.id,m,d)}
                      </div>
                      <div class="item-side">
                        <div class="points">+${l.points}${L?` +${L}🧠`:""}</div>
                      </div>
                      <div class="item-actions">
                        <button class="drag-handle" aria-label="Hold and drag to reorder" title="Hold and drag to reorder" ${d?"disabled":""}>${P("grip")}</button>
                        <div class="mini-actions">
                          ${z?`<button class="mini-btn on" data-action="open-edit-habit" data-id="${l.id}" ${d?"disabled":""}>Edit</button>`:""}
                          <button class="mini-btn" data-action="open-forward-habit" data-id="${l.id}" ${d?"disabled":""} title="Forward habit to another day">${P("forward")}</button>
                          <button class="mini-btn ${l.pin?"on":""}" data-action="open-pin-habit" data-id="${l.id}" ${d?"disabled":""} title="Pin habit">${P("pin")}</button>
                          <button class="mini-btn" data-action="archive-habit" data-id="${l.id}" ${d?"disabled":""} title="Archive habit" aria-label="Archive habit">${P("archive")}</button>
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
          ${Ne("task",e.taskSort||"default")}
          ${ae()}
          <span class="points">+${n.taskScore} pts</span>
        </div>
      </div>
      ${["default","custom"].includes(e.taskSort||"default")&&i.length>1?'<p class="muted tight">Hold the grip button on a card, then drag it to a new spot.</p>':""}
      <div class="list">
        ${i.length?i.map(l=>{const m=!!l.sourcePinId,w=m?u.findPinnedTask(l.sourcePinId):null,p=Math.max(0,Math.min(5,Number(l.rating)||0)),$=!l.done&&d;return`
                    <article class="item-card ${l.done?"done":""} ${$?"missed":""} ${d?"is-locked":""}" style="border-left:3px solid ${_(l.category)}" data-sortable="task" data-id="${l.id}">
                      <button class="check" data-action="toggle-task" data-id="${l.id}" ${d?"disabled":""}>✓</button>
                      <div class="item-body">
                        <div class="item-title">${g(l.title)} ${$?'<span class="missed-badge">Missed</span>':""}</div>
                        <div class="item-meta">${dt(l.category)} ${w?pt(w.pin):"One-time task"} · ${l.done?"Done":d?"Missed":"Pending"} · ${p?`${p}/5 ${Nt(p)}`:"No rating"}</div>
                        ${l.description?`<p class="item-desc">${g(l.description)}</p>`:""}
                        ${oa(l.forwardedFrom)}
                        ${jt(l.forwardedTo)}
                        ${tt(l.tags)}
                        ${l.image?'<span class="task-img-badge">📷 Photo attached</span>':""}
                        ${ia(l)}
                        ${ea(l.id,p,d)}
                      </div>
                      <div class="item-side">
                        <div class="points">+${l.points}</div>
                      </div>
                      <div class="item-actions">
                        <button class="drag-handle" aria-label="Hold and drag to reorder" title="Hold and drag to reorder" ${d?"disabled":""}>${P("grip")}</button>
                        <div class="mini-actions">
                          ${z?`<button class="mini-btn on" data-action="open-edit-task" data-id="${l.id}" ${d?"disabled":""}>Edit</button>`:""}
                          <button class="mini-btn" data-action="open-forward-task" data-id="${l.id}" ${d?"disabled":""} title="Forward task to another day">${P("forward")}</button>
                          <button class="mini-btn ${m?"on":""}" data-action="open-pin-task" data-id="${l.id}" ${d?"disabled":""} title="Pin task">${P("pin")}</button>
                          <button class="mini-btn" data-action="archive-task" data-id="${l.id}" ${d?"disabled":""} title="Archive task" aria-label="Archive task">${P("archive")}</button>
                          ${z?`<button class="mini-btn danger" data-action="remove-task" data-id="${l.id}" ${d?"disabled":""} title="Delete task" aria-label="Delete task">${P("trash")}</button>`:""}
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

    ${qa()}
  `}function qa(){const t=u.getArchivedHabits(),e=u.getArchivedTasks(),a=t.length+e.length,s=[...e.map(i=>`
      <article class="manage-card archived" style="border-left:4px solid ${_(i.category)}">
        <div class="section-head">
          <div>
            <div class="item-title">${g(i.title)} <span class="archive-kind">Task</span></div>
            <div class="item-meta">${dt(i.category)} · +${i.points} pts${i.fromDate?` · from ${g(i.fromDate)}`:""} · ${ee(i.archivedAt)}</div>
            ${i.description?`<p class="item-desc">${g(i.description)}</p>`:""}
            ${tt(i.tags)}
          </div>
          <div class="mini-actions">
            <button class="mini-btn on" data-action="restore-task" data-id="${i.id}" title="Restore task" aria-label="Restore task">${P("undo")}</button>
            ${z?`<button class="mini-btn danger" data-action="delete-archived-task" data-id="${i.id}" title="Delete permanently" aria-label="Delete permanently">${P("trash")}</button>`:""}
          </div>
        </div>
      </article>
    `),...t.map(i=>`
      <article class="manage-card archived" style="border-left:4px solid ${_(i.category)}">
        <div class="section-head">
          <div>
            <div class="item-title">${g(i.name)} <span class="archive-kind">Habit</span></div>
            <div class="item-meta">${dt(i.category)} · +${i.points} pts${i.pin?` · ${pt(i.pin)}`:" · Pin ended"} · ${ee(i.archivedAt)}</div>
            ${i.description?`<p class="item-desc">${g(i.description)}</p>`:""}
            ${tt(i.tags)}
          </div>
          <div class="mini-actions">
            <button class="mini-btn on" data-action="restore-habit" data-id="${i.id}" title="Restore habit" aria-label="Restore habit">${P("undo")}</button>
            <button class="mini-btn danger" data-action="delete-archived-habit" data-id="${i.id}" title="Delete permanently" aria-label="Delete permanently">${P("trash")}</button>
          </div>
        </div>
      </article>
    `)];return`
    <section class="section archive-section">
      <button type="button" class="archive-head" data-action="toggle-archive" aria-expanded="${rt}">
        <span class="archive-title">${P("archive")} Archive</span>
        <span class="archive-count">${a}</span>
        <span class="archive-chevron" aria-hidden="true">${rt?"▾":"▸"}</span>
      </button>
      ${rt?`<div class="archive-list">${a?s.join(""):'<div class="empty">Nothing archived yet. Use the archive button on a habit or task to set it aside here.</div>'}</div>`:""}
    </section>
  `}function Lt(t){return t==="short"?"#short":t==="medium"?"#medium":"#long"}function Wa(){const t=u.getProfile(),e=!!t.locked,a=e?"disabled":"",s=Array.isArray(t.whoAmI)?t.whoAmI:[],i=Array.isArray(t.lifeAreas)?t.lifeAreas:[],n=Array.isArray(t.pGoals)?t.pGoals:[],o=Array.isArray(t.quotes)?t.quotes:[],r=u.profileGoalDurations();r[Q].includes(gt)||(gt=r[Q][0]);const d=f=>n.filter(T=>T.term===f).length,l=(Et==="all"?n:n.filter(f=>f.term===Et)).slice().sort((f,T)=>String(f.createdAt).localeCompare(String(T.createdAt))),m=o.slice().sort((f,T)=>!!f.fav!=!!T.fav?f.fav?-1:1:String(T.createdAt).localeCompare(String(f.createdAt))),w=m.slice(0,3),p=m.slice(3),$=String(t.name||"?").trim().slice(0,1).toUpperCase()||"?",S=String(t.ideas||"").split(`
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
        <div class="profile-avatar">${g($)}</div>
        <div style="flex:1;min-width:0">
          <div class="item-title" style="font-size:18px">${g(t.name)||"Your name"}</div>
          <div class="item-meta">${s.length?`${s.length} identities`:"No identities yet"} · ${i.length} life areas · ${n.length} goals · ${o.length} quotes</div>
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
        ${s.length?s.map((f,T)=>`
          <article class="manage-card whoami-row">
            <span class="whoami-num">${T+1}</span>
            <input class="whoami-input" data-whoami="${f.id}" maxlength="120" value="${g(f.text)}" ${a} aria-label="Who I am ${T+1}" />
            ${e?"":`
              <div class="mini-actions">
                <button class="mini-btn" data-action="move-whoami" data-id="${f.id}" data-dir="-1" ${T===0?"disabled":""} title="Move up">↑</button>
                <button class="mini-btn" data-action="move-whoami" data-id="${f.id}" data-dir="1" ${T===s.length-1?"disabled":""} title="Move down">↓</button>
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
        <span class="item-meta">${i.length}/20</span>
      </div>
      ${e?"":`
        <div style="display:flex;gap:8px;margin-bottom:10px">
          <input id="new-lifearea" maxlength="60" placeholder="e.g. Health, Family, Career…" style="flex:1;min-width:0" />
          <button class="primary-btn compact-btn" data-action="add-lifearea">Add</button>
        </div>
      `}
      ${i.length?`
        <div class="life-grid">
          ${i.map((f,T)=>{const Pt=ct===f.id;return`
              <article class="life-card ${Pt?"open":""}">
                <div class="life-head">
                  <button type="button" class="life-toggle" data-action="toggle-lifearea" data-id="${f.id}" aria-expanded="${Pt?"true":"false"}">
                    <b>${g(f.title)}</b>
                    <span>${Pt?"▾":"▸"}</span>
                  </button>
                  ${e?"":`
                    <div class="mini-actions">
                      <button class="mini-btn" data-action="move-lifearea" data-id="${f.id}" data-dir="-1" ${T===0?"disabled":""} title="Move up">↑</button>
                      <button class="mini-btn" data-action="move-lifearea" data-id="${f.id}" data-dir="1" ${T===i.length-1?"disabled":""} title="Move down">↓</button>
                    </div>
                  `}
                </div>
                ${Pt?`
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
        ${e?t.values.trim()?`<div class="values-list">${sa(t.values)}</div>`:'<p class="item-meta">No values yet.</p>':`
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
      ${e?S?Ce(t.ideas,!0):'<p class="item-meta">No ideas yet.</p>':`
          <div class="form" style="margin-bottom:10px">
            <label>New idea
              <input id="new-idea" maxlength="200" placeholder="e.g. Build a habit tracker app" />
            </label>
            <div style="display:flex;gap:8px">
              <button class="primary-btn compact-btn" data-action="add-idea">Add idea</button>
            </div>
          </div>
          ${S?`${Ce(t.ideas,!1)}
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
              ${["short","medium","long"].map(f=>`<button type="button" class="chip hashtag-${f} ${Q===f?"on":""}" data-action="set-pgoal-term" data-term="${f}">${Lt(f)}</button>`).join("")}
            </div>
          </div>
          <div class="row-2">
            <label>Timeframe
              <select id="new-pgoal-duration">
                ${r[Q].map(f=>`<option value="${g(f)}" ${gt===f?"selected":""}>${g(f)}</option>`).join("")}
              </select>
            </label>
            <label style="justify-content:flex-end">&nbsp;
              <button class="primary-btn compact-btn" data-action="add-pgoal">Add goal</button>
            </label>
          </div>
          <p class="item-meta">${Q==="short"?"Short term → pick a week (1–4 weeks).":Q==="medium"?"Medium term → pick a month up to 3 months.":"Long term → a year or more."}</p>
        </div>
      `}
      <div class="chip-row" style="margin-bottom:10px">
        ${[["all",`All (${n.length})`],["short",`#short (${d("short")})`],["medium",`#medium (${d("medium")})`],["long",`#long (${d("long")})`]].map(([f,T])=>`<button type="button" class="chip ${Et===f?"on":""}" data-action="set-pgoal-filter" data-filter="${f}">${T}</button>`).join("")}
      </div>
      <div class="habit-manage">
        ${l.length?l.map(f=>`
          <article class="manage-card pgoal-card term-${f.term}">
            <div class="pgoal-top">
              <span class="hashtag hashtag-${f.term}">${Lt(f.term)}</span>
              <span class="duration-pill">⏳ ${g(f.duration)}</span>
              ${e?"":`<button class="mini-btn" data-action="remove-pgoal" data-id="${f.id}" title="Remove goal">✕</button>`}
            </div>
            ${e?`<div class="item-title" style="margin-top:6px">${g(f.text)}</div>`:`
                <input data-pgoal-text="${f.id}" maxlength="200" value="${g(f.text)}" style="margin-top:8px" aria-label="Goal text" />
                <div class="row-2" style="margin-top:8px">
                  <select data-pgoal-term="${f.id}" aria-label="Goal term">
                    ${["short","medium","long"].map(T=>`<option value="${T}" ${f.term===T?"selected":""}>${Lt(T)}</option>`).join("")}
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
          ${w.map(f=>He(f,e)).join("")}
        </div>
        ${p.length?`
          <button class="ghost-btn compact full" data-action="toggle-quotes">${wt?"Show less ▴":`More (${p.length}) — see the rest ▾`}</button>
          ${wt?`<div class="habit-manage" style="margin-top:8px">${p.map(f=>He(f,e)).join("")}</div>`:""}
        `:wt&&!p.length?'<p class="item-meta">No more quotes — that is all of them.</p>':""}
      `:'<div class="empty">No quotes yet — add the words that move you.</div>'}
    </section>
  `}function He(t,e){return`
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
  `}function Ua(){document.querySelectorAll("[data-profile]").forEach(t=>{t.addEventListener("input",()=>{u.setProfileField(t.dataset.profile,t.value)||b()})}),document.querySelectorAll("[data-lifearea-title]").forEach(t=>{t.addEventListener("change",()=>{u.updateLifeArea(t.dataset.lifeareaTitle,{title:t.value}),b()})}),document.querySelectorAll("[data-lifearea-desc]").forEach(t=>{t.addEventListener("input",()=>{u.updateLifeArea(t.dataset.lifeareaDesc,{description:t.value})})}),document.querySelectorAll("[data-pgoal-text]").forEach(t=>{t.addEventListener("change",()=>{u.updateProfileGoal(t.dataset.pgoalText,{text:t.value}),b()})}),document.querySelectorAll("[data-pgoal-term]").forEach(t=>{t.addEventListener("change",()=>{u.updateProfileGoal(t.dataset.pgoalTerm,{term:t.value}),b()})}),document.querySelectorAll("[data-pgoal-duration]").forEach(t=>{t.addEventListener("change",()=>{u.updateProfileGoal(t.dataset.pgoalDuration,{duration:t.value}),b()})})}function za(){const t=u.week(new Date(`${y}T00:00:00`)),e=t.reduce((s,i)=>s+i.earned,0),a=Math.round(e/7);return`
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
                <button class="day-cell ${s.date===y?"active":""} ${s.earned>0?"done":""}" data-action="pick-date" data-date="${s.date}">
                  <span>${s.label.slice(0,2)}</span>
                  <b>${s.earned}</b>
                  ${s.locked?'<i class="dot-lock"></i>':""}
                </button>
              `).join("")}
        </div>
      </section>
    </section>
  `}function Ya(){const t=Mt||R(y),e=me(t),a=u.todayKey();return`
    <section class="section">
      <div class="section-head">
        <h2>Reports calendar</h2>
        <div class="date-nav">
          <button class="icon-btn" data-action="history-cal-nav" data-dir="-1" aria-label="Previous month">‹</button>
          <button class="icon-btn" data-action="history-cal-nav" data-dir="1" aria-label="Next month">›</button>
        </div>
      </div>
      <div class="pin-cal">
        <div class="pin-cal-head"><b>${Ot(t)}</b></div>
        <div class="pin-cal-grid pin-cal-week">
          ${pe().map(s=>`<span>${s.label.slice(0,1)}</span>`).join("")}
        </div>
        <div class="pin-cal-grid">
          ${e.map(s=>{if(!s)return"<span></span>";const i=u.scoreFor(s),n=s===y?"on-selected":i.percent>=100?"on-perfect":i.earned>0?"on":"",o=i.locked?'<i class="dot-lock"></i>':"";return`<button type="button" class="pin-cal-day hist-cal-day ${n} ${s===a?"is-today":""}" data-action="pick-date" data-date="${s}" title="${g(s)}: ${i.earned}/${i.max} pts (${i.percent}%)"><b>${Number(s.slice(8,10))}</b><span>${i.earned}</span>${o}</button>`}).join("")}
        </div>
      </div>
    </section>
  `}function Va(t){const e=new Map((t||[]).map(n=>[n.date,n])),a=It||R(y),s=me(a),i=u.todayKey();return`
    <div class="pin-cal">
      <div class="pin-cal-head"><b>${Ot(a)}</b><span class="item-meta">${e.size} locked</span></div>
      <div class="pin-cal-grid pin-cal-week">
        ${pe().map(n=>`<span>${n.label.slice(0,1)}</span>`).join("")}
      </div>
      <div class="pin-cal-grid">
        ${s.map(n=>{if(!n)return"<span></span>";const o=e.get(n),r=!!o,d=I.includes(n)?"on-selected":r?"on-locked":"on-open",l=u.scoreFor(n),m=o?o.earned:l.earned;return`<button type="button" class="pin-cal-day hist-cal-day ${d} ${n===i?"is-today":""}" data-action="toggle-locked-day" data-date="${n}" title="${g(n)}: ${r?"Locked":"Open"} — ${m} pts"><b>${Number(n.slice(8,10))}</b><span>${m}</span></button>`}).join("")}
      </div>
    </div>
  `}function Ja(){return`
    <section class="manage-card export-card">
      <div class="section-head">
        <div>
          <div class="item-title">Select &amp; export</div>
          <div class="item-meta">Pick a day, week, month or year, then a format.</div>
        </div>
      </div>
      <div class="chip-row" style="margin-bottom:10px">
        ${["day","week","month","year"].map(t=>`<button type="button" class="chip ${O===t?"on":""}" data-action="set-histexp-range" data-range="${t}">${t[0].toUpperCase()}${t.slice(1)}</button>`).join("")}
      </div>
      ${O==="day"||O==="week"?`
        <label>Which ${O==="day"?"day":"week (pick any day in it)"}
          <input id="histexp-date" type="date" value="${y}" />
        </label>
      `:""}
      ${O==="month"?`
        <label>Which month
          <input id="histexp-month" type="month" value="${y.slice(0,7)}" />
        </label>
      `:""}
      ${O==="year"?`
        <label>Which year
          <input id="histexp-year" type="number" min="2000" max="2100" value="${y.slice(0,4)}" />
        </label>
      `:""}
      <div class="export-grid" style="margin-top:10px">
        <button class="choose-card" data-action="histexp-do" data-format="csv"><b>Excel (CSV)</b><span>Opens in Excel / Sheets</span></button>
        <button class="choose-card" data-action="histexp-do" data-format="json"><b>JSON</b><span>Raw data backup</span></button>
        <button class="choose-card" data-action="histexp-do" data-format="pdf"><b>PDF</b><span>Print / save as PDF</span></button>
      </div>
    </section>
  `}function Qa(){const t=u.week(new Date(`${y}T00:00:00`)),e=u.todayKey(),a=`${V(t[0].date)} – ${V(t[6].date)}`,s=t.reduce((o,r)=>o+(r.earned||0),0),i=t.reduce((o,r)=>o+(r.max||0),0),n=t.filter(o=>o.hasRecord).length;return`
    <div class="topbar">
      <div>
        <p class="kicker">Archive</p>
        <h1>Past reports</h1>
      </div>
      <button class="ghost-btn compact" data-action="open-export">Export</button>
    </div>
    ${Ya()}
    ${za()}
    ${Ja()}
    <section class="section">
      <div class="section-head">
        <h2>Week</h2>
        <span class="item-meta">${a}</span>
      </div>
      <p class="item-meta">${n} of 7 days reported · ${s} of ${i} pts</p>
      <div class="history-list">
        ${t.map(o=>{const r=!o.hasRecord,d=(o.missedHabits||0)+(o.missedTasks||0),l=r?"No report":`${o.locked?"Locked":"Open"} · ${Ze(o.percent)} · ${o.earned}/${o.max} pts (${o.percent}%)${o.locked&&d>0?` · ❌ ${d} missed`:""}`;return`
              <article class="history-card ${r?"is-empty":""} ${o.date===e?"is-today":""} ${o.date===y?"is-selected":""}">
                <div class="section-head">
                  <div>
                    <div class="item-title">${g(o.label)} ${V(o.date)}</div>
                    <div class="item-meta">${g(l)}</div>
                  </div>
                  <button class="ghost-btn compact" data-action="pick-date" data-date="${o.date}">${r?"Add":"Open"}</button>
                </div>
                <div class="bar"><span style="width:${o.percent}%"></span></div>
                ${o.note?ja(o.note):`<p class="item-meta">${r?"Nothing recorded this day.":"No note."}</p>`}
              </article>
            `}).join("")}
      </div>
    </section>
  `}function Xa(t,e){const a=new Date(`${t}T00:00:00`);return a.setDate(a.getDate()+e),u.todayKey(a)}function Za(){return U==="month"?`${kt(R(y),K)}-15`:U==="year"?`${Number(y.slice(0,4))+K}-06-15`:Xa(y,K*7)}function Ka(t){const[e,a]=u.resolveRange(U,t);return U==="week"?`${V(e)} – ${V(a)}`:U==="month"?Ot(e.slice(0,7)):e.slice(0,4)}function ti(){const t=Za(),e=u.categoryChart(U,t),a=K===0?U==="week"?"This week":U==="month"?"This month":"This year":Ka(t),s=e.labels.map((n,o)=>{const r=e.cats.reduce((l,m)=>l+(e.perCat[m.id]?e.perCat[m.id][o]:0),0),d=e.cats.map((l,m)=>({cat:l,value:e.perCat[l.id]?e.perCat[l.id][o]:0,ci:m})).filter(l=>l.value>0).map(l=>`<span class="chart-seg" style="height:${Math.max(2,Math.round(l.value/e.max*100))}%;background:${_(l.cat.id,l.ci)}" title="${g(l.cat.label)}: ${l.value} pts"></span>`).join("");return`
      <div class="chart-col" title="${g(e.titles[o])}: ${r} pts">
        <div class="chart-bar">${d||'<span class="chart-empty"></span>'}</div>
        <span class="chart-x">${g(n)}</span>
      </div>
    `}).join(""),i=e.cats.map((n,o)=>`
      <span class="chart-legend-item"><i style="background:${_(n.id,o)}"></i>${g(n.label)} <b>${e.totals[n.id]||0}</b></span>
    `).join("");return`
    <section class="score-hero">
      <div class="section-head" style="margin-bottom:4px">
        <div>
          <div class="item-title">Progress chart</div>
          <div class="item-meta">${a} · ${e.grandTotal} pts total</div>
        </div>
      </div>
      <div class="chart-nav-row">
        <button type="button" class="mini-btn" data-action="chart-nav" data-dir="-1" aria-label="Previous ${U}">‹</button>
        <div class="chip-row">
          ${["week","month","year"].map(n=>`<button type="button" class="chip ${U===n?"on":""}" data-action="set-chart-range" data-range="${n}">${n[0].toUpperCase()}${n.slice(1)}</button>`).join("")}
        </div>
        <button type="button" class="mini-btn" data-action="chart-nav" data-dir="1" aria-label="Next ${U}">›</button>
      </div>
      <div class="chart-wrap${e.labels.length>12?" scroll-x":""}">${s}</div>
      <div class="chart-legend">${i}</div>
    </section>
  `}function ei(){u.getDay(y);const t=u.isLocked(y),e=u.consciousEnabled(),a=u.categoryBreakdown(y),s=a.reduce((n,o)=>n+o.earned,0),i=a.reduce((n,o)=>n+o.max,0);return`
    <div class="topbar">
      <div>
        <p class="kicker">Activities</p>
        <h1>By category</h1>
      </div>
      <div class="date-nav">
        ${ae()}
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
        <div class="grade-pill">${V(y)}</div>
      </div>
      <p class="lock-hint">Habits and tasks grouped by category.</p>
    </section>
    ${ti()}
    ${a.map(n=>{const o=n.max?Math.round(n.earned/n.max*100):0,r=_(n.id);return`
          <section class="section">
            <article class="manage-card cat-card cat-${n.id}" style="border-left:4px solid ${r};background:linear-gradient(180deg, ${r}2e, ${r}14 55%, var(--card) 100%)">
              <div class="section-head">
                <div>
                  <div class="item-title">${n.label}</div>
                  <div class="item-meta">${n.completed}/${n.total} done · rating ${n.habitAvg||0}/5</div>
                </div>
                <div class="points">${n.earned}/${n.max} pts</div>
              </div>
              <div class="bar"><span style="width:${o}%;background:${r}"></span></div>
            </article>
            <div class="list" style="margin-top:10px">
              ${n.habits.length||n.tasks.length?`
                    ${n.habits.map(d=>{const l=u.habitRating(y,d.id),m=!l&&t,w=u.habitStreak(d.id,y),p=e&&Number(d.consciousPoints)||0,$=l>0?p:0,L=Math.round(d.points*l/5)+$,S=d.points+p;return`
                           <article class="item-card ${l?"done":""} ${m?"missed":""} ${t?"is-locked":""}" style="border-left:3px solid ${_(d.category)}">
                             <button class="check" data-action="toggle-habit" data-id="${d.id}" ${t?"disabled":""}>✓</button>
                             <div class="item-body">
                               <div class="item-title">${g(d.name)} ${m?'<span class="missed-badge">Missed</span>':""}</div>
                               <div class="item-meta">Habit · ${l?`${l}/5 ${Nt(l)}`:t?"Missed":"Not rated"} · ${Rt(w)}${e?` ${aa(p)}`:""}</div>
                              ${d.description?`<p class="item-desc">${g(d.description)}</p>`:""}
                              ${jt(u.habitForwardedTo(y,d.id))}
                              ${tt(d.tags)}
                              ${ta(d.id,l,t)}
                            </div>
                            <div class="item-side">
                              <div class="points">${L}/${S}</div>
                              <div class="mini-actions">
                                ${z?`<button class="mini-btn on" data-action="open-edit-habit" data-id="${d.id}" ${t?"disabled":""}>Edit</button>`:""}
                                <button class="mini-btn" data-action="open-forward-habit" data-id="${d.id}" ${t?"disabled":""} title="Forward habit to another day">${P("forward")}</button>
                              </div>
                            </div>
                          </article>
                        `}).join("")}
                    ${n.tasks.map(d=>{const l=Math.max(0,Math.min(5,Number(d.rating)||0)),m=!d.done&&t;return`
                           <article class="item-card ${d.done?"done":""} ${m?"missed":""} ${t?"is-locked":""}" style="border-left:3px solid ${_(d.category)}">
                             <button class="check" data-action="toggle-task" data-id="${d.id}" ${t?"disabled":""}>✓</button>
                             <div class="item-body">
                               <div class="item-title">${g(d.title)} ${m?'<span class="missed-badge">Missed</span>':""}</div>
                               <div class="item-meta">Task · ${d.done?"Done":t?"Missed":"Pending"} · ${l?`${l}/5 ${Nt(l)}`:"No rating"}${d.description?` · ${g(d.description)}`:""}</div>
                              ${oa(d.forwardedFrom)}
                              ${jt(d.forwardedTo)}
                              ${tt(d.tags)}
                              ${d.image?'<span class="task-img-badge">📷 Photo attached</span>':""}
                              ${ia(d)}
                              ${ea(d.id,l,t)}
                            </div>
                            <div class="item-side">
                              <div class="points">+${d.points}</div>
                              <div class="mini-actions">
                                ${z?`<button class="mini-btn on" data-action="open-edit-task" data-id="${d.id}" ${t?"disabled":""}>Edit</button>`:""}
                                <button class="mini-btn" data-action="open-forward-task" data-id="${d.id}" ${t?"disabled":""} title="Forward task to another day">${P("forward")}</button>
                              </div>
                            </div>
                          </article>
                        `}).join("")}
                  `:'<div class="empty">No activities in this category.</div>'}
            </div>
          </section>
        `}).join("")}
  `}function Ft(t){return`${t||"daily-report-backup"}-${u.todayKey()}.json`}function ai(){const t=u.getInstalledAt(),e=String(t).slice(0,10),a=new Date(`${e}T00:00:00`),s=new Date(`${u.todayKey()}T00:00:00`),i=Number.isNaN(a.getTime())?1:Math.max(1,Math.round((s-a)/864e5)+1),n=String(Number(e.slice(8,10))).padStart(2,"0"),o=e.slice(5,7),r=e.slice(2,4),d=/^\d{4}-\d{2}-\d{2}$/.test(e)?`${n}/${o}/${r}`:e,l=Math.floor((i-1)/365)+1;return`Using Daily Report since ${d} · day ${i} · year ${l}`}function ra(){return typeof window.showDirectoryPicker=="function"}function ue(){return new Promise((t,e)=>{const a=indexedDB.open("daily-report-pwa",1);a.onupgradeneeded=()=>a.result.createObjectStore("kv"),a.onsuccess=()=>t(a.result),a.onerror=()=>e(a.error)})}function ii(t){return ue().then(e=>new Promise((a,s)=>{const i=e.transaction("kv","readonly").objectStore("kv").get(t);i.onsuccess=()=>a(i.result),i.onerror=()=>s(i.error)}))}function si(t,e){return ue().then(a=>new Promise((s,i)=>{const n=a.transaction("kv","readwrite");n.objectStore("kv").put(e,t),n.oncomplete=()=>s(),n.onerror=()=>i(n.error)}))}function ni(t){return ue().then(e=>new Promise((a,s)=>{const i=e.transaction("kv","readwrite");i.objectStore("kv").delete(t),i.oncomplete=()=>a(),i.onerror=()=>s(i.error)}))}function oi(){return!ra()||typeof indexedDB>"u"?(N="unsupported",Promise.resolve()):ii("backupDir").then(t=>{if(H=t||null,!H){N="unset";return}return H.queryPermission({mode:"readwrite"}).then(e=>{N=e==="granted"?"granted":"prompt"}).catch(()=>{N="prompt"})}).catch(()=>{H=null,N="unset"})}function ri(){return N==="unsupported"?"Folder picking needs Chrome/Edge on desktop — on phones backups download instead.":N==="unset"?"No folder chosen yet.":N==="prompt"?"Tap Choose folder to allow access again.":N==="denied"?"Access was denied — choose the folder again.":N==="granted"&&H?`Folder: ${H.name}`:"Checking…"}async function di(){if(!ra()){h("Folder access needs Chrome or Edge");return}try{const t=await window.showDirectoryPicker({id:"daily-report-backup",mode:"readwrite"});await si("backupDir",t),H=t,N="granted",h("Backup folder set")}catch(t){t&&t.name==="AbortError"||h("Couldn't open that folder")}b()}async function ci(){try{await ni("backupDir")}catch{h("Couldn't remove folder");return}H=null,N="unset",h("Backup folder removed"),b()}async function li(){if(H){try{const t=await H.requestPermission({mode:"readwrite"});N=t==="granted"?"granted":"denied",h(t==="granted"?"Folder access granted":"Access denied")}catch{N="denied"}b()}}async function ui(){const t=u.exportBackup(),e=Ft();if(N==="granted"&&H)try{const s=await(await H.getFileHandle(e,{create:!0})).createWritable();await s.write(t),await s.close(),h("Backup saved to your folder"),da();return}catch{}ft(e,t,"application/json"),h("Backup downloaded")}async function pi(){if(N!=="granted"||!H)return[];const t=[];try{for await(const e of H.values())if(e&&e.kind==="file"&&/\.json$/i.test(e.name))try{const a=await e.getFile();t.push({name:e.name,modified:a.lastModified})}catch{}}catch{return t}return t.sort((e,a)=>a.modified-e.modified),t}async function da(){const t=document.getElementById("folder-backup-list");if(!t)return;if(N!=="granted"||!H){t.innerHTML='<button class="ghost-btn compact" data-action="trigger-import">Import from a file instead</button>';return}t.innerHTML='<p class="item-meta">Loading backups…</p>';const e=await pi();if(!document.getElementById("folder-backup-list"))return;e.length?t.innerHTML=e.map(s=>`
            <div style="display:flex;gap:8px;align-items:center;margin-bottom:6px">
              <span class="item-meta" style="flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${g(s.name)}</span>
              <button class="ghost-btn compact" data-action="restore-backup" data-name="${g(s.name)}">Restore</button>
            </div>
          `).join(""):t.innerHTML='<p class="item-meta">Folder is empty — press Export backup now to create the first backup.</p>';const a=document.createElement("div");a.innerHTML='<button class="ghost-btn compact" data-action="trigger-import">Import from a file instead</button>',t.appendChild(a)}async function mi(t){if(H)try{const a=await(await H.getFileHandle(t)).getFile();ca(await a.text(),t)}catch{h("Couldn't read that backup")}}function ca(t,e){let a;try{a=JSON.parse(t)}catch{h("That file isn't valid JSON.");return}const s=u.backupKind(a);if(s==="ok"){if(!window.confirm(`Replace ALL app data with "${e}"?`))return;ft(Ft("daily-report-pre-import"),u.exportBackup(),"application/json"),u.importBackup(a),h("Backup imported"),b();return}if(s==="report-export"){const i=u.previewReport(a);if(!i.days){h("That report file has no day rows to import.");return}if(!window.confirm(`Import ${i.days} day(s) (${i.start} → ${i.end}) from "${e}" as locked history?

${i.newHabits} new habit(s) will be added to your list.
Days already in the app on those dates will be overwritten.`))return;ft(Ft("daily-report-pre-import"),u.exportBackup(),"application/json");const o=u.importReport(a);if(!o){h("That file doesn't look like a valid Daily Report backup.");return}h(`Imported ${o.days} day(s)${o.habits?` + ${o.habits} new habit(s)`:""}`),b();return}if(s==="wrong-app"){h("That backup belongs to another app (e.g. Iron Log) — it can’t be imported into Daily Report.");return}h("That file doesn't look like a valid Daily Report backup.")}async function gi(){if(!ut){h("Use the browser menu: Install / Add to Home Screen");return}try{ut.prompt();const t=await ut.userChoice;t&&t.outcome==="accepted"&&h("Installing Daily Report…")}catch{}ut=null,b()}async function fi(){const t=`./version.json?v=${Date.now()}`,e=await fetch(t,{cache:"no-store"});if(!e.ok)throw new Error(`http ${e.status}`);const a=await e.json(),s=a&&(a.version||a.v)||null;if(!s)throw new Error("no version field");return String(s)}async function hi(){st=!0,Kt=!1,nt="Checking for updates… (needs internet)",b();try{if("serviceWorker"in navigator&&navigator.serviceWorker.getRegistration){const e=await navigator.serviceWorker.getRegistration().catch(()=>null);e&&e.update&&e.update().catch(()=>{})}}catch{}if(typeof fetch>"u"){st=!1,nt="This browser can’t check — but the app itself works offline. Use Export backup to protect your data.",b();return}const t=setTimeout(()=>{st&&(st=!1,nt="Couldn't reach the server — offline? The app itself works offline; updating needs internet.",b())},15e3);try{const e=await fi();if(clearTimeout(t),st=!1,te=e,e&&e!==Ke){Kt=!0,nt="Update found — updating automatically…",b(),await la(!0);return}nt="You're on the latest version. The app works offline."}catch{clearTimeout(t),st=!1,nt="Couldn't reach the server — offline, or this file wasn't opened from the installed/hosted app. The app itself works offline; updating needs internet."}b()}function Me(t){return new Promise(e=>{if(!("serviceWorker"in navigator))return e();const a=()=>e(),s=setTimeout(()=>{try{navigator.serviceWorker.removeEventListener("controllerchange",a)}catch{}e()},t||4e3),i=()=>{clearTimeout(s);try{navigator.serviceWorker.removeEventListener("controllerchange",i)}catch{}e()};try{navigator.serviceWorker.addEventListener("controllerchange",i)}catch{e()}})}async function la(t){var a;try{ft(Ft("daily-report-pre-update"),u.exportBackup(),"application/json")}catch{}h("Backup saved — updating app…"),nt=`Backup saved — updating${te?` to ${String(te).slice(-8)}`:""}…`,b();const e=()=>{const s=window.location.href.includes("?")?"&":"?";try{window.location.replace(`${window.location.href.split("#")[0]}${s}v=${Date.now()}#updated`)}catch{window.location.reload()}setTimeout(()=>{try{window.location.reload()}catch{}},2500)};try{if("serviceWorker"in navigator&&navigator.serviceWorker.getRegistration){const s=await navigator.serviceWorker.getRegistration().catch(()=>null);if(s){const i=s.waiting;if(i){try{i.postMessage("SKIP_WAITING")}catch{try{s.waiting.postMessage({type:"SKIP_WAITING"})}catch{}}await Me(4e3),e();return}try{await s.update()}catch{}const n=await navigator.serviceWorker.getRegistration().catch(()=>s),o=(n||s).waiting||(n||s).installing;if(o){try{o.postMessage("SKIP_WAITING")}catch{}try{(a=(n||s).waiting)==null||a.postMessage("SKIP_WAITING")}catch{}await Me(5e3),e();return}try{const r=navigator.serviceWorker.controller;r&&r.postMessage({type:"CLEAR_APP_CACHES"})}catch{}try{if(typeof caches<"u"){const r=await caches.keys().catch(()=>[]);await Promise.all(r.filter(d=>d.startsWith("daily-report-")).map(d=>caches.delete(d).catch(()=>!1)))}}catch{}try{await fetch(`./index.html?v=${Date.now()}`,{cache:"reload"})}catch{}try{await fetch(`./version.json?v=${Date.now()}`,{cache:"reload"})}catch{}try{await(n||s).unregister()}catch{}e();return}}}catch{}try{await fetch(`./index.html?v=${Date.now()}`,{cache:"reload"})}catch{}setTimeout(e,600)}function bi(){const t=u.getSettings(),e=u.getAllHabits(),a=u.getArchivedHabits(),s=u.getPinnedTasks(),i=u.lockedReports();return`
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
          ${[0,1,2,3,4,5,6].map(n=>{const o=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];return`<option value="${n}" ${u.getWeekStart()===n?"selected":""}>${o[n]}</option>`}).join("")}
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
      <p class="item-meta">Version: ${g(Ma)}</p>
      <p class="item-meta">📅 ${g(ai())}</p>
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:8px">
        <button class="primary-btn" data-action="check-updates" ${st?"disabled":""}>${st?"Checking…":"Check for updates"}</button>
        ${Kt?'<button class="primary-btn" data-action="apply-update">Restart with update</button>':""}
      </div>
      <p class="item-meta">${g(nt)}</p>
    </section>

    <section class="manage-card">
      <h2>Data backup</h2>
      <p class="muted tight">Pick a backup folder once (Chrome/Edge on desktop) and exports save straight into it. On phones, backups download to your Downloads folder instead. Import accepts full backups (<b>daily-report-backup-*.json</b>) or month/week report exports, which are added as locked history.</p>
      <p class="item-meta">${g(ri())}</p>
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:8px">
        ${N==="prompt"?'<button class="primary-btn" data-action="grant-folder">Allow access</button>':'<button class="ghost-btn compact" data-action="choose-folder">Choose folder</button>'}
        ${H?'<button class="ghost-btn compact" data-action="forget-folder">Remove</button>':""}
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
        ${u.getCategories().map(n=>{const o=u.getCustomCategories().some($=>$.id===n.id),r=n.color||_(n.id),d=n.goals||"",l=St(d),m=mt.has(n.id)?mt.get(n.id):d,w=xt(St(m))!==xt(l),p=ot.has(n.id);return`
              <article class="manage-card cat-manage-card ${p?"open":""}">
                <div class="cat-manage-head">
                  <button type="button" class="cat-manage-toggle" data-action="toggle-cat" data-id="${n.id}" aria-expanded="${p?"true":"false"}" aria-controls="cat-editor-${n.id}">
                    <span class="cat-chevron" aria-hidden="true">${p?"▾":"▸"}</span>
                    <i class="cat-swatch" style="background:${g(r)}"></i>
                    <span class="cat-manage-name">${g(et(n.id))}</span>
                    ${l.length?`<span class="cat-goal-flag">${l.length} goal${l.length===1?"":"s"}</span>`:""}
                  </button>
                  <div class="mini-actions">
                    ${o?`<button class="mini-btn on" data-action="rename-category" data-id="${n.id}">Rename</button>`:""}
                    ${o?`<button class="mini-btn" data-action="delete-category" data-id="${n.id}">✕</button>`:""}
                  </div>
                </div>
                ${p?`
                      <div class="cat-manage-body" id="cat-editor-${n.id}">
                        <div class="cat-manage-row">
                          <label>Colour
                            <input type="color" data-cat-color="${n.id}" value="${g(r)}" aria-label="Colour for ${g(n.label||et(n.id))}" />
                          </label>
                          <div class="cat-goals-wrap">
                            <label>Goals — one per line
                              <textarea data-cat-goals="${n.id}" maxlength="1000" placeholder="• Goal one&#10;• Goal two&#10;• Goal three" style="min-height:90px">${g(m)}</textarea>
                            </label>
                            <div class="cat-save-row">
                              <button class="primary-btn compact-btn" data-action="save-cat-goals" data-id="${n.id}">${w?"Save goals":"Saved"}</button>
                              <button class="ghost-btn compact" data-action="reset-cat-goals" data-id="${n.id}" ${w?"":"hidden"}>Discard</button>
                            </div>
                            <p class="item-meta cat-goal-hint">${w?"Unsaved changes — press Save to keep them offline and in backups.":"Saved on this device and included in every backup."}</p>
                          </div>
                        </div>
                      </div>
                    `:l.length?`<ul class="note-list cat-goal-preview">${l.map($=>`<li>${g($)}</li>`).join("")}</ul>`:'<p class="item-meta">No goals yet — open this category to add some.</p>'}
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
        ${(()=>{const n=u.getAllTags();return n.length?n.map(({tag:o,count:r})=>`
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
          ${u.getAllHabits().map(n=>`<option value="${n.id}">${g(n.name)}</option>`).join("")}
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
        ${u.getGoals().length?u.getGoals().map(n=>{var l,m;const o=u.goalProgress(n,y),r=u.getBadges().some(w=>w.goalId===n.id),d=n.kind==="habit-streak"?((l=u.findHabit(n.targetId))==null?void 0:l.name)||"Deleted habit":n.kind==="task-streak"?((m=u.findPinnedTask(n.targetId))==null?void 0:m.title)||"Deleted task":"Any day at 100%";return`
                    <article class="manage-card goal-card ${r?"goal-earned":""}">
                      <div class="section-head">
                        <div>
                          <div class="item-title">${Ut(n.tier)} ${g(n.title)}</div>
                          <div class="item-meta">${Ue(n.tier)} · “${g(n.rewardTitle)}” · ${g(d)}</div>
                          <div class="item-meta">${o.current}/${o.target} days ${r?"· Earned ✓":""}</div>
                          <div class="bar"><span style="width:${Math.min(100,Math.round(o.current/o.target*100))}%"></span></div>
                        </div>
                        <div class="mini-actions">
                          <button class="mini-btn on" data-action="open-edit-goal" data-id="${n.id}">Edit</button>
                          <button class="mini-btn" data-action="remove-goal" data-id="${n.id}">✕</button>
                        </div>
                      </div>
                    </article>
                  `}).join(""):'<div class="empty">No goals yet. Tap Add goal to create your first reward.</div>'}
      </div>
      ${u.getBadges().length?`
            <div class="section-head" style="margin-top:14px"><h2>Earned badges</h2></div>
            <div class="rewards-grid">
              ${u.getBadges().map(n=>`
                <article class="reward-card tier-${n.tier}">
                  <div class="reward-medal">${Ut(n.tier)}</div>
                  <div>
                    <div class="item-title">${g(n.rewardTitle||n.title)}</div>
                    <div class="item-meta">${g(n.title)} · ${V((n.earnedAt||"").slice(0,10))}</div>
                  </div>
                  <button class="mini-btn" data-action="remove-badge" data-id="${n.id}">✕</button>
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
      ${Va(i)}
      ${I.length?`
        <div class="chip-row" style="margin-top:10px">
          ${[...I].sort().map(n=>`<button type="button" class="chip on" data-action="toggle-locked-day" data-date="${n}" title="Tap to remove">${n} ✕</button>`).join("")}
        </div>
        <div style="display:flex;gap:8px;margin-top:10px">
          <button class="primary-btn" style="flex:1" data-action="lock-selected">🔒 Lock ${I.length} day${I.length===1?"":"s"}</button>
          <button class="ghost-btn" style="flex:1" data-action="unlock-selected">🔓 Unlock ${I.length} day${I.length===1?"":"s"}</button>
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
        ${e.length?e.map(n=>`
                    <article class="manage-card" style="${n.pin?`border-left:4px solid ${_(n.category)}`:""}">
                      <div class="section-head">
                        <div>
                          <div class="item-title">${g(n.name)}</div>
                          <div class="item-meta">${dt(n.category)} · ${n.pin?pt(n.pin):"Not pinned"} · +${n.points} pts ${t.showConscious!==!1?Number(n.consciousPoints)?`· 🧠 +${n.consciousPoints}`:"· No conscious pts":""} · ${Rt(u.habitStreak(n.id,y))}</div>
                          ${n.description?`<p class="item-desc">${g(n.description)}</p>`:""}
                          ${tt(n.tags)}
                        </div>
                        <div class="mini-actions">
                          <button class="mini-btn ${n.pin?"on":""}" data-action="open-pin-habit" data-id="${n.id}">${P("pin")}</button>
                          <button class="mini-btn" data-action="remove-habit" data-id="${n.id}">✕</button>
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
        ${a.map(n=>`
                    <article class="manage-card archived" style="border-left:4px solid ${_(n.category)}">
                      <div class="section-head">
                        <div>
                          <div class="item-title">${g(n.name)}</div>
                          <div class="item-meta">${dt(n.category)} · +${n.points} pts${n.pin?` · ${pt(n.pin)}`:" · Pin ended"} · ${ee(n.archivedAt)}</div>
                          ${n.description?`<p class="item-desc">${g(n.description)}</p>`:""}
                          ${tt(n.tags)}
                        </div>
                        <div class="mini-actions">
                          <button class="mini-btn on" data-action="restore-habit" data-id="${n.id}">${P("undo")}</button>
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
        ${s.length?s.map(n=>`
                    <article class="manage-card" style="border-left:4px solid ${_(n.category)}">
                      <div class="section-head">
                        <div>
                          <div class="item-title">${g(n.title)}</div>
                          <div class="item-meta">${dt(n.category)} · ${pt(n.pin)} · +${n.points} pts</div>
                          ${n.description?`<p class="item-desc">${g(n.description)}</p>`:""}
                          ${tt(n.tags)}
                        </div>
                        <div class="mini-actions">
                          <button class="mini-btn on" data-action="open-pin-template" data-id="${n.id}">${P("pin")}</button>
                          <button class="mini-btn" data-action="unpin-template" data-id="${n.id}">✕</button>
                        </div>
                      </div>
                    </article>
                  `).join(""):'<div class="empty">Pin a task from Today to repeat it.</div>'}
      </div>
    </section>
  `}function R(t){if(/^\d{4}-\d{2}$/.test(String(t||"")))return String(t);if(/^\d{4}-\d{2}-\d{2}$/.test(String(t||"")))return String(t).slice(0,7);const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}`}function kt(t,e){const[a,s]=String(t).split("-").map(Number),i=new Date(a,(s||1)-1+e,1);return`${i.getFullYear()}-${String(i.getMonth()+1).padStart(2,"0")}`}function Ot(t){const[e,a]=String(t).split("-").map(Number);return new Date(e,(a||1)-1,1).toLocaleDateString(void 0,{month:"long",year:"numeric"})}function pe(){const t=u.getWeekStart(),e=lt.findIndex(a=>a.value===t);return e<=0?lt:[...lt.slice(e),...lt.slice(0,e)]}function me(t){const[e,a]=String(t).split("-").map(Number),i=(new Date(e,a-1,1).getDay()-u.getWeekStart()+7)%7,n=new Date(e,a,0).getDate(),o=[];for(let r=0;r<i;r++)o.push(null);for(let r=1;r<=n;r++)o.push(`${e}-${String(a).padStart(2,"0")}-${String(r).padStart(2,"0")}`);return o}function Ie(t,e,a){const s=new Set(a||[]),i=me(e);return`
    <div class="pin-cal" data-cal="${t}">
      <div class="pin-cal-head">
        <button type="button" class="mini-btn" data-action="pin-cal-nav" data-target="${t}" data-dir="-1" aria-label="Previous month">‹</button>
        <b>${Ot(e)}</b>
        <button type="button" class="mini-btn" data-action="pin-cal-nav" data-target="${t}" data-dir="1" aria-label="Next month">›</button>
      </div>
      <div class="pin-cal-grid pin-cal-week">
        ${pe().map(n=>`<span>${n.label.slice(0,1)}</span>`).join("")}
      </div>
      <div class="pin-cal-grid">
        ${i.map(n=>n?`<button type="button" class="pin-cal-day ${s.has(n)?"on":""}" data-action="toggle-pin-date" data-target="${t}" data-date="${n}">${Number(n.slice(8,10))}</button>`:"<span></span>").join("")}
      </div>
    </div>
  `}function yi(t,e){const a=(t==null?void 0:t.mode)||"forever",s=(t==null?void 0:t.until)||"",i=((t==null?void 0:t.weekdays)||[]).map(Number),n=((t==null?void 0:t.monthDays)||[]).map(Number),o=Array.isArray(t==null?void 0:t.yearDays)?[...t.yearDays].sort():[],r=Array.isArray(t==null?void 0:t.customDates)?[...t.customDates].sort():[],d=Array.isArray(t==null?void 0:t.exceptDates)?[...t.exceptDates].sort():Array.isArray(t==null?void 0:t.exceptions)?[...t.exceptions].sort():[],l=e&&e._exceptCal||R(y),m=e&&e._customCal||R(y),w=e&&e._yearMonth||"01";return`
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
        ${lt.map(p=>`
            <button type="button" class="chip weekday ${i.includes(p.value)?"on":""}" data-action="toggle-weekday" data-day="${p.value}">
              ${p.label}
            </button>
          `).join("")}
      </div>
    </div>
    <div class="pin-monthdays" style="${a==="monthly"?"":"display:none"}">
      <p class="item-meta">Repeat every month on day</p>
      <div class="chip-row">
        ${Array.from({length:31},(p,$)=>$+1).map(p=>`<button type="button" class="chip monthday ${n.includes(p)?"on":""}" data-action="toggle-monthday" data-day="${p}">${p}</button>`).join("")}
      </div>
    </div>
    <div class="pin-yeardays" style="${a==="yearly"?"":"display:none"}">
      <p class="item-meta">Repeat every year on (month + day)</p>
      <div class="row-2">
        <label>Month
          <select id="year-month-select">
            ${Array.from({length:12},(p,$)=>$+1).map(p=>`<option value="${String(p).padStart(2,"0")}" ${w===String(p).padStart(2,"0")?"selected":""}>${new Date(2e3,p-1,1).toLocaleDateString(void 0,{month:"long"})}</option>`).join("")}
          </select>
        </label>
        <label>Day
          <select id="year-day-select">
            ${Array.from({length:31},(p,$)=>$+1).map(p=>`<option value="${String(p).padStart(2,"0")}">${p}</option>`).join("")}
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
      ${Ie("custom",m,r)}
      <div class="chip-row" style="margin-top:8px">
        ${r.length?r.map(p=>`<button type="button" class="chip on" data-action="toggle-pin-date" data-target="custom" data-date="${p}" title="Tap to remove">${p} ✕</button>`).join(""):'<span class="item-meta">No extra custom dates.</span>'}
      </div>
    </div>
    <div class="pin-exceptions" style="margin-top:4px">
      <p class="item-meta"><b style="color:var(--text)">Exceptions</b> — skip these days (tap days on the calendar). Applies to every repeat mode.</p>
      ${Ie("except",l,d)}
      <div class="chip-row" style="margin-top:8px">
        ${d.length?d.map(p=>`<button type="button" class="chip on" data-action="toggle-pin-date" data-target="except" data-date="${p}" title="Tap to remove">${p} ✕</button>`).join(""):'<span class="item-meta">No exceptions.</span>'}
      </div>
    </div>
  `}function vi(){if(!x)return"";if(x==="choose")return`
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
    `;if(x==="habit"||x==="task"||x==="edit-habit"||x==="edit-task"){const t=x==="habit"||x==="edit-habit",e=x.startsWith("edit-"),a=v||{},s=a.category||(t?"physically":"mentally"),i=Math.max(0,Math.min(5,Number(a.rating)||0)),n=Array.isArray(a.tags)?a.tags.join(", "):a.tags||"",o=a.consciousPoints!=null?Number(a.consciousPoints):a.conscious!=null?Number(a.conscious):0;return`
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
                ${u.getCategories().map(r=>`
                    <button type="button" class="chip ${s===r.id?"on":""}" data-action="set-category" data-category="${r.id}">${g(r.label)}</button>
                  `).join("")}
              </div>
              <input type="hidden" name="category" value="${s}" />
            </div>
            <label>
              Tags (optional, comma separated)
              <input name="tags" maxlength="120" value="${g(n)}" placeholder="morning, health" />
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
    `}if(x==="export"){const t=v&&v.range||"day";return`
      <div class="modal-backdrop open" data-action="close-modal">
        <div class="sheet">
          <div class="handle"></div>
          <h2>Export report</h2>
          <p class="muted tight">Date: ${V(y)}. Pick a range, then a format.</p>
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
    `}if(x==="goal"||x==="edit-goal"){const t=x==="edit-goal",e=v||{},a=e.kind||"habit-streak",s=u.getAllHabits(),i=u.getPinnedTasks(),n=e.targetId||"";return`
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
                ${We.map(o=>`<button type="button" class="chip ${a===o.id?"on":""}" data-action="set-goal-kind" data-kind="${o.id}">${o.label}</button>`).join("")}
              </div>
              <input type="hidden" name="kind" value="${a}" />
            </div>
            <label class="goal-target-habit" style="${a==="habit-streak"?"":"display:none"}">
              Habit
              <select name="habitTarget">
                ${s.map(o=>`<option value="${o.id}" ${n===o.id?"selected":""}>${g(o.name)}</option>`).join("")}
              </select>
            </label>
            <label class="goal-target-task" style="${a==="task-streak"?"":"display:none"}">
              Pinned task
              <select name="taskTarget">
                ${i.length?i.map(o=>`<option value="${o.id}" ${n===o.id?"selected":""}>${g(o.title)}</option>`).join(""):'<option value="">No pinned tasks yet</option>'}
              </select>
            </label>
            <label>
              Number of days
              <input name="targetDays" type="number" min="1" max="365" value="${e.targetDays||7}" />
            </label>
            <div>
              <p class="item-meta">Badge</p>
              <div class="chip-row goal-tier-row">
                ${Tt.map(o=>`<button type="button" class="chip ${(e.tier||"bronze")===o.id?"on":""}" data-action="set-goal-tier" data-tier="${o.id}">${o.medal} ${o.label}</button>`).join("")}
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
    `}if(x==="pin"){const{kind:t,id:e,title:a,pin:s}=v||{};return`
      <div class="modal-backdrop open" data-action="close-modal">
        <form class="sheet sheet-wide" data-form="pin" data-kind="${t}" data-id="${e}">
          <div class="handle"></div>
          <h2>Pin ${t==="habit"?"habit":"task"}</h2>
          <p class="muted tight">${g(a||"")}</p>
          <div class="form" style="margin-top:14px">
            ${yi(s,v)}
            <button class="primary-btn" type="submit">Save pin</button>
            ${s?'<button class="ghost-btn danger" type="button" data-action="clear-pin">Unpin</button>':""}
            <button class="ghost-btn" type="button" data-action="close-modal">Cancel</button>
          </div>
        </form>
      </div>
    `}if(x==="forward"){const{kind:t,id:e,title:a,from:s}=v||{},i=t==="habit";return`
      <div class="modal-backdrop open" data-action="close-modal">
        <form class="sheet" data-form="forward" data-kind="${t}" data-id="${e}">
          <div class="handle"></div>
          <h2>Forward ${i?"habit":"task"}</h2>
          <p class="muted tight">${g(a||"")}</p>
          <p class="item-meta">From ${g(s||y)} — a copy will be created on the day you pick, marked “↩ Forwarded from ${g(s||y)}”.</p>
          <div class="form" style="margin-top:14px">
            <label>
              Forward to day
              <input name="targetDate" type="date" required value="${Ba(s||y)}" />
            </label>
            <button class="primary-btn" type="submit">Forward ${i?"habit":"task"} →</button>
            <button class="ghost-btn" type="button" data-action="close-modal">Cancel</button>
          </div>
        </form>
      </div>
    `}if(x==="image"){const{image:t,title:e}=v||{};return t?`
      <div class="lightbox-backdrop" data-action="close-modal">
        <img src="${t}" alt="${g(e||"Task photo")}" />
        <button type="button" class="ghost-btn compact lightbox-close" data-action="close-modal">✕ Close</button>
      </div>
    `:""}return""}function b(){if(Gt){le();try{const t=u.isLocked(y);Gt.innerHTML=`
    <div class="app-shell">
      <main class="screen active">
        ${M==="today"?Ga():""}
        ${M==="profile"?Wa():""}
        ${M==="history"?Qa():""}
        ${M==="habits"?ei():""}
        ${M==="settings"?bi():""}
      </main>
      ${["today","habits"].includes(M)&&!t?'<button class="fab" data-action="open-add" aria-label="Add">+</button>':""}
      ${M==="settings"?'<button class="fab" data-action="open-add-habit" aria-label="Add habit">+</button>':""}
      <nav class="tabbar tabs-5">
        <button class="tab ${M==="today"?"active":""}" data-screen="today">${P("home")}Today</button>
        <button class="tab ${M==="profile"?"active":""}" data-screen="profile">${P("profile")}Profile</button>
        <button class="tab ${M==="history"?"active":""}" data-screen="history">${P("history")}History</button>
        <button class="tab ${M==="habits"?"active":""}" data-screen="habits">${P("habit")}Activities</button>
        <button class="tab ${M==="settings"?"active":""}" data-screen="settings">${P("settings")}Settings</button>
      </nav>
    </div>
    ${vi()}
    <div class="toast" id="toast"></div>
  `,$i(),Ua(),Ai(),xi(),da(),ki()}catch(t){const e=t&&t.stack?String(t.stack).slice(0,400):t&&t.message?t.message:"Unknown error";Gt.innerHTML=`<div class="app-shell"><section class="manage-card"><h2>Could not load (Error B)</h2><p class="muted tight">${g(e)}</p><button class="primary-btn full" data-action="reload-app">Reload</button></section></div>`}}}function ki(){if(x!=="habit"&&x!=="task")return;const t=document.querySelector(".sheet");t&&(t.scrollTop=0);const e=document.querySelector('.sheet input[name="title"]');if(e)try{e.focus({preventScroll:!0})}catch{try{e.focus()}catch{}}}function $i(){const t=document.getElementById("day-note");t&&t.addEventListener("input",()=>{u.isLocked(y)||u.setNote(y,t.value)})}const wi=3e3,Si=180,Re=10,A={list:null,card:null,timer:null,startX:0,startY:0,dragging:!1,order0:"",swallowClick:!1,fromHandle:!1,bound:!1};function ie(){A.timer&&(clearTimeout(A.timer),A.timer=null),A.card=null,A.fromHandle=!1}function ua(t,e){return[...t.querySelectorAll(".item-card[data-sortable]")].filter(a=>a.dataset.sortable===e).map(a=>a.dataset.id)}function je(t){const e=A.card,a=A.list;if(ie(),A.list=null,A.dragging=!1,!e||(e.classList.remove("is-dragging"),a&&a.classList.remove("is-reordering"),document.body.classList.remove("is-reordering-body"),!t))return;const s=e.dataset.sortable,i=ua(a,s);i.join("|")!==A.order0&&(A.swallowClick=!0,setTimeout(()=>{A.swallowClick=!1},400),s==="habit"?(u.setHabitOrder(i),u.setHabitSort("custom")):s==="task"&&(u.setTaskOrder(y,i),u.setTaskSort("custom")),b(),h("Order saved"))}function xi(){A.bound||(A.bound=!0,document.addEventListener("pointerdown",t=>{if(t.button!=null&&t.button!==0||t.target.closest("input, textarea, select, img, video, .stars, .mini-btn, .check, .fab, .tabbar"))return;const e=t.target.closest(".item-card[data-sortable]");if(!e)return;const a=e.closest(".list");if(!a||u.isLocked(y))return;const s=e.dataset.sortable,i=u.getSettings(),n=(s==="habit"?i.habitSort:i.taskSort)||"default";n!=="default"&&n!=="custom"&&(s==="habit"?u.setHabitSort("custom"):u.setTaskSort("custom"),h("Switched to Custom order so your drag sticks"));const o=t.target.closest(".drag-handle");o&&t.preventDefault(),ie(),A.list=a,A.card=e,A.fromHandle=!!o,A.startX=t.clientX,A.startY=t.clientY,A.order0=ua(a,s).join("|"),A.timer=setTimeout(()=>{A.timer=null,!(!A.card||!A.card.isConnected)&&(A.dragging=!0,navigator.vibrate&&navigator.vibrate(15),A.card.classList.add("is-dragging"),A.list.classList.add("is-reordering"),document.body.classList.add("is-reordering-body"),h("Drag to reorder, lift to drop"))},o?Si:wi)},!0),document.addEventListener("pointermove",t=>{if(A.timer&&A.card&&!A.fromHandle&&(Math.abs(t.clientX-A.startX)>Re||Math.abs(t.clientY-A.startY)>Re)){ie(),A.list=null;return}if(!A.dragging||!A.card)return;t.preventDefault();const e=A.card,a=A.list;if(!a)return;const s=t.clientY,i=e.dataset.sortable,n=[...a.querySelectorAll(".item-card[data-sortable]")].filter(r=>r!==e&&r.dataset.sortable===i);let o=!1;for(const r of n){const d=r.getBoundingClientRect();if(s<d.top+d.height/2){a.insertBefore(e,r),o=!0;break}}o||a.appendChild(e)},{passive:!1}),document.addEventListener("pointerup",()=>je(A.dragging)),document.addEventListener("pointercancel",()=>je(!1)),document.addEventListener("contextmenu",t=>{(A.dragging||A.card)&&t.preventDefault()}),document.addEventListener("touchmove",t=>{A.dragging&&t.preventDefault()},{passive:!1}),document.addEventListener("click",t=>{A.swallowClick&&(t.stopPropagation(),t.preventDefault())},!0))}function Ai(){const t=document.getElementById("lock-time"),e=document.getElementById("auto-lock");t&&t.addEventListener("change",()=>{u.setLockTime(t.value),h(`Lock time set to ${t.value}`),b()}),e&&e.addEventListener("change",()=>{u.setAutoLock(e.checked),h(e.checked?"Auto-lock on":"Auto-lock off"),b()}),document.querySelectorAll("[data-cat-color]").forEach(s=>{s.addEventListener("input",()=>{var n;u.updateCategory(s.dataset.catColor,{color:s.value});const i=(n=s.closest(".cat-manage-card"))==null?void 0:n.querySelector(".cat-swatch");i&&(i.style.background=s.value)})}),document.querySelectorAll("[data-cat-goals]").forEach(s=>{const i=()=>{const n=s.dataset.catGoals,o=s.closest(".cat-manage-card");if(!o)return;const r=St((u.getCategories().find(p=>p.id===n)||{}).goals||""),d=xt(St(s.value))!==xt(r),l=o.querySelector('[data-action="save-cat-goals"]');l&&(l.textContent=d?"Save goals":"Saved");const m=o.querySelector('[data-action="reset-cat-goals"]');m&&(m.hidden=!d);const w=o.querySelector(".cat-goal-hint");w&&(w.textContent=d?"Unsaved changes — press Save to keep them offline and in backups.":"Saved on this device and included in every backup.")};s.addEventListener("input",()=>{mt.set(s.dataset.catGoals,s.value),i()}),s.addEventListener("change",i)});const a=document.getElementById("backup-file");a&&a.addEventListener("change",()=>{const s=a.files[0];if(!s)return;const i=new FileReader;i.onload=()=>{ca(String(i.result||""),s.name),a.value=""},i.onerror=()=>{h("Couldn't read that file."),a.value=""},i.readAsText(s)})}function h(t){const e=document.getElementById("toast");e&&(e.textContent=t,e.classList.add("show"),setTimeout(()=>e.classList.remove("show"),1800))}function pa(){const t=u.getTheme();document.documentElement.dataset.theme=t;const e=document.querySelector('meta[name="theme-color"]');e&&(e.content=t==="light"?"#f3f1ea":"#0e1116")}function g(t){return String(t||"").split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;").split('"').join("&quot;")}function j(){return u.isLocked(y)?(h("This report is locked. Unlock it in Settings."),!0):!1}function ge(t){return{mode:(t==null?void 0:t.mode)||"forever",until:(t==null?void 0:t.until)||"",weekdays:Array.isArray(t==null?void 0:t.weekdays)?t.weekdays.map(Number):[],monthDays:Array.isArray(t==null?void 0:t.monthDays)?t.monthDays.map(Number):[],yearDays:Array.isArray(t==null?void 0:t.yearDays)?[...t.yearDays]:[],customDates:Array.isArray(t==null?void 0:t.customDates)?[...t.customDates]:[],exceptDates:Array.isArray(t==null?void 0:t.exceptDates)?[...t.exceptDates]:Array.isArray(t==null?void 0:t.exceptions)?[...t.exceptions]:[]}}function Ti(t){const e=u.findHabit(t);e&&(x="pin",v={kind:"habit",id:t,title:e.name,pin:e.pin?ge(e.pin):{mode:"forever",until:"",weekdays:[],monthDays:[],yearDays:[],customDates:[],exceptDates:[]},_exceptCal:R(y),_customCal:R(y),_yearMonth:"01"})}function Di(t){const e=u.findTask(y,t);if(!e)return;const a=e.sourcePinId?u.findPinnedTask(e.sourcePinId):null;x="pin",v={kind:"task",id:t,title:e.title,pin:a!=null&&a.pin?ge(a.pin):{mode:"forever",until:"",weekdays:[],monthDays:[],yearDays:[],customDates:[],exceptDates:[]},_exceptCal:R(y),_customCal:R(y),_yearMonth:"01"}}function Pi(t){const e=u.findPinnedTask(t);e&&(x="pin",v={kind:"template",id:t,title:e.title,pin:e.pin?ge(e.pin):{mode:"forever",until:"",weekdays:[],monthDays:[],yearDays:[],customDates:[],exceptDates:[]},_exceptCal:R(y),_customCal:R(y),_yearMonth:"01"})}function Ci(t){var l;const e=t.querySelector('input[name="mode"]').value,a=((l=t.querySelector('input[name="until"]'))==null?void 0:l.value)||"",s=[...t.querySelectorAll(".weekday.on")].map(m=>Number(m.dataset.day)),i=[...t.querySelectorAll(".monthday.on")].map(m=>Number(m.dataset.day)),n=v&&v.pin||{},o=Array.isArray(n.yearDays)?n.yearDays:[],r=Array.isArray(n.customDates)?n.customDates:[],d=Array.isArray(n.exceptDates)?n.exceptDates:[];return e==="until"&&!a?(h("Pick an until date"),null):e==="weekly"&&!s.length?(h("Pick at least one weekday"),null):e==="monthly"&&!i.length?(h("Pick at least one day of month"),null):e==="yearly"&&!o.length?(h("Add at least one yearly date"),null):e==="custom"&&!r.length?(h("Pick at least one custom date"),null):{mode:e,until:a,weekdays:s,monthDays:i,yearDays:o,customDates:r,exceptDates:d}}function ft(t,e,a){const s=e instanceof Blob?e:new Blob([e],{type:a||"text/plain;charset=utf-8"}),i=URL.createObjectURL(s),n=document.createElement("a");n.href=i,n.download=t,document.body.appendChild(n),n.click(),setTimeout(()=>{document.body.removeChild(n),URL.revokeObjectURL(i)},500)}function bt(t){const e=String(t??"");return/[",\n]/.test(e)?`"${e.replace(/"/g,'""')}"`:e}function fe(t,e){const[a,s]=u.resolveRange(t,e||y);return{range:t,start:a,end:s,rows:u.exportRows(a,s)}}function Fe(t,e){const a=t||v&&v.range||"day",{start:s,end:i,rows:n}=fe(a,e),o=[];o.push(["Daily Report export",`${s} to ${i}`].map(bt).join(",")),o.push(["Date","Type","Name","Category","Tags","Points","Rating","Earned","ConsciousPts","Status","Note/Description"].map(bt).join(",")),n.forEach(r=>{r.habits.forEach(d=>{o.push([r.date,"Habit",d.name,d.category,(d.tags||[]).join("|"),d.points,d.rating,d.earned,d.consciousPoints,d.status||(d.rating>0?"done":r.locked?"missed":"pending"),d.description||""].map(bt).join(","))}),r.tasks.forEach(d=>{o.push([r.date,"Task",d.hasImage?`${d.title} [photo]`:d.title,d.category,(d.tags||[]).join("|"),d.points,d.rating||"",d.earned,"",d.status||(d.done?"done":r.locked?"missed":"pending"),d.description||""].map(bt).join(","))}),o.push([r.date,"Summary",`Earned ${r.earned}/${r.max} (${r.percent}%)`,"","","","","","",r.locked?"locked":"open",r.note||""].map(bt).join(","))}),ft(`daily-report-${a}-${s}-to-${i}.csv`,"\uFEFF"+o.join(`
`),"text/csv;charset=utf-8"),h("Excel (CSV) exported")}function Oe(t,e){const a=t||v&&v.range||"day",{start:s,end:i,rows:n}=fe(a,e),o={app:"Daily Report",exportedAt:new Date().toISOString(),range:a,start:s,end:i,days:n};ft(`daily-report-${a}-${s}-to-${i}.json`,JSON.stringify(o,null,2),"application/json"),h("JSON exported")}function Be(t,e){const a=t||v&&v.range||"day",{start:s,end:i,rows:n}=fe(a,e),o=n.map(d=>`
        <section style="margin-bottom:18px;border:1px solid #ddd;border-radius:12px;padding:12px">
          <h2 style="margin:0 0 4px;font-size:16px">${g(d.date)} — ${d.earned}/${d.max} pts (${d.percent}%)</h2>
          <p style="margin:0 0 8px;font-size:12px;color:#555">Habits ${d.habitScore} + Conscious ${d.consciousScore} + Tasks ${d.taskScore} · ${d.locked?"Locked":"Open"}${d.note?` · Note: ${g(d.note)}`:""}</p>
          <table style="width:100%;border-collapse:collapse;font-size:12px">
            <thead><tr><th align="left">Type</th><th align="left">Name</th><th align="left">Category</th><th>Points</th><th>Rating</th><th>Earned</th><th>Status</th></tr></thead>
            <tbody>
              ${d.habits.map(l=>`<tr><td>Habit</td><td>${g(l.name)}${l.description?` (${g(l.description)})`:""}</td><td>${g(l.category)}</td><td align="center">${l.points}${l.consciousPoints?`+${l.consciousPoints}🧠`:""}</td><td align="center">${l.rating||"-"}/5</td><td align="center">${l.earned}</td><td align="center">${l.status||(l.rating>0?"done":d.locked?"missed":"pending")}</td></tr>`).join("")}
              ${d.tasks.map(l=>`<tr><td>Task</td><td>${g(l.title)}${l.hasImage?" 📷":""}${l.description?` (${g(l.description)})`:""}</td><td>${g(l.category)}</td><td align="center">${l.points}</td><td align="center">${l.rating?`${l.rating}/5`:"-"}</td><td align="center">${l.earned}</td><td align="center">${l.status||(l.done?"done":d.locked?"missed":"pending")}</td></tr>`).join("")}
            </tbody>
          </table>
        </section>
      `).join(""),r=window.open("","_blank");if(!r){h("Popup blocked — allow popups to export PDF");return}r.document.write(`<!DOCTYPE html><html><head><title>Daily Report ${s} to ${i}</title></head><body style="font-family:sans-serif;padding:24px"><h1>Daily Report — ${s} to ${i}</h1>${o}<script>window.onload=function(){window.print()}<\/script></body></html>`),r.document.close(),h("PDF print view opened")}document.addEventListener("click",t=>{const e=t.target.closest("[data-screen]");if(e){M=e.dataset.screen,b();return}const a=t.target.closest("[data-action]");if(!a)return;const s=a.dataset.action;if(s==="close-modal"){if(x==="image"){x=null,v=null,b();return}(t.target.classList.contains("modal-backdrop")||a.classList.contains("ghost-btn"))&&(x=null,v=null,b());return}if(s==="note-bullets"){Ee("bullets");return}if(s==="note-numbered"){Ee("numbered");return}if(s==="values-bullets"){Le("bullets");return}if(s==="values-numbered"){Le("numbered");return}if(s==="pick-task-image"){const i=document.getElementById("task-image-input");i?i.click():h("Photo picking needs a browser file picker");return}if(s==="remove-task-image"){v&&(v._image="",b(),h("Photo removed — save to apply"));return}if(s==="view-task-image"){const i=u.findTask(y,a.dataset.id),n=i&&i.image?i.image:v&&(v._image||v.image)||"";if(!n){h("No photo on this task");return}x="image",v={image:n,title:i&&i.title||"Task photo"},b();return}if(s==="prev-day"&&Te(-1),s==="next-day"&&Te(1),s==="reload-app"){window.location.reload();return}if(s==="set-theme"){const i=a.dataset.theme==="light"?"light":"dark";u.setTheme(i),pa(),h(i==="light"?"Light mode on":"Dark mode on")}if(s==="install-app"){gi();return}if(s==="check-updates"){hi();return}if(s==="apply-update"){la();return}if(s==="backup-now"){ui();return}if(s==="trigger-import"){const i=document.getElementById("backup-file");i&&i.click();return}if(s==="choose-folder"){di();return}if(s==="grant-folder"){li();return}if(s==="forget-folder"){ci();return}if(s==="restore-backup"){mi(a.dataset.name);return}if(s==="goto-settings"&&(M="settings"),s==="open-add-habit"&&(x="habit",v=null),s==="open-add-task"){if(j())return;x="task",v={category:"mentally"}}if(s==="open-add"){if(j())return;x="choose",v={category:"mentally"}}if(s==="toggle-edit"&&(z=!z),s==="open-edit-habit"){const i=u.findHabit(a.dataset.id);if(!i)return;x="edit-habit",v={id:i.id,name:i.name,description:i.description||"",points:i.points,category:i.category,tags:i.tags||[],consciousPoints:Number(i.consciousPoints)||0}}if(s==="open-edit-task"){if(j())return;const i=u.findTask(y,a.dataset.id);if(!i)return;x="edit-task",v={id:i.id,title:i.title,points:i.points,description:i.description,category:i.category,tags:i.tags||[],rating:Number(i.rating)||0,image:i.image||"",_image:void 0}}if(s==="toggle-badges"&&(Ht=!Ht),s==="open-goal"&&(x="goal",v={kind:"habit-streak",targetDays:7,tier:"bronze"}),s==="open-edit-goal"){const i=u.getGoals().find(n=>n.id===a.dataset.id);if(!i)return;x="edit-goal",v={...i}}if(s==="remove-goal"&&(u.removeGoal(a.dataset.id),h("Goal removed")),s==="remove-badge"&&(u.removeBadge(a.dataset.id),h("Badge removed")),s==="rate-habit"){if(j())return;const n=u.habitRating(y,a.dataset.id)===Number(a.dataset.rating)?0:Number(a.dataset.rating);u.setHabitRating(y,a.dataset.id,n)}if(s==="rate-task"){if(j())return;const i=u.findTask(y,a.dataset.id);if(!i)return;const o=(Number(i.rating)||0)===Number(a.dataset.rating)?0:Number(a.dataset.rating);u.setTaskRating(y,a.dataset.id,o)}if(s==="open-export"&&(x="export",v={range:v&&v.range||"day"}),s==="set-export-range"){x="export",v={range:a.dataset.range||"day"},b();return}if(s==="do-export"){const i=a.dataset.format,n=v&&v.range||"day";i==="csv"&&Fe(n,y),i==="json"&&Oe(n,y),i==="pdf"&&Be(n,y),x=null,v=null}if(s==="set-histexp-range"){O=["day","week","month","year"].includes(a.dataset.range)?a.dataset.range:"day",b();return}if(s==="histexp-do"){const i=a.dataset.format;let n=y;if(O==="day"||O==="week"){const o=document.getElementById("histexp-date");o&&/^\d{4}-\d{2}-\d{2}$/.test(o.value)&&(n=o.value)}else if(O==="month"){const o=document.getElementById("histexp-month");o&&/^\d{4}-\d{2}$/.test(o.value)&&(n=`${o.value}-15`)}else if(O==="year"){const o=document.getElementById("histexp-year"),r=Number(o&&o.value);Number.isInteger(r)&&r>=2e3&&r<=2100&&(n=`${String(r)}-06-15`)}i==="csv"&&Fe(O,n),i==="json"&&Oe(O,n),i==="pdf"&&Be(O,n);return}if(s==="history-cal-nav"){const i=Mt||R(y);Mt=kt(i,Number(a.dataset.dir)||0),b();return}if(s==="locked-cal-nav"){const i=It||R(y);It=kt(i,Number(a.dataset.dir)||0),b();return}if(s==="toggle-locked-day"){const i=a.dataset.date,n=I.indexOf(i);n>=0?I.splice(n,1):I.push(i),b();return}if(s==="lock-selected"){const i=[...I].sort();if(!i.length)return;const n=u.lockDays(i);I=[],h(n===1?`Locked ${n} day`:`Locked ${n} days`),b();return}if(s==="unlock-selected"){const i=[...I].sort();if(!i.length)return;const n=u.unlockDays(i);I=[],h(n===1?`Unlocked ${n} day`:`Unlocked ${n} days`),b();return}if(s==="submit-day"&&(u.submitDay(y),h("Report submitted and locked")),s==="unlock-day"&&(u.unlockDay(a.dataset.date),h("Report unlocked")),s==="toggle-habit"){if(j())return;u.toggleHabit(y,a.dataset.id),b()}if(s==="toggle-task"){if(j())return;u.toggleTask(y,a.dataset.id),b()}if(s==="remove-task"){if(!z||j())return;u.removeTask(y,a.dataset.id),b()}if(s==="remove-habit"&&(u.removeHabit(a.dataset.id),b()),s==="restore-habit"){const i=u.restoreHabit(a.dataset.id);h(i.ok?"Habit restored":i.reason||"Could not restore that habit"),b()}if(s==="toggle-archive"){rt=!rt,b();return}if(s==="archive-habit"){u.removeHabit(a.dataset.id),rt=!0,h("Habit archived — restore it from the Archive"),b();return}if(s==="archive-task"){if(j())return;const i=u.archiveTask(y,a.dataset.id);if(!i.ok){h(i.reason||"Could not archive that task");return}rt=!0,h("Task archived — restore it from the Archive"),b();return}if(s==="restore-task"){const i=u.isLocked(y)?u.todayKey():y,n=u.restoreTask(a.dataset.id,i);h(n.ok?`Task restored to ${i}`:n.reason||"Could not restore that task"),i!==y&&(y=i),b();return}if(s==="delete-archived-task"){if(!z||!window.confirm("Delete this archived task permanently? This cannot be undone."))return;const i=u.deleteArchivedTask(a.dataset.id);h(i.ok?"Task deleted permanently":i.reason||"Could not delete"),b();return}if(s==="delete-archived-habit"){if(!window.confirm("Delete this archived habit permanently? This cannot be undone."))return;const i=u.deleteArchivedHabit(a.dataset.id);h(i.ok?"Habit deleted permanently":i.reason||"Could not delete"),b();return}if(s==="open-pin-habit"&&Ti(a.dataset.id),s==="open-forward-habit"){if(j())return;const i=u.findHabit(a.dataset.id);if(!i)return;x="forward",v={kind:"habit",id:i.id,title:i.name,from:y}}if(s==="open-forward-task"){if(j())return;const i=u.findTask(y,a.dataset.id);if(!i)return;x="forward",v={kind:"task",id:i.id,title:i.title,from:y}}if(s==="open-pin-task"){if(j())return;Di(a.dataset.id)}if(s==="open-pin-template"&&Pi(a.dataset.id),s==="unpin-template"&&(u.unpinTaskTemplate(a.dataset.id),h("Task unpinned")),s==="pick-date"&&(y=a.dataset.date,M="today"),s==="set-chart-range"){U=["week","month","year"].includes(a.dataset.range)?a.dataset.range:"week",K=0,b();return}if(s==="chart-nav"){K+=Number(a.dataset.dir)||0,K>0&&(K=0),b();return}if(s==="add-category"){const i=document.getElementById("new-category"),n=u.addCategory(i?i.value:"");h(n.ok?"Category added":n.reason||"Couldn't add category"),b();return}if(s==="rename-category"){const i=u.getCustomCategories().find(r=>r.id===a.dataset.id),n=window.prompt("Rename category",i?i.label:"");if(n==null)return;const o=u.renameCategory(a.dataset.id,n);h(o.ok?"Category renamed":o.reason||"Couldn't rename"),b();return}if(s==="delete-category"){if(!window.confirm("Delete this category? Its habits and tasks move to Mentally."))return;const i=u.deleteCategory(a.dataset.id);i.ok&&ot.delete(a.dataset.id),h(i.ok?"Category deleted":i.reason||"Couldn't delete"),b();return}if(s==="rename-tag"){const i=window.prompt("Rename tag everywhere",a.dataset.tag||"");if(i==null)return;const n=u.renameTag(a.dataset.tag,i);h(n.ok?n.merged?"Tags merged":"Tag renamed everywhere":n.reason||"Couldn't rename"),b();return}if(s==="delete-tag"){if(!window.confirm(`Delete tag "#${a.dataset.tag}" from all habits and tasks?`))return;u.deleteTag(a.dataset.tag),h("Tag deleted everywhere"),b();return}if(s==="add-tag"){const i=document.getElementById("tag-habit-pick"),n=document.getElementById("new-tag"),o=u.addTagToHabit(i?i.value:"",n?n.value:"");h(o.ok?"Tag added to habit":o.reason||"Couldn't add tag"),b();return}if(s==="set-points"){const i=document.querySelector('input[name="points"]');i&&(i.value=a.dataset.points),document.querySelectorAll(".chip-row .chip[data-points]").forEach(n=>n.classList.remove("on")),a.classList.add("on");return}if(s==="set-category"){const i=a.closest("form")||a.closest(".sheet"),n=i.querySelector('input[name="category"]');n&&(n.value=a.dataset.category),i.querySelectorAll(".cat-row .chip").forEach(o=>o.classList.remove("on")),a.classList.add("on");return}if(s==="set-rating"){const i=a.closest(".sheet")||a.closest("form")||document,n=i.querySelector('input[name="rating"]');n&&(n.value=a.dataset.rating),i.querySelectorAll(".rating-row .chip").forEach(o=>o.classList.remove("on")),a.classList.add("on");return}if(s==="set-conscious"){const i=a.closest(".sheet")||a.closest("form")||document,n=i.querySelector('input[name="consciousPoints"]');n&&(n.value=a.dataset.conscious),i.querySelectorAll(".conscious-row .chip").forEach(o=>o.classList.remove("on")),a.classList.add("on");return}if(s==="set-goal-kind"){const i=a.closest(".sheet")||document,n=i.querySelector('input[name="kind"]');n&&(n.value=a.dataset.kind),i.querySelectorAll(".goal-kind-row .chip").forEach(l=>l.classList.remove("on")),a.classList.add("on");const o=a.dataset.kind,r=i.querySelector(".goal-target-habit"),d=i.querySelector(".goal-target-task");r&&(r.style.display=o==="habit-streak"?"":"none"),d&&(d.style.display=o==="task-streak"?"":"none"),v&&(v.kind=o);return}if(s==="set-goal-tier"){const i=a.closest(".sheet")||document,n=i.querySelector('input[name="tier"]');n&&(n.value=a.dataset.tier),i.querySelectorAll(".goal-tier-row .chip").forEach(o=>o.classList.remove("on")),a.classList.add("on");return}if(s==="pin-mode"){const i=a.closest("form"),n=a.dataset.mode;i.querySelector('input[name="mode"]').value=n,i.querySelectorAll(".pin-modes .chip").forEach(r=>r.classList.remove("on")),a.classList.add("on");const o=(r,d)=>{const l=i.querySelector(r);l&&(l.style.display=d?"":"none")};o(".pin-until",n==="until"),o(".pin-weekdays",n==="weekly"),o(".pin-monthdays",n==="monthly"),o(".pin-yeardays",n==="yearly"),v&&v.pin&&(v.pin.mode=n);return}if(s==="toggle-weekday"){a.classList.toggle("on");return}if(s==="toggle-monthday"){a.classList.toggle("on");return}if(s==="pin-cal-nav"){if(!v)return;const i=a.dataset.target,n=Number(a.dataset.dir)||0;i==="except"?v._exceptCal=kt(v._exceptCal||R(y),n):v._customCal=kt(v._customCal||R(y),n),b();return}if(s==="toggle-pin-date"){if(!v||!v.pin)return;const i=a.dataset.target,n=a.dataset.date,o=i==="custom"?"customDates":"exceptDates",r=Array.isArray(v.pin[o])?[...v.pin[o]]:[],d=r.indexOf(n);d>=0?r.splice(d,1):(r.push(n),r.length>365&&r.shift()),v.pin[o]=r.sort(),b();return}if(s==="add-year-day"){if(!v||!v.pin)return;const i=a.closest("form")||document,n=i.querySelector("#year-month-select"),o=i.querySelector("#year-day-select");n&&(v._yearMonth=n.value);const r=`${n?n.value:"01"}-${o?o.value:"01"}`,d=Array.isArray(v.pin.yearDays)?[...v.pin.yearDays]:[];d.includes(r)||d.push(r),v.pin.yearDays=d.sort(),b();return}if(s==="remove-year-day"){if(!v||!v.pin)return;const i=a.dataset.date;v.pin.yearDays=(v.pin.yearDays||[]).filter(n=>n!==i),b();return}if(s==="clear-pin"){const i=a.closest("form"),n=i.dataset.kind,o=i.dataset.id;if(n==="habit"&&u.unpinHabit(o),n==="task"){const r=u.findTask(y,o);r!=null&&r.sourcePinId&&u.unpinTaskTemplate(r.sourcePinId)}n==="template"&&u.unpinTaskTemplate(o),x=null,v=null,h("Unpinned"),b();return}if(s==="lock-profile"){u.setProfileLocked(!0),h("Profile locked — read only"),b();return}if(s==="unlock-profile"){u.setProfileLocked(!1),h("Profile unlocked"),b();return}if(s==="add-whoami"){const i=document.getElementById("new-whoami"),n=u.addWhoAmI(i?i.value:"");h(n.ok?"Added":n.reason||"Couldn't add"),b();return}if(s==="move-whoami"){u.moveWhoAmI(a.dataset.id,Number(a.dataset.dir)||0),b();return}if(s==="remove-whoami"){u.removeWhoAmI(a.dataset.id),h("Removed"),b();return}if(s==="add-lifearea"){const i=document.getElementById("new-lifearea"),n=u.addLifeArea(i?i.value:"");n.ok?(ct=n.id,h("Life area added")):h(n.reason||"Couldn't add"),b();return}if(s==="toggle-lifearea"){const i=a.dataset.id;ct=ct===i?null:i,b();return}if(s==="move-lifearea"){u.moveLifeArea(a.dataset.id,Number(a.dataset.dir)||0),b();return}if(s==="toggle-cat"){const i=a.dataset.id;ot.has(i)?ot.delete(i):ot.add(i),b();const n=document.querySelector(`[data-action="toggle-cat"][data-id="${CSS.escape(i)}"]`);n&&n.focus({preventScroll:!0});return}if(s==="expand-cats"){u.getCategories().forEach(i=>ot.add(i.id)),b();return}if(s==="collapse-cats"){ot.clear(),b();return}if(s==="save-cat-goals"){const i=a.dataset.id,n=document.querySelector(`[data-cat-goals="${CSS.escape(i)}"]`),o=n?n.value:mt.get(i)||"",r=St(o);u.updateCategory(i,{goals:xt(r)}),mt.delete(i),h(r.length?`Saved ${r.length} goal${r.length===1?"":"s"} for ${et(i)}`:`Cleared goals for ${et(i)}`),b();return}if(s==="reset-cat-goals"){const i=a.dataset.id;mt.delete(i),b();return}if(s==="remove-lifearea"){u.removeLifeArea(a.dataset.id),ct===a.dataset.id&&(ct=null),h("Life area removed"),b();return}if(s==="set-pgoal-term"){Q=["short","medium","long"].includes(a.dataset.term)?a.dataset.term:"short",gt=u.profileGoalDurations()[Q][0],b();return}if(s==="set-pgoal-filter"){Et=["all","short","medium","long"].includes(a.dataset.filter)?a.dataset.filter:"all",b();return}if(s==="add-pgoal"){const i=document.getElementById("new-pgoal"),n=document.getElementById("new-pgoal-duration"),o=u.addProfileGoal(i?i.value:"",Q,n?n.value:gt);h(o.ok?`Goal added ${Lt(Q)}`:o.reason||"Couldn't add"),b();return}if(s==="remove-pgoal"){u.removeProfileGoal(a.dataset.id),h("Goal removed"),b();return}if(s==="add-idea"){const i=document.getElementById("new-idea"),n=String(i?i.value:"").trim().slice(0,200);if(!n){h("Write an idea first");return}if(u.isProfileLocked()){h("Profile is locked");return}const o=String(u.getProfile().ideas||"").split(`
`).map(r=>r.trim()).filter(Boolean);o.push(`• ${n}`),u.setProfileField("ideas",o.join(`
`)),h("Idea added"),b();return}if(s==="remove-idea"){if(u.isProfileLocked())return;const i=Number(a.dataset.index),n=String(u.getProfile().ideas||"").split(`
`).filter(o=>o.trim());if(!Number.isInteger(i)||i<0||i>=n.length)return;n.splice(i,1),u.setProfileField("ideas",n.join(`
`)),h("Idea removed"),b();return}if(s==="add-quote"){const i=document.getElementById("new-quote"),n=document.getElementById("new-quote-author"),o=u.addQuote(i?i.value:"",n?n.value:"");h(o.ok?"Quote added":o.reason||"Couldn't add"),b();return}if(s==="toggle-quote-fav"){u.toggleQuoteFav(a.dataset.id),b();return}if(s==="remove-quote"){u.removeQuote(a.dataset.id),h("Quote removed"),b();return}if(s==="toggle-quotes"){wt=!wt,b();return}b()});document.addEventListener("submit",t=>{const e=t.target.closest("[data-form]");if(!e)return;t.preventDefault();const a=e.dataset.form;if(a==="habit"||a==="task"||a==="edit-habit"||a==="edit-task"){const s=new FormData(e),i=String(s.get("title")||""),n=Number(s.get("points")||0),o=String(s.get("category")||"mentally"),r=String(s.get("description")||""),d=String(s.get("tags")||""),l=Math.max(0,Math.min(5,Number(s.get("rating")||0))),m=Math.max(0,Math.min(100,Number(s.get("consciousPoints")||0)));if(!i.trim())return;const w=v&&v._image!==void 0?Y(v._image):Y(v&&v.image);if(a==="habit")u.addHabit(i,n,{description:r,category:o,consciousPoints:m,tags:d,startFrom:y}),h("Habit added");else if(a==="task"){if(j())return;u.addTask(y,i,n,{description:r,category:o,rating:l,tags:d,image:w}),h("Task added")}else if(a==="edit-habit")u.updateHabit(e.dataset.id,{name:i,description:r,points:n,category:o,consciousPoints:m,tags:d}),h("Habit updated");else{if(j())return;u.updateTask(y,e.dataset.id,{title:i,points:n,description:r,category:o,rating:l,tags:d,image:w}),h("Task updated")}x=null,v=null,b();return}if(a==="pin"){const s=Ci(e);if(!s)return;const i=e.dataset.kind,n=e.dataset.id;i==="habit"&&u.pinHabit(n,s),i==="task"&&u.pinTask(y,n,s),i==="template"&&u.updatePinnedTask(n,s),x=null,v=null,h("Pin saved"),b();return}if(a==="forward"){const s=new FormData(e),i=String(s.get("targetDate")||""),n=e.dataset.kind,o=e.dataset.id,r=v&&v.from||y;if(!/^\d{4}-\d{2}-\d{2}$/.test(i)){h("Pick a valid date");return}const d=n==="habit"?u.forwardHabit(r,o,i):u.forwardTask(r,o,i);if(!d.ok){h(d.reason||"Could not forward");return}x=null,v=null,y=i,M="today",h(`Forwarded to ${i}`),b();return}if(a==="goal"||a==="edit-goal"){const s=new FormData(e),i=String(s.get("title")||"").trim(),n=String(s.get("kind")||"habit-streak"),o=String(s.get("tier")||"bronze"),r=String(s.get("rewardTitle")||"").trim(),d=Math.max(1,Math.min(365,Number(s.get("targetDays")||7)));if(!i||!r){h("Goal title and reward title are required");return}let l="";if(n==="habit-streak"&&(l=String(s.get("habitTarget")||"")),n==="task-streak"&&(l=String(s.get("taskTarget")||"")),(n==="habit-streak"||n==="task-streak")&&!l){h(n==="habit-streak"?"Pick a habit":"Pin a task first, then pick it");return}a==="goal"?(u.addGoal({title:i,kind:n,targetId:l,targetDays:d,tier:o,rewardTitle:r}),h("Goal added")):(u.updateGoal(e.dataset.id,{title:i,kind:n,targetId:l,targetDays:d,tier:o,rewardTitle:r}),h("Goal updated"));const m=u.checkGoals(y);m.length&&h(`🏅 Reward earned: ${m[0].rewardTitle}!`),x=null,v=null,b()}});document.addEventListener("change",t=>{const e=t.target.closest(".sort-select");if(e){const a=e.dataset.sortKind;a==="habit"&&u.setHabitSort(e.value),a==="task"&&u.setTaskSort(e.value),b()}if(t.target&&t.target.id==="show-conscious"&&(u.setShowConscious(t.target.checked),h(t.target.checked?"Conscious points on":"Conscious points hidden"),b()),t.target&&t.target.id==="week-start"&&(u.setWeekStart(Number(t.target.value)),h("Week starts on "+t.target.selectedOptions[0].textContent),b()),t.target&&t.target.id==="new-pgoal-duration"){gt=t.target.value;return}if(t.target&&t.target.id==="year-month-select"&&v&&(v._yearMonth=t.target.value),t.target&&t.target.id==="task-image-input"){const a=t.target.files&&t.target.files[0];if(!a)return;if(!String(a.type||"").startsWith("image/")){h("Please pick an image file"),t.target.value="";return}h("Processing photo…"),Fa(a).then(s=>{if(t.target.value="",!s){h("Photo too large or unreadable — try a smaller one");return}v&&(v._image=s,b(),h("Photo attached — save to apply"))})}});if("serviceWorker"in navigator){window.addEventListener("load",()=>{navigator.serviceWorker.register("./sw.js").catch(()=>{})});let t=!1;try{sessionStorage.getItem("dr-updated-reload")&&(t=!0)}catch{}navigator.serviceWorker.addEventListener("controllerchange",()=>{if(!t){t=!0;try{sessionStorage.setItem("dr-updated-reload","1")}catch{}window.location.reload()}})}function Ei(){const t=document.getElementById("boot-error");t&&(t.style.display="none")}Ei();pa();b();oi().then(()=>{M==="settings"&&b()});setInterval(()=>{!document.hidden&&le()&&b()},6e4);document.addEventListener("visibilitychange",()=>{!document.hidden&&le()&&b()});
