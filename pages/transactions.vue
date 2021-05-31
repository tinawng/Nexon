<template>
  <div class="page__container">
    <div class="page__header">
      <h1 class="flex items-end">
        Transactions
        <h4 class="ml-3 mb-1 tracking-widest">340</h4>
      </h1>
      <div class="flex">
        <utils-input
          class="mr-4"
          icon="magnify"
          width="28"
          placeholder="Cards search"
        ></utils-input>
        <utils-input
          class="mr-4"
          icon="calendar"
          width="14"
          placeholder="Date range"
        ></utils-input>
        <utils-button dark>Export as CSV</utils-button>
      </div>
    </div>

    <div class="page__body">
      <div class="col-span-2">
        <div class="summary__container">
          <div>
            <p>Last</p>
            <p>30 days</p>
          </div>
          <div class="pl-10 border-l border-brand-light">
            <h5>TRANSACTIONS</h5>
            <b>95</b>
          </div>
          <div class="pl-10 border-l border-brand-light">
            <h5>TOTAL SPENT</h5>
            <b>$12,492.20</b>
          </div>
          <div class="pl-10 border-l border-brand-light">
            <h5>TOTAL CASHBACK</h5>
            <span class="flex items-center">
              <b>$249.84</b>
              <h5 class="ml-2">(2%)</h5>
            </span>
          </div>
        </div>
      </div>
      <div class="p-12 flex flex-col bg-brand-light">
        <h2>Requests</h2>
        <div class="mt-8 border-b border-brand-black">
          <span class="flex items-center">
            <b>$112.30</b>
            <h4 class="ml-auto">Today, 6:23 PM</h4>
          </span>
          <div class="mt-6 mb-8 pl-4 border-l border-brand-light-gray">
            <div class="mb-4 flex items-center">
              <img
                class="h-10 w-10 mr-4 rounded-full"
                src="https://randomuser.me/api/portraits/women/17.jpg"
                alt="profile-pic"
              />
              <div class="leading-tight">
                <b>BestBuy</b>
                <h4>General Merchandise</h4>
              </div>
            </div>
            <div class="flex items-center">
              <icon class="mr-3" variant="user" :size="18" :stroke="2.5" />
              <b class="mr-3">Sam Thomas</b>
              <h4 class="mr-3">•</h4>
              <h4>Design</h4>
            </div>
          </div>
        </div>
      </div>
    </div>

    <transition name="slide-fade">
      <utils-modal v-if="show_modal" />
    </transition>
  </div>
</template>

<script>
import Icon from "../components/Icon.vue";
export default {
  components: { Icon },
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

.page__body {
  @apply grid grid-cols-3;
}
.summary__container {
  @apply grid grid-cols-4;
}
.summary__container > div {
  @apply py-4;
}
</style>
