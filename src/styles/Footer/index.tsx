import styled from "@emotion/styled";
import Button from '@mui/material/Button';
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";


export const FooterButton = (props: { hoverColor: any; onPage:boolean; children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) => (

  <Button 
  sx={{ 
    color: props.onPage ? props.hoverColor :"gray",
    transition: "transform 1s",

    ':hover': {
        color: props.hoverColor ,
        transform: "translate(0px, -20px)",
      },
    }}>
    {props.children}
    </Button>
);


  
