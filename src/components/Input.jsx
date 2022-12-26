import React from 'react';

export const Input = props => {
    const {
        label,
        inputId,
        inputType,
        inputName,
        inputPlaceholder,
        onClick,
        className,
        required,
        onChange,
        value
    } = props;

    return (

        <label htmlFor={inputId}>
            {label}
            <input
                className={className}

                id={inputId}
                name={inputName}
                type={inputType}

                placeholder={inputPlaceholder}

                required={required}

                value={value}
                onChange={onChange}
                onClick={onClick}
            />
        </label>

    )
}