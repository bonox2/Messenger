import './App.css';
import { useAuth } from './hooks/useAuth';
import LoginForm from './components/LoginForm';
import Header from './components/Header';
import Contacts from './components/Contacts';
import Profile from './components/Profile';
import ImageProfile from './components/Image';

function App() {
  const { user, loading } = useAuth();

  
  return (
    <div className="app">
      <div className="container">
        <Header></Header>
        {user && 
        <section className='interface'>
          <ImageProfile></ImageProfile>
        </section>
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
