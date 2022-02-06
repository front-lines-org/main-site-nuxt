<template>
  <div id="map-wrap" style="height: 90vh">
    <client-only>
      <l-map :zoom="zoom" :center="center">
        <l-tile-layer
          url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}"
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
      style: { color: 'red', weight: 5 },
    }
  },
  async created() {
    const response = await Promise.all([
      fetch('/geo/ukraine.json'),
      fetch('/geo/donetsk.json'),
      fetch('/geo/crimea.json'),
      fetch('/geo/luhansk.json'),
    ])
    this.ukraine = await response[0].json()
    this.donetsk = await response[1].json()
    this.crimea = await response[2].json()
    this.luhansk = await response[3].json()
  },
}
</script>

<style></style>
