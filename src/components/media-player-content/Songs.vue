<script lang="ts" setup>
import { computed, ref, watchEffect } from 'vue';
import SongsItem from './SongsItem.vue';
import { Data } from '../../../public/data';
import { getPlaylist } from '../../lib/services/get-playlist';
import { useSongStore } from '../../stores/use-song-store';

const songStore = useSongStore();
const songs = ref<Data['songs'] | null>(null);
const element = ref<HTMLElement | null>();

const hasScroll = computed(() => {
  if (songs.value) {
    return songs.value?.length > 5 ? 'scroll-shadow' : '';
  }
});

watchEffect(() => {
  songs.value = getPlaylist(songStore.playlistId).songs;
});
</script>

<template>
  <section
    :class="`no-scroll md:px-2 flex flex-col overflow-y-auto gap-[6px] ${hasScroll}`"
    ref="element"
  >
    <SongsItem
      :item="song"
      v-for="(song, index) of songs"
      :key="song.id"
      :index="index"
    />
  </section>
</template>

<style scoped>
section {
  height: calc(
    100dvh - 174px - theme('height.24') - theme('gap.3') -
      theme('height.player-h')
  );
}
</style>
