import React, { useEffect } from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';
import {addArticle, allArticles} from '../../actions/articles';

function ArticleList(props) {
  useEffect(() => {
    props.listArticles();
  }, []);

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
      <Link to="/articles/new" className="btn btn-outline-primary">Create New Article</Link>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    articles: state.articlesReducer.articles
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addArticle: (title, content) => dispatch(addArticle(title, content)),
    listArticles: () => dispatch(allArticles())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);