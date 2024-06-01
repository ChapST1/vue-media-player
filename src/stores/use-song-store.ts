import { defineStore } from 'pinia';
import { ref, watch } from 'vue';

import { Id } from '../../public/data';
import { getAllPlaylist } from '../lib/services/get-all-playlist';
import { getNextSong } from '../lib/get-next-song';
import { getPrevSong } from '../lib/get-prev-song';
const playlist = getAllPlaylist()[0];

const initialState = {
  playlistId: playlist.id,
  playlistSongId: playlist.songs[0].id,
  songDuration: playlist.songs[0].songDuration, // seconds
};

export const useSongStore = defineStore('songStore', () => {
  const playlistId = ref(initialState.playlistId);
  const playlistSongId = ref(initialState.playlistSongId);

  const isPlaying = ref<null | Boolean>(null);
  const soundVolume = ref(10);
  const soundDuration = ref<number | null>(initialState.songDuration);

  function updatePlaylist(currentPlaylistId: Id) {
    playlistId.value = currentPlaylistId;
  }

  function updatePlaylistSong(songId: Id) {
    playlistSongId.value = songId;
  }

  function updateIsPlaying(value?: null | undefined | boolean) {
    isPlaying.value = value ?? !isPlaying.value;
  }

  function updateSongDuration(time: number) {
    soundDuration.value = time;
  }

  function loadNextSong() {
    const nextSong = getNextSong({
      playlistId: playlistId.value,
      songId: playlistSongId.value,
    });

    updatePlaylistSong(nextSong.id);
    updateSongDuration(nextSong.songDuration);
  }

  function loadPrevSong() {
    const nextSong = getPrevSong({
      playlistId: playlistId.value,
      songId: playlistSongId.value,
    });

    updatePlaylistSong(nextSong.id);
  }

  // playlist "play" changed button !Important
  watch(playlistId, () => {
    if (!isPlaying.value) {
      isPlaying.value = !isPlaying.value;
    }
  });

  // watch(playlistSongId, (newValue, oldValue) => {
  //   if (oldValue !== newValue) {
  //     soundDuration.value = null;
  //   }
  // });

  return {
    updatePlaylist,
    updatePlaylistSong,
    updateIsPlaying,
    updateSongDuration,
    loadNextSong,
    loadPrevSong,
    playlistId,
    playlistSongId,
    isPlaying,
    soundVolume,
    soundDuration,
  };
});
