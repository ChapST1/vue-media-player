<script lang="ts" setup>
import { useSongStore } from '../../stores/use-song-store';
import { ref, watch } from 'vue';

const songStore = useSongStore();
const slideElement = ref<HTMLElement | null>(null);

const handleClick = () => {
  alert(
    'Esta función no está disponible en estos momentos. Vuelve a intentarlo más tarde... 😢',
  );
};

watch(
  [() => songStore.playlistId, () => songStore.playlistSongId],
  (
    [newPlaylistIdValue, newPlaylistSongIdValue],
    [oldPlaylitIdValue, oldPlaylistSongIdValue],
  ) => {
    if (slideElement.value) {
      if (
        newPlaylistIdValue !== oldPlaylitIdValue ||
        newPlaylistSongIdValue !== oldPlaylistSongIdValue
      ) {
        slideElement.value.classList.add('reset');
        setTimeout(() => {
          slideElement.value?.classList.remove('reset');
        }, 10);
      }
    }
  },
);
</script>

<template>
  <div @click="handleClick()" class="slider">
    <div
      ref="slideElement"
      class="sliderProgress"
      :data-is-playing="JSON.stringify(songStore.isPlaying)"
      :style="{ '--duration': `${songStore.soundDuration}s` }"
    ></div>
  </div>
</template>

<style scoped>
.slider {
  --primary: theme('colors.primary');
  --accent: theme('colors.accent');
  --accent-transparent: #173f2b73; /* theme(colors.accent/10); */

  width: 100%;
  height: 2px;

  position: absolute;
  top: -2px;
  left: 0;
  background-color: theme('colors.accent');
  transition: 0.3s;
  z-index: 100;
}

.sliderProgress {
  width: 100%;
  height: 100%;
  background-color: var(--primary);
  position: absolute;
  top: 0px;
  left: 0;
  transform: translateX(-100%);
}

.sliderProgress::after {
  content: '';
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: theme('colors.accent');
  border: 1px solid theme('colors.primary');
  position: absolute;
  top: -4px;
  right: -2px;
  transition: 0.5s;
}

.slider:hover .sliderProgress::after {
  opacity: 0;
}
.sliderProgress:not(.sliderProgress.reset) {
  animation: player-slider var(--duration) linear forwards;
}

/* important is used because -> class > attribute. CSS specif.... */
.sliderProgress[data-is-playing='null'] {
  animation-play-state: paused !important;
}

.sliderProgress[data-is-playing='true'] {
  animation-play-state: running !important;
}

.sliderProgress[data-is-playing='false'] {
  animation-play-state: paused !important;
}

.sliderProgress-play {
  animation-play-state: running;
}

.sliderProgress-stop {
  animation-play-state: paused;
}
.slider:hover {
  cursor: pointer;
  height: 10px;
}

@keyframes player-slider {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0%);
  }
}
</style>
