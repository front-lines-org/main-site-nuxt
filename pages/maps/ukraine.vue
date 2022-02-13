<template>
  <div id="map-wrap" style="height: 90vh">
    <client-only>
      <l-map :zoom="zoom" :center="center">
        <l-tile-layer
          url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png"
        ></l-tile-layer>
        <l-geo-json
          :geojson="ukraine"
          :options-style="{ color: '#f29dc4', weight: 0, fillOpacity: 0.3 }"
          color="#f29dc4"
        ></l-geo-json>
        <l-geo-json
          :geojson="donetsk"
          :options-style="{ color: '#FF6961', weight: 0, fillOpacity: 0.3 }"
          color="#f29dc4"
        ></l-geo-json>
        <l-geo-json
          :geojson="crimea"
          :options-style="{ color: '#FF6961', weight: 0, fillOpacity: 0.3 }"
          color="#f29dc4"
        ></l-geo-json>
        <l-geo-json
          :geojson="luhansk"
          :options-style="{ color: '#FF6961', weight: 0, fillOpacity: 0.3 }"
          color="#f29dc4"
        ></l-geo-json>
        <l-geo-json
          :geojson="transnistria"
          :options-style="{ color: '#018f6b', weight: 0, fillOpacity: 0.3 }"
          color="#f29dc4"
        ></l-geo-json>
        <l-marker
          v-for="geoEvent in geoEvents"
          :key="geoEvent.name"
          :lat-lng="geoEvent.coords"
          @click="onClick(geoEvent)"
        >
          <l-icon class-name="someExtraClass">
            <img :src="`/flags/${geoEvent.flag}`" width="20px" />
          </l-icon>
        </l-marker>

        <v-card class="tw-m-1 ml-auto" max-width="344" style="z-index: 1000">
          <v-card-text>
            <div>Legend</div>
            <p class="text-h4 text--primary">Ukraine Conflict</p>
            <div class="text--primary">
              relating to or dependent on charity; charitable.<br />
              "an eleemosynary educational institution."
            </div>
            <v-list>
              <v-list-item>
                <v-list-item-icon>
                  <img src="/flags/flag_russia.svg" width="20px" />
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-subtitle>Russia</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <img src="/flags/flag_ukraine.svg" width="20px" />
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-subtitle>Ukraine</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <img src="/flags/flag_dpr.svg" width="20px" />
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-subtitle
                    >Donetsk People's Republic</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <img src="/flags/flag_crimea.svg" width="20px" />
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-subtitle
                    >Autonomous Republic of Crimea</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <img src="/flags/flag_lpr.svg" width="20px" />
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-subtitle
                    >Luhansk People's Republic</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <img src="/flags/flag_belarus.svg" width="20px" />
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-subtitle>Belarus</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>
          <v-card-actions>
            <v-btn text color="teal accent-4" @click="reveal = true">
              Learn More
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <v-card
              v-if="pressed"
              class="transition-fast-in-fast-out v-card--reveal"
              style="height: 100%"
            >
              <v-card-text class="pb-0">
                <p class="text-h4 text--primary">{{ pressed.name }}</p>
                <p>
                  {{ pressed.text }}
                </p>
              </v-card-text>
              <v-card-actions class="pt-0">
                <v-btn text color="teal accent-4" @click="pressed = null">
                  Close
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-expand-transition>
        </v-card>
        <l-tile-layer
          url="https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png"
        ></l-tile-layer>
      </l-map>
    </client-only>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 6,
      center: [48.3794, 31.1656],
      ukraine: null,
      donetsk: null,
      crimea: null,
      luhansk: null,
      transnistria: null,
      style: { color: 'red', weight: 5 },
      pressed: null,
    }
  },
  async asyncData({ $content, params }) {
    const geoEvents = await $content('geo_events').fetch()
    console.log(geoEvents)
    return { geoEvents }
  },
  async created() {
    const response = await Promise.all([
      fetch('/geo/ukraine.json'),
      fetch('/geo/donetsk.json'),
      fetch('/geo/crimea.json'),
      fetch('/geo/luhansk.json'),
      fetch('/geo/transnistria.json'),
    ])
    this.ukraine = await response[0].json()
    this.donetsk = await response[1].json()
    this.crimea = await response[2].json()
    this.luhansk = await response[3].json()
    this.transnistria = await response[4].json()
  },
  methods: {
    onClick(geoItem) {
      this.pressed = geoItem
    },
  },
}
</script>

<style>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>
