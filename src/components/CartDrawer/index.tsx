import {
  Box,
  Typography,
  IconButton,
  List,
  ListItemText,
  styled,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import test from "../../assets/test.jpg"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { Item } from '../../styles/Item';
import { ButtonComponent } from '../Button';
import { CartContext } from '../../context';
import { productIds } from '../../@types';
import { SetStateAction } from 'react';
import { products } from '../../data/data';
import { getCartSize } from "../../utils/cartUtil"


const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

type CartDrawerProps = {
}

export const CartDrawer = (props: CartDrawerProps) => {

  const cartModify = (cart: { 1: number; 2: number; 3: number; }, setCart: React.Dispatch<SetStateAction<{ 1: number; 2: number; 3: number; }>>, key: productIds, change: number) => {
    if (change == 0) {
      setCart(prevState => {
        prevState[key] = 0
        return { ...prevState }
      })

    } else {
      setCart(prevState => {
        prevState[key] = cart[key] + change
        return { ...prevState }
      })

    }

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
              </Grid>

              {getCartSize(info[0]) > 0 ?
                <>
                  <Grid item xs={12} m={2}>
                    <Demo>
                      <List >
                        {Object.keys(info[0]).map(function (data: any) {
                          let productCart = info[0]
                          let key = data as productIds
                          let currAmount = productCart[key]

                          if (currAmount > 0) {
                            let currProduct = products[key]
                            return (
                              <Item style={{ margin: 10 }}>

                                <ListItem
                                  secondaryAction={
                                    <IconButton edge="end"
                                      onClick={() => info[1](prevState => {
                                        prevState[key] = 0
                                        return { ...prevState }
                                      })}
                                      sx={{
                                        transition: "all .7s ease-in-out",
                                        color: "red",
                                        ':hover': {
                                          transform: "rotate(360deg)"
                                        },
                                      }}
                                    >
                                      <CloseIcon />
                                    </IconButton>
                                  }
                                >
                                  <ListItemAvatar>
                                    <Avatar src={test}>
                                    </Avatar>
                                  </ListItemAvatar>


                                  <ListItemText
                                    primary={currProduct["title"]}
                                    secondary={"$" + currProduct["price"]}
                                  />

                                  <ListItemAvatar>
                                    <Avatar>
                                      <IconButton

                                        onClick={
                                          () => cartModify(info[0], info[1], key, 1)
                                        }>
                                        <ArrowDropUpIcon
                                        />
                                      </IconButton>

                                    </Avatar>

                                    <Avatar>
                                      <IconButton>
                                        <ArrowDropDownIcon
                                          onClick={() => info[1](prevState => {
                                            prevState[key] = info[0][key] - 1
                                            return { ...prevState }
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
                :
                <Grid item xs={12} m={2}>Your cart is Empty.</Grid>

              }



            </>
          )}
        </CartContext.Consumer>


      </Grid>
    </Box>
  );
};