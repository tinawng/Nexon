<template>
  <div class="data_table__container">
    <div class="data_table__header">
      <div v-for="header in headers" :key="header">
        <h4>{{ header }}</h4>
      </div>
    </div>

    <h2 class="mt-10 mx-10">Today</h2>
    <div
      class="data_table__row"
      v-for="(data, index) in today_transaction"
      :key="index"
      :ref="`table-row-${index}`"
      @click="
        selectRow(index);
        openModal()
      "
    >
      <h4>{{ useStringFormat().formatHour(data.date) }}</h4>
      <div class="flex">
        <img class="w-12 mr-4 rounded-full" :src="data.vendor_icon" alt="vendor-icon" />
        <div class="flex flex-col justify-evenly">
          <span class="font-medium">{{ data.vendor }}</span>
          <h4 class="flex"> {{ data.vendor_type }} • {{ data.author }} • {{ data.departement }} </h4>
        </div>
      </div>
      <div class="flex"> <Icon class="mr-4" variant="file" /><Icon variant="message" /> </div>
      <div class="text-right">
        {{ useStringFormat().formatPrice(data.amount) }}
        <h4 class="flex justify-end items-center">
          <Icon class="mr-2" variant="log-in" :size="16" />
          {{ useStringFormat().formatPrice(data.cashback) }}
        </h4>
      </div>
    </div>

    <h2 class="mt-10 mx-10">Yesterday</h2>
    <div
      class="data_table__row"
      v-for="(data, index) in yesterday_transaction"
      :key="index + today_transaction.length"
      :ref="`table-row-${index + today_transaction.length}`"
      @click="
        selectRow(index + today_transaction.length);
        openModal()
      "
    >
      <h4>{{ useStringFormat().formatHour(data.date) }}</h4>
      <div class="flex">
        <img class="w-12 mr-4 rounded-full" :src="data.vendor_icon" alt="vendor-icon" />
        <div class="flex flex-col justify-evenly">
          <span class="font-medium">{{ data.vendor }}</span>
          <h4 class="flex"> {{ data.vendor_type }} • {{ data.author }} • {{ data.departement }} </h4>
        </div>
      </div>
      <div class="flex"> <Icon class="mr-4" variant="file" /><Icon variant="message" /> </div>
      <div class="text-right">
        {{ useStringFormat().formatPrice(data.amount) }}
        <h4 class="flex justify-end items-center">
          <Icon class="mr-2" variant="log-in" :size="16" />{{ useStringFormat().formatPrice(data.cashback) }}
        </h4>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      headers: ["Date", "Vendor", "Attachement", "AMOUNT"],
      datas: [
        {
          date: "Jun 01 2021 18:23",
          vendor: "Apple Store",
          vendor_icon: "/logo-apple.jpg",
          vendor_type: "Electronics",
          author: "Bruce McKonan",
          departement: "Engineering",
          amount: 3202.9,
          cashback: 68.05,
        },
        {
          date: "Jun 01 2021 15:10",
          vendor: "Webflow",
          vendor_icon: "/logo-webflow.jpg",
          vendor_type: "Saas/Software",
          author: "Sarah Brown",
          departement: "Marketing",
          amount: 135,
          cashback: 2.7,
        },
        {
          date: "Jun 01 2021 07:40",
          vendor: "Starbucks",
          vendor_icon: "/logo-starbucks.jpg",
          vendor_type: "Coffe",
          author: "Edgar Simons",
          departement: "Office supply",
          amount: 48.72,
          cashback: 0.97,
        },
        {
          date: "May 31 2021 12:30",
          vendor: "Amazon",
          vendor_icon: "/logo-amazon.jpg",
          vendor_type: "Gen. merchandise",
          author: "Emily Ryan",
          departement: "Engineering",
          amount: 244.04,
          cashback: 4.88,
        },
        {
          date: "May 31 2021 13:46",
          vendor: "American Airlines",
          vendor_icon: "/logo-amair.jpg",
          vendor_type: "Coffe",
          author: "Edgar Simons",
          departement: "Office supply",
          amount: 1.208,
          cashback: 24.16,
        },
      ],
    }),

    computed: {
      today_transaction: function () {
        return [...this.datas].splice(0, 3)
      },
      yesterday_transaction: function () {
        return [...this.datas].splice(3)
      },
    },

    methods: {
      getRowsDOMElementsList() {
        var dom_elements_list = []
        for (const ref in this.$refs) {
          dom_elements_list.push(this.$refs[ref][0])
        }
        return dom_elements_list
      },
      selectRow(index) {
        this.getRowsDOMElementsList().forEach(el => {
          el.classList.remove("data_table__row_selected")
        })
        this.$refs[`table-row-${index}`][0].classList.add("data_table__row_selected")
      },
      async openModal() {
        const nuxtApp = useNuxtApp()
        await nuxtApp.callHook("modal-open", {})
      },
    },
  }
</script>

<style lang="postcss" scoped>
  .data_table__header {
    @apply mx-10 pb-5;
    @apply grid;
    grid-template-columns: 0.7fr 60% 1fr 1fr;
    @apply border-b border-brand-dark;
  }
  .data_table__header > * {
    @apply mr-4 pr-3;
    @apply border-r border-brand-light;
    @apply flex justify-between;
    @apply text-brand-gray;
  }
  .data_table__header > :last-of-type {
    @apply pr-0 mr-0 ml-auto;
    @apply border-none;
  }

  .data_table__row {
    @apply h-28;
    @apply px-10;
    @apply grid items-center;
    grid-template-columns: 0.7fr 60% 1fr 1fr;
    @apply cursor-pointer;
    transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1), background 0.15s cubic-bezier(0.4, 0, 0.2, 1),
      color 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .data_table__row:hover,
  .data_table__row_selected {
    @apply bg-brand-dark text-brand-light;
  }
  .data_table__row__pp {
    @apply mr-3;
    @apply h-6 w-6 rounded-full;
  }
  .data_table__row__pill {
    @apply py-2 px-3;
    @apply rounded-full bg-brand-light;
    @apply text-sm;
    @apply capitalize;
    @apply transition-colors;
  }
  .data_table__row:hover .data_table__row__pill,
  .data_table__row_selected .data_table__row__pill {
    @apply bg-brand-semi-dark text-brand-light;
  }
  .data_table__row_hide {
    @apply opacity-0;
  }
</style>
