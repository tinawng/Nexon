<script setup>
  import { vOnClickOutside } from "@vueuse/components"

  const nuxtApp = useNuxtApp()

  async function closeModal() {
    await nuxtApp.callHook("modal-close", {})
  }
</script>

<template>
  <div class="modal__bg">
    <div class="modal__container" v-on-click-outside="closeModal">
      <div class="modal__header">
        <div>
          <h2>Request #1-492</h2>
          <h4>Today, 6:23 PM</h4>
        </div>
        <utils-button :size="2" icon="x" :icon_size="32" :icon_stroke="1.5" :callback="closeModal" />
      </div>

      <div class="modal__body">
        <div class="w-100 mb-8 p-6 flex flex-col justify-center items-center bg-brand-accent">
          <h2>{{ useStringFormat().formatPrice(4200) }}</h2>
          <span>Single Payment</span>
        </div>
        <div class="my-6 flex items-center">
          <img class="h-10 w-10 mr-4 rounded-full" src="/logo-hotel.jpg" alt="profile-pic" />
          <div>
            <b>Hotel 'South Star'</b>
            <h4>Hotel / Travel</h4>
          </div>
        </div>
        <div class="my-6 flex items-center">
          <img
            class="h-10 w-10 mr-4 rounded-full"
            src="https://randomuser.me/api/portraits/women/60.jpg"
            alt="profile-pic"
          />
          <div>
            <b>Julia Fox</b>
            <h4>Administration</h4>
          </div>
        </div>
        <div class="my-6 pl-14 flex items-center">
          <Icon class="mr-2" variant="card" :size="20" /> 2940 <h3 class="mx-2">•</h3>
          <b>{{ useStringFormat().formatPrice(1552.88) }}</b>
        </div>
        <hr class="my-8" />
        <h4 class="mb-3">Comment</h4>
        <h3 class="mb-8">Booking a hotel in New York for me and my colleague for a week. Work trop on 08.19.2021.</h3>
      </div>
      <div class="modal__footer">
        <utils-button dark>Accept</utils-button>
        <utils-button>Decline</utils-button>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
  .modal__bg {
    @apply absolute top-0 left-0;
    @apply h-screen w-screen;
    @apply flex justify-center items-center;
  }

  .modal__container {
    width: 30rem;
    @apply p-7;
    @apply bg-brand-white;
    box-shadow: 0 51px 55px -7px rgba(0, 0, 0, 0.2), 0 64px 78px 3px rgba(0, 0, 0, 0.14),
      0 9px 86px 8px rgba(0, 0, 0, 0.12);
  }

  .modal__header {
    @apply mb-6;
    @apply flex justify-between;
  }

  .modal__body {
  }

  .modal__footer {
    @apply grid gap-x-4;
    grid-template-columns: calc(50% - 0.625rem) calc(50% - 0.625rem);
  }
</style>
