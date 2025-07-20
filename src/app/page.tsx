import { getSession } from "@/actions";
import { getStoredUsername } from "@/app/lib/usernameStore";

const Homepage = async () => {
  const session = await getSession();
  const storedUsername = await getStoredUsername();
  const displayUsername = session.username || storedUsername;
  return (
    <div className="home">
      <h1>Welcome to the homepage</h1>
      <p>This page is visible to everyone!</p>
      <br />
      <p>
        Username: <span style={{ color: "#ec683b" }}>{displayUsername}</span>
      </p>
    </div>
  );
};

export default Homepage;
