<template>
  <div class="modal__bg">
    <div class="modal__container" v-click-outside="closeModal">
      <div class="modal__header">
        <div class="modal__img">
          <utils-button
            :size="2"
            icon="x"
            :icon_size="26"
            :icon_stroke="1.8"
            :callback="closeModal"
          />
          <CreditCard class="mt-2 mx-auto transform origin-top scale-75"/>
        </div>
        <div class="modal__text">
          <h2>Tina Wang's card</h2>
          <hr />
          <h5>TYPE</h5>
          <div class="modal__text__row">
            <Icon class="mr-1.5" :size="18" variant="card" />
            <span class="mr-5">Physical</span>
            <Icon class="mr-1.5" :size="18" variant="check-circle" />
            <span>Active</span>
          </div>
          <h5>CARD #</h5>
          <div class="modal__text__row">
            <span>5103 9335 5847 7086</span>
          </div>
          <h5>EXP. DATE</h5>
          <div class="modal__text__row">
            <span class="mr-5">07 / 2021</span>
            <Icon class="mr-1.5" :size="20" variant="circle-slice-7" />
            <span>1 month left</span>
          </div>
          <h5>CVC</h5>
          <div class="modal__text__row">
            <span class="mr-4">***</span>
            <Icon class="mr-4" :size="20" variant="lock" />
            <h4 class="text-brand-light-gray">Permission required</h4>
          </div>
        </div>
      </div>

      <hr class="mb-5" />
      <div class="modal__body">
        <h5>SPEND LIMIT</h5>
        <div class="flex items-center">
          <h3>{{ formatPrice(4000) }}</h3>
          <h4 class="ml-1">per month</h4>
        </div>
        <h5>BALANCE</h5>
        <div class="flex items-center">
          <h4 class="text-brand-light-gray">Remaining</h4>
          <h3 class="ml-2">{{ formatPrice(1551.88) }}</h3>
          <h4 class="ml-auto text-brand-light-gray">Spent</h4>
          <h3 class="ml-2">{{ formatPrice(2448.12) }}</h3>
        </div>
        <div />
        <utils-progress-bar class="w-full -mt-2" :value="75" />
        <h5>LAST CHARGED</h5>
        <h3>02 May 2021</h3>
        <h5>VENDORS</h5>
        <h3>All types</h3>
      </div>
      <div class="modal__footer">
        <utils-button>Settings</utils-button>
        <utils-button>History</utils-button>
      </div>
    </div>
  </div>
</template>

<script>
import string_formatter from "~/mixins/StringFormatter.js";
export default {
  mixins: [string_formatter],
  methods: {
    closeModal() {
      this.$nuxt.$emit("modal-close");
    },
  },
};
</script>

<style lang="postcss" scoped>
.modal__bg {
  @apply absolute top-0 left-0;
  @apply h-screen w-screen;
  @apply flex justify-center items-center;
}

.modal__container {
  width: 38rem;
  @apply p-2;
  @apply bg-brand-white;
  box-shadow: 0 51px 55px -7px rgba(0, 0, 0, 0.2),
    0 64px 78px 3px rgba(0, 0, 0, 0.14), 0 9px 86px 8px rgba(0, 0, 0, 0.12);
}

.modal__header {
  @apply mb-6;
  @apply grid;
  grid-template-columns: 50% 50%;
}

.modal__body {
  @apply p-5;
  @apply grid gap-y-5 items-center;
  grid-template-columns: 33% 66%;
}

.modal__footer {
  @apply p-5;
  @apply grid gap-x-4;
  grid-template-columns: calc(50% - 0.625rem) calc(50% - 0.625rem);
}

.modal__img {
  @apply h-96 w-full;
  @apply p-2.5;
  @apply bg-brand-accent;
}
.modal__text {
  max-width: 100%;
  @apply mx-8;
  @apply flex flex-col;
}
.modal__text > :not(div) {
  @apply mt-6;
}
.modal__text__row {
  @apply mt-1.5;
  @apply flex items-center;
}
</style>