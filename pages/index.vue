<template>
  <div class="shindan">
    <h1 class="shindan-title">映画館の近くに住みたい</h1>
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
    <div class="shindan-please shindan-label">
      <p>＝＝＝＝＝＝＝＝＝＝＝</p>
      <p>都道府県を選んで下さい</p>
      <p>＝＝＝＝＝＝＝＝＝＝＝</p>
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
    <div class="shindan-privacy">
      <section>
        <h2 class="shindan-label">＝プライバシポリシー＝</h2>
        <p>
          アクセス状況把握のため<br /><a
            href="https://marketingplatform.google.com/intl/ja/about/analytics/"
            target="_blank"
            rel="noopener"
            >グーグルアナリティクス</a
          ><br />をサイトに導入してます
        </p>
        <p>
          オプトアウトの手順等は<br /><a
            href="https://support.google.com/analytics/topic/2919631"
            target="_blank"
            rel="noopener"
            >こちら</a
          >でご確認ください
        </p>
      </section>
      <section>
        <h2 class="shindan-label">＝ランキングの仕組み＝</h2>
        <p>
          仕組みの詳細については<br />ここでは蛇足になるので<br /><a
            href="https://qiita.com/nishinoshake/items/64b2eabf6d6ee909b320"
            target="_blank"
            rel="noopener"
            >別ページ</a
          >にまとめました
        </p>
      </section>
      <section>
        <h2 class="shindan-label">＝邦画が好きなかたへ＝</h2>
        <p>
          <a href="https://houga.cc" target="_blank" rel="noopener"
            >→邦画の予告を、朝まで</a
          >
        </p>
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
  &-title,
  &-copy,
  &-please,
  &-privacy {
    @include font-main;
  }
  &-label {
    margin: 0.3em 0;
    background-color: $color-black;
    color: $color-white;
  }
  &-title {
    margin-top: -0.3em;
  }
  &-please {
    margin-bottom: 10rem;
  }
  &-privacy {
    margin: 10rem 0 -0.1em;
    a {
      text-decoration: underline;
    }
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
