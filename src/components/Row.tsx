import React, {FC, PointerEvent, TouchEvent, useRef, useState} from 'react';
import SubRow from "./SubRow";
import {useTotal} from "../hooks/useTotal";
import {changeCount} from "../utils/changeCount";
import {useMainContext} from "../context";
import {calcValue} from "../utils/calcValue";


type clickRow = PointerEvent<HTMLDivElement> & {
    target: { className: string }
}

type RowProps = {
    cell: string;
    isSubCells: boolean;
    deleteRow: (cell: string, count: number) => void;
}


const Row: FC<RowProps> =
    ({
         cell, deleteRow, isSubCells
     }) => {
        const [count, setCount] = useState<number>(0)
        const [leftRow, setLeftRow] = useState<number>(0)
        const [widthDelete, setWidthDelete] = useState<number>(0)
        const [displayDelete, setDisplayDelete] = useState<string | undefined>('none')
        const [touchStart, setTouchStart] = useState<number>(0)
        const [rowWidth, setRowWidth] = useState<number>(0)
        const [subRowActive, setSubRowActive] = useState<boolean>(false)
        const [subCells] = useState(['Myelocytes', 'Metamyelocytes', 'Bandnuclear', 'Segmentednuclear'])
        const [rowDelete, setRowDelete] = useState<boolean>(false)
        const rowRef = useRef<HTMLDivElement>(null)
        const {mode, wbc, total, setTotal, maxCount} = useMainContext()

        //Обнуление  значение счетчика клетки при обнулении общего счетчика
        useTotal({total, setCount})


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

        //Удаление на десктопе
        const deleteClick = () => {
            setRowDelete(true)
            setTimeout(() => deleteRow(cell, count), 1000)
        }
        //Изменение счетчика(changeClick) и проверка на условия при  которых можно изменять счетчик(check)
        const changeClick = (e: clickRow) => {
            if (!e.target.className.includes('action')) changeCount(
                {mode, total, count, maxCount, setCount, setTotal})
        }
        const check = (e: clickRow) => {
            if (subRowActive) {
                if (!isSubCells) changeClick(e)
            } else changeClick(e)
        }

        return (
            <>
                <div className={`row_block  ${rowDelete ? 'delete_row' : ''}`}
                     onClick={check}>
                    <div ref={rowRef}
                         className={'row'}
                         style={!isSubCells ? {left: `${leftRow}px`} : {left: '0'}}
                         onTouchStart={handlerDown}
                         onTouchMove={handlerMove}
                         onTouchEnd={handlerUp}>
                        <span className={'cell'}>{cell}</span>
                        <span className={'count'}>  {count}</span>
                        <span className={'relative'}>
                            {count && `${calcValue({count, total, wbc}).relative.toFixed(2)}%`}
                        </span>
                        <span className={'absolute'}>
                            {wbc && count && calcValue({count, total, wbc}).absolute.toFixed(2)}
                        </span>
                        {!isSubCells
                            ? <span onClick={deleteClick} className="action delete">x</span>
                            : <span onClick={() => setSubRowActive(!subRowActive)}
                                    className={`action toggle ${subRowActive?'close':'open'}`}>↓</span>}
                    </div>

                    {!isSubCells &&
                        <div className={'delete_block'}
                             style={{width: `${widthDelete}px`, display: `${displayDelete}`}}>
                            <span>Delete</span>
                        </div>
                    }
                </div>
                {isSubCells && subCells.map(subCell =>
                    <SubRow key={subCell}
                            show={subRowActive}
                            subCell={subCell}
                            count={count}
                            setCount={setCount}
                            setTotal={setTotal}/>)}
            </>

        );
    };

export default Row;

