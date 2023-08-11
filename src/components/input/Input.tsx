import React, {ChangeEvent, FC, InputHTMLAttributes} from 'react';
import cl from './Input.module.css'
import {classNames} from '../../helpers/classNames/classNames';
import errorImg from '../../assets/img/error.svg'
import successImg from '../../assets/img/success.svg'

interface PropsType extends InputHTMLAttributes<HTMLInputElement> {
    addClass: string;
    value: string;
    onChangeValue: (value: ChangeEvent<HTMLInputElement>) => void;
    error?: string | null
}

export const Input: FC<PropsType> = (props) => {

    const {addClass, value, onChangeValue, error, placeholder, id, ...otherProps} = props

    return (
        <div className={classNames(cl.group, {}, [addClass])}>
            <input
                type="text"
                className={classNames(cl.input, {[cl.error]: !!error, [cl.success]: error === 'success'}, [])}
                    // [error === 'success' ? cl.success : cl.error])
                placeholder={placeholder}
                id={id}
                value={value}
                onChange={onChangeValue}
                {...otherProps}
            />
            <label
                // className={classNames(cl.label, {[cl.errorMessage]: error === 'success' ? cl.success : cl.error})}
                className={classNames(cl.label, {}, [error === 'error' ? cl.errorMessage : ''])}
                htmlFor={id}
            >
                {/*{error ? error : placeholder}*/}
                {placeholder}
            </label>
            {error === 'success'
                ? <img src={successImg} alt="success" className={cl.errorImg}/>
                : error === 'error'
                    ? <img src={errorImg} alt="error" className={cl.errorImg}/>
                    : ''
            }
        </div>
    );
};