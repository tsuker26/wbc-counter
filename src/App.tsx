import React, {useState} from 'react';
import './styles/App.scss';
import Table from "./components/Table";
import Setting from "./components/Setting";
import Print from './components/Print';

function App() {
    const [mode, setMode] = useState<boolean>(true)
    const [cells, setCells] = useState<string[]>(['Neutrophil', 'Monocyte', 'Lymphocyte', 'Eosinophil', 'Basophil'])
    const [wbc, setWbc] = useState<number>(0)
    const [total, setTotal] = useState<number>(0)
    const clear = () => {
        setTotal(0)
        setMode(true)
        setWbc(0)
        setCells(['Neutrophil', 'Monocyte', 'Lymphocyte', 'Eosinophil', 'Basophil'])
    }
    return (
        <div className="App">
            <Print wbc={wbc}/>
            <Setting mode={mode}
                     setMode={setMode}
                     setCells={setCells}
                     cells={cells}
                     wbc={wbc}
                     setWbc={setWbc}
                     clear={clear}/>

            <Table cells={cells}
                   setCells={setCells}
                   mode={mode}
                   wbc={wbc}
                   total={total}
                   setTotal={setTotal}/>

        </div>
    );
}

export default App;
