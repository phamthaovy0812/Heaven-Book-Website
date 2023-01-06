import { createContext,useState } from "react";

const AuthContext=createContext({});

export const AuthProvider=({children}) => {
    const [auth,setAuth]=useState({
        _id: "",
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: "",
        listIdPosted: [],
        listPostReact: [ ],
        isAdmin:""
      });
    return (
        <AuthContext.Provider value ={{auth,setAuth}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContext;