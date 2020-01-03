import React, { useState, useEffect } from 'react';
import Form from './Form';
import ArticlesApi from '../../api/articlesApi';

function ArticleEdit(props) {
  const [article, setArticle] = useState({
    title: '',
    content: ''
  })

  useEffect(() => {
    ArticlesApi.getArticle(props.match.params.id)
      .then((data) => {
        setArticle(data);
      })
      .catch(error => console.log('error', error));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    ArticlesApi.updateArticle(article, props.match.params.id)
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
    props.history.push(`/articles/${props.match.params.id}`);
  }

  const dataArticle = {
    title: article.title,
    content: article.content
  };
  const settings = {
    handleSubmit: handleSubmit,
    handleChange: handleChange,
    handleCancel: handleCancel,
    actionLabel: 'Update'
  };
  return (
    <div>
      <h1>Edit {article.title}</h1>
      <Form article={dataArticle} settings={settings} />
    </div>
  );
}

export default ArticleEdit;