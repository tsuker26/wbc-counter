import  {ChangeEvent, FC, useState} from 'react';
import {useMainContext} from "../../context";
import Selector from "../UI/Selector/Selector";
import Button from "../UI/Button/Button";

type SettingProps = {
    clear: () => void,
}

const Setting: FC<SettingProps> = ({clear}) => {

    const {mode, setMode, cells, setCells, setWbc, maxCount, setMaxCount,modeCells,setModeCells} = useMainContext()

    const [add, setAdd] = useState<string>('')
    const [inputWbc, setInputWbc] = useState<string>('')
    const addCell = () => {
        if (add) {
            setCells([...cells, add])
            setAdd('')
        }
    }
    const changeWbc = (num: string) => {
        setInputWbc(num)
        setWbc(+inputWbc)
    }
    return (
        <div className={'setting'}>
            <div className={'input input_wbc'}>
                <input type="text"
                       value={inputWbc}
                       onChange={((e: ChangeEvent<HTMLInputElement>) => changeWbc(e.target.value))}/>
                <span>10⁹/L</span>
            </div>
            <div className={'input max_count'}>
                <input type="tel"
                       value={maxCount}
                       onChange={((e: ChangeEvent<HTMLInputElement>) => setMaxCount(+e.target.value))}/>
                <span>Max</span>
            </div>
            <div className={'input add'}>
                <input
                    type="text"
                    value={add}
                    onChange={((e: ChangeEvent<HTMLInputElement>) => setAdd(e.target.value))}/>
                <Button fn={addCell}>Add</Button>
            </div>
            <div className={'btn'}>
                <Button fn={window.print}>Print</Button>
                <Button fn={clear}>Default</Button>
                <Selector fn={setMode} selectActive={mode} selectors={['-','+']} />
                <Selector fn={setModeCells} selectActive={modeCells} selectors={['Cells blood','Cells dogs']}/>
            </div>
        </div>
    );
};

export default Setting;