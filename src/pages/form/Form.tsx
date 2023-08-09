import React from 'react';
import cl from './Form.module.css'
import {Button} from '../../components/button/Button';
import {Input} from '../../components/input/Input';
import {Textarea} from '../../components/textarea/Textarea';
import {Select} from '../../components/select/Select';

export const Form = () => {
    return (
        <div className={cl.wrapper}>
            <div className={cl.form}>
                <h2>Форма для тебя</h2>
                <Input placeholder='Представтесь пожалуйста' addClass={cl.input}/>
                <Input placeholder='Введите ваш e-mail' addClass={cl.input}/>
                <Select addClass={cl.select}/>
                <Textarea placeholder='Введите сообщение' addClass={cl.textarea}/>
                <div className={cl.btns}>
                    <Button addClass={cl.greyBtn}>Сбросить</Button>
                    <Button addClass={cl.sendBtn}>Отправить</Button>
                </div>
            </div>
        </div>
    )
}