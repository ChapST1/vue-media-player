<script lang="ts" setup>
import { computed, ref, watchEffect } from 'vue';
import { useSongStore } from '../../stores/use-song-store';
import { Data } from '../../../public/data';
import { getPlaylist } from '../../lib/services/get-playlist';

const playlist = ref<Data | null>(null);
const songStore = useSongStore();
const totalSongText = computed(() => {
  return `${playlist.value?.songs.length} Songs`;
});

watchEffect(() => {
  playlist.value = getPlaylist(songStore.playlistId);
});
</script>

<template>
  <div
    class="banner h-[174px] w-full md:px-7"
    :style="{
      '--bg': `url(${playlist?.playlistBg})`,
    }"
  >
    <div
      class="relative z-10 flex flex-col md:flex-row gap-3 items-center justify-center md:justify-start h-full"
    >
      <picture class="size-20 md:size-28 rounded overflow-hidden">
        <img
          :src="playlist?.playlistImage"
          :alt="playlist?.playlistName"
          class="w-full h-full object-cover"
        />
      </picture>

      <div class="md:h-28 text-center md:text-start">
        <h2 class="text-base md:text-2xl font-bold">
          {{ playlist?.playlistName }}
        </h2>
        <span class="text-gray-300 text-xs md:text-base">{{
          totalSongText
        }}</span>

        <!-- debubg -->
        <!-- <p>IsPlaying {{ songStore.isPlaying }}</p>
        <p>Playlist {{ songStore.playlistId }}</p>
        <p>Song {{ songStore.playlistSongId }}</p>
        <p>Sound {{ songStore.soundVolume }}</p>
        <p>Sound Duration {{ songStore.soundDuration }}</p> -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.banner {
  background: linear-gradient(theme('colors.bg/0'), theme('colors.bg')),
    var(--bg);
  background-position: bottom;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  border-radius: 5px;
}

.banner::before,
.banner::after {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;

  z-index: 5;
}

.banner::before {
  background: linear-gradient(
    to right,
    theme('colors.bg'),
    transparent,
    theme('colors.bg/0')
  );
}
.banner::after {
  background: linear-gradient(
    to left,
    theme('colors.bg'),
    transparent,
    theme('colors.bg/0')
  );
}
</style>
