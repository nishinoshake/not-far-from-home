<template>
  <header class="header">
    <h1 class="header-title">
      <nuxt-link to="/">
        <span class="header-title-en">NOT FAR FROM HOME</span>
        <span class="header-title-ja">（映画館の近くに住みたい）</span>
      </nuxt-link>
    </h1>
  </header>
</template>

<style lang="scss" scoped>
.header {
  position: relative;
  z-index: 1;
  margin-bottom: $margin;
  padding: $margin 0;
  &:after {
    content: '';
    position: absolute;
    width: $margin;
    height: 1px;
    bottom: 0;
    left: calc(50% - #{$margin} / 2);
    background-color: $color-gray;
  }
  &-title {
    letter-spacing: 0.1em;
    @include max {
      @include inside-small;
    }
    &-en {
      display: block;
      font-size: 1.4rem;
      @include font-en;
    }
    &-ja {
      display: block;
      margin-top: 0.2rem;
    }
  }
  &-list {
    display: flex;
    justify-content: center;
  }
  &-item {
    position: relative;
    &:nth-child(n + 2) {
      position: relative;
      margin-left: 1.5em;
      padding-left: 1.5em;
      &:before {
        content: '';
        width: 6px;
        height: 6px;
        position: absolute;
        bottom: calc(50% - 3px);
        left: -3px;
        background-color: currentColor;
        border-radius: 50%;
      }
    }
  }
  &-link {
    text-decoration: none;
    @include font-en;
    @include min {
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
