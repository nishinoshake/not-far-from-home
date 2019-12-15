<template>
  <section class="ranking" v-if="result">
    <h2 class="ranking-station">
      <span class="ranking-station-name">
        <span v-for="(t, index) in topStationName" :key="index">{{ t }}</span>
      </span>
      <span class="ranking-station-roman">
        <span v-for="(t, index) in topStationRoman" :key="index">{{ t }}</span>
      </span>
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
    topStationNameLength() {
      return this.topStationName ? this.topStationName.length : 0
    },
    topStationRoman() {
      return this.topStation ? this.topStation.roman : ''
    },
    topStationRomanLength() {
      return this.topStationRoman ? this.topStationRoman.length : 0
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
  padding: $padding $padding 0;
  &-station {
    padding: 6rem $padding;
    line-height: 1;
    letter-spacing: 0;
    overflow: hidden;
    @include border;
    &-name,
    &-roman {
      display: flex;
      justify-content: center;
      align-items: baseline;
    }
    &-name {
      @include font-grande;
      span {
        margin: 0 0.15em;
      }
    }
    &-roman {
      margin-top: 1.4rem;
      @include font-en;
      @include font-l;
      span {
        margin: 0 0.02em;
      }
    }
  }
  &-description {
    padding: 5.5rem 0;
    @include border-left;
    @include border-right;
    &-text {
      @include font-l;
      + .ranking-description-text {
        margin-top: 2rem;
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

@keyframes from-left {
  0% {
    transform: translateX(-700px);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes from-right {
  0% {
    transform: translateX(700px);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
