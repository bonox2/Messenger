import { useState, useEffect, useContext, createContext } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../firebase';
import { useDB } from './useDB';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const authData = useProvideAuth();
  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { setDocument } = useDB();

  function signin(email, password) {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('signIn userCredential >>>', userCredential);
        setUser(userCredential.user);
        setError(false);
      })
      .catch((error) => {
        console.warn('signIn error >>>', error);
        setError({ code: error.code, message: error.message });
        setUser(false);
      })
      .finally(() => setLoading(false));
  }
  function signup({ email, password, nickname }) {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('signUp userCredential >>>', userCredential);
        const newUser = {
          nickname,
          email,
          createdAt: Date.now(),
          friends: [],
          uid: userCredential.user.uid,
        };
        setDocument('users', newUser, userCredential.user.uid);
        setUser(newUser);
        setError(false);
      })
      .catch((error) => {
        console.warn('signUp error >>>', error);
        setError({ code: error.code, message: error.message });
        setUser(false);
      })
      .finally(() => setLoading(false));
  }
  function signout() {
    setLoading(true);
    signOut(auth)
      .then(() => {
        console.log('signOut success >>>', true);
        setUser(false);
        setError(false);
      })
      .catch((error) => {
        console.warn('signOut error >>>', error);
        setError({ code: error.code, message: error.message });
      })
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (loading) {
        setLoading(false);
      }
      if (user) {
        const userData = {
          toFirestore: (user) => {
              return {
                  id: user.id,
                  name: user.name,
                  nickname: user.nickname,
                  };
          },
          fromFirestore: (snapshot, options) => {
              const data = snapshot.data(options);
              return new userData(data.id, data.name, data.nickname);
          }
      };
        const doc = document.getElementById(user);
        setUser(user);
      } else {
        console.log('AuthStateChanged >>>', false);
        setUser(false);
      }
    });
    return () => unsubscribe();
  }, []);

  return {
    user,
    error,
    loading,
    signin,
    signup,
    signout,
  };
}
