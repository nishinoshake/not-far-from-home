<template>
  <div class="shindan">
    <h1 class="shindan-title"><span>映画館の近くに住みたい</span></h1>
    <div class="shindan-copy">
      <p>できれば近いだけでなく<br />選択肢がたくさん欲しい</p>
      <p>
        一番の理想は渋谷だけど<br />東京に住めるぐらいなら<br />そもそも悩んじゃいない
      </p>
      <p>
        今の住まいから離れずに<br />引越が楽で映画館が多い<br />そんな所が知りたいんだ
      </p>
      <p>でもいったいどうすれば</p>
      <p>いっそ数えてしまおうか<br />全国の駅で映画館の数を</p>
    </div>
    <div class="shindan-please">
      <p>🎬🎬🎬🎬🎬🎬🎬🎬🎬🎬🎬</p>
      <p>都道府県を選んで下さい</p>
      <p>🎬🎬🎬🎬🎬🎬🎬🎬🎬🎬🎬</p>
    </div>
    <div class="shindan-area-list">
      <section
        class="shindan-area-item"
        v-for="(area, i) in prefectureAreas"
        :key="i"
      >
        <h3 class="shindan-area-name">
          <span>{{ area.name }}</span>
        </h3>
        <ul class="shindan-prefecture-list">
          <li
            class="shindan-prefecture-item"
            v-for="prefecture in area.prefectures"
            :key="prefecture.id"
          >
            <nuxt-link
              :to="`/ranking/${prefecture.en}/`"
              class="shindan-prefecture-link"
            >
              {{ prefecture.ja }}
            </nuxt-link>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import { buildMeta } from '@/lib/meta'

export default {
  head() {
    return buildMeta()
  },
  computed: {
    ...mapGetters(['prefectureAreas'])
  },
  mounted() {
    this.setHasHistory()
  },
  methods: {
    ...mapMutations(['setHasHistory'])
  }
}
</script>

<style lang="scss" scoped>
.shindan {
  position: relative;
  z-index: 1;
  overflow: hidden;
  padding-top: 6.5rem;
  &-title {
    margin-bottom: 5.5rem;
    line-height: 1;
    @include font-main;
  }
  &-copy,
  &-please {
    line-height: 1.5;
    @include font-main;
    * + * {
      margin-top: 4rem;
    }
  }
  &-please {
    margin: 7rem 0 7.5rem;
  }
  &-area {
    &-list {
      padding: 0 $padding;
      letter-spacing: 0.2em;
    }
    &-item {
      &:nth-child(n + 2) {
        margin-top: 7rem;
      }
    }
    &-name {
      margin-bottom: 2.5rem;
      font-size: 2.5rem;
    }
  }
  &-prefecture {
    &-list {
      display: flex;
      flex-wrap: wrap;
      background-color: $color-fill;
      padding: $border-width / 2;
    }
    &-item {
      width: calc(100% / 3);
      padding: $border-width / 2;
      flex-grow: 1;
    }
    &-link {
      display: block;
      position: relative;
      padding: 1.6rem 0.8rem;
      font-size: 2rem;
      background: $color-white;
      @include min {
        padding: 0.8rem;
      }
    }
  }
}
</style>
