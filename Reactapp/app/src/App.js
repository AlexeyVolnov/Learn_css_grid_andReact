import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div className="wrapper-all grid" style="background-image: url(images/les_vid_sverhu_ten_191553_1920x1080.jpg)">

        <header>
          <div>Search</div>
        </header>
        <article>
          <div className="content">
            <div>Здесь контент <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolor eum itaque non
              officia placeat quaerat. Eaque fugit magni ullam. Asperiores dolorum ducimus expedita quis totam! Delectus
              quam recusandae voluptas.</div>
            </div>
          </div>
        </article>
        <div className="menu-all">
          <div className="menu">Мой профиль</div>
          <div className="menu">Новости</div>
          <div className="menu">Друзья</div>
          <div className="menu">Сообщения</div>
          <div className="menu">Музыка</div>
          <div className="menu">Настройки</div>
        </div>
      </div>
  );
}

export default App;
