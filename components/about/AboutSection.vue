<template>
  <section class="about-section">
    <slot />
  </section>
</template>

<style lang="scss" scoped>
.about {
  &-section {
    position: relative;
    text-align: center;
    @include inside-small;
    + .about-section {
      margin-top: $margin;
      padding-top: $margin;
      &:before {
        content: '';
        position: absolute;
        width: $margin;
        height: 1px;
        top: 0;
        left: calc(50% - #{$margin} / 2);
        background-color: $color-border;
      }
    }
  }
  &-title {
    margin-bottom: 1.8rem;
    font-size: 1.2rem;
    line-height: 1;
    font-family: 'Raleway', sans-serif;
  }
  &-text {
    line-height: 2;
    + .about-text {
      margin-top: 1.2rem;
    }
  }
  &-list {
    margin-top: 1.2rem;
  }
  &-item {
    line-height: 1.8;
    &:nth-child(n + 2) {
      margin-top: 0.2rem;
    }
  }
  a {
    text-decoration: underline;
    @include min {
      &:hover {
        text-decoration: none;
      }
    }
  }
}
</style>
