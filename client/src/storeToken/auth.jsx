import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios"

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");


  //function to stored the token in local storage
  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
  };

  //   this is the get the value in either true or false in the original state of token
  let isLoggedIn = !!token;

  //   to check whether is loggedIn or not
  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };


  // JWT AUTHENTICATION - TO GET THE CURRENTLY LOGGEDIN USER DATA
  const userAuthentication = async () => {
    try {
      if (token) {
        console.log(process.env.REACT_APP_BACKEND_CONNECT_API)
        const response = await axios.get(process.env.REACT_APP_BACKEND_CONNECT_API + "user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          // getting the user data 👇
          const data = await response.json();
          setUser(data.userData);
        } else {
          console.error("Error fetching user data", response);
        }
      }
      else {
        console.log("token not found")
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    userAuthentication();
  }, []);
  return (
    <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, LogoutUser, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return authContextValue;
};