<template>
  <form @submit.prevent="submitComment">
    <input v-model="newComment.name" placeholder="Ваше имя" required />
    <input v-model="newComment.text" maxlength="500" placeholder="Напишите комментарий" required />
    <date-picker v-model="newComment.date" placeholder="Select date" :format="'DD-MM-YYYY'" />
    <button type="submit">Отправить</button>
  </form>
</template>

<script>
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
import { format } from 'date-fns';

export default {
  components: {
    DatePicker,
  },
  data() {
    return {
      newComment: {
        name: "",
        text: "",
        date: null,
      },
    };
  },
  methods: {
    submitComment() {
      if (this.newComment.text.trim()) {
        this.$emit('submit', this.newComment);
        this.newComment.name = '';
        this.newComment.text = '';
        this.newComment.date = '';
      }
    },
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
