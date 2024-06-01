<script lang="ts" setup>
import PlayBtn from '../PlayBtn.vue';
import Next from '../icons/Next.vue';
import { useSongStore } from '../../stores/use-song-store';

const songStore = useSongStore();

const handleClick = () => {
  songStore.updateIsPlaying();
};

const nextSong = () => {
  songStore.loadNextSong();
};

const prevSong = () => {
  songStore.loadPrevSong();
};
</script>

<template>
  <div class="flex items-center justify-center gap-3 flex-1 md:flex-[0]">
    <Next
      class="size-5 text-primary/70 hover:text-primary duration-300 hover:cursor-pointer rotate-180"
      @click="prevSong()"
    />
    <PlayBtn class="*:size-9" @click="handleClick()" />
    <Next
      class="size-5 text-primary/70 hover:text-primary duration-300 hover:cursor-pointer"
      @click="nextSong()"
    />
  </div>
</template>
