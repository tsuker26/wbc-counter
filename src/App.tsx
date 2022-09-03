import React, {useState} from 'react';
import './styles/App.scss';
import Table from "./components/Table";
import Setting from "./components/Setting";
import Print from './components/Print';
import {Context} from './context';

function App() {
    const [mode, setMode] = useState<boolean>(true)
    const [cells, setCells] = useState<string[]>(['Monocyte', 'Lymphocyte', 'Eosinophil', 'Basophil'])
    const [wbc, setWbc] = useState<number>(0)
    const [maxCount, setMaxCount] = useState<number>(100)
    const [total, setTotal] = useState<number>(0)

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
        <Context.Provider value={{
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
        }}>
            <div className="App">
                <Print wbc={wbc}/>
                <Setting clear={defaultValue}/>
                <Table/>
            </div>
        </Context.Provider>
    );
}

export default App;
