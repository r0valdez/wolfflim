<template>
  <component
    :is="to ? 'nuxt-link' : href ? 'a' : 'button'"
    :to="to"
    :href="href"
    @click="$emit('click')"
    class="button"
    :class="[
      { 'bg-red-700': primary },
      { 'bg-green-500': success },
      { secondary: secondary },
    ]"
  >
    <slot name="prepend"></slot>
    <slot name="default">{{ btnText }}</slot>
    <slot name="append"></slot>
  </component>
</template>

<script>
export default {
  name: "t-btn",
  props: {
    btnText: {
      type: String,
      required: true,
      default: "label empty",
    },
    href: {
      type: String,
      default: null,
    },
    to: {
      type: String,
      default: null,
    },
    color: {
      type: String,
      default: "primary",
    },
  },
  computed: {
    primary() {
      return this.color === "primary";
    },
    success() {
      return this.color === "success";
    },
    secondary() {
      return this.color === "secondary";
    },
  },
};
</script>

<style scoped lang="scss">
.button {
  display: flex;
  padding: 0.5em 1em;
  /*border: 2px solid tomato;*/
  border-radius: 0.5rem;
  color: white;
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  line-height: 1;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.3s;
  white-space: nowrap;
  align-items: center;
}
.secondary {
  background-color: rgba(0, 0, 0, 0.5);
}
.button:hover {
  //color: black;
}
</style>
