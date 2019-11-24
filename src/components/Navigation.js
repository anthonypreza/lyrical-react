import React from 'react';
import { Navbar, NavLink, NavbarBrand, Nav, NavItem, Button } from 'reactstrap';

const Navigation = ({ logout }) => (
	<Navbar color="dark" dark expand="md">
		<NavbarBrand href="/">Lyrical</NavbarBrand>
		<Nav className="ml-auto" navbar>
			<NavItem>
				<NavLink href="/" style={{ color: '#fff', paddingRight: 30 }}>
					Home
				</NavLink>
			</NavItem>
			<NavItem>
				<Button
					color="info"
					onClick={(e) => {
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
