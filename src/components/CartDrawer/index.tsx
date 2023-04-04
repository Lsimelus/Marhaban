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
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { Item } from '../../styles/Item';
import { ButtonComponent } from '../Button';
import { CartContext } from '../../context';
import { productIds } from '../../@types';
import { SetStateAction } from 'react';
import { products } from '../../data/data';
import { getCartSize, getCartTotal } from "../../utils/cartUtil"
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';



const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

type CartDrawerProps = {
  alertCallback: Function
}

export const CartDrawer = (props: CartDrawerProps) => {
  const { alertCallback} = props;
  const [stock, setStock] = React.useState(false);
  const [buffering, setBuffering] = React.useState(false);

  const cartModify = (cart: { 1: number; 2: number; 3: number; }, setCart: React.Dispatch<SetStateAction<{ 1: number; 2: number; 3: number; }>>, key: productIds, change: number) => {
    if (change === 0) {
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
        <Backdrop
              sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={buffering}
            >
              <CircularProgress color="inherit" />
            </Backdrop>


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
                        {Object.keys(info[0]).map(function(data: string) {
                          let productCart = info[0]
                          let key = data as productIds
                          let currAmount = productCart[key]

                          if (currAmount > 0) {
                            let currProduct = products[key]
                            console.log("~~~~~~~~~~")
                            console.log(currProduct)
                            return (
                              <Item style={{ margin: 10 }}>
                                <ListItem
                                  secondaryAction={
                                    <IconButton edge="end"
                                    disabled={stock}
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
                                    <Avatar src={currProduct["img"]}>
                                    </Avatar>
                                  </ListItemAvatar>
                                  <ListItemText
                                    primary={currProduct["title"]}
                                    secondary={"$" + currProduct["price"]}
                                  />

                                  <ListItemAvatar>
                                    <Avatar>
                                      <IconButton
                                       disabled={stock}
                                        onClick={
                                          () => cartModify(info[0], info[1], key, 1)
                                        }
                                   
                                        >
                                        <ArrowDropUpIcon
                                        />
                                      </IconButton>
                                    </Avatar>

                                    <Avatar>
                                      <IconButton  disabled={stock}>
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
                        {stock ?
                         <ListItem
                         secondaryAction={
                           <ButtonComponent
                           disabled={stock}
                           >
                             <p>Checkout</p>
                           </ButtonComponent>
                         }
                       ><ListItemText
                          primary="Items out of stock"
                          secondaryTypographyProps={{color: "red"}}
                          secondary={getCartSize(info[0]) +" items"}
                        />
                         <ListItemText
                           primary={getCartTotal(info[0])}
                         />
                       </ListItem>
                        :
                        <ListItem
                        secondaryAction={
                          <ButtonComponent
                          onClick={() => {
                            setBuffering(true)
                            setTimeout(() => {
                              setStock(true)
                              setBuffering(false)
                              alertCallback("Something went wrong. Sorry for the inconvenience", "error")
                            }, 2500);
                            }}
                          >
                            <p>Checkout</p>
                          </ButtonComponent>
                        }
                      >

                        <ListItemText
                          primary="Total"

                          secondary={getCartSize(info[0]) +" items"}
                        />

                        <ListItemText
                          primary={getCartTotal(info[0])}
                        />
                      </ListItem>
                      
                      }
                      
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