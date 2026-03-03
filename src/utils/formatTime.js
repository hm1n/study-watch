export function formatTime(ms) {
  const centiseconds = Math.floor(ms / 10) % 100;
  const seconds = Math.floor(ms / 1000) % 60;
  const minutes = Math.floor(ms / 60000) % 60;
  const hours = Math.floor(ms / 3600000);

  const centiStr = String(centiseconds).padStart(2, '0');
  const secStr = String(seconds).padStart(2, '0');
  const minStr = String(minutes).padStart(2, '0');
  const hourStr = String(hours).padStart(2, '0');

  return `${hourStr}:${minStr}:${secStr}.${centiStr}`;
}
