<template>
  <article-lists-home-page :news="news" />
</template>

<script>
export default {
  name: 'IndexPage',
  async asyncData({ $content, params }) {
    const news = await $content('articles', params.slug)
      .only([
        'title',
        'shortDescription',
        'img',
        'slug',
        'description',
        'author',
        'createdAt',
        'category',
      ])
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      news,
    }
  },
  head: {
    title: 'News',
  },
}
</script>
