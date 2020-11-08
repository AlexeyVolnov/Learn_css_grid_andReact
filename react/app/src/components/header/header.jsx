import React from 'react';
import s from "./header.module.css";




let Header = ()=>{
  return (
      <header>
        <div>Search</div>
        <div className={s.item}>item</div>
      </header>
  )
};
export default Header;