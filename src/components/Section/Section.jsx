import React from 'react';
import Article from '../Article/Article';
import Aside from '../Aside/Aside';
import './section.css';

 const Section = (props) => {
    return (
        <section className="section">
            <Aside titulo="Componente Aside Um" />            
            <Article titulo="Componente Um" conteudo="Componente Article"/>    
            <Aside titulo="Componente Aside Dois" />            
            <Article titulo="Componente Dois" conteudo="Componente Article"/>          
        </section>
    )
}

export default Section;
