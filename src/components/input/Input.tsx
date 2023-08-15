import React, {ChangeEvent, FC, InputHTMLAttributes} from 'react';
import cl from './Input.module.css'
import {classNames} from '../../helpers/classNames/classNames';
import errorImg from '../../assets/img/error.svg'
import successImg from '../../assets/img/success.svg'

interface PropsType extends InputHTMLAttributes<HTMLInputElement> {
    addClass: string;
    value: string;
    onChangeValue: (value: ChangeEvent<HTMLInputElement>) => void;
    status?: string | null
}

export const Input: FC<PropsType> = (props) => {

    const {addClass, value, onChangeValue, status, placeholder, id, ...otherProps} = props

    return (
        <div className={classNames(cl.group, {}, [addClass])}>
            {status === 'error' && <span className={cl.notification}>{placeholder}</span>}
            <input
                type="text"
                className={classNames(cl.input, {[cl.error]: !!status, [cl.success]: status === 'success'}, [])}
                placeholder={placeholder}
                id={id}
                value={value}
                onChange={onChangeValue}
                {...otherProps}
            />
            <label
                className={classNames(cl.label, {[cl.errorMessage]: status === 'error'}, [])}
                htmlFor={id}
            >
                {placeholder}
            </label>
            {status === 'success'
                ? <img src={successImg} alt="success" className={cl.img}/>
                : status === 'error'
                    ? <img src={errorImg} alt="error" className={cl.img}/>
                    : ''
            }
        </div>
    );
};