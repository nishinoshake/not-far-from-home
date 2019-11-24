<template>
  <AboutSection>
    <h2 class="about-title">Ranking</h2>
    <p class="about-text">
      ランキングに使用している「ポイント」は、<br />映画館数と距離をもとに算出しています。
    </p>
    <p class="about-text">
      距離1.6km以上をベースの10ptとして、<br />0kmのとき、最高の20ptになり、<br />その間は距離に応じて配点しています。
    </p>
    <p class="about-text">
      このサイトで使用している距離は、<br />いずれも経路を加味した距離ではなく、<br />直線距離になるため、参考程度で。
    </p>
  </AboutSection>
</template>

<script>
import AboutSection from '@/components/about/AboutSection'

export default {
  components: { AboutSection }
}
</script>
