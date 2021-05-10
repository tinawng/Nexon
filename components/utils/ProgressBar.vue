<template>
  <div class="progress_bar__container" :style="css_var" />
</template>

<script>
export default {
  props: { value: { type: Number, default: 0 } },
  computed: {
    css_var: function () {
      return `--progress: ${this.value}%`;
    },
  },
};
</script>

<style lang="postcss" scoped>
.progress_bar__container {
  @apply relative;
  @apply h-4;
  @apply bg-brand-light;
}
.progress_bar__container:after {
  content: "";
  @apply absolute top-0 left-0;
  @apply h-full;
  width: var(--progress);
  @apply bg-brand-dark;
}
</style>