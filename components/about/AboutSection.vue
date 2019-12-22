<template>
  <section class="about-section">
    <slot />
  </section>
</template>

<style lang="scss" scoped>
.about {
  &-section {
    position: relative;
    + .about-section {
      margin-top: 5rem;
    }
  }
  &-title {
    margin-bottom: 1.5rem;
    line-height: 1;
    @include font-xl;
  }
  &-text {
    @include font-xl;
  }
  a {
    text-decoration: underline;
  }
}
</style>
