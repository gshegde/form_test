import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const userId = "admin";

function UserGreeting(props) {
  const greetText = props.greetText;
  if (props.greetText) {
    return <h1>Welcome back {greetText}!</h1>;
  }
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  const userId = props.userId;

  if (isLoggedIn) {
    return <UserGreeting greetText={userId} />;
  }
  return <GuestGreeting />;
}

function App() {
  return (
    <div className="App">
      <Greeting isLoggedIn={true} userId={userId} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
