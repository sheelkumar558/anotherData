import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  const nav = [
    { title: "Home", to: "/" },
    { title: "User", to: "/user" },
    { title: "About", to: "/about" },
    { title: "Login", to: "/login" },
    { title: "Signup", to: "/signup" },
  ];
  return (
    <div>
        
      {nav.map((e,i) => {
       
       return <Link key={i} to={e.to} style={{margin:"5px"}}>
          {e.title}
        </Link>;
      })}
    </div>
  );
};
