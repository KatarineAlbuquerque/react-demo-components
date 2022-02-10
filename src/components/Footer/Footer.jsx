import React from 'react';

import './footer.css';

const Footer = (props) => {
    return (
        <footer className='footer'>
            <h4>{props.titulo}</h4>
        </footer>
    )
}

export default Footer;
