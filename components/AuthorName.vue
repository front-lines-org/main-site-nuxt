<template>
  <p>
    <nuxt-link
      v-if="authorUserName"
      :to="`/Author/${authorUserName}`"
      class="tw-text-black"
    >
      {{ authorName }}
    </nuxt-link>
    <a v-if="authorLink" :href="authorLink" class="tw-text-black">
      {{ authorName }}
    </a>
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
      required: false,
      default: null,
    },
    authorLink: {
      type: String,
      required: false,
      default: null,
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
