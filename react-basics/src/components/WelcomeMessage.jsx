function WelcomeMessage({ isLoggedIn, userName }) {
  //   console.log(isLoggedIn);
  //   console.log(userName);

  return (
    <div>
      {isLoggedIn ? <h2>Hello, {userName} </h2> : <h2>Welcome, guest</h2>}
    </div>
  );
}

export default WelcomeMessage;
