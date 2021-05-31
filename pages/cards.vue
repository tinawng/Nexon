<template>
  <div class="page__container">
    <div class="page__header">
      <h1 class="flex items-end">
        Cards
        <h4 class="ml-3 mb-1 tracking-widest">56</h4>
      </h1>
      <utils-input
        icon="magnify"
        width="28"
        placeholder="Cards search"
      ></utils-input>
      <div class="flex">
        <utils-button class="mr-8" icon="sliders">Customize table</utils-button>
        <utils-button icon="list" dark />
        <utils-button icon="grid" />
      </div>
      <utils-button>New Card</utils-button>
    </div>
    <utils-data-tables-cards />

    <transition name="slide-fade">
      <utils-modals-card v-if="show_modal" />
    </transition>
  </div>
</template>

<script>
export default {
  data: () => ({ show_modal: false }),
  created() {
    this.$nuxt.$on("modal-open", () => {
      this.show_modal = true;
    });
    this.$nuxt.$on("modal-close", () => {
      this.show_modal = false;
    });
  },
};
</script>

<style lang="postcss" scoped>
.page__container {
  @apply w-full h-52;
}
.page__header {
  @apply mb-6 p-10;
  @apply flex justify-between;
}
</style>
