<template>
  <div class="credit_card__container">
    <div class="credit_card__header">
      <img class="h-6" :src="datas[variant].company_logo" alt="logo-icon" />
      <span class="ml-1.5 text-sm font-semibold">{{datas[variant].company_name}}</span>
    </div>
    <div class="credit_card__body">
      <img width="40px" src="/sim-chip.jpg" alt="sim-chip" />
      <svg
        class="-mb-1 -mr-1"
        height="34px"
        viewBox="0 0 152.407 108"
        fill="transparent"
        stroke="black"
        stroke-width="2"
      >
        <path
          d="M382.20839,306a35.9375,35.9375,0,0,1,13.7499-28.3032,36,36,0,1,0,0,56.6064A35.938,35.938,0,0,1,382.20839,306Z"
          transform="translate(-319.79649 -252)"
        />
        <path
          d="M454.20349,306a35.99867,35.99867,0,0,1-58.2452,28.3032,36.00518,36.00518,0,0,0,0-56.6064A35.99867,35.99867,0,0,1,454.20349,306Z"
          transform="translate(-319.79649 -252)"
        />
      </svg>
    </div>
    <div class="credit_card__footer">
      <img
        class="credit_card__footer__pp"
        :src="datas[variant].user_pp"
        alt="profile-pic"
      />
      <h4 class="font-semibold leading-tight" style="color: #5e5e5e">
        <p>{{datas[variant].user_firstname}}</p>
        <p>{{datas[variant].user_lastname}}</p>
      </h4>
      <div class="mt-5 ml-auto text-2xs">{{datas[variant].card_id}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    variant: {
      type: Number,
      default: 0,
    },
  },

  data: () => ({
    datas: [
      {
        company_logo: "logo-1.jpg",
        company_name: "Selenzia",
        user_firstname: "Tina",
        user_lastname: "Wang",
        user_pp: "/tina-wang.jpg",
        card_id: "01337"
      },
      {
        company_logo: "logo-2.jpg",
        company_name: "Astra Investment",
        user_firstname: "Melinda",
        user_lastname: "Barrett",
        user_pp: "https://randomuser.me/api/portraits/women/17.jpg",
        card_id: "02092"
      },
      {
        company_logo: "logo-3.jpg",
        company_name: "Epharma",
        user_firstname: "Cindy",
        user_lastname: "Crawfor",
        user_pp: "https://randomuser.me/api/portraits/women/44.jpg",
        card_id: "00442"
      }
    ]
  })

};
</script>

<style lang="postcss" scoped>
.credit_card__container {
  height: 24rem;
  width: 15.2rem;
  @apply rounded-2xl border border-brand-white;
  background: linear-gradient(-60deg, #eaece5 10%, #fff 100%);
  @apply grid grid-cols-1;
  grid-template-rows: 3rem auto 5.7rem;
  
  box-shadow: 0 21px 25px -7px rgba(0, 0, 0, 0.2),
    0 34px 48px 3px rgba(0, 0, 0, 0.14), 0 9px 56px 8px rgba(0, 0, 0, 0.12);
}
.credit_card__container > * {
  @apply px-7;
}
.credit_card__header {
  @apply pt-7;
  @apply flex items-center;
}
.credit_card__body {
  @apply pb-7;
  @apply flex justify-between items-end;
}
.credit_card__footer {
  @apply rounded-b-2xl;
  background: linear-gradient(-60deg, #22211f 10%, #373635 100%);
  @apply flex items-center;

  color: #5e5e5e !important;
  text-shadow: 1px 1px black;
}
.credit_card__footer__pp {
  @apply mr-3;
  @apply h-9 w-9 rounded-full;
}
</style>