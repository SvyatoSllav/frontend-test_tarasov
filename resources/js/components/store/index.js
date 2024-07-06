import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { orderBy } from 'lodash';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    comments: [],
    currentPage: 1,
    itemsPerPage: 2,
    sortBy: '',
    sortDirection: ''
  },
  getters: {
    paginatedComments: (state) => {
      const startIndex = (state.currentPage - 1) * state.itemsPerPage;
      if (state.sortBy) {
        state.comments = orderBy(state.comments, [state.sortBy], [state.sortDirection]);
        return state.comments.slice(startIndex, startIndex + state.itemsPerPage);
      }
      return state.comments.slice(startIndex, startIndex + state.itemsPerPage);
    },
    totalPages: (state) => Math.ceil(state.comments.length / state.itemsPerPage),
  },
  mutations: {
    setComments(state, comments) {
      state.comments = comments;
    },
    addComment(state, comment) {
      state.comments.push(comment);
    },
    removeComment(state, commentId) {
      state.comments = state.comments.filter(comment => comment.id !== commentId);
    },
    setSort(state, sortData) {
      state.sortBy = sortData.sortByGroup
      state.sortDirection = sortData.sortDirection
    },
    setCurrentPage(state, page) {
      state.currentPage = page;
    },
  },
  actions: {
    async fetchComments({ commit }) {
      try {
        const response = await axios.get('/api/comments');
        commit('setComments', response.data);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    },
    async createComment({ commit }, commentToCreate) {
      try {
        const response = await axios.post('/api/comments', commentToCreate);
        commit('addComment', response.data);
      } catch (error) {
        console.error('Error creating comment:', error);
      }
    },
    async deleteComment({ commit }, commentId) {
      try {
        await axios.delete(`/api/comments/${commentId}`);
        commit('removeComment', commentId);
      } catch (error) {
        console.error('Error deleting comment:', error);
      }
    },
    sortCommentsById({ commit }, order) {
      commit('sortCommentsById', order);
    },
    sortCommentsByDate({ commit }, order) {
      commit('sortCommentsByDate', order);
    },
    setPage({ commit }, page) {
      commit('setCurrentPage', page);
    },
    setSort({ commit }, sortData) {
      commit('setSort', sortData);
    },
  },
});

export default store;
