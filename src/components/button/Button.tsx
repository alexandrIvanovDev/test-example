import React, {ButtonHTMLAttributes, FC} from 'react';
import cl from './Button.module.css'
import classNames from 'classnames';

interface PropsType extends ButtonHTMLAttributes<HTMLButtonElement> {
    addClass?: string
}

export const Button: FC<PropsType> = (props) => {

    const {children, addClass, ...otherProps} = props

    return (
        <button className={classNames(addClass, cl.btn)} {...otherProps}>{children}</button>
    );
};