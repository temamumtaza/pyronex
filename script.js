const menu = document.querySelector('.menu');
const nav = document.querySelector('#nav');
function closeMenu(returnFocus = false) {
  nav.classList.remove('open');
  menu.setAttribute('aria-expanded', 'false');
  menu.querySelector('span').textContent = '+';
  if (returnFocus) menu.focus();
}
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  menu.querySelector('span').textContent = open ? '−' : '+';
  nav.classList.toggle('open', open);
});
nav.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && nav.classList.contains('open')) closeMenu(true); });
const areas = { 1: '5 × 5 m', 2: '7 × 7 m', 4: '5 × 10 m', 8: '5 × 20 m' };
document.querySelectorAll('[data-capacity]').forEach(button => {
  button.addEventListener('click', () => {
    const capacity = button.dataset.capacity;
    document.querySelectorAll('[data-capacity]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    document.querySelector('#capacity-title').textContent = `${capacity} ton per hari`;
    document.querySelector('#capacity-area').textContent = areas[capacity];
    document.querySelector('#capacity-cta').href = `https://wa.me/6281236440576?text=${encodeURIComponent(`Halo, saya ingin membahas kapasitas Pyronex ${capacity} ton per hari.`)}`;
  });
});
const processFlows = document.querySelectorAll('[data-process-flow]');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!prefersReducedMotion && 'IntersectionObserver' in window) {
  processFlows.forEach(flow => {
    const replay = flow.querySelector('[data-flow-replay]');
    const trace = flow.querySelector('.map-route-trace path');
    if (!replay || !trace) return;
    const materialLayer = flow.querySelector('.map-material-layer');
    const motionElements = [...(materialLayer?.querySelectorAll('.map-payload animateMotion') || [])];
    const motionById = new Map(motionElements.map(motion => [motion.id, motion]));
    const timeInMs = value => {
      const match = /^([\d.]+)(ms|s)$/.exec(value || '');
      return match ? Number(match[1]) * (match[2] === 's' ? 1000 : 1) : 0;
    };
    const durationByMotion = new Map(motionElements.map(motion => [motion, timeInMs(motion.getAttribute('dur'))]));
    const startCache = new Map();
    const motionStart = (motion, stack = new Set()) => {
      if (startCache.has(motion)) return startCache.get(motion);
      const begin = motion.getAttribute('begin') || 'indefinite';
      const dependency = /^([\w-]+)\.end(?:\+([\d.]+(?:ms|s)))?$/.exec(begin);
      if (!dependency || stack.has(motion)) return 0;
      const predecessor = motionById.get(dependency[1]);
      if (!predecessor) return 0;
      stack.add(motion);
      const start = motionStart(predecessor, stack) + durationByMotion.get(predecessor) + timeInMs(dependency[2] || '0s');
      stack.delete(motion);
      startCache.set(motion, start);
      return start;
    };
    const motionTracks = motionElements.map(motion => {
      const payload = motion.parentElement;
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', motion.getAttribute('path') || '');
      path.setAttribute('class', 'map-motion-path');
      materialLayer.insertBefore(path, materialLayer.firstChild);
      const points = (motion.getAttribute('keyPoints') || '0;1').split(';').map(Number);
      const times = (motion.getAttribute('keyTimes') || '0;1').split(';').map(Number);
      return {
        payload,
        path,
        length: path.getTotalLength(),
        start: motionStart(motion),
        duration: durationByMotion.get(motion),
        points,
        times,
        hideAfter: payload.hasAttribute('data-motion-hide-after') ? timeInMs(payload.dataset.motionHideAfter) : null,
      };
    }).filter(track => track.payload && track.length > 0 && track.duration > 0);
    const supportsVectorMotion = motionTracks.length === motionElements.length && motionTracks.length > 0;

    flow.classList.add('flow-motion-ready');
    if (supportsVectorMotion) {
      flow.classList.add('has-material-motion');
    }
    replay.hidden = false;

    let animationFrame = 0;
    const pathProgress = (track, progress) => {
      for (let index = 1; index < track.times.length; index += 1) {
        if (progress <= track.times[index]) {
          const span = track.times[index] - track.times[index - 1];
          const part = span ? (progress - track.times[index - 1]) / span : 1;
          return track.points[index - 1] + (track.points[index] - track.points[index - 1]) * part;
        }
      }
      return track.points.at(-1) ?? 1;
    };
    const play = () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
      flow.classList.remove('is-running');
      if (supportsVectorMotion) {
        motionTracks.forEach(track => {
          track.payload.style.opacity = '0';
          track.payload.removeAttribute('transform');
        });
      }
      void flow.offsetWidth;
      flow.classList.add('is-running');
      if (!supportsVectorMotion) return;

      let startedAt;
      const renderFrame = now => {
        startedAt ??= now;
        const elapsed = now - startedAt;
        let stillMoving = false;
        motionTracks.forEach(track => {
          const local = elapsed - track.start;
          if (local < 0) {
            track.payload.style.opacity = '0';
            return;
          }
          const movement = Math.min(1, local / track.duration);
          const position = track.path.getPointAtLength(track.length * pathProgress(track, movement));
          track.payload.setAttribute('transform', `translate(${position.x.toFixed(2)} ${position.y.toFixed(2)})`);
          let opacity = Math.min(1, local / 150);
          if (track.hideAfter !== null) {
            const fadeStart = track.duration + track.hideAfter;
            opacity *= Math.max(0, 1 - Math.max(0, local - fadeStart) / 180);
            if (local <= fadeStart + 180) stillMoving = true;
          } else if (movement < 1) {
            stillMoving = true;
          }
          track.payload.style.opacity = String(opacity);
        });
        if (stillMoving) animationFrame = requestAnimationFrame(renderFrame);
        else {
          animationFrame = 0;
          flow.classList.remove('is-running');
        }
      };
      animationFrame = requestAnimationFrame(renderFrame);
    };
    replay.addEventListener('click', play);
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        play();
        observer.disconnect();
      }
    }, { threshold: 0.18 });
    observer.observe(flow);
  });
}
