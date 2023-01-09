import React from 'react';
import style from './Container.module.css';

export default function Container({ title, children }) {
  return (
    <div className={style.section}>
      <h2>{title}</h2>
      {children}
    </div>
  );
}
