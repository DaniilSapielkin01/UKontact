import { connect } from "react-redux";

import { Navbar } from "../components/index";

const mapStateToProps = state => ({
  state: state.sideBar
});
// const mapDispatchToProps = () => ({});

export const NavbarContainer = connect(mapStateToProps, null)(Navbar);
