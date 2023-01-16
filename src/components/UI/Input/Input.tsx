import { ChangeEvent, FC } from 'react'

interface inputProps {
	type: string
	value: string | number
	onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const Input: FC<inputProps> = ({ type, value, onChange }) => (
	<input type={type} value={value} onChange={onChange} />
)

export default Input
