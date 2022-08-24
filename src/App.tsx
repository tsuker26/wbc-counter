import React, {useState} from 'react';
import './styles/App.scss';
import Table from "./components/Table";
import Setting from "./components/Setting";

function App() {
    const [mode,setMode] = useState<boolean>(true)
    const [cells, setCells] = useState<string[]>(['Neutrophil', 'Monocyte', 'Lymphocyte', 'Eosinophil', 'Basophil'])
    const [wbc,setWbc] = useState<number>(0)
    return (
        <div className="App">
            <Setting mode={mode} setMode={setMode} setCells={setCells} cells={cells} wbc={wbc} setWbc={setWbc}/>
            <Table cells={cells}  mode={mode} wbc ={wbc}/>
        </div>
    );
}

export default App;
