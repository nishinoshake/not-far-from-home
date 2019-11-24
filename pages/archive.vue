<template>
  <div class="archive">
    <div class="archive-prefecture-list">
      <ArchivePrefectureItem
        v-for="(item, i) in selectedRanking"
        :key="i"
        :pref="item.pref"
        :stations="item.stations"
      />
    </div>
    <nuxt-link to="/" class="archive-home" :class="{ 'is-active': canBack }"
      >HOME</nuxt-link
    >
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { scrollSlow } from '@/lib/scroller'
import ArchivePrefectureItem from '@/components/archive/ArchivePrefectureItem'

export default {
  components: { ArchivePrefectureItem },
  data() {
    return {
      canBack: false
    }
  },
  computed: {
    ...mapGetters(['selectedRanking'])
  },
  mounted() {
    if (this.$route.query.pref) {
      setTimeout(() => {
        scrollSlow(this.$route.query.pref)
      }, 300)
    }

    setTimeout(() => {
      this.canBack = true
    }, 1000)
  }
}
</script>

<style lang="scss" scoped>
.archive {
  &-prefecture-list {
    @include border-bottom;
    @include min($width-max + 1px) {
      @include border-left;
      @include border-right;
    }
  }
  &-home {
    width: 13rem;
    height: 3.5rem;
    position: fixed;
    z-index: 10;
    left: calc(50% - #{13rem / 2});
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    font-family: 'Raleway', sans-serif;
    border-radius: 999em;
    border: 1px solid $color-dark;
    background-color: $color-white;
    transform: translateY(100%);
    transition: color 0.14s linear, background-color 0.14s linear,
      opacity 0.1s linear, transform 0.5s $easeOutQuart;
    pointer-events: none;
    @include max {
      bottom: 2.4rem;
    }
    @include min {
      bottom: 2rem;
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
    &.is-active {
      opacity: 1;
      transform: translateY(0);
      pointer-events: auto;
    }
  }
}
</style>
