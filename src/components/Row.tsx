import React, {FC, useEffect, useState} from 'react';


type RowProps = {
    cell: string;
    mode: boolean;
    total: number;
    wbc: number;
    setTotal: (total: number) => void;
    deleteRow: (cell: string) => void;

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
        <tr>
            <td className={'cell'} onClick={changeCount}>{cell}</td>
            <td>{count}</td>
            <td>{count && `${relative.toFixed(2)}%`}</td>
            <td>{wbc && absolute.toFixed(2)}  </td>
            <td className={'delete'} onClick={() => deleteRow(cell)}>
                <div>x</div>
            </td>
        </tr>
    );
};

export default Row;