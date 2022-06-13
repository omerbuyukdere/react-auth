import { createContext, useReducer } from "react";
import { auth } from "../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const initialState = {
  isAuthenticated: false,
  accessToken: "",
  email: "",
};

const JWTReducer = (state, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return {
        ...state,
        isAuthenticated: action.payload.isAuthenticated,
        email: action.payload.email,
        accessToken: action.payload.accessToken,
      };
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: action.payload.isAuthenticated,
        email: action.payload.email,
        accessToken: action.payload.accessToken,
      };

    default:
      return state;
  }
};

const AuthContext = createContext(null);

function AuthProvider({ children }) {
  let navigate = useNavigate();

  const [state, dispatch] = useReducer(JWTReducer, initialState);

  const signIn = async (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        dispatch({
          type: "SIGN_IN",
          payload: {
            isAuthenticated: true,
            email: res.user.email,
            accessToken: res.user.accessToken,
          },
        });

        navigate("/about", { replace: true });
      })
      .catch((err) => {
        alert("Giriş bilgileri yanlış.");
      });
  };
  const logOut = () => {
    dispatch({
      type: "LOGOUT",
      payload: {
        isAuthenticated: "",
        email: false,
        accessToken: "",
      },
    });
    navigate("/login", { replace: true });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        signIn,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
