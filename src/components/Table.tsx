import React, {FC, useContext} from 'react';
import Row from "./Row";
import {Context} from "../context";


const Table: FC = () => {
    const {cells, setCells, total, setTotal, maxCount} = useContext(Context)

    //Удаленин строки
    const deleteRow = (cell: string, count: number) => {
        setTotal(total - count)
        setCells([...cells.filter(row => row !== cell)])
    }
    return (
        <div className={'table'}>
            <div className={'head'}>
                <div className="row">
                    <span className={'cell'}>Cell</span>
                    <span className={'count'}>Count</span>
                    <span className={'relative'}>Relative</span>
                    <span className={'absolute'}>Absolute</span>
                </div>
            </div>
            <div className={'body'}>
                <Row cell={'Neutrophil'}
                     subCellsActive={true}
                     deleteRow={deleteRow}/>

                {cells.map(el => <Row key={el}
                                      subCellsActive={false}
                                      cell={el}
                                      deleteRow={deleteRow}/>)}
                <div className="row_block">
                    <div className="row all">
                        <span>{total}/{maxCount}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Table;



