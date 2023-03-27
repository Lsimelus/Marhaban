import React from "react";
import { Item } from "../../styles/Item"
import { Typography, Grid, Divider } from "@mui/material";
import { home, verses } from "../../data/data"
import styled, { keyframes } from "styled-components"


const animation = keyframes`
  0% {opacity: 0; filter: blur(10px);}
  100% {opacity: 1; filter: blur(0px);}
`;
const AnimationWrapper = styled.span`
  opacity: 0;
  filter: blur(10px);
  animation-name: ${animation};
  animation-duration: ${props => props.about ? props.about : "3s"};
  animation-fill-mode: forwards;
`;


type HomeProps = {
}

export const Home = (props: HomeProps) => {
  const quoteData = verses[(new Date().getDate() % verses.length)];

  return (

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
    </Grid>

  );
};