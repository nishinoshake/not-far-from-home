<template>
  <ul class="cinema-list">
    <li class="cinema-item" v-for="cinema in cinemas" :key="cinema.id">
      <a
        :href="googleIt(cinema.name)"
        target="_blank"
        rel="noopener"
        class="cinema-link"
        >{{ cinema.name }}（{{ cinema.distance }}km）</a
      >
    </li>
  </ul>
</template>

<script>
import { googleIt } from '@/lib/utils'

export default {
  props: {
    cinemas: Array
  },
  methods: {
    googleIt
  }
}
</script>

<style lang="scss" scoped>
.cinema {
  &-list {
    flex-grow: 1;
    @include inside-small;
    @include max($width-max) {
      padding-top: 1rem;
      padding-bottom: 1rem;
    }
  }
  &-item {
    &:nth-child(n + 2) {
      @include max {
        margin-top: 0.6rem;
      }
      @include min {
        margin-top: 0.3rem;
      }
    }
  }
  &-link {
    display: block;
    padding: 0.1rem 0;
    font-size: 0.9rem;
    @include max {
    }
  }
}
</style>
