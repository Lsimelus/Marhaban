import Container from '@mui/material/Container';
import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  styled,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import Avatar from '@mui/material/Avatar';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import test from "../../assets/test.jpg"
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { Item } from '../../styles/Item';
import { ButtonComponent } from '../Button';
import { CartContext } from '../../context';
import { productIds } from '../../@types';
import { SetStateAction } from 'react';
import { products } from '../../data/data';



const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

type CartDrawerProps = {
}

export const CartDrawer = (props: CartDrawerProps) => {

  const cartModify= (cart: { 1: number; 2: number; 3: number; } ,setCart: React.Dispatch<SetStateAction<{ 1: number; 2: number; 3: number; }>>, key:productIds, change:number) => {
    


    setCart(prevState => {
      prevState[key] = cart[key] + 1
      return {...prevState}
    })

  }

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>

      <Grid container spacing={2}>
        <CartContext.Consumer>
          {(info: [{ [key in productIds]: number }, React.Dispatch<SetStateAction<{ [key in productIds]: number }>>]) => (
            <>
              <Grid item xs={12} m={2}>
                <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                  Cart
                </Typography>

                <Demo>
                  <List >
                    {Object.keys(info[0]).map(function (data: any, idx: number) {
                      let productCart = info[0]
                      let key = data as productIds
                      let currAmount = productCart[key]
                      if (currAmount > 0) {
                        let currProduct = products[key]
                        

                        console.log(key)
                        console.log(products)
                        console.log(productCart)
                        
                        //products
                        return (
                          <Item style={{ margin: 10 }}>

                            <ListItem
                              secondaryAction={
                                <IconButton edge="end" 
                                onClick={() => info[1](prevState => {
                                  prevState[key] = 0
                                  return {...prevState}
                                })}
                                sx={{
                                  transition: "all .7s ease-in-out",
                                  color: "red",
                                  ':hover': {
                                    transform: "rotate(360deg)"
                                  },

                                }}
                                
                                >
                                  <CloseIcon

                                  />
                                </IconButton>
                              }
                            >
                              <ListItemAvatar>
                                <Avatar src={test}>
                                </Avatar>

                              </ListItemAvatar>


                              <ListItemText
                                primary={currProduct["title"]}
                                secondary={currProduct["price"]}
                              />

                              <ListItemAvatar>
                                <Avatar>
                                  <IconButton
                                  
                                  onClick={
                                    ()=> cartModify(info[0], info[1], key, 1)
                                  }>
                                    <ArrowDropUpIcon
                                    />
                                  </IconButton>

                                </Avatar>

                                <Avatar>
                                  <IconButton>
                                    <ArrowDropDownIcon
                                    onClick={() => info[1](prevState => {
                                      prevState[key] = info[0][key]- 1
                                      return {...prevState}
                                    })}
                                    />
                                  </IconButton>
                                </Avatar>
                              </ListItemAvatar>

                              <ListItemText
                                primary={currAmount}
                              />

                            </ListItem>
                          </Item>

                        )
                      }



                    })}

                  </List>
                </Demo>

              </Grid>
              <Grid item xs={12}>
                <Demo>
                  <List >
                    <ListItem
                      secondaryAction={
                        <ButtonComponent>
                          <p>Checkout</p>
                        </ButtonComponent>
                      }
                    >

                      <ListItemText
                        primary="Total"
                        secondary={"3 items"}
                      />


                      <ListItemText
                        primary="$99.99"
                      />

                    </ListItem>

                  </List>
                </Demo>

              </Grid>
            </>
          )}
        </CartContext.Consumer>


      </Grid>
    </Box>
  );
};