import { useState } from "react";

const Signup = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <div>
      Sign Up
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            value={data.username}
            placeholder=" name"
            onChange={(e) => setData({ ...data, username: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            value={data.email}
            placeholder=" Email"
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={data.password}
            placeholder=" Password"
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
