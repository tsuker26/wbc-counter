import React from 'react';

const Footer = () => {
    return (
        <footer className={'footer'}>
            <span>©Tsuker Corp {new Date().getFullYear()}</span>
        </footer>
    );
};

export default Footer;