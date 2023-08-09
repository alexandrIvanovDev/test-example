import React, {FC, InputHTMLAttributes} from 'react';
import cl from './Input.module.css'
import classNames from 'classnames';

interface PropsType extends InputHTMLAttributes<HTMLInputElement> {
    addClass?: string
}

export const Input: FC<PropsType> = (props) => {

    const {addClass, ...otherProps} = props

    return (
        <input
            className={classNames(addClass, cl.input)}
            {...otherProps}
        />
    )
};