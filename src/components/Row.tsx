import React, {FC, PointerEvent, TouchEvent, useContext, useRef, useState} from 'react';
import SubRow from "./SubRow";
import {useTotal} from "../hooks/useTotal";
import {changeCount} from "../utils/changeCount";
import {Context} from "../context";


type clickRow = PointerEvent<HTMLDivElement> & {
    target: { className: string }
}

type RowProps = {
    cell: string;
    subCellsActive: boolean;
    deleteRow: (cell: string, count: number) => void;
}


const Row: FC<RowProps> =
    ({
         cell, deleteRow, subCellsActive
     }) => {
        const [count, setCount] = useState<number>(0)
        const [leftRow, setLeftRow] = useState<number>(0)
        const [widthDelete, setWidthDelete] = useState<number>(0)
        const [displayDelete, setDisplayDelete] = useState<string | undefined>('none')
        const [touchStart, setTouchStart] = useState<number>(0)
        const [rowWidth, setRowWidth] = useState<number>(0)
        const [subRowActive, setSubRowActive] = useState<boolean>(false)
        const [subCells] = useState(['Myelocytes', 'Metamyelocytes', 'Bandnuclear', 'Segmentednuclear'])
        const rowRef = useRef<HTMLDivElement>(null)
        const {mode, wbc, total, setTotal, maxCount} = useContext(Context)

        //Обнуление  значение счетчика клетки при обнулении общего счетчика
        useTotal({total, setCount})

        const relative = ((count * 100) / total);
        const absolute = (relative * wbc) / 100

        //Удалание свайпом на мобильных устройствах
        const handlerDown = (e: TouchEvent) => {
            setTouchStart(e.targetTouches[0].clientX)
            if (rowRef.current) setRowWidth(rowRef.current.offsetWidth);
        };
        const handlerMove = (e: TouchEvent) => {
            let deltaX = e.targetTouches[0].clientX - touchStart
            if (deltaX > 0) deltaX = 0

            setDisplayDelete('flex')
            setWidthDelete(-deltaX)
            setLeftRow(deltaX)

            if (leftRow < -rowWidth / 2) deleteRow(cell, count)
            if (!leftRow) setDisplayDelete('none')

        };
        const handlerUp = () => {
            if (leftRow > -rowWidth / 2) {
                setLeftRow(0)
                setDisplayDelete('none')
                setWidthDelete(0)
            }
        };
        //Изменение счетчика(changeClick) и проверка на условия при  которых можно изменять счетчик(check)
        const changeClick = (e: clickRow) => {
            if (!e.target.className.includes('action')) changeCount(
                {mode, total, count, maxCount, setCount, setTotal})
        }
        const check = (e: clickRow) => {
            if (subRowActive) {
                if (!subCellsActive) changeClick(e)
            } else changeClick(e)
        }

        return (
            <>
                <div className={'row_block '}
                     onClick={check}>
                    <div ref={rowRef}
                         className={'row'}
                         style={!subCellsActive ? {left: `${leftRow}px`} : {left: '0'}}
                         onTouchStart={handlerDown}
                         onTouchMove={handlerMove}
                         onTouchEnd={handlerUp}>
                        <span className={'cell'}>{cell}</span>
                        <span className={'count'}>  {count}</span>
                        <span className={'relative'}>{count && `${relative.toFixed(2)}%`}</span>
                        <span className={'absolute'}>{wbc && count && absolute.toFixed(2)}  </span>
                        {!subCellsActive
                            ? <span onClick={() => deleteRow(cell, count)} className="action delete">x</span>
                            : <span onClick={() => setSubRowActive(!subRowActive)}
                                    className="action open">{subRowActive ? '↑' : '↓'}</span>}
                    </div>

                    {!subCellsActive &&
                        <div className={'delete_block'}
                             style={{width: `${widthDelete}px`, display: `${displayDelete}`}}>
                            <span>Delete</span>
                        </div>
                    }
                </div>
                {subCellsActive&&subCells.map(subCell =>
                    <SubRow key={subCell}
                            show={subCellsActive && subRowActive}
                            subCell={subCell}
                            count={count}
                            setCount={setCount}
                            setTotal={setTotal}/>)}
            </>

        );
    };

export default Row;

