import "./App.css";
import Navbar from "./Components/Navbar";
import Explore from "./Pages/Explore.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Users from "./Pages/Users";
import Posts from "./Pages/Posts";
import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      <div className="">
        <Navbar />
        <div className="mt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/user/posts/:id" element={<Posts />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/account" element={<p>Account</p>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
