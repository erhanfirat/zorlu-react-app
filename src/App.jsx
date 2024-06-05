// Outsource
import { useState } from "react";

// Internal
import { Header } from "./layout/Header";
import { Footer } from "./layout/Footer";
import { PageBody } from "./layout/PageBody";

// Stylings
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({ name: "ali", email: "ali@a.com" });

  const moveToParent = (val) => {
    console.warn("Child componentten gelen value: ", val);
  };

  const login = (res) => setUser(res.data);

  return (
    <>
      <Header
        user={user}
        title="Merhaba ReactJS"
        count={13}
        moveToParent={moveToParent}
      />
      <PageBody />
      <Footer />
    </>
  );
}

export default App;
