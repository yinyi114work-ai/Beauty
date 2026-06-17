const tabButtons = document.querySelectorAll('.tab-btn');
const pages = document.querySelectorAll('.tab-page');
const navTabs = document.getElementById('navTabs');
const menuBtn = document.getElementById('menuBtn');

const aliases = { pain: 'home' };

function showTab(tab) {
  const target = aliases[tab] || tab || 'home';
  tabButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.tab === target));
  pages.forEach(page => page.classList.toggle('active', page.id === target));
  navTabs.classList.remove('open');
  history.replaceState(null, '', `#${target}`);
}

tabButtons.forEach(btn => btn.addEventListener('click', () => showTab(btn.dataset.tab)));
document.querySelectorAll('[data-jump]').forEach(btn => btn.addEventListener('click', () => showTab(btn.dataset.jump)));
document.querySelectorAll('[data-tab-link]').forEach(link => link.addEventListener('click', e => { e.preventDefault(); showTab(link.dataset.tabLink); }));
menuBtn.addEventListener('click', () => navTabs.classList.toggle('open'));

const bookingForm = document.getElementById('bookingForm');
const successMsg = document.getElementById('successMsg');
bookingForm.addEventListener('submit', e => {
  e.preventDefault();
  successMsg.classList.add('show');
});

const initialHash = location.hash.replace('#', '');
showTab(initialHash || 'home');
