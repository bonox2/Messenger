import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';

function LoginForm() {
  const { signin, error, signup, loading } = useAuth();
  const [formType, setFormType] = useState('signin');

  if (loading) {
    return <h1>Loading...</h1>;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const email = event.target.email.value.trim();
    const password = event.target.password.value.trim();
    if (formType === 'signin') {
      signin(email, password);
    } else {
      const nickname = event.target.nickname.value.trim();
      signup({email, password, nickname});
    }
  }
  function changeFormType() {
    if (formType === 'signin') {
      setFormType('signup');
    } else {
      setFormType('signin');
    }
  }

  return (
    <>
      <form className="reg_form" onSubmit={handleSubmit}>
        <h1>{formType === 'signin' ? 'Login form' : 'Registration form'}</h1>
        {error && <h2>{error.message}</h2>}
        <input name="email" type="email" placeholder="Enter your email" />
        <input
          name="password"
          type="password"
          placeholder="Enter your password"
        />
        {formType === 'signup' && (
          <input
            name="nickname"
            type="text"
            placeholder="Enter your nickname"
          />
        )}
        <button className="actionbtn" type="submit">
          OK
        </button>
      </form>
      <button onClick={changeFormType}>
        {formType === 'signin'
          ? "Don't have an account? Register!"
          : 'Have an account? Sign in!'}
      </button>
    </>
  );
}

export default LoginForm;
