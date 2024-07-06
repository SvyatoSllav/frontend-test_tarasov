<template>
  <div>
    <button @click="sort('id', 'asc')">ID по возрастанию</button>
    <button @click="sort('id', 'desc')">ID по убыванию</button>
    <button @click="sort('date', 'asc')">Дата по возрастанию</button>
    <button @click="sort('date', 'desc')">Дата по убыванию</button>
  </div>
</template>

<script>
export default {
  methods: {
    sort(sortGroup, sortDirection) {
      this.$emit('sort', sortGroup, sortDirection);
    },
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
