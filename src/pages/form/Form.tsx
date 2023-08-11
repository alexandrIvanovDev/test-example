import React, {ChangeEvent, FormEvent, useState} from 'react';
import cl from './Form.module.css'
import {Button} from '../../components/button/Button';
import {Input} from '../../components/input/Input';
import {Textarea} from '../../components/textarea/Textarea';
import {Select} from '../../components/select/Select';
import {useDispatch, useSelector} from 'react-redux';
import {setUser, Theme, UserType} from '../../store/reducers/user';
import {useNavigate} from 'react-router-dom';
import {AppStateType} from '../../store/store';

export const Form = () => {

    const {user, isLogged} = useSelector((state: AppStateType) => state.user)

    const [nameValue, setNameValue] = useState(user.name || '')
    const [emailValue, setEmailValue] = useState(user.email || '')
    const [messageValue, setMessageValue] = useState('')

    const [error, setError] = useState<string | null>(null)

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const reset = () => {
        setMessageValue('')
        setEmailValue('')
        setNameValue('')
        if (nameValue === '' && emailValue === '') {
            navigate('/')
        }
    }

    const submitForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (nameValue.trim() !== '' && emailValue.trim() !== '') {
            const user: UserType = {name: nameValue, email: emailValue, theme: Theme.THEME1}
            dispatch(setUser(user))
            navigate('/')
        } else {
            setError('Error')
        }
    }

    const onNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (error) {
            setError(null)
        }
        setNameValue(e.target.value)
    }

    return (
        <div className={cl.wrapper}>
            <form className={cl.form} onSubmit={submitForm}>
                <h2>Форма для тебя</h2>
                <Input
                    placeholder='Представтесь пожалуйста'
                    addClass={`${cl.input} ${error ? cl.error : ''}`}
                    value={nameValue}
                    onChange={onNameHandler}
                />
                <Input
                    placeholder='Введите ваш e-mail'
                    addClass={cl.input}
                    value={emailValue}
                    onChange={(e) => setEmailValue(e.currentTarget.value)}
                />
                <Select addClass={cl.select}/>
                <Textarea
                    placeholder='Введите сообщение'
                    addClass={cl.textarea}
                    value={messageValue}
                    onChange={(e) => setMessageValue(e.currentTarget.value)}
                />
                <div className={cl.btns}>
                    <Button addClass={cl.greyBtn} onClick={reset} type='reset'>Сбросить</Button>
                    <Button addClass={cl.sendBtn} type='submit'>Отправить</Button>
                </div>
            </form>
        </div>
    )
}