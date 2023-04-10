import { Item } from "../../styles/Item"
import { Typography, Grid, Divider } from "@mui/material";
import { home, verses, desc } from "../../data/data"
import { AnimationWrapper } from "../../styles/Home"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { ButtonComponent } from "../Button";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


const handleClickScroll = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
type HomeProps = {
}

export const Home = (props: HomeProps) => {
  const quoteData = verses[(new Date().getDate() % verses.length)];

  return (
    <>
      <section id="top" style={{ height: "100vh" }}>
        <Grid
          container
          direction="column"
          justifyContent="space-around"
          alignItems="center"
          p={10}

        >
          <Grid item xs={12}>
            <Typography
              variant="h2"
              sx={{
                textShadow: "0 0 4px black",
                color: "#FFD700"
              }}>
              <AnimationWrapper about="3s">
                {home.title}
              </AnimationWrapper>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4" sx={{ textShadow: "0 0 4px #FFD700" }} >
              <AnimationWrapper about="4s">{home.subTitle}
              </AnimationWrapper>
            </Typography>
          </Grid>

          <Grid item xs={8} m={5}>

            <Item >
              <Typography>
                <AnimationWrapper about="6s">
                  {quoteData[0]}
                </AnimationWrapper></Typography>
              <Divider />
              <Typography >
                <AnimationWrapper about="6s">
                  {quoteData[1]}
                </AnimationWrapper></Typography>
            </Item>

          </Grid>
          <Grid item xs={12} >
            <Typography>
              <AnimationWrapper about="6s">
                {quoteData[2]}
              </AnimationWrapper></Typography>
          </Grid>
          <div style={{ marginTop: 80 }}>
            <Grid item xs={12} >





              <ButtonComponent
                opacity={.3}
                onClick={() => handleClickScroll("bottom")}

              ><KeyboardArrowDownIcon /></ButtonComponent>

            </Grid>
          </div>
        </Grid>
      </section>


      <section id="bottom" style={{ height: "100vh" }}>
        <Grid
          container
          direction="column"
          justifyContent="space-around"
          alignItems="center"
          p={10}
        >

          <div style={{ marginTop: 80 }}>
            <Grid item xs={12} >
              <ButtonComponent
                opacity={.3}
                onClick={() => handleClickScroll("top")}
              ><KeyboardArrowUpIcon /></ButtonComponent>

            </Grid>
          </div>
          <Grid item xs={12}>
        <Typography variant="h4" sx={{ flexGrow: 1, margin: 3, color: "brown" }}>Summary</Typography>

      </Grid>
          <Grid item xs={8} m={5}>
            <Item >
              {desc}
            </Item>
          </Grid>


        </Grid>

      </section>


    </>

  );
};