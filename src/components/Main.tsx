import React, {FC, useContext} from 'react';
import Print from "./Print";
import Setting from "./Setting";
import Table from "./Table";
import {Context} from "../context";

const Main: FC = () => {
    const {wbc, setTotal, setMode, setWbc, setMaxCount, setCells} = useContext(Context)
    const defaultValue = () => {
        if (window.confirm('Вы уверенны?')) {
            setTotal(0)
            setMode(true)
            setWbc(0)
            setMaxCount(100)
            setCells(['Monocyte', 'Lymphocyte', 'Eosinophil', 'Basophil'])
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