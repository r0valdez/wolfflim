<template>
  <div>
    <h1 v-if="error.statusCode === 404">Page not found 404</h1>
    <h1 v-else>An error occurred</h1>
    <NuxtLink to="/">Home page</NuxtLink>
  </div>
</template>
<script>
export default {
  props: ["error"],
  layout: "error-layout", // you can set a custom layout for the error page
};
</script>
