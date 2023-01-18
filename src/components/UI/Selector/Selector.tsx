import { FC } from 'react'
import { ITypesOfCells } from '../../../data'

export type selector = {
	id: string
	name: string
}

interface selectorProps {
	fn: (select: any) => void
	selectActive: string | keyof ITypesOfCells
	selectors: selector[]
}

const Selector: FC<selectorProps> = ({ fn, selectActive, selectors }) => {
	return (
		<>
			{selectors.map(select => (
				<button
					key={select.id}
					onClick={() => fn(select.id)}
					className={`select ${select.id === selectActive ? 'active' : ''}`}
				>
					{select.name}
				</button>
			))}
		</>
	)
}

export default Selector
