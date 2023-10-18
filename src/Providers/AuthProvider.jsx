import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {onAuthStateChanged } from "firebase/auth";


export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState([]);

//    create user 
    const createUser = (email,password) =>{
      return  createUserWithEmailAndPassword(auth,email,password);   
    }
// signIn user 
   const signInUser = (email,password) =>{
    return signInWithEmailAndPassword(auth,email,password);
   }
// Auth Observer connect start 
     useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
                console.log('auth Observer connected',currentUser)
                setUser(currentUser);
               });
            return ()=>{
                unSubscribe();
            }   
     },[])
// LogOut button start 
        const logOut = () =>{
            return signOut(auth);
        }


    const authInfo = {
        user,
        createUser,
        signInUser,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;