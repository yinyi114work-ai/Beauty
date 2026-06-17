const adviceMap = {
  brow: 'AI 初步建議：適合以「柔霧眉＋低銳利眉峰」修飾五官比例，保留自然毛流感，導向預約眉型檢測。',
  lash: 'AI 初步建議：適合自然放大型美睫，不追求過度濃密，強化眼神乾淨度與日常耐看度。',
  skin: 'AI 初步建議：先進行膚況檢測，依照乾燥、敏弱或暗沉狀態搭配基礎修護保養組。'
};

const needSelect = document.querySelector('#beautyNeed');
const generateAdvice = document.querySelector('#generateAdvice');
const adviceBox = document.querySelector('#adviceBox');
const cartCount = document.querySelector('#cartCount');
const bookingForm = document.querySelector('#bookingForm');
const formMessage = document.querySelector('#formMessage');
let count = 0;

generateAdvice?.addEventListener('click', () => {
  const key = needSelect.value;
  adviceBox.textContent = adviceMap[key] || '請選擇需求，產生專屬建議。';
});

document.querySelectorAll('.addCart').forEach((button) => {
  button.addEventListener('click', () => {
    count += 1;
    cartCount.textContent = count;
    button.textContent = '已加入 ✓';
    setTimeout(() => button.textContent = '加入購物車', 900);
  });
});

bookingForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const service = document.querySelector('#serviceSelect').value;
  const name = document.querySelector('#nameInput').value.trim() || '貴賓';
  const date = document.querySelector('#dateInput').value || '尚未選擇日期';
  formMessage.textContent = `${name} 您好，已收到「${service}」假預約示範，預約日期：${date}。`;
});
