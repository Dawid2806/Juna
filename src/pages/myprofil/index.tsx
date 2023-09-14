import { useUserData } from "@nhost/react";
import React from "react";

const Profile = () => {
  const userData = useUserData();

  return (
    <div>
      <h1>{userData?.displayName}</h1>
      <img src={userData?.avatarUrl} alt="" />
      <small>{userData?.createdAt}</small>
      <ul>
        {userData?.roles.map((role) => {
          return <li key={role}>{role}</li>;
        })}
      </ul>
    </div>
  );
};

export default Profile;
