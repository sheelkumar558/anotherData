import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const User = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios.get(`https://reqres.in/api/users`).then(({ data }) => {
      setUser(data.data);
    });
  }, []);
  return (
    <div>
      {user.map((e) => {
        return <Link to={`/user/${e.id}`} style={{display:"flex",textDecoration:"none"}} >{e.id} - {e.first_name}</Link>;
      })}
    </div>
  );
};
