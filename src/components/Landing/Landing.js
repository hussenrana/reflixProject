import "./Landing.css";
import User from "../User/User";

const Landing = ({ users }) => {
  return (
    <div>
      <div className="text_container">Who's watching</div>
      <div className="container">
        {users.map((user) => (
          <User user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
};

export default Landing;
