/* ===================================================
   KK PORTFOLIO — script.js  (complete)
   =================================================== */

/* ── PARTICLES on loader canvas ── */
(function(){
  const canvas = document.getElementById('loaderCanvas');
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  function resize(){ canvas.width=window.innerWidth; canvas.height=window.innerHeight; }
  resize();
  window.addEventListener('resize', resize);

  const pts = Array.from({length:90},()=>({
    x:Math.random()*canvas.width, y:Math.random()*canvas.height,
    r:Math.random()*1.6+.3,
    dx:(Math.random()-.5)*.45, dy:(Math.random()-.5)*.45,
    a:Math.random()*.8+.1
  }));

  function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    pts.forEach(p=>{
      ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle=`rgba(201,168,76,${p.a*.55})`; ctx.fill();
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
  const loader    = document.getElementById('loader');
  const portfolio = document.getElementById('portfolio');
  if(!loader||!portfolio) return;

  setTimeout(()=>{
    portfolio.classList.add('slide-up');
    portfolio.addEventListener('animationend',()=>{
      loader.style.display='none';
      portfolio.style.position='relative';
      portfolio.style.transform='none';
      portfolio.style.animation='none';
    },{once:true});
  }, 1800);
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

  document.querySelectorAll('a,button,.svc-card,.proj-card,.cert-card,.work-item,.photo-wrap').forEach(el=>{
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

/* ── COUNTER ANIMATION ── */
(function(){
  const nums = document.querySelectorAll('.stat-num[data-target]');
  const obs = new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        const target=+e.target.dataset.target;
        let cur=0;
        const step=Math.ceil(target/50);
        const t=setInterval(()=>{
          cur+=step;
          if(cur>=target){cur=target;clearInterval(t);}
          e.target.textContent=cur+'+';
        },40);
        obs.unobserve(e.target);
      }
    });
  },{threshold:.5});
  nums.forEach(n=>obs.observe(n));
})();

/* ── CONTACT FORM (Python Flask) ── */
(function(){
  const btn = document.querySelector('.btn-send');
  if(!btn) return;

  btn.addEventListener('click', e=>{
    e.preventDefault();
    const inputs = document.querySelectorAll('#contact input, #contact textarea');
    let ok = true;
    inputs.forEach(i=>{ if(!i.value.trim()){ i.style.borderColor='#e55'; ok=false; } else i.style.borderColor=''; });
    if(!ok) return;

    btn.innerHTML = '<span>Sending...</span><i class="fas fa-spinner fa-spin"></i>';
    btn.disabled = true;

    const payload = {
      from_name:  document.getElementById('from_name').value,
      from_email: document.getElementById('from_email').value,
      subject:    document.getElementById('subject').value,
      message:    document.getElementById('message').value,
    };

    fetch('http://localhost:5000/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    .then(r => r.json())
    .then(res=>{
      if(res.status === 'success'){
        btn.innerHTML = '<span>Message Sent!</span><i class="fas fa-check"></i>';
        btn.style.background = '#2a7a2a';
        btn.style.borderColor = '#2a7a2a';
        inputs.forEach(i=>i.value='');
      } else {
        throw new Error(res.message);
      }
      setTimeout(()=>{
        btn.innerHTML = '<span>Send Me Message</span><i class="fas fa-paper-plane"></i>';
        btn.style.background = ''; btn.style.borderColor = '';
        btn.disabled = false;
      }, 3000);
    })
    .catch(err=>{
      console.error('Mail error:', err);
      btn.innerHTML = '<span>Failed. Try Again</span><i class="fas fa-times"></i>';
      btn.style.background = '#c0392b';
      btn.style.borderColor = '#c0392b';
      setTimeout(()=>{
        btn.innerHTML = '<span>Send Me Message</span><i class="fas fa-paper-plane"></i>';
        btn.style.background = ''; btn.style.borderColor = '';
        btn.disabled = false;
      }, 3000);
    });
  });
})();

/* ── NAV SHADOW ON SCROLL ── */
(function(){
  const nav=document.getElementById('nav');
  const pf=document.getElementById('portfolio');
  if(!nav) return;
  (pf||window).addEventListener('scroll',()=>{
    const sy=pf?pf.scrollTop:window.scrollY;
    nav.style.boxShadow=sy>40?'0 4px 30px rgba(0,0,0,.08)':'none';
  });
})();
