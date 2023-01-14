import {FC} from 'react';

interface selectorProps {
    fn: (select: string) => void,
    selectActive: string
    selectors: string[]
}

const Selector: FC<selectorProps> = ({fn, selectActive, selectors}) => {
    return (
        <>
            {selectors.map(select => <button onClick={() => fn(select)}
                                             className={`select ${select === selectActive ? 'active' : ''}`}>{select}</button>)}
        </>
    )
};

export default Selector;