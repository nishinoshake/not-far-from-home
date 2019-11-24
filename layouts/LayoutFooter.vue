<template>
  <footer class="footer">
    <nav class="footer-nav">
      <ul class="footer-list">
        <li class="footer-item">
          <nuxt-link to="/about/" class="footer-link">About</nuxt-link>
        </li>
        <li class="footer-item">
          <a
            href="https://github.com/nishinoshake/"
            target="_blank"
            rel="noopener"
            class="footer-link"
            >GitHub</a
          >
        </li>
      </ul>
    </nav>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  position: relative;
  z-index: 1;
  margin-top: $margin;
  padding: $margin 0;
  &:before {
    content: '';
    position: absolute;
    width: $margin;
    height: 1px;
    top: 0;
    left: calc(50% - #{$margin} / 2);
    background-color: $color-border;
  }
  &-list {
    display: flex;
    justify-content: center;
  }
  &-item {
    position: relative;
    &:nth-child(n + 2) {
      position: relative;
      margin-left: 1.5em;
      padding-left: 1.5em;
      &:before {
        content: '';
        width: 6px;
        height: 6px;
        position: absolute;
        bottom: calc(50% - 3px);
        left: -3px;
        background-color: currentColor;
        border-radius: 50%;
      }
    }
  }
  &-link {
    font-family: 'Raleway', sans-serif;
    text-decoration: none;
    @include min {
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
