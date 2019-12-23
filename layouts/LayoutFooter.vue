<template>
  <transition name="footer-home">
    <button v-if="!isIndex" class="footer-home" @click="handleClickHome">
      都道府県を選ぶ
    </button>
  </transition>
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
  &-home {
    width: 28rem;
    height: 7rem;
    position: fixed;
    z-index: 10;
    bottom: 8rem;
    left: calc(50% - #{28rem / 2});
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
