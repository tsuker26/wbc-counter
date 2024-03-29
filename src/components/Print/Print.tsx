import { FC } from 'react'

const Print: FC<Record<string, string>> = ({ wbc }) => (
	<div className={'print'}>
		<div className={'print_info'}>
			<div className={'info'}>
				<p>Name:</p>
			</div>
			<div className={'info'}>
				<p>Date:</p>
			</div>
		</div>
		<div className={'wbc'}>
			<span>WBC:{wbc}x10⁹/L</span>
		</div>
	</div>
)

export default Print