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

    const deleteRow = (cell: string, count: number) => {
        setTotal(total - count)
        setCells([...cells.filter(row => row !== cell)])
    }
    return (
        <div className={'table'}>
            <div className={'head'}>
                <span className={'cell'}>Клетка</span>
                <span className={'count'}>Количество</span>
                <span className={'relative'}>Относительное </span>
                <span className={'absolute'}>Абсолютное </span>
            </div>
            <div className={'body'}>
                {cells.map(el => <Row key={el}
                                      mode={mode}
                                      cell={el}
                                      total={total}
                                      setTotal={setTotal}
                                      wbc={wbc}
                                      deleteRow={deleteRow}/>)}
                <div className="row all">
                    <span>Всего :</span>
                    <span>{total}/100</span>
                </div>
            </div>
        </div>
    );
};


export default Table;

//
//
// <thead>
// <tr>
//     <th>Клетка</th>
//     <th>Количество</th>
//     <th>Относительное значение</th>
//     <th>Абсолютное значение</th>
// </tr>
// </thead>
// <tbody>
//
// <tr>
//     <td>Всего :</td>
//     <td>{total}</td>
// </tr>
// </tbody>

//

