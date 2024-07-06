<template>
  <li class="comments__comment">
    <div class="comments__comment__content">
      <span class="comments__author-name">ID: {{ comment.id }}</span>
      <span class="comments__author-name">Имя автора: {{ comment.name }}</span>
      <span class="comments__comment-text">Текст комментария: {{ comment.text }}</span>
      <span class="comments__comment-date">Дата отправления: {{ formatDate(comment.date) }}</span>
    </div>
    <button @click="deleteComment(comment.id)">
      <i class="fas fa-trash"></i>
    </button>
  </li>
</template>

<script>
import { format } from 'date-fns';

export default {
  props: {
    comment: Object,
  },
  methods: {
    deleteComment(commentId) {
      this.$emit('delete', commentId);
    },
    formatDate(date) {
      return format(new Date(date), 'dd-MM-yyyy');
    },
  },
};
</script>

<style scoped lang="scss">
.comments {
  &__comment {
    display: flex;
    margin-bottom: 50px;
    &__content {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
