import { Id } from '../../public/data';
import { getPlaylist } from './services/get-playlist';

export function getPrevSong({
  playlistId,
  songId,
}: {
  playlistId: Id;
  songId: Id;
}) {
  const playlist = getPlaylist(playlistId);
  const currentSong = playlist.songs.findIndex((e) => e.id === songId);
  const nextSong =
    playlist.songs[currentSong - 1] ??
    playlist.songs[playlist.songs.length - 1];

  return nextSong;
}
