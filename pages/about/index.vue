<template>
  <div class="about">
    <AboutThisSite />
    <AboutPoint />
    <AboutPrivacy />
    <AboutAd />
  </div>
</template>

<script>
import AboutThisSite from '@/components/about/AboutThisSite'
import AboutPoint from '@/components/about/AboutPoint'
import AboutPrivacy from '@/components/about/AboutPrivacy'
import AboutAd from '@/components/about/AboutAd'
import { buildMeta } from '@/lib/meta'

export default {
  head() {
    return buildMeta('このサイトについて')
  },
  components: {
    AboutThisSite,
    AboutPoint,
    AboutPrivacy,
    AboutAd
  }
}
</script>
