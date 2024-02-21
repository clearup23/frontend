import { useState } from "react";

import AuthPage from "./authPage";
import ChatsPage from "./chatsPage";
import Home from "../pages/Home";

function App1() {
  const [user, setUser] = useState();

  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    return <Home user={user} />;
  }
}

export default App1;
