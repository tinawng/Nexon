<template>
  <div class="input__container" :style="`width: ${width}rem`">
    <input
      :class="{ 'border-b border-brand-light': underline }"
      type="text"
      :placeholder="placeholder"
    />
    <Icon v-if="icon" :variant="icon" />
  </div>
</template>

<script>
export default {
  props: ["icon", "width", "placeholder", "underline"],
};
</script>

<style lang="postcss" scoped>
.input__container {
  @apply px-4;
  @apply border border-brand-light;
  @apply bg-brand-white;
  @apply flex justify-between items-center;
}
input::placeholder {
  @apply text-brand-gray;
}
</style>