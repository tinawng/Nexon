<template>
  <button
    :class="[
      'button__container',
      icon
        ? !!this.$slots.default
          ? 'button__icon px-6'
          : 'button__icon'
        : 'button__text',
      dark ? 'button__dark' : '',
      rounded ? 'button__rounded' : '',
    ]"
    :style="css_var"
    @click="callback"
  >
    <Icon
      v-if="icon"
      :class="!!this.$slots.default ? 'mr-4' : 'mx-auto'"
      :variant="icon"
      :size="icon_size"
      :stroke="icon_stroke"
    />
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    icon: String,
    dark: Boolean,
    rounded: Boolean,
    size: { type: Number, default: 3.5 },
    icon_size: { type: Number, default: 24 },
    icon_stroke: { type: Number, default: 1.5 },
    callback: { type: Function, default: () => {} },
  },
  computed: {
    css_var: function () {
      return "--size: " + this.size + "rem";
    },
  },
};
</script>

<style lang="postcss" scoped>
.button__container {
  height: var(--size);
  @apply text-base font-medium text-brand-dark;
  @apply transition-colors;
}



.button__text {
  @apply px-8;
  @apply bg-brand-light;
}

.button__icon {
  min-width: var(--size);
  @apply transition-colors;
  @apply flex items-center;
}

.button__dark,
.button__container:hover {
  @apply bg-brand-dark text-brand-white;
}
.button__container:active {
  @apply bg-brand-semi-dark text-brand-light;
}

.button__dark:hover {
  @apply bg-brand-light text-brand-dark;
}

.button__rounded {
  @apply rounded-full;
}
</style>