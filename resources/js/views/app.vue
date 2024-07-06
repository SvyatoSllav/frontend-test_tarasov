<template>
    <comment-list />
</template>
<script>
const default_layout = "default";
import CommentList from "../components/comments/CommentList.vue";

export default {
    data() {
        return {
            message: "Hello World",
        };
    },
    components: { CommentList },
    computed: {},
};
</script>
<style>
button {
  background: none;
  border: none;
  cursor: pointer;
}
</style>
