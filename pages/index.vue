<template>
  <div class="flex flex-col text-center">
    <h1 class="my-4 text-4xl font-semibold text-gray-400">Wolffilm.nl</h1>
    <p>Distance between Amsterdam <-> Odijk in the Netherlands</p>
    <div ref="distanceEl"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    // NL - Odijk (Utrecht province)
    let lat1 = 52.05;
    let lon1 = 5.23;
    // NL - Amsterdam (Noord-Holland Province)
    let lat2 = 52.35;
    let lon2 = 4.92;

    const distEl = this.$refs.distanceEl;
    let distanceBetweenPoints = this.distance(lat1, lat2, lon1, lon2);

    distEl.innerHTML = this.round(distanceBetweenPoints, 1) + " km";
  },

  methods: {
    // Rounding the distance values
    round(value, decimals) {
      return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
    },

    // JavaScript program to calculate Distance Between
    // Two Points on Earth

    distance(lat1, lat2, lon1, lon2) {
      // The math module contains a function
      // named toRadians which converts from
      // degrees to radians.
      lon1 = (lon1 * Math.PI) / 180;
      lon2 = (lon2 * Math.PI) / 180;
      lat1 = (lat1 * Math.PI) / 180;
      lat2 = (lat2 * Math.PI) / 180;

      // Haversine formula
      let dLon = lon2 - lon1;
      let dLat = lat2 - lat1;
      let a =
        Math.pow(Math.sin(dLat / 2), 2) +
        Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(dLon / 2), 2);

      let c = 2 * Math.asin(Math.sqrt(a));

      // Radius of earth in kilometers. Use 3956
      // for miles
      let r = 6371;

      // calculate the result
      return c * r;
    },
  },
};
</script>
<style lang="scss"></style>
