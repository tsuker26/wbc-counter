import React, {FC, useEffect} from 'react';
import Row from "./Row";
import {useMainContext} from "../context";

const TableBody: FC = () => {
    const {cells, setCells, total, setTotal, maxCount, modeCells} = useMainContext()
    //Удаленин строки
    const deleteRow = (cell: string, count: number) => {
        setTotal(total - count)
        setCells([...cells.filter(row => row !== cell)])
    }
    useEffect(() => {
        modeCells
            ? setCells(['Monocyte', 'Lymphocyte', 'Eosinophil', 'Basophil'])
            : setCells(['CellDogs1', 'CellDogs2', 'CellDogs3', 'CellDogs4', 'CellDogs5'])
        setTotal(0)
    }, [modeCells])
    return (
        <div className={'body'}>
            {modeCells && <Row cell={'Neutrophil'}
                               isSubCells={true}
                               deleteRow={deleteRow}/>}

            {cells.map(el => <Row key={el}
                                  isSubCells={false}
                                  cell={el}
                                  deleteRow={deleteRow}/>)}
            <div className="row_block ">
                <div className="row all">
                    <span>{total}/{maxCount}</span>
                </div>
            </div>
        </div>
    );
};

export default TableBody;