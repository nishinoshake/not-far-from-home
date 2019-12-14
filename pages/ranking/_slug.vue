<template>
  <section class="ranking" v-if="result">
    <h2 class="ranking-station">
      <a class="ranking-station-row">
        <span class="ranking-station-name">{{ topStationName }}</span>
        <span class="ranking-station-roman">{{ topStationRoman }}</span>
      </a>
    </h2>
    <div class="ranking-description">
      <p class="ranking-description-text">
        {{ prefName }}の1位は{{ topStationName }}駅
      </p>
      <p class="ranking-description-text">
        駅から<span class="ranking-description-mark"
          >半径{{ selectedDistance }}km</span
        >以内に<br /><span class="ranking-description-mark"
          >{{ numberOfCinemas }}個</span
        >の映画館があります
      </p>
    </div>
    <PrefectureItem :pref="pref" :stations="stations" />
  </section>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
import PrefectureItem from '@/components/PrefectureItem'
import { buildMeta } from '@/lib/meta'
import { googleIt } from '@/lib/utils'

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
      return this.topStation ? this.topStation.name : ''
    },
    topStationRoman() {
      return this.topStation ? this.topStation.roman : ''
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
    ...mapMutations(['selectPrefecture']),
    googleIt
  }
}
</script>

<style lang="scss" scoped>
.ranking {
  &-station {
    display: flex;
    justify-content: center;
    padding: 0 $padding;
    &-row {
      padding: 1.6rem 5rem;
      line-height: 1;
      @include border;
    }
    &-name {
      display: block;
      letter-spacing: normal;
      letter-spacing: 0.3em;
      @include font-xl;
    }
    &-roman {
      margin: 1.2rem -2.5rem 0;
      display: block;
      letter-spacing: 0.12em;
      @include font-en;
      @include font-m;
    }
  }
  &-description {
    margin: 4rem 0 4.5rem;
    &-text {
      @include font-l;
      + .ranking-description-text {
        margin-top: 1rem;
      }
    }
    &-mark {
      display: inline-block;
      margin: 0 0.2em;
      background: linear-gradient(
        transparent 60%,
        $color-yellow 60%,
        $color-yellow 90%,
        transparent 90%
      );
    }
  }
}
</style>
