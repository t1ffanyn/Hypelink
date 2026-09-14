// Simple interactivity: stagger pulse speed on hover and enable focus styles
document.addEventListener('DOMContentLoaded', function(){
  const svg = document.getElementById('infrastructure');
  if(!svg) return;

  const nodes = svg.querySelectorAll('.node circle');
  nodes.forEach((n, i)=>{
    // slightly offset animation durations for organic feel
    n.style.animationDelay = (i * 250) + 'ms';
  });

  // improve accessibility: pause animation on reduced-motion
  const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
  if(mq.matches){
    nodes.forEach(n=> n.style.animation = 'none');
    const flows = svg.querySelectorAll('.flow');
    flows.forEach(f=> f.style.animation = 'none');
  }
});
