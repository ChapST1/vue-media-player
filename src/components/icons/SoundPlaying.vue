<script lang="ts" setup></script>

<template>
  <div aria-hidden="true" aria-label="sound-bars" class="sound-container">
    <span style="--delay: 0.5s; --height: 17px"></span>
    <span style="--delay: 0.2s; --height: 10px"></span>
    <span style="--delay: 0.3s; --height: 17px"></span>
    <span style="--delay: 0.3s; --height: 10px"></span>
    <span style="--delay: 0.2s; --height: 17px"></span>
    <span style="--delay: 0.5s; --height: 10px"></span>
  </div>
</template>

<style scoped>
.sound-container {
  width: max-content;
  padding: 6px;
  display: flex;
  gap: 3px;
  align-items: center;
  justify-content: center;
}

.sound-container span {
  display: block;
  width: 3px;
  height: var(--height);
  background-color: theme('colors.primary');
  border-radius: 5px;
  animation: animation-bars 0.5s infinite alternate
    cubic-bezier(0.6, -0.28, 0.735, 0.045);
  animation-delay: var(--delay);
}

@keyframes animation-bars {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.5);
  }
}
</style>
