import React from 'react';
import s from './styleMenu.module.css';

const Menu = () => {
  return (
      <div className={s.menuWrapper}>
        <div className={s.myPage}><a className={s.menu__item} href="#0">Моя Страница</a></div>
        <div className={s.news}><span></span><a className={s.menu__item} href="#0">Новости</a></div>
        <div className={s.messages}><span></span><a className={s.menu__item} href="#0">Сообщения</a></div>
        <div className={s.friend}><span></span><a className={s.menu__item} href="#0">Друзья</a></div>
</div>

)
}

export default Menu;