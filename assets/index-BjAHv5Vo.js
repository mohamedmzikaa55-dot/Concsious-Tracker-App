(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function a(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=a(s);fetch(s.href,n)}})();const At="daily-report-v2",st=[{id:"mentally",label:"Mentally"},{id:"psychology",label:"Psychology"},{id:"physically",label:"Physically"},{id:"spiritually",label:"Spiritually"},{id:"socially",label:"Socially"}],Ut=st.map(t=>t.id),Pt=[{id:"h1",name:"Wake up early",points:10,icon:"sunrise",category:"physically",pin:{mode:"forever"}},{id:"h2",name:"Drink water",points:5,icon:"drop",category:"physically",pin:{mode:"forever"}},{id:"h3",name:"Exercise",points:15,icon:"bolt",category:"physically",pin:{mode:"forever"}},{id:"h4",name:"Read 20 minutes",points:10,icon:"book",category:"mentally",pin:{mode:"forever"}},{id:"h5",name:"No junk food",points:10,icon:"leaf",category:"physically",pin:{mode:"forever"}}],Nt={lockTime:"21:00",autoLock:!0,showConscious:!0,habitSort:"default",taskSort:"default"},Y=[{id:"iron",label:"Iron",medal:"🥉",rank:1},{id:"bronze",label:"Bronze",medal:"🥉",rank:2},{id:"silver",label:"Silver",medal:"🥈",rank:3},{id:"gold",label:"Gold",medal:"🥇",rank:4}],Mt=[{id:"habit-streak",label:"Habit streak"},{id:"task-streak",label:"Pinned task streak"},{id:"perfect-days",label:"Perfect days (100%)"}];function yt(t){var e;return((e=Y.find(a=>a.id===t))==null?void 0:e.rank)||0}function dt(t){var e;return((e=Y.find(a=>a.id===t))==null?void 0:e.medal)||"🏅"}function Ht(t){var e;return((e=Y.find(a=>a.id===t))==null?void 0:e.label)||t||"Badge"}function M(t){const e=Array.isArray(t)?t:String(t||"").split(","),a=[];return e.forEach(i=>{const s=String(i||"").trim().slice(0,20);s&&!a.some(n=>n.toLowerCase()===s.toLowerCase())&&a.push(s),a.length>=10}),a.slice(0,10)}function nt(t,e){const a=[...t];return e==="points"?a.sort((i,s)=>(Number(s.points)||0)-(Number(i.points)||0)):e==="category"?a.sort((i,s)=>V(P(i.category)).localeCompare(V(P(s.category)))):e==="tags"&&a.sort((i,s)=>(i.tags&&i.tags[0]||"~~~").localeCompare(s.tags&&s.tags[0]||"~~~")),a}const Et=[{value:1,label:"Mon"},{value:2,label:"Tue"},{value:3,label:"Wed"},{value:4,label:"Thu"},{value:5,label:"Fri"},{value:6,label:"Sat"},{value:0,label:"Sun"}];function L(t=new Date){const e=t.getFullYear(),a=String(t.getMonth()+1).padStart(2,"0"),i=String(t.getDate()).padStart(2,"0");return`${e}-${a}-${i}`}function Ct(){return{habits:{},habitRatings:{},habitMissed:{},habitForwarded:{},tasks:[],note:"",locked:!1,lockOverride:null,submittedAt:null,lockedHabits:null}}function P(t){return Ut.includes(t)?t:"mentally"}function V(t){var e;return((e=st.find(a=>a.id===t))==null?void 0:e.label)||"Mentally"}function vt(t){const e=Math.max(0,Math.min(5,Number(t.rating)||0)),a=s=>/^\d{4}-\d{2}-\d{2}$/.test(String(s||""))?String(s):"",i=s=>Array.isArray(s)?s.filter(n=>/^\d{4}-\d{2}-\d{2}$/.test(String(n))).map(String).slice(0,50):[];return{...t,description:t.description||"",category:P(t.category),tags:M(t.tags),rating:e,done:!!t.done,missed:!!t.missed,forwardedFrom:a(t.forwardedFrom),forwardedHabitId:String(t.forwardedHabitId||""),forwardedTo:i(t.forwardedTo)}}function R(t){const e=Number(t);return!Number.isFinite(e)||e<0?0:Math.min(100,Math.round(e))}function q(t){if(!t||!t.mode)return null;const e=(s,n,o)=>Array.isArray(s)?s.map(Number).filter(r=>Number.isFinite(r)&&r>=n&&r<=o):[],a=s=>Array.isArray(s)?s.filter(n=>/^\d{4}-\d{2}-\d{2}$/.test(String(n))).map(String).slice(0,365):[],i=s=>Array.isArray(s)?s.filter(n=>/^\d{2}-\d{2}$/.test(String(n))).map(String).slice(0,366):[];return{mode:["forever","until","weekly","monthly","yearly","custom"].includes(t.mode)?t.mode:"forever",until:t.until||"",weekdays:e(t.weekdays,0,6),monthDays:e(t.monthDays,1,31),yearDays:i(t.yearDays),customDates:a(t.customDates),exceptDates:a(t.exceptDates||t.exceptions)}}function Vt(t,e){const a=`${t} ${e}`.toLowerCase();return a.includes("read")||a.includes("study")||a.includes("learn")?"mentally":a.includes("meditat")||a.includes("pray")||a.includes("journal")?"spiritually":a.includes("mood")||a.includes("calm")||a.includes("therapy")?"psychology":a.includes("friend")||a.includes("family")||a.includes("social")||a.includes("call")||a.includes("visit")?"socially":"physically"}function ct(t){const e=Mt.some(a=>a.id===t.kind)?t.kind:"habit-streak";return{id:String(t.id||`g${Date.now()}`),title:String(t.title||"").trim().slice(0,60)||"My goal",kind:e,targetId:String(t.targetId||""),targetDays:Math.max(1,Math.min(365,Number(t.targetDays)||7)),tier:Y.some(a=>a.id===t.tier)?t.tier:"bronze",rewardTitle:String(t.rewardTitle||"").trim().slice(0,60)||"Reward",createdAt:t.createdAt||new Date().toISOString()}}function Lt(t){const e=(Array.isArray(t.habits)&&t.habits.length?t.habits:Pt).map(i=>({...i,description:String(i.description||"").slice(0,240),category:P(i.category||Vt(i.id,i.name)),consciousPoints:R(i.consciousPoints),tags:M(i.tags),pin:q(i.pin)})),a={};return Object.entries(t.days||{}).forEach(([i,s])=>{a[i]={...Ct(),habits:s.habits||{},habitRatings:s.habitRatings||{},habitMissed:s.habitMissed||{},habitForwarded:s.habitForwarded&&typeof s.habitForwarded=="object"?s.habitForwarded:{},tasks:Array.isArray(s.tasks)?s.tasks.map(vt):[],note:s.note||"",locked:!!s.locked,lockOverride:s.lockOverride||(s.locked?"locked":null),submittedAt:s.submittedAt||null,lockedHabits:Array.isArray(s.lockedHabits)?s.lockedHabits:null}}),{habits:e,pinnedTasks:Array.isArray(t.pinnedTasks)?t.pinnedTasks.map(i=>({...vt(i),pin:q(i.pin)})):[],days:a,goals:Array.isArray(t.goals)?t.goals.map(ct):[],badges:Array.isArray(t.badges)?t.badges.filter(i=>i&&i.id&&i.goalId).map(i=>({id:String(i.id),goalId:String(i.goalId),title:String(i.title||""),tier:i.tier||"bronze",rewardTitle:String(i.rewardTitle||""),earnedAt:i.earnedAt||new Date().toISOString()})):[],settings:{lockTime:t.settings&&t.settings.lockTime||Nt.lockTime,autoLock:!t.settings||t.settings.autoLock!==!1,showConscious:!t.settings||t.settings.showConscious!==!1,habitSort:["default","points","category","tags"].includes(t.settings&&t.settings.habitSort)?t.settings.habitSort:"default",taskSort:["default","points","category","tags"].includes(t.settings&&t.settings.taskSort)?t.settings.taskSort:"default"}}}function kt(){return{habits:Pt.map(t=>({...t,description:"",tags:[]})),pinnedTasks:[],days:{},goals:[],badges:[],settings:{...Nt}}}function Yt(){try{const t=localStorage.getItem(At)||localStorage.getItem("daily-report-v1");return t?Lt(JSON.parse(t)):kt()}catch{return kt()}}let u=Yt();function $(){try{localStorage.setItem(At,JSON.stringify(u))}catch{}}function Jt(t){return new Date(`${t}T00:00:00`).getDay()}function z(t){const e=new Date(`${t}T00:00:00`);return e.setDate(e.getDate()-1),L(e)}function Q(t,e){if(!t)return!0;if(Array.isArray(t.exceptDates)&&t.exceptDates.includes(e)||Array.isArray(t.exceptions)&&t.exceptions.includes(e))return!1;if((Array.isArray(t.customDates)?t.customDates:[]).includes(e)||t.mode==="forever")return!0;if(t.mode==="until")return!!t.until&&e<=t.until;if(t.mode==="weekly")return Array.isArray(t.weekdays)&&t.weekdays.includes(Jt(e));if(t.mode==="monthly"){const i=Array.isArray(t.monthDays)?t.monthDays.map(Number):[];return i.length?i.includes(Number(String(e).slice(8,10))):!0}if(t.mode==="yearly"){const i=Array.isArray(t.yearDays)?t.yearDays:[];return i.length?i.includes(String(e).slice(5,10)):!0}return t.mode!=="custom"}function X(t){if(!t)return"Not pinned";const e=(t.exceptDates||t.exceptions||[]).length,a=e?` · ⛔ ${e} exception${e>1?"s":""}`:"",i=t.mode==="custom"?0:Array.isArray(t.customDates)?t.customDates.length:0,s=i?` +${i} custom`:"";if(t.mode==="forever")return`Pinned forever${s}${a}`;if(t.mode==="until")return`${t.until?`Pinned until ${t.until}`:"Pinned until a date"}${s}${a}`;if(t.mode==="weekly"){const n=Array.isArray(t.weekdays)?t.weekdays:[],o=Et.filter(r=>n.includes(r.value)).map(r=>r.label);return`${o.length?`Weekly: ${o.join(", ")}`:"Weekly (no days)"}${s}${a}`}if(t.mode==="monthly"){const n=Array.isArray(t.monthDays)?t.monthDays:[];return`${n.length?`Monthly: day${n.length>1?"s":""} ${[...n].sort((o,r)=>o-r).join(", ")}`:"Monthly"}${s}${a}`}if(t.mode==="yearly"){const n=Array.isArray(t.yearDays)?t.yearDays:[];return`${n.length?`Yearly: ${[...n].sort().join(", ")}`:"Yearly"}${s}${a}`}if(t.mode==="custom"){const n=Array.isArray(t.customDates)?t.customDates:[];return`${n.length?`Custom: ${n.length} date${n.length>1?"s":""}`:"Custom dates"}${a}`}return"Pinned"}function $t(t){const[e,a]=(u.settings.lockTime||"21:00").split(":").map(Number),i=new Date(`${t}T00:00:00`);return i.setHours(e||0,a||0,0,0),i}function Rt(t){const e=u.days[t];return e?e.lockOverride==="locked"||e.locked===!0:!1}function lt(t,e){const a=u.days[t];return a?a.habitRatings&&a.habitRatings[e]!=null?Number(a.habitRatings[e])||0:a.habits&&a.habits[e]?5:0:0}function ut(t){const e=D(t),a=u.habits.filter(i=>Q(i.pin,t));e.lockedHabits=a.map(i=>({id:i.id,name:i.name,description:String(i.description||"").slice(0,240),points:Number(i.points)||0,icon:i.icon||"star",category:P(i.category),consciousPoints:R(i.consciousPoints),tags:M(i.tags),pin:q(i.pin)})),e.habitMissed={},a.forEach(i=>{lt(t,i.id)<=0?(e.habitMissed[i.id]=!0,e.habitRatings[i.id]=0,e.habits[i.id]=!1):e.habitMissed&&delete e.habitMissed[i.id]}),e.tasks.forEach(i=>{i.missed=!i.done})}function wt(t){const e=D(t);return e.lockOverride==="unlocked"?!1:e.lockOverride==="locked"||e.locked?((!e.lockedHabits||e.habitMissed==null)&&ut(t),!0):u.settings.autoLock&&Date.now()>=$t(t).getTime()?(e.locked=!0,e.lockOverride="locked",e.submittedAt=e.submittedAt||$t(t).toISOString(),ut(t),$(),!0):!1}function D(t){return u.days[t]||(u.days[t]=Ct()),u.days[t]}function Qt(t){const e=D(t);if(Rt(t))return e;let a=!1;return u.pinnedTasks.forEach(i=>{Q(i.pin,t)&&(e.tasks.some(s=>s.sourcePinId===i.id)||(e.tasks.push({id:`ptask-${i.id}-${t}`,title:i.title,points:i.points,description:i.description||"",category:P(i.category),tags:M(i.tags),rating:0,done:!1,missed:!1,sourcePinId:i.id}),a=!0))}),a&&$(),e}function C(t){return!c.isLocked(t)}const c={todayKey:L,exportBackup(){return JSON.stringify({app:"Daily Report",kind:"full-backup",version:1,exportedAt:new Date().toISOString(),data:u},null,2)},backupKind(t){if(!t||typeof t!="object"||Array.isArray(t))return"invalid";const e=t.data&&typeof t.data=="object"&&!Array.isArray(t.data)?t.data:t;return Array.isArray(e.days)?"report-export":Array.isArray(e.categories)||Array.isArray(e.plans)||Array.isArray(e.schedule)?"wrong-app":typeof e!="object"||e===null||e.habits!==void 0&&!Array.isArray(e.habits)||e.days!==void 0&&(typeof e.days!="object"||e.days===null||Array.isArray(e.days))||e.settings!==void 0&&(typeof e.settings!="object"||e.settings===null||Array.isArray(e.settings))||!["habits","pinnedTasks","days","goals","badges","settings"].some(i=>e[i]!==void 0)?"invalid":"ok"},importBackup(t){if(this.backupKind(t)!=="ok")return!1;const e=t.data&&typeof t.data=="object"&&!Array.isArray(t.data)?t.data:t;return u=Lt(e),$(),!0},getSettings(){return u.settings},setLockTime(t){u.settings.lockTime=t||"21:00",$()},setAutoLock(t){u.settings.autoLock=!!t,$()},setShowConscious(t){u.settings.showConscious=!!t,$()},consciousEnabled(){return u.settings.showConscious!==!1},setHabitSort(t){u.settings.habitSort=["default","points","category","tags"].includes(t)?t:"default",$()},setTaskSort(t){u.settings.taskSort=["default","points","category","tags"].includes(t)?t:"default",$()},getHabits(t,e){if(t&&Rt(t)){const n=u.days[t];if(n&&Array.isArray(n.lockedHabits)){const o=e||u.settings.habitSort||"default",r=[...n.lockedHabits];return o==="default"?r:nt(r,o)}}const i=u.habits.filter(n=>t?Q(n.pin,t):!0).sort((n,o)=>+!!o.pin-+!!n.pin),s=e||u.settings.habitSort||"default";return s==="default"?i:nt(i,s)},getTasks(t,e){const a=this.getDay(t),i=e||u.settings.taskSort||"default";return i==="default"?a.tasks:nt(a.tasks,i)},getAllHabits(){return u.habits},getPinnedTasks(){return u.pinnedTasks},getDay(t){return wt(t),Qt(t)},isLocked(t){return wt(t)},submitDay(t){const e=D(t);e.locked=!0,e.lockOverride="locked",e.submittedAt=new Date().toISOString(),ut(t),$(),this.checkGoals(t)},unlockDay(t){const e=D(t);e.locked=!1,e.lockOverride="unlocked",e.habitMissed={},e.lockedHabits=null,e.tasks.forEach(a=>{a.missed=!1}),$()},isHabitMissed(t,e){const a=u.days[t];return!a||!(a.locked||a.lockOverride==="locked")?!1:a.habitMissed&&a.habitMissed[e]?!0:lt(t,e)<=0},isTaskMissed(t,e){const a=u.days[t];if(!a)return!1;const i=(a.tasks||[]).find(s=>s.id===e);return i?i.missed===!0?!0:i.missed===!1?!1:!!(a.locked||a.lockOverride==="locked")&&!i.done:!1},missedCounts(t){const e=this.getDay(t),a=this.getHabits(t),i=!!(e.locked||e.lockOverride==="locked");return{habits:a.filter(s=>e.habitMissed&&e.habitMissed[s.id]?!0:i&&lt(t,s.id)<=0).length,tasks:e.tasks.filter(s=>s.done?!1:s.missed===!0?!0:s.missed===!1?!1:i).length}},lockDay(t){this.submitDay(t)},lockedReports(){return Object.keys(u.days).sort().reverse().filter(t=>this.isLocked(t)).map(t=>({date:t,submittedAt:u.days[t].submittedAt,...this.scoreFor(t)}))},habitRating(t,e){const a=u.days[t];return a?a.habitRatings&&a.habitRatings[e]!=null?Number(a.habitRatings[e])||0:a.habits&&a.habits[e]?5:0:0},setHabitRating(t,e,a){if(!C(t))return;const i=D(t),s=Math.max(0,Math.min(5,Number(a)||0));i.habitRatings[e]=s,i.habits[e]=s>0,$(),this.checkGoals(t)},toggleHabit(t,e){if(!C(t))return;const a=this.habitRating(t,e)>0?0:5;this.setHabitRating(t,e,a)},addTask(t,e,a,i={}){if(!C(t))return;D(t).tasks.push({id:`t${Date.now()}`,title:e.trim(),points:Number(a)||5,description:String(i.description||"").trim(),category:P(i.category),tags:M(i.tags),rating:Math.max(0,Math.min(5,Number(i.rating)||0)),done:!1,missed:!1,forwardedFrom:/^\d{4}-\d{2}-\d{2}$/.test(String(i.forwardedFrom||""))?String(i.forwardedFrom):"",forwardedHabitId:String(i.forwardedHabitId||""),forwardedTo:[]}),$(),this.checkGoals(t)},setTaskRating(t,e,a){if(!C(t))return;const s=D(t).tasks.find(o=>o.id===e);if(!s)return;const n=Math.max(0,Math.min(5,Number(a)||0));s.rating=n,$()},toggleTask(t,e){if(!C(t))return;const i=D(t).tasks.find(s=>s.id===e);i&&(i.done=!i.done,$(),this.checkGoals(t))},removeTask(t,e){if(!C(t))return;const a=D(t);a.tasks=a.tasks.filter(i=>i.id!==e),$()},forwardTask(t,e,a){if(!/^\d{4}-\d{2}-\d{2}$/.test(String(a||"")))return{ok:!1,reason:"Pick a valid date"};if(t===a)return{ok:!1,reason:"Already on that day"};if(!C(t))return{ok:!1,reason:"Source day is locked"};if(this.isLocked(a))return{ok:!1,reason:"Target day is locked"};const s=D(t).tasks.find(r=>r.id===e);if(!s)return{ok:!1,reason:"Task not found"};D(a).tasks.push({id:`t${Date.now()}`,title:s.title,points:Number(s.points)||5,description:String(s.description||""),category:P(s.category),tags:M(s.tags),rating:0,done:!1,missed:!1,forwardedFrom:t,forwardedHabitId:String(s.forwardedHabitId||""),forwardedTo:[]});const o=Array.isArray(s.forwardedTo)?s.forwardedTo:[];return o.includes(a)||o.push(a),s.forwardedTo=o.slice(0,50),$(),this.checkGoals(a),{ok:!0}},forwardHabit(t,e,a){if(!/^\d{4}-\d{2}-\d{2}$/.test(String(a||"")))return{ok:!1,reason:"Pick a valid date"};if(t===a)return{ok:!1,reason:"Already on that day"};if(!C(t))return{ok:!1,reason:"Source day is locked"};if(this.isLocked(a))return{ok:!1,reason:"Target day is locked"};const i=u.habits.find(r=>r.id===e);if(!i)return{ok:!1,reason:"Habit not found"};D(a).tasks.push({id:`t${Date.now()}`,title:i.name,points:Number(i.points)||10,description:String(i.description||""),category:P(i.category),tags:M(i.tags),rating:0,done:!1,missed:!1,forwardedFrom:t,forwardedHabitId:e,forwardedTo:[]});const n=D(t);(!n.habitForwarded||typeof n.habitForwarded!="object")&&(n.habitForwarded={});const o=Array.isArray(n.habitForwarded[e])?n.habitForwarded[e]:[];return o.includes(a)||o.push(a),n.habitForwarded[e]=o.slice(0,50),$(),this.checkGoals(a),{ok:!0}},habitForwardedTo(t,e){const a=u.days[t];if(!a||!a.habitForwarded)return[];const i=a.habitForwarded[e];return Array.isArray(i)?i:[]},setNote(t,e){C(t)&&(D(t).note=e,$())},addHabit(t,e,a={}){u.habits.push({id:`h${Date.now()}`,name:t.trim(),description:String(a.description||"").trim().slice(0,240),points:Number(e)||10,icon:"star",category:P(a.category||"physically"),consciousPoints:R(a.consciousPoints),tags:M(a.tags),pin:{mode:"forever",until:"",weekdays:[]}}),$()},updateHabit(t,e){const a=u.habits.find(i=>i.id===t);a&&(e.name!=null&&(a.name=String(e.name).trim()||a.name),e.description!=null&&(a.description=String(e.description).trim().slice(0,240)),e.points!=null&&(a.points=Number(e.points)||a.points),e.category!=null&&(a.category=P(e.category)),e.consciousPoints!=null&&(a.consciousPoints=R(e.consciousPoints)),e.tags!=null&&(a.tags=M(e.tags)),$())},updateTask(t,e,a){if(!C(t))return;const s=D(t).tasks.find(n=>n.id===e);if(s){if(a.title!=null&&(s.title=String(a.title).trim()||s.title),a.points!=null&&(s.points=Number(a.points)||s.points),a.description!=null&&(s.description=String(a.description).trim()),a.category!=null&&(s.category=P(a.category)),a.tags!=null&&(s.tags=M(a.tags)),a.rating!=null&&(s.rating=Math.max(0,Math.min(5,Number(a.rating)||0))),s.sourcePinId){const n=u.pinnedTasks.find(o=>o.id===s.sourcePinId);n&&(n.title=s.title,n.points=s.points,n.description=s.description,n.category=s.category,a.tags!=null&&(n.tags=M(a.tags)))}$()}},habitStreak(t,e){const a=u.habits.find(o=>o.id===t);if(!a)return 0;let i=e,s=0;this.habitRating(i,t)===0&&(i=z(i));let n=0;for(;s<400;){if(s+=1,!Q(a.pin,i)){i=z(i);continue}if(this.habitRating(i,t)>0){n+=1,i=z(i);continue}break}return n},categoryBreakdown(t){const e=this.getDay(t),a=this.getHabits(t);return st.map(i=>{const s=a.filter(h=>P(h.category)===i.id),n=e.tasks.filter(h=>P(h.category)===i.id),o=s.reduce((h,k)=>{const it=this.habitRating(t,k.id);return h+Math.round(k.points*it/5)},0),r=u.settings.showConscious!==!1,l=r?s.reduce((h,k)=>h+(this.habitRating(t,k.id)>0?R(k.consciousPoints):0),0):0,d=s.reduce((h,k)=>h+k.points,0),v=r?s.reduce((h,k)=>h+R(k.consciousPoints),0):0,N=n.reduce((h,k)=>h+(k.done?k.points:0),0),b=n.reduce((h,k)=>h+k.points,0),S=s.map(h=>this.habitRating(t,h.id)),j=S.length?Math.round(S.reduce((h,k)=>h+k,0)/S.length*10)/10:0;return{...i,habits:s,tasks:n,earned:o+l+N,max:d+v+b,habitAvg:j,consciousEarned:l,consciousMax:v,completed:s.filter(h=>this.habitRating(t,h.id)>0).length+n.filter(h=>h.done).length,total:s.length+n.length}})},removeHabit(t){u.habits=u.habits.filter(e=>e.id!==t),$()},pinHabit(t,e){const a=u.habits.find(i=>i.id===t);a&&(a.pin=q(e),$())},unpinHabit(t){const e=u.habits.find(a=>a.id===t);e&&(e.pin=null,$())},pinTask(t,e,a){const s=D(t).tasks.find(o=>o.id===e);if(!s)return;if(s.sourcePinId){const o=u.pinnedTasks.find(r=>r.id===s.sourcePinId);if(o){o.pin=q(a),$();return}}const n=`p${Date.now()}`;u.pinnedTasks.push({id:n,title:s.title,points:s.points,description:s.description||"",category:P(s.category),tags:M(s.tags),pin:q(a)}),s.sourcePinId=n,$()},unpinTaskTemplate(t){u.pinnedTasks=u.pinnedTasks.filter(e=>e.id!==t),$()},updatePinnedTask(t,e){const a=u.pinnedTasks.find(i=>i.id===t);a&&(a.pin=q(e),$())},findHabit(t){return u.habits.find(e=>e.id===t)||null},findTask(t,e){return D(t).tasks.find(a=>a.id===e)||null},findPinnedTask(t){return u.pinnedTasks.find(e=>e.id===t)||null},getGoals(){return u.goals},getBadges(){return[...u.badges].sort((t,e)=>{const a=yt(e.tier)-yt(t.tier);return a!==0?a:String(e.earnedAt).localeCompare(String(t.earnedAt))})},topBadges(t=3){return this.getBadges().slice(0,t)},addGoal(t={}){const e=ct({...t,id:`g${Date.now()}`});return u.goals.push(e),$(),this.checkGoals(L()),e},updateGoal(t,e={}){const a=u.goals.find(s=>s.id===t);if(!a)return;const i=ct({...a,...e,id:t});Object.assign(a,i),$(),this.checkGoals(L())},removeGoal(t){u.goals=u.goals.filter(e=>e.id!==t),$()},removeBadge(t){u.badges=u.badges.filter(e=>e.id!==t),$()},perfectDaysCount(){return Object.keys(u.days).filter(t=>{const e=this.scoreFor(t);return e.max>0&&e.percent===100}).length},taskStreak(t,e){let a=e,i=0;(o=>{const r=u.days[o];return!r||!Array.isArray(r.tasks)?!1:r.tasks.some(l=>l.sourcePinId===t&&l.done)})(a)||(a=z(a));let n=0;for(;i<400;){i+=1;const o=u.days[a];if(!o||!Array.isArray(o.tasks))break;if(o.tasks.some(r=>r.sourcePinId===t&&r.done)){n+=1,a=z(a);continue}break}return n},goalProgress(t,e){const a=e||L();if(t.kind==="habit-streak"){const s=this.habitStreak(t.targetId,a);return{current:s,target:t.targetDays,done:s>=t.targetDays}}if(t.kind==="task-streak"){const s=this.taskStreak(t.targetId,a);return{current:s,target:t.targetDays,done:s>=t.targetDays}}const i=this.perfectDaysCount();return{current:i,target:t.targetDays,done:i>=t.targetDays}},checkGoals(t){const e=t||L();let a=[];return u.goals.forEach(i=>{if(u.badges.some(n=>n.goalId===i.id))return;if(this.goalProgress(i,e).done){const n={id:`b${Date.now()}-${i.id}`,goalId:i.id,title:i.title,tier:i.tier,rewardTitle:i.rewardTitle,earnedAt:new Date().toISOString()};u.badges.push(n),a.push(n)}}),a.length&&$(),a},scoreFor(t){const e=this.getDay(t),a=this.getHabits(t),i=this.isLocked(t),s=u.settings.showConscious!==!1,n=a.reduce((h,k)=>{const it=this.habitRating(t,k.id);return h+Math.round(k.points*it/5)},0),o=s?a.reduce((h,k)=>h+(this.habitRating(t,k.id)>0?R(k.consciousPoints):0),0):0,r=e.tasks.reduce((h,k)=>h+(k.done?k.points:0),0),l=a.reduce((h,k)=>h+k.points,0),d=s?a.reduce((h,k)=>h+R(k.consciousPoints),0):0,v=e.tasks.reduce((h,k)=>h+k.points,0),N=n+o+r,b=l+d+v,S=a.filter(h=>e.habitMissed&&e.habitMissed[h.id]?!0:i&&this.habitRating(t,h.id)<=0).length,j=e.tasks.filter(h=>h.done?!1:h.missed===!0?!0:h.missed===!1?!1:i).length;return{earned:N,max:b,habitScore:n,consciousScore:o,maxConscious:d,taskScore:r,completedHabits:a.filter(h=>this.habitRating(t,h.id)>0).length,habitAvg:a.length?Math.round(a.reduce((h,k)=>h+this.habitRating(t,k.id),0)/a.length*10)/10:0,totalHabits:a.length,completedTasks:e.tasks.filter(h=>h.done).length,totalTasks:e.tasks.length,missedHabits:S,missedTasks:j,percent:b?Math.round(N/b*100):0,locked:i,submittedAt:e.submittedAt}},monthKeys(t){const e=String(t).slice(0,7);return Object.keys(u.days).filter(a=>a.startsWith(e)).sort()},rangeKeys(t,e){const a=[],i=new Date(`${t}T00:00:00`),s=new Date(`${e}T00:00:00`);let n=0;for(;i<=s&&n<732;)n+=1,a.push(L(i)),i.setDate(i.getDate()+1);return a},resolveRange(t,e){if(t==="day")return[e,e];if(t==="week"){const i=new Date(`${e}T00:00:00`),s=i.getDay(),n=s===0?-6:1-s,o=new Date(i);o.setDate(i.getDate()+n);const r=new Date(o);return r.setDate(o.getDate()+6),[L(o),L(r)]}if(t==="month"){const[i,s]=e.split("-").map(Number),n=`${i}-${String(s).padStart(2,"0")}-01`,o=new Date(i,s,0).getDate(),r=`${i}-${String(s).padStart(2,"0")}-${String(o).padStart(2,"0")}`;return[n,r]}if(t==="year"){const i=e.slice(0,4);return[`${i}-01-01`,`${i}-12-31`]}const a=Object.keys(u.days).sort();return a.length?[a[0],a[a.length-1]>e?a[a.length-1]:e]:[e,e]},exportRows(t,e){return this.rangeKeys(t,e).map(a=>{const i=this.getDay(a),s=this.getHabits(a),n=this.scoreFor(a),o=this.isLocked(a),r=(d,v)=>v>0?"done":o?"missed":"pending",l=d=>d.done?"done":o?"missed":"pending";return{date:a,earned:n.earned,max:n.max,percent:n.percent,habitScore:n.habitScore,consciousScore:n.consciousScore||0,taskScore:n.taskScore,locked:o,missedHabits:n.missedHabits||0,missedTasks:n.missedTasks||0,note:i.note||"",habits:s.map(d=>{const v=this.habitRating(a,d.id);return{name:d.name,description:String(d.description||""),category:V(P(d.category)),tags:M(d.tags),points:d.points,consciousPoints:this.consciousEnabled()?R(d.consciousPoints):0,rating:v,earned:Math.round(d.points*v/5)+(v>0&&this.consciousEnabled()?R(d.consciousPoints):0),status:r(d.id,v)}}),tasks:i.tasks.map(d=>({title:d.title,category:V(P(d.category)),tags:M(d.tags),points:d.points,rating:Math.max(0,Math.min(5,Number(d.rating)||0)),done:!!d.done,earned:d.done?d.points:0,status:d.forwardedFrom?`forwarded from ${d.forwardedFrom}`:l(d),forwardedFrom:d.forwardedFrom||"",forwardedTo:Array.isArray(d.forwardedTo)?d.forwardedTo:[],description:d.description||""}))}})},history(t=14){return Object.keys(u.days).sort().reverse().slice(0,t).map(a=>({date:a,...this.scoreFor(a),note:u.days[a].note,locked:this.isLocked(a),submittedAt:u.days[a].submittedAt}))},week(t){const e=new Date(t),a=e.getDay(),i=a===0?-6:1-a;return e.setDate(e.getDate()+i),e.setHours(0,0,0,0),Array.from({length:7},(s,n)=>{const o=new Date(e);o.setDate(e.getDate()+n);const r=L(o);return{date:r,label:o.toLocaleDateString(void 0,{weekday:"short"}),locked:this.isLocked(r),...this.scoreFor(r)}})}};function Ft(t){return t>=90?"Excellent":t>=75?"Great day":t>=50?"Keep going":t>0?"Started":"No score yet"}function O(t){return new Date(`${t}T00:00:00`).toLocaleDateString(void 0,{weekday:"long",month:"short",day:"numeric"})}function jt(t){return t?new Date(t).toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"}):""}function Z(t){return t>=5?"Excellent":t>=4?"Great":t>=3?"Good":t>=2?"Fair":t>=1?"Low":"Not rated"}const ot=document.getElementById("app"),Xt="v1.0 — Install · Offline · Backup location · Import/Export",rt=1;let m=c.todayKey(),A="today",y=null,p=null,I=!1,K=!1,_=null,G=!1,pt=!1,Bt=null,B="Idle.",T=null,x="boot";window.addEventListener("beforeinstallprompt",t=>{t.preventDefault(),_=t});window.addEventListener("appinstalled",()=>{_=null,g("Daily Report installed"),w()});const Zt=[["default","Default"],["points","Points"],["category","Category"],["tags","Tags"]];function St(t){const e=new Date(`${m}T00:00:00`);e.setDate(e.getDate()+t),m=c.todayKey(e)}function E(t){return{home:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1z"/></svg>',week:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>',history:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 8v5l3 2"/><circle cx="12" cy="12" r="9"/></svg>',settings:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H8a1.7 1.7 0 0 0 1-1.5V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V8c.3.7.9 1.2 1.6 1.3H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1.7z"/></svg>',pin:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 4h6l-1 7 3 3v2H7v-2l3-3z" fill="currentColor" stroke="none"/><path d="M12 16v5"/></svg>',forward:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',habit:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7h16M4 12h10M4 17h13"/></svg>'}[t]}function Ot(t,e,a){return`
    <div class="stars" data-habit="${t}">
      ${[1,2,3,4,5].map(i=>`
            <button type="button" class="star ${i<=e?"on":""}" data-action="rate-habit" data-id="${t}" data-rating="${i}" ${a?"disabled":""} aria-label="${i} star">★</button>
          `).join("")}
    </div>
  `}function It(t,e,a){return`
    <div class="stars stars-small" data-task="${t}">
      ${[1,2,3,4,5].map(i=>`
            <button type="button" class="star small ${i<=e?"on":""}" data-action="rate-task" data-id="${t}" data-rating="${i}" ${a?"disabled":""} aria-label="${i} star">★</button>
          `).join("")}
    </div>
  `}function Gt(t){const e=Number(t)||0;return e?`<span class="conscious-badge">🧠 +${e}</span>`:'<span class="item-meta">No conscious pts</span>'}function tt(t){return`<span class="cat-badge cat-${t}">${V(t)}</span>`}function W(t){const e=Array.isArray(t)?t.filter(Boolean):[];return e.length?`<div class="tag-row">${e.map(a=>`<span class="tag-chip">#${f(a)}</span>`).join("")}</div>`:""}function xt(t,e){return`
    <select class="sort-select" data-sort-kind="${t}" aria-label="Sort ${t}">
      ${Zt.map(([a,i])=>`<option value="${a}" ${e===a?"selected":""}>${i}</option>`).join("")}
    </select>
  `}function Kt(t){const e=c.getBadges(),a=c.topBadges(3),i=t.max>0&&t.percent===100,s=K?e:a;return`
    <section class="section rewards-section">
      <div class="section-head">
        <h2>Rewards</h2>
        ${e.length>3?`<button class="ghost-btn compact" data-action="toggle-badges">${K?"Show less":`More (${e.length}) ›`}</button>`:""}
      </div>
      ${i?`
        <div class="trophy-card">
          <div class="trophy-cup">🏆</div>
          <div>
            <div class="item-title">Gold Cup — Perfect day!</div>
            <div class="item-meta">100% of points on ${O(m)}</div>
          </div>
        </div>
      `:""}
      ${e.length?`
        <div class="rewards-grid">
          ${s.map(n=>`
            <article class="reward-card tier-${n.tier}">
              <div class="reward-medal">${dt(n.tier)}</div>
              <div>
                <div class="item-title">${f(n.rewardTitle||n.title)}</div>
                <div class="item-meta">${f(n.title)} · ${Ht(n.tier)} · ${O((n.earnedAt||"").slice(0,10))}</div>
              </div>
            </article>
          `).join("")}
        </div>
      `:'<div class="empty">No rewards yet. Set a goal in Settings → Goals &amp; Rewards.</div>'}
    </section>
  `}function et(t){return`<span class="streak-badge">${t} day streak</span>`}function qt(t){return t?`<span class="forward-badge from">↩ Forwarded from ${f(t)}</span>`:""}function at(t){const e=Array.isArray(t)?t.filter(Boolean):[];return e.length?`<span class="forward-badge to">↪ Forwarded to ${f(e[e.length-1])}</span>`:""}function te(t){const e=new Date(`${t}T00:00:00`);return e.setDate(e.getDate()+1),c.todayKey(e)}function mt(){return`<button class="ghost-btn compact ${I?"on":""}" data-action="toggle-edit">${I?"Done":"Edit Mode"}</button>`}function ee(t){return t?'<span class="lock-badge">Locked</span>':'<span class="open-badge">Open</span>'}function ae(){c.checkGoals(m);const t=c.getDay(m),e=c.getSettings(),a=e.showConscious!==!1,i=c.getHabits(m),s=c.getTasks(m),n=c.scoreFor(m),o=Ft(n.percent),r=m===c.todayKey(),l=c.isLocked(m);return`
    <div class="topbar">
      <div>
        <p class="kicker">${r?"Today":"Daily report"}</p>
        <h1>${O(m)}</h1>
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
          ${ee(l)}
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
        ${l?`Submitted${t.submittedAt?` at ${jt(t.submittedAt)}`:""}.${(n.missedHabits||0)+(n.missedTasks||0)>0?` ${(n.missedHabits||0)+(n.missedTasks||0)} missed (${n.missedHabits||0} habits, ${n.missedTasks||0} tasks) — unchecked items count as missed.`:" Nothing missed — all done."} Unlock in Settings to edit.`:`Auto-locks at ${e.lockTime}. Submit when the day is done. Unchecked items will count as missed once locked.`}
      </p>
      ${l?'<button class="ghost-btn full" data-action="goto-settings">Unlock in Settings</button>':'<button class="primary-btn full" data-action="submit-day">Submit and lock report</button>'}
      <div class="export-row">
        <span class="muted">Export:</span>
        <button class="ghost-btn compact" data-action="open-export">Excel / JSON / PDF</button>
      </div>
    </section>

    ${Kt(n)}

    <section class="section">
      <div class="section-head">
        <h2>Habits</h2>
        <div class="head-actions">
          ${xt("habit",e.habitSort||"default")}
          ${mt()}
          <span class="points">+${n.habitScore}${a&&n.consciousScore?` +${n.consciousScore}🧠`:""} pts</span>
        </div>
      </div>
      <div class="list">
        ${i.length?i.map(d=>{const v=c.habitRating(m,d.id),N=v>0,b=!N&&l,S=c.habitStreak(d.id,m),j=a&&Number(d.consciousPoints)||0;return`
                    <article class="item-card ${N?"done":""} ${b?"missed":""} ${l?"is-locked":""}">
                      <button class="check" data-action="toggle-habit" data-id="${d.id}" ${l?"disabled":""}>✓</button>
                      <div>
                        <div class="item-title">${f(d.name)} ${b?'<span class="missed-badge">Missed</span>':""}</div>
                        <div class="item-meta">${tt(d.category)} ${d.pin?X(d.pin):"Not pinned"} · ${v?`${v}/5 ${Z(v)}`:l?"Missed":"Not rated"}</div>
                        ${d.description?`<p class="item-desc">${f(d.description)}</p>`:""}
                        ${a?`<div class="item-meta">${et(S)} ${Gt(j)}</div>`:`<div class="item-meta">${et(S)}</div>`}
                        ${at(c.habitForwardedTo(m,d.id))}
                        ${W(d.tags)}
                        ${Ot(d.id,v,l)}
                      </div>
                      <div class="item-side">
                        <div class="points">+${d.points}${j?` +${j}🧠`:""}</div>
                        <div class="mini-actions">
                          ${I?`<button class="mini-btn on" data-action="open-edit-habit" data-id="${d.id}" ${l?"disabled":""}>Edit</button>`:""}
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
          ${xt("task",e.taskSort||"default")}
          ${mt()}
          <span class="points">+${n.taskScore} pts</span>
        </div>
      </div>
      <div class="list">
        ${s.length?s.map(d=>{const v=!!d.sourcePinId,N=v?c.findPinnedTask(d.sourcePinId):null,b=Math.max(0,Math.min(5,Number(d.rating)||0)),S=!d.done&&l;return`
                    <article class="item-card ${d.done?"done":""} ${S?"missed":""} ${l?"is-locked":""}">
                      <button class="check" data-action="toggle-task" data-id="${d.id}" ${l?"disabled":""}>✓</button>
                      <div>
                        <div class="item-title">${f(d.title)} ${S?'<span class="missed-badge">Missed</span>':""}</div>
                        <div class="item-meta">${tt(d.category)} ${N?X(N.pin):"One-time task"} · ${d.done?"Done":l?"Missed":"Pending"} · ${b?`${b}/5 ${Z(b)}`:"No rating"}</div>
                        ${d.description?`<p class="item-desc">${f(d.description)}</p>`:""}
                        ${qt(d.forwardedFrom)}
                        ${at(d.forwardedTo)}
                        ${W(d.tags)}
                        ${It(d.id,b,l)}
                      </div>
                      <div class="item-side">
                        <div class="points">+${d.points}</div>
                        <div class="mini-actions">
                          ${I?`<button class="mini-btn on" data-action="open-edit-task" data-id="${d.id}" ${l?"disabled":""}>Edit</button>`:""}
                          <button class="mini-btn" data-action="open-forward-task" data-id="${d.id}" ${l?"disabled":""} title="Forward task to another day">${E("forward")}</button>
                          <button class="mini-btn ${v?"on":""}" data-action="open-pin-task" data-id="${d.id}" ${l?"disabled":""} title="Pin task">${E("pin")}</button>
                          <button class="mini-btn" data-action="remove-task" data-id="${d.id}" ${l?"disabled":""}>✕</button>
                        </div>
                      </div>
                    </article>
                  `}).join(""):'<div class="empty">No tasks yet. Tap + to add one.</div>'}
      </div>
    </section>

    <section class="section">
      <div class="section-head"><h2>Day note</h2></div>
      <textarea id="day-note" placeholder="How did today go?" ${l?"disabled":""}>${f(t.note)}</textarea>
    </section>
  `}function se(){const t=c.week(new Date(`${m}T00:00:00`)),e=t.reduce((i,s)=>i+s.earned,0),a=Math.round(e/7);return`
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
              <button class="day-cell ${i.date===m?"active":""} ${i.earned>0?"done":""}" data-action="pick-date" data-date="${i.date}">
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
                  <div class="item-title">${O(i.date)}</div>
                  <div class="item-meta">${i.locked?"Locked":"Open"} · ${i.completedHabits} habits · ${i.completedTasks} tasks${i.locked&&(i.missedHabits||0)+(i.missedTasks||0)>0?` · ❌ ${(i.missedHabits||0)+(i.missedTasks||0)} missed`:""}</div>
                </div>
                <div class="points">${i.earned} pts</div>
              </div>
              <div class="bar"><span style="width:${i.percent}%"></span></div>
            </article>
          `).join("")}
    </section>
  `}function ie(){const t=c.history(21);return`
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
                        <div class="item-title">${O(e.date)}</div>
                        <div class="item-meta">${e.locked?"Locked":"Open"} · ${Ft(e.percent)} · ${e.percent}%${e.locked&&(e.missedHabits||0)+(e.missedTasks||0)>0?` · ❌ ${(e.missedHabits||0)+(e.missedTasks||0)} missed`:""}</div>
                      </div>
                      <button class="ghost-btn compact" data-action="pick-date" data-date="${e.date}">Open</button>
                    </div>
                    <div class="bar"><span style="width:${e.percent}%"></span></div>
                    ${e.note?`<p class="note" style="margin-top:10px">${f(e.note)}</p>`:""}
                  </article>
                `).join(""):'<div class="empty">Complete today to start your history.</div>'}
    </div>
  `}function ne(){const t=c.isLocked(m),e=c.consciousEnabled(),a=c.categoryBreakdown(m),i=a.reduce((n,o)=>n+o.earned,0),s=a.reduce((n,o)=>n+o.max,0);return`
    <div class="topbar">
      <div>
        <p class="kicker">Activities</p>
        <h1>By category</h1>
      </div>
      <div class="date-nav">
        ${mt()}
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
        <div class="grade-pill">${O(m)}</div>
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
                    ${n.habits.map(r=>{const l=c.habitRating(m,r.id),d=!l&&t,v=c.habitStreak(r.id,m),N=e&&Number(r.consciousPoints)||0,b=l>0?N:0,S=Math.round(r.points*l/5)+b,j=r.points+N;return`
                          <article class="item-card ${l?"done":""} ${d?"missed":""} ${t?"is-locked":""}">
                            <button class="check" data-action="toggle-habit" data-id="${r.id}" ${t?"disabled":""}>✓</button>
                            <div>
                              <div class="item-title">${f(r.name)} ${d?'<span class="missed-badge">Missed</span>':""}</div>
                              <div class="item-meta">Habit · ${l?`${l}/5 ${Z(l)}`:t?"Missed":"Not rated"} · ${et(v)}${e?` ${Gt(N)}`:""}</div>
                              ${r.description?`<p class="item-desc">${f(r.description)}</p>`:""}
                              ${at(c.habitForwardedTo(m,r.id))}
                              ${W(r.tags)}
                              ${Ot(r.id,l,t)}
                            </div>
                            <div class="item-side">
                              <div class="points">${S}/${j}</div>
                              <div class="mini-actions">
                                ${I?`<button class="mini-btn on" data-action="open-edit-habit" data-id="${r.id}" ${t?"disabled":""}>Edit</button>`:""}
                                <button class="mini-btn" data-action="open-forward-habit" data-id="${r.id}" ${t?"disabled":""} title="Forward habit to another day">${E("forward")}</button>
                              </div>
                            </div>
                          </article>
                        `}).join("")}
                    ${n.tasks.map(r=>{const l=Math.max(0,Math.min(5,Number(r.rating)||0)),d=!r.done&&t;return`
                          <article class="item-card ${r.done?"done":""} ${d?"missed":""} ${t?"is-locked":""}">
                            <button class="check" data-action="toggle-task" data-id="${r.id}" ${t?"disabled":""}>✓</button>
                            <div>
                              <div class="item-title">${f(r.title)} ${d?'<span class="missed-badge">Missed</span>':""}</div>
                              <div class="item-meta">Task · ${r.done?"Done":t?"Missed":"Pending"} · ${l?`${l}/5 ${Z(l)}`:"No rating"}${r.description?` · ${f(r.description)}`:""}</div>
                              ${qt(r.forwardedFrom)}
                              ${at(r.forwardedTo)}
                              ${W(r.tags)}
                              ${It(r.id,l,t)}
                            </div>
                            <div class="item-side">
                              <div class="points">+${r.points}</div>
                              <div class="mini-actions">
                                ${I?`<button class="mini-btn on" data-action="open-edit-task" data-id="${r.id}" ${t?"disabled":""}>Edit</button>`:""}
                                <button class="mini-btn" data-action="open-forward-task" data-id="${r.id}" ${t?"disabled":""} title="Forward task to another day">${E("forward")}</button>
                              </div>
                            </div>
                          </article>
                        `}).join("")}
                  `:'<div class="empty">No activities in this category.</div>'}
            </div>
          </section>
        `}).join("")}
  `}function gt(t){return`${t||"daily-report-backup"}-${c.todayKey()}.json`}function _t(){return typeof window.showDirectoryPicker=="function"}function ft(){return new Promise((t,e)=>{const a=indexedDB.open("daily-report-pwa",1);a.onupgradeneeded=()=>a.result.createObjectStore("kv"),a.onsuccess=()=>t(a.result),a.onerror=()=>e(a.error)})}function oe(t){return ft().then(e=>new Promise((a,i)=>{const s=e.transaction("kv","readonly").objectStore("kv").get(t);s.onsuccess=()=>a(s.result),s.onerror=()=>i(s.error)}))}function re(t,e){return ft().then(a=>new Promise((i,s)=>{const n=a.transaction("kv","readwrite");n.objectStore("kv").put(e,t),n.oncomplete=()=>i(),n.onerror=()=>s(n.error)}))}function de(t){return ft().then(e=>new Promise((a,i)=>{const s=e.transaction("kv","readwrite");s.objectStore("kv").delete(t),s.oncomplete=()=>a(),s.onerror=()=>i(s.error)}))}function ce(){return!_t()||typeof indexedDB>"u"?(x="unsupported",Promise.resolve()):oe("backupDir").then(t=>{if(T=t||null,!T){x="unset";return}return T.queryPermission({mode:"readwrite"}).then(e=>{x=e==="granted"?"granted":"prompt"}).catch(()=>{x="prompt"})}).catch(()=>{T=null,x="unset"})}function le(){return x==="unsupported"?"Folder picking needs Chrome/Edge on desktop — on phones backups download instead.":x==="unset"?"No folder chosen yet.":x==="prompt"?"Tap Choose folder to allow access again.":x==="denied"?"Access was denied — choose the folder again.":x==="granted"&&T?`Folder: ${T.name}`:"Checking…"}async function ue(){if(!_t()){g("Folder access needs Chrome or Edge");return}try{const t=await window.showDirectoryPicker({id:"daily-report-backup",mode:"readwrite"});await re("backupDir",t),T=t,x="granted",g("Backup folder set")}catch(t){t&&t.name==="AbortError"||g("Couldn't open that folder")}w()}async function pe(){try{await de("backupDir")}catch{g("Couldn't remove folder");return}T=null,x="unset",g("Backup folder removed"),w()}async function me(){if(T){try{const t=await T.requestPermission({mode:"readwrite"});x=t==="granted"?"granted":"denied",g(t==="granted"?"Folder access granted":"Access denied")}catch{x="denied"}w()}}async function ge(){const t=c.exportBackup(),e=gt();if(x==="granted"&&T)try{const i=await(await T.getFileHandle(e,{create:!0})).createWritable();await i.write(t),await i.close(),g("Backup saved to your folder"),Wt();return}catch{}J(e,t,"application/json"),g("Backup downloaded")}async function fe(){if(x!=="granted"||!T)return[];const t=[];try{for await(const e of T.values())if(e&&e.kind==="file"&&/\.json$/i.test(e.name))try{const a=await e.getFile();t.push({name:e.name,modified:a.lastModified})}catch{}}catch{return t}return t.sort((e,a)=>a.modified-e.modified),t}async function Wt(){const t=document.getElementById("folder-backup-list");if(!t)return;if(x!=="granted"||!T){t.innerHTML='<button class="ghost-btn compact" data-action="trigger-import">Import from a file instead</button>';return}t.innerHTML='<p class="item-meta">Loading backups…</p>';const e=await fe();if(!document.getElementById("folder-backup-list"))return;e.length?t.innerHTML=e.map(i=>`
            <div style="display:flex;gap:8px;align-items:center;margin-bottom:6px">
              <span class="item-meta" style="flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${f(i.name)}</span>
              <button class="ghost-btn compact" data-action="restore-backup" data-name="${f(i.name)}">Restore</button>
            </div>
          `).join(""):t.innerHTML='<p class="item-meta">Folder is empty — press Export backup now to create the first backup.</p>';const a=document.createElement("div");a.innerHTML='<button class="ghost-btn compact" data-action="trigger-import">Import from a file instead</button>',t.appendChild(a)}async function he(t){if(T)try{const a=await(await T.getFileHandle(t)).getFile();zt(await a.text(),t)}catch{g("Couldn't read that backup")}}function zt(t,e){let a;try{a=JSON.parse(t)}catch{g("That file isn't valid JSON.");return}const i=c.backupKind(a);if(i==="report-export"){g("That is a report export (Report → Export), not a data backup. Import a daily-report-backup-*.json file instead.");return}if(i==="wrong-app"){g("That backup belongs to another app (e.g. Iron Log) — it can’t be imported into Daily Report.");return}if(i!=="ok"){g("That file doesn't look like a valid Daily Report backup.");return}window.confirm(`Replace ALL app data with "${e}"?`)&&(J(gt("daily-report-pre-import"),c.exportBackup(),"application/json"),c.importBackup(a),g("Backup imported"),w())}async function be(){if(!_){g("Use the browser menu: Install / Add to Home Screen");return}try{_.prompt();const t=await _.userChoice;t&&t.outcome==="accepted"&&g("Installing Daily Report…")}catch{}_=null,w()}function ye(t){const e=/daily-report-v(\d+)/.exec(t||"");return e?Number(e[1]):null}async function ve(){G=!0,pt=!1,B="Checking for updates… (needs internet)",w();try{"serviceWorker"in navigator&&navigator.serviceWorker.getRegistration&&navigator.serviceWorker.getRegistration().then(e=>{e&&e.update&&e.update().catch(()=>{})}).catch(()=>{})}catch{}if(typeof fetch>"u"){G=!1,B="This browser can’t check — but the app itself works offline. Use Export backup to protect your data.",w();return}const t=setTimeout(()=>{G&&(G=!1,B="Couldn't reach the server — offline? The app itself works offline; updating needs internet.",w())},12e3);try{const e=await fetch("./sw.js",{cache:"no-store"});if(!e.ok)throw new Error(`http ${e.status}`);const a=await e.text();clearTimeout(t);const i=ye(a);G=!1,i===null?B="Reached the server but couldn’t read its version. Your data is safe on this device.":(Bt=i,i>rt?(pt=!0,B=`Update found: v${i} (you have v${rt}) — tap Save backup & restart.`):B=`You're on the latest version (v${rt}). The app works offline.`)}catch{clearTimeout(t),G=!1,B="Couldn't reach the server — offline, or this file wasn't opened from the installed/hosted app. The app itself works offline; updating needs internet."}w()}async function ke(){J(gt("daily-report-pre-update"),c.exportBackup(),"application/json"),g("Backup saved — updating app…"),B=`Backup saved — updating to v${Bt||"?"}…`;const t=()=>window.location.reload();try{if("serviceWorker"in navigator&&navigator.serviceWorker.getRegistration){const e=await navigator.serviceWorker.getRegistration().catch(()=>null);if(e&&e.unregister){e.unregister().then(t).catch(t),setTimeout(t,3e3);return}}}catch{}setTimeout(t,900)}function $e(){const t=c.getSettings(),e=c.getAllHabits(),a=c.getPinnedTasks(),i=c.lockedReports();return`
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
      <h2>Install app</h2>
      <p class="muted tight">Put Daily Report on your home screen for fullscreen offline use. Open it over http://localhost or https — it cannot install from a file:// page.</p>
      ${window.matchMedia&&window.matchMedia("(display-mode: standalone)").matches?'<p class="item-meta">Installed — running as app ✓</p>':'<button class="primary-btn full" data-action="install-app">Install Daily Report</button>'}
    </section>

    <section class="manage-card">
      <h2>App updates</h2>
      <p class="muted tight">The app works fully offline. Only checking for updates needs internet. Restarting after an update saves a JSON backup of your data first.</p>
      <p class="item-meta">Version: ${f(Xt)}</p>
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:8px">
        <button class="primary-btn" data-action="check-updates" ${G?"disabled":""}>Check for updates</button>
        ${pt?'<button class="primary-btn" data-action="apply-update">Save backup &amp; restart</button>':""}
      </div>
      <p class="item-meta">${f(B)}</p>
    </section>

    <section class="manage-card">
      <h2>Data backup</h2>
      <p class="muted tight">Pick a backup folder once (Chrome/Edge on desktop) and exports save straight into it. On phones, backups download to your Downloads folder instead. Import accepts full backup files only (<b>daily-report-backup-*.json</b>) — not Report → Export files.</p>
      <p class="item-meta">${f(le())}</p>
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:8px">
        ${x==="prompt"?'<button class="primary-btn" data-action="grant-folder">Allow access</button>':'<button class="ghost-btn compact" data-action="choose-folder">Choose folder</button>'}
        ${T?'<button class="ghost-btn compact" data-action="forget-folder">Remove</button>':""}
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
        ${c.getGoals().length?c.getGoals().map(s=>{var l,d;const n=c.goalProgress(s,m),o=c.getBadges().some(v=>v.goalId===s.id),r=s.kind==="habit-streak"?((l=c.findHabit(s.targetId))==null?void 0:l.name)||"Deleted habit":s.kind==="task-streak"?((d=c.findPinnedTask(s.targetId))==null?void 0:d.title)||"Deleted task":"Any day at 100%";return`
                    <article class="manage-card goal-card ${o?"goal-earned":""}">
                      <div class="section-head">
                        <div>
                          <div class="item-title">${dt(s.tier)} ${f(s.title)}</div>
                          <div class="item-meta">${Ht(s.tier)} · “${f(s.rewardTitle)}” · ${f(r)}</div>
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
      ${c.getBadges().length?`
            <div class="section-head" style="margin-top:14px"><h2>Earned badges</h2></div>
            <div class="rewards-grid">
              ${c.getBadges().map(s=>`
                <article class="reward-card tier-${s.tier}">
                  <div class="reward-medal">${dt(s.tier)}</div>
                  <div>
                    <div class="item-title">${f(s.rewardTitle||s.title)}</div>
                    <div class="item-meta">${f(s.title)} · ${O((s.earnedAt||"").slice(0,10))}</div>
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
                          <div class="item-title">${O(s.date)}</div>
                          <div class="item-meta">${s.submittedAt?`Submitted ${jt(s.submittedAt)}`:"Locked"} · ${s.earned} pts</div>
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
                          <div class="item-title">${f(s.name)}</div>
                          <div class="item-meta">${tt(s.category)} · ${s.pin?X(s.pin):"Not pinned"} · +${s.points} pts ${t.showConscious!==!1?Number(s.consciousPoints)?`· 🧠 +${s.consciousPoints}`:"· No conscious pts":""} · ${et(c.habitStreak(s.id,m))}</div>
                          ${s.description?`<p class="item-desc">${f(s.description)}</p>`:""}
                          ${W(s.tags)}
                        </div>
                        <div class="mini-actions">
                          <button class="mini-btn ${s.pin?"on":""}" data-action="open-pin-habit" data-id="${s.id}">${E("pin")}</button>
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
                          <div class="item-title">${f(s.title)}</div>
                          <div class="item-meta">${tt(s.category)} · ${X(s.pin)} · +${s.points} pts</div>
                          ${s.description?`<p class="item-desc">${f(s.description)}</p>`:""}
                          ${W(s.tags)}
                        </div>
                        <div class="mini-actions">
                          <button class="mini-btn on" data-action="open-pin-template" data-id="${s.id}">${E("pin")}</button>
                          <button class="mini-btn" data-action="unpin-template" data-id="${s.id}">✕</button>
                        </div>
                      </div>
                    </article>
                  `).join(""):'<div class="empty">Pin a task from Today to repeat it.</div>'}
      </div>
    </section>
  `}function F(t){if(/^\d{4}-\d{2}$/.test(String(t||"")))return String(t);if(/^\d{4}-\d{2}-\d{2}$/.test(String(t||"")))return String(t).slice(0,7);const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}`}function Dt(t,e){const[a,i]=String(t).split("-").map(Number),s=new Date(a,(i||1)-1+e,1);return`${s.getFullYear()}-${String(s.getMonth()+1).padStart(2,"0")}`}function we(t){const[e,a]=String(t).split("-").map(Number);return new Date(e,(a||1)-1,1).toLocaleDateString(void 0,{month:"long",year:"numeric"})}function Se(t){const[e,a]=String(t).split("-").map(Number),s=(new Date(e,a-1,1).getDay()+6)%7,n=new Date(e,a,0).getDate(),o=[];for(let r=0;r<s;r++)o.push(null);for(let r=1;r<=n;r++)o.push(`${e}-${String(a).padStart(2,"0")}-${String(r).padStart(2,"0")}`);return o}function Tt(t,e,a){const i=new Set(a||[]),s=Se(e);return`
    <div class="pin-cal" data-cal="${t}">
      <div class="pin-cal-head">
        <button type="button" class="mini-btn" data-action="pin-cal-nav" data-target="${t}" data-dir="-1" aria-label="Previous month">‹</button>
        <b>${we(e)}</b>
        <button type="button" class="mini-btn" data-action="pin-cal-nav" data-target="${t}" data-dir="1" aria-label="Next month">›</button>
      </div>
      <div class="pin-cal-grid pin-cal-week">
        ${["M","T","W","T","F","S","S"].map(n=>`<span>${n}</span>`).join("")}
      </div>
      <div class="pin-cal-grid">
        ${s.map(n=>n?`<button type="button" class="pin-cal-day ${i.has(n)?"on":""}" data-action="toggle-pin-date" data-target="${t}" data-date="${n}">${Number(n.slice(8,10))}</button>`:"<span></span>").join("")}
      </div>
    </div>
  `}function xe(t,e){const a=(t==null?void 0:t.mode)||"forever",i=(t==null?void 0:t.until)||"",s=((t==null?void 0:t.weekdays)||[]).map(Number),n=((t==null?void 0:t.monthDays)||[]).map(Number),o=Array.isArray(t==null?void 0:t.yearDays)?[...t.yearDays].sort():[],r=Array.isArray(t==null?void 0:t.customDates)?[...t.customDates].sort():[],l=Array.isArray(t==null?void 0:t.exceptDates)?[...t.exceptDates].sort():Array.isArray(t==null?void 0:t.exceptions)?[...t.exceptions].sort():[],d=e&&e._exceptCal||F(m),v=e&&e._customCal||F(m),N=e&&e._yearMonth||"01";return`
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
        ${Et.map(b=>`
            <button type="button" class="chip weekday ${s.includes(b.value)?"on":""}" data-action="toggle-weekday" data-day="${b.value}">
              ${b.label}
            </button>
          `).join("")}
      </div>
    </div>
    <div class="pin-monthdays" style="${a==="monthly"?"":"display:none"}">
      <p class="item-meta">Repeat every month on day</p>
      <div class="chip-row">
        ${Array.from({length:31},(b,S)=>S+1).map(b=>`<button type="button" class="chip monthday ${n.includes(b)?"on":""}" data-action="toggle-monthday" data-day="${b}">${b}</button>`).join("")}
      </div>
    </div>
    <div class="pin-yeardays" style="${a==="yearly"?"":"display:none"}">
      <p class="item-meta">Repeat every year on (month + day)</p>
      <div class="row-2">
        <label>Month
          <select id="year-month-select">
            ${Array.from({length:12},(b,S)=>S+1).map(b=>`<option value="${String(b).padStart(2,"0")}" ${N===String(b).padStart(2,"0")?"selected":""}>${new Date(2e3,b-1,1).toLocaleDateString(void 0,{month:"long"})}</option>`).join("")}
          </select>
        </label>
        <label>Day
          <select id="year-day-select">
            ${Array.from({length:31},(b,S)=>S+1).map(b=>`<option value="${String(b).padStart(2,"0")}">${b}</option>`).join("")}
          </select>
        </label>
      </div>
      <button type="button" class="ghost-btn compact" data-action="add-year-day" style="margin-top:8px">Add yearly date</button>
      <div class="chip-row" style="margin-top:8px">
        ${o.length?o.map(b=>`<button type="button" class="chip on" data-action="remove-year-day" data-date="${b}" title="Tap to remove">${b} ✕</button>`).join(""):'<span class="item-meta">No yearly dates yet.</span>'}
      </div>
    </div>
    <div class="pin-customdays" style="margin-top:4px">
      <p class="item-meta"><b style="color:var(--text)">Extra custom dates</b> — also show on these days. Combines with Weekly / Monthly / Yearly; pick the <b style="color:var(--text)">Custom</b> mode to show <i>only</i> on these days. Tap days on the calendar.</p>
      ${Tt("custom",v,r)}
      <div class="chip-row" style="margin-top:8px">
        ${r.length?r.map(b=>`<button type="button" class="chip on" data-action="toggle-pin-date" data-target="custom" data-date="${b}" title="Tap to remove">${b} ✕</button>`).join(""):'<span class="item-meta">No extra custom dates.</span>'}
      </div>
    </div>
    <div class="pin-exceptions" style="margin-top:4px">
      <p class="item-meta"><b style="color:var(--text)">Exceptions</b> — skip these days (tap days on the calendar). Applies to every repeat mode.</p>
      ${Tt("except",d,l)}
      <div class="chip-row" style="margin-top:8px">
        ${l.length?l.map(b=>`<button type="button" class="chip on" data-action="toggle-pin-date" data-target="except" data-date="${b}" title="Tap to remove">${b} ✕</button>`).join(""):'<span class="item-meta">No exceptions.</span>'}
      </div>
    </div>
  `}function De(){if(!y)return"";if(y==="choose")return`
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
    `;if(y==="habit"||y==="task"||y==="edit-habit"||y==="edit-task"){const t=y==="habit"||y==="edit-habit",e=y.startsWith("edit-"),a=p||{},i=a.category||(t?"physically":"mentally"),s=Math.max(0,Math.min(5,Number(a.rating)||0)),n=Array.isArray(a.tags)?a.tags.join(", "):a.tags||"",o=a.consciousPoints!=null?Number(a.consciousPoints):a.conscious!=null?Number(a.conscious):0;return`
      <div class="modal-backdrop open" data-action="close-modal">
        <form class="sheet" data-form="${y}" data-id="${a.id||""}">
          <div class="handle"></div>
          <h2>${e?"Edit":"New"} ${t?"habit":"task"}</h2>
          <div class="form" style="margin-top:14px">
            <label>
              ${t?"Habit name":"Task name"}
              <input name="title" required maxlength="60" value="${f(a.title||a.name||"")}" placeholder="${t?"Meditate":"Finish report"}" />
            </label>
            ${t?`
                  <label>
                    Description (optional)
                    <textarea name="description" maxlength="240" placeholder="Why this habit matters, extra notes...">${f(a.description||"")}</textarea>
                  </label>
                `:`
                  <label>
                    Description (optional)
                    <textarea name="description" maxlength="240" placeholder="Why this matters, extra notes...">${f(a.description||"")}</textarea>
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
                `}
            <div>
              <p class="item-meta">Category</p>
              <div class="chip-row cat-row">
                ${st.map(r=>`
                    <button type="button" class="chip ${i===r.id?"on":""}" data-action="set-category" data-category="${r.id}">${r.label}</button>
                  `).join("")}
              </div>
              <input type="hidden" name="category" value="${i}" />
            </div>
            <label>
              Tags (optional, comma separated)
              <input name="tags" maxlength="120" value="${f(n)}" placeholder="morning, health" />
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
    `}if(y==="export"){const t=p&&p.range||"day";return`
      <div class="modal-backdrop open" data-action="close-modal">
        <div class="sheet">
          <div class="handle"></div>
          <h2>Export report</h2>
          <p class="muted tight">Date: ${O(m)}. Pick a range, then a format.</p>
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
    `}if(y==="goal"||y==="edit-goal"){const t=y==="edit-goal",e=p||{},a=e.kind||"habit-streak",i=c.getAllHabits(),s=c.getPinnedTasks(),n=e.targetId||"";return`
      <div class="modal-backdrop open" data-action="close-modal">
        <form class="sheet" data-form="${y}" data-id="${e.id||""}">
          <div class="handle"></div>
          <h2>${t?"Edit":"New"} goal</h2>
          <div class="form" style="margin-top:14px">
            <label>
              Goal title
              <input name="title" required maxlength="60" value="${f(e.title||"")}" placeholder="Exercise every day" />
            </label>
            <div>
              <p class="item-meta">Goal type</p>
              <div class="chip-row goal-kind-row">
                ${Mt.map(o=>`<button type="button" class="chip ${a===o.id?"on":""}" data-action="set-goal-kind" data-kind="${o.id}">${o.label}</button>`).join("")}
              </div>
              <input type="hidden" name="kind" value="${a}" />
            </div>
            <label class="goal-target-habit" style="${a==="habit-streak"?"":"display:none"}">
              Habit
              <select name="habitTarget">
                ${i.map(o=>`<option value="${o.id}" ${n===o.id?"selected":""}>${f(o.name)}</option>`).join("")}
              </select>
            </label>
            <label class="goal-target-task" style="${a==="task-streak"?"":"display:none"}">
              Pinned task
              <select name="taskTarget">
                ${s.length?s.map(o=>`<option value="${o.id}" ${n===o.id?"selected":""}>${f(o.title)}</option>`).join(""):'<option value="">No pinned tasks yet</option>'}
              </select>
            </label>
            <label>
              Number of days
              <input name="targetDays" type="number" min="1" max="365" value="${e.targetDays||7}" />
            </label>
            <div>
              <p class="item-meta">Badge</p>
              <div class="chip-row goal-tier-row">
                ${Y.map(o=>`<button type="button" class="chip ${(e.tier||"bronze")===o.id?"on":""}" data-action="set-goal-tier" data-tier="${o.id}">${o.medal} ${o.label}</button>`).join("")}
              </div>
              <input type="hidden" name="tier" value="${e.tier||"bronze"}" />
            </div>
            <label>
              Reward title (yours)
              <input name="rewardTitle" required maxlength="60" value="${f(e.rewardTitle||"")}" placeholder="Champion" />
            </label>
            <button class="primary-btn" type="submit">Save goal</button>
            <button class="ghost-btn" type="button" data-action="close-modal">Cancel</button>
          </div>
        </form>
      </div>
    `}if(y==="pin"){const{kind:t,id:e,title:a,pin:i}=p||{};return`
      <div class="modal-backdrop open" data-action="close-modal">
        <form class="sheet sheet-wide" data-form="pin" data-kind="${t}" data-id="${e}">
          <div class="handle"></div>
          <h2>Pin ${t==="habit"?"habit":"task"}</h2>
          <p class="muted tight">${f(a||"")}</p>
          <div class="form" style="margin-top:14px">
            ${xe(i,p)}
            <button class="primary-btn" type="submit">Save pin</button>
            ${i?'<button class="ghost-btn danger" type="button" data-action="clear-pin">Unpin</button>':""}
            <button class="ghost-btn" type="button" data-action="close-modal">Cancel</button>
          </div>
        </form>
      </div>
    `}if(y==="forward"){const{kind:t,id:e,title:a,from:i}=p||{},s=t==="habit";return`
      <div class="modal-backdrop open" data-action="close-modal">
        <form class="sheet" data-form="forward" data-kind="${t}" data-id="${e}">
          <div class="handle"></div>
          <h2>Forward ${s?"habit":"task"}</h2>
          <p class="muted tight">${f(a||"")}</p>
          <p class="item-meta">From ${f(i||m)} — a copy will be created on the day you pick, marked “↩ Forwarded from ${f(i||m)}”.</p>
          <div class="form" style="margin-top:14px">
            <label>
              Forward to day
              <input name="targetDate" type="date" required value="${te(i||m)}" />
            </label>
            <button class="primary-btn" type="submit">Forward ${s?"habit":"task"} →</button>
            <button class="ghost-btn" type="button" data-action="close-modal">Cancel</button>
          </div>
        </form>
      </div>
    `}return""}function w(){if(ot)try{const t=c.isLocked(m);ot.innerHTML=`
    <div class="app-shell">
      <main class="screen active">
        ${A==="today"?ae():""}
        ${A==="week"?se():""}
        ${A==="history"?ie():""}
        ${A==="habits"?ne():""}
        ${A==="settings"?$e():""}
      </main>
      ${["today","habits"].includes(A)&&!t?'<button class="fab" data-action="open-add" aria-label="Add">+</button>':""}
      ${A==="settings"?'<button class="fab" data-action="open-add-habit" aria-label="Add habit">+</button>':""}
      <nav class="tabbar tabs-5">
        <button class="tab ${A==="today"?"active":""}" data-screen="today">${E("home")}Today</button>
        <button class="tab ${A==="week"?"active":""}" data-screen="week">${E("week")}Week</button>
        <button class="tab ${A==="history"?"active":""}" data-screen="history">${E("history")}History</button>
        <button class="tab ${A==="habits"?"active":""}" data-screen="habits">${E("habit")}Activities</button>
        <button class="tab ${A==="settings"?"active":""}" data-screen="settings">${E("settings")}Settings</button>
      </nav>
    </div>
    ${De()}
    <div class="toast" id="toast"></div>
  `,Ae(),Pe(),Wt(),Te()}catch(t){const e=t&&t.stack?String(t.stack).slice(0,400):t&&t.message?t.message:"Unknown error";ot.innerHTML=`<div class="app-shell"><section class="manage-card"><h2>Could not load (Error B)</h2><p class="muted tight">${f(e)}</p><button class="primary-btn full" data-action="reload-app">Reload</button></section></div>`}}function Te(){if(y!=="habit"&&y!=="task")return;const t=document.querySelector(".sheet");t&&(t.scrollTop=0);const e=document.querySelector('.sheet input[name="title"]');if(e)try{e.focus({preventScroll:!0})}catch{try{e.focus()}catch{}}}function Ae(){const t=document.getElementById("day-note");t&&t.addEventListener("input",()=>{c.isLocked(m)||c.setNote(m,t.value)})}function Pe(){const t=document.getElementById("lock-time"),e=document.getElementById("auto-lock");t&&t.addEventListener("change",()=>{c.setLockTime(t.value),g(`Lock time set to ${t.value}`),w()}),e&&e.addEventListener("change",()=>{c.setAutoLock(e.checked),g(e.checked?"Auto-lock on":"Auto-lock off"),w()});const a=document.getElementById("backup-file");a&&a.addEventListener("change",()=>{const i=a.files[0];if(!i)return;const s=new FileReader;s.onload=()=>{zt(String(s.result||""),i.name),a.value=""},s.onerror=()=>{g("Couldn't read that file."),a.value=""},s.readAsText(i)})}function g(t){const e=document.getElementById("toast");e&&(e.textContent=t,e.classList.add("show"),setTimeout(()=>e.classList.remove("show"),1800))}function f(t){return String(t||"").split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;").split('"').join("&quot;")}function H(){return c.isLocked(m)?(g("This report is locked. Unlock it in Settings."),!0):!1}function ht(t){return{mode:(t==null?void 0:t.mode)||"forever",until:(t==null?void 0:t.until)||"",weekdays:Array.isArray(t==null?void 0:t.weekdays)?t.weekdays.map(Number):[],monthDays:Array.isArray(t==null?void 0:t.monthDays)?t.monthDays.map(Number):[],yearDays:Array.isArray(t==null?void 0:t.yearDays)?[...t.yearDays]:[],customDates:Array.isArray(t==null?void 0:t.customDates)?[...t.customDates]:[],exceptDates:Array.isArray(t==null?void 0:t.exceptDates)?[...t.exceptDates]:Array.isArray(t==null?void 0:t.exceptions)?[...t.exceptions]:[]}}function Ne(t){const e=c.findHabit(t);e&&(y="pin",p={kind:"habit",id:t,title:e.name,pin:e.pin?ht(e.pin):{mode:"forever",until:"",weekdays:[],monthDays:[],yearDays:[],customDates:[],exceptDates:[]},_exceptCal:F(m),_customCal:F(m),_yearMonth:"01"})}function Me(t){const e=c.findTask(m,t);if(!e)return;const a=e.sourcePinId?c.findPinnedTask(e.sourcePinId):null;y="pin",p={kind:"task",id:t,title:e.title,pin:a!=null&&a.pin?ht(a.pin):{mode:"forever",until:"",weekdays:[],monthDays:[],yearDays:[],customDates:[],exceptDates:[]},_exceptCal:F(m),_customCal:F(m),_yearMonth:"01"}}function He(t){const e=c.findPinnedTask(t);e&&(y="pin",p={kind:"template",id:t,title:e.title,pin:e.pin?ht(e.pin):{mode:"forever",until:"",weekdays:[],monthDays:[],yearDays:[],customDates:[],exceptDates:[]},_exceptCal:F(m),_customCal:F(m),_yearMonth:"01"})}function Ee(t){var d;const e=t.querySelector('input[name="mode"]').value,a=((d=t.querySelector('input[name="until"]'))==null?void 0:d.value)||"",i=[...t.querySelectorAll(".weekday.on")].map(v=>Number(v.dataset.day)),s=[...t.querySelectorAll(".monthday.on")].map(v=>Number(v.dataset.day)),n=p&&p.pin||{},o=Array.isArray(n.yearDays)?n.yearDays:[],r=Array.isArray(n.customDates)?n.customDates:[],l=Array.isArray(n.exceptDates)?n.exceptDates:[];return e==="until"&&!a?(g("Pick an until date"),null):e==="weekly"&&!i.length?(g("Pick at least one weekday"),null):e==="monthly"&&!s.length?(g("Pick at least one day of month"),null):e==="yearly"&&!o.length?(g("Add at least one yearly date"),null):e==="custom"&&!r.length?(g("Pick at least one custom date"),null):{mode:e,until:a,weekdays:i,monthDays:s,yearDays:o,customDates:r,exceptDates:l}}function J(t,e,a){const i=e instanceof Blob?e:new Blob([e],{type:a||"text/plain;charset=utf-8"}),s=URL.createObjectURL(i),n=document.createElement("a");n.href=s,n.download=t,document.body.appendChild(n),n.click(),setTimeout(()=>{document.body.removeChild(n),URL.revokeObjectURL(s)},500)}function U(t){const e=String(t??"");return/[",\n]/.test(e)?`"${e.replace(/"/g,'""')}"`:e}function bt(t){const[e,a]=c.resolveRange(t,m);return{range:t,start:e,end:a,rows:c.exportRows(e,a)}}function Ce(){const t=p&&p.range||"day",{start:e,end:a,rows:i}=bt(t),s=[];s.push(["Daily Report export",`${e} to ${a}`].map(U).join(",")),s.push(["Date","Type","Name","Category","Tags","Points","Rating","Earned","ConsciousPts","Status","Note/Description"].map(U).join(",")),i.forEach(n=>{n.habits.forEach(o=>{s.push([n.date,"Habit",o.name,o.category,(o.tags||[]).join("|"),o.points,o.rating,o.earned,o.consciousPoints,o.status||(o.rating>0?"done":n.locked?"missed":"pending"),o.description||""].map(U).join(","))}),n.tasks.forEach(o=>{s.push([n.date,"Task",o.title,o.category,(o.tags||[]).join("|"),o.points,o.rating||"",o.earned,"",o.status||(o.done?"done":n.locked?"missed":"pending"),o.description||""].map(U).join(","))}),s.push([n.date,"Summary",`Earned ${n.earned}/${n.max} (${n.percent}%)`,"","","","","","",n.locked?"locked":"open",n.note||""].map(U).join(","))}),J(`daily-report-${t}-${e}-to-${a}.csv`,"\uFEFF"+s.join(`
`),"text/csv;charset=utf-8"),g("Excel (CSV) exported")}function Le(){const t=p&&p.range||"day",{start:e,end:a,rows:i}=bt(t),s={app:"Daily Report",exportedAt:new Date().toISOString(),range:t,start:e,end:a,days:i};J(`daily-report-${t}-${e}-to-${a}.json`,JSON.stringify(s,null,2),"application/json"),g("JSON exported")}function Re(){const t=p&&p.range||"day",{start:e,end:a,rows:i}=bt(t),s=i.map(o=>`
        <section style="margin-bottom:18px;border:1px solid #ddd;border-radius:12px;padding:12px">
          <h2 style="margin:0 0 4px;font-size:16px">${f(o.date)} — ${o.earned}/${o.max} pts (${o.percent}%)</h2>
          <p style="margin:0 0 8px;font-size:12px;color:#555">Habits ${o.habitScore} + Conscious ${o.consciousScore} + Tasks ${o.taskScore} · ${o.locked?"Locked":"Open"}${o.note?` · Note: ${f(o.note)}`:""}</p>
          <table style="width:100%;border-collapse:collapse;font-size:12px">
            <thead><tr><th align="left">Type</th><th align="left">Name</th><th align="left">Category</th><th>Points</th><th>Rating</th><th>Earned</th><th>Status</th></tr></thead>
            <tbody>
              ${o.habits.map(r=>`<tr><td>Habit</td><td>${f(r.name)}${r.description?` (${f(r.description)})`:""}</td><td>${f(r.category)}</td><td align="center">${r.points}${r.consciousPoints?`+${r.consciousPoints}🧠`:""}</td><td align="center">${r.rating||"-"}/5</td><td align="center">${r.earned}</td><td align="center">${r.status||(r.rating>0?"done":o.locked?"missed":"pending")}</td></tr>`).join("")}
              ${o.tasks.map(r=>`<tr><td>Task</td><td>${f(r.title)}${r.description?` (${f(r.description)})`:""}</td><td>${f(r.category)}</td><td align="center">${r.points}</td><td align="center">${r.rating?`${r.rating}/5`:"-"}</td><td align="center">${r.earned}</td><td align="center">${r.status||(r.done?"done":o.locked?"missed":"pending")}</td></tr>`).join("")}
            </tbody>
          </table>
        </section>
      `).join(""),n=window.open("","_blank");if(!n){g("Popup blocked — allow popups to export PDF");return}n.document.write(`<!DOCTYPE html><html><head><title>Daily Report ${e} to ${a}</title></head><body style="font-family:sans-serif;padding:24px"><h1>Daily Report — ${e} to ${a}</h1>${s}<script>window.onload=function(){window.print()}<\/script></body></html>`),n.document.close(),g("PDF print view opened")}document.addEventListener("click",t=>{const e=t.target.closest("[data-screen]");if(e){A=e.dataset.screen,w();return}const a=t.target.closest("[data-action]");if(!a)return;const i=a.dataset.action;if(i==="close-modal"){(t.target.classList.contains("modal-backdrop")||a.classList.contains("ghost-btn"))&&(y=null,p=null,w());return}if(i==="prev-day"&&St(-1),i==="next-day"&&St(1),i==="reload-app"){window.location.reload();return}if(i==="install-app"){be();return}if(i==="check-updates"){ve();return}if(i==="apply-update"){ke();return}if(i==="backup-now"){ge();return}if(i==="trigger-import"){const s=document.getElementById("backup-file");s&&s.click();return}if(i==="choose-folder"){ue();return}if(i==="grant-folder"){me();return}if(i==="forget-folder"){pe();return}if(i==="restore-backup"){he(a.dataset.name);return}if(i==="goto-settings"&&(A="settings"),i==="open-add-habit"&&(y="habit",p=null),i==="open-add-task"){if(H())return;y="task",p={category:"mentally"}}if(i==="open-add"){if(H())return;y="choose",p={category:"mentally"}}if(i==="toggle-edit"&&(I=!I),i==="open-edit-habit"){const s=c.findHabit(a.dataset.id);if(!s)return;y="edit-habit",p={id:s.id,name:s.name,description:s.description||"",points:s.points,category:s.category,tags:s.tags||[],consciousPoints:Number(s.consciousPoints)||0}}if(i==="open-edit-task"){if(H())return;const s=c.findTask(m,a.dataset.id);if(!s)return;y="edit-task",p={id:s.id,title:s.title,points:s.points,description:s.description,category:s.category,tags:s.tags||[],rating:Number(s.rating)||0}}if(i==="toggle-badges"&&(K=!K),i==="open-goal"&&(y="goal",p={kind:"habit-streak",targetDays:7,tier:"bronze"}),i==="open-edit-goal"){const s=c.getGoals().find(n=>n.id===a.dataset.id);if(!s)return;y="edit-goal",p={...s}}if(i==="remove-goal"&&(c.removeGoal(a.dataset.id),g("Goal removed")),i==="remove-badge"&&(c.removeBadge(a.dataset.id),g("Badge removed")),i==="rate-habit"){if(H())return;const n=c.habitRating(m,a.dataset.id)===Number(a.dataset.rating)?0:Number(a.dataset.rating);c.setHabitRating(m,a.dataset.id,n)}if(i==="rate-task"){if(H())return;const s=c.findTask(m,a.dataset.id);if(!s)return;const o=(Number(s.rating)||0)===Number(a.dataset.rating)?0:Number(a.dataset.rating);c.setTaskRating(m,a.dataset.id,o)}if(i==="open-export"&&(y="export",p={range:p&&p.range||"day"}),i==="set-export-range"){y="export",p={range:a.dataset.range||"day"},w();return}if(i==="do-export"){const s=a.dataset.format;s==="csv"&&Ce(),s==="json"&&Le(),s==="pdf"&&Re(),y=null,p=null}if(i==="submit-day"&&(c.submitDay(m),g("Report submitted and locked")),i==="unlock-day"&&(c.unlockDay(a.dataset.date),g("Report unlocked")),i==="toggle-habit"){if(H())return;c.toggleHabit(m,a.dataset.id)}if(i==="toggle-task"){if(H())return;c.toggleTask(m,a.dataset.id)}if(i==="remove-task"){if(H())return;c.removeTask(m,a.dataset.id)}if(i==="remove-habit"&&c.removeHabit(a.dataset.id),i==="open-pin-habit"&&Ne(a.dataset.id),i==="open-forward-habit"){if(H())return;const s=c.findHabit(a.dataset.id);if(!s)return;y="forward",p={kind:"habit",id:s.id,title:s.name,from:m}}if(i==="open-forward-task"){if(H())return;const s=c.findTask(m,a.dataset.id);if(!s)return;y="forward",p={kind:"task",id:s.id,title:s.title,from:m}}if(i==="open-pin-task"){if(H())return;Me(a.dataset.id)}if(i==="open-pin-template"&&He(a.dataset.id),i==="unpin-template"&&(c.unpinTaskTemplate(a.dataset.id),g("Task unpinned")),i==="pick-date"&&(m=a.dataset.date,A="today"),i==="set-points"){const s=document.querySelector('input[name="points"]');s&&(s.value=a.dataset.points),document.querySelectorAll(".chip-row .chip[data-points]").forEach(n=>n.classList.remove("on")),a.classList.add("on");return}if(i==="set-category"){const s=a.closest("form")||a.closest(".sheet"),n=s.querySelector('input[name="category"]');n&&(n.value=a.dataset.category),s.querySelectorAll(".cat-row .chip").forEach(o=>o.classList.remove("on")),a.classList.add("on");return}if(i==="set-rating"){const s=a.closest(".sheet")||a.closest("form")||document,n=s.querySelector('input[name="rating"]');n&&(n.value=a.dataset.rating),s.querySelectorAll(".rating-row .chip").forEach(o=>o.classList.remove("on")),a.classList.add("on");return}if(i==="set-conscious"){const s=a.closest(".sheet")||a.closest("form")||document,n=s.querySelector('input[name="consciousPoints"]');n&&(n.value=a.dataset.conscious),s.querySelectorAll(".conscious-row .chip").forEach(o=>o.classList.remove("on")),a.classList.add("on");return}if(i==="set-goal-kind"){const s=a.closest(".sheet")||document,n=s.querySelector('input[name="kind"]');n&&(n.value=a.dataset.kind),s.querySelectorAll(".goal-kind-row .chip").forEach(d=>d.classList.remove("on")),a.classList.add("on");const o=a.dataset.kind,r=s.querySelector(".goal-target-habit"),l=s.querySelector(".goal-target-task");r&&(r.style.display=o==="habit-streak"?"":"none"),l&&(l.style.display=o==="task-streak"?"":"none"),p&&(p.kind=o);return}if(i==="set-goal-tier"){const s=a.closest(".sheet")||document,n=s.querySelector('input[name="tier"]');n&&(n.value=a.dataset.tier),s.querySelectorAll(".goal-tier-row .chip").forEach(o=>o.classList.remove("on")),a.classList.add("on");return}if(i==="pin-mode"){const s=a.closest("form"),n=a.dataset.mode;s.querySelector('input[name="mode"]').value=n,s.querySelectorAll(".pin-modes .chip").forEach(r=>r.classList.remove("on")),a.classList.add("on");const o=(r,l)=>{const d=s.querySelector(r);d&&(d.style.display=l?"":"none")};o(".pin-until",n==="until"),o(".pin-weekdays",n==="weekly"),o(".pin-monthdays",n==="monthly"),o(".pin-yeardays",n==="yearly"),p&&p.pin&&(p.pin.mode=n);return}if(i==="toggle-weekday"){a.classList.toggle("on");return}if(i==="toggle-monthday"){a.classList.toggle("on");return}if(i==="pin-cal-nav"){if(!p)return;const s=a.dataset.target,n=Number(a.dataset.dir)||0;s==="except"?p._exceptCal=Dt(p._exceptCal||F(m),n):p._customCal=Dt(p._customCal||F(m),n),w();return}if(i==="toggle-pin-date"){if(!p||!p.pin)return;const s=a.dataset.target,n=a.dataset.date,o=s==="custom"?"customDates":"exceptDates",r=Array.isArray(p.pin[o])?[...p.pin[o]]:[],l=r.indexOf(n);l>=0?r.splice(l,1):(r.push(n),r.length>365&&r.shift()),p.pin[o]=r.sort(),w();return}if(i==="add-year-day"){if(!p||!p.pin)return;const s=a.closest("form")||document,n=s.querySelector("#year-month-select"),o=s.querySelector("#year-day-select");n&&(p._yearMonth=n.value);const r=`${n?n.value:"01"}-${o?o.value:"01"}`,l=Array.isArray(p.pin.yearDays)?[...p.pin.yearDays]:[];l.includes(r)||l.push(r),p.pin.yearDays=l.sort(),w();return}if(i==="remove-year-day"){if(!p||!p.pin)return;const s=a.dataset.date;p.pin.yearDays=(p.pin.yearDays||[]).filter(n=>n!==s),w();return}if(i==="clear-pin"){const s=a.closest("form"),n=s.dataset.kind,o=s.dataset.id;if(n==="habit"&&c.unpinHabit(o),n==="task"){const r=c.findTask(m,o);r!=null&&r.sourcePinId&&c.unpinTaskTemplate(r.sourcePinId)}n==="template"&&c.unpinTaskTemplate(o),y=null,p=null,g("Unpinned"),w();return}w()});document.addEventListener("submit",t=>{const e=t.target.closest("[data-form]");if(!e)return;t.preventDefault();const a=e.dataset.form;if(a==="habit"||a==="task"||a==="edit-habit"||a==="edit-task"){const i=new FormData(e),s=String(i.get("title")||""),n=Number(i.get("points")||0),o=String(i.get("category")||"mentally"),r=String(i.get("description")||""),l=String(i.get("tags")||""),d=Math.max(0,Math.min(5,Number(i.get("rating")||0))),v=Math.max(0,Math.min(100,Number(i.get("consciousPoints")||0)));if(!s.trim())return;if(a==="habit")c.addHabit(s,n,{description:r,category:o,consciousPoints:v,tags:l}),g("Habit added");else if(a==="task"){if(H())return;c.addTask(m,s,n,{description:r,category:o,rating:d,tags:l}),g("Task added")}else if(a==="edit-habit")c.updateHabit(e.dataset.id,{name:s,description:r,points:n,category:o,consciousPoints:v,tags:l}),g("Habit updated");else{if(H())return;c.updateTask(m,e.dataset.id,{title:s,points:n,description:r,category:o,rating:d,tags:l}),g("Task updated")}y=null,p=null,w();return}if(a==="pin"){const i=Ee(e);if(!i)return;const s=e.dataset.kind,n=e.dataset.id;s==="habit"&&c.pinHabit(n,i),s==="task"&&c.pinTask(m,n,i),s==="template"&&c.updatePinnedTask(n,i),y=null,p=null,g("Pin saved"),w();return}if(a==="forward"){const i=new FormData(e),s=String(i.get("targetDate")||""),n=e.dataset.kind,o=e.dataset.id,r=p&&p.from||m;if(!/^\d{4}-\d{2}-\d{2}$/.test(s)){g("Pick a valid date");return}const l=n==="habit"?c.forwardHabit(r,o,s):c.forwardTask(r,o,s);if(!l.ok){g(l.reason||"Could not forward");return}y=null,p=null,m=s,A="today",g(`Forwarded to ${s}`),w();return}if(a==="goal"||a==="edit-goal"){const i=new FormData(e),s=String(i.get("title")||"").trim(),n=String(i.get("kind")||"habit-streak"),o=String(i.get("tier")||"bronze"),r=String(i.get("rewardTitle")||"").trim(),l=Math.max(1,Math.min(365,Number(i.get("targetDays")||7)));if(!s||!r){g("Goal title and reward title are required");return}let d="";if(n==="habit-streak"&&(d=String(i.get("habitTarget")||"")),n==="task-streak"&&(d=String(i.get("taskTarget")||"")),(n==="habit-streak"||n==="task-streak")&&!d){g(n==="habit-streak"?"Pick a habit":"Pin a task first, then pick it");return}a==="goal"?(c.addGoal({title:s,kind:n,targetId:d,targetDays:l,tier:o,rewardTitle:r}),g("Goal added")):(c.updateGoal(e.dataset.id,{title:s,kind:n,targetId:d,targetDays:l,tier:o,rewardTitle:r}),g("Goal updated"));const v=c.checkGoals(m);v.length&&g(`🏅 Reward earned: ${v[0].rewardTitle}!`),y=null,p=null,w()}});document.addEventListener("change",t=>{const e=t.target.closest(".sort-select");if(e){const a=e.dataset.sortKind;a==="habit"&&c.setHabitSort(e.value),a==="task"&&c.setTaskSort(e.value),w()}t.target&&t.target.id==="show-conscious"&&(c.setShowConscious(t.target.checked),g(t.target.checked?"Conscious points on":"Conscious points hidden"),w()),t.target&&t.target.id==="year-month-select"&&p&&(p._yearMonth=t.target.value)});"serviceWorker"in navigator&&(window.addEventListener("load",()=>{navigator.serviceWorker.register("./sw.js").catch(()=>{})}),navigator.serviceWorker.addEventListener("controllerchange",()=>{window.location.reload()}));function Fe(){const t=document.getElementById("boot-error");t&&(t.style.display="none")}Fe();w();ce().then(()=>{A==="settings"&&w()});
