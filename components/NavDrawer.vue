<template>
  <div class="nav_drawer__container">
    <NuxtLink tag="div" to="/" class="nav_drawer__brand border-0">
      <Icon class="ml-0.5 mr-1" variant="disc" :size="44" />
      <h3 class="text-base font-extrabold">Nexon</h3>
    </NuxtLink>

    <div class="nav_drawer__menu">
      <NuxtLink tag="div" to="/transactions" class="nav_drawer__item border-0">
        <Icon
          class="nav_drawer__item__icon"
          variant="money"
          :size="20"
          :stroke="2.5"
        />
        <h3>Transaction</h3>
        <div class="nav_drawer__item__pill">2</div>
      </NuxtLink>
      <NuxtLink tag="div" to="/cards"  class="nav_drawer__item border-0">
        <Icon
          class="nav_drawer__item__icon"
          variant="card"
          :size="20"
          :stroke="2.5"
        />
        <h3>Cards</h3>
      </NuxtLink>
      <div class="nav_drawer__item opacity-40">
        <Icon
          class="nav_drawer__item__icon"
          variant="user"
          :size="20"
          :stroke="2.5"
        />
        <h3>People</h3>
      </div>
      <div class="nav_drawer__item opacity-40">
        <Icon
          class="nav_drawer__item__icon"
          variant="upload"
          :size="20"
          :stroke="2.5"
        />
        <h3>Reimburse</h3>
      </div>
      <div class="nav_drawer__item opacity-40">
        <Icon
          class="nav_drawer__item__icon"
          variant="package"
          :size="20"
          :stroke="2.5"
        />
        <h3>Vendors</h3>
      </div>
      <div class="nav_drawer__item opacity-40">
        <Icon
          class="nav_drawer__item__icon"
          variant="file-text"
          :size="20"
          :stroke="2.5"
        />
        <h3>Reports</h3>
      </div>
    </div>

    <div class="nav_drawer__footer">
      <div class="nav_drawer__item">
        <img
          class="nav_drawer__item__pp -ml-px"
          src="/tina-wang.jpg"
          alt="profile-pic"
        />
        <h3>Tina Wang</h3>
      </div>
      <hr class="my-2 mx-3.5" />
      <div class="nav_drawer__item">
        <Icon
          class="nav_drawer__item__icon"
          variant="settings"
          :size="20"
          :stroke="2.5"
        />
        <h3>Settings</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
h3 {
  @apply opacity-0;
  @apply transition-opacity;
}

.nav_drawer__container {
  width: 85px;
  @apply py-4;
  @apply border-r border-brand-light;
  @apply flex flex-col;
  @apply overflow-x-hidden;

  min-width: 85px;

  transition-property: width, min-width;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.6s;
}
.nav_drawer__container:hover {
  min-width: 15rem;
  width: 15rem;
}
.nav_drawer__container:hover h3 {
  @apply opacity-100;
}

.nav_drawer__brand {
  @apply w-52;
  @apply mt-3 mb-5 mx-4;
  @apply flex items-center;
  font-family: "TexGyreHeros";
  @apply cursor-pointer;
}

.nav_drawer__item {
  @apply w-52;
  @apply mx-4 py-3 pl-3.5 pr-4;
  @apply flex items-center;
  @apply transition-colors;
  @apply cursor-pointer;
}
.nav_drawer__item:hover {
  @apply rounded-sm bg-brand-accent;
}
.nav_drawer__item:hover .nav_drawer__item__pill {
  @apply bg-brand-white;
}
.nav_drawer__item__icon {
  @apply mr-4;
}
.nav_drawer__item__pill {
  @apply ml-auto;
  @apply px-3;
  @apply rounded-full bg-brand-light;
  @apply text-xs;
}
.nav_drawer__item__pp {
  @apply mr-3;
  @apply h-6 w-6 rounded-full;
}

.nav_drawer__footer {
  @apply flex-grow;
  @apply flex flex-col justify-end;
}
</style>