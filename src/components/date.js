export function render(container) {
  if (!container) return;

  const date = new Date();
  const weekday = ['일', '월', '화', '수', '목', '금', '토'][date.getDay()];

  container.innerHTML = `
      <h2 id='date'>${date.toLocaleDateString()} (${weekday})</h2>
  `;
}
