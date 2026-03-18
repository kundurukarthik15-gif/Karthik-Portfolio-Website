/* ===================================================
   KK PORTFOLIO — about.js  (complete)
   =================================================== */

/* ── PARTICLES ── */
(function(){
  const canvas = document.getElementById('aloaderCanvas');
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  function resize(){ canvas.width=window.innerWidth; canvas.height=window.innerHeight; }
  resize();
  window.addEventListener('resize', resize);
  const pts = Array.from({length:70},()=>({
    x:Math.random()*canvas.width, y:Math.random()*canvas.height,
    r:Math.random()*1.5+.3,
    dx:(Math.random()-.5)*.5, dy:(Math.random()-.5)*.5,
    a:Math.random()*.7+.1
  }));
  function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    pts.forEach(p=>{
      ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle=`rgba(201,168,76,${p.a*.5})`; ctx.fill();
      p.x+=p.dx; p.y+=p.dy;
      if(p.x<0||p.x>canvas.width) p.dx*=-1;
      if(p.y<0||p.y>canvas.height) p.dy*=-1;
    });
    requestAnimationFrame(draw);
  }
  draw();
})();

/* ── LOADER → SLIDE UP ── */
(function(){
  const loader = document.getElementById('aloader');
  const page   = document.getElementById('page');
  if(!loader||!page) return;
  setTimeout(()=>{
    page.classList.add('slide-up');
    page.addEventListener('animationend',()=>{
      loader.style.display='none';
      page.style.position='relative';
      page.style.transform='none';
      page.style.animation='none';
    },{once:true});
  }, 2000);
})();

/* ── CUSTOM CURSOR ── */
(function(){
  const cur  = document.getElementById('cursor');
  const ring = document.getElementById('cursorRing');
  if(!cur||!ring) return;
  let mx=0,my=0,fx=0,fy=0;
  document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;});
  function loop(){
    cur.style.left=mx+'px'; cur.style.top=my+'px';
    fx+=(mx-fx)*.13; fy+=(my-fy)*.13;
    ring.style.left=fx+'px'; ring.style.top=fy+'px';
    requestAnimationFrame(loop);
  }
  loop();
  document.querySelectorAll('a,button,.tech-card,.edu-card').forEach(el=>{
    el.addEventListener('mouseenter',()=>{ cur.classList.add('big'); ring.classList.add('big'); });
    el.addEventListener('mouseleave',()=>{ cur.classList.remove('big'); ring.classList.remove('big'); });
  });
})();

/* ── SCROLL REVEAL ── */
(function(){
  const els = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){ e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  },{threshold:.1});
  els.forEach(el=>obs.observe(el));
})();

/* ── SKILL BARS ── */
(function(){
  const fills = document.querySelectorAll('.sk-fill');
  const obs = new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        setTimeout(()=>{ e.target.style.width=e.target.dataset.w+'%'; },150);
        obs.unobserve(e.target);
      }
    });
  },{threshold:.3});
  fills.forEach(f=>obs.observe(f));
})();

/* ── NAV SHADOW ── */
(function(){
  const nav  = document.getElementById('nav');
  const page = document.getElementById('page');
  if(!nav) return;
  (page||window).addEventListener('scroll',()=>{
    const sy=page?page.scrollTop:window.scrollY;
    nav.style.boxShadow=sy>40?'0 4px 30px rgba(0,0,0,.08)':'none';
  });
})();
