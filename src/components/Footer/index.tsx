import React, { Component } from 'react';
import { styled, useTheme, createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Menu from '@mui/material/Menu';
import {
    BrowserRouter,
    Route,
    Link,
    Routes,
    HashRouter,
} from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import LanguageIcon from '@mui/icons-material/Language';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from "@mui/icons-material/Close";
import ClickAwayListener from '@mui/base/ClickAwayListener';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import useMediaQuery from '@mui/material/useMediaQuery';
import test from "../assets/test.jpg"
import { Stack, Tooltip, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import { Navbar } from '../Navbar';
import { Home } from "../Home"
import { Shop } from "../Shop"
import { Resources } from '../Resources';
import { Explore } from '../Explore';
import { Contact } from '../Contact';
import { Item } from "../../styles/Item";
import EmailIcon from '@mui/icons-material/Email';
import PeopleIcon from '@mui/icons-material/People';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
//import { TranslateButton} from "../../styles/commonUIComponents/ButtonStyled"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
//import { handleClickScroll } from "../../utils/reusableFunctions"
//import {links} from "../../data/data"
//import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import { ButtonComponent } from "../Button"
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

    React.useEffect(() => {
        if (location.pathname === "/contact") {
            setOnContact(true)
        } else {
            setOnContact(false)
        }
    }, [location]);
    return (
        <Box
            sx={{
                width: "100%",
                height: "auto",
                backgroundColor: "secondary.main",
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
                <Grid item xs={12}>
                    <p> &copy; Copyright 2023 Lyndbergh George Simelus | Github | Site Code</p>

                    {/*<Typography color="textSecondary" variant="subtitle1">
                        {`${new Date().getFullYear()} |  &copy; Copyright 2023 Lyndbergh George Simelus | Material UI | React Router | Github | Site Code`}
                </Typography>*/}
                </Grid>

            </Container>
        </Box>
    );
};