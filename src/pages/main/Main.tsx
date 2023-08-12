import React from 'react';
import cl from './Main.module.css'
import {Button} from '../../components/button/Button';
import {useSelector} from 'react-redux';
import {AppStateType} from '../../store/store';
import {useNavigate} from 'react-router-dom';

export const Main = () => {

    const {name, email, theme} = useSelector((state: AppStateType) => state.user.user)

    const navigate = useNavigate()

    const onClick = () => {
        navigate('/form')
    }

    return (
        <div className={cl.wrapper}>
            <div className={cl.formBlock}>
                Form data:
                {name
                    ? <div style={{marginTop: 20}}>
                        <div><b>ФИО:</b> {name}</div>
                        <div style={{marginTop: 10}}><b>E-mail:</b> {email}</div>
                        <div style={{marginTop: 10}}><b>Тема:</b> {theme.label}</div>
                    </div>
                    : <div style={{marginTop: 20}}>Форма пока не заполнена</div>}
            </div>
            <div>
                <Button onClick={onClick}>{name ? 'Изменить' : 'Заполнить форму'}</Button>
            </div>
        </div>
    )
}