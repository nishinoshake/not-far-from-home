<template>
  <ul class="cinema-list">
    <li class="cinema-item" v-for="cinema in cinemas" :key="cinema.id">
      <a
        :href="googleIt(cinema.name)"
        target="_blank"
        rel="noopener"
        class="cinema-link"
        >{{ cinema.name }}</a
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
  &-item {
    @include font-m;
    &:nth-child(n + 2) {
      margin-top: 0.3rem;
    }
  }
  &-link {
    position: relative;
    padding: 0.1rem 0;
  }
  &-distance {
    position: absolute;
    bottom: 0.1rem;
    padding-left: 0.5rem;
    color: $color-muted;
    @include font-en;
    @include font-xs;
  }
}
</style>
