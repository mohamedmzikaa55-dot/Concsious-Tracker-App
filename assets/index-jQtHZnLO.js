(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function s(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(i){if(i.ep)return;i.ep=!0;const n=s(i);fetch(i.href,n)}})();const yt="daily-report-v2",Q=[{id:"mentally",label:"Mentally"},{id:"psychology",label:"Psychology"},{id:"physically",label:"Physically"},{id:"spiritually",label:"Spiritually"},{id:"socially",label:"Socially"}],Mt=Q.map(t=>t.id),bt=[{id:"h1",name:"Wake up early",points:10,icon:"sunrise",category:"physically",pin:{mode:"forever"}},{id:"h2",name:"Drink water",points:5,icon:"drop",category:"physically",pin:{mode:"forever"}},{id:"h3",name:"Exercise",points:15,icon:"bolt",category:"physically",pin:{mode:"forever"}},{id:"h4",name:"Read 20 minutes",points:10,icon:"book",category:"mentally",pin:{mode:"forever"}},{id:"h5",name:"No junk food",points:10,icon:"leaf",category:"physically",pin:{mode:"forever"}}],ft={lockTime:"21:00",autoLock:!0,showConscious:!0,habitSort:"default",taskSort:"default"},q=[{id:"iron",label:"Iron",medal:"🥉",rank:1},{id:"bronze",label:"Bronze",medal:"🥉",rank:2},{id:"silver",label:"Silver",medal:"🥈",rank:3},{id:"gold",label:"Gold",medal:"🥇",rank:4}],vt=[{id:"habit-streak",label:"Habit streak"},{id:"task-streak",label:"Pinned task streak"},{id:"perfect-days",label:"Perfect days (100%)"}];function rt(t){var e;return((e=q.find(s=>s.id===t))==null?void 0:e.rank)||0}function tt(t){var e;return((e=q.find(s=>s.id===t))==null?void 0:e.medal)||"🏅"}function $t(t){var e;return((e=q.find(s=>s.id===t))==null?void 0:e.label)||t||"Badge"}function P(t){const e=Array.isArray(t)?t:String(t||"").split(","),s=[];return e.forEach(a=>{const i=String(a||"").trim().slice(0,20);i&&!s.some(n=>n.toLowerCase()===i.toLowerCase())&&s.push(i),s.length>=10}),s.slice(0,10)}function Z(t,e){const s=[...t];return e==="points"?s.sort((a,i)=>(Number(i.points)||0)-(Number(a.points)||0)):e==="category"?s.sort((a,i)=>_(T(a.category)).localeCompare(_(T(i.category)))):e==="tags"&&s.sort((a,i)=>(a.tags&&a.tags[0]||"~~~").localeCompare(i.tags&&i.tags[0]||"~~~")),s}const kt=[{value:1,label:"Mon"},{value:2,label:"Tue"},{value:3,label:"Wed"},{value:4,label:"Thu"},{value:5,label:"Fri"},{value:6,label:"Sat"},{value:0,label:"Sun"}];function M(t=new Date){const e=t.getFullYear(),s=String(t.getMonth()+1).padStart(2,"0"),a=String(t.getDate()).padStart(2,"0");return`${e}-${s}-${a}`}function wt(){return{habits:{},habitRatings:{},habitMissed:{},tasks:[],note:"",locked:!1,lockOverride:null,submittedAt:null,lockedHabits:null}}function T(t){return Mt.includes(t)?t:"mentally"}function _(t){var e;return((e=Q.find(s=>s.id===t))==null?void 0:e.label)||"Mentally"}function dt(t){const e=Math.max(0,Math.min(5,Number(t.rating)||0));return{...t,description:t.description||"",category:T(t.category),tags:P(t.tags),rating:e,done:!!t.done,missed:!!t.missed}}function H(t){const e=Number(t);return!Number.isFinite(e)||e<0?0:Math.min(100,Math.round(e))}function B(t){if(!t||!t.mode)return null;const e=(i,n,o)=>Array.isArray(i)?i.map(Number).filter(r=>Number.isFinite(r)&&r>=n&&r<=o):[],s=i=>Array.isArray(i)?i.filter(n=>/^\d{4}-\d{2}-\d{2}$/.test(String(n))).map(String).slice(0,365):[],a=i=>Array.isArray(i)?i.filter(n=>/^\d{2}-\d{2}$/.test(String(n))).map(String).slice(0,366):[];return{mode:["forever","until","weekly","monthly","yearly","custom"].includes(t.mode)?t.mode:"forever",until:t.until||"",weekdays:e(t.weekdays,0,6),monthDays:e(t.monthDays,1,31),yearDays:a(t.yearDays),customDates:s(t.customDates),exceptDates:s(t.exceptDates||t.exceptions)}}function Ht(t,e){const s=`${t} ${e}`.toLowerCase();return s.includes("read")||s.includes("study")||s.includes("learn")?"mentally":s.includes("meditat")||s.includes("pray")||s.includes("journal")?"spiritually":s.includes("mood")||s.includes("calm")||s.includes("therapy")?"psychology":s.includes("friend")||s.includes("family")||s.includes("social")||s.includes("call")||s.includes("visit")?"socially":"physically"}function et(t){const e=vt.some(s=>s.id===t.kind)?t.kind:"habit-streak";return{id:String(t.id||`g${Date.now()}`),title:String(t.title||"").trim().slice(0,60)||"My goal",kind:e,targetId:String(t.targetId||""),targetDays:Math.max(1,Math.min(365,Number(t.targetDays)||7)),tier:q.some(s=>s.id===t.tier)?t.tier:"bronze",rewardTitle:String(t.rewardTitle||"").trim().slice(0,60)||"Reward",createdAt:t.createdAt||new Date().toISOString()}}function Lt(t){const e=(Array.isArray(t.habits)&&t.habits.length?t.habits:bt).map(a=>({...a,description:String(a.description||"").slice(0,240),category:T(a.category||Ht(a.id,a.name)),consciousPoints:H(a.consciousPoints),tags:P(a.tags),pin:B(a.pin)})),s={};return Object.entries(t.days||{}).forEach(([a,i])=>{s[a]={...wt(),habits:i.habits||{},habitRatings:i.habitRatings||{},habitMissed:i.habitMissed||{},tasks:Array.isArray(i.tasks)?i.tasks.map(dt):[],note:i.note||"",locked:!!i.locked,lockOverride:i.lockOverride||(i.locked?"locked":null),submittedAt:i.submittedAt||null,lockedHabits:Array.isArray(i.lockedHabits)?i.lockedHabits:null}}),{habits:e,pinnedTasks:Array.isArray(t.pinnedTasks)?t.pinnedTasks.map(a=>({...dt(a),pin:B(a.pin)})):[],days:s,goals:Array.isArray(t.goals)?t.goals.map(et):[],badges:Array.isArray(t.badges)?t.badges.filter(a=>a&&a.id&&a.goalId).map(a=>({id:String(a.id),goalId:String(a.goalId),title:String(a.title||""),tier:a.tier||"bronze",rewardTitle:String(a.rewardTitle||""),earnedAt:a.earnedAt||new Date().toISOString()})):[],settings:{lockTime:t.settings&&t.settings.lockTime||ft.lockTime,autoLock:!t.settings||t.settings.autoLock!==!1,showConscious:!t.settings||t.settings.showConscious!==!1,habitSort:["default","points","category","tags"].includes(t.settings&&t.settings.habitSort)?t.settings.habitSort:"default",taskSort:["default","points","category","tags"].includes(t.settings&&t.settings.taskSort)?t.settings.taskSort:"default"}}}function ct(){return{habits:bt.map(t=>({...t,description:"",tags:[]})),pinnedTasks:[],days:{},goals:[],badges:[],settings:{...ft}}}function Et(){try{const t=localStorage.getItem(yt)||localStorage.getItem("daily-report-v1");return t?Lt(JSON.parse(t)):ct()}catch{return ct()}}let u=Et();function $(){try{localStorage.setItem(yt,JSON.stringify(u))}catch{}}function Ct(t){return new Date(`${t}T00:00:00`).getDay()}function G(t){const e=new Date(`${t}T00:00:00`);return e.setDate(e.getDate()-1),M(e)}function z(t,e){if(!t)return!0;if(Array.isArray(t.exceptDates)&&t.exceptDates.includes(e)||Array.isArray(t.exceptions)&&t.exceptions.includes(e))return!1;if(t.mode==="forever")return!0;if(t.mode==="until")return!!t.until&&e<=t.until;if(t.mode==="weekly")return Array.isArray(t.weekdays)&&t.weekdays.includes(Ct(e));if(t.mode==="monthly"){const s=Array.isArray(t.monthDays)?t.monthDays.map(Number):[];return s.length?s.includes(Number(String(e).slice(8,10))):!0}if(t.mode==="yearly"){const s=Array.isArray(t.yearDays)?t.yearDays:[];return s.length?s.includes(String(e).slice(5,10)):!0}return t.mode==="custom"?(Array.isArray(t.customDates)?t.customDates:[]).includes(e):!0}function W(t){if(!t)return"Not pinned";const e=(t.exceptDates||t.exceptions||[]).length,s=e?` · ⛔ ${e} exception${e>1?"s":""}`:"";if(t.mode==="forever")return`Pinned forever${s}`;if(t.mode==="until")return`${t.until?`Pinned until ${t.until}`:"Pinned until a date"}${s}`;if(t.mode==="weekly"){const a=Array.isArray(t.weekdays)?t.weekdays:[],i=kt.filter(n=>a.includes(n.value)).map(n=>n.label);return`${i.length?`Weekly: ${i.join(", ")}`:"Weekly (no days)"}${s}`}if(t.mode==="monthly"){const a=Array.isArray(t.monthDays)?t.monthDays:[];return`${a.length?`Monthly: day${a.length>1?"s":""} ${[...a].sort((i,n)=>i-n).join(", ")}`:"Monthly"}${s}`}if(t.mode==="yearly"){const a=Array.isArray(t.yearDays)?t.yearDays:[];return`${a.length?`Yearly: ${[...a].sort().join(", ")}`:"Yearly"}${s}`}if(t.mode==="custom"){const a=Array.isArray(t.customDates)?t.customDates:[];return`${a.length?`Custom: ${a.length} date${a.length>1?"s":""}`:"Custom dates"}${s}`}return"Pinned"}function lt(t){const[e,s]=(u.settings.lockTime||"21:00").split(":").map(Number),a=new Date(`${t}T00:00:00`);return a.setHours(e||0,s||0,0,0),a}function St(t){const e=u.days[t];return e?e.lockOverride==="locked"||e.locked===!0:!1}function st(t,e){const s=u.days[t];return s?s.habitRatings&&s.habitRatings[e]!=null?Number(s.habitRatings[e])||0:s.habits&&s.habits[e]?5:0:0}function at(t){const e=A(t),s=u.habits.filter(a=>z(a.pin,t));e.lockedHabits=s.map(a=>({id:a.id,name:a.name,description:String(a.description||"").slice(0,240),points:Number(a.points)||0,icon:a.icon||"star",category:T(a.category),consciousPoints:H(a.consciousPoints),tags:P(a.tags),pin:B(a.pin)})),e.habitMissed={},s.forEach(a=>{st(t,a.id)<=0?(e.habitMissed[a.id]=!0,e.habitRatings[a.id]=0,e.habits[a.id]=!1):e.habitMissed&&delete e.habitMissed[a.id]}),e.tasks.forEach(a=>{a.missed=!a.done})}function ut(t){const e=A(t);return e.lockOverride==="unlocked"?!1:e.lockOverride==="locked"||e.locked?((!e.lockedHabits||e.habitMissed==null)&&at(t),!0):u.settings.autoLock&&Date.now()>=lt(t).getTime()?(e.locked=!0,e.lockOverride="locked",e.submittedAt=e.submittedAt||lt(t).toISOString(),at(t),$(),!0):!1}function A(t){return u.days[t]||(u.days[t]=wt()),u.days[t]}function Rt(t){const e=A(t);if(St(t))return e;let s=!1;return u.pinnedTasks.forEach(a=>{z(a.pin,t)&&(e.tasks.some(i=>i.sourcePinId===a.id)||(e.tasks.push({id:`ptask-${a.id}-${t}`,title:a.title,points:a.points,description:a.description||"",category:T(a.category),tags:P(a.tags),rating:0,done:!1,missed:!1,sourcePinId:a.id}),s=!0))}),s&&$(),e}function j(t){return!c.isLocked(t)}const c={todayKey:M,getSettings(){return u.settings},setLockTime(t){u.settings.lockTime=t||"21:00",$()},setAutoLock(t){u.settings.autoLock=!!t,$()},setShowConscious(t){u.settings.showConscious=!!t,$()},consciousEnabled(){return u.settings.showConscious!==!1},setHabitSort(t){u.settings.habitSort=["default","points","category","tags"].includes(t)?t:"default",$()},setTaskSort(t){u.settings.taskSort=["default","points","category","tags"].includes(t)?t:"default",$()},getHabits(t,e){if(t&&St(t)){const n=u.days[t];if(n&&Array.isArray(n.lockedHabits)){const o=e||u.settings.habitSort||"default",r=[...n.lockedHabits];return o==="default"?r:Z(r,o)}}const a=u.habits.filter(n=>t?z(n.pin,t):!0).sort((n,o)=>+!!o.pin-+!!n.pin),i=e||u.settings.habitSort||"default";return i==="default"?a:Z(a,i)},getTasks(t,e){const s=this.getDay(t),a=e||u.settings.taskSort||"default";return a==="default"?s.tasks:Z(s.tasks,a)},getAllHabits(){return u.habits},getPinnedTasks(){return u.pinnedTasks},getDay(t){return ut(t),Rt(t)},isLocked(t){return ut(t)},submitDay(t){const e=A(t);e.locked=!0,e.lockOverride="locked",e.submittedAt=new Date().toISOString(),at(t),$(),this.checkGoals(t)},unlockDay(t){const e=A(t);e.locked=!1,e.lockOverride="unlocked",e.habitMissed={},e.lockedHabits=null,e.tasks.forEach(s=>{s.missed=!1}),$()},isHabitMissed(t,e){const s=u.days[t];return!s||!(s.locked||s.lockOverride==="locked")?!1:s.habitMissed&&s.habitMissed[e]?!0:st(t,e)<=0},isTaskMissed(t,e){const s=u.days[t];if(!s)return!1;const a=(s.tasks||[]).find(i=>i.id===e);return a?a.missed===!0?!0:a.missed===!1?!1:!!(s.locked||s.lockOverride==="locked")&&!a.done:!1},missedCounts(t){const e=this.getDay(t),s=this.getHabits(t),a=!!(e.locked||e.lockOverride==="locked");return{habits:s.filter(i=>e.habitMissed&&e.habitMissed[i.id]?!0:a&&st(t,i.id)<=0).length,tasks:e.tasks.filter(i=>i.done?!1:i.missed===!0?!0:i.missed===!1?!1:a).length}},lockDay(t){this.submitDay(t)},lockedReports(){return Object.keys(u.days).sort().reverse().filter(t=>this.isLocked(t)).map(t=>({date:t,submittedAt:u.days[t].submittedAt,...this.scoreFor(t)}))},habitRating(t,e){const s=u.days[t];return s?s.habitRatings&&s.habitRatings[e]!=null?Number(s.habitRatings[e])||0:s.habits&&s.habits[e]?5:0:0},setHabitRating(t,e,s){if(!j(t))return;const a=A(t),i=Math.max(0,Math.min(5,Number(s)||0));a.habitRatings[e]=i,a.habits[e]=i>0,$(),this.checkGoals(t)},toggleHabit(t,e){if(!j(t))return;const s=this.habitRating(t,e)>0?0:5;this.setHabitRating(t,e,s)},addTask(t,e,s,a={}){if(!j(t))return;A(t).tasks.push({id:`t${Date.now()}`,title:e.trim(),points:Number(s)||5,description:String(a.description||"").trim(),category:T(a.category),tags:P(a.tags),rating:Math.max(0,Math.min(5,Number(a.rating)||0)),done:!1,missed:!1}),$(),this.checkGoals(t)},setTaskRating(t,e,s){if(!j(t))return;const i=A(t).tasks.find(o=>o.id===e);if(!i)return;const n=Math.max(0,Math.min(5,Number(s)||0));i.rating=n,$()},toggleTask(t,e){if(!j(t))return;const a=A(t).tasks.find(i=>i.id===e);a&&(a.done=!a.done,$(),this.checkGoals(t))},removeTask(t,e){if(!j(t))return;const s=A(t);s.tasks=s.tasks.filter(a=>a.id!==e),$()},setNote(t,e){j(t)&&(A(t).note=e,$())},addHabit(t,e,s={}){u.habits.push({id:`h${Date.now()}`,name:t.trim(),description:String(s.description||"").trim().slice(0,240),points:Number(e)||10,icon:"star",category:T(s.category||"physically"),consciousPoints:H(s.consciousPoints),tags:P(s.tags),pin:{mode:"forever",until:"",weekdays:[]}}),$()},updateHabit(t,e){const s=u.habits.find(a=>a.id===t);s&&(e.name!=null&&(s.name=String(e.name).trim()||s.name),e.description!=null&&(s.description=String(e.description).trim().slice(0,240)),e.points!=null&&(s.points=Number(e.points)||s.points),e.category!=null&&(s.category=T(e.category)),e.consciousPoints!=null&&(s.consciousPoints=H(e.consciousPoints)),e.tags!=null&&(s.tags=P(e.tags)),$())},updateTask(t,e,s){if(!j(t))return;const i=A(t).tasks.find(n=>n.id===e);if(i){if(s.title!=null&&(i.title=String(s.title).trim()||i.title),s.points!=null&&(i.points=Number(s.points)||i.points),s.description!=null&&(i.description=String(s.description).trim()),s.category!=null&&(i.category=T(s.category)),s.tags!=null&&(i.tags=P(s.tags)),s.rating!=null&&(i.rating=Math.max(0,Math.min(5,Number(s.rating)||0))),i.sourcePinId){const n=u.pinnedTasks.find(o=>o.id===i.sourcePinId);n&&(n.title=i.title,n.points=i.points,n.description=i.description,n.category=i.category,s.tags!=null&&(n.tags=P(s.tags)))}$()}},habitStreak(t,e){const s=u.habits.find(o=>o.id===t);if(!s)return 0;let a=e,i=0;this.habitRating(a,t)===0&&(a=G(a));let n=0;for(;i<400;){if(i+=1,!z(s.pin,a)){a=G(a);continue}if(this.habitRating(a,t)>0){n+=1,a=G(a);continue}break}return n},categoryBreakdown(t){const e=this.getDay(t),s=this.getHabits(t);return Q.map(a=>{const i=s.filter(g=>T(g.category)===a.id),n=e.tasks.filter(g=>T(g.category)===a.id),o=i.reduce((g,v)=>{const X=this.habitRating(t,v.id);return g+Math.round(v.points*X/5)},0),r=u.settings.showConscious!==!1,l=r?i.reduce((g,v)=>g+(this.habitRating(t,v.id)>0?H(v.consciousPoints):0),0):0,d=i.reduce((g,v)=>g+v.points,0),b=r?i.reduce((g,v)=>g+H(v.consciousPoints),0):0,D=n.reduce((g,v)=>g+(v.done?v.points:0),0),h=n.reduce((g,v)=>g+v.points,0),w=i.map(g=>this.habitRating(t,g.id)),E=w.length?Math.round(w.reduce((g,v)=>g+v,0)/w.length*10)/10:0;return{...a,habits:i,tasks:n,earned:o+l+D,max:d+b+h,habitAvg:E,consciousEarned:l,consciousMax:b,completed:i.filter(g=>this.habitRating(t,g.id)>0).length+n.filter(g=>g.done).length,total:i.length+n.length}})},removeHabit(t){u.habits=u.habits.filter(e=>e.id!==t),$()},pinHabit(t,e){const s=u.habits.find(a=>a.id===t);s&&(s.pin=B(e),$())},unpinHabit(t){const e=u.habits.find(s=>s.id===t);e&&(e.pin=null,$())},pinTask(t,e,s){const i=A(t).tasks.find(o=>o.id===e);if(!i)return;if(i.sourcePinId){const o=u.pinnedTasks.find(r=>r.id===i.sourcePinId);if(o){o.pin=B(s),$();return}}const n=`p${Date.now()}`;u.pinnedTasks.push({id:n,title:i.title,points:i.points,description:i.description||"",category:T(i.category),tags:P(i.tags),pin:B(s)}),i.sourcePinId=n,$()},unpinTaskTemplate(t){u.pinnedTasks=u.pinnedTasks.filter(e=>e.id!==t),$()},updatePinnedTask(t,e){const s=u.pinnedTasks.find(a=>a.id===t);s&&(s.pin=B(e),$())},findHabit(t){return u.habits.find(e=>e.id===t)||null},findTask(t,e){return A(t).tasks.find(s=>s.id===e)||null},findPinnedTask(t){return u.pinnedTasks.find(e=>e.id===t)||null},getGoals(){return u.goals},getBadges(){return[...u.badges].sort((t,e)=>{const s=rt(e.tier)-rt(t.tier);return s!==0?s:String(e.earnedAt).localeCompare(String(t.earnedAt))})},topBadges(t=3){return this.getBadges().slice(0,t)},addGoal(t={}){const e=et({...t,id:`g${Date.now()}`});return u.goals.push(e),$(),this.checkGoals(M()),e},updateGoal(t,e={}){const s=u.goals.find(i=>i.id===t);if(!s)return;const a=et({...s,...e,id:t});Object.assign(s,a),$(),this.checkGoals(M())},removeGoal(t){u.goals=u.goals.filter(e=>e.id!==t),$()},removeBadge(t){u.badges=u.badges.filter(e=>e.id!==t),$()},perfectDaysCount(){return Object.keys(u.days).filter(t=>{const e=this.scoreFor(t);return e.max>0&&e.percent===100}).length},taskStreak(t,e){let s=e,a=0;(o=>{const r=u.days[o];return!r||!Array.isArray(r.tasks)?!1:r.tasks.some(l=>l.sourcePinId===t&&l.done)})(s)||(s=G(s));let n=0;for(;a<400;){a+=1;const o=u.days[s];if(!o||!Array.isArray(o.tasks))break;if(o.tasks.some(r=>r.sourcePinId===t&&r.done)){n+=1,s=G(s);continue}break}return n},goalProgress(t,e){const s=e||M();if(t.kind==="habit-streak"){const i=this.habitStreak(t.targetId,s);return{current:i,target:t.targetDays,done:i>=t.targetDays}}if(t.kind==="task-streak"){const i=this.taskStreak(t.targetId,s);return{current:i,target:t.targetDays,done:i>=t.targetDays}}const a=this.perfectDaysCount();return{current:a,target:t.targetDays,done:a>=t.targetDays}},checkGoals(t){const e=t||M();let s=[];return u.goals.forEach(a=>{if(u.badges.some(n=>n.goalId===a.id))return;if(this.goalProgress(a,e).done){const n={id:`b${Date.now()}-${a.id}`,goalId:a.id,title:a.title,tier:a.tier,rewardTitle:a.rewardTitle,earnedAt:new Date().toISOString()};u.badges.push(n),s.push(n)}}),s.length&&$(),s},scoreFor(t){const e=this.getDay(t),s=this.getHabits(t),a=this.isLocked(t),i=u.settings.showConscious!==!1,n=s.reduce((g,v)=>{const X=this.habitRating(t,v.id);return g+Math.round(v.points*X/5)},0),o=i?s.reduce((g,v)=>g+(this.habitRating(t,v.id)>0?H(v.consciousPoints):0),0):0,r=e.tasks.reduce((g,v)=>g+(v.done?v.points:0),0),l=s.reduce((g,v)=>g+v.points,0),d=i?s.reduce((g,v)=>g+H(v.consciousPoints),0):0,b=e.tasks.reduce((g,v)=>g+v.points,0),D=n+o+r,h=l+d+b,w=s.filter(g=>e.habitMissed&&e.habitMissed[g.id]?!0:a&&this.habitRating(t,g.id)<=0).length,E=e.tasks.filter(g=>g.done?!1:g.missed===!0?!0:g.missed===!1?!1:a).length;return{earned:D,max:h,habitScore:n,consciousScore:o,maxConscious:d,taskScore:r,completedHabits:s.filter(g=>this.habitRating(t,g.id)>0).length,habitAvg:s.length?Math.round(s.reduce((g,v)=>g+this.habitRating(t,v.id),0)/s.length*10)/10:0,totalHabits:s.length,completedTasks:e.tasks.filter(g=>g.done).length,totalTasks:e.tasks.length,missedHabits:w,missedTasks:E,percent:h?Math.round(D/h*100):0,locked:a,submittedAt:e.submittedAt}},monthKeys(t){const e=String(t).slice(0,7);return Object.keys(u.days).filter(s=>s.startsWith(e)).sort()},rangeKeys(t,e){const s=[],a=new Date(`${t}T00:00:00`),i=new Date(`${e}T00:00:00`);let n=0;for(;a<=i&&n<732;)n+=1,s.push(M(a)),a.setDate(a.getDate()+1);return s},resolveRange(t,e){if(t==="day")return[e,e];if(t==="week"){const a=new Date(`${e}T00:00:00`),i=a.getDay(),n=i===0?-6:1-i,o=new Date(a);o.setDate(a.getDate()+n);const r=new Date(o);return r.setDate(o.getDate()+6),[M(o),M(r)]}if(t==="month"){const[a,i]=e.split("-").map(Number),n=`${a}-${String(i).padStart(2,"0")}-01`,o=new Date(a,i,0).getDate(),r=`${a}-${String(i).padStart(2,"0")}-${String(o).padStart(2,"0")}`;return[n,r]}if(t==="year"){const a=e.slice(0,4);return[`${a}-01-01`,`${a}-12-31`]}const s=Object.keys(u.days).sort();return s.length?[s[0],s[s.length-1]>e?s[s.length-1]:e]:[e,e]},exportRows(t,e){return this.rangeKeys(t,e).map(s=>{const a=this.getDay(s),i=this.getHabits(s),n=this.scoreFor(s),o=this.isLocked(s),r=(d,b)=>b>0?"done":o?"missed":"pending",l=d=>d.done?"done":o?"missed":"pending";return{date:s,earned:n.earned,max:n.max,percent:n.percent,habitScore:n.habitScore,consciousScore:n.consciousScore||0,taskScore:n.taskScore,locked:o,missedHabits:n.missedHabits||0,missedTasks:n.missedTasks||0,note:a.note||"",habits:i.map(d=>{const b=this.habitRating(s,d.id);return{name:d.name,description:String(d.description||""),category:_(T(d.category)),tags:P(d.tags),points:d.points,consciousPoints:this.consciousEnabled()?H(d.consciousPoints):0,rating:b,earned:Math.round(d.points*b/5)+(b>0&&this.consciousEnabled()?H(d.consciousPoints):0),status:r(d.id,b)}}),tasks:a.tasks.map(d=>({title:d.title,category:_(T(d.category)),tags:P(d.tags),points:d.points,rating:Math.max(0,Math.min(5,Number(d.rating)||0)),done:!!d.done,earned:d.done?d.points:0,status:l(d),description:d.description||""}))}})},history(t=14){return Object.keys(u.days).sort().reverse().slice(0,t).map(s=>({date:s,...this.scoreFor(s),note:u.days[s].note,locked:this.isLocked(s),submittedAt:u.days[s].submittedAt}))},week(t){const e=new Date(t),s=e.getDay(),a=s===0?-6:1-s;return e.setDate(e.getDate()+a),e.setHours(0,0,0,0),Array.from({length:7},(i,n)=>{const o=new Date(e);o.setDate(e.getDate()+n);const r=M(o);return{date:r,label:o.toLocaleDateString(void 0,{weekday:"short"}),locked:this.isLocked(r),...this.scoreFor(r)}})}};function Dt(t){return t>=90?"Excellent":t>=75?"Great day":t>=50?"Keep going":t>0?"Started":"No score yet"}function R(t){return new Date(`${t}T00:00:00`).toLocaleDateString(void 0,{weekday:"long",month:"short",day:"numeric"})}function xt(t){return t?new Date(t).toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"}):""}function U(t){return t>=5?"Excellent":t>=4?"Great":t>=3?"Good":t>=2?"Fair":t>=1?"Low":"Not rated"}const K=document.getElementById("app");let m=c.todayKey(),x="today",f=null,p=null,O=!1,V=!1;const jt=[["default","Default"],["points","Points"],["category","Category"],["tags","Tags"]];function pt(t){const e=new Date(`${m}T00:00:00`);e.setDate(e.getDate()+t),m=c.todayKey(e)}function C(t){return{home:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1z"/></svg>',week:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>',history:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 8v5l3 2"/><circle cx="12" cy="12" r="9"/></svg>',settings:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H8a1.7 1.7 0 0 0 1-1.5V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V8c.3.7.9 1.2 1.6 1.3H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1.7z"/></svg>',pin:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 4h6l-1 7 3 3v2H7v-2l3-3z" fill="currentColor" stroke="none"/><path d="M12 16v5"/></svg>',habit:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7h16M4 12h10M4 17h13"/></svg>'}[t]}function Tt(t,e,s){return`
    <div class="stars" data-habit="${t}">
      ${[1,2,3,4,5].map(a=>`
            <button type="button" class="star ${a<=e?"on":""}" data-action="rate-habit" data-id="${t}" data-rating="${a}" ${s?"disabled":""} aria-label="${a} star">★</button>
          `).join("")}
    </div>
  `}function At(t,e,s){return`
    <div class="stars stars-small" data-task="${t}">
      ${[1,2,3,4,5].map(a=>`
            <button type="button" class="star small ${a<=e?"on":""}" data-action="rate-task" data-id="${t}" data-rating="${a}" ${s?"disabled":""} aria-label="${a} star">★</button>
          `).join("")}
    </div>
  `}function Pt(t){const e=Number(t)||0;return e?`<span class="conscious-badge">🧠 +${e}</span>`:'<span class="item-meta">No conscious pts</span>'}function Y(t){return`<span class="cat-badge cat-${t}">${_(t)}</span>`}function I(t){const e=Array.isArray(t)?t.filter(Boolean):[];return e.length?`<div class="tag-row">${e.map(s=>`<span class="tag-chip">#${y(s)}</span>`).join("")}</div>`:""}function mt(t,e){return`
    <select class="sort-select" data-sort-kind="${t}" aria-label="Sort ${t}">
      ${jt.map(([s,a])=>`<option value="${s}" ${e===s?"selected":""}>${a}</option>`).join("")}
    </select>
  `}function Ot(t){const e=c.getBadges(),s=c.topBadges(3),a=t.max>0&&t.percent===100,i=V?e:s;return`
    <section class="section rewards-section">
      <div class="section-head">
        <h2>Rewards</h2>
        ${e.length>3?`<button class="ghost-btn compact" data-action="toggle-badges">${V?"Show less":`More (${e.length}) ›`}</button>`:""}
      </div>
      ${a?`
        <div class="trophy-card">
          <div class="trophy-cup">🏆</div>
          <div>
            <div class="item-title">Gold Cup — Perfect day!</div>
            <div class="item-meta">100% of points on ${R(m)}</div>
          </div>
        </div>
      `:""}
      ${e.length?`
        <div class="rewards-grid">
          ${i.map(n=>`
            <article class="reward-card tier-${n.tier}">
              <div class="reward-medal">${tt(n.tier)}</div>
              <div>
                <div class="item-title">${y(n.rewardTitle||n.title)}</div>
                <div class="item-meta">${y(n.title)} · ${$t(n.tier)} · ${R((n.earnedAt||"").slice(0,10))}</div>
              </div>
            </article>
          `).join("")}
        </div>
      `:'<div class="empty">No rewards yet. Set a goal in Settings → Goals &amp; Rewards.</div>'}
    </section>
  `}function J(t){return`<span class="streak-badge">${t} day streak</span>`}function it(){return`<button class="ghost-btn compact ${O?"on":""}" data-action="toggle-edit">${O?"Done":"Edit Mode"}</button>`}function Bt(t){return t?'<span class="lock-badge">Locked</span>':'<span class="open-badge">Open</span>'}function It(){c.checkGoals(m);const t=c.getDay(m),e=c.getSettings(),s=e.showConscious!==!1,a=c.getHabits(m),i=c.getTasks(m),n=c.scoreFor(m),o=Dt(n.percent),r=m===c.todayKey(),l=c.isLocked(m);return`
    <div class="topbar">
      <div>
        <p class="kicker">${r?"Today":"Daily report"}</p>
        <h1>${R(m)}</h1>
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
          ${Bt(l)}
          <div class="grade-pill">${o}</div>
        </div>
      </div>
      <div class="progress-track"><div class="progress-fill" style="width:${n.percent}%"></div></div>
      <div class="stats-grid ${s?"stats-4":"stats-3"}">
        <div class="stat"><span class="muted">Habits</span><b>${n.completedHabits}/${n.totalHabits}</b></div>
        <div class="stat"><span class="muted">Tasks</span><b>${n.completedTasks}/${n.totalTasks}</b></div>
        ${s?`<div class="stat"><span class="muted">Conscious</span><b>+${n.consciousScore||0}</b></div>`:""}
        <div class="stat"><span class="muted">Score</span><b>${n.percent}%</b></div>
      </div>
      <p class="lock-hint">
        ${l?`Submitted${t.submittedAt?` at ${xt(t.submittedAt)}`:""}.${(n.missedHabits||0)+(n.missedTasks||0)>0?` ${(n.missedHabits||0)+(n.missedTasks||0)} missed (${n.missedHabits||0} habits, ${n.missedTasks||0} tasks) — unchecked items count as missed.`:" Nothing missed — all done."} Unlock in Settings to edit.`:`Auto-locks at ${e.lockTime}. Submit when the day is done. Unchecked items will count as missed once locked.`}
      </p>
      ${l?'<button class="ghost-btn full" data-action="goto-settings">Unlock in Settings</button>':'<button class="primary-btn full" data-action="submit-day">Submit and lock report</button>'}
      <div class="export-row">
        <span class="muted">Export:</span>
        <button class="ghost-btn compact" data-action="open-export">Excel / JSON / PDF</button>
      </div>
    </section>

    ${Ot(n)}

    <section class="section">
      <div class="section-head">
        <h2>Habits</h2>
        <div class="head-actions">
          ${mt("habit",e.habitSort||"default")}
          ${it()}
          <span class="points">+${n.habitScore}${s&&n.consciousScore?` +${n.consciousScore}🧠`:""} pts</span>
        </div>
      </div>
      <div class="list">
        ${a.length?a.map(d=>{const b=c.habitRating(m,d.id),D=b>0,h=!D&&l,w=c.habitStreak(d.id,m),E=s&&Number(d.consciousPoints)||0;return`
                    <article class="item-card ${D?"done":""} ${h?"missed":""} ${l?"is-locked":""}">
                      <button class="check" data-action="toggle-habit" data-id="${d.id}" ${l?"disabled":""}>✓</button>
                      <div>
                        <div class="item-title">${y(d.name)} ${h?'<span class="missed-badge">Missed</span>':""}</div>
                        <div class="item-meta">${Y(d.category)} ${d.pin?W(d.pin):"Not pinned"} · ${b?`${b}/5 ${U(b)}`:l?"Missed":"Not rated"}</div>
                        ${d.description?`<p class="item-desc">${y(d.description)}</p>`:""}
                        ${s?`<div class="item-meta">${J(w)} ${Pt(E)}</div>`:`<div class="item-meta">${J(w)}</div>`}
                        ${I(d.tags)}
                        ${Tt(d.id,b,l)}
                      </div>
                      <div class="item-side">
                        <div class="points">+${d.points}${E?` +${E}🧠`:""}</div>
                        <div class="mini-actions">
                          ${O?`<button class="mini-btn on" data-action="open-edit-habit" data-id="${d.id}" ${l?"disabled":""}>Edit</button>`:""}
                          <button class="mini-btn ${d.pin?"on":""}" data-action="open-pin-habit" data-id="${d.id}" ${l?"disabled":""} title="Pin habit">${C("pin")}</button>
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
          ${mt("task",e.taskSort||"default")}
          ${it()}
          <span class="points">+${n.taskScore} pts</span>
        </div>
      </div>
      <div class="list">
        ${i.length?i.map(d=>{const b=!!d.sourcePinId,D=b?c.findPinnedTask(d.sourcePinId):null,h=Math.max(0,Math.min(5,Number(d.rating)||0)),w=!d.done&&l;return`
                    <article class="item-card ${d.done?"done":""} ${w?"missed":""} ${l?"is-locked":""}">
                      <button class="check" data-action="toggle-task" data-id="${d.id}" ${l?"disabled":""}>✓</button>
                      <div>
                        <div class="item-title">${y(d.title)} ${w?'<span class="missed-badge">Missed</span>':""}</div>
                        <div class="item-meta">${Y(d.category)} ${D?W(D.pin):"One-time task"} · ${d.done?"Done":l?"Missed":"Pending"} · ${h?`${h}/5 ${U(h)}`:"No rating"}</div>
                        ${d.description?`<p class="item-desc">${y(d.description)}</p>`:""}
                        ${I(d.tags)}
                        ${At(d.id,h,l)}
                      </div>
                      <div class="item-side">
                        <div class="points">+${d.points}</div>
                        <div class="mini-actions">
                          ${O?`<button class="mini-btn on" data-action="open-edit-task" data-id="${d.id}" ${l?"disabled":""}>Edit</button>`:""}
                          <button class="mini-btn ${b?"on":""}" data-action="open-pin-task" data-id="${d.id}" ${l?"disabled":""} title="Pin task">${C("pin")}</button>
                          <button class="mini-btn" data-action="remove-task" data-id="${d.id}" ${l?"disabled":""}>✕</button>
                        </div>
                      </div>
                    </article>
                  `}).join(""):'<div class="empty">No tasks yet. Tap + to add one.</div>'}
      </div>
    </section>

    <section class="section">
      <div class="section-head"><h2>Day note</h2></div>
      <textarea id="day-note" placeholder="How did today go?" ${l?"disabled":""}>${y(t.note)}</textarea>
    </section>
  `}function Gt(){const t=c.week(new Date(`${m}T00:00:00`)),e=t.reduce((a,i)=>a+i.earned,0),s=Math.round(e/7);return`
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
        <div class="grade-pill">Avg ${s} pts</div>
      </div>
      <div class="week-days">
        ${t.map(a=>`
              <button class="day-cell ${a.date===m?"active":""} ${a.earned>0?"done":""}" data-action="pick-date" data-date="${a.date}">
                <span>${a.label.slice(0,2)}</span>
                <b>${a.earned}</b>
                ${a.locked?'<i class="dot-lock"></i>':""}
              </button>
            `).join("")}
      </div>
    </section>
    <section class="section week-grid">
      ${t.map(a=>`
            <article class="week-card">
              <div class="section-head">
                <div>
                  <div class="item-title">${R(a.date)}</div>
                  <div class="item-meta">${a.locked?"Locked":"Open"} · ${a.completedHabits} habits · ${a.completedTasks} tasks${a.locked&&(a.missedHabits||0)+(a.missedTasks||0)>0?` · ❌ ${(a.missedHabits||0)+(a.missedTasks||0)} missed`:""}</div>
                </div>
                <div class="points">${a.earned} pts</div>
              </div>
              <div class="bar"><span style="width:${a.percent}%"></span></div>
            </article>
          `).join("")}
    </section>
  `}function Ft(){const t=c.history(21);return`
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
                        <div class="item-title">${R(e.date)}</div>
                        <div class="item-meta">${e.locked?"Locked":"Open"} · ${Dt(e.percent)} · ${e.percent}%${e.locked&&(e.missedHabits||0)+(e.missedTasks||0)>0?` · ❌ ${(e.missedHabits||0)+(e.missedTasks||0)} missed`:""}</div>
                      </div>
                      <button class="ghost-btn compact" data-action="pick-date" data-date="${e.date}">Open</button>
                    </div>
                    <div class="bar"><span style="width:${e.percent}%"></span></div>
                    ${e.note?`<p class="note" style="margin-top:10px">${y(e.note)}</p>`:""}
                  </article>
                `).join(""):'<div class="empty">Complete today to start your history.</div>'}
    </div>
  `}function _t(){const t=c.isLocked(m),e=c.consciousEnabled(),s=c.categoryBreakdown(m),a=s.reduce((n,o)=>n+o.earned,0),i=s.reduce((n,o)=>n+o.max,0);return`
    <div class="topbar">
      <div>
        <p class="kicker">Activities</p>
        <h1>By category</h1>
      </div>
      <div class="date-nav">
        ${it()}
        <button class="icon-btn" data-action="prev-day" aria-label="Previous day">‹</button>
        <button class="icon-btn" data-action="next-day" aria-label="Next day">›</button>
      </div>
    </div>
    <section class="score-hero">
      <div class="score-row">
        <div>
          <div class="score-value">${a}</div>
          <div class="score-unit">of ${i||0} category points</div>
        </div>
        <div class="grade-pill">${R(m)}</div>
      </div>
      <p class="lock-hint">Habits and tasks grouped by Mentally, Psychology, Physically, Spiritually, and Socially.</p>
    </section>
    ${s.map(n=>{const o=n.max?Math.round(n.earned/n.max*100):0;return`
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
                    ${n.habits.map(r=>{const l=c.habitRating(m,r.id),d=!l&&t,b=c.habitStreak(r.id,m),D=e&&Number(r.consciousPoints)||0,h=l>0?D:0,w=Math.round(r.points*l/5)+h,E=r.points+D;return`
                          <article class="item-card ${l?"done":""} ${d?"missed":""} ${t?"is-locked":""}">
                            <button class="check" data-action="toggle-habit" data-id="${r.id}" ${t?"disabled":""}>✓</button>
                            <div>
                              <div class="item-title">${y(r.name)} ${d?'<span class="missed-badge">Missed</span>':""}</div>
                              <div class="item-meta">Habit · ${l?`${l}/5 ${U(l)}`:t?"Missed":"Not rated"} · ${J(b)}${e?` ${Pt(D)}`:""}</div>
                              ${r.description?`<p class="item-desc">${y(r.description)}</p>`:""}
                              ${I(r.tags)}
                              ${Tt(r.id,l,t)}
                            </div>
                            <div class="item-side">
                              <div class="points">${w}/${E}</div>
                              ${O?`<button class="mini-btn on" data-action="open-edit-habit" data-id="${r.id}" ${t?"disabled":""}>Edit</button>`:""}
                            </div>
                          </article>
                        `}).join("")}
                    ${n.tasks.map(r=>{const l=Math.max(0,Math.min(5,Number(r.rating)||0)),d=!r.done&&t;return`
                          <article class="item-card ${r.done?"done":""} ${d?"missed":""} ${t?"is-locked":""}">
                            <button class="check" data-action="toggle-task" data-id="${r.id}" ${t?"disabled":""}>✓</button>
                            <div>
                              <div class="item-title">${y(r.title)} ${d?'<span class="missed-badge">Missed</span>':""}</div>
                              <div class="item-meta">Task · ${r.done?"Done":t?"Missed":"Pending"} · ${l?`${l}/5 ${U(l)}`:"No rating"}${r.description?` · ${y(r.description)}`:""}</div>
                              ${I(r.tags)}
                              ${At(r.id,l,t)}
                            </div>
                            <div class="item-side">
                              <div class="points">+${r.points}</div>
                              ${O?`<button class="mini-btn on" data-action="open-edit-task" data-id="${r.id}" ${t?"disabled":""}>Edit</button>`:""}
                            </div>
                          </article>
                        `}).join("")}
                  `:'<div class="empty">No activities in this category.</div>'}
            </div>
          </section>
        `}).join("")}
  `}function qt(){const t=c.getSettings(),e=c.getAllHabits(),s=c.getPinnedTasks(),a=c.lockedReports();return`
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

    <section class="section">
      <div class="section-head">
        <h2>Goals &amp; Rewards</h2>
        <button class="ghost-btn compact" data-action="open-goal">Add goal</button>
      </div>
      <p class="muted tight">Do a habit / pinned task N days in a row, or collect N perfect (100%) days — earn an Iron, Bronze, Silver or Gold badge with your own title.</p>
      <div class="habit-manage">
        ${c.getGoals().length?c.getGoals().map(i=>{var l,d;const n=c.goalProgress(i,m),o=c.getBadges().some(b=>b.goalId===i.id),r=i.kind==="habit-streak"?((l=c.findHabit(i.targetId))==null?void 0:l.name)||"Deleted habit":i.kind==="task-streak"?((d=c.findPinnedTask(i.targetId))==null?void 0:d.title)||"Deleted task":"Any day at 100%";return`
                    <article class="manage-card goal-card ${o?"goal-earned":""}">
                      <div class="section-head">
                        <div>
                          <div class="item-title">${tt(i.tier)} ${y(i.title)}</div>
                          <div class="item-meta">${$t(i.tier)} · “${y(i.rewardTitle)}” · ${y(r)}</div>
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
                  <div class="reward-medal">${tt(i.tier)}</div>
                  <div>
                    <div class="item-title">${y(i.rewardTitle||i.title)}</div>
                    <div class="item-meta">${y(i.title)} · ${R((i.earnedAt||"").slice(0,10))}</div>
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
        ${a.length?a.map(i=>`
                    <article class="manage-card">
                      <div class="section-head">
                        <div>
                          <div class="item-title">${R(i.date)}</div>
                          <div class="item-meta">${i.submittedAt?`Submitted ${xt(i.submittedAt)}`:"Locked"} · ${i.earned} pts</div>
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
                          <div class="item-title">${y(i.name)}</div>
                          <div class="item-meta">${Y(i.category)} · ${i.pin?W(i.pin):"Not pinned"} · +${i.points} pts ${t.showConscious!==!1?Number(i.consciousPoints)?`· 🧠 +${i.consciousPoints}`:"· No conscious pts":""} · ${J(c.habitStreak(i.id,m))}</div>
                          ${i.description?`<p class="item-desc">${y(i.description)}</p>`:""}
                          ${I(i.tags)}
                        </div>
                        <div class="mini-actions">
                          <button class="mini-btn ${i.pin?"on":""}" data-action="open-pin-habit" data-id="${i.id}">${C("pin")}</button>
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
        ${s.length?s.map(i=>`
                    <article class="manage-card">
                      <div class="section-head">
                        <div>
                          <div class="item-title">${y(i.title)}</div>
                          <div class="item-meta">${Y(i.category)} · ${W(i.pin)} · +${i.points} pts</div>
                          ${i.description?`<p class="item-desc">${y(i.description)}</p>`:""}
                          ${I(i.tags)}
                        </div>
                        <div class="mini-actions">
                          <button class="mini-btn on" data-action="open-pin-template" data-id="${i.id}">${C("pin")}</button>
                          <button class="mini-btn" data-action="unpin-template" data-id="${i.id}">✕</button>
                        </div>
                      </div>
                    </article>
                  `).join(""):'<div class="empty">Pin a task from Today to repeat it.</div>'}
      </div>
    </section>
  `}function L(t){if(/^\d{4}-\d{2}$/.test(String(t||"")))return String(t);if(/^\d{4}-\d{2}-\d{2}$/.test(String(t||"")))return String(t).slice(0,7);const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}`}function gt(t,e){const[s,a]=String(t).split("-").map(Number),i=new Date(s,(a||1)-1+e,1);return`${i.getFullYear()}-${String(i.getMonth()+1).padStart(2,"0")}`}function zt(t){const[e,s]=String(t).split("-").map(Number);return new Date(e,(s||1)-1,1).toLocaleDateString(void 0,{month:"long",year:"numeric"})}function Wt(t){const[e,s]=String(t).split("-").map(Number),i=(new Date(e,s-1,1).getDay()+6)%7,n=new Date(e,s,0).getDate(),o=[];for(let r=0;r<i;r++)o.push(null);for(let r=1;r<=n;r++)o.push(`${e}-${String(s).padStart(2,"0")}-${String(r).padStart(2,"0")}`);return o}function ht(t,e,s){const a=new Set(s||[]),i=Wt(e);return`
    <div class="pin-cal" data-cal="${t}">
      <div class="pin-cal-head">
        <button type="button" class="mini-btn" data-action="pin-cal-nav" data-target="${t}" data-dir="-1" aria-label="Previous month">‹</button>
        <b>${zt(e)}</b>
        <button type="button" class="mini-btn" data-action="pin-cal-nav" data-target="${t}" data-dir="1" aria-label="Next month">›</button>
      </div>
      <div class="pin-cal-grid pin-cal-week">
        ${["M","T","W","T","F","S","S"].map(n=>`<span>${n}</span>`).join("")}
      </div>
      <div class="pin-cal-grid">
        ${i.map(n=>n?`<button type="button" class="pin-cal-day ${a.has(n)?"on":""}" data-action="toggle-pin-date" data-target="${t}" data-date="${n}">${Number(n.slice(8,10))}</button>`:"<span></span>").join("")}
      </div>
    </div>
  `}function Ut(t,e){const s=(t==null?void 0:t.mode)||"forever",a=(t==null?void 0:t.until)||"",i=((t==null?void 0:t.weekdays)||[]).map(Number),n=((t==null?void 0:t.monthDays)||[]).map(Number),o=Array.isArray(t==null?void 0:t.yearDays)?[...t.yearDays].sort():[],r=Array.isArray(t==null?void 0:t.customDates)?[...t.customDates].sort():[],l=Array.isArray(t==null?void 0:t.exceptDates)?[...t.exceptDates].sort():Array.isArray(t==null?void 0:t.exceptions)?[...t.exceptions].sort():[],d=e&&e._exceptCal||L(m),b=e&&e._customCal||L(m),D=e&&e._yearMonth||"01";return`
    <div class="chip-row pin-modes">
      <button type="button" class="chip ${s==="forever"?"on":""}" data-action="pin-mode" data-mode="forever">Forever</button>
      <button type="button" class="chip ${s==="until"?"on":""}" data-action="pin-mode" data-mode="until">Until date</button>
      <button type="button" class="chip ${s==="weekly"?"on":""}" data-action="pin-mode" data-mode="weekly">Weekly</button>
      <button type="button" class="chip ${s==="monthly"?"on":""}" data-action="pin-mode" data-mode="monthly">Monthly</button>
      <button type="button" class="chip ${s==="yearly"?"on":""}" data-action="pin-mode" data-mode="yearly">Yearly</button>
      <button type="button" class="chip ${s==="custom"?"on":""}" data-action="pin-mode" data-mode="custom">Custom</button>
    </div>
    <input type="hidden" name="mode" value="${s}" />
    <label class="pin-until" style="${s==="until"?"":"display:none"}">
      Until
      <input name="until" type="date" value="${a}" />
    </label>
    <div class="pin-weekdays" style="${s==="weekly"?"":"display:none"}">
      <p class="item-meta">Repeat every</p>
      <div class="chip-row">
        ${kt.map(h=>`
            <button type="button" class="chip weekday ${i.includes(h.value)?"on":""}" data-action="toggle-weekday" data-day="${h.value}">
              ${h.label}
            </button>
          `).join("")}
      </div>
    </div>
    <div class="pin-monthdays" style="${s==="monthly"?"":"display:none"}">
      <p class="item-meta">Repeat every month on day</p>
      <div class="chip-row">
        ${Array.from({length:31},(h,w)=>w+1).map(h=>`<button type="button" class="chip monthday ${n.includes(h)?"on":""}" data-action="toggle-monthday" data-day="${h}">${h}</button>`).join("")}
      </div>
    </div>
    <div class="pin-yeardays" style="${s==="yearly"?"":"display:none"}">
      <p class="item-meta">Repeat every year on (month + day)</p>
      <div class="row-2">
        <label>Month
          <select id="year-month-select">
            ${Array.from({length:12},(h,w)=>w+1).map(h=>`<option value="${String(h).padStart(2,"0")}" ${D===String(h).padStart(2,"0")?"selected":""}>${new Date(2e3,h-1,1).toLocaleDateString(void 0,{month:"long"})}</option>`).join("")}
          </select>
        </label>
        <label>Day
          <select id="year-day-select">
            ${Array.from({length:31},(h,w)=>w+1).map(h=>`<option value="${String(h).padStart(2,"0")}">${h}</option>`).join("")}
          </select>
        </label>
      </div>
      <button type="button" class="ghost-btn compact" data-action="add-year-day" style="margin-top:8px">Add yearly date</button>
      <div class="chip-row" style="margin-top:8px">
        ${o.length?o.map(h=>`<button type="button" class="chip on" data-action="remove-year-day" data-date="${h}" title="Tap to remove">${h} ✕</button>`).join(""):'<span class="item-meta">No yearly dates yet.</span>'}
      </div>
    </div>
    <div class="pin-customdays" style="${s==="custom"?"":"display:none"}">
      <p class="item-meta">Show only on these custom dates — tap days on the calendar</p>
      ${ht("custom",b,r)}
      <div class="chip-row" style="margin-top:8px">
        ${r.length?r.map(h=>`<button type="button" class="chip on" data-action="toggle-pin-date" data-target="custom" data-date="${h}" title="Tap to remove">${h} ✕</button>`).join(""):'<span class="item-meta">No custom dates picked.</span>'}
      </div>
    </div>
    <div class="pin-exceptions" style="margin-top:4px">
      <p class="item-meta"><b style="color:var(--text)">Exceptions</b> — skip these days (tap days on the calendar). Applies to every repeat mode.</p>
      ${ht("except",d,l)}
      <div class="chip-row" style="margin-top:8px">
        ${l.length?l.map(h=>`<button type="button" class="chip on" data-action="toggle-pin-date" data-target="except" data-date="${h}" title="Tap to remove">${h} ✕</button>`).join(""):'<span class="item-meta">No exceptions.</span>'}
      </div>
    </div>
  `}function Vt(){if(!f)return"";if(f==="choose")return`
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
    `;if(f==="habit"||f==="task"||f==="edit-habit"||f==="edit-task"){const t=f==="habit"||f==="edit-habit",e=f.startsWith("edit-"),s=p||{},a=s.category||(t?"physically":"mentally"),i=Math.max(0,Math.min(5,Number(s.rating)||0)),n=Array.isArray(s.tags)?s.tags.join(", "):s.tags||"",o=s.consciousPoints!=null?Number(s.consciousPoints):s.conscious!=null?Number(s.conscious):0;return`
      <div class="modal-backdrop open" data-action="close-modal">
        <form class="sheet" data-form="${f}" data-id="${s.id||""}">
          <div class="handle"></div>
          <h2>${e?"Edit":"New"} ${t?"habit":"task"}</h2>
          <div class="form" style="margin-top:14px">
            <label>
              ${t?"Habit name":"Task name"}
              <input name="title" required maxlength="60" value="${y(s.title||s.name||"")}" placeholder="${t?"Meditate":"Finish report"}" />
            </label>
            ${t?`
                  <label>
                    Description (optional)
                    <textarea name="description" maxlength="240" placeholder="Why this habit matters, extra notes...">${y(s.description||"")}</textarea>
                  </label>
                `:`
                  <label>
                    Description (optional)
                    <textarea name="description" maxlength="240" placeholder="Why this matters, extra notes...">${y(s.description||"")}</textarea>
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
                `}
            <div>
              <p class="item-meta">Category</p>
              <div class="chip-row cat-row">
                ${Q.map(r=>`
                    <button type="button" class="chip ${a===r.id?"on":""}" data-action="set-category" data-category="${r.id}">${r.label}</button>
                  `).join("")}
              </div>
              <input type="hidden" name="category" value="${a}" />
            </div>
            <label>
              Tags (optional, comma separated)
              <input name="tags" maxlength="120" value="${y(n)}" placeholder="morning, health" />
            </label>
            <label>
              Points
              <input name="points" type="number" min="1" max="100" value="${s.points||(t?10:5)}" />
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
    `}if(f==="export"){const t=p&&p.range||"day";return`
      <div class="modal-backdrop open" data-action="close-modal">
        <div class="sheet">
          <div class="handle"></div>
          <h2>Export report</h2>
          <p class="muted tight">Date: ${R(m)}. Pick a range, then a format.</p>
          <div class="form" style="margin-top:14px">
            <div class="chip-row">
              ${[["day","Day"],["week","Week"],["month","Month"],["year","Year"],["all","All"]].map(([e,s])=>`<button type="button" class="chip ${t===e?"on":""}" data-action="set-export-range" data-range="${e}">${s}</button>`).join("")}
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
    `}if(f==="goal"||f==="edit-goal"){const t=f==="edit-goal",e=p||{},s=e.kind||"habit-streak",a=c.getAllHabits(),i=c.getPinnedTasks(),n=e.targetId||"";return`
      <div class="modal-backdrop open" data-action="close-modal">
        <form class="sheet" data-form="${f}" data-id="${e.id||""}">
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
                ${vt.map(o=>`<button type="button" class="chip ${s===o.id?"on":""}" data-action="set-goal-kind" data-kind="${o.id}">${o.label}</button>`).join("")}
              </div>
              <input type="hidden" name="kind" value="${s}" />
            </div>
            <label class="goal-target-habit" style="${s==="habit-streak"?"":"display:none"}">
              Habit
              <select name="habitTarget">
                ${a.map(o=>`<option value="${o.id}" ${n===o.id?"selected":""}>${y(o.name)}</option>`).join("")}
              </select>
            </label>
            <label class="goal-target-task" style="${s==="task-streak"?"":"display:none"}">
              Pinned task
              <select name="taskTarget">
                ${i.length?i.map(o=>`<option value="${o.id}" ${n===o.id?"selected":""}>${y(o.title)}</option>`).join(""):'<option value="">No pinned tasks yet</option>'}
              </select>
            </label>
            <label>
              Number of days
              <input name="targetDays" type="number" min="1" max="365" value="${e.targetDays||7}" />
            </label>
            <div>
              <p class="item-meta">Badge</p>
              <div class="chip-row goal-tier-row">
                ${q.map(o=>`<button type="button" class="chip ${(e.tier||"bronze")===o.id?"on":""}" data-action="set-goal-tier" data-tier="${o.id}">${o.medal} ${o.label}</button>`).join("")}
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
    `}if(f==="pin"){const{kind:t,id:e,title:s,pin:a}=p||{};return`
      <div class="modal-backdrop open" data-action="close-modal">
        <form class="sheet sheet-wide" data-form="pin" data-kind="${t}" data-id="${e}">
          <div class="handle"></div>
          <h2>Pin ${t==="habit"?"habit":"task"}</h2>
          <p class="muted tight">${y(s||"")}</p>
          <div class="form" style="margin-top:14px">
            ${Ut(a,p)}
            <button class="primary-btn" type="submit">Save pin</button>
            ${a?'<button class="ghost-btn danger" type="button" data-action="clear-pin">Unpin</button>':""}
            <button class="ghost-btn" type="button" data-action="close-modal">Cancel</button>
          </div>
        </form>
      </div>
    `}return""}function S(){if(K)try{const t=c.isLocked(m);K.innerHTML=`
    <div class="app-shell">
      <main class="screen active">
        ${x==="today"?It():""}
        ${x==="week"?Gt():""}
        ${x==="history"?Ft():""}
        ${x==="habits"?_t():""}
        ${x==="settings"?qt():""}
      </main>
      ${["today","habits"].includes(x)&&!t?'<button class="fab" data-action="open-add" aria-label="Add">+</button>':""}
      ${x==="settings"?'<button class="fab" data-action="open-add-habit" aria-label="Add habit">+</button>':""}
      <nav class="tabbar tabs-5">
        <button class="tab ${x==="today"?"active":""}" data-screen="today">${C("home")}Today</button>
        <button class="tab ${x==="week"?"active":""}" data-screen="week">${C("week")}Week</button>
        <button class="tab ${x==="history"?"active":""}" data-screen="history">${C("history")}History</button>
        <button class="tab ${x==="habits"?"active":""}" data-screen="habits">${C("habit")}Activities</button>
        <button class="tab ${x==="settings"?"active":""}" data-screen="settings">${C("settings")}Settings</button>
      </nav>
    </div>
    ${Vt()}
    <div class="toast" id="toast"></div>
  `,Yt(),Jt()}catch(t){const e=t&&t.stack?String(t.stack).slice(0,400):t&&t.message?t.message:"Unknown error";K.innerHTML=`<div class="app-shell"><section class="manage-card"><h2>Could not load (Error B)</h2><p class="muted tight">${y(e)}</p><button class="primary-btn full" data-action="reload-app">Reload</button></section></div>`}}function Yt(){const t=document.getElementById("day-note");t&&t.addEventListener("input",()=>{c.isLocked(m)||c.setNote(m,t.value)})}function Jt(){const t=document.getElementById("lock-time"),e=document.getElementById("auto-lock");t&&t.addEventListener("change",()=>{c.setLockTime(t.value),k(`Lock time set to ${t.value}`),S()}),e&&e.addEventListener("change",()=>{c.setAutoLock(e.checked),k(e.checked?"Auto-lock on":"Auto-lock off"),S()})}function k(t){const e=document.getElementById("toast");e&&(e.textContent=t,e.classList.add("show"),setTimeout(()=>e.classList.remove("show"),1800))}function y(t){return String(t||"").split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;").split('"').join("&quot;")}function N(){return c.isLocked(m)?(k("This report is locked. Unlock it in Settings."),!0):!1}function nt(t){return{mode:(t==null?void 0:t.mode)||"forever",until:(t==null?void 0:t.until)||"",weekdays:Array.isArray(t==null?void 0:t.weekdays)?t.weekdays.map(Number):[],monthDays:Array.isArray(t==null?void 0:t.monthDays)?t.monthDays.map(Number):[],yearDays:Array.isArray(t==null?void 0:t.yearDays)?[...t.yearDays]:[],customDates:Array.isArray(t==null?void 0:t.customDates)?[...t.customDates]:[],exceptDates:Array.isArray(t==null?void 0:t.exceptDates)?[...t.exceptDates]:Array.isArray(t==null?void 0:t.exceptions)?[...t.exceptions]:[]}}function Qt(t){const e=c.findHabit(t);e&&(f="pin",p={kind:"habit",id:t,title:e.name,pin:e.pin?nt(e.pin):{mode:"forever",until:"",weekdays:[],monthDays:[],yearDays:[],customDates:[],exceptDates:[]},_exceptCal:L(m),_customCal:L(m),_yearMonth:"01"})}function Xt(t){const e=c.findTask(m,t);if(!e)return;const s=e.sourcePinId?c.findPinnedTask(e.sourcePinId):null;f="pin",p={kind:"task",id:t,title:e.title,pin:s!=null&&s.pin?nt(s.pin):{mode:"forever",until:"",weekdays:[],monthDays:[],yearDays:[],customDates:[],exceptDates:[]},_exceptCal:L(m),_customCal:L(m),_yearMonth:"01"}}function Zt(t){const e=c.findPinnedTask(t);e&&(f="pin",p={kind:"template",id:t,title:e.title,pin:e.pin?nt(e.pin):{mode:"forever",until:"",weekdays:[],monthDays:[],yearDays:[],customDates:[],exceptDates:[]},_exceptCal:L(m),_customCal:L(m),_yearMonth:"01"})}function Kt(t){var d;const e=t.querySelector('input[name="mode"]').value,s=((d=t.querySelector('input[name="until"]'))==null?void 0:d.value)||"",a=[...t.querySelectorAll(".weekday.on")].map(b=>Number(b.dataset.day)),i=[...t.querySelectorAll(".monthday.on")].map(b=>Number(b.dataset.day)),n=p&&p.pin||{},o=Array.isArray(n.yearDays)?n.yearDays:[],r=Array.isArray(n.customDates)?n.customDates:[],l=Array.isArray(n.exceptDates)?n.exceptDates:[];return e==="until"&&!s?(k("Pick an until date"),null):e==="weekly"&&!a.length?(k("Pick at least one weekday"),null):e==="monthly"&&!i.length?(k("Pick at least one day of month"),null):e==="yearly"&&!o.length?(k("Add at least one yearly date"),null):e==="custom"&&!r.length?(k("Pick at least one custom date"),null):{mode:e,until:s,weekdays:a,monthDays:i,yearDays:o,customDates:r,exceptDates:l}}function Nt(t,e,s){const a=e instanceof Blob?e:new Blob([e],{type:s||"text/plain;charset=utf-8"}),i=URL.createObjectURL(a),n=document.createElement("a");n.href=i,n.download=t,document.body.appendChild(n),n.click(),setTimeout(()=>{document.body.removeChild(n),URL.revokeObjectURL(i)},500)}function F(t){const e=String(t??"");return/[",\n]/.test(e)?`"${e.replace(/"/g,'""')}"`:e}function ot(t){const[e,s]=c.resolveRange(t,m);return{range:t,start:e,end:s,rows:c.exportRows(e,s)}}function te(){const t=p&&p.range||"day",{start:e,end:s,rows:a}=ot(t),i=[];i.push(["Daily Report export",`${e} to ${s}`].map(F).join(",")),i.push(["Date","Type","Name","Category","Tags","Points","Rating","Earned","ConsciousPts","Status","Note/Description"].map(F).join(",")),a.forEach(n=>{n.habits.forEach(o=>{i.push([n.date,"Habit",o.name,o.category,(o.tags||[]).join("|"),o.points,o.rating,o.earned,o.consciousPoints,o.status||(o.rating>0?"done":n.locked?"missed":"pending"),o.description||""].map(F).join(","))}),n.tasks.forEach(o=>{i.push([n.date,"Task",o.title,o.category,(o.tags||[]).join("|"),o.points,o.rating||"",o.earned,"",o.status||(o.done?"done":n.locked?"missed":"pending"),o.description||""].map(F).join(","))}),i.push([n.date,"Summary",`Earned ${n.earned}/${n.max} (${n.percent}%)`,"","","","","","",n.locked?"locked":"open",n.note||""].map(F).join(","))}),Nt(`daily-report-${t}-${e}-to-${s}.csv`,"\uFEFF"+i.join(`
`),"text/csv;charset=utf-8"),k("Excel (CSV) exported")}function ee(){const t=p&&p.range||"day",{start:e,end:s,rows:a}=ot(t),i={app:"Daily Report",exportedAt:new Date().toISOString(),range:t,start:e,end:s,days:a};Nt(`daily-report-${t}-${e}-to-${s}.json`,JSON.stringify(i,null,2),"application/json"),k("JSON exported")}function se(){const t=p&&p.range||"day",{start:e,end:s,rows:a}=ot(t),i=a.map(o=>`
        <section style="margin-bottom:18px;border:1px solid #ddd;border-radius:12px;padding:12px">
          <h2 style="margin:0 0 4px;font-size:16px">${y(o.date)} — ${o.earned}/${o.max} pts (${o.percent}%)</h2>
          <p style="margin:0 0 8px;font-size:12px;color:#555">Habits ${o.habitScore} + Conscious ${o.consciousScore} + Tasks ${o.taskScore} · ${o.locked?"Locked":"Open"}${o.note?` · Note: ${y(o.note)}`:""}</p>
          <table style="width:100%;border-collapse:collapse;font-size:12px">
            <thead><tr><th align="left">Type</th><th align="left">Name</th><th align="left">Category</th><th>Points</th><th>Rating</th><th>Earned</th><th>Status</th></tr></thead>
            <tbody>
              ${o.habits.map(r=>`<tr><td>Habit</td><td>${y(r.name)}${r.description?` (${y(r.description)})`:""}</td><td>${y(r.category)}</td><td align="center">${r.points}${r.consciousPoints?`+${r.consciousPoints}🧠`:""}</td><td align="center">${r.rating||"-"}/5</td><td align="center">${r.earned}</td><td align="center">${r.status||(r.rating>0?"done":o.locked?"missed":"pending")}</td></tr>`).join("")}
              ${o.tasks.map(r=>`<tr><td>Task</td><td>${y(r.title)}${r.description?` (${y(r.description)})`:""}</td><td>${y(r.category)}</td><td align="center">${r.points}</td><td align="center">${r.rating?`${r.rating}/5`:"-"}</td><td align="center">${r.earned}</td><td align="center">${r.status||(r.done?"done":o.locked?"missed":"pending")}</td></tr>`).join("")}
            </tbody>
          </table>
        </section>
      `).join(""),n=window.open("","_blank");if(!n){k("Popup blocked — allow popups to export PDF");return}n.document.write(`<!DOCTYPE html><html><head><title>Daily Report ${e} to ${s}</title></head><body style="font-family:sans-serif;padding:24px"><h1>Daily Report — ${e} to ${s}</h1>${i}<script>window.onload=function(){window.print()}<\/script></body></html>`),n.document.close(),k("PDF print view opened")}document.addEventListener("click",t=>{const e=t.target.closest("[data-screen]");if(e){x=e.dataset.screen,S();return}const s=t.target.closest("[data-action]");if(!s)return;const a=s.dataset.action;if(a==="close-modal"){(t.target.classList.contains("modal-backdrop")||s.classList.contains("ghost-btn"))&&(f=null,p=null,S());return}if(a==="prev-day"&&pt(-1),a==="next-day"&&pt(1),a==="reload-app"){window.location.reload();return}if(a==="goto-settings"&&(x="settings"),a==="open-add-habit"&&(f="habit",p=null),a==="open-add-task"){if(N())return;f="task",p={category:"mentally"}}if(a==="open-add"){if(N())return;f="choose",p={category:"mentally"}}if(a==="toggle-edit"&&(O=!O),a==="open-edit-habit"){const i=c.findHabit(s.dataset.id);if(!i)return;f="edit-habit",p={id:i.id,name:i.name,description:i.description||"",points:i.points,category:i.category,tags:i.tags||[],consciousPoints:Number(i.consciousPoints)||0}}if(a==="open-edit-task"){if(N())return;const i=c.findTask(m,s.dataset.id);if(!i)return;f="edit-task",p={id:i.id,title:i.title,points:i.points,description:i.description,category:i.category,tags:i.tags||[],rating:Number(i.rating)||0}}if(a==="toggle-badges"&&(V=!V),a==="open-goal"&&(f="goal",p={kind:"habit-streak",targetDays:7,tier:"bronze"}),a==="open-edit-goal"){const i=c.getGoals().find(n=>n.id===s.dataset.id);if(!i)return;f="edit-goal",p={...i}}if(a==="remove-goal"&&(c.removeGoal(s.dataset.id),k("Goal removed")),a==="remove-badge"&&(c.removeBadge(s.dataset.id),k("Badge removed")),a==="rate-habit"){if(N())return;const n=c.habitRating(m,s.dataset.id)===Number(s.dataset.rating)?0:Number(s.dataset.rating);c.setHabitRating(m,s.dataset.id,n)}if(a==="rate-task"){if(N())return;const i=c.findTask(m,s.dataset.id);if(!i)return;const o=(Number(i.rating)||0)===Number(s.dataset.rating)?0:Number(s.dataset.rating);c.setTaskRating(m,s.dataset.id,o)}if(a==="open-export"&&(f="export",p={range:p&&p.range||"day"}),a==="set-export-range"){f="export",p={range:s.dataset.range||"day"},S();return}if(a==="do-export"){const i=s.dataset.format;i==="csv"&&te(),i==="json"&&ee(),i==="pdf"&&se(),f=null,p=null}if(a==="submit-day"&&(c.submitDay(m),k("Report submitted and locked")),a==="unlock-day"&&(c.unlockDay(s.dataset.date),k("Report unlocked")),a==="toggle-habit"){if(N())return;c.toggleHabit(m,s.dataset.id)}if(a==="toggle-task"){if(N())return;c.toggleTask(m,s.dataset.id)}if(a==="remove-task"){if(N())return;c.removeTask(m,s.dataset.id)}if(a==="remove-habit"&&c.removeHabit(s.dataset.id),a==="open-pin-habit"&&Qt(s.dataset.id),a==="open-pin-task"){if(N())return;Xt(s.dataset.id)}if(a==="open-pin-template"&&Zt(s.dataset.id),a==="unpin-template"&&(c.unpinTaskTemplate(s.dataset.id),k("Task unpinned")),a==="pick-date"&&(m=s.dataset.date,x="today"),a==="set-points"){const i=document.querySelector('input[name="points"]');i&&(i.value=s.dataset.points),document.querySelectorAll(".chip-row .chip[data-points]").forEach(n=>n.classList.remove("on")),s.classList.add("on");return}if(a==="set-category"){const i=s.closest("form")||s.closest(".sheet"),n=i.querySelector('input[name="category"]');n&&(n.value=s.dataset.category),i.querySelectorAll(".cat-row .chip").forEach(o=>o.classList.remove("on")),s.classList.add("on");return}if(a==="set-rating"){const i=s.closest(".sheet")||s.closest("form")||document,n=i.querySelector('input[name="rating"]');n&&(n.value=s.dataset.rating),i.querySelectorAll(".rating-row .chip").forEach(o=>o.classList.remove("on")),s.classList.add("on");return}if(a==="set-conscious"){const i=s.closest(".sheet")||s.closest("form")||document,n=i.querySelector('input[name="consciousPoints"]');n&&(n.value=s.dataset.conscious),i.querySelectorAll(".conscious-row .chip").forEach(o=>o.classList.remove("on")),s.classList.add("on");return}if(a==="set-goal-kind"){const i=s.closest(".sheet")||document,n=i.querySelector('input[name="kind"]');n&&(n.value=s.dataset.kind),i.querySelectorAll(".goal-kind-row .chip").forEach(d=>d.classList.remove("on")),s.classList.add("on");const o=s.dataset.kind,r=i.querySelector(".goal-target-habit"),l=i.querySelector(".goal-target-task");r&&(r.style.display=o==="habit-streak"?"":"none"),l&&(l.style.display=o==="task-streak"?"":"none"),p&&(p.kind=o);return}if(a==="set-goal-tier"){const i=s.closest(".sheet")||document,n=i.querySelector('input[name="tier"]');n&&(n.value=s.dataset.tier),i.querySelectorAll(".goal-tier-row .chip").forEach(o=>o.classList.remove("on")),s.classList.add("on");return}if(a==="pin-mode"){const i=s.closest("form"),n=s.dataset.mode;i.querySelector('input[name="mode"]').value=n,i.querySelectorAll(".pin-modes .chip").forEach(r=>r.classList.remove("on")),s.classList.add("on");const o=(r,l)=>{const d=i.querySelector(r);d&&(d.style.display=l?"":"none")};o(".pin-until",n==="until"),o(".pin-weekdays",n==="weekly"),o(".pin-monthdays",n==="monthly"),o(".pin-yeardays",n==="yearly"),o(".pin-customdays",n==="custom"),p&&p.pin&&(p.pin.mode=n);return}if(a==="toggle-weekday"){s.classList.toggle("on");return}if(a==="toggle-monthday"){s.classList.toggle("on");return}if(a==="pin-cal-nav"){if(!p)return;const i=s.dataset.target,n=Number(s.dataset.dir)||0;i==="except"?p._exceptCal=gt(p._exceptCal||L(m),n):p._customCal=gt(p._customCal||L(m),n),S();return}if(a==="toggle-pin-date"){if(!p||!p.pin)return;const i=s.dataset.target,n=s.dataset.date,o=i==="custom"?"customDates":"exceptDates",r=Array.isArray(p.pin[o])?[...p.pin[o]]:[],l=r.indexOf(n);l>=0?r.splice(l,1):(r.push(n),r.length>365&&r.shift()),p.pin[o]=r.sort(),S();return}if(a==="add-year-day"){if(!p||!p.pin)return;const i=s.closest("form")||document,n=i.querySelector("#year-month-select"),o=i.querySelector("#year-day-select");n&&(p._yearMonth=n.value);const r=`${n?n.value:"01"}-${o?o.value:"01"}`,l=Array.isArray(p.pin.yearDays)?[...p.pin.yearDays]:[];l.includes(r)||l.push(r),p.pin.yearDays=l.sort(),S();return}if(a==="remove-year-day"){if(!p||!p.pin)return;const i=s.dataset.date;p.pin.yearDays=(p.pin.yearDays||[]).filter(n=>n!==i),S();return}if(a==="clear-pin"){const i=s.closest("form"),n=i.dataset.kind,o=i.dataset.id;if(n==="habit"&&c.unpinHabit(o),n==="task"){const r=c.findTask(m,o);r!=null&&r.sourcePinId&&c.unpinTaskTemplate(r.sourcePinId)}n==="template"&&c.unpinTaskTemplate(o),f=null,p=null,k("Unpinned"),S();return}S()});document.addEventListener("submit",t=>{const e=t.target.closest("[data-form]");if(!e)return;t.preventDefault();const s=e.dataset.form;if(s==="habit"||s==="task"||s==="edit-habit"||s==="edit-task"){const a=new FormData(e),i=String(a.get("title")||""),n=Number(a.get("points")||0),o=String(a.get("category")||"mentally"),r=String(a.get("description")||""),l=String(a.get("tags")||""),d=Math.max(0,Math.min(5,Number(a.get("rating")||0))),b=Math.max(0,Math.min(100,Number(a.get("consciousPoints")||0)));if(!i.trim())return;if(s==="habit")c.addHabit(i,n,{description:r,category:o,consciousPoints:b,tags:l}),k("Habit added");else if(s==="task"){if(N())return;c.addTask(m,i,n,{description:r,category:o,rating:d,tags:l}),k("Task added")}else if(s==="edit-habit")c.updateHabit(e.dataset.id,{name:i,description:r,points:n,category:o,consciousPoints:b,tags:l}),k("Habit updated");else{if(N())return;c.updateTask(m,e.dataset.id,{title:i,points:n,description:r,category:o,rating:d,tags:l}),k("Task updated")}f=null,p=null,S();return}if(s==="pin"){const a=Kt(e);if(!a)return;const i=e.dataset.kind,n=e.dataset.id;i==="habit"&&c.pinHabit(n,a),i==="task"&&c.pinTask(m,n,a),i==="template"&&c.updatePinnedTask(n,a),f=null,p=null,k("Pin saved"),S();return}if(s==="goal"||s==="edit-goal"){const a=new FormData(e),i=String(a.get("title")||"").trim(),n=String(a.get("kind")||"habit-streak"),o=String(a.get("tier")||"bronze"),r=String(a.get("rewardTitle")||"").trim(),l=Math.max(1,Math.min(365,Number(a.get("targetDays")||7)));if(!i||!r){k("Goal title and reward title are required");return}let d="";if(n==="habit-streak"&&(d=String(a.get("habitTarget")||"")),n==="task-streak"&&(d=String(a.get("taskTarget")||"")),(n==="habit-streak"||n==="task-streak")&&!d){k(n==="habit-streak"?"Pick a habit":"Pin a task first, then pick it");return}s==="goal"?(c.addGoal({title:i,kind:n,targetId:d,targetDays:l,tier:o,rewardTitle:r}),k("Goal added")):(c.updateGoal(e.dataset.id,{title:i,kind:n,targetId:d,targetDays:l,tier:o,rewardTitle:r}),k("Goal updated"));const b=c.checkGoals(m);b.length&&k(`🏅 Reward earned: ${b[0].rewardTitle}!`),f=null,p=null,S()}});document.addEventListener("change",t=>{const e=t.target.closest(".sort-select");if(e){const s=e.dataset.sortKind;s==="habit"&&c.setHabitSort(e.value),s==="task"&&c.setTaskSort(e.value),S()}t.target&&t.target.id==="show-conscious"&&(c.setShowConscious(t.target.checked),k(t.target.checked?"Conscious points on":"Conscious points hidden"),S()),t.target&&t.target.id==="year-month-select"&&p&&(p._yearMonth=t.target.value)});"serviceWorker"in navigator&&(navigator.serviceWorker.getRegistrations().then(t=>{t.forEach(e=>e.unregister())}).catch(()=>{}),"caches"in window&&caches.keys().then(t=>Promise.all(t.map(e=>caches.delete(e)))).catch(()=>{}));function ae(){const t=document.getElementById("boot-error");t&&(t.style.display="none")}ae();S();
