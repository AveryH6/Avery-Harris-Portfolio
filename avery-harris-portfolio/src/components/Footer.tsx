import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const FooterContainer = styled.div`
    width: 100%;
    bottom: 0;
    background: transparent; /* Makes the navbar transparent */
    padding: 15px 20px; /* Adjust padding as needed */
    padding-top: 5rem;
    z-index: 1000;
    color: white;
    background: linear-gradient(100deg, black 0%, var(--ah-pink) 100%);
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    z-index: 1;
`;

const AttributesCont = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  gap: 3rem;
  flex-wrap: wrap;
`;

const Attribute = styled.a`
    display: flex;
    flex-direction: column;
    font-size: 4rem;
    text-decoration: none;
    color: white;
`;

const Sitetitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: white;
`;

const Footer = () => (
	<FooterContainer>
        <Sitetitle>Portfolio &copy; 2025</Sitetitle>
		<AttributesCont>
            <Attribute>
                <Button style={{backgroundColor: 'transparent', fontSize:"1.5rem", justifyContent: "flex-start"}} color="inherit" component={Link} to="https://www.figma.com/files/project/347583227">Figma</Button>
                <Button style={{backgroundColor: 'transparent', fontSize:"1.5rem", justifyContent: "flex-start"}} color="inherit" component={Link} to="https://www.linkedin.com/in/avery-e-harris">LinkedIn</Button>
                <Button style={{backgroundColor: 'transparent', fontSize:"1.5rem", justifyContent: "flex-start"}} color="inherit" component={Link} to="https://github.com/AveryH6">GitHub</Button>
            </Attribute>
            <Attribute>
                <Button style={{backgroundColor: 'transparent', fontSize:"1.5rem", justifyContent: "flex-start"}} color="inherit" component={Link} to="/about">About</Button>
                <Button style={{backgroundColor: 'transparent', fontSize:"1.5rem", justifyContent: "flex-start"}} color="inherit" component={Link} to="/contact">Contact</Button>
            </Attribute>

		</AttributesCont>
	</FooterContainer>
);

export default Footer;
