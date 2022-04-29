import './App.css';
import { useAuth } from './hooks/useAuth';
import LoginForm from './components/LoginForm';
import Header from './components/Header';
import Contacts from './components/Contacts-main';
import Chat from './components/Chat';
import { useEffect } from 'react';

function App() {
  const { user, loading } = useAuth();
  useEffect(() => {
    console.log('user >>>', user);
  }, [user]);

  return (
    <div className="app">
      <div className="container">
        <Header></Header>
        {user && (
          <section className="interface">
            <Contacts></Contacts>
            <Chat></Chat>
          </section>
        )}
        {!user && (
          <section className="forms">
            <LoginForm />
          </section>
        )}
      </div>
    </div>
  );
}

export default App;
