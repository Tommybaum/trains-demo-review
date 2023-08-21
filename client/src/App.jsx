import { useState } from "react";
import Trains from "./components/Trains";
import AuthForm from "./components/AuthForm";
import Register from "./components/Register";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
function App() {
  const [token, setToken] = useState(null);

  return (
    <>
 
      {token ? <button onClick={() => setToken(false)}>Sign Out</button> : ""}
      {/* //if there is a token, display a working sign out button */}

      {!token && (
              <div className="navbar">
              <Link to="/register">Register a User! </Link>
              <Link to="/signIn">Sign in! </Link>
              <Link to="/">Home</Link>
      
            </div>

      )}


      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signIn/*" element={token ? <Trains token={token} /> : <AuthForm setToken={setToken} />}>
          {/* //if there is a token, display the trains form, if not, display auth component */}
        </Route>
        <Route path="/register" element={token ? <Trains token={token} /> : <Register setToken={setToken} />}></Route>
      </Routes>


    </>
  );
}

export default App;
