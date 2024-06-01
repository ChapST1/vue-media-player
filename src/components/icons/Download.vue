<script lang="ts" setup>
import { defineProps } from 'vue';
import { twMerge } from 'tailwind-merge';

const props = defineProps({
  class: String,
});
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :class="twMerge('size-5', props.class)"
    viewBox="0 0 24 24"
  >
    <path fill="currentColor" d="M4 22v-2h16v2zm8-4L5 9h4V2h6v7h4z" />
  </svg>
</template>
