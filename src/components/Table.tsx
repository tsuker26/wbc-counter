import React, {FC} from 'react';
import TableHead from "./TableHead";
import TableBody from "./TableBody";


const Table: FC = () => {
    return (
        <div className={'table'}>
            <TableHead/>
            <TableBody/>
        </div>
    );
};


export default Table;



