import "./App.css";
import { Home } from "./Pages/Home/Home";

import { Topbar } from "./Components/TopBar/Topbar";
import { Single } from "./Pages/Single/Single";
import { Write } from "./Components/Write/Write";
import { Setting } from "./Pages/Settings/Setting";
import { Login } from "./Pages/Login/Login";
import { Register } from "./Pages/Registration/Register";

function App() {
  return (
    <div className="App">
      <Topbar />
      <Register />
    </div>
  );
}

export default App;
