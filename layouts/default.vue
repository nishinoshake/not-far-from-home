<template>
  <div class="container" id="container">
    <LayoutHeader />
    <main>
      <nuxt />
    </main>
    <LayoutFooter />
  </div>
</template>

<script>
import LayoutHeader from './LayoutHeader'
import LayoutFooter from './LayoutFooter'

export default {
  components: { LayoutHeader, LayoutFooter }
}
</script>

<style lang="scss">
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

* {
  -webkit-tap-highlight-color: rgba($color-dark, 0.5);
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
  font-weight: normal;
}

a {
  color: inherit;
  text-decoration: none;
  @include min {
    &[target='_blank']:hover {
      text-decoration: underline;
    }
  }
}

li {
  list-style: none;
}

input,
textarea,
select,
button {
  background: none;
  box-shadow: none;
  border: 0;
  border-radius: 0;
  outline: none;
  color: inherit;
  font-size: inherit;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
}

html {
  font-size: 14px;
  @include min {
    font-size: 16px;
  }
}

body {
  color: $color-font;
  line-height: 1.6;
  letter-spacing: 0.08em;
  font-feature-settings: 'palt';
  font-family: sans-serif;
  background-color: $color-bg;
}

.container {
  max-width: $width-max;
  margin: 0 auto;
}

.pc {
  @include max {
    display: none;
  }
}
.sp {
  @include min {
    display: none;
  }
}

.fade {
  &-enter-active,
  &-leave-active {
    transition: opacity 0.2s;
  }
  &-enter,
  &-leave-to {
    opacity: 0;
  }
}
</style>
