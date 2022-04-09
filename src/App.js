import './App.css';
import { useAuth } from './hooks/useAuth';
import LoginForm from './components/LoginForm';
import Header from './components/Header';
import Contacts from './components/Contacts-main';
import Chat from './components/Chat';


function App() {
  const { user, loading } = useAuth();

  
  return (
    <div className="app">
      <div className="container">
        <Header></Header>
        {user && 
        <container>
          <section className='interface'>
            <Contacts></Contacts>
            <Chat></Chat>
          </section>
        </container>
        }
        



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
