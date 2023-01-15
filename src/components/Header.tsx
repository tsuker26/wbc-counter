import { FC } from 'react'

const Header: FC = () => {
	return (
		<header className={'header'}>
			<div className={'header_logo'}>
				<img src='/img/header-icon.png' alt='' />
			</div>
			<img className={'name_logo'} src='/img/name-icon.png' alt='' />
		</header>
	)
}

export default Header