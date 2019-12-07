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
      return this.topStation ? `${this.topStation.name}駅` : ''
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
    margin-bottom: $margin;
    &-row {
      padding: 1rem 3rem;
      letter-spacing: 0.1em;
      color: $color-white;
      background-color: $color-dark;
    }
    &-name {
      display: block;
      font-size: 1.6rem;
    }
    &-roman {
      margin-top: 0.2rem;
      display: block;
      font-size: 1.2rem;
      @include font-en;
    }
  }
  &-description {
    margin-bottom: 4rem;
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
    &-link {
      display: flex;
      justify-content: center;
      margin-top: $margin;
      &-text {
        min-width: 12rem;
        min-height: 3.5rem;
        padding: 0.8rem 2rem;
        border-radius: 999em;
        border: 1px solid $color-dark;
        background-color: $color-white;
        transition: color 0.14s linear, background-color 0.14s linear;
        @include center-flex;
        @include max {
        }
        @include min {
          bottom: 2rem;
          &:hover {
            color: $color-white;
            background-color: $color-dark;
          }
        }
      }
    }
  }
}
</style>
