<template>
  <div>
    <v-footer padless absolute>
      <v-card class="flex" flat tile>
        <v-divider />
        <v-card-title>
          <img
            src="/logo_transparent.png"
            width="200px"
            style="height: 100px; object-fit: cover"
          />
          <strong class="subheading"></strong>

          <v-spacer></v-spacer>

          <v-btn v-for="icon in icons" :key="icon" class="mx-4" icon>
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="py-2 text-center">
          {{ new Date().getFullYear() }} —
          <strong>Front Lines Organisation</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
export default {
  data: () => ({
    icons: ['mdi-facebook', 'mdi-twitter', 'mdi-github', 'mdi-instagram'],
  }),
}
</script>
