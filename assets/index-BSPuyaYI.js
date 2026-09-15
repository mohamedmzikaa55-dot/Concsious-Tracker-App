(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(a){if(a.ep)return;a.ep=!0;const n=s(a);fetch(a.href,n)}})();const pt="daily-report-v2",Y=[{id:"mentally",label:"Mentally"},{id:"psychology",label:"Psychology"},{id:"physically",label:"Physically"},{id:"spiritually",label:"Spiritually"}],Dt=Y.map(t=>t.id),gt=[{id:"h1",name:"Wake up early",points:10,icon:"sunrise",category:"physically",pin:{mode:"forever"}},{id:"h2",name:"Drink water",points:5,icon:"drop",category:"physically",pin:{mode:"forever"}},{id:"h3",name:"Exercise",points:15,icon:"bolt",category:"physically",pin:{mode:"forever"}},{id:"h4",name:"Read 20 minutes",points:10,icon:"book",category:"mentally",pin:{mode:"forever"}},{id:"h5",name:"No junk food",points:10,icon:"leaf",category:"physically",pin:{mode:"forever"}}],mt={lockTime:"21:00",autoLock:!0,showConscious:!0,habitSort:"default",taskSort:"default"},q=[{id:"iron",label:"Iron",medal:"🥉",rank:1},{id:"bronze",label:"Bronze",medal:"🥉",rank:2},{id:"silver",label:"Silver",medal:"🥈",rank:3},{id:"gold",label:"Gold",medal:"🥇",rank:4}],bt=[{id:"habit-streak",label:"Habit streak"},{id:"task-streak",label:"Pinned task streak"},{id:"perfect-days",label:"Perfect days (100%)"}];function nt(t){var e;return((e=q.find(s=>s.id===t))==null?void 0:e.rank)||0}function K(t){var e;return((e=q.find(s=>s.id===t))==null?void 0:e.medal)||"🏅"}function ht(t){var e;return((e=q.find(s=>s.id===t))==null?void 0:e.label)||t||"Badge"}function A(t){const e=Array.isArray(t)?t:String(t||"").split(","),s=[];return e.forEach(i=>{const a=String(i||"").trim().slice(0,20);a&&!s.some(n=>n.toLowerCase()===a.toLowerCase())&&s.push(a),s.length>=10}),s.slice(0,10)}function X(t,e){const s=[...t];return e==="points"?s.sort((i,a)=>(Number(a.points)||0)-(Number(i.points)||0)):e==="category"?s.sort((i,a)=>F(S(i.category)).localeCompare(F(S(a.category)))):e==="tags"&&s.sort((i,a)=>(i.tags&&i.tags[0]||"~~~").localeCompare(a.tags&&a.tags[0]||"~~~")),s}const ft=[{value:1,label:"Mon"},{value:2,label:"Tue"},{value:3,label:"Wed"},{value:4,label:"Thu"},{value:5,label:"Fri"},{value:6,label:"Sat"},{value:0,label:"Sun"}];function M(t=new Date){const e=t.getFullYear(),s=String(t.getMonth()+1).padStart(2,"0"),i=String(t.getDate()).padStart(2,"0");return`${e}-${s}-${i}`}function vt(){return{habits:{},habitRatings:{},habitMissed:{},tasks:[],note:"",locked:!1,lockOverride:null,submittedAt:null,lockedHabits:null}}function S(t){return Dt.includes(t)?t:"mentally"}function F(t){var e;return((e=Y.find(s=>s.id===t))==null?void 0:e.label)||"Mentally"}function ot(t){const e=Math.max(0,Math.min(5,Number(t.rating)||0));return{...t,description:t.description||"",category:S(t.category),tags:A(t.tags),rating:e,done:!!t.done,missed:!!t.missed}}function H(t){const e=Number(t);return!Number.isFinite(e)||e<0?0:Math.min(100,Math.round(e))}function O(t){return!t||!t.mode?null:{mode:t.mode,until:t.until||"",weekdays:Array.isArray(t.weekdays)?t.weekdays.map(Number):[]}}function Pt(t,e){const s=`${t} ${e}`.toLowerCase();return s.includes("read")||s.includes("study")||s.includes("learn")?"mentally":s.includes("meditat")||s.includes("pray")||s.includes("journal")?"spiritually":s.includes("mood")||s.includes("calm")||s.includes("therapy")?"psychology":"physically"}function tt(t){const e=bt.some(s=>s.id===t.kind)?t.kind:"habit-streak";return{id:String(t.id||`g${Date.now()}`),title:String(t.title||"").trim().slice(0,60)||"My goal",kind:e,targetId:String(t.targetId||""),targetDays:Math.max(1,Math.min(365,Number(t.targetDays)||7)),tier:q.some(s=>s.id===t.tier)?t.tier:"bronze",rewardTitle:String(t.rewardTitle||"").trim().slice(0,60)||"Reward",createdAt:t.createdAt||new Date().toISOString()}}function At(t){const e=(Array.isArray(t.habits)&&t.habits.length?t.habits:gt).map(i=>({...i,category:S(i.category||Pt(i.id,i.name)),consciousPoints:H(i.consciousPoints),tags:A(i.tags),pin:O(i.pin)})),s={};return Object.entries(t.days||{}).forEach(([i,a])=>{s[i]={...vt(),habits:a.habits||{},habitRatings:a.habitRatings||{},habitMissed:a.habitMissed||{},tasks:Array.isArray(a.tasks)?a.tasks.map(ot):[],note:a.note||"",locked:!!a.locked,lockOverride:a.lockOverride||(a.locked?"locked":null),submittedAt:a.submittedAt||null,lockedHabits:Array.isArray(a.lockedHabits)?a.lockedHabits:null}}),{habits:e,pinnedTasks:Array.isArray(t.pinnedTasks)?t.pinnedTasks.map(i=>({...ot(i),pin:O(i.pin)})):[],days:s,goals:Array.isArray(t.goals)?t.goals.map(tt):[],badges:Array.isArray(t.badges)?t.badges.filter(i=>i&&i.id&&i.goalId).map(i=>({id:String(i.id),goalId:String(i.goalId),title:String(i.title||""),tier:i.tier||"bronze",rewardTitle:String(i.rewardTitle||""),earnedAt:i.earnedAt||new Date().toISOString()})):[],settings:{lockTime:t.settings&&t.settings.lockTime||mt.lockTime,autoLock:!t.settings||t.settings.autoLock!==!1,showConscious:!t.settings||t.settings.showConscious!==!1,habitSort:["default","points","category","tags"].includes(t.settings&&t.settings.habitSort)?t.settings.habitSort:"default",taskSort:["default","points","category","tags"].includes(t.settings&&t.settings.taskSort)?t.settings.taskSort:"default"}}}function rt(){return{habits:gt.map(t=>({...t,tags:[]})),pinnedTasks:[],days:{},goals:[],badges:[],settings:{...mt}}}function Nt(){try{const t=localStorage.getItem(pt)||localStorage.getItem("daily-report-v1");return t?At(JSON.parse(t)):rt()}catch{return rt()}}let l=Nt();function k(){try{localStorage.setItem(pt,JSON.stringify(l))}catch{}}function Mt(t){return new Date(`${t}T00:00:00`).getDay()}function I(t){const e=new Date(`${t}T00:00:00`);return e.setDate(e.getDate()-1),M(e)}function z(t,e){return!t||t.mode==="forever"?!0:t.mode==="until"?!!t.until&&e<=t.until:t.mode==="weekly"?Array.isArray(t.weekdays)&&t.weekdays.includes(Mt(e)):!0}function U(t){if(!t)return"Not pinned";if(t.mode==="forever")return"Pinned forever";if(t.mode==="until")return t.until?`Pinned until ${t.until}`:"Pinned until a date";if(t.mode==="weekly"){const e=Array.isArray(t.weekdays)?t.weekdays:[],s=ft.filter(i=>e.includes(i.value)).map(i=>i.label);return s.length?`Weekly: ${s.join(", ")}`:"Weekly (no days)"}return"Pinned"}function dt(t){const[e,s]=(l.settings.lockTime||"21:00").split(":").map(Number),i=new Date(`${t}T00:00:00`);return i.setHours(e||0,s||0,0,0),i}function kt(t){const e=l.days[t];return e?e.lockOverride==="locked"||e.locked===!0:!1}function et(t,e){const s=l.days[t];return s?s.habitRatings&&s.habitRatings[e]!=null?Number(s.habitRatings[e])||0:s.habits&&s.habits[e]?5:0:0}function st(t){const e=x(t),s=l.habits.filter(i=>z(i.pin,t));e.lockedHabits=s.map(i=>({id:i.id,name:i.name,points:Number(i.points)||0,icon:i.icon||"star",category:S(i.category),consciousPoints:H(i.consciousPoints),tags:A(i.tags),pin:O(i.pin)})),e.habitMissed={},s.forEach(i=>{et(t,i.id)<=0?(e.habitMissed[i.id]=!0,e.habitRatings[i.id]=0,e.habits[i.id]=!1):e.habitMissed&&delete e.habitMissed[i.id]}),e.tasks.forEach(i=>{i.missed=!i.done})}function ct(t){const e=x(t);return e.lockOverride==="unlocked"?!1:e.lockOverride==="locked"||e.locked?((!e.lockedHabits||e.habitMissed==null)&&st(t),!0):l.settings.autoLock&&Date.now()>=dt(t).getTime()?(e.locked=!0,e.lockOverride="locked",e.submittedAt=e.submittedAt||dt(t).toISOString(),st(t),k(),!0):!1}function x(t){return l.days[t]||(l.days[t]=vt()),l.days[t]}function Ht(t){const e=x(t);if(kt(t))return e;let s=!1;return l.pinnedTasks.forEach(i=>{z(i.pin,t)&&(e.tasks.some(a=>a.sourcePinId===i.id)||(e.tasks.push({id:`ptask-${i.id}-${t}`,title:i.title,points:i.points,description:i.description||"",category:S(i.category),tags:A(i.tags),rating:0,done:!1,missed:!1,sourcePinId:i.id}),s=!0))}),s&&k(),e}function C(t){return!d.isLocked(t)}const d={todayKey:M,getSettings(){return l.settings},setLockTime(t){l.settings.lockTime=t||"21:00",k()},setAutoLock(t){l.settings.autoLock=!!t,k()},setShowConscious(t){l.settings.showConscious=!!t,k()},consciousEnabled(){return l.settings.showConscious!==!1},setHabitSort(t){l.settings.habitSort=["default","points","category","tags"].includes(t)?t:"default",k()},setTaskSort(t){l.settings.taskSort=["default","points","category","tags"].includes(t)?t:"default",k()},getHabits(t,e){if(t&&kt(t)){const n=l.days[t];if(n&&Array.isArray(n.lockedHabits)){const o=e||l.settings.habitSort||"default",r=[...n.lockedHabits];return o==="default"?r:X(r,o)}}const i=l.habits.filter(n=>t?z(n.pin,t):!0).sort((n,o)=>+!!o.pin-+!!n.pin),a=e||l.settings.habitSort||"default";return a==="default"?i:X(i,a)},getTasks(t,e){const s=this.getDay(t),i=e||l.settings.taskSort||"default";return i==="default"?s.tasks:X(s.tasks,i)},getAllHabits(){return l.habits},getPinnedTasks(){return l.pinnedTasks},getDay(t){return ct(t),Ht(t)},isLocked(t){return ct(t)},submitDay(t){const e=x(t);e.locked=!0,e.lockOverride="locked",e.submittedAt=new Date().toISOString(),st(t),k(),this.checkGoals(t)},unlockDay(t){const e=x(t);e.locked=!1,e.lockOverride="unlocked",e.habitMissed={},e.lockedHabits=null,e.tasks.forEach(s=>{s.missed=!1}),k()},isHabitMissed(t,e){const s=l.days[t];return!s||!(s.locked||s.lockOverride==="locked")?!1:s.habitMissed&&s.habitMissed[e]?!0:et(t,e)<=0},isTaskMissed(t,e){const s=l.days[t];if(!s)return!1;const i=(s.tasks||[]).find(a=>a.id===e);return i?i.missed===!0?!0:i.missed===!1?!1:!!(s.locked||s.lockOverride==="locked")&&!i.done:!1},missedCounts(t){const e=this.getDay(t),s=this.getHabits(t),i=!!(e.locked||e.lockOverride==="locked");return{habits:s.filter(a=>e.habitMissed&&e.habitMissed[a.id]?!0:i&&et(t,a.id)<=0).length,tasks:e.tasks.filter(a=>a.done?!1:a.missed===!0?!0:a.missed===!1?!1:i).length}},lockDay(t){this.submitDay(t)},lockedReports(){return Object.keys(l.days).sort().reverse().filter(t=>this.isLocked(t)).map(t=>({date:t,submittedAt:l.days[t].submittedAt,...this.scoreFor(t)}))},habitRating(t,e){const s=l.days[t];return s?s.habitRatings&&s.habitRatings[e]!=null?Number(s.habitRatings[e])||0:s.habits&&s.habits[e]?5:0:0},setHabitRating(t,e,s){if(!C(t))return;const i=x(t),a=Math.max(0,Math.min(5,Number(s)||0));i.habitRatings[e]=a,i.habits[e]=a>0,k(),this.checkGoals(t)},toggleHabit(t,e){if(!C(t))return;const s=this.habitRating(t,e)>0?0:5;this.setHabitRating(t,e,s)},addTask(t,e,s,i={}){if(!C(t))return;x(t).tasks.push({id:`t${Date.now()}`,title:e.trim(),points:Number(s)||5,description:String(i.description||"").trim(),category:S(i.category),tags:A(i.tags),rating:Math.max(0,Math.min(5,Number(i.rating)||0)),done:!1,missed:!1}),k(),this.checkGoals(t)},setTaskRating(t,e,s){if(!C(t))return;const a=x(t).tasks.find(o=>o.id===e);if(!a)return;const n=Math.max(0,Math.min(5,Number(s)||0));a.rating=n,k()},toggleTask(t,e){if(!C(t))return;const i=x(t).tasks.find(a=>a.id===e);i&&(i.done=!i.done,k(),this.checkGoals(t))},removeTask(t,e){if(!C(t))return;const s=x(t);s.tasks=s.tasks.filter(i=>i.id!==e),k()},setNote(t,e){C(t)&&(x(t).note=e,k())},addHabit(t,e,s={}){l.habits.push({id:`h${Date.now()}`,name:t.trim(),points:Number(e)||10,icon:"star",category:S(s.category||"physically"),consciousPoints:H(s.consciousPoints),tags:A(s.tags),pin:{mode:"forever",until:"",weekdays:[]}}),k()},updateHabit(t,e){const s=l.habits.find(i=>i.id===t);s&&(e.name!=null&&(s.name=String(e.name).trim()||s.name),e.points!=null&&(s.points=Number(e.points)||s.points),e.category!=null&&(s.category=S(e.category)),e.consciousPoints!=null&&(s.consciousPoints=H(e.consciousPoints)),e.tags!=null&&(s.tags=A(e.tags)),k())},updateTask(t,e,s){if(!C(t))return;const a=x(t).tasks.find(n=>n.id===e);if(a){if(s.title!=null&&(a.title=String(s.title).trim()||a.title),s.points!=null&&(a.points=Number(s.points)||a.points),s.description!=null&&(a.description=String(s.description).trim()),s.category!=null&&(a.category=S(s.category)),s.tags!=null&&(a.tags=A(s.tags)),s.rating!=null&&(a.rating=Math.max(0,Math.min(5,Number(s.rating)||0))),a.sourcePinId){const n=l.pinnedTasks.find(o=>o.id===a.sourcePinId);n&&(n.title=a.title,n.points=a.points,n.description=a.description,n.category=a.category,s.tags!=null&&(n.tags=A(s.tags)))}k()}},habitStreak(t,e){const s=l.habits.find(o=>o.id===t);if(!s)return 0;let i=e,a=0;this.habitRating(i,t)===0&&(i=I(i));let n=0;for(;a<400;){if(a+=1,!z(s.pin,i)){i=I(i);continue}if(this.habitRating(i,t)>0){n+=1,i=I(i);continue}break}return n},categoryBreakdown(t){const e=this.getDay(t),s=this.getHabits(t);return Y.map(i=>{const a=s.filter(p=>S(p.category)===i.id),n=e.tasks.filter(p=>S(p.category)===i.id),o=a.reduce((p,h)=>{const Q=this.habitRating(t,h.id);return p+Math.round(h.points*Q/5)},0),r=l.settings.showConscious!==!1,u=r?a.reduce((p,h)=>p+(this.habitRating(t,h.id)>0?H(h.consciousPoints):0),0):0,c=a.reduce((p,h)=>p+h.points,0),v=r?a.reduce((p,h)=>p+H(h.consciousPoints),0):0,T=n.reduce((p,h)=>p+(h.done?h.points:0),0),$=n.reduce((p,h)=>p+h.points,0),D=a.map(p=>this.habitRating(t,p.id)),E=D.length?Math.round(D.reduce((p,h)=>p+h,0)/D.length*10)/10:0;return{...i,habits:a,tasks:n,earned:o+u+T,max:c+v+$,habitAvg:E,consciousEarned:u,consciousMax:v,completed:a.filter(p=>this.habitRating(t,p.id)>0).length+n.filter(p=>p.done).length,total:a.length+n.length}})},removeHabit(t){l.habits=l.habits.filter(e=>e.id!==t),k()},pinHabit(t,e){const s=l.habits.find(i=>i.id===t);s&&(s.pin=O(e),k())},unpinHabit(t){const e=l.habits.find(s=>s.id===t);e&&(e.pin=null,k())},pinTask(t,e,s){const a=x(t).tasks.find(o=>o.id===e);if(!a)return;if(a.sourcePinId){const o=l.pinnedTasks.find(r=>r.id===a.sourcePinId);if(o){o.pin=O(s),k();return}}const n=`p${Date.now()}`;l.pinnedTasks.push({id:n,title:a.title,points:a.points,description:a.description||"",category:S(a.category),tags:A(a.tags),pin:O(s)}),a.sourcePinId=n,k()},unpinTaskTemplate(t){l.pinnedTasks=l.pinnedTasks.filter(e=>e.id!==t),k()},updatePinnedTask(t,e){const s=l.pinnedTasks.find(i=>i.id===t);s&&(s.pin=O(e),k())},findHabit(t){return l.habits.find(e=>e.id===t)||null},findTask(t,e){return x(t).tasks.find(s=>s.id===e)||null},findPinnedTask(t){return l.pinnedTasks.find(e=>e.id===t)||null},getGoals(){return l.goals},getBadges(){return[...l.badges].sort((t,e)=>{const s=nt(e.tier)-nt(t.tier);return s!==0?s:String(e.earnedAt).localeCompare(String(t.earnedAt))})},topBadges(t=3){return this.getBadges().slice(0,t)},addGoal(t={}){const e=tt({...t,id:`g${Date.now()}`});return l.goals.push(e),k(),this.checkGoals(M()),e},updateGoal(t,e={}){const s=l.goals.find(a=>a.id===t);if(!s)return;const i=tt({...s,...e,id:t});Object.assign(s,i),k(),this.checkGoals(M())},removeGoal(t){l.goals=l.goals.filter(e=>e.id!==t),k()},removeBadge(t){l.badges=l.badges.filter(e=>e.id!==t),k()},perfectDaysCount(){return Object.keys(l.days).filter(t=>{const e=this.scoreFor(t);return e.max>0&&e.percent===100}).length},taskStreak(t,e){let s=e,i=0;(o=>{const r=l.days[o];return!r||!Array.isArray(r.tasks)?!1:r.tasks.some(u=>u.sourcePinId===t&&u.done)})(s)||(s=I(s));let n=0;for(;i<400;){i+=1;const o=l.days[s];if(!o||!Array.isArray(o.tasks))break;if(o.tasks.some(r=>r.sourcePinId===t&&r.done)){n+=1,s=I(s);continue}break}return n},goalProgress(t,e){const s=e||M();if(t.kind==="habit-streak"){const a=this.habitStreak(t.targetId,s);return{current:a,target:t.targetDays,done:a>=t.targetDays}}if(t.kind==="task-streak"){const a=this.taskStreak(t.targetId,s);return{current:a,target:t.targetDays,done:a>=t.targetDays}}const i=this.perfectDaysCount();return{current:i,target:t.targetDays,done:i>=t.targetDays}},checkGoals(t){const e=t||M();let s=[];return l.goals.forEach(i=>{if(l.badges.some(n=>n.goalId===i.id))return;if(this.goalProgress(i,e).done){const n={id:`b${Date.now()}-${i.id}`,goalId:i.id,title:i.title,tier:i.tier,rewardTitle:i.rewardTitle,earnedAt:new Date().toISOString()};l.badges.push(n),s.push(n)}}),s.length&&k(),s},scoreFor(t){const e=this.getDay(t),s=this.getHabits(t),i=this.isLocked(t),a=l.settings.showConscious!==!1,n=s.reduce((p,h)=>{const Q=this.habitRating(t,h.id);return p+Math.round(h.points*Q/5)},0),o=a?s.reduce((p,h)=>p+(this.habitRating(t,h.id)>0?H(h.consciousPoints):0),0):0,r=e.tasks.reduce((p,h)=>p+(h.done?h.points:0),0),u=s.reduce((p,h)=>p+h.points,0),c=a?s.reduce((p,h)=>p+H(h.consciousPoints),0):0,v=e.tasks.reduce((p,h)=>p+h.points,0),T=n+o+r,$=u+c+v,D=s.filter(p=>e.habitMissed&&e.habitMissed[p.id]?!0:i&&this.habitRating(t,p.id)<=0).length,E=e.tasks.filter(p=>p.done?!1:p.missed===!0?!0:p.missed===!1?!1:i).length;return{earned:T,max:$,habitScore:n,consciousScore:o,maxConscious:c,taskScore:r,completedHabits:s.filter(p=>this.habitRating(t,p.id)>0).length,habitAvg:s.length?Math.round(s.reduce((p,h)=>p+this.habitRating(t,h.id),0)/s.length*10)/10:0,totalHabits:s.length,completedTasks:e.tasks.filter(p=>p.done).length,totalTasks:e.tasks.length,missedHabits:D,missedTasks:E,percent:$?Math.round(T/$*100):0,locked:i,submittedAt:e.submittedAt}},monthKeys(t){const e=String(t).slice(0,7);return Object.keys(l.days).filter(s=>s.startsWith(e)).sort()},rangeKeys(t,e){const s=[],i=new Date(`${t}T00:00:00`),a=new Date(`${e}T00:00:00`);let n=0;for(;i<=a&&n<732;)n+=1,s.push(M(i)),i.setDate(i.getDate()+1);return s},resolveRange(t,e){if(t==="day")return[e,e];if(t==="week"){const i=new Date(`${e}T00:00:00`),a=i.getDay(),n=a===0?-6:1-a,o=new Date(i);o.setDate(i.getDate()+n);const r=new Date(o);return r.setDate(o.getDate()+6),[M(o),M(r)]}if(t==="month"){const[i,a]=e.split("-").map(Number),n=`${i}-${String(a).padStart(2,"0")}-01`,o=new Date(i,a,0).getDate(),r=`${i}-${String(a).padStart(2,"0")}-${String(o).padStart(2,"0")}`;return[n,r]}if(t==="year"){const i=e.slice(0,4);return[`${i}-01-01`,`${i}-12-31`]}const s=Object.keys(l.days).sort();return s.length?[s[0],s[s.length-1]>e?s[s.length-1]:e]:[e,e]},exportRows(t,e){return this.rangeKeys(t,e).map(s=>{const i=this.getDay(s),a=this.getHabits(s),n=this.scoreFor(s),o=this.isLocked(s),r=(c,v)=>v>0?"done":o?"missed":"pending",u=c=>c.done?"done":o?"missed":"pending";return{date:s,earned:n.earned,max:n.max,percent:n.percent,habitScore:n.habitScore,consciousScore:n.consciousScore||0,taskScore:n.taskScore,locked:o,missedHabits:n.missedHabits||0,missedTasks:n.missedTasks||0,note:i.note||"",habits:a.map(c=>{const v=this.habitRating(s,c.id);return{name:c.name,category:F(S(c.category)),tags:A(c.tags),points:c.points,consciousPoints:this.consciousEnabled()?H(c.consciousPoints):0,rating:v,earned:Math.round(c.points*v/5)+(v>0&&this.consciousEnabled()?H(c.consciousPoints):0),status:r(c.id,v)}}),tasks:i.tasks.map(c=>({title:c.title,category:F(S(c.category)),tags:A(c.tags),points:c.points,rating:Math.max(0,Math.min(5,Number(c.rating)||0)),done:!!c.done,earned:c.done?c.points:0,status:u(c),description:c.description||""}))}})},history(t=14){return Object.keys(l.days).sort().reverse().slice(0,t).map(s=>({date:s,...this.scoreFor(s),note:l.days[s].note,locked:this.isLocked(s),submittedAt:l.days[s].submittedAt}))},week(t){const e=new Date(t),s=e.getDay(),i=s===0?-6:1-s;return e.setDate(e.getDate()+i),e.setHours(0,0,0,0),Array.from({length:7},(a,n)=>{const o=new Date(e);o.setDate(e.getDate()+n);const r=M(o);return{date:r,label:o.toLocaleDateString(void 0,{weekday:"short"}),locked:this.isLocked(r),...this.scoreFor(r)}})}};function yt(t){return t>=90?"Excellent":t>=75?"Great day":t>=50?"Keep going":t>0?"Started":"No score yet"}function R(t){return new Date(`${t}T00:00:00`).toLocaleDateString(void 0,{weekday:"long",month:"short",day:"numeric"})}function $t(t){return t?new Date(t).toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"}):""}function W(t){return t>=5?"Excellent":t>=4?"Great":t>=3?"Good":t>=2?"Fair":t>=1?"Low":"Not rated"}const Z=document.getElementById("app");let g=d.todayKey(),w="today",b=null,f=null,j=!1,V=!1;const Et=[["default","Default"],["points","Points"],["category","Category"],["tags","Tags"]];function lt(t){const e=new Date(`${g}T00:00:00`);e.setDate(e.getDate()+t),g=d.todayKey(e)}function L(t){return{home:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1z"/></svg>',week:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>',history:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 8v5l3 2"/><circle cx="12" cy="12" r="9"/></svg>',settings:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H8a1.7 1.7 0 0 0 1-1.5V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V8c.3.7.9 1.2 1.6 1.3H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1.7z"/></svg>',pin:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 4h6l-1 7 3 3v2H7v-2l3-3z" fill="currentColor" stroke="none"/><path d="M12 16v5"/></svg>',habit:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7h16M4 12h10M4 17h13"/></svg>'}[t]}function wt(t,e,s){return`
    <div class="stars" data-habit="${t}">
      ${[1,2,3,4,5].map(i=>`
            <button type="button" class="star ${i<=e?"on":""}" data-action="rate-habit" data-id="${t}" data-rating="${i}" ${s?"disabled":""} aria-label="${i} star">★</button>
          `).join("")}
    </div>
  `}function St(t,e,s){return`
    <div class="stars stars-small" data-task="${t}">
      ${[1,2,3,4,5].map(i=>`
            <button type="button" class="star small ${i<=e?"on":""}" data-action="rate-task" data-id="${t}" data-rating="${i}" ${s?"disabled":""} aria-label="${i} star">★</button>
          `).join("")}
    </div>
  `}function Tt(t){const e=Number(t)||0;return e?`<span class="conscious-badge">🧠 +${e}</span>`:'<span class="item-meta">No conscious pts</span>'}function J(t){return`<span class="cat-badge cat-${t}">${F(t)}</span>`}function B(t){const e=Array.isArray(t)?t.filter(Boolean):[];return e.length?`<div class="tag-row">${e.map(s=>`<span class="tag-chip">#${m(s)}</span>`).join("")}</div>`:""}function ut(t,e){return`
    <select class="sort-select" data-sort-kind="${t}" aria-label="Sort ${t}">
      ${Et.map(([s,i])=>`<option value="${s}" ${e===s?"selected":""}>${i}</option>`).join("")}
    </select>
  `}function Lt(t){const e=d.getBadges(),s=d.topBadges(3),i=t.max>0&&t.percent===100,a=V?e:s;return`
    <section class="section rewards-section">
      <div class="section-head">
        <h2>Rewards</h2>
        ${e.length>3?`<button class="ghost-btn compact" data-action="toggle-badges">${V?"Show less":`More (${e.length}) ›`}</button>`:""}
      </div>
      ${i?`
        <div class="trophy-card">
          <div class="trophy-cup">🏆</div>
          <div>
            <div class="item-title">Gold Cup — Perfect day!</div>
            <div class="item-meta">100% of points on ${R(g)}</div>
          </div>
        </div>
      `:""}
      ${e.length?`
        <div class="rewards-grid">
          ${a.map(n=>`
            <article class="reward-card tier-${n.tier}">
              <div class="reward-medal">${K(n.tier)}</div>
              <div>
                <div class="item-title">${m(n.rewardTitle||n.title)}</div>
                <div class="item-meta">${m(n.title)} · ${ht(n.tier)} · ${R((n.earnedAt||"").slice(0,10))}</div>
              </div>
            </article>
          `).join("")}
        </div>
      `:'<div class="empty">No rewards yet. Set a goal in Settings → Goals &amp; Rewards.</div>'}
    </section>
  `}function _(t){return`<span class="streak-badge">${t} day streak</span>`}function it(){return`<button class="ghost-btn compact ${j?"on":""}" data-action="toggle-edit">${j?"Done":"Edit Mode"}</button>`}function Rt(t){return t?'<span class="lock-badge">Locked</span>':'<span class="open-badge">Open</span>'}function Ct(){d.checkGoals(g);const t=d.getDay(g),e=d.getSettings(),s=e.showConscious!==!1,i=d.getHabits(g),a=d.getTasks(g),n=d.scoreFor(g),o=yt(n.percent),r=g===d.todayKey(),u=d.isLocked(g);return`
    <div class="topbar">
      <div>
        <p class="kicker">${r?"Today":"Daily report"}</p>
        <h1>${R(g)}</h1>
      </div>
      <div class="date-nav">
        <button class="icon-btn" data-action="prev-day" aria-label="Previous day">‹</button>
        <button class="icon-btn" data-action="next-day" aria-label="Next day">›</button>
      </div>
    </div>

    <section class="score-hero ${u?"is-locked":""}">
      <div class="score-row">
        <div>
          <div class="score-value">${n.earned}</div>
          <div class="score-unit">of ${n.max||0} points</div>
        </div>
        <div class="hero-side">
          ${Rt(u)}
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
        ${u?`Submitted${t.submittedAt?` at ${$t(t.submittedAt)}`:""}.${(n.missedHabits||0)+(n.missedTasks||0)>0?` ${(n.missedHabits||0)+(n.missedTasks||0)} missed (${n.missedHabits||0} habits, ${n.missedTasks||0} tasks) — unchecked items count as missed.`:" Nothing missed — all done."} Unlock in Settings to edit.`:`Auto-locks at ${e.lockTime}. Submit when the day is done. Unchecked items will count as missed once locked.`}
      </p>
      ${u?'<button class="ghost-btn full" data-action="goto-settings">Unlock in Settings</button>':'<button class="primary-btn full" data-action="submit-day">Submit and lock report</button>'}
      <div class="export-row">
        <span class="muted">Export:</span>
        <button class="ghost-btn compact" data-action="open-export">Excel / JSON / PDF</button>
      </div>
    </section>

    ${Lt(n)}

    <section class="section">
      <div class="section-head">
        <h2>Habits</h2>
        <div class="head-actions">
          ${ut("habit",e.habitSort||"default")}
          ${it()}
          <span class="points">+${n.habitScore}${s&&n.consciousScore?` +${n.consciousScore}🧠`:""} pts</span>
        </div>
      </div>
      <div class="list">
        ${i.length?i.map(c=>{const v=d.habitRating(g,c.id),T=v>0,$=!T&&u,D=d.habitStreak(c.id,g),E=s&&Number(c.consciousPoints)||0;return`
                    <article class="item-card ${T?"done":""} ${$?"missed":""} ${u?"is-locked":""}">
                      <button class="check" data-action="toggle-habit" data-id="${c.id}" ${u?"disabled":""}>✓</button>
                      <div>
                        <div class="item-title">${m(c.name)} ${$?'<span class="missed-badge">Missed</span>':""}</div>
                        <div class="item-meta">${J(c.category)} ${c.pin?U(c.pin):"Not pinned"} · ${v?`${v}/5 ${W(v)}`:u?"Missed":"Not rated"}</div>
                        ${s?`<div class="item-meta">${_(D)} ${Tt(E)}</div>`:`<div class="item-meta">${_(D)}</div>`}
                        ${B(c.tags)}
                        ${wt(c.id,v,u)}
                      </div>
                      <div class="item-side">
                        <div class="points">+${c.points}${E?` +${E}🧠`:""}</div>
                        <div class="mini-actions">
                          ${j?`<button class="mini-btn on" data-action="open-edit-habit" data-id="${c.id}" ${u?"disabled":""}>Edit</button>`:""}
                          <button class="mini-btn ${c.pin?"on":""}" data-action="open-pin-habit" data-id="${c.id}" ${u?"disabled":""} title="Pin habit">${L("pin")}</button>
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
          ${ut("task",e.taskSort||"default")}
          ${it()}
          <span class="points">+${n.taskScore} pts</span>
        </div>
      </div>
      <div class="list">
        ${a.length?a.map(c=>{const v=!!c.sourcePinId,T=v?d.findPinnedTask(c.sourcePinId):null,$=Math.max(0,Math.min(5,Number(c.rating)||0)),D=!c.done&&u;return`
                    <article class="item-card ${c.done?"done":""} ${D?"missed":""} ${u?"is-locked":""}">
                      <button class="check" data-action="toggle-task" data-id="${c.id}" ${u?"disabled":""}>✓</button>
                      <div>
                        <div class="item-title">${m(c.title)} ${D?'<span class="missed-badge">Missed</span>':""}</div>
                        <div class="item-meta">${J(c.category)} ${T?U(T.pin):"One-time task"} · ${c.done?"Done":u?"Missed":"Pending"} · ${$?`${$}/5 ${W($)}`:"No rating"}</div>
                        ${c.description?`<p class="item-desc">${m(c.description)}</p>`:""}
                        ${B(c.tags)}
                        ${St(c.id,$,u)}
                      </div>
                      <div class="item-side">
                        <div class="points">+${c.points}</div>
                        <div class="mini-actions">
                          ${j?`<button class="mini-btn on" data-action="open-edit-task" data-id="${c.id}" ${u?"disabled":""}>Edit</button>`:""}
                          <button class="mini-btn ${v?"on":""}" data-action="open-pin-task" data-id="${c.id}" ${u?"disabled":""} title="Pin task">${L("pin")}</button>
                          <button class="mini-btn" data-action="remove-task" data-id="${c.id}" ${u?"disabled":""}>✕</button>
                        </div>
                      </div>
                    </article>
                  `}).join(""):'<div class="empty">No tasks yet. Tap + to add one.</div>'}
      </div>
    </section>

    <section class="section">
      <div class="section-head"><h2>Day note</h2></div>
      <textarea id="day-note" placeholder="How did today go?" ${u?"disabled":""}>${m(t.note)}</textarea>
    </section>
  `}function jt(){const t=d.week(new Date(`${g}T00:00:00`)),e=t.reduce((i,a)=>i+a.earned,0),s=Math.round(e/7);return`
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
        ${t.map(i=>`
              <button class="day-cell ${i.date===g?"active":""} ${i.earned>0?"done":""}" data-action="pick-date" data-date="${i.date}">
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
                  <div class="item-title">${R(i.date)}</div>
                  <div class="item-meta">${i.locked?"Locked":"Open"} · ${i.completedHabits} habits · ${i.completedTasks} tasks${i.locked&&(i.missedHabits||0)+(i.missedTasks||0)>0?` · ❌ ${(i.missedHabits||0)+(i.missedTasks||0)} missed`:""}</div>
                </div>
                <div class="points">${i.earned} pts</div>
              </div>
              <div class="bar"><span style="width:${i.percent}%"></span></div>
            </article>
          `).join("")}
    </section>
  `}function Ot(){const t=d.history(21);return`
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
                        <div class="item-meta">${e.locked?"Locked":"Open"} · ${yt(e.percent)} · ${e.percent}%${e.locked&&(e.missedHabits||0)+(e.missedTasks||0)>0?` · ❌ ${(e.missedHabits||0)+(e.missedTasks||0)} missed`:""}</div>
                      </div>
                      <button class="ghost-btn compact" data-action="pick-date" data-date="${e.date}">Open</button>
                    </div>
                    <div class="bar"><span style="width:${e.percent}%"></span></div>
                    ${e.note?`<p class="note" style="margin-top:10px">${m(e.note)}</p>`:""}
                  </article>
                `).join(""):'<div class="empty">Complete today to start your history.</div>'}
    </div>
  `}function Bt(){const t=d.isLocked(g),e=d.consciousEnabled(),s=d.categoryBreakdown(g),i=s.reduce((n,o)=>n+o.earned,0),a=s.reduce((n,o)=>n+o.max,0);return`
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
          <div class="score-value">${i}</div>
          <div class="score-unit">of ${a||0} category points</div>
        </div>
        <div class="grade-pill">${R(g)}</div>
      </div>
      <p class="lock-hint">Habits and tasks grouped by Mentally, Psychology, Physically, and Spiritually.</p>
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
                    ${n.habits.map(r=>{const u=d.habitRating(g,r.id),c=!u&&t,v=d.habitStreak(r.id,g),T=e&&Number(r.consciousPoints)||0,$=u>0?T:0,D=Math.round(r.points*u/5)+$,E=r.points+T;return`
                          <article class="item-card ${u?"done":""} ${c?"missed":""} ${t?"is-locked":""}">
                            <button class="check" data-action="toggle-habit" data-id="${r.id}" ${t?"disabled":""}>✓</button>
                            <div>
                              <div class="item-title">${m(r.name)} ${c?'<span class="missed-badge">Missed</span>':""}</div>
                              <div class="item-meta">Habit · ${u?`${u}/5 ${W(u)}`:t?"Missed":"Not rated"} · ${_(v)}${e?` ${Tt(T)}`:""}</div>
                              ${B(r.tags)}
                              ${wt(r.id,u,t)}
                            </div>
                            <div class="item-side">
                              <div class="points">${D}/${E}</div>
                              ${j?`<button class="mini-btn on" data-action="open-edit-habit" data-id="${r.id}" ${t?"disabled":""}>Edit</button>`:""}
                            </div>
                          </article>
                        `}).join("")}
                    ${n.tasks.map(r=>{const u=Math.max(0,Math.min(5,Number(r.rating)||0)),c=!r.done&&t;return`
                          <article class="item-card ${r.done?"done":""} ${c?"missed":""} ${t?"is-locked":""}">
                            <button class="check" data-action="toggle-task" data-id="${r.id}" ${t?"disabled":""}>✓</button>
                            <div>
                              <div class="item-title">${m(r.title)} ${c?'<span class="missed-badge">Missed</span>':""}</div>
                              <div class="item-meta">Task · ${r.done?"Done":t?"Missed":"Pending"} · ${u?`${u}/5 ${W(u)}`:"No rating"}${r.description?` · ${m(r.description)}`:""}</div>
                              ${B(r.tags)}
                              ${St(r.id,u,t)}
                            </div>
                            <div class="item-side">
                              <div class="points">+${r.points}</div>
                              ${j?`<button class="mini-btn on" data-action="open-edit-task" data-id="${r.id}" ${t?"disabled":""}>Edit</button>`:""}
                            </div>
                          </article>
                        `}).join("")}
                  `:'<div class="empty">No activities in this category.</div>'}
            </div>
          </section>
        `}).join("")}
  `}function It(){const t=d.getSettings(),e=d.getAllHabits(),s=d.getPinnedTasks(),i=d.lockedReports();return`
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
        ${d.getGoals().length?d.getGoals().map(a=>{var u,c;const n=d.goalProgress(a,g),o=d.getBadges().some(v=>v.goalId===a.id),r=a.kind==="habit-streak"?((u=d.findHabit(a.targetId))==null?void 0:u.name)||"Deleted habit":a.kind==="task-streak"?((c=d.findPinnedTask(a.targetId))==null?void 0:c.title)||"Deleted task":"Any day at 100%";return`
                    <article class="manage-card goal-card ${o?"goal-earned":""}">
                      <div class="section-head">
                        <div>
                          <div class="item-title">${K(a.tier)} ${m(a.title)}</div>
                          <div class="item-meta">${ht(a.tier)} · “${m(a.rewardTitle)}” · ${m(r)}</div>
                          <div class="item-meta">${n.current}/${n.target} days ${o?"· Earned ✓":""}</div>
                          <div class="bar"><span style="width:${Math.min(100,Math.round(n.current/n.target*100))}%"></span></div>
                        </div>
                        <div class="mini-actions">
                          <button class="mini-btn on" data-action="open-edit-goal" data-id="${a.id}">Edit</button>
                          <button class="mini-btn" data-action="remove-goal" data-id="${a.id}">✕</button>
                        </div>
                      </div>
                    </article>
                  `}).join(""):'<div class="empty">No goals yet. Tap Add goal to create your first reward.</div>'}
      </div>
      ${d.getBadges().length?`
            <div class="section-head" style="margin-top:14px"><h2>Earned badges</h2></div>
            <div class="rewards-grid">
              ${d.getBadges().map(a=>`
                <article class="reward-card tier-${a.tier}">
                  <div class="reward-medal">${K(a.tier)}</div>
                  <div>
                    <div class="item-title">${m(a.rewardTitle||a.title)}</div>
                    <div class="item-meta">${m(a.title)} · ${R((a.earnedAt||"").slice(0,10))}</div>
                  </div>
                  <button class="mini-btn" data-action="remove-badge" data-id="${a.id}">✕</button>
                </article>
              `).join("")}
            </div>
          `:""}
    </section>

    <section class="section">
      <div class="section-head"><h2>Locked reports</h2></div>
      <div class="list">
        ${i.length?i.map(a=>`
                    <article class="manage-card">
                      <div class="section-head">
                        <div>
                          <div class="item-title">${R(a.date)}</div>
                          <div class="item-meta">${a.submittedAt?`Submitted ${$t(a.submittedAt)}`:"Locked"} · ${a.earned} pts</div>
                        </div>
                        <button class="ghost-btn compact" data-action="unlock-day" data-date="${a.date}">Unlock</button>
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
      <p class="muted tight">Pin a habit forever, until a date, or weekly on specific days.</p>
      <div class="habit-manage">
        ${e.length?e.map(a=>`
                    <article class="manage-card">
                      <div class="section-head">
                        <div>
                          <div class="item-title">${m(a.name)}</div>
                          <div class="item-meta">${J(a.category)} · ${a.pin?U(a.pin):"Not pinned"} · +${a.points} pts ${t.showConscious!==!1?Number(a.consciousPoints)?`· 🧠 +${a.consciousPoints}`:"· No conscious pts":""} · ${_(d.habitStreak(a.id,g))}</div>
                          ${B(a.tags)}
                        </div>
                        <div class="mini-actions">
                          <button class="mini-btn ${a.pin?"on":""}" data-action="open-pin-habit" data-id="${a.id}">${L("pin")}</button>
                          <button class="mini-btn" data-action="remove-habit" data-id="${a.id}">✕</button>
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
        ${s.length?s.map(a=>`
                    <article class="manage-card">
                      <div class="section-head">
                        <div>
                          <div class="item-title">${m(a.title)}</div>
                          <div class="item-meta">${J(a.category)} · ${U(a.pin)} · +${a.points} pts</div>
                          ${a.description?`<p class="item-desc">${m(a.description)}</p>`:""}
                          ${B(a.tags)}
                        </div>
                        <div class="mini-actions">
                          <button class="mini-btn on" data-action="open-pin-template" data-id="${a.id}">${L("pin")}</button>
                          <button class="mini-btn" data-action="unpin-template" data-id="${a.id}">✕</button>
                        </div>
                      </div>
                    </article>
                  `).join(""):'<div class="empty">Pin a task from Today to repeat it.</div>'}
      </div>
    </section>
  `}function Gt(t){const e=(t==null?void 0:t.mode)||"forever",s=(t==null?void 0:t.until)||"",i=(t==null?void 0:t.weekdays)||[];return`
    <div class="chip-row pin-modes">
      <button type="button" class="chip ${e==="forever"?"on":""}" data-action="pin-mode" data-mode="forever">Forever</button>
      <button type="button" class="chip ${e==="until"?"on":""}" data-action="pin-mode" data-mode="until">Until date</button>
      <button type="button" class="chip ${e==="weekly"?"on":""}" data-action="pin-mode" data-mode="weekly">Weekly</button>
    </div>
    <input type="hidden" name="mode" value="${e}" />
    <label class="pin-until" style="${e==="until"?"":"display:none"}">
      Until
      <input name="until" type="date" value="${s}" />
    </label>
    <div class="pin-weekdays" style="${e==="weekly"?"":"display:none"}">
      <p class="item-meta">Repeat every</p>
      <div class="chip-row">
        ${ft.map(a=>`
            <button type="button" class="chip weekday ${i.includes(a.value)?"on":""}" data-action="toggle-weekday" data-day="${a.value}">
              ${a.label}
            </button>
          `).join("")}
      </div>
    </div>
  `}function Ft(){if(!b)return"";if(b==="choose")return`
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
    `;if(b==="habit"||b==="task"||b==="edit-habit"||b==="edit-task"){const t=b==="habit"||b==="edit-habit",e=b.startsWith("edit-"),s=f||{},i=s.category||(t?"physically":"mentally"),a=Math.max(0,Math.min(5,Number(s.rating)||0)),n=Array.isArray(s.tags)?s.tags.join(", "):s.tags||"",o=s.consciousPoints!=null?Number(s.consciousPoints):s.conscious!=null?Number(s.conscious):0;return`
      <div class="modal-backdrop open" data-action="close-modal">
        <form class="sheet" data-form="${b}" data-id="${s.id||""}">
          <div class="handle"></div>
          <h2>${e?"Edit":"New"} ${t?"habit":"task"}</h2>
          <div class="form" style="margin-top:14px">
            <label>
              ${t?"Habit name":"Task name"}
              <input name="title" required maxlength="60" value="${m(s.title||s.name||"")}" placeholder="${t?"Meditate":"Finish report"}" />
            </label>
            ${t?"":`
                  <label>
                    Description (optional)
                    <textarea name="description" maxlength="240" placeholder="Why this matters, extra notes...">${m(s.description||"")}</textarea>
                  </label>
                  <div>
                    <p class="item-meta">Rating (optional, info only — does not change points)</p>
                    <div class="chip-row rating-row">
                      <button type="button" class="chip ${a===0?"on":""}" data-action="set-rating" data-rating="0">No rating</button>
                      ${[1,2,3,4,5].map(r=>`
                            <button type="button" class="chip ${a===r?"on":""}" data-action="set-rating" data-rating="${r}">${r}★</button>
                          `).join("")}
                    </div>
                    <input type="hidden" name="rating" value="${a}" />
                  </div>
                `}
            <div>
              <p class="item-meta">Category</p>
              <div class="chip-row cat-row">
                ${Y.map(r=>`
                    <button type="button" class="chip ${i===r.id?"on":""}" data-action="set-category" data-category="${r.id}">${r.label}</button>
                  `).join("")}
              </div>
              <input type="hidden" name="category" value="${i}" />
            </div>
            <label>
              Tags (optional, comma separated)
              <input name="tags" maxlength="120" value="${m(n)}" placeholder="morning, health" />
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
    `}if(b==="export"){const t=f&&f.range||"day";return`
      <div class="modal-backdrop open" data-action="close-modal">
        <div class="sheet">
          <div class="handle"></div>
          <h2>Export report</h2>
          <p class="muted tight">Date: ${R(g)}. Pick a range, then a format.</p>
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
    `}if(b==="goal"||b==="edit-goal"){const t=b==="edit-goal",e=f||{},s=e.kind||"habit-streak",i=d.getAllHabits(),a=d.getPinnedTasks(),n=e.targetId||"";return`
      <div class="modal-backdrop open" data-action="close-modal">
        <form class="sheet" data-form="${b}" data-id="${e.id||""}">
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
                ${bt.map(o=>`<button type="button" class="chip ${s===o.id?"on":""}" data-action="set-goal-kind" data-kind="${o.id}">${o.label}</button>`).join("")}
              </div>
              <input type="hidden" name="kind" value="${s}" />
            </div>
            <label class="goal-target-habit" style="${s==="habit-streak"?"":"display:none"}">
              Habit
              <select name="habitTarget">
                ${i.map(o=>`<option value="${o.id}" ${n===o.id?"selected":""}>${m(o.name)}</option>`).join("")}
              </select>
            </label>
            <label class="goal-target-task" style="${s==="task-streak"?"":"display:none"}">
              Pinned task
              <select name="taskTarget">
                ${a.length?a.map(o=>`<option value="${o.id}" ${n===o.id?"selected":""}>${m(o.title)}</option>`).join(""):'<option value="">No pinned tasks yet</option>'}
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
              <input name="rewardTitle" required maxlength="60" value="${m(e.rewardTitle||"")}" placeholder="Champion" />
            </label>
            <button class="primary-btn" type="submit">Save goal</button>
            <button class="ghost-btn" type="button" data-action="close-modal">Cancel</button>
          </div>
        </form>
      </div>
    `}if(b==="pin"){const{kind:t,id:e,title:s,pin:i}=f||{};return`
      <div class="modal-backdrop open" data-action="close-modal">
        <form class="sheet" data-form="pin" data-kind="${t}" data-id="${e}">
          <div class="handle"></div>
          <h2>Pin ${t==="habit"?"habit":"task"}</h2>
          <p class="muted tight">${m(s||"")}</p>
          <div class="form" style="margin-top:14px">
            ${Gt(i)}
            <button class="primary-btn" type="submit">Save pin</button>
            ${i?'<button class="ghost-btn danger" type="button" data-action="clear-pin">Unpin</button>':""}
            <button class="ghost-btn" type="button" data-action="close-modal">Cancel</button>
          </div>
        </form>
      </div>
    `}return""}function P(){if(Z)try{const t=d.isLocked(g);Z.innerHTML=`
    <div class="app-shell">
      <main class="screen active">
        ${w==="today"?Ct():""}
        ${w==="week"?jt():""}
        ${w==="history"?Ot():""}
        ${w==="habits"?Bt():""}
        ${w==="settings"?It():""}
      </main>
      ${["today","habits"].includes(w)&&!t?'<button class="fab" data-action="open-add" aria-label="Add">+</button>':""}
      ${w==="settings"?'<button class="fab" data-action="open-add-habit" aria-label="Add habit">+</button>':""}
      <nav class="tabbar tabs-5">
        <button class="tab ${w==="today"?"active":""}" data-screen="today">${L("home")}Today</button>
        <button class="tab ${w==="week"?"active":""}" data-screen="week">${L("week")}Week</button>
        <button class="tab ${w==="history"?"active":""}" data-screen="history">${L("history")}History</button>
        <button class="tab ${w==="habits"?"active":""}" data-screen="habits">${L("habit")}Activities</button>
        <button class="tab ${w==="settings"?"active":""}" data-screen="settings">${L("settings")}Settings</button>
      </nav>
    </div>
    ${Ft()}
    <div class="toast" id="toast"></div>
  `,qt(),zt()}catch(t){const e=t&&t.stack?String(t.stack).slice(0,400):t&&t.message?t.message:"Unknown error";Z.innerHTML=`<div class="app-shell"><section class="manage-card"><h2>Could not load (Error B)</h2><p class="muted tight">${m(e)}</p><button class="primary-btn full" data-action="reload-app">Reload</button></section></div>`}}function qt(){const t=document.getElementById("day-note");t&&t.addEventListener("input",()=>{d.isLocked(g)||d.setNote(g,t.value)})}function zt(){const t=document.getElementById("lock-time"),e=document.getElementById("auto-lock");t&&t.addEventListener("change",()=>{d.setLockTime(t.value),y(`Lock time set to ${t.value}`),P()}),e&&e.addEventListener("change",()=>{d.setAutoLock(e.checked),y(e.checked?"Auto-lock on":"Auto-lock off"),P()})}function y(t){const e=document.getElementById("toast");e&&(e.textContent=t,e.classList.add("show"),setTimeout(()=>e.classList.remove("show"),1800))}function m(t){return String(t||"").split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;").split('"').join("&quot;")}function N(){return d.isLocked(g)?(y("This report is locked. Unlock it in Settings."),!0):!1}function Ut(t){const e=d.findHabit(t);e&&(b="pin",f={kind:"habit",id:t,title:e.name,pin:e.pin})}function Wt(t){const e=d.findTask(g,t);if(!e)return;const s=e.sourcePinId?d.findPinnedTask(e.sourcePinId):null;b="pin",f={kind:"task",id:t,title:e.title,pin:s?s.pin:null}}function Vt(t){const e=d.findPinnedTask(t);e&&(b="pin",f={kind:"template",id:t,title:e.title,pin:e.pin})}function Jt(t){var a;const e=t.querySelector('input[name="mode"]').value,s=((a=t.querySelector('input[name="until"]'))==null?void 0:a.value)||"",i=[...t.querySelectorAll(".weekday.on")].map(n=>Number(n.dataset.day));return e==="until"&&!s?(y("Pick an until date"),null):e==="weekly"&&!i.length?(y("Pick at least one weekday"),null):{mode:e,until:s,weekdays:i}}function xt(t,e,s){const i=e instanceof Blob?e:new Blob([e],{type:s||"text/plain;charset=utf-8"}),a=URL.createObjectURL(i),n=document.createElement("a");n.href=a,n.download=t,document.body.appendChild(n),n.click(),setTimeout(()=>{document.body.removeChild(n),URL.revokeObjectURL(a)},500)}function G(t){const e=String(t??"");return/[",\n]/.test(e)?`"${e.replace(/"/g,'""')}"`:e}function at(t){const[e,s]=d.resolveRange(t,g);return{range:t,start:e,end:s,rows:d.exportRows(e,s)}}function _t(){const t=f&&f.range||"day",{start:e,end:s,rows:i}=at(t),a=[];a.push(["Daily Report export",`${e} to ${s}`].map(G).join(",")),a.push(["Date","Type","Name","Category","Tags","Points","Rating","Earned","ConsciousPts","Status","Note/Description"].map(G).join(",")),i.forEach(n=>{n.habits.forEach(o=>{a.push([n.date,"Habit",o.name,o.category,(o.tags||[]).join("|"),o.points,o.rating,o.earned,o.consciousPoints,o.status||(o.rating>0?"done":n.locked?"missed":"pending"),""].map(G).join(","))}),n.tasks.forEach(o=>{a.push([n.date,"Task",o.title,o.category,(o.tags||[]).join("|"),o.points,o.rating||"",o.earned,"",o.status||(o.done?"done":n.locked?"missed":"pending"),o.description||""].map(G).join(","))}),a.push([n.date,"Summary",`Earned ${n.earned}/${n.max} (${n.percent}%)`,"","","","","","",n.locked?"locked":"open",n.note||""].map(G).join(","))}),xt(`daily-report-${t}-${e}-to-${s}.csv`,"\uFEFF"+a.join(`
`),"text/csv;charset=utf-8"),y("Excel (CSV) exported")}function Yt(){const t=f&&f.range||"day",{start:e,end:s,rows:i}=at(t),a={app:"Daily Report",exportedAt:new Date().toISOString(),range:t,start:e,end:s,days:i};xt(`daily-report-${t}-${e}-to-${s}.json`,JSON.stringify(a,null,2),"application/json"),y("JSON exported")}function Qt(){const t=f&&f.range||"day",{start:e,end:s,rows:i}=at(t),a=i.map(o=>`
        <section style="margin-bottom:18px;border:1px solid #ddd;border-radius:12px;padding:12px">
          <h2 style="margin:0 0 4px;font-size:16px">${m(o.date)} — ${o.earned}/${o.max} pts (${o.percent}%)</h2>
          <p style="margin:0 0 8px;font-size:12px;color:#555">Habits ${o.habitScore} + Conscious ${o.consciousScore} + Tasks ${o.taskScore} · ${o.locked?"Locked":"Open"}${o.note?` · Note: ${m(o.note)}`:""}</p>
          <table style="width:100%;border-collapse:collapse;font-size:12px">
            <thead><tr><th align="left">Type</th><th align="left">Name</th><th align="left">Category</th><th>Points</th><th>Rating</th><th>Earned</th><th>Status</th></tr></thead>
            <tbody>
              ${o.habits.map(r=>`<tr><td>Habit</td><td>${m(r.name)}</td><td>${m(r.category)}</td><td align="center">${r.points}${r.consciousPoints?`+${r.consciousPoints}🧠`:""}</td><td align="center">${r.rating||"-"}/5</td><td align="center">${r.earned}</td><td align="center">${r.status||(r.rating>0?"done":o.locked?"missed":"pending")}</td></tr>`).join("")}
              ${o.tasks.map(r=>`<tr><td>Task</td><td>${m(r.title)}${r.description?` (${m(r.description)})`:""}</td><td>${m(r.category)}</td><td align="center">${r.points}</td><td align="center">${r.rating?`${r.rating}/5`:"-"}</td><td align="center">${r.earned}</td><td align="center">${r.status||(r.done?"done":o.locked?"missed":"pending")}</td></tr>`).join("")}
            </tbody>
          </table>
        </section>
      `).join(""),n=window.open("","_blank");if(!n){y("Popup blocked — allow popups to export PDF");return}n.document.write(`<!DOCTYPE html><html><head><title>Daily Report ${e} to ${s}</title></head><body style="font-family:sans-serif;padding:24px"><h1>Daily Report — ${e} to ${s}</h1>${a}<script>window.onload=function(){window.print()}<\/script></body></html>`),n.document.close(),y("PDF print view opened")}document.addEventListener("click",t=>{const e=t.target.closest("[data-screen]");if(e){w=e.dataset.screen,P();return}const s=t.target.closest("[data-action]");if(!s)return;const i=s.dataset.action;if(i==="close-modal"){(t.target.classList.contains("modal-backdrop")||s.classList.contains("ghost-btn"))&&(b=null,f=null,P());return}if(i==="prev-day"&&lt(-1),i==="next-day"&&lt(1),i==="reload-app"){window.location.reload();return}if(i==="goto-settings"&&(w="settings"),i==="open-add-habit"&&(b="habit",f=null),i==="open-add-task"){if(N())return;b="task",f={category:"mentally"}}if(i==="open-add"){if(N())return;b="choose",f={category:"mentally"}}if(i==="toggle-edit"&&(j=!j),i==="open-edit-habit"){const a=d.findHabit(s.dataset.id);if(!a)return;b="edit-habit",f={id:a.id,name:a.name,points:a.points,category:a.category,tags:a.tags||[],consciousPoints:Number(a.consciousPoints)||0}}if(i==="open-edit-task"){if(N())return;const a=d.findTask(g,s.dataset.id);if(!a)return;b="edit-task",f={id:a.id,title:a.title,points:a.points,description:a.description,category:a.category,tags:a.tags||[],rating:Number(a.rating)||0}}if(i==="toggle-badges"&&(V=!V),i==="open-goal"&&(b="goal",f={kind:"habit-streak",targetDays:7,tier:"bronze"}),i==="open-edit-goal"){const a=d.getGoals().find(n=>n.id===s.dataset.id);if(!a)return;b="edit-goal",f={...a}}if(i==="remove-goal"&&(d.removeGoal(s.dataset.id),y("Goal removed")),i==="remove-badge"&&(d.removeBadge(s.dataset.id),y("Badge removed")),i==="rate-habit"){if(N())return;const n=d.habitRating(g,s.dataset.id)===Number(s.dataset.rating)?0:Number(s.dataset.rating);d.setHabitRating(g,s.dataset.id,n)}if(i==="rate-task"){if(N())return;const a=d.findTask(g,s.dataset.id);if(!a)return;const o=(Number(a.rating)||0)===Number(s.dataset.rating)?0:Number(s.dataset.rating);d.setTaskRating(g,s.dataset.id,o)}if(i==="open-export"&&(b="export",f={range:f&&f.range||"day"}),i==="set-export-range"){b="export",f={range:s.dataset.range||"day"},P();return}if(i==="do-export"){const a=s.dataset.format;a==="csv"&&_t(),a==="json"&&Yt(),a==="pdf"&&Qt(),b=null,f=null}if(i==="submit-day"&&(d.submitDay(g),y("Report submitted and locked")),i==="unlock-day"&&(d.unlockDay(s.dataset.date),y("Report unlocked")),i==="toggle-habit"){if(N())return;d.toggleHabit(g,s.dataset.id)}if(i==="toggle-task"){if(N())return;d.toggleTask(g,s.dataset.id)}if(i==="remove-task"){if(N())return;d.removeTask(g,s.dataset.id)}if(i==="remove-habit"&&d.removeHabit(s.dataset.id),i==="open-pin-habit"&&Ut(s.dataset.id),i==="open-pin-task"){if(N())return;Wt(s.dataset.id)}if(i==="open-pin-template"&&Vt(s.dataset.id),i==="unpin-template"&&(d.unpinTaskTemplate(s.dataset.id),y("Task unpinned")),i==="pick-date"&&(g=s.dataset.date,w="today"),i==="set-points"){const a=document.querySelector('input[name="points"]');a&&(a.value=s.dataset.points),document.querySelectorAll(".chip-row .chip[data-points]").forEach(n=>n.classList.remove("on")),s.classList.add("on");return}if(i==="set-category"){const a=s.closest("form")||s.closest(".sheet"),n=a.querySelector('input[name="category"]');n&&(n.value=s.dataset.category),a.querySelectorAll(".cat-row .chip").forEach(o=>o.classList.remove("on")),s.classList.add("on");return}if(i==="set-rating"){const a=s.closest(".sheet")||s.closest("form")||document,n=a.querySelector('input[name="rating"]');n&&(n.value=s.dataset.rating),a.querySelectorAll(".rating-row .chip").forEach(o=>o.classList.remove("on")),s.classList.add("on");return}if(i==="set-conscious"){const a=s.closest(".sheet")||s.closest("form")||document,n=a.querySelector('input[name="consciousPoints"]');n&&(n.value=s.dataset.conscious),a.querySelectorAll(".conscious-row .chip").forEach(o=>o.classList.remove("on")),s.classList.add("on");return}if(i==="set-goal-kind"){const a=s.closest(".sheet")||document,n=a.querySelector('input[name="kind"]');n&&(n.value=s.dataset.kind),a.querySelectorAll(".goal-kind-row .chip").forEach(c=>c.classList.remove("on")),s.classList.add("on");const o=s.dataset.kind,r=a.querySelector(".goal-target-habit"),u=a.querySelector(".goal-target-task");r&&(r.style.display=o==="habit-streak"?"":"none"),u&&(u.style.display=o==="task-streak"?"":"none"),f&&(f.kind=o);return}if(i==="set-goal-tier"){const a=s.closest(".sheet")||document,n=a.querySelector('input[name="tier"]');n&&(n.value=s.dataset.tier),a.querySelectorAll(".goal-tier-row .chip").forEach(o=>o.classList.remove("on")),s.classList.add("on");return}if(i==="pin-mode"){const a=s.closest("form");a.querySelector('input[name="mode"]').value=s.dataset.mode,a.querySelectorAll(".pin-modes .chip").forEach(n=>n.classList.remove("on")),s.classList.add("on"),a.querySelector(".pin-until").style.display=s.dataset.mode==="until"?"":"none",a.querySelector(".pin-weekdays").style.display=s.dataset.mode==="weekly"?"":"none";return}if(i==="toggle-weekday"){s.classList.toggle("on");return}if(i==="clear-pin"){const a=s.closest("form"),n=a.dataset.kind,o=a.dataset.id;if(n==="habit"&&d.unpinHabit(o),n==="task"){const r=d.findTask(g,o);r!=null&&r.sourcePinId&&d.unpinTaskTemplate(r.sourcePinId)}n==="template"&&d.unpinTaskTemplate(o),b=null,f=null,y("Unpinned"),P();return}P()});document.addEventListener("submit",t=>{const e=t.target.closest("[data-form]");if(!e)return;t.preventDefault();const s=e.dataset.form;if(s==="habit"||s==="task"||s==="edit-habit"||s==="edit-task"){const i=new FormData(e),a=String(i.get("title")||""),n=Number(i.get("points")||0),o=String(i.get("category")||"mentally"),r=String(i.get("description")||""),u=String(i.get("tags")||""),c=Math.max(0,Math.min(5,Number(i.get("rating")||0))),v=Math.max(0,Math.min(100,Number(i.get("consciousPoints")||0)));if(!a.trim())return;if(s==="habit")d.addHabit(a,n,{category:o,consciousPoints:v,tags:u}),y("Habit added");else if(s==="task"){if(N())return;d.addTask(g,a,n,{description:r,category:o,rating:c,tags:u}),y("Task added")}else if(s==="edit-habit")d.updateHabit(e.dataset.id,{name:a,points:n,category:o,consciousPoints:v,tags:u}),y("Habit updated");else{if(N())return;d.updateTask(g,e.dataset.id,{title:a,points:n,description:r,category:o,rating:c,tags:u}),y("Task updated")}b=null,f=null,P();return}if(s==="pin"){const i=Jt(e);if(!i)return;const a=e.dataset.kind,n=e.dataset.id;a==="habit"&&d.pinHabit(n,i),a==="task"&&d.pinTask(g,n,i),a==="template"&&d.updatePinnedTask(n,i),b=null,f=null,y("Pin saved"),P();return}if(s==="goal"||s==="edit-goal"){const i=new FormData(e),a=String(i.get("title")||"").trim(),n=String(i.get("kind")||"habit-streak"),o=String(i.get("tier")||"bronze"),r=String(i.get("rewardTitle")||"").trim(),u=Math.max(1,Math.min(365,Number(i.get("targetDays")||7)));if(!a||!r){y("Goal title and reward title are required");return}let c="";if(n==="habit-streak"&&(c=String(i.get("habitTarget")||"")),n==="task-streak"&&(c=String(i.get("taskTarget")||"")),(n==="habit-streak"||n==="task-streak")&&!c){y(n==="habit-streak"?"Pick a habit":"Pin a task first, then pick it");return}s==="goal"?(d.addGoal({title:a,kind:n,targetId:c,targetDays:u,tier:o,rewardTitle:r}),y("Goal added")):(d.updateGoal(e.dataset.id,{title:a,kind:n,targetId:c,targetDays:u,tier:o,rewardTitle:r}),y("Goal updated"));const v=d.checkGoals(g);v.length&&y(`🏅 Reward earned: ${v[0].rewardTitle}!`),b=null,f=null,P()}});document.addEventListener("change",t=>{const e=t.target.closest(".sort-select");if(e){const s=e.dataset.sortKind;s==="habit"&&d.setHabitSort(e.value),s==="task"&&d.setTaskSort(e.value),P()}t.target&&t.target.id==="show-conscious"&&(d.setShowConscious(t.target.checked),y(t.target.checked?"Conscious points on":"Conscious points hidden"),P())});"serviceWorker"in navigator&&(navigator.serviceWorker.getRegistrations().then(t=>{t.forEach(e=>e.unregister())}).catch(()=>{}),"caches"in window&&caches.keys().then(t=>Promise.all(t.map(e=>caches.delete(e)))).catch(()=>{}));function Xt(){const t=document.getElementById("boot-error");t&&(t.style.display="none")}Xt();P();
