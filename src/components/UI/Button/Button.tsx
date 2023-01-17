import { FC, PropsWithChildren } from 'react'

interface buttonProps {
	fn: () => void
}

const Button: FC<PropsWithChildren<buttonProps>> = ({ fn, children }) => (
	<button className={'button'} onClick={fn}>
		{children}
	</button>
)

export default Button