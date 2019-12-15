<template>
  <section class="about-section">
    <slot />
  </section>
</template>

<style lang="scss" scoped>
.about {
  &-section {
    position: relative;
    @include inside-small;
    + .about-section {
      margin-top: 7rem;
    }
  }
  &-title {
    margin-bottom: 2.5rem;
    font-size: 1.2rem;
    line-height: 1;
    @include font-xl;
  }
  &-text {
    @include font-xl;
    + .about-text {
      margin-top: 2rem;
    }
  }
  a {
    color: $color-link;
  }
}
</style>
