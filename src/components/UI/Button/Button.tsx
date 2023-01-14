import {FC, PropsWithChildren} from 'react';

interface buttonProps {
    fn: () => void
}

const Button: FC<PropsWithChildren<buttonProps>> = ({fn, children}) => <button onClick={fn}>{children}</button>;

export default Button;