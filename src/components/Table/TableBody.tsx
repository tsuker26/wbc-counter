import { FC, useEffect } from 'react'
import Row from './Row/Row'
import { useMainContext } from '../../context'
import { subCellsTypes, typesOfCells } from '../../data'

const TableBody: FC = () => {
	const { cells, setCells, total, setTotal, maxCount, modeCells } =
		useMainContext()

	//Удаленин строки
	const deleteRow = (cell: string, count: number) => {
		setTotal(total - count)
		setCells([...cells.filter(row => row !== cell)])
	}
	useEffect(() => {
		setTotal(0)
		setCells(typesOfCells[modeCells])
	}, [modeCells])
	return (
		<div className={'body'}>
			{subCellsTypes[modeCells].subCells.length > 0 && (
				<Row
					cell={subCellsTypes[modeCells].name}
					isSubCells={true}
					subCells={subCellsTypes[modeCells].subCells}
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

export default TableBody
