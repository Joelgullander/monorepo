import React from 'react';
import * as style from './Checkbox.style';

interface ICheckbox {
  name: string,
  label: string,
  checked: boolean,
  onClick?: any,
  onChange?: any,
}

export const Checkbox: React.FC<ICheckbox> = ({ name, label, checked, onClick, onChange }) => {
  return (
    <style.Wrapper>
      <style.Label htmlFor={name}>
        <style.Checkbox checked={checked}>
          <svg fill={checked ? "white" : "transparent"} xmlns="http://www.w3.org/2000/svg" width="10.306" height="10.306" viewBox="0 0 13.459 10.306">
            <path
              id="Icon_Path"
              data-name="Icon Path"
              d="M13.387,1.206,12.288.075A.237.237,0,0,0,12.113,0a.227.227,0,0,0-.175.075L4.313,7.756,1.538,4.981a.242.242,0,0,0-.35,0L.075,6.094a.249.249,0,0,0,0,.356l3.5,3.5a1.107,1.107,0,0,0,.731.356,1.16,1.16,0,0,0,.725-.344h.006l8.356-8.4a.267.267,0,0,0-.006-.356Z"
            />
          </svg>
        </style.Checkbox>

        <style.Input
          type="checkbox"
          id={name}
          name={name}
          checked={checked}
          onClick={onClick}
          onChange={onChange}
          required
        />

        <div dangerouslySetInnerHTML={{ __html: label }} />
      </style.Label>
    </style.Wrapper>
  );
};