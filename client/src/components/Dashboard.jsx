import { useContext } from "react";
import { UserContext } from "../../context/userContext";

const Dashboard = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      Dashboard
      {!!user && <h2>{user.username}!</h2>}
    </div>
  );
};

export default Dashboard;
