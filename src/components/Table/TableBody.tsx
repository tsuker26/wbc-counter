import {FC, useEffect, useState} from 'react';
import Row from "./Row/Row";
import {useMainContext} from "../../context";

const TableBody: FC = () => {
    const {cells, setCells, total, setTotal, maxCount, modeCells} = useMainContext()
    const [subCells] = useState(['Myelocytes', 'Metamyelocytes', 'Bandnuclear', 'Segmentednuclear'])

    //Удаленин строки
    const deleteRow = (cell: string, count: number) => {
        setTotal(total - count)
        setCells([...cells.filter(row => row !== cell)])
    }
    useEffect(() => {
        setTotal(0)
        if (modeCells === 'Cells blood') {
            setCells(['Monocyte', 'Lymphocyte', 'Eosinophil', 'Basophil'])
        } else if (modeCells === 'Cells dogs') {
            setCells(['CellDogs1', 'CellDogs2', 'CellDogs3', 'CellDogs4', 'CellDogs5'])
        }
    }, [modeCells])
    return (
        <div className={'body'}>
            {modeCells === 'Cells blood' && <Row cell={'Neutrophil'}
                                                 subCells={subCells}
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