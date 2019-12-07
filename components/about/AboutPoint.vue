<template>
  <AboutSection>
    <p class="about-text">
      各都道府県のランキングは、<br />映画館数と距離をもとに算出した、<br />ポイントに基づいて作成しています。
    </p>
    <p class="about-text">
      これ以上の徒歩は辛いと感じる、<br />1.6km(20分)をベースの10pt、<br />0kmのときを最高の20ptとして、<br />その間は距離に応じて配点しています。
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
