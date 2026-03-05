// 인증 단어 작성용 메모장
export function render(container) {
  if (!container) return;

  container.innerHTML = `
    <h2 id="memo-heading">메모장</h2>
    <textarea id='memo-textarea' aria-labelledby="memo-heading" placeholder="여기에 인증 단어를 작성하세요"></textarea>
  `;
}
