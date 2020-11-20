import React from 'react';
import s from './App.module.css';
import "./styleReset/style_reset.css";
import Header from "./header/headerTop/header";
import Menu from "./menu/menu";

function App() {
  return (
      <div className={s.wrapperAll}>
        <div className={s.wrapperBody}>
          <div className={s.wrapperHeader}>
            <Header/>
          </div>
          <div className={s.wrapperMenu}><Menu /></div>
          <div className={s.wrapperContent}>contentddfdfsd</div>
          <div className={s.wrapperFooter}>footer</div>

        </div>
      </div>


  );
}

export default App;
