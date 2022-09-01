type ChangeCountParam = {
    mode: boolean;
    total: number;
    count: number;
    subCount?: number;
    setSubCount?: (subCount: number) => void;
    setTotal: (total: number) => void;
    setCount: (count: number) => void;
}

export const changeCount = ({mode, total, count, subCount, setCount, setSubCount, setTotal}: ChangeCountParam) => {
    if (mode) {
        if (total === 100) {
            alert('Максимальное значение !')
            return;
        }
        setCount(count + 1)
        setTotal(total + 1)
        if (setSubCount) {
            if (subCount || subCount === 0) setSubCount(subCount + 1)
        }
    } else {
        if (subCount===0||count === 0) return
        setCount(count - 1)
        setTotal(total - 1)
        if (subCount && setSubCount) {
            setSubCount(subCount - 1)
        }
    }
}