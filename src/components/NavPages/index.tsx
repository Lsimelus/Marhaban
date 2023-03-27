import { styled} from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import {
    Link,
    useLocation,
} from "react-router-dom";

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
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


const navPages: any[][] = [["Home", "/",  <HomeIcon/>], ["FAQ", "/faq", <HelpIcon/>], ["Shop", "/shop", <ShoppingBasketIcon/>],["Explore", "/explore",  <ExploreIcon/>], ["Contact", "/contact", <ContactsIcon/>]]

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
            <Divider />
            <List component="nav" subheader={<li />}>
                {navPages.map(function (pageInfo: string[]) {

                    if (location.pathname === pageInfo[1]){
                        return (
                            <Link to={pageInfo[1]}>
                                <ListItem sx={{color: "brown"}} disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon sx={{color: "brown"}}>
                                            {pageInfo[2]}
                                        </ListItemIcon>
                                        <ListItemText primary={pageInfo[0]} />
                                    </ListItemButton>
                                </ListItem>
                            </Link>
                        )
                    }
                    return (
                        <Link to={pageInfo[1]}>
                            <ListItem onClick={() => setOpen(false)} disablePadding>
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
