//Core
import React from "react";
//Components
import Layout from "./Layout/Layout";
import Sidebar from "./Sidebar/Sidebar";
import AboutMe from "./AboutMe/AboutMe";

const App = () => (
  <Layout>
    <Sidebar />
    <AboutMe />
  </Layout>
);

export default App;
