<template>
  <v-card class="article" tile flat nuxt to="/articles/donbas">
    <v-row>
      <v-col cols="9">
        <v-card-title>{{ title }}</v-card-title>
        <v-card-subtitle> {{ articleType }}</v-card-subtitle>
      </v-col>
      <v-col cols="3">
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
