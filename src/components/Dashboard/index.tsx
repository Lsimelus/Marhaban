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
import axios from 'axios';
import {AlertDiv,  alertType} from "../Alert"

interface DashboardProps {
}


export const Dashboard = (props: DashboardProps) => {
    const [prefersDarkMode, setPrefersDarkMode] = React.useState(useMediaQuery('(prefers-color-scheme: dark)'));
    const [cart, setCart] = React.useState({ "1": 0, "2": 0, "3": 0 });
    const [open, setOpen] = React.useState(false);


    const [alertText, setAlertText] = React.useState("")
  const [alertSeverity, setAlertSeverity] = React.useState<alertType>("success")//:TODO implement
  const [alertOpen, setAlertOpen] = React.useState(false)

  function openAlert(text: string, severity: alertType) {
    setAlertSeverity(severity)
    setAlertText(text)
    setAlertOpen(true)
  }

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

      React.useEffect(() => {
        //Wake up API listener so other API calls are more quicker
        axios.get(`https://personal-api-lwmg.onrender.com/api`)
          .then(res => {
            console.log(res)
          }).catch(function (error) {
            console.log(error)
          });

      }, []);


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
                        alertCallback={openAlert}
                        />
                        <NavPages open={open} setOpen={setOpen}/>
                        <Main open={open} onClick={() => setOpen(false)} >
                        <AlertDiv
                            openAlert={alertOpen}
                            severity={alertSeverity}
                            alertText={alertText}
                            parentCallback={setAlertOpen}
                        />

                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/shop" element={<Shop />} />
                            <Route path="/faq" element={<Resources />} />
                            <Route path="/explore" element={<Explore />} />
                            <Route path="/contact" element={<Contact alertCallback={openAlert}/>} />
                        </Routes>
                        
                        </Main>
                        <Footer />
                    </Box>
                </HashRouter>

            </CartContext.Provider>
        </ThemeProvider>
    );
}