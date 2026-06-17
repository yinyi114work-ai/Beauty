const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
navToggle?.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('.nav a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));

const adviceMap = {
  brow: '建議從眉型比例開始，選擇柔霧自然感，讓五官更集中、妝感更乾淨。',
  lash: '建議選擇自然放大款，保留眼神清透度，讓日常妝容更精緻但不厚重。',
  skin: '建議先完成膚況檢測，再搭配保濕修護與簡化保養，降低盲買商品的機率。'
};
let selectedAdvice = 'brow';

document.querySelectorAll('.choice').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.choice').forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    selectedAdvice = button.dataset.result;
  });
});

document.getElementById('generateAdvice')?.addEventListener('click', () => {
  const result = document.getElementById('aiResult');
  result.textContent = adviceMap[selectedAdvice];
  result.animate([{ transform: 'translateY(6px)', opacity: .6 }, { transform: 'translateY(0)', opacity: 1 }], { duration: 260, easing: 'ease-out' });
});

let cartCount = 0;
document.querySelectorAll('.add-cart').forEach(button => {
  button.addEventListener('click', () => {
    cartCount += 1;
    const badge = document.getElementById('cartBadge');
    badge.textContent = cartCount;
    badge.animate([{ transform: 'scale(1)' }, { transform: 'scale(1.35)' }, { transform: 'scale(1)' }], { duration: 300 });
  });
});

document.getElementById('bookingForm')?.addEventListener('submit', event => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const name = form.get('name') || '顧客';
  const service = form.get('service');
  const date = form.get('date');
  document.getElementById('bookingMessage').textContent = `${name}，已收到你的 ${service} 假預約｜日期：${date}。`;
  event.currentTarget.reset();
});
