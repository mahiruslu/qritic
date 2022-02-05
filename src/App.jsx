import "./App.css";
import Navbar from "./Components/Navbar";
import Explore from "./Pages/Explore.jsx";
import Comments from "./Pages/Comments.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="">
        <Navbar />
        <div className="mt-20">
          <Routes>
            <Route path="/" element={<p>Seems like empty here</p>} />
            <Route path="/users" element={<p>Users</p>} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/explore/comments/:id" element={<Comments />} />
            <Route path="/account" element={<p>Account</p>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
