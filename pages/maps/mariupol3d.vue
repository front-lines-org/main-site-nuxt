<template>
  <div id="map-wrap" style="height: 90vh">
    <client-only>
      <l-map ref="map" :zoom="zoom" :center="center">
        <l-tile-layer
          url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png"
        ></l-tile-layer>
        <l-geo-json
          :geojson="ukraine"
          :options-style="{ color: '#f29dc4', weight: 0, fillOpacity: 0.3 }"
          color="#f29dc4"
        ></l-geo-json>
        <!-- <l-geo-json
          :geojson="donetsk"
          :options-style="{ color: '#FF6961', weight: 0, fillOpacity: 0.3 }"
          color="#f29dc4"
        ></l-geo-json> -->
        <l-geo-json
          :geojson="initialMariupol"
          :options-style="{ color: '#FF0000', weight: 0, fillOpacity: 0.3 }"
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

    <link
      href="https://cdn.leafletjs.com/leaflet-0.7.3/leaflet.css"
      rel="stylesheet"
    />

    <script src="https://cdn.leafletjs.com/leaflet-0.7.3/leaflet.js"></script>

    <script src="https://cdn.osmbuildings.org/classic/0.2.2b/OSMBuildings-Leaflet.js"></script>
  </div>
</template>

<script>
import { interpolate } from 'flubber'

export default {
  async asyncData({ $content, params }) {
    const geoEvents = await $content('geo_events').fetch()
    console.log(geoEvents)
    return { geoEvents }
  },
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
      osmb: null,
      mariupol: null,
      mariupol2: null,
      style: { color: 'red', weight: 5 },
      timer: 0,
      pressed: null,
    }
  },
  head: {
    title: 'Ukraine Map',
  },
  computed: {
    initialMariupol() {
      if (this.mariupol && this.mariupol2) {
        // console.log(this.mariupol2)
        this.osmb.date(new Date(2017, 15, 1, 10 + this.timer * 10, 30))
        const interpolater = interpolate(this.mariupol[0], this.mariupol2[0], {
          string: false,
        })
        // console.log(interpolater(0.5))
        // console.log(this.mariupol)
        return {
          type: 'FeatureCollection',
          features: [
            {
              type: 'Feature',
              properties: {},
              geometry: {
                type: 'Polygon',
                coordinates: [interpolater(this.timer)],
              },
            },
          ],
        }
      }
      return null
    },
  },
  async created() {
    setInterval(() => {
      this.timer += 0.001
      if (this.timer > 1) {
        this.timer = 0
      }
    }, 10)
    const response = await Promise.all([
      fetch('/geo/ukraine.json'),
      fetch('/geo/donetsk.json'),
      fetch('/geo/crimea.json'),
      fetch('/geo/luhansk.json'),
      fetch('/geo/transnistria.json'),
      fetch('/geo/mariupol.json'),
      fetch('/geo/mariupol2.json'),
    ])
    this.ukraine = await response[0].json()
    this.donetsk = await response[1].json()
    this.crimea = await response[2].json()
    this.luhansk = await response[3].json()
    this.transnistria = await response[4].json()
    this.mariupol = await response[5].json()
    this.mariupol2 = await response[6].json()
    console.log(this.$L)
    // eslint-disable-next-line no-undef
    this.osmb = new OSMBuildings(this.$refs.map.mapObject).load(
      'https://{s}.data.osmbuildings.org/0.2/anonymous/tile/{z}/{x}/{y}.json'
    )
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
