<template>
  <v-card class="article" tile flat nuxt :to="`articles/${slug}`">
    <v-img :src="require(`~/assets/img/${img}?webp`)" />

    <p class="primary-color pa-1 font-weight-black">{{ articleType }}</p>
    <v-card-title style="word-break: normal" class="pa-1">{{
      title
    }}</v-card-title>
    <v-card-text class="pa-1">
      {{ description }}
    </v-card-text>
    <v-card-text class="pa-1">
      <b>By {{ author }}</b>
    </v-card-text>
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
    author: {
      type: String,
      default: 'Unknown',
    },
    description: {
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
p.primary-color {
  color: #f9a1bc;
  padding: 5px;
  margin: 0;
}
</style>
