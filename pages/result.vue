<template>
  <section class="result" v-if="result">
    <h2 class="result-station">
      <a class="result-station-row">
        <span class="result-station-text">
          <span
            v-for="(str, index) in topStationName"
            :key="index"
            class="result-station-str"
            >{{ str }}</span
          >
        </span>
      </a>
    </h2>
    <div class="result-description">
      <p class="result-description-text">
        {{ prefName }}で<span class="pc">、</span
        ><br class="sp" />映画館に行きやすい駅は<span class="pc">、</span
        ><br class="sp" />「{{ topStationName }}」です。
      </p>
      <p class="result-description-text">
        駅から<span class="result-description-mark"
          >半径{{ selectedDistance }}km</span
        >以内に<br class="sp" /><span class="result-description-mark"
          >{{ numberOfCinemas }}個</span
        >の映画館があります。
      </p>
      <p class="result-description-text">
        映画館だけで決めるのはあれですが<span class="pc">、</span
        ><br class="sp" />引越し先の候補に入れてみては。
      </p>
    </div>
    <PrefectureItem :pref="pref" :stations="stations" />
  </section>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
import PrefectureItem from '@/components/PrefectureItem'

export default {
  components: { PrefectureItem },
  computed: {
    ...mapState(['selectedDistance', 'prefectures']),
    ...mapGetters(['result']),
    pref() {
      return this.result ? this.result.pref : null
    },
    prefName() {
      return this.pref ? this.pref.ja : ''
    },
    stations() {
      return this.result ? this.result.stations : null
    },
    topStation() {
      return this.stations ? this.stations[0] : null
    },
    topStationName() {
      return this.topStation ? `${this.topStation.name}駅` : ''
    },
    topStationCinemas() {
      return this.topStation ? this.topStation.cinemas : []
    },
    numberOfCinemas() {
      return this.topStationCinemas.length
    }
  },
  created() {
    if (this.$route.query.pref) {
      const prefecture = this.prefectures.find(
        pref => pref.en === this.$route.query.pref
      )

      if (prefecture) {
        this.selectPrefecture({ id: prefecture.id })

        return
      }
    }

    this.$router.push('/')
  },
  methods: {
    ...mapMutations(['selectPrefecture'])
  }
}
</script>

<style lang="scss" scoped>
.result {
  &-station {
    display: flex;
    justify-content: center;
    margin-bottom: $margin;
    &-row {
      padding: 0.2em 0.8em;
      font-size: 1.6rem;
      letter-spacing: 0.1em;
      color: $color-white;
      background-color: $color-dark;
    }
  }
  &-description {
    margin-bottom: $margin;
    &-text {
      line-height: 2;
      &:nth-child(n + 2) {
        @include max {
          margin-top: 0.8em;
        }
      }
    }
    &-mark {
      display: inline-block;
      margin: 0 0.2em;
      line-height: 1.2;
      font-weight: bold;
      background: linear-gradient(transparent 60%, $color-yellow 60%);
    }
  }
}
</style>
