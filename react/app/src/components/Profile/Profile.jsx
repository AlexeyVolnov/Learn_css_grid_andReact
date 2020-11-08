import React from 'react';
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts.jsx";


let Profile = ()=>{
  return (
      <article>
        <div className={s.content}>
          <div className="imageUser">изображение профиля</div>
          <div className="userInfo"><p>информация о пользователе</p></div>
          <MyPosts />
        </div>
      </article>
  )
};
export default Profile;