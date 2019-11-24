<template>
  <div class="archive-prefecture-item" :id="pref.en">
    <h2 class="archive-prefecture-name">{{ pref.ja }}</h2>
    <div class="archive-prefecture-station-list">
      <ArchivePrefectureStation
        v-for="(station, index) in stations"
        :key="station.id"
        :ranking="index + 1"
        :station="station"
      />
    </div>
  </div>
</template>

<script>
import ArchivePrefectureStation from './ArchivePrefectureStation'

export default {
  components: { ArchivePrefectureStation },
  props: {
    pref: Object,
    stations: Array
  }
}
</script>

<style lang="scss" scoped>
.archive {
  &-prefecture {
    &-name {
      position: sticky;
      z-index: 1;
      top: 0;
      margin-top: -1px;
      padding-top: 1rem;
      padding-bottom: 1rem;
      background-color: $color-yellow;
      @include border-top;
      @include border-bottom;
      @include inside-small;
    }
  }
}
</style>
