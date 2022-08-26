import React, {FC, useEffect, useState, TouchEvent, useRef} from 'react';


type RowProps = {
    cell: string;
    mode: boolean;
    total: number;
    wbc: number;
    setTotal: (total: number) => void;
    deleteRow: (cell: string, count: number) => void;
}
type computeReturn = {
    relativeClick: number;
    coordinateClick: number,
    rowLeft: number,
    relativePercents: number,
    click: number,
}


const Row: FC<RowProps> = ({cell, mode, setTotal, total, wbc, deleteRow}) => {
    const [count, setCount] = useState<number>(0)
    const [left, setLeft] = useState<number | undefined>(0)
    const [touchStart, setTouchStart] = useState<number>(0)
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

    // const computePosition = (e: TouchEvent): computeReturn | undefined => {
    //     if (rowRef.current) {
    //         let rowLeft = rowRef.current.getBoundingClientRect().left
    //         let click = e.targetTouches[0].clientX
    //         let coordinateClick = click - rowLeft
    //         let relativeClick = coordinateClick - rowRef.current.offsetWidth
    //
    //         let relativePercents = relativeClick * 100;
    //         return {relativeClick, coordinateClick, rowLeft, relativePercents, click}
    //     }
    // }


    function handlerDown(e: TouchEvent) {
        setTouchStart(e.targetTouches[0].clientX)
        console.log(e.targetTouches[0].clientX);
    }

    function handlerMove(e: TouchEvent) {
        if (rowRef.current) {
            let click = e.targetTouches[0].clientX
            let deltaX = click - touchStart
            setLeft(deltaX)
            if(left&&left < -200){
                deleteRow(cell,count)
            }

        }
    }

    function handlerUp() {
        if(left&&left>-200){
            setLeft(0)
        }
    }

    return (
        <div ref={rowRef}
             className={'row'}
             style={{left: `${left}px`}}
             onTouchStart={handlerDown}
             onTouchMove={handlerMove}
             onTouchEnd={handlerUp}>
            <span onClick={changeCount} className={'cell'}>{cell}</span>
            <span onClick={changeCount} className={'count'}>  {count}</span>
            <span onClick={changeCount} className={'relative'}>{count && `${relative.toFixed(2)}%`}</span>
            <span onClick={changeCount} className={'absolute'}>{wbc && count && absolute.toFixed(2)}  </span>
            <span onClick={() => deleteRow(cell, count)} className="delete">x</span>
        </div>
    );
};

export default Row;