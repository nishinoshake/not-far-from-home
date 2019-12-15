<template>
  <footer class="footer" :class="{ 'mod-home': !isIndex }">
    <transition name="fade">
      <nav class="footer-nav" v-if="isIndex">
        <ul class="footer-list">
          <li class="footer-item">
            <nuxt-link to="/about/" class="footer-link"
              >仕組みプライバシー宣伝</nuxt-link
            >
          </li>
        </ul>
      </nav>
    </transition>

    <transition name="footer-home">
      <button v-if="!isIndex" class="footer-home" @click="handleClickHome">
        別の都道府県も見てみる
      </button>
    </transition>
  </footer>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['hasHistory']),
    isIndex() {
      return this.$route.name === 'index'
    }
  },
  methods: {
    handleClickHome() {
      if (this.hasHistory) {
        this.$router.go(-1)
      } else {
        this.$router.push('/')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  height: 23rem;
  position: relative;
  @include center-flex;
  @include min {
    height: 12rem;
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
    padding-bottom: 0.1rem;
    @include font-l;
    @include border-bottom;
  }
  &-home {
    width: 34rem;
    height: 7rem;
    position: fixed;
    z-index: 10;
    bottom: 8rem;
    left: calc(50% - #{34rem / 2});
    border-radius: 999em;
    background-color: $color-white;
    transition: color 0.14s linear, background-color 0.14s linear;
    @include center-flex;
    @include font-l;
    @include border;
    @include min {
      height: 6rem;
      bottom: 3rem;
    }
    &:before {
      content: '←';
      left: 2rem;
      @include center-vertical;
    }
    &-enter-active {
      transition: transform 0.5s 0.3s $easeOutQuart;
    }
    &-leave-active {
      pointer-events: none;
      transition: 1ms;
    }
    &-enter {
      transform: translateY(100%) translateY(14rem);
      @include min {
        transform: translateY(100%) translateY(9rem);
      }
    }
  }
}
</style>
