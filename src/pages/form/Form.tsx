import React, {ChangeEvent, FormEvent, useState} from 'react';
import cl from './Form.module.css'
import {Button} from '../../components/button/Button';
import {Textarea} from '../../components/textarea/Textarea';
import {OptionType, Select} from '../../components/select/Select';
import {useDispatch, useSelector} from 'react-redux';
import {setUser, UserType} from '../../store/reducers/user';
import {useNavigate} from 'react-router-dom';
import {AppStateType} from '../../store/store';
import {Input} from '../../components/input/Input';
import {isEmailValid} from '../../helpers/validate/validate-email';

const options: Array<OptionType> = [
    {value: 'theme1', label: 'Тема 1'},
    {value: 'theme2', label: 'Тема 2'},
    {value: 'theme3', label: 'Тема 3'},
    {value: 'theme4', label: 'Тема 4'}
]

export const Form = () => {

    const {user, isLogged} = useSelector((state: AppStateType) => state.user)

    const [nameValue, setNameValue] = useState(user.name || '')
    const [emailValue, setEmailValue] = useState(user.email || '')
    const [messageValue, setMessageValue] = useState('')

    const [nameError, setNameError] = useState<string | null>(null)
    const [emailError, setEmailError] = useState<string | null>(null)

    const {status} = useSelector((state: AppStateType) => state.app)

    const [selectValue, setSelectValue] = useState(user.theme || options[0])

    const onChangeSelectValue = (value: OptionType) => {
        setSelectValue(value)
    }

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const reset = () => {
        setMessageValue('')
        setEmailValue('')
        setNameValue('')
        setNameError(null)
        setEmailError(null)
        setSelectValue(options[0])
        if (nameValue === '' && emailValue === '') {
            dispatch(setUser({name: '', email: '', theme: {value: '', label: ''}}))
            navigate('/')
        }
    }

    const submitForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (nameValue.trim() !== '' && emailValue.trim() !== '') {
            const user: UserType = {name: nameValue, email: emailValue, theme: selectValue}
            dispatch(setUser(user))
            navigate('/')
        } else {
            if (nameValue.trim() === '') {
                setNameError('error')
            }
            if (emailValue.trim() === '') {
                setEmailError('error')
            }
        }
    }

    const onNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (nameError) {
            setNameError(null)
        }
        setNameValue(e.target.value)
    }

    const emailHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (isEmailValid(emailValue)) {
            setEmailError(null)
            setEmailError('success')
        } else {
            setEmailError('error')
        }
        setEmailValue(e.currentTarget.value)
    }

    return (
        <div className={cl.wrapper}>
            <form className={cl.form} onSubmit={submitForm}>
                <h2>Форма для тебя</h2>

                <Input
                    addClass={cl.input}
                    value={nameValue}
                    onChangeValue={onNameHandler}
                    placeholder="Представьтесь пожалуйста"
                    id="name"
                    error={nameError}
                />

                <Input
                    addClass={cl.input}
                    value={emailValue}
                    onChangeValue={emailHandler}
                    placeholder="Введите ваш e-mail"
                    id="email"
                    error={emailError}
                />

                <Select
                    addClass={cl.select}
                    options={options}
                    value={selectValue}
                    onChange={onChangeSelectValue}
                />

                <Textarea
                    placeholder="Введите сообщение"
                    addClass={cl.textarea}
                    value={messageValue}
                    onChange={(e) => setMessageValue(e.currentTarget.value)}
                />

                <div className={cl.btns}>
                    <Button addClass={cl.greyBtn} onClick={reset} type="reset">Сбросить</Button>
                    <Button addClass={cl.sendBtn} type="submit">Отправить</Button>
                </div>
            </form>
        </div>
    )
}