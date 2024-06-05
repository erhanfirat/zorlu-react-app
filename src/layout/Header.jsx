import { UserPanel } from "../components/UserPanel";

export const Header = ({
  title,
  user,
  count,
  subscribed = false,
  moveToParent,
}) => {
  // const { title, user, count } = propsObjesi;
  console.log("Header props > ", { title, user, count, subscribed });

  // moveToParent("test");

  return (
    <header className="head">
      <div>MyReact App</div>
      <nav>
        <a href="#">Ana Sayfa</a>
        <a href="#">Ürünler</a>
        <a href="#">Login</a>
      </nav>
      <UserPanel user={user} />
    </header>
  );
};
