import React, {FC, useState} from 'react';
import Row from "./Row";

type TableProps = {
    cells: string[],
    mode: boolean,
    wbc:number,

}

const Table: FC<TableProps> = ({cells, mode,wbc}) => {
    const [total, setTotal] = useState<number>(0)
    return (
        <table className={'table'}>
            <thead>
            <tr>
                <th>Клетка</th>
                <th>Количество</th>
                <th>Относительное значение</th>
                <th>Абсолютное значение</th>
            </tr>
            </thead>
            <tbody>
            {cells.map(el => <Row  key={el} mode={mode} cell={el} total={total} setTotal={setTotal} wbc ={wbc}/>)}
            <tr>
                <td>Всего :</td>
                <td>{total}</td>
            </tr>
            </tbody>
        </table>
    );
};

export default Table;