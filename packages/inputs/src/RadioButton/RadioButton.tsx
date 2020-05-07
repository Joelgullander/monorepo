import React from 'react';

import * as style from './RadioButton.style';

interface IRadioButton {
    id: string,
    onChange?: any,
    value: string,
    checked: boolean,
    label: string
}

export const RadioButton: React.FC<IRadioButton> = ({ id, onChange, value, checked, label }) => {
    return (
        <style.RadioButton>
            <input id={id} onChange={onChange} value={value} type="radio" checked={checked} />
            <style.Label htmlFor={id}>{label}</style.Label>
        </style.RadioButton>
    );
};