<script lang="ts" setup>
import { defineProps } from 'vue';
import { twMerge } from 'tailwind-merge';
import Stop from './icons/Stop.vue';
import Play from './icons/Play.vue';
import { useSongStore } from '../stores/use-song-store';

const props = defineProps({
  class: String,
});

const songStore = useSongStore();
</script>

<template>
  <div :class="twMerge('text-primary', props.class)">
    <Play v-if="!songStore.isPlaying" />
    <Stop v-else-if="songStore.isPlaying" />
  </div>
</template>
