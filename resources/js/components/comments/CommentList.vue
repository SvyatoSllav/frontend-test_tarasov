<template>
  <div class="comments__container">
    <h1 class="comments__title">Комментарии</h1>
    <SortControls @sort="sort" />
    <ul class="comments__list">
      <comment v-for="comment in paginatedComments" :key="comment.id" :comment="comment" @delete="deleteComment" />
    </ul>
    <Pagination :currentPage="currentPage" :totalPages="totalPages" @prev="prevPage" @next="nextPage" />
    <CommentForm @submit="submitComment" />
  </div>
</template>

<script>
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
import { format } from 'date-fns';
import { mapState, mapActions, mapGetters } from 'vuex';
import Comment from './CommentItem.vue';
import CommentForm from './CommentForm.vue';
import Pagination from '../Pagination.vue';
import SortControls from '../SortControls.vue';

export default {
  name: "CommentList",
  components: {
    DatePicker,
    Comment,
    CommentForm,
    Pagination,
    SortControls,
  },
  data() {
    return {
      comments: []
    };
  },
  computed: {
    ...mapState(['currentPage', 'itemsPerPage', 'totalItems']),
    ...mapGetters(['paginatedComments', 'totalPages']),
  },
  created() {
    this.fetchComments();
  },
  methods: {
    ...mapActions(['fetchComments',  'createComment', 'deleteComment', 'setPage', 'setSort']),
    submitComment(newComment) {
      if (newComment.text.trim()) {
        this.createComment(newComment);
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.setPage(this.currentPage - 1);
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.setPage(this.currentPage + 1);
      }
    },
    formatDate(date) {
      return format(new Date(date), 'dd-MM-yyyy');
    },
    sort(sortGroup, sortDirection) {
      this.setSort({
        sortByGroup: sortGroup,
        sortDirection: sortDirection,
      })
    }
  }
};
</script>

<style scoped lang="scss">
</style>
