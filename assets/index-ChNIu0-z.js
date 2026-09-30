(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function a(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=a(s);fetch(s.href,n)}})();const we="daily-report-v2",Pt=[{id:"mentally",label:"Mentally"},{id:"psychology",label:"Psychology"},{id:"physically",label:"Physically"},{id:"spiritually",label:"Spiritually"},{id:"socially",label:"Socially"}];Pt.map(t=>t.id);const Se=[{id:"h1",name:"Wake up early",points:10,icon:"sunrise",category:"physically",pin:{mode:"forever"}},{id:"h2",name:"Drink water",points:5,icon:"drop",category:"physically",pin:{mode:"forever"}},{id:"h3",name:"Exercise",points:15,icon:"bolt",category:"physically",pin:{mode:"forever"}},{id:"h4",name:"Read 20 minutes",points:10,icon:"book",category:"mentally",pin:{mode:"forever"}},{id:"h5",name:"No junk food",points:10,icon:"leaf",category:"physically",pin:{mode:"forever"}}],xe={lockTime:"21:00",autoLock:!0,showConscious:!0,habitSort:"default",taskSort:"default",theme:"dark",weekStart:1};function Rt(t){const e=Number(t);return Number.isInteger(e)&&e>=0&&e<=6?e:1}const yt=[{id:"iron",label:"Iron",medal:"🥉",rank:1},{id:"bronze",label:"Bronze",medal:"🥉",rank:2},{id:"silver",label:"Silver",medal:"🥈",rank:3},{id:"gold",label:"Gold",medal:"🥇",rank:4}],Ae=[{id:"habit-streak",label:"Habit streak"},{id:"task-streak",label:"Pinned task streak"},{id:"perfect-days",label:"Perfect days (100%)"}];function se(t){var e;return((e=yt.find(a=>a.id===t))==null?void 0:e.rank)||0}function jt(t){var e;return((e=yt.find(a=>a.id===t))==null?void 0:e.medal)||"🏅"}function Te(t){var e;return((e=yt.find(a=>a.id===t))==null?void 0:e.label)||t||"Badge"}function T(t){const e=Array.isArray(t)?t:String(t||"").split(","),a=[];return e.forEach(i=>{const s=String(i||"").trim().slice(0,20);s&&!a.some(n=>n.toLowerCase()===s.toLowerCase())&&a.push(s),a.length>=10}),a.slice(0,10)}function Nt(t,e){const a=[...t];return e==="points"?a.sort((i,s)=>(Number(s.points)||0)-(Number(i.points)||0)):e==="category"?a.sort((i,s)=>it(D(i.category)).localeCompare(it(D(s.category)))):e==="tags"&&a.sort((i,s)=>(i.tags&&i.tags[0]||"~~~").localeCompare(s.tags&&s.tags[0]||"~~~")),a}const nt=[{value:1,label:"Mon"},{value:2,label:"Tue"},{value:3,label:"Wed"},{value:4,label:"Thu"},{value:5,label:"Fri"},{value:6,label:"Sat"},{value:0,label:"Sun"}];function _(t=new Date){const e=t.getFullYear(),a=String(t.getMonth()+1).padStart(2,"0"),i=String(t.getDate()).padStart(2,"0");return`${e}-${a}-${i}`}function Vt(){return{habits:{},habitRatings:{},habitMissed:{},habitForwarded:{},tasks:[],note:"",locked:!1,lockOverride:null,submittedAt:null,lockedHabits:null,skippedPins:[]}}var H=[];function Y(){return[...Pt,...H]}function D(t){return Y().map(a=>a.id).includes(t)?t:"mentally"}function it(t){var e;return((e=Y().find(a=>a.id===t))==null?void 0:e.label)||"Mentally"}const vt=7e5;function V(t){const e=String(t||"");return e.startsWith("data:image/")?e.length>vt?"":e:""}function ne(t){const e=Math.max(0,Math.min(5,Number(t.rating)||0)),a=s=>/^\d{4}-\d{2}-\d{2}$/.test(String(s||""))?String(s):"",i=s=>Array.isArray(s)?s.filter(n=>/^\d{4}-\d{2}-\d{2}$/.test(String(n))).map(String).slice(0,50):[];return{...t,description:t.description||"",category:D(t.category),tags:T(t.tags),rating:e,done:!!t.done,missed:!!t.missed,forwardedFrom:a(t.forwardedFrom),forwardedHabitId:String(t.forwardedHabitId||""),forwardedTo:i(t.forwardedTo),image:V(t.image)}}function F(t){const e=Number(t);return!Number.isFinite(e)||e<0?0:Math.min(100,Math.round(e))}function Jt(t,e){return{id:String(t.id||""),name:String(t.name||"").slice(0,80),description:String(t.description||"").slice(0,240),points:Number(t.points)||0,icon:t.icon||"star",category:D(t.category),consciousPoints:F(t.consciousPoints),tags:T(t.tags),pin:U(t.pin),archivedAt:e||t.archivedAt||null}}function U(t){if(!t||!t.mode)return null;const e=(s,n,o)=>Array.isArray(s)?s.map(Number).filter(r=>Number.isFinite(r)&&r>=n&&r<=o):[],a=s=>Array.isArray(s)?s.filter(n=>/^\d{4}-\d{2}-\d{2}$/.test(String(n))).map(String).slice(0,365):[],i=s=>Array.isArray(s)?s.filter(n=>/^\d{2}-\d{2}$/.test(String(n))).map(String).slice(0,366):[];return{mode:["forever","until","weekly","monthly","yearly","custom"].includes(t.mode)?t.mode:"forever",until:t.until||"",weekdays:e(t.weekdays,0,6),monthDays:e(t.monthDays,1,31),yearDays:i(t.yearDays),customDates:a(t.customDates),exceptDates:a(t.exceptDates||t.exceptions)}}function We(t,e){const a=`${t} ${e}`.toLowerCase();return a.includes("read")||a.includes("study")||a.includes("learn")?"mentally":a.includes("meditat")||a.includes("pray")||a.includes("journal")?"spiritually":a.includes("mood")||a.includes("calm")||a.includes("therapy")?"psychology":a.includes("friend")||a.includes("family")||a.includes("social")||a.includes("call")||a.includes("visit")?"socially":"physically"}function Bt(t){const e=Ae.some(a=>a.id===t.kind)?t.kind:"habit-streak";return{id:String(t.id||`g${Date.now()}`),title:String(t.title||"").trim().slice(0,60)||"My goal",kind:e,targetId:String(t.targetId||""),targetDays:Math.max(1,Math.min(365,Number(t.targetDays)||7)),tier:yt.some(a=>a.id===t.tier)?t.tier:"bronze",rewardTitle:String(t.rewardTitle||"").trim().slice(0,60)||"Reward",createdAt:t.createdAt||new Date().toISOString()}}function _e(t){if(!Array.isArray(t))return[];const e=new Set(Pt.map(i=>i.id)),a=[];return t.forEach(i=>{if(!i||typeof i!="object")return;const s=String(i.id||"").trim().slice(0,40),n=String(i.label||"").trim().slice(0,30);!s||!n||e.has(s.toLowerCase())||(e.add(s.toLowerCase()),a.push({id:s,label:n,color:String(i.color||"").slice(0,20),goals:String(i.goals||"").slice(0,1e3)}))}),a.slice(0,20)}const Ft={name:80,wantToBe:1e3,vision:1e3,values:1e3},Ot=["short","medium","long"],ut={short:["1 Week","2 Weeks","3 Weeks","4 Weeks"],medium:["1 Month","2 Months","3 Months"],long:["1 Year","2 Years","3 Years","5 Years","10+ Years"]};function B(t){return`${t||"id"}${Date.now().toString(36)}${Math.floor(Math.random()*9999)}`}function Ue(t){return Array.isArray(t)?t.map(e=>{if(typeof e=="string")return{id:B("w"),text:e.trim().slice(0,120)};if(!e||typeof e!="object")return null;const a=String(e.text||e.label||e.name||"").trim().slice(0,120);return a?{id:String(e.id||B("w")),text:a}:null}).filter(Boolean).slice(0,50):[]}function ze(t){return typeof t=="string"?t.split(`
`).map(e=>e.trim().replace(/^[-•*]\s+/,"")).filter(Boolean).slice(0,20).map(e=>({id:B("a"),title:e.slice(0,60),description:""})):Array.isArray(t)?t.map(e=>{if(typeof e=="string"){const i=e.trim().slice(0,60);return i?{id:B("a"),title:i,description:""}:null}if(!e||typeof e!="object")return null;const a=String(e.title||e.name||"").trim().slice(0,60);return a?{id:String(e.id||B("a")),title:a,description:String(e.description||"").slice(0,1e3)}:null}).filter(Boolean).slice(0,20):[]}function Ye(t){return Array.isArray(t)?t.map(e=>{if(typeof e=="string"){const o=e.trim().slice(0,200);return o?{id:B("g"),text:o,term:"short",duration:"1 Week",createdAt:new Date().toISOString()}:null}if(!e||typeof e!="object")return null;const a=String(e.text||e.title||"").trim().slice(0,200);if(!a)return null;const i=Ot.includes(e.term)?e.term:"short",s=ut[i],n=s.includes(e.duration)?e.duration:s[0];return{id:String(e.id||B("g")),text:a,term:i,duration:n,createdAt:e.createdAt||new Date().toISOString()}}).filter(Boolean).slice(0,100):[]}function Ve(t){return Array.isArray(t)?t.map(e=>{if(typeof e=="string"){const i=e.trim().slice(0,500);return i?{id:B("q"),text:i,author:"",fav:!1,createdAt:new Date().toISOString()}:null}if(!e||typeof e!="object")return null;const a=String(e.text||e.quote||"").trim().slice(0,500);return a?{id:String(e.id||B("q")),text:a,author:String(e.author||"").trim().slice(0,80),fav:!!(e.fav||e.favorite),createdAt:e.createdAt||new Date().toISOString()}:null}).filter(Boolean).slice(0,200):[]}function gt(t){const e=t&&typeof t=="object"?t:{},a={};Object.entries(Ft).forEach(([s,n])=>{s==="wantToBe"&&!e.wantToBe&&e.about?a[s]=String(e.about||"").slice(0,n):a[s]=String(e[s]||"").slice(0,n)}),a.locked=!!e.locked,a.whoAmI=Ue(e.whoAmI||e.whoIAm||[]),a.lifeAreas=ze(Array.isArray(e.lifeAreas)||typeof e.lifeAreas=="string"?e.lifeAreas:[]);let i=Ye(e.pGoals||e.goalsList||e.profileGoals||[]);return i.length||[["goalsShort","short","1 Week"],["goalsMid","medium","1 Month"],["goalsLong","long","1 Year"]].forEach(([n,o,r])=>{const d=String(e[n]||"");d.trim()&&d.split(`
`).map(c=>c.trim().replace(/^[-•*]\s+/,"")).filter(Boolean).forEach(c=>{i.length>=100||i.push({id:B("g"),text:c.slice(0,200),term:o,duration:r,createdAt:new Date().toISOString()})})}),a.pGoals=i,a.quotes=Ve(e.quotes||e.favQuotes||[]),a}function Je(t,e){const a=String(t&&t.installedAt||"");if(/^\d{4}-\d{2}-\d{2}/.test(a))return a;const i=Object.keys(e||{}).sort();return i.length?`${i[0]}T00:00:00.000`:new Date().toISOString()}function De(t){H=_e(t.customCategories||[]);const e=(Array.isArray(t.habits)&&t.habits.length?t.habits:Se).map(i=>({...i,description:String(i.description||"").slice(0,240),category:D(i.category||We(i.id,i.name)),consciousPoints:F(i.consciousPoints),tags:T(i.tags),pin:U(i.pin)})),a={};return Object.entries(t.days||{}).forEach(([i,s])=>{a[i]={...Vt(),habits:s.habits||{},habitRatings:s.habitRatings||{},habitMissed:s.habitMissed||{},habitForwarded:s.habitForwarded&&typeof s.habitForwarded=="object"?s.habitForwarded:{},tasks:Array.isArray(s.tasks)?s.tasks.map(ne):[],note:s.note||"",locked:!!s.locked,lockOverride:s.lockOverride||(s.locked?"locked":null),submittedAt:s.submittedAt||null,lockedHabits:Array.isArray(s.lockedHabits)?s.lockedHabits:null,skippedPins:Array.isArray(s.skippedPins)?s.skippedPins.map(String).filter(n=>n.length<=60).slice(0,100):[]}}),{habits:e,archivedHabits:(Array.isArray(t.archivedHabits)?t.archivedHabits:[]).filter(i=>i&&typeof i=="object"&&i.id).map(i=>Jt(i,i.archivedAt||null)).filter(i=>i.id.length<=60).slice(0,500),customCategories:H,installedAt:Je(t,a),profile:gt(t.profile),pinnedTasks:Array.isArray(t.pinnedTasks)?t.pinnedTasks.map(i=>({...ne(i),pin:U(i.pin)})):[],days:a,goals:Array.isArray(t.goals)?t.goals.map(Bt):[],badges:Array.isArray(t.badges)?t.badges.filter(i=>i&&i.id&&i.goalId).map(i=>({id:String(i.id),goalId:String(i.goalId),title:String(i.title||""),tier:i.tier||"bronze",rewardTitle:String(i.rewardTitle||""),earnedAt:i.earnedAt||new Date().toISOString()})):[],settings:{lockTime:t.settings&&t.settings.lockTime||xe.lockTime,autoLock:!t.settings||t.settings.autoLock!==!1,showConscious:!t.settings||t.settings.showConscious!==!1,habitSort:["default","points","category","tags"].includes(t.settings&&t.settings.habitSort)?t.settings.habitSort:"default",taskSort:["default","points","category","tags"].includes(t.settings&&t.settings.taskSort)?t.settings.taskSort:"default",theme:["light","dark"].includes(t.settings&&t.settings.theme)?t.settings.theme:"dark",weekStart:Rt(t.settings&&t.settings.weekStart)}}}function oe(){return{habits:Se.map(t=>({...t,description:"",tags:[]})),archivedHabits:[],customCategories:[],installedAt:new Date().toISOString(),profile:gt({}),pinnedTasks:[],days:{},goals:[],badges:[],settings:{...xe}}}function Qe(){try{const t=localStorage.getItem(we)||localStorage.getItem("daily-report-v1");return t?De(JSON.parse(t)):oe()}catch{return oe()}}let l=Qe();H=l.customCategories||[];l.customCategories=H;let Ce=0,Mt={key:null,value:null},Gt=0;function Qt(){return Gt>0}function Q(t){Gt+=1;try{return t()}finally{Gt-=1}}function $(){Ce+=1;try{localStorage.setItem(we,JSON.stringify(l))}catch{}}let re=0;function tt(t){return re+=1,`${t||"id"}${Date.now().toString(36)}${re.toString(36)}${Math.floor(Math.random()*1296).toString(36)}`}function Xe(t){return new Date(`${t}T00:00:00`).getDay()}function ct(t){const e=new Date(`${t}T00:00:00`);return e.setDate(e.getDate()-1),_(e)}function Xt(t,e){if(!t)return!0;if(Array.isArray(t.exceptDates)&&t.exceptDates.includes(e)||Array.isArray(t.exceptions)&&t.exceptions.includes(e))return!1;if((Array.isArray(t.customDates)?t.customDates:[]).includes(e)||t.mode==="forever")return!0;if(t.mode==="until")return!!t.until&&e<=t.until;if(t.mode==="weekly")return Array.isArray(t.weekdays)&&t.weekdays.includes(Xe(e));if(t.mode==="monthly"){const i=Array.isArray(t.monthDays)?t.monthDays.map(Number):[];return i.length?i.includes(Number(String(e).slice(8,10))):!0}if(t.mode==="yearly"){const i=Array.isArray(t.yearDays)?t.yearDays:[];return i.length?i.includes(String(e).slice(5,10)):!0}return t.mode!=="custom"}function ft(t){if(!t)return"Not pinned";const e=(t.exceptDates||t.exceptions||[]).length,a=e?` · ⛔ ${e} exception${e>1?"s":""}`:"",i=t.mode==="custom"?0:Array.isArray(t.customDates)?t.customDates.length:0,s=i?` +${i} custom`:"";if(t.mode==="forever")return`Pinned forever${s}${a}`;if(t.mode==="until")return`${t.until?`Pinned until ${t.until}`:"Pinned until a date"}${s}${a}`;if(t.mode==="weekly"){const n=Array.isArray(t.weekdays)?t.weekdays:[],o=nt.filter(r=>n.includes(r.value)).map(r=>r.label);return`${o.length?`Weekly: ${o.join(", ")}`:"Weekly (no days)"}${s}${a}`}if(t.mode==="monthly"){const n=Array.isArray(t.monthDays)?t.monthDays:[];return`${n.length?`Monthly: day${n.length>1?"s":""} ${[...n].sort((o,r)=>o-r).join(", ")}`:"Monthly"}${s}${a}`}if(t.mode==="yearly"){const n=Array.isArray(t.yearDays)?t.yearDays:[];return`${n.length?`Yearly: ${[...n].sort().join(", ")}`:"Yearly"}${s}${a}`}if(t.mode==="custom"){const n=Array.isArray(t.customDates)?t.customDates:[];return`${n.length?`Custom: ${n.length} date${n.length>1?"s":""}`:"Custom dates"}${a}`}return"Pinned"}function qt(t){const[e,a]=(l.settings.lockTime||"21:00").split(":").map(Number),i=new Date(`${t}T00:00:00`);return i.setHours(e||0,a||0,0,0),i}function Pe(t){const e=l.days[t];return e?e.lockOverride==="locked"||e.locked===!0:!1}function Wt(t,e){const a=l.days[t];return a?a.habitRatings&&a.habitRatings[e]!=null?Number(a.habitRatings[e])||0:a.habits&&a.habits[e]?5:0:0}function Ze(t,e){if(!t)return!1;if((t.habitRatings&&t.habitRatings[e]!=null?Number(t.habitRatings[e])||0:t.habits&&t.habits[e]?5:0)>0||t.habitMissed&&t.habitMissed[e])return!0;const i=t.habitForwarded&&t.habitForwarded[e];return Array.isArray(i)&&i.length>0}function Ee(t){if(!t)return[...l.habits];const e=l.habits.filter(i=>Xt(i.pin,t)),a=l.days[t];if(a){const i=new Set(e.map(n=>n.id)),s=n=>{!n||i.has(n.id)||Ze(a,n.id)&&(i.add(n.id),e.push(n))};l.habits.forEach(s),l.archivedHabits&&l.archivedHabits.length&&l.archivedHabits.forEach(s)}return e}function Ke(t){const e=l.habits.find(a=>a.id===t);return e||(l.archivedHabits||[]).find(a=>a.id===t)||null}function ta(t){l.archivedHabits||(l.archivedHabits=[]),!l.archivedHabits.some(e=>e.id===t.id)&&(l.archivedHabits.push(Jt(t,new Date().toISOString())),l.archivedHabits.length>500&&l.archivedHabits.splice(0,l.archivedHabits.length-500))}function _t(t){const e=P(t),a=Ee(t);e.lockedHabits=a.map(i=>Jt(i)),e.habitMissed={},a.forEach(i=>{Wt(t,i.id)<=0&&(e.habitMissed[i.id]=!0)}),e.tasks.forEach(i=>{i.missed=!i.done})}function pt(t){const e=l.days[t];return!e||e.lockOverride==="unlocked"?!1:e.lockOverride==="locked"||e.locked===!0?!0:l.settings.autoLock?Date.now()>=qt(t).getTime():!1}function de(t){if(Qt())return pt(t);const e=P(t);return e.lockOverride==="unlocked"?!1:e.lockOverride==="locked"||e.locked?((!Array.isArray(e.lockedHabits)||!e.habitMissed)&&_t(t),!0):l.settings.autoLock&&Date.now()>=qt(t).getTime()?(e.locked=!0,e.lockOverride="locked",e.submittedAt=e.submittedAt||qt(t).toISOString(),_t(t),$(),!0):!1}function P(t){if(!l.days[t]){const e=Vt();if(Qt())return e;l.days[t]=e}return l.days[t]}function ea(t){const e=P(t);if(Pe(t)||Qt())return e;let a=!1;const i=new Set(Array.isArray(e.skippedPins)?e.skippedPins.map(String):[]);return l.pinnedTasks.forEach(s=>{Xt(s.pin,t)&&(i.has(String(s.id))||e.tasks.some(n=>n.sourcePinId===s.id)||(e.tasks.push({id:`ptask-${s.id}-${t}`,title:s.title,points:s.points,description:s.description||"",category:D(s.category),tags:T(s.tags),rating:0,done:!1,missed:!1,sourcePinId:s.id,image:V(s.image)}),a=!0))}),a&&$(),e}function q(t){return!u.isLocked(t)}function ce(t){const e=Y().find(a=>a.label.toLowerCase()===String(t||"").trim().toLowerCase());return e?e.id:"mentally"}function le(t){return!t||typeof t!="object"||Array.isArray(t)?[]:Array.isArray(t.days)?t.days.filter(e=>e&&/^\d{4}-\d{2}-\d{2}$/.test(String(e.date||""))):[]}const u={todayKey:_,exportBackup(){return JSON.stringify({app:"Daily Report",kind:"full-backup",version:1,exportedAt:new Date().toISOString(),data:l},null,2)},backupKind(t){if(!t||typeof t!="object"||Array.isArray(t))return"invalid";const e=t.data&&typeof t.data=="object"&&!Array.isArray(t.data)?t.data:t;return Array.isArray(e.days)?"report-export":Array.isArray(e.categories)||Array.isArray(e.plans)||Array.isArray(e.schedule)?"wrong-app":typeof e!="object"||e===null||e.habits!==void 0&&!Array.isArray(e.habits)||e.days!==void 0&&(typeof e.days!="object"||e.days===null||Array.isArray(e.days))||e.settings!==void 0&&(typeof e.settings!="object"||e.settings===null||Array.isArray(e.settings))||!["habits","pinnedTasks","days","goals","badges","settings"].some(i=>e[i]!==void 0)?"invalid":"ok"},importBackup(t){if(this.backupKind(t)!=="ok")return!1;const e=t.data&&typeof t.data=="object"&&!Array.isArray(t.data)?t.data:t;return l=De(e),H=l.customCategories||[],l.customCategories=H,$(),!0},previewReport(t){const e=le(t);if(!e.length)return{days:0,start:"",end:"",newHabits:0};const a=new Set(l.habits.map(n=>String(n.name||"").trim().toLowerCase())),i=new Set;e.forEach(n=>{(Array.isArray(n.habits)?n.habits:[]).forEach(o=>{const r=String(o&&o.name||"").trim().toLowerCase();r&&!a.has(r)&&i.add(r)})});const s=e.map(n=>String(n.date)).sort();return{days:e.length,start:s[0],end:s[s.length-1],newHabits:i.size}},importReport(t){const e=le(t);if(!e.length)return!1;const a=e.map(r=>String(r.date)).sort(),i=a[a.length-1],s={};l.habits.forEach(r=>{s[String(r.name||"").trim().toLowerCase()]=r});let n=0;const o=Date.now();return e.forEach((r,d)=>{const c=String(r.date);(Array.isArray(r.habits)?r.habits:[]).forEach(m=>{const w=String(m&&m.name||"").trim().slice(0,80);if(!w)return;const y=w.toLowerCase();if(!s[y]){const v={id:`h${o}_${n}`,name:w,description:String(m&&m.description||"").slice(0,240),points:Number(m&&m.points||10)||10,icon:"star",category:ce(m&&m.category),consciousPoints:F(m&&m.consciousPoints),tags:T(m&&m.tags),pin:{mode:"until",until:i,weekdays:[],monthDays:[],yearDays:[],customDates:[],exceptDates:[]}};l.habits.push(v),s[y]=v,n+=1}});const p=Vt();p.note=String(r.note||""),p.locked=!0,p.lockOverride="locked",p.submittedAt=null;const S=[];(Array.isArray(r.habits)?r.habits:[]).forEach(m=>{const w=s[String(m&&m.name||"").trim().toLowerCase()];if(!w)return;const y=Math.max(0,Math.min(5,Number(m&&m.rating||0)));p.habitRatings[w.id]=y,p.habits[w.id]=y>0,y<=0&&(p.habitMissed[w.id]=!0),S.push({id:w.id,name:w.name,description:w.description,points:w.points,icon:w.icon||"star",category:D(w.category),consciousPoints:F(w.consciousPoints),tags:T(w.tags),pin:U(w.pin)})}),p.lockedHabits=S,p.tasks=(Array.isArray(r.tasks)?r.tasks:[]).map((m,w)=>({id:`t${o}_${d}_${w}`,title:String(m&&m.title||"Task").slice(0,120),points:Number(m&&m.points||5)||5,description:String(m&&m.description||""),category:ce(m&&m.category),tags:T(m&&m.tags),rating:Math.max(0,Math.min(5,Number(m&&m.rating||0))),done:!!(m&&m.done),missed:!(m&&m.done),image:"",forwardedFrom:/^\d{4}-\d{2}-\d{2}$/.test(String(m&&m.forwardedFrom||""))?String(m.forwardedFrom):"",forwardedHabitId:"",forwardedTo:Array.isArray(m&&m.forwardedTo)?m.forwardedTo.filter(y=>/^\d{4}-\d{2}-\d{2}$/.test(String(y))).map(String).slice(0,50):[]})),l.days[c]=p}),$(),{days:e.length,habits:n}},getSettings(){return l.settings},setLockTime(t){l.settings.lockTime=t||"21:00",$()},setAutoLock(t){l.settings.autoLock=!!t,$()},setShowConscious(t){l.settings.showConscious=!!t,$()},consciousEnabled(){return l.settings.showConscious!==!1},setHabitSort(t){l.settings.habitSort=["default","points","category","tags"].includes(t)?t:"default",$()},setTaskSort(t){l.settings.taskSort=["default","points","category","tags"].includes(t)?t:"default",$()},getWeekStart(){return Rt(l.settings.weekStart)},setWeekStart(t){l.settings.weekStart=Rt(t),$()},getTheme(){return l.settings.theme==="light"?"light":"dark"},setTheme(t){l.settings.theme=t==="light"?"light":"dark",$()},getHabits(t,e){if(t&&Pe(t)){const n=l.days[t];if(n&&Array.isArray(n.lockedHabits)){const o=e||l.settings.habitSort||"default",r=[...n.lockedHabits];return o==="default"?r:Nt(r,o)}}const a=e||l.settings.habitSort||"default",s=Ee(t).sort((n,o)=>+!!o.pin-+!!n.pin);return a==="default"?s:Nt(s,a)},getTasks(t,e){const a=this.getDay(t),i=e||l.settings.taskSort||"default";return i==="default"?a.tasks:Nt(a.tasks,i)},getAllHabits(){return l.habits},getPinnedTasks(){return l.pinnedTasks},getDay(t){return de(t),ea(t)},isLocked(t){return de(t)},submitDay(t){const e=P(t);e.locked=!0,e.lockOverride="locked",e.submittedAt=new Date().toISOString(),_t(t),$(),this.checkGoals(t)},unlockDay(t){const e=P(t);e.locked=!1,e.lockOverride="unlocked",e.habitMissed={},e.lockedHabits=null,e.tasks.forEach(a=>{a.missed=!1}),$()},isHabitMissed(t,e){const a=l.days[t];return!a||!(a.locked||a.lockOverride==="locked")?!1:a.habitMissed&&a.habitMissed[e]?!0:Wt(t,e)<=0},isTaskMissed(t,e){const a=l.days[t];if(!a)return!1;const i=(a.tasks||[]).find(s=>s.id===e);return i?i.missed===!0?!0:i.missed===!1?!1:!!(a.locked||a.lockOverride==="locked")&&!i.done:!1},missedCounts(t){return Q(()=>{const e=this.getDay(t),a=this.getHabits(t),i=pt(t);return{habits:a.filter(s=>e.habitMissed&&e.habitMissed[s.id]?!0:i&&Wt(t,s.id)<=0).length,tasks:e.tasks.filter(s=>s.done?!1:s.missed===!0?!0:s.missed===!1?!1:i).length}})},lockDay(t){this.submitDay(t)},lockDays(t){let e=0;return t.forEach(a=>{this.isLocked(a)||(this.submitDay(a),e+=1)}),e},unlockDays(t){let e=0;return t.forEach(a=>{this.isLocked(a)&&(this.unlockDay(a),e+=1)}),e},lockedReports(){return Q(()=>Object.keys(l.days).sort().reverse().filter(t=>pt(t)).map(t=>({date:t,submittedAt:l.days[t].submittedAt,...this.scoreFor(t)})))},habitRating(t,e){const a=l.days[t];return a?a.habitRatings&&a.habitRatings[e]!=null?Number(a.habitRatings[e])||0:a.habits&&a.habits[e]?5:0:0},setHabitRating(t,e,a){if(!q(t))return;const i=P(t),s=Math.max(0,Math.min(5,Number(a)||0));i.habitRatings[e]=s,i.habits[e]=s>0,$(),this.checkGoals(t)},toggleHabit(t,e){if(!q(t))return;const a=this.habitRating(t,e)>0?0:5;this.setHabitRating(t,e,a)},addTask(t,e,a,i={}){if(!q(t))return;P(t).tasks.push({id:tt("t"),title:e.trim(),points:Number(a)||5,description:String(i.description||"").trim(),category:D(i.category),tags:T(i.tags),rating:Math.max(0,Math.min(5,Number(i.rating)||0)),done:!1,missed:!1,forwardedFrom:/^\d{4}-\d{2}-\d{2}$/.test(String(i.forwardedFrom||""))?String(i.forwardedFrom):"",forwardedHabitId:String(i.forwardedHabitId||""),forwardedTo:[],image:V(i.image)}),$(),this.checkGoals(t)},setTaskRating(t,e,a){if(!q(t))return;const s=P(t).tasks.find(o=>o.id===e);if(!s)return;const n=Math.max(0,Math.min(5,Number(a)||0));s.rating=n,$()},toggleTask(t,e){if(!q(t))return;const i=P(t).tasks.find(s=>s.id===e);i&&(i.done=!i.done,$(),this.checkGoals(t))},removeTask(t,e){if(!q(t))return;const a=P(t),i=a.tasks.find(n=>n.id===e);a.tasks=a.tasks.filter(n=>n.id!==e);const s=i&&i.sourcePinId?String(i.sourcePinId):"";s&&(Array.isArray(a.skippedPins)||(a.skippedPins=[]),a.skippedPins.includes(s)||a.skippedPins.push(s),a.skippedPins.length>100&&a.skippedPins.splice(0,a.skippedPins.length-100)),$()},forwardTask(t,e,a){if(!/^\d{4}-\d{2}-\d{2}$/.test(String(a||"")))return{ok:!1,reason:"Pick a valid date"};if(t===a)return{ok:!1,reason:"Already on that day"};if(!q(t))return{ok:!1,reason:"Source day is locked"};if(this.isLocked(a))return{ok:!1,reason:"Target day is locked"};const s=P(t).tasks.find(r=>r.id===e);if(!s)return{ok:!1,reason:"Task not found"};P(a).tasks.push({id:tt("t"),title:s.title,points:Number(s.points)||5,description:String(s.description||""),category:D(s.category),tags:T(s.tags),rating:0,done:!1,missed:!1,forwardedFrom:t,forwardedHabitId:String(s.forwardedHabitId||""),forwardedTo:[],image:V(s.image)});const o=Array.isArray(s.forwardedTo)?s.forwardedTo:[];return o.includes(a)||o.push(a),s.forwardedTo=o.slice(0,50),$(),this.checkGoals(a),{ok:!0}},forwardHabit(t,e,a){if(!/^\d{4}-\d{2}-\d{2}$/.test(String(a||"")))return{ok:!1,reason:"Pick a valid date"};if(t===a)return{ok:!1,reason:"Already on that day"};if(!q(t))return{ok:!1,reason:"Source day is locked"};if(this.isLocked(a))return{ok:!1,reason:"Target day is locked"};const i=l.habits.find(r=>r.id===e);if(!i)return{ok:!1,reason:"Habit not found"};P(a).tasks.push({id:tt("t"),title:i.name,points:Number(i.points)||10,description:String(i.description||""),category:D(i.category),tags:T(i.tags),rating:0,done:!1,missed:!1,forwardedFrom:t,forwardedHabitId:e,forwardedTo:[]});const n=P(t);(!n.habitForwarded||typeof n.habitForwarded!="object")&&(n.habitForwarded={});const o=Array.isArray(n.habitForwarded[e])?n.habitForwarded[e]:[];return o.includes(a)||o.push(a),n.habitForwarded[e]=o.slice(0,50),$(),this.checkGoals(a),{ok:!0}},habitForwardedTo(t,e){const a=l.days[t];if(!a||!a.habitForwarded)return[];const i=a.habitForwarded[e];return Array.isArray(i)?i:[]},setNote(t,e){q(t)&&(P(t).note=e,$())},addHabit(t,e,a={}){l.habits.push({id:tt("h"),name:t.trim(),description:String(a.description||"").trim().slice(0,240),points:Number(e)||10,icon:"star",category:D(a.category||"physically"),consciousPoints:F(a.consciousPoints),tags:T(a.tags),pin:U({mode:"forever"})}),$()},updateHabit(t,e){const a=l.habits.find(i=>i.id===t);a&&(e.name!=null&&(a.name=String(e.name).trim()||a.name),e.description!=null&&(a.description=String(e.description).trim().slice(0,240)),e.points!=null&&(a.points=Number(e.points)||a.points),e.category!=null&&(a.category=D(e.category)),e.consciousPoints!=null&&(a.consciousPoints=F(e.consciousPoints)),e.tags!=null&&(a.tags=T(e.tags)),$())},updateTask(t,e,a){if(!q(t))return;const s=P(t).tasks.find(n=>n.id===e);if(s){if(a.title!=null&&(s.title=String(a.title).trim()||s.title),a.points!=null&&(s.points=Number(a.points)||s.points),a.description!=null&&(s.description=String(a.description).trim()),a.category!=null&&(s.category=D(a.category)),a.tags!=null&&(s.tags=T(a.tags)),a.image!==void 0&&(s.image=V(a.image)),a.rating!=null&&(s.rating=Math.max(0,Math.min(5,Number(a.rating)||0))),s.sourcePinId){const n=l.pinnedTasks.find(o=>o.id===s.sourcePinId);n&&(n.title=s.title,n.points=s.points,n.description=s.description,n.category=s.category,a.tags!=null&&(n.tags=T(a.tags)),a.image!==void 0&&(n.image=V(a.image)))}$()}},habitStreak(t,e){const a=Ke(t);if(!a)return 0;let i=e,s=0;this.habitRating(i,t)===0&&(i=ct(i));let n=0;for(;s<400;){if(s+=1,!Xt(a.pin,i)){i=ct(i);continue}if(this.habitRating(i,t)>0){n+=1,i=ct(i);continue}break}return n},categoryBreakdown(t){const e=this.getDay(t),a=this.getHabits(t);return Y().map(i=>{const s=a.filter(v=>D(v.category)===i.id),n=e.tasks.filter(v=>D(v.category)===i.id),o=s.reduce((v,A)=>{const Lt=this.habitRating(t,A.id);return v+Math.round(A.points*Lt/5)},0),r=l.settings.showConscious!==!1,d=r?s.reduce((v,A)=>v+(this.habitRating(t,A.id)>0?F(A.consciousPoints):0),0):0,c=s.reduce((v,A)=>v+A.points,0),p=r?s.reduce((v,A)=>v+F(A.consciousPoints),0):0,S=n.reduce((v,A)=>v+(A.done?A.points:0),0),m=n.reduce((v,A)=>v+A.points,0),w=s.map(v=>this.habitRating(t,v.id)),y=w.length?Math.round(w.reduce((v,A)=>v+A,0)/w.length*10)/10:0;return{...i,habits:s,tasks:n,earned:o+d+S,max:c+p+m,habitAvg:y,consciousEarned:d,consciousMax:p,completed:s.filter(v=>this.habitRating(t,v.id)>0).length+n.filter(v=>v.done).length,total:s.length+n.length}})},removeHabit(t){const e=l.habits.find(a=>a.id===t);e&&ta(e),l.habits=l.habits.filter(a=>a.id!==t),$()},getArchivedHabits(){return(l.archivedHabits||[]).map(t=>({...t}))},restoreHabit(t){const e=(l.archivedHabits||[]).findIndex(s=>s.id===t);if(e<0)return{ok:!1,reason:"That habit is no longer archived"};const a=l.archivedHabits[e];if(l.habits.some(s=>s.id===a.id))return l.archivedHabits.splice(e,1),$(),{ok:!0};const i={...a,description:String(a.description||"").slice(0,240),category:D(a.category),consciousPoints:F(a.consciousPoints),tags:T(a.tags),pin:U(a.pin),archivedAt:null};return l.habits.push(i),l.archivedHabits.splice(e,1),$(),{ok:!0,habit:{...i}}},pinHabit(t,e){const a=l.habits.find(i=>i.id===t);a&&(a.pin=U(e),$())},unpinHabit(t){const e=l.habits.find(a=>a.id===t);e&&(e.pin=null,$())},pinTask(t,e,a){if(!q(t))return;const s=P(t).tasks.find(r=>r.id===e);if(!s)return;const n=s.sourcePinId?l.pinnedTasks.find(r=>r.id===s.sourcePinId):null;if(n){n.pin=U(a),$();return}const o=tt("p");l.pinnedTasks.push({id:o,title:s.title,points:s.points,description:s.description||"",category:D(s.category),tags:T(s.tags),pin:U(a),image:V(s.image)}),s.sourcePinId=o,$()},unpinTaskTemplate(t){l.pinnedTasks=l.pinnedTasks.filter(a=>a.id!==t);const e=String(t);Object.values(l.days).forEach(a=>{!Array.isArray(a.skippedPins)||!a.skippedPins.includes(e)||(a.skippedPins=a.skippedPins.filter(i=>i!==e))}),$()},updatePinnedTask(t,e){const a=l.pinnedTasks.find(i=>i.id===t);a&&(a.pin=U(e),$())},findHabit(t){return l.habits.find(e=>e.id===t)||null},findTask(t,e){return P(t).tasks.find(a=>a.id===e)||null},findPinnedTask(t){return l.pinnedTasks.find(e=>e.id===t)||null},getInstalledAt(){return String(l.installedAt||new Date().toISOString())},getProfile(){const t=gt(l.profile);return l.profile=t,JSON.parse(JSON.stringify(t))},setProfileField(t,e){return!Object.prototype.hasOwnProperty.call(Ft,t)||l.profile.locked?!1:((!l.profile||typeof l.profile!="object")&&(l.profile=gt({})),l.profile[t]=String(e||"").slice(0,Ft[t]),$(),!0)},setProfileLocked(t){(!l.profile||typeof l.profile!="object")&&(l.profile=gt({})),l.profile.locked=!!t,$()},isProfileLocked(){return!!(l.profile&&l.profile.locked)},profileGoalDurations(){return JSON.parse(JSON.stringify(ut))},addWhoAmI(t){if(l.profile.locked)return{ok:!1,reason:"Profile is locked"};const e=String(t||"").trim().slice(0,120);return e?(l.profile.whoAmI||[]).length>=50?{ok:!1,reason:"List is full (50)"}:(l.profile.whoAmI.push({id:B("w"),text:e}),$(),{ok:!0}):{ok:!1,reason:"Type something first"}},updateWhoAmI(t,e){if(l.profile.locked)return;const a=(l.profile.whoAmI||[]).find(s=>s.id===t);if(!a)return;const i=String(e||"").trim().slice(0,120);i?a.text=i:l.profile.whoAmI=l.profile.whoAmI.filter(s=>s.id!==t),$()},moveWhoAmI(t,e){if(l.profile.locked)return;const a=l.profile.whoAmI||[],i=a.findIndex(o=>o.id===t),s=i+e;if(i<0||s<0||s>=a.length)return;const[n]=a.splice(i,1);a.splice(s,0,n),$()},removeWhoAmI(t){l.profile.locked||(l.profile.whoAmI=(l.profile.whoAmI||[]).filter(e=>e.id!==t),$())},addLifeArea(t){if(l.profile.locked)return{ok:!1,reason:"Profile is locked"};const e=String(t||"").trim().slice(0,60);if(!e)return{ok:!1,reason:"Name the life area"};if((l.profile.lifeAreas||[]).length>=20)return{ok:!1,reason:"Max 20 areas"};const a={id:B("a"),title:e,description:""};return l.profile.lifeAreas.push(a),$(),{ok:!0,id:a.id}},updateLifeArea(t,e={}){if(l.profile.locked)return;const a=(l.profile.lifeAreas||[]).find(i=>i.id===t);a&&(e.title!=null&&(a.title=String(e.title).trim().slice(0,60)||a.title),e.description!=null&&(a.description=String(e.description).slice(0,1e3)),$())},removeLifeArea(t){l.profile.locked||(l.profile.lifeAreas=(l.profile.lifeAreas||[]).filter(e=>e.id!==t),$())},addProfileGoal(t,e,a){if(l.profile.locked)return{ok:!1,reason:"Profile is locked"};const i=String(t||"").trim().slice(0,200);if(!i)return{ok:!1,reason:"Write your goal first"};const s=Ot.includes(e)?e:"short",n=ut[s],o=n.includes(a)?a:n[0];if((l.profile.pGoals||[]).length>=100)return{ok:!1,reason:"Too many goals (100)"};const r={id:B("g"),text:i,term:s,duration:o,createdAt:new Date().toISOString()};return l.profile.pGoals.push(r),$(),{ok:!0,id:r.id}},updateProfileGoal(t,e={}){if(l.profile.locked)return;const a=(l.profile.pGoals||[]).find(i=>i.id===t);if(a){if(e.text!=null&&(a.text=String(e.text).trim().slice(0,200)||a.text),e.term!=null&&Ot.includes(e.term)){a.term=e.term;const i=ut[a.term];i.includes(a.duration)||(a.duration=i[0])}e.duration!=null&&ut[a.term].includes(e.duration)&&(a.duration=e.duration),$()}},removeProfileGoal(t){l.profile.locked||(l.profile.pGoals=(l.profile.pGoals||[]).filter(e=>e.id!==t),$())},addQuote(t,e){if(l.profile.locked)return{ok:!1,reason:"Profile is locked"};const a=String(t||"").trim().slice(0,500);if(!a)return{ok:!1,reason:"Write the quote first"};if((l.profile.quotes||[]).length>=200)return{ok:!1,reason:"Too many quotes (200)"};const i={id:B("q"),text:a,author:String(e||"").trim().slice(0,80),fav:!1,createdAt:new Date().toISOString()};return l.profile.quotes.push(i),$(),{ok:!0,id:i.id}},updateQuote(t,e={}){if(l.profile.locked)return;const a=(l.profile.quotes||[]).find(i=>i.id===t);a&&(e.text!=null&&(a.text=String(e.text).trim().slice(0,500)||a.text),e.author!=null&&(a.author=String(e.author).trim().slice(0,80)),$())},toggleQuoteFav(t){if(l.profile.locked)return;const e=(l.profile.quotes||[]).find(a=>a.id===t);e&&(e.fav=!e.fav,$())},removeQuote(t){l.profile.locked||(l.profile.quotes=(l.profile.quotes||[]).filter(e=>e.id!==t),$())},getCategories(){return Y().map(t=>({...t}))},getCustomCategories(){return H.map(t=>({...t}))},addCategory(t){const e=String(t||"").trim().slice(0,30);if(!e)return{ok:!1,reason:"Type a category name"};if(Y().some(s=>s.label.toLowerCase()===e.toLowerCase()))return{ok:!1,reason:"That category already exists"};if(H.length>=20)return{ok:!1,reason:"Too many categories (max 20 custom)"};let i=`c${Date.now().toString(36)}`;return Y().some(s=>s.id===i)&&(i=`c${Date.now().toString(36)}${Math.floor(Math.random()*99)}`),H.push({id:i,label:e}),$(),{ok:!0,id:i}},renameCategory(t,e){const a=H.find(n=>n.id===t);if(!a)return{ok:!1,reason:"Built-in categories can’t be renamed"};const i=String(e||"").trim().slice(0,30);return i?Y().some(n=>n.id!==t&&n.label.toLowerCase()===i.toLowerCase())?{ok:!1,reason:"That category already exists"}:(a.label=i,$(),{ok:!0}):{ok:!1,reason:"Type a category name"}},updateCategory(t,e={}){const a=H.find(i=>i.id===t);if(!a){const i=Pt.find(s=>s.id===t);return i?(e.color!==void 0&&(i.color=String(e.color).slice(0,20)),e.goals!==void 0&&(i.goals=String(e.goals).slice(0,1e3)),$(),{ok:!0}):{ok:!1,reason:"Category not found"}}return e.color!==void 0&&(a.color=String(e.color).slice(0,20)),e.goals!==void 0&&(a.goals=String(e.goals).slice(0,1e3)),$(),{ok:!0}},deleteCategory(t){const e=H.findIndex(a=>a.id===t);return e<0?{ok:!1,reason:"Built-in categories can’t be deleted"}:(H.splice(e,1),l.habits.forEach(a=>{a.category===t&&(a.category="mentally")}),(l.archivedHabits||[]).forEach(a=>{a.category===t&&(a.category="mentally")}),l.pinnedTasks.forEach(a=>{a.category===t&&(a.category="mentally")}),Object.values(l.days).forEach(a=>{(a.tasks||[]).forEach(i=>{i.category===t&&(i.category="mentally")})}),$(),{ok:!0})},getAllTags(){const t=new Map,e=a=>{T(a).forEach(i=>{t.set(i,(t.get(i)||0)+1)})};return l.habits.forEach(a=>e(a.tags)),(l.archivedHabits||[]).forEach(a=>e(a.tags)),l.pinnedTasks.forEach(a=>e(a.tags)),Object.values(l.days).forEach(a=>{(a.tasks||[]).forEach(i=>e(i.tags))}),[...t.entries()].map(([a,i])=>({tag:a,count:i})).sort((a,i)=>i.count-a.count||a.tag.localeCompare(i.tag))},renameTag(t,e){const a=String(t||"").trim(),i=T(e)[0]||"";if(!a||!i)return{ok:!1,reason:"Type a tag name"};if(a.toLowerCase()===i.toLowerCase()){const o=r=>T((r||[]).map(d=>String(d).toLowerCase()===a.toLowerCase()?i:d));return l.habits.forEach(r=>{r.tags=o(r.tags)}),(l.archivedHabits||[]).forEach(r=>{r.tags=o(r.tags)}),l.pinnedTasks.forEach(r=>{r.tags=o(r.tags)}),Object.values(l.days).forEach(r=>{(r.tasks||[]).forEach(d=>{d.tags=o(d.tags)})}),$(),{ok:!0}}const s=this.getAllTags().some(o=>o.tag.toLowerCase()===i.toLowerCase()),n=o=>{const r=(o||[]).map(d=>String(d).toLowerCase()===a.toLowerCase()?i:d);return T(r)};return l.habits.forEach(o=>{o.tags=n(o.tags)}),(l.archivedHabits||[]).forEach(o=>{o.tags=n(o.tags)}),l.pinnedTasks.forEach(o=>{o.tags=n(o.tags)}),Object.values(l.days).forEach(o=>{(o.tasks||[]).forEach(r=>{r.tags=n(r.tags)})}),$(),{ok:!0,merged:s}},deleteTag(t){const e=String(t||"").trim().toLowerCase();if(!e)return{ok:!1,reason:"Pick a tag first"};const a=i=>(i||[]).filter(s=>String(s).toLowerCase()!==e);return l.habits.forEach(i=>{i.tags=a(i.tags)}),(l.archivedHabits||[]).forEach(i=>{i.tags=a(i.tags)}),l.pinnedTasks.forEach(i=>{i.tags=a(i.tags)}),Object.values(l.days).forEach(i=>{(i.tasks||[]).forEach(s=>{s.tags=a(s.tags)})}),$(),{ok:!0}},addTagToHabit(t,e){const a=l.habits.find(s=>s.id===t);if(!a)return{ok:!1,reason:"Pick a habit first"};const i=T(e)[0]||"";return i?(a.tags=T([...a.tags||[],i]),$(),{ok:!0}):{ok:!1,reason:"Type a tag name"}},categoryChart(t,e){const a=["week","month","year"].includes(t)?t:"week",i=`${a}|${e}|${Ce}`;return Mt.key===i?Mt.value:Q(()=>this._buildCategoryChart(a,e,i))},_buildCategoryChart(t,e,a){const i=Y(),s=[];if(t==="year"){const p=String(e).slice(0,4);for(let S=0;S<12;S++){const m=String(S+1).padStart(2,"0"),w=new Date(Number(p),S+1,0).getDate();s.push({label:new Date(Number(p),S,1).toLocaleDateString(void 0,{month:"short"}),title:new Date(Number(p),S,1).toLocaleDateString(void 0,{month:"long",year:"numeric"}),keys:this.rangeKeys(`${p}-${m}-01`,`${p}-${m}-${String(w).padStart(2,"0")}`)})}}else{const[p,S]=this.resolveRange(t,e);this.rangeKeys(p,S).forEach(m=>{const w=new Date(`${m}T00:00:00`);s.push({label:t==="week"?w.toLocaleDateString(void 0,{weekday:"narrow"}):String(w.getDate()),title:m,keys:[m]})})}const n={},o={};i.forEach(p=>{n[p.id]=s.map(()=>0),o[p.id]=0}),s.forEach((p,S)=>{p.keys.forEach(m=>{this.categoryBreakdown(m).forEach(w=>{w.id in n||(n[w.id]=s.map(()=>0),o[w.id]=0),n[w.id][S]+=w.earned||0,o[w.id]+=w.earned||0})})});const r=s.map((p,S)=>i.reduce((m,w)=>m+(n[w.id]?n[w.id][S]:0),0)),d=Math.max(1,...r),c={kind:t,labels:s.map(p=>p.label),titles:s.map(p=>p.title),cats:i.map(p=>({...p})),perCat:n,totals:o,max:d,grandTotal:r.reduce((p,S)=>p+S,0)};return Mt={key:a,value:c},c},getGoals(){return l.goals},getBadges(){return[...l.badges].sort((t,e)=>{const a=se(e.tier)-se(t.tier);return a!==0?a:String(e.earnedAt).localeCompare(String(t.earnedAt))})},topBadges(t=3){return this.getBadges().slice(0,t)},addGoal(t={}){const e=Bt({...t,id:tt("g")});return l.goals.push(e),$(),this.checkGoals(_()),e},updateGoal(t,e={}){const a=l.goals.find(s=>s.id===t);if(!a)return;const i=Bt({...a,...e,id:t});Object.assign(a,i),$(),this.checkGoals(_())},removeGoal(t){l.goals=l.goals.filter(e=>e.id!==t),$()},removeBadge(t){l.badges=l.badges.filter(e=>e.id!==t),$()},perfectDaysCount(){return Q(()=>Object.keys(l.days).filter(t=>{const e=this.scoreFor(t);return e.max>0&&e.percent===100}).length)},taskStreak(t,e){let a=e,i=0;(o=>{const r=l.days[o];return!r||!Array.isArray(r.tasks)?!1:r.tasks.some(d=>d.sourcePinId===t&&d.done)})(a)||(a=ct(a));let n=0;for(;i<400;){i+=1;const o=l.days[a];if(!o||!Array.isArray(o.tasks))break;if(o.tasks.some(r=>r.sourcePinId===t&&r.done)){n+=1,a=ct(a);continue}break}return n},goalProgress(t,e){const a=e||_();if(t.kind==="habit-streak"){const s=this.habitStreak(t.targetId,a);return{current:s,target:t.targetDays,done:s>=t.targetDays}}if(t.kind==="task-streak"){const s=this.taskStreak(t.targetId,a);return{current:s,target:t.targetDays,done:s>=t.targetDays}}const i=this.perfectDaysCount();return{current:i,target:t.targetDays,done:i>=t.targetDays}},checkGoals(t){const e=t||_();let a=[];return l.goals.forEach(i=>{if(l.badges.some(n=>n.goalId===i.id))return;if(this.goalProgress(i,e).done){const n={id:tt("b"),goalId:i.id,title:i.title,tier:i.tier,rewardTitle:i.rewardTitle,earnedAt:new Date().toISOString()};l.badges.push(n),a.push(n)}}),a.length&&$(),a},scoreFor(t){return Q(()=>this._scoreFor(t))},_scoreFor(t){const e=this.getDay(t),a=this.getHabits(t),i=this.isLocked(t),s=l.settings.showConscious!==!1,n=a.reduce((v,A)=>{const Lt=this.habitRating(t,A.id);return v+Math.round(A.points*Lt/5)},0),o=s?a.reduce((v,A)=>v+(this.habitRating(t,A.id)>0?F(A.consciousPoints):0),0):0,r=e.tasks.reduce((v,A)=>v+(A.done?A.points:0),0),d=a.reduce((v,A)=>v+A.points,0),c=s?a.reduce((v,A)=>v+F(A.consciousPoints),0):0,p=e.tasks.reduce((v,A)=>v+A.points,0),S=n+o+r,m=d+c+p,w=a.filter(v=>e.habitMissed&&e.habitMissed[v.id]?!0:i&&this.habitRating(t,v.id)<=0).length,y=e.tasks.filter(v=>v.done?!1:v.missed===!0?!0:v.missed===!1?!1:i).length;return{earned:S,max:m,habitScore:n,consciousScore:o,maxConscious:c,taskScore:r,completedHabits:a.filter(v=>this.habitRating(t,v.id)>0).length,habitAvg:a.length?Math.round(a.reduce((v,A)=>v+this.habitRating(t,A.id),0)/a.length*10)/10:0,totalHabits:a.length,completedTasks:e.tasks.filter(v=>v.done).length,totalTasks:e.tasks.length,missedHabits:w,missedTasks:y,percent:m?Math.round(S/m*100):0,locked:i,submittedAt:e.submittedAt}},monthKeys(t){const e=String(t).slice(0,7);return Object.keys(l.days).filter(a=>a.startsWith(e)).sort()},rangeKeys(t,e){const a=[],i=new Date(`${t}T00:00:00`),s=new Date(`${e}T00:00:00`);let n=0;for(;i<=s&&n<732;)n+=1,a.push(_(i)),i.setDate(i.getDate()+1);return a},resolveRange(t,e){if(t==="day")return[e,e];if(t==="week"){const i=new Date(`${e}T00:00:00`),s=new Date(i);s.setDate(i.getDate()-(i.getDay()-this.getWeekStart()+7)%7);const n=new Date(s);return n.setDate(s.getDate()+6),[_(s),_(n)]}if(t==="month"){const[i,s]=e.split("-").map(Number),n=`${i}-${String(s).padStart(2,"0")}-01`,o=new Date(i,s,0).getDate(),r=`${i}-${String(s).padStart(2,"0")}-${String(o).padStart(2,"0")}`;return[n,r]}if(t==="year"){const i=e.slice(0,4);return[`${i}-01-01`,`${i}-12-31`]}const a=Object.keys(l.days).sort();return a.length?[a[0],a[a.length-1]>e?a[a.length-1]:e]:[e,e]},exportRows(t,e){return Q(()=>this._exportRows(t,e))},_exportRows(t,e){return this.rangeKeys(t,e).map(a=>{const i=this.getDay(a),s=this.getHabits(a),n=this.scoreFor(a),o=this.isLocked(a),r=(c,p)=>p>0?"done":o?"missed":"pending",d=c=>c.done?"done":o?"missed":"pending";return{date:a,earned:n.earned,max:n.max,percent:n.percent,habitScore:n.habitScore,consciousScore:n.consciousScore||0,taskScore:n.taskScore,locked:o,missedHabits:n.missedHabits||0,missedTasks:n.missedTasks||0,note:i.note||"",habits:s.map(c=>{const p=this.habitRating(a,c.id);return{name:c.name,description:String(c.description||""),category:it(D(c.category)),tags:T(c.tags),points:c.points,consciousPoints:this.consciousEnabled()?F(c.consciousPoints):0,rating:p,earned:Math.round(c.points*p/5)+(p>0&&this.consciousEnabled()?F(c.consciousPoints):0),status:r(c.id,p)}}),tasks:i.tasks.map(c=>({title:c.title,category:it(D(c.category)),tags:T(c.tags),points:c.points,rating:Math.max(0,Math.min(5,Number(c.rating)||0)),done:!!c.done,earned:c.done?c.points:0,status:c.forwardedFrom?`forwarded from ${c.forwardedFrom}`:d(c),forwardedFrom:c.forwardedFrom||"",forwardedTo:Array.isArray(c.forwardedTo)?c.forwardedTo:[],description:c.description||"",hasImage:!!c.image}))}})},history(t=14){return Q(()=>Object.keys(l.days).sort().reverse().slice(0,t).map(a=>({date:a,...this.scoreFor(a),note:l.days[a].note,locked:pt(a),submittedAt:l.days[a].submittedAt})))},week(t){return Q(()=>{const e=new Date(t);return e.setDate(e.getDate()-(e.getDay()-this.getWeekStart()+7)%7),e.setHours(0,0,0,0),Array.from({length:7},(a,i)=>{const s=new Date(e);s.setDate(e.getDate()+i);const n=_(s),o=l.days[n];return{date:n,label:s.toLocaleDateString(void 0,{weekday:"short"}),dayOfMonth:s.getDate(),hasRecord:!!o,note:String(o&&o.note||""),locked:pt(n),...this.scoreFor(n)}})})}};function Le(t){return t>=90?"Excellent":t>=75?"Great day":t>=50?"Keep going":t>0?"Started":"No score yet"}function W(t){return new Date(`${t}T00:00:00`).toLocaleDateString(void 0,{weekday:"long",month:"short",day:"numeric"})}function aa(t){return t?new Date(t).toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"}):""}function wt(t){return t>=5?"Excellent":t>=4?"Great":t>=3?"Good":t>=2?"Fair":t>=1?"Low":"Not rated"}const Ht=document.getElementById("app"),Ne="daily-report-2026-09-30T19-56-59-muoj0tzx",ia=`v1.1 — Auto-update · Offline · Backup (${Ne.slice(-8)})`;let f=u.todayKey(),L="today",x=null,h=null,K=!1,St=!1,ot=null,X=!1,Ut=!1,zt=null,Z="Idle.",G="week",xt=null,I="month",At=null,N=[],J=0,E=null,C="boot",st=null;const et=new Set;let ht=!1,kt="all",z="short",rt="1 Week";window.addEventListener("beforeinstallprompt",t=>{t.preventDefault(),ot=t});window.addEventListener("appinstalled",()=>{ot=null,b("Daily Report installed"),k()});const sa=[["default","Default"],["points","Points"],["category","Category"],["tags","Tags"]];function ue(t){const e=new Date(`${f}T00:00:00`);e.setDate(e.getDate()+t),f=u.todayKey(e)}let It=u.todayKey();function Zt(){const t=u.todayKey();if(t===It)return!1;const e=It;return It=t,f===e&&(f=t),xt=null,At=null,N=[],J=0,!0}function R(t){return{home:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1z"/></svg>',profile:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-6 8-6s8 2 8 6"/></svg>',history:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 8v5l3 2"/><circle cx="12" cy="12" r="9"/></svg>',settings:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H8a1.7 1.7 0 0 0 1-1.5V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V8c.3.7.9 1.2 1.6 1.3H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1.7z"/></svg>',pin:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 4h6l-1 7 3 3v2H7v-2l3-3z" fill="currentColor" stroke="none"/><path d="M12 16v5"/></svg>',forward:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',undo:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9h11a5 5 0 0 1 0 10H8"/><path d="M8 5 4 9l4 4"/></svg>',habit:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7h16M4 12h10M4 17h13"/></svg>'}[t]}function Me(t,e,a){return`
    <div class="stars" data-habit="${t}">
      ${[1,2,3,4,5].map(i=>`
            <button type="button" class="star ${i<=e?"on":""}" data-action="rate-habit" data-id="${t}" data-rating="${i}" ${a?"disabled":""} aria-label="${i} star">★</button>
          `).join("")}
    </div>
  `}function He(t,e,a){return`
    <div class="stars stars-small" data-task="${t}">
      ${[1,2,3,4,5].map(i=>`
            <button type="button" class="star small ${i<=e?"on":""}" data-action="rate-task" data-id="${t}" data-rating="${i}" ${a?"disabled":""} aria-label="${i} star">★</button>
          `).join("")}
    </div>
  `}function Ie(t){const e=Number(t)||0;return e?`<span class="conscious-badge">🧠 +${e}</span>`:'<span class="item-meta">No conscious pts</span>'}const na=["mentally","psychology","physically","spiritually","socially"];function bt(t){const a=u.getCategories().find(n=>n.id===t),i=a&&a.color?a.color:j(t);return`<span class="cat-badge ${na.includes(t)?`cat-${t}`:"cat-custom"}" style="background:${i}22;color:${i};box-shadow:inset 0 0 0 1px ${i}55">${g(it(t))}</span>`}function oa(t){const e=String(t||"");if(!e)return"Deleted";const a=new Date(e);return Number.isNaN(a.getTime())?"Deleted":`Deleted ${a.toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})}`}const pe={mentally:"#5b8cff",psychology:"#a06bff",physically:"#22b07d",spiritually:"#e8a51c",socially:"#14b8a6"},me=["#f472b6","#38bdf8","#fb923c","#a3e635","#facc15","#e879f9"];function j(t,e){const i=u.getCategories().find(s=>s.id===t);return i&&i.color?i.color:pe[t]?pe[t]:me[(e??0)%me.length]}function at(t){const e=Array.isArray(t)?t.filter(Boolean):[];return e.length?`<div class="tag-row">${e.map(a=>`<span class="tag-chip">#${g(a)}</span>`).join("")}</div>`:""}function Re(t){return!t||!t.image?"":`<button type="button" class="task-img-thumb" data-action="view-task-image" data-id="${t.id}" aria-label="View attached photo"><img src="${t.image}" alt="Task photo" loading="lazy" /></button>`}function ra(t){const e=String(t||"");if(!e.trim())return"";const a=e.split(`
`),i=/^\s*(?:•|-|[*])\s+(.*)$/,s=/^\s*\d+[.)]\s+(.*)$/;let n="",o=null;const r=()=>{o&&(n+=o==="ul"?"</ul>":"</ol>",o=null)};return a.forEach(d=>{const c=i.exec(d),p=!c&&s.exec(d);c?(o!=="ul"&&(r(),n+='<ul class="note-list">',o="ul"),n+=`<li>${g(c[1])||"&nbsp;"}</li>`):p?(o!=="ol"&&(r(),n+='<ol class="note-list">',o="ol"),n+=`<li>${g(p[1])||"&nbsp;"}</li>`):d.trim()?(r(),n+=`<p class="note-text">${g(d)}</p>`):(r(),n+='<p class="note-text">&nbsp;</p>')}),r(),`<div class="note" style="margin-top:10px">${n}</div>`}function ge(t){const e=document.getElementById("day-note");if(!e||e.disabled)return;const a=e.value||"",i=a.split(`
`),s=a.slice(0,e.selectionStart).split(`
`).length-1,n=a.slice(0,e.selectionEnd).split(`
`).length-1,o=e.selectionStart!==e.selectionEnd,r=o?s:0,d=o?n:i.length-1;if(t==="bullets"){const c=i.slice(r,d+1).every(p=>/^\s*(?:•|-|[*])\s+/.test(p)||!p.trim());for(let p=r;p<=d;p++)i[p].trim()&&(c?i[p]=i[p].replace(/^\s*(?:•|-|[*])\s+/,""):/^\s*(?:•|-|[*])\s+/.test(i[p])||(i[p]=`• ${i[p].replace(/^\s*/,"")}`))}else{const c=i.slice(r,d+1).every(S=>/^\s*\d+[.)]\s+/.test(S)||!S.trim());let p=1;for(let S=r;S<=d;S++){if(!i[S].trim())continue;const m=i[S].replace(/^\s*(?:\d+[.)]|•|-|[*])\s+/,"").replace(/^\s*/,"");i[S]=c?m:`${p}. ${m}`,p+=1}}e.value=i.join(`
`),u.setNote(f,e.value);try{e.focus()}catch{}}function da(t){return new Promise(e=>{if(!t||!String(t.type||"").startsWith("image/"))return e(null);const a=URL.createObjectURL(t),i=new Image,s=()=>{try{URL.revokeObjectURL(a)}catch{}},n=(o,r)=>new Promise(d=>{let c=i.naturalWidth||0,p=i.naturalHeight||0;if(!c||!p)return d(null);const S=Math.min(1,o/Math.max(c,p));c=Math.max(1,Math.round(c*S)),p=Math.max(1,Math.round(p*S));const m=document.createElement("canvas");m.width=c,m.height=p;try{m.getContext("2d").drawImage(i,0,0,c,p),d(m.toDataURL("image/jpeg",r))}catch{d(null)}});i.onload=async()=>{try{let o=await n(900,.72);o&&o.length>vt&&(o=await n(600,.62)),o&&o.length>vt&&(o=await n(400,.55)),s(),e(o&&o.length<=vt?o:null)}catch{s(),e(null)}},i.onerror=()=>{s(),e(null)},i.src=a})}function fe(t,e){return`
    <select class="sort-select" data-sort-kind="${t}" aria-label="Sort ${t}">
      ${sa.map(([a,i])=>`<option value="${a}" ${e===a?"selected":""}>${i}</option>`).join("")}
    </select>
  `}function ca(t){const e=u.getBadges(),a=u.topBadges(3),i=t.max>0&&t.percent===100,s=St?e:a;return`
    <section class="section rewards-section">
      <div class="section-head">
        <h2>Rewards</h2>
        ${e.length>3?`<button class="ghost-btn compact" data-action="toggle-badges">${St?"Show less":`More (${e.length}) ›`}</button>`:""}
      </div>
      ${i?`
        <div class="trophy-card">
          <div class="trophy-cup">🏆</div>
          <div>
            <div class="item-title">Gold Cup — Perfect day!</div>
            <div class="item-meta">100% of points on ${W(f)}</div>
          </div>
        </div>
      `:""}
      ${e.length?`
        <div class="rewards-grid">
          ${s.map(n=>`
            <article class="reward-card tier-${n.tier}">
              <div class="reward-medal">${jt(n.tier)}</div>
              <div>
                <div class="item-title">${g(n.rewardTitle||n.title)}</div>
                <div class="item-meta">${g(n.title)} · ${Te(n.tier)} · ${W((n.earnedAt||"").slice(0,10))}</div>
              </div>
            </article>
          `).join("")}
        </div>
      `:'<div class="empty">No rewards yet. Set a goal in Settings → Goals &amp; Rewards.</div>'}
    </section>
  `}function Tt(t){return`<span class="streak-badge">${t} day streak</span>`}function je(t){return t?`<span class="forward-badge from">↩ Forwarded from ${g(t)}</span>`:""}function Dt(t){const e=Array.isArray(t)?t.filter(Boolean):[];return e.length?`<span class="forward-badge to">↪ Forwarded to ${g(e[e.length-1])}</span>`:""}function la(t){const e=new Date(`${t}T00:00:00`);return e.setDate(e.getDate()+1),u.todayKey(e)}function Yt(){return`<button class="ghost-btn compact ${K?"on":""}" data-action="toggle-edit">${K?"Done":"Edit Mode"}</button>`}function ua(t){return t?'<span class="lock-badge">Locked</span>':'<span class="open-badge">Open</span>'}function pa(){u.checkGoals(f);const t=u.getDay(f),e=u.getSettings(),a=e.showConscious!==!1,i=u.getHabits(f),s=u.getTasks(f),n=u.scoreFor(f),o=Le(n.percent),r=f===u.todayKey(),d=u.isLocked(f);return`
    <div class="topbar">
      <div>
        <p class="kicker">${r?"Today":"Daily report"}</p>
        <h1>${W(f)}</h1>
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
          ${ua(d)}
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
        ${d?`Submitted${t.submittedAt?` at ${aa(t.submittedAt)}`:""}.${(n.missedHabits||0)+(n.missedTasks||0)>0?` ${(n.missedHabits||0)+(n.missedTasks||0)} missed (${n.missedHabits||0} habits, ${n.missedTasks||0} tasks) — unchecked items count as missed.`:" Nothing missed — all done."} Unlock in Settings to edit.`:`Auto-locks at ${e.lockTime}. Submit when the day is done. Unchecked items will count as missed once locked.`}
      </p>
      ${d?'<button class="ghost-btn full" data-action="goto-settings">Unlock in Settings</button>':'<button class="primary-btn full" data-action="submit-day">Submit and lock report</button>'}
      <div class="export-row">
        <span class="muted">Export:</span>
        <button class="ghost-btn compact" data-action="open-export">Excel / JSON / PDF</button>
      </div>
    </section>

    ${ca(n)}

    <section class="section">
      <div class="section-head">
        <h2>Habits</h2>
        <div class="head-actions">
          ${fe("habit",e.habitSort||"default")}
          ${Yt()}
          <span class="points">+${n.habitScore}${a&&n.consciousScore?` +${n.consciousScore}🧠`:""} pts</span>
        </div>
      </div>
      <div class="list">
        ${i.length?i.map(c=>{const p=u.habitRating(f,c.id),S=p>0,m=!S&&d,w=u.habitStreak(c.id,f),y=a&&Number(c.consciousPoints)||0;return`
                    <article class="item-card ${S?"done":""} ${m?"missed":""} ${d?"is-locked":""}" style="border-left:3px solid ${j(c.category)}">
                      <button class="check" data-action="toggle-habit" data-id="${c.id}" ${d?"disabled":""}>✓</button>
                      <div class="item-body">
                        <div class="item-title">${g(c.name)} ${m?'<span class="missed-badge">Missed</span>':""}</div>
                        <div class="item-meta">${bt(c.category)} ${c.pin?ft(c.pin):"Not pinned"} · ${p?`${p}/5 ${wt(p)}`:d?"Missed":"Not rated"}</div>
                        ${c.description?`<p class="item-desc">${g(c.description)}</p>`:""}
                        ${a?`<div class="item-meta">${Tt(w)} ${Ie(y)}</div>`:`<div class="item-meta">${Tt(w)}</div>`}
                        ${Dt(u.habitForwardedTo(f,c.id))}
                        ${at(c.tags)}
                        ${Me(c.id,p,d)}
                      </div>
                      <div class="item-side">
                        <div class="points">+${c.points}${y?` +${y}🧠`:""}</div>
                        <div class="mini-actions">
                          ${K?`<button class="mini-btn on" data-action="open-edit-habit" data-id="${c.id}" ${d?"disabled":""}>Edit</button>`:""}
                          <button class="mini-btn" data-action="open-forward-habit" data-id="${c.id}" ${d?"disabled":""} title="Forward habit to another day">${R("forward")}</button>
                          <button class="mini-btn ${c.pin?"on":""}" data-action="open-pin-habit" data-id="${c.id}" ${d?"disabled":""} title="Pin habit">${R("pin")}</button>
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
          ${fe("task",e.taskSort||"default")}
          ${Yt()}
          <span class="points">+${n.taskScore} pts</span>
        </div>
      </div>
      <div class="list">
        ${s.length?s.map(c=>{const p=!!c.sourcePinId,S=p?u.findPinnedTask(c.sourcePinId):null,m=Math.max(0,Math.min(5,Number(c.rating)||0)),w=!c.done&&d;return`
                    <article class="item-card ${c.done?"done":""} ${w?"missed":""} ${d?"is-locked":""}" style="border-left:3px solid ${j(c.category)}">
                      <button class="check" data-action="toggle-task" data-id="${c.id}" ${d?"disabled":""}>✓</button>
                      <div class="item-body">
                        <div class="item-title">${g(c.title)} ${w?'<span class="missed-badge">Missed</span>':""}</div>
                        <div class="item-meta">${bt(c.category)} ${S?ft(S.pin):"One-time task"} · ${c.done?"Done":d?"Missed":"Pending"} · ${m?`${m}/5 ${wt(m)}`:"No rating"}</div>
                        ${c.description?`<p class="item-desc">${g(c.description)}</p>`:""}
                        ${je(c.forwardedFrom)}
                        ${Dt(c.forwardedTo)}
                        ${at(c.tags)}
                        ${c.image?'<span class="task-img-badge">📷 Photo attached</span>':""}
                        ${Re(c)}
                        ${He(c.id,m,d)}
                      </div>
                      <div class="item-side">
                        <div class="points">+${c.points}</div>
                        <div class="mini-actions">
                          ${K?`<button class="mini-btn on" data-action="open-edit-task" data-id="${c.id}" ${d?"disabled":""}>Edit</button>`:""}
                          <button class="mini-btn" data-action="open-forward-task" data-id="${c.id}" ${d?"disabled":""} title="Forward task to another day">${R("forward")}</button>
                          <button class="mini-btn ${p?"on":""}" data-action="open-pin-task" data-id="${c.id}" ${d?"disabled":""} title="Pin task">${R("pin")}</button>
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
  `}function $t(t){return t==="short"?"#short":t==="medium"?"#medium":"#long"}function ma(){const t=u.getProfile(),e=!!t.locked,a=e?"disabled":"",i=Array.isArray(t.whoAmI)?t.whoAmI:[],s=Array.isArray(t.lifeAreas)?t.lifeAreas:[],n=Array.isArray(t.pGoals)?t.pGoals:[],o=Array.isArray(t.quotes)?t.quotes:[],r=u.profileGoalDurations();r[z].includes(rt)||(rt=r[z][0]);const d=y=>n.filter(v=>v.term===y).length,c=(kt==="all"?n:n.filter(y=>y.term===kt)).slice().sort((y,v)=>String(y.createdAt).localeCompare(String(v.createdAt))),p=o.slice().sort((y,v)=>!!y.fav!=!!v.fav?y.fav?-1:1:String(v.createdAt).localeCompare(String(y.createdAt))),S=p.slice(0,3),m=p.slice(3),w=String(t.name||"?").trim().slice(0,1).toUpperCase()||"?";return`
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
          <div class="item-meta">${i.length?`${i.length} identities`:"No identities yet"} · ${s.length} life areas · ${n.length} goals · ${o.length} quotes</div>
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
        <span class="item-meta">${s.length}/20</span>
      </div>
      ${e?"":`
        <div style="display:flex;gap:8px;margin-bottom:10px">
          <input id="new-lifearea" maxlength="60" placeholder="e.g. Health, Family, Career…" style="flex:1;min-width:0" />
          <button class="primary-btn compact-btn" data-action="add-lifearea">Add</button>
        </div>
      `}
      ${s.length?`
        <div class="life-grid">
          ${s.map(y=>{const v=st===y.id;return`
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
              ${["short","medium","long"].map(y=>`<button type="button" class="chip hashtag-${y} ${z===y?"on":""}" data-action="set-pgoal-term" data-term="${y}">${$t(y)}</button>`).join("")}
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
        ${[["all",`All (${n.length})`],["short",`#short (${d("short")})`],["medium",`#medium (${d("medium")})`],["long",`#long (${d("long")})`]].map(([y,v])=>`<button type="button" class="chip ${kt===y?"on":""}" data-action="set-pgoal-filter" data-filter="${y}">${v}</button>`).join("")}
      </div>
      <div class="habit-manage">
        ${c.length?c.map(y=>`
          <article class="manage-card pgoal-card term-${y.term}">
            <div class="pgoal-top">
              <span class="hashtag hashtag-${y.term}">${$t(y.term)}</span>
              <span class="duration-pill">⏳ ${g(y.duration)}</span>
              ${e?"":`<button class="mini-btn" data-action="remove-pgoal" data-id="${y.id}" title="Remove goal">✕</button>`}
            </div>
            ${e?`<div class="item-title" style="margin-top:6px">${g(y.text)}</div>`:`
                <input data-pgoal-text="${y.id}" maxlength="200" value="${g(y.text)}" style="margin-top:8px" aria-label="Goal text" />
                <div class="row-2" style="margin-top:8px">
                  <select data-pgoal-term="${y.id}" aria-label="Goal term">
                    ${["short","medium","long"].map(v=>`<option value="${v}" ${y.term===v?"selected":""}>${$t(v)}</option>`).join("")}
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
          ${S.map(y=>he(y,e)).join("")}
        </div>
        ${m.length?`
          <button class="ghost-btn compact full" data-action="toggle-quotes">${ht?"Show less ▴":`More (${m.length}) — see the rest ▾`}</button>
          ${ht?`<div class="habit-manage" style="margin-top:8px">${m.map(y=>he(y,e)).join("")}</div>`:""}
        `:ht&&!m.length?'<p class="item-meta">No more quotes — that is all of them.</p>':""}
      `:'<div class="empty">No quotes yet — add the words that move you.</div>'}
    </section>
  `}function he(t,e){return`
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
  `}function ga(){document.querySelectorAll("[data-profile]").forEach(t=>{t.addEventListener("input",()=>{u.setProfileField(t.dataset.profile,t.value)||k()})}),document.querySelectorAll("[data-lifearea-title]").forEach(t=>{t.addEventListener("change",()=>{u.updateLifeArea(t.dataset.lifeareaTitle,{title:t.value}),k()})}),document.querySelectorAll("[data-lifearea-desc]").forEach(t=>{t.addEventListener("input",()=>{u.updateLifeArea(t.dataset.lifeareaDesc,{description:t.value})})}),document.querySelectorAll("[data-pgoal-text]").forEach(t=>{t.addEventListener("change",()=>{u.updateProfileGoal(t.dataset.pgoalText,{text:t.value}),k()})}),document.querySelectorAll("[data-pgoal-term]").forEach(t=>{t.addEventListener("change",()=>{u.updateProfileGoal(t.dataset.pgoalTerm,{term:t.value}),k()})}),document.querySelectorAll("[data-pgoal-duration]").forEach(t=>{t.addEventListener("change",()=>{u.updateProfileGoal(t.dataset.pgoalDuration,{duration:t.value}),k()})})}function fa(){const t=u.week(new Date(`${f}T00:00:00`)),e=t.reduce((i,s)=>i+s.earned,0),a=Math.round(e/7);return`
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
  `}function ha(){const t=xt||M(f),e=ee(t),a=u.todayKey();return`
    <section class="section">
      <div class="section-head">
        <h2>Reports calendar</h2>
        <div class="date-nav">
          <button class="icon-btn" data-action="history-cal-nav" data-dir="-1" aria-label="Previous month">‹</button>
          <button class="icon-btn" data-action="history-cal-nav" data-dir="1" aria-label="Next month">›</button>
        </div>
      </div>
      <div class="pin-cal">
        <div class="pin-cal-head"><b>${Et(t)}</b></div>
        <div class="pin-cal-grid pin-cal-week">
          ${te().map(i=>`<span>${i.label.slice(0,1)}</span>`).join("")}
        </div>
        <div class="pin-cal-grid">
          ${e.map(i=>{if(!i)return"<span></span>";const s=u.scoreFor(i),n=i===f?"on-selected":s.percent>=100?"on-perfect":s.earned>0?"on":"",o=s.locked?'<i class="dot-lock"></i>':"";return`<button type="button" class="pin-cal-day hist-cal-day ${n} ${i===a?"is-today":""}" data-action="pick-date" data-date="${i}" title="${g(i)}: ${s.earned}/${s.max} pts (${s.percent}%)"><b>${Number(i.slice(8,10))}</b><span>${s.earned}</span>${o}</button>`}).join("")}
        </div>
      </div>
    </section>
  `}function ba(t){const e=new Map((t||[]).map(n=>[n.date,n])),a=At||M(f),i=ee(a),s=u.todayKey();return`
    <div class="pin-cal">
      <div class="pin-cal-head"><b>${Et(a)}</b><span class="item-meta">${e.size} locked</span></div>
      <div class="pin-cal-grid pin-cal-week">
        ${te().map(n=>`<span>${n.label.slice(0,1)}</span>`).join("")}
      </div>
      <div class="pin-cal-grid">
        ${i.map(n=>{if(!n)return"<span></span>";const o=e.get(n),r=!!o,d=N.includes(n)?"on-selected":r?"on-locked":"on-open",c=u.scoreFor(n),p=o?o.earned:c.earned;return`<button type="button" class="pin-cal-day hist-cal-day ${d} ${n===s?"is-today":""}" data-action="toggle-locked-day" data-date="${n}" title="${g(n)}: ${r?"Locked":"Open"} — ${p} pts"><b>${Number(n.slice(8,10))}</b><span>${p}</span></button>`}).join("")}
      </div>
    </div>
  `}function ya(){return`
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
  `}function va(){const t=u.week(new Date(`${f}T00:00:00`)),e=u.todayKey(),a=`${W(t[0].date)} – ${W(t[6].date)}`,i=t.reduce((o,r)=>o+(r.earned||0),0),s=t.reduce((o,r)=>o+(r.max||0),0),n=t.filter(o=>o.hasRecord).length;return`
    <div class="topbar">
      <div>
        <p class="kicker">Archive</p>
        <h1>Past reports</h1>
      </div>
      <button class="ghost-btn compact" data-action="open-export">Export</button>
    </div>
    ${ha()}
    ${fa()}
    ${ya()}
    <section class="section">
      <div class="section-head">
        <h2>Week</h2>
        <span class="item-meta">${a}</span>
      </div>
      <p class="item-meta">${n} of 7 days reported · ${i} of ${s} pts</p>
      <div class="history-list">
        ${t.map(o=>{const r=!o.hasRecord,d=(o.missedHabits||0)+(o.missedTasks||0),c=r?"No report":`${o.locked?"Locked":"Open"} · ${Le(o.percent)} · ${o.earned}/${o.max} pts (${o.percent}%)${o.locked&&d>0?` · ❌ ${d} missed`:""}`;return`
              <article class="history-card ${r?"is-empty":""} ${o.date===e?"is-today":""} ${o.date===f?"is-selected":""}">
                <div class="section-head">
                  <div>
                    <div class="item-title">${g(o.label)} ${W(o.date)}</div>
                    <div class="item-meta">${g(c)}</div>
                  </div>
                  <button class="ghost-btn compact" data-action="pick-date" data-date="${o.date}">${r?"Add":"Open"}</button>
                </div>
                <div class="bar"><span style="width:${o.percent}%"></span></div>
                ${o.note?ra(o.note):`<p class="item-meta">${r?"Nothing recorded this day.":"No note."}</p>`}
              </article>
            `}).join("")}
      </div>
    </section>
  `}function ka(t,e){const a=new Date(`${t}T00:00:00`);return a.setDate(a.getDate()+e),u.todayKey(a)}function $a(){return G==="month"?`${mt(M(f),J)}-15`:G==="year"?`${Number(f.slice(0,4))+J}-06-15`:ka(f,J*7)}function wa(t){const[e,a]=u.resolveRange(G,t);return G==="week"?`${W(e)} – ${W(a)}`:G==="month"?Et(e.slice(0,7)):e.slice(0,4)}function Sa(){const t=$a(),e=u.categoryChart(G,t),a=J===0?G==="week"?"This week":G==="month"?"This month":"This year":wa(t),i=e.labels.map((n,o)=>{const r=e.cats.reduce((c,p)=>c+(e.perCat[p.id]?e.perCat[p.id][o]:0),0),d=e.cats.map((c,p)=>({cat:c,value:e.perCat[c.id]?e.perCat[c.id][o]:0,ci:p})).filter(c=>c.value>0).map(c=>`<span class="chart-seg" style="height:${Math.max(2,Math.round(c.value/e.max*100))}%;background:${j(c.cat.id,c.ci)}" title="${g(c.cat.label)}: ${c.value} pts"></span>`).join("");return`
      <div class="chart-col" title="${g(e.titles[o])}: ${r} pts">
        <div class="chart-bar">${d||'<span class="chart-empty"></span>'}</div>
        <span class="chart-x">${g(n)}</span>
      </div>
    `}).join(""),s=e.cats.map((n,o)=>`
      <span class="chart-legend-item"><i style="background:${j(n.id,o)}"></i>${g(n.label)} <b>${e.totals[n.id]||0}</b></span>
    `).join("");return`
    <section class="score-hero">
      <div class="section-head" style="margin-bottom:4px">
        <div>
          <div class="item-title">Progress chart</div>
          <div class="item-meta">${a} · ${e.grandTotal} pts total</div>
        </div>
      </div>
      <div class="chart-nav-row">
        <button type="button" class="mini-btn" data-action="chart-nav" data-dir="-1" aria-label="Previous ${G}">‹</button>
        <div class="chip-row">
          ${["week","month","year"].map(n=>`<button type="button" class="chip ${G===n?"on":""}" data-action="set-chart-range" data-range="${n}">${n[0].toUpperCase()}${n.slice(1)}</button>`).join("")}
        </div>
        <button type="button" class="mini-btn" data-action="chart-nav" data-dir="1" aria-label="Next ${G}">›</button>
      </div>
      <div class="chart-wrap${e.labels.length>12?" scroll-x":""}">${i}</div>
      <div class="chart-legend">${s}</div>
    </section>
  `}function xa(){u.getDay(f);const t=u.isLocked(f),e=u.consciousEnabled(),a=u.categoryBreakdown(f),i=a.reduce((n,o)=>n+o.earned,0),s=a.reduce((n,o)=>n+o.max,0);return`
    <div class="topbar">
      <div>
        <p class="kicker">Activities</p>
        <h1>By category</h1>
      </div>
      <div class="date-nav">
        ${Yt()}
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
        <div class="grade-pill">${W(f)}</div>
      </div>
      <p class="lock-hint">Habits and tasks grouped by category.</p>
    </section>
    ${Sa()}
    ${a.map(n=>{const o=n.max?Math.round(n.earned/n.max*100):0,r=j(n.id);return`
          <section class="section">
            <article class="manage-card cat-card cat-${n.id}" style="border-left:4px solid ${r};background:linear-gradient(180deg, ${r}14, var(--card) 60%)">
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
                    ${n.habits.map(d=>{const c=u.habitRating(f,d.id),p=!c&&t,S=u.habitStreak(d.id,f),m=e&&Number(d.consciousPoints)||0,w=c>0?m:0,y=Math.round(d.points*c/5)+w,v=d.points+m;return`
                           <article class="item-card ${c?"done":""} ${p?"missed":""} ${t?"is-locked":""}" style="border-left:3px solid ${j(d.category)};background:linear-gradient(180deg, ${j(d.category)}10, var(--card) 60%)">
                             <button class="check" data-action="toggle-habit" data-id="${d.id}" ${t?"disabled":""}>✓</button>
                             <div class="item-body">
                               <div class="item-title">${g(d.name)} ${p?'<span class="missed-badge">Missed</span>':""}</div>
                               <div class="item-meta">Habit · ${c?`${c}/5 ${wt(c)}`:t?"Missed":"Not rated"} · ${Tt(S)}${e?` ${Ie(m)}`:""}</div>
                              ${d.description?`<p class="item-desc">${g(d.description)}</p>`:""}
                              ${Dt(u.habitForwardedTo(f,d.id))}
                              ${at(d.tags)}
                              ${Me(d.id,c,t)}
                            </div>
                            <div class="item-side">
                              <div class="points">${y}/${v}</div>
                              <div class="mini-actions">
                                ${K?`<button class="mini-btn on" data-action="open-edit-habit" data-id="${d.id}" ${t?"disabled":""}>Edit</button>`:""}
                                <button class="mini-btn" data-action="open-forward-habit" data-id="${d.id}" ${t?"disabled":""} title="Forward habit to another day">${R("forward")}</button>
                              </div>
                            </div>
                          </article>
                        `}).join("")}
                    ${n.tasks.map(d=>{const c=Math.max(0,Math.min(5,Number(d.rating)||0)),p=!d.done&&t;return`
                           <article class="item-card ${d.done?"done":""} ${p?"missed":""} ${t?"is-locked":""}" style="border-left:3px solid ${j(d.category)};background:linear-gradient(180deg, ${j(d.category)}10, var(--card) 60%)">
                             <button class="check" data-action="toggle-task" data-id="${d.id}" ${t?"disabled":""}>✓</button>
                             <div class="item-body">
                               <div class="item-title">${g(d.title)} ${p?'<span class="missed-badge">Missed</span>':""}</div>
                               <div class="item-meta">Task · ${d.done?"Done":t?"Missed":"Pending"} · ${c?`${c}/5 ${wt(c)}`:"No rating"}${d.description?` · ${g(d.description)}`:""}</div>
                              ${je(d.forwardedFrom)}
                              ${Dt(d.forwardedTo)}
                              ${at(d.tags)}
                              ${d.image?'<span class="task-img-badge">📷 Photo attached</span>':""}
                              ${Re(d)}
                              ${He(d.id,c,t)}
                            </div>
                            <div class="item-side">
                              <div class="points">+${d.points}</div>
                              <div class="mini-actions">
                                ${K?`<button class="mini-btn on" data-action="open-edit-task" data-id="${d.id}" ${t?"disabled":""}>Edit</button>`:""}
                                <button class="mini-btn" data-action="open-forward-task" data-id="${d.id}" ${t?"disabled":""} title="Forward task to another day">${R("forward")}</button>
                              </div>
                            </div>
                          </article>
                        `}).join("")}
                  `:'<div class="empty">No activities in this category.</div>'}
            </div>
          </section>
        `}).join("")}
  `}function Ct(t){return`${t||"daily-report-backup"}-${u.todayKey()}.json`}function Aa(){const t=u.getInstalledAt(),e=String(t).slice(0,10),a=new Date(`${e}T00:00:00`),i=new Date(`${u.todayKey()}T00:00:00`),s=Number.isNaN(a.getTime())?1:Math.max(1,Math.round((i-a)/864e5)+1),n=String(Number(e.slice(8,10))).padStart(2,"0"),o=e.slice(5,7),r=e.slice(2,4),d=/^\d{4}-\d{2}-\d{2}$/.test(e)?`${n}/${o}/${r}`:e,c=Math.floor((s-1)/365)+1;return`Using Daily Report since ${d} · day ${s} · year ${c}`}function Be(){return typeof window.showDirectoryPicker=="function"}function Kt(){return new Promise((t,e)=>{const a=indexedDB.open("daily-report-pwa",1);a.onupgradeneeded=()=>a.result.createObjectStore("kv"),a.onsuccess=()=>t(a.result),a.onerror=()=>e(a.error)})}function Ta(t){return Kt().then(e=>new Promise((a,i)=>{const s=e.transaction("kv","readonly").objectStore("kv").get(t);s.onsuccess=()=>a(s.result),s.onerror=()=>i(s.error)}))}function Da(t,e){return Kt().then(a=>new Promise((i,s)=>{const n=a.transaction("kv","readwrite");n.objectStore("kv").put(e,t),n.oncomplete=()=>i(),n.onerror=()=>s(n.error)}))}function Ca(t){return Kt().then(e=>new Promise((a,i)=>{const s=e.transaction("kv","readwrite");s.objectStore("kv").delete(t),s.oncomplete=()=>a(),s.onerror=()=>i(s.error)}))}function Pa(){return!Be()||typeof indexedDB>"u"?(C="unsupported",Promise.resolve()):Ta("backupDir").then(t=>{if(E=t||null,!E){C="unset";return}return E.queryPermission({mode:"readwrite"}).then(e=>{C=e==="granted"?"granted":"prompt"}).catch(()=>{C="prompt"})}).catch(()=>{E=null,C="unset"})}function Ea(){return C==="unsupported"?"Folder picking needs Chrome/Edge on desktop — on phones backups download instead.":C==="unset"?"No folder chosen yet.":C==="prompt"?"Tap Choose folder to allow access again.":C==="denied"?"Access was denied — choose the folder again.":C==="granted"&&E?`Folder: ${E.name}`:"Checking…"}async function La(){if(!Be()){b("Folder access needs Chrome or Edge");return}try{const t=await window.showDirectoryPicker({id:"daily-report-backup",mode:"readwrite"});await Da("backupDir",t),E=t,C="granted",b("Backup folder set")}catch(t){t&&t.name==="AbortError"||b("Couldn't open that folder")}k()}async function Na(){try{await Ca("backupDir")}catch{b("Couldn't remove folder");return}E=null,C="unset",b("Backup folder removed"),k()}async function Ma(){if(E){try{const t=await E.requestPermission({mode:"readwrite"});C=t==="granted"?"granted":"denied",b(t==="granted"?"Folder access granted":"Access denied")}catch{C="denied"}k()}}async function Ha(){const t=u.exportBackup(),e=Ct();if(C==="granted"&&E)try{const i=await(await E.getFileHandle(e,{create:!0})).createWritable();await i.write(t),await i.close(),b("Backup saved to your folder"),Fe();return}catch{}dt(e,t,"application/json"),b("Backup downloaded")}async function Ia(){if(C!=="granted"||!E)return[];const t=[];try{for await(const e of E.values())if(e&&e.kind==="file"&&/\.json$/i.test(e.name))try{const a=await e.getFile();t.push({name:e.name,modified:a.lastModified})}catch{}}catch{return t}return t.sort((e,a)=>a.modified-e.modified),t}async function Fe(){const t=document.getElementById("folder-backup-list");if(!t)return;if(C!=="granted"||!E){t.innerHTML='<button class="ghost-btn compact" data-action="trigger-import">Import from a file instead</button>';return}t.innerHTML='<p class="item-meta">Loading backups…</p>';const e=await Ia();if(!document.getElementById("folder-backup-list"))return;e.length?t.innerHTML=e.map(i=>`
            <div style="display:flex;gap:8px;align-items:center;margin-bottom:6px">
              <span class="item-meta" style="flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${g(i.name)}</span>
              <button class="ghost-btn compact" data-action="restore-backup" data-name="${g(i.name)}">Restore</button>
            </div>
          `).join(""):t.innerHTML='<p class="item-meta">Folder is empty — press Export backup now to create the first backup.</p>';const a=document.createElement("div");a.innerHTML='<button class="ghost-btn compact" data-action="trigger-import">Import from a file instead</button>',t.appendChild(a)}async function Ra(t){if(E)try{const a=await(await E.getFileHandle(t)).getFile();Oe(await a.text(),t)}catch{b("Couldn't read that backup")}}function Oe(t,e){let a;try{a=JSON.parse(t)}catch{b("That file isn't valid JSON.");return}const i=u.backupKind(a);if(i==="ok"){if(!window.confirm(`Replace ALL app data with "${e}"?`))return;dt(Ct("daily-report-pre-import"),u.exportBackup(),"application/json"),u.importBackup(a),b("Backup imported"),k();return}if(i==="report-export"){const s=u.previewReport(a);if(!s.days){b("That report file has no day rows to import.");return}if(!window.confirm(`Import ${s.days} day(s) (${s.start} → ${s.end}) from "${e}" as locked history?

${s.newHabits} new habit(s) will be added to your list.
Days already in the app on those dates will be overwritten.`))return;dt(Ct("daily-report-pre-import"),u.exportBackup(),"application/json");const o=u.importReport(a);if(!o){b("That file doesn't look like a valid Daily Report backup.");return}b(`Imported ${o.days} day(s)${o.habits?` + ${o.habits} new habit(s)`:""}`),k();return}if(i==="wrong-app"){b("That backup belongs to another app (e.g. Iron Log) — it can’t be imported into Daily Report.");return}b("That file doesn't look like a valid Daily Report backup.")}async function ja(){if(!ot){b("Use the browser menu: Install / Add to Home Screen");return}try{ot.prompt();const t=await ot.userChoice;t&&t.outcome==="accepted"&&b("Installing Daily Report…")}catch{}ot=null,k()}async function Ba(){const t=`./version.json?v=${Date.now()}`,e=await fetch(t,{cache:"no-store"});if(!e.ok)throw new Error(`http ${e.status}`);const a=await e.json(),i=a&&(a.version||a.v)||null;if(!i)throw new Error("no version field");return String(i)}async function Fa(){X=!0,Ut=!1,Z="Checking for updates… (needs internet)",k();try{if("serviceWorker"in navigator&&navigator.serviceWorker.getRegistration){const e=await navigator.serviceWorker.getRegistration().catch(()=>null);e&&e.update&&e.update().catch(()=>{})}}catch{}if(typeof fetch>"u"){X=!1,Z="This browser can’t check — but the app itself works offline. Use Export backup to protect your data.",k();return}const t=setTimeout(()=>{X&&(X=!1,Z="Couldn't reach the server — offline? The app itself works offline; updating needs internet.",k())},15e3);try{const e=await Ba();if(clearTimeout(t),X=!1,zt=e,e&&e!==Ne){Ut=!0,Z="Update found — updating automatically…",k(),await Ge(!0);return}Z="You're on the latest version. The app works offline."}catch{clearTimeout(t),X=!1,Z="Couldn't reach the server — offline, or this file wasn't opened from the installed/hosted app. The app itself works offline; updating needs internet."}k()}function be(t){return new Promise(e=>{if(!("serviceWorker"in navigator))return e();const a=()=>e(),i=setTimeout(()=>{try{navigator.serviceWorker.removeEventListener("controllerchange",a)}catch{}e()},t||4e3),s=()=>{clearTimeout(i);try{navigator.serviceWorker.removeEventListener("controllerchange",s)}catch{}e()};try{navigator.serviceWorker.addEventListener("controllerchange",s)}catch{e()}})}async function Ge(t){var a;try{dt(Ct("daily-report-pre-update"),u.exportBackup(),"application/json")}catch{}b("Backup saved — updating app…"),Z=`Backup saved — updating${zt?` to ${String(zt).slice(-8)}`:""}…`,k();const e=()=>{const i=window.location.href.includes("?")?"&":"?";try{window.location.replace(`${window.location.href.split("#")[0]}${i}v=${Date.now()}#updated`)}catch{window.location.reload()}setTimeout(()=>{try{window.location.reload()}catch{}},2500)};try{if("serviceWorker"in navigator&&navigator.serviceWorker.getRegistration){const i=await navigator.serviceWorker.getRegistration().catch(()=>null);if(i){const s=i.waiting;if(s){try{s.postMessage("SKIP_WAITING")}catch{try{i.waiting.postMessage({type:"SKIP_WAITING"})}catch{}}await be(4e3),e();return}try{await i.update()}catch{}const n=await navigator.serviceWorker.getRegistration().catch(()=>i),o=(n||i).waiting||(n||i).installing;if(o){try{o.postMessage("SKIP_WAITING")}catch{}try{(a=(n||i).waiting)==null||a.postMessage("SKIP_WAITING")}catch{}await be(5e3),e();return}try{const r=navigator.serviceWorker.controller;r&&r.postMessage({type:"CLEAR_APP_CACHES"})}catch{}try{if(typeof caches<"u"){const r=await caches.keys().catch(()=>[]);await Promise.all(r.filter(d=>d.startsWith("daily-report-")).map(d=>caches.delete(d).catch(()=>!1)))}}catch{}try{await fetch(`./index.html?v=${Date.now()}`,{cache:"reload"})}catch{}try{await fetch(`./version.json?v=${Date.now()}`,{cache:"reload"})}catch{}try{await(n||i).unregister()}catch{}e();return}}}catch{}try{await fetch(`./index.html?v=${Date.now()}`,{cache:"reload"})}catch{}setTimeout(e,600)}function Oa(){const t=u.getSettings(),e=u.getAllHabits(),a=u.getArchivedHabits(),i=u.getPinnedTasks(),s=u.lockedReports();return`
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
      <p class="item-meta">Version: ${g(ia)}</p>
      <p class="item-meta">📅 ${g(Aa())}</p>
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:8px">
        <button class="primary-btn" data-action="check-updates" ${X?"disabled":""}>${X?"Checking…":"Check for updates"}</button>
        ${Ut?'<button class="primary-btn" data-action="apply-update">Restart with update</button>':""}
      </div>
      <p class="item-meta">${g(Z)}</p>
    </section>

    <section class="manage-card">
      <h2>Data backup</h2>
      <p class="muted tight">Pick a backup folder once (Chrome/Edge on desktop) and exports save straight into it. On phones, backups download to your Downloads folder instead. Import accepts full backups (<b>daily-report-backup-*.json</b>) or month/week report exports, which are added as locked history.</p>
      <p class="item-meta">${g(Ea())}</p>
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
        ${u.getCategories().map(n=>{const o=u.getCustomCategories().some(p=>p.id===n.id),r=n.color||j(n.id),d=n.goals||"",c=et.has(n.id);return`
              <article class="manage-card cat-manage-card ${c?"open":""}">
                <div class="cat-manage-head">
                  <button type="button" class="cat-manage-toggle" data-action="toggle-cat" data-id="${n.id}" aria-expanded="${c?"true":"false"}" aria-controls="cat-editor-${n.id}">
                    <span class="cat-chevron" aria-hidden="true">${c?"▾":"▸"}</span>
                    <i class="cat-swatch" style="background:${g(r)}"></i>
                    <span class="cat-manage-name">${g(it(n.id))}</span>
                    ${d?'<span class="cat-goal-flag">goals</span>':""}
                  </button>
                  <div class="mini-actions">
                    ${o?`<button class="mini-btn on" data-action="rename-category" data-id="${n.id}">Rename</button>`:""}
                    ${o?`<button class="mini-btn" data-action="delete-category" data-id="${n.id}">✕</button>`:""}
                  </div>
                </div>
                ${c?`
                      <div class="cat-manage-body" id="cat-editor-${n.id}">
                        <div class="cat-manage-row">
                          <label>Colour
                            <input type="color" data-cat-color="${n.id}" value="${g(r)}" aria-label="Colour for ${g(n.label||it(n.id))}" />
                          </label>
                          <div class="cat-goals-wrap">
                            <label>Goals (bullet points)
                              <textarea data-cat-goals="${n.id}" maxlength="1000" placeholder="• Goal one&#10;• Goal two&#10;• Goal three" style="min-height:80px">${g(d)}</textarea>
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
        ${u.getGoals().length?u.getGoals().map(n=>{var c,p;const o=u.goalProgress(n,f),r=u.getBadges().some(S=>S.goalId===n.id),d=n.kind==="habit-streak"?((c=u.findHabit(n.targetId))==null?void 0:c.name)||"Deleted habit":n.kind==="task-streak"?((p=u.findPinnedTask(n.targetId))==null?void 0:p.title)||"Deleted task":"Any day at 100%";return`
                    <article class="manage-card goal-card ${r?"goal-earned":""}">
                      <div class="section-head">
                        <div>
                          <div class="item-title">${jt(n.tier)} ${g(n.title)}</div>
                          <div class="item-meta">${Te(n.tier)} · “${g(n.rewardTitle)}” · ${g(d)}</div>
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
                  <div class="reward-medal">${jt(n.tier)}</div>
                  <div>
                    <div class="item-title">${g(n.rewardTitle||n.title)}</div>
                    <div class="item-meta">${g(n.title)} · ${W((n.earnedAt||"").slice(0,10))}</div>
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
      ${ba(s)}
      ${N.length?`
        <div class="chip-row" style="margin-top:10px">
          ${[...N].sort().map(n=>`<button type="button" class="chip on" data-action="toggle-locked-day" data-date="${n}" title="Tap to remove">${n} ✕</button>`).join("")}
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
        ${e.length?e.map(n=>`
                    <article class="manage-card" style="${n.pin?`border-left:4px solid ${j(n.category)}`:""}">
                      <div class="section-head">
                        <div>
                          <div class="item-title">${g(n.name)}</div>
                          <div class="item-meta">${bt(n.category)} · ${n.pin?ft(n.pin):"Not pinned"} · +${n.points} pts ${t.showConscious!==!1?Number(n.consciousPoints)?`· 🧠 +${n.consciousPoints}`:"· No conscious pts":""} · ${Tt(u.habitStreak(n.id,f))}</div>
                          ${n.description?`<p class="item-desc">${g(n.description)}</p>`:""}
                          ${at(n.tags)}
                        </div>
                        <div class="mini-actions">
                          <button class="mini-btn ${n.pin?"on":""}" data-action="open-pin-habit" data-id="${n.id}">${R("pin")}</button>
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
                    <article class="manage-card archived" style="border-left:4px solid ${j(n.category)}">
                      <div class="section-head">
                        <div>
                          <div class="item-title">${g(n.name)}</div>
                          <div class="item-meta">${bt(n.category)} · +${n.points} pts${n.pin?` · ${ft(n.pin)}`:" · Pin ended"} · ${oa(n.archivedAt)}</div>
                          ${n.description?`<p class="item-desc">${g(n.description)}</p>`:""}
                          ${at(n.tags)}
                        </div>
                        <div class="mini-actions">
                          <button class="mini-btn on" data-action="restore-habit" data-id="${n.id}">${R("undo")}</button>
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
        ${i.length?i.map(n=>`
                    <article class="manage-card" style="border-left:4px solid ${j(n.category)}">
                      <div class="section-head">
                        <div>
                          <div class="item-title">${g(n.title)}</div>
                          <div class="item-meta">${bt(n.category)} · ${ft(n.pin)} · +${n.points} pts</div>
                          ${n.description?`<p class="item-desc">${g(n.description)}</p>`:""}
                          ${at(n.tags)}
                        </div>
                        <div class="mini-actions">
                          <button class="mini-btn on" data-action="open-pin-template" data-id="${n.id}">${R("pin")}</button>
                          <button class="mini-btn" data-action="unpin-template" data-id="${n.id}">✕</button>
                        </div>
                      </div>
                    </article>
                  `).join(""):'<div class="empty">Pin a task from Today to repeat it.</div>'}
      </div>
    </section>
  `}function M(t){if(/^\d{4}-\d{2}$/.test(String(t||"")))return String(t);if(/^\d{4}-\d{2}-\d{2}$/.test(String(t||"")))return String(t).slice(0,7);const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}`}function mt(t,e){const[a,i]=String(t).split("-").map(Number),s=new Date(a,(i||1)-1+e,1);return`${s.getFullYear()}-${String(s.getMonth()+1).padStart(2,"0")}`}function Et(t){const[e,a]=String(t).split("-").map(Number);return new Date(e,(a||1)-1,1).toLocaleDateString(void 0,{month:"long",year:"numeric"})}function te(){const t=u.getWeekStart(),e=nt.findIndex(a=>a.value===t);return e<=0?nt:[...nt.slice(e),...nt.slice(0,e)]}function ee(t){const[e,a]=String(t).split("-").map(Number),s=(new Date(e,a-1,1).getDay()-u.getWeekStart()+7)%7,n=new Date(e,a,0).getDate(),o=[];for(let r=0;r<s;r++)o.push(null);for(let r=1;r<=n;r++)o.push(`${e}-${String(a).padStart(2,"0")}-${String(r).padStart(2,"0")}`);return o}function ye(t,e,a){const i=new Set(a||[]),s=ee(e);return`
    <div class="pin-cal" data-cal="${t}">
      <div class="pin-cal-head">
        <button type="button" class="mini-btn" data-action="pin-cal-nav" data-target="${t}" data-dir="-1" aria-label="Previous month">‹</button>
        <b>${Et(e)}</b>
        <button type="button" class="mini-btn" data-action="pin-cal-nav" data-target="${t}" data-dir="1" aria-label="Next month">›</button>
      </div>
      <div class="pin-cal-grid pin-cal-week">
        ${te().map(n=>`<span>${n.label.slice(0,1)}</span>`).join("")}
      </div>
      <div class="pin-cal-grid">
        ${s.map(n=>n?`<button type="button" class="pin-cal-day ${i.has(n)?"on":""}" data-action="toggle-pin-date" data-target="${t}" data-date="${n}">${Number(n.slice(8,10))}</button>`:"<span></span>").join("")}
      </div>
    </div>
  `}function Ga(t,e){const a=(t==null?void 0:t.mode)||"forever",i=(t==null?void 0:t.until)||"",s=((t==null?void 0:t.weekdays)||[]).map(Number),n=((t==null?void 0:t.monthDays)||[]).map(Number),o=Array.isArray(t==null?void 0:t.yearDays)?[...t.yearDays].sort():[],r=Array.isArray(t==null?void 0:t.customDates)?[...t.customDates].sort():[],d=Array.isArray(t==null?void 0:t.exceptDates)?[...t.exceptDates].sort():Array.isArray(t==null?void 0:t.exceptions)?[...t.exceptions].sort():[],c=e&&e._exceptCal||M(f),p=e&&e._customCal||M(f),S=e&&e._yearMonth||"01";return`
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
            <button type="button" class="chip weekday ${s.includes(m.value)?"on":""}" data-action="toggle-weekday" data-day="${m.value}">
              ${m.label}
            </button>
          `).join("")}
      </div>
    </div>
    <div class="pin-monthdays" style="${a==="monthly"?"":"display:none"}">
      <p class="item-meta">Repeat every month on day</p>
      <div class="chip-row">
        ${Array.from({length:31},(m,w)=>w+1).map(m=>`<button type="button" class="chip monthday ${n.includes(m)?"on":""}" data-action="toggle-monthday" data-day="${m}">${m}</button>`).join("")}
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
      ${ye("custom",p,r)}
      <div class="chip-row" style="margin-top:8px">
        ${r.length?r.map(m=>`<button type="button" class="chip on" data-action="toggle-pin-date" data-target="custom" data-date="${m}" title="Tap to remove">${m} ✕</button>`).join(""):'<span class="item-meta">No extra custom dates.</span>'}
      </div>
    </div>
    <div class="pin-exceptions" style="margin-top:4px">
      <p class="item-meta"><b style="color:var(--text)">Exceptions</b> — skip these days (tap days on the calendar). Applies to every repeat mode.</p>
      ${ye("except",c,d)}
      <div class="chip-row" style="margin-top:8px">
        ${d.length?d.map(m=>`<button type="button" class="chip on" data-action="toggle-pin-date" data-target="except" data-date="${m}" title="Tap to remove">${m} ✕</button>`).join(""):'<span class="item-meta">No exceptions.</span>'}
      </div>
    </div>
  `}function qa(){if(!x)return"";if(x==="choose")return`
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
    `;if(x==="habit"||x==="task"||x==="edit-habit"||x==="edit-task"){const t=x==="habit"||x==="edit-habit",e=x.startsWith("edit-"),a=h||{},i=a.category||(t?"physically":"mentally"),s=Math.max(0,Math.min(5,Number(a.rating)||0)),n=Array.isArray(a.tags)?a.tags.join(", "):a.tags||"",o=a.consciousPoints!=null?Number(a.consciousPoints):a.conscious!=null?Number(a.conscious):0;return`
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
                ${u.getCategories().map(r=>`
                    <button type="button" class="chip ${i===r.id?"on":""}" data-action="set-category" data-category="${r.id}">${g(r.label)}</button>
                  `).join("")}
              </div>
              <input type="hidden" name="category" value="${i}" />
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
    `}if(x==="export"){const t=h&&h.range||"day";return`
      <div class="modal-backdrop open" data-action="close-modal">
        <div class="sheet">
          <div class="handle"></div>
          <h2>Export report</h2>
          <p class="muted tight">Date: ${W(f)}. Pick a range, then a format.</p>
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
    `}if(x==="goal"||x==="edit-goal"){const t=x==="edit-goal",e=h||{},a=e.kind||"habit-streak",i=u.getAllHabits(),s=u.getPinnedTasks(),n=e.targetId||"";return`
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
                ${Ae.map(o=>`<button type="button" class="chip ${a===o.id?"on":""}" data-action="set-goal-kind" data-kind="${o.id}">${o.label}</button>`).join("")}
              </div>
              <input type="hidden" name="kind" value="${a}" />
            </div>
            <label class="goal-target-habit" style="${a==="habit-streak"?"":"display:none"}">
              Habit
              <select name="habitTarget">
                ${i.map(o=>`<option value="${o.id}" ${n===o.id?"selected":""}>${g(o.name)}</option>`).join("")}
              </select>
            </label>
            <label class="goal-target-task" style="${a==="task-streak"?"":"display:none"}">
              Pinned task
              <select name="taskTarget">
                ${s.length?s.map(o=>`<option value="${o.id}" ${n===o.id?"selected":""}>${g(o.title)}</option>`).join(""):'<option value="">No pinned tasks yet</option>'}
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
            ${Ga(i,h)}
            <button class="primary-btn" type="submit">Save pin</button>
            ${i?'<button class="ghost-btn danger" type="button" data-action="clear-pin">Unpin</button>':""}
            <button class="ghost-btn" type="button" data-action="close-modal">Cancel</button>
          </div>
        </form>
      </div>
    `}if(x==="forward"){const{kind:t,id:e,title:a,from:i}=h||{},s=t==="habit";return`
      <div class="modal-backdrop open" data-action="close-modal">
        <form class="sheet" data-form="forward" data-kind="${t}" data-id="${e}">
          <div class="handle"></div>
          <h2>Forward ${s?"habit":"task"}</h2>
          <p class="muted tight">${g(a||"")}</p>
          <p class="item-meta">From ${g(i||f)} — a copy will be created on the day you pick, marked “↩ Forwarded from ${g(i||f)}”.</p>
          <div class="form" style="margin-top:14px">
            <label>
              Forward to day
              <input name="targetDate" type="date" required value="${la(i||f)}" />
            </label>
            <button class="primary-btn" type="submit">Forward ${s?"habit":"task"} →</button>
            <button class="ghost-btn" type="button" data-action="close-modal">Cancel</button>
          </div>
        </form>
      </div>
    `}if(x==="image"){const{image:t,title:e}=h||{};return t?`
      <div class="lightbox-backdrop" data-action="close-modal">
        <img src="${t}" alt="${g(e||"Task photo")}" />
        <button type="button" class="ghost-btn compact lightbox-close" data-action="close-modal">✕ Close</button>
      </div>
    `:""}return""}function k(){if(Ht){Zt();try{const t=u.isLocked(f);Ht.innerHTML=`
    <div class="app-shell">
      <main class="screen active">
        ${L==="today"?pa():""}
        ${L==="profile"?ma():""}
        ${L==="history"?va():""}
        ${L==="habits"?xa():""}
        ${L==="settings"?Oa():""}
      </main>
      ${["today","habits"].includes(L)&&!t?'<button class="fab" data-action="open-add" aria-label="Add">+</button>':""}
      ${L==="settings"?'<button class="fab" data-action="open-add-habit" aria-label="Add habit">+</button>':""}
      <nav class="tabbar tabs-5">
        <button class="tab ${L==="today"?"active":""}" data-screen="today">${R("home")}Today</button>
        <button class="tab ${L==="profile"?"active":""}" data-screen="profile">${R("profile")}Profile</button>
        <button class="tab ${L==="history"?"active":""}" data-screen="history">${R("history")}History</button>
        <button class="tab ${L==="habits"?"active":""}" data-screen="habits">${R("habit")}Activities</button>
        <button class="tab ${L==="settings"?"active":""}" data-screen="settings">${R("settings")}Settings</button>
      </nav>
    </div>
    ${qa()}
    <div class="toast" id="toast"></div>
  `,_a(),ga(),Ua(),Fe(),Wa()}catch(t){const e=t&&t.stack?String(t.stack).slice(0,400):t&&t.message?t.message:"Unknown error";Ht.innerHTML=`<div class="app-shell"><section class="manage-card"><h2>Could not load (Error B)</h2><p class="muted tight">${g(e)}</p><button class="primary-btn full" data-action="reload-app">Reload</button></section></div>`}}}function Wa(){if(x!=="habit"&&x!=="task")return;const t=document.querySelector(".sheet");t&&(t.scrollTop=0);const e=document.querySelector('.sheet input[name="title"]');if(e)try{e.focus({preventScroll:!0})}catch{try{e.focus()}catch{}}}function _a(){const t=document.getElementById("day-note");t&&t.addEventListener("input",()=>{u.isLocked(f)||u.setNote(f,t.value)})}function Ua(){const t=document.getElementById("lock-time"),e=document.getElementById("auto-lock");t&&t.addEventListener("change",()=>{u.setLockTime(t.value),b(`Lock time set to ${t.value}`),k()}),e&&e.addEventListener("change",()=>{u.setAutoLock(e.checked),b(e.checked?"Auto-lock on":"Auto-lock off"),k()}),document.querySelectorAll("[data-cat-color]").forEach(i=>{i.addEventListener("input",()=>{var n;u.updateCategory(i.dataset.catColor,{color:i.value});const s=(n=i.closest(".cat-manage-card"))==null?void 0:n.querySelector(".cat-swatch");s&&(s.style.background=i.value)})}),document.querySelectorAll("[data-cat-goals]").forEach(i=>{i.addEventListener("input",()=>{u.updateCategory(i.dataset.catGoals,{goals:i.value});const s=i.closest(".cat-manage-card"),n=s==null?void 0:s.querySelector(".cat-goal-flag");n&&(i.value.trim()?n.textContent="goals":n.remove())})});const a=document.getElementById("backup-file");a&&a.addEventListener("change",()=>{const i=a.files[0];if(!i)return;const s=new FileReader;s.onload=()=>{Oe(String(s.result||""),i.name),a.value=""},s.onerror=()=>{b("Couldn't read that file."),a.value=""},s.readAsText(i)})}function b(t){const e=document.getElementById("toast");e&&(e.textContent=t,e.classList.add("show"),setTimeout(()=>e.classList.remove("show"),1800))}function qe(){const t=u.getTheme();document.documentElement.dataset.theme=t;const e=document.querySelector('meta[name="theme-color"]');e&&(e.content=t==="light"?"#f3f1ea":"#0e1116")}function g(t){return String(t||"").split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;").split('"').join("&quot;")}function O(){return u.isLocked(f)?(b("This report is locked. Unlock it in Settings."),!0):!1}function ae(t){return{mode:(t==null?void 0:t.mode)||"forever",until:(t==null?void 0:t.until)||"",weekdays:Array.isArray(t==null?void 0:t.weekdays)?t.weekdays.map(Number):[],monthDays:Array.isArray(t==null?void 0:t.monthDays)?t.monthDays.map(Number):[],yearDays:Array.isArray(t==null?void 0:t.yearDays)?[...t.yearDays]:[],customDates:Array.isArray(t==null?void 0:t.customDates)?[...t.customDates]:[],exceptDates:Array.isArray(t==null?void 0:t.exceptDates)?[...t.exceptDates]:Array.isArray(t==null?void 0:t.exceptions)?[...t.exceptions]:[]}}function za(t){const e=u.findHabit(t);e&&(x="pin",h={kind:"habit",id:t,title:e.name,pin:e.pin?ae(e.pin):{mode:"forever",until:"",weekdays:[],monthDays:[],yearDays:[],customDates:[],exceptDates:[]},_exceptCal:M(f),_customCal:M(f),_yearMonth:"01"})}function Ya(t){const e=u.findTask(f,t);if(!e)return;const a=e.sourcePinId?u.findPinnedTask(e.sourcePinId):null;x="pin",h={kind:"task",id:t,title:e.title,pin:a!=null&&a.pin?ae(a.pin):{mode:"forever",until:"",weekdays:[],monthDays:[],yearDays:[],customDates:[],exceptDates:[]},_exceptCal:M(f),_customCal:M(f),_yearMonth:"01"}}function Va(t){const e=u.findPinnedTask(t);e&&(x="pin",h={kind:"template",id:t,title:e.title,pin:e.pin?ae(e.pin):{mode:"forever",until:"",weekdays:[],monthDays:[],yearDays:[],customDates:[],exceptDates:[]},_exceptCal:M(f),_customCal:M(f),_yearMonth:"01"})}function Ja(t){var c;const e=t.querySelector('input[name="mode"]').value,a=((c=t.querySelector('input[name="until"]'))==null?void 0:c.value)||"",i=[...t.querySelectorAll(".weekday.on")].map(p=>Number(p.dataset.day)),s=[...t.querySelectorAll(".monthday.on")].map(p=>Number(p.dataset.day)),n=h&&h.pin||{},o=Array.isArray(n.yearDays)?n.yearDays:[],r=Array.isArray(n.customDates)?n.customDates:[],d=Array.isArray(n.exceptDates)?n.exceptDates:[];return e==="until"&&!a?(b("Pick an until date"),null):e==="weekly"&&!i.length?(b("Pick at least one weekday"),null):e==="monthly"&&!s.length?(b("Pick at least one day of month"),null):e==="yearly"&&!o.length?(b("Add at least one yearly date"),null):e==="custom"&&!r.length?(b("Pick at least one custom date"),null):{mode:e,until:a,weekdays:i,monthDays:s,yearDays:o,customDates:r,exceptDates:d}}function dt(t,e,a){const i=e instanceof Blob?e:new Blob([e],{type:a||"text/plain;charset=utf-8"}),s=URL.createObjectURL(i),n=document.createElement("a");n.href=s,n.download=t,document.body.appendChild(n),n.click(),setTimeout(()=>{document.body.removeChild(n),URL.revokeObjectURL(s)},500)}function lt(t){const e=String(t??"");return/[",\n]/.test(e)?`"${e.replace(/"/g,'""')}"`:e}function ie(t,e){const[a,i]=u.resolveRange(t,e||f);return{range:t,start:a,end:i,rows:u.exportRows(a,i)}}function ve(t,e){const a=t||h&&h.range||"day",{start:i,end:s,rows:n}=ie(a,e),o=[];o.push(["Daily Report export",`${i} to ${s}`].map(lt).join(",")),o.push(["Date","Type","Name","Category","Tags","Points","Rating","Earned","ConsciousPts","Status","Note/Description"].map(lt).join(",")),n.forEach(r=>{r.habits.forEach(d=>{o.push([r.date,"Habit",d.name,d.category,(d.tags||[]).join("|"),d.points,d.rating,d.earned,d.consciousPoints,d.status||(d.rating>0?"done":r.locked?"missed":"pending"),d.description||""].map(lt).join(","))}),r.tasks.forEach(d=>{o.push([r.date,"Task",d.hasImage?`${d.title} [photo]`:d.title,d.category,(d.tags||[]).join("|"),d.points,d.rating||"",d.earned,"",d.status||(d.done?"done":r.locked?"missed":"pending"),d.description||""].map(lt).join(","))}),o.push([r.date,"Summary",`Earned ${r.earned}/${r.max} (${r.percent}%)`,"","","","","","",r.locked?"locked":"open",r.note||""].map(lt).join(","))}),dt(`daily-report-${a}-${i}-to-${s}.csv`,"\uFEFF"+o.join(`
`),"text/csv;charset=utf-8"),b("Excel (CSV) exported")}function ke(t,e){const a=t||h&&h.range||"day",{start:i,end:s,rows:n}=ie(a,e),o={app:"Daily Report",exportedAt:new Date().toISOString(),range:a,start:i,end:s,days:n};dt(`daily-report-${a}-${i}-to-${s}.json`,JSON.stringify(o,null,2),"application/json"),b("JSON exported")}function $e(t,e){const a=t||h&&h.range||"day",{start:i,end:s,rows:n}=ie(a,e),o=n.map(d=>`
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
      `).join(""),r=window.open("","_blank");if(!r){b("Popup blocked — allow popups to export PDF");return}r.document.write(`<!DOCTYPE html><html><head><title>Daily Report ${i} to ${s}</title></head><body style="font-family:sans-serif;padding:24px"><h1>Daily Report — ${i} to ${s}</h1>${o}<script>window.onload=function(){window.print()}<\/script></body></html>`),r.document.close(),b("PDF print view opened")}document.addEventListener("click",t=>{const e=t.target.closest("[data-screen]");if(e){L=e.dataset.screen,k();return}const a=t.target.closest("[data-action]");if(!a)return;const i=a.dataset.action;if(i==="close-modal"){if(x==="image"){x=null,h=null,k();return}(t.target.classList.contains("modal-backdrop")||a.classList.contains("ghost-btn"))&&(x=null,h=null,k());return}if(i==="note-bullets"){ge("bullets");return}if(i==="note-numbered"){ge("numbered");return}if(i==="pick-task-image"){const s=document.getElementById("task-image-input");s?s.click():b("Photo picking needs a browser file picker");return}if(i==="remove-task-image"){h&&(h._image="",k(),b("Photo removed — save to apply"));return}if(i==="view-task-image"){const s=u.findTask(f,a.dataset.id),n=s&&s.image?s.image:h&&(h._image||h.image)||"";if(!n){b("No photo on this task");return}x="image",h={image:n,title:s&&s.title||"Task photo"},k();return}if(i==="prev-day"&&ue(-1),i==="next-day"&&ue(1),i==="reload-app"){window.location.reload();return}if(i==="set-theme"){const s=a.dataset.theme==="light"?"light":"dark";u.setTheme(s),qe(),b(s==="light"?"Light mode on":"Dark mode on")}if(i==="install-app"){ja();return}if(i==="check-updates"){Fa();return}if(i==="apply-update"){Ge();return}if(i==="backup-now"){Ha();return}if(i==="trigger-import"){const s=document.getElementById("backup-file");s&&s.click();return}if(i==="choose-folder"){La();return}if(i==="grant-folder"){Ma();return}if(i==="forget-folder"){Na();return}if(i==="restore-backup"){Ra(a.dataset.name);return}if(i==="goto-settings"&&(L="settings"),i==="open-add-habit"&&(x="habit",h=null),i==="open-add-task"){if(O())return;x="task",h={category:"mentally"}}if(i==="open-add"){if(O())return;x="choose",h={category:"mentally"}}if(i==="toggle-edit"&&(K=!K),i==="open-edit-habit"){const s=u.findHabit(a.dataset.id);if(!s)return;x="edit-habit",h={id:s.id,name:s.name,description:s.description||"",points:s.points,category:s.category,tags:s.tags||[],consciousPoints:Number(s.consciousPoints)||0}}if(i==="open-edit-task"){if(O())return;const s=u.findTask(f,a.dataset.id);if(!s)return;x="edit-task",h={id:s.id,title:s.title,points:s.points,description:s.description,category:s.category,tags:s.tags||[],rating:Number(s.rating)||0,image:s.image||"",_image:void 0}}if(i==="toggle-badges"&&(St=!St),i==="open-goal"&&(x="goal",h={kind:"habit-streak",targetDays:7,tier:"bronze"}),i==="open-edit-goal"){const s=u.getGoals().find(n=>n.id===a.dataset.id);if(!s)return;x="edit-goal",h={...s}}if(i==="remove-goal"&&(u.removeGoal(a.dataset.id),b("Goal removed")),i==="remove-badge"&&(u.removeBadge(a.dataset.id),b("Badge removed")),i==="rate-habit"){if(O())return;const n=u.habitRating(f,a.dataset.id)===Number(a.dataset.rating)?0:Number(a.dataset.rating);u.setHabitRating(f,a.dataset.id,n)}if(i==="rate-task"){if(O())return;const s=u.findTask(f,a.dataset.id);if(!s)return;const o=(Number(s.rating)||0)===Number(a.dataset.rating)?0:Number(a.dataset.rating);u.setTaskRating(f,a.dataset.id,o)}if(i==="open-export"&&(x="export",h={range:h&&h.range||"day"}),i==="set-export-range"){x="export",h={range:a.dataset.range||"day"},k();return}if(i==="do-export"){const s=a.dataset.format,n=h&&h.range||"day";s==="csv"&&ve(n,f),s==="json"&&ke(n,f),s==="pdf"&&$e(n,f),x=null,h=null}if(i==="set-histexp-range"){I=["day","week","month","year"].includes(a.dataset.range)?a.dataset.range:"day",k();return}if(i==="histexp-do"){const s=a.dataset.format;let n=f;if(I==="day"||I==="week"){const o=document.getElementById("histexp-date");o&&/^\d{4}-\d{2}-\d{2}$/.test(o.value)&&(n=o.value)}else if(I==="month"){const o=document.getElementById("histexp-month");o&&/^\d{4}-\d{2}$/.test(o.value)&&(n=`${o.value}-15`)}else if(I==="year"){const o=document.getElementById("histexp-year"),r=Number(o&&o.value);Number.isInteger(r)&&r>=2e3&&r<=2100&&(n=`${String(r)}-06-15`)}s==="csv"&&ve(I,n),s==="json"&&ke(I,n),s==="pdf"&&$e(I,n);return}if(i==="history-cal-nav"){const s=xt||M(f);xt=mt(s,Number(a.dataset.dir)||0),k();return}if(i==="locked-cal-nav"){const s=At||M(f);At=mt(s,Number(a.dataset.dir)||0),k();return}if(i==="toggle-locked-day"){const s=a.dataset.date,n=N.indexOf(s);n>=0?N.splice(n,1):N.push(s),k();return}if(i==="lock-selected"){const s=[...N].sort();if(!s.length)return;const n=u.lockDays(s);N=[],b(n===1?`Locked ${n} day`:`Locked ${n} days`),k();return}if(i==="unlock-selected"){const s=[...N].sort();if(!s.length)return;const n=u.unlockDays(s);N=[],b(n===1?`Unlocked ${n} day`:`Unlocked ${n} days`),k();return}if(i==="submit-day"&&(u.submitDay(f),b("Report submitted and locked")),i==="unlock-day"&&(u.unlockDay(a.dataset.date),b("Report unlocked")),i==="toggle-habit"){if(O())return;u.toggleHabit(f,a.dataset.id)}if(i==="toggle-task"){if(O())return;u.toggleTask(f,a.dataset.id)}if(i==="remove-task"){if(O())return;u.removeTask(f,a.dataset.id)}if(i==="remove-habit"&&u.removeHabit(a.dataset.id),i==="restore-habit"){const s=u.restoreHabit(a.dataset.id);b(s.ok?"Habit restored":s.reason||"Could not restore that habit")}if(i==="open-pin-habit"&&za(a.dataset.id),i==="open-forward-habit"){if(O())return;const s=u.findHabit(a.dataset.id);if(!s)return;x="forward",h={kind:"habit",id:s.id,title:s.name,from:f}}if(i==="open-forward-task"){if(O())return;const s=u.findTask(f,a.dataset.id);if(!s)return;x="forward",h={kind:"task",id:s.id,title:s.title,from:f}}if(i==="open-pin-task"){if(O())return;Ya(a.dataset.id)}if(i==="open-pin-template"&&Va(a.dataset.id),i==="unpin-template"&&(u.unpinTaskTemplate(a.dataset.id),b("Task unpinned")),i==="pick-date"&&(f=a.dataset.date,L="today"),i==="set-chart-range"){G=["week","month","year"].includes(a.dataset.range)?a.dataset.range:"week",J=0,k();return}if(i==="chart-nav"){J+=Number(a.dataset.dir)||0,J>0&&(J=0),k();return}if(i==="add-category"){const s=document.getElementById("new-category"),n=u.addCategory(s?s.value:"");b(n.ok?"Category added":n.reason||"Couldn't add category"),k();return}if(i==="rename-category"){const s=u.getCustomCategories().find(r=>r.id===a.dataset.id),n=window.prompt("Rename category",s?s.label:"");if(n==null)return;const o=u.renameCategory(a.dataset.id,n);b(o.ok?"Category renamed":o.reason||"Couldn't rename"),k();return}if(i==="delete-category"){if(!window.confirm("Delete this category? Its habits and tasks move to Mentally."))return;const s=u.deleteCategory(a.dataset.id);s.ok&&et.delete(a.dataset.id),b(s.ok?"Category deleted":s.reason||"Couldn't delete"),k();return}if(i==="rename-tag"){const s=window.prompt("Rename tag everywhere",a.dataset.tag||"");if(s==null)return;const n=u.renameTag(a.dataset.tag,s);b(n.ok?n.merged?"Tags merged":"Tag renamed everywhere":n.reason||"Couldn't rename"),k();return}if(i==="delete-tag"){if(!window.confirm(`Delete tag "#${a.dataset.tag}" from all habits and tasks?`))return;u.deleteTag(a.dataset.tag),b("Tag deleted everywhere"),k();return}if(i==="add-tag"){const s=document.getElementById("tag-habit-pick"),n=document.getElementById("new-tag"),o=u.addTagToHabit(s?s.value:"",n?n.value:"");b(o.ok?"Tag added to habit":o.reason||"Couldn't add tag"),k();return}if(i==="set-points"){const s=document.querySelector('input[name="points"]');s&&(s.value=a.dataset.points),document.querySelectorAll(".chip-row .chip[data-points]").forEach(n=>n.classList.remove("on")),a.classList.add("on");return}if(i==="set-category"){const s=a.closest("form")||a.closest(".sheet"),n=s.querySelector('input[name="category"]');n&&(n.value=a.dataset.category),s.querySelectorAll(".cat-row .chip").forEach(o=>o.classList.remove("on")),a.classList.add("on");return}if(i==="set-rating"){const s=a.closest(".sheet")||a.closest("form")||document,n=s.querySelector('input[name="rating"]');n&&(n.value=a.dataset.rating),s.querySelectorAll(".rating-row .chip").forEach(o=>o.classList.remove("on")),a.classList.add("on");return}if(i==="set-conscious"){const s=a.closest(".sheet")||a.closest("form")||document,n=s.querySelector('input[name="consciousPoints"]');n&&(n.value=a.dataset.conscious),s.querySelectorAll(".conscious-row .chip").forEach(o=>o.classList.remove("on")),a.classList.add("on");return}if(i==="set-goal-kind"){const s=a.closest(".sheet")||document,n=s.querySelector('input[name="kind"]');n&&(n.value=a.dataset.kind),s.querySelectorAll(".goal-kind-row .chip").forEach(c=>c.classList.remove("on")),a.classList.add("on");const o=a.dataset.kind,r=s.querySelector(".goal-target-habit"),d=s.querySelector(".goal-target-task");r&&(r.style.display=o==="habit-streak"?"":"none"),d&&(d.style.display=o==="task-streak"?"":"none"),h&&(h.kind=o);return}if(i==="set-goal-tier"){const s=a.closest(".sheet")||document,n=s.querySelector('input[name="tier"]');n&&(n.value=a.dataset.tier),s.querySelectorAll(".goal-tier-row .chip").forEach(o=>o.classList.remove("on")),a.classList.add("on");return}if(i==="pin-mode"){const s=a.closest("form"),n=a.dataset.mode;s.querySelector('input[name="mode"]').value=n,s.querySelectorAll(".pin-modes .chip").forEach(r=>r.classList.remove("on")),a.classList.add("on");const o=(r,d)=>{const c=s.querySelector(r);c&&(c.style.display=d?"":"none")};o(".pin-until",n==="until"),o(".pin-weekdays",n==="weekly"),o(".pin-monthdays",n==="monthly"),o(".pin-yeardays",n==="yearly"),h&&h.pin&&(h.pin.mode=n);return}if(i==="toggle-weekday"){a.classList.toggle("on");return}if(i==="toggle-monthday"){a.classList.toggle("on");return}if(i==="pin-cal-nav"){if(!h)return;const s=a.dataset.target,n=Number(a.dataset.dir)||0;s==="except"?h._exceptCal=mt(h._exceptCal||M(f),n):h._customCal=mt(h._customCal||M(f),n),k();return}if(i==="toggle-pin-date"){if(!h||!h.pin)return;const s=a.dataset.target,n=a.dataset.date,o=s==="custom"?"customDates":"exceptDates",r=Array.isArray(h.pin[o])?[...h.pin[o]]:[],d=r.indexOf(n);d>=0?r.splice(d,1):(r.push(n),r.length>365&&r.shift()),h.pin[o]=r.sort(),k();return}if(i==="add-year-day"){if(!h||!h.pin)return;const s=a.closest("form")||document,n=s.querySelector("#year-month-select"),o=s.querySelector("#year-day-select");n&&(h._yearMonth=n.value);const r=`${n?n.value:"01"}-${o?o.value:"01"}`,d=Array.isArray(h.pin.yearDays)?[...h.pin.yearDays]:[];d.includes(r)||d.push(r),h.pin.yearDays=d.sort(),k();return}if(i==="remove-year-day"){if(!h||!h.pin)return;const s=a.dataset.date;h.pin.yearDays=(h.pin.yearDays||[]).filter(n=>n!==s),k();return}if(i==="clear-pin"){const s=a.closest("form"),n=s.dataset.kind,o=s.dataset.id;if(n==="habit"&&u.unpinHabit(o),n==="task"){const r=u.findTask(f,o);r!=null&&r.sourcePinId&&u.unpinTaskTemplate(r.sourcePinId)}n==="template"&&u.unpinTaskTemplate(o),x=null,h=null,b("Unpinned"),k();return}if(i==="lock-profile"){u.setProfileLocked(!0),b("Profile locked — read only"),k();return}if(i==="unlock-profile"){u.setProfileLocked(!1),b("Profile unlocked"),k();return}if(i==="add-whoami"){const s=document.getElementById("new-whoami"),n=u.addWhoAmI(s?s.value:"");b(n.ok?"Added":n.reason||"Couldn't add"),k();return}if(i==="move-whoami"){u.moveWhoAmI(a.dataset.id,Number(a.dataset.dir)||0),k();return}if(i==="remove-whoami"){u.removeWhoAmI(a.dataset.id),b("Removed"),k();return}if(i==="add-lifearea"){const s=document.getElementById("new-lifearea"),n=u.addLifeArea(s?s.value:"");n.ok?(st=n.id,b("Life area added")):b(n.reason||"Couldn't add"),k();return}if(i==="toggle-lifearea"){const s=a.dataset.id;st=st===s?null:s,k();return}if(i==="toggle-cat"){const s=a.dataset.id;et.has(s)?et.delete(s):et.add(s),k();const n=document.querySelector(`[data-action="toggle-cat"][data-id="${CSS.escape(s)}"]`);n&&n.focus({preventScroll:!0});return}if(i==="expand-cats"){u.getCategories().forEach(s=>et.add(s.id)),k();return}if(i==="collapse-cats"){et.clear(),k();return}if(i==="remove-lifearea"){u.removeLifeArea(a.dataset.id),st===a.dataset.id&&(st=null),b("Life area removed"),k();return}if(i==="set-pgoal-term"){z=["short","medium","long"].includes(a.dataset.term)?a.dataset.term:"short",rt=u.profileGoalDurations()[z][0],k();return}if(i==="set-pgoal-filter"){kt=["all","short","medium","long"].includes(a.dataset.filter)?a.dataset.filter:"all",k();return}if(i==="add-pgoal"){const s=document.getElementById("new-pgoal"),n=document.getElementById("new-pgoal-duration"),o=u.addProfileGoal(s?s.value:"",z,n?n.value:rt);b(o.ok?`Goal added ${$t(z)}`:o.reason||"Couldn't add"),k();return}if(i==="remove-pgoal"){u.removeProfileGoal(a.dataset.id),b("Goal removed"),k();return}if(i==="add-quote"){const s=document.getElementById("new-quote"),n=document.getElementById("new-quote-author"),o=u.addQuote(s?s.value:"",n?n.value:"");b(o.ok?"Quote added":o.reason||"Couldn't add"),k();return}if(i==="toggle-quote-fav"){u.toggleQuoteFav(a.dataset.id),k();return}if(i==="remove-quote"){u.removeQuote(a.dataset.id),b("Quote removed"),k();return}if(i==="toggle-quotes"){ht=!ht,k();return}k()});document.addEventListener("submit",t=>{const e=t.target.closest("[data-form]");if(!e)return;t.preventDefault();const a=e.dataset.form;if(a==="habit"||a==="task"||a==="edit-habit"||a==="edit-task"){const i=new FormData(e),s=String(i.get("title")||""),n=Number(i.get("points")||0),o=String(i.get("category")||"mentally"),r=String(i.get("description")||""),d=String(i.get("tags")||""),c=Math.max(0,Math.min(5,Number(i.get("rating")||0))),p=Math.max(0,Math.min(100,Number(i.get("consciousPoints")||0)));if(!s.trim())return;const S=h&&h._image!==void 0?V(h._image):V(h&&h.image);if(a==="habit")u.addHabit(s,n,{description:r,category:o,consciousPoints:p,tags:d}),b("Habit added");else if(a==="task"){if(O())return;u.addTask(f,s,n,{description:r,category:o,rating:c,tags:d,image:S}),b("Task added")}else if(a==="edit-habit")u.updateHabit(e.dataset.id,{name:s,description:r,points:n,category:o,consciousPoints:p,tags:d}),b("Habit updated");else{if(O())return;u.updateTask(f,e.dataset.id,{title:s,points:n,description:r,category:o,rating:c,tags:d,image:S}),b("Task updated")}x=null,h=null,k();return}if(a==="pin"){const i=Ja(e);if(!i)return;const s=e.dataset.kind,n=e.dataset.id;s==="habit"&&u.pinHabit(n,i),s==="task"&&u.pinTask(f,n,i),s==="template"&&u.updatePinnedTask(n,i),x=null,h=null,b("Pin saved"),k();return}if(a==="forward"){const i=new FormData(e),s=String(i.get("targetDate")||""),n=e.dataset.kind,o=e.dataset.id,r=h&&h.from||f;if(!/^\d{4}-\d{2}-\d{2}$/.test(s)){b("Pick a valid date");return}const d=n==="habit"?u.forwardHabit(r,o,s):u.forwardTask(r,o,s);if(!d.ok){b(d.reason||"Could not forward");return}x=null,h=null,f=s,L="today",b(`Forwarded to ${s}`),k();return}if(a==="goal"||a==="edit-goal"){const i=new FormData(e),s=String(i.get("title")||"").trim(),n=String(i.get("kind")||"habit-streak"),o=String(i.get("tier")||"bronze"),r=String(i.get("rewardTitle")||"").trim(),d=Math.max(1,Math.min(365,Number(i.get("targetDays")||7)));if(!s||!r){b("Goal title and reward title are required");return}let c="";if(n==="habit-streak"&&(c=String(i.get("habitTarget")||"")),n==="task-streak"&&(c=String(i.get("taskTarget")||"")),(n==="habit-streak"||n==="task-streak")&&!c){b(n==="habit-streak"?"Pick a habit":"Pin a task first, then pick it");return}a==="goal"?(u.addGoal({title:s,kind:n,targetId:c,targetDays:d,tier:o,rewardTitle:r}),b("Goal added")):(u.updateGoal(e.dataset.id,{title:s,kind:n,targetId:c,targetDays:d,tier:o,rewardTitle:r}),b("Goal updated"));const p=u.checkGoals(f);p.length&&b(`🏅 Reward earned: ${p[0].rewardTitle}!`),x=null,h=null,k()}});document.addEventListener("change",t=>{const e=t.target.closest(".sort-select");if(e){const a=e.dataset.sortKind;a==="habit"&&u.setHabitSort(e.value),a==="task"&&u.setTaskSort(e.value),k()}if(t.target&&t.target.id==="show-conscious"&&(u.setShowConscious(t.target.checked),b(t.target.checked?"Conscious points on":"Conscious points hidden"),k()),t.target&&t.target.id==="week-start"&&(u.setWeekStart(Number(t.target.value)),b("Week starts on "+t.target.selectedOptions[0].textContent),k()),t.target&&t.target.id==="new-pgoal-duration"){rt=t.target.value;return}if(t.target&&t.target.id==="year-month-select"&&h&&(h._yearMonth=t.target.value),t.target&&t.target.id==="task-image-input"){const a=t.target.files&&t.target.files[0];if(!a)return;if(!String(a.type||"").startsWith("image/")){b("Please pick an image file"),t.target.value="";return}b("Processing photo…"),da(a).then(i=>{if(t.target.value="",!i){b("Photo too large or unreadable — try a smaller one");return}h&&(h._image=i,k(),b("Photo attached — save to apply"))})}});if("serviceWorker"in navigator){window.addEventListener("load",()=>{navigator.serviceWorker.register("./sw.js").catch(()=>{})});let t=!1;try{sessionStorage.getItem("dr-updated-reload")&&(t=!0)}catch{}navigator.serviceWorker.addEventListener("controllerchange",()=>{if(!t){t=!0;try{sessionStorage.setItem("dr-updated-reload","1")}catch{}window.location.reload()}})}function Qa(){const t=document.getElementById("boot-error");t&&(t.style.display="none")}Qa();qe();k();Pa().then(()=>{L==="settings"&&k()});setInterval(()=>{!document.hidden&&Zt()&&k()},6e4);document.addEventListener("visibilitychange",()=>{!document.hidden&&Zt()&&k()});
