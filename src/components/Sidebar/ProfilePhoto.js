//Core
import React from "react";
//Assets
import profilePhoto from "../../assets/photo.png";
//Styles
import "../../styles/main.css";

const ProfilePhoto = () => (
  <img className="my-photo" src={profilePhoto} alt="My profile img" />
);

export default ProfilePhoto;
