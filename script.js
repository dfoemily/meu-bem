const music=document.getElementById('music'), open=document.getElementById('open');
open.addEventListener('click',()=>{music.currentTime=0;music.play().catch(()=>{});document.querySelector('[data-name="acaso"]').scrollIntoView({behavior:'smooth'});});
const sections=[...document.querySelectorAll('.reveal')], words=[...document.querySelectorAll('.names span')];
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');const n=e.target.dataset.name;words.forEach(w=>w.classList.toggle('active',w.textContent.toLowerCase().includes(n==='acaso'?'acaso':n==='declaração'?'você':n==='fim'?'Stephanie':n)));}}),{threshold:.28});
sections.forEach(s=>io.observe(s));
const hearts=document.getElementById('hearts');setInterval(()=>{const h=document.createElement('span');h.className='heart';h.textContent=Math.random()>.2?'♡':'✦';h.style.left=Math.random()*100+'vw';h.style.fontSize=(10+Math.random()*17)+'px';h.style.animationDuration=(7+Math.random()*7)+'s';hearts.appendChild(h);setTimeout(()=>h.remove(),15000)},650);
