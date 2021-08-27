import React from 'react';
import { Button } from './styles';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: JSX.Element
}

function IconButton({ children, ...buttonProps }: Props) {
    return (
        <Button {...buttonProps}>
            {children}
        </Button>
    );
}

export default IconButton;
