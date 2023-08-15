import React, {useEffect} from 'react';
import cl from './Main.module.css'
import {Button} from '../../components/button/Button';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, AppStateType} from '../../store/store';
import {useNavigate} from 'react-router-dom';
import {getUserFromLS} from '../../store/reducers/user';

export const Main = () => {

    const {user, isLogged} = useSelector((state: AppStateType) => state.user)

    const dispatch = useDispatch<AppDispatch>()

    const navigate = useNavigate()

    const onClick = () => {
        navigate('/form')
    }

    useEffect(() => {
        if(!isLogged) {
            dispatch(getUserFromLS())
        }
    }, []);

    return (
        <div className={cl.wrapper}>
            <div className={cl.formBlock}>
                Form data:
                {isLogged
                    ? <div className={cl.dataWrapper}>
                        <div><b>ФИО:</b> {user.name}</div>
                        <div className={cl.email}><b>E-mail:</b> {user.email}</div>
                        <div className={cl.theme}><b>Тема:</b> {user.theme?.label}</div>
                    </div>
                    : <div className={cl.emptyForm}>Форма пока не заполнена</div>}
            </div>
            <div>
                <Button onClick={onClick}>{isLogged ? 'Изменить' : 'Заполнить форму'}</Button>
            </div>
        </div>
    )
}