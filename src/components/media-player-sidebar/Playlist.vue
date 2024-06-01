<script lang="ts" setup>
import { getAllPlaylist } from '../../lib/services/get-all-playlist';
import PlaylistItem from './PlaylistItem.vue';

const data = getAllPlaylist();
</script>

<template>
  <div
    class="scroll-shadow playlist-container overflow-y-auto flex flex-col justify-start gap-7 py-2"
  >
    <PlaylistItem v-for="item of data" :key="item.id" :item="item" />
  </div>
</template>

<style scoped>
.playlist-container {
  max-height: calc(100% - theme('height.12'));
  scrollbar-width: none;
}
</style>
