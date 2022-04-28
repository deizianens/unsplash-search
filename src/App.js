import "./App.css";
import { Search, Dropdown, Image } from "./components";

function App() {
  return (
    <div className="App">
      <div className="header">
        <Search />
        <Dropdown />
      </div>
      <div className="image-container">
        <Image />
        <Image />
        <Image />
        <Image />
        <Image />
      </div>
    </div>
  );
}

export default App;
