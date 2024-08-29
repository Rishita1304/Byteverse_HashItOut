import { useContext } from "react";
import UserProfile from "../../components/userProfile/UserProfile";
import { AuthContext } from "../../context/AuthContext";

const Profile = () => {
  const {user} = useContext(AuthContext)
  return (
    <div>
      <UserProfile email={user.email} />
    </div>
  );
}

export default Profile;