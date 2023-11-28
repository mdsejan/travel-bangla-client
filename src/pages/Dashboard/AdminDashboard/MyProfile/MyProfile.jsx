import useAuth from "../../../../hooks/useAuth";

const MyProfile = () => {
  const { user } = useAuth();
  return (
    <div>
      <h2>MyProfile</h2>
      <p>
        <span>Hi, Welcome </span>
        {user?.displayName ? user.displayName : "Back"}
      </p>
    </div>
  );
};

export default MyProfile;
