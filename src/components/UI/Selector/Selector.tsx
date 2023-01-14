import  {FC} from 'react';
interface selectorProps {
    fn:(mode:boolean)=>void,
    mode:boolean,
    selectOne:string,
    selectTwo:string,
}
const Selector:FC<selectorProps> = ({fn,mode,selectOne,selectTwo}) => {
    return  (
        <>
            <button onClick={()=>fn(!mode)} className={`select ${!mode ? 'active' : ''}`}>{selectOne}</button>
            <button onClick={()=>fn(!mode)} className={`select ${mode ? 'active' : ''}`}>{selectTwo}</button>
        </>
    )
};

export default Selector;