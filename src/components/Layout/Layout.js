//Core
import React from "react";
import PropTypes from "prop-types";
//Styles
import "../../styles/main.css";

const Layout = ({ children }) => <main className="wrapper">{children}</main>;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
