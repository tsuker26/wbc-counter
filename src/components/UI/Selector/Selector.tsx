import React, {FC} from 'react';
interface selectorProps {
    fn:(mode:boolean)=>void,
    mode:boolean,
    selectOne:string,
    selectTwo:string,
}
const Selector:FC<selectorProps> = ({fn,mode,selectOne,selectTwo}) => {
    return  (
        <>
            <div onClick={()=>fn(!mode)} className={`select ${!mode ? 'active' : ''}`}>{selectOne}</div>
            <div onClick={()=>fn(!mode)} className={`select ${mode ? 'active' : ''}`}>{selectTwo}</div>
        </>
    )
};

export default Selector;