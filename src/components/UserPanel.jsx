export const UserPanel = ({ user }) => {
  return (
    <>
      {user ? (
        <div className="user-info">
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      ) : (
        <a href="">Login</a>
      )}
    </>
  );
};
