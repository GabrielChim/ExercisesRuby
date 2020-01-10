import axios from 'axios';

class ArticlesApi {
   static getArticle(id){
    return axios.get(`api/articles/${id}`)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        return error;
      });
  }

  static getArticlePagination(page = null, perPage = null){
    return axios.get(`api/articles?page=${page}&per_page=${perPage}`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return error;
    });
  }

  static updateArticle(article, id){
    return axios({
      method: 'patch',
      url: `api/articles/${id}`,
      data: article
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return error;
    });
  }

  static createArticle(article){
    return axios({
      method: 'post',
      url: `api/articles/`,
      data: article
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return error;
    });
  }
}

export default ArticlesApi;