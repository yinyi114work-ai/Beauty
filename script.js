const aiBtn = document.getElementById('aiBtn');
const aiResult = document.getElementById('aiResult');
const beautyNeed = document.getElementById('beautyNeed');
const addCartButtons = document.querySelectorAll('.addCart');
const cartDot = document.getElementById('cartDot');
const bookingForm = document.getElementById('bookingForm');
const bookingResult = document.getElementById('bookingResult');

let cartCount = 0;

const aiMessages = {
  brow: 'AI 建議：你的重點可以放在眉峰位置與眉尾收斂，建議預約 AI 眉型檢測，搭配自然霧眉成品圖作為溝通參考。',
  lash: 'AI 建議：你的眼神優勢適合自然放大感美睫，不建議過度濃密。可先看成品圖，再選擇日常款或微華麗款。',
  skin: 'AI 建議：先做膚況檢測，確認乾燥、暗沉或敏感重點，再搭配基礎修護保養組，避免一次購買過多品項。'
};

aiBtn.addEventListener('click', () => {
  const selected = beautyNeed.value;
  aiResult.textContent = aiMessages[selected] || '請選擇需求，產生專屬建議。';
});

addCartButtons.forEach((button) => {
  button.addEventListener('click', () => {
    cartCount += 1;
    cartDot.textContent = cartCount;
    button.textContent = '已加入購物車';
    setTimeout(() => {
      button.textContent = '加入購物車';
    }, 900);
  });
});

bookingForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const service = document.getElementById('service').value;
  const date = document.getElementById('date').value;

  bookingResult.textContent = `${name || '顧客'}您好，已收到您的「${service}」假預約需求，預約日期為 ${date}。這是 MVP 展示用罐頭訊息，尚未真的送出預約。`;
  bookingForm.reset();
});
