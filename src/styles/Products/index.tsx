// @ts-nocheck
import styled from "@emotion/styled";
import { Button, IconButton } from "@mui/material";
import { Box } from "@mui/system";
/*
.hidden{
  opacity: 0;
  filter: blur(5px);
  transform: translateX(150px);
  transition:  all 1000ms;
}

h1.hidden{
  opacity: 0;
  filter: blur(5px);
  transform: translateX(-150px);
  transition:  all 1000ms;
}


h1.show{
  opacity: 1;
  filter: blur(0px);
  transform: translateX(0px);
}

.show{
  opacity: 1;
  filter: blur(0px);
  transform: translateX(0px);
}*/


export const ProductBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  
    position: "relative",
    ':hover > img' : {
      opacity: .5
    },

  
}));

export const ProductImage = styled("img")(({ src, theme }) => ({
    src: `url(${src})`,
    width: "100%",
  background: "gray",
  padding: '10px',
 
}));
//width: "80%", 
//padding: '24px',

export const ProductActionButton = styled(IconButton)(() => ({
  background: "white",
  margin: 4,
}));

//color: isfav ? Colors.primary : Colors.light,  

export const ProductFavButton = styled(ProductActionButton)(({ theme }) => ({
  
    position: "absolute",
    right: 0,
    top: 0,

}));

//width: "120px",
export const ProductAddToCart = styled(Button, {
  shouldForwardProp: (prop) => prop !== "show",
})(({  theme }) => ({
  
  fontSize: "12px",

  position: "absolute",    
  bottom: "2%",
  width: "300px",
  padding: "10px 5px",
  background: "red",
  [theme.breakpoints.down('md')]: {
    backgroundColor: "red",
  },
  [theme.breakpoints.up('md')]: {
    backgroundColor: "pink",
  },
  [theme.breakpoints.up('lg')]: {
    backgroundColor: "green",
  },
  opacity: 0.9,

}));

export const ProductMetaWrapper = styled(Box)(({theme}) => ({
  padding: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const ProductActionsWrapper = styled(Box)(({ theme }) => ({ 
  
    display: 'visible',
    position: "absolute",
    right: "0px",
    top: "5px",
      
}));

