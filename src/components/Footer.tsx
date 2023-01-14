import {FC} from 'react';

const Footer:FC = () => {
    return (
        <footer className={'footer'}>
            <span>©Tsuker Corp {new Date().getFullYear()}</span>
        </footer>
    );
};

export default Footer;