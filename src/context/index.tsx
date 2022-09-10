import {createContext, FC, PropsWithChildren, useContext, useMemo, useState} from "react";

export interface IContext {
    mode: boolean,
    setMode: (mode: boolean) => void,
    cells: string[],
    setCells: (cells: string[]) => void,
    wbc: number,
    setWbc: (wbc: number) => void,
    maxCount: number,
    setMaxCount: (maxCount: number) => void,
    total: number,
    setTotal: (total: number) => void,
}

const MainContext = createContext<IContext>({} as IContext)

export const useMainContext = () => useContext(MainContext)

const ContextProvider: FC<PropsWithChildren> = ({children}) => {
    const [mode, setMode] = useState<boolean>(true)
    const [cells, setCells] = useState<string[]>(['Monocyte', 'Lymphocyte', 'Eosinophil', 'Basophil'])
    const [wbc, setWbc] = useState<number>(0)
    const [maxCount, setMaxCount] = useState<number>(100)
    const [total, setTotal] = useState<number>(0)
    const value = useMemo(()=>
        ({mode, setMode, cells, setCells, wbc, setWbc, maxCount, setMaxCount, total, setTotal}),
        [mode,cells,wbc,maxCount,total])
    return (
        <MainContext.Provider
            value={value}>
            {children}
        </MainContext.Provider>
    )
}
export default ContextProvider