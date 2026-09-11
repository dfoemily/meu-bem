let current=0;
const scenes=[...document.querySelectorAll(".scene")];
const bar=document.querySelector(".progress span");
function render(){
  scenes.forEach((s,i)=>s.classList.toggle("active",i===current));
  bar.style.width=(current/(scenes.length-1)*100)+"%";
  if(current===1) makeWords();
  if(current>0) hearts();
}
function next(){if(current<scenes.length-1){current++;render()}}
document.addEventListener("keydown",e=>{if(e.key==="ArrowRight"||e.key==="Enter")next()});
let touchX=null;
document.addEventListener("touchstart",e=>touchX=e.touches[0].clientX,{passive:true});
document.addEventListener("touchend",e=>{if(touchX!==null&&touchX-e.changedTouches[0].clientX>45)next();touchX=null},{passive:true});

function makeWords(){
 const box=document.getElementById("words"); if(box.children.length)return;
 ["você","por acaso","e ficou","meu bem","que sorte","sem aviso","você","um acaso","dias mais bonitos","♡","Stephanie","coincidência bonita","meu acaso favorito"].forEach((t,i)=>{
   const s=document.createElement("span");s.textContent=t;s.style.left=(5+Math.random()*88)+"%";s.style.top=(8+Math.random()*82)+"%";s.style.animationDelay=(Math.random()*3)+"s";box.appendChild(s)
 })
}
let timer;
function hearts(){
 clearInterval(timer);
 timer=setInterval(()=>{
   const h=document.createElement("span");h.className="heart";h.textContent=Math.random()>.2?"♡":"✦";h.style.left=Math.random()*100+"vw";h.style.fontSize=(10+Math.random()*15)+"px";h.style.animationDuration=(6+Math.random()*6)+"s";document.body.appendChild(h);setTimeout(()=>h.remove(),13000)
 },650)
}
render();
