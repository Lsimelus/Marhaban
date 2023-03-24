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
import { useEffect, useState } from "react";
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
import { Footer } from '../Footer';
//import { CartContext } from '../../context';
import { CartContext } from '../../context';
import { ButtonComponent } from '../Button';
import {NavPages} from "../NavPages"


const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
    open?: boolean;
  }>(({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-240px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }));


interface DashboardProps {
}


export const Dashboard = (props: DashboardProps) => {
    const [prefersDarkMode, setPrefersDarkMode] = React.useState(useMediaQuery('(prefers-color-scheme: dark)'));
    const [cart, setCart] = React.useState({ "1": 0, "2": 0, "3": 0 });
    const [open, setOpen] = React.useState(false);


    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode: prefersDarkMode ? 'dark' : 'light',
                    divider: "3f51b5"
                },
                components: {
                    MuiButton: {
                        defaultProps: {
                            size: "large",
                            variant: "contained",
                        }
                    },
                    MuiGrid: {
                        defaultProps: {
                            direction: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            maxWidth: "xl"

                        }

                    }
                }


            }
            ),
        [prefersDarkMode],
    );


    return (
        <ThemeProvider theme={theme}>
            <CartContext.Provider value={[cart, setCart]}>

                <HashRouter basename="/">
                    <Box sx={{ display: 'flex', overflowX: "hidden" }}>
                        <Navbar 
                        darkModeFunction={setPrefersDarkMode}
                        darkMode={prefersDarkMode}
                        open={open}
                        setOpen={setOpen}
                        />
                        <NavPages open={open} setOpen={setOpen}/>
                        <Main open={open} onClick={() => setOpen(false)}>

        
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/shop" element={<Shop />} />
                            <Route path="/faq" element={<Resources />} />
                            <Route path="/explore" element={<Explore />} />
                            <Route path="/contact" element={<Contact />} />
                        </Routes>
                        
                        </Main>
                        <Footer />
                    </Box>
                </HashRouter>

            </CartContext.Provider>
        </ThemeProvider>
    );
}

//<div style={{ overflowX: "hidden", overflowY: "scroll", backgroundColor: "#EBEEEE", minHeight: "100vh" }}>


