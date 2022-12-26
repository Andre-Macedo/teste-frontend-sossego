import React from 'react';

export const Input = props => {
    const {
        label,
        inputId,
        inputType,
        inputName,
        inputPlaceholder,
        className,
        isRequired,
        value,
        setValue,
    } = props;

    return (

        <label>
            {label}
            <input
                className={className}
                id={inputId}
                type={inputType}
                name={inputName}
                placeholder={inputPlaceholder}

                required={isRequired}

                value={value}
                onChange={event => setValue(event.target.value)}
            />
        </label>

    )
}