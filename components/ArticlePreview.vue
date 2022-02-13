<template>
  <v-card class="article" tile flat nuxt :to="`articles/${slug}`">
    <v-row>
      <v-col cols="7" sm="12" md="8">
        <p class="primary-color pa-1 font-weight-black">{{ articleType }}</p>
        <v-card-title class="pa-1" style="word-break: normal">{{
          title
        }}</v-card-title>
        <v-card-text class="pa-1">
          {{ description }}
        </v-card-text>
        <v-card-text class="pa-1">
          <b>By Ruben Soerdien</b>
        </v-card-text>
      </v-col>
      <v-col cols="5" sm="12" md="4" class="tw-mx-auto">
        <v-img :src="image" />
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'primary',
    },
    slug: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    articleType: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    img: {
      type: String,
      default: '',
    },
  },
  computed: {
    image() {
      try {
        const foundImage = require(`~/assets/img/${this.img}?webp`)
        return foundImage
      } catch {
        return null
      }
    },
  },
}
</script>
<style scoped>
.article:hover {
  text-decoration: underline;
}

.article {
  text-overflow: unset;
}
</style>
