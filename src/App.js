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
        <div className="image-column">
          <Image />
          <Image />
          <Image />
        </div>
        <div className="image-column">
          <Image />
          <Image />
          <Image />
        </div>
        <div className="image-column">
          <Image />
          <Image />
        </div>
      </div>
    </div>
  );
}

export default App;
