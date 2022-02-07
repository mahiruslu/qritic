import "./App.css";
import Navbar from "./components/Navbar";
import Explore from "./pages/Explore.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Users from "./pages/Users";
import Posts from "./pages/Posts";
import Home from "./pages/Home";
import Account from "./pages/Account";

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
            <Route path="/account" element={<Account />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
