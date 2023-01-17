import { FC, useEffect, useState } from 'react'
import Row from './Row/Row'
import { useMainContext } from '../../context'
import { typesOfCells } from '../../data'

const TableBody: FC = () => {
	const { cells, setCells, total, setTotal, maxCount, modeCells } =
		useMainContext()
	const [subCells] = useState([
		'Myelocytes',
		'Metamyelocytes',
		'Bandnuclear',
		'Segmentednuclear',
	])

	//Удаленин строки
	const deleteRow = (cell: string, count: number) => {
		setTotal(total - count)
		setCells([...cells.filter(row => row !== cell)])
	}
	useEffect(() => {
		setTotal(0)
		//@ts-ignore
		setCells(typesOfCells[modeCells])
	}, [modeCells])
	return (
		<div className={'body'}>
			{modeCells === 'cellsBlood' && (
				<Row
					cell={'Neutrophil'}
					subCells={subCells}
					isSubCells={true}
					deleteRow={deleteRow}
				/>
			)}

			{cells.map(el => (
				<Row key={el} isSubCells={false} cell={el} deleteRow={deleteRow} />
			))}
			<div className='row_block '>
				<div className='row all'>
					<span>
						{total}/{maxCount}
					</span>
				</div>
			</div>
		</div>
	)
}

export default TableBody;