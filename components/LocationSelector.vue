<template>
  <div class="location">
    <button class="location-button" type="button" @click="handleClick">
      現在地から探す
    </button>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import { fetchApi } from '@/lib/utils'

export default {
  computed: {
    ...mapState(['prefectures'])
  },
  methods: {
    ...mapActions(['showLocationError', 'showSearching', 'gotoPrefecture']),
    ...mapMutations(['closeModal']),
    handleClick() {
      if (!navigator.geolocation) {
        return this.showLocationError()
      }

      this.showSearching()

      navigator.geolocation.getCurrentPosition(
        async ({ coords }) => {
          if (!coords || !coords.latitude || !coords.longitude) {
            return this.showLocationError()
          }

          try {
            const { code } = await fetchApi('prefecture', {
              lat: coords.latitude,
              lon: coords.longitude
            })

            if (!code) {
              console.warn('APIで都道府県を取得できませんでした')
              return this.showLocationError()
            }

            const prefecture = this.prefectures.find(p => p.id === code)

            if (!prefecture) {
              console.warn('APIの都道府県コードが不正です')
              return this.showLocationError()
            }

            this.closeModal()
            this.$router.push(`/ranking/${prefecture.en}/`)
          } catch (e) {
            console.warn(e)

            this.showLocationError()
          }
        },
        err => {
          console.warn(err)
          this.showLocationError()
        }
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.location {
  &-button {
    width: 100%;
    padding: 1.5rem 1rem;
    border: $border-width solid $color-fill;
    border-radius: 999em;
    @include font-enorme;
  }
}
</style>
