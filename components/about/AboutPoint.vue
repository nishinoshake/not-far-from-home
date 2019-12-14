<template>
  <AboutSection>
    <h2 class="about-title">＜ランキングの作成＞</h2>
    <p class="about-text">
      各都道府県のランキングは<br />映画館数と距離をもとに算出した<br />ポイントに基づいて作成しています
    </p>
    <p class="about-text">
      個人的に徒歩が辛いと感じる<br />1.6km(20分)をベースの10pt<br />0kmのときを最高の20ptとして<br />距離に応じて配点しています
    </p>
    <p class="about-text">
      計算に使用している距離は<br />経路を加味しない直線距離です
    </p>
  </AboutSection>
</template>

<script>
import AboutSection from '@/components/about/AboutSection'

export default {
  components: { AboutSection }
}
</script>
