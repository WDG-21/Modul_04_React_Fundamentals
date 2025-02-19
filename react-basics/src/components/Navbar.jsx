import WelcomeMessage from './WelcomeMessage';

function Navbar() {
  const isLoggedIn = true;
  const userName = 'Yannis';

  return (
    <>
      <nav>
        <h2>NAVBAR.JSX</h2>
        <WelcomeMessage isLoggedIn={isLoggedIn} userName={userName} />
      </nav>
    </>
  );
}

export default Navbar;
