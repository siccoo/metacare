import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="app">
      <Router>
        <Sidebar />
      </Router>
    </div>
  );
}

export default App;
