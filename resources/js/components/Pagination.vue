<template>
  <div>
    <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
    <span>Page {{ currentPage }} of {{ totalPages }}</span>
    <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
  </div>
</template>

<script>
export default {
  props: {
    currentPage: Number,
    totalPages: Number,
  },
  methods: {
    prevPage() {
      if (this.currentPage > 1) {
        this.$emit('prev');
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.$emit('next');
      }
    },
  },
};
</script>
