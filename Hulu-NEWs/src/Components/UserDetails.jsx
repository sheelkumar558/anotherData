import React, { useState,useEffect, useContext } from "react";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "./Context/AuthContext";
export const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
//   const {isAuth} = useContext(AuthContext);

  useEffect(() => {
    axios.get(`https://reqres.in/api/users/${id}`).then(({ data }) => {
      setUser(data.data);
    });
  }, []);
//   if(!isAuth){
//     return <Navigate to={"/login"} />
//   }
  return (
    <div>
      <img src={user.avatar} alt="" />
      <div>
        <p>{user.first_name} {user.last_name}</p>
      </div>
    </div>
  );
};
