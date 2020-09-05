<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
    <div class="px-6 py-4">
      <div v-if="isLoading" class="spinner"></div>
      <p v-else class="text-gray-700 text-base">
        {{ advice }}
      </p>
    </div>
    <div class="flex justify-center px-6 pt-4 pb-2">
      <button
        class="text-white font-bold py-2 px-4 rounded"
        :class="{
          'bg-blue-500 hover:bg-blue-700': !isDisabled,
          'bg-gray-500': isDisabled,
        }"
        :disabled="isDisabled"
        @click="getAdvice"
      >
        Advice
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      disableAdvice: false,
      isLoading: true,
    };
  },
  created() {
    this.getAdvice();
  },
  computed: {
    advice() {
      return this.$store.getters.advice;
    },
    isDisabled() {
      return this.disableAdvice;
    },
  },
  methods: {
    async getAdvice() {
      //Show Loader and Disable Button
      this.isLoading = true;
      this.disableButton();
      await this.$store.dispatch("randomBackground");
      await this.$store.dispatch("randomAdvice");
      this.isLoading = false;
    },
    disableButton() {
      //Wait 5 seconds for new advice
      this.disableAdvice = true;
      setTimeout(() => {
        this.disableAdvice = false;
      }, 5000);
    },
  },
};
</script>

<style scoped>
@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}

.spinner:before {
  content: "";
  box-sizing: border-box;
  position: absolute;
  left: 50%;
  width: 30px;
  height: 30px;
  margin-left: -15px;
  border-radius: 50%;
  border: 1px solid #ccc;
  border-top-color: #07d;
  animation: spinner 0.6s linear infinite;
}
</style>
