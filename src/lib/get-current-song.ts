import { Id } from '../../public/data';
import { getPlaylist } from './services/get-playlist';

export function getCurrentSong({
  playlistId,
  songId,
}: {
  playlistId: Id;
  songId: Id;
}) {
  const playlist = getPlaylist(playlistId);
  const song = playlist.songs.find((e) => e.id === songId) ?? playlist.songs[0];

  return song;
}
