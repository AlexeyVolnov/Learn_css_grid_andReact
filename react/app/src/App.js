import './App.css';
import Header from "./components/header";
import Article from "./components/article";
import Menu from "./components/menu";

function App() {
  return (
      <div className="wrapper-all grid">
        <Header />
        <Article />
        <Menu />
        <div>эт я на работе</div>
        <div>sdc</div>
      </div>
  );
}

export default App;
