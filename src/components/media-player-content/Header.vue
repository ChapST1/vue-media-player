<script lang="ts" setup>
import Bell from '../icons/Bell.vue';
import Download from '../icons/Download.vue';
import Search from '../icons/Search.vue';
</script>

<template>
  <header
    class="h-24 px-2 w-full flex items-center gap-3 justify-between border-b-2 border-accent"
  >
    <div
      class="flex items-center justify-start gap-2 *:cursor-not-allowed text-primary"
    >
      <picture class="md:size-11 size-8 overflow-hidden">
        <img
          src="https://github.com/chapst1.png"
          alt="cover"
          class="w-full h-full rounded-full object-cover border-2 border-accent"
        />
      </picture>
      <Bell class="md:size-7 size-6" />
      <Download class="md:size-7 size-6" />
    </div>
    <form
      class="bg-[#222222] flex items-center justify-start gap-1 rounded px-2 w-full max-w-96 cursor-not-allowed *:cursor-not-allowed"
    >
      <Search />
      <input
        type="text"
        class="bg-transparent py-3 outline-none w-full"
        placeholder="search"
        disabled
      />
    </form>
  </header>
</template>
