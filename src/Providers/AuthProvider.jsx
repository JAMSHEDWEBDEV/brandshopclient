import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import {GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";
import {onAuthStateChanged } from "firebase/auth";


export const AuthContext = createContext(null);
 const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

//    create user 
    const createUser = (email,password) =>{
        setLoading(true);
      return  createUserWithEmailAndPassword(auth,email,password);   
    }
// signIn user 
   const signInUser = (email,password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
   }

   // singIn with google start 
   const signInWithGoogle = () =>{
    setLoading(true);
      return signInWithPopup(auth,googleProvider);
   }


// Auth Observer connect start 
     useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
                console.log('auth Observer connected',currentUser)
                setUser(currentUser);
                setLoading(false);
               });
            return ()=>{
                unSubscribe();
            }   
     },[])
// LogOut button start 
        const logOut = () =>{
            setLoading(true);
            return signOut(auth);
        }


    const authInfo = {
        user,
        createUser,
        signInUser,
        signInWithGoogle,
        logOut,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;