<template>
  <div class="flex px-3 py-2 items-start md:items-center flex-col md:flex-row">
    <h4
      class="text-lg md:text-xl uppercase font-semibold text-gray-500 md:pl-4 lg:pl-12 w-full md:w-1/4 leading-tight"
    >
      {{ city }}
    </h4>

    <div class="flex items-center flex-grow w-full md:w-auto">
      <img
        v-if="cinemaGroup === 'Kinepolis'"
        :src="logo.kinapolis"
        :alt="cinemaGroup"
        class="logo-cinema"
      />
      <img
        v-else-if="cinemaGroup === 'Vue'"
        :src="logo.vue"
        :alt="cinemaGroup"
        class="logo-cinema"
      />
      <div v-else class="logo-cinema">No logo</div>
      <div class="flex px-2 w-auto md:w-4/5 md:w-full flex-col md:flex-row">
        <h4 class="text-md md:text-xl font-semibold md:w-1/2 leading-tight">
          {{ cinemaName }}
        </h4>
        <p class="text-md md:text-xl leading-tight">{{ eventDate }}</p>
      </div>
      <t-btn
        :btn-text="btnText"
        :href="ticketUrl"
        target="_blank"
        class="ml-auto"
      >
        <svg
          width="31"
          height="38"
          viewBox="0 0 31 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
          class="mr-2"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.74068 9.27182L10.6723 10.0523L11.2967 8.50694L9.36503 7.72651L11.9248 1.39076C12.2352 0.622651 13.1094 0.251558 13.8775 0.561892L17.669 2.09373C17.4528 4.08123 18.5647 6.05075 20.5099 6.83666C22.4551 7.62257 24.6231 6.97821 25.8482 5.39837L29.6397 6.93021C30.4078 7.24054 30.7788 8.11479 30.4685 8.88289L27.9086 15.2188L25.977 14.4384L25.3527 15.9837L27.2843 16.7641L19.1054 37.0075C18.7951 37.7756 17.9209 38.1467 17.1528 37.8363L13.3613 36.3045C13.5775 34.317 12.4656 32.3475 10.5204 31.5616C8.57519 30.7757 6.40721 31.42 5.18207 32.9999L1.39064 31.468C0.622531 31.1577 0.251436 30.2834 0.56177 29.5153L8.74068 9.27182ZM12.9903 10.9889L13.6146 9.44363L17.4779 11.0045L16.8535 12.5498L12.9903 10.9889ZM19.7958 11.941L19.1715 13.4863L23.0347 15.0472L23.6591 13.5019L19.7958 11.941Z"
            fill="white"
          />
        </svg>
      </t-btn>
    </div>
  </div>
</template>

<style lang="scss">
.logo-cinema {
  width: 40px;
  @apply mx-1;
  @screen md {
    width: 50px;
  }
}
.city-list {
  @apply flex-wrap;
  span {
    @apply bg-gray-200 px-1;
  }
}
</style>

<script>
export default {
  name: "cinEvent",
  props: {
    id: Number,
    city: String,
    cinemaName: String,
    cinemaGroup: String,
    ticketUrl: String,
    btnText: String,
    eventDate: String,
  },
  data() {
    return {
      logo: {
        kinapolis: require("~/assets/images/logo-cin-kinepolis.png"),
        vue: require("~/assets/images/logo-cin-vue.png"),
      },
    };
  },
};
</script>
