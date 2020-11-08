import React from 'react';
import s from "./Profile.module.css";


let Profile = ()=>{
  return (
      <article>
        <div className={s.content}>
          <div className="imageUser">изображение профиля</div>
          <div className="userInfo"><p>информация о пользователе</p></div>
          <div className="posts">посты пользователя</div>
        </div>
      </article>
  )
};
export default Profile;