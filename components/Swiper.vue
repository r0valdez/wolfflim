<template>
  <Flicking
    :options="{ align: 'center', circular: true, panelsPerView: 1 }"
    :hideBeforeInit="true"
    :plugins="plugins"
    :resizeOnContentsReady="true"
    class="flicking"
  >
    <slot />
    <div slot="viewport" class="flicking-pagination"></div>
    <span slot="viewport" class="flicking-arrow-prev"></span>
    <span slot="viewport" class="flicking-arrow-next"></span>
  </Flicking>
</template>

<script>
import VueFlicking from "@egjs/vue-flicking";
import { Pagination, Arrow } from "@egjs/flicking-plugins";
// import "@egjs/flicking-plugins/dist/flicking-plugins.css";

export default {
  name: "Swiper",
  components: {
    VueFlicking,
  },
  data() {
    return {
      plugins: [new Pagination({ type: "bullet" }), new Arrow()],
    };
  },
};
</script>
