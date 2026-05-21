(() => {
  const route = document.body.dataset.route;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const navLinks = document.querySelectorAll('.nav a');
  navLinks.forEach(a => { if (a.dataset.route === route) a.setAttribute('aria-current','page');});
  if (route==='fluid-type' && !reduced) document.body.classList.add('ready');

  const canvas = document.querySelector('canvas.canvas-bg');
  if (!canvas || reduced || !(route==='particles' || route==='pressure')) return;
  const ctx = canvas.getContext('2d'); if(!ctx) return;
  const isMobile = window.matchMedia('(max-width: 760px)').matches;
  const maxDpr = isMobile ? 1 : 1.5;
  let dpr = Math.min(window.devicePixelRatio || 1, maxDpr);
  let points = []; let raf = 0; let t=0; let active=true; let compress=0;
  const count = route==='pressure' ? (isMobile?120:450) : (isMobile?220:900);
  function resize(){
    dpr = Math.min(window.devicePixelRatio || 1, maxDpr);
    canvas.width = innerWidth*dpr; canvas.height = innerHeight*dpr; canvas.style.width=innerWidth+'px'; canvas.style.height=innerHeight+'px';
    points = Array.from({length:count},()=>({x:Math.random()*canvas.width,y:Math.random()*canvas.height,vx:(Math.random()-.5)*.2,vy:(Math.random()-.5)*.2,r:Math.random()*1.3+.3}));
  }
  function draw(){
    if(!active){raf=requestAnimationFrame(draw);return;}
    t+=0.005;ctx.clearRect(0,0,canvas.width,canvas.height);ctx.fillStyle='rgba(184,255,61,0.65)';
    const cx=canvas.width/2,cy=canvas.height/2;
    points.forEach((p,i)=>{
      p.vx += Math.sin(t+i)*0.0006; p.vy += Math.cos(t*1.4+i)*0.0006;
      const pull = route==='pressure' ? 0.00003+compress*0.00018 : 0.00004;
      p.vx += (cx-p.x)*pull; p.vy += (cy-p.y)*pull;
      p.x += p.vx; p.y += p.vy;
      p.vx*=0.995; p.vy*=0.995;
      if(p.x<0||p.x>canvas.width)p.vx*=-1;if(p.y<0||p.y>canvas.height)p.vy*=-1;
      const rr = p.r*(1+compress*0.9);
      ctx.beginPath();ctx.arc(p.x,p.y,rr,0,Math.PI*2);ctx.fill();
    });
    raf=requestAnimationFrame(draw);
  }
  function vis(){active=!document.hidden;}
  if(route==='pressure'){
    const set=(v)=>{compress=v;document.body.classList.toggle('active',v>0.1)};
    addEventListener('pointerdown',()=>set(1));addEventListener('pointerup',()=>set(0));addEventListener('pointercancel',()=>set(0));
  }
  addEventListener('resize',resize);document.addEventListener('visibilitychange',vis);resize();draw();
})();
