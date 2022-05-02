import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { auth } from "../firebase-config";
import Loading from "../Components/HomeComponents/Loading";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
    const [user, setUser] = useState("")
    const [pending, setPending] = useState(true)

    function signUp(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    function logout() {
        return signOut(auth)
    }

    useEffect(() => {
        auth.onAuthStateChanged((currentUser) => {
            setUser(currentUser)
            setPending(false)
        })
    }, [])

    if (pending) {
        return <Loading type="spinningBubbles" color="#ffffff" />
    }

    return <userAuthContext.Provider value={{ user, signUp, login, logout }}>{children}</userAuthContext.Provider>
}

export function useUserAuth() {
    return useContext(userAuthContext)
}
