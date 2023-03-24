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
import { useLocation } from 'react-router-dom';
import { Stack, Tooltip, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import { useContext } from 'react';
import { CartDrawer } from '../CartDrawer';
import Badge from '@mui/material/Badge';
import { CartContext } from '../../context';


type NavbarProps = {
    darkModeFunction: Function,
    darkMode: boolean
}
const navPages: string[][] = [["Home", "/"], ["Shop", "/shop"], ["Resources", "/resouces"], ["Explore", "/explore"], ["Contact", "/contact"]]


export const Navbar = (props: NavbarProps) => {
    const { darkModeFunction, darkMode } = props;
    const [cartOpen, setCartOpen] = React.useState(false)
    const location = useLocation();

    const getCart = (cart: any) => {
        const cartList: number[] = Object.values(cart)

        var total = 0
        for (var i in Object.values(cart)) {
            total += cartList[i];
        }
        return (
            <Badge badgeContent={total} color="error" >
                <ShoppingCartIcon />
            </Badge>
        )

    }

    return (
        <>
            <AppBar position="static" >
                <Toolbar>
                    <Tooltip title="~~~">


                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Marhaban
                        </Typography>

                    </Tooltip>

                    <nav style={{ flexGrow: 1 }}>
                        <ul style={{ display: "flex", listStyle: "none" }}>
                            {navPages.map(function (pageInfo: string[]) {

                                return (<li >
                                    <Typography variant="h6" component="div" m={1} color={location.pathname == pageInfo[1] ? "purple" : ""}>
                                        <Link to={pageInfo[1]}><b> {pageInfo[0]}</b></Link>
                                    </Typography>
                                </li>)
                            })}
                        </ul>
                    </nav>

                    <Drawer
                        open={cartOpen}
                        anchor="right"
                        onClose={() => setCartOpen(false)}
                        PaperProps={{
                            sx: {
                                width: 450
                            }
                        }}
                    >
                        <Box style={{ textAlign: "right" }}>
                            <IconButton
                            sx={{
                                transition: "all .7s ease-in-out",
                                color: "red",
                                ':hover': {
                                    transform: "rotate(360deg)"
                                },

                            }}
                            onClick={() => { setCartOpen(false) }}
                            >
                                <CloseIcon
                                    />
                            </IconButton>
                        </Box>

                        <CartDrawer />

                    </Drawer>


                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={() => setCartOpen(true)}
                    >
                        <CartContext.Consumer>
                            {(info) => (
                                getCart(info[0])

                            )}
                        </CartContext.Consumer>


                    </IconButton>

                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={() => darkModeFunction(!darkMode)}

                    >
                        {darkMode ?
                            <Tooltip title="Change to dark mode">
                                <LightModeIcon></LightModeIcon>
                            </Tooltip>
                            :
                            <Tooltip title="Change to light mode">
                                <DarkModeIcon></DarkModeIcon>
                            </Tooltip>
                        }
                    </IconButton>
                </Toolbar>
            </AppBar>
        </>
    );
};