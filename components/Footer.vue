<template>
  <footer
    class="flex justify-center xl:justify-between items-center flex-wrap gap-y-2 gap-x-3 md:gap-x-4 p-4 md:p-6 xl:px-10"
  >
    <img src="~/assets/images/logo-bnn-vara.png" />
    <img src="~/assets/images/logo-natuurmonumenten.png" />
    <img src="~/assets/images/logo-ifaw.png" />
    <img src="~/assets/images/logo-iwp.png" />
    <img src="~/assets/images/logo-gelderland.png" />
    <img src="~/assets/images/logo-veluweop1.png" />
    <img src="~/assets/images/logo-ark.png" />
    <img src="~/assets/images/logo-M-N-Film.png" />
    <img src="~/assets/images/logo-zoogdier.png" />
    <img src="~/assets/images/logo-rewilding-europe.png" />
  </footer>
</template>

<script>
export default {
  name: "FooterImages",
};
</script>

<style lang="scss">
footer {
  img {
    height: 34px;
    @screen md {
      height: 40px;
    }
    @screen lg {
      height: 50px;
    }
    @screen xl {
      height: 60px;
    }
  }
}
</style>
