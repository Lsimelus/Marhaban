import { Item } from "../../styles/Item"
import { Typography ,Grid} from "@mui/material";
import {home} from "../../data/data"

type HomeProps = {
}

export const Home = (props: HomeProps) => {
  const indexOfQuote= (new Date().getDate()% home.verses.push.length)

  return (
    <>
      <Grid
        container
        p={10}
      >
        <Grid item xs={12}>
          <Typography variant="h2" sx={{textShadow: "0 0 4px black", color: "#FFD700"}} >{home.title}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4" sx={{textShadow: "0 0 4px #FFD700"}} >{home.subTitle}</Typography>
        </Grid>
        <Grid item xs={12} m={5}>

          <Item >
            <Typography >{home.blurb}</Typography>
          </Item>
        </Grid>
        <Grid item xs={12} m={2}>
          <Typography>{home.verses[indexOfQuote]}</Typography>
        </Grid>
      </Grid>
    </>
  );
};