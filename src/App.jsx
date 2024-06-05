// Outsource
import { useEffect, useState } from "react";

// Internal
import { Header } from "./layout/Header";
import { Footer } from "./layout/Footer";
import { PageBody } from "./layout/PageBody";

// Stylings
import "./App.css";
import { useLocalStorage } from "./hooks/useLocalStorage";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({ name: "Anonim", email: null });
  const [theme, setTheme] = useLocalStorage("theme", "light");

  const moveToParent = (val) => {
    console.warn("Child componentten gelen value: ", val);
  };

  const login = (res) => setUser(res.data);

  useEffect(() => {
    // uygulama başarıyla yüklendi!
    // todo: kimlik doğrulama
    const token = localStorage.getItem("token");

    if (token) {
      axios
        .get("https://workintech-fe-ecommerce.onrender.com/verify", {
          headers: {
            Authorization: token,
          },
        })
        .then((res) => {
          console.log("**** auto logged in **** ", res.data);
          setUser(res.data);
          localStorage.setItem("token", res.data.token);
        });
    }
  }, []);

  return (
    <div className={theme}>
      <Header
        user={user}
        title="Merhaba ReactJS"
        count={13}
        moveToParent={moveToParent}
        theme={theme}
        setTheme={setTheme}
      />
      <PageBody />
      <Footer />
    </div>
  );
}

export default App;
