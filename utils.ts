export function minutesToStringTime(time: number) {
  const hours = Math.floor(time / 60);
  const minutes = time % 60;
  return `0${hours}`.slice(-2) + ":" + `0${minutes}`.slice(-2);
}
