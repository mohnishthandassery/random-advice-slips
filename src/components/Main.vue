<template>
  <div class="h-screen" :style="{ 'background-image': `url(${background})` }">
    <div class="h-full flex items-center justify-center">
      <Advice />
    </div>
  </div>
</template>

<script>
import Advice from "./Advice";
export default {
  name: "HelloWorld",
  components: {
    Advice,
  },
  computed: {
    background() {
      return this.$store.state.background;
    },
  },
};
</script>
