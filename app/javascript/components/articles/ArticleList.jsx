import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';
import { articlesPagination} from '../../actions/articles';

function ArticleList(props) {
  const PAGE = 1;
  const PER_PAGE = 3;

  useEffect(() => {
    props.articleList(PAGE, PER_PAGE);
  }, []);

  const buttonsPagination = _ => {
    const listPagination = [];
    for (let index = 1; index <= Math.ceil(props.total / props.articlesPerPage); index++) {
      let classes = 'js-btn-pag btn btn-outline-primary mr-1'
      if(index == PAGE) classes += " active"

      const numberPage = <button key={index} className={classes} onClick={currentPagination}>{index}</button>;
      listPagination.push(numberPage);
    }
    return listPagination;
  }

  const currentPagination = (event) => {
    const listPagination = document.querySelectorAll(".js-btn-pag");
    listPagination.forEach(button => {
      button.classList.remove("active")
    });

    event.target.classList.add("active");
    return props.articleList(event.target.textContent, props.articlesPerPage)
  }

  return (
    <div>
      {
        props.articles.map((article) => {
          return(
            <div key={article.id}>
              <h2><Link to={`/articles/${article.id}`}>{article.title}</Link></h2>
              {article.content}
              <hr/>
            </div>
          );
        })
      }
      {buttonsPagination()}
      <hr/>
      <Link to="/articles/new" className="btn btn-outline-primary">Create New Article</Link>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    articles: state.articlesReducer.articles,
    total: state.articlesReducer.total,
    articlesPerPage: state.articlesReducer.articlesPerPage
  }
}

function mapDispatchToProps(dispatch) {
  return {
    articleList: (page, perPage) => dispatch(articlesPagination(page, perPage))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);