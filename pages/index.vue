<template>
  <!-- <div>
    <div class="tw-grid tw-grid-cols-9">
      <div class="tw-col-span-7">
        <div class="tw-grid tw-grid-cols-6">
          <div
            v-for="article in articles"
            :key="article.title"
            :class="`tw-p-3 tw-col-span-${article.colSpan} tw-row-span-${article.rowSpan}`"
          >
            <article-thumbnail
              :title="article.title"
              :article-type="article.articleType"
              :img="article.img"
            />
          </div>
        </div>
      </div>
      <div>Latest news</div>
    </div>
  </div> -->
  <v-container no-gutters>
    <v-row>
      <v-col md="9" sm="12" lg="9" order-sm="2" order-md="1">
        <v-row>
          <v-col md="3" sm="12">
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
                :title="articles[1].title"
                :article-type="articles[1].articleType"
                :img="articles[1].img"
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
        <h1>Latest News</h1>
        <v-divider inset horizontal class="d-none d-sm-block"></v-divider>
        <small-article-thumbnail
          v-if="articles"
          :title="articles[0].title"
          :article-type="articles[0].articleType"
          :img="articles[0].img"
        />
        <v-divider inset horizontal class="d-none d-sm-block"></v-divider>
      </v-col>
      <v-col md="3" sm="12" order-sm="1" order-md="2" offset-sm="9">
        <v-divider inset vertical class="d-none d-sm-block"></v-divider>
        <h1>Latest News</h1>
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
          title: 'Russia threatens retaliation if Ukraine demands not met',
          shortDescription:
            'Putin personally theatens with retaliation for Ukraine if demands for NATO are not met',
          articleType: 'Research',
          img: '/ukraine.jpg',
        },
        {
          title:
            'U.S. Warns Belarus Against Helping Potential Russian Invasion Of Ukraine',
          articleType: 'Analysis',
          img: '/ukraine6.jpg',
        },
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
