import {createContext, FC, PropsWithChildren, useContext, useMemo, useState} from "react";
import {typesOfCells} from "../data";

export interface IContext {
    mode: string,
    setMode: (mode: string) => void,
    cells: string[],
    setCells: (cells: string[]) => void,
    wbc: string,
    setWbc: (wbc: string) => void,
    maxCount: number,
    setMaxCount: (maxCount: number) => void,
    total: number,
    setTotal: (total: number) => void,
    modeCells: string,
    setModeCells: (mode: string) => void,
}



const MainContext = createContext<IContext>({} as IContext)

export const useMainContext = () => useContext(MainContext)

const ContextProvider: FC<PropsWithChildren> = ({children}) => {
    const [mode, setMode] = useState<string>('2')
    const [modeCells, setModeCells] = useState<string>('cellsBlood')
    const [cells, setCells] = useState<string[]>(typesOfCells.cellsBlood)
    const [wbc, setWbc] = useState<string>('0')
    const [maxCount, setMaxCount] = useState<number>(100)
    const [total, setTotal] = useState<number>(0)


    const value = useMemo(() =>
            ({
                mode,
                setMode,
                cells,
                setCells,
                wbc,
                setWbc,
                maxCount,
                setMaxCount,
                total,
                setTotal,
                modeCells,
                setModeCells,
            }),
        [mode, cells, wbc, maxCount, total, modeCells])
    return (
        <MainContext.Provider
            value={value}>
            {children}
        </MainContext.Provider>
    )
}
export default ContextProvider