<template>
  <nav class="menu px-4 md:px-6 py-3 fixed w-full">
    <div class="site-width flex gap-3">
      <t-btn btn-text="Menu" href="#tickets" color="secondary" />
      <t-btn btn-text="Koop tickets" href="#tickets"
        ><svg
          width="31"
          height="38"
          viewBox="0 0 31 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
          style="width: 20px; height: auto; margin-right: 0.5rem"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.74068 9.27182L10.6723 10.0523L11.2967 8.50694L9.36503 7.72651L11.9248 1.39076C12.2352 0.622651 13.1094 0.251558 13.8775 0.561892L17.669 2.09373C17.4528 4.08123 18.5647 6.05075 20.5099 6.83666C22.4551 7.62257 24.6231 6.97821 25.8482 5.39837L29.6397 6.93021C30.4078 7.24054 30.7788 8.11479 30.4685 8.88289L27.9086 15.2188L25.977 14.4384L25.3527 15.9837L27.2843 16.7641L19.1054 37.0075C18.7951 37.7756 17.9209 38.1467 17.1528 37.8363L13.3613 36.3045C13.5775 34.317 12.4656 32.3475 10.5204 31.5616C8.57519 30.7757 6.40721 31.42 5.18207 32.9999L1.39064 31.468C0.622531 31.1577 0.251436 30.2834 0.56177 29.5153L8.74068 9.27182ZM12.9903 10.9889L13.6146 9.44363L17.4779 11.0045L16.8535 12.5498L12.9903 10.9889ZM19.7958 11.941L19.1715 13.4863L23.0347 15.0472L23.6591 13.5019L19.7958 11.941Z"
            fill="white"
          />
        </svg>
        Koop tickets
      </t-btn>
    </div>
  </nav>
</template>

<style lang="scss">
.menu {
  display: flex;
  flex-direction: row;
  position: fixed;
  z-index: 100;

  li {
    display: flex;
    //a {
    //  background: blue;
    //  color: wheat;
    //  @apply p-4;
    //
    //  //.nuxt-link-exact-active {
    //  //  border: 10px solid red;
    //  //}
    //}
  }
}
</style>
