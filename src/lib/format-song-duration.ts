/**
 * @see howlerjs -> Player.prototype.TimeFormat https://howlerjs.com/ - Music Player - Demo
 */

export function formatSongDuration(secs: number) {
  let minutes = Math.floor(secs / 60) || 0;
  let seconds = Math.floor(secs - minutes * 60 || 0);

  return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
}
