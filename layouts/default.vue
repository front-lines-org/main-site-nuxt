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

<style>
.site-container {
  min-height: 90vh;
  width: 100%;
}
</style>
