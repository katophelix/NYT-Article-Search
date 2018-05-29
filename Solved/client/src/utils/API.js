import axios from "axios";

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
  getArticles: function(query) {
    return axios.get("/api/recipes", { params: { q: query } });
  },

  getArticle: function(query) {
    return axios.get("/api/recipes", { params: { q: query } });
  },

  deletearticle: function(query) {
    return axios.get("/api/recipes", { params: { q: query } });
  },

  savearticle: function(query) {
    return axios.get("/api/recipes", { params: { q: query } });
  }





};
