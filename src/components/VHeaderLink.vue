<template>
  <router-link
    :to="to"
    :title="title"
    class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
  >
    <slot></slot>
  </router-link>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "VLink",
  props: {
    to: {
      type: [String, Object],
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style lang="postcss">
.router-link-active {
  @apply bg-gray-900 text-white;
}
</style>
