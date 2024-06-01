<script lang="ts" setup>
import MediaPlayerSidebar from './media-player-sidebar/index.vue';
import MediaPlayerContent from './media-player-content/index.vue';
import MediaPlayerPlayer from './media-player-player/index.vue';
</script>

<template>
  <section class="flex flex-col w-full h-dvh">
    <div
      class="flex-grow grid grid-cols-1 md:grid-cols-[300px,1fr] w-full h-full overflow-hidden px-3"
    >
      <MediaPlayerSidebar />
      <MediaPlayerContent />
    </div>
    <MediaPlayerPlayer />
  </section>
</template>

<style scoped></style>
