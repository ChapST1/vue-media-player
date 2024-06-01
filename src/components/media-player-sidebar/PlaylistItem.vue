<script lang="ts" setup>
import { Data, data } from '../../../public/data';
import { computed, defineProps, watch } from 'vue';
import Stop from '../icons/Stop.vue';
import Play from '../icons/Play.vue';
import { useSongStore } from '../../stores/use-song-store';
import { getCurrentSong } from '../../lib/get-current-song';

interface Props {
  item: Data;
}

const { item } = defineProps<Props>();

const songStore = useSongStore();

const isCurrentPlaylistPlaying = computed(() => {
  return songStore.playlistId === item.id && songStore.isPlaying;
});

const handleClick = () => {
  // active playlist
  songStore.updatePlaylist(item.id);
  songStore.updateIsPlaying();
};

function findFirstSongId() {
  const findPlaylist = data.find((i) => i.id === item.id) ?? data[0];
  const { songs } = findPlaylist;
  return songs[0].id;
}

watch(
  () => songStore.playlistId,
  () => {
    if (songStore.playlistId === item.id) {
      songStore.updatePlaylistSong(findFirstSongId());
      songStore.updateSongDuration(
        getCurrentSong({
          playlistId: songStore.playlistId,
          songId: songStore.playlistSongId,
        }).songDuration,
      );
    }
  },
);
</script>

<template>
  <article
    :class="`w-[70%] mx-auto md:mx-0 md:w-[90%] bg-[#232323] grid grid-cols-[75px,1fr] gap-2 min-h-[145px] duration-300 rounded-[10px] p-2   relative group border-primary  ${isCurrentPlaylistPlaying ? 'border-l-[5px]' : 'hover:border-l-[5px] '}`"
    @dblclick="handleClick()"
  >
    <picture class="rounded-[5px] overflow-hidden select-none">
      <img
        :src="item.playlistImage"
        :alt="item.playlistName"
        :class="`block w-full h-full object-cover  duration-300   ${isCurrentPlaylistPlaying ? 'saturate-200 scale-110' : 'group-hover:saturate-200 saturate-0 group-hover:scale-110'}`"
      />
    </picture>
    <div>
      <h2 class="text-xl">{{ item.playlistName }}</h2>
      <span class="text-sm text-white/50">{{ item.songs.length }} songs</span>
    </div>

    <Play
      class="size-9 absolute bottom-1 right-1 text-primary"
      v-if="!isCurrentPlaylistPlaying"
      @click="handleClick()"
    />
    <Stop
      class="size-9 absolute bottom-1 right-1 text-primary"
      v-else-if="isCurrentPlaylistPlaying"
      @click="handleClick()"
    />
  </article>
</template>
