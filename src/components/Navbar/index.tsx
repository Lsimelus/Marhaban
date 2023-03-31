import React, { Component } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from "@mui/icons-material/Close";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useLocation } from 'react-router-dom';
import { Tooltip, Typography } from "@mui/material";
import { CartDrawer } from '../CartDrawer';
import Badge from '@mui/material/Badge';
import { CartContext } from '../../context';
import { getCartSize } from "../../utils/cartUtil"
import AddIcon from '@mui/icons-material/Add';


interface AppBarProps extends MuiAppBarProps {
    open?: boolean,
    boxShadow?: boolean
}
const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open , boxShadow}) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - 240px)`,
        marginLeft: `240px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
    background: "beige",
    boxShadow: boxShadow ? "none": "auto"
}));

type NavbarProps = {
    darkModeFunction: Function,
    darkMode: boolean,
    open: boolean,
    setOpen: Function,
    alertCallback: Function
}

export const Navbar = (props: NavbarProps) => {
    const { darkModeFunction, darkMode, open, setOpen , alertCallback} = props;
    const location = useLocation();
    const [cartOpen, setCartOpen] = React.useState(false)

    const getCart = (cart: any) => {
        var cartTotal = getCartSize(cart)
        return (
            <Badge badgeContent={cartTotal} color="secondary" >
                <ShoppingCartIcon />
            </Badge>
        )
    }

    return (
        <AppBar position="fixed" open={open} boxShadow={location.pathname === "/"}>
            <Toolbar>

                <IconButton
                    onClick={() => setOpen(!open)}
                    edge="start"
                    sx={{ mr: 2, color: "brown"}}
                >
                    {open ? <ChevronLeftIcon /> : <AddIcon/>}
                </IconButton>


                {location.pathname !== "/" ?
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "brown" }}>
                        Marahaban
                    </Typography>
                    :
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "brown" }}>
                    </Typography>
                }

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
                    <CartDrawer alertCallback={alertCallback}/>
                </Drawer>

                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2, color: "brown" }}
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
                    sx={{ mr: 2 , color: "brown"}}
                    onClick={() => darkModeFunction(!darkMode)}


                >
                    {darkMode ?
                        <Tooltip title="Change to light mode">
                            <LightModeIcon></LightModeIcon>
                        </Tooltip>
                        :
                        <Tooltip title="Change to dark mode">
                            <DarkModeIcon></DarkModeIcon>
                        </Tooltip>
                    }
                </IconButton>
            </Toolbar>
        </AppBar>

    );
}
