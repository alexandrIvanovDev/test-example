import React, {FC, SelectHTMLAttributes} from 'react';
import cl from './Select.module.css'
import classNames from 'classnames';

interface PropsType extends SelectHTMLAttributes<HTMLSelectElement> {
    addClass?: string
}

export const Select: FC<PropsType> = (props) => {

    const {addClass, ...otherProps} = props

    return (
        <select className={classNames(addClass, cl.select)}{...otherProps}>
            <option value="" disabled selected>Тема сообщения</option>
            <option value="theme1">Тема 1</option>
            <option value="theme2">Тема 2</option>
            <option value="theme3">Тема 3</option>
        </select>
    )
};