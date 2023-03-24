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
    useLocation,
} from "react-router-dom";

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
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';

import HomeIcon from '@mui/icons-material/Home';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ExploreIcon from '@mui/icons-material/Explore';
import ContactsIcon from '@mui/icons-material/Contacts';
import HelpIcon from '@mui/icons-material/Help';





const drawerWidth = 240;



const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));


const navPages: any[][] = [["Home", "/",  <HomeIcon/>], ["Shop", "/shop", <ShoppingBasketIcon/>], ["FAQ", "/faq", <HelpIcon/>], ["Explore", "/explore",  <ExploreIcon/>], ["Contact", "/contact", <ContactsIcon/>]]

type NavPagesProps = {
    open: boolean,
    setOpen: Function
}


export const NavPages = (props: NavPagesProps) => {
    let { open, setOpen } = props
    const location = useLocation();

    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
            variant="persistent"
            anchor="left"
            open={open}

        >
            <DrawerHeader>
                <Typography
                    component="h1"
                    variant="h6"
                    sx={{ flexGrow: 1 }}
                >
                    All Tools
                </Typography>
            </DrawerHeader>
            <Divider />
            <List component="nav" subheader={<li />}>
                {navPages.map(function (pageInfo: string[]) {

                    return (
                        <Link to={pageInfo[1]}>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {pageInfo[2]}
                                    </ListItemIcon>
                                    <ListItemText primary={pageInfo[0]} />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                    )
                })}

            </List>
        </Drawer>
    );
}
