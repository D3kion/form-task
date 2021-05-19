import { HTMLAttributes } from 'react';

export interface ButtonPropsType extends HTMLAttributes<HTMLButtonElement> {
  tid: string;
  tvalue?: string;
}
