import { classNames } from 'shared/lib/classNames/classNames';
import React, {
    InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps{
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    autofocus?: boolean;
}

export const Input = memo((props : InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autofocus,
        ...otherProps
    } = props;

    const [isFocused, setIsFocused] = useState(false);
    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            ref.current.focus();
        }
    }, [autofocus]);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    const onBlur = () => {
        setIsFocused(false);
    };

    return (
        <div className={classNames(cls.InputWrapper, {}, [isFocused || value ? cls.activeInput : '', className])}>
            <input
                ref={ref}
                className={classNames(cls.Input, {}, [])}
                type={type}
                value={value}
                onFocus={onFocus}
                onBlur={onBlur}
                onChange={onChangeHandler}
                {...otherProps}
            />
            {placeholder
                && (
                    <div
                        className={classNames(cls.placeholder, { }, [])}
                    >
                        {placeholder}
                    </div>
                )}
        </div>
    );
});
