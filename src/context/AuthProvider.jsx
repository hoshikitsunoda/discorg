import { createContext, useEffect, useState } from 'react'
import { auth } from '../services/firebase'

export const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [userState, setUserState] = useState(null)

  const signIn = (username, password) => {
    return auth.signInWithEmailAndPassword(username, password)
  }

  const signUp = (username, password) => {
    return auth.createUserWithEmailAndPassword(username, password)
  }

  const signOut = () => auth.signOut()

  useEffect(() => {
    return auth.onAuthStateChanged((userAuth) => {
      console.log(userAuth)
      setUserState(userAuth)
    })
  }, [])

  return (
    <AuthContext.Provider
      value={{
        signIn: signIn,
        signUp: signUp,
        signOut: signOut,
        userState: userState,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
