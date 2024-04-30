const Greet = ({ name }: { name?: string }) => {
  if (name) return <h2>Hello {name}</h2>;

  return <button>Login</button>;
};

export default Greet;
