import React, {FC, useEffect, useState, TouchEvent, useRef} from 'react';
import SubRow from "./SubRow";


type RowProps = {
    cell: string;
    mode: boolean;
    total: number;
    wbc: number;
    subCellsActive: boolean;
    setTotal: (total: number) => void;
    deleteRow: (cell: string, count: number) => void;
}


const Row: FC<RowProps> = ({cell, mode, setTotal, total, wbc, deleteRow, subCellsActive}) => {
    const [count, setCount] = useState<number>(0)
    const [leftRow, setLeftRow] = useState<number>(0)
    const [widthDelete, setWidthDelete] = useState<number>(0)
    const [displayDelete, setDisplayDelete] = useState<string | undefined>('none')
    const [touchStart, setTouchStart] = useState<number>(0)
    const [rowWidth, setRowWidth] = useState<number>(0)
    const [subRowActive, setSubRowActive] = useState<boolean>(true)
    const [subCells] = useState(['Myelocytes', 'Metamyelocytes', 'Bandnuclear', 'Segmentednuclear'])
    const rowRef = useRef<HTMLDivElement>(null)

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


    function handlerDown(e: TouchEvent) {
        setTouchStart(e.targetTouches[0].clientX)
        if (rowRef.current) setRowWidth(rowRef.current.offsetWidth);
    }

    function handlerMove(e: TouchEvent) {
        let deltaX = e.targetTouches[0].clientX - touchStart
        if (deltaX > 0) deltaX = 0

        setDisplayDelete('flex')
        setWidthDelete(-deltaX)
        setLeftRow(deltaX)

        if (leftRow < -rowWidth / 2) deleteRow(cell, count)
        if (!leftRow) setDisplayDelete('none')

    }

    function handlerUp() {
        if (leftRow > -rowWidth / 2) {
            setLeftRow(0)
            setDisplayDelete('none')
            setWidthDelete(0)
        }
    }

    return (
        <>

            <div className={'row_block'}>
                <div ref={rowRef}
                     className={'row'}
                     style={{left: `${leftRow}px`}}
                     onTouchStart={handlerDown}
                     onTouchMove={handlerMove}
                     onTouchEnd={handlerUp}>
                    <span onClick={changeCount} className={'cell'}>{cell}</span>
                    <span onClick={changeCount} className={'count'}>  {count}</span>
                    <span onClick={changeCount} className={'relative'}>{count && `${relative.toFixed(2)}%`}</span>
                    <span onClick={changeCount} className={'absolute'}>{wbc && count && absolute.toFixed(2)}  </span>
                    {!subCellsActive
                        ? <span onClick={() => deleteRow(cell, count)} className="action delete">x</span>
                        : <span onClick={() => setSubRowActive(!subRowActive)}
                                className="action open">{subRowActive ? '↑' : '↓'}</span>}
                </div>

                <div className={'delete_block'} style={{width: `${widthDelete}px`, display: `${displayDelete}`}}>
                    <span>Delete</span>
                </div>
            </div>
            {subCellsActive && subRowActive && subCells.map(subCell => <SubRow
                key={subCell}
                subCell={subCell}
                count={count}
                setCount={setCount}
                total={total}
                setTotal={setTotal}/>)}
        </>

    );
};

export default Row;

