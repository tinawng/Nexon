<script setup>
  const nuxtApp = useNuxtApp()

  nuxtApp.hook("modal-open", payload => {
    show_modal.value = true
  })
  nuxtApp.hook("modal-close", payload => {
    show_modal.value = false
  })

  const show_modal = ref(false)
</script>

<template>
  <div class="page__container">
    <div class="page__header">
      <div class="flex items-end">
        <h1>Cards</h1>
        <h4 class="ml-3 mb-1 tracking-widest">56</h4>
      </div>
      <utils-input icon="magnify" width="28" placeholder="Cards search"></utils-input>
      <div class="flex">
        <utils-button class="mr-8" icon="sliders">Customize table</utils-button>
        <utils-button icon="list" dark />
        <utils-button icon="grid" />
      </div>
      <utils-button @click="show_modal = true">New Card</utils-button>
    </div>
    <utils-data-tables-cards />

    <Transition name="fade">
      <utils-modals-card v-if="show_modal" />
    </Transition>
  </div>
</template>

<style lang="postcss" scoped>
  .page__container {
    @apply w-full h-52;
  }
  .page__header {
    @apply mb-6 p-10;
    @apply flex justify-between;
  }
</style>
