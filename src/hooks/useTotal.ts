import {useEffect} from "react";

type useTotalParam = {
    total: number,
    setCount: (count: number) => void
}
export const useTotal = ({total, setCount}: useTotalParam) => {
    useEffect(() => {
        if (!total) setCount(0)
    }, [total])
}