import Grid from '@mui/material/Grid';
import { Item } from "../../styles/Item"
import { Product } from "../Product"
import { products } from "../../data/data"

type ShopProps = {
}

export const Shop = (props: ShopProps) => {

  return (
    <>
      <Grid
        container
        spacing={5}
        pt={10}
        justifyContent="center"
      >

        {Object.values(products).map(function (item: any) {

          return (
            <Grid item xs={6} sm={4} lg={3}>
              <Item>
                <Product data={item} image={item["img"]}></Product>
              </Item>
            </Grid>
          )
        })}

      </Grid>
    </>
  );
};