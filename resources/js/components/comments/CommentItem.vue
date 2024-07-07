<template>
  <li class="comments__comment">
    <div class="comments__comment__content">
      <span class="comments__author-name">{{ comment.name }} id: {{ comment.id }}</span>
      <span class="comments__comment-text">{{ comment.text }}</span>
      <span class="comments__comment-date">{{ formatDate(comment.date) }}</span>
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
  font-family: 'SourceSans3', sans-serif;
  font-weight: 400;
  font-size: 18px;
  &__comment {
    display: flex;
    max-width: 600px;
    margin: 0 auto 40px;
    &__content {
      display: flex;
      flex-direction: column;
    }
  }
  &__author-name {
    font-family: 'SourceSans3', sans-serif;
    font-weight: 600;
    font-size: 18px;
  }
  &__comment-text {
    margin-top: 15px;
    max-width: 550px;
  }
  &__comment-date {
    margin-top: 15px;
  }
}
</style>
