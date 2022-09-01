import React, {FC, useEffect, useState} from 'react';

type subRowProps = {
    subCell: string,
    count: number,
    total: number,
    setCount: (count: number) => void,
    setTotal: (total: number) => void,
}
const SubRow: FC<subRowProps> = ({subCell, count, setCount, total, setTotal}) => {
    const [subCount, setSubCount] = useState<number>(0)

    function changeCount() {
        setCount(count + 1)
        setSubCount(subCount + 1)
        setTotal(total + 1)
    }

    useEffect(() => {
        if (!total) setSubCount(0)
    }, [total])

    return (
        <div className={'row_block'} onClick={changeCount}>
            <div className={'row'}>
                <span className={'cell'}>{subCell}</span>
                <span className={'count'}>{subCount}</span>
                <span className={'relative'}></span>
                <span className={'absolute'}></span>
            </div>
        </div>
    );
};

export default SubRow;