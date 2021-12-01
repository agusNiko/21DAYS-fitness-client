import "./App.css";
import MainView from "./components/main-view/Main-view";

function App() {
  return (
    <div className="App">
      <div className="Case">
        <div className="Case-top "></div>
        <div className="Case-middle">
          <div className="Case-sides"></div>
          <MainView />
          <div className="Case-sides"></div>
        </div>
        <div className="Case-bottom">
          <div className="Case-bottom_center"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
