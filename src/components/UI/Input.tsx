import React, { HTMLAttributes } from 'react';

export interface IInput extends HTMLAttributes<HTMLInputElement> {
  variant: 'input' | 'date';
  type: 'date' | 'text';
}

export const Input: React.FC<IInput> = ({ variant, ...props }) => {
  return (
    <input
      {...props}
      style={{
        borderColor: variant === 'input' ? '#60a5fa' : '#8964db',
        margin: '10px 0',
        padding: '10px 20px',
        borderWidth: '1px',
        borderRadius: '15px',
      }}
    />
  );
};
