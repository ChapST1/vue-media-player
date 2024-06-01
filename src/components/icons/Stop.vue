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
    viewBox="0 0 40 40"
    fill="none"
    :class="twMerge('size-5', props.class)"
  >
    <path
      d="M15 8.33325H11.6667C10.7462 8.33325 10 9.07944 10 9.99992V29.9999C10 30.9204 10.7462 31.6666 11.6667 31.6666H15C15.9205 31.6666 16.6667 30.9204 16.6667 29.9999V9.99992C16.6667 9.07944 15.9205 8.33325 15 8.33325Z"
      fill="currentColor"
    />
    <path
      d="M28.3334 8.33325H25C24.0796 8.33325 23.3334 9.07944 23.3334 9.99992V29.9999C23.3334 30.9204 24.0796 31.6666 25 31.6666H28.3334C29.2538 31.6666 30 30.9204 30 29.9999V9.99992C30 9.07944 29.2538 8.33325 28.3334 8.33325Z"
      fill="currentColor"
    />
  </svg>
</template>
