(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function a(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=a(i);fetch(i.href,n)}})();const ct="daily-report-v2",J=[{id:"mentally",label:"Mentally"},{id:"psychology",label:"Psychology"},{id:"physically",label:"Physically"},{id:"spiritually",label:"Spiritually"}],St=J.map(t=>t.id),lt=[{id:"h1",name:"Wake up early",points:10,icon:"sunrise",category:"physically",pin:{mode:"forever"}},{id:"h2",name:"Drink water",points:5,icon:"drop",category:"physically",pin:{mode:"forever"}},{id:"h3",name:"Exercise",points:15,icon:"bolt",category:"physically",pin:{mode:"forever"}},{id:"h4",name:"Read 20 minutes",points:10,icon:"book",category:"mentally",pin:{mode:"forever"}},{id:"h5",name:"No junk food",points:10,icon:"leaf",category:"physically",pin:{mode:"forever"}}],ut={lockTime:"21:00",autoLock:!0,showConscious:!0,habitSort:"default",taskSort:"default"},F=[{id:"iron",label:"Iron",medal:"🥉",rank:1},{id:"bronze",label:"Bronze",medal:"🥉",rank:2},{id:"silver",label:"Silver",medal:"🥈",rank:3},{id:"gold",label:"Gold",medal:"🥇",rank:4}],pt=[{id:"habit-streak",label:"Habit streak"},{id:"task-streak",label:"Pinned task streak"},{id:"perfect-days",label:"Perfect days (100%)"}];function et(t){var e;return((e=F.find(a=>a.id===t))==null?void 0:e.rank)||0}function Q(t){var e;return((e=F.find(a=>a.id===t))==null?void 0:e.medal)||"🏅"}function gt(t){var e;return((e=F.find(a=>a.id===t))==null?void 0:e.label)||t||"Badge"}function N(t){const e=Array.isArray(t)?t:String(t||"").split(","),a=[];return e.forEach(s=>{const i=String(s||"").trim().slice(0,20);i&&!a.some(n=>n.toLowerCase()===i.toLowerCase())&&a.push(i),a.length>=10}),a.slice(0,10)}function at(t,e){const a=[...t];return e==="points"?a.sort((s,i)=>(Number(i.points)||0)-(Number(s.points)||0)):e==="category"?a.sort((s,i)=>G(T(s.category)).localeCompare(G(T(i.category)))):e==="tags"&&a.sort((s,i)=>(s.tags&&s.tags[0]||"~~~").localeCompare(i.tags&&i.tags[0]||"~~~")),a}const mt=[{value:1,label:"Mon"},{value:2,label:"Tue"},{value:3,label:"Wed"},{value:4,label:"Thu"},{value:5,label:"Fri"},{value:6,label:"Sat"},{value:0,label:"Sun"}];function E(t=new Date){const e=t.getFullYear(),a=String(t.getMonth()+1).padStart(2,"0"),s=String(t.getDate()).padStart(2,"0");return`${e}-${a}-${s}`}function ht(){return{habits:{},habitRatings:{},tasks:[],note:"",locked:!1,lockOverride:null,submittedAt:null}}function T(t){return St.includes(t)?t:"mentally"}function G(t){var e;return((e=J.find(a=>a.id===t))==null?void 0:e.label)||"Mentally"}function it(t){const e=Math.max(0,Math.min(5,Number(t.rating)||0));return{...t,description:t.description||"",category:T(t.category),tags:N(t.tags),rating:e}}function L(t){const e=Number(t);return!Number.isFinite(e)||e<0?0:Math.min(100,Math.round(e))}function j(t){return!t||!t.mode?null:{mode:t.mode,until:t.until||"",weekdays:Array.isArray(t.weekdays)?t.weekdays.map(Number):[]}}function Tt(t,e){const a=`${t} ${e}`.toLowerCase();return a.includes("read")||a.includes("study")||a.includes("learn")?"mentally":a.includes("meditat")||a.includes("pray")||a.includes("journal")?"spiritually":a.includes("mood")||a.includes("calm")||a.includes("therapy")?"psychology":"physically"}function X(t){const e=pt.some(a=>a.id===t.kind)?t.kind:"habit-streak";return{id:String(t.id||`g${Date.now()}`),title:String(t.title||"").trim().slice(0,60)||"My goal",kind:e,targetId:String(t.targetId||""),targetDays:Math.max(1,Math.min(365,Number(t.targetDays)||7)),tier:F.some(a=>a.id===t.tier)?t.tier:"bronze",rewardTitle:String(t.rewardTitle||"").trim().slice(0,60)||"Reward",createdAt:t.createdAt||new Date().toISOString()}}function xt(t){const e=(Array.isArray(t.habits)&&t.habits.length?t.habits:lt).map(s=>({...s,category:T(s.category||Tt(s.id,s.name)),consciousPoints:L(s.consciousPoints),tags:N(s.tags),pin:j(s.pin)})),a={};return Object.entries(t.days||{}).forEach(([s,i])=>{a[s]={...ht(),habits:i.habits||{},habitRatings:i.habitRatings||{},tasks:Array.isArray(i.tasks)?i.tasks.map(it):[],note:i.note||"",locked:!!i.locked,lockOverride:i.lockOverride||(i.locked?"locked":null),submittedAt:i.submittedAt||null}}),{habits:e,pinnedTasks:Array.isArray(t.pinnedTasks)?t.pinnedTasks.map(s=>({...it(s),pin:j(s.pin)})):[],days:a,goals:Array.isArray(t.goals)?t.goals.map(X):[],badges:Array.isArray(t.badges)?t.badges.filter(s=>s&&s.id&&s.goalId).map(s=>({id:String(s.id),goalId:String(s.goalId),title:String(s.title||""),tier:s.tier||"bronze",rewardTitle:String(s.rewardTitle||""),earnedAt:s.earnedAt||new Date().toISOString()})):[],settings:{lockTime:t.settings&&t.settings.lockTime||ut.lockTime,autoLock:!t.settings||t.settings.autoLock!==!1,showConscious:!t.settings||t.settings.showConscious!==!1,habitSort:["default","points","category","tags"].includes(t.settings&&t.settings.habitSort)?t.settings.habitSort:"default",taskSort:["default","points","category","tags"].includes(t.settings&&t.settings.taskSort)?t.settings.taskSort:"default"}}}function st(){return{habits:lt.map(t=>({...t,tags:[]})),pinnedTasks:[],days:{},goals:[],badges:[],settings:{...ut}}}function Dt(){try{const t=localStorage.getItem(ct)||localStorage.getItem("daily-report-v1");return t?xt(JSON.parse(t)):st()}catch{return st()}}let c=Dt();function b(){try{localStorage.setItem(ct,JSON.stringify(c))}catch{}}function Pt(t){return new Date(`${t}T00:00:00`).getDay()}function B(t){const e=new Date(`${t}T00:00:00`);return e.setDate(e.getDate()-1),E(e)}function Z(t,e){return!t||t.mode==="forever"?!0:t.mode==="until"?!!t.until&&e<=t.until:t.mode==="weekly"?Array.isArray(t.weekdays)&&t.weekdays.includes(Pt(e)):!0}function q(t){if(!t)return"Not pinned";if(t.mode==="forever")return"Pinned forever";if(t.mode==="until")return t.until?`Pinned until ${t.until}`:"Pinned until a date";if(t.mode==="weekly"){const e=Array.isArray(t.weekdays)?t.weekdays:[],a=mt.filter(s=>e.includes(s.value)).map(s=>s.label);return a.length?`Weekly: ${a.join(", ")}`:"Weekly (no days)"}return"Pinned"}function nt(t){const[e,a]=(c.settings.lockTime||"21:00").split(":").map(Number),s=new Date(`${t}T00:00:00`);return s.setHours(e||0,a||0,0,0),s}function ot(t){const e=x(t);return e.lockOverride==="unlocked"?!1:e.lockOverride==="locked"||e.locked?!0:c.settings.autoLock&&Date.now()>=nt(t).getTime()?(e.locked=!0,e.lockOverride="locked",e.submittedAt=e.submittedAt||nt(t).toISOString(),b(),!0):!1}function x(t){return c.days[t]||(c.days[t]=ht()),c.days[t]}function At(t){const e=x(t);let a=!1;return c.pinnedTasks.forEach(s=>{Z(s.pin,t)&&(e.tasks.some(i=>i.sourcePinId===s.id)||(e.tasks.push({id:`ptask-${s.id}-${t}`,title:s.title,points:s.points,description:s.description||"",category:T(s.category),tags:N(s.tags),rating:0,done:!1,sourcePinId:s.id}),a=!0))}),a&&b(),e}function M(t){return!d.isLocked(t)}const d={todayKey:E,getSettings(){return c.settings},setLockTime(t){c.settings.lockTime=t||"21:00",b()},setAutoLock(t){c.settings.autoLock=!!t,b()},setShowConscious(t){c.settings.showConscious=!!t,b()},consciousEnabled(){return c.settings.showConscious!==!1},setHabitSort(t){c.settings.habitSort=["default","points","category","tags"].includes(t)?t:"default",b()},setTaskSort(t){c.settings.taskSort=["default","points","category","tags"].includes(t)?t:"default",b()},getHabits(t,e){const s=c.habits.filter(n=>t?Z(n.pin,t):!0).sort((n,o)=>+!!o.pin-+!!n.pin),i=e||c.settings.habitSort||"default";return i==="default"?s:at(s,i)},getTasks(t,e){const a=this.getDay(t),s=e||c.settings.taskSort||"default";return s==="default"?a.tasks:at(a.tasks,s)},getAllHabits(){return c.habits},getPinnedTasks(){return c.pinnedTasks},getDay(t){return ot(t),At(t)},isLocked(t){return ot(t)},submitDay(t){const e=x(t);e.locked=!0,e.lockOverride="locked",e.submittedAt=new Date().toISOString(),b(),this.checkGoals(t)},unlockDay(t){const e=x(t);e.locked=!1,e.lockOverride="unlocked",b()},lockDay(t){this.submitDay(t)},lockedReports(){return Object.keys(c.days).sort().reverse().filter(t=>this.isLocked(t)).map(t=>({date:t,submittedAt:c.days[t].submittedAt,...this.scoreFor(t)}))},habitRating(t,e){const a=c.days[t];return a?a.habitRatings&&a.habitRatings[e]!=null?Number(a.habitRatings[e])||0:a.habits&&a.habits[e]?5:0:0},setHabitRating(t,e,a){if(!M(t))return;const s=x(t),i=Math.max(0,Math.min(5,Number(a)||0));s.habitRatings[e]=i,s.habits[e]=i>0,b(),this.checkGoals(t)},toggleHabit(t,e){if(!M(t))return;const a=this.habitRating(t,e)>0?0:5;this.setHabitRating(t,e,a)},addTask(t,e,a,s={}){if(!M(t))return;x(t).tasks.push({id:`t${Date.now()}`,title:e.trim(),points:Number(a)||5,description:String(s.description||"").trim(),category:T(s.category),tags:N(s.tags),rating:Math.max(0,Math.min(5,Number(s.rating)||0)),done:!1}),b(),this.checkGoals(t)},setTaskRating(t,e,a){if(!M(t))return;const i=x(t).tasks.find(o=>o.id===e);if(!i)return;const n=Math.max(0,Math.min(5,Number(a)||0));i.rating=n,b()},toggleTask(t,e){if(!M(t))return;const s=x(t).tasks.find(i=>i.id===e);s&&(s.done=!s.done,b(),this.checkGoals(t))},removeTask(t,e){if(!M(t))return;const a=x(t);a.tasks=a.tasks.filter(s=>s.id!==e),b()},setNote(t,e){M(t)&&(x(t).note=e,b())},addHabit(t,e,a={}){c.habits.push({id:`h${Date.now()}`,name:t.trim(),points:Number(e)||10,icon:"star",category:T(a.category||"physically"),consciousPoints:L(a.consciousPoints),tags:N(a.tags),pin:{mode:"forever",until:"",weekdays:[]}}),b()},updateHabit(t,e){const a=c.habits.find(s=>s.id===t);a&&(e.name!=null&&(a.name=String(e.name).trim()||a.name),e.points!=null&&(a.points=Number(e.points)||a.points),e.category!=null&&(a.category=T(e.category)),e.consciousPoints!=null&&(a.consciousPoints=L(e.consciousPoints)),e.tags!=null&&(a.tags=N(e.tags)),b())},updateTask(t,e,a){if(!M(t))return;const i=x(t).tasks.find(n=>n.id===e);if(i){if(a.title!=null&&(i.title=String(a.title).trim()||i.title),a.points!=null&&(i.points=Number(a.points)||i.points),a.description!=null&&(i.description=String(a.description).trim()),a.category!=null&&(i.category=T(a.category)),a.tags!=null&&(i.tags=N(a.tags)),a.rating!=null&&(i.rating=Math.max(0,Math.min(5,Number(a.rating)||0))),i.sourcePinId){const n=c.pinnedTasks.find(o=>o.id===i.sourcePinId);n&&(n.title=i.title,n.points=i.points,n.description=i.description,n.category=i.category,a.tags!=null&&(n.tags=N(a.tags)))}b()}},habitStreak(t,e){const a=c.habits.find(o=>o.id===t);if(!a)return 0;let s=e,i=0;this.habitRating(s,t)===0&&(s=B(s));let n=0;for(;i<400;){if(i+=1,!Z(a.pin,s)){s=B(s);continue}if(this.habitRating(s,t)>0){n+=1,s=B(s);continue}break}return n},categoryBreakdown(t){const e=this.getDay(t),a=this.getHabits(t);return J.map(s=>{const i=a.filter($=>T($.category)===s.id),n=e.tasks.filter($=>T($.category)===s.id),o=i.reduce(($,w)=>{const wt=this.habitRating(t,w.id);return $+Math.round(w.points*wt/5)},0),r=c.settings.showConscious!==!1,l=r?i.reduce(($,w)=>$+(this.habitRating(t,w.id)>0?L(w.consciousPoints):0),0):0,u=i.reduce(($,w)=>$+w.points,0),f=r?i.reduce(($,w)=>$+L(w.consciousPoints),0):0,P=n.reduce(($,w)=>$+(w.done?w.points:0),0),v=n.reduce(($,w)=>$+w.points,0),y=i.map($=>this.habitRating(t,$.id)),_=y.length?Math.round(y.reduce(($,w)=>$+w,0)/y.length*10)/10:0;return{...s,habits:i,tasks:n,earned:o+l+P,max:u+f+v,habitAvg:_,consciousEarned:l,consciousMax:f,completed:i.filter($=>this.habitRating(t,$.id)>0).length+n.filter($=>$.done).length,total:i.length+n.length}})},removeHabit(t){c.habits=c.habits.filter(e=>e.id!==t),b()},pinHabit(t,e){const a=c.habits.find(s=>s.id===t);a&&(a.pin=j(e),b())},unpinHabit(t){const e=c.habits.find(a=>a.id===t);e&&(e.pin=null,b())},pinTask(t,e,a){const i=x(t).tasks.find(o=>o.id===e);if(!i)return;if(i.sourcePinId){const o=c.pinnedTasks.find(r=>r.id===i.sourcePinId);if(o){o.pin=j(a),b();return}}const n=`p${Date.now()}`;c.pinnedTasks.push({id:n,title:i.title,points:i.points,description:i.description||"",category:T(i.category),tags:N(i.tags),pin:j(a)}),i.sourcePinId=n,b()},unpinTaskTemplate(t){c.pinnedTasks=c.pinnedTasks.filter(e=>e.id!==t),b()},updatePinnedTask(t,e){const a=c.pinnedTasks.find(s=>s.id===t);a&&(a.pin=j(e),b())},findHabit(t){return c.habits.find(e=>e.id===t)||null},findTask(t,e){return x(t).tasks.find(a=>a.id===e)||null},findPinnedTask(t){return c.pinnedTasks.find(e=>e.id===t)||null},getGoals(){return c.goals},getBadges(){return[...c.badges].sort((t,e)=>{const a=et(e.tier)-et(t.tier);return a!==0?a:String(e.earnedAt).localeCompare(String(t.earnedAt))})},topBadges(t=3){return this.getBadges().slice(0,t)},addGoal(t={}){const e=X({...t,id:`g${Date.now()}`});return c.goals.push(e),b(),this.checkGoals(E()),e},updateGoal(t,e={}){const a=c.goals.find(i=>i.id===t);if(!a)return;const s=X({...a,...e,id:t});Object.assign(a,s),b(),this.checkGoals(E())},removeGoal(t){c.goals=c.goals.filter(e=>e.id!==t),b()},removeBadge(t){c.badges=c.badges.filter(e=>e.id!==t),b()},perfectDaysCount(){return Object.keys(c.days).filter(t=>{const e=this.scoreFor(t);return e.max>0&&e.percent===100}).length},taskStreak(t,e){let a=e,s=0;(o=>{const r=c.days[o];return!r||!Array.isArray(r.tasks)?!1:r.tasks.some(l=>l.sourcePinId===t&&l.done)})(a)||(a=B(a));let n=0;for(;s<400;){s+=1;const o=c.days[a];if(!o||!Array.isArray(o.tasks))break;if(o.tasks.some(r=>r.sourcePinId===t&&r.done)){n+=1,a=B(a);continue}break}return n},goalProgress(t,e){const a=e||E();if(t.kind==="habit-streak"){const i=this.habitStreak(t.targetId,a);return{current:i,target:t.targetDays,done:i>=t.targetDays}}if(t.kind==="task-streak"){const i=this.taskStreak(t.targetId,a);return{current:i,target:t.targetDays,done:i>=t.targetDays}}const s=this.perfectDaysCount();return{current:s,target:t.targetDays,done:s>=t.targetDays}},checkGoals(t){const e=t||E();let a=[];return c.goals.forEach(s=>{if(c.badges.some(n=>n.goalId===s.id))return;if(this.goalProgress(s,e).done){const n={id:`b${Date.now()}-${s.id}`,goalId:s.id,title:s.title,tier:s.tier,rewardTitle:s.rewardTitle,earnedAt:new Date().toISOString()};c.badges.push(n),a.push(n)}}),a.length&&b(),a},scoreFor(t){const e=this.getDay(t),a=this.getHabits(t),s=c.settings.showConscious!==!1,i=a.reduce((v,y)=>{const _=this.habitRating(t,y.id);return v+Math.round(y.points*_/5)},0),n=s?a.reduce((v,y)=>v+(this.habitRating(t,y.id)>0?L(y.consciousPoints):0),0):0,o=e.tasks.reduce((v,y)=>v+(y.done?y.points:0),0),r=a.reduce((v,y)=>v+y.points,0),l=s?a.reduce((v,y)=>v+L(y.consciousPoints),0):0,u=e.tasks.reduce((v,y)=>v+y.points,0),f=i+n+o,P=r+l+u;return{earned:f,max:P,habitScore:i,consciousScore:n,maxConscious:l,taskScore:o,completedHabits:a.filter(v=>this.habitRating(t,v.id)>0).length,habitAvg:a.length?Math.round(a.reduce((v,y)=>v+this.habitRating(t,y.id),0)/a.length*10)/10:0,totalHabits:a.length,completedTasks:e.tasks.filter(v=>v.done).length,totalTasks:e.tasks.length,percent:P?Math.round(f/P*100):0,locked:this.isLocked(t),submittedAt:e.submittedAt}},monthKeys(t){const e=String(t).slice(0,7);return Object.keys(c.days).filter(a=>a.startsWith(e)).sort()},rangeKeys(t,e){const a=[],s=new Date(`${t}T00:00:00`),i=new Date(`${e}T00:00:00`);let n=0;for(;s<=i&&n<732;)n+=1,a.push(E(s)),s.setDate(s.getDate()+1);return a},resolveRange(t,e){if(t==="day")return[e,e];if(t==="week"){const s=new Date(`${e}T00:00:00`),i=s.getDay(),n=i===0?-6:1-i,o=new Date(s);o.setDate(s.getDate()+n);const r=new Date(o);return r.setDate(o.getDate()+6),[E(o),E(r)]}if(t==="month"){const[s,i]=e.split("-").map(Number),n=`${s}-${String(i).padStart(2,"0")}-01`,o=new Date(s,i,0).getDate(),r=`${s}-${String(i).padStart(2,"0")}-${String(o).padStart(2,"0")}`;return[n,r]}if(t==="year"){const s=e.slice(0,4);return[`${s}-01-01`,`${s}-12-31`]}const a=Object.keys(c.days).sort();return a.length?[a[0],a[a.length-1]>e?a[a.length-1]:e]:[e,e]},exportRows(t,e){return this.rangeKeys(t,e).map(a=>{const s=this.getDay(a),i=this.getHabits(a),n=this.scoreFor(a);return{date:a,earned:n.earned,max:n.max,percent:n.percent,habitScore:n.habitScore,consciousScore:n.consciousScore||0,taskScore:n.taskScore,locked:this.isLocked(a),note:s.note||"",habits:i.map(o=>({name:o.name,category:G(T(o.category)),tags:N(o.tags),points:o.points,consciousPoints:this.consciousEnabled()?L(o.consciousPoints):0,rating:this.habitRating(a,o.id),earned:Math.round(o.points*this.habitRating(a,o.id)/5)+(this.habitRating(a,o.id)>0&&this.consciousEnabled()?L(o.consciousPoints):0)})),tasks:s.tasks.map(o=>({title:o.title,category:G(T(o.category)),tags:N(o.tags),points:o.points,rating:Math.max(0,Math.min(5,Number(o.rating)||0)),done:!!o.done,earned:o.done?o.points:0,description:o.description||""}))}})},history(t=14){return Object.keys(c.days).sort().reverse().slice(0,t).map(a=>({date:a,...this.scoreFor(a),note:c.days[a].note,locked:this.isLocked(a),submittedAt:c.days[a].submittedAt}))},week(t){const e=new Date(t),a=e.getDay(),s=a===0?-6:1-a;return e.setDate(e.getDate()+s),e.setHours(0,0,0,0),Array.from({length:7},(i,n)=>{const o=new Date(e);o.setDate(e.getDate()+n);const r=E(o);return{date:r,label:o.toLocaleDateString(void 0,{weekday:"short"}),locked:this.isLocked(r),...this.scoreFor(r)}})}};function bt(t){return t>=90?"Excellent":t>=75?"Great day":t>=50?"Keep going":t>0?"Started":"No score yet"}function H(t){return new Date(`${t}T00:00:00`).toLocaleDateString(void 0,{weekday:"long",month:"short",day:"numeric"})}function vt(t){return t?new Date(t).toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"}):""}function z(t){return t>=5?"Excellent":t>=4?"Great":t>=3?"Good":t>=2?"Fair":t>=1?"Low":"Not rated"}const Y=document.getElementById("app");let p=d.todayKey(),S="today",m=null,h=null,C=!1,U=!1;const Nt=[["default","Default"],["points","Points"],["category","Category"],["tags","Tags"]];function rt(t){const e=new Date(`${p}T00:00:00`);e.setDate(e.getDate()+t),p=d.todayKey(e)}function R(t){return{home:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1z"/></svg>',week:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>',history:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 8v5l3 2"/><circle cx="12" cy="12" r="9"/></svg>',settings:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H8a1.7 1.7 0 0 0 1-1.5V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V8c.3.7.9 1.2 1.6 1.3H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1.7z"/></svg>',pin:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 4h6l-1 7 3 3v2H7v-2l3-3z" fill="currentColor" stroke="none"/><path d="M12 16v5"/></svg>',habit:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7h16M4 12h10M4 17h13"/></svg>'}[t]}function ft(t,e,a){return`
    <div class="stars" data-habit="${t}">
      ${[1,2,3,4,5].map(s=>`
            <button type="button" class="star ${s<=e?"on":""}" data-action="rate-habit" data-id="${t}" data-rating="${s}" ${a?"disabled":""} aria-label="${s} star">★</button>
          `).join("")}
    </div>
  `}function yt(t,e,a){return`
    <div class="stars stars-small" data-task="${t}">
      ${[1,2,3,4,5].map(s=>`
            <button type="button" class="star small ${s<=e?"on":""}" data-action="rate-task" data-id="${t}" data-rating="${s}" ${a?"disabled":""} aria-label="${s} star">★</button>
          `).join("")}
    </div>
  `}function kt(t){const e=Number(t)||0;return e?`<span class="conscious-badge">🧠 +${e}</span>`:'<span class="item-meta">No conscious pts</span>'}function W(t){return`<span class="cat-badge cat-${t}">${G(t)}</span>`}function O(t){const e=Array.isArray(t)?t.filter(Boolean):[];return e.length?`<div class="tag-row">${e.map(a=>`<span class="tag-chip">#${g(a)}</span>`).join("")}</div>`:""}function dt(t,e){return`
    <select class="sort-select" data-sort-kind="${t}" aria-label="Sort ${t}">
      ${Nt.map(([a,s])=>`<option value="${a}" ${e===a?"selected":""}>${s}</option>`).join("")}
    </select>
  `}function Et(t){const e=d.getBadges(),a=d.topBadges(3),s=t.max>0&&t.percent===100,i=U?e:a;return`
    <section class="section rewards-section">
      <div class="section-head">
        <h2>Rewards</h2>
        ${e.length>3?`<button class="ghost-btn compact" data-action="toggle-badges">${U?"Show less":`More (${e.length}) ›`}</button>`:""}
      </div>
      ${s?`
        <div class="trophy-card">
          <div class="trophy-cup">🏆</div>
          <div>
            <div class="item-title">Gold Cup — Perfect day!</div>
            <div class="item-meta">100% of points on ${H(p)}</div>
          </div>
        </div>
      `:""}
      ${e.length?`
        <div class="rewards-grid">
          ${i.map(n=>`
            <article class="reward-card tier-${n.tier}">
              <div class="reward-medal">${Q(n.tier)}</div>
              <div>
                <div class="item-title">${g(n.rewardTitle||n.title)}</div>
                <div class="item-meta">${g(n.title)} · ${gt(n.tier)} · ${H((n.earnedAt||"").slice(0,10))}</div>
              </div>
            </article>
          `).join("")}
        </div>
      `:'<div class="empty">No rewards yet. Set a goal in Settings → Goals &amp; Rewards.</div>'}
    </section>
  `}function V(t){return`<span class="streak-badge">${t} day streak</span>`}function K(){return`<button class="ghost-btn compact ${C?"on":""}" data-action="toggle-edit">${C?"Done":"Edit Mode"}</button>`}function Lt(t){return t?'<span class="lock-badge">Locked</span>':'<span class="open-badge">Open</span>'}function Rt(){d.checkGoals(p);const t=d.getDay(p),e=d.getSettings(),a=e.showConscious!==!1,s=d.getHabits(p),i=d.getTasks(p),n=d.scoreFor(p),o=bt(n.percent),r=p===d.todayKey(),l=d.isLocked(p);return`
    <div class="topbar">
      <div>
        <p class="kicker">${r?"Today":"Daily report"}</p>
        <h1>${H(p)}</h1>
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
          ${Lt(l)}
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
        ${l?`Submitted${t.submittedAt?` at ${vt(t.submittedAt)}`:""}. Unlock in Settings to edit.`:`Auto-locks at ${e.lockTime}. Submit when the day is done.`}
      </p>
      ${l?'<button class="ghost-btn full" data-action="goto-settings">Unlock in Settings</button>':'<button class="primary-btn full" data-action="submit-day">Submit and lock report</button>'}
      <div class="export-row">
        <span class="muted">Export:</span>
        <button class="ghost-btn compact" data-action="open-export">Excel / JSON / PDF</button>
      </div>
    </section>

    ${Et(n)}

    <section class="section">
      <div class="section-head">
        <h2>Habits</h2>
        <div class="head-actions">
          ${dt("habit",e.habitSort||"default")}
          ${K()}
          <span class="points">+${n.habitScore}${a&&n.consciousScore?` +${n.consciousScore}🧠`:""} pts</span>
        </div>
      </div>
      <div class="list">
        ${s.length?s.map(u=>{const f=d.habitRating(p,u.id),P=f>0,v=d.habitStreak(u.id,p),y=a&&Number(u.consciousPoints)||0;return`
                    <article class="item-card ${P?"done":""} ${l?"is-locked":""}">
                      <button class="check" data-action="toggle-habit" data-id="${u.id}" ${l?"disabled":""}>✓</button>
                      <div>
                        <div class="item-title">${g(u.name)}</div>
                        <div class="item-meta">${W(u.category)} ${u.pin?q(u.pin):"Not pinned"} · ${f?`${f}/5 ${z(f)}`:"Not rated"}</div>
                        ${a?`<div class="item-meta">${V(v)} ${kt(y)}</div>`:`<div class="item-meta">${V(v)}</div>`}
                        ${O(u.tags)}
                        ${ft(u.id,f,l)}
                      </div>
                      <div class="item-side">
                        <div class="points">+${u.points}${y?` +${y}🧠`:""}</div>
                        <div class="mini-actions">
                          ${C?`<button class="mini-btn on" data-action="open-edit-habit" data-id="${u.id}" ${l?"disabled":""}>Edit</button>`:""}
                          <button class="mini-btn ${u.pin?"on":""}" data-action="open-pin-habit" data-id="${u.id}" ${l?"disabled":""} title="Pin habit">${R("pin")}</button>
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
          ${dt("task",e.taskSort||"default")}
          ${K()}
          <span class="points">+${n.taskScore} pts</span>
        </div>
      </div>
      <div class="list">
        ${i.length?i.map(u=>{const f=!!u.sourcePinId,P=f?d.findPinnedTask(u.sourcePinId):null,v=Math.max(0,Math.min(5,Number(u.rating)||0));return`
                    <article class="item-card ${u.done?"done":""} ${l?"is-locked":""}">
                      <button class="check" data-action="toggle-task" data-id="${u.id}" ${l?"disabled":""}>✓</button>
                      <div>
                        <div class="item-title">${g(u.title)}</div>
                        <div class="item-meta">${W(u.category)} ${P?q(P.pin):"One-time task"} · ${v?`${v}/5 ${z(v)}`:"No rating"}</div>
                        ${u.description?`<p class="item-desc">${g(u.description)}</p>`:""}
                        ${O(u.tags)}
                        ${yt(u.id,v,l)}
                      </div>
                      <div class="item-side">
                        <div class="points">+${u.points}</div>
                        <div class="mini-actions">
                          ${C?`<button class="mini-btn on" data-action="open-edit-task" data-id="${u.id}" ${l?"disabled":""}>Edit</button>`:""}
                          <button class="mini-btn ${f?"on":""}" data-action="open-pin-task" data-id="${u.id}" ${l?"disabled":""} title="Pin task">${R("pin")}</button>
                          <button class="mini-btn" data-action="remove-task" data-id="${u.id}" ${l?"disabled":""}>✕</button>
                        </div>
                      </div>
                    </article>
                  `}).join(""):'<div class="empty">No tasks yet. Tap + to add one.</div>'}
      </div>
    </section>

    <section class="section">
      <div class="section-head"><h2>Day note</h2></div>
      <textarea id="day-note" placeholder="How did today go?" ${l?"disabled":""}>${g(t.note)}</textarea>
    </section>
  `}function Ht(){const t=d.week(new Date(`${p}T00:00:00`)),e=t.reduce((s,i)=>s+i.earned,0),a=Math.round(e/7);return`
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
        ${t.map(s=>`
              <button class="day-cell ${s.date===p?"active":""} ${s.earned>0?"done":""}" data-action="pick-date" data-date="${s.date}">
                <span>${s.label.slice(0,2)}</span>
                <b>${s.earned}</b>
                ${s.locked?'<i class="dot-lock"></i>':""}
              </button>
            `).join("")}
      </div>
    </section>
    <section class="section week-grid">
      ${t.map(s=>`
            <article class="week-card">
              <div class="section-head">
                <div>
                  <div class="item-title">${H(s.date)}</div>
                  <div class="item-meta">${s.locked?"Locked":"Open"} · ${s.completedHabits} habits · ${s.completedTasks} tasks</div>
                </div>
                <div class="points">${s.earned} pts</div>
              </div>
              <div class="bar"><span style="width:${s.percent}%"></span></div>
            </article>
          `).join("")}
    </section>
  `}function Mt(){const t=d.history(21);return`
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
                        <div class="item-title">${H(e.date)}</div>
                        <div class="item-meta">${e.locked?"Locked":"Open"} · ${bt(e.percent)} · ${e.percent}%</div>
                      </div>
                      <button class="ghost-btn compact" data-action="pick-date" data-date="${e.date}">Open</button>
                    </div>
                    <div class="bar"><span style="width:${e.percent}%"></span></div>
                    ${e.note?`<p class="note" style="margin-top:10px">${g(e.note)}</p>`:""}
                  </article>
                `).join(""):'<div class="empty">Complete today to start your history.</div>'}
    </div>
  `}function Ct(){const t=d.isLocked(p),e=d.consciousEnabled(),a=d.categoryBreakdown(p),s=a.reduce((n,o)=>n+o.earned,0),i=a.reduce((n,o)=>n+o.max,0);return`
    <div class="topbar">
      <div>
        <p class="kicker">Activities</p>
        <h1>By category</h1>
      </div>
      <div class="date-nav">
        ${K()}
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
        <div class="grade-pill">${H(p)}</div>
      </div>
      <p class="lock-hint">Habits and tasks grouped by Mentally, Psychology, Physically, and Spiritually.</p>
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
                    ${n.habits.map(r=>{const l=d.habitRating(p,r.id),u=d.habitStreak(r.id,p),f=e&&Number(r.consciousPoints)||0,P=l>0?f:0,v=Math.round(r.points*l/5)+P,y=r.points+f;return`
                          <article class="item-card ${l?"done":""} ${t?"is-locked":""}">
                            <button class="check" data-action="toggle-habit" data-id="${r.id}" ${t?"disabled":""}>✓</button>
                            <div>
                              <div class="item-title">${g(r.name)}</div>
                              <div class="item-meta">Habit · ${l?`${l}/5 ${z(l)}`:"Not rated"} · ${V(u)}${e?` ${kt(f)}`:""}</div>
                              ${O(r.tags)}
                              ${ft(r.id,l,t)}
                            </div>
                            <div class="item-side">
                              <div class="points">${v}/${y}</div>
                              ${C?`<button class="mini-btn on" data-action="open-edit-habit" data-id="${r.id}" ${t?"disabled":""}>Edit</button>`:""}
                            </div>
                          </article>
                        `}).join("")}
                    ${n.tasks.map(r=>{const l=Math.max(0,Math.min(5,Number(r.rating)||0));return`
                          <article class="item-card ${r.done?"done":""} ${t?"is-locked":""}">
                            <button class="check" data-action="toggle-task" data-id="${r.id}" ${t?"disabled":""}>✓</button>
                            <div>
                              <div class="item-title">${g(r.title)}</div>
                              <div class="item-meta">Task · ${l?`${l}/5 ${z(l)}`:"No rating"}${r.description?` · ${g(r.description)}`:""}</div>
                              ${O(r.tags)}
                              ${yt(r.id,l,t)}
                            </div>
                            <div class="item-side">
                              <div class="points">+${r.points}</div>
                              ${C?`<button class="mini-btn on" data-action="open-edit-task" data-id="${r.id}" ${t?"disabled":""}>Edit</button>`:""}
                            </div>
                          </article>
                        `}).join("")}
                  `:'<div class="empty">No activities in this category.</div>'}
            </div>
          </section>
        `}).join("")}
  `}function jt(){const t=d.getSettings(),e=d.getAllHabits(),a=d.getPinnedTasks(),s=d.lockedReports();return`
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
        ${d.getGoals().length?d.getGoals().map(i=>{var l,u;const n=d.goalProgress(i,p),o=d.getBadges().some(f=>f.goalId===i.id),r=i.kind==="habit-streak"?((l=d.findHabit(i.targetId))==null?void 0:l.name)||"Deleted habit":i.kind==="task-streak"?((u=d.findPinnedTask(i.targetId))==null?void 0:u.title)||"Deleted task":"Any day at 100%";return`
                    <article class="manage-card goal-card ${o?"goal-earned":""}">
                      <div class="section-head">
                        <div>
                          <div class="item-title">${Q(i.tier)} ${g(i.title)}</div>
                          <div class="item-meta">${gt(i.tier)} · “${g(i.rewardTitle)}” · ${g(r)}</div>
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
      ${d.getBadges().length?`
            <div class="section-head" style="margin-top:14px"><h2>Earned badges</h2></div>
            <div class="rewards-grid">
              ${d.getBadges().map(i=>`
                <article class="reward-card tier-${i.tier}">
                  <div class="reward-medal">${Q(i.tier)}</div>
                  <div>
                    <div class="item-title">${g(i.rewardTitle||i.title)}</div>
                    <div class="item-meta">${g(i.title)} · ${H((i.earnedAt||"").slice(0,10))}</div>
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
        ${s.length?s.map(i=>`
                    <article class="manage-card">
                      <div class="section-head">
                        <div>
                          <div class="item-title">${H(i.date)}</div>
                          <div class="item-meta">${i.submittedAt?`Submitted ${vt(i.submittedAt)}`:"Locked"} · ${i.earned} pts</div>
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
      <p class="muted tight">Pin a habit forever, until a date, or weekly on specific days.</p>
      <div class="habit-manage">
        ${e.length?e.map(i=>`
                    <article class="manage-card">
                      <div class="section-head">
                        <div>
                          <div class="item-title">${g(i.name)}</div>
                          <div class="item-meta">${W(i.category)} · ${i.pin?q(i.pin):"Not pinned"} · +${i.points} pts ${t.showConscious!==!1?Number(i.consciousPoints)?`· 🧠 +${i.consciousPoints}`:"· No conscious pts":""} · ${V(d.habitStreak(i.id,p))}</div>
                          ${O(i.tags)}
                        </div>
                        <div class="mini-actions">
                          <button class="mini-btn ${i.pin?"on":""}" data-action="open-pin-habit" data-id="${i.id}">${R("pin")}</button>
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
        ${a.length?a.map(i=>`
                    <article class="manage-card">
                      <div class="section-head">
                        <div>
                          <div class="item-title">${g(i.title)}</div>
                          <div class="item-meta">${W(i.category)} · ${q(i.pin)} · +${i.points} pts</div>
                          ${i.description?`<p class="item-desc">${g(i.description)}</p>`:""}
                          ${O(i.tags)}
                        </div>
                        <div class="mini-actions">
                          <button class="mini-btn on" data-action="open-pin-template" data-id="${i.id}">${R("pin")}</button>
                          <button class="mini-btn" data-action="unpin-template" data-id="${i.id}">✕</button>
                        </div>
                      </div>
                    </article>
                  `).join(""):'<div class="empty">Pin a task from Today to repeat it.</div>'}
      </div>
    </section>
  `}function Ot(t){const e=(t==null?void 0:t.mode)||"forever",a=(t==null?void 0:t.until)||"",s=(t==null?void 0:t.weekdays)||[];return`
    <div class="chip-row pin-modes">
      <button type="button" class="chip ${e==="forever"?"on":""}" data-action="pin-mode" data-mode="forever">Forever</button>
      <button type="button" class="chip ${e==="until"?"on":""}" data-action="pin-mode" data-mode="until">Until date</button>
      <button type="button" class="chip ${e==="weekly"?"on":""}" data-action="pin-mode" data-mode="weekly">Weekly</button>
    </div>
    <input type="hidden" name="mode" value="${e}" />
    <label class="pin-until" style="${e==="until"?"":"display:none"}">
      Until
      <input name="until" type="date" value="${a}" />
    </label>
    <div class="pin-weekdays" style="${e==="weekly"?"":"display:none"}">
      <p class="item-meta">Repeat every</p>
      <div class="chip-row">
        ${mt.map(i=>`
            <button type="button" class="chip weekday ${s.includes(i.value)?"on":""}" data-action="toggle-weekday" data-day="${i.value}">
              ${i.label}
            </button>
          `).join("")}
      </div>
    </div>
  `}function Bt(){if(!m)return"";if(m==="choose")return`
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
    `;if(m==="habit"||m==="task"||m==="edit-habit"||m==="edit-task"){const t=m==="habit"||m==="edit-habit",e=m.startsWith("edit-"),a=h||{},s=a.category||(t?"physically":"mentally"),i=Math.max(0,Math.min(5,Number(a.rating)||0)),n=Array.isArray(a.tags)?a.tags.join(", "):a.tags||"",o=a.consciousPoints!=null?Number(a.consciousPoints):a.conscious!=null?Number(a.conscious):0;return`
      <div class="modal-backdrop open" data-action="close-modal">
        <form class="sheet" data-form="${m}" data-id="${a.id||""}">
          <div class="handle"></div>
          <h2>${e?"Edit":"New"} ${t?"habit":"task"}</h2>
          <div class="form" style="margin-top:14px">
            <label>
              ${t?"Habit name":"Task name"}
              <input name="title" required maxlength="60" value="${g(a.title||a.name||"")}" placeholder="${t?"Meditate":"Finish report"}" />
            </label>
            ${t?"":`
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
                `}
            <div>
              <p class="item-meta">Category</p>
              <div class="chip-row cat-row">
                ${J.map(r=>`
                    <button type="button" class="chip ${s===r.id?"on":""}" data-action="set-category" data-category="${r.id}">${r.label}</button>
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
    `}if(m==="export"){const t=h&&h.range||"day";return`
      <div class="modal-backdrop open" data-action="close-modal">
        <div class="sheet">
          <div class="handle"></div>
          <h2>Export report</h2>
          <p class="muted tight">Date: ${H(p)}. Pick a range, then a format.</p>
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
    `}if(m==="goal"||m==="edit-goal"){const t=m==="edit-goal",e=h||{},a=e.kind||"habit-streak",s=d.getAllHabits(),i=d.getPinnedTasks(),n=e.targetId||"";return`
      <div class="modal-backdrop open" data-action="close-modal">
        <form class="sheet" data-form="${m}" data-id="${e.id||""}">
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
                ${pt.map(o=>`<button type="button" class="chip ${a===o.id?"on":""}" data-action="set-goal-kind" data-kind="${o.id}">${o.label}</button>`).join("")}
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
                ${F.map(o=>`<button type="button" class="chip ${(e.tier||"bronze")===o.id?"on":""}" data-action="set-goal-tier" data-tier="${o.id}">${o.medal} ${o.label}</button>`).join("")}
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
    `}if(m==="pin"){const{kind:t,id:e,title:a,pin:s}=h||{};return`
      <div class="modal-backdrop open" data-action="close-modal">
        <form class="sheet" data-form="pin" data-kind="${t}" data-id="${e}">
          <div class="handle"></div>
          <h2>Pin ${t==="habit"?"habit":"task"}</h2>
          <p class="muted tight">${g(a||"")}</p>
          <div class="form" style="margin-top:14px">
            ${Ot(s)}
            <button class="primary-btn" type="submit">Save pin</button>
            ${s?'<button class="ghost-btn danger" type="button" data-action="clear-pin">Unpin</button>':""}
            <button class="ghost-btn" type="button" data-action="close-modal">Cancel</button>
          </div>
        </form>
      </div>
    `}return""}function D(){if(Y)try{const t=d.isLocked(p);Y.innerHTML=`
    <div class="app-shell">
      <main class="screen active">
        ${S==="today"?Rt():""}
        ${S==="week"?Ht():""}
        ${S==="history"?Mt():""}
        ${S==="habits"?Ct():""}
        ${S==="settings"?jt():""}
      </main>
      ${["today","habits"].includes(S)&&!t?'<button class="fab" data-action="open-add" aria-label="Add">+</button>':""}
      ${S==="settings"?'<button class="fab" data-action="open-add-habit" aria-label="Add habit">+</button>':""}
      <nav class="tabbar tabs-5">
        <button class="tab ${S==="today"?"active":""}" data-screen="today">${R("home")}Today</button>
        <button class="tab ${S==="week"?"active":""}" data-screen="week">${R("week")}Week</button>
        <button class="tab ${S==="history"?"active":""}" data-screen="history">${R("history")}History</button>
        <button class="tab ${S==="habits"?"active":""}" data-screen="habits">${R("habit")}Activities</button>
        <button class="tab ${S==="settings"?"active":""}" data-screen="settings">${R("settings")}Settings</button>
      </nav>
    </div>
    ${Bt()}
    <div class="toast" id="toast"></div>
  `,It(),Gt()}catch(t){const e=t&&t.stack?String(t.stack).slice(0,400):t&&t.message?t.message:"Unknown error";Y.innerHTML=`<div class="app-shell"><section class="manage-card"><h2>Could not load (Error B)</h2><p class="muted tight">${g(e)}</p><button class="primary-btn full" data-action="reload-app">Reload</button></section></div>`}}function It(){const t=document.getElementById("day-note");t&&t.addEventListener("input",()=>{d.isLocked(p)||d.setNote(p,t.value)})}function Gt(){const t=document.getElementById("lock-time"),e=document.getElementById("auto-lock");t&&t.addEventListener("change",()=>{d.setLockTime(t.value),k(`Lock time set to ${t.value}`),D()}),e&&e.addEventListener("change",()=>{d.setAutoLock(e.checked),k(e.checked?"Auto-lock on":"Auto-lock off"),D()})}function k(t){const e=document.getElementById("toast");e&&(e.textContent=t,e.classList.add("show"),setTimeout(()=>e.classList.remove("show"),1800))}function g(t){return String(t||"").split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;").split('"').join("&quot;")}function A(){return d.isLocked(p)?(k("This report is locked. Unlock it in Settings."),!0):!1}function Ft(t){const e=d.findHabit(t);e&&(m="pin",h={kind:"habit",id:t,title:e.name,pin:e.pin})}function qt(t){const e=d.findTask(p,t);if(!e)return;const a=e.sourcePinId?d.findPinnedTask(e.sourcePinId):null;m="pin",h={kind:"task",id:t,title:e.title,pin:a?a.pin:null}}function zt(t){const e=d.findPinnedTask(t);e&&(m="pin",h={kind:"template",id:t,title:e.title,pin:e.pin})}function Ut(t){var i;const e=t.querySelector('input[name="mode"]').value,a=((i=t.querySelector('input[name="until"]'))==null?void 0:i.value)||"",s=[...t.querySelectorAll(".weekday.on")].map(n=>Number(n.dataset.day));return e==="until"&&!a?(k("Pick an until date"),null):e==="weekly"&&!s.length?(k("Pick at least one weekday"),null):{mode:e,until:a,weekdays:s}}function $t(t,e,a){const s=e instanceof Blob?e:new Blob([e],{type:a||"text/plain;charset=utf-8"}),i=URL.createObjectURL(s),n=document.createElement("a");n.href=i,n.download=t,document.body.appendChild(n),n.click(),setTimeout(()=>{document.body.removeChild(n),URL.revokeObjectURL(i)},500)}function I(t){const e=String(t??"");return/[",\n]/.test(e)?`"${e.replace(/"/g,'""')}"`:e}function tt(t){const[e,a]=d.resolveRange(t,p);return{range:t,start:e,end:a,rows:d.exportRows(e,a)}}function Wt(){const t=h&&h.range||"day",{start:e,end:a,rows:s}=tt(t),i=[];i.push(["Daily Report export",`${e} to ${a}`].map(I).join(",")),i.push(["Date","Type","Name","Category","Tags","Points","Rating","Earned","ConsciousPts","Done","Note/Description"].map(I).join(",")),s.forEach(n=>{n.habits.forEach(o=>{i.push([n.date,"Habit",o.name,o.category,(o.tags||[]).join("|"),o.points,o.rating,o.earned,o.consciousPoints,o.rating>0?"yes":"no",""].map(I).join(","))}),n.tasks.forEach(o=>{i.push([n.date,"Task",o.title,o.category,(o.tags||[]).join("|"),o.points,o.rating||"",o.earned,"",o.done?"yes":"no",o.description||""].map(I).join(","))}),i.push([n.date,"Summary",`Earned ${n.earned}/${n.max} (${n.percent}%)`,"","","","","","",n.locked?"locked":"open",n.note||""].map(I).join(","))}),$t(`daily-report-${t}-${e}-to-${a}.csv`,"\uFEFF"+i.join(`
`),"text/csv;charset=utf-8"),k("Excel (CSV) exported")}function Vt(){const t=h&&h.range||"day",{start:e,end:a,rows:s}=tt(t),i={app:"Daily Report",exportedAt:new Date().toISOString(),range:t,start:e,end:a,days:s};$t(`daily-report-${t}-${e}-to-${a}.json`,JSON.stringify(i,null,2),"application/json"),k("JSON exported")}function Jt(){const t=h&&h.range||"day",{start:e,end:a,rows:s}=tt(t),i=s.map(o=>`
        <section style="margin-bottom:18px;border:1px solid #ddd;border-radius:12px;padding:12px">
          <h2 style="margin:0 0 4px;font-size:16px">${g(o.date)} — ${o.earned}/${o.max} pts (${o.percent}%)</h2>
          <p style="margin:0 0 8px;font-size:12px;color:#555">Habits ${o.habitScore} + Conscious ${o.consciousScore} + Tasks ${o.taskScore} · ${o.locked?"Locked":"Open"}${o.note?` · Note: ${g(o.note)}`:""}</p>
          <table style="width:100%;border-collapse:collapse;font-size:12px">
            <thead><tr><th align="left">Type</th><th align="left">Name</th><th align="left">Category</th><th>Points</th><th>Rating</th><th>Earned</th><th>Done</th></tr></thead>
            <tbody>
              ${o.habits.map(r=>`<tr><td>Habit</td><td>${g(r.name)}</td><td>${g(r.category)}</td><td align="center">${r.points}${r.consciousPoints?`+${r.consciousPoints}🧠`:""}</td><td align="center">${r.rating||"-"}/5</td><td align="center">${r.earned}</td><td align="center">${r.rating>0?"yes":"no"}</td></tr>`).join("")}
              ${o.tasks.map(r=>`<tr><td>Task</td><td>${g(r.title)}${r.description?` (${g(r.description)})`:""}</td><td>${g(r.category)}</td><td align="center">${r.points}</td><td align="center">${r.rating?`${r.rating}/5`:"-"}</td><td align="center">${r.earned}</td><td align="center">${r.done?"yes":"no"}</td></tr>`).join("")}
            </tbody>
          </table>
        </section>
      `).join(""),n=window.open("","_blank");if(!n){k("Popup blocked — allow popups to export PDF");return}n.document.write(`<!DOCTYPE html><html><head><title>Daily Report ${e} to ${a}</title></head><body style="font-family:sans-serif;padding:24px"><h1>Daily Report — ${e} to ${a}</h1>${i}<script>window.onload=function(){window.print()}<\/script></body></html>`),n.document.close(),k("PDF print view opened")}document.addEventListener("click",t=>{const e=t.target.closest("[data-screen]");if(e){S=e.dataset.screen,D();return}const a=t.target.closest("[data-action]");if(!a)return;const s=a.dataset.action;if(s==="close-modal"){(t.target.classList.contains("modal-backdrop")||a.classList.contains("ghost-btn"))&&(m=null,h=null,D());return}if(s==="prev-day"&&rt(-1),s==="next-day"&&rt(1),s==="reload-app"){window.location.reload();return}if(s==="goto-settings"&&(S="settings"),s==="open-add-habit"&&(m="habit",h=null),s==="open-add-task"){if(A())return;m="task",h={category:"mentally"}}if(s==="open-add"){if(A())return;m="choose",h={category:"mentally"}}if(s==="toggle-edit"&&(C=!C),s==="open-edit-habit"){const i=d.findHabit(a.dataset.id);if(!i)return;m="edit-habit",h={id:i.id,name:i.name,points:i.points,category:i.category,tags:i.tags||[],consciousPoints:Number(i.consciousPoints)||0}}if(s==="open-edit-task"){if(A())return;const i=d.findTask(p,a.dataset.id);if(!i)return;m="edit-task",h={id:i.id,title:i.title,points:i.points,description:i.description,category:i.category,tags:i.tags||[],rating:Number(i.rating)||0}}if(s==="toggle-badges"&&(U=!U),s==="open-goal"&&(m="goal",h={kind:"habit-streak",targetDays:7,tier:"bronze"}),s==="open-edit-goal"){const i=d.getGoals().find(n=>n.id===a.dataset.id);if(!i)return;m="edit-goal",h={...i}}if(s==="remove-goal"&&(d.removeGoal(a.dataset.id),k("Goal removed")),s==="remove-badge"&&(d.removeBadge(a.dataset.id),k("Badge removed")),s==="rate-habit"){if(A())return;const n=d.habitRating(p,a.dataset.id)===Number(a.dataset.rating)?0:Number(a.dataset.rating);d.setHabitRating(p,a.dataset.id,n)}if(s==="rate-task"){if(A())return;const i=d.findTask(p,a.dataset.id);if(!i)return;const o=(Number(i.rating)||0)===Number(a.dataset.rating)?0:Number(a.dataset.rating);d.setTaskRating(p,a.dataset.id,o)}if(s==="open-export"&&(m="export",h={range:h&&h.range||"day"}),s==="set-export-range"){m="export",h={range:a.dataset.range||"day"},D();return}if(s==="do-export"){const i=a.dataset.format;i==="csv"&&Wt(),i==="json"&&Vt(),i==="pdf"&&Jt(),m=null,h=null}if(s==="submit-day"&&(d.submitDay(p),k("Report submitted and locked")),s==="unlock-day"&&(d.unlockDay(a.dataset.date),k("Report unlocked")),s==="toggle-habit"){if(A())return;d.toggleHabit(p,a.dataset.id)}if(s==="toggle-task"){if(A())return;d.toggleTask(p,a.dataset.id)}if(s==="remove-task"){if(A())return;d.removeTask(p,a.dataset.id)}if(s==="remove-habit"&&d.removeHabit(a.dataset.id),s==="open-pin-habit"&&Ft(a.dataset.id),s==="open-pin-task"){if(A())return;qt(a.dataset.id)}if(s==="open-pin-template"&&zt(a.dataset.id),s==="unpin-template"&&(d.unpinTaskTemplate(a.dataset.id),k("Task unpinned")),s==="pick-date"&&(p=a.dataset.date,S="today"),s==="set-points"){const i=document.querySelector('input[name="points"]');i&&(i.value=a.dataset.points),document.querySelectorAll(".chip-row .chip[data-points]").forEach(n=>n.classList.remove("on")),a.classList.add("on");return}if(s==="set-category"){const i=a.closest("form")||a.closest(".sheet"),n=i.querySelector('input[name="category"]');n&&(n.value=a.dataset.category),i.querySelectorAll(".cat-row .chip").forEach(o=>o.classList.remove("on")),a.classList.add("on");return}if(s==="set-rating"){const i=a.closest(".sheet")||a.closest("form")||document,n=i.querySelector('input[name="rating"]');n&&(n.value=a.dataset.rating),i.querySelectorAll(".rating-row .chip").forEach(o=>o.classList.remove("on")),a.classList.add("on");return}if(s==="set-conscious"){const i=a.closest(".sheet")||a.closest("form")||document,n=i.querySelector('input[name="consciousPoints"]');n&&(n.value=a.dataset.conscious),i.querySelectorAll(".conscious-row .chip").forEach(o=>o.classList.remove("on")),a.classList.add("on");return}if(s==="set-goal-kind"){const i=a.closest(".sheet")||document,n=i.querySelector('input[name="kind"]');n&&(n.value=a.dataset.kind),i.querySelectorAll(".goal-kind-row .chip").forEach(u=>u.classList.remove("on")),a.classList.add("on");const o=a.dataset.kind,r=i.querySelector(".goal-target-habit"),l=i.querySelector(".goal-target-task");r&&(r.style.display=o==="habit-streak"?"":"none"),l&&(l.style.display=o==="task-streak"?"":"none"),h&&(h.kind=o);return}if(s==="set-goal-tier"){const i=a.closest(".sheet")||document,n=i.querySelector('input[name="tier"]');n&&(n.value=a.dataset.tier),i.querySelectorAll(".goal-tier-row .chip").forEach(o=>o.classList.remove("on")),a.classList.add("on");return}if(s==="pin-mode"){const i=a.closest("form");i.querySelector('input[name="mode"]').value=a.dataset.mode,i.querySelectorAll(".pin-modes .chip").forEach(n=>n.classList.remove("on")),a.classList.add("on"),i.querySelector(".pin-until").style.display=a.dataset.mode==="until"?"":"none",i.querySelector(".pin-weekdays").style.display=a.dataset.mode==="weekly"?"":"none";return}if(s==="toggle-weekday"){a.classList.toggle("on");return}if(s==="clear-pin"){const i=a.closest("form"),n=i.dataset.kind,o=i.dataset.id;if(n==="habit"&&d.unpinHabit(o),n==="task"){const r=d.findTask(p,o);r!=null&&r.sourcePinId&&d.unpinTaskTemplate(r.sourcePinId)}n==="template"&&d.unpinTaskTemplate(o),m=null,h=null,k("Unpinned"),D();return}D()});document.addEventListener("submit",t=>{const e=t.target.closest("[data-form]");if(!e)return;t.preventDefault();const a=e.dataset.form;if(a==="habit"||a==="task"||a==="edit-habit"||a==="edit-task"){const s=new FormData(e),i=String(s.get("title")||""),n=Number(s.get("points")||0),o=String(s.get("category")||"mentally"),r=String(s.get("description")||""),l=String(s.get("tags")||""),u=Math.max(0,Math.min(5,Number(s.get("rating")||0))),f=Math.max(0,Math.min(100,Number(s.get("consciousPoints")||0)));if(!i.trim())return;if(a==="habit")d.addHabit(i,n,{category:o,consciousPoints:f,tags:l}),k("Habit added");else if(a==="task"){if(A())return;d.addTask(p,i,n,{description:r,category:o,rating:u,tags:l}),k("Task added")}else if(a==="edit-habit")d.updateHabit(e.dataset.id,{name:i,points:n,category:o,consciousPoints:f,tags:l}),k("Habit updated");else{if(A())return;d.updateTask(p,e.dataset.id,{title:i,points:n,description:r,category:o,rating:u,tags:l}),k("Task updated")}m=null,h=null,D();return}if(a==="pin"){const s=Ut(e);if(!s)return;const i=e.dataset.kind,n=e.dataset.id;i==="habit"&&d.pinHabit(n,s),i==="task"&&d.pinTask(p,n,s),i==="template"&&d.updatePinnedTask(n,s),m=null,h=null,k("Pin saved"),D();return}if(a==="goal"||a==="edit-goal"){const s=new FormData(e),i=String(s.get("title")||"").trim(),n=String(s.get("kind")||"habit-streak"),o=String(s.get("tier")||"bronze"),r=String(s.get("rewardTitle")||"").trim(),l=Math.max(1,Math.min(365,Number(s.get("targetDays")||7)));if(!i||!r){k("Goal title and reward title are required");return}let u="";if(n==="habit-streak"&&(u=String(s.get("habitTarget")||"")),n==="task-streak"&&(u=String(s.get("taskTarget")||"")),(n==="habit-streak"||n==="task-streak")&&!u){k(n==="habit-streak"?"Pick a habit":"Pin a task first, then pick it");return}a==="goal"?(d.addGoal({title:i,kind:n,targetId:u,targetDays:l,tier:o,rewardTitle:r}),k("Goal added")):(d.updateGoal(e.dataset.id,{title:i,kind:n,targetId:u,targetDays:l,tier:o,rewardTitle:r}),k("Goal updated"));const f=d.checkGoals(p);f.length&&k(`🏅 Reward earned: ${f[0].rewardTitle}!`),m=null,h=null,D()}});document.addEventListener("change",t=>{const e=t.target.closest(".sort-select");if(e){const a=e.dataset.sortKind;a==="habit"&&d.setHabitSort(e.value),a==="task"&&d.setTaskSort(e.value),D()}t.target&&t.target.id==="show-conscious"&&(d.setShowConscious(t.target.checked),k(t.target.checked?"Conscious points on":"Conscious points hidden"),D())});"serviceWorker"in navigator&&(navigator.serviceWorker.getRegistrations().then(t=>{t.forEach(e=>e.unregister())}).catch(()=>{}),"caches"in window&&caches.keys().then(t=>Promise.all(t.map(e=>caches.delete(e)))).catch(()=>{}));function _t(){const t=document.getElementById("boot-error");t&&(t.style.display="none")}_t();D();
