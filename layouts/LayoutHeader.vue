<template>
  <header class="header">
    <h1 class="header-title">
      <nuxt-link to="/">NOT FAR FROM HOME</nuxt-link>
    </h1>
    <nav class="header-nav">
      <ul class="header-list">
        <li class="header-item">
          <nuxt-link to="/" class="header-link-index">診断</nuxt-link>
        </li>
        <li class="header-item">
          <nuxt-link to="/archive/" class="header-link-archive">一覧</nuxt-link>
        </li>
      </ul>
    </nav>
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
    background-color: $color-border;
  }
  &-title {
    margin-bottom: 1rem;
    font-family: 'Raleway', sans-serif;
    text-align: center;
    font-size: 1.4rem;
    letter-spacing: 0.1em;
    color: $color-muted;
    @include max {
      @include inside-small;
    }
  }
  &-list {
    display: flex;
    justify-content: center;
  }
  &-item {
    margin: 0 0.3rem;
    a {
      position: relative;
      padding: 0.8rem;
      font-size: 0.9rem;
      letter-spacing: 0.2em;
      color: $color-muted;
      &:before {
        content: '';
        width: 6px;
        height: 6px;
        position: absolute;
        bottom: 0;
        left: calc(50% - 6px / 2);
        opacity: 0;
        background-color: currentColor;
        border-radius: 50%;
      }
      @include min {
        &:hover {
          color: $color-font;
          &:before {
            opacity: 1;
          }
        }
      }
    }
  }
  &-link-index.nuxt-link-exact-active,
  &-link-archive.nuxt-link-active {
    color: $color-font;
    &:before {
      opacity: 1;
    }
  }
}
</style>
