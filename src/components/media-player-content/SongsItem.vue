<script lang="ts" setup>
import { computed, ref, watchEffect } from 'vue';
import { useSongStore } from '../../stores/use-song-store';
import { defineProps } from 'vue';
import { Data } from '../../../public/data';
import SoundPlaying from '../icons/SoundPlaying.vue';
import { formatSongDuration } from '../../lib/format-song-duration';

interface Props {
  item: Data['songs'][0];
  index: number;
}

const { item } = defineProps<Props>();
const { id, songAutor, songCover, songName, songFile, songDuration } = item;

const songStore = useSongStore();
const audioElementRef = ref<null | HTMLMediaElement>();

const isCurrentSongPlaying = computed(() => {
  return songStore.playlistSongId === id && songStore.isPlaying;
});

const handleClick = () => {
  songStore.updatePlaylistSong(id);
  songStore.updateSongDuration(songDuration);
  songStore.updateIsPlaying(true);
};

const handleFinish = () => {
  songStore.loadNextSong();
};

watchEffect(() => {
  // if (songStore.playlistSongId === id) {
  if (audioElementRef.value) {
    audioElementRef.value.volume = songStore.soundVolume / 100;
  }

  if (isCurrentSongPlaying.value) {
    audioElementRef.value?.play();
  }

  if (songStore.isPlaying === false) {
    audioElementRef.value?.pause();
  }
});
</script>

<template>
  <article
    :class="`flex h-[89px] flex-shrink-0 items-center justify-between gap-3 cursor-pointer duration-300 px-3  py-1 rounded-md overflow-hidden ${isCurrentSongPlaying ? 'song-active' : 'song'} `"
    @click="handleClick()"
  >
    <span>{{ index + 1 }}</span>

    <div class="flex items-start justify-start gap-3 flex-grow">
      <picture class="size-12 md:size-16 rounded-xl overflow-hidden">
        <img :src="songCover" class="w-full h-full object-cover" alt="" />
      </picture>
      <div>
        <h4 class="text-base">{{ songName }}</h4>
        <a href="#" class="hover:underline text-xs text-white/80">
          {{ songAutor }}
        </a>
      </div>
    </div>
    <audio
      ref="audioElementRef"
      :src="songFile"
      preload="metadata"
      @ended="handleFinish()"
      v-if="songStore.playlistSongId === id"
    ></audio>

    <SoundPlaying v-if="isCurrentSongPlaying" />
    <div>{{ formatSongDuration(songDuration) }}</div>
  </article>
</template>

<style scoped>
.song {
  background: linear-gradient(to right, #161616, #1d1d1d);
}

.song-active {
  background: #232323;
}
</style>
