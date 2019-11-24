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
    <CinemaList :cinemas="topStationCinemas" />
    <ul class="result-button-list">
      <li class="result-button-item">
        <nuxt-link
          :to="{ path: '/archive/', query: { pref: pref.en } }"
          class="result-button mod-next"
          >{{ prefName }}のランキングを見る</nuxt-link
        >
      </li>
      <li class="result-button-item">
        <nuxt-link to="/" class="result-button mod-prev">
          都道府県を選び直す
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
import CinemaList from '@/components/CinemaList'

export default {
  components: { CinemaList },
  computed: {
    ...mapState(['selectedDistance', 'prefectures']),
    ...mapGetters(['result']),
    pref() {
      return this.result ? this.result.pref : null
    },
    prefName() {
      return this.pref ? this.pref.ja : ''
    },
    topStation() {
      return this.result ? this.result.stations[0] : null
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
  text-align: center;
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
    margin-bottom: 1.5rem;
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
  &-button {
    width: 20rem;
    padding: 1rem;
    position: relative;
    border-radius: 999em;
    transition: 0.14s linear;
    @include center-flex;
    &:after {
      @include center-vertical;
    }
    &.mod-prev {
      width: 14rem;
      font-size: 0.9rem;
      &:after {
        content: '←';
        left: 1.5rem;
      }
    }
    &.mod-next {
      border: 1px solid $color-dark;
      &:after {
        content: '→';
        right: 1.5rem;
      }
      @include min {
        &:hover {
          color: $color-white;
          background-color: $color-dark;
        }
      }
    }
    &-list {
      margin-top: $margin;
    }
    &-item {
      display: flex;
      justify-content: center;
      &:nth-child(n + 2) {
        margin-top: 1.5rem;
      }
    }
  }
}
</style>
