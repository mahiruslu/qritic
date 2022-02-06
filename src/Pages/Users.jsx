import React from "react";
import User from "../Components/User.jsx";
import axios from "axios";
import { Link } from "react-router-dom";
import Loader from "../Components/Loader.jsx";

function Users() {
  const [user, setUser] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      let shuffleUsers = res.data.sort(() => Math.random() - 0.5);
      setUser(shuffleUsers);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center">
          <Loader />
        </div>
      ) : (
        <div className="flex flex-wrap m-5 items-center justify-center">
          {user.map((item) => (
            <User key={item.id} user={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Users;
