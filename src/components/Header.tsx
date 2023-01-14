import  {FC} from 'react';

const Header:FC = () => {
    return (
        <header className={'header'}>
            <div className={'header_logo'}>
                <img src="/img/header-icon.png" alt=""/>
            </div>
            <span className={'header_name'}>WBC Counter</span>
        </header>
    );
};

export default Header;