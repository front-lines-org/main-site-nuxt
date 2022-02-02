<template>
  <v-card class="article" tile flat nuxt to="/articles/donbas">
    <v-img :src="img"></v-img>

    <p class="primary-color">{{ articleType }}</p>
    <v-card-title style="word-break: normal">{{ title }}</v-card-title>
    <v-card-text>
      This is a setence that can be longer than the title, just providers more
      context for an article in a not annoying way.
    </v-card-text>
    <v-card-text>
      <b>By Ruben Soerdien</b>
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
p.primary-color {
  color: #f9a1bc;
  padding: 5px;
  margin: 0;
}
</style>
