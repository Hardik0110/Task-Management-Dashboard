import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "@/components/common/Sidebar";

function App() {
  return (
    <Router>
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 p-6">
          
        </div>
      </div>
    </Router>
  );
}

export default App;
