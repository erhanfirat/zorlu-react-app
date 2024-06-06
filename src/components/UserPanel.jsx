import { Link, useHistory } from "react-router-dom";
import { Button } from "./Button";

export const UserPanel = ({ user, logout }) => {
  return (
    <>
      {user.email ? (
        <div className="flex">
          <div className="user-info">
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
          <Button onClick={logout}>Logout</Button>
        </div>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </>
  );
};
