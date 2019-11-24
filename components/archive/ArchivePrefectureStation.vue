<template>
  <section class="archive-prefecture-station-item">
    <h3 class="archive-prefecture-station-name">
      <a
        :href="googleIt(`${station.name}駅 賃貸`)"
        target="_blank"
        rel="noopener"
        class="archive-prefecture-station-link"
      >
        <span class="archive-prefecture-station-ranking">{{ ranking }}.</span>
        <span class="archive-prefecture-station-text">
          {{ station.name }}駅<span v-if="station.isDuplicate"
            >（{{ station.lines[0].name }}）</span
          >
        </span>
      </a>
    </h3>
    <CinemaList :cinemas="station.cinemas" />
    <p class="archive-prefecture-station-point">{{ station.point }}pt</p>
  </section>
</template>

<script>
import CinemaList from '@/components/CinemaList'
import { googleIt } from '@/lib/utils'

export default {
  components: { CinemaList },
  props: {
    ranking: Number,
    station: Object
  },
  methods: {
    googleIt
  }
}
</script>

<style lang="scss" scoped>
.archive-prefecture {
  &-station {
    &-item {
      position: relative;
      @include max {
        padding: 1.2rem 0 0.6rem;
      }
      @include min($width-max + 1px) {
        display: flex;
        padding: 1.5rem 7rem 1.5rem 0;
      }
      &:not(:last-child) {
        @include border-bottom;
      }
    }
    &-name {
      flex: none;
      @include inside-small;
      @include max {
        margin-bottom: 0.3rem;
        padding-right: 7rem;
      }
      @include min($width-max + 1px) {
        width: 18rem;
        display: flex;
        align-items: center;
        @include dot-border-vertical(right);
      }
    }
    &-link {
      display: inline-flex;
      align-items: baseline;
      padding: 0.2rem;
      @include max {
        @include dot-border-horizontal(bottom);
      }
    }
    &-ranking {
      margin-right: 0.1rem;
      font-family: 'Roboto Mono', monospace;
    }
    &-point {
      position: absolute;
      color: $color-muted;
      font-size: 0.9rem;
      line-height: 1;
      font-family: 'Roboto Mono', monospace;
      @include max {
        top: 1.6rem;
        right: 1.5rem;
      }
      @include min {
        top: 50%;
        right: 1.5rem;
        transform: translateY(-50%);
      }
    }
  }
}
</style>
