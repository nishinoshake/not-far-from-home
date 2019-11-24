<template>
  <div class="shindan">
    <h2 class="shindan-copy">
      映画館がたくさんある「駅」を探します。<br />お好きな都道府県を選んでください。
    </h2>
    <div class="shindan-area-list">
      <section
        class="shindan-area-item"
        v-for="(area, i) in prefectureAreas"
        :key="i"
      >
        <h3 class="shindan-area-name">{{ area.name }}</h3>
        <ul class="shindan-prefecture-list">
          <li
            class="shindan-prefecture-item"
            v-for="prefecture in area.prefectures"
            :key="prefecture.id"
          >
            <nuxt-link
              :to="{ path: '/result/', query: { pref: prefecture.en } }"
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
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['prefectureAreas'])
  }
}
</script>

<style lang="scss" scoped>
.shindan {
  position: relative;
  z-index: 1;
  &-copy {
    position: relative;
    padding-bottom: $margin;
    margin-bottom: $margin;
    line-height: 2;
    &:after {
      content: '↓';
      position: absolute;
      bottom: 0;
      left: 50%;
      font-size: 1.2rem;
      transform: translate(-50%, 45%);
    }
  }
  &-area {
    &-list {
      margin-top: 2rem;
      padding: 0 4rem;
    }
    &-item {
      &:nth-child(n + 2) {
        @include max {
          margin-top: 5rem;
        }
        @include min {
          margin-top: $margin;
        }
      }
    }
    &-name {
      color: $color-muted;
      @include max {
        margin-bottom: 0.2rem;
        font-size: 1.2rem;
      }
      @include min {
        margin-bottom: 0.6rem;
        font-size: 0.9rem;
      }
    }
  }
  &-prefecture {
    &-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    &-item {
      @include max {
        margin-top: 1.2rem;
      }
    }
    &-link {
      position: relative;
      border-bottom: 1px solid transparent;
      letter-spacing: 0.08em;
      transition: background-color 0.14s linear;
      @include max {
        padding: 0.7rem 1rem;
        font-size: 1.2rem;
      }
      @include min {
        padding: 0.7rem 0.5rem;
      }
      &:before {
        content: '';
        width: 6px;
        height: 6px;
        position: absolute;
        bottom: 0;
        left: calc(50% - 6px / 2);
        opacity: 0;
        background-color: currentColor;
        border-radius: 50%;
      }
      @include min {
        &:hover:before {
          opacity: 1;
        }
      }
    }
  }
}
</style>
