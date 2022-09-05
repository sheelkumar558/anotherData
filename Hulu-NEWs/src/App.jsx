import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { About } from "./Components/About";
import { Home } from "./Components/Home";
import { Login } from "./Components/Login";
import { Nav } from "./Components/Nav";
import { PrivateComponents } from "./Components/PrivateComponents";
import { Signup } from "./Components/Signup";
import { User } from "./Components/User";
import { UserDetails } from "./Components/UserDetails";

function App() {
  return (
    <div className="app">
      <Nav />
      <Routes>
        <Route
          path="/user/:id"
          element={
            <PrivateComponents>
              <UserDetails />
            </PrivateComponents>
          }
        />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
