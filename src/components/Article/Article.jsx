import React from 'react';

const Article = (props) => {
    return (
        <article className='article'>
            <h4>{props.titulo}</h4>
            <p>{props.conteudo}</p>
        </article>
    )
}

export default Article;
