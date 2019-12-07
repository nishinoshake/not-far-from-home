<template>
  <AboutSection>
    <p class="about-text">
      本サイトでは、アクセス状況把握のため、<br />Google
      Analyticsを利用しています。
    </p>
    <p class="about-text">
      収集している情報や利用方法、<br />オプトアウトの手順については、<br />下記のリンクからご確認いただけます。
    </p>
    <ul class="about-list">
      <li class="about-item">
        <a
          href="https://policies.google.com/technologies/types?hl=ja"
          target="_blank"
          rel="noopener"
          >Cookieの種類</a
        >
      </li>
      <li class="about-item">
        <a
          href="https://policies.google.com/technologies/cookies?hl=ja"
          target="_blank"
          rel="noopener"
          >Cookieの利用方法</a
        >
      </li>
      <li class="about-item">
        <a
          href="https://support.google.com/analytics/answer/181881?hl=ja"
          target="_blank"
          rel="noopener"
          >オプトアウトアドオン</a
        >
      </li>
    </ul>
  </AboutSection>
</template>

<script>
import AboutSection from '@/components/about/AboutSection'

export default {
  components: { AboutSection }
}
</script>
