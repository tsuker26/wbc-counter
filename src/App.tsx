import React, {useState} from 'react';
import './styles/App.scss';
import Table from "./components/Table";
import Setting from "./components/Setting";
import Print from './components/Print';

function App() {
    const [mode, setMode] = useState<boolean>(true)
    const [cells, setCells] = useState<string[]>([ 'Monocyte', 'Lymphocyte', 'Eosinophil', 'Basophil'])
    const [wbc, setWbc] = useState<number>(0)
    const [total, setTotal] = useState<number>(0)
    const defaultValue = () => {
        if(window.confirm('Вы уверенны?')){
            setTotal(0)
            setMode(true)
            setWbc(0)
            setCells(['Monocyte', 'Lymphocyte', 'Eosinophil', 'Basophil'])
        }
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
                     clear={defaultValue}/>

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
