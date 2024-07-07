<template>
    <form class="comment__form" @submit.prevent="submitComment">
        <input
            class="comment__name-input"
            v-model="newComment.name"
            placeholder="Ваше имя"
            required
        />
        <textarea
            class="comment__text-input"
            v-model="newComment.text"
            maxlength="500"
            placeholder="Напишите комментарий"
            required
        />
        <date-picker
            class="comment__date-input"
            v-model="newComment.date"
            placeholder="Select date"
            :format="'DD-MM-YYYY'"
            :input-attr="{ required: true }"
        />
        <button class="comment__form__submit-btn" type="submit">
            Отправить
        </button>
    </form>
</template>

<script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";

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
                this.$emit("submit", this.newComment);
                this.newComment.name = "";
                this.newComment.text = "";
                this.newComment.date = "";
            }
        },
    },
};
</script>

<style scoped lang="scss">
.comment {
    &__form {
        display: flex;
        flex-direction: column;
        margin: 30px auto;
        max-width: 500px;
        font-family: "SourceSans3", sans-serif;
        font-weight: 400;
        & input,
        textarea {
            border: 1px solid #e3e8ee;
            color: #697386;
            background-color: transparent;
            margin-bottom: 15px;
            padding: 8px 15px;
            min-width: 300px;
        }
        & textarea {
            height: 150px;
            resize: none;
        }
        &__submit-btn {
            color: #fff;
            background-color: #0089ff;
            padding: 8px 20px;
            width: 110px;
            border-radius: 8px;
            margin: 15px auto 0;
        }
    }
    &__date-input {
        margin: 0 auto;
    }
}

@media (max-width: 540px) {
    .comment {
        &__form {
            & input, textarea {
                width: 200px;
                min-width: auto;
            }
        }
    }
}
</style>
