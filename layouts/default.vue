<template>
  <v-app>
    <v-container>
      <nav-bar />
      <tab-bar />
      <div class="site-container tw-mb-2">
        <Nuxt />
      </div>
    </v-container>
  </v-app>
</template>

<style scss>
@import url('https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@300;400;500;700&family=Merriweather:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap');
.site-container {
  min-height: 90vh;
  width: 100%;
}
</style>
