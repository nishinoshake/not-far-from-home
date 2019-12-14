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
      margin-top: 8rem;
    }
  }
  &-title {
    margin-bottom: 3rem;
    font-size: 1.2rem;
    line-height: 1;
    @include font-xl;
  }
  &-text {
    @include font-l;
    + .about-text {
      margin-top: 2rem;
    }
  }
  &-list {
    margin-top: 1.2rem;
  }
  &-item {
    @include font-l;
    &:nth-child(n + 2) {
      margin-top: 0.2rem;
    }
  }
  a {
    color: $color-link;
  }
}
</style>
