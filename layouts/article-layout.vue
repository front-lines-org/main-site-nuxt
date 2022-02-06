<template>
  <div class="tw-container tw-mx-auto">
    <v-app>
      <div class="tw-sticky tw-top-0 tw-z-50 tw-flex">
        <v-btn
          text
          :ripple="false"
          class="back-wrapper tw-h-full"
          plain
          @click="to"
        >
          <v-btn icon class="tw-h-full" plain :ripple="false">
            <v-icon class="tw-h-full">mdi-chevron-left</v-icon>
          </v-btn>
        </v-btn>
        <tab-bar />
      </div>
      <div class="site-container tw-mb-2 mx-auto">
        <Nuxt />
      </div>
    </v-app>
  </div>
</template>

<script>
export default {
  methods: {
    to() {
      this.$router.go(-1)
    },
  },
}
</script>

<style scoped>
.back-wrapper {
  height: 100% !important;
}
</style>
