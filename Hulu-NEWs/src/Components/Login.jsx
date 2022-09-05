import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";
import {useNavigate} from "react-router-dom"
export const Login = () => {
  const { handleAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div>
      <input type="text" placeholder="enter username" />
      <input type="password" placeholder="password" />
      <button
        onClick={() => {
          handleAuth(true);
          navigate(-2);
        }}
      >
        Submit
      </button>
    </div>
  );
};
