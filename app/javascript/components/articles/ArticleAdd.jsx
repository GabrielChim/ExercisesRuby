import React, { useState } from 'react';
import Form from './Form';
import ArticlesApi from '../../api/articlesApi';

function ArticleAdd(props) {
  const [article, setArticle] = useState({
    title: '',
    content: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    ArticlesApi.createArticle(article)
      .then(data => {
        props.history.push(`/articles/${data.id}`);
      })
      .catch(error => console.log('error', error));   
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    
    const title = name == 'title' ?  value : article.title;
    const content = name == 'content' ?  value : article.content;

    setArticle({ title: title, content: content });
  }

  const handleCancel = () => {
    props.history.push("/articles");
  }

  const dataArticle = {
    title: article.title,
    content: article.content
  };
  const settings = {
    handleSubmit: handleSubmit,
    handleChange: handleChange,
    handleCancel: handleCancel,
    actionLabel: 'Create'
  };
  return (
    <div>
      <h1>{article.title}</h1>
      <Form article={dataArticle} settings={settings}/>
    </div>
  );
}

export default ArticleAdd;