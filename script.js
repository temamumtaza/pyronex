const GA4_MEASUREMENT_ID = 'G-KXFM4N6ZRB';
window.dataLayer = window.dataLayer || [];
window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
window.gtag('js', new Date());
window.gtag('config', GA4_MEASUREMENT_ID, { anonymize_ip: true });
if (!document.querySelector(`script[src*="${GA4_MEASUREMENT_ID}"]`)) {
  const gaScript = document.createElement('script');
  gaScript.async = true;
  gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`;
  document.head.appendChild(gaScript);
}

const trackEvent = (name, params = {}) => {
  const detail = { event: name, ...params };
  window.dataLayer.push(detail);
  window.gtag('event', name, params);
  document.dispatchEvent(new CustomEvent('pyronex:analytics', { detail }));
};

const eventForLink = link => {
  if (link.dataset.analyticsEvent) return link.dataset.analyticsEvent;
  if (link.matches('a[href^="https://wa.me/"]')) return 'whatsapp_click';
  if (link.getAttribute('href') === '#konsultasi') return 'seo_consultation_click';
  if (link.id === 'capacity-cta') return 'site_survey_request';
  if (link.getAttribute('href')?.includes('/hasil-uji')) return 'lab_report_view';
  return null;
};

document.addEventListener('click', event => {
  const link = event.target.closest('a');
  if (!link) return;
  const name = eventForLink(link);
  if (name) trackEvent(name, { path: link.getAttribute('href') || '' });
});

const menu = document.querySelector('.menu');
const nav = document.querySelector('#nav');
// Commercial pricing remains off the public site until the business team enables it.
const SHOW_PUBLIC_PRICE = false;
document.querySelectorAll('[data-public-price]').forEach(element => { element.hidden = !SHOW_PUBLIC_PRICE; });
function closeMenu(returnFocus = false) {
  if (!menu || !nav) return;
  nav.classList.remove('open');
  menu.setAttribute('aria-expanded', 'false');
  const indicator = menu.querySelector('span');
  if (indicator) indicator.textContent = '+';
  if (returnFocus) menu.focus();
}
if (menu && nav) {
  menu.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(open));
    const indicator = menu.querySelector('span');
    if (indicator) indicator.textContent = open ? '−' : '+';
    nav.classList.toggle('open', open);
  });
  nav.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && nav.classList.contains('open')) closeMenu(true); });
}
const areas = { 1: '5 × 5 m', 2: '7 × 7 m', 4: '5 × 10 m', 8: '5 × 20 m' };
document.querySelectorAll('[data-capacity]').forEach(button => {
  button.addEventListener('click', () => {
    const capacity = button.dataset.capacity;
    document.querySelectorAll('[data-capacity]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    const title = document.querySelector('#capacity-title');
    const area = document.querySelector('#capacity-area');
    const cta = document.querySelector('#capacity-cta');
    if (title) title.textContent = `${capacity} ton per hari`;
    if (area) area.textContent = areas[capacity];
    if (cta) cta.href = `https://wa.me/6281236440576?text=${encodeURIComponent(`Halo, saya ingin membahas kapasitas Pyronex ${capacity} ton per hari.`)}`;
    const status = document.querySelector('[data-capacity-status]');
    if (status) status.textContent = `Pilihan ${capacity} ton per hari dipilih.`;
  });
});

document.querySelectorAll('[data-lead-form]').forEach(form => {
  form.addEventListener('submit', event => {
    event.preventDefault();
    const values = Object.fromEntries(new FormData(form).entries());
    const lines = [
      'Halo, saya ingin berkonsultasi tentang Pyronex II.',
      values.name && `Nama: ${values.name}`,
      values.organization && `Organisasi: ${values.organization}`,
      values.phone && `Kontak: ${values.phone}`,
      values.email && `Email: ${values.email}`,
      values.location && `Lokasi: ${values.location}`,
      values.facility && `Jenis fasilitas: ${values.facility}`,
      values.volume && `Volume: ${values.volume}`,
      values.organic_fraction && `Perkiraan fraksi organik: ${values.organic_fraction}`,
      values.message && `Catatan: ${values.message}`,
    ].filter(Boolean);
    trackEvent('contact_submit', {
      has_email: Boolean(values.email),
      has_volume: Boolean(values.volume),
      facility: values.facility || 'belum_diisi',
    });
    window.open(`https://wa.me/6281236440576?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener');
  });
});

document.querySelectorAll('[data-capacity-calculator]').forEach(calculator => {
  const daily = calculator.querySelector('[name="daily-tonnage"]');
  const hours = calculator.querySelector('[name="operating-hours"]');
  const output = calculator.querySelector('[data-capacity-result]');
  if (!daily || !hours || !output) return;
  let tracked = false;
  const update = () => {
    const tonnage = Number(daily.value);
    const operatingHours = Number(hours.value);
    if (!tonnage || !operatingHours || tonnage < 0 || operatingHours <= 0) {
      output.textContent = 'Masukkan volume harian dan jam operasi untuk melihat perkiraan awal.';
      tracked = false;
      return;
    }
    const rate = tonnage / operatingHours;
    output.textContent = `Perkiraan laju rata-rata: ${rate.toFixed(2)} ton/jam. Ini bukan penentuan ukuran akhir; konfigurasi perlu karakterisasi umpan dan survei rekayasa.`;
    if (!tracked) {
      trackEvent('capacity_calculator_completed', { daily_tonnage: tonnage, operating_hours: operatingHours, average_rate: Number(rate.toFixed(2)) });
      tracked = true;
    }
  };
  daily.addEventListener('input', update);
  hours.addEventListener('input', update);
  update();
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
