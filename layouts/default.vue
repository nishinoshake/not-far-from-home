<template>
  <div class="container" :class="`mod-${routeName}`" id="container">
    <LayoutHeader />
    <main class="main">
      <nuxt />
    </main>
    <LayoutFooter />
  </div>
</template>

<script>
import LayoutHeader from './LayoutHeader'
import LayoutFooter from './LayoutFooter'

export default {
  components: { LayoutHeader, LayoutFooter },
  computed: {
    routeName() {
      return this.$route.name
    }
  }
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
  -webkit-tap-highlight-color: rgba($color-black, 0.5);
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
  text-align: center;
  line-height: 1.6;
  letter-spacing: 0.08em;
  font-feature-settings: 'palt';
  font-family: sans-serif;
}

.container {
  max-width: $mq-max;
  margin: 0 auto;
  &.mod-archive {
    padding-bottom: 5.5rem;
  }
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

@keyframes loading {
  0% {
    content: '.';
  }
  25% {
    content: '..';
  }
  50% {
    content: '...';
  }
  75% {
    content: '....';
  }
}
</style>
