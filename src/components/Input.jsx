import React from 'react';

export const Input = props => {
    const {
        label,
        inputType,
        inputName,
        inputPlaceholder,
        value,
        setValue,
    } = props;

    return (

        <label>
            {label}
            <input
                type={inputType}
                name={inputName}
                placeholder={inputPlaceholder}

                value={value}
                onChange={event => setValue(event.target.value)}
            />
        </label>

    )
}