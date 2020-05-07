import React from 'react';
import * as style from './Input.style';

interface IInput {
  placeholder?: string,
  name: string,
  label?: string,
  required?: boolean,
  errorMessage?: string,
  error?: boolean,
  onChange?: any,
}

interface ILabel {
  name: string,
  label: string,
  required?: boolean,
}

const Label: React.FC<ILabel> = ({ name, label, required }) => (
  <style.Label htmlFor={name}>{label} {required && <style.Required>*</style.Required>}</style.Label>
);

export const Input: React.FC<IInput> = ({ placeholder, name, label, required, error, errorMessage, onChange }) => {
  // Do something with variant

  return (
    <style.Wrapper>
      {label && (
        <Label name={name} label={label} required={required} />)}

      <style.Input
        type="text"
        name={name}
        placeholder={placeholder}
        error={error}
        onChange={onChange}
      />

      {(error && errorMessage) && (
        <style.ErrorMessage>{errorMessage}</style.ErrorMessage>)}
    </style.Wrapper>
  );
};