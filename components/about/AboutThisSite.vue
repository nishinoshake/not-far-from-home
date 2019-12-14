<template>
  <AboutSection>
    <h2 class="about-title">＜ データの収集 ＞</h2>
    <p class="about-text">
      駅は<a href="http://www.ekidata.jp" target="_blank" rel="noopener"
        >駅データ.jp</a
      >で<br />映画館は<a
        href="https://cloud.google.com/maps-platform/?hl=ja"
        target="_blank"
        rel="noopener"
        >Google Maps</a
      >で<br />必要なデータを揃えました
    </p>
    <p class="about-text">
      これらの<a :href="googleIt('API とは')" target="_blank" rel="noopener"
        >API</a
      >のおかげで<br />制作の手間を減らせました<br />ありがとうございました
    </p>
    <p class="about-text">
      掲載内容に関するご連絡は<br /><a href="mailto:lawson.and.7.11@gmail.com"
        >メール</a
      >でお願いいたします
    </p>
  </AboutSection>
</template>

<script>
import { googleIt } from '@/lib/utils'
import AboutSection from '@/components/about/AboutSection'

export default {
  components: { AboutSection },
  methods: {
    googleIt
  }
}
</script>
