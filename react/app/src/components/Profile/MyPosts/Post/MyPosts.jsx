import React from 'react';
import s from "./MyPosts.module.css";


let MyPosts = ()=>{
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
export default MyPosts;