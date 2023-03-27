import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ButtonGroup from '@mui/material/ButtonGroup';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useLocation } from 'react-router-dom';
import { FooterButton } from "../../styles/Footer"

type FooterProps = {
}

export const Footer = (props: FooterProps) => {
    const { } = props;
    const location = useLocation();
    const [onContact, setOnContact] = React.useState(false)
    const [display, setDisplay] = React.useState(false)

    React.useEffect(() => {
        if (location.pathname === "/contact") {
            setOnContact(true)
        } else {
            setOnContact(false)
        }
    }, [location]);
    return (
        <Box
            onMouseEnter={() => setDisplay(true)}
            onMouseLeave={() => setDisplay(false)}
            sx={{
                width: "100%",
                height: "auto",
                backgroundColor: "brown",
                paddingTop: "1rem",
                paddingBottom: "1rem",
                position: 'fixed',
                bottom: 0,
                zIndex: 2,
            }}

        >
            <Container >
                <ButtonGroup sx={{
                    transition: "all 1s ease-out"
                }}
                    variant="text"
                    aria-label="text button group"
                    size={"large"}
                >
                    <FooterButton
                        onPage={onContact}
                        hoverColor={"#1CC838"}
                    ><LocalPhoneIcon
                        /></FooterButton>
                    <FooterButton
                        hoverColor={"#C13584"}
                        onPage={onContact}
                    ><InstagramIcon
                        /></FooterButton>
                    <FooterButton
                        hoverColor={"#0077B5"}
                        onPage={onContact}
                    ><FacebookIcon
                        /></FooterButton>

                    <FooterButton
                        onPage={onContact}
                        hoverColor={"#0077B5"}
                    ><TwitterIcon
                        /></FooterButton>
                </ButtonGroup>


                <Grid item xs={12} >
                    <p style={{
                        overflow: "hidden",
                        maxHeight: display ? "100px" : "0px",
                        transition: "all 3s ease-out"
                    }}> &copy; Copyright 2023 Lyndbergh George Simelus | Github | Site Code</p>
                </Grid>


            </Container>
        </Box>
    );
};