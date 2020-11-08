import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post.jsx";



let MyPosts = ()=>{
  return (
      <div className={s.userPosts}>
        Посты пользователя

        <Post />

      </div>

  )
};
export default MyPosts;