import { Data, Id, data } from '../../../public/data';

// add delay
export function getPlaylist(playlistId: Id): Data {
  return data.find((item) => item.id === playlistId) as Data;
}
