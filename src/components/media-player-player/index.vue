<script lang="ts" setup>
import SoundDurationSlide from './SoundDurationSlide.vue';
import CurrentSongInfo from './CurrentSongInfo.vue';
import SongControls from './SongControls.vue';
import SoundControls from './SoundControls.vue';
</script>

<template>
  <nav
    class="h-player-h w-full border-t-2 border-accent relative flex items-center justify-between px-3"
  >
    <SoundDurationSlide />

    <CurrentSongInfo />
    <SongControls />
    <SoundControls />
  </nav>
</template>
