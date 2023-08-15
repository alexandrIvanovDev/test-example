import React, {FC, TextareaHTMLAttributes} from 'react';
import cl from './Textarea.module.css'
import {classNames} from '../../helpers/classNames/classNames';

interface PropsType extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    addClass?: string
}

export const Textarea: FC<PropsType> = (props) => {

    const {addClass, ...otherProps} = props

    return (
        <textarea
            className={classNames(cl.textarea, {}, [addClass || ''])}
            {...otherProps}
        />
    )
};