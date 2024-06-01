<script lang="ts" setup>
import Header from './Header.vue';
import Playlist from './Playlist.vue';
</script>

<template>
  <input type="checkbox" name="" id="open-checkbox" class="peer hidden" />
  <nav
    class="w-full md:border-r-2 md:overflow-hidden peer-checked:translate-x-0 duration-300 border-accent fixed top-0 left-0 z-40 bg-bg/95 md:relative h-dvh md:h-auto translate-x-[-100%] md:translate-x-0"
  >
    <label
      for="open-checkbox"
      class="md:hidden z-40 absolute top-[50%] translate-y-[-50%] flex items-center justify-center size-10 bg-primary rounded-md -right-11"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="23"
        height="23"
        viewBox="0 0 256 256"
        class="size-7 text-bg"
      >
        <g fill="currentColor">
          <path d="M200 192a24 24 0 1 1-24-24a24 24 0 0 1 24 24" opacity=".2" />
          <path
            d="M32 64a8 8 0 0 1 8-8h176a8 8 0 0 1 0 16H40a8 8 0 0 1-8-8m8 72h120a8 8 0 0 0 0-16H40a8 8 0 0 0 0 16m72 48H40a8 8 0 0 0 0 16h72a8 8 0 0 0 0-16m135.66-57.7a8 8 0 0 1-10 5.36L208 122.75V192a32.05 32.05 0 1 1-16-27.69V112a8 8 0 0 1 10.3-7.66l40 12a8 8 0 0 1 5.36 9.96M192 192a16 16 0 1 0-16 16a16 16 0 0 0 16-16"
          />
        </g>
      </svg>
    </label>

    <label
      for="open-checkbox"
      class="md:hidden z-40 absolute top-[50%] translate-y-[-50%] flex items-center justify-center size-10 bg-primary rounded-md right-1"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="23"
        height="23"
        viewBox="0 0 24 24"
        class="size-7 text-bg"
      >
        <path
          fill="currentColor"
          d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"
        />
      </svg>
    </label>
    <Header />
    <Playlist />
  </nav>
</template>
