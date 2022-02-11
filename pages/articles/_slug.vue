<template>
  <article
    class="tw-prose tw-prose-sm tw-sm:prose tw-lg:prose-lg tw-xl:prose-2xl tw-mx-auto tw-mt-9"
  >
    <h3 class="primary-color font-weight-black">{{ article.category }}</h3>
    <h1 class="h1">{{ article.title }}</h1>
    <p class="tw-font-bold">{{ article.description }}</p>
    <author-name
      :author-name="article.author"
      :author-user-name="article.author"
      :article-date="article.createdAt || article.updatedAt"
    />
    <img
      :src="require(`~/assets/img/${img}`)"
      :alt="article.img"
      class="mb-0"
    />
    <p class="text-xs font-light mt-0 text-slate-300 tw-not-prose">
      Image: Ukraine ministry of Defense. Troops training
    </p>
    <nuxt-content
      :document="article"
      class="tw-prose tw-prose-sm tw-sm:prose tw-lg:prose-lg tw-xl:prose-2xl tw-mx-auto"
    />
  </article>
</template>
<script>
export default {
  layout: 'article-layout',
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    return { article }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
}
</script>

<style scoped>
.nuxt-content h2 {
  font-weight: bold;
  font-size: 28px;
}
.nuxt-content h3 {
  font-weight: bold;
  font-size: 22px;
}
.nuxt-content p {
  margin-bottom: 20px;
}

.primary-color {
  color: #f9a1bc;
}
</style>
