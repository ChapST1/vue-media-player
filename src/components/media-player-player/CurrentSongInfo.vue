<script lang="ts" setup>
import { ref, watch } from 'vue';
import { useSongStore } from '../../stores/use-song-store';
import { getCurrentSong } from '../../lib/get-current-song';
import { Data } from '../../../public/data';

const songStore = useSongStore();
const currentSongInfo = ref<Data['songs'][0] | null>(
  getCurrentSong({
    playlistId: songStore.playlistId,
    songId: songStore.playlistSongId,
  }),
);

watch(
  () => songStore.playlistSongId,
  () => {
    const data = getCurrentSong({
      playlistId: songStore.playlistId,
      songId: songStore.playlistSongId,
    });

    currentSongInfo.value = data;
  },
);
</script>

<template>
  <div
    class="flex items-center justify-start gap-2 flex-1 md:flex-[0] md:min-w-[150px] md:w-max"
    v-if="currentSongInfo"
  >
    <picture class="">
      <img
        class="size-9 min-w-9 min-h-9 rounded-full"
        :src="currentSongInfo?.songCover"
        :alt="currentSongInfo?.songAutor"
      />
    </picture>
    <div>
      <h3 class="line-clamp-1 text-base">{{ currentSongInfo?.songName }}</h3>
      <a href="#" class="text-xs line-clamp-1 opacity-50">{{
        currentSongInfo?.songAutor
      }}</a>
    </div>
  </div>
</template>
