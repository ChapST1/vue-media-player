<script lang="ts" setup>
import Sound from '../icons/Sound.vue';
import { useSongStore } from '../../stores/use-song-store';

const songStore = useSongStore();
</script>

<template>
  <div
    class="flex items-center z-[500] justify-center gap-2 relative flex-1 md:flex-[0]"
  >
    <Sound class="w-5" />
    <input
      type="range"
      class="slider-sound"
      max="100"
      min="0"
      v-model="songStore.soundVolume"
    />
  </div>
</template>

<style scoped>
.slider-sound {
  accent-color: theme('colors.primary');
  outline: none;
  border: none;
  height: 5px;
  width: 80px;
}

/******** Chrome, Safari, Opera and Edge Chromium styles ********/
/* slider track */
input[type='range']::-webkit-slider-runnable-track {
  border-radius: 0.5rem;
  height: 0.5rem;
}

/* slider thumb */
input[type='range']::-webkit-slider-thumb {
  -webkit-appearance: none; /* Override default look */
  appearance: none;
  margin-top: -4px; /* Centers thumb on the track */
  background-color: theme('colors.primary');
  border-radius: 0.5rem;
  height: 1rem;
  width: 0.81rem;
}

input[type='range']:focus::-webkit-slider-thumb {
  background-color: theme('colors.primary');
  outline-offset: 0.125rem;
}

/*********** Firefox styles ***********/
/* slider track */
input[type='range']::-moz-range-track {
  /* background-color: theme('colors.primary'); */
  border-radius: 0.5rem;
  height: 0.5rem;
}

/* slider thumb */
input[type='range']::-moz-range-thumb {
  background-color: theme('colors.primary');
  border: none; /*Removes extra border that FF applies*/
  border-radius: 0.5rem;
  height: 0.81rem;
  width: 0.81rem;
}

input[type='range']:focus::-moz-range-thumb {
  outline: 3px solid theme('colors.primary');
  outline-offset: 0.125rem;
}
</style>
