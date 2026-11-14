(function(){
'use strict';
const $=(s,r=document)=>r.querySelector(s);

/* ---------- DATA ---------- */
const timeline=[
 {d:'AD 12',t:'Birth at Antium',x:'Gaius is born on 31 August to Germanicus and Agrippina the Elder (Suetonius, Gaius 8).'},
 {d:'AD 19',t:'Death of Germanicus',x:'His father dies in Syria. Some at the time suspected foul play; the question has never been settled.'},
 {d:'AD 29–33',t:'Family destroyed',x:'Agrippina is exiled in 29 and dies in 33; his brothers Nero and Drusus Caesar also perish under Tiberius and Sejanus.'},
 {d:'AD 31',t:'Life on Capri',x:'Caligula joins Tiberius on Capri, where he spends his remaining years before the succession (Suetonius, Gaius 10–12).'},
 {d:'March AD 37',t:'Tiberius dies',x:'Tiberius dies on 16 March. Caligula is acclaimed and granted imperial powers by the Senate (Cassius Dio 59.1).'},
 {d:'Late AD 37',t:'Illness',x:'Ancient writers report a serious illness, and some date a change in his behaviour to it. Modern historians are cautious (Philo, Embassy 14–22).'},
 {d:'AD 38–40',t:'Crises abroad',x:'Alexandria riots (38), the northern frontier campaign (39–40) and the Jerusalem statue dispute (40).'},
 {d:'24 Jan AD 41',t:'Assassination',x:'He is killed at the Palatine Games by officers of the Guard; Claudius becomes emperor (Josephus, Antiquities 19).'}
];
const claims=[
 {h:'Cruelty and extravagance',
  s:'Suetonius and Dio report mass executions, torture for amusement and enormous waste on banquets and games.',
  e:'Some senators were executed, and conspiracies in AD 39 are well attested. Specific atrocity stories rest on single, late sources. Dio says the treasury was drained, but the figures cannot be checked.',
  c:'He used violence against political rivals, as many emperors did. The scale of cruelty is probably exaggerated by senatorial writers.',
  u:'Exact numbers of victims and the true extent of his spending.'},
 {h:'Incitatus, the horse',
  s:'Suetonius (Gaius 55) and Dio (59.14) say Incitatus had a marble stable, an ivory manger and servants, and that Caligula planned to make him consul.',
  e:'No inscription, coin or law shows Incitatus holding any office. The source for the consulship story is itself hedged with "it is said."',
  c:'He may have pampered a favourite racehorse; the consulship was most likely a joke or a rumour meant to mock the Senate, or an invention.',
  u:'Whether the remark was ever made, and what it meant if so.'},
 {h:'Personal life and family',
  s:'Suetonius and Dio accuse him of incest with his sisters and of sexual misconduct.',
  e:'Our evidence is hostile and unverifiable. Such accusations were a standard way for Roman writers to depict bad rulers. His grief for his sister Drusilla (d. AD 38), whom he had deified, is better documented.',
  c:'Treat these as allegations. They tell us how elites wanted him remembered, not necessarily what happened.',
  u:'Almost everything about his private conduct.'},
 {h:'Conflict with the Senate',
  s:'Dio and Suetonius describe humiliations of senators, such as making them run beside his chariot, and a stream of executions.',
  e:'Conflict is credible: the AD 39 plots, the exile of his sisters and his dealings with Macro and Gemellus point to real political struggle.',
  c:'This is the most solid part of the tradition. The question is whether he was irrational or ruthlessly political in a system that gave him little security.',
  u:'How many senators died and how many plots were real rather than convenient pretexts.'},
 {h:'Hostile ancient writers',
  s:'The main narratives come from Suetonius, Dio and, among contemporaries, Philo and Josephus.',
  e:'Philo was a near-contemporary who was personally opposed to Caligula after the Alexandria crisis. Josephus wrote around AD 93 and focused on the Jewish perspective. Suetonius and Dio wrote one to two centuries later and relied on lost sources.',
  c:'No surviving author wrote a neutral account. Reading them together, and against coins and inscriptions, is essential.',
  u:'What the lost accounts, including Tacitus on this reign, would have shown.'}
];
const seq=[
 ['Rising tension','Senatorial plots and executions in AD 39–40 deepen distrust between emperor and elite.'],
 ['The conspiracy','Cassius Chaerea and Cornelius Sabinus, tribunes of the Praetorian Guard, plan his death with others (Josephus, Ant. 19.17–27).'],
 ['24 January AD 41','During the Palatine Games he is attacked in a passage near the theatre.'],
 ['The aftermath','His wife Caesonia and infant daughter are killed. Chaos spreads through the city.'],
 ['The Senate hesitates','Senators debate restoring a Republican government (Josephus, Ant. 19.157–184).'],
 ['Claudius acclaimed','The Praetorians proclaim his uncle Claudius emperor; the Senate yields. Claudius recalls Caligula\'s exiled sisters and executes Chaerea.']
];
const authors=[
 {n:'Suetonius',w:'c. AD 121',p:'A Roman equestrian and imperial secretary, he wrote biographies of the Caesars full of anecdotes and moral judgments. His Caligula divides the emperor into "the princeps" and "the monster."',u:'Rich in detail, but fond of scandal, and writing 80 years later.'},
 {n:'Cassius Dio',w:'early 3rd c.',p:'A Roman senator and historian who wrote in Greek. Book 59 covers Caligula. Part of his text survives only in later summaries.',u:'A senator\'s view of an emperor who clashed with senators.'},
 {n:'Philo',w:'AD 40–41',p:'A Jewish philosopher from Alexandria who led an embassy to Caligula in AD 40. His account is nearly contemporary.',u:'Valuable eyewitness context, but strongly hostile after the Alexandria crisis.'},
 {n:'Josephus',w:'c. AD 93',p:'A Jewish historian writing in Rome. Antiquities 18–19 covers the Jerusalem statue crisis and the assassination in vivid detail.',u:'Writing after Jewish revolt and under Flavian patronage, with his own motives.'}
];

/* ---------- TIMELINE ---------- */
const track=$('.tl-track'),panel=$('#tl-panel');
function showTl(i){
 [...track.children].forEach((b,j)=>b.setAttribute('aria-selected',j===i));
 const e=timeline[i];panel.innerHTML=`<h3>${e.t}</h3><p><strong>${e.d}</strong>. ${e.x}</p>`;
}
timeline.forEach((e,i)=>{const b=document.createElement('button');b.setAttribute('role','tab');b.innerHTML=`<b>${e.d}</b>${e.t}`;b.onclick=()=>showTl(i);track.appendChild(b)});
showTl(0);

/* ---------- CLAIMS ---------- */
$('#claims').innerHTML=claims.map((c,i)=>`<details${i===0?' open':''}><summary>${c.h}</summary><div class="body">
<div><h4>What ancient sources claimed</h4><p>${c.s}</p></div><div><h4>What evidence survives</h4><p>${c.e}</p></div>
<div><h4>What historians can conclude</h4><p>${c.c}</p></div><div><h4>What remains uncertain</h4><p>${c.u}</p></div></div></details>`).join('');

/* ---------- SEQUENCE ---------- */
$('#sequence').innerHTML=seq.map(s=>`<li><strong>${s[0]}</strong>${s[1]}</li>`).join('');

/* ---------- SOURCES ---------- */
const tabs=$('#src-tabs'),sp=$('#src-panel');
function showSrc(i){
 [...tabs.children].forEach((b,j)=>b.setAttribute('aria-selected',j===i));
 const a=authors[i];sp.innerHTML=`<h3>${a.n} <small>(${a.w})</small></h3><p>${a.p}</p><p><strong>Keep in mind:</strong> ${a.u}</p>`;
}
authors.forEach((a,i)=>{const b=document.createElement('button');b.setAttribute('role','tab');b.textContent=a.n;b.onclick=()=>showSrc(i);tabs.appendChild(b)});
showSrc(0);

/* ---------- PROGRESS, TOP BUTTON, NAV ---------- */
const bar=$('#progress'),top=$('#top');
function onScroll(){
 const h=document.documentElement,max=h.scrollHeight-h.clientHeight;
 bar.style.width=(max>0?h.scrollTop/max*100:0)+'%';top.hidden=h.scrollTop<600;
}
addEventListener('scroll',onScroll,{passive:true});onScroll();
top.onclick=()=>scrollTo({top:0});
const links=[...document.querySelectorAll('#menu a')];
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(l=>l.classList.toggle('active',l.getAttribute('href')==='#'+e.target.id))}),{rootMargin:'-45% 0px -50% 0px'});
links.forEach(l=>{const t=$(l.getAttribute('href'));if(t)io.observe(t)});
const burger=$('.burger'),menu=$('#menu');
burger.onclick=()=>{const o=menu.classList.toggle('open');burger.setAttribute('aria-expanded',o)};
links.forEach(l=>l.addEventListener('click',()=>{menu.classList.remove('open');burger.setAttribute('aria-expanded',false)}));
})();
