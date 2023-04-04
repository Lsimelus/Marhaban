import React, { Dispatch, SetStateAction } from 'react';
import {
  ProductActionsWrapper,
  ProductBox,
  ProductImage
} from '../../styles/Products';
import { Stack, Tooltip } from "@mui/material";
import OpenWithIcon from '@mui/icons-material/OpenWith';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import { ButtonComponent } from '../Button';
import { ProductModal } from "../ProductModal"
import Divider from '@mui/material/Divider';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { ProductDiv } from '../../styles/product';
import { CartContext } from '../../context';
import { productIds } from '../../@types';


interface ProductParams { id: productIds; title: string; price: string; img: string; items: any; desc: string; }


type ProductsProps = {
  data: ProductParams,
  image: string
}


export const Product = (props: ProductsProps) => {
  const { data , image} = props;
  const [showDetails, setShowDetails] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(false);
  let [cart, setCart]  = React.useContext(CartContext)


  const addToCart = () => {
    var id: productIds  = data.id
    
    setCart(prevState => {
      prevState[id] = cart[id] + 1
      return {...prevState}
    })

  }

  return (
    <div onMouseLeave={() => setShowDetails(false)}>
      <ProductBox >
        <ProductModal img={image} data={data} getModal={modalOpen} setModal={setModalOpen} />
        <ProductImage src={image}></ProductImage>
        <ProductActionsWrapper>
          <Stack direction={"column"}>
            <Tooltip title="Expand view" placement="right">
              <ButtonComponent
                onClick={() => { setModalOpen(true); setShowDetails(false) }}
                variant='text'>
                <OpenWithIcon
                />
              </ButtonComponent>
            </Tooltip>

            <Tooltip title="View details" placement="right">

              <ButtonComponent variant='text'
                onClick={() => setShowDetails(true)} >
                <ExpandCircleDownIcon
                />
              </ButtonComponent>
            </Tooltip>
          </Stack>
        </ProductActionsWrapper>


      </ProductBox>
      <p><b>{data.title}</b></p>
      <p><b>${data.price}</b></p>
      <ProductDiv show={showDetails}>
        <Divider />
        <b>
          Who is this for?
        </b>
        <p>{data["desc"]} </p>
      </ProductDiv>

      <ButtonComponent onClick={() => addToCart()} startIcon={<AddShoppingCartIcon />}><p>Add to Cart</p></ButtonComponent>
    </div>

  );
};