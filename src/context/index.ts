import {createContext} from "react";

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

const defaultState:IContext = {
    mode:true,
    setMode:()=>{},
    cells:[],
    setCells:()=>{},
    wbc:0,
    setWbc:()=>{},
    maxCount:100,
    setMaxCount:()=>{},
    total:0,
    setTotal:()=>{}
}
export const Context = createContext<IContext>(defaultState)

