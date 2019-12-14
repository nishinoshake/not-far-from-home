<template>
  <AboutSection>
    <h2 class="about-title">＜データの収集＞</h2>
    <p class="about-text">
      大量のデータを気合で集め、<br />
      確認と調整を気合で行い、<br />
      ランキングを気合で作成する。
    </p>
    <p class="about-text">
      このサイトの半分は、<br />
      気合でできています。
    </p>
    <p class="about-text">あとの半分は、<br />APIのおかげです。</p>
    <p class="about-text">
      駅は<a href="http://www.ekidata.jp" target="_blank" rel="noopener"
        >駅データ.jp</a
      >で、<br />映画館は<a
        href="https://cloud.google.com/maps-platform/?hl=ja"
        target="_blank"
        rel="noopener"
        >Google Maps</a
      >で、<br />それぞれのデータを揃えました。
    </p>
    <p class="about-text">
      これらのAPIがなければ、<br />気合があっても無理でした。<br />ありがとうございました。
    </p>
    <p class="about-text">
      このサイトに載っていない映画館や、<br />閉館してしまった映画館がありましたら、<br /><a
        href="mailto:lawson.and.7.11@gmail.com"
        >メール</a
      >でご連絡をいただけたら嬉しいです。
    </p>
  </AboutSection>
</template>

<script>
import AboutSection from '@/components/about/AboutSection'

export default {
  components: { AboutSection }
}
</script>
