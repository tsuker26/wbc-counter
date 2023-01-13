import React, {FC} from 'react';
import Print from "./Print";
import Setting from "./Setting";
import Table from "./Table";
import {useMainContext} from "../context";

const Main: FC = () => {
    const {wbc, setTotal, setMode, setWbc, setMaxCount, setCells,modeCells} = useMainContext()
    const defaultValue = () => {
        if (window.confirm('Вы уверенны?')) {
            setTotal(0)
            setMode(true)
            setWbc(0)
            setMaxCount(100)
            modeCells
                ? setCells(['Monocyte', 'Lymphocyte', 'Eosinophil', 'Basophil'])
                : setCells(['CellDogs1', 'CellDogs2', 'CellDogs3', 'CellDogs4', 'CellDogs5'])
        }
    }

    return (
        <div className="App">
            <Print wbc={wbc}/>
            <Setting clear={defaultValue}/>
            <Table/>
        </div>
    );
};

export default Main;