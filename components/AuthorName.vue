<template>
  <p>
    <nuxt-link :to="`/Author/${authorUserName}`" class="tw-text-black">
      {{ authorName }}</nuxt-link
    >
    {{ date }}
  </p>
</template>

<script>
export default {
  props: {
    authorName: {
      type: String,
      required: true,
    },
    authorUserName: {
      type: String,
      required: true,
    },
    articleDate: {
      type: String,
      required: true,
    },
  },
  computed: {
    date() {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(this.articleDate).toLocaleDateString('en', options)
    },
  },
}
</script>

<style></style>
