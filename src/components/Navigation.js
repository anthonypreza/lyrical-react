import React from "react";
import { Navbar, NavLink, NavbarBrand, Nav, NavItem, Button } from "reactstrap";

const Navigation = ({ logout }) => (
  <Navbar color="dark" dark expand="md">
    <NavbarBrand href={process.env.REACT_APP_PUBLIC_URL + "/"}>
      Lyrical
    </NavbarBrand>
    <Nav className="ml-auto" navbar>
      <NavItem>
        <NavLink
          href={process.env.REACT_APP_PUBLIC_URL + "/"}
          style={{ color: "#fff", paddingRight: 30 }}
        >
          Home
        </NavLink>
      </NavItem>
      <NavItem>
        <Button
          color="info"
          onClick={e => {
            logout(e);
          }}
        >
          Logout
        </Button>
      </NavItem>
    </Nav>
  </Navbar>
);

export default Navigation;
