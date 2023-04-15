import "./User.css";
import { Link } from "react-router-dom";

const User = ({ user }) => {
  return (
    <Link to={`/${user.id}/catalog`} className="user" style={{ backgroundColor: user.color }}>
        <h2>{user.name}</h2>
    </Link>
  );
};

export default User;
