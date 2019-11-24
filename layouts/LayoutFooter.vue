<template>
  <footer class="footer">
    <transition name="fade">
      <nav class="footer-nav" v-if="isIndex">
        <ul class="footer-list">
          <li class="footer-item">
            <nuxt-link to="/about/" class="footer-link">About</nuxt-link>
          </li>
        </ul>
      </nav>
    </transition>

    <transition name="footer-home">
      <nuxt-link v-if="!isIndex" to="/" class="footer-home"
        >都道府県を選ぶ</nuxt-link
      >
    </transition>
  </footer>
</template>

<script>
export default {
  computed: {
    isIndex() {
      return this.$route.name === 'index'
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  height: 7.5rem;
  position: relative;
  margin-top: $margin;
  @include center-flex;
  &:before {
    content: '';
    position: absolute;
    width: $margin;
    height: 1px;
    top: 0;
    left: calc(50% - #{$margin} / 2);
    background-color: $color-gray;
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
    padding: 0.6rem 1rem;
    border: 1px solid $color-dark;
    background-color: $color-white;
    transition: color 0.14s linear, background-color 0.14s linear;
    @include font-en;
    @include min {
      &:hover {
        color: $color-white;
        background-color: $color-dark;
      }
    }
  }
  &-home {
    width: 16rem;
    height: 3.5rem;
    position: fixed;
    z-index: 10;
    bottom: 2rem;
    left: calc(50% - #{16rem / 2});
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 999em;
    border: 1px solid $color-dark;
    background-color: $color-white;
    transition: color 0.14s linear, background-color 0.14s linear;
    @include min {
      &:hover {
        color: $color-white;
        background-color: $color-dark;
      }
    }
    &:before {
      content: '←';
      left: 1.5rem;
      @include center-vertical;
    }
    &-enter-active {
      transition: transform 0.4s 0.22s $easeOutQuart;
    }
    &-leave-active {
      transition: opacity 0.12s linear;
    }
    &-enter {
      transform: translateY(100%) translateY(2rem);
    }
    &-leave-to {
      opacity: 0;
    }
  }
}
</style>
