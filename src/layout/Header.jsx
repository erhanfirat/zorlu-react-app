import { useEffect } from "react";
import { Button } from "../components/Button";
import { UserPanel } from "../components/UserPanel";
import { useInput } from "../hooks/useInput";
import { Link } from "react-router-dom";

export const Header = ({
  title,
  user,
  count,
  subscribed = false,
  moveToParent,
  theme,
  setTheme,
  logout,
}) => {
  const [searchText, searchChangeHandler] = useInput("");
  const [subscribe, subscribeChangeHandler] = useInput("");

  // const { title, user, count } = propsObjesi;
  console.log("Header props > ", { title, user, count, subscribed });

  // moveToParent("test");

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  useEffect(() => {
    console.log("searchText > ", searchText);
  }, [searchText]);

  return (
    <header className="head">
      <div>MyReact App</div>
      <nav>
        <Link to="/">Ana Sayfa</Link>
        <Link to="/products">Ürünler</Link>
        <Link to="/counter">Sayaç</Link>
        <Link to="/personel">Personel</Link>
      </nav>
      <div>
        <input type="text" value={searchText} onChange={searchChangeHandler} />
        <Button>Ara</Button>
      </div>
      <div>
        <Button onClick={toggleTheme}>
          {theme === "light" ? "Dark" : "Light"}
        </Button>
      </div>
      <UserPanel user={user} logout={logout} />
    </header>
  );
};
