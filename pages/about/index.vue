<template>
  <div class="about">
    <AboutPrivacy />
    <AboutPoint />
    <AboutAd />
  </div>
</template>

<script>
import AboutPoint from '@/components/about/AboutPoint'
import AboutPrivacy from '@/components/about/AboutPrivacy'
import AboutAd from '@/components/about/AboutAd'
import { buildMeta } from '@/lib/meta'

export default {
  head() {
    return buildMeta('このサイトについて')
  },
  components: {
    AboutPoint,
    AboutPrivacy,
    AboutAd
  }
}
</script>

<style lang="scss" scoped>
.about {
  padding-top: 6.5rem;
}
</style>
