<template>
  <div>
    <button class="prevpage_btn" @click="prevPage" :disabled="currentPage === 1">
      <i class="fas fa-arrow-left"></i>
    </button>
    <button v-for="page in pagesToShow" :key="page" class="page-number-btn" :class="{ active: page === currentPage }" @click="goToPage(page)">
      <span class="page-number-text">{{ page }}</span>
    </button>
    <button @click="nextPage" :disabled="currentPage === totalPages">
      <i class="fas fa-arrow-right"></i>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    currentPage: Number,
    totalPages: Number,
  },
  computed: {
    pagesToShow() {
      const pages = [];
      const totalPagesToShow = 10;
      let startPage = Math.max(this.currentPage - Math.floor(totalPagesToShow / 2), 1);
      let endPage = startPage + totalPagesToShow - 1;

      if (endPage > this.totalPages) {
        endPage = this.totalPages;
        startPage = Math.max(endPage - totalPagesToShow + 1, 1);
      }

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      return pages;
    },
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
    goToPage(page) {
      if (page !== this.currentPage) {
        this.$emit('goPage', page);
      }
    },
  },
};
</script>

<style>
.page-number-btn {
  cursor: pointer;
  margin: 0 5px;
  border-radius: 4px;
  width: 32px;
  height: 32px;
  font-family: 'SourceSans3', sans-serif;
  font-weight: bold;
  color: #212B36;
  background-color: #fff;
}

.page-number-btn.active {
  color: #4200FF;
  border: 1px solid #4200FF;
}
</style>
