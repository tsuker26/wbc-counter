import React, {FC, useContext, useState} from 'react';
import {useTotal} from "../hooks/useTotal";
import {changeCount} from "../utils/changeCount";
import {Context} from "../context";

type subRowProps = {
    subCell: string,
    count: number,
    show: boolean,
    setCount: (count: number) => void,
    setTotal: (total: number) => void,
}
const SubRow: FC<subRowProps> = ({subCell, count, setCount, show}) => {
    const [subCount, setSubCount] = useState<number>(0)
    const {mode, total, setTotal, maxCount} = useContext(Context)
    //Обнуление  значение счетчика клетки при обнулении общего счетчика
    useTotal({total, setCount: setSubCount})

    return (
        <div className={'row_block'}
             style={{display: `${show ? 'flex' : 'none'}`}}
             onClick={() => changeCount(
                 {mode, total, count, maxCount, subCount, setCount, setSubCount, setTotal})}>
            <div className={'sub row'}>
                <span className={'cell'}>{subCell}</span>
                <span className={'count'}>{subCount}</span>
            </div>
        </div>
    );
};

export default SubRow;