<template>
  <div class="data_table__container">
    <div class="data_table__header">
      <div v-for="header in headers" :key="header.name">
        <h4>{{ header.name }}</h4>
        <div class="flex flex-col">
          <utils-button
            :size="0.75"
            icon="chevron-up"
            :icon_size="14"
            :callback="
              () => {
                orderBy(header.sorter, 'asc')
              }
            "
          />
          <utils-button
            :size="0.75"
            icon="chevron-down"
            :icon_size="14"
            :callback="
              () => {
                orderBy(header.sorter, 'desc')
              }
            "
          />
        </div>
      </div>
    </div>
    <div
      class="data_table__row"
      v-for="data in datas"
      :key="data.card_id"
      :ref="`table-row-${data.card_id}`"
      @click="
        selectRow(data.card_id);
        openModal()
      "
    >
      <div class="flex items-center">
        <img class="data_table__row__pp" :src="data.pp_src" alt="profile-pic" />
        <span>{{ data.holder }}</span>
      </div>
      <span>{{ data.card_id }}</span>
      <div class="flex items-center capitalize">
        <Icon :size="18" :variant="data.card_type == 'physical' ? 'credit-card' : 'credit-card-alt'" />
        <span class="ml-2.5 mr-2">{{ data.card_type }}</span>
        <Icon :size="18" :variant="`circle-slice-${data.card_duration}`" />
      </div>
      <span>{{ useStringFormat().formatPrice(data.balance) }}</span>
      <span
        >{{ useStringFormat().formatPrice(data.limit) }} <h4><p>/monthly</p></h4></span
      >
      <div>
        <span class="data_table__row__pill">{{ data.departement }}</span>
      </div>
      <span>{{ data.location }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      headers: [
        { name: "Holder", sorter: "holder" },
        { name: "Card", sorter: "card_id" },
        { name: "Type", sorter: "card_type" },
        { name: "Balance", sorter: "balance" },
        { name: "Limit", sorter: "limit" },
        { name: "Department", sorter: "departement" },
        { name: "Location", sorter: "location" },
      ],
      datas: [
        {
          holder: "Mabel Greene",
          pp_src: "https://randomuser.me/api/portraits/women/17.jpg",
          card_id: 8429,
          card_type: "physical",
          card_duration: 1,
          balance: 3202.9,
          limit: 4000,
          departement: "administration",
          location: "Los Angeles",
        },
        {
          holder: "Leo Spencer",
          pp_src: "https://randomuser.me/api/portraits/women/51.jpg",
          card_id: 9204,
          card_type: "physical",
          card_duration: 7,
          balance: 1551.88,
          limit: 4000,
          departement: "administration",
          location: "Los Angeles",
        },
        {
          holder: "Admanda Dunn",
          pp_src: "https://randomuser.me/api/portraits/women/60.jpg",
          card_id: 7503,
          card_type: "physical",
          card_duration: 3,
          balance: 1490.1,
          limit: 2000,
          departement: "administration",
          location: "Los Angeles",
        },
        {
          holder: "Joshua Kelly",
          pp_src: "https://randomuser.me/api/portraits/women/44.jpg",
          card_id: 2940,
          card_type: "physical",
          card_duration: 3,
          balance: 940.55,
          limit: 2000,
          departement: "administration",
          location: "Dalas",
        },
        {
          holder: "Jerome Quinn",
          pp_src: "https://randomuser.me/api/portraits/women/90.jpg",
          card_id: 5143,
          card_type: "virtual",
          card_duration: 0,
          balance: 203.42,
          limit: 250,
          departement: "marketing",
          location: "Dalas",
        },
        {
          holder: "Sherri Fisher",
          pp_src: "https://randomuser.me/api/portraits/women/12.jpg",
          card_id: 5628,
          card_type: "virtual",
          card_duration: 0,
          balance: 145.0,
          limit: 250,
          departement: "marketing",
          location: "Dalas",
        },
      ],
    }),

    methods: {
      getRowsDOMElementsList() {
        var dom_elements_list = []
        for (const ref in this.$refs) {
          dom_elements_list.push(this.$refs[ref][0])
        }
        return dom_elements_list
      },
      orderBy(header, direction) {
        this.getRowsDOMElementsList().forEach(el => {
          el.classList.add("data_table__row_hide")
        })
        setTimeout(() => {
          this.datas = this.datas.sort((a, b) => {
            var res = a[header] > b[header]
            res = res == 0 ? res - 1 : res
            return direction == "asc" ? res : -res
          })
          setTimeout(() => {
            this.getRowsDOMElementsList().forEach(el => {
              el.classList.remove("data_table__row_hide")
            })
          }, 50)
        }, 300)
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
    @apply mx-10 pb-6;
    @apply grid grid-cols-7;
    @apply border-b border-brand-dark;
  }
  .data_table__header > * {
    @apply mr-4 pr-3;
    @apply border-r border-brand-light;
    @apply flex justify-between;
    @apply text-brand-gray;
  }

  .data_table__row {
    @apply h-16;
    @apply px-10;
    @apply grid grid-cols-7 items-center;
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
