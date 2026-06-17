function generateResult() {
  const occasion = document.getElementById('occasion').value;
  const style = document.getElementById('style').value;
  const concern = document.getElementById('concern').value;

  const occasionText = {
    concert: '演唱會妝容',
    work: '上班日常妝',
    date: '約會拍照妝',
    wedding: '婚宴賓客妝'
  };

  const styleText = {
    korean: '韓系乾淨感',
    japanese: '日系低飽和',
    cool: '酷甜舞台感',
    gentle: '溫柔氣質感'
  };

  const concernAdvice = {
    eyes: '眼妝建議以「縮短眼影範圍、加強睫毛存在感」為主，避免大面積深色讓眼皮更泡。',
    brow: '眉型建議先修出下緣線條，再用眉粉補空洞，眉峰不要太銳利，整體會更自然。',
    base: '底妝建議採局部遮瑕＋薄粉底，T字定妝加強，避免全臉厚粉造成斑駁。',
    color: '色彩建議先避開高飽和螢光色，可從奶茶、玫瑰棕、豆沙色開始測試。'
  };

  const addOn = {
    concert: '加值建議：可搭配應援色眼線、亮片點綴與抗汗定妝。',
    work: '加值建議：可做 5 分鐘快速上班妝教學，讓客人每天都用得到。',
    date: '加值建議：可加入拍照角度、唇色與腮紅位置建議。',
    wedding: '加值建議：可搭配服裝色系，避免搶新娘但保有氣色。'
  };

  document.getElementById('result').innerHTML = `
    <strong>推薦方向：</strong>${occasionText[occasion]} × ${styleText[style]}<br><br>
    <strong>妝容重點：</strong>${concernAdvice[concern]}<br><br>
    <strong>服務導流：</strong>${addOn[occasion]}<br><br>
    <span class="muted">CTA 範例：想看完整臉型／眼型／色系分析，可以私訊「AI診斷」。</span>
  `;
}
