import React, {ChangeEvent, FormEvent, useState} from 'react';
import cl from './Form.module.css'
import {Button} from '../../components/button/Button';
import {Textarea} from '../../components/textarea/Textarea';
import {OptionType, Select} from '../../components/select/Select';
import {useDispatch, useSelector} from 'react-redux';
import {deleteUserFromLS, setUser, UserType} from '../../store/reducers/user';
import {useNavigate} from 'react-router-dom';
import {AppDispatch, AppStateType} from '../../store/store';
import {Input} from '../../components/input/Input';
import {isEmailValid} from '../../helpers/validate/validate-email';

const options: Array<OptionType> = [
    {value: 'theme1', label: 'Тема 1'},
    {value: 'theme2', label: 'Тема 2'},
    {value: 'theme3', label: 'Тема 3'},
    {value: 'theme4', label: 'Тема 4'}
]

export const Form = () => {

    const {name, email, theme} = useSelector((state: AppStateType) => state.user.user)

    const [nameValue, setNameValue] = useState(name || '')
    const [emailValue, setEmailValue] = useState(email || '')
    const [messageValue, setMessageValue] = useState('')

    const [nameError, setNameError] = useState<string | null>(null)
    const [emailStatus, setEmailStatus] = useState<string | null>(null)

    const [selectValue, setSelectValue] = useState(theme || null)

    const onChangeSelectValue = (value: OptionType) => {
        setSelectValue(value)
    }

    const dispatch = useDispatch<AppDispatch>()

    const navigate = useNavigate()

    const reset = () => {
        setMessageValue('')
        setEmailValue('')
        setNameValue('')
        setNameError(null)
        setEmailStatus(null)
        setSelectValue(null)
        if (nameValue === '' && emailValue === '') {
            dispatch(deleteUserFromLS())
            navigate('/')
        }
    }

    const submitForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (nameValue.trim() !== '' && emailValue.trim() !== '') {
            const user: UserType = {name: nameValue, email: emailValue, theme: selectValue || options[0]}
            dispatch(setUser(user))
            navigate('/')
        } else {
            if (nameValue.trim() === '') {
                setNameError('error')
            }
            if (emailValue.trim() === '') {
                setEmailStatus('error')
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
            setEmailStatus('success')
        } else {
            setEmailStatus('error')
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
                    status={nameError}
                />

                <Input
                    addClass={cl.input}
                    value={emailValue}
                    onChangeValue={emailHandler}
                    placeholder="Введите ваш e-mail"
                    id="email"
                    status={emailStatus}
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
                    <Button addClass={cl.sendBtn} type="submit" disabled={emailStatus === 'error' || !!nameError}>Отправить</Button>
                </div>
            </form>
        </div>
    )
}