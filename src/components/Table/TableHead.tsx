import { FC } from 'react'

const TableHead: FC = () => (
	<div className={'head'}>
		<div className='row'>
			<span className={'cell'}>Cell</span>
			<span className={'count'}>Count</span>
			<span className={'relative'}>Relative</span>
			<span className={'absolute'}>Absolute</span>
		</div>
	</div>
)

export default TableHead