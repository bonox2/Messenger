import { useAuth } from '../hooks/useAuth';

function Header() {
  const { user, signout } = useAuth();
  return (
    <header className="header">
      {user && (
        <button className="actionbtn" type="submit" onClick={() => signout()}>
          Log out
        </button>
      )}
    </header>
  );
}

export default Header;