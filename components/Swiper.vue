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
import { Flicking } from "@egjs/vue-flicking";
import { Pagination, Arrow } from "@egjs/flicking-plugins";

export default {
  name: "Swiper",
  components: {
    Flicking: Flicking,
  },
  data() {
    return {
      plugins: [new Pagination({ type: "bullet" }), new Arrow()],
    };
  },
};
</script>
