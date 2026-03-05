// 인증 단어 작성용 메모장
export function render(container) {
  if (!container) return;

  container.innerHTML = `
    <h2>📝 메모장</h2>
    <textarea id='memo' placeholder='여기에 인증 단어를 작성하세요'></textarea>
  `;
}
