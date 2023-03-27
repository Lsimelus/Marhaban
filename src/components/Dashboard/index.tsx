import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import {
    Route,
    Routes,
    HashRouter,
} from "react-router-dom";
import useMediaQuery from '@mui/material/useMediaQuery';
import { Navbar } from '../Navbar';
import { Home } from "../Home"
import { Shop } from "../Shop"
import { Resources } from '../Faq';
import { Explore } from '../Explore';
import { Contact } from '../Contact';
import { Footer } from '../Footer';
import { CartContext } from '../../context';
import {NavPages} from "../NavPages"
import {Main} from "../../styles/Dashboard"



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
                    divider: "3f51b5",
                },
                typography: {
                    fontFamily: "Lucida"
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
                    <Box sx={{ display: 'flex', overflowX: "hidden", backgroundColor: "beige", height: "100vh" }}>
                        <Navbar 
                        darkModeFunction={setPrefersDarkMode}
                        darkMode={prefersDarkMode}
                        open={open}
                        setOpen={setOpen}
                        />
                        <NavPages open={open} setOpen={setOpen}/>
                        <Main open={open} onClick={() => setOpen(false)} >

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