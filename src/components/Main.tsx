import { FC } from 'react'
import Print from './Print/Print'
import Setting from './Setting/Setting'
import Table from './Table/Table'
import { useMainContext } from '../context'
import Footer from './Footer'
import Header from './Header'
import { typesOfCells } from '../data'

const Main: FC = () => {
	const { wbc, setTotal, setMode, setWbc, setMaxCount, setCells, modeCells } =
		useMainContext()
	const defaultValue = () => {
		if (window.confirm('Вы уверенны?')) {
			setTotal(0)
			setMode('2')
			setWbc('0')
			setMaxCount(100)
			setCells(typesOfCells[modeCells])
		}
	}

	return (
		<div className='App'>
			<Header />
			<div className={'content'}>
				<Print wbc={wbc} />
				<Setting clear={defaultValue} />
				<Table />
			</div>
			<Footer />
		</div>
	)
}

export default Main
