import { BrowserRouter as Router } from "react-router-dom";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="app">
      <Router>
        <Sidebar />
        {/* <Topbar /> */}
      </Router>
    </div>
  );
}

export default App;
