import React, {ButtonHTMLAttributes, FC} from 'react';
import cl from './Button.module.css'
import {classNames} from '../../helpers/classNames/classNames';

interface PropsType extends ButtonHTMLAttributes<HTMLButtonElement> {
    addClass?: string
}

export const Button: FC<PropsType> = (props) => {

    const {children, addClass, ...otherProps} = props

    return (
        <button className={classNames(cl.btn, {}, [addClass || ''])} {...otherProps}>{children}</button>
    );
};