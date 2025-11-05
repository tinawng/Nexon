<template>
  <div class="layout__container">
    <NavDrawer />
    <NuxtPage />
  </div>
</template>

<style lang="postcss">
.layout__container {
  @apply min-h-screen;
  max-width: 100vw;
  @apply w-screen;
  min-width: 100vw;

  @apply bg-brand-white;
  @apply flex;
}
</style>
