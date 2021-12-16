<template>
  <component
    :is="to ? 'nuxt-link' : href ? 'a' : 'button'"
    :to="to"
    :href="href"
    @click="$emit('click')"
    class="button primary"
    :class="[
      { primary: primary },
      { 'bg-green-500': success },
      { secondary: secondary },
    ]"
  >
    <slot></slot>
    {{ btnText }}
  </component>
</template>

<script>
export default {
  name: "t-btn",
  props: {
    btnText: {
      type: String,
      required: true,
      default: null,
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
  @apply px-2 py-1 bg-red-700 shadow-md hover:shadow-none flex font-semibold leading-snug no-underline uppercase cursor-pointer text-white flex-nowrap whitespace-nowrap items-center rounded-md duration-300;
  @screen md {
    @apply text-lg px-2 py-1;
  }
  &:hover {
    @apply bg-red-800;
  }
  svg {
    width: auto;
    height: 1em;
  }
  &.large {
    @apply text-lg px-3 py-1;
    @screen md {
      @apply text-2xl px-4 py-2;
    }
  }
}
.secondary {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
