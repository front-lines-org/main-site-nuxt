<template>
  <v-card class="article" tile flat nuxt :to="`articles/${slug}`">
    <v-row>
      <v-col cols="8">
        <p class="primary-color pa-1 font-weight-black">{{ articleType }}</p>
        <v-card-title class="pa-1">{{ title }}</v-card-title>
        <v-card-text class="pa-1">
          This is a setence that can be longer than the title, just providers
          more context for an article in a not annoying way.
        </v-card-text>
        <v-card-text class="pa-1">
          <b>By Ruben Soerdien</b>
        </v-card-text>
      </v-col>
      <v-col cols="4">
        <v-img :src="img" :aspect-ratio="16 / 9"></v-img>
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
    img: {
      type: String,
      default: '',
    },
  },
  computed: {},
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
