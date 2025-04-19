import { AppBar, Toolbar, Button } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarContainer = styled.div `
    width: 100%;
    position: fixed; /* Keeps navbar fixed at the top */
    top: 0;
    left: 0;
    background: transparent; /* Makes the navbar transparent */
    padding: 15px 20px; /* Adjust padding as needed */
    z-index: 1000;
    color: white;
    text-shadow: 0 0 5px var(--ah-yellow), 0 0 10px var(--ah-pink);
    display: flex;
    justify-content: right;
`

const Navbar: React.FC = () => {
  return (
    <AppBar position="static">
        <NavbarContainer>
            <Toolbar>
                <Button style={{backgroundColor: 'transparent', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)'}} color="inherit" component={Link} to="/">Projects</Button>
                <Button style={{backgroundColor: 'transparent', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)'}} color="inherit" component={Link} to="/about">About</Button>
                <Button style={{backgroundColor: 'transparent', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)'}} color="inherit" component={Link} to="/contact">Contact</Button>
            </Toolbar>
        </NavbarContainer>
     
    </AppBar>
  );
};

export default Navbar;