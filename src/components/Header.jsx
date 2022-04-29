import { useAuth } from '../hooks/useAuth';

function Header() {
  const { user, signout } = useAuth();
  return (
    <>
      {user && (
        <header className="header">
          <h1>{user && user.nickname}</h1>
          <button className="actionbtn" type="submit" onClick={() => signout()}>
            Log out
          </button>
        </header>
      )}
    </>
  );
}

export default Header;
