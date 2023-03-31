import Grid from '@mui/material/Grid';
import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import ReactCountryFlag from "react-country-flag"
import { Item } from "../../styles/Item"
import { Tooltip, Typography } from "@mui/material";
import { explore } from "../../data/data"
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Divider from '@mui/material/Divider';
import axios from 'axios';
import Box from '@mui/material/Box';
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from '@mui/material';
import RestartAltIcon from '@mui/icons-material/RestartAlt';



type ExploreProps = {
}
export const Explore = (props: ExploreProps) => {
  const [cat, setCat] = React.useState<string>("");
  const [country, setCountry] = React.useState("");
  const [data, setData] = React.useState<any | null>(null);
  const [searching, setSearching] = React.useState(false);

  const handleChange = (event: SelectChangeEvent) => {
    setCat(event.target.value as string)
  }

  const getNews = () => {
    setSearching(true)
    axios.post(`https://personal-api-lwmg.onrender.com/getnews`, {
      country: country,
      cat: explore.category[parseInt(cat)],
      app: "marhaban"
    })
      .then(res => {
        setData(res.data)
        setSearching(false)
      }).catch(function (error) {
        console.log(error)
        setSearching(false)
      });
  }

  React.useEffect(() => {
    // Runs ONCE after initial rendering
    if (!(cat === "" || country === "")) {
       getNews()
    } else {
      setData(null)
    }
  }, [cat, country]);


  return (
    <>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={searching}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <Grid container justifyContent="center" pt={10}>

        <Item style={{ maxWidth: "1000px" }}>
          <Grid container >
            <Grid item xs={12}>
              <Typography variant="h5" sx={{ margin: 3 }}>Find out what is going in Muslim countries around the world</Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="h5">Select a Category:</Typography>

              <FormControl required sx={{ m: 1, minWidth: 120 }}>
                <Select
                  onChange={handleChange}
                  value={cat as string}
                >
                  {explore.category.map(function (word: string, idx: number) {
                    const firstLetter = word.charAt(0)
                    const firstLetterCap = firstLetter.toUpperCase()
                    const remainingLetters = word.slice(1)
                    const capitalizedWord = firstLetterCap + remainingLetters

                    return (
                      <MenuItem value={idx}>{capitalizedWord}</MenuItem>
                    )
                  })}
                </Select>
                <FormHelperText>Required</FormHelperText>
              </FormControl>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="h5" >Select a Country:</Typography>

              {explore.country.map(function (info: string[]) {
                return (
                  <Tooltip title={info[1]}>
                    <span onClick={() => info[0] === country ? setCountry("") : setCountry(info[0])}
                    >
                      <ReactCountryFlag countryCode={info[0]}
                        style={{ cursor: "pointer", fontSize: "5vw", opacity: country === info[0] ? 1 : .3 }}
                      />
                    </span>
                  </Tooltip>
                )
              })}
            </Grid>
            <Grid item xs={12}>
              {data &&

                <Box>
                  <IconButton 
                  onClick={() => {setData(null); setCat(""); setCountry("");}}>
                    <RestartAltIcon
                    />
                  </IconButton>
                </Box>

              }
            </Grid>

          </Grid>
        </Item>




        {data && Object.keys(data).length > 0 &&
          <Grid container justifyContent="center" mt={10} style={{
            textAlign: "left",
            width: "60vw",
            height: "65vh",
            overflowY: "scroll",
            margin: "50px",
            marginBottom: "130px",
          }}>

            {data.articles.map(function (info: any) {
              return (
                <Grid item xs={12}>

                  <Item style={{ margin: 10, padding: 15 }}>
                    <Typography variant="h6"
                      sx={{
                        textDecoration: "underline",
                        display: "inline",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        ':hover': {
                          color: "blue",
                        },
                      }}>
                      <b><a href={info.url}>{info.title}</a></b>
                    </Typography>

                    {info.description &&
                      <p>{info.description}</p>
                    }

                    <Divider />
                    <p>{info.author}</p>
                    <p>{info.publishedAt.slice(0, 10)}</p>
                  </Item>
                </Grid>
              )
            })}


          </Grid>
        }
      </Grid>
    </>
  );
};
