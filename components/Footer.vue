<template>
  <footer
    class="flex justify-center items-center flex-wrap gap-y-2 gap-x-3 md:gap-x-4 p-4 md:p-6 xl:px-10"
  >
    <!--    <img src="~/assets/images/logo-bnn-vara.png" alt="logo bnn-vara" />-->
    <!--    <img-->
    <!--      src="~/assets/images/logo-natuurmonumenten.png"-->
    <!--      alt="logo natuurmonumenten"-->
    <!--    />-->

    <!--    <img src="~/assets/images/logo-iwp.png" alt="logo iwp" />-->
    <!--    <img-->
    <!--      src="~/assets/images/logo-gelderland.png"-->
    <!--      alt="logo provincie gelderland"-->
    <!--    />-->
    <!--    <img src="~/assets/images/logo-veluweop1.png" alt="logo veluweop1" />-->
    <!--    <img src="~/assets/images/logo-ark.png" alt="logo ark" />-->
    <!--    <img-->
    <!--        src="~/assets/images/logo-zoogdier.png"-->
    <!--        alt="logoZoogdier vereniging"-->
    <!--    />-->
    <!--    <img-->
    <!--        src="~/assets/images/logo-rewilding-europe.png"-->
    <!--        alt="logo Rewilding Europe"-->
    <!--    />-->
    <img src="~/assets/images/logo-ifaw.png" alt="ifaw" />
    <img src="~/assets/images/logo-M-N-Film.png" alt="M&N Media Group" />
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
