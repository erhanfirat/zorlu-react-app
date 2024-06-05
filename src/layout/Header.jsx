import { useEffect } from "react";
import { Button } from "../components/Button";
import { UserPanel } from "../components/UserPanel";
import { useInput } from "../hooks/useInput";

export const Header = ({
  title,
  user,
  count,
  subscribed = false,
  moveToParent,
  theme,
  setTheme,
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
        <a href="#">Ana Sayfa</a>
        <a href="#">Ürünler</a>
        <a href="#">Login</a>
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
      <UserPanel user={user} />
    </header>
  );
};
