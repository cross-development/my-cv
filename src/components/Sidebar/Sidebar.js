//Core
import React from "react";
//Components
import Contacts from "./Contacts";
import HardSkills from "./HardSkills";
import SoftSkills from "./SoftSkills";
import ProfilePhoto from "./ProfilePhoto";
//Data
import hardSkills from "../../data/hardSkills.json";
import softSkills from "../../data/softSkills.json";
//Styles
import "../../styles/main.css";

const Sidebar = () => (
  <aside className="sidebar">
    <ProfilePhoto />

    <Contacts />

    <HardSkills hardSkills={hardSkills} />

    <SoftSkills softSkills={softSkills} />
  </aside>
);

export default Sidebar;
