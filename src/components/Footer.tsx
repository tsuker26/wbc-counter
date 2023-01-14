import {FC} from 'react';

const Footer:FC = () => {
    return (
        <footer className={'footer'}>
            <a href={'https://vk.com/tsuker26'}>©Tsuker Corp {new Date().getFullYear()}</a>
        </footer>
    );
};

export default Footer;