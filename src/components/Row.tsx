import React, {FC, useEffect, useState} from 'react';


type RowProps = {
    cell: string;
    mode: boolean;
    total: number;
    wbc: number;
    setTotal: (total: number) => void;
    deleteRow: (cell: string, count: number) => void;
}


const Row: FC<RowProps> = ({cell, mode, setTotal, total, wbc, deleteRow}) => {
    const [count, setCount] = useState<number>(0)
    const relative = ((count * 100) / total);
    const absolute = (relative * wbc) / 100
    const changeCount = () => {
        if (mode) {
            if (total === 100) return
            setCount(count + 1)
            setTotal(total + 1)

        } else {
            if (count === 0) return
            setCount(count - 1)
            setTotal(total - 1)
        }

    }
    useEffect(() => {
        if (!total) setCount(0)
    }, [total])


    return (
        <div className={'row'}>
            <span onClick={changeCount} className={'cell'}>{cell}</span>
            <span onClick={changeCount}  className={'count'}>  {count}</span>
            <span onClick={changeCount}  className={'relative'}>{count && `${relative.toFixed(2)}%`}</span>
            <span onClick={changeCount}  className={'absolute'}>{wbc && count && absolute.toFixed(2)}  </span>
            <span  className="delete" onClick={() => deleteRow(cell, count)}>x</span>
        </div>
    );
};

export default Row;