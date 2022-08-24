import React, {ChangeEvent, FC, useState} from 'react';

type SettingProps = {
    mode: boolean,
    cells: string[],
    wbc: number,
    setWbc: (wbc: number) => void,
    setMode: (mode: boolean) => void,
    setCells: (cells:string[]) => void,
}

const Setting: FC<SettingProps> = ({mode, setMode, cells, setCells, wbc, setWbc}) => {
    const [add, setAdd] = useState<string>('')
    const addCell = () => {
        if (add) {
            setCells([...cells, add])
            setAdd('')
        }
    }
    return (
        <div className={'setting'}>
            <div className={'input'}>
                <input type="tel"
                       value={wbc}
                       onChange={((e: ChangeEvent<HTMLInputElement>) => setWbc(+e.target.value))}/>
                <span>10⁹/L</span>
            </div>
            <div className={'add'}>
                <input
                    type="text"
                    value={add}
                    onChange={((e: ChangeEvent<HTMLInputElement>) => setAdd(e.target.value))}/>
                <button onClick={addCell}>Добавить</button>
            </div>
            <div className={'btn'}>

                <button>Очистить</button>
                <button onClick={() => setMode(false)} className={!mode ? 'active' : ''}>-</button>
                <button onClick={() => setMode(true)} className={mode ? 'active' : ''}>+</button>
            </div>
        </div>
    );
};

export default Setting;