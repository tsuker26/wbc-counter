import React, {FC} from 'react';
import Row from "./Row";

type TableProps = {
    cells: string[],
    mode: boolean,
    wbc: number,
    total: number,
    setTotal: (total: number) => void,
    setCells: (cells: string[]) => void,

}

const Table: FC<TableProps> = ({cells, setCells, mode, wbc, total, setTotal}) => {

    const deleteRow = (cell: string) => {
        setCells([...cells.filter(row => row !== cell)])
    }
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
            {cells.map(el => <Row key={el}
                                  mode={mode}
                                  cell={el}
                                  total={total}
                                  setTotal={setTotal}
                                  wbc={wbc}
                                  deleteRow={deleteRow}/>)}
            <tr>
                <td>Всего :</td>
                <td>{total}</td>
            </tr>
            </tbody>
        </table>
    );
};

export default Table;