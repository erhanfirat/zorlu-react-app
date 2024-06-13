export const Button = ({ children, className, ...restProps }) => {
  console.log("******* restProps ", restProps);
  return (
    <button className={`btn ${className}`} {...restProps}>
      {children}
    </button>
  );
};
