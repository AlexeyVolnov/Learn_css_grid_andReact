import './App.css';
import Header from "./components/header/header";
import Profile from "./components/Profile/Profile";
import Menu from "./components/menu/menu";

function App() {
  return (
      <div className="wrapper-all grid">
        <Header />
        <Profile />
        <Menu />
      </div>
  );
}

export default App;
