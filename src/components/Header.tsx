import  {FC} from 'react';

const Header:FC = () => {
    return (
        <header className={'header'}>
            <div className={'logo'}>
                <img src="/img/header-icon.png" alt=""/>
            </div>
        </header>
    );
};

export default Header;