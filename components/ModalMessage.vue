<template>
  <transition name="message" @after-leave="clearModal">
    <div v-if="isModalOpen" class="message">
      <p class="message-text" v-html="modalMessage"></p>
      <button
        v-if="isError"
        class="message-button"
        type="button"
        @click="closeModal"
      >
        OK
      </button>
    </div>
  </transition>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState(['isError', 'isModalOpen', 'modalMessage'])
  },
  methods: {
    ...mapActions(['clearModal']),
    ...mapMutations(['closeModal', 'clearIsError', 'clearModalMessage'])
  }
}
</script>

<style lang="scss" scoped>
.message {
  width: 34rem;
  padding: 3rem 2rem;
  position: fixed;
  z-index: 10;
  left: calc(50% - (34rem / 2));
  bottom: 7rem;
  line-height: 1.8;
  background-color: $color-white;
  border: $border-width solid $color-fill;
  @include min {
    bottom: 3rem;
  }
  @include font-l;
  &-enter-active {
    transition: transform 0.5s $easeOutQuart;
  }
  &-leave-active {
    transition: transform 0.3s $easeInQuart;
  }
  &-enter,
  &-leave-to {
    transform: translateY(100%) translateY(7rem);
    @include min {
      transform: translateY(100%) translateY(3rem);
    }
  }
  &-button {
    margin-top: 3rem;
    padding: 1rem 5rem;
    background-color: $color-white;
    border: $border-width solid $color-fill;
    border-radius: 999em;
    @include font-en;
    @include font-l;
  }
}
</style>
