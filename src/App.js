import './App.css';
import { useAuth } from './hooks/useAuth';
import LoginForm from './components/LoginForm';
import Header from './components/Header';

function App() {
  const { user, loading } = useAuth();

  
  return (
    <div className="app">
      <div className="container">
        <Header></Header>
        {user && <h1>{user.uid}</h1>}
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
