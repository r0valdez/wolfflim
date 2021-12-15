<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  head() {
    return {
      link: [
        {
          hid: "canonical",
          rel: "canonical",
          // TODO: dynamic import url
          href: "https://www.wolffilm.nl" + this.$route.path,
        },
      ],
    };
  },
};
</script>
