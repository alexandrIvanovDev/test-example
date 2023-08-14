import React, {FC, useState} from 'react';
import cl from './Select.module.css'
import classNames from 'classnames';

export type OptionType = {
    label: string
    value: any
}

type PropsType = {
    addClass?: string
    options: Array<OptionType>
    value: any
    onChange: (value: OptionType) => void
}

export const Select: FC<PropsType> = ({addClass, options, value, onChange}) => {

    const [isOpen, setIsOpen] = useState(false)
    const [highlightedIndex, setHighlightedIndex] = useState(0)
    const [isOptionChosen, setIsOptionChosen] = useState(false)

    const toggle = () => {
        setIsOpen(prevState => !prevState)
    }

    const isOptionSelected = (option: OptionType) => {
        return value === option
    }

    return (
        <div className={classNames(cl.container, {[cl.show]: isOpen}, [addClass])} onClick={toggle}
             onBlur={() => setIsOpen(false)} tabIndex={0}>
            <span className={cl.value}>{value?.label || null}</span>
            <span className={classNames(cl.label, {[cl.show]: isOpen || isOptionChosen || value})}>Тема сообщения</span>
            <div className={classNames(cl.arrow, {[cl.show]: isOpen})}></div>
            <ul className={classNames(cl.options, {[cl.show]: isOpen})}>
                {options.map((option, index) => {

                    const changeOption = (e: React.MouseEvent<HTMLLIElement>) => {
                        e.stopPropagation()
                        onChange(option)
                        setIsOpen(false)
                        setIsOptionChosen(true)
                    }

                    return <li
                        key={option.value}
                        className={classNames(cl.option, {
                            [cl.selected]: isOptionSelected(option),
                            [cl.highlighted]: index === highlightedIndex
                        })}
                        onClick={changeOption}
                        onMouseEnter={() => setHighlightedIndex(index)}
                    >
                        {option.label}
                    </li>
                })}
            </ul>
        </div>
    )
};