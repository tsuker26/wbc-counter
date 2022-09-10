import React, {FC, useState} from 'react';
import {useTotal} from "../hooks/useTotal";
import {changeCount} from "../utils/changeCount";
import {useMainContext} from "../context";
import {calcValue} from "../utils/calcValue";

type subRowProps = {
    subCell: string,
    count: number,
    show: boolean,
    hiding: boolean,
    setCount: (count: number) => void,
    setTotal: (total: number) => void,
}
const SubRow: FC<subRowProps> = ({subCell, count, setCount, show,hiding}) => {
    const [subCount, setSubCount] = useState<number>(0)
    const {mode, total, setTotal, maxCount, wbc} = useMainContext()
    //Обнуление  значение счетчика клетки при обнулении общего счетчика
    useTotal({total, setCount: setSubCount})

    return (
        <div className={`row_block sub_block ${!hiding?'delete_row':''}`}
             style={{display: `${show ? 'flex' : 'none'}`}}
             onClick={() => changeCount(
                 {mode, total, count, maxCount, subCount, setCount, setSubCount, setTotal})}>
            <div className={'sub row'}>
                <span className={'cell'}>{subCell}</span>
                <span className={'count'}>{subCount}</span>
                {/*<span className={'relative'}>*/}
                {/*            {count && `${calcValue({count: subCount, total: count, wbc}).relative.toFixed(2)}%`}*/}
                {/*</span>*/}
                <span className={'absolute'}>
                    {wbc && count && calcValue({count: subCount, total, wbc}).absolute.toFixed(2)}
                </span>
            </div>
        </div>
    );
};

export default SubRow;