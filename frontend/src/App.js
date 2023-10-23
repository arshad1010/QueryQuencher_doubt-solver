import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Qu from './components/Qu';
import { auth } from './firebase';
import Login from './components/auth/Login';
import { login, selectUser } from "./feature/userSlice";
import { onAuthStateChanged } from 'firebase/auth';

function App() {
  const user=useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(()=>{
    onAuthStateChanged(auth,(authUser)=>{
      if(authUser){
        dispatch(login({
          userName:authUser.displayName,
          photo:authUser.photoURL,
          email:authUser.email,
          uid:authUser.uid
        }))
        console.log(authUser)
      }
    })
  }, [dispatch])
  return (
    <div className="App">
      {
        user ? <Qu /> : <Login />
      }
    </div>
  );
}

export default App;
