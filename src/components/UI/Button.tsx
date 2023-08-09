import React, { HTMLAttributes, ReactNode } from 'react';

export interface IButton extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: 'create' | 'confirm';
  type: 'button' | 'submit';
}

export const Button: React.FC<IButton> = ({ children, variant, ...props }) => {
  return (
    <button
      {...props}
      className={variant === 'create' || 'confirm' ? 'btn' : 'btn'}
      style={{
        backgroundColor: variant === 'create' ? '#4e43cf' : '#8964db',
        margin: '10px 0',
        padding: '10px 20px',
        border: ' 1px solid silver',
        borderRadius: '15px',
        cursor: 'pointer',
        color: '#fff',
      }}
    >
      {children}
    </button>
  );
};
