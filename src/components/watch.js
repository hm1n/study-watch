import { Watch } from '../features/watch';
import { formatTime } from '../utils/formatTime';

export function render(container) {
  if (!container) return;

  const watch = new Watch();
  let intervalId = null;

  container.innerHTML = `
    <div>
      <h1 id='time'>00:00:00</h1>
      <div class="buttons">
        <button class="start">시작</button>
        <button class="stop">일시정지</button>
        <button class="reset">초기화</button>
      </div>
    </div>
  `;

  const timeEl = container.querySelector('#time');
  const startBtn = container.querySelector('.start');
  const stopBtn = container.querySelector('.stop');
  const resetBtn = container.querySelector('.reset');

  // 타이머 interval 시작 함수
  function startTicker() {
    if (intervalId) return;
    intervalId = setInterval(() => tick(timeEl, watch), 50);
  }

  // 타이머 interval 정지 함수
  function stopTicker() {
    clearInterval(intervalId);
    intervalId = null;
  }

  // 타이머 UI 업데이트 함수
  function tick(timeElement, watch) {
    timeElement.textContent = formatTime(watch.getElapsedMs());
  }

  // 버튼 UI 업데이트 함수
  function setBtnState() {
    startBtn.disabled = watch.isRunning;
    stopBtn.disabled = !watch.isRunning;
    resetBtn.disabled = watch.getElapsedMs() === 0 && !watch.isRunning;
  }

  // 시작 버튼 클릭 핸들러 함수
  function handleStartClick() {
    if (watch.isRunning) return;

    watch.start();
    startTicker();
    tick(timeEl, watch);
    setBtnState();
  }

  // 일시정지 버튼 클릭 핸들러 함수
  function handleStopClick() {
    if (!watch.isRunning) return;

    watch.stop();
    stopTicker();
    tick(timeEl, watch);
    setBtnState();
  }

  // 초기화 버튼 클릭 핸들러 함수
  function handleResetClick() {
    watch.reset();
    stopTicker();
    tick(timeEl, watch);
    setBtnState();
  }

  tick(timeEl, watch);
  setBtnState();

  startBtn.addEventListener('click', () => handleStartClick());
  stopBtn.addEventListener('click', () => handleStopClick());
  resetBtn.addEventListener('click', () => handleResetClick());
}
