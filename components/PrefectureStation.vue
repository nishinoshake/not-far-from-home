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
          {{ station.name }}駅<span v-if="station.isDuplicated"
            >（{{ station.lines[0].name }}</span
          >
        </span>
      </a>
    </h3>
    <CinemaList :cinemas="station.cinemas" />
    <p class="prefecture-station-ranking">
      <span>{{ ranking }}</span>
    </p>
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
      padding: 3rem 1rem;
      &:not(:last-child) {
        @include border-bottom;
      }
    }
    &-name {
      margin-bottom: 3rem;
      line-height: 1.2;
      @include font-l;
    }
    &-text {
      @include border-bottom;
    }
    &-link {
      display: inline;
      padding: 0.2rem;
    }
    &-ranking {
      position: absolute;
      top: -0.5px;
      left: -0.5px;
      line-height: 1;
      @include font-l;
      @include font-en;
      @include center-flex;
      @include border-right;
      @include border-bottom;
      span {
        min-width: 2.2em;
        min-height: 2.2em;
        display: block;
        padding: 0.9rem 1rem 0.7rem;
        @include center-flex;
      }
    }
  }
}
</style>
