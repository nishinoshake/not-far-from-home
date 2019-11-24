<template>
  <section class="prefecture-station-item">
    <h3 class="prefecture-station-name">
      <a
        :href="googleIt(`${station.name}駅 賃貸`)"
        target="_blank"
        rel="noopener"
        class="prefecture-station-link"
      >
        <span class="prefecture-station-text">
          {{ station.name }}駅<span v-if="station.isDuplicate"
            >（{{ station.lines[0].name }}）</span
          >
        </span>
      </a>
    </h3>
    <CinemaList :cinemas="station.cinemas" />
    <p class="prefecture-station-ranking">{{ ranking }}</p>
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
.prefecture {
  &-station {
    &-item {
      position: relative;
      padding: 2rem;
      &:not(:last-child) {
        @include border-bottom;
      }
    }
    &-name {
      flex: none;
      margin-bottom: 1.5rem;
      font-size: 1.1rem;
      line-height: 1.2;
    }
    &-link {
      display: inline-flex;
      align-items: baseline;
      padding: 0.2rem;
      @include dot-border-horizontal(bottom);
    }
    &-ranking,
    &-point {
      position: absolute;
      padding: 0.8rem 1rem;
      line-height: 1;
      font-family: 'Roboto Mono', monospace;
    }
    &-ranking {
      top: 0;
      left: 0;
      @include border-right;
      @include border-bottom;
    }
    &-point {
      bottom: 0;
      right: 0;
      font-size: 0.8rem;
      @include border-left;
      @include border-top;
    }
  }
}
</style>
