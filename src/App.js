import Banner from "./components/Banner/Banner";
import NavBar from "./components/NavBar/NavBar";
import RowPost from "./components/RowPost/RowPost";
import { originals, action } from "./urls";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={originals} title="Netflix Originals" />
      <RowPost url={action} title="Action" isSmall={true} />
    </div>
  );
}

export default App;
