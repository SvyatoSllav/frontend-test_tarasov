<template>
    <comment-list />
</template>
<script>
const default_layout = "default";
import CommentList from "../components/comments/CommentList.vue";

export default {
    data() {},
    components: { CommentList },
    computed: {},
};
</script>
<style>
@font-face {
    font-family: "SourceSans3";
    src: url('../../fonts/SourceSans3-Regular.ttf');
    font-weight: 400;
}
@font-face {
    font-family: "SourceSans3";
    src: url('../../fonts/SourceSans3-SemiBold.ttf');
    font-weight: 700;
}
body {
  background-color: #F1F8FF;
  height: 100vh;
}
button {
  background: none;
  border: none;
  cursor: pointer;
}
h1, h2, h3, h4, h5, h6 {
  margin: 0;
  padding: 0;
}
</style>
