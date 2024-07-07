<template>
    <div class="comments__container">
        <h1 class="comments__title">Комментарии</h1>
        <SortControls @sort="sort" />
        <ul class="comments__list">
            <comment-item
                v-for="comment in paginatedComments"
                :key="comment.id"
                :comment="comment"
                @delete="deleteComment"
            />
        </ul>
        <Pagination
            class="comments__pagination"
            :currentPage="currentPage"
            :totalPages="totalPages"
            @prev="prevPage"
            @next="nextPage"
            @goPage="setPage"
        />
        <CommentForm @submit="submitComment" />
    </div>
</template>

<script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import { format } from "date-fns";
import { mapState, mapActions, mapGetters } from "vuex";
import CommentItem from "./CommentItem.vue";
import CommentForm from "./CommentForm.vue";
import Pagination from "../UI/Pagination.vue";
import SortControls from "../UI/SortControls.vue";

export default {
    name: "CommentList",
    components: {
        DatePicker,
        CommentItem,
        CommentForm,
        Pagination,
        SortControls,
    },
    data() {
        return {
            comments: [],
        };
    },
    computed: {
        ...mapState(["currentPage", "itemsPerPage", "totalItems"]),
        ...mapGetters(["paginatedComments", "totalPages"]),
    },
    created() {
        this.fetchComments();
    },
    methods: {
        ...mapActions([
            "fetchComments",
            "createComment",
            "deleteComment",
            "setPage",
            "setSort",
        ]),
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
            return format(new Date(date), "dd-MM-yyyy");
        },
        sort(sortGroup, sortDirection) {
            this.setSort({
                sortByGroup: sortGroup,
                sortDirection: sortDirection,
            });
        },
    },
};
</script>

<style scoped lang="scss">
.comments {
    &__container {
        background-color: #fff;
        width: 700px;
        min-height: 800px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    &__title {
        font-family: "SourceSans3", sans-serif;
        font-weight: 600;
        padding: 30px 0 0 30px;
        font-size: 28px;
        margin: 0;
    }
    &__list {
        padding: 20px;
    }
    &__pagination {
        margin: 0 auto;
        width: fit-content;
    }
}

@media (max-width: 750px) {
    .comments {
        &__container {
            max-width: 500px;
        }
    }
}

@media (max-width: 540px) {
    .comments {
        &__container {
            max-width: 320px;
        }
    }
}
</style>
