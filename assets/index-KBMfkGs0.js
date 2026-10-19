(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function a(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=a(i);fetch(i.href,n)}})();const ze="daily-report-v2",Tt=[{id:"mentally",label:"Mentally"},{id:"psychology",label:"Psychology"},{id:"physically",label:"Physically"},{id:"spiritually",label:"Spiritually"},{id:"socially",label:"Socially"}];Tt.map(t=>t.id);const Ye=[{id:"h1",name:"Wake up early",points:10,icon:"sunrise",category:"physically",pin:{mode:"forever"}},{id:"h2",name:"Drink water",points:5,icon:"drop",category:"physically",pin:{mode:"forever"}},{id:"h3",name:"Exercise",points:15,icon:"bolt",category:"physically",pin:{mode:"forever"}},{id:"h4",name:"Read 20 minutes",points:10,icon:"book",category:"mentally",pin:{mode:"forever"}},{id:"h5",name:"No junk food",points:10,icon:"leaf",category:"physically",pin:{mode:"forever"}}],Ve={lockTime:"21:00",autoLock:!0,showConscious:!0,habitSort:"default",taskSort:"default",theme:"dark",habitOrder:[],pinnedTaskOrder:[],weekStart:1};function Kt(t){const e=Number(t);return Number.isInteger(e)&&e>=0&&e<=6?e:1}const Dt=[{id:"iron",label:"Iron",medal:"🥉",rank:1},{id:"bronze",label:"Bronze",medal:"🥉",rank:2},{id:"silver",label:"Silver",medal:"🥈",rank:3},{id:"gold",label:"Gold",medal:"🥇",rank:4}],Je=[{id:"habit-streak",label:"Habit streak"},{id:"task-streak",label:"Pinned task streak"},{id:"perfect-days",label:"Perfect days (100%)"}];function Se(t){var e;return((e=Dt.find(a=>a.id===t))==null?void 0:e.rank)||0}function te(t){var e;return((e=Dt.find(a=>a.id===t))==null?void 0:e.medal)||"🏅"}function Qe(t){var e;return((e=Dt.find(a=>a.id===t))==null?void 0:e.label)||t||"Badge"}function D(t){const e=Array.isArray(t)?t:String(t||"").split(","),a=[];return e.forEach(s=>{const i=String(s||"").trim().slice(0,20);i&&!a.some(n=>n.toLowerCase()===i.toLowerCase())&&a.push(i),a.length>=10}),a.slice(0,10)}function Vt(t,e){const a=[...t];return e==="points"?a.sort((s,i)=>(Number(i.points)||0)-(Number(s.points)||0)):e==="category"?a.sort((s,i)=>et(E(s.category)).localeCompare(et(E(i.category)))):e==="tags"&&a.sort((s,i)=>(s.tags&&s.tags[0]||"~~~").localeCompare(i.tags&&i.tags[0]||"~~~")),a}const pt=[{value:1,label:"Mon"},{value:2,label:"Tue"},{value:3,label:"Wed"},{value:4,label:"Thu"},{value:5,label:"Fri"},{value:6,label:"Sat"},{value:0,label:"Sun"}];function j(t=new Date){const e=t.getFullYear(),a=String(t.getMonth()+1).padStart(2,"0"),s=String(t.getDate()).padStart(2,"0");return`${e}-${a}-${s}`}function me(){return{habits:{},habitRatings:{},habitMissed:{},habitForwarded:{},tasks:[],note:"",locked:!1,lockOverride:null,submittedAt:null,lockedHabits:null,skippedPins:[]}}var B=[],X={};function $a(t){const e=X[t.id];return e?{...t,color:e.color||t.color,goals:e.goals!==void 0?e.goals:t.goals}:t}function Z(){return[...Tt.map($a),...B]}function E(t){return Z().map(a=>a.id).includes(t)?t:"mentally"}function et(t){var e;return((e=Z().find(a=>a.id===t))==null?void 0:e.label)||"Mentally"}const Mt=7e5;function G(t){const e=String(t||"");return e.startsWith("data:image/")?e.length>Mt?"":e:""}function xe(t){const e=Math.max(0,Math.min(5,Number(t.rating)||0)),a=i=>/^\d{4}-\d{2}-\d{2}$/.test(String(i||""))?String(i):"",s=i=>Array.isArray(i)?i.filter(n=>/^\d{4}-\d{2}-\d{2}$/.test(String(n))).map(String).slice(0,50):[];return{...t,description:t.description||"",category:E(t.category),tags:D(t.tags),rating:e,done:!!t.done,missed:!!t.missed,forwardedFrom:a(t.forwardedFrom),forwardedHabitId:String(t.forwardedHabitId||""),forwardedTo:s(t.forwardedTo),image:G(t.image)}}function z(t){const e=Number(t);return!Number.isFinite(e)||e<0?0:Math.min(100,Math.round(e))}function Pt(t){const e=String(t??"").slice(0,10);return/^\d{4}-\d{2}-\d{2}$/.test(e)?e:""}function Ct(t,e){const a=Pt(t&&t.startFrom);return a?String(e)>=a:!0}function ge(t,e){return{id:String(t.id||""),name:String(t.name||"").slice(0,80),description:String(t.description||"").slice(0,2e3),points:Number(t.points)||0,icon:t.icon||"star",category:E(t.category),consciousPoints:z(t.consciousPoints),tags:D(t.tags),pin:F(t.pin),startFrom:Pt(t.startFrom),archivedAt:e||t.archivedAt||null}}function Xe(t,e,a){const s=/^\d{4}-\d{2}-\d{2}$/.test(String(a||""))?String(a):"",i=/^\d{4}-\d{2}-\d{2}$/.test(String(t&&t.forwardedFrom||""))?String(t.forwardedFrom):s;return{id:String(t.id||""),title:String(t.title||"Task").slice(0,120),points:Number(t.points)||0,description:String(t.description||"").slice(0,500),category:E(t.category),tags:D(t.tags),image:G(t.image),fromDate:s,originDate:i,archivedAt:e||t.archivedAt||null,sourcePinId:String(t.sourcePinId||"")}}function ka(t){return Array.isArray(t)?t.filter(e=>e&&typeof e=="object"&&e.id).map(e=>Xe(e,e.archivedAt||null,e.fromDate)).filter(e=>e.id.length<=80).slice(0,500):[]}function F(t){if(!t||!t.mode)return null;const e=(i,n,r)=>Array.isArray(i)?i.map(Number).filter(o=>Number.isFinite(o)&&o>=n&&o<=r):[],a=i=>Array.isArray(i)?i.filter(n=>/^\d{4}-\d{2}-\d{2}$/.test(String(n))).map(String).slice(0,365):[],s=i=>Array.isArray(i)?i.filter(n=>/^\d{2}-\d{2}$/.test(String(n))).map(String).slice(0,366):[];return{mode:["forever","until","weekly","monthly","yearly","custom"].includes(t.mode)?t.mode:"forever",until:t.until||"",weekdays:e(t.weekdays,0,6),monthDays:e(t.monthDays,1,31),yearDays:s(t.yearDays),customDates:a(t.customDates),exceptDates:a(t.exceptDates||t.exceptions)}}function wa(t,e){const a=`${t} ${e}`.toLowerCase();return a.includes("read")||a.includes("study")||a.includes("learn")?"mentally":a.includes("meditat")||a.includes("pray")||a.includes("journal")?"spiritually":a.includes("mood")||a.includes("calm")||a.includes("therapy")?"psychology":a.includes("friend")||a.includes("family")||a.includes("social")||a.includes("call")||a.includes("visit")?"socially":"physically"}function ee(t){const e=Je.some(a=>a.id===t.kind)?t.kind:"habit-streak";return{id:String(t.id||`g${Date.now()}`),title:String(t.title||"").trim().slice(0,60)||"My goal",kind:e,targetId:String(t.targetId||""),targetDays:Math.max(1,Math.min(365,Number(t.targetDays)||7)),tier:Dt.some(a=>a.id===t.tier)?t.tier:"bronze",rewardTitle:String(t.rewardTitle||"").trim().slice(0,60)||"Reward",createdAt:t.createdAt||new Date().toISOString()}}function Sa(t){if(!Array.isArray(t))return[];const e=new Set(Tt.map(s=>s.id)),a=[];return t.forEach(s=>{if(!s||typeof s!="object")return;const i=String(s.id||"").trim().slice(0,40),n=String(s.label||"").trim().slice(0,30);!i||!n||e.has(i.toLowerCase())||(e.add(i.toLowerCase()),a.push({id:i,label:n,color:String(s.color||"").slice(0,20),goals:String(s.goals||"").slice(0,1e3)}))}),a.slice(0,20)}function xa(t){const e=t&&typeof t=="object"?t:{},a={};return Tt.forEach(s=>{const i=e[s.id];if(!i||typeof i!="object")return;const n=String(i.color||"").trim().slice(0,20),r=i.goals===void 0?void 0:String(i.goals||"").slice(0,1e3);!n&&r===void 0||(a[s.id]={},n&&(a[s.id].color=n),r!==void 0&&(a[s.id].goals=r))}),a}const ae={name:80,wantToBe:1e3,vision:1e3,values:1e3,ideas:4e3},ie=["short","medium","long"],$t={short:["1 Week","2 Weeks","3 Weeks","4 Weeks"],medium:["1 Month","2 Months","3 Months"],long:["1 Year","2 Years","3 Years","5 Years","10+ Years"]};function q(t){return`${t||"id"}${Date.now().toString(36)}${Math.floor(Math.random()*9999)}`}function Aa(t){return Array.isArray(t)?t.map(e=>{if(typeof e=="string")return{id:q("w"),text:e.trim().slice(0,120)};if(!e||typeof e!="object")return null;const a=String(e.text||e.label||e.name||"").trim().slice(0,120);return a?{id:String(e.id||q("w")),text:a}:null}).filter(Boolean).slice(0,50):[]}function Ta(t){return typeof t=="string"?t.split(`
`).map(e=>e.trim().replace(/^[-•*]\s+/,"")).filter(Boolean).slice(0,20).map(e=>({id:q("a"),title:e.slice(0,60),description:""})):Array.isArray(t)?t.map(e=>{if(typeof e=="string"){const s=e.trim().slice(0,60);return s?{id:q("a"),title:s,description:""}:null}if(!e||typeof e!="object")return null;const a=String(e.title||e.name||"").trim().slice(0,60);return a?{id:String(e.id||q("a")),title:a,description:String(e.description||"").slice(0,1e3)}:null}).filter(Boolean).slice(0,20):[]}function Da(t){return Array.isArray(t)?t.map(e=>{if(typeof e=="string"){const r=e.trim().slice(0,200);return r?{id:q("g"),text:r,term:"short",duration:"1 Week",createdAt:new Date().toISOString()}:null}if(!e||typeof e!="object")return null;const a=String(e.text||e.title||"").trim().slice(0,200);if(!a)return null;const s=ie.includes(e.term)?e.term:"short",i=$t[s],n=i.includes(e.duration)?e.duration:i[0];return{id:String(e.id||q("g")),text:a,term:s,duration:n,createdAt:e.createdAt||new Date().toISOString()}}).filter(Boolean).slice(0,100):[]}function Pa(t){return Array.isArray(t)?t.map(e=>{if(typeof e=="string"){const s=e.trim().slice(0,500);return s?{id:q("q"),text:s,author:"",fav:!1,createdAt:new Date().toISOString()}:null}if(!e||typeof e!="object")return null;const a=String(e.text||e.quote||"").trim().slice(0,500);return a?{id:String(e.id||q("q")),text:a,author:String(e.author||"").trim().slice(0,80),fav:!!(e.fav||e.favorite),createdAt:e.createdAt||new Date().toISOString()}:null}).filter(Boolean).slice(0,200):[]}function wt(t){const e=t&&typeof t=="object"?t:{},a={};Object.entries(ae).forEach(([i,n])=>{i==="wantToBe"&&!e.wantToBe&&e.about?a[i]=String(e.about||"").slice(0,n):a[i]=String(e[i]||"").slice(0,n)}),a.locked=!!e.locked,a.whoAmI=Aa(e.whoAmI||e.whoIAm||[]),a.lifeAreas=Ta(Array.isArray(e.lifeAreas)||typeof e.lifeAreas=="string"?e.lifeAreas:[]);let s=Da(e.pGoals||e.goalsList||e.profileGoals||[]);return s.length||[["goalsShort","short","1 Week"],["goalsMid","medium","1 Month"],["goalsLong","long","1 Year"]].forEach(([n,r,o])=>{const d=String(e[n]||"");d.trim()&&d.split(`
`).map(c=>c.trim().replace(/^[-•*]\s+/,"")).filter(Boolean).forEach(c=>{s.length>=100||s.push({id:q("g"),text:c.slice(0,200),term:r,duration:o,createdAt:new Date().toISOString()})})}),a.pGoals=s,a.quotes=Pa(e.quotes||e.favQuotes||[]),a}function Ca(t,e){const a=String(t&&t.installedAt||"");if(/^\d{4}-\d{2}-\d{2}/.test(a))return a;const s=Object.keys(e||{}).sort();return s.length?`${s[0]}T00:00:00.000`:new Date().toISOString()}function Ea(t,e){if(!t)return!1;if(zt(t,e)>0)return!0;const a=t.habitForwarded&&t.habitForwarded[e];return Array.isArray(a)&&a.length>0?!0:Array.isArray(t.tasks)&&t.tasks.some(s=>String(s&&s.forwardedHabitId||"")===String(e))}function La(t,e){return!t||!Array.isArray(t.lockedHabits)?!1:t.lockedHabits.some(a=>String(a&&a.id||"")===String(e))}function Ha(t,e,a){const s=String(t||"");for(const i of e){const n=a[i];if(Ea(n,s)||La(n,s))return i}return""}function Ma(t,e){const a=Object.keys(e).sort(),s=a[0]||"";return t.map(i=>{const n=Pt(i&&i.startFrom);return n?{...i,startFrom:n}:{...i,startFrom:Ha(i&&i.id,a,e)||s}})}function Na(t,e){const a=Object.keys(e).sort(),s=a[0]||"",i={};return a.forEach(n=>{const r=e[n]&&e[n].tasks;Array.isArray(r)&&r.forEach(o=>{const d=String(o&&o.sourcePinId||"");!d||i[d]||(i[d]=n)})}),t.map(n=>{const r=Pt(n&&n.startFrom);if(r)return{...n,startFrom:r};const o=String(n&&n.id||"");return{...n,startFrom:i[o]||s}})}function Ze(t){const e=new Set,a=new Set,s=new Set;return t.filter(i=>{if(!i||typeof i!="object")return!1;const n=String(i.id||"");if(n&&e.has(n))return!1;n&&e.add(n);const r=String(i.sourcePinId||"");if(r){if(a.has(r))return!1;a.add(r)}const o=`${String(i.title||"").trim().toLowerCase()}|${Number(i.points)||0}|${String(i.category||"")}`;return s.has(o)?!1:(s.add(o),!0)})}function Ke(t){B=Sa(t.customCategories||[]),X=xa(t.categoryOverrides);const e={};Object.entries(t.days||{}).forEach(([o,d])=>{e[o]={...me(),habits:d.habits||{},habitRatings:d.habitRatings||{},habitMissed:d.habitMissed||{},habitForwarded:d.habitForwarded&&typeof d.habitForwarded=="object"?d.habitForwarded:{},tasks:Ze(Array.isArray(d.tasks)?d.tasks.map(xe):[]),note:d.note||"",locked:!!d.locked,lockOverride:d.lockOverride||(d.locked?"locked":null),submittedAt:d.submittedAt||null,lockedHabits:Array.isArray(d.lockedHabits)?d.lockedHabits:null,skippedPins:Array.isArray(d.skippedPins)?d.skippedPins.map(String).filter(c=>c.length<=60).slice(0,100):[]}});const a=Ma(Array.isArray(t.habits)&&t.habits.length?t.habits:Ye,e).map(o=>({...o,description:String(o.description||"").slice(0,2e3),category:E(o.category||wa(o.id,o.name)),consciousPoints:z(o.consciousPoints),tags:D(o.tags),pin:F(o.pin)})),s=(Array.isArray(t.archivedHabits)?t.archivedHabits:[]).filter(o=>o&&typeof o=="object"&&o.id).map(o=>ge(o,o.archivedAt||null)).filter(o=>o.id.length<=60).slice(0,500),i=Na(Array.isArray(t.pinnedTasks)?t.pinnedTasks.map(o=>({...xe(o),pin:F(o.pin)})):[],e),n=new Map(i.map(o=>[String(o.id),o])),r=new Map;return Object.entries(e).sort(([o],[d])=>o.localeCompare(d)).forEach(([o,d])=>{d.tasks.forEach(c=>{const g=F(c.pin);if(!g)return;const v=String(c.sourcePinId||""),p=v?n.get(v):null;if(p){p.pin||(p.pin=g);return}const w=[String(c.title||"").trim().toLowerCase(),Number(c.points)||0,String(c.category||""),String(c.description||""),JSON.stringify(D(c.tags)),G(c.image),JSON.stringify(g)].join("|"),P=r.get(v||w);if(P){c.sourcePinId=P.id;return}const S=v||`legacy-pin-${String(c.id||"task").slice(0,48)}`,f={id:S,title:String(c.title||"Task").slice(0,120),points:Number(c.points)||0,description:String(c.description||"").slice(0,500),category:E(c.category),tags:D(c.tags),pin:g,startFrom:o,image:G(c.image)};i.push(f),n.set(S,f),r.set(v||w,f),c.sourcePinId=S})}),{habits:a,archivedHabits:s,archivedTasks:ka(t.archivedTasks),customCategories:B,categoryOverrides:X,installedAt:Ca(t,e),profile:wt(t.profile),pinnedTasks:i,days:e,goals:Array.isArray(t.goals)?t.goals.map(ee):[],badges:Array.isArray(t.badges)?t.badges.filter(o=>o&&o.id&&o.goalId).map(o=>({id:String(o.id),goalId:String(o.goalId),title:String(o.title||""),tier:o.tier||"bronze",rewardTitle:String(o.rewardTitle||""),earnedAt:o.earnedAt||new Date().toISOString()})):[],settings:{lockTime:t.settings&&t.settings.lockTime||Ve.lockTime,autoLock:!t.settings||t.settings.autoLock!==!1,showConscious:!t.settings||t.settings.showConscious!==!1,habitSort:["default","points","category","tags","custom"].includes(t.settings&&t.settings.habitSort)?t.settings.habitSort:"default",taskSort:["default","points","category","tags","custom"].includes(t.settings&&t.settings.taskSort)?t.settings.taskSort:"default",theme:["light","dark"].includes(t.settings&&t.settings.theme)?t.settings.theme:"dark",weekStart:Kt(t.settings&&t.settings.weekStart),habitOrder:Array.isArray(t.settings&&t.settings.habitOrder)?t.settings.habitOrder.map(String).filter(Boolean).slice(0,300):[],pinnedTaskOrder:Array.isArray(t.settings&&t.settings.pinnedTaskOrder)?t.settings.pinnedTaskOrder.map(String).filter(Boolean).slice(0,300):[]}}}function Ae(){const t=j();return{habits:Ye.map(e=>({...e,description:"",tags:[],startFrom:t})),archivedHabits:[],archivedTasks:[],customCategories:[],categoryOverrides:{},installedAt:new Date().toISOString(),profile:wt({}),pinnedTasks:[],days:{},goals:[],badges:[],settings:{...Ve}}}function Ia(){try{const t=localStorage.getItem(ze)||localStorage.getItem("daily-report-v1");return t?Ke(JSON.parse(t)):Ae()}catch{return Ae()}}let l=Ia();B=l.customCategories||[];l.customCategories=B;X=l.categoryOverrides||{};l.categoryOverrides=X;let ta=0,Jt={key:null,value:null},se=0;function fe(){return se>0}function at(t){se+=1;try{return t()}finally{se-=1}}function k(){ta+=1;try{localStorage.setItem(ze,JSON.stringify(l))}catch{}}let Te=0;function nt(t){return Te+=1,`${t||"id"}${Date.now().toString(36)}${Te.toString(36)}${Math.floor(Math.random()*1296).toString(36)}`}function Ra(t){return new Date(`${t}T00:00:00`).getDay()}function Ot(t){const e=new Date(`${t}T00:00:00`);return e.setDate(e.getDate()+1),j(e)}function yt(t){const e=new Date(`${t}T00:00:00`);return e.setDate(e.getDate()-1),j(e)}function Et(t,e){if(!t)return!0;if(Array.isArray(t.exceptDates)&&t.exceptDates.includes(e)||Array.isArray(t.exceptions)&&t.exceptions.includes(e))return!1;if((Array.isArray(t.customDates)?t.customDates:[]).includes(e)||t.mode==="forever")return!0;if(t.mode==="until")return!!t.until&&e<=t.until;if(t.mode==="weekly")return Array.isArray(t.weekdays)&&t.weekdays.includes(Ra(e));if(t.mode==="monthly"){const s=Array.isArray(t.monthDays)?t.monthDays.map(Number):[];return s.length?s.includes(Number(String(e).slice(8,10))):!0}if(t.mode==="yearly"){const s=Array.isArray(t.yearDays)?t.yearDays:[];return s.length?s.includes(String(e).slice(5,10)):!0}return t.mode!=="custom"}function gt(t){if(!t)return"Not pinned";const e=(t.exceptDates||t.exceptions||[]).length,a=e?` · ⛔ ${e} exception${e>1?"s":""}`:"",s=t.mode==="custom"?0:Array.isArray(t.customDates)?t.customDates.length:0,i=s?` +${s} custom`:"";if(t.mode==="forever")return`Pinned forever${i}${a}`;if(t.mode==="until")return`${t.until?`Pinned until ${t.until}`:"Pinned until a date"}${i}${a}`;if(t.mode==="weekly"){const n=Array.isArray(t.weekdays)?t.weekdays:[],r=pt.filter(o=>n.includes(o.value)).map(o=>o.label);return`${r.length?`Weekly: ${r.join(", ")}`:"Weekly (no days)"}${i}${a}`}if(t.mode==="monthly"){const n=Array.isArray(t.monthDays)?t.monthDays:[];return`${n.length?`Monthly: day${n.length>1?"s":""} ${[...n].sort((r,o)=>r-o).join(", ")}`:"Monthly"}${i}${a}`}if(t.mode==="yearly"){const n=Array.isArray(t.yearDays)?t.yearDays:[];return`${n.length?`Yearly: ${[...n].sort().join(", ")}`:"Yearly"}${i}${a}`}if(t.mode==="custom"){const n=Array.isArray(t.customDates)?t.customDates:[];return`${n.length?`Custom: ${n.length} date${n.length>1?"s":""}`:"Custom dates"}${a}`}return"Pinned"}function ne(t){const[e,a]=(l.settings.lockTime||"21:00").split(":").map(Number),s=new Date(`${t}T00:00:00`);return s.setHours(e||0,a||0,0,0),s}function he(t){const e=l.days[t];return e?e.lockOverride==="locked"||e.locked===!0:!1}function zt(t,e){return t?t.habitRatings&&t.habitRatings[e]!=null?Number(t.habitRatings[e])||0:t.habits&&t.habits[e]?5:0:0}function oe(t,e){return zt(l.days[t],e)}function Oa(t,e){if(!t)return!1;if(zt(t,e)>0||t.habitMissed&&t.habitMissed[e])return!0;const s=t.habitForwarded&&t.habitForwarded[e];return Array.isArray(s)&&s.length>0?!0:Array.isArray(t.tasks)&&t.tasks.some(i=>String(i&&i.forwardedHabitId||"")===String(e))}function ea(t){if(!t)return[...l.habits];const e=l.habits.filter(s=>Ct(s,t)&&Et(s.pin,t)),a=l.days[t];if(a){const s=new Set(e.map(n=>n.id)),i=n=>{!n||s.has(n.id)||Oa(a,n.id)&&(s.add(n.id),e.push(n))};l.habits.forEach(i),he(t)&&l.archivedHabits&&l.archivedHabits.length&&l.archivedHabits.forEach(i)}return e}function Ht(t,e){if(!Array.isArray(e)||!e.length)return t;const a=new Map(e.map((s,i)=>[String(s),i]));return t.some(s=>a.has(String(s&&s.id)))?t.map((s,i)=>({item:s,i})).sort((s,i)=>{const n=a.has(String(s.item&&s.item.id))?a.get(String(s.item.id)):Number.MAX_SAFE_INTEGER,r=a.has(String(i.item&&i.item.id))?a.get(String(i.item.id)):Number.MAX_SAFE_INTEGER;return n===r?s.i-i.i:n-r}).map(s=>s.item):t}function ja(t){const e=l.habits.find(a=>a.id===t);return e||(l.archivedHabits||[]).find(a=>a.id===t)||null}function Ba(t){l.archivedHabits||(l.archivedHabits=[]),!l.archivedHabits.some(e=>e.id===t.id)&&(l.archivedHabits.push(ge(t,new Date().toISOString())),l.archivedHabits.length>500&&l.archivedHabits.splice(0,l.archivedHabits.length-500))}function re(t){const e=L(t),a=ea(t);e.lockedHabits=a.map(s=>ge(s)),e.habitMissed={},a.forEach(s=>{oe(t,s.id)<=0&&(e.habitMissed[s.id]=!0)}),e.tasks.forEach(s=>{s.missed=!s.done})}function ot(t){const e=l.days[t];return!e||e.lockOverride==="unlocked"?!1:e.lockOverride==="locked"||e.locked===!0?!0:l.settings.autoLock?Date.now()>=ne(t).getTime():!1}function De(t){if(fe())return ot(t);const e=L(t);return e.lockOverride==="unlocked"?!1:e.lockOverride==="locked"||e.locked?((!Array.isArray(e.lockedHabits)||!e.habitMissed)&&re(t),!0):l.settings.autoLock&&Date.now()>=ne(t).getTime()?(e.locked=!0,e.lockOverride="locked",e.submittedAt=e.submittedAt||ne(t).toISOString(),re(t),k(),!0):!1}function L(t){if(!l.days[t]){const e=me();if(fe())return e;l.days[t]=e}return l.days[t]}function Qt(t){const e=String(t);Object.values(l.days).forEach(a=>{!Array.isArray(a.skippedPins)||!a.skippedPins.includes(e)||(a.skippedPins=a.skippedPins.filter(s=>s!==e))})}function Pe(t){const e=L(t);if(he(t)||fe())return e;let a=!1;const s=new Set(Array.isArray(e.skippedPins)?e.skippedPins.map(String):[]);if(e.tasks.length>1){const i=Ze(e.tasks);i.length!==e.tasks.length&&(e.tasks=i,a=!0)}return l.pinnedTasks.forEach(i=>{Ct(i,t)&&Et(i.pin,t)&&(s.has(String(i.id))||e.tasks.some(n=>n.sourcePinId===i.id)||(e.tasks.push({id:`ptask-${i.id}-${t}`,title:i.title,points:i.points,description:i.description||"",category:E(i.category),tags:D(i.tags),rating:0,done:!1,missed:!1,sourcePinId:i.id,image:G(i.image)}),a=!0))}),a&&k(),e}function aa(t){return!(!t||t.pin&&t.pin.mode==="forever")}function Fa(t,e){let a=Ot(e),s=0;for(;s<800;){if(s+=1,Ct(t,a)&&Et(t.pin,a))return a;a=Ot(a)}return""}function jt(t,e,a=[],s=[]){if(!t||!/^\d{4}-\d{2}-\d{2}$/.test(String(e||"")))return{allowed:!1,next:"",days:[]};let i=t;if(a.length||s.length){const c=a.map(String),g=s.map(String),v=F(t.pin);v.exceptDates=(v.exceptDates||[]).filter(p=>!c.includes(p)),v.customDates=(v.customDates||[]).filter(p=>!g.includes(p)),i={...t,pin:v}}if(!aa(i))return{allowed:!1,next:"",days:[]};if(!Ct(i,e)||!Et(i.pin,e))return{allowed:!1,next:"",days:[]};const n=Fa(i,e);if(!n)return{allowed:!1,next:"",days:[]};const r=[];let o=Ot(e),d=0;for(;o<n&&d<400;)d+=1,r.push(o),o=Ot(o);return r.length?{allowed:!0,next:n,days:r}:{allowed:!1,next:n,days:[]}}function _a(t,e){const a=t.pin||{},s=Array.isArray(a.exceptDates)?a.exceptDates:[];return s.includes(e)&&(Array.isArray(a.customDates)?a.customDates:[]).filter(n=>n>e).filter(n=>!s.includes(n)).sort().find(n=>jt(t,e,[e],[n]).days.includes(n))||""}function Ga(t,e){const a=t.pin||{};if(!(Array.isArray(a.customDates)?a.customDates:[]).includes(e))return"";const i=Array.isArray(a.exceptDates)?a.exceptDates:[];let n="";return i.forEach(r=>{r>=e||jt(t,r,[r],[e]).days.includes(e)&&(!n||r>n)&&(n=r)}),n}function U(t){return!u.isLocked(t)}function Ce(t){const e=Z().find(a=>a.label.toLowerCase()===String(t||"").trim().toLowerCase());return e?e.id:"mentally"}function Ee(t){return!t||typeof t!="object"||Array.isArray(t)?[]:Array.isArray(t.days)?t.days.filter(e=>e&&/^\d{4}-\d{2}-\d{2}$/.test(String(e.date||""))):[]}const u={todayKey:j,exportBackup(){return JSON.stringify({app:"Daily Report",kind:"full-backup",version:1,exportedAt:new Date().toISOString(),data:l},null,2)},backupKind(t){if(!t||typeof t!="object"||Array.isArray(t))return"invalid";const e=t.data&&typeof t.data=="object"&&!Array.isArray(t.data)?t.data:t;return Array.isArray(e.days)?"report-export":Array.isArray(e.categories)||Array.isArray(e.plans)||Array.isArray(e.schedule)?"wrong-app":typeof e!="object"||e===null||e.habits!==void 0&&!Array.isArray(e.habits)||e.days!==void 0&&(typeof e.days!="object"||e.days===null||Array.isArray(e.days))||e.settings!==void 0&&(typeof e.settings!="object"||e.settings===null||Array.isArray(e.settings))||!["habits","pinnedTasks","days","goals","badges","settings"].some(s=>e[s]!==void 0)?"invalid":"ok"},importBackup(t){if(this.backupKind(t)!=="ok")return!1;const e=t.data&&typeof t.data=="object"&&!Array.isArray(t.data)?t.data:t;return l=Ke(e),B=l.customCategories||[],l.customCategories=B,X=l.categoryOverrides||{},l.categoryOverrides=X,k(),!0},previewReport(t){const e=Ee(t);if(!e.length)return{days:0,start:"",end:"",newHabits:0};const a=new Set(l.habits.map(n=>String(n.name||"").trim().toLowerCase())),s=new Set;e.forEach(n=>{(Array.isArray(n.habits)?n.habits:[]).forEach(r=>{const o=String(r&&r.name||"").trim().toLowerCase();o&&!a.has(o)&&s.add(o)})});const i=e.map(n=>String(n.date)).sort();return{days:e.length,start:i[0],end:i[i.length-1],newHabits:s.size}},importReport(t){const e=Ee(t);if(!e.length)return!1;const a=e.map(o=>String(o.date)).sort(),s=a[a.length-1],i={};l.habits.forEach(o=>{i[String(o.name||"").trim().toLowerCase()]=o});let n=0;const r=Date.now();return e.forEach((o,d)=>{const c=String(o.date);(Array.isArray(o.habits)?o.habits:[]).forEach(p=>{const w=String(p&&p.name||"").trim().slice(0,80);if(!w)return;const P=w.toLowerCase();if(!i[P]){const S={id:`h${r}_${n}`,name:w,description:String(p&&p.description||"").slice(0,2e3),points:Number(p&&p.points||10)||10,icon:"star",category:Ce(p&&p.category),consciousPoints:z(p&&p.consciousPoints),tags:D(p&&p.tags),pin:{mode:"until",until:s,weekdays:[],monthDays:[],yearDays:[],customDates:[],exceptDates:[]},startFrom:a[0]};l.habits.push(S),i[P]=S,n+=1}});const g=me();g.note=String(o.note||""),g.locked=!0,g.lockOverride="locked",g.submittedAt=null;const v=[];(Array.isArray(o.habits)?o.habits:[]).forEach(p=>{const w=i[String(p&&p.name||"").trim().toLowerCase()];if(!w)return;const P=Math.max(0,Math.min(5,Number(p&&p.rating||0)));g.habitRatings[w.id]=P,g.habits[w.id]=P>0,P<=0&&(g.habitMissed[w.id]=!0),w.startFrom&&c<w.startFrom&&(w.startFrom=c),v.push({id:w.id,name:w.name,description:w.description,points:w.points,icon:w.icon||"star",category:E(w.category),consciousPoints:z(w.consciousPoints),tags:D(w.tags),pin:F(w.pin)})}),g.lockedHabits=v,g.tasks=(Array.isArray(o.tasks)?o.tasks:[]).map((p,w)=>({id:`t${r}_${d}_${w}`,title:String(p&&p.title||"Task").slice(0,120),points:Number(p&&p.points||5)||5,description:String(p&&p.description||""),category:Ce(p&&p.category),tags:D(p&&p.tags),rating:Math.max(0,Math.min(5,Number(p&&p.rating||0))),done:!!(p&&p.done),missed:!(p&&p.done),image:"",forwardedFrom:/^\d{4}-\d{2}-\d{2}$/.test(String(p&&p.forwardedFrom||""))?String(p.forwardedFrom):"",forwardedHabitId:"",forwardedTo:Array.isArray(p&&p.forwardedTo)?p.forwardedTo.filter(P=>/^\d{4}-\d{2}-\d{2}$/.test(String(P))).map(String).slice(0,50):[]})),l.days[c]=g}),k(),{days:e.length,habits:n}},getSettings(){return l.settings},setLockTime(t){l.settings.lockTime=t||"21:00",k()},setAutoLock(t){l.settings.autoLock=!!t,k()},setShowConscious(t){l.settings.showConscious=!!t,k()},consciousEnabled(){return l.settings.showConscious!==!1},setHabitSort(t){l.settings.habitSort=["default","points","category","tags","custom"].includes(t)?t:"default",k()},setTaskSort(t){l.settings.taskSort=["default","points","category","tags","custom"].includes(t)?t:"default",k()},getWeekStart(){return Kt(l.settings.weekStart)},setWeekStart(t){l.settings.weekStart=Kt(t),k()},getTheme(){return l.settings.theme==="light"?"light":"dark"},setTheme(t){l.settings.theme=t==="light"?"light":"dark",k()},getHabits(t,e){if(t&&he(t)){const n=l.days[t];if(n&&Array.isArray(n.lockedHabits)){const r=e||l.settings.habitSort||"default",o=[...n.lockedHabits];return r==="default"||r==="custom"?Ht(o,l.settings.habitOrder):Vt(o,r)}}const a=e||l.settings.habitSort||"default",s=ea(t),i=a==="default"||a==="custom"?Ht(s,l.settings.habitOrder):Vt(s,a);return a==="default"||a==="custom"?i.slice().sort((n,r)=>+!!r.pin-+!!n.pin):i},getTasks(t,e){const a=this.getDay(t),s=e||l.settings.taskSort||"default";return s==="default"||s==="custom"?a.tasks:Vt(a.tasks,s)},getAllHabits(){return l.habits},getPinnedHabits(){return Ht(l.habits.filter(t=>!!t.pin),l.settings.habitOrder)},setPinnedHabitOrder(t){const e=new Set(l.habits.filter(n=>n.pin).map(n=>String(n.id))),a=(Array.isArray(t)?t:[]).map(String).filter(n=>e.has(n)),s=new Set(a);e.forEach(n=>{s.has(n)||a.push(n)});const i=l.settings.habitOrder.filter(n=>!e.has(n));l.settings.habitOrder=[...a,...i].slice(0,300),k()},getHabitActivity(t,e=30){const a=String(t||"");return a?Object.keys(l.days).sort().reverse().flatMap(s=>{const i=l.days[s],n=i.habitForwarded&&i.habitForwarded[a],r=!!(i.habits&&i.habits[a])||!!(i.habitMissed&&i.habitMissed[a])||[i.habitRatings,i.habitMissed].some(c=>c&&Object.prototype.hasOwnProperty.call(c,a))||Array.isArray(n)&&n.length>0,o=Array.isArray(i.lockedHabits)&&i.lockedHabits.some(c=>String(c.id)===a);if(!r&&!o)return[];const d=zt(i,a);return[{date:s,rating:d,status:d?"Completed":i.habitMissed[a]||o&&ot(s)?"Missed":"Not rated",locked:ot(s)}]}).slice(0,Math.max(1,Math.min(365,Number(e)||30))):[]},getPinnedTasks(){return Ht(l.pinnedTasks,l.settings.pinnedTaskOrder)},setPinnedTaskOrder(t){const e=new Set(l.pinnedTasks.map(i=>String(i.id))),a=(Array.isArray(t)?t:[]).map(String).filter(i=>e.has(i)),s=new Set(a);l.pinnedTasks.forEach(i=>{const n=String(i.id);s.has(n)||a.push(n)}),l.settings.pinnedTaskOrder=a.slice(0,300),k()},getDay(t){return De(t),Pe(t)},isLocked(t){return De(t)},submitDay(t){const e=L(t);e.locked=!0,e.lockOverride="locked",e.submittedAt=new Date().toISOString(),re(t),k(),this.checkGoals(t)},unlockDay(t){const e=L(t);e.locked=!1,e.lockOverride="unlocked",e.habitMissed={},e.lockedHabits=null,e.tasks.forEach(a=>{a.missed=!1}),k()},isHabitMissed(t,e){const a=l.days[t];return!a||!(a.locked||a.lockOverride==="locked")||!this.getHabits(t).some(s=>s.id===e)||oe(t,e)>0?!1:(a.habitMissed&&a.habitMissed[e],!0)},isTaskMissed(t,e){const a=l.days[t];if(!a)return!1;const s=(a.tasks||[]).find(i=>i.id===e);return s?s.missed===!0?!0:s.missed===!1?!1:!!(a.locked||a.lockOverride==="locked")&&!s.done:!1},missedCounts(t){return at(()=>{const e=this.getDay(t),a=this.getHabits(t),s=ot(t);return{habits:a.filter(i=>e.habitMissed&&e.habitMissed[i.id]?!0:s&&oe(t,i.id)<=0).length,tasks:e.tasks.filter(i=>i.done?!1:i.missed===!0?!0:i.missed===!1?!1:s).length}})},lockDay(t){this.submitDay(t)},lockDays(t){let e=0;return t.forEach(a=>{this.isLocked(a)||(this.submitDay(a),e+=1)}),e},unlockDays(t){let e=0;return t.forEach(a=>{this.isLocked(a)&&(this.unlockDay(a),e+=1)}),e},lockedReports(){return at(()=>Object.keys(l.days).sort().reverse().filter(t=>ot(t)).map(t=>({date:t,submittedAt:l.days[t].submittedAt,...this.scoreFor(t)})))},habitRating(t,e){const a=l.days[t];return a?a.habitRatings&&a.habitRatings[e]!=null?Number(a.habitRatings[e])||0:a.habits&&a.habits[e]?5:0:0},setHabitRating(t,e,a){if(!U(t))return;const s=L(t),i=Math.max(0,Math.min(5,Number(a)||0));s.habitRatings[e]=i,s.habits[e]=i>0,k(),this.checkGoals(t)},toggleHabit(t,e){if(!U(t))return;const a=this.habitRating(t,e)>0?0:5;this.setHabitRating(t,e,a)},addTask(t,e,a,s={}){if(!U(t))return;L(t).tasks.push({id:nt("t"),title:e.trim(),points:Number(a)||5,description:String(s.description||"").trim(),category:E(s.category),tags:D(s.tags),rating:Math.max(0,Math.min(5,Number(s.rating)||0)),done:!1,missed:!1,forwardedFrom:/^\d{4}-\d{2}-\d{2}$/.test(String(s.forwardedFrom||""))?String(s.forwardedFrom):"",forwardedHabitId:String(s.forwardedHabitId||""),forwardedTo:[],image:G(s.image)}),k(),this.checkGoals(t)},setTaskRating(t,e,a){if(!U(t))return;const i=L(t).tasks.find(r=>r.id===e);if(!i)return;const n=Math.max(0,Math.min(5,Number(a)||0));i.rating=n,k()},setTaskOrder(t,e){if(!U(t))return;const a=L(t),s=(Array.isArray(e)?e:[]).map(String).filter(Boolean);if(!s.length)return;const i=new Map(s.map((r,o)=>[r,o])),n=a.tasks.slice().sort((r,o)=>{const d=i.has(r.id)?i.get(r.id):Number.MAX_SAFE_INTEGER,c=i.has(o.id)?i.get(o.id):Number.MAX_SAFE_INTEGER;return d-c});a.tasks=n,k()},setHabitOrder(t){const e=(Array.isArray(t)?t:[]).map(String).filter(Boolean);e.length&&(l.settings.habitOrder=e.slice(0,300),k())},toggleTask(t,e){if(!U(t))return;const s=L(t).tasks.find(i=>i.id===e);s&&(s.done=!s.done,k(),this.checkGoals(t))},removeTask(t,e){if(!U(t))return;const a=L(t),s=a.tasks.find(n=>n.id===e);a.tasks=a.tasks.filter(n=>n.id!==e);const i=s&&s.sourcePinId?String(s.sourcePinId):"";i&&(Array.isArray(a.skippedPins)||(a.skippedPins=[]),a.skippedPins.includes(i)||a.skippedPins.push(i),a.skippedPins.length>100&&a.skippedPins.splice(0,a.skippedPins.length-100)),k()},forwardTask(t,e,a){if(!/^\d{4}-\d{2}-\d{2}$/.test(String(a||"")))return{ok:!1,reason:"Pick a valid date"};if(t===a)return{ok:!1,reason:"Already on that day"};if(!U(t))return{ok:!1,reason:"Source day is locked"};if(this.isLocked(a))return{ok:!1,reason:"Target day is locked"};const i=L(t).tasks.find(d=>d.id===e);if(!i)return{ok:!1,reason:"Task not found"};const n=L(a),r=String(i.title||"").trim().toLowerCase();if(n.tasks.some(d=>String(d.title||"").trim().toLowerCase()===r))return{ok:!1,reason:"That task is already on that day"};n.tasks.push({id:nt("t"),title:i.title,points:Number(i.points)||5,description:String(i.description||""),category:E(i.category),tags:D(i.tags),rating:0,done:!1,missed:!1,forwardedFrom:t,forwardedHabitId:String(i.forwardedHabitId||""),forwardedTo:[],image:G(i.image)});const o=Array.isArray(i.forwardedTo)?i.forwardedTo:[];return o.includes(a)||o.push(a),i.forwardedTo=o.slice(0,50),k(),this.checkGoals(a),{ok:!0}},habitForwardedTo(t,e){const a=l.days[t];if(!a||!a.habitForwarded)return[];const s=a.habitForwarded[e];return Array.isArray(s)?s:[]},habitReplaceDays(t,e){const a=l.habits.find(i=>i.id===e),s=jt(a,t);return{allowed:s.allowed,next:s.next,days:s.days.slice()}},replaceHabit(t,e,a){if(!/^\d{4}-\d{2}-\d{2}$/.test(String(a||"")))return{ok:!1,reason:"Pick a valid date"};if(String(a)===String(t))return{ok:!1,reason:"Already on that day"};const s=l.habits.find(r=>r.id===e);if(!s)return{ok:!1,reason:"Habit not found"};if(!aa(s))return{ok:!1,reason:"This habit is pinned forever — every day is already its day"};if(!U(t))return{ok:!1,reason:"That day is locked"};if(this.isLocked(a))return{ok:!1,reason:"That day is locked"};const i=jt(s,t);if(!i.allowed)return{ok:!1,reason:"No replace days available for this habit"};if(!i.days.includes(a))return{ok:!1,reason:`Pick a day before ${i.next}`};const n=F(s.pin);return n.exceptDates.includes(t)||(n.exceptDates=[...n.exceptDates,t].sort()),n.customDates.includes(a)||(n.customDates=[...n.customDates,a].sort()),s.pin=n,k(),this.checkGoals(a),{ok:!0,from:t,to:a}},undoReplaceHabit(t,e,a){const s=l.habits.find(n=>n.id===t);if(!s)return{ok:!1,reason:"Habit not found"};const i=F(s.pin);return i.exceptDates=(i.exceptDates||[]).filter(n=>n!==e),i.customDates=(i.customDates||[]).filter(n=>n!==a),s.pin=i,k(),{ok:!0}},habitReplacedTo(t,e){const a=l.habits.find(s=>s.id===e);return a?_a(a,t):""},habitReplacedFrom(t,e){const a=l.habits.find(s=>s.id===e);return a?Ga(a,t):""},setNote(t,e){U(t)&&(L(t).note=e,k())},addHabit(t,e,a={}){l.habits.push({id:nt("h"),name:t.trim(),description:String(a.description||"").trim().slice(0,2e3),points:Number(e)||10,icon:"star",category:E(a.category||"physically"),consciousPoints:z(a.consciousPoints),tags:D(a.tags),pin:F({mode:"forever"}),startFrom:Pt(a.startFrom)||j()}),k()},updateHabit(t,e){const a=l.habits.find(s=>s.id===t);a&&(e.name!=null&&(a.name=String(e.name).trim()||a.name),e.description!=null&&(a.description=String(e.description).trim().slice(0,2e3)),e.points!=null&&(a.points=Number(e.points)||a.points),e.category!=null&&(a.category=E(e.category)),e.consciousPoints!=null&&(a.consciousPoints=z(e.consciousPoints)),e.tags!=null&&(a.tags=D(e.tags)),k())},updateTask(t,e,a){if(!U(t))return;const i=L(t).tasks.find(n=>n.id===e);if(i){if(a.title!=null&&(i.title=String(a.title).trim()||i.title),a.points!=null&&(i.points=Number(a.points)||i.points),a.description!=null&&(i.description=String(a.description).trim()),a.category!=null&&(i.category=E(a.category)),a.tags!=null&&(i.tags=D(a.tags)),a.image!==void 0&&(i.image=G(a.image)),a.rating!=null&&(i.rating=Math.max(0,Math.min(5,Number(a.rating)||0))),i.sourcePinId){const n=l.pinnedTasks.find(r=>r.id===i.sourcePinId);n&&(n.title=i.title,n.points=i.points,n.description=i.description,n.category=i.category,a.tags!=null&&(n.tags=D(a.tags)),a.image!==void 0&&(n.image=G(a.image)))}k()}},habitStreak(t,e){const a=ja(t);if(!a)return 0;let s=e,i=0;this.habitRating(s,t)===0&&(s=yt(s));let n=0;for(;i<400;){if(i+=1,!Ct(a,s)||!Et(a.pin,s)){s=yt(s);continue}if(this.habitRating(s,t)>0){n+=1,s=yt(s);continue}break}return n},categoryBreakdown(t){const e=this.getDay(t),a=this.getHabits(t);return Z().map(s=>{const i=a.filter(S=>E(S.category)===s.id),n=e.tasks.filter(S=>E(S.category)===s.id),r=i.reduce((S,f)=>{const T=this.habitRating(t,f.id);return S+Math.round(f.points*T/5)},0),o=l.settings.showConscious!==!1,d=o?i.reduce((S,f)=>S+(this.habitRating(t,f.id)>0?z(f.consciousPoints):0),0):0,c=i.reduce((S,f)=>S+f.points,0),g=o?i.reduce((S,f)=>S+z(f.consciousPoints),0):0,v=n.reduce((S,f)=>S+(f.done?f.points:0),0),p=n.reduce((S,f)=>S+f.points,0),w=i.map(S=>this.habitRating(t,S.id)),P=w.length?Math.round(w.reduce((S,f)=>S+f,0)/w.length*10)/10:0;return{...s,habits:i,tasks:n,earned:r+d+v,max:c+g+p,habitAvg:P,consciousEarned:d,consciousMax:g,completed:i.filter(S=>this.habitRating(t,S.id)>0).length+n.filter(S=>S.done).length,total:i.length+n.length}})},removeHabit(t){const e=l.habits.find(a=>a.id===t);e&&Ba(e),l.habits=l.habits.filter(a=>a.id!==t),k()},getArchivedHabits(){return(l.archivedHabits||[]).map(t=>({...t}))},deleteArchivedHabit(t){const e=(l.archivedHabits||[]).length;return l.archivedHabits=(l.archivedHabits||[]).filter(a=>a.id!==t),l.archivedHabits.length===e?{ok:!1,reason:"That habit is no longer archived"}:(k(),{ok:!0})},archiveTask(t,e){if(!U(t))return{ok:!1,reason:"Day is locked"};const a=L(t),s=a.tasks.find(n=>n.id===e);if(!s)return{ok:!1,reason:"Task not found"};l.archivedTasks||(l.archivedTasks=[]),l.archivedTasks.unshift(Xe(s,new Date().toISOString(),t)),l.archivedTasks.length>500&&(l.archivedTasks.length=500),a.tasks=a.tasks.filter(n=>n.id!==e);const i=s.sourcePinId?String(s.sourcePinId):"";return i&&(Array.isArray(a.skippedPins)||(a.skippedPins=[]),a.skippedPins.includes(i)||a.skippedPins.push(i)),k(),{ok:!0}},getArchivedTasks(){return(l.archivedTasks||[]).map(t=>({...t}))},restoreTask(t,e){const a=(l.archivedTasks||[]).findIndex(c=>c.id===t);if(a<0)return{ok:!1,reason:"That task is no longer archived"};const s=l.archivedTasks[a],i=e||j();Pe(i);const n=L(i),r=String(s.title||"").trim().toLowerCase();if(n.tasks.some(c=>String(c.title||"").trim().toLowerCase()===r))return{ok:!1,reason:"That task is already on that day"};const d=/^\d{4}-\d{2}-\d{2}$/.test(String(s.originDate||""))?String(s.originDate):"";return n.tasks.push({id:nt("t"),title:s.title,points:Number(s.points)||5,description:String(s.description||""),category:E(s.category),tags:D(s.tags),rating:0,done:!1,missed:!1,forwardedFrom:d&&d!==i?d:"",forwardedHabitId:"",forwardedTo:[],image:G(s.image),sourcePinId:String(s.sourcePinId||"")}),l.archivedTasks.splice(a,1),k(),{ok:!0,from:d,to:i}},deleteArchivedTask(t){const e=(l.archivedTasks||[]).length;return l.archivedTasks=(l.archivedTasks||[]).filter(a=>a.id!==t),l.archivedTasks.length===e?{ok:!1,reason:"That task is no longer archived"}:(k(),{ok:!0})},restoreHabit(t){const e=(l.archivedHabits||[]).findIndex(i=>i.id===t);if(e<0)return{ok:!1,reason:"That habit is no longer archived"};const a=l.archivedHabits[e];if(l.habits.some(i=>i.id===a.id))return l.archivedHabits.splice(e,1),k(),{ok:!0};const s={...a,description:String(a.description||"").slice(0,2e3),category:E(a.category),consciousPoints:z(a.consciousPoints),tags:D(a.tags),pin:F(a.pin),archivedAt:null};return l.habits.push(s),l.archivedHabits.splice(e,1),k(),{ok:!0,habit:{...s}}},pinHabit(t,e){const a=l.habits.find(s=>s.id===t);a&&(a.pin=F(e),k())},updatePinnedTaskDetails(t,e){const a=l.pinnedTasks.find(s=>s.id===t);if(a){if(e.title!=null&&(a.title=String(e.title).trim().slice(0,120)||a.title),e.points!=null){const s=Number(e.points);Number.isFinite(s)&&(a.points=Math.max(0,s))}e.description!=null&&(a.description=String(e.description).trim().slice(0,2e3)),e.category!=null&&(a.category=E(e.category)),e.tags!=null&&(a.tags=D(e.tags)),e.image!==void 0&&(a.image=G(e.image)),Qt(t),k()}},unpinHabit(t){const e=l.habits.find(a=>a.id===t);e&&(e.pin=null,k())},pinTask(t,e,a){if(!U(t))return;const i=L(t).tasks.find(o=>o.id===e);if(!i)return;const n=i.sourcePinId?l.pinnedTasks.find(o=>o.id===i.sourcePinId):null;if(n){n.pin=F(a),Qt(n.id),k();return}const r=nt("p");l.pinnedTasks.push({id:r,title:i.title,points:i.points,description:i.description||"",category:E(i.category),tags:D(i.tags),pin:F(a),startFrom:t,image:G(i.image)}),i.sourcePinId=r,k()},unpinTaskTemplate(t){l.pinnedTasks=l.pinnedTasks.filter(a=>a.id!==t);const e=String(t);Object.values(l.days).forEach(a=>{!Array.isArray(a.skippedPins)||!a.skippedPins.includes(e)||(a.skippedPins=a.skippedPins.filter(s=>s!==e))}),k()},updatePinnedTask(t,e){const a=l.pinnedTasks.find(s=>s.id===t);a&&(a.pin=F(e),Qt(t),k())},findHabit(t){return l.habits.find(e=>e.id===t)||null},findTask(t,e){return L(t).tasks.find(a=>a.id===e)||null},findPinnedTask(t){return l.pinnedTasks.find(e=>e.id===t)||null},getInstalledAt(){return String(l.installedAt||new Date().toISOString())},getProfile(){const t=wt(l.profile);return l.profile=t,JSON.parse(JSON.stringify(t))},setProfileField(t,e){return!Object.prototype.hasOwnProperty.call(ae,t)||l.profile.locked?!1:((!l.profile||typeof l.profile!="object")&&(l.profile=wt({})),l.profile[t]=String(e||"").slice(0,ae[t]),k(),!0)},setProfileLocked(t){(!l.profile||typeof l.profile!="object")&&(l.profile=wt({})),l.profile.locked=!!t,k()},isProfileLocked(){return!!(l.profile&&l.profile.locked)},profileGoalDurations(){return JSON.parse(JSON.stringify($t))},addWhoAmI(t){if(l.profile.locked)return{ok:!1,reason:"Profile is locked"};const e=String(t||"").trim().slice(0,120);return e?(l.profile.whoAmI||[]).length>=50?{ok:!1,reason:"List is full (50)"}:(l.profile.whoAmI.push({id:q("w"),text:e}),k(),{ok:!0}):{ok:!1,reason:"Type something first"}},updateWhoAmI(t,e){if(l.profile.locked)return;const a=(l.profile.whoAmI||[]).find(i=>i.id===t);if(!a)return;const s=String(e||"").trim().slice(0,120);s?a.text=s:l.profile.whoAmI=l.profile.whoAmI.filter(i=>i.id!==t),k()},moveWhoAmI(t,e){if(l.profile.locked)return;const a=l.profile.whoAmI||[],s=a.findIndex(r=>r.id===t),i=s+e;if(s<0||i<0||i>=a.length)return;const[n]=a.splice(s,1);a.splice(i,0,n),k()},removeWhoAmI(t){l.profile.locked||(l.profile.whoAmI=(l.profile.whoAmI||[]).filter(e=>e.id!==t),k())},addLifeArea(t){if(l.profile.locked)return{ok:!1,reason:"Profile is locked"};const e=String(t||"").trim().slice(0,60);if(!e)return{ok:!1,reason:"Name the life area"};if((l.profile.lifeAreas||[]).length>=20)return{ok:!1,reason:"Max 20 areas"};const a={id:q("a"),title:e,description:""};return l.profile.lifeAreas.push(a),k(),{ok:!0,id:a.id}},updateLifeArea(t,e={}){if(l.profile.locked)return;const a=(l.profile.lifeAreas||[]).find(s=>s.id===t);a&&(e.title!=null&&(a.title=String(e.title).trim().slice(0,60)||a.title),e.description!=null&&(a.description=String(e.description).slice(0,1e3)),k())},moveLifeArea(t,e){if(l.profile.locked)return;const a=l.profile.lifeAreas||[],s=a.findIndex(r=>r.id===t),i=s+e;if(s<0||i<0||i>=a.length)return;const[n]=a.splice(s,1);a.splice(i,0,n),k()},removeLifeArea(t){l.profile.locked||(l.profile.lifeAreas=(l.profile.lifeAreas||[]).filter(e=>e.id!==t),k())},addProfileGoal(t,e,a){if(l.profile.locked)return{ok:!1,reason:"Profile is locked"};const s=String(t||"").trim().slice(0,200);if(!s)return{ok:!1,reason:"Write your goal first"};const i=ie.includes(e)?e:"short",n=$t[i],r=n.includes(a)?a:n[0];if((l.profile.pGoals||[]).length>=100)return{ok:!1,reason:"Too many goals (100)"};const o={id:q("g"),text:s,term:i,duration:r,createdAt:new Date().toISOString()};return l.profile.pGoals.push(o),k(),{ok:!0,id:o.id}},updateProfileGoal(t,e={}){if(l.profile.locked)return;const a=(l.profile.pGoals||[]).find(s=>s.id===t);if(a){if(e.text!=null&&(a.text=String(e.text).trim().slice(0,200)||a.text),e.term!=null&&ie.includes(e.term)){a.term=e.term;const s=$t[a.term];s.includes(a.duration)||(a.duration=s[0])}e.duration!=null&&$t[a.term].includes(e.duration)&&(a.duration=e.duration),k()}},removeProfileGoal(t){l.profile.locked||(l.profile.pGoals=(l.profile.pGoals||[]).filter(e=>e.id!==t),k())},addQuote(t,e){if(l.profile.locked)return{ok:!1,reason:"Profile is locked"};const a=String(t||"").trim().slice(0,500);if(!a)return{ok:!1,reason:"Write the quote first"};if((l.profile.quotes||[]).length>=200)return{ok:!1,reason:"Too many quotes (200)"};const s={id:q("q"),text:a,author:String(e||"").trim().slice(0,80),fav:!1,createdAt:new Date().toISOString()};return l.profile.quotes.push(s),k(),{ok:!0,id:s.id}},updateQuote(t,e={}){if(l.profile.locked)return;const a=(l.profile.quotes||[]).find(s=>s.id===t);a&&(e.text!=null&&(a.text=String(e.text).trim().slice(0,500)||a.text),e.author!=null&&(a.author=String(e.author).trim().slice(0,80)),k())},toggleQuoteFav(t){if(l.profile.locked)return;const e=(l.profile.quotes||[]).find(a=>a.id===t);e&&(e.fav=!e.fav,k())},removeQuote(t){l.profile.locked||(l.profile.quotes=(l.profile.quotes||[]).filter(e=>e.id!==t),k())},getCategories(){return Z().map(t=>({...t}))},getCustomCategories(){return B.map(t=>({...t}))},addCategory(t){const e=String(t||"").trim().slice(0,30);if(!e)return{ok:!1,reason:"Type a category name"};if(Z().some(i=>i.label.toLowerCase()===e.toLowerCase()))return{ok:!1,reason:"That category already exists"};if(B.length>=20)return{ok:!1,reason:"Too many categories (max 20 custom)"};let s=`c${Date.now().toString(36)}`;return Z().some(i=>i.id===s)&&(s=`c${Date.now().toString(36)}${Math.floor(Math.random()*99)}`),B.push({id:s,label:e}),k(),{ok:!0,id:s}},renameCategory(t,e){const a=B.find(n=>n.id===t);if(!a)return{ok:!1,reason:"Built-in categories can’t be renamed"};const s=String(e||"").trim().slice(0,30);return s?Z().some(n=>n.id!==t&&n.label.toLowerCase()===s.toLowerCase())?{ok:!1,reason:"That category already exists"}:(a.label=s,k(),{ok:!0}):{ok:!1,reason:"Type a category name"}},updateCategory(t,e={}){const a=B.find(s=>s.id===t);if(!a){if(!Tt.find(n=>n.id===t))return{ok:!1,reason:"Category not found"};const i={...X[t]||{}};return e.color!==void 0&&(i.color=String(e.color).slice(0,20)),e.goals!==void 0&&(i.goals=String(e.goals).slice(0,1e3)),X[t]=i,l.categoryOverrides=X,k(),{ok:!0}}return e.color!==void 0&&(a.color=String(e.color).slice(0,20)),e.goals!==void 0&&(a.goals=String(e.goals).slice(0,1e3)),k(),{ok:!0}},deleteCategory(t){const e=B.findIndex(a=>a.id===t);return e<0?{ok:!1,reason:"Built-in categories can’t be deleted"}:(B.splice(e,1),l.habits.forEach(a=>{a.category===t&&(a.category="mentally")}),(l.archivedHabits||[]).forEach(a=>{a.category===t&&(a.category="mentally")}),l.pinnedTasks.forEach(a=>{a.category===t&&(a.category="mentally")}),Object.values(l.days).forEach(a=>{(a.tasks||[]).forEach(s=>{s.category===t&&(s.category="mentally")})}),k(),{ok:!0})},getAllTags(){const t=new Map,e=a=>{D(a).forEach(s=>{t.set(s,(t.get(s)||0)+1)})};return l.habits.forEach(a=>e(a.tags)),(l.archivedHabits||[]).forEach(a=>e(a.tags)),l.pinnedTasks.forEach(a=>e(a.tags)),Object.values(l.days).forEach(a=>{(a.tasks||[]).forEach(s=>e(s.tags))}),[...t.entries()].map(([a,s])=>({tag:a,count:s})).sort((a,s)=>s.count-a.count||a.tag.localeCompare(s.tag))},renameTag(t,e){const a=String(t||"").trim(),s=D(e)[0]||"";if(!a||!s)return{ok:!1,reason:"Type a tag name"};if(a.toLowerCase()===s.toLowerCase()){const r=o=>D((o||[]).map(d=>String(d).toLowerCase()===a.toLowerCase()?s:d));return l.habits.forEach(o=>{o.tags=r(o.tags)}),(l.archivedHabits||[]).forEach(o=>{o.tags=r(o.tags)}),l.pinnedTasks.forEach(o=>{o.tags=r(o.tags)}),Object.values(l.days).forEach(o=>{(o.tasks||[]).forEach(d=>{d.tags=r(d.tags)})}),k(),{ok:!0}}const i=this.getAllTags().some(r=>r.tag.toLowerCase()===s.toLowerCase()),n=r=>{const o=(r||[]).map(d=>String(d).toLowerCase()===a.toLowerCase()?s:d);return D(o)};return l.habits.forEach(r=>{r.tags=n(r.tags)}),(l.archivedHabits||[]).forEach(r=>{r.tags=n(r.tags)}),l.pinnedTasks.forEach(r=>{r.tags=n(r.tags)}),Object.values(l.days).forEach(r=>{(r.tasks||[]).forEach(o=>{o.tags=n(o.tags)})}),k(),{ok:!0,merged:i}},deleteTag(t){const e=String(t||"").trim().toLowerCase();if(!e)return{ok:!1,reason:"Pick a tag first"};const a=s=>(s||[]).filter(i=>String(i).toLowerCase()!==e);return l.habits.forEach(s=>{s.tags=a(s.tags)}),(l.archivedHabits||[]).forEach(s=>{s.tags=a(s.tags)}),l.pinnedTasks.forEach(s=>{s.tags=a(s.tags)}),Object.values(l.days).forEach(s=>{(s.tasks||[]).forEach(i=>{i.tags=a(i.tags)})}),k(),{ok:!0}},addTagToHabit(t,e){const a=l.habits.find(i=>i.id===t);if(!a)return{ok:!1,reason:"Pick a habit first"};const s=D(e)[0]||"";return s?(a.tags=D([...a.tags||[],s]),k(),{ok:!0}):{ok:!1,reason:"Type a tag name"}},categoryChart(t,e){const a=["week","month","year"].includes(t)?t:"week",s=`${a}|${e}|${ta}`;return Jt.key===s?Jt.value:at(()=>this._buildCategoryChart(a,e,s))},_buildCategoryChart(t,e,a){const s=Z(),i=[];if(t==="year"){const g=String(e).slice(0,4);for(let v=0;v<12;v++){const p=String(v+1).padStart(2,"0"),w=new Date(Number(g),v+1,0).getDate();i.push({label:new Date(Number(g),v,1).toLocaleDateString(void 0,{month:"short"}),title:new Date(Number(g),v,1).toLocaleDateString(void 0,{month:"long",year:"numeric"}),keys:this.rangeKeys(`${g}-${p}-01`,`${g}-${p}-${String(w).padStart(2,"0")}`)})}}else{const[g,v]=this.resolveRange(t,e);this.rangeKeys(g,v).forEach(p=>{const w=new Date(`${p}T00:00:00`);i.push({label:t==="week"?w.toLocaleDateString(void 0,{weekday:"narrow"}):String(w.getDate()),title:p,keys:[p]})})}const n={},r={};s.forEach(g=>{n[g.id]=i.map(()=>0),r[g.id]=0}),i.forEach((g,v)=>{g.keys.forEach(p=>{this.categoryBreakdown(p).forEach(w=>{w.id in n||(n[w.id]=i.map(()=>0),r[w.id]=0),n[w.id][v]+=w.earned||0,r[w.id]+=w.earned||0})})});const o=i.map((g,v)=>s.reduce((p,w)=>p+(n[w.id]?n[w.id][v]:0),0)),d=Math.max(1,...o),c={kind:t,labels:i.map(g=>g.label),titles:i.map(g=>g.title),cats:s.map(g=>({...g})),perCat:n,totals:r,max:d,grandTotal:o.reduce((g,v)=>g+v,0)};return Jt={key:a,value:c},c},getGoals(){return l.goals},getBadges(){return[...l.badges].sort((t,e)=>{const a=Se(e.tier)-Se(t.tier);return a!==0?a:String(e.earnedAt).localeCompare(String(t.earnedAt))})},topBadges(t=3){return this.getBadges().slice(0,t)},addGoal(t={}){const e=ee({...t,id:nt("g")});return l.goals.push(e),k(),this.checkGoals(j()),e},updateGoal(t,e={}){const a=l.goals.find(i=>i.id===t);if(!a)return;const s=ee({...a,...e,id:t});Object.assign(a,s),k(),this.checkGoals(j())},removeGoal(t){l.goals=l.goals.filter(e=>e.id!==t),k()},removeBadge(t){l.badges=l.badges.filter(e=>e.id!==t),k()},perfectDaysCount(){return at(()=>Object.keys(l.days).filter(t=>{const e=this.scoreFor(t);return e.max>0&&e.percent===100}).length)},taskStreak(t,e){let a=e,s=0;(r=>{const o=l.days[r];return!o||!Array.isArray(o.tasks)?!1:o.tasks.some(d=>d.sourcePinId===t&&d.done)})(a)||(a=yt(a));let n=0;for(;s<400;){s+=1;const r=l.days[a];if(!r||!Array.isArray(r.tasks))break;if(r.tasks.some(o=>o.sourcePinId===t&&o.done)){n+=1,a=yt(a);continue}break}return n},goalProgress(t,e){const a=e||j();if(t.kind==="habit-streak"){const i=this.habitStreak(t.targetId,a);return{current:i,target:t.targetDays,done:i>=t.targetDays}}if(t.kind==="task-streak"){const i=this.taskStreak(t.targetId,a);return{current:i,target:t.targetDays,done:i>=t.targetDays}}const s=this.perfectDaysCount();return{current:s,target:t.targetDays,done:s>=t.targetDays}},checkGoals(t){const e=t||j();let a=[];return l.goals.forEach(s=>{if(l.badges.some(n=>n.goalId===s.id))return;if(this.goalProgress(s,e).done){const n={id:nt("b"),goalId:s.id,title:s.title,tier:s.tier,rewardTitle:s.rewardTitle,earnedAt:new Date().toISOString()};l.badges.push(n),a.push(n)}}),a.length&&k(),a},scoreFor(t){return at(()=>this._scoreFor(t))},_scoreFor(t){const e=this.getDay(t),a=this.getHabits(t),s=this.isLocked(t),i=l.settings.showConscious!==!1,n=a.reduce((S,f)=>{const T=this.habitRating(t,f.id);return S+Math.round(f.points*T/5)},0),r=i?a.reduce((S,f)=>S+(this.habitRating(t,f.id)>0?z(f.consciousPoints):0),0):0,o=e.tasks.reduce((S,f)=>S+(f.done?f.points:0),0),d=a.reduce((S,f)=>S+f.points,0),c=i?a.reduce((S,f)=>S+z(f.consciousPoints),0):0,g=e.tasks.reduce((S,f)=>S+f.points,0),v=n+r+o,p=d+c+g,w=a.filter(S=>e.habitMissed&&e.habitMissed[S.id]?!0:s&&this.habitRating(t,S.id)<=0).length,P=e.tasks.filter(S=>S.done?!1:S.missed===!0?!0:S.missed===!1?!1:s).length;return{earned:v,max:p,habitScore:n,consciousScore:r,maxConscious:c,taskScore:o,completedHabits:a.filter(S=>this.habitRating(t,S.id)>0).length,habitAvg:a.length?Math.round(a.reduce((S,f)=>S+this.habitRating(t,f.id),0)/a.length*10)/10:0,totalHabits:a.length,completedTasks:e.tasks.filter(S=>S.done).length,totalTasks:e.tasks.length,missedHabits:w,missedTasks:P,percent:p?Math.round(v/p*100):0,locked:s,submittedAt:e.submittedAt}},monthKeys(t){const e=String(t).slice(0,7);return Object.keys(l.days).filter(a=>a.startsWith(e)).sort()},rangeKeys(t,e){const a=[],s=new Date(`${t}T00:00:00`),i=new Date(`${e}T00:00:00`);let n=0;for(;s<=i&&n<732;)n+=1,a.push(j(s)),s.setDate(s.getDate()+1);return a},resolveRange(t,e){if(t==="day")return[e,e];if(t==="week"){const s=new Date(`${e}T00:00:00`),i=new Date(s);i.setDate(s.getDate()-(s.getDay()-this.getWeekStart()+7)%7);const n=new Date(i);return n.setDate(i.getDate()+6),[j(i),j(n)]}if(t==="month"){const[s,i]=e.split("-").map(Number),n=`${s}-${String(i).padStart(2,"0")}-01`,r=new Date(s,i,0).getDate(),o=`${s}-${String(i).padStart(2,"0")}-${String(r).padStart(2,"0")}`;return[n,o]}if(t==="year"){const s=e.slice(0,4);return[`${s}-01-01`,`${s}-12-31`]}const a=Object.keys(l.days).sort();return a.length?[a[0],a[a.length-1]>e?a[a.length-1]:e]:[e,e]},exportRows(t,e){return at(()=>this._exportRows(t,e))},_exportRows(t,e){return this.rangeKeys(t,e).map(a=>{const s=this.getDay(a),i=this.getHabits(a),n=this.scoreFor(a),r=this.isLocked(a),o=(c,g)=>g>0?"done":r?"missed":"pending",d=c=>c.done?"done":r?"missed":"pending";return{date:a,earned:n.earned,max:n.max,percent:n.percent,habitScore:n.habitScore,consciousScore:n.consciousScore||0,taskScore:n.taskScore,locked:r,missedHabits:n.missedHabits||0,missedTasks:n.missedTasks||0,note:s.note||"",habits:i.map(c=>{const g=this.habitRating(a,c.id);return{name:c.name,description:String(c.description||""),category:et(E(c.category)),tags:D(c.tags),points:c.points,consciousPoints:this.consciousEnabled()?z(c.consciousPoints):0,rating:g,earned:Math.round(c.points*g/5)+(g>0&&this.consciousEnabled()?z(c.consciousPoints):0),status:o(c.id,g)}}),tasks:s.tasks.map(c=>({title:c.title,category:et(E(c.category)),tags:D(c.tags),points:c.points,rating:Math.max(0,Math.min(5,Number(c.rating)||0)),done:!!c.done,earned:c.done?c.points:0,status:c.forwardedFrom?`forwarded from ${c.forwardedFrom}`:d(c),forwardedFrom:c.forwardedFrom||"",forwardedTo:Array.isArray(c.forwardedTo)?c.forwardedTo:[],description:c.description||"",hasImage:!!c.image}))}})},history(t=14){return at(()=>Object.keys(l.days).sort().reverse().slice(0,t).map(a=>({date:a,...this.scoreFor(a),note:l.days[a].note,locked:ot(a),submittedAt:l.days[a].submittedAt})))},week(t){return at(()=>{const e=new Date(t);return e.setDate(e.getDate()-(e.getDay()-this.getWeekStart()+7)%7),e.setHours(0,0,0,0),Array.from({length:7},(a,s)=>{const i=new Date(e);i.setDate(e.getDate()+s);const n=j(i),r=l.days[n];return{date:n,label:i.toLocaleDateString(void 0,{weekday:"short"}),dayOfMonth:i.getDate(),hasRecord:!!r,note:String(r&&r.note||""),locked:ot(n),...this.scoreFor(n)}})})}};function ia(t){return t>=90?"Excellent":t>=75?"Great day":t>=50?"Keep going":t>0?"Started":"No score yet"}function J(t){return new Date(`${t}T00:00:00`).toLocaleDateString(void 0,{weekday:"long",month:"short",day:"numeric"})}function qa(t){return t?new Date(t).toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"}):""}function Bt(t){return t>=5?"Excellent":t>=4?"Great":t>=3?"Good":t>=2?"Fair":t>=1?"Low":"Not rated"}const Xt=document.getElementById("app"),sa="daily-report-2026-10-19T16-44-15-mvfhi5cp",Wa=`v1.1 — Auto-update · Offline · Backup (${sa.slice(-8)})`;let h=u.todayKey(),N="today",x=null,$=null,V=!1,dt=!1;const Nt=new Set;let ct=!1,Ft=!1,mt=null,it=!1,de=!1,ce=null,st="Idle.",Y="week",_t=null,_="month",Gt=null,R=[],K=0,M=null,H="boot",ut=null;const rt=new Set,ft=new Map;let St=!1,It="all",Q="short",ht="1 Week";window.addEventListener("beforeinstallprompt",t=>{t.preventDefault(),mt=t});window.addEventListener("appinstalled",()=>{mt=null,y("Daily Report installed"),b()});const Ua=[["default","Default"],["points","Points"],["category","Category"],["tags","Tags"],["custom","Custom"]];function Le(t){const e=new Date(`${h}T00:00:00`);e.setDate(e.getDate()+t),h=u.todayKey(e)}let Zt=u.todayKey();function be(){const t=u.todayKey();if(t===Zt)return!1;const e=Zt;return Zt=t,h===e&&(h=t),_t=null,Gt=null,R=[],K=0,!0}function C(t){return{home:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1z"/></svg>',profile:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-6 8-6s8 2 8 6"/></svg>',history:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 8v5l3 2"/><circle cx="12" cy="12" r="9"/></svg>',settings:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H8a1.7 1.7 0 0 0 1-1.5V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V8c.3.7.9 1.2 1.6 1.3H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1.7z"/></svg>',pin:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 4h6l-1 7 3 3v2H7v-2l3-3z" fill="currentColor" stroke="none"/><path d="M12 16v5"/></svg>',forward:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',swap:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8h13l-3.5-3.5M20 16H7l3.5 3.5"/></svg>',undo:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9h11a5 5 0 0 1 0 10H8"/><path d="M8 5 4 9l4 4"/></svg>',habit:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7h16M4 12h10M4 17h13"/></svg>',archive:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7h18v4H3zM5 11v9h14v-9M9.5 15h5"/></svg>',trash:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16M9 7V5h6v2M6 7l1 13h10l1-13M10 11v6M14 11v6"/></svg>',grip:'<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><circle cx="9" cy="6" r="1.7"/><circle cx="15" cy="6" r="1.7"/><circle cx="9" cy="12" r="1.7"/><circle cx="15" cy="12" r="1.7"/><circle cx="9" cy="18" r="1.7"/><circle cx="15" cy="18" r="1.7"/></svg>'}[t]}function na(t,e,a){return`
    <div class="stars" data-habit="${t}">
      ${[1,2,3,4,5].map(s=>`
            <button type="button" class="star ${s<=e?"on":""}" data-action="rate-habit" data-id="${t}" data-rating="${s}" ${a?"disabled":""} aria-label="${s} star">★</button>
          `).join("")}
    </div>
  `}function oa(t,e,a){return`
    <div class="stars stars-small" data-task="${t}">
      ${[1,2,3,4,5].map(s=>`
            <button type="button" class="star small ${s<=e?"on":""}" data-action="rate-task" data-id="${t}" data-rating="${s}" ${a?"disabled":""} aria-label="${s} star">★</button>
          `).join("")}
    </div>
  `}function ra(t){const e=Number(t)||0;return e?`<span class="conscious-badge">🧠 +${e}</span>`:'<span class="item-meta">No conscious pts</span>'}const za=["mentally","psychology","physically","spiritually","socially"];function lt(t){const a=u.getCategories().find(n=>n.id===t),s=a&&a.color?a.color:W(t);return`<span class="cat-badge ${za.includes(t)?`cat-${t}`:"cat-custom"}" style="background:${s}22;color:${s};box-shadow:inset 0 0 0 1px ${s}55">${m(et(t))}</span>`}function le(t){const e=String(t||"");if(!e)return"Deleted";const a=new Date(e);return Number.isNaN(a.getTime())?"Deleted":`Deleted ${a.toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})}`}const He={mentally:"#5b8cff",psychology:"#a06bff",physically:"#22b07d",spiritually:"#e8a51c",socially:"#14b8a6"},Me=["#f472b6","#38bdf8","#fb923c","#a3e635","#facc15","#e879f9"];function W(t,e){const s=u.getCategories().find(i=>i.id===t);return s&&s.color?s.color:He[t]?He[t]:Me[(e??0)%Me.length]}function tt(t){const e=Array.isArray(t)?t.filter(Boolean):[];return e.length?`<div class="tag-row">${e.map(a=>`<span class="tag-chip">#${m(a)}</span>`).join("")}</div>`:""}function da(t){return!t||!t.image?"":`<button type="button" class="task-img-thumb" data-action="view-task-image" data-id="${t.id}" aria-label="View attached photo"><img src="${t.image}" alt="Task photo" loading="lazy" /></button>`}function ca(t){const e=String(t||"");if(!e.trim())return"";const a=e.split(`
`),s=/^\s*(?:•|-|[*])\s+(.*)$/,i=/^\s*\d+[.)]\s+(.*)$/;let n="",r=null;const o=()=>{r&&(n+=r==="ul"?"</ul>":"</ol>",r=null)};return a.forEach(d=>{const c=s.exec(d),g=!c&&i.exec(d);c?(r!=="ul"&&(o(),n+='<ul class="note-list">',r="ul"),n+=`<li>${m(c[1])||"&nbsp;"}</li>`):g?(r!=="ol"&&(o(),n+='<ol class="note-list">',r="ol"),n+=`<li>${m(g[1])||"&nbsp;"}</li>`):d.trim()?(o(),n+=`<p class="note-text">${m(d)}</p>`):(o(),n+='<p class="note-text">&nbsp;</p>')}),o(),n}function Ya(t){const e=ca(t);return e?`<div class="note" style="margin-top:10px">${e}</div>`:""}function xt(t){return String(t||"").split(`
`).map(e=>e.replace(/^\s*(?:•|-|\*|\d+[.)])\s*/,"").trim()).filter(Boolean)}function At(t){return t.map(e=>`• ${e}`).join(`
`)}function Ne(t,e){const a=String(t||"").split(`
`).map(s=>s.replace(/^\s*(?:•|-|\*)\s+/,"").trim()).filter(Boolean);return a.length?`<ul class="note-list idea-list">${a.map((s,i)=>`
        <li>
          <span>${m(s)}</span>
          ${e?"":`<button class="idea-remove" data-action="remove-idea" data-index="${i}" title="Remove idea" aria-label="Remove idea">✕</button>`}
        </li>`).join("")}</ul>`:""}function la(t,e,a){if(!t||t.disabled)return;const s=t.value||"",i=s.split(`
`),n=s.slice(0,t.selectionStart).split(`
`).length-1,r=s.slice(0,t.selectionEnd).split(`
`).length-1,o=t.selectionStart!==t.selectionEnd,d=o?n:0,c=o?r:i.length-1;if(e==="bullets"){const g=i.slice(d,c+1).every(v=>/^\s*(?:•|-|[*])\s+/.test(v)||!v.trim());for(let v=d;v<=c;v++)i[v].trim()&&(g?i[v]=i[v].replace(/^\s*(?:•|-|[*])\s+/,""):/^\s*(?:•|-|[*])\s+/.test(i[v])||(i[v]=`• ${i[v].replace(/^\s*/,"")}`))}else{const g=i.slice(d,c+1).every(p=>/^\s*\d+[.)]\s+/.test(p)||!p.trim());let v=1;for(let p=d;p<=c;p++){if(!i[p].trim())continue;const w=i[p].replace(/^\s*(?:\d+[.)]|•|-|[*])\s+/,"").replace(/^\s*/,"");i[p]=g?w:`${v}. ${w}`,v+=1}}t.value=i.join(`
`),a&&a(t.value);try{t.focus()}catch{}}function Ie(t){la(document.getElementById("day-note"),t,e=>u.setNote(h,e))}function Re(t){la(document.getElementById("profile-values"),t,e=>u.setProfileField("values",e))}function Va(t){return new Promise(e=>{if(!t||!String(t.type||"").startsWith("image/"))return e(null);const a=URL.createObjectURL(t),s=new Image,i=()=>{try{URL.revokeObjectURL(a)}catch{}},n=(r,o)=>new Promise(d=>{let c=s.naturalWidth||0,g=s.naturalHeight||0;if(!c||!g)return d(null);const v=Math.min(1,r/Math.max(c,g));c=Math.max(1,Math.round(c*v)),g=Math.max(1,Math.round(g*v));const p=document.createElement("canvas");p.width=c,p.height=g;try{p.getContext("2d").drawImage(s,0,0,c,g),d(p.toDataURL("image/jpeg",o))}catch{d(null)}});s.onload=async()=>{try{let r=await n(900,.72);r&&r.length>Mt&&(r=await n(600,.62)),r&&r.length>Mt&&(r=await n(400,.55)),i(),e(r&&r.length<=Mt?r:null)}catch{i(),e(null)}},s.onerror=()=>{i(),e(null)},s.src=a})}function Oe(t,e){return`
    <select class="sort-select" data-sort-kind="${t}" aria-label="Sort ${t}">
      ${Ua.map(([a,s])=>`<option value="${a}" ${e===a?"selected":""}>${s}</option>`).join("")}
    </select>
  `}function Ja(t){const e=u.getBadges(),a=u.topBadges(3),s=t.max>0&&t.percent===100,i=Ft?e:a;return`
    <section class="section rewards-section">
      <div class="section-head">
        <h2>Rewards</h2>
        ${e.length>3?`<button class="ghost-btn compact" data-action="toggle-badges">${Ft?"Show less":`More (${e.length}) ›`}</button>`:""}
      </div>
      ${s?`
        <div class="trophy-card">
          <div class="trophy-cup">🏆</div>
          <div>
            <div class="item-title">Gold Cup — Perfect day!</div>
            <div class="item-meta">100% of points on ${J(h)}</div>
          </div>
        </div>
      `:""}
      ${e.length?`
        <div class="rewards-grid">
          ${i.map(n=>`
            <article class="reward-card tier-${n.tier}">
              <div class="reward-medal">${te(n.tier)}</div>
              <div>
                <div class="item-title">${m(n.rewardTitle||n.title)}</div>
                <div class="item-meta">${m(n.title)} · ${Qe(n.tier)} · ${J((n.earnedAt||"").slice(0,10))}</div>
              </div>
            </article>
          `).join("")}
        </div>
      `:'<div class="empty">No rewards yet. Set a goal in Settings → Goals &amp; Rewards.</div>'}
    </section>
  `}function qt(t){return`<span class="streak-badge">${t} day streak</span>`}function ua(t){return t?`<span class="forward-badge from">↩ Forwarded from ${m(t)}</span>`:""}function Wt(t){const e=Array.isArray(t)?t.filter(Boolean):[];return e.length?`<span class="forward-badge to">↪ Forwarded to ${m(e[e.length-1])}</span>`:""}function pa(t){return t?`<span class="forward-badge replace from">⇄ Replaced from ${m(t)}</span>`:""}function Qa(t){const e=u.getAllHabits().map(a=>({habit:a,to:u.habitReplacedTo(h,a.id)})).filter(a=>a.to);return e.length?`
    <div class="replaced-away">
      ${e.map(({habit:a,to:s})=>`
        <button type="button" class="forward-badge replace undo" data-action="undo-replace-habit" data-id="${a.id}" data-from="${h}" data-to="${s}" ${t?"disabled":""} title="${t?"Unlock the day to undo this":`Put ${m(a.name)} back on ${m(h)}`}">
          ⇄ ${m(a.name)} → ${m(s)}
        </button>`).join("")}
    </div>
  `:""}function ma(t,e){if(e)return`<button class="mini-btn" data-action="open-replace-habit" data-id="${t}" disabled title="Unlock the day to replace it">${C("swap")}</button>`;const a=u.habitReplaceDays(h,t);if(!a.allowed){const s=u.findHabit(t),i=s&&s.pin&&s.pin.mode==="forever"?"Pinned forever — no replace option":"No replace days before its next due day";return`<button class="mini-btn" data-action="open-replace-habit" data-id="${t}" disabled title="${i}">${C("swap")}</button>`}return`<button class="mini-btn" data-action="open-replace-habit" data-id="${t}" title="Replace this day with one of the ${a.days.length} day${a.days.length===1?"":"s"} before ${a.next}">${C("swap")}</button>`}function Xa(t){const e=new Date(`${t}T00:00:00`);return e.setDate(e.getDate()+1),u.todayKey(e)}function ue(){return`<button class="ghost-btn compact ${V?"on":""}" data-action="toggle-edit">${V?"Done":"Edit Mode"}</button>`}function Za(t){return t?'<span class="lock-badge">Locked</span>':'<span class="open-badge">Open</span>'}function Ka(){u.checkGoals(h);const t=u.getDay(h),e=u.getSettings(),a=e.showConscious!==!1,s=u.getHabits(h),i=u.getTasks(h),n=u.scoreFor(h),r=ia(n.percent),o=h===u.todayKey(),d=u.isLocked(h);return`
    <div class="topbar">
      <div>
        <p class="kicker">${o?"Today":"Daily report"}</p>
        <h1>${J(h)}</h1>
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
          ${Za(d)}
          <div class="grade-pill">${r}</div>
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
        ${d?`Submitted${t.submittedAt?` at ${qa(t.submittedAt)}`:""}.${(n.missedHabits||0)+(n.missedTasks||0)>0?` ${(n.missedHabits||0)+(n.missedTasks||0)} missed (${n.missedHabits||0} habits, ${n.missedTasks||0} tasks) — unchecked items count as missed.`:" Nothing missed — all done."} Unlock in Settings to edit.`:`Auto-locks at ${e.lockTime}. Submit when the day is done. Unchecked items will count as missed once locked.`}
      </p>
      ${d?'<button class="ghost-btn full" data-action="goto-settings">Unlock in Settings</button>':'<button class="primary-btn full" data-action="submit-day">Submit and lock report</button>'}
      <div class="export-row">
        <span class="muted">Export:</span>
        <button class="ghost-btn compact" data-action="open-export">Excel / JSON / PDF</button>
      </div>
    </section>

    ${Ja(n)}

    <section class="section">
      <div class="section-head">
        <h2>Habits</h2>
        <div class="head-actions">
          ${Oe("habit",e.habitSort||"default")}
          ${ue()}
          <span class="points">+${n.habitScore}${a&&n.consciousScore?` +${n.consciousScore}🧠`:""} pts</span>
        </div>
      </div>
      ${["default","custom"].includes(e.habitSort||"default")&&s.length>1?'<p class="muted tight">Hold the grip button on a card, then drag it to a new spot.</p>':""}
      <div class="list">
        ${s.length?s.map(c=>{const g=u.habitRating(h,c.id),v=g>0,p=!v&&d,w=u.habitStreak(c.id,h),P=a&&Number(c.consciousPoints)||0;return`
                    <article class="item-card ${v?"done":""} ${p?"missed":""} ${d?"is-locked":""}" style="border-left:3px solid ${W(c.category)}" data-sortable="habit" data-id="${c.id}">
                      <button class="check" data-action="toggle-habit" data-id="${c.id}" ${d?"disabled":""}>✓</button>
                      <div class="item-body">
                        <div class="item-title">${m(c.name)} ${p?'<span class="missed-badge">Missed</span>':""}</div>
                        <div class="item-meta">${lt(c.category)} ${c.pin?gt(c.pin):"Not pinned"} · ${g?`${g}/5 ${Bt(g)}`:d?"Missed":"Not rated"}</div>
                        ${c.description?`<p class="item-desc">${m(c.description)}</p>`:""}
                        ${a?`<div class="item-meta">${qt(w)} ${ra(P)}</div>`:`<div class="item-meta">${qt(w)}</div>`}
                        ${Wt(u.habitForwardedTo(h,c.id))}
                        ${pa(u.habitReplacedFrom(h,c.id))}
                        ${tt(c.tags)}
                        ${na(c.id,g,d)}
                      </div>
                      <div class="item-side">
                        <div class="points">+${c.points}${P?` +${P}🧠`:""}</div>
                      </div>
                      <div class="item-actions">
                        <button class="drag-handle" aria-label="Hold and drag to reorder" title="Hold and drag to reorder" ${d?"disabled":""}>${C("grip")}</button>
                        <div class="mini-actions">
                          ${V?`<button class="mini-btn on" data-action="open-edit-habit" data-id="${c.id}" ${d?"disabled":""}>Edit</button>`:""}
                          ${ma(c.id,d)}
                          <button class="mini-btn ${c.pin?"on":""}" data-action="open-pin-habit" data-id="${c.id}" ${d?"disabled":""} title="Pin habit">${C("pin")}</button>
                          <button class="mini-btn" data-action="archive-habit" data-id="${c.id}" ${d?"disabled":""} title="Archive habit" aria-label="Archive habit">${C("archive")}</button>
                        </div>
                      </div>
                    </article>
                  `}).join(""):'<div class="empty">No habits for this day. Tap + to add one.</div>'}
      </div>
      ${Qa(d)}
    </section>

    <section class="section">
      <div class="section-head">
        <h2>Tasks</h2>
        <div class="head-actions">
          ${Oe("task",e.taskSort||"default")}
          ${ue()}
          <span class="points">+${n.taskScore} pts</span>
        </div>
      </div>
      ${["default","custom"].includes(e.taskSort||"default")&&i.length>1?'<p class="muted tight">Hold the grip button on a card, then drag it to a new spot.</p>':""}
      <div class="list">
        ${i.length?i.map(c=>{const g=!!c.sourcePinId,v=g?u.findPinnedTask(c.sourcePinId):null,p=Math.max(0,Math.min(5,Number(c.rating)||0)),w=!c.done&&d;return`
                    <article class="item-card ${c.done?"done":""} ${w?"missed":""} ${d?"is-locked":""}" style="border-left:3px solid ${W(c.category)}" data-sortable="task" data-id="${c.id}">
                      <button class="check" data-action="toggle-task" data-id="${c.id}" ${d?"disabled":""}>✓</button>
                      <div class="item-body">
                        <div class="item-title">${m(c.title)} ${w?'<span class="missed-badge">Missed</span>':""}</div>
                        <div class="item-meta">${lt(c.category)} ${v?gt(v.pin):"One-time task"} · ${c.done?"Done":d?"Missed":"Pending"} · ${p?`${p}/5 ${Bt(p)}`:"No rating"}</div>
                        ${c.description?`<p class="item-desc">${m(c.description)}</p>`:""}
                        ${ua(c.forwardedFrom)}
                        ${Wt(c.forwardedTo)}
                        ${tt(c.tags)}
                        ${c.image?'<span class="task-img-badge">📷 Photo attached</span>':""}
                        ${da(c)}
                        ${oa(c.id,p,d)}
                      </div>
                      <div class="item-side">
                        <div class="points">+${c.points}</div>
                      </div>
                      <div class="item-actions">
                        <button class="drag-handle" aria-label="Hold and drag to reorder" title="Hold and drag to reorder" ${d?"disabled":""}>${C("grip")}</button>
                        <div class="mini-actions">
                          ${V?`<button class="mini-btn on" data-action="open-edit-task" data-id="${c.id}" ${d?"disabled":""}>Edit</button>`:""}
                          <button class="mini-btn" data-action="open-forward-task" data-id="${c.id}" ${d?"disabled":""} title="Forward task to another day">${C("forward")}</button>
                          <button class="mini-btn ${g?"on":""}" data-action="open-pin-task" data-id="${c.id}" ${d?"disabled":""} title="Pin task">${C("pin")}</button>
                          <button class="mini-btn" data-action="archive-task" data-id="${c.id}" ${d?"disabled":""} title="Archive task" aria-label="Archive task">${C("archive")}</button>
                          ${V?`<button class="mini-btn danger" data-action="remove-task" data-id="${c.id}" ${d?"disabled":""} title="Delete task" aria-label="Delete task">${C("trash")}</button>`:""}
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
      <textarea id="day-note" placeholder="How did today go? Tip: use • Bullets for lists." ${d?"disabled":""}>${m(t.note)}</textarea>
    </section>

    ${ti()}
  `}function ti(){const t=u.getArchivedHabits(),e=u.getArchivedTasks(),a=t.length+e.length,s=[...e.map(i=>`
      <article class="manage-card archived" style="border-left:4px solid ${W(i.category)}">
        <div class="section-head">
          <div>
            <div class="item-title">${m(i.title)} <span class="archive-kind">Task</span></div>
            <div class="item-meta">${lt(i.category)} · +${i.points} pts${i.fromDate?` · from ${m(i.fromDate)}`:""}${i.originDate&&i.originDate!==i.fromDate?` · created ${m(i.originDate)}`:""} · ${le(i.archivedAt)}</div>
            ${i.description?`<p class="item-desc">${m(i.description)}</p>`:""}
            ${tt(i.tags)}
          </div>
          <div class="mini-actions">
            <button class="mini-btn on" data-action="restore-task" data-id="${i.id}" title="Restore task to the selected day" aria-label="Restore task">${C("undo")}</button>
            ${V?`<button class="mini-btn danger" data-action="delete-archived-task" data-id="${i.id}" title="Delete permanently" aria-label="Delete permanently">${C("trash")}</button>`:""}
          </div>
        </div>
      </article>
    `),...t.map(i=>`
      <article class="manage-card archived" style="border-left:4px solid ${W(i.category)}">
        <div class="section-head">
          <div>
            <div class="item-title">${m(i.name)} <span class="archive-kind">Habit</span></div>
            <div class="item-meta">${lt(i.category)} · +${i.points} pts${i.pin?` · ${gt(i.pin)}`:" · Pin ended"} · ${le(i.archivedAt)}</div>
            ${i.description?`<p class="item-desc">${m(i.description)}</p>`:""}
            ${tt(i.tags)}
          </div>
          <div class="mini-actions">
            <button class="mini-btn on" data-action="restore-habit" data-id="${i.id}" title="Restore habit" aria-label="Restore habit">${C("undo")}</button>
            <button class="mini-btn danger" data-action="delete-archived-habit" data-id="${i.id}" title="Delete permanently" aria-label="Delete permanently">${C("trash")}</button>
          </div>
        </div>
      </article>
    `)];return`
    <section class="section archive-section">
      <button type="button" class="archive-head" data-action="toggle-archive" aria-expanded="${ct}">
        <span class="archive-title">${C("archive")} Archive</span>
        <span class="archive-count">${a}</span>
        <span class="archive-chevron" aria-hidden="true">${ct?"▾":"▸"}</span>
      </button>
      ${ct?`<div class="archive-list">${a?s.join(""):'<div class="empty">Nothing archived yet. Use the archive button on a habit or task to set it aside here.</div>'}</div>`:""}
    </section>
  `}function Rt(t){return t==="short"?"#short":t==="medium"?"#medium":"#long"}function ei(){const t=u.getProfile(),e=!!t.locked,a=e?"disabled":"",s=Array.isArray(t.whoAmI)?t.whoAmI:[],i=Array.isArray(t.lifeAreas)?t.lifeAreas:[],n=Array.isArray(t.pGoals)?t.pGoals:[],r=Array.isArray(t.quotes)?t.quotes:[],o=u.profileGoalDurations();o[Q].includes(ht)||(ht=o[Q][0]);const d=f=>n.filter(T=>T.term===f).length,c=(It==="all"?n:n.filter(f=>f.term===It)).slice().sort((f,T)=>String(f.createdAt).localeCompare(String(T.createdAt))),g=r.slice().sort((f,T)=>!!f.fav!=!!T.fav?f.fav?-1:1:String(T.createdAt).localeCompare(String(f.createdAt))),v=g.slice(0,3),p=g.slice(3),w=String(t.name||"?").trim().slice(0,1).toUpperCase()||"?",S=String(t.ideas||"").split(`
`).map(f=>f.replace(/^\s*(?:•|-|\*)\s+/,"").trim()).filter(Boolean).length;return`
    <div class="topbar">
      <div>
        <p class="kicker">Profile</p>
        <h1>${m(t.name)||"My profile"}</h1>
      </div>
      <div class="date-nav">
        ${e?'<span class="lock-badge">🔒 Locked</span>':'<span class="open-badge">Open</span>'}
        <button class="ghost-btn compact" data-action="${e?"unlock-profile":"lock-profile"}">${e?"Unlock":"Lock"}</button>
      </div>
    </div>

    ${e?'<div class="profile-lock-banner">🔒 Profile is locked — read only. Tap <b>Unlock</b> to edit.</div>':'<p class="muted tight" style="margin-bottom:14px">Everything here saves automatically on this device and is included in backups. Tap <b>Lock</b> when your profile is final.</p>'}

    <section class="score-hero profile-hero">
      <div class="profile-hero-row">
        <div class="profile-avatar">${m(w)}</div>
        <div style="flex:1;min-width:0">
          <div class="item-title" style="font-size:18px">${m(t.name)||"Your name"}</div>
          <div class="item-meta">${s.length?`${s.length} identities`:"No identities yet"} · ${i.length} life areas · ${n.length} goals · ${r.length} quotes</div>
          ${t.wantToBe?`<p class="item-desc" style="margin-top:6px">“${m(t.wantToBe.slice(0,140))}${t.wantToBe.length>140?"…":""}”</p>`:""}
        </div>
      </div>
    </section>

    <section class="manage-card" style="margin-bottom:10px">
      <h2>Identity</h2>
      <p class="muted tight">Your display name and who you want to be.</p>
      <label>Name
        <input data-profile="name" maxlength="80" value="${m(t.name)}" placeholder="Your name…" ${a} />
      </label>
      <label>Want to be
        <textarea data-profile="wantToBe" maxlength="1000" placeholder="The person I want to be…" style="min-height:76px" ${a}>${m(t.wantToBe)}</textarea>
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
            <input class="whoami-input" data-whoami="${f.id}" maxlength="120" value="${m(f.text)}" ${a} aria-label="Who I am ${T+1}" />
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
          ${i.map((f,T)=>{const Lt=ut===f.id;return`
              <article class="life-card ${Lt?"open":""}">
                <div class="life-head">
                  <button type="button" class="life-toggle" data-action="toggle-lifearea" data-id="${f.id}" aria-expanded="${Lt?"true":"false"}">
                    <b>${m(f.title)}</b>
                    <span>${Lt?"▾":"▸"}</span>
                  </button>
                  ${e?"":`
                    <div class="mini-actions">
                      <button class="mini-btn" data-action="move-lifearea" data-id="${f.id}" data-dir="-1" ${T===0?"disabled":""} title="Move up">↑</button>
                      <button class="mini-btn" data-action="move-lifearea" data-id="${f.id}" data-dir="1" ${T===i.length-1?"disabled":""} title="Move down">↓</button>
                    </div>
                  `}
                </div>
                ${Lt?`
                  <div class="life-body">
                    ${e?f.description?`<p class="item-desc">${m(f.description)}</p>`:'<p class="item-meta">No description yet.</p>':`
                      <label>Title
                        <input data-lifearea-title="${f.id}" maxlength="60" value="${m(f.title)}" />
                      </label>
                      <label>Description
                        <textarea data-lifearea-desc="${f.id}" maxlength="1000" placeholder="What does this area mean to you? What is going well?" style="min-height:70px">${m(f.description)}</textarea>
                      </label>
                      <button class="ghost-btn compact danger" data-action="remove-lifearea" data-id="${f.id}">Remove area</button>
                    `}
                  </div>
                `:f.description?`<p class="item-desc life-preview">${m(f.description.slice(0,90))}${f.description.length>90?"…":""}</p>`:""}
              </article>
            `}).join("")}
        </div>
      `:'<div class="empty">No life areas yet — add Health, Family, Career, Faith…</div>'}
    </section>

    <div class="profile-duo">
      <section class="manage-card">
        <h2>My Vision</h2>
        <p class="muted tight">The future you are working toward.</p>
        <textarea data-profile="vision" maxlength="1000" placeholder="Describe your vision…" style="min-height:110px" ${a}>${m(t.vision)}</textarea>
      </section>
      <section class="manage-card">
        <h2>Core &amp; Personal Values</h2>
        <p class="muted tight">The principles you live by — one per line.</p>
        ${e?t.values.trim()?`<div class="values-list">${ca(t.values)}</div>`:'<p class="item-meta">No values yet.</p>':`
            <div class="note-toolbar">
              <button type="button" class="ghost-btn compact" data-action="values-bullets" title="Bullet list (select lines or all values)">• Bullets</button>
              <button type="button" class="ghost-btn compact" data-action="values-numbered" title="Numbered list (select lines or all values)">1. Numbered</button>
            </div>
            <textarea id="profile-values" data-profile="values" maxlength="1000" placeholder="e.g.&#10;• Honesty&#10;• Discipline&#10;• Mercy" style="min-height:110px">${m(t.values)}</textarea>
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
      ${e?S?Ne(t.ideas,!0):'<p class="item-meta">No ideas yet.</p>':`
          <div class="form" style="margin-bottom:10px">
            <label>New idea
              <input id="new-idea" maxlength="200" placeholder="e.g. Build a habit tracker app" />
            </label>
            <div style="display:flex;gap:8px">
              <button class="primary-btn compact-btn" data-action="add-idea">Add idea</button>
            </div>
          </div>
          ${S?`${Ne(t.ideas,!1)}
               <p class="item-meta">Edit the text below — it saves itself.</p>
               <textarea data-profile="ideas" maxlength="4000" placeholder="• Idea one&#10;• Idea two" style="min-height:110px">${m(t.ideas)}</textarea>`:'<p class="item-meta">Empty — add your first idea above.</p>'}
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
              ${["short","medium","long"].map(f=>`<button type="button" class="chip hashtag-${f} ${Q===f?"on":""}" data-action="set-pgoal-term" data-term="${f}">${Rt(f)}</button>`).join("")}
            </div>
          </div>
          <div class="row-2">
            <label>Timeframe
              <select id="new-pgoal-duration">
                ${o[Q].map(f=>`<option value="${m(f)}" ${ht===f?"selected":""}>${m(f)}</option>`).join("")}
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
        ${[["all",`All (${n.length})`],["short",`#short (${d("short")})`],["medium",`#medium (${d("medium")})`],["long",`#long (${d("long")})`]].map(([f,T])=>`<button type="button" class="chip ${It===f?"on":""}" data-action="set-pgoal-filter" data-filter="${f}">${T}</button>`).join("")}
      </div>
      <div class="habit-manage">
        ${c.length?c.map(f=>`
          <article class="manage-card pgoal-card term-${f.term}">
            <div class="pgoal-top">
              <span class="hashtag hashtag-${f.term}">${Rt(f.term)}</span>
              <span class="duration-pill">⏳ ${m(f.duration)}</span>
              ${e?"":`<button class="mini-btn" data-action="remove-pgoal" data-id="${f.id}" title="Remove goal">✕</button>`}
            </div>
            ${e?`<div class="item-title" style="margin-top:6px">${m(f.text)}</div>`:`
                <input data-pgoal-text="${f.id}" maxlength="200" value="${m(f.text)}" style="margin-top:8px" aria-label="Goal text" />
                <div class="row-2" style="margin-top:8px">
                  <select data-pgoal-term="${f.id}" aria-label="Goal term">
                    ${["short","medium","long"].map(T=>`<option value="${T}" ${f.term===T?"selected":""}>${Rt(T)}</option>`).join("")}
                  </select>
                  <select data-pgoal-duration="${f.id}" aria-label="Goal duration">
                    ${o[f.term].map(T=>`<option value="${m(T)}" ${f.duration===T?"selected":""}>${m(T)}</option>`).join("")}
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
        <span class="item-meta">★ ${r.filter(f=>f.fav).length} · ${r.length} total</span>
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
      ${g.length?`
        <div class="quote-fav-head"><span class="item-title">★ Top 3 favourites</span></div>
        <div class="habit-manage" style="margin-bottom:8px">
          ${v.map(f=>je(f,e)).join("")}
        </div>
        ${p.length?`
          <button class="ghost-btn compact full" data-action="toggle-quotes">${St?"Show less ▴":`More (${p.length}) — see the rest ▾`}</button>
          ${St?`<div class="habit-manage" style="margin-top:8px">${p.map(f=>je(f,e)).join("")}</div>`:""}
        `:St&&!p.length?'<p class="item-meta">No more quotes — that is all of them.</p>':""}
      `:'<div class="empty">No quotes yet — add the words that move you.</div>'}
    </section>
  `}function je(t,e){return`
    <article class="manage-card quote-card ${t.fav?"is-fav":""}">
      <p class="quote-text">“${m(t.text)}”</p>
      ${t.author?`<p class="item-meta">— ${m(t.author)}</p>`:""}
      <div class="quote-foot">
        ${e?`<span class="item-meta">${t.fav?"★ Favourite":""}</span>`:`
            <button class="mini-btn ${t.fav?"on":""}" data-action="toggle-quote-fav" data-id="${t.id}" title="Toggle favourite">★</button>
            <button class="mini-btn" data-action="remove-quote" data-id="${t.id}" title="Remove quote">✕</button>
          `}
      </div>
    </article>
  `}function ai(){document.querySelectorAll("[data-profile]").forEach(t=>{t.addEventListener("input",()=>{u.setProfileField(t.dataset.profile,t.value)||b()})}),document.querySelectorAll("[data-lifearea-title]").forEach(t=>{t.addEventListener("change",()=>{u.updateLifeArea(t.dataset.lifeareaTitle,{title:t.value}),b()})}),document.querySelectorAll("[data-lifearea-desc]").forEach(t=>{t.addEventListener("input",()=>{u.updateLifeArea(t.dataset.lifeareaDesc,{description:t.value})})}),document.querySelectorAll("[data-pgoal-text]").forEach(t=>{t.addEventListener("change",()=>{u.updateProfileGoal(t.dataset.pgoalText,{text:t.value}),b()})}),document.querySelectorAll("[data-pgoal-term]").forEach(t=>{t.addEventListener("change",()=>{u.updateProfileGoal(t.dataset.pgoalTerm,{term:t.value}),b()})}),document.querySelectorAll("[data-pgoal-duration]").forEach(t=>{t.addEventListener("change",()=>{u.updateProfileGoal(t.dataset.pgoalDuration,{duration:t.value}),b()})})}function ii(){const t=u.week(new Date(`${h}T00:00:00`)),e=t.reduce((s,i)=>s+i.earned,0),a=Math.round(e/7);return`
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
                <button class="day-cell ${s.date===h?"active":""} ${s.earned>0?"done":""}" data-action="pick-date" data-date="${s.date}">
                  <span>${s.label.slice(0,2)}</span>
                  <b>${s.earned}</b>
                  ${s.locked?'<i class="dot-lock"></i>':""}
                </button>
              `).join("")}
        </div>
      </section>
    </section>
  `}function si(){const t=_t||O(h),e=$e(t),a=u.todayKey();return`
    <section class="section">
      <div class="section-head">
        <h2>Reports calendar</h2>
        <div class="date-nav">
          <button class="icon-btn" data-action="history-cal-nav" data-dir="-1" aria-label="Previous month">‹</button>
          <button class="icon-btn" data-action="history-cal-nav" data-dir="1" aria-label="Next month">›</button>
        </div>
      </div>
      <div class="pin-cal">
        <div class="pin-cal-head"><b>${Yt(t)}</b></div>
        <div class="pin-cal-grid pin-cal-week">
          ${ve().map(s=>`<span>${s.label.slice(0,1)}</span>`).join("")}
        </div>
        <div class="pin-cal-grid">
          ${e.map(s=>{if(!s)return"<span></span>";const i=u.scoreFor(s),n=s===h?"on-selected":i.percent>=100?"on-perfect":i.earned>0?"on":"",r=i.locked?'<i class="dot-lock"></i>':"";return`<button type="button" class="pin-cal-day hist-cal-day ${n} ${s===a?"is-today":""}" data-action="pick-date" data-date="${s}" title="${m(s)}: ${i.earned}/${i.max} pts (${i.percent}%)"><b>${Number(s.slice(8,10))}</b><span>${i.earned}</span>${r}</button>`}).join("")}
        </div>
      </div>
    </section>
  `}function ni(t){const e=new Map((t||[]).map(n=>[n.date,n])),a=Gt||O(h),s=$e(a),i=u.todayKey();return`
    <div class="pin-cal">
      <div class="pin-cal-head"><b>${Yt(a)}</b><span class="item-meta">${e.size} locked</span></div>
      <div class="pin-cal-grid pin-cal-week">
        ${ve().map(n=>`<span>${n.label.slice(0,1)}</span>`).join("")}
      </div>
      <div class="pin-cal-grid">
        ${s.map(n=>{if(!n)return"<span></span>";const r=e.get(n),o=!!r,d=R.includes(n)?"on-selected":o?"on-locked":"on-open",c=u.scoreFor(n),g=r?r.earned:c.earned;return`<button type="button" class="pin-cal-day hist-cal-day ${d} ${n===i?"is-today":""}" data-action="toggle-locked-day" data-date="${n}" title="${m(n)}: ${o?"Locked":"Open"} — ${g} pts"><b>${Number(n.slice(8,10))}</b><span>${g}</span></button>`}).join("")}
      </div>
    </div>
  `}function oi(){return`
    <section class="manage-card export-card">
      <div class="section-head">
        <div>
          <div class="item-title">Select &amp; export</div>
          <div class="item-meta">Pick a day, week, month or year, then a format.</div>
        </div>
      </div>
      <div class="chip-row" style="margin-bottom:10px">
        ${["day","week","month","year"].map(t=>`<button type="button" class="chip ${_===t?"on":""}" data-action="set-histexp-range" data-range="${t}">${t[0].toUpperCase()}${t.slice(1)}</button>`).join("")}
      </div>
      ${_==="day"||_==="week"?`
        <label>Which ${_==="day"?"day":"week (pick any day in it)"}
          <input id="histexp-date" type="date" value="${h}" />
        </label>
      `:""}
      ${_==="month"?`
        <label>Which month
          <input id="histexp-month" type="month" value="${h.slice(0,7)}" />
        </label>
      `:""}
      ${_==="year"?`
        <label>Which year
          <input id="histexp-year" type="number" min="2000" max="2100" value="${h.slice(0,4)}" />
        </label>
      `:""}
      <div class="export-grid" style="margin-top:10px">
        <button class="choose-card" data-action="histexp-do" data-format="csv"><b>Excel (CSV)</b><span>Opens in Excel / Sheets</span></button>
        <button class="choose-card" data-action="histexp-do" data-format="json"><b>JSON</b><span>Raw data backup</span></button>
        <button class="choose-card" data-action="histexp-do" data-format="pdf"><b>PDF</b><span>Print / save as PDF</span></button>
      </div>
    </section>
  `}function ri(){const t=u.week(new Date(`${h}T00:00:00`)),e=u.todayKey(),a=`${J(t[0].date)} – ${J(t[6].date)}`,s=t.reduce((r,o)=>r+(o.earned||0),0),i=t.reduce((r,o)=>r+(o.max||0),0),n=t.filter(r=>r.hasRecord).length;return`
    <div class="topbar">
      <div>
        <p class="kicker">Archive</p>
        <h1>Past reports</h1>
      </div>
      <button class="ghost-btn compact" data-action="open-export">Export</button>
    </div>
    ${si()}
    ${ii()}
    ${oi()}
    <section class="section">
      <div class="section-head">
        <h2>Week</h2>
        <span class="item-meta">${a}</span>
      </div>
      <p class="item-meta">${n} of 7 days reported · ${s} of ${i} pts</p>
      <div class="history-list">
        ${t.map(r=>{const o=!r.hasRecord,d=(r.missedHabits||0)+(r.missedTasks||0),c=o?"No report":`${r.locked?"Locked":"Open"} · ${ia(r.percent)} · ${r.earned}/${r.max} pts (${r.percent}%)${r.locked&&d>0?` · ❌ ${d} missed`:""}`;return`
              <article class="history-card ${o?"is-empty":""} ${r.date===e?"is-today":""} ${r.date===h?"is-selected":""}">
                <div class="section-head">
                  <div>
                    <div class="item-title">${m(r.label)} ${J(r.date)}</div>
                    <div class="item-meta">${m(c)}</div>
                  </div>
                  <button class="ghost-btn compact" data-action="pick-date" data-date="${r.date}">${o?"Add":"Open"}</button>
                </div>
                <div class="bar"><span style="width:${r.percent}%"></span></div>
                ${r.note?Ya(r.note):`<p class="item-meta">${o?"Nothing recorded this day.":"No note."}</p>`}
              </article>
            `}).join("")}
      </div>
    </section>
  `}function di(t,e){const a=new Date(`${t}T00:00:00`);return a.setDate(a.getDate()+e),u.todayKey(a)}function ci(){return Y==="month"?`${kt(O(h),K)}-15`:Y==="year"?`${Number(h.slice(0,4))+K}-06-15`:di(h,K*7)}function li(t){const[e,a]=u.resolveRange(Y,t);return Y==="week"?`${J(e)} – ${J(a)}`:Y==="month"?Yt(e.slice(0,7)):e.slice(0,4)}function ui(){const t=ci(),e=u.categoryChart(Y,t),a=K===0?Y==="week"?"This week":Y==="month"?"This month":"This year":li(t),s=e.labels.map((n,r)=>{const o=e.cats.reduce((c,g)=>c+(e.perCat[g.id]?e.perCat[g.id][r]:0),0),d=e.cats.map((c,g)=>({cat:c,value:e.perCat[c.id]?e.perCat[c.id][r]:0,ci:g})).filter(c=>c.value>0).map(c=>`<span class="chart-seg" style="height:${Math.max(2,Math.round(c.value/e.max*100))}%;background:${W(c.cat.id,c.ci)}" title="${m(c.cat.label)}: ${c.value} pts"></span>`).join("");return`
      <div class="chart-col" title="${m(e.titles[r])}: ${o} pts">
        <div class="chart-bar">${d||'<span class="chart-empty"></span>'}</div>
        <span class="chart-x">${m(n)}</span>
      </div>
    `}).join(""),i=e.cats.map((n,r)=>`
      <span class="chart-legend-item"><i style="background:${W(n.id,r)}"></i>${m(n.label)} <b>${e.totals[n.id]||0}</b></span>
    `).join("");return`
    <section class="score-hero">
      <div class="section-head" style="margin-bottom:4px">
        <div>
          <div class="item-title">Progress chart</div>
          <div class="item-meta">${a} · ${e.grandTotal} pts total</div>
        </div>
      </div>
      <div class="chart-nav-row">
        <button type="button" class="mini-btn" data-action="chart-nav" data-dir="-1" aria-label="Previous ${Y}">‹</button>
        <div class="chip-row">
          ${["week","month","year"].map(n=>`<button type="button" class="chip ${Y===n?"on":""}" data-action="set-chart-range" data-range="${n}">${n[0].toUpperCase()}${n.slice(1)}</button>`).join("")}
        </div>
        <button type="button" class="mini-btn" data-action="chart-nav" data-dir="1" aria-label="Next ${Y}">›</button>
      </div>
      <div class="chart-wrap${e.labels.length>12?" scroll-x":""}">${s}</div>
      <div class="chart-legend">${i}</div>
    </section>
  `}function pi(){u.getDay(h);const t=u.isLocked(h),e=u.consciousEnabled(),a=u.categoryBreakdown(h),s=a.reduce((n,r)=>n+r.earned,0),i=a.reduce((n,r)=>n+r.max,0);return`
    <div class="topbar">
      <div>
        <p class="kicker">Activities</p>
        <h1>By category</h1>
      </div>
      <div class="date-nav">
        ${ue()}
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
        <div class="grade-pill">${J(h)}</div>
      </div>
      <p class="lock-hint">Habits and tasks grouped by category.</p>
    </section>
    ${ui()}
    ${a.map(n=>{const r=n.max?Math.round(n.earned/n.max*100):0,o=W(n.id);return`
          <section class="section">
            <article class="manage-card cat-card cat-${n.id}" style="border-left:4px solid ${o};background:linear-gradient(180deg, ${o}2e, ${o}14 55%, var(--card) 100%)">
              <div class="section-head">
                <div>
                  <div class="item-title">${n.label}</div>
                  <div class="item-meta">${n.completed}/${n.total} done · rating ${n.habitAvg||0}/5</div>
                </div>
                <div class="points">${n.earned}/${n.max} pts</div>
              </div>
              <div class="bar"><span style="width:${r}%;background:${o}"></span></div>
            </article>
            <div class="list" style="margin-top:10px">
              ${n.habits.length||n.tasks.length?`
                    ${n.habits.map(d=>{const c=u.habitRating(h,d.id),g=!c&&t,v=u.habitStreak(d.id,h),p=e&&Number(d.consciousPoints)||0,w=c>0?p:0,P=Math.round(d.points*c/5)+w,S=d.points+p;return`
                           <article class="item-card ${c?"done":""} ${g?"missed":""} ${t?"is-locked":""}" style="border-left:3px solid ${W(d.category)}">
                             <button class="check" data-action="toggle-habit" data-id="${d.id}" ${t?"disabled":""}>✓</button>
                             <div class="item-body">
                               <div class="item-title">${m(d.name)} ${g?'<span class="missed-badge">Missed</span>':""}</div>
                               <div class="item-meta">Habit · ${c?`${c}/5 ${Bt(c)}`:t?"Missed":"Not rated"} · ${qt(v)}${e?` ${ra(p)}`:""}</div>
                              ${d.description?`<p class="item-desc">${m(d.description)}</p>`:""}
                              ${Wt(u.habitForwardedTo(h,d.id))}
                              ${pa(u.habitReplacedFrom(h,d.id))}
                              ${tt(d.tags)}
                              ${na(d.id,c,t)}
                            </div>
                            <div class="item-side">
                              <div class="points">${P}/${S}</div>
                              <div class="mini-actions">
                                ${V?`<button class="mini-btn on" data-action="open-edit-habit" data-id="${d.id}" ${t?"disabled":""}>Edit</button>`:""}
                                ${ma(d.id,t)}
                              </div>
                            </div>
                          </article>
                        `}).join("")}
                    ${n.tasks.map(d=>{const c=Math.max(0,Math.min(5,Number(d.rating)||0)),g=!d.done&&t;return`
                           <article class="item-card ${d.done?"done":""} ${g?"missed":""} ${t?"is-locked":""}" style="border-left:3px solid ${W(d.category)}">
                             <button class="check" data-action="toggle-task" data-id="${d.id}" ${t?"disabled":""}>✓</button>
                             <div class="item-body">
                               <div class="item-title">${m(d.title)} ${g?'<span class="missed-badge">Missed</span>':""}</div>
                               <div class="item-meta">Task · ${d.done?"Done":t?"Missed":"Pending"} · ${c?`${c}/5 ${Bt(c)}`:"No rating"}${d.description?` · ${m(d.description)}`:""}</div>
                              ${ua(d.forwardedFrom)}
                              ${Wt(d.forwardedTo)}
                              ${tt(d.tags)}
                              ${d.image?'<span class="task-img-badge">📷 Photo attached</span>':""}
                              ${da(d)}
                              ${oa(d.id,c,t)}
                            </div>
                            <div class="item-side">
                              <div class="points">+${d.points}</div>
                              <div class="mini-actions">
                                ${V?`<button class="mini-btn on" data-action="open-edit-task" data-id="${d.id}" ${t?"disabled":""}>Edit</button>`:""}
                                <button class="mini-btn" data-action="open-forward-task" data-id="${d.id}" ${t?"disabled":""} title="Forward task to another day">${C("forward")}</button>
                              </div>
                            </div>
                          </article>
                        `}).join("")}
                  `:'<div class="empty">No activities in this category.</div>'}
            </div>
          </section>
        `}).join("")}
  `}function Ut(t){return`${t||"daily-report-backup"}-${u.todayKey()}.json`}function mi(){const t=u.getInstalledAt(),e=String(t).slice(0,10),a=new Date(`${e}T00:00:00`),s=new Date(`${u.todayKey()}T00:00:00`),i=Number.isNaN(a.getTime())?1:Math.max(1,Math.round((s-a)/864e5)+1),n=String(Number(e.slice(8,10))).padStart(2,"0"),r=e.slice(5,7),o=e.slice(2,4),d=/^\d{4}-\d{2}-\d{2}$/.test(e)?`${n}/${r}/${o}`:e,c=Math.floor((i-1)/365)+1;return`Using Daily Report since ${d} · day ${i} · year ${c}`}function ga(){return typeof window.showDirectoryPicker=="function"}function ye(){return new Promise((t,e)=>{const a=indexedDB.open("daily-report-pwa",1);a.onupgradeneeded=()=>a.result.createObjectStore("kv"),a.onsuccess=()=>t(a.result),a.onerror=()=>e(a.error)})}function gi(t){return ye().then(e=>new Promise((a,s)=>{const i=e.transaction("kv","readonly").objectStore("kv").get(t);i.onsuccess=()=>a(i.result),i.onerror=()=>s(i.error)}))}function fi(t,e){return ye().then(a=>new Promise((s,i)=>{const n=a.transaction("kv","readwrite");n.objectStore("kv").put(e,t),n.oncomplete=()=>s(),n.onerror=()=>i(n.error)}))}function hi(t){return ye().then(e=>new Promise((a,s)=>{const i=e.transaction("kv","readwrite");i.objectStore("kv").delete(t),i.oncomplete=()=>a(),i.onerror=()=>s(i.error)}))}function bi(){return!ga()||typeof indexedDB>"u"?(H="unsupported",Promise.resolve()):gi("backupDir").then(t=>{if(M=t||null,!M){H="unset";return}return M.queryPermission({mode:"readwrite"}).then(e=>{H=e==="granted"?"granted":"prompt"}).catch(()=>{H="prompt"})}).catch(()=>{M=null,H="unset"})}function yi(){return H==="unsupported"?"Folder picking needs Chrome/Edge on desktop — on phones backups download instead.":H==="unset"?"No folder chosen yet.":H==="prompt"?"Tap Choose folder to allow access again.":H==="denied"?"Access was denied — choose the folder again.":H==="granted"&&M?`Folder: ${M.name}`:"Checking…"}async function vi(){if(!ga()){y("Folder access needs Chrome or Edge");return}try{const t=await window.showDirectoryPicker({id:"daily-report-backup",mode:"readwrite"});await fi("backupDir",t),M=t,H="granted",y("Backup folder set")}catch(t){t&&t.name==="AbortError"||y("Couldn't open that folder")}b()}async function $i(){try{await hi("backupDir")}catch{y("Couldn't remove folder");return}M=null,H="unset",y("Backup folder removed"),b()}async function ki(){if(M){try{const t=await M.requestPermission({mode:"readwrite"});H=t==="granted"?"granted":"denied",y(t==="granted"?"Folder access granted":"Access denied")}catch{H="denied"}b()}}async function wi(){const t=u.exportBackup(),e=Ut();if(H==="granted"&&M)try{const s=await(await M.getFileHandle(e,{create:!0})).createWritable();await s.write(t),await s.close(),y("Backup saved to your folder"),fa();return}catch{}bt(e,t,"application/json"),y("Backup downloaded")}async function Si(){if(H!=="granted"||!M)return[];const t=[];try{for await(const e of M.values())if(e&&e.kind==="file"&&/\.json$/i.test(e.name))try{const a=await e.getFile();t.push({name:e.name,modified:a.lastModified})}catch{}}catch{return t}return t.sort((e,a)=>a.modified-e.modified),t}async function fa(){const t=document.getElementById("folder-backup-list");if(!t)return;if(H!=="granted"||!M){t.innerHTML='<button class="ghost-btn compact" data-action="trigger-import">Import from a file instead</button>';return}t.innerHTML='<p class="item-meta">Loading backups…</p>';const e=await Si();if(!document.getElementById("folder-backup-list"))return;e.length?t.innerHTML=e.map(s=>`
            <div style="display:flex;gap:8px;align-items:center;margin-bottom:6px">
              <span class="item-meta" style="flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${m(s.name)}</span>
              <button class="ghost-btn compact" data-action="restore-backup" data-name="${m(s.name)}">Restore</button>
            </div>
          `).join(""):t.innerHTML='<p class="item-meta">Folder is empty — press Export backup now to create the first backup.</p>';const a=document.createElement("div");a.innerHTML='<button class="ghost-btn compact" data-action="trigger-import">Import from a file instead</button>',t.appendChild(a)}async function xi(t){if(M)try{const a=await(await M.getFileHandle(t)).getFile();ha(await a.text(),t)}catch{y("Couldn't read that backup")}}function ha(t,e){let a;try{a=JSON.parse(t)}catch{y("That file isn't valid JSON.");return}const s=u.backupKind(a);if(s==="ok"){if(!window.confirm(`Replace ALL app data with "${e}"?`))return;bt(Ut("daily-report-pre-import"),u.exportBackup(),"application/json"),u.importBackup(a),y("Backup imported"),b();return}if(s==="report-export"){const i=u.previewReport(a);if(!i.days){y("That report file has no day rows to import.");return}if(!window.confirm(`Import ${i.days} day(s) (${i.start} → ${i.end}) from "${e}" as locked history?

${i.newHabits} new habit(s) will be added to your list.
Days already in the app on those dates will be overwritten.`))return;bt(Ut("daily-report-pre-import"),u.exportBackup(),"application/json");const r=u.importReport(a);if(!r){y("That file doesn't look like a valid Daily Report backup.");return}y(`Imported ${r.days} day(s)${r.habits?` + ${r.habits} new habit(s)`:""}`),b();return}if(s==="wrong-app"){y("That backup belongs to another app (e.g. Iron Log) — it can’t be imported into Daily Report.");return}y("That file doesn't look like a valid Daily Report backup.")}async function Ai(){if(!mt){y("Use the browser menu: Install / Add to Home Screen");return}try{mt.prompt();const t=await mt.userChoice;t&&t.outcome==="accepted"&&y("Installing Daily Report…")}catch{}mt=null,b()}async function Ti(){const t=`./version.json?v=${Date.now()}`,e=await fetch(t,{cache:"no-store"});if(!e.ok)throw new Error(`http ${e.status}`);const a=await e.json(),s=a&&(a.version||a.v)||null;if(!s)throw new Error("no version field");return String(s)}async function Di(){it=!0,de=!1,st="Checking for updates… (needs internet)",b();try{if("serviceWorker"in navigator&&navigator.serviceWorker.getRegistration){const e=await navigator.serviceWorker.getRegistration().catch(()=>null);e&&e.update&&e.update().catch(()=>{})}}catch{}if(typeof fetch>"u"){it=!1,st="This browser can’t check — but the app itself works offline. Use Export backup to protect your data.",b();return}const t=setTimeout(()=>{it&&(it=!1,st="Couldn't reach the server — offline? The app itself works offline; updating needs internet.",b())},15e3);try{const e=await Ti();if(clearTimeout(t),it=!1,ce=e,e&&e!==sa){de=!0,st="Update found — updating automatically…",b(),await ba(!0);return}st="You're on the latest version. The app works offline."}catch{clearTimeout(t),it=!1,st="Couldn't reach the server — offline, or this file wasn't opened from the installed/hosted app. The app itself works offline; updating needs internet."}b()}function Be(t){return new Promise(e=>{if(!("serviceWorker"in navigator))return e();const a=()=>e(),s=setTimeout(()=>{try{navigator.serviceWorker.removeEventListener("controllerchange",a)}catch{}e()},t||4e3),i=()=>{clearTimeout(s);try{navigator.serviceWorker.removeEventListener("controllerchange",i)}catch{}e()};try{navigator.serviceWorker.addEventListener("controllerchange",i)}catch{e()}})}async function ba(t){var a;try{bt(Ut("daily-report-pre-update"),u.exportBackup(),"application/json")}catch{}y("Backup saved — updating app…"),st=`Backup saved — updating${ce?` to ${String(ce).slice(-8)}`:""}…`,b();const e=()=>{const s=window.location.href.includes("?")?"&":"?";try{window.location.replace(`${window.location.href.split("#")[0]}${s}v=${Date.now()}#updated`)}catch{window.location.reload()}setTimeout(()=>{try{window.location.reload()}catch{}},2500)};try{if("serviceWorker"in navigator&&navigator.serviceWorker.getRegistration){const s=await navigator.serviceWorker.getRegistration().catch(()=>null);if(s){const i=s.waiting;if(i){try{i.postMessage("SKIP_WAITING")}catch{try{s.waiting.postMessage({type:"SKIP_WAITING"})}catch{}}await Be(4e3),e();return}try{await s.update()}catch{}const n=await navigator.serviceWorker.getRegistration().catch(()=>s),r=(n||s).waiting||(n||s).installing;if(r){try{r.postMessage("SKIP_WAITING")}catch{}try{(a=(n||s).waiting)==null||a.postMessage("SKIP_WAITING")}catch{}await Be(5e3),e();return}try{const o=navigator.serviceWorker.controller;o&&o.postMessage({type:"CLEAR_APP_CACHES"})}catch{}try{if(typeof caches<"u"){const o=await caches.keys().catch(()=>[]);await Promise.all(o.filter(d=>d.startsWith("daily-report-")).map(d=>caches.delete(d).catch(()=>!1)))}}catch{}try{await fetch(`./index.html?v=${Date.now()}`,{cache:"reload"})}catch{}try{await fetch(`./version.json?v=${Date.now()}`,{cache:"reload"})}catch{}try{await(n||s).unregister()}catch{}e();return}}}catch{}try{await fetch(`./index.html?v=${Date.now()}`,{cache:"reload"})}catch{}setTimeout(e,600)}function Pi(){const t=u.getSettings(),e=u.getAllHabits(),a=u.getPinnedHabits(),s=[...a,...e.filter(o=>!o.pin)],i=u.getArchivedHabits(),n=u.getPinnedTasks(),r=u.lockedReports();return`
    <div class="topbar">
      <div>
        <p class="kicker">Admin rules</p>
        <h1>Settings</h1>
      </div>
      <button class="ghost-btn compact ${dt?"on":""}" data-action="toggle-settings-edit" aria-pressed="${dt}">${dt?"Done":"Edit Mode"}</button>
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
          ${[0,1,2,3,4,5,6].map(o=>{const d=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];return`<option value="${o}" ${u.getWeekStart()===o?"selected":""}>${d[o]}</option>`}).join("")}
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
      <p class="item-meta">Version: ${m(Wa)}</p>
      <p class="item-meta">📅 ${m(mi())}</p>
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:8px">
        <button class="primary-btn" data-action="check-updates" ${it?"disabled":""}>${it?"Checking…":"Check for updates"}</button>
        ${de?'<button class="primary-btn" data-action="apply-update">Restart with update</button>':""}
      </div>
      <p class="item-meta">${m(st)}</p>
    </section>

    <section class="manage-card">
      <h2>Data backup</h2>
      <p class="muted tight">Pick a backup folder once (Chrome/Edge on desktop) and exports save straight into it. On phones, backups download to your Downloads folder instead. Import accepts full backups (<b>daily-report-backup-*.json</b>) or month/week report exports, which are added as locked history.</p>
      <p class="item-meta">${m(yi())}</p>
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:8px">
        ${H==="prompt"?'<button class="primary-btn" data-action="grant-folder">Allow access</button>':'<button class="ghost-btn compact" data-action="choose-folder">Choose folder</button>'}
        ${M?'<button class="ghost-btn compact" data-action="forget-folder">Remove</button>':""}
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
        ${u.getCategories().map(o=>{const d=u.getCustomCategories().some(S=>S.id===o.id),c=o.color||W(o.id),g=o.goals||"",v=xt(g),p=ft.has(o.id)?ft.get(o.id):g,w=At(xt(p))!==At(v),P=rt.has(o.id);return`
              <article class="manage-card cat-manage-card ${P?"open":""}">
                <div class="cat-manage-head">
                  <button type="button" class="cat-manage-toggle" data-action="toggle-cat" data-id="${o.id}" aria-expanded="${P?"true":"false"}" aria-controls="cat-editor-${o.id}">
                    <span class="cat-chevron" aria-hidden="true">${P?"▾":"▸"}</span>
                    <i class="cat-swatch" style="background:${m(c)}"></i>
                    <span class="cat-manage-name">${m(et(o.id))}</span>
                    ${v.length?`<span class="cat-goal-flag">${v.length} goal${v.length===1?"":"s"}</span>`:""}
                  </button>
                  <div class="mini-actions">
                    ${d?`<button class="mini-btn on" data-action="rename-category" data-id="${o.id}">Rename</button>`:""}
                    ${d?`<button class="mini-btn" data-action="delete-category" data-id="${o.id}">✕</button>`:""}
                  </div>
                </div>
                ${P?`
                      <div class="cat-manage-body" id="cat-editor-${o.id}">
                        <div class="cat-manage-row">
                          <label>Colour
                            <input type="color" data-cat-color="${o.id}" value="${m(c)}" aria-label="Colour for ${m(o.label||et(o.id))}" />
                          </label>
                          <div class="cat-goals-wrap">
                            <label>Goals — one per line
                              <textarea data-cat-goals="${o.id}" maxlength="1000" placeholder="• Goal one&#10;• Goal two&#10;• Goal three" style="min-height:90px">${m(p)}</textarea>
                            </label>
                            <div class="cat-save-row">
                              <button class="primary-btn compact-btn" data-action="save-cat-goals" data-id="${o.id}">${w?"Save goals":"Saved"}</button>
                              <button class="ghost-btn compact" data-action="reset-cat-goals" data-id="${o.id}" ${w?"":"hidden"}>Discard</button>
                            </div>
                            <p class="item-meta cat-goal-hint">${w?"Unsaved changes — press Save to keep them offline and in backups.":"Saved on this device and included in every backup."}</p>
                          </div>
                        </div>
                      </div>
                    `:v.length?`<ul class="note-list cat-goal-preview">${v.map(S=>`<li>${m(S)}</li>`).join("")}</ul>`:'<p class="item-meta">No goals yet — open this category to add some.</p>'}
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
        ${(()=>{const o=u.getAllTags();return o.length?o.map(({tag:d,count:c})=>`
              <article class="manage-card">
                <div class="section-head">
                  <div>
                    <div class="item-title">#${m(d)}</div>
                    <div class="item-meta">Used ${c} time${c===1?"":"s"}</div>
                  </div>
                  <div class="mini-actions">
                    <button class="mini-btn on" data-action="rename-tag" data-tag="${m(d)}">Rename</button>
                    <button class="mini-btn" data-action="delete-tag" data-tag="${m(d)}">✕</button>
                  </div>
                </div>
              </article>
            `).join(""):'<div class="empty">No tags yet — add some in a habit or task form.</div>'})()}
      </div>
      <div style="display:flex;gap:8px;margin-top:10px;flex-wrap:wrap">
        <select id="tag-habit-pick" style="flex:1;min-width:0">
          ${u.getAllHabits().map(o=>`<option value="${o.id}">${m(o.name)}</option>`).join("")}
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
        ${u.getGoals().length?u.getGoals().map(o=>{var v,p;const d=u.goalProgress(o,h),c=u.getBadges().some(w=>w.goalId===o.id),g=o.kind==="habit-streak"?((v=u.findHabit(o.targetId))==null?void 0:v.name)||"Deleted habit":o.kind==="task-streak"?((p=u.findPinnedTask(o.targetId))==null?void 0:p.title)||"Deleted task":"Any day at 100%";return`
                    <article class="manage-card goal-card ${c?"goal-earned":""}">
                      <div class="section-head">
                        <div>
                          <div class="item-title">${te(o.tier)} ${m(o.title)}</div>
                          <div class="item-meta">${Qe(o.tier)} · “${m(o.rewardTitle)}” · ${m(g)}</div>
                          <div class="item-meta">${d.current}/${d.target} days ${c?"· Earned ✓":""}</div>
                          <div class="bar"><span style="width:${Math.min(100,Math.round(d.current/d.target*100))}%"></span></div>
                        </div>
                        <div class="mini-actions">
                          <button class="mini-btn on" data-action="open-edit-goal" data-id="${o.id}">Edit</button>
                          <button class="mini-btn" data-action="remove-goal" data-id="${o.id}">✕</button>
                        </div>
                      </div>
                    </article>
                  `}).join(""):'<div class="empty">No goals yet. Tap Add goal to create your first reward.</div>'}
      </div>
      ${u.getBadges().length?`
            <div class="section-head" style="margin-top:14px"><h2>Earned badges</h2></div>
            <div class="rewards-grid">
              ${u.getBadges().map(o=>`
                <article class="reward-card tier-${o.tier}">
                  <div class="reward-medal">${te(o.tier)}</div>
                  <div>
                    <div class="item-title">${m(o.rewardTitle||o.title)}</div>
                    <div class="item-meta">${m(o.title)} · ${J((o.earnedAt||"").slice(0,10))}</div>
                  </div>
                  <button class="mini-btn" data-action="remove-badge" data-id="${o.id}">✕</button>
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
      ${ni(r)}
      ${R.length?`
        <div class="chip-row" style="margin-top:10px">
          ${[...R].sort().map(o=>`<button type="button" class="chip on" data-action="toggle-locked-day" data-date="${o}" title="Tap to remove">${o} ✕</button>`).join("")}
        </div>
        <div style="display:flex;gap:8px;margin-top:10px">
          <button class="primary-btn" style="flex:1" data-action="lock-selected">🔒 Lock ${R.length} day${R.length===1?"":"s"}</button>
          <button class="ghost-btn" style="flex:1" data-action="unlock-selected">🔓 Unlock ${R.length} day${R.length===1?"":"s"}</button>
        </div>
      `:""}
    </section>

    <section class="section">
      <div class="section-head">
        <h2>Habits</h2>
        <button class="ghost-btn compact" data-action="open-add-habit">Add</button>
      </div>
      <p class="muted tight">Tap a habit to see its activity. In Edit Mode, edit habits and reorder pinned habits.</p>
      <div class="habit-manage">
        ${s.length?s.map(o=>{const d=Nt.has(o.id),c=o.pin?a.findIndex(v=>v.id===o.id):-1,g=d?u.getHabitActivity(o.id,20):[];return`
                    <article class="manage-card setting-habit-card ${d?"open":""}" style="${o.pin?`border-left:4px solid ${W(o.category)}`:""}">
                      <div class="section-head">
                        <button type="button" class="setting-habit-toggle" data-action="toggle-setting-habit" data-id="${o.id}" aria-expanded="${d?"true":"false"}">
                          <span class="setting-habit-chevron" aria-hidden="true">${d?"▾":"▸"}</span>
                          <span class="setting-habit-heading">
                            <span class="item-title">${m(o.name)}</span>
                            <span class="item-meta">${lt(o.category)} · ${o.pin?gt(o.pin):"Not pinned"} · +${o.points} pts ${t.showConscious!==!1?Number(o.consciousPoints)?`· 🧠 +${o.consciousPoints}`:"· No conscious pts":""} · ${qt(u.habitStreak(o.id,h))}</span>
                          </span>
                        </button>
                        <div class="mini-actions">
                          ${dt?`
                            <button class="mini-btn on" data-action="open-edit-habit" data-id="${o.id}" aria-label="Edit ${m(o.name)}">Edit</button>
                            ${o.pin?`
                              <button class="mini-btn" data-action="move-pinned-habit" data-id="${o.id}" data-dir="-1" ${c===0?"disabled":""} aria-label="Move ${m(o.name)} up" title="Move up">↑</button>
                              <button class="mini-btn" data-action="move-pinned-habit" data-id="${o.id}" data-dir="1" ${c===a.length-1?"disabled":""} aria-label="Move ${m(o.name)} down" title="Move down">↓</button>
                            `:""}
                            <button class="mini-btn ${o.pin?"on":""}" data-action="open-pin-habit" data-id="${o.id}" aria-label="${o.pin?"Change pin schedule":"Pin habit"}">${C("pin")}</button>
                            <button class="mini-btn" data-action="remove-habit" data-id="${o.id}" aria-label="Remove ${m(o.name)}">✕</button>
                          `:""}
                        </div>
                      </div>
                      ${d?`
                        <div class="setting-habit-details">
                          ${o.description?`<p class="item-desc">${m(o.description)}</p>`:'<p class="item-meta">No description yet.</p>'}
                          ${tt(o.tags)}
                          <div class="setting-habit-activity">
                            <div class="item-title">Recent activity</div>
                            ${g.length?g.map(v=>`
                              <button type="button" class="setting-habit-activity-row" data-action="open-habit-activity-date" data-date="${v.date}">
                                <span>${J(v.date)}</span>
                                <span>${v.rating?`${v.rating}/5 · ${v.status}`:v.status}</span>
                                ${v.locked?'<span class="lock-badge">Locked</span>':""}
                              </button>
                            `).join(""):'<p class="item-meta">No recorded activity yet.</p>'}
                          </div>
                        </div>
                      `:""}
                    </article>
                  `}).join(""):'<div class="empty">No habits yet.</div>'}
      </div>
    </section>

    ${i.length?`
    <section class="section">
      <div class="section-head">
        <h2>Deleted habits</h2>
      </div>
      <p class="muted tight">Deleting a habit never erases history: days that already recorded it keep it and its points. Restore a habit to bring it back on future days.</p>
      <div class="habit-manage">
        ${i.map(o=>`
                    <article class="manage-card archived" style="border-left:4px solid ${W(o.category)}">
                      <div class="section-head">
                        <div>
                          <div class="item-title">${m(o.name)}</div>
                          <div class="item-meta">${lt(o.category)} · +${o.points} pts${o.pin?` · ${gt(o.pin)}`:" · Pin ended"} · ${le(o.archivedAt)}</div>
                          ${o.description?`<p class="item-desc">${m(o.description)}</p>`:""}
                          ${tt(o.tags)}
                        </div>
                        <div class="mini-actions">
                          <button class="mini-btn on" data-action="restore-habit" data-id="${o.id}">${C("undo")}</button>
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
        ${n.length?n.map(o=>`
                    <article class="manage-card" style="border-left:4px solid ${W(o.category)}">
                      <div class="section-head">
                        <div>
                          <div class="item-title">${m(o.title)}</div>
                          <div class="item-meta">${lt(o.category)} · ${gt(o.pin)} · +${o.points} pts</div>
                          ${o.description?`<p class="item-desc">${m(o.description)}</p>`:""}
                          ${tt(o.tags)}
                        </div>
                        <div class="mini-actions">
                          ${dt?`
                            <button class="mini-btn on" data-action="open-edit-pinned-task" data-id="${o.id}" aria-label="Edit ${m(o.title)}">Edit</button>
                            <button class="mini-btn" data-action="move-pinned-task" data-id="${o.id}" data-dir="-1" ${n.indexOf(o)===0?"disabled":""} aria-label="Move ${m(o.title)} up" title="Move up">↑</button>
                            <button class="mini-btn" data-action="move-pinned-task" data-id="${o.id}" data-dir="1" ${n.indexOf(o)===n.length-1?"disabled":""} aria-label="Move ${m(o.title)} down" title="Move down">↓</button>
                            <button class="mini-btn on" data-action="open-pin-template" data-id="${o.id}" aria-label="Change repeat schedule">${C("pin")}</button>
                            <button class="mini-btn" data-action="unpin-template" data-id="${o.id}" aria-label="Unpin ${m(o.title)}">✕</button>
                          `:""}
                        </div>
                      </div>
                    </article>
                  `).join(""):'<div class="empty">Pin a task from Today to repeat it.</div>'}
      </div>
    </section>
  `}function O(t){if(/^\d{4}-\d{2}$/.test(String(t||"")))return String(t);if(/^\d{4}-\d{2}-\d{2}$/.test(String(t||"")))return String(t).slice(0,7);const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}`}function kt(t,e){const[a,s]=String(t).split("-").map(Number),i=new Date(a,(s||1)-1+e,1);return`${i.getFullYear()}-${String(i.getMonth()+1).padStart(2,"0")}`}function Yt(t){const[e,a]=String(t).split("-").map(Number);return new Date(e,(a||1)-1,1).toLocaleDateString(void 0,{month:"long",year:"numeric"})}function ve(){const t=u.getWeekStart(),e=pt.findIndex(a=>a.value===t);return e<=0?pt:[...pt.slice(e),...pt.slice(0,e)]}function $e(t){const[e,a]=String(t).split("-").map(Number),i=(new Date(e,a-1,1).getDay()-u.getWeekStart()+7)%7,n=new Date(e,a,0).getDate(),r=[];for(let o=0;o<i;o++)r.push(null);for(let o=1;o<=n;o++)r.push(`${e}-${String(a).padStart(2,"0")}-${String(o).padStart(2,"0")}`);return r}function Fe(t,e,a){const s=new Set(a||[]),i=$e(e);return`
    <div class="pin-cal" data-cal="${t}">
      <div class="pin-cal-head">
        <button type="button" class="mini-btn" data-action="pin-cal-nav" data-target="${t}" data-dir="-1" aria-label="Previous month">‹</button>
        <b>${Yt(e)}</b>
        <button type="button" class="mini-btn" data-action="pin-cal-nav" data-target="${t}" data-dir="1" aria-label="Next month">›</button>
      </div>
      <div class="pin-cal-grid pin-cal-week">
        ${ve().map(n=>`<span>${n.label.slice(0,1)}</span>`).join("")}
      </div>
      <div class="pin-cal-grid">
        ${i.map(n=>n?`<button type="button" class="pin-cal-day ${s.has(n)?"on":""}" data-action="toggle-pin-date" data-target="${t}" data-date="${n}">${Number(n.slice(8,10))}</button>`:"<span></span>").join("")}
      </div>
    </div>
  `}function Ci(t,e){const a=(t==null?void 0:t.mode)||"forever",s=(t==null?void 0:t.until)||"",i=((t==null?void 0:t.weekdays)||[]).map(Number),n=((t==null?void 0:t.monthDays)||[]).map(Number),r=Array.isArray(t==null?void 0:t.yearDays)?[...t.yearDays].sort():[],o=Array.isArray(t==null?void 0:t.customDates)?[...t.customDates].sort():[],d=Array.isArray(t==null?void 0:t.exceptDates)?[...t.exceptDates].sort():Array.isArray(t==null?void 0:t.exceptions)?[...t.exceptions].sort():[],c=e&&e._exceptCal||O(h),g=e&&e._customCal||O(h),v=e&&e._yearMonth||"01";return`
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
        ${pt.map(p=>`
            <button type="button" class="chip weekday ${i.includes(p.value)?"on":""}" data-action="toggle-weekday" data-day="${p.value}">
              ${p.label}
            </button>
          `).join("")}
      </div>
    </div>
    <div class="pin-monthdays" style="${a==="monthly"?"":"display:none"}">
      <p class="item-meta">Repeat every month on day</p>
      <div class="chip-row">
        ${Array.from({length:31},(p,w)=>w+1).map(p=>`<button type="button" class="chip monthday ${n.includes(p)?"on":""}" data-action="toggle-monthday" data-day="${p}">${p}</button>`).join("")}
      </div>
    </div>
    <div class="pin-yeardays" style="${a==="yearly"?"":"display:none"}">
      <p class="item-meta">Repeat every year on (month + day)</p>
      <div class="row-2">
        <label>Month
          <select id="year-month-select">
            ${Array.from({length:12},(p,w)=>w+1).map(p=>`<option value="${String(p).padStart(2,"0")}" ${v===String(p).padStart(2,"0")?"selected":""}>${new Date(2e3,p-1,1).toLocaleDateString(void 0,{month:"long"})}</option>`).join("")}
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
        ${r.length?r.map(p=>`<button type="button" class="chip on" data-action="remove-year-day" data-date="${p}" title="Tap to remove">${p} ✕</button>`).join(""):'<span class="item-meta">No yearly dates yet.</span>'}
      </div>
    </div>
    <div class="pin-customdays" style="margin-top:4px">
      <p class="item-meta"><b style="color:var(--text)">Extra custom dates</b> — also show on these days. Combines with Weekly / Monthly / Yearly; pick the <b style="color:var(--text)">Custom</b> mode to show <i>only</i> on these days. Tap days on the calendar.</p>
      ${Fe("custom",g,o)}
      <div class="chip-row" style="margin-top:8px">
        ${o.length?o.map(p=>`<button type="button" class="chip on" data-action="toggle-pin-date" data-target="custom" data-date="${p}" title="Tap to remove">${p} ✕</button>`).join(""):'<span class="item-meta">No extra custom dates.</span>'}
      </div>
    </div>
    <div class="pin-exceptions" style="margin-top:4px">
      <p class="item-meta"><b style="color:var(--text)">Exceptions</b> — skip these days (tap days on the calendar). Applies to every repeat mode.</p>
      ${Fe("except",c,d)}
      <div class="chip-row" style="margin-top:8px">
        ${d.length?d.map(p=>`<button type="button" class="chip on" data-action="toggle-pin-date" data-target="except" data-date="${p}" title="Tap to remove">${p} ✕</button>`).join(""):'<span class="item-meta">No exceptions.</span>'}
      </div>
    </div>
  `}function Ei(){if(!x)return"";if(x==="choose")return`
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
    `;if(x==="habit"||x==="task"||x==="edit-habit"||x==="edit-task"||x==="edit-pinned-task"){const t=x==="habit"||x==="edit-habit",e=x.startsWith("edit-"),a=$||{},s=a.category||(t?"physically":"mentally"),i=Math.max(0,Math.min(5,Number(a.rating)||0)),n=Array.isArray(a.tags)?a.tags.join(", "):a.tags||"",r=a.consciousPoints!=null?Number(a.consciousPoints):a.conscious!=null?Number(a.conscious):0;return`
      <div class="modal-backdrop open" data-action="close-modal">
        <form class="sheet" data-form="${x}" data-id="${a.id||""}">
          <div class="handle"></div>
          <h2>${e?"Edit":"New"} ${t?"habit":"task"}</h2>
          <div class="form" style="margin-top:14px">
            <label>
              ${t?"Habit name":"Task name"}
              <input name="title" required maxlength="60" value="${m(a.title||a.name||"")}" placeholder="${t?"Meditate":"Finish report"}" />
            </label>
            ${t?`
                  <label>
                    Description (optional)
                    <textarea name="description" maxlength="2000" placeholder="Why this habit matters, extra notes...">${m(a.description||"")}</textarea>
                  </label>
                `:`
                  <label>
                    Description (optional)
                    <textarea name="description" maxlength="240" placeholder="Why this matters, extra notes...">${m(a.description||"")}</textarea>
                  </label>
                  <div>
                    <p class="item-meta">Rating (optional, info only — does not change points)</p>
                    <div class="chip-row rating-row">
                      <button type="button" class="chip ${i===0?"on":""}" data-action="set-rating" data-rating="0">No rating</button>
                      ${[1,2,3,4,5].map(o=>`
                            <button type="button" class="chip ${i===o?"on":""}" data-action="set-rating" data-rating="${o}">${o}★</button>
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
                ${u.getCategories().map(o=>`
                    <button type="button" class="chip ${s===o.id?"on":""}" data-action="set-category" data-category="${o.id}">${m(o.label)}</button>
                  `).join("")}
              </div>
              <input type="hidden" name="category" value="${s}" />
            </div>
            <label>
              Tags (optional, comma separated)
              <input name="tags" maxlength="120" value="${m(n)}" placeholder="morning, health" />
            </label>
            <label>
              Points
              <input name="points" type="number" min="1" max="100" value="${a.points||(t?10:5)}" />
            </label>
            <div class="chip-row">
              ${(t?[5,10,15,20]:[5,10,15,25]).map(o=>`<button type="button" class="chip" data-action="set-points" data-points="${o}">${o} pts</button>`).join("")}
            </div>
            ${t?`
                  <div>
                    <p class="item-meta">Conscious points (bonus when habit is done, 0 = Never)</p>
                    <div class="chip-row conscious-row">
                      ${[0,5,10,15,20].map(o=>`
                            <button type="button" class="chip ${r===o?"on":""}" data-action="set-conscious" data-conscious="${o}">${o===0?"Never":`+${o}🧠`}</button>
                          `).join("")}
                    </div>
                    <label style="margin-top:8px">
                      Custom conscious points
                      <input name="consciousPoints" type="number" min="0" max="100" value="${r||0}" />
                    </label>
                  </div>
                `:""}
            <button class="primary-btn" type="submit">Save ${t?"habit":"task"}</button>
            <button class="ghost-btn" type="button" data-action="close-modal">Cancel</button>
          </div>
        </form>
      </div>
    `}if(x==="export"){const t=$&&$.range||"day";return`
      <div class="modal-backdrop open" data-action="close-modal">
        <div class="sheet">
          <div class="handle"></div>
          <h2>Export report</h2>
          <p class="muted tight">Date: ${J(h)}. Pick a range, then a format.</p>
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
    `}if(x==="goal"||x==="edit-goal"){const t=x==="edit-goal",e=$||{},a=e.kind||"habit-streak",s=u.getAllHabits(),i=u.getPinnedTasks(),n=e.targetId||"";return`
      <div class="modal-backdrop open" data-action="close-modal">
        <form class="sheet" data-form="${x}" data-id="${e.id||""}">
          <div class="handle"></div>
          <h2>${t?"Edit":"New"} goal</h2>
          <div class="form" style="margin-top:14px">
            <label>
              Goal title
              <input name="title" required maxlength="60" value="${m(e.title||"")}" placeholder="Exercise every day" />
            </label>
            <div>
              <p class="item-meta">Goal type</p>
              <div class="chip-row goal-kind-row">
                ${Je.map(r=>`<button type="button" class="chip ${a===r.id?"on":""}" data-action="set-goal-kind" data-kind="${r.id}">${r.label}</button>`).join("")}
              </div>
              <input type="hidden" name="kind" value="${a}" />
            </div>
            <label class="goal-target-habit" style="${a==="habit-streak"?"":"display:none"}">
              Habit
              <select name="habitTarget">
                ${s.map(r=>`<option value="${r.id}" ${n===r.id?"selected":""}>${m(r.name)}</option>`).join("")}
              </select>
            </label>
            <label class="goal-target-task" style="${a==="task-streak"?"":"display:none"}">
              Pinned task
              <select name="taskTarget">
                ${i.length?i.map(r=>`<option value="${r.id}" ${n===r.id?"selected":""}>${m(r.title)}</option>`).join(""):'<option value="">No pinned tasks yet</option>'}
              </select>
            </label>
            <label>
              Number of days
              <input name="targetDays" type="number" min="1" max="365" value="${e.targetDays||7}" />
            </label>
            <div>
              <p class="item-meta">Badge</p>
              <div class="chip-row goal-tier-row">
                ${Dt.map(r=>`<button type="button" class="chip ${(e.tier||"bronze")===r.id?"on":""}" data-action="set-goal-tier" data-tier="${r.id}">${r.medal} ${r.label}</button>`).join("")}
              </div>
              <input type="hidden" name="tier" value="${e.tier||"bronze"}" />
            </div>
            <label>
              Reward title (yours)
              <input name="rewardTitle" required maxlength="60" value="${m(e.rewardTitle||"")}" placeholder="Champion" />
            </label>
            <button class="primary-btn" type="submit">Save goal</button>
            <button class="ghost-btn" type="button" data-action="close-modal">Cancel</button>
          </div>
        </form>
      </div>
    `}if(x==="pin"){const{kind:t,id:e,title:a,pin:s}=$||{};return`
      <div class="modal-backdrop open" data-action="close-modal">
        <form class="sheet sheet-wide" data-form="pin" data-kind="${t}" data-id="${e}">
          <div class="handle"></div>
          <h2>Pin ${t==="habit"?"habit":"task"}</h2>
          <p class="muted tight">${m(a||"")}</p>
          <div class="form" style="margin-top:14px">
            ${Ci(s,$)}
            <button class="primary-btn" type="submit">Save pin</button>
            ${s?'<button class="ghost-btn danger" type="button" data-action="clear-pin">Unpin</button>':""}
            <button class="ghost-btn" type="button" data-action="close-modal">Cancel</button>
          </div>
        </form>
      </div>
    `}if(x==="forward"){const{kind:t,id:e,title:a,from:s}=$||{};return`
      <div class="modal-backdrop open" data-action="close-modal">
        <form class="sheet" data-form="forward" data-kind="${t}" data-id="${e}">
          <div class="handle"></div>
          <h2>Forward task</h2>
          <p class="muted tight">${m(a||"")}</p>
          <p class="item-meta">From ${m(s||h)} — a copy will be created on the day you pick, marked “↩ Forwarded from ${m(s||h)}”.</p>
          <div class="form" style="margin-top:14px">
            <label>
              Forward to day
              <input name="targetDate" type="date" required value="${Xa(s||h)}" />
            </label>
            <button class="primary-btn" type="submit">Forward task →</button>
            <button class="ghost-btn" type="button" data-action="close-modal">Cancel</button>
          </div>
        </form>
      </div>
    `}if(x==="replace"){const{id:t,title:e,from:a,info:s}=$||{},i=s&&s.days||[];return`
      <div class="modal-backdrop open" data-action="close-modal">
        <form class="sheet" data-form="replace" data-id="${t}">
          <div class="handle"></div>
          <h2>Replace habit day</h2>
          <p class="muted tight">${m(e||"")}</p>
          <p class="item-meta">Currently due on <b>${m(a||h)}</b>. Its next direct day is <b>${m(s&&s.next||"")}</b>, so the day may only move to one of the ${i.length} day${i.length===1?"":"s"} in between — the allowable replace days.</p>
          <div class="form" style="margin-top:14px">
            <div class="replace-day-grid">
              ${i.map(n=>`<button type="button" class="chip replace-day-chip" data-action="pick-replace-day" data-date="${n}">${m(n)}</button>`).join("")}
            </div>
            <input type="hidden" name="targetDate" value="${i[0]||""}" />
            <button class="primary-btn" type="submit" ${i.length?"":"disabled"}>Replace day ⇄</button>
            <button class="ghost-btn" type="button" data-action="close-modal">Cancel</button>
          </div>
        </form>
      </div>
    `}if(x==="image"){const{image:t,title:e}=$||{};return t?`
      <div class="lightbox-backdrop" data-action="close-modal">
        <img src="${t}" alt="${m(e||"Task photo")}" />
        <button type="button" class="ghost-btn compact lightbox-close" data-action="close-modal">✕ Close</button>
      </div>
    `:""}return""}function b(){if(Xt){be();try{const t=u.isLocked(h);Xt.innerHTML=`
    <div class="app-shell">
      <main class="screen active">
        ${N==="today"?Ka():""}
        ${N==="profile"?ei():""}
        ${N==="history"?ri():""}
        ${N==="habits"?pi():""}
        ${N==="settings"?Pi():""}
      </main>
      ${["today","habits"].includes(N)&&!t?'<button class="fab" data-action="open-add" aria-label="Add">+</button>':""}
      ${N==="settings"?'<button class="fab" data-action="open-add-habit" aria-label="Add habit">+</button>':""}
      <nav class="tabbar tabs-5">
        <button class="tab ${N==="today"?"active":""}" data-screen="today">${C("home")}Today</button>
        <button class="tab ${N==="profile"?"active":""}" data-screen="profile">${C("profile")}Profile</button>
        <button class="tab ${N==="history"?"active":""}" data-screen="history">${C("history")}History</button>
        <button class="tab ${N==="habits"?"active":""}" data-screen="habits">${C("habit")}Activities</button>
        <button class="tab ${N==="settings"?"active":""}" data-screen="settings">${C("settings")}Settings</button>
      </nav>
    </div>
    ${Ei()}
    <div class="toast" id="toast"></div>
  `,Hi(),ai(),Ri(),Ii(),fa(),Li()}catch(t){const e=t&&t.stack?String(t.stack).slice(0,400):t&&t.message?t.message:"Unknown error";Xt.innerHTML=`<div class="app-shell"><section class="manage-card"><h2>Could not load (Error B)</h2><p class="muted tight">${m(e)}</p><button class="primary-btn full" data-action="reload-app">Reload</button></section></div>`}}}function Li(){if(x!=="habit"&&x!=="task")return;const t=document.querySelector(".sheet");t&&(t.scrollTop=0);const e=document.querySelector('.sheet input[name="title"]');if(e)try{e.focus({preventScroll:!0})}catch{try{e.focus()}catch{}}}function Hi(){const t=document.getElementById("day-note");t&&t.addEventListener("input",()=>{u.isLocked(h)||u.setNote(h,t.value)})}const Mi=3e3,Ni=180,_e=10,A={list:null,card:null,timer:null,startX:0,startY:0,dragging:!1,order0:"",swallowClick:!1,fromHandle:!1,bound:!1};function pe(){A.timer&&(clearTimeout(A.timer),A.timer=null),A.card=null,A.fromHandle=!1}function ya(t,e){return[...t.querySelectorAll(".item-card[data-sortable]")].filter(a=>a.dataset.sortable===e).map(a=>a.dataset.id)}function Ge(t){const e=A.card,a=A.list;if(pe(),A.list=null,A.dragging=!1,!e||(e.classList.remove("is-dragging"),a&&a.classList.remove("is-reordering"),document.body.classList.remove("is-reordering-body"),!t))return;const s=e.dataset.sortable,i=ya(a,s);i.join("|")!==A.order0&&(A.swallowClick=!0,setTimeout(()=>{A.swallowClick=!1},400),s==="habit"?(u.setHabitOrder(i),u.setHabitSort("custom")):s==="task"&&(u.setTaskOrder(h,i),u.setTaskSort("custom")),b(),y("Order saved"))}function Ii(){A.bound||(A.bound=!0,document.addEventListener("pointerdown",t=>{if(t.button!=null&&t.button!==0||t.target.closest("input, textarea, select, img, video, .stars, .mini-btn, .check, .fab, .tabbar"))return;const e=t.target.closest(".item-card[data-sortable]");if(!e)return;const a=e.closest(".list");if(!a||u.isLocked(h))return;const s=e.dataset.sortable,i=u.getSettings(),n=(s==="habit"?i.habitSort:i.taskSort)||"default";n!=="default"&&n!=="custom"&&(s==="habit"?u.setHabitSort("custom"):u.setTaskSort("custom"),y("Switched to Custom order so your drag sticks"));const r=t.target.closest(".drag-handle");r&&t.preventDefault(),pe(),A.list=a,A.card=e,A.fromHandle=!!r,A.startX=t.clientX,A.startY=t.clientY,A.order0=ya(a,s).join("|"),A.timer=setTimeout(()=>{A.timer=null,!(!A.card||!A.card.isConnected)&&(A.dragging=!0,navigator.vibrate&&navigator.vibrate(15),A.card.classList.add("is-dragging"),A.list.classList.add("is-reordering"),document.body.classList.add("is-reordering-body"),y("Drag to reorder, lift to drop"))},r?Ni:Mi)},!0),document.addEventListener("pointermove",t=>{if(A.timer&&A.card&&!A.fromHandle&&(Math.abs(t.clientX-A.startX)>_e||Math.abs(t.clientY-A.startY)>_e)){pe(),A.list=null;return}if(!A.dragging||!A.card)return;t.preventDefault();const e=A.card,a=A.list;if(!a)return;const s=t.clientY,i=e.dataset.sortable,n=[...a.querySelectorAll(".item-card[data-sortable]")].filter(o=>o!==e&&o.dataset.sortable===i);let r=!1;for(const o of n){const d=o.getBoundingClientRect();if(s<d.top+d.height/2){a.insertBefore(e,o),r=!0;break}}r||a.appendChild(e)},{passive:!1}),document.addEventListener("pointerup",()=>Ge(A.dragging)),document.addEventListener("pointercancel",()=>Ge(!1)),document.addEventListener("contextmenu",t=>{(A.dragging||A.card)&&t.preventDefault()}),document.addEventListener("touchmove",t=>{A.dragging&&t.preventDefault()},{passive:!1}),document.addEventListener("click",t=>{A.swallowClick&&(t.stopPropagation(),t.preventDefault())},!0))}function Ri(){const t=document.getElementById("lock-time"),e=document.getElementById("auto-lock");t&&t.addEventListener("change",()=>{u.setLockTime(t.value),y(`Lock time set to ${t.value}`),b()}),e&&e.addEventListener("change",()=>{u.setAutoLock(e.checked),y(e.checked?"Auto-lock on":"Auto-lock off"),b()}),document.querySelectorAll("[data-cat-color]").forEach(s=>{s.addEventListener("input",()=>{var n;u.updateCategory(s.dataset.catColor,{color:s.value});const i=(n=s.closest(".cat-manage-card"))==null?void 0:n.querySelector(".cat-swatch");i&&(i.style.background=s.value)})}),document.querySelectorAll("[data-cat-goals]").forEach(s=>{const i=()=>{const n=s.dataset.catGoals,r=s.closest(".cat-manage-card");if(!r)return;const o=xt((u.getCategories().find(p=>p.id===n)||{}).goals||""),d=At(xt(s.value))!==At(o),c=r.querySelector('[data-action="save-cat-goals"]');c&&(c.textContent=d?"Save goals":"Saved");const g=r.querySelector('[data-action="reset-cat-goals"]');g&&(g.hidden=!d);const v=r.querySelector(".cat-goal-hint");v&&(v.textContent=d?"Unsaved changes — press Save to keep them offline and in backups.":"Saved on this device and included in every backup.")};s.addEventListener("input",()=>{ft.set(s.dataset.catGoals,s.value),i()}),s.addEventListener("change",i)});const a=document.getElementById("backup-file");a&&a.addEventListener("change",()=>{const s=a.files[0];if(!s)return;const i=new FileReader;i.onload=()=>{ha(String(i.result||""),s.name),a.value=""},i.onerror=()=>{y("Couldn't read that file."),a.value=""},i.readAsText(s)})}function y(t){const e=document.getElementById("toast");e&&(e.textContent=t,e.classList.add("show"),setTimeout(()=>e.classList.remove("show"),1800))}function va(){const t=u.getTheme();document.documentElement.dataset.theme=t;const e=document.querySelector('meta[name="theme-color"]');e&&(e.content=t==="light"?"#f3f1ea":"#0e1116")}function m(t){return String(t||"").split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;").split('"').join("&quot;")}function I(){return u.isLocked(h)?(y("This report is locked. Unlock it in Settings."),!0):!1}function ke(t){return{mode:(t==null?void 0:t.mode)||"forever",until:(t==null?void 0:t.until)||"",weekdays:Array.isArray(t==null?void 0:t.weekdays)?t.weekdays.map(Number):[],monthDays:Array.isArray(t==null?void 0:t.monthDays)?t.monthDays.map(Number):[],yearDays:Array.isArray(t==null?void 0:t.yearDays)?[...t.yearDays]:[],customDates:Array.isArray(t==null?void 0:t.customDates)?[...t.customDates]:[],exceptDates:Array.isArray(t==null?void 0:t.exceptDates)?[...t.exceptDates]:Array.isArray(t==null?void 0:t.exceptions)?[...t.exceptions]:[]}}function Oi(t){const e=u.findHabit(t);e&&(x="pin",$={kind:"habit",id:t,title:e.name,pin:e.pin?ke(e.pin):{mode:"forever",until:"",weekdays:[],monthDays:[],yearDays:[],customDates:[],exceptDates:[]},_exceptCal:O(h),_customCal:O(h),_yearMonth:"01"})}function ji(t){const e=u.findTask(h,t);if(!e)return;const a=e.sourcePinId?u.findPinnedTask(e.sourcePinId):null;x="pin",$={kind:"task",id:t,title:e.title,pin:a!=null&&a.pin?ke(a.pin):{mode:"forever",until:"",weekdays:[],monthDays:[],yearDays:[],customDates:[],exceptDates:[]},_exceptCal:O(h),_customCal:O(h),_yearMonth:"01"}}function Bi(t){const e=u.findPinnedTask(t);e&&(x="pin",$={kind:"template",id:t,title:e.title,pin:e.pin?ke(e.pin):{mode:"forever",until:"",weekdays:[],monthDays:[],yearDays:[],customDates:[],exceptDates:[]},_exceptCal:O(h),_customCal:O(h),_yearMonth:"01"})}function Fi(t){var c;const e=t.querySelector('input[name="mode"]').value,a=((c=t.querySelector('input[name="until"]'))==null?void 0:c.value)||"",s=[...t.querySelectorAll(".weekday.on")].map(g=>Number(g.dataset.day)),i=[...t.querySelectorAll(".monthday.on")].map(g=>Number(g.dataset.day)),n=$&&$.pin||{},r=Array.isArray(n.yearDays)?n.yearDays:[],o=Array.isArray(n.customDates)?n.customDates:[],d=Array.isArray(n.exceptDates)?n.exceptDates:[];return e==="until"&&!a?(y("Pick an until date"),null):e==="weekly"&&!s.length?(y("Pick at least one weekday"),null):e==="monthly"&&!i.length?(y("Pick at least one day of month"),null):e==="yearly"&&!r.length?(y("Add at least one yearly date"),null):e==="custom"&&!o.length?(y("Pick at least one custom date"),null):{mode:e,until:a,weekdays:s,monthDays:i,yearDays:r,customDates:o,exceptDates:d}}function bt(t,e,a){const s=e instanceof Blob?e:new Blob([e],{type:a||"text/plain;charset=utf-8"}),i=URL.createObjectURL(s),n=document.createElement("a");n.href=i,n.download=t,document.body.appendChild(n),n.click(),setTimeout(()=>{document.body.removeChild(n),URL.revokeObjectURL(i)},500)}function vt(t){const e=String(t??"");return/[",\n]/.test(e)?`"${e.replace(/"/g,'""')}"`:e}function we(t,e){const[a,s]=u.resolveRange(t,e||h);return{range:t,start:a,end:s,rows:u.exportRows(a,s)}}function qe(t,e){const a=t||$&&$.range||"day",{start:s,end:i,rows:n}=we(a,e),r=[];r.push(["Daily Report export",`${s} to ${i}`].map(vt).join(",")),r.push(["Date","Type","Name","Category","Tags","Points","Rating","Earned","ConsciousPts","Status","Note/Description"].map(vt).join(",")),n.forEach(o=>{o.habits.forEach(d=>{r.push([o.date,"Habit",d.name,d.category,(d.tags||[]).join("|"),d.points,d.rating,d.earned,d.consciousPoints,d.status||(d.rating>0?"done":o.locked?"missed":"pending"),d.description||""].map(vt).join(","))}),o.tasks.forEach(d=>{r.push([o.date,"Task",d.hasImage?`${d.title} [photo]`:d.title,d.category,(d.tags||[]).join("|"),d.points,d.rating||"",d.earned,"",d.status||(d.done?"done":o.locked?"missed":"pending"),d.description||""].map(vt).join(","))}),r.push([o.date,"Summary",`Earned ${o.earned}/${o.max} (${o.percent}%)`,"","","","","","",o.locked?"locked":"open",o.note||""].map(vt).join(","))}),bt(`daily-report-${a}-${s}-to-${i}.csv`,"\uFEFF"+r.join(`
`),"text/csv;charset=utf-8"),y("Excel (CSV) exported")}function We(t,e){const a=t||$&&$.range||"day",{start:s,end:i,rows:n}=we(a,e),r={app:"Daily Report",exportedAt:new Date().toISOString(),range:a,start:s,end:i,days:n};bt(`daily-report-${a}-${s}-to-${i}.json`,JSON.stringify(r,null,2),"application/json"),y("JSON exported")}function Ue(t,e){const a=t||$&&$.range||"day",{start:s,end:i,rows:n}=we(a,e),r=n.map(d=>`
        <section style="margin-bottom:18px;border:1px solid #ddd;border-radius:12px;padding:12px">
          <h2 style="margin:0 0 4px;font-size:16px">${m(d.date)} — ${d.earned}/${d.max} pts (${d.percent}%)</h2>
          <p style="margin:0 0 8px;font-size:12px;color:#555">Habits ${d.habitScore} + Conscious ${d.consciousScore} + Tasks ${d.taskScore} · ${d.locked?"Locked":"Open"}${d.note?` · Note: ${m(d.note)}`:""}</p>
          <table style="width:100%;border-collapse:collapse;font-size:12px">
            <thead><tr><th align="left">Type</th><th align="left">Name</th><th align="left">Category</th><th>Points</th><th>Rating</th><th>Earned</th><th>Status</th></tr></thead>
            <tbody>
              ${d.habits.map(c=>`<tr><td>Habit</td><td>${m(c.name)}${c.description?` (${m(c.description)})`:""}</td><td>${m(c.category)}</td><td align="center">${c.points}${c.consciousPoints?`+${c.consciousPoints}🧠`:""}</td><td align="center">${c.rating||"-"}/5</td><td align="center">${c.earned}</td><td align="center">${c.status||(c.rating>0?"done":d.locked?"missed":"pending")}</td></tr>`).join("")}
              ${d.tasks.map(c=>`<tr><td>Task</td><td>${m(c.title)}${c.hasImage?" 📷":""}${c.description?` (${m(c.description)})`:""}</td><td>${m(c.category)}</td><td align="center">${c.points}</td><td align="center">${c.rating?`${c.rating}/5`:"-"}</td><td align="center">${c.earned}</td><td align="center">${c.status||(c.done?"done":d.locked?"missed":"pending")}</td></tr>`).join("")}
            </tbody>
          </table>
        </section>
      `).join(""),o=window.open("","_blank");if(!o){y("Popup blocked — allow popups to export PDF");return}o.document.write(`<!DOCTYPE html><html><head><title>Daily Report ${s} to ${i}</title></head><body style="font-family:sans-serif;padding:24px"><h1>Daily Report — ${s} to ${i}</h1>${r}<script>window.onload=function(){window.print()}<\/script></body></html>`),o.document.close(),y("PDF print view opened")}document.addEventListener("click",t=>{const e=t.target.closest("[data-screen]");if(e){N=e.dataset.screen,b();return}const a=t.target.closest("[data-action]");if(!a)return;const s=a.dataset.action;if(s==="close-modal"){if(x==="image"){x=null,$=null,b();return}(t.target.classList.contains("modal-backdrop")||a.classList.contains("ghost-btn"))&&(x=null,$=null,b());return}if(s==="note-bullets"){Ie("bullets");return}if(s==="note-numbered"){Ie("numbered");return}if(s==="values-bullets"){Re("bullets");return}if(s==="values-numbered"){Re("numbered");return}if(s==="pick-task-image"){const i=document.getElementById("task-image-input");i?i.click():y("Photo picking needs a browser file picker");return}if(s==="remove-task-image"){$&&($._image="",b(),y("Photo removed — save to apply"));return}if(s==="view-task-image"){const i=u.findTask(h,a.dataset.id),n=i&&i.image?i.image:$&&($._image||$.image)||"";if(!n){y("No photo on this task");return}x="image",$={image:n,title:i&&i.title||"Task photo"},b();return}if(s==="prev-day"&&Le(-1),s==="next-day"&&Le(1),s==="reload-app"){window.location.reload();return}if(s==="set-theme"){const i=a.dataset.theme==="light"?"light":"dark";u.setTheme(i),va(),y(i==="light"?"Light mode on":"Dark mode on")}if(s==="install-app"){Ai();return}if(s==="check-updates"){Di();return}if(s==="apply-update"){ba();return}if(s==="backup-now"){wi();return}if(s==="trigger-import"){const i=document.getElementById("backup-file");i&&i.click();return}if(s==="choose-folder"){vi();return}if(s==="grant-folder"){ki();return}if(s==="forget-folder"){$i();return}if(s==="restore-backup"){xi(a.dataset.name);return}if(s==="goto-settings"&&(N="settings"),s==="open-add-habit"&&(x="habit",$=null),s==="open-add-task"){if(I())return;x="task",$={category:"mentally"}}if(s==="open-add"){if(I())return;x="choose",$={category:"mentally"}}if(s==="toggle-edit"&&(V=!V),s==="toggle-settings-edit"){dt=!dt,b();return}if(s==="toggle-setting-habit"){const i=a.dataset.id;Nt.has(i)?Nt.delete(i):Nt.add(i),b();return}if(s==="move-pinned-habit"){const i=u.getPinnedHabits(),n=i.findIndex(o=>o.id===a.dataset.id),r=n+(Number(a.dataset.dir)||0);if(n>=0&&r>=0&&r<i.length){const o=i[n];i[n]=i[r],i[r]=o,u.setPinnedHabitOrder(i.map(d=>d.id))}b();return}if(s==="move-pinned-task"){const i=u.getPinnedTasks(),n=i.findIndex(o=>o.id===a.dataset.id),r=n+(Number(a.dataset.dir)||0);if(n>=0&&r>=0&&r<i.length){const o=i[n];i[n]=i[r],i[r]=o,u.setPinnedTaskOrder(i.map(d=>d.id))}b();return}if(s==="open-habit-activity-date"){h=a.dataset.date,N="today",b();return}if(s==="open-edit-habit"){const i=u.findHabit(a.dataset.id);if(!i)return;x="edit-habit",$={id:i.id,name:i.name,description:i.description||"",points:i.points,category:i.category,tags:i.tags||[],consciousPoints:Number(i.consciousPoints)||0}}if(s==="open-edit-task"){if(I())return;const i=u.findTask(h,a.dataset.id);if(!i)return;x="edit-task",$={id:i.id,title:i.title,points:i.points,description:i.description,category:i.category,tags:i.tags||[],rating:Number(i.rating)||0,image:i.image||"",_image:void 0}}if(s==="open-edit-pinned-task"){const i=u.findPinnedTask(a.dataset.id);if(!i)return;x="edit-pinned-task",$={id:i.id,title:i.title,points:i.points,description:i.description||"",category:i.category,tags:i.tags||[],rating:0,image:i.image||"",_image:void 0}}if(s==="toggle-badges"&&(Ft=!Ft),s==="open-goal"&&(x="goal",$={kind:"habit-streak",targetDays:7,tier:"bronze"}),s==="open-edit-goal"){const i=u.getGoals().find(n=>n.id===a.dataset.id);if(!i)return;x="edit-goal",$={...i}}if(s==="remove-goal"&&(u.removeGoal(a.dataset.id),y("Goal removed")),s==="remove-badge"&&(u.removeBadge(a.dataset.id),y("Badge removed")),s==="rate-habit"){if(I())return;const n=u.habitRating(h,a.dataset.id)===Number(a.dataset.rating)?0:Number(a.dataset.rating);u.setHabitRating(h,a.dataset.id,n)}if(s==="rate-task"){if(I())return;const i=u.findTask(h,a.dataset.id);if(!i)return;const r=(Number(i.rating)||0)===Number(a.dataset.rating)?0:Number(a.dataset.rating);u.setTaskRating(h,a.dataset.id,r)}if(s==="open-export"&&(x="export",$={range:$&&$.range||"day"}),s==="set-export-range"){x="export",$={range:a.dataset.range||"day"},b();return}if(s==="do-export"){const i=a.dataset.format,n=$&&$.range||"day";i==="csv"&&qe(n,h),i==="json"&&We(n,h),i==="pdf"&&Ue(n,h),x=null,$=null}if(s==="set-histexp-range"){_=["day","week","month","year"].includes(a.dataset.range)?a.dataset.range:"day",b();return}if(s==="histexp-do"){const i=a.dataset.format;let n=h;if(_==="day"||_==="week"){const r=document.getElementById("histexp-date");r&&/^\d{4}-\d{2}-\d{2}$/.test(r.value)&&(n=r.value)}else if(_==="month"){const r=document.getElementById("histexp-month");r&&/^\d{4}-\d{2}$/.test(r.value)&&(n=`${r.value}-15`)}else if(_==="year"){const r=document.getElementById("histexp-year"),o=Number(r&&r.value);Number.isInteger(o)&&o>=2e3&&o<=2100&&(n=`${String(o)}-06-15`)}i==="csv"&&qe(_,n),i==="json"&&We(_,n),i==="pdf"&&Ue(_,n);return}if(s==="history-cal-nav"){const i=_t||O(h);_t=kt(i,Number(a.dataset.dir)||0),b();return}if(s==="locked-cal-nav"){const i=Gt||O(h);Gt=kt(i,Number(a.dataset.dir)||0),b();return}if(s==="toggle-locked-day"){const i=a.dataset.date,n=R.indexOf(i);n>=0?R.splice(n,1):R.push(i),b();return}if(s==="lock-selected"){const i=[...R].sort();if(!i.length)return;const n=u.lockDays(i);R=[],y(n===1?`Locked ${n} day`:`Locked ${n} days`),b();return}if(s==="unlock-selected"){const i=[...R].sort();if(!i.length)return;const n=u.unlockDays(i);R=[],y(n===1?`Unlocked ${n} day`:`Unlocked ${n} days`),b();return}if(s==="submit-day"&&(u.submitDay(h),y("Report submitted and locked")),s==="unlock-day"&&(u.unlockDay(a.dataset.date),y("Report unlocked")),s==="toggle-habit"){if(I())return;u.toggleHabit(h,a.dataset.id),b()}if(s==="toggle-task"){if(I())return;u.toggleTask(h,a.dataset.id),b()}if(s==="remove-task"){if(!V||I())return;u.removeTask(h,a.dataset.id),b()}if(s==="remove-habit"&&(u.removeHabit(a.dataset.id),b()),s==="restore-habit"){const i=u.restoreHabit(a.dataset.id);y(i.ok?"Habit restored":i.reason||"Could not restore that habit"),b()}if(s==="toggle-archive"){ct=!ct,b();return}if(s==="archive-habit"){u.removeHabit(a.dataset.id),ct=!0,y("Habit archived — restore it from the Archive"),b();return}if(s==="archive-task"){if(I())return;const i=u.archiveTask(h,a.dataset.id);if(!i.ok){y(i.reason||"Could not archive that task");return}ct=!0,y("Task archived — restore it from the Archive"),b();return}if(s==="restore-task"){const i=u.isLocked(h)?u.todayKey():h,n=u.restoreTask(a.dataset.id,i);n.ok?y(n.from&&n.from!==i?`Task restored to ${i} — forwarded from ${n.from}`:`Task restored to ${i}`):y(n.reason||"Could not restore that task"),i!==h&&(h=i),b();return}if(s==="delete-archived-task"){if(!V||!window.confirm("Delete this archived task permanently? This cannot be undone."))return;const i=u.deleteArchivedTask(a.dataset.id);y(i.ok?"Task deleted permanently":i.reason||"Could not delete"),b();return}if(s==="delete-archived-habit"){if(!window.confirm("Delete this archived habit permanently? This cannot be undone."))return;const i=u.deleteArchivedHabit(a.dataset.id);y(i.ok?"Habit deleted permanently":i.reason||"Could not delete"),b();return}if(s==="open-pin-habit"&&Oi(a.dataset.id),s==="open-replace-habit"){if(I())return;const i=u.findHabit(a.dataset.id);if(!i)return;const n=u.habitReplaceDays(h,i.id);x="replace",$={id:i.id,title:i.name,from:h,info:n};return}if(s==="pick-replace-day"){const i=document.querySelector('.sheet input[name="targetDate"]');i&&(i.value=a.dataset.date),document.querySelectorAll(".replace-day-chip").forEach(n=>{n.classList.toggle("on",n.dataset.date===a.dataset.date)});return}if(s==="undo-replace-habit"){if(I())return;const i=u.undoReplaceHabit(a.dataset.id,a.dataset.from,a.dataset.to);y(i.ok?"Habit is due on this day again":i.reason||"Could not undo that"),b();return}if(s==="open-forward-task"){if(I())return;const i=u.findTask(h,a.dataset.id);if(!i)return;x="forward",$={kind:"task",id:i.id,title:i.title,from:h}}if(s==="open-pin-task"){if(I())return;ji(a.dataset.id)}if(s==="open-pin-template"&&Bi(a.dataset.id),s==="unpin-template"&&(u.unpinTaskTemplate(a.dataset.id),y("Task unpinned")),s==="pick-date"&&(h=a.dataset.date,N="today"),s==="set-chart-range"){Y=["week","month","year"].includes(a.dataset.range)?a.dataset.range:"week",K=0,b();return}if(s==="chart-nav"){K+=Number(a.dataset.dir)||0,K>0&&(K=0),b();return}if(s==="add-category"){const i=document.getElementById("new-category"),n=u.addCategory(i?i.value:"");y(n.ok?"Category added":n.reason||"Couldn't add category"),b();return}if(s==="rename-category"){const i=u.getCustomCategories().find(o=>o.id===a.dataset.id),n=window.prompt("Rename category",i?i.label:"");if(n==null)return;const r=u.renameCategory(a.dataset.id,n);y(r.ok?"Category renamed":r.reason||"Couldn't rename"),b();return}if(s==="delete-category"){if(!window.confirm("Delete this category? Its habits and tasks move to Mentally."))return;const i=u.deleteCategory(a.dataset.id);i.ok&&rt.delete(a.dataset.id),y(i.ok?"Category deleted":i.reason||"Couldn't delete"),b();return}if(s==="rename-tag"){const i=window.prompt("Rename tag everywhere",a.dataset.tag||"");if(i==null)return;const n=u.renameTag(a.dataset.tag,i);y(n.ok?n.merged?"Tags merged":"Tag renamed everywhere":n.reason||"Couldn't rename"),b();return}if(s==="delete-tag"){if(!window.confirm(`Delete tag "#${a.dataset.tag}" from all habits and tasks?`))return;u.deleteTag(a.dataset.tag),y("Tag deleted everywhere"),b();return}if(s==="add-tag"){const i=document.getElementById("tag-habit-pick"),n=document.getElementById("new-tag"),r=u.addTagToHabit(i?i.value:"",n?n.value:"");y(r.ok?"Tag added to habit":r.reason||"Couldn't add tag"),b();return}if(s==="set-points"){const i=document.querySelector('input[name="points"]');i&&(i.value=a.dataset.points),document.querySelectorAll(".chip-row .chip[data-points]").forEach(n=>n.classList.remove("on")),a.classList.add("on");return}if(s==="set-category"){const i=a.closest("form")||a.closest(".sheet"),n=i.querySelector('input[name="category"]');n&&(n.value=a.dataset.category),i.querySelectorAll(".cat-row .chip").forEach(r=>r.classList.remove("on")),a.classList.add("on");return}if(s==="set-rating"){const i=a.closest(".sheet")||a.closest("form")||document,n=i.querySelector('input[name="rating"]');n&&(n.value=a.dataset.rating),i.querySelectorAll(".rating-row .chip").forEach(r=>r.classList.remove("on")),a.classList.add("on");return}if(s==="set-conscious"){const i=a.closest(".sheet")||a.closest("form")||document,n=i.querySelector('input[name="consciousPoints"]');n&&(n.value=a.dataset.conscious),i.querySelectorAll(".conscious-row .chip").forEach(r=>r.classList.remove("on")),a.classList.add("on");return}if(s==="set-goal-kind"){const i=a.closest(".sheet")||document,n=i.querySelector('input[name="kind"]');n&&(n.value=a.dataset.kind),i.querySelectorAll(".goal-kind-row .chip").forEach(c=>c.classList.remove("on")),a.classList.add("on");const r=a.dataset.kind,o=i.querySelector(".goal-target-habit"),d=i.querySelector(".goal-target-task");o&&(o.style.display=r==="habit-streak"?"":"none"),d&&(d.style.display=r==="task-streak"?"":"none"),$&&($.kind=r);return}if(s==="set-goal-tier"){const i=a.closest(".sheet")||document,n=i.querySelector('input[name="tier"]');n&&(n.value=a.dataset.tier),i.querySelectorAll(".goal-tier-row .chip").forEach(r=>r.classList.remove("on")),a.classList.add("on");return}if(s==="pin-mode"){const i=a.closest("form"),n=a.dataset.mode;i.querySelector('input[name="mode"]').value=n,i.querySelectorAll(".pin-modes .chip").forEach(o=>o.classList.remove("on")),a.classList.add("on");const r=(o,d)=>{const c=i.querySelector(o);c&&(c.style.display=d?"":"none")};r(".pin-until",n==="until"),r(".pin-weekdays",n==="weekly"),r(".pin-monthdays",n==="monthly"),r(".pin-yeardays",n==="yearly"),$&&$.pin&&($.pin.mode=n);return}if(s==="toggle-weekday"){a.classList.toggle("on");return}if(s==="toggle-monthday"){a.classList.toggle("on");return}if(s==="pin-cal-nav"){if(!$)return;const i=a.dataset.target,n=Number(a.dataset.dir)||0;i==="except"?$._exceptCal=kt($._exceptCal||O(h),n):$._customCal=kt($._customCal||O(h),n),b();return}if(s==="toggle-pin-date"){if(!$||!$.pin)return;const i=a.dataset.target,n=a.dataset.date,r=i==="custom"?"customDates":"exceptDates",o=Array.isArray($.pin[r])?[...$.pin[r]]:[],d=o.indexOf(n);d>=0?o.splice(d,1):(o.push(n),o.length>365&&o.shift()),$.pin[r]=o.sort(),b();return}if(s==="add-year-day"){if(!$||!$.pin)return;const i=a.closest("form")||document,n=i.querySelector("#year-month-select"),r=i.querySelector("#year-day-select");n&&($._yearMonth=n.value);const o=`${n?n.value:"01"}-${r?r.value:"01"}`,d=Array.isArray($.pin.yearDays)?[...$.pin.yearDays]:[];d.includes(o)||d.push(o),$.pin.yearDays=d.sort(),b();return}if(s==="remove-year-day"){if(!$||!$.pin)return;const i=a.dataset.date;$.pin.yearDays=($.pin.yearDays||[]).filter(n=>n!==i),b();return}if(s==="clear-pin"){const i=a.closest("form"),n=i.dataset.kind,r=i.dataset.id;if(n==="habit"&&u.unpinHabit(r),n==="task"){const o=u.findTask(h,r);o!=null&&o.sourcePinId&&u.unpinTaskTemplate(o.sourcePinId)}n==="template"&&u.unpinTaskTemplate(r),x=null,$=null,y("Unpinned"),b();return}if(s==="lock-profile"){u.setProfileLocked(!0),y("Profile locked — read only"),b();return}if(s==="unlock-profile"){u.setProfileLocked(!1),y("Profile unlocked"),b();return}if(s==="add-whoami"){const i=document.getElementById("new-whoami"),n=u.addWhoAmI(i?i.value:"");y(n.ok?"Added":n.reason||"Couldn't add"),b();return}if(s==="move-whoami"){u.moveWhoAmI(a.dataset.id,Number(a.dataset.dir)||0),b();return}if(s==="remove-whoami"){u.removeWhoAmI(a.dataset.id),y("Removed"),b();return}if(s==="add-lifearea"){const i=document.getElementById("new-lifearea"),n=u.addLifeArea(i?i.value:"");n.ok?(ut=n.id,y("Life area added")):y(n.reason||"Couldn't add"),b();return}if(s==="toggle-lifearea"){const i=a.dataset.id;ut=ut===i?null:i,b();return}if(s==="move-lifearea"){u.moveLifeArea(a.dataset.id,Number(a.dataset.dir)||0),b();return}if(s==="toggle-cat"){const i=a.dataset.id;rt.has(i)?rt.delete(i):rt.add(i),b();const n=document.querySelector(`[data-action="toggle-cat"][data-id="${CSS.escape(i)}"]`);n&&n.focus({preventScroll:!0});return}if(s==="expand-cats"){u.getCategories().forEach(i=>rt.add(i.id)),b();return}if(s==="collapse-cats"){rt.clear(),b();return}if(s==="save-cat-goals"){const i=a.dataset.id,n=document.querySelector(`[data-cat-goals="${CSS.escape(i)}"]`),r=n?n.value:ft.get(i)||"",o=xt(r);u.updateCategory(i,{goals:At(o)}),ft.delete(i),y(o.length?`Saved ${o.length} goal${o.length===1?"":"s"} for ${et(i)}`:`Cleared goals for ${et(i)}`),b();return}if(s==="reset-cat-goals"){const i=a.dataset.id;ft.delete(i),b();return}if(s==="remove-lifearea"){u.removeLifeArea(a.dataset.id),ut===a.dataset.id&&(ut=null),y("Life area removed"),b();return}if(s==="set-pgoal-term"){Q=["short","medium","long"].includes(a.dataset.term)?a.dataset.term:"short",ht=u.profileGoalDurations()[Q][0],b();return}if(s==="set-pgoal-filter"){It=["all","short","medium","long"].includes(a.dataset.filter)?a.dataset.filter:"all",b();return}if(s==="add-pgoal"){const i=document.getElementById("new-pgoal"),n=document.getElementById("new-pgoal-duration"),r=u.addProfileGoal(i?i.value:"",Q,n?n.value:ht);y(r.ok?`Goal added ${Rt(Q)}`:r.reason||"Couldn't add"),b();return}if(s==="remove-pgoal"){u.removeProfileGoal(a.dataset.id),y("Goal removed"),b();return}if(s==="add-idea"){const i=document.getElementById("new-idea"),n=String(i?i.value:"").trim().slice(0,200);if(!n){y("Write an idea first");return}if(u.isProfileLocked()){y("Profile is locked");return}const r=String(u.getProfile().ideas||"").split(`
`).map(o=>o.trim()).filter(Boolean);r.push(`• ${n}`),u.setProfileField("ideas",r.join(`
`)),y("Idea added"),b();return}if(s==="remove-idea"){if(u.isProfileLocked())return;const i=Number(a.dataset.index),n=String(u.getProfile().ideas||"").split(`
`).filter(r=>r.trim());if(!Number.isInteger(i)||i<0||i>=n.length)return;n.splice(i,1),u.setProfileField("ideas",n.join(`
`)),y("Idea removed"),b();return}if(s==="add-quote"){const i=document.getElementById("new-quote"),n=document.getElementById("new-quote-author"),r=u.addQuote(i?i.value:"",n?n.value:"");y(r.ok?"Quote added":r.reason||"Couldn't add"),b();return}if(s==="toggle-quote-fav"){u.toggleQuoteFav(a.dataset.id),b();return}if(s==="remove-quote"){u.removeQuote(a.dataset.id),y("Quote removed"),b();return}if(s==="toggle-quotes"){St=!St,b();return}b()});document.addEventListener("submit",t=>{const e=t.target.closest("[data-form]");if(!e)return;t.preventDefault();const a=e.dataset.form;if(a==="habit"||a==="task"||a==="edit-habit"||a==="edit-task"||a==="edit-pinned-task"){const s=new FormData(e),i=String(s.get("title")||""),n=Number(s.get("points")||0),r=String(s.get("category")||"mentally"),o=String(s.get("description")||""),d=String(s.get("tags")||""),c=Math.max(0,Math.min(5,Number(s.get("rating")||0))),g=Math.max(0,Math.min(100,Number(s.get("consciousPoints")||0)));if(!i.trim())return;const v=$&&$._image!==void 0?G($._image):G($&&$.image);if(a==="habit")u.addHabit(i,n,{description:o,category:r,consciousPoints:g,tags:d,startFrom:h}),y("Habit added");else if(a==="task"){if(I())return;u.addTask(h,i,n,{description:o,category:r,rating:c,tags:d,image:v}),y("Task added")}else if(a==="edit-habit")u.updateHabit(e.dataset.id,{name:i,description:o,points:n,category:r,consciousPoints:g,tags:d}),y("Habit updated");else if(a==="edit-pinned-task")u.updatePinnedTaskDetails(e.dataset.id,{title:i,description:o,points:n,category:r,tags:d,image:v}),y("Pinned task updated");else{if(I())return;u.updateTask(h,e.dataset.id,{title:i,points:n,description:o,category:r,rating:c,tags:d,image:v}),y("Task updated")}x=null,$=null,b();return}if(a==="pin"){const s=Fi(e);if(!s)return;const i=e.dataset.kind,n=e.dataset.id;i==="habit"&&u.pinHabit(n,s),i==="task"&&u.pinTask(h,n,s),i==="template"&&u.updatePinnedTask(n,s),x=null,$=null,y("Pin saved"),b();return}if(a==="replace"){const s=new FormData(e),i=String(s.get("targetDate")||""),n=e.dataset.id,r=$&&$.from||h,o=u.replaceHabit(r,n,i);if(!o.ok){y(o.reason||"Could not replace that habit day");return}x=null,$=null,y(`Habit moved from ${o.from} to ${o.to}`),b();return}if(a==="goal"||a==="edit-goal"){const s=new FormData(e),i=String(s.get("title")||"").trim(),n=String(s.get("kind")||"habit-streak"),r=String(s.get("tier")||"bronze"),o=String(s.get("rewardTitle")||"").trim(),d=Math.max(1,Math.min(365,Number(s.get("targetDays")||7)));if(!i||!o){y("Goal title and reward title are required");return}let c="";if(n==="habit-streak"&&(c=String(s.get("habitTarget")||"")),n==="task-streak"&&(c=String(s.get("taskTarget")||"")),(n==="habit-streak"||n==="task-streak")&&!c){y(n==="habit-streak"?"Pick a habit":"Pin a task first, then pick it");return}a==="goal"?(u.addGoal({title:i,kind:n,targetId:c,targetDays:d,tier:r,rewardTitle:o}),y("Goal added")):(u.updateGoal(e.dataset.id,{title:i,kind:n,targetId:c,targetDays:d,tier:r,rewardTitle:o}),y("Goal updated"));const g=u.checkGoals(h);g.length&&y(`🏅 Reward earned: ${g[0].rewardTitle}!`),x=null,$=null,b()}});document.addEventListener("change",t=>{const e=t.target.closest(".sort-select");if(e){const a=e.dataset.sortKind;a==="habit"&&u.setHabitSort(e.value),a==="task"&&u.setTaskSort(e.value),b()}if(t.target&&t.target.id==="show-conscious"&&(u.setShowConscious(t.target.checked),y(t.target.checked?"Conscious points on":"Conscious points hidden"),b()),t.target&&t.target.id==="week-start"&&(u.setWeekStart(Number(t.target.value)),y("Week starts on "+t.target.selectedOptions[0].textContent),b()),t.target&&t.target.id==="new-pgoal-duration"){ht=t.target.value;return}if(t.target&&t.target.id==="year-month-select"&&$&&($._yearMonth=t.target.value),t.target&&t.target.id==="task-image-input"){const a=t.target.files&&t.target.files[0];if(!a)return;if(!String(a.type||"").startsWith("image/")){y("Please pick an image file"),t.target.value="";return}y("Processing photo…"),Va(a).then(s=>{if(t.target.value="",!s){y("Photo too large or unreadable — try a smaller one");return}$&&($._image=s,b(),y("Photo attached — save to apply"))})}});if("serviceWorker"in navigator){window.addEventListener("load",()=>{navigator.serviceWorker.register("./sw.js").catch(()=>{})});let t=!1;try{const e=Number(sessionStorage.getItem("dr-reload-at")||0);Date.now()-e<8e3&&(t=!0)}catch{}navigator.serviceWorker.addEventListener("controllerchange",()=>{if(!t){t=!0;try{sessionStorage.setItem("dr-reload-at",String(Date.now()))}catch{}window.location.reload()}})}function _i(){const t=document.getElementById("boot-error");t&&(t.style.display="none")}_i();va();b();bi().then(()=>{N==="settings"&&b()});setInterval(()=>{!document.hidden&&be()&&b()},6e4);document.addEventListener("visibilitychange",()=>{!document.hidden&&be()&&b()});
