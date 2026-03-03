export class Watch {
  constructor() {
    this.isRunning = false;
    this.startTimestampMs = 0;
    this.elapsedBeforeMs = 0;
  }

  start() {
    if (this.isRunning) return;

    this.isRunning = true;
    this.startTimestampMs = Date.now();
  }

  stop() {
    if (!this.isRunning) return;

    this.elapsedBeforeMs = this.getElapsedMs();
    this.isRunning = false;
  }

  reset() {
    this.isRunning = false;
    this.startTimestampMs = 0;
    this.elapsedBeforeMs = 0;
  }

  /*-- 경과 시간 계산 함수 --*/
  getElapsedMs() {
    if (this.isRunning) {
      return Date.now() - this.startTimestampMs + this.elapsedBeforeMs;
    } else return this.elapsedBeforeMs;
  }

  getState() {
    return {
      isRunning: this.isRunning,
      startTimestampMs: this.startTimestampMs,
      elapsedBeforeMs: this.elapsedBeforeMs,
    };
  }
}
