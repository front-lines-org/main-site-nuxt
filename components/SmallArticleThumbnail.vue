<template>
  <v-card class="article" tile flat nuxt :to="`articles/${slug}`">
    <v-card-title style="word-break: normal">{{ title }} </v-card-title>
    <v-card-subtitle> Today 10:14 </v-card-subtitle>
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
<style>
.article:hover {
  text-decoration: underline;
}

.article {
  text-overflow: unset;
}
p.primary-color {
  color: #f9a1bc;
}
.time-in-title {
  color: gray;
  font-size: 0.9rem;
  font-weight: thin;
}
</style>
