<template>
  <div class="prefecture">
    <div class="prefecture-item" :id="pref.en">
      <div class="prefecture-station-list">
        <PrefectureStation
          v-for="(station, index) in stations"
          :key="station.id"
          :ranking="index + 1"
          :station="station"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PrefectureStation from './PrefectureStation'

export default {
  components: { PrefectureStation },
  props: {
    pref: Object,
    stations: Array
  }
}
</script>

<style lang="scss" scoped>
.prefecture {
  &-item {
    margin: 0 auto;
    @include border;
  }
}
</style>
