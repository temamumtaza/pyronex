const menu = document.querySelector('.menu');
const nav = document.querySelector('#nav');
function closeMenu(returnFocus = false) {
  nav.classList.remove('open');
  menu.setAttribute('aria-expanded', 'false');
  if (returnFocus) menu.focus();
}
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
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
    document.querySelector('#capacity-cta').href = `https://wa.me/6281236440576?text=${encodeURIComponent(`Halo Kibar, saya ingin diskusi Pyronex kapasitas ${capacity} ton/hari.`)}`;
  });
});
