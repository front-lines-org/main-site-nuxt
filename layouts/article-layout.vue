<template>
  <div class="tw-container tw-mx-auto">
    <v-app>
      <div class="tw-sticky tw-top-0 tw-z-50 tw-flex">
        <tab-bar />
      </div>
      <div class="site-container tw-mb-44 mx-auto">
        <Nuxt />
      </div>
      <Footer />
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
