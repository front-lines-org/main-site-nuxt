<template>
  <v-container no-gutters>
    <v-row>
      <v-col md="9" sm="12" lg="9" order-sm="2" order-md="1">
        <v-row>
          <v-col md="3" sm="12" class="pt-5">
            <article-thumbnail
              v-if="articles"
              :title="articles[4].title"
              :article-type="articles[4].articleType"
              :img="articles[4].img"
            />
            <v-divider
              inset
              horizontal
              class="d-none d-sm-block tw-ml-0"
            ></v-divider>
            <article-thumbnail
              v-if="articles"
              :title="articles[5].title"
              :article-type="articles[5].articleType"
              :img="articles[5].img"
            />
            <v-divider inset horizontal class="d-none d-sm-block"></v-divider>
            <article-thumbnail
              v-if="articles"
              :title="articles[2].title"
              :article-type="articles[2].articleType"
              :img="articles[2].img"
            />
          </v-col>
          <v-divider inset vertical class="d-none d-sm-block"></v-divider>
          <v-col md="9" sm="12">
            <v-col md="12">
              <article-thumbnail
                v-if="articles"
                :title="news[0].title"
                :article-type="news[0].articleType"
                :img="news[0].img"
                :author="news[0].author"
                :description="news[0].shortDescription || news[0].description"
              />
            </v-col>
            <v-divider inset horizontal class="d-none d-sm-block"></v-divider>
            <v-col>
              <article-preview
                v-if="articles"
                :title="articles[0].title"
                :article-type="articles[0].articleType"
                :img="articles[0].img"
              />
            </v-col>
          </v-col>
          <v-divider inset vertical class="d-none d-sm-block"></v-divider>
        </v-row>
      </v-col>
      <v-col md="3" sm="12" order-sm="1" order-md="2">
        <v-divider inset vertical class="d-none d-sm-block"></v-divider>
        <h5 class="text-h5 pa-2">Latest News</h5>
        <v-divider inset horizontal class="d-none d-sm-block"></v-divider>
        <small-article-thumbnail
          v-if="articles"
          :title="articles[0].title"
          :article-type="articles[0].articleType"
          :img="articles[0].img"
        />
        <v-divider inset horizontal class="d-none d-sm-block"></v-divider>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      articles: [
        {
          title:
            'The Czech Republic considers the deployment of military troops in Ukraine',
          articleType: 'News',
          img: 'https://images0.persgroep.net/rcs/0vGtI6P5odZpWHoU01du7Dhy3QI/diocontent/202313124/_crop/0/408/5568/3631/_fill/600/391?appId=93a17a8fd81db0de025c8abd1cca1279&quality=0.85',
        },
        {
          title: "Germany offers Ukraine helmets, draws Kyiv mayor's ire",
          articleType: 'News',
          img: '/ukraine5.jpg',
        },
        {
          title:
            'US and allies discussing deploying more troops to Eastern Europe prior to any Russian invasion of Ukraine',
          articleType: 'Report',
          img: '/ukraine4.jpg',
        },
        {
          title:
            'US and allies discussing deploying more troops to Eastern Europe prior to any Russian invasion of Ukraine',
          articleType: 'News',
          img: '/ukraine2.jpg',
        },
        {
          title:
            'US and allies discussing deploying more troops to Eastern Europe prior to any Russian invasion of Ukraine',
          articleType: 'Opinion',
          img: '/ukraine3.jpg',
        },
        {
          title:
            'US and allies discussing deploying more troops to Eastern Europe prior to any Russian invasion of Ukraine',
          articleType: 'Research',
          img: '/ukraine7.jpg',
        },
      ],
    }
  },
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
    console.log(news)
    return {
      news,
    }
  },
}
</script>
<style lang="scss" scoped>
.v-divider--inset {
  max-width: initial !important;
  max-height: initial !important;
  &:not(.v-divider--vertical) {
    margin-top: -1px !important;
    margin-left: 8px !important;
    margin-right: 8px !important;
  }
  &.v-divider--vertical {
    margin-left: -1px !important;
    margin-bottom: 8px !important;
  }
}

.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical) {
  margin-top: -1px !important;
  margin-left: 8px !important;
  margin-right: 8px !important;
}
</style>
