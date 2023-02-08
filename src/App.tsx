import LeftBar from "Components/leftbar";
import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import Routes from "Routes";

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
