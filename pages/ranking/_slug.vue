<template>
  <section class="ranking" v-if="result">
    <h2 class="ranking-station">
      <a class="ranking-station-row">
        <span class="ranking-station-text">
          <span
            v-for="(str, index) in topStationName"
            :key="index"
            class="ranking-station-str"
            >{{ str }}</span
          >
        </span>
      </a>
    </h2>
    <div class="ranking-description">
      <p class="ranking-description-text">
        {{ prefName }}で<span class="pc">、</span
        ><br class="sp" />映画館に行きやすい駅は<span class="pc">、</span
        ><br class="sp" />「{{ topStationName }}」です。
      </p>
      <p class="ranking-description-text">
        駅から<span class="ranking-description-mark"
          >半径{{ selectedDistance }}km</span
        >以内に<br class="sp" /><span class="ranking-description-mark"
          >{{ numberOfCinemas }}個</span
        >の映画館があります。
      </p>
      <p class="ranking-description-text">
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
import { buildMeta } from '@/lib/meta'

export default {
  head() {
    return buildMeta(`${this.prefName}で映画館に行きやすい駅のランキング`)
  },
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
  fetch({ store, params }) {
    const prefecture = store.state.prefectures.find(
      pref => pref.en === params.slug
    )

    if (prefecture) {
      store.commit('selectPrefecture', { id: prefecture.id })
    }
  },
  mounted() {
    if (!this.result) {
      this.$router.push('/')
    }
  },
  methods: {
    ...mapMutations(['selectPrefecture'])
  }
}
</script>

<style lang="scss" scoped>
.ranking {
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
