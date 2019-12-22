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
      margin-top: 10rem;
    }
  }
  &-title {
    margin-bottom: 3.5rem;
    font-size: 1.2rem;
    line-height: 1;
    @include font-main;
  }
  &-text {
    line-height: 1.5;
    @include font-main;
    + .about-text {
      margin-top: 2.5rem;
    }
  }
  a {
    text-decoration: underline;
  }
}
</style>
