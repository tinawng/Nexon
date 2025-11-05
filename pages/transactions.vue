<script setup>
  const nuxtApp = useNuxtApp()

  nuxtApp.hook("modal-open", payload => {
    show_modal.value = true
  })
  nuxtApp.hook("modal-close", payload => {
    show_modal.value = false
  })

  const show_modal = ref(false)
  const requests = [
    {
      amount: 112.3,
      date: "Jun 01 2021 18:23",
      vendor: "BestBuy",
      vendor_type: "General Merchandise",
      vendor_icon: "/logo-bestbuy.jpg",
      author: "Sam Thomas",
      department: "Design",
    },
    {
      amount: 4200,
      date: "Jun 01 2021 13:04",
      vendor: "Hotel 'SouthStar'",
      vendor_type: "Hotel / Travel",
      vendor_icon: "/logo-hotel.jpg",
      author: "Julia Fox",
      department: "Administration",
    },
    {
      amount: 299,
      date: "Jun 01 2021 10:27",
      vendor: "SalesForce",
      vendor_type: "SaaS / Soft",
      vendor_icon: "/logo-salesforce.jpg",
      author: "Diane Palmer",
      department: "Human Resources",
    },
  ]
</script>

<template>
  <div class="page__container">
    <div class="page__header">
      <div class="flex items-end">
        <h1>Transactions</h1>
        <h4 class="ml-3 mb-1 tracking-widest">340</h4>
      </div>
      <div class="flex">
        <utils-input class="mr-4" icon="magnify" width="28" placeholder="Cards search"></utils-input>
        <utils-input class="mr-4" icon="calendar" width="14" placeholder="Date range"></utils-input>
        <utils-button dark @click="show_modal = true">Export as CSV</utils-button>
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
        <utils-data-tables-transactions />
      </div>

      <div class="p-12 flex flex-col bg-brand-light">
        <h2 class="flex items-center"
          >Requests <span class="requests__pill">{{ requests.length }}</span></h2
        >
        <div class="requests__request" v-for="(request, index) in requests" :key="index" @click="show_modal = true">
          <span class="flex items-center">
            <b>{{ useStringFormat().formatPrice(request.amount) }}</b>
            <h4 class="ml-auto">{{ useStringFormat().formatDate(request.date) }}</h4>
          </span>
          <div class="mt-6 mb-8 pl-4 border-l border-brand-light-gray">
            <div class="mb-4 flex items-center">
              <img class="h-10 w-10 mr-4 rounded-full" :src="request.vendor_icon" alt="profile-pic" />
              <div class="leading-tight">
                <b>{{ request.vendor }}</b>
                <h4>{{ request.vendor_type }}</h4>
              </div>
            </div>
            <div class="flex items-center">
              <icon class="mr-3" variant="user" :size="18" :stroke="2.5" />
              <b class="mr-3">{{ request.author }}</b>
              <h4 class="mr-3">•</h4>
              <h4>{{ request.department }}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Transition name="fade">
      <utils-modals-transaction v-if="show_modal" />
    </Transition>
  </div>
</template>

<style lang="postcss" scoped>
  .page__container {
    @apply w-full max-h-screen;
    @apply overflow-y-scroll;
    scrollbar-width: none;
  }
  ::-webkit-scrollbar {
    @apply w-0;
  }

  .page__header {
    @apply mb-6 p-10;
    @apply flex justify-between;
  }

  .page__body {
    @apply grid grid-cols-3;
  }

  .requests__pill {
    @apply mt-1 ml-4 py-1 px-3;
    @apply rounded-full;
    background-color: #dbdcd5;
    @apply text-xs;
  }
  .requests__request {
    @apply mt-6 pt-2;
    @apply border-b border-brand-black;
    @apply transition-colors;
    @apply cursor-pointer;
  }
  .requests__request:hover {
    background-color: #dbdcd5;
  }

  .summary__container {
    @apply mx-10 mb-10;
    @apply grid grid-cols-4;
  }
  .summary__container > div {
    @apply py-4;
  }
</style>
