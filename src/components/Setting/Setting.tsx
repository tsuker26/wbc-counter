import { ChangeEvent, FC, useState } from 'react'
import { useMainContext } from '../../context'
import Selector from '../UI/Selector/Selector'
import Button from '../UI/Button/Button'
import { typesOfCells } from '../../data'
import Input from '../UI/Input/Input'

type SettingProps = {
	clear: () => void
}

const Setting: FC<SettingProps> = ({ clear }) => {
	const {
		mode,
		setMode,
		cells,
		setCells,
		wbc,
		setWbc,
		maxCount,
		setMaxCount,
		modeCells,
		setModeCells,
	} = useMainContext()
	const [add, setAdd] = useState<string>('')
	const addCell = () => {
		if (add) {
			setCells([...cells, add])
			setAdd('')
		}
	}

	return (
		<div className={'setting'}>
			<div className={'input_block input_wbc'}>
				<Input
					type='text'
					value={wbc}
					onChange={(e: ChangeEvent<HTMLInputElement>) =>
						setWbc(e.target.value)
					}
				/>
				<span>10⁹/L</span>
			</div>
			<div className={'input_block max_count'}>
				<Input
					type='tel'
					value={maxCount}
					onChange={(e: ChangeEvent<HTMLInputElement>) =>
						setMaxCount(+e.target.value)
					}
				/>
				<span>Max</span>
			</div>
			<div className={'input_block add'}>
				<Input
					type='text'
					value={add}
					onChange={(e: ChangeEvent<HTMLInputElement>) =>
						setAdd(e.target.value)
					}
				/>
				<Button fn={addCell}>Add</Button>
			</div>
			<div className={'btn'}>
				<Button fn={window.print}>Print</Button>
				<Button fn={clear}>Default</Button>
				<Selector
					fn={setMode}
					selectActive={mode}
					selectors={[
						{ id: '1', name: '-' },
						{ id: '2', name: '+' },
					]}
				/>
				<Selector
					fn={setModeCells}
					selectActive={modeCells}
					selectors={Object.keys(typesOfCells).map(el => ({
						id: el,
						name: `${el[0].toUpperCase()}${el.slice(1, 5)}  ${el
							.slice(5)
							.toLowerCase()}`,
					}))}
				/>
			</div>
		</div>
	)
}

export default Setting
