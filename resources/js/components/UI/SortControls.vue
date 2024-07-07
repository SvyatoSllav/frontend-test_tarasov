<template>
  <div class="sort__container">
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

<style scoped lang="scss">
.sort {
  &__container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-top: 30px;
  }
}

@media (max-width: 750px) {
  .sort {
  &__container {
    grid-template-columns: 1fr;
  }
}
}
</style>
