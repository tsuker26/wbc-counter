import React, {FC, useState} from 'react';
import {useTotal} from "../hooks/useTotal";
import {changeCount} from "../utils/changeCount";

type subRowProps = {
    subCell: string,
    count: number,
    total: number,
    mode: boolean,
    display: string,
    setCount: (count: number) => void,
    setTotal: (total: number) => void,
}
const SubRow: FC<subRowProps> = ({subCell, count, setCount, total, setTotal, mode, display}) => {
    const [subCount, setSubCount] = useState<number>(0)
    useTotal({total, setCount: setSubCount})

    return (
        <div className={'row_block'}
             style={{display: `${display}`}}
             onClick={() => changeCount(
                 {mode, total, count, subCount, setCount, setSubCount, setTotal})}>
            <div className={'sub row'}>
                <span className={'cell'}>{subCell}</span>
                <span className={'count'}>{subCount}</span>
            </div>
        </div>
    );
};

export default SubRow;