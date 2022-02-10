import React from 'react';

import './header.css';

 const Header = (props) => {
    return (
        <header className="header">
            <h1>{props.titulo}</h1>
            <h2>{props.subtitulo}</h2>
        </header>
    )
}

export default Header;
