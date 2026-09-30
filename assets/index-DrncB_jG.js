(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function a(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=a(s);fetch(s.href,n)}})();const ke="daily-report-v2",Pt=[{id:"mentally",label:"Mentally"},{id:"psychology",label:"Psychology"},{id:"physically",label:"Physically"},{id:"spiritually",label:"Spiritually"},{id:"socially",label:"Socially"}];Pt.map(t=>t.id);const $e=[{id:"h1",name:"Wake up early",points:10,icon:"sunrise",category:"physically",pin:{mode:"forever"}},{id:"h2",name:"Drink water",points:5,icon:"drop",category:"physically",pin:{mode:"forever"}},{id:"h3",name:"Exercise",points:15,icon:"bolt",category:"physically",pin:{mode:"forever"}},{id:"h4",name:"Read 20 minutes",points:10,icon:"book",category:"mentally",pin:{mode:"forever"}},{id:"h5",name:"No junk food",points:10,icon:"leaf",category:"physically",pin:{mode:"forever"}}],we={lockTime:"21:00",autoLock:!0,showConscious:!0,habitSort:"default",taskSort:"default",theme:"dark",weekStart:1};function jt(t){const e=Number(t);return Number.isInteger(e)&&e>=0&&e<=6?e:1}const ht=[{id:"iron",label:"Iron",medal:"ðŸ¥‰",rank:1},{id:"bronze",label:"Bronze",medal:"ðŸ¥‰",rank:2},{id:"silver",label:"Silver",medal:"ðŸ¥ˆ",rank:3},{id:"gold",label:"Gold",medal:"ðŸ¥‡",rank:4}],Se=[{id:"habit-streak",label:"Habit streak"},{id:"task-streak",label:"Pinned task streak"},{id:"perfect-days",label:"Perfect days (100%)"}];function ae(t){var e;return((e=ht.find(a=>a.id===t))==null?void 0:e.rank)||0}function Ht(t){var e;return((e=ht.find(a=>a.id===t))==null?void 0:e.medal)||"ðŸ…"}function xe(t){var e;return((e=ht.find(a=>a.id===t))==null?void 0:e.label)||t||"Badge"}function T(t){const e=Array.isArray(t)?t:String(t||"").split(","),a=[];return e.forEach(i=>{const s=String(i||"").trim().slice(0,20);s&&!a.some(n=>n.toLowerCase()===s.toLowerCase())&&a.push(s),a.length>=10}),a.slice(0,10)}function Nt(t,e){const a=[...t];return e==="points"?a.sort((i,s)=>(Number(s.points)||0)-(Number(i.points)||0)):e==="category"?a.sort((i,s)=>ft(P(i.category)).localeCompare(ft(P(s.category)))):e==="tags"&&a.sort((i,s)=>(i.tags&&i.tags[0]||"~~~").localeCompare(s.tags&&s.tags[0]||"~~~")),a}const at=[{value:1,label:"Mon"},{value:2,label:"Tue"},{value:3,label:"Wed"},{value:4,label:"Thu"},{value:5,label:"Fri"},{value:6,label:"Sat"},{value:0,label:"Sun"}];function q(t=new Date){const e=t.getFullYear(),a=String(t.getMonth()+1).padStart(2,"0"),i=String(t.getDate()).padStart(2,"0");return`${e}-${a}-${i}`}function Vt(){return{habits:{},habitRatings:{},habitMissed:{},habitForwarded:{},tasks:[],note:"",locked:!1,lockOverride:null,submittedAt:null,lockedHabits:null}}var I=[];function z(){return[...Pt,...I]}function P(t){return z().map(a=>a.id).includes(t)?t:"mentally"}function ft(t){var e;return((e=z().find(a=>a.id===t))==null?void 0:e.label)||"Mentally"}const yt=7e5;function V(t){const e=String(t||"");return e.startsWith("data:image/")?e.length>yt?"":e:""}function ie(t){const e=Math.max(0,Math.min(5,Number(t.rating)||0)),a=s=>/^\d{4}-\d{2}-\d{2}$/.test(String(s||""))?String(s):"",i=s=>Array.isArray(s)?s.filter(n=>/^\d{4}-\d{2}-\d{2}$/.test(String(n))).map(String).slice(0,50):[];return{...t,description:t.description||"",category:P(t.category),tags:T(t.tags),rating:e,done:!!t.done,missed:!!t.missed,forwardedFrom:a(t.forwardedFrom),forwardedHabitId:String(t.forwardedHabitId||""),forwardedTo:i(t.forwardedTo),image:V(t.image)}}function O(t){const e=Number(t);return!Number.isFinite(e)||e<0?0:Math.min(100,Math.round(e))}function Y(t){if(!t||!t.mode)return null;const e=(s,n,o)=>Array.isArray(s)?s.map(Number).filter(r=>Number.isFinite(r)&&r>=n&&r<=o):[],a=s=>Array.isArray(s)?s.filter(n=>/^\d{4}-\d{2}-\d{2}$/.test(String(n))).map(String).slice(0,365):[],i=s=>Array.isArray(s)?s.filter(n=>/^\d{2}-\d{2}$/.test(String(n))).map(String).slice(0,366):[];return{mode:["forever","until","weekly","monthly","yearly","custom"].includes(t.mode)?t.mode:"forever",until:t.until||"",weekdays:e(t.weekdays,0,6),monthDays:e(t.monthDays,1,31),yearDays:i(t.yearDays),customDates:a(t.customDates),exceptDates:a(t.exceptDates||t.exceptions)}}function Oe(t,e){const a=`${t} ${e}`.toLowerCase();return a.includes("read")||a.includes("study")||a.includes("learn")?"mentally":a.includes("meditat")||a.includes("pray")||a.includes("journal")?"spiritually":a.includes("mood")||a.includes("calm")||a.includes("therapy")?"psychology":a.includes("friend")||a.includes("family")||a.includes("social")||a.includes("call")||a.includes("visit")?"socially":"physically"}function Bt(t){const e=Se.some(a=>a.id===t.kind)?t.kind:"habit-streak";return{id:String(t.id||`g${Date.now()}`),title:String(t.title||"").trim().slice(0,60)||"My goal",kind:e,targetId:String(t.targetId||""),targetDays:Math.max(1,Math.min(365,Number(t.targetDays)||7)),tier:ht.some(a=>a.id===t.tier)?t.tier:"bronze",rewardTitle:String(t.rewardTitle||"").trim().slice(0,60)||"Reward",createdAt:t.createdAt||new Date().toISOString()}}function Ge(t){if(!Array.isArray(t))return[];const e=new Set(Pt.map(i=>i.id)),a=[];return t.forEach(i=>{if(!i||typeof i!="object")return;const s=String(i.id||"").trim().slice(0,40),n=String(i.label||"").trim().slice(0,30);!s||!n||e.has(s.toLowerCase())||(e.add(s.toLowerCase()),a.push({id:s,label:n,color:String(i.color||"").slice(0,20),goals:String(i.goals||"").slice(0,1e3)}))}),a.slice(0,20)}const Ft={name:80,wantToBe:1e3,vision:1e3,values:1e3},Ot=["short","medium","long"],ct={short:["1 Week","2 Weeks","3 Weeks","4 Weeks"],medium:["1 Month","2 Months","3 Months"],long:["1 Year","2 Years","3 Years","5 Years","10+ Years"]};function j(t){return`${t||"id"}${Date.now().toString(36)}${Math.floor(Math.random()*9999)}`}function We(t){return Array.isArray(t)?t.map(e=>{if(typeof e=="string")return{id:j("w"),text:e.trim().slice(0,120)};if(!e||typeof e!="object")return null;const a=String(e.text||e.label||e.name||"").trim().slice(0,120);return a?{id:String(e.id||j("w")),text:a}:null}).filter(Boolean).slice(0,50):[]}function _e(t){return typeof t=="string"?t.split(`
`).map(e=>e.trim().replace(/^[-â€¢*]\s+/,"")).filter(Boolean).slice(0,20).map(e=>({id:j("a"),title:e.slice(0,60),description:""})):Array.isArray(t)?t.map(e=>{if(typeof e=="string"){const i=e.trim().slice(0,60);return i?{id:j("a"),title:i,description:""}:null}if(!e||typeof e!="object")return null;const a=String(e.title||e.name||"").trim().slice(0,60);return a?{id:String(e.id||j("a")),title:a,description:String(e.description||"").slice(0,1e3)}:null}).filter(Boolean).slice(0,20):[]}function qe(t){return Array.isArray(t)?t.map(e=>{if(typeof e=="string"){const o=e.trim().slice(0,200);return o?{id:j("g"),text:o,term:"short",duration:"1 Week",createdAt:new Date().toISOString()}:null}if(!e||typeof e!="object")return null;const a=String(e.text||e.title||"").trim().slice(0,200);if(!a)return null;const i=Ot.includes(e.term)?e.term:"short",s=ct[i],n=s.includes(e.duration)?e.duration:s[0];return{id:String(e.id||j("g")),text:a,term:i,duration:n,createdAt:e.createdAt||new Date().toISOString()}}).filter(Boolean).slice(0,100):[]}function Ue(t){return Array.isArray(t)?t.map(e=>{if(typeof e=="string"){const i=e.trim().slice(0,500);return i?{id:j("q"),text:i,author:"",fav:!1,createdAt:new Date().toISOString()}:null}if(!e||typeof e!="object")return null;const a=String(e.text||e.quote||"").trim().slice(0,500);return a?{id:String(e.id||j("q")),text:a,author:String(e.author||"").trim().slice(0,80),fav:!!(e.fav||e.favorite),createdAt:e.createdAt||new Date().toISOString()}:null}).filter(Boolean).slice(0,200):[]}function pt(t){const e=t&&typeof t=="object"?t:{},a={};Object.entries(Ft).forEach(([s,n])=>{s==="wantToBe"&&!e.wantToBe&&e.about?a[s]=String(e.about||"").slice(0,n):a[s]=String(e[s]||"").slice(0,n)}),a.locked=!!e.locked,a.whoAmI=We(e.whoAmI||e.whoIAm||[]),a.lifeAreas=_e(Array.isArray(e.lifeAreas)||typeof e.lifeAreas=="string"?e.lifeAreas:[]);let i=qe(e.pGoals||e.goalsList||e.profileGoals||[]);return i.length||[["goalsShort","short","1 Week"],["goalsMid","medium","1 Month"],["goalsLong","long","1 Year"]].forEach(([n,o,r])=>{const d=String(e[n]||"");d.trim()&&d.split(`
`).map(c=>c.trim().replace(/^[-â€¢*]\s+/,"")).filter(Boolean).forEach(c=>{i.length>=100||i.push({id:j("g"),text:c.slice(0,200),term:o,duration:r,createdAt:new Date().toISOString()})})}),a.pGoals=i,a.quotes=Ue(e.quotes||e.favQuotes||[]),a}function ze(t,e){const a=String(t&&t.installedAt||"");if(/^\d{4}-\d{2}-\d{2}/.test(a))return a;const i=Object.keys(e||{}).sort();return i.length?`${i[0]}T00:00:00.000`:new Date().toISOString()}function Ae(t){I=Ge(t.customCategories||[]);const e=(Array.isArray(t.habits)&&t.habits.length?t.habits:$e).map(i=>({...i,description:String(i.description||"").slice(0,240),category:P(i.category||Oe(i.id,i.name)),consciousPoints:O(i.consciousPoints),tags:T(i.tags),pin:Y(i.pin)})),a={};return Object.entries(t.days||{}).forEach(([i,s])=>{a[i]={...Vt(),habits:s.habits||{},habitRatings:s.habitRatings||{},habitMissed:s.habitMissed||{},habitForwarded:s.habitForwarded&&typeof s.habitForwarded=="object"?s.habitForwarded:{},tasks:Array.isArray(s.tasks)?s.tasks.map(ie):[],note:s.note||"",locked:!!s.locked,lockOverride:s.lockOverride||(s.locked?"locked":null),submittedAt:s.submittedAt||null,lockedHabits:Array.isArray(s.lockedHabits)?s.lockedHabits:null}}),{habits:e,customCategories:I,installedAt:ze(t,a),profile:pt(t.profile),pinnedTasks:Array.isArray(t.pinnedTasks)?t.pinnedTasks.map(i=>({...ie(i),pin:Y(i.pin)})):[],days:a,goals:Array.isArray(t.goals)?t.goals.map(Bt):[],badges:Array.isArray(t.badges)?t.badges.filter(i=>i&&i.id&&i.goalId).map(i=>({id:String(i.id),goalId:String(i.goalId),title:String(i.title||""),tier:i.tier||"bronze",rewardTitle:String(i.rewardTitle||""),earnedAt:i.earnedAt||new Date().toISOString()})):[],settings:{lockTime:t.settings&&t.settings.lockTime||we.lockTime,autoLock:!t.settings||t.settings.autoLock!==!1,showConscious:!t.settings||t.settings.showConscious!==!1,habitSort:["default","points","category","tags"].includes(t.settings&&t.settings.habitSort)?t.settings.habitSort:"default",taskSort:["default","points","category","tags"].includes(t.settings&&t.settings.taskSort)?t.settings.taskSort:"default",theme:["light","dark"].includes(t.settings&&t.settings.theme)?t.settings.theme:"dark",weekStart:jt(t.settings&&t.settings.weekStart)}}}function se(){return{habits:$e.map(t=>({...t,description:"",tags:[]})),customCategories:[],installedAt:new Date().toISOString(),profile:pt({}),pinnedTasks:[],days:{},goals:[],badges:[],settings:{...we}}}function Ye(){try{const t=localStorage.getItem(ke)||localStorage.getItem("daily-report-v1");return t?Ae(JSON.parse(t)):se()}catch{return se()}}let u=Ye();I=u.customCategories||[];u.customCategories=I;let Te=0,Mt={key:null,value:null},Gt=0;function Jt(){return Gt>0}function Q(t){Gt+=1;try{return t()}finally{Gt-=1}}function $(){Te+=1;try{localStorage.setItem(ke,JSON.stringify(u))}catch{}}let ne=0;function tt(t){return ne+=1,`${t||"id"}${Date.now().toString(36)}${ne.toString(36)}${Math.floor(Math.random()*1296).toString(36)}`}function Ve(t){return new Date(`${t}T00:00:00`).getDay()}function rt(t){const e=new Date(`${t}T00:00:00`);return e.setDate(e.getDate()-1),q(e)}function kt(t,e){if(!t)return!0;if(Array.isArray(t.exceptDates)&&t.exceptDates.includes(e)||Array.isArray(t.exceptions)&&t.exceptions.includes(e))return!1;if((Array.isArray(t.customDates)?t.customDates:[]).includes(e)||t.mode==="forever")return!0;if(t.mode==="until")return!!t.until&&e<=t.until;if(t.mode==="weekly")return Array.isArray(t.weekdays)&&t.weekdays.includes(Ve(e));if(t.mode==="monthly"){const i=Array.isArray(t.monthDays)?t.monthDays.map(Number):[];return i.length?i.includes(Number(String(e).slice(8,10))):!0}if(t.mode==="yearly"){const i=Array.isArray(t.yearDays)?t.yearDays:[];return i.length?i.includes(String(e).slice(5,10)):!0}return t.mode!=="custom"}function $t(t){if(!t)return"Not pinned";const e=(t.exceptDates||t.exceptions||[]).length,a=e?` Â· â›” ${e} exception${e>1?"s":""}`:"",i=t.mode==="custom"?0:Array.isArray(t.customDates)?t.customDates.length:0,s=i?` +${i} custom`:"";if(t.mode==="forever")return`Pinned forever${s}${a}`;if(t.mode==="until")return`${t.until?`Pinned until ${t.until}`:"Pinned until a date"}${s}${a}`;if(t.mode==="weekly"){const n=Array.isArray(t.weekdays)?t.weekdays:[],o=at.filter(r=>n.includes(r.value)).map(r=>r.label);return`${o.length?`Weekly: ${o.join(", ")}`:"Weekly (no days)"}${s}${a}`}if(t.mode==="monthly"){const n=Array.isArray(t.monthDays)?t.monthDays:[];return`${n.length?`Monthly: day${n.length>1?"s":""} ${[...n].sort((o,r)=>o-r).join(", ")}`:"Monthly"}${s}${a}`}if(t.mode==="yearly"){const n=Array.isArray(t.yearDays)?t.yearDays:[];return`${n.length?`Yearly: ${[...n].sort().join(", ")}`:"Yearly"}${s}${a}`}if(t.mode==="custom"){const n=Array.isArray(t.customDates)?t.customDates:[];return`${n.length?`Custom: ${n.length} date${n.length>1?"s":""}`:"Custom dates"}${a}`}return"Pinned"}function Wt(t){const[e,a]=(u.settings.lockTime||"21:00").split(":").map(Number),i=new Date(`${t}T00:00:00`);return i.setHours(e||0,a||0,0,0),i}function De(t){const e=u.days[t];return e?e.lockOverride==="locked"||e.locked===!0:!1}function _t(t,e){const a=u.days[t];return a?a.habitRatings&&a.habitRatings[e]!=null?Number(a.habitRatings[e])||0:a.habits&&a.habits[e]?5:0:0}function Je(t,e){if(!t)return!1;if((t.habitRatings&&t.habitRatings[e]!=null?Number(t.habitRatings[e])||0:t.habits&&t.habits[e]?5:0)>0||t.habitMissed&&t.habitMissed[e])return!0;const i=t.habitForwarded&&t.habitForwarded[e];return Array.isArray(i)&&i.length>0}function qt(t){const e=C(t),a=u.habits.filter(i=>kt(i.pin,t));e.lockedHabits=a.map(i=>({id:i.id,name:i.name,description:String(i.description||"").slice(0,240),points:Number(i.points)||0,icon:i.icon||"star",category:P(i.category),consciousPoints:O(i.consciousPoints),tags:T(i.tags),pin:Y(i.pin)})),e.habitMissed={},a.forEach(i=>{_t(t,i.id)<=0&&(e.habitMissed[i.id]=!0)}),e.tasks.forEach(i=>{i.missed=!i.done})}function lt(t){const e=u.days[t];return!e||e.lockOverride==="unlocked"?!1:e.lockOverride==="locked"||e.locked===!0?!0:u.settings.autoLock?Date.now()>=Wt(t).getTime():!1}function oe(t){if(Jt())return lt(t);const e=C(t);return e.lockOverride==="unlocked"?!1:e.lockOverride==="locked"||e.locked?((!Array.isArray(e.lockedHabits)||!e.habitMissed)&&qt(t),!0):u.settings.autoLock&&Date.now()>=Wt(t).getTime()?(e.locked=!0,e.lockOverride="locked",e.submittedAt=e.submittedAt||Wt(t).toISOString(),qt(t),$(),!0):!1}function C(t){if(!u.days[t]){const e=Vt();if(Jt())return e;u.days[t]=e}return u.days[t]}function Qe(t){const e=C(t);if(De(t)||Jt())return e;let a=!1;return u.pinnedTasks.forEach(i=>{kt(i.pin,t)&&(e.tasks.some(s=>s.sourcePinId===i.id)||(e.tasks.push({id:`ptask-${i.id}-${t}`,title:i.title,points:i.points,description:i.description||"",category:P(i.category),tags:T(i.tags),rating:0,done:!1,missed:!1,sourcePinId:i.id,image:V(i.image)}),a=!0))}),a&&$(),e}function W(t){return!l.isLocked(t)}function re(t){const e=z().find(a=>a.label.toLowerCase()===String(t||"").trim().toLowerCase());return e?e.id:"mentally"}function de(t){return!t||typeof t!="object"||Array.isArray(t)?[]:Array.isArray(t.days)?t.days.filter(e=>e&&/^\d{4}-\d{2}-\d{2}$/.test(String(e.date||""))):[]}const l={todayKey:q,exportBackup(){return JSON.stringify({app:"Daily Report",kind:"full-backup",version:1,exportedAt:new Date().toISOString(),data:u},null,2)},backupKind(t){if(!t||typeof t!="object"||Array.isArray(t))return"invalid";const e=t.data&&typeof t.data=="object"&&!Array.isArray(t.data)?t.data:t;return Array.isArray(e.days)?"report-export":Array.isArray(e.categories)||Array.isArray(e.plans)||Array.isArray(e.schedule)?"wrong-app":typeof e!="object"||e===null||e.habits!==void 0&&!Array.isArray(e.habits)||e.days!==void 0&&(typeof e.days!="object"||e.days===null||Array.isArray(e.days))||e.settings!==void 0&&(typeof e.settings!="object"||e.settings===null||Array.isArray(e.settings))||!["habits","pinnedTasks","days","goals","badges","settings"].some(i=>e[i]!==void 0)?"invalid":"ok"},importBackup(t){if(this.backupKind(t)!=="ok")return!1;const e=t.data&&typeof t.data=="object"&&!Array.isArray(t.data)?t.data:t;return u=Ae(e),I=u.customCategories||[],u.customCategories=I,$(),!0},previewReport(t){const e=de(t);if(!e.length)return{days:0,start:"",end:"",newHabits:0};const a=new Set(u.habits.map(n=>String(n.name||"").trim().toLowerCase())),i=new Set;e.forEach(n=>{(Array.isArray(n.habits)?n.habits:[]).forEach(o=>{const r=String(o&&o.name||"").trim().toLowerCase();r&&!a.has(r)&&i.add(r)})});const s=e.map(n=>String(n.date)).sort();return{days:e.length,start:s[0],end:s[s.length-1],newHabits:i.size}},importReport(t){const e=de(t);if(!e.length)return!1;const a=e.map(r=>String(r.date)).sort(),i=a[a.length-1],s={};u.habits.forEach(r=>{s[String(r.name||"").trim().toLowerCase()]=r});let n=0;const o=Date.now();return e.forEach((r,d)=>{const c=String(r.date);(Array.isArray(r.habits)?r.habits:[]).forEach(m=>{const w=String(m&&m.name||"").trim().slice(0,80);if(!w)return;const b=w.toLowerCase();if(!s[b]){const v={id:`h${o}_${n}`,name:w,description:String(m&&m.description||"").slice(0,240),points:Number(m&&m.points||10)||10,icon:"star",category:re(m&&m.category),consciousPoints:O(m&&m.consciousPoints),tags:T(m&&m.tags),pin:{mode:"until",until:i,weekdays:[],monthDays:[],yearDays:[],customDates:[],exceptDates:[]}};u.habits.push(v),s[b]=v,n+=1}});const p=Vt();p.note=String(r.note||""),p.locked=!0,p.lockOverride="locked",p.submittedAt=null;const S=[];(Array.isArray(r.habits)?r.habits:[]).forEach(m=>{const w=s[String(m&&m.name||"").trim().toLowerCase()];if(!w)return;const b=Math.max(0,Math.min(5,Number(m&&m.rating||0)));p.habitRatings[w.id]=b,p.habits[w.id]=b>0,b<=0&&(p.habitMissed[w.id]=!0),S.push({id:w.id,name:w.name,description:w.description,points:w.points,icon:w.icon||"star",category:P(w.category),consciousPoints:O(w.consciousPoints),tags:T(w.tags),pin:Y(w.pin)})}),p.lockedHabits=S,p.tasks=(Array.isArray(r.tasks)?r.tasks:[]).map((m,w)=>({id:`t${o}_${d}_${w}`,title:String(m&&m.title||"Task").slice(0,120),points:Number(m&&m.points||5)||5,description:String(m&&m.description||""),category:re(m&&m.category),tags:T(m&&m.tags),rating:Math.max(0,Math.min(5,Number(m&&m.rating||0))),done:!!(m&&m.done),missed:!(m&&m.done),image:"",forwardedFrom:/^\d{4}-\d{2}-\d{2}$/.test(String(m&&m.forwardedFrom||""))?String(m.forwardedFrom):"",forwardedHabitId:"",forwardedTo:Array.isArray(m&&m.forwardedTo)?m.forwardedTo.filter(b=>/^\d{4}-\d{2}-\d{2}$/.test(String(b))).map(String).slice(0,50):[]})),u.days[c]=p}),$(),{days:e.length,habits:n}},getSettings(){return u.settings},setLockTime(t){u.settings.lockTime=t||"21:00",$()},setAutoLock(t){u.settings.autoLock=!!t,$()},setShowConscious(t){u.settings.showConscious=!!t,$()},consciousEnabled(){return u.settings.showConscious!==!1},setHabitSort(t){u.settings.habitSort=["default","points","category","tags"].includes(t)?t:"default",$()},setTaskSort(t){u.settings.taskSort=["default","points","category","tags"].includes(t)?t:"default",$()},getWeekStart(){return jt(u.settings.weekStart)},setWeekStart(t){u.settings.weekStart=jt(t),$()},getTheme(){return u.settings.theme==="light"?"light":"dark"},setTheme(t){u.settings.theme=t==="light"?"light":"dark",$()},getHabits(t,e){if(t&&De(t)){const n=u.days[t];if(n&&Array.isArray(n.lockedHabits)){const o=e||u.settings.habitSort||"default",r=[...n.lockedHabits];return o==="default"?r:Nt(r,o)}}const a=e||u.settings.habitSort||"default",i=t?u.habits.filter(n=>kt(n.pin,t)):[...u.habits];if(t){const n=u.days[t];if(n){const o=new Set(i.map(r=>r.id));u.habits.forEach(r=>{o.has(r.id)||Je(n,r.id)&&(o.add(r.id),i.push(r))})}}const s=i.sort((n,o)=>+!!o.pin-+!!n.pin);return a==="default"?s:Nt(s,a)},getTasks(t,e){const a=this.getDay(t),i=e||u.settings.taskSort||"default";return i==="default"?a.tasks:Nt(a.tasks,i)},getAllHabits(){return u.habits},getPinnedTasks(){return u.pinnedTasks},getDay(t){return oe(t),Qe(t)},isLocked(t){return oe(t)},submitDay(t){const e=C(t);e.locked=!0,e.lockOverride="locked",e.submittedAt=new Date().toISOString(),qt(t),$(),this.checkGoals(t)},unlockDay(t){const e=C(t);e.locked=!1,e.lockOverride="unlocked",e.habitMissed={},e.lockedHabits=null,e.tasks.forEach(a=>{a.missed=!1}),$()},isHabitMissed(t,e){const a=u.days[t];return!a||!(a.locked||a.lockOverride==="locked")?!1:a.habitMissed&&a.habitMissed[e]?!0:_t(t,e)<=0},isTaskMissed(t,e){const a=u.days[t];if(!a)return!1;const i=(a.tasks||[]).find(s=>s.id===e);return i?i.missed===!0?!0:i.missed===!1?!1:!!(a.locked||a.lockOverride==="locked")&&!i.done:!1},missedCounts(t){return Q(()=>{const e=this.getDay(t),a=this.getHabits(t),i=lt(t);return{habits:a.filter(s=>e.habitMissed&&e.habitMissed[s.id]?!0:i&&_t(t,s.id)<=0).length,tasks:e.tasks.filter(s=>s.done?!1:s.missed===!0?!0:s.missed===!1?!1:i).length}})},lockDay(t){this.submitDay(t)},lockDays(t){let e=0;return t.forEach(a=>{this.isLocked(a)||(this.submitDay(a),e+=1)}),e},unlockDays(t){let e=0;return t.forEach(a=>{this.isLocked(a)&&(this.unlockDay(a),e+=1)}),e},lockedReports(){return Q(()=>Object.keys(u.days).sort().reverse().filter(t=>lt(t)).map(t=>({date:t,submittedAt:u.days[t].submittedAt,...this.scoreFor(t)})))},habitRating(t,e){const a=u.days[t];return a?a.habitRatings&&a.habitRatings[e]!=null?Number(a.habitRatings[e])||0:a.habits&&a.habits[e]?5:0:0},setHabitRating(t,e,a){if(!W(t))return;const i=C(t),s=Math.max(0,Math.min(5,Number(a)||0));i.habitRatings[e]=s,i.habits[e]=s>0,$(),this.checkGoals(t)},toggleHabit(t,e){if(!W(t))return;const a=this.habitRating(t,e)>0?0:5;this.setHabitRating(t,e,a)},addTask(t,e,a,i={}){if(!W(t))return;C(t).tasks.push({id:tt("t"),title:e.trim(),points:Number(a)||5,description:String(i.description||"").trim(),category:P(i.category),tags:T(i.tags),rating:Math.max(0,Math.min(5,Number(i.rating)||0)),done:!1,missed:!1,forwardedFrom:/^\d{4}-\d{2}-\d{2}$/.test(String(i.forwardedFrom||""))?String(i.forwardedFrom):"",forwardedHabitId:String(i.forwardedHabitId||""),forwardedTo:[],image:V(i.image)}),$(),this.checkGoals(t)},setTaskRating(t,e,a){if(!W(t))return;const s=C(t).tasks.find(o=>o.id===e);if(!s)return;const n=Math.max(0,Math.min(5,Number(a)||0));s.rating=n,$()},toggleTask(t,e){if(!W(t))return;const i=C(t).tasks.find(s=>s.id===e);i&&(i.done=!i.done,$(),this.checkGoals(t))},removeTask(t,e){if(!W(t))return;const a=C(t);a.tasks=a.tasks.filter(i=>i.id!==e),$()},forwardTask(t,e,a){if(!/^\d{4}-\d{2}-\d{2}$/.test(String(a||"")))return{ok:!1,reason:"Pick a valid date"};if(t===a)return{ok:!1,reason:"Already on that day"};if(!W(t))return{ok:!1,reason:"Source day is locked"};if(this.isLocked(a))return{ok:!1,reason:"Target day is locked"};const s=C(t).tasks.find(r=>r.id===e);if(!s)return{ok:!1,reason:"Task not found"};C(a).tasks.push({id:tt("t"),title:s.title,points:Number(s.points)||5,description:String(s.description||""),category:P(s.category),tags:T(s.tags),rating:0,done:!1,missed:!1,forwardedFrom:t,forwardedHabitId:String(s.forwardedHabitId||""),forwardedTo:[],image:V(s.image)});const o=Array.isArray(s.forwardedTo)?s.forwardedTo:[];return o.includes(a)||o.push(a),s.forwardedTo=o.slice(0,50),$(),this.checkGoals(a),{ok:!0}},forwardHabit(t,e,a){if(!/^\d{4}-\d{2}-\d{2}$/.test(String(a||"")))return{ok:!1,reason:"Pick a valid date"};if(t===a)return{ok:!1,reason:"Already on that day"};if(!W(t))return{ok:!1,reason:"Source day is locked"};if(this.isLocked(a))return{ok:!1,reason:"Target day is locked"};const i=u.habits.find(r=>r.id===e);if(!i)return{ok:!1,reason:"Habit not found"};C(a).tasks.push({id:tt("t"),title:i.name,points:Number(i.points)||10,description:String(i.description||""),category:P(i.category),tags:T(i.tags),rating:0,done:!1,missed:!1,forwardedFrom:t,forwardedHabitId:e,forwardedTo:[]});const n=C(t);(!n.habitForwarded||typeof n.habitForwarded!="object")&&(n.habitForwarded={});const o=Array.isArray(n.habitForwarded[e])?n.habitForwarded[e]:[];return o.includes(a)||o.push(a),n.habitForwarded[e]=o.slice(0,50),$(),this.checkGoals(a),{ok:!0}},habitForwardedTo(t,e){const a=u.days[t];if(!a||!a.habitForwarded)return[];const i=a.habitForwarded[e];return Array.isArray(i)?i:[]},setNote(t,e){W(t)&&(C(t).note=e,$())},addHabit(t,e,a={}){u.habits.push({id:tt("h"),name:t.trim(),description:String(a.description||"").trim().slice(0,240),points:Number(e)||10,icon:"star",category:P(a.category||"physically"),consciousPoints:O(a.consciousPoints),tags:T(a.tags),pin:Y({mode:"forever"})}),$()},updateHabit(t,e){const a=u.habits.find(i=>i.id===t);a&&(e.name!=null&&(a.name=String(e.name).trim()||a.name),e.description!=null&&(a.description=String(e.description).trim().slice(0,240)),e.points!=null&&(a.points=Number(e.points)||a.points),e.category!=null&&(a.category=P(e.category)),e.consciousPoints!=null&&(a.consciousPoints=O(e.consciousPoints)),e.tags!=null&&(a.tags=T(e.tags)),$())},updateTask(t,e,a){if(!W(t))return;const s=C(t).tasks.find(n=>n.id===e);if(s){if(a.title!=null&&(s.title=String(a.title).trim()||s.title),a.points!=null&&(s.points=Number(a.points)||s.points),a.description!=null&&(s.description=String(a.description).trim()),a.category!=null&&(s.category=P(a.category)),a.tags!=null&&(s.tags=T(a.tags)),a.image!==void 0&&(s.image=V(a.image)),a.rating!=null&&(s.rating=Math.max(0,Math.min(5,Number(a.rating)||0))),s.sourcePinId){const n=u.pinnedTasks.find(o=>o.id===s.sourcePinId);n&&(n.title=s.title,n.points=s.points,n.description=s.description,n.category=s.category,a.tags!=null&&(n.tags=T(a.tags)),a.image!==void 0&&(n.image=V(a.image)))}$()}},habitStreak(t,e){const a=u.habits.find(o=>o.id===t);if(!a)return 0;let i=e,s=0;this.habitRating(i,t)===0&&(i=rt(i));let n=0;for(;s<400;){if(s+=1,!kt(a.pin,i)){i=rt(i);continue}if(this.habitRating(i,t)>0){n+=1,i=rt(i);continue}break}return n},categoryBreakdown(t){const e=this.getDay(t),a=this.getHabits(t);return z().map(i=>{const s=a.filter(v=>P(v.category)===i.id),n=e.tasks.filter(v=>P(v.category)===i.id),o=s.reduce((v,A)=>{const Et=this.habitRating(t,A.id);return v+Math.round(A.points*Et/5)},0),r=u.settings.showConscious!==!1,d=r?s.reduce((v,A)=>v+(this.habitRating(t,A.id)>0?O(A.consciousPoints):0),0):0,c=s.reduce((v,A)=>v+A.points,0),p=r?s.reduce((v,A)=>v+O(A.consciousPoints),0):0,S=n.reduce((v,A)=>v+(A.done?A.points:0),0),m=n.reduce((v,A)=>v+A.points,0),w=s.map(v=>this.habitRating(t,v.id)),b=w.length?Math.round(w.reduce((v,A)=>v+A,0)/w.length*10)/10:0;return{...i,habits:s,tasks:n,earned:o+d+S,max:c+p+m,habitAvg:b,consciousEarned:d,consciousMax:p,completed:s.filter(v=>this.habitRating(t,v.id)>0).length+n.filter(v=>v.done).length,total:s.length+n.length}})},removeHabit(t){u.habits=u.habits.filter(e=>e.id!==t),$()},pinHabit(t,e){const a=u.habits.find(i=>i.id===t);a&&(a.pin=Y(e),$())},unpinHabit(t){const e=u.habits.find(a=>a.id===t);e&&(e.pin=null,$())},pinTask(t,e,a){if(!W(t))return;const s=C(t).tasks.find(r=>r.id===e);if(!s)return;const n=s.sourcePinId?u.pinnedTasks.find(r=>r.id===s.sourcePinId):null;if(n){n.pin=Y(a),$();return}const o=tt("p");u.pinnedTasks.push({id:o,title:s.title,points:s.points,description:s.description||"",category:P(s.category),tags:T(s.tags),pin:Y(a),image:V(s.image)}),s.sourcePinId=o,$()},unpinTaskTemplate(t){u.pinnedTasks=u.pinnedTasks.filter(e=>e.id!==t),$()},updatePinnedTask(t,e){const a=u.pinnedTasks.find(i=>i.id===t);a&&(a.pin=Y(e),$())},findHabit(t){return u.habits.find(e=>e.id===t)||null},findTask(t,e){return C(t).tasks.find(a=>a.id===e)||null},findPinnedTask(t){return u.pinnedTasks.find(e=>e.id===t)||null},getInstalledAt(){return String(u.installedAt||new Date().toISOString())},getProfile(){const t=pt(u.profile);return u.profile=t,JSON.parse(JSON.stringify(t))},setProfileField(t,e){return!Object.prototype.hasOwnProperty.call(Ft,t)||u.profile.locked?!1:((!u.profile||typeof u.profile!="object")&&(u.profile=pt({})),u.profile[t]=String(e||"").slice(0,Ft[t]),$(),!0)},setProfileLocked(t){(!u.profile||typeof u.profile!="object")&&(u.profile=pt({})),u.profile.locked=!!t,$()},isProfileLocked(){return!!(u.profile&&u.profile.locked)},profileGoalDurations(){return JSON.parse(JSON.stringify(ct))},addWhoAmI(t){if(u.profile.locked)return{ok:!1,reason:"Profile is locked"};const e=String(t||"").trim().slice(0,120);return e?(u.profile.whoAmI||[]).length>=50?{ok:!1,reason:"List is full (50)"}:(u.profile.whoAmI.push({id:j("w"),text:e}),$(),{ok:!0}):{ok:!1,reason:"Type something first"}},updateWhoAmI(t,e){if(u.profile.locked)return;const a=(u.profile.whoAmI||[]).find(s=>s.id===t);if(!a)return;const i=String(e||"").trim().slice(0,120);i?a.text=i:u.profile.whoAmI=u.profile.whoAmI.filter(s=>s.id!==t),$()},moveWhoAmI(t,e){if(u.profile.locked)return;const a=u.profile.whoAmI||[],i=a.findIndex(o=>o.id===t),s=i+e;if(i<0||s<0||s>=a.length)return;const[n]=a.splice(i,1);a.splice(s,0,n),$()},removeWhoAmI(t){u.profile.locked||(u.profile.whoAmI=(u.profile.whoAmI||[]).filter(e=>e.id!==t),$())},addLifeArea(t){if(u.profile.locked)return{ok:!1,reason:"Profile is locked"};const e=String(t||"").trim().slice(0,60);if(!e)return{ok:!1,reason:"Name the life area"};if((u.profile.lifeAreas||[]).length>=20)return{ok:!1,reason:"Max 20 areas"};const a={id:j("a"),title:e,description:""};return u.profile.lifeAreas.push(a),$(),{ok:!0,id:a.id}},updateLifeArea(t,e={}){if(u.profile.locked)return;const a=(u.profile.lifeAreas||[]).find(i=>i.id===t);a&&(e.title!=null&&(a.title=String(e.title).trim().slice(0,60)||a.title),e.description!=null&&(a.description=String(e.description).slice(0,1e3)),$())},removeLifeArea(t){u.profile.locked||(u.profile.lifeAreas=(u.profile.lifeAreas||[]).filter(e=>e.id!==t),$())},addProfileGoal(t,e,a){if(u.profile.locked)return{ok:!1,reason:"Profile is locked"};const i=String(t||"").trim().slice(0,200);if(!i)return{ok:!1,reason:"Write your goal first"};const s=Ot.includes(e)?e:"short",n=ct[s],o=n.includes(a)?a:n[0];if((u.profile.pGoals||[]).length>=100)return{ok:!1,reason:"Too many goals (100)"};const r={id:j("g"),text:i,term:s,duration:o,createdAt:new Date().toISOString()};return u.profile.pGoals.push(r),$(),{ok:!0,id:r.id}},updateProfileGoal(t,e={}){if(u.profile.locked)return;const a=(u.profile.pGoals||[]).find(i=>i.id===t);if(a){if(e.text!=null&&(a.text=String(e.text).trim().slice(0,200)||a.text),e.term!=null&&Ot.includes(e.term)){a.term=e.term;const i=ct[a.term];i.includes(a.duration)||(a.duration=i[0])}e.duration!=null&&ct[a.term].includes(e.duration)&&(a.duration=e.duration),$()}},removeProfileGoal(t){u.profile.locked||(u.profile.pGoals=(u.profile.pGoals||[]).filter(e=>e.id!==t),$())},addQuote(t,e){if(u.profile.locked)return{ok:!1,reason:"Profile is locked"};const a=String(t||"").trim().slice(0,500);if(!a)return{ok:!1,reason:"Write the quote first"};if((u.profile.quotes||[]).length>=200)return{ok:!1,reason:"Too many quotes (200)"};const i={id:j("q"),text:a,author:String(e||"").trim().slice(0,80),fav:!1,createdAt:new Date().toISOString()};return u.profile.quotes.push(i),$(),{ok:!0,id:i.id}},updateQuote(t,e={}){if(u.profile.locked)return;const a=(u.profile.quotes||[]).find(i=>i.id===t);a&&(e.text!=null&&(a.text=String(e.text).trim().slice(0,500)||a.text),e.author!=null&&(a.author=String(e.author).trim().slice(0,80)),$())},toggleQuoteFav(t){if(u.profile.locked)return;const e=(u.profile.quotes||[]).find(a=>a.id===t);e&&(e.fav=!e.fav,$())},removeQuote(t){u.profile.locked||(u.profile.quotes=(u.profile.quotes||[]).filter(e=>e.id!==t),$())},getCategories(){return z().map(t=>({...t}))},getCustomCategories(){return I.map(t=>({...t}))},addCategory(t){const e=String(t||"").trim().slice(0,30);if(!e)return{ok:!1,reason:"Type a category name"};if(z().some(s=>s.label.toLowerCase()===e.toLowerCase()))return{ok:!1,reason:"That category already exists"};if(I.length>=20)return{ok:!1,reason:"Too many categories (max 20 custom)"};let i=`c${Date.now().toString(36)}`;return z().some(s=>s.id===i)&&(i=`c${Date.now().toString(36)}${Math.floor(Math.random()*99)}`),I.push({id:i,label:e}),$(),{ok:!0,id:i}},renameCategory(t,e){const a=I.find(n=>n.id===t);if(!a)return{ok:!1,reason:"Built-in categories can’t be renamed"};const i=String(e||"").trim().slice(0,30);return i?z().some(n=>n.id!==t&&n.label.toLowerCase()===i.toLowerCase())?{ok:!1,reason:"That category already exists"}:(a.label=i,$(),{ok:!0}):{ok:!1,reason:"Type a category name"}},updateCategory(t,e={}){const a=I.find(i=>i.id===t);if(!a){const i=Pt.find(s=>s.id===t);return i?(e.color!==void 0&&(i.color=String(e.color).slice(0,20)),e.goals!==void 0&&(i.goals=String(e.goals).slice(0,1e3)),$(),{ok:!0}):{ok:!1,reason:"Category not found"}}return e.color!==void 0&&(a.color=String(e.color).slice(0,20)),e.goals!==void 0&&(a.goals=String(e.goals).slice(0,1e3)),$(),{ok:!0}},deleteCategory(t){const e=I.findIndex(a=>a.id===t);return e<0?{ok:!1,reason:"Built-in categories canâ€™t be deleted"}:(I.splice(e,1),u.habits.forEach(a=>{a.category===t&&(a.category="mentally")}),u.pinnedTasks.forEach(a=>{a.category===t&&(a.category="mentally")}),Object.values(u.days).forEach(a=>{(a.tasks||[]).forEach(i=>{i.category===t&&(i.category="mentally")})}),$(),{ok:!0})},getAllTags(){const t=new Map,e=a=>{T(a).forEach(i=>{t.set(i,(t.get(i)||0)+1)})};return u.habits.forEach(a=>e(a.tags)),u.pinnedTasks.forEach(a=>e(a.tags)),Object.values(u.days).forEach(a=>{(a.tasks||[]).forEach(i=>e(i.tags))}),[...t.entries()].map(([a,i])=>({tag:a,count:i})).sort((a,i)=>i.count-a.count||a.tag.localeCompare(i.tag))},renameTag(t,e){const a=String(t||"").trim(),i=T(e)[0]||"";if(!a||!i)return{ok:!1,reason:"Type a tag name"};if(a.toLowerCase()===i.toLowerCase()){const o=r=>T((r||[]).map(d=>String(d).toLowerCase()===a.toLowerCase()?i:d));return u.habits.forEach(r=>{r.tags=o(r.tags)}),u.pinnedTasks.forEach(r=>{r.tags=o(r.tags)}),Object.values(u.days).forEach(r=>{(r.tasks||[]).forEach(d=>{d.tags=o(d.tags)})}),$(),{ok:!0}}const s=this.getAllTags().some(o=>o.tag.toLowerCase()===i.toLowerCase()),n=o=>{const r=(o||[]).map(d=>String(d).toLowerCase()===a.toLowerCase()?i:d);return T(r)};return u.habits.forEach(o=>{o.tags=n(o.tags)}),u.pinnedTasks.forEach(o=>{o.tags=n(o.tags)}),Object.values(u.days).forEach(o=>{(o.tasks||[]).forEach(r=>{r.tags=n(r.tags)})}),$(),{ok:!0,merged:s}},deleteTag(t){const e=String(t||"").trim().toLowerCase();if(!e)return{ok:!1,reason:"Pick a tag first"};const a=i=>(i||[]).filter(s=>String(s).toLowerCase()!==e);return u.habits.forEach(i=>{i.tags=a(i.tags)}),u.pinnedTasks.forEach(i=>{i.tags=a(i.tags)}),Object.values(u.days).forEach(i=>{(i.tasks||[]).forEach(s=>{s.tags=a(s.tags)})}),$(),{ok:!0}},addTagToHabit(t,e){const a=u.habits.find(s=>s.id===t);if(!a)return{ok:!1,reason:"Pick a habit first"};const i=T(e)[0]||"";return i?(a.tags=T([...a.tags||[],i]),$(),{ok:!0}):{ok:!1,reason:"Type a tag name"}},categoryChart(t,e){const a=["week","month","year"].includes(t)?t:"week",i=`${a}|${e}|${Te}`;return Mt.key===i?Mt.value:Q(()=>this._buildCategoryChart(a,e,i))},_buildCategoryChart(t,e,a){const i=z(),s=[];if(t==="year"){const p=String(e).slice(0,4);for(let S=0;S<12;S++){const m=String(S+1).padStart(2,"0"),w=new Date(Number(p),S+1,0).getDate();s.push({label:new Date(Number(p),S,1).toLocaleDateString(void 0,{month:"short"}),title:new Date(Number(p),S,1).toLocaleDateString(void 0,{month:"long",year:"numeric"}),keys:this.rangeKeys(`${p}-${m}-01`,`${p}-${m}-${String(w).padStart(2,"0")}`)})}}else{const[p,S]=this.resolveRange(t,e);this.rangeKeys(p,S).forEach(m=>{const w=new Date(`${m}T00:00:00`);s.push({label:t==="week"?w.toLocaleDateString(void 0,{weekday:"narrow"}):String(w.getDate()),title:m,keys:[m]})})}const n={},o={};i.forEach(p=>{n[p.id]=s.map(()=>0),o[p.id]=0}),s.forEach((p,S)=>{p.keys.forEach(m=>{this.categoryBreakdown(m).forEach(w=>{w.id in n||(n[w.id]=s.map(()=>0),o[w.id]=0),n[w.id][S]+=w.earned||0,o[w.id]+=w.earned||0})})});const r=s.map((p,S)=>i.reduce((m,w)=>m+(n[w.id]?n[w.id][S]:0),0)),d=Math.max(1,...r),c={kind:t,labels:s.map(p=>p.label),titles:s.map(p=>p.title),cats:i.map(p=>({...p})),perCat:n,totals:o,max:d,grandTotal:r.reduce((p,S)=>p+S,0)};return Mt={key:a,value:c},c},getGoals(){return u.goals},getBadges(){return[...u.badges].sort((t,e)=>{const a=ae(e.tier)-ae(t.tier);return a!==0?a:String(e.earnedAt).localeCompare(String(t.earnedAt))})},topBadges(t=3){return this.getBadges().slice(0,t)},addGoal(t={}){const e=Bt({...t,id:tt("g")});return u.goals.push(e),$(),this.checkGoals(q()),e},updateGoal(t,e={}){const a=u.goals.find(s=>s.id===t);if(!a)return;const i=Bt({...a,...e,id:t});Object.assign(a,i),$(),this.checkGoals(q())},removeGoal(t){u.goals=u.goals.filter(e=>e.id!==t),$()},removeBadge(t){u.badges=u.badges.filter(e=>e.id!==t),$()},perfectDaysCount(){return Q(()=>Object.keys(u.days).filter(t=>{const e=this.scoreFor(t);return e.max>0&&e.percent===100}).length)},taskStreak(t,e){let a=e,i=0;(o=>{const r=u.days[o];return!r||!Array.isArray(r.tasks)?!1:r.tasks.some(d=>d.sourcePinId===t&&d.done)})(a)||(a=rt(a));let n=0;for(;i<400;){i+=1;const o=u.days[a];if(!o||!Array.isArray(o.tasks))break;if(o.tasks.some(r=>r.sourcePinId===t&&r.done)){n+=1,a=rt(a);continue}break}return n},goalProgress(t,e){const a=e||q();if(t.kind==="habit-streak"){const s=this.habitStreak(t.targetId,a);return{current:s,target:t.targetDays,done:s>=t.targetDays}}if(t.kind==="task-streak"){const s=this.taskStreak(t.targetId,a);return{current:s,target:t.targetDays,done:s>=t.targetDays}}const i=this.perfectDaysCount();return{current:i,target:t.targetDays,done:i>=t.targetDays}},checkGoals(t){const e=t||q();let a=[];return u.goals.forEach(i=>{if(u.badges.some(n=>n.goalId===i.id))return;if(this.goalProgress(i,e).done){const n={id:tt("b"),goalId:i.id,title:i.title,tier:i.tier,rewardTitle:i.rewardTitle,earnedAt:new Date().toISOString()};u.badges.push(n),a.push(n)}}),a.length&&$(),a},scoreFor(t){return Q(()=>this._scoreFor(t))},_scoreFor(t){const e=this.getDay(t),a=this.getHabits(t),i=this.isLocked(t),s=u.settings.showConscious!==!1,n=a.reduce((v,A)=>{const Et=this.habitRating(t,A.id);return v+Math.round(A.points*Et/5)},0),o=s?a.reduce((v,A)=>v+(this.habitRating(t,A.id)>0?O(A.consciousPoints):0),0):0,r=e.tasks.reduce((v,A)=>v+(A.done?A.points:0),0),d=a.reduce((v,A)=>v+A.points,0),c=s?a.reduce((v,A)=>v+O(A.consciousPoints),0):0,p=e.tasks.reduce((v,A)=>v+A.points,0),S=n+o+r,m=d+c+p,w=a.filter(v=>e.habitMissed&&e.habitMissed[v.id]?!0:i&&this.habitRating(t,v.id)<=0).length,b=e.tasks.filter(v=>v.done?!1:v.missed===!0?!0:v.missed===!1?!1:i).length;return{earned:S,max:m,habitScore:n,consciousScore:o,maxConscious:c,taskScore:r,completedHabits:a.filter(v=>this.habitRating(t,v.id)>0).length,habitAvg:a.length?Math.round(a.reduce((v,A)=>v+this.habitRating(t,A.id),0)/a.length*10)/10:0,totalHabits:a.length,completedTasks:e.tasks.filter(v=>v.done).length,totalTasks:e.tasks.length,missedHabits:w,missedTasks:b,percent:m?Math.round(S/m*100):0,locked:i,submittedAt:e.submittedAt}},monthKeys(t){const e=String(t).slice(0,7);return Object.keys(u.days).filter(a=>a.startsWith(e)).sort()},rangeKeys(t,e){const a=[],i=new Date(`${t}T00:00:00`),s=new Date(`${e}T00:00:00`);let n=0;for(;i<=s&&n<732;)n+=1,a.push(q(i)),i.setDate(i.getDate()+1);return a},resolveRange(t,e){if(t==="day")return[e,e];if(t==="week"){const i=new Date(`${e}T00:00:00`),s=new Date(i);s.setDate(i.getDate()-(i.getDay()-this.getWeekStart()+7)%7);const n=new Date(s);return n.setDate(s.getDate()+6),[q(s),q(n)]}if(t==="month"){const[i,s]=e.split("-").map(Number),n=`${i}-${String(s).padStart(2,"0")}-01`,o=new Date(i,s,0).getDate(),r=`${i}-${String(s).padStart(2,"0")}-${String(o).padStart(2,"0")}`;return[n,r]}if(t==="year"){const i=e.slice(0,4);return[`${i}-01-01`,`${i}-12-31`]}const a=Object.keys(u.days).sort();return a.length?[a[0],a[a.length-1]>e?a[a.length-1]:e]:[e,e]},exportRows(t,e){return Q(()=>this._exportRows(t,e))},_exportRows(t,e){return this.rangeKeys(t,e).map(a=>{const i=this.getDay(a),s=this.getHabits(a),n=this.scoreFor(a),o=this.isLocked(a),r=(c,p)=>p>0?"done":o?"missed":"pending",d=c=>c.done?"done":o?"missed":"pending";return{date:a,earned:n.earned,max:n.max,percent:n.percent,habitScore:n.habitScore,consciousScore:n.consciousScore||0,taskScore:n.taskScore,locked:o,missedHabits:n.missedHabits||0,missedTasks:n.missedTasks||0,note:i.note||"",habits:s.map(c=>{const p=this.habitRating(a,c.id);return{name:c.name,description:String(c.description||""),category:ft(P(c.category)),tags:T(c.tags),points:c.points,consciousPoints:this.consciousEnabled()?O(c.consciousPoints):0,rating:p,earned:Math.round(c.points*p/5)+(p>0&&this.consciousEnabled()?O(c.consciousPoints):0),status:r(c.id,p)}}),tasks:i.tasks.map(c=>({title:c.title,category:ft(P(c.category)),tags:T(c.tags),points:c.points,rating:Math.max(0,Math.min(5,Number(c.rating)||0)),done:!!c.done,earned:c.done?c.points:0,status:c.forwardedFrom?`forwarded from ${c.forwardedFrom}`:d(c),forwardedFrom:c.forwardedFrom||"",forwardedTo:Array.isArray(c.forwardedTo)?c.forwardedTo:[],description:c.description||"",hasImage:!!c.image}))}})},history(t=14){return Q(()=>Object.keys(u.days).sort().reverse().slice(0,t).map(a=>({date:a,...this.scoreFor(a),note:u.days[a].note,locked:lt(a),submittedAt:u.days[a].submittedAt})))},week(t){return Q(()=>{const e=new Date(t);return e.setDate(e.getDate()-(e.getDay()-this.getWeekStart()+7)%7),e.setHours(0,0,0,0),Array.from({length:7},(a,i)=>{const s=new Date(e);s.setDate(e.getDate()+i);const n=q(s);return{date:n,label:s.toLocaleDateString(void 0,{weekday:"short"}),locked:lt(n),...this.scoreFor(n)}})})}};function Ce(t){return t>=90?"Excellent":t>=75?"Great day":t>=50?"Keep going":t>0?"Started":"No score yet"}function _(t){return new Date(`${t}T00:00:00`).toLocaleDateString(void 0,{weekday:"long",month:"short",day:"numeric"})}function Xe(t){return t?new Date(t).toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"}):""}function wt(t){return t>=5?"Excellent":t>=4?"Great":t>=3?"Good":t>=2?"Fair":t>=1?"Low":"Not rated"}const It=document.getElementById("app"),Pe="daily-report-2026-09-30T18-35-29-muog40pu",Ze=`v1.1 — Auto-update · Offline · Backup (${Pe.slice(-8)})`;let f=l.todayKey(),E="today",x=null,h=null,K=!1,St=!1,it=null,X=!1,Ut=!1,zt=null,Z="Idle.",G="week",xt=null,R="month",At=null,N=[],J=0,L=null,D="boot",et=null,mt=!1,bt="all",U="short",st="1 Week";window.addEventListener("beforeinstallprompt",t=>{t.preventDefault(),it=t});window.addEventListener("appinstalled",()=>{it=null,y("Daily Report installed"),k()});const Ke=[["default","Default"],["points","Points"],["category","Category"],["tags","Tags"]];function ce(t){const e=new Date(`${f}T00:00:00`);e.setDate(e.getDate()+t),f=l.todayKey(e)}let Rt=l.todayKey();function Qt(){const t=l.todayKey();if(t===Rt)return!1;const e=Rt;return Rt=t,f===e&&(f=t),xt=null,At=null,N=[],J=0,!0}function B(t){return{home:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1z"/></svg>',profile:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-6 8-6s8 2 8 6"/></svg>',history:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 8v5l3 2"/><circle cx="12" cy="12" r="9"/></svg>',settings:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H8a1.7 1.7 0 0 0 1-1.5V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V8c.3.7.9 1.2 1.6 1.3H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1.7z"/></svg>',pin:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 4h6l-1 7 3 3v2H7v-2l3-3z" fill="currentColor" stroke="none"/><path d="M12 16v5"/></svg>',forward:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',habit:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7h16M4 12h10M4 17h13"/></svg>'}[t]}function Le(t,e,a){return`
    <div class="stars" data-habit="${t}">
      ${[1,2,3,4,5].map(i=>`
            <button type="button" class="star ${i<=e?"on":""}" data-action="rate-habit" data-id="${t}" data-rating="${i}" ${a?"disabled":""} aria-label="${i} star">★</button>
          `).join("")}
    </div>
  `}function Ee(t,e,a){return`
    <div class="stars stars-small" data-task="${t}">
      ${[1,2,3,4,5].map(i=>`
            <button type="button" class="star small ${i<=e?"on":""}" data-action="rate-task" data-id="${t}" data-rating="${i}" ${a?"disabled":""} aria-label="${i} star">★</button>
          `).join("")}
    </div>
  `}function Ne(t){const e=Number(t)||0;return e?`<span class="conscious-badge">🧠 +${e}</span>`:'<span class="item-meta">No conscious pts</span>'}const ta=["mentally","psychology","physically","spiritually","socially"];function gt(t){const a=l.getCategories().find(n=>n.id===t),i=a&&a.color?a.color:F(t);return`<span class="cat-badge ${ta.includes(t)?`cat-${t}`:"cat-custom"}" style="background:${i}22;color:${i};box-shadow:inset 0 0 0 1px ${i}55">${g(ft(t))}</span>`}const le={mentally:"#5b8cff",psychology:"#a06bff",physically:"#22b07d",spiritually:"#e8a51c",socially:"#14b8a6"},ue=["#f472b6","#38bdf8","#fb923c","#a3e635","#facc15","#e879f9"];function F(t,e){const i=l.getCategories().find(s=>s.id===t);return i&&i.color?i.color:le[t]?le[t]:ue[(e??0)%ue.length]}function nt(t){const e=Array.isArray(t)?t.filter(Boolean):[];return e.length?`<div class="tag-row">${e.map(a=>`<span class="tag-chip">#${g(a)}</span>`).join("")}</div>`:""}function Me(t){return!t||!t.image?"":`<button type="button" class="task-img-thumb" data-action="view-task-image" data-id="${t.id}" aria-label="View attached photo"><img src="${t.image}" alt="Task photo" loading="lazy" /></button>`}function ea(t){const e=String(t||"");if(!e.trim())return"";const a=e.split(`
`),i=/^\s*(?:•|-|[*])\s+(.*)$/,s=/^\s*\d+[.)]\s+(.*)$/;let n="",o=null;const r=()=>{o&&(n+=o==="ul"?"</ul>":"</ol>",o=null)};return a.forEach(d=>{const c=i.exec(d),p=!c&&s.exec(d);c?(o!=="ul"&&(r(),n+='<ul class="note-list">',o="ul"),n+=`<li>${g(c[1])||"&nbsp;"}</li>`):p?(o!=="ol"&&(r(),n+='<ol class="note-list">',o="ol"),n+=`<li>${g(p[1])||"&nbsp;"}</li>`):d.trim()?(r(),n+=`<p class="note-text">${g(d)}</p>`):(r(),n+='<p class="note-text">&nbsp;</p>')}),r(),`<div class="note" style="margin-top:10px">${n}</div>`}function pe(t){const e=document.getElementById("day-note");if(!e||e.disabled)return;const a=e.value||"",i=a.split(`
`),s=a.slice(0,e.selectionStart).split(`
`).length-1,n=a.slice(0,e.selectionEnd).split(`
`).length-1,o=e.selectionStart!==e.selectionEnd,r=o?s:0,d=o?n:i.length-1;if(t==="bullets"){const c=i.slice(r,d+1).every(p=>/^\s*(?:•|-|[*])\s+/.test(p)||!p.trim());for(let p=r;p<=d;p++)i[p].trim()&&(c?i[p]=i[p].replace(/^\s*(?:•|-|[*])\s+/,""):/^\s*(?:•|-|[*])\s+/.test(i[p])||(i[p]=`• ${i[p].replace(/^\s*/,"")}`))}else{const c=i.slice(r,d+1).every(S=>/^\s*\d+[.)]\s+/.test(S)||!S.trim());let p=1;for(let S=r;S<=d;S++){if(!i[S].trim())continue;const m=i[S].replace(/^\s*(?:\d+[.)]|•|-|[*])\s+/,"").replace(/^\s*/,"");i[S]=c?m:`${p}. ${m}`,p+=1}}e.value=i.join(`
`),l.setNote(f,e.value);try{e.focus()}catch{}}function aa(t){return new Promise(e=>{if(!t||!String(t.type||"").startsWith("image/"))return e(null);const a=URL.createObjectURL(t),i=new Image,s=()=>{try{URL.revokeObjectURL(a)}catch{}},n=(o,r)=>new Promise(d=>{let c=i.naturalWidth||0,p=i.naturalHeight||0;if(!c||!p)return d(null);const S=Math.min(1,o/Math.max(c,p));c=Math.max(1,Math.round(c*S)),p=Math.max(1,Math.round(p*S));const m=document.createElement("canvas");m.width=c,m.height=p;try{m.getContext("2d").drawImage(i,0,0,c,p),d(m.toDataURL("image/jpeg",r))}catch{d(null)}});i.onload=async()=>{try{let o=await n(900,.72);o&&o.length>yt&&(o=await n(600,.62)),o&&o.length>yt&&(o=await n(400,.55)),s(),e(o&&o.length<=yt?o:null)}catch{s(),e(null)}},i.onerror=()=>{s(),e(null)},i.src=a})}function me(t,e){return`
    <select class="sort-select" data-sort-kind="${t}" aria-label="Sort ${t}">
      ${Ke.map(([a,i])=>`<option value="${a}" ${e===a?"selected":""}>${i}</option>`).join("")}
    </select>
  `}function ia(t){const e=l.getBadges(),a=l.topBadges(3),i=t.max>0&&t.percent===100,s=St?e:a;return`
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
            <div class="item-meta">100% of points on ${_(f)}</div>
          </div>
        </div>
      `:""}
      ${e.length?`
        <div class="rewards-grid">
          ${s.map(n=>`
            <article class="reward-card tier-${n.tier}">
              <div class="reward-medal">${Ht(n.tier)}</div>
              <div>
                <div class="item-title">${g(n.rewardTitle||n.title)}</div>
                <div class="item-meta">${g(n.title)} · ${xe(n.tier)} · ${_((n.earnedAt||"").slice(0,10))}</div>
              </div>
            </article>
          `).join("")}
        </div>
      `:'<div class="empty">No rewards yet. Set a goal in Settings → Goals &amp; Rewards.</div>'}
    </section>
  `}function Tt(t){return`<span class="streak-badge">${t} day streak</span>`}function Ie(t){return t?`<span class="forward-badge from">↩ Forwarded from ${g(t)}</span>`:""}function Dt(t){const e=Array.isArray(t)?t.filter(Boolean):[];return e.length?`<span class="forward-badge to">↪ Forwarded to ${g(e[e.length-1])}</span>`:""}function sa(t){const e=new Date(`${t}T00:00:00`);return e.setDate(e.getDate()+1),l.todayKey(e)}function Yt(){return`<button class="ghost-btn compact ${K?"on":""}" data-action="toggle-edit">${K?"Done":"Edit Mode"}</button>`}function na(t){return t?'<span class="lock-badge">Locked</span>':'<span class="open-badge">Open</span>'}function oa(){l.checkGoals(f);const t=l.getDay(f),e=l.getSettings(),a=e.showConscious!==!1,i=l.getHabits(f),s=l.getTasks(f),n=l.scoreFor(f),o=Ce(n.percent),r=f===l.todayKey(),d=l.isLocked(f);return`
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
          <div class="score-value">${n.earned}</div>
          <div class="score-unit">of ${n.max||0} points</div>
        </div>
        <div class="hero-side">
          ${na(d)}
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
        ${d?`Submitted${t.submittedAt?` at ${Xe(t.submittedAt)}`:""}.${(n.missedHabits||0)+(n.missedTasks||0)>0?` ${(n.missedHabits||0)+(n.missedTasks||0)} missed (${n.missedHabits||0} habits, ${n.missedTasks||0} tasks) — unchecked items count as missed.`:" Nothing missed — all done."} Unlock in Settings to edit.`:`Auto-locks at ${e.lockTime}. Submit when the day is done. Unchecked items will count as missed once locked.`}
      </p>
      ${d?'<button class="ghost-btn full" data-action="goto-settings">Unlock in Settings</button>':'<button class="primary-btn full" data-action="submit-day">Submit and lock report</button>'}
      <div class="export-row">
        <span class="muted">Export:</span>
        <button class="ghost-btn compact" data-action="open-export">Excel / JSON / PDF</button>
      </div>
    </section>

    ${ia(n)}

    <section class="section">
      <div class="section-head">
        <h2>Habits</h2>
        <div class="head-actions">
          ${me("habit",e.habitSort||"default")}
          ${Yt()}
          <span class="points">+${n.habitScore}${a&&n.consciousScore?` +${n.consciousScore}🧠`:""} pts</span>
        </div>
      </div>
      <div class="list">
        ${i.length?i.map(c=>{const p=l.habitRating(f,c.id),S=p>0,m=!S&&d,w=l.habitStreak(c.id,f),b=a&&Number(c.consciousPoints)||0;return`
                    <article class="item-card ${S?"done":""} ${m?"missed":""} ${d?"is-locked":""}" style="border-left:3px solid ${F(c.category)}">
                      <button class="check" data-action="toggle-habit" data-id="${c.id}" ${d?"disabled":""}>✓</button>
                      <div class="item-body">
                        <div class="item-title">${g(c.name)} ${m?'<span class="missed-badge">Missed</span>':""}</div>
                        <div class="item-meta">${gt(c.category)} ${c.pin?$t(c.pin):"Not pinned"} · ${p?`${p}/5 ${wt(p)}`:d?"Missed":"Not rated"}</div>
                        ${c.description?`<p class="item-desc">${g(c.description)}</p>`:""}
                        ${a?`<div class="item-meta">${Tt(w)} ${Ne(b)}</div>`:`<div class="item-meta">${Tt(w)}</div>`}
                        ${Dt(l.habitForwardedTo(f,c.id))}
                        ${nt(c.tags)}
                        ${Le(c.id,p,d)}
                      </div>
                      <div class="item-side">
                        <div class="points">+${c.points}${b?` +${b}🧠`:""}</div>
                        <div class="mini-actions">
                          ${K?`<button class="mini-btn on" data-action="open-edit-habit" data-id="${c.id}" ${d?"disabled":""}>Edit</button>`:""}
                          <button class="mini-btn" data-action="open-forward-habit" data-id="${c.id}" ${d?"disabled":""} title="Forward habit to another day">${B("forward")}</button>
                          <button class="mini-btn ${c.pin?"on":""}" data-action="open-pin-habit" data-id="${c.id}" ${d?"disabled":""} title="Pin habit">${B("pin")}</button>
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
          ${me("task",e.taskSort||"default")}
          ${Yt()}
          <span class="points">+${n.taskScore} pts</span>
        </div>
      </div>
      <div class="list">
        ${s.length?s.map(c=>{const p=!!c.sourcePinId,S=p?l.findPinnedTask(c.sourcePinId):null,m=Math.max(0,Math.min(5,Number(c.rating)||0)),w=!c.done&&d;return`
                    <article class="item-card ${c.done?"done":""} ${w?"missed":""} ${d?"is-locked":""}" style="border-left:3px solid ${F(c.category)}">
                      <button class="check" data-action="toggle-task" data-id="${c.id}" ${d?"disabled":""}>✓</button>
                      <div class="item-body">
                        <div class="item-title">${g(c.title)} ${w?'<span class="missed-badge">Missed</span>':""}</div>
                        <div class="item-meta">${gt(c.category)} ${S?$t(S.pin):"One-time task"} · ${c.done?"Done":d?"Missed":"Pending"} · ${m?`${m}/5 ${wt(m)}`:"No rating"}</div>
                        ${c.description?`<p class="item-desc">${g(c.description)}</p>`:""}
                        ${Ie(c.forwardedFrom)}
                        ${Dt(c.forwardedTo)}
                        ${nt(c.tags)}
                        ${c.image?'<span class="task-img-badge">📷 Photo attached</span>':""}
                        ${Me(c)}
                        ${Ee(c.id,m,d)}
                      </div>
                      <div class="item-side">
                        <div class="points">+${c.points}</div>
                        <div class="mini-actions">
                          ${K?`<button class="mini-btn on" data-action="open-edit-task" data-id="${c.id}" ${d?"disabled":""}>Edit</button>`:""}
                          <button class="mini-btn" data-action="open-forward-task" data-id="${c.id}" ${d?"disabled":""} title="Forward task to another day">${B("forward")}</button>
                          <button class="mini-btn ${p?"on":""}" data-action="open-pin-task" data-id="${c.id}" ${d?"disabled":""} title="Pin task">${B("pin")}</button>
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
  `}function vt(t){return t==="short"?"#short":t==="medium"?"#medium":"#long"}function ra(){const t=l.getProfile(),e=!!t.locked,a=e?"disabled":"",i=Array.isArray(t.whoAmI)?t.whoAmI:[],s=Array.isArray(t.lifeAreas)?t.lifeAreas:[],n=Array.isArray(t.pGoals)?t.pGoals:[],o=Array.isArray(t.quotes)?t.quotes:[],r=l.profileGoalDurations();r[U].includes(st)||(st=r[U][0]);const d=b=>n.filter(v=>v.term===b).length,c=(bt==="all"?n:n.filter(b=>b.term===bt)).slice().sort((b,v)=>String(b.createdAt).localeCompare(String(v.createdAt))),p=o.slice().sort((b,v)=>!!b.fav!=!!v.fav?b.fav?-1:1:String(v.createdAt).localeCompare(String(b.createdAt))),S=p.slice(0,3),m=p.slice(3),w=String(t.name||"?").trim().slice(0,1).toUpperCase()||"?";return`
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
        ${i.length?i.map((b,v)=>`
          <article class="manage-card whoami-row">
            <span class="whoami-num">${v+1}</span>
            <input class="whoami-input" data-whoami="${b.id}" maxlength="120" value="${g(b.text)}" ${a} aria-label="Who I am ${v+1}" />
            ${e?"":`
              <div class="mini-actions">
                <button class="mini-btn" data-action="move-whoami" data-id="${b.id}" data-dir="-1" ${v===0?"disabled":""} title="Move up">↑</button>
                <button class="mini-btn" data-action="move-whoami" data-id="${b.id}" data-dir="1" ${v===i.length-1?"disabled":""} title="Move down">↓</button>
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
          ${s.map(b=>{const v=et===b.id;return`
              <article class="life-card ${v?"open":""}">
                <button type="button" class="life-head" data-action="toggle-lifearea" data-id="${b.id}" aria-expanded="${v?"true":"false"}">
                  <b>${g(b.title)}</b>
                  <span>${v?"▾":"▸"}</span>
                </button>
                ${v?`
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
              ${["short","medium","long"].map(b=>`<button type="button" class="chip hashtag-${b} ${U===b?"on":""}" data-action="set-pgoal-term" data-term="${b}">${vt(b)}</button>`).join("")}
            </div>
          </div>
          <div class="row-2">
            <label>Timeframe
              <select id="new-pgoal-duration">
                ${r[U].map(b=>`<option value="${g(b)}" ${st===b?"selected":""}>${g(b)}</option>`).join("")}
              </select>
            </label>
            <label style="justify-content:flex-end">&nbsp;
              <button class="primary-btn compact-btn" data-action="add-pgoal">Add goal</button>
            </label>
          </div>
          <p class="item-meta">${U==="short"?"Short term → pick a week (1–4 weeks).":U==="medium"?"Medium term → pick a month up to 3 months.":"Long term → a year or more."}</p>
        </div>
      `}
      <div class="chip-row" style="margin-bottom:10px">
        ${[["all",`All (${n.length})`],["short",`#short (${d("short")})`],["medium",`#medium (${d("medium")})`],["long",`#long (${d("long")})`]].map(([b,v])=>`<button type="button" class="chip ${bt===b?"on":""}" data-action="set-pgoal-filter" data-filter="${b}">${v}</button>`).join("")}
      </div>
      <div class="habit-manage">
        ${c.length?c.map(b=>`
          <article class="manage-card pgoal-card term-${b.term}">
            <div class="pgoal-top">
              <span class="hashtag hashtag-${b.term}">${vt(b.term)}</span>
              <span class="duration-pill">⏳ ${g(b.duration)}</span>
              ${e?"":`<button class="mini-btn" data-action="remove-pgoal" data-id="${b.id}" title="Remove goal">✕</button>`}
            </div>
            ${e?`<div class="item-title" style="margin-top:6px">${g(b.text)}</div>`:`
                <input data-pgoal-text="${b.id}" maxlength="200" value="${g(b.text)}" style="margin-top:8px" aria-label="Goal text" />
                <div class="row-2" style="margin-top:8px">
                  <select data-pgoal-term="${b.id}" aria-label="Goal term">
                    ${["short","medium","long"].map(v=>`<option value="${v}" ${b.term===v?"selected":""}>${vt(v)}</option>`).join("")}
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
      ${p.length?`
        <div class="quote-fav-head"><span class="item-title">★ Top 3 favourites</span></div>
        <div class="habit-manage" style="margin-bottom:8px">
          ${S.map(b=>ge(b,e)).join("")}
        </div>
        ${m.length?`
          <button class="ghost-btn compact full" data-action="toggle-quotes">${mt?"Show less ▴":`More (${m.length}) — see the rest ▾`}</button>
          ${mt?`<div class="habit-manage" style="margin-top:8px">${m.map(b=>ge(b,e)).join("")}</div>`:""}
        `:mt&&!m.length?'<p class="item-meta">No more quotes — that is all of them.</p>':""}
      `:'<div class="empty">No quotes yet — add the words that move you.</div>'}
    </section>
  `}function ge(t,e){return`
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
  `}function da(){document.querySelectorAll("[data-profile]").forEach(t=>{t.addEventListener("input",()=>{l.setProfileField(t.dataset.profile,t.value)||k()})}),document.querySelectorAll("[data-lifearea-title]").forEach(t=>{t.addEventListener("change",()=>{l.updateLifeArea(t.dataset.lifeareaTitle,{title:t.value}),k()})}),document.querySelectorAll("[data-lifearea-desc]").forEach(t=>{t.addEventListener("input",()=>{l.updateLifeArea(t.dataset.lifeareaDesc,{description:t.value})})}),document.querySelectorAll("[data-pgoal-text]").forEach(t=>{t.addEventListener("change",()=>{l.updateProfileGoal(t.dataset.pgoalText,{text:t.value}),k()})}),document.querySelectorAll("[data-pgoal-term]").forEach(t=>{t.addEventListener("change",()=>{l.updateProfileGoal(t.dataset.pgoalTerm,{term:t.value}),k()})}),document.querySelectorAll("[data-pgoal-duration]").forEach(t=>{t.addEventListener("change",()=>{l.updateProfileGoal(t.dataset.pgoalDuration,{duration:t.value}),k()})})}function ca(){const t=l.week(new Date(`${f}T00:00:00`)),e=t.reduce((i,s)=>i+s.earned,0),a=Math.round(e/7);return`
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
  `}function la(){const t=xt||M(f),e=Kt(t),a=l.todayKey();return`
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
          ${Zt().map(i=>`<span>${i.label.slice(0,1)}</span>`).join("")}
        </div>
        <div class="pin-cal-grid">
          ${e.map(i=>{if(!i)return"<span></span>";const s=l.scoreFor(i),n=i===f?"on-selected":s.percent>=100?"on-perfect":s.earned>0?"on":"",o=s.locked?'<i class="dot-lock"></i>':"";return`<button type="button" class="pin-cal-day hist-cal-day ${n} ${i===a?"is-today":""}" data-action="pick-date" data-date="${i}" title="${g(i)}: ${s.earned}/${s.max} pts (${s.percent}%)"><b>${Number(i.slice(8,10))}</b><span>${s.earned}</span>${o}</button>`}).join("")}
        </div>
      </div>
    </section>
  `}function ua(t){const e=new Map((t||[]).map(n=>[n.date,n])),a=At||M(f),i=Kt(a),s=l.todayKey();return`
    <div class="pin-cal">
      <div class="pin-cal-head"><b>${Lt(a)}</b><span class="item-meta">${e.size} locked</span></div>
      <div class="pin-cal-grid pin-cal-week">
        ${Zt().map(n=>`<span>${n.label.slice(0,1)}</span>`).join("")}
      </div>
      <div class="pin-cal-grid">
        ${i.map(n=>{if(!n)return"<span></span>";const o=e.get(n),r=!!o,d=N.includes(n)?"on-selected":r?"on-locked":"on-open",c=l.scoreFor(n),p=o?o.earned:c.earned;return`<button type="button" class="pin-cal-day hist-cal-day ${d} ${n===s?"is-today":""}" data-action="toggle-locked-day" data-date="${n}" title="${g(n)}: ${r?"Locked":"Open"} — ${p} pts"><b>${Number(n.slice(8,10))}</b><span>${p}</span></button>`}).join("")}
      </div>
    </div>
  `}function pa(){return`
    <section class="manage-card export-card">
      <div class="section-head">
        <div>
          <div class="item-title">Select &amp; export</div>
          <div class="item-meta">Pick a day, week, month or year, then a format.</div>
        </div>
      </div>
      <div class="chip-row" style="margin-bottom:10px">
        ${["day","week","month","year"].map(t=>`<button type="button" class="chip ${R===t?"on":""}" data-action="set-histexp-range" data-range="${t}">${t[0].toUpperCase()}${t.slice(1)}</button>`).join("")}
      </div>
      ${R==="day"||R==="week"?`
        <label>Which ${R==="day"?"day":"week (pick any day in it)"}
          <input id="histexp-date" type="date" value="${f}" />
        </label>
      `:""}
      ${R==="month"?`
        <label>Which month
          <input id="histexp-month" type="month" value="${f.slice(0,7)}" />
        </label>
      `:""}
      ${R==="year"?`
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
  `}function ma(){const t=l.history(21),e=f,a=new Date(`${e}T00:00:00`),i=new Date(a);i.setDate(a.getDate()-(a.getDay()-l.getWeekStart()+7)%7);const s=Array.from({length:7},(r,d)=>{const c=new Date(i);return c.setDate(i.getDate()+d),l.todayKey(c)}),n=s.map(r=>t.find(d=>d.date===r)).filter(Boolean),o=`${_(s[0])} – ${_(s[6])}`;return`
    <div class="topbar">
      <div>
        <p class="kicker">Archive</p>
        <h1>Past reports</h1>
      </div>
      <button class="ghost-btn compact" data-action="open-export">Export</button>
    </div>
    ${la()}
    ${ca()}
    ${pa()}
    <section class="section">
      <div class="section-head">
        <h2>Week</h2>
        <span class="item-meta">${o}</span>
      </div>
      <div class="history-list">
        ${n.length?n.map(r=>`
                    <article class="history-card">
                      <div class="section-head">
                        <div>
                          <div class="item-title">${_(r.date)}</div>
                          <div class="item-meta">${r.locked?"Locked":"Open"} · ${Ce(r.percent)} · ${r.percent}%${r.locked&&(r.missedHabits||0)+(r.missedTasks||0)>0?` · ❌ ${(r.missedHabits||0)+(r.missedTasks||0)} missed`:""}</div>
                        </div>
                        <button class="ghost-btn compact" data-action="pick-date" data-date="${r.date}">Open</button>
                      </div>
                      <div class="bar"><span style="width:${r.percent}%"></span></div>
                      ${r.note?ea(r.note):""}
                    </article>
                  `).join(""):'<div class="empty">No reports in this week.</div>'}
      </div>
    </section>
  `}function ga(t,e){const a=new Date(`${t}T00:00:00`);return a.setDate(a.getDate()+e),l.todayKey(a)}function fa(){return G==="month"?`${ut(M(f),J)}-15`:G==="year"?`${Number(f.slice(0,4))+J}-06-15`:ga(f,J*7)}function ha(t){const[e,a]=l.resolveRange(G,t);return G==="week"?`${_(e)} – ${_(a)}`:G==="month"?Lt(e.slice(0,7)):e.slice(0,4)}function ya(){const t=fa(),e=l.categoryChart(G,t),a=J===0?G==="week"?"This week":G==="month"?"This month":"This year":ha(t),i=e.labels.map((n,o)=>{const r=e.cats.reduce((c,p)=>c+(e.perCat[p.id]?e.perCat[p.id][o]:0),0),d=e.cats.map((c,p)=>({cat:c,value:e.perCat[c.id]?e.perCat[c.id][o]:0,ci:p})).filter(c=>c.value>0).map(c=>`<span class="chart-seg" style="height:${Math.max(2,Math.round(c.value/e.max*100))}%;background:${F(c.cat.id,c.ci)}" title="${g(c.cat.label)}: ${c.value} pts"></span>`).join("");return`
      <div class="chart-col" title="${g(e.titles[o])}: ${r} pts">
        <div class="chart-bar">${d||'<span class="chart-empty"></span>'}</div>
        <span class="chart-x">${g(n)}</span>
      </div>
    `}).join(""),s=e.cats.map((n,o)=>`
      <span class="chart-legend-item"><i style="background:${F(n.id,o)}"></i>${g(n.label)} <b>${e.totals[n.id]||0}</b></span>
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
  `}function ba(){l.getDay(f);const t=l.isLocked(f),e=l.consciousEnabled(),a=l.categoryBreakdown(f),i=a.reduce((n,o)=>n+o.earned,0),s=a.reduce((n,o)=>n+o.max,0);return`
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
        <div class="grade-pill">${_(f)}</div>
      </div>
      <p class="lock-hint">Habits and tasks grouped by category.</p>
    </section>
    ${ya()}
    ${a.map(n=>{const o=n.max?Math.round(n.earned/n.max*100):0,r=F(n.id);return`
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
                    ${n.habits.map(d=>{const c=l.habitRating(f,d.id),p=!c&&t,S=l.habitStreak(d.id,f),m=e&&Number(d.consciousPoints)||0,w=c>0?m:0,b=Math.round(d.points*c/5)+w,v=d.points+m;return`
                           <article class="item-card ${c?"done":""} ${p?"missed":""} ${t?"is-locked":""}" style="border-left:3px solid ${F(d.category)};background:linear-gradient(180deg, ${F(d.category)}10, var(--card) 60%)">
                             <button class="check" data-action="toggle-habit" data-id="${d.id}" ${t?"disabled":""}>✓</button>
                             <div class="item-body">
                               <div class="item-title">${g(d.name)} ${p?'<span class="missed-badge">Missed</span>':""}</div>
                               <div class="item-meta">Habit · ${c?`${c}/5 ${wt(c)}`:t?"Missed":"Not rated"} · ${Tt(S)}${e?` ${Ne(m)}`:""}</div>
                              ${d.description?`<p class="item-desc">${g(d.description)}</p>`:""}
                              ${Dt(l.habitForwardedTo(f,d.id))}
                              ${nt(d.tags)}
                              ${Le(d.id,c,t)}
                            </div>
                            <div class="item-side">
                              <div class="points">${b}/${v}</div>
                              <div class="mini-actions">
                                ${K?`<button class="mini-btn on" data-action="open-edit-habit" data-id="${d.id}" ${t?"disabled":""}>Edit</button>`:""}
                                <button class="mini-btn" data-action="open-forward-habit" data-id="${d.id}" ${t?"disabled":""} title="Forward habit to another day">${B("forward")}</button>
                              </div>
                            </div>
                          </article>
                        `}).join("")}
                    ${n.tasks.map(d=>{const c=Math.max(0,Math.min(5,Number(d.rating)||0)),p=!d.done&&t;return`
                           <article class="item-card ${d.done?"done":""} ${p?"missed":""} ${t?"is-locked":""}" style="border-left:3px solid ${F(d.category)};background:linear-gradient(180deg, ${F(d.category)}10, var(--card) 60%)">
                             <button class="check" data-action="toggle-task" data-id="${d.id}" ${t?"disabled":""}>✓</button>
                             <div class="item-body">
                               <div class="item-title">${g(d.title)} ${p?'<span class="missed-badge">Missed</span>':""}</div>
                               <div class="item-meta">Task · ${d.done?"Done":t?"Missed":"Pending"} · ${c?`${c}/5 ${wt(c)}`:"No rating"}${d.description?` · ${g(d.description)}`:""}</div>
                              ${Ie(d.forwardedFrom)}
                              ${Dt(d.forwardedTo)}
                              ${nt(d.tags)}
                              ${d.image?'<span class="task-img-badge">📷 Photo attached</span>':""}
                              ${Me(d)}
                              ${Ee(d.id,c,t)}
                            </div>
                            <div class="item-side">
                              <div class="points">+${d.points}</div>
                              <div class="mini-actions">
                                ${K?`<button class="mini-btn on" data-action="open-edit-task" data-id="${d.id}" ${t?"disabled":""}>Edit</button>`:""}
                                <button class="mini-btn" data-action="open-forward-task" data-id="${d.id}" ${t?"disabled":""} title="Forward task to another day">${B("forward")}</button>
                              </div>
                            </div>
                          </article>
                        `}).join("")}
                  `:'<div class="empty">No activities in this category.</div>'}
            </div>
          </section>
        `}).join("")}
  `}function Ct(t){return`${t||"daily-report-backup"}-${l.todayKey()}.json`}function va(){const t=l.getInstalledAt(),e=String(t).slice(0,10),a=new Date(`${e}T00:00:00`),i=new Date(`${l.todayKey()}T00:00:00`),s=Number.isNaN(a.getTime())?1:Math.max(1,Math.round((i-a)/864e5)+1),n=String(Number(e.slice(8,10))).padStart(2,"0"),o=e.slice(5,7),r=e.slice(2,4),d=/^\d{4}-\d{2}-\d{2}$/.test(e)?`${n}/${o}/${r}`:e,c=Math.floor((s-1)/365)+1;return`Using Daily Report since ${d} · day ${s} · year ${c}`}function Re(){return typeof window.showDirectoryPicker=="function"}function Xt(){return new Promise((t,e)=>{const a=indexedDB.open("daily-report-pwa",1);a.onupgradeneeded=()=>a.result.createObjectStore("kv"),a.onsuccess=()=>t(a.result),a.onerror=()=>e(a.error)})}function ka(t){return Xt().then(e=>new Promise((a,i)=>{const s=e.transaction("kv","readonly").objectStore("kv").get(t);s.onsuccess=()=>a(s.result),s.onerror=()=>i(s.error)}))}function $a(t,e){return Xt().then(a=>new Promise((i,s)=>{const n=a.transaction("kv","readwrite");n.objectStore("kv").put(e,t),n.oncomplete=()=>i(),n.onerror=()=>s(n.error)}))}function wa(t){return Xt().then(e=>new Promise((a,i)=>{const s=e.transaction("kv","readwrite");s.objectStore("kv").delete(t),s.oncomplete=()=>a(),s.onerror=()=>i(s.error)}))}function Sa(){return!Re()||typeof indexedDB>"u"?(D="unsupported",Promise.resolve()):ka("backupDir").then(t=>{if(L=t||null,!L){D="unset";return}return L.queryPermission({mode:"readwrite"}).then(e=>{D=e==="granted"?"granted":"prompt"}).catch(()=>{D="prompt"})}).catch(()=>{L=null,D="unset"})}function xa(){return D==="unsupported"?"Folder picking needs Chrome/Edge on desktop — on phones backups download instead.":D==="unset"?"No folder chosen yet.":D==="prompt"?"Tap Choose folder to allow access again.":D==="denied"?"Access was denied — choose the folder again.":D==="granted"&&L?`Folder: ${L.name}`:"Checking…"}async function Aa(){if(!Re()){y("Folder access needs Chrome or Edge");return}try{const t=await window.showDirectoryPicker({id:"daily-report-backup",mode:"readwrite"});await $a("backupDir",t),L=t,D="granted",y("Backup folder set")}catch(t){t&&t.name==="AbortError"||y("Couldn't open that folder")}k()}async function Ta(){try{await wa("backupDir")}catch{y("Couldn't remove folder");return}L=null,D="unset",y("Backup folder removed"),k()}async function Da(){if(L){try{const t=await L.requestPermission({mode:"readwrite"});D=t==="granted"?"granted":"denied",y(t==="granted"?"Folder access granted":"Access denied")}catch{D="denied"}k()}}async function Ca(){const t=l.exportBackup(),e=Ct();if(D==="granted"&&L)try{const i=await(await L.getFileHandle(e,{create:!0})).createWritable();await i.write(t),await i.close(),y("Backup saved to your folder"),je();return}catch{}ot(e,t,"application/json"),y("Backup downloaded")}async function Pa(){if(D!=="granted"||!L)return[];const t=[];try{for await(const e of L.values())if(e&&e.kind==="file"&&/\.json$/i.test(e.name))try{const a=await e.getFile();t.push({name:e.name,modified:a.lastModified})}catch{}}catch{return t}return t.sort((e,a)=>a.modified-e.modified),t}async function je(){const t=document.getElementById("folder-backup-list");if(!t)return;if(D!=="granted"||!L){t.innerHTML='<button class="ghost-btn compact" data-action="trigger-import">Import from a file instead</button>';return}t.innerHTML='<p class="item-meta">Loading backups…</p>';const e=await Pa();if(!document.getElementById("folder-backup-list"))return;e.length?t.innerHTML=e.map(i=>`
            <div style="display:flex;gap:8px;align-items:center;margin-bottom:6px">
              <span class="item-meta" style="flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${g(i.name)}</span>
              <button class="ghost-btn compact" data-action="restore-backup" data-name="${g(i.name)}">Restore</button>
            </div>
          `).join(""):t.innerHTML='<p class="item-meta">Folder is empty — press Export backup now to create the first backup.</p>';const a=document.createElement("div");a.innerHTML='<button class="ghost-btn compact" data-action="trigger-import">Import from a file instead</button>',t.appendChild(a)}async function La(t){if(L)try{const a=await(await L.getFileHandle(t)).getFile();He(await a.text(),t)}catch{y("Couldn't read that backup")}}function He(t,e){let a;try{a=JSON.parse(t)}catch{y("That file isn't valid JSON.");return}const i=l.backupKind(a);if(i==="ok"){if(!window.confirm(`Replace ALL app data with "${e}"?`))return;ot(Ct("daily-report-pre-import"),l.exportBackup(),"application/json"),l.importBackup(a),y("Backup imported"),k();return}if(i==="report-export"){const s=l.previewReport(a);if(!s.days){y("That report file has no day rows to import.");return}if(!window.confirm(`Import ${s.days} day(s) (${s.start} → ${s.end}) from "${e}" as locked history?

${s.newHabits} new habit(s) will be added to your list.
Days already in the app on those dates will be overwritten.`))return;ot(Ct("daily-report-pre-import"),l.exportBackup(),"application/json");const o=l.importReport(a);if(!o){y("That file doesn't look like a valid Daily Report backup.");return}y(`Imported ${o.days} day(s)${o.habits?` + ${o.habits} new habit(s)`:""}`),k();return}if(i==="wrong-app"){y("That backup belongs to another app (e.g. Iron Log) — it can’t be imported into Daily Report.");return}y("That file doesn't look like a valid Daily Report backup.")}async function Ea(){if(!it){y("Use the browser menu: Install / Add to Home Screen");return}try{it.prompt();const t=await it.userChoice;t&&t.outcome==="accepted"&&y("Installing Daily Report…")}catch{}it=null,k()}async function Na(){const t=`./version.json?v=${Date.now()}`,e=await fetch(t,{cache:"no-store"});if(!e.ok)throw new Error(`http ${e.status}`);const a=await e.json(),i=a&&(a.version||a.v)||null;if(!i)throw new Error("no version field");return String(i)}async function Ma(){X=!0,Ut=!1,Z="Checking for updates… (needs internet)",k();try{if("serviceWorker"in navigator&&navigator.serviceWorker.getRegistration){const e=await navigator.serviceWorker.getRegistration().catch(()=>null);e&&e.update&&e.update().catch(()=>{})}}catch{}if(typeof fetch>"u"){X=!1,Z="This browser can’t check — but the app itself works offline. Use Export backup to protect your data.",k();return}const t=setTimeout(()=>{X&&(X=!1,Z="Couldn't reach the server — offline? The app itself works offline; updating needs internet.",k())},15e3);try{const e=await Na();if(clearTimeout(t),X=!1,zt=e,e&&e!==Pe){Ut=!0,Z="Update found — updating automatically…",k(),await Be(!0);return}Z="You're on the latest version. The app works offline."}catch{clearTimeout(t),X=!1,Z="Couldn't reach the server — offline, or this file wasn't opened from the installed/hosted app. The app itself works offline; updating needs internet."}k()}function fe(t){return new Promise(e=>{if(!("serviceWorker"in navigator))return e();const a=()=>e(),i=setTimeout(()=>{try{navigator.serviceWorker.removeEventListener("controllerchange",a)}catch{}e()},t||4e3),s=()=>{clearTimeout(i);try{navigator.serviceWorker.removeEventListener("controllerchange",s)}catch{}e()};try{navigator.serviceWorker.addEventListener("controllerchange",s)}catch{e()}})}async function Be(t){var a;try{ot(Ct("daily-report-pre-update"),l.exportBackup(),"application/json")}catch{}y("Backup saved — updating app…"),Z=`Backup saved — updating${zt?` to ${String(zt).slice(-8)}`:""}…`,k();const e=()=>{const i=window.location.href.includes("?")?"&":"?";try{window.location.replace(`${window.location.href.split("#")[0]}${i}v=${Date.now()}#updated`)}catch{window.location.reload()}setTimeout(()=>{try{window.location.reload()}catch{}},2500)};try{if("serviceWorker"in navigator&&navigator.serviceWorker.getRegistration){const i=await navigator.serviceWorker.getRegistration().catch(()=>null);if(i){const s=i.waiting;if(s){try{s.postMessage("SKIP_WAITING")}catch{try{i.waiting.postMessage({type:"SKIP_WAITING"})}catch{}}await fe(4e3),e();return}try{await i.update()}catch{}const n=await navigator.serviceWorker.getRegistration().catch(()=>i),o=(n||i).waiting||(n||i).installing;if(o){try{o.postMessage("SKIP_WAITING")}catch{}try{(a=(n||i).waiting)==null||a.postMessage("SKIP_WAITING")}catch{}await fe(5e3),e();return}try{const r=navigator.serviceWorker.controller;r&&r.postMessage({type:"CLEAR_APP_CACHES"})}catch{}try{if(typeof caches<"u"){const r=await caches.keys().catch(()=>[]);await Promise.all(r.filter(d=>d.startsWith("daily-report-")).map(d=>caches.delete(d).catch(()=>!1)))}}catch{}try{await fetch(`./index.html?v=${Date.now()}`,{cache:"reload"})}catch{}try{await fetch(`./version.json?v=${Date.now()}`,{cache:"reload"})}catch{}try{await(n||i).unregister()}catch{}e();return}}}catch{}try{await fetch(`./index.html?v=${Date.now()}`,{cache:"reload"})}catch{}setTimeout(e,600)}function Ia(){const t=l.getSettings(),e=l.getAllHabits(),a=l.getPinnedTasks(),i=l.lockedReports();return`
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
      <p class="item-meta">Version: ${g(Ze)}</p>
      <p class="item-meta">📅 ${g(va())}</p>
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:8px">
        <button class="primary-btn" data-action="check-updates" ${X?"disabled":""}>${X?"Checking…":"Check for updates"}</button>
        ${Ut?'<button class="primary-btn" data-action="apply-update">Restart with update</button>':""}
      </div>
      <p class="item-meta">${g(Z)}</p>
    </section>

    <section class="manage-card">
      <h2>Data backup</h2>
      <p class="muted tight">Pick a backup folder once (Chrome/Edge on desktop) and exports save straight into it. On phones, backups download to your Downloads folder instead. Import accepts full backups (<b>daily-report-backup-*.json</b>) or month/week report exports, which are added as locked history.</p>
      <p class="item-meta">${g(xa())}</p>
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:8px">
        ${D==="prompt"?'<button class="primary-btn" data-action="grant-folder">Allow access</button>':'<button class="ghost-btn compact" data-action="choose-folder">Choose folder</button>'}
        ${L?'<button class="ghost-btn compact" data-action="forget-folder">Remove</button>':""}
        <button class="primary-btn" data-action="backup-now">Export backup now</button>
        <button class="ghost-btn compact" data-action="trigger-import">Import backup</button>
      </div>
      <input type="file" id="backup-file" accept="application/json,.json" hidden />
      <div id="folder-backup-list" style="margin-top:10px"></div>
    </section>

    <section class="manage-card">
      <h2>Categories</h2>
      <p class="muted tight">Add your own categories — they appear in forms, Activities and exports. Pick a colour and add bullet-point goals for each category.</p>
      <div class="habit-manage">
        ${l.getCategories().map(s=>{const n=l.getCustomCategories().some(d=>d.id===s.id),o=s.color||F(s.id),r=s.goals||"";return`
              <article class="manage-card cat-manage-card">
                <div class="section-head">
                  <div>${gt(s.id)}</div>
                  <div class="mini-actions">
                    ${n?`<button class="mini-btn on" data-action="rename-category" data-id="${s.id}">Rename</button>`:""}
                    ${n?`<button class="mini-btn" data-action="delete-category" data-id="${s.id}">✕</button>`:""}
                  </div>
                </div>
                <div class="cat-manage-row">
                  <label>Colour
                    <input type="color" data-cat-color="${s.id}" value="${g(o)}" aria-label="Colour for ${g(s.label)}" />
                  </label>
                  <div class="cat-goals-wrap">
                    <label>Goals (bullet points)
                      <textarea data-cat-goals="${s.id}" maxlength="1000" placeholder="• Goal one&#10;• Goal two&#10;• Goal three" style="min-height:80px">${g(r)}</textarea>
                    </label>
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
                    <div class="item-title">#${g(n)}</div>
                    <div class="item-meta">Used ${o} time${o===1?"":"s"}</div>
                  </div>
                  <div class="mini-actions">
                    <button class="mini-btn on" data-action="rename-tag" data-tag="${g(n)}">Rename</button>
                    <button class="mini-btn" data-action="delete-tag" data-tag="${g(n)}">✕</button>
                  </div>
                </div>
              </article>
            `).join(""):'<div class="empty">No tags yet — add some in a habit or task form.</div>'})()}
      </div>
      <div style="display:flex;gap:8px;margin-top:10px;flex-wrap:wrap">
        <select id="tag-habit-pick" style="flex:1;min-width:0">
          ${l.getAllHabits().map(s=>`<option value="${s.id}">${g(s.name)}</option>`).join("")}
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
        ${l.getGoals().length?l.getGoals().map(s=>{var d,c;const n=l.goalProgress(s,f),o=l.getBadges().some(p=>p.goalId===s.id),r=s.kind==="habit-streak"?((d=l.findHabit(s.targetId))==null?void 0:d.name)||"Deleted habit":s.kind==="task-streak"?((c=l.findPinnedTask(s.targetId))==null?void 0:c.title)||"Deleted task":"Any day at 100%";return`
                    <article class="manage-card goal-card ${o?"goal-earned":""}">
                      <div class="section-head">
                        <div>
                          <div class="item-title">${Ht(s.tier)} ${g(s.title)}</div>
                          <div class="item-meta">${xe(s.tier)} · “${g(s.rewardTitle)}” · ${g(r)}</div>
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
                  <div class="reward-medal">${Ht(s.tier)}</div>
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
      ${ua(i)}
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
                    <article class="manage-card" style="${s.pin?`border-left:4px solid ${F(s.category)}`:""}">
                      <div class="section-head">
                        <div>
                          <div class="item-title">${g(s.name)}</div>
                          <div class="item-meta">${gt(s.category)} · ${s.pin?$t(s.pin):"Not pinned"} · +${s.points} pts ${t.showConscious!==!1?Number(s.consciousPoints)?`· 🧠 +${s.consciousPoints}`:"· No conscious pts":""} · ${Tt(l.habitStreak(s.id,f))}</div>
                          ${s.description?`<p class="item-desc">${g(s.description)}</p>`:""}
                          ${nt(s.tags)}
                        </div>
                        <div class="mini-actions">
                          <button class="mini-btn ${s.pin?"on":""}" data-action="open-pin-habit" data-id="${s.id}">${B("pin")}</button>
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
                    <article class="manage-card" style="border-left:4px solid ${F(s.category)}">
                      <div class="section-head">
                        <div>
                          <div class="item-title">${g(s.title)}</div>
                          <div class="item-meta">${gt(s.category)} · ${$t(s.pin)} · +${s.points} pts</div>
                          ${s.description?`<p class="item-desc">${g(s.description)}</p>`:""}
                          ${nt(s.tags)}
                        </div>
                        <div class="mini-actions">
                          <button class="mini-btn on" data-action="open-pin-template" data-id="${s.id}">${B("pin")}</button>
                          <button class="mini-btn" data-action="unpin-template" data-id="${s.id}">✕</button>
                        </div>
                      </div>
                    </article>
                  `).join(""):'<div class="empty">Pin a task from Today to repeat it.</div>'}
      </div>
    </section>
  `}function M(t){if(/^\d{4}-\d{2}$/.test(String(t||"")))return String(t);if(/^\d{4}-\d{2}-\d{2}$/.test(String(t||"")))return String(t).slice(0,7);const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}`}function ut(t,e){const[a,i]=String(t).split("-").map(Number),s=new Date(a,(i||1)-1+e,1);return`${s.getFullYear()}-${String(s.getMonth()+1).padStart(2,"0")}`}function Lt(t){const[e,a]=String(t).split("-").map(Number);return new Date(e,(a||1)-1,1).toLocaleDateString(void 0,{month:"long",year:"numeric"})}function Zt(){const t=l.getWeekStart(),e=at.findIndex(a=>a.value===t);return e<=0?at:[...at.slice(e),...at.slice(0,e)]}function Kt(t){const[e,a]=String(t).split("-").map(Number),s=(new Date(e,a-1,1).getDay()-l.getWeekStart()+7)%7,n=new Date(e,a,0).getDate(),o=[];for(let r=0;r<s;r++)o.push(null);for(let r=1;r<=n;r++)o.push(`${e}-${String(a).padStart(2,"0")}-${String(r).padStart(2,"0")}`);return o}function he(t,e,a){const i=new Set(a||[]),s=Kt(e);return`
    <div class="pin-cal" data-cal="${t}">
      <div class="pin-cal-head">
        <button type="button" class="mini-btn" data-action="pin-cal-nav" data-target="${t}" data-dir="-1" aria-label="Previous month">‹</button>
        <b>${Lt(e)}</b>
        <button type="button" class="mini-btn" data-action="pin-cal-nav" data-target="${t}" data-dir="1" aria-label="Next month">›</button>
      </div>
      <div class="pin-cal-grid pin-cal-week">
        ${Zt().map(n=>`<span>${n.label.slice(0,1)}</span>`).join("")}
      </div>
      <div class="pin-cal-grid">
        ${s.map(n=>n?`<button type="button" class="pin-cal-day ${i.has(n)?"on":""}" data-action="toggle-pin-date" data-target="${t}" data-date="${n}">${Number(n.slice(8,10))}</button>`:"<span></span>").join("")}
      </div>
    </div>
  `}function Ra(t,e){const a=(t==null?void 0:t.mode)||"forever",i=(t==null?void 0:t.until)||"",s=((t==null?void 0:t.weekdays)||[]).map(Number),n=((t==null?void 0:t.monthDays)||[]).map(Number),o=Array.isArray(t==null?void 0:t.yearDays)?[...t.yearDays].sort():[],r=Array.isArray(t==null?void 0:t.customDates)?[...t.customDates].sort():[],d=Array.isArray(t==null?void 0:t.exceptDates)?[...t.exceptDates].sort():Array.isArray(t==null?void 0:t.exceptions)?[...t.exceptions].sort():[],c=e&&e._exceptCal||M(f),p=e&&e._customCal||M(f),S=e&&e._yearMonth||"01";return`
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
        ${at.map(m=>`
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
      ${he("custom",p,r)}
      <div class="chip-row" style="margin-top:8px">
        ${r.length?r.map(m=>`<button type="button" class="chip on" data-action="toggle-pin-date" data-target="custom" data-date="${m}" title="Tap to remove">${m} ✕</button>`).join(""):'<span class="item-meta">No extra custom dates.</span>'}
      </div>
    </div>
    <div class="pin-exceptions" style="margin-top:4px">
      <p class="item-meta"><b style="color:var(--text)">Exceptions</b> — skip these days (tap days on the calendar). Applies to every repeat mode.</p>
      ${he("except",c,d)}
      <div class="chip-row" style="margin-top:8px">
        ${d.length?d.map(m=>`<button type="button" class="chip on" data-action="toggle-pin-date" data-target="except" data-date="${m}" title="Tap to remove">${m} ✕</button>`).join(""):'<span class="item-meta">No exceptions.</span>'}
      </div>
    </div>
  `}function ja(){if(!x)return"";if(x==="choose")return`
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
                ${l.getCategories().map(r=>`
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
    `}if(x==="goal"||x==="edit-goal"){const t=x==="edit-goal",e=h||{},a=e.kind||"habit-streak",i=l.getAllHabits(),s=l.getPinnedTasks(),n=e.targetId||"";return`
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
                ${Se.map(o=>`<button type="button" class="chip ${a===o.id?"on":""}" data-action="set-goal-kind" data-kind="${o.id}">${o.label}</button>`).join("")}
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
                ${ht.map(o=>`<button type="button" class="chip ${(e.tier||"bronze")===o.id?"on":""}" data-action="set-goal-tier" data-tier="${o.id}">${o.medal} ${o.label}</button>`).join("")}
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
            ${Ra(i,h)}
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
              <input name="targetDate" type="date" required value="${sa(i||f)}" />
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
    `:""}return""}function k(){if(It){Qt();try{const t=l.isLocked(f);It.innerHTML=`
    <div class="app-shell">
      <main class="screen active">
        ${E==="today"?oa():""}
        ${E==="profile"?ra():""}
        ${E==="history"?ma():""}
        ${E==="habits"?ba():""}
        ${E==="settings"?Ia():""}
      </main>
      ${["today","habits"].includes(E)&&!t?'<button class="fab" data-action="open-add" aria-label="Add">+</button>':""}
      ${E==="settings"?'<button class="fab" data-action="open-add-habit" aria-label="Add habit">+</button>':""}
      <nav class="tabbar tabs-5">
        <button class="tab ${E==="today"?"active":""}" data-screen="today">${B("home")}Today</button>
        <button class="tab ${E==="profile"?"active":""}" data-screen="profile">${B("profile")}Profile</button>
        <button class="tab ${E==="history"?"active":""}" data-screen="history">${B("history")}History</button>
        <button class="tab ${E==="habits"?"active":""}" data-screen="habits">${B("habit")}Activities</button>
        <button class="tab ${E==="settings"?"active":""}" data-screen="settings">${B("settings")}Settings</button>
      </nav>
    </div>
    ${ja()}
    <div class="toast" id="toast"></div>
  `,Ba(),da(),Fa(),je(),Ha()}catch(t){const e=t&&t.stack?String(t.stack).slice(0,400):t&&t.message?t.message:"Unknown error";It.innerHTML=`<div class="app-shell"><section class="manage-card"><h2>Could not load (Error B)</h2><p class="muted tight">${g(e)}</p><button class="primary-btn full" data-action="reload-app">Reload</button></section></div>`}}}function Ha(){if(x!=="habit"&&x!=="task")return;const t=document.querySelector(".sheet");t&&(t.scrollTop=0);const e=document.querySelector('.sheet input[name="title"]');if(e)try{e.focus({preventScroll:!0})}catch{try{e.focus()}catch{}}}function Ba(){const t=document.getElementById("day-note");t&&t.addEventListener("input",()=>{l.isLocked(f)||l.setNote(f,t.value)})}function Fa(){const t=document.getElementById("lock-time"),e=document.getElementById("auto-lock");t&&t.addEventListener("change",()=>{l.setLockTime(t.value),y(`Lock time set to ${t.value}`),k()}),e&&e.addEventListener("change",()=>{l.setAutoLock(e.checked),y(e.checked?"Auto-lock on":"Auto-lock off"),k()}),document.querySelectorAll("[data-cat-color]").forEach(i=>{i.addEventListener("input",()=>{l.updateCategory(i.dataset.catColor,{color:i.value})})}),document.querySelectorAll("[data-cat-goals]").forEach(i=>{i.addEventListener("input",()=>{l.updateCategory(i.dataset.catGoals,{goals:i.value})})});const a=document.getElementById("backup-file");a&&a.addEventListener("change",()=>{const i=a.files[0];if(!i)return;const s=new FileReader;s.onload=()=>{He(String(s.result||""),i.name),a.value=""},s.onerror=()=>{y("Couldn't read that file."),a.value=""},s.readAsText(i)})}function y(t){const e=document.getElementById("toast");e&&(e.textContent=t,e.classList.add("show"),setTimeout(()=>e.classList.remove("show"),1800))}function Fe(){const t=l.getTheme();document.documentElement.dataset.theme=t;const e=document.querySelector('meta[name="theme-color"]');e&&(e.content=t==="light"?"#f3f1ea":"#0e1116")}function g(t){return String(t||"").split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;").split('"').join("&quot;")}function H(){return l.isLocked(f)?(y("This report is locked. Unlock it in Settings."),!0):!1}function te(t){return{mode:(t==null?void 0:t.mode)||"forever",until:(t==null?void 0:t.until)||"",weekdays:Array.isArray(t==null?void 0:t.weekdays)?t.weekdays.map(Number):[],monthDays:Array.isArray(t==null?void 0:t.monthDays)?t.monthDays.map(Number):[],yearDays:Array.isArray(t==null?void 0:t.yearDays)?[...t.yearDays]:[],customDates:Array.isArray(t==null?void 0:t.customDates)?[...t.customDates]:[],exceptDates:Array.isArray(t==null?void 0:t.exceptDates)?[...t.exceptDates]:Array.isArray(t==null?void 0:t.exceptions)?[...t.exceptions]:[]}}function Oa(t){const e=l.findHabit(t);e&&(x="pin",h={kind:"habit",id:t,title:e.name,pin:e.pin?te(e.pin):{mode:"forever",until:"",weekdays:[],monthDays:[],yearDays:[],customDates:[],exceptDates:[]},_exceptCal:M(f),_customCal:M(f),_yearMonth:"01"})}function Ga(t){const e=l.findTask(f,t);if(!e)return;const a=e.sourcePinId?l.findPinnedTask(e.sourcePinId):null;x="pin",h={kind:"task",id:t,title:e.title,pin:a!=null&&a.pin?te(a.pin):{mode:"forever",until:"",weekdays:[],monthDays:[],yearDays:[],customDates:[],exceptDates:[]},_exceptCal:M(f),_customCal:M(f),_yearMonth:"01"}}function Wa(t){const e=l.findPinnedTask(t);e&&(x="pin",h={kind:"template",id:t,title:e.title,pin:e.pin?te(e.pin):{mode:"forever",until:"",weekdays:[],monthDays:[],yearDays:[],customDates:[],exceptDates:[]},_exceptCal:M(f),_customCal:M(f),_yearMonth:"01"})}function _a(t){var c;const e=t.querySelector('input[name="mode"]').value,a=((c=t.querySelector('input[name="until"]'))==null?void 0:c.value)||"",i=[...t.querySelectorAll(".weekday.on")].map(p=>Number(p.dataset.day)),s=[...t.querySelectorAll(".monthday.on")].map(p=>Number(p.dataset.day)),n=h&&h.pin||{},o=Array.isArray(n.yearDays)?n.yearDays:[],r=Array.isArray(n.customDates)?n.customDates:[],d=Array.isArray(n.exceptDates)?n.exceptDates:[];return e==="until"&&!a?(y("Pick an until date"),null):e==="weekly"&&!i.length?(y("Pick at least one weekday"),null):e==="monthly"&&!s.length?(y("Pick at least one day of month"),null):e==="yearly"&&!o.length?(y("Add at least one yearly date"),null):e==="custom"&&!r.length?(y("Pick at least one custom date"),null):{mode:e,until:a,weekdays:i,monthDays:s,yearDays:o,customDates:r,exceptDates:d}}function ot(t,e,a){const i=e instanceof Blob?e:new Blob([e],{type:a||"text/plain;charset=utf-8"}),s=URL.createObjectURL(i),n=document.createElement("a");n.href=s,n.download=t,document.body.appendChild(n),n.click(),setTimeout(()=>{document.body.removeChild(n),URL.revokeObjectURL(s)},500)}function dt(t){const e=String(t??"");return/[",\n]/.test(e)?`"${e.replace(/"/g,'""')}"`:e}function ee(t,e){const[a,i]=l.resolveRange(t,e||f);return{range:t,start:a,end:i,rows:l.exportRows(a,i)}}function ye(t,e){const a=t||h&&h.range||"day",{start:i,end:s,rows:n}=ee(a,e),o=[];o.push(["Daily Report export",`${i} to ${s}`].map(dt).join(",")),o.push(["Date","Type","Name","Category","Tags","Points","Rating","Earned","ConsciousPts","Status","Note/Description"].map(dt).join(",")),n.forEach(r=>{r.habits.forEach(d=>{o.push([r.date,"Habit",d.name,d.category,(d.tags||[]).join("|"),d.points,d.rating,d.earned,d.consciousPoints,d.status||(d.rating>0?"done":r.locked?"missed":"pending"),d.description||""].map(dt).join(","))}),r.tasks.forEach(d=>{o.push([r.date,"Task",d.hasImage?`${d.title} [photo]`:d.title,d.category,(d.tags||[]).join("|"),d.points,d.rating||"",d.earned,"",d.status||(d.done?"done":r.locked?"missed":"pending"),d.description||""].map(dt).join(","))}),o.push([r.date,"Summary",`Earned ${r.earned}/${r.max} (${r.percent}%)`,"","","","","","",r.locked?"locked":"open",r.note||""].map(dt).join(","))}),ot(`daily-report-${a}-${i}-to-${s}.csv`,"\uFEFF"+o.join(`
`),"text/csv;charset=utf-8"),y("Excel (CSV) exported")}function be(t,e){const a=t||h&&h.range||"day",{start:i,end:s,rows:n}=ee(a,e),o={app:"Daily Report",exportedAt:new Date().toISOString(),range:a,start:i,end:s,days:n};ot(`daily-report-${a}-${i}-to-${s}.json`,JSON.stringify(o,null,2),"application/json"),y("JSON exported")}function ve(t,e){const a=t||h&&h.range||"day",{start:i,end:s,rows:n}=ee(a,e),o=n.map(d=>`
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
      `).join(""),r=window.open("","_blank");if(!r){y("Popup blocked — allow popups to export PDF");return}r.document.write(`<!DOCTYPE html><html><head><title>Daily Report ${i} to ${s}</title></head><body style="font-family:sans-serif;padding:24px"><h1>Daily Report — ${i} to ${s}</h1>${o}<script>window.onload=function(){window.print()}<\/script></body></html>`),r.document.close(),y("PDF print view opened")}document.addEventListener("click",t=>{const e=t.target.closest("[data-screen]");if(e){E=e.dataset.screen,k();return}const a=t.target.closest("[data-action]");if(!a)return;const i=a.dataset.action;if(i==="close-modal"){if(x==="image"){x=null,h=null,k();return}(t.target.classList.contains("modal-backdrop")||a.classList.contains("ghost-btn"))&&(x=null,h=null,k());return}if(i==="note-bullets"){pe("bullets");return}if(i==="note-numbered"){pe("numbered");return}if(i==="pick-task-image"){const s=document.getElementById("task-image-input");s?s.click():y("Photo picking needs a browser file picker");return}if(i==="remove-task-image"){h&&(h._image="",k(),y("Photo removed — save to apply"));return}if(i==="view-task-image"){const s=l.findTask(f,a.dataset.id),n=s&&s.image?s.image:h&&(h._image||h.image)||"";if(!n){y("No photo on this task");return}x="image",h={image:n,title:s&&s.title||"Task photo"},k();return}if(i==="prev-day"&&ce(-1),i==="next-day"&&ce(1),i==="reload-app"){window.location.reload();return}if(i==="set-theme"){const s=a.dataset.theme==="light"?"light":"dark";l.setTheme(s),Fe(),y(s==="light"?"Light mode on":"Dark mode on")}if(i==="install-app"){Ea();return}if(i==="check-updates"){Ma();return}if(i==="apply-update"){Be();return}if(i==="backup-now"){Ca();return}if(i==="trigger-import"){const s=document.getElementById("backup-file");s&&s.click();return}if(i==="choose-folder"){Aa();return}if(i==="grant-folder"){Da();return}if(i==="forget-folder"){Ta();return}if(i==="restore-backup"){La(a.dataset.name);return}if(i==="goto-settings"&&(E="settings"),i==="open-add-habit"&&(x="habit",h=null),i==="open-add-task"){if(H())return;x="task",h={category:"mentally"}}if(i==="open-add"){if(H())return;x="choose",h={category:"mentally"}}if(i==="toggle-edit"&&(K=!K),i==="open-edit-habit"){const s=l.findHabit(a.dataset.id);if(!s)return;x="edit-habit",h={id:s.id,name:s.name,description:s.description||"",points:s.points,category:s.category,tags:s.tags||[],consciousPoints:Number(s.consciousPoints)||0}}if(i==="open-edit-task"){if(H())return;const s=l.findTask(f,a.dataset.id);if(!s)return;x="edit-task",h={id:s.id,title:s.title,points:s.points,description:s.description,category:s.category,tags:s.tags||[],rating:Number(s.rating)||0,image:s.image||"",_image:void 0}}if(i==="toggle-badges"&&(St=!St),i==="open-goal"&&(x="goal",h={kind:"habit-streak",targetDays:7,tier:"bronze"}),i==="open-edit-goal"){const s=l.getGoals().find(n=>n.id===a.dataset.id);if(!s)return;x="edit-goal",h={...s}}if(i==="remove-goal"&&(l.removeGoal(a.dataset.id),y("Goal removed")),i==="remove-badge"&&(l.removeBadge(a.dataset.id),y("Badge removed")),i==="rate-habit"){if(H())return;const n=l.habitRating(f,a.dataset.id)===Number(a.dataset.rating)?0:Number(a.dataset.rating);l.setHabitRating(f,a.dataset.id,n)}if(i==="rate-task"){if(H())return;const s=l.findTask(f,a.dataset.id);if(!s)return;const o=(Number(s.rating)||0)===Number(a.dataset.rating)?0:Number(a.dataset.rating);l.setTaskRating(f,a.dataset.id,o)}if(i==="open-export"&&(x="export",h={range:h&&h.range||"day"}),i==="set-export-range"){x="export",h={range:a.dataset.range||"day"},k();return}if(i==="do-export"){const s=a.dataset.format,n=h&&h.range||"day";s==="csv"&&ye(n,f),s==="json"&&be(n,f),s==="pdf"&&ve(n,f),x=null,h=null}if(i==="set-histexp-range"){R=["day","week","month","year"].includes(a.dataset.range)?a.dataset.range:"day",k();return}if(i==="histexp-do"){const s=a.dataset.format;let n=f;if(R==="day"||R==="week"){const o=document.getElementById("histexp-date");o&&/^\d{4}-\d{2}-\d{2}$/.test(o.value)&&(n=o.value)}else if(R==="month"){const o=document.getElementById("histexp-month");o&&/^\d{4}-\d{2}$/.test(o.value)&&(n=`${o.value}-15`)}else if(R==="year"){const o=document.getElementById("histexp-year"),r=Number(o&&o.value);Number.isInteger(r)&&r>=2e3&&r<=2100&&(n=`${String(r)}-06-15`)}s==="csv"&&ye(R,n),s==="json"&&be(R,n),s==="pdf"&&ve(R,n);return}if(i==="history-cal-nav"){const s=xt||M(f);xt=ut(s,Number(a.dataset.dir)||0),k();return}if(i==="locked-cal-nav"){const s=At||M(f);At=ut(s,Number(a.dataset.dir)||0),k();return}if(i==="toggle-locked-day"){const s=a.dataset.date,n=N.indexOf(s);n>=0?N.splice(n,1):N.push(s),k();return}if(i==="lock-selected"){const s=[...N].sort();if(!s.length)return;const n=l.lockDays(s);N=[],y(n===1?`Locked ${n} day`:`Locked ${n} days`),k();return}if(i==="unlock-selected"){const s=[...N].sort();if(!s.length)return;const n=l.unlockDays(s);N=[],y(n===1?`Unlocked ${n} day`:`Unlocked ${n} days`),k();return}if(i==="submit-day"&&(l.submitDay(f),y("Report submitted and locked")),i==="unlock-day"&&(l.unlockDay(a.dataset.date),y("Report unlocked")),i==="toggle-habit"){if(H())return;l.toggleHabit(f,a.dataset.id)}if(i==="toggle-task"){if(H())return;l.toggleTask(f,a.dataset.id)}if(i==="remove-task"){if(H())return;l.removeTask(f,a.dataset.id)}if(i==="remove-habit"&&l.removeHabit(a.dataset.id),i==="open-pin-habit"&&Oa(a.dataset.id),i==="open-forward-habit"){if(H())return;const s=l.findHabit(a.dataset.id);if(!s)return;x="forward",h={kind:"habit",id:s.id,title:s.name,from:f}}if(i==="open-forward-task"){if(H())return;const s=l.findTask(f,a.dataset.id);if(!s)return;x="forward",h={kind:"task",id:s.id,title:s.title,from:f}}if(i==="open-pin-task"){if(H())return;Ga(a.dataset.id)}if(i==="open-pin-template"&&Wa(a.dataset.id),i==="unpin-template"&&(l.unpinTaskTemplate(a.dataset.id),y("Task unpinned")),i==="pick-date"&&(f=a.dataset.date,E="today"),i==="set-chart-range"){G=["week","month","year"].includes(a.dataset.range)?a.dataset.range:"week",J=0,k();return}if(i==="chart-nav"){J+=Number(a.dataset.dir)||0,J>0&&(J=0),k();return}if(i==="add-category"){const s=document.getElementById("new-category"),n=l.addCategory(s?s.value:"");y(n.ok?"Category added":n.reason||"Couldn't add category"),k();return}if(i==="rename-category"){const s=l.getCustomCategories().find(r=>r.id===a.dataset.id),n=window.prompt("Rename category",s?s.label:"");if(n==null)return;const o=l.renameCategory(a.dataset.id,n);y(o.ok?"Category renamed":o.reason||"Couldn't rename"),k();return}if(i==="delete-category"){if(!window.confirm("Delete this category? Its habits and tasks move to Mentally."))return;const s=l.deleteCategory(a.dataset.id);y(s.ok?"Category deleted":s.reason||"Couldn't delete"),k();return}if(i==="rename-tag"){const s=window.prompt("Rename tag everywhere",a.dataset.tag||"");if(s==null)return;const n=l.renameTag(a.dataset.tag,s);y(n.ok?n.merged?"Tags merged":"Tag renamed everywhere":n.reason||"Couldn't rename"),k();return}if(i==="delete-tag"){if(!window.confirm(`Delete tag "#${a.dataset.tag}" from all habits and tasks?`))return;l.deleteTag(a.dataset.tag),y("Tag deleted everywhere"),k();return}if(i==="add-tag"){const s=document.getElementById("tag-habit-pick"),n=document.getElementById("new-tag"),o=l.addTagToHabit(s?s.value:"",n?n.value:"");y(o.ok?"Tag added to habit":o.reason||"Couldn't add tag"),k();return}if(i==="set-points"){const s=document.querySelector('input[name="points"]');s&&(s.value=a.dataset.points),document.querySelectorAll(".chip-row .chip[data-points]").forEach(n=>n.classList.remove("on")),a.classList.add("on");return}if(i==="set-category"){const s=a.closest("form")||a.closest(".sheet"),n=s.querySelector('input[name="category"]');n&&(n.value=a.dataset.category),s.querySelectorAll(".cat-row .chip").forEach(o=>o.classList.remove("on")),a.classList.add("on");return}if(i==="set-rating"){const s=a.closest(".sheet")||a.closest("form")||document,n=s.querySelector('input[name="rating"]');n&&(n.value=a.dataset.rating),s.querySelectorAll(".rating-row .chip").forEach(o=>o.classList.remove("on")),a.classList.add("on");return}if(i==="set-conscious"){const s=a.closest(".sheet")||a.closest("form")||document,n=s.querySelector('input[name="consciousPoints"]');n&&(n.value=a.dataset.conscious),s.querySelectorAll(".conscious-row .chip").forEach(o=>o.classList.remove("on")),a.classList.add("on");return}if(i==="set-goal-kind"){const s=a.closest(".sheet")||document,n=s.querySelector('input[name="kind"]');n&&(n.value=a.dataset.kind),s.querySelectorAll(".goal-kind-row .chip").forEach(c=>c.classList.remove("on")),a.classList.add("on");const o=a.dataset.kind,r=s.querySelector(".goal-target-habit"),d=s.querySelector(".goal-target-task");r&&(r.style.display=o==="habit-streak"?"":"none"),d&&(d.style.display=o==="task-streak"?"":"none"),h&&(h.kind=o);return}if(i==="set-goal-tier"){const s=a.closest(".sheet")||document,n=s.querySelector('input[name="tier"]');n&&(n.value=a.dataset.tier),s.querySelectorAll(".goal-tier-row .chip").forEach(o=>o.classList.remove("on")),a.classList.add("on");return}if(i==="pin-mode"){const s=a.closest("form"),n=a.dataset.mode;s.querySelector('input[name="mode"]').value=n,s.querySelectorAll(".pin-modes .chip").forEach(r=>r.classList.remove("on")),a.classList.add("on");const o=(r,d)=>{const c=s.querySelector(r);c&&(c.style.display=d?"":"none")};o(".pin-until",n==="until"),o(".pin-weekdays",n==="weekly"),o(".pin-monthdays",n==="monthly"),o(".pin-yeardays",n==="yearly"),h&&h.pin&&(h.pin.mode=n);return}if(i==="toggle-weekday"){a.classList.toggle("on");return}if(i==="toggle-monthday"){a.classList.toggle("on");return}if(i==="pin-cal-nav"){if(!h)return;const s=a.dataset.target,n=Number(a.dataset.dir)||0;s==="except"?h._exceptCal=ut(h._exceptCal||M(f),n):h._customCal=ut(h._customCal||M(f),n),k();return}if(i==="toggle-pin-date"){if(!h||!h.pin)return;const s=a.dataset.target,n=a.dataset.date,o=s==="custom"?"customDates":"exceptDates",r=Array.isArray(h.pin[o])?[...h.pin[o]]:[],d=r.indexOf(n);d>=0?r.splice(d,1):(r.push(n),r.length>365&&r.shift()),h.pin[o]=r.sort(),k();return}if(i==="add-year-day"){if(!h||!h.pin)return;const s=a.closest("form")||document,n=s.querySelector("#year-month-select"),o=s.querySelector("#year-day-select");n&&(h._yearMonth=n.value);const r=`${n?n.value:"01"}-${o?o.value:"01"}`,d=Array.isArray(h.pin.yearDays)?[...h.pin.yearDays]:[];d.includes(r)||d.push(r),h.pin.yearDays=d.sort(),k();return}if(i==="remove-year-day"){if(!h||!h.pin)return;const s=a.dataset.date;h.pin.yearDays=(h.pin.yearDays||[]).filter(n=>n!==s),k();return}if(i==="clear-pin"){const s=a.closest("form"),n=s.dataset.kind,o=s.dataset.id;if(n==="habit"&&l.unpinHabit(o),n==="task"){const r=l.findTask(f,o);r!=null&&r.sourcePinId&&l.unpinTaskTemplate(r.sourcePinId)}n==="template"&&l.unpinTaskTemplate(o),x=null,h=null,y("Unpinned"),k();return}if(i==="lock-profile"){l.setProfileLocked(!0),y("Profile locked — read only"),k();return}if(i==="unlock-profile"){l.setProfileLocked(!1),y("Profile unlocked"),k();return}if(i==="add-whoami"){const s=document.getElementById("new-whoami"),n=l.addWhoAmI(s?s.value:"");y(n.ok?"Added":n.reason||"Couldn't add"),k();return}if(i==="move-whoami"){l.moveWhoAmI(a.dataset.id,Number(a.dataset.dir)||0),k();return}if(i==="remove-whoami"){l.removeWhoAmI(a.dataset.id),y("Removed"),k();return}if(i==="add-lifearea"){const s=document.getElementById("new-lifearea"),n=l.addLifeArea(s?s.value:"");n.ok?(et=n.id,y("Life area added")):y(n.reason||"Couldn't add"),k();return}if(i==="toggle-lifearea"){const s=a.dataset.id;et=et===s?null:s,k();return}if(i==="remove-lifearea"){l.removeLifeArea(a.dataset.id),et===a.dataset.id&&(et=null),y("Life area removed"),k();return}if(i==="set-pgoal-term"){U=["short","medium","long"].includes(a.dataset.term)?a.dataset.term:"short",st=l.profileGoalDurations()[U][0],k();return}if(i==="set-pgoal-filter"){bt=["all","short","medium","long"].includes(a.dataset.filter)?a.dataset.filter:"all",k();return}if(i==="add-pgoal"){const s=document.getElementById("new-pgoal"),n=document.getElementById("new-pgoal-duration"),o=l.addProfileGoal(s?s.value:"",U,n?n.value:st);y(o.ok?`Goal added ${vt(U)}`:o.reason||"Couldn't add"),k();return}if(i==="remove-pgoal"){l.removeProfileGoal(a.dataset.id),y("Goal removed"),k();return}if(i==="add-quote"){const s=document.getElementById("new-quote"),n=document.getElementById("new-quote-author"),o=l.addQuote(s?s.value:"",n?n.value:"");y(o.ok?"Quote added":o.reason||"Couldn't add"),k();return}if(i==="toggle-quote-fav"){l.toggleQuoteFav(a.dataset.id),k();return}if(i==="remove-quote"){l.removeQuote(a.dataset.id),y("Quote removed"),k();return}if(i==="toggle-quotes"){mt=!mt,k();return}k()});document.addEventListener("submit",t=>{const e=t.target.closest("[data-form]");if(!e)return;t.preventDefault();const a=e.dataset.form;if(a==="habit"||a==="task"||a==="edit-habit"||a==="edit-task"){const i=new FormData(e),s=String(i.get("title")||""),n=Number(i.get("points")||0),o=String(i.get("category")||"mentally"),r=String(i.get("description")||""),d=String(i.get("tags")||""),c=Math.max(0,Math.min(5,Number(i.get("rating")||0))),p=Math.max(0,Math.min(100,Number(i.get("consciousPoints")||0)));if(!s.trim())return;const S=h&&h._image!==void 0?V(h._image):V(h&&h.image);if(a==="habit")l.addHabit(s,n,{description:r,category:o,consciousPoints:p,tags:d}),y("Habit added");else if(a==="task"){if(H())return;l.addTask(f,s,n,{description:r,category:o,rating:c,tags:d,image:S}),y("Task added")}else if(a==="edit-habit")l.updateHabit(e.dataset.id,{name:s,description:r,points:n,category:o,consciousPoints:p,tags:d}),y("Habit updated");else{if(H())return;l.updateTask(f,e.dataset.id,{title:s,points:n,description:r,category:o,rating:c,tags:d,image:S}),y("Task updated")}x=null,h=null,k();return}if(a==="pin"){const i=_a(e);if(!i)return;const s=e.dataset.kind,n=e.dataset.id;s==="habit"&&l.pinHabit(n,i),s==="task"&&l.pinTask(f,n,i),s==="template"&&l.updatePinnedTask(n,i),x=null,h=null,y("Pin saved"),k();return}if(a==="forward"){const i=new FormData(e),s=String(i.get("targetDate")||""),n=e.dataset.kind,o=e.dataset.id,r=h&&h.from||f;if(!/^\d{4}-\d{2}-\d{2}$/.test(s)){y("Pick a valid date");return}const d=n==="habit"?l.forwardHabit(r,o,s):l.forwardTask(r,o,s);if(!d.ok){y(d.reason||"Could not forward");return}x=null,h=null,f=s,E="today",y(`Forwarded to ${s}`),k();return}if(a==="goal"||a==="edit-goal"){const i=new FormData(e),s=String(i.get("title")||"").trim(),n=String(i.get("kind")||"habit-streak"),o=String(i.get("tier")||"bronze"),r=String(i.get("rewardTitle")||"").trim(),d=Math.max(1,Math.min(365,Number(i.get("targetDays")||7)));if(!s||!r){y("Goal title and reward title are required");return}let c="";if(n==="habit-streak"&&(c=String(i.get("habitTarget")||"")),n==="task-streak"&&(c=String(i.get("taskTarget")||"")),(n==="habit-streak"||n==="task-streak")&&!c){y(n==="habit-streak"?"Pick a habit":"Pin a task first, then pick it");return}a==="goal"?(l.addGoal({title:s,kind:n,targetId:c,targetDays:d,tier:o,rewardTitle:r}),y("Goal added")):(l.updateGoal(e.dataset.id,{title:s,kind:n,targetId:c,targetDays:d,tier:o,rewardTitle:r}),y("Goal updated"));const p=l.checkGoals(f);p.length&&y(`🏅 Reward earned: ${p[0].rewardTitle}!`),x=null,h=null,k()}});document.addEventListener("change",t=>{const e=t.target.closest(".sort-select");if(e){const a=e.dataset.sortKind;a==="habit"&&l.setHabitSort(e.value),a==="task"&&l.setTaskSort(e.value),k()}if(t.target&&t.target.id==="show-conscious"&&(l.setShowConscious(t.target.checked),y(t.target.checked?"Conscious points on":"Conscious points hidden"),k()),t.target&&t.target.id==="week-start"&&(l.setWeekStart(Number(t.target.value)),y("Week starts on "+t.target.selectedOptions[0].textContent),k()),t.target&&t.target.id==="new-pgoal-duration"){st=t.target.value;return}if(t.target&&t.target.id==="year-month-select"&&h&&(h._yearMonth=t.target.value),t.target&&t.target.id==="task-image-input"){const a=t.target.files&&t.target.files[0];if(!a)return;if(!String(a.type||"").startsWith("image/")){y("Please pick an image file"),t.target.value="";return}y("Processing photo…"),aa(a).then(i=>{if(t.target.value="",!i){y("Photo too large or unreadable — try a smaller one");return}h&&(h._image=i,k(),y("Photo attached — save to apply"))})}});if("serviceWorker"in navigator){window.addEventListener("load",()=>{navigator.serviceWorker.register("./sw.js").catch(()=>{})});let t=!1;try{sessionStorage.getItem("dr-updated-reload")&&(t=!0)}catch{}navigator.serviceWorker.addEventListener("controllerchange",()=>{if(!t){t=!0;try{sessionStorage.setItem("dr-updated-reload","1")}catch{}window.location.reload()}})}function qa(){const t=document.getElementById("boot-error");t&&(t.style.display="none")}qa();Fe();k();Sa().then(()=>{E==="settings"&&k()});setInterval(()=>{!document.hidden&&Qt()&&k()},6e4);document.addEventListener("visibilitychange",()=>{!document.hidden&&Qt()&&k()});
