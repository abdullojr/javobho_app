import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import AppLayout from "./Layouts/App";
import Routes from "Routes";

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
