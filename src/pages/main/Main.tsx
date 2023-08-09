import React from 'react';
import cl from './Main.module.css'
import {Button} from '../../components/button/Button';

export const Main = () => {
    return (
        <div className={cl.wrapper}>
            <div className={cl.formBlock}>
                Form data: форма не заполнена
            </div>
            <div>
                <Button>Заполнить форму</Button>
            </div>
        </div>
    )
}