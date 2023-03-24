// @ts-ignore
import Grid from '@mui/material/Grid';
import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import ReactCountryFlag from "react-country-flag"
import { Item } from "../../styles/Item"
import { Stack, Tooltip, Typography } from "@mui/material";
import { explore } from "../../data/data"
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { ResourceArticle } from "../ResourceArticle"
import Box from '@mui/system/Box';
import Divider from '@mui/material/Divider';


const API = {
  status: 'ok',
  totalResults: 38,
  articles: [
    {
      source: [Object],
      author: 'By  JERUSALEM POST STAFF',
      title: 'Stars used to be a lot brighter, bigger and denser, study finds - The Jerusalem Post',
      description: 'Once the stars died, the conditions needed for their development were never available for them to appear again.',
      url: 'https://www.jpost.com/science/article-734902',
      urlToImage: 'https://images.jpost.com/image/upload/f_auto,fl_lossy/t_JD_ArticleMainImageFaceDetect/523305',
      publishedAt: '2023-03-20T19:58:00Z',
      content: 'The first stars in the cosmos were 10,000 times larger than the sun, a new study published this month found.\r\n' +
        'The study, published by Cornell University in March, found that the original stars would … [+2258 chars]'
    },
    {
      source: [Object],
      author: 'IOL',
      title: "EXPLAINER: Everything you need to know about the Facebook rapist 'is he dead, is he alive' investigation - IOL",
      description: null,
      url: 'https://news.google.com/rss/articles/CBMitQFodHRwczovL3d3dy5pb2wuY28uemEvbmV3cy9jcmltZS1hbmQtY291cnRzL2V4cGxhaW5lci1ldmVyeXRoaW5nLXlvdS1uZWVkLXRvLWtub3ctYWJvdXQtdGhlLWZhY2Vib29rLXJhcGlzdC1pcy1oZS1kZWFkLWlzLWhlLWFsaXZlLWludmVzdGlnYXRpb24tZDM4MzFmNDYtYWYwMy00ZWUzLWIxZjQtZjNmNWMwNjhiMDkz0gEA?oc=5',
      urlToImage: null,
      publishedAt: '2023-03-20T19:33:59Z',
      content: null
    },
    {
      source: [Object],
      author: 'TimesLIVE',
      title: "A handshake between cops and Malema concludes EFF's national shutdown march - TimesLIVE",
      description: null,
      url: 'https://news.google.com/rss/articles/CBMihAFodHRwczovL3d3dy50aW1lc2xpdmUuY28uemEvbmV3cy9zb3V0aC1hZnJpY2EvMjAyMy0wMy0yMC1hLWhhbmRzaGFrZS1iZXR3ZWVuLWNvcHMtYW5kLW1hbGVtYS1jb25jbHVkZXMtZWZmcy1uYXRpb25hbC1zaHV0ZG93bi1tYXJjaC_SAYgBaHR0cHM6Ly93d3cudGltZXNsaXZlLmNvLnphL2FtcC9uZXdzL3NvdXRoLWFmcmljYS8yMDIzLTAzLTIwLWEtaGFuZHNoYWtlLWJldHdlZW4tY29wcy1hbmQtbWFsZW1hLWNvbmNsdWRlcy1lZmZzLW5hdGlvbmFsLXNodXRkb3duLW1hcmNoLw?oc=5',
      urlToImage: null,
      publishedAt: '2023-03-20T19:03:13Z',
      content: null
    },
    {
      source: [Object],
      author: 'Daily Maverick',
      title: "Political minnows join EFF's national protest, but the... - Daily Maverick",
      description: null,
      url: 'https://news.google.com/rss/articles/CBMihAFodHRwczovL3d3dy5kYWlseW1hdmVyaWNrLmNvLnphL2FydGljbGUvMjAyMy0wMy0yMC1wb2xpdGljYWwtbWlubm93cy1qb2luLWVmZnMtbmF0aW9uYWwtcHJvdGVzdC1idXQtdGhlLWJpZy1maXNoLWFsbC1naXZlLWl0LWEtbWlzcy_SAQA?oc=5',
      urlToImage: null,
      publishedAt: '2023-03-20T18:38:19Z',
      content: null
    },
    {
      source: [Object],
      author: 'News24',
      title: 'Afcon qualifiers: Bafana boss replaces Blom with Pirates star after receiving medical report - News24',
      description: null,
      url: 'https://news.google.com/rss/articles/CBMilQFodHRwczovL3d3dy5uZXdzMjQuY29tL3Nwb3J0L3NvY2Nlci9iYWZhbmFiYWZhbmEvYWZjb24tcXVhbGlmaWVycy1iYWZhbmEtYm9zcy1yZXBsYWNlcy1ibG9tLXdpdGgtcGlyYXRlcy1zdGFyLWFmdGVyLXJlY2VpdmluZy1tZWRpY2FsLXJlcG9ydC0yMDIzMDMyMNIBmQFodHRwczovL3d3dy5uZXdzMjQuY29tL2FtcC9zcG9ydC9zb2NjZXIvYmFmYW5hYmFmYW5hL2FmY29uLXF1YWxpZmllcnMtYmFmYW5hLWJvc3MtcmVwbGFjZXMtYmxvbS13aXRoLXBpcmF0ZXMtc3Rhci1hZnRlci1yZWNlaXZpbmctbWVkaWNhbC1yZXBvcnQtMjAyMzAzMjA?oc=5',
      urlToImage: null,
      publishedAt: '2023-03-20T18:30:06Z',
      content: null
    },
    {
      source: [Object],
      author: 'EWN',
      title: 'Eskom concedes that outrage over power cuts warranted, lawyer tells court - EWN',
      description: null,
      url: 'https://news.google.com/rss/articles/CBMiZWh0dHBzOi8vZXduLmNvLnphLzAwMDEvMDEvMDEvZXNrb20tY29uY2VkZXMtdGhhdC1vdXRyYWdlLW92ZXItcG93ZXItY3V0cy13YXJyYW50ZWQtbGF3eWVyLXRlbGxzLWNvdXJ00gFpaHR0cHM6Ly9ld24uY28uemEvMDAwMS8wMS8wMS9lc2tvbS1jb25jZWRlcy10aGF0LW91dHJhZ2Utb3Zlci1wb3dlci1jdXRzLXdhcnJhbnRlZC1sYXd5ZXItdGVsbHMtY291cnQvYW1w?oc=5',
      urlToImage: null,
      publishedAt: '2023-03-20T18:12:10Z',
      content: null
    },
    {
      source: [Object],
      author: 'Daily Maverick',
      title: "SPOTLIGHT : New infection guidelines ahead of World TB Day a step forward for SA's response, but challenges remain - Daily Maverick",
      description: null,
      url: 'https://news.google.com/rss/articles/CBMimAFodHRwczovL3d3dy5kYWlseW1hdmVyaWNrLmNvLnphL2FydGljbGUvMjAyMy0wMy0yMC1uZXctaW5mZWN0aW9uLWd1aWRlbGluZXMtYWhlYWQtb2Ytd29ybGQtdGItZGF5LWEtc3RlcC1mb3J3YXJkLWZvci1zYXMtcmVzcG9uc2UtYnV0LWNoYWxsZW5nZXMtcmVtYWluL9IBAA?oc=5',
      urlToImage: null,
      publishedAt: '2023-03-20T17:45:13Z',
      content: null
    },
    {
      source: [Object],
      author: 'News24',
      title: 'Amazon to cut 9 000 more jobs, including at AWS and Twitch - News24',
      description: null,
      url: 'https://news.google.com/rss/articles/CBMiaWh0dHBzOi8vd3d3Lm5ld3MyNC5jb20vZmluMjQvY29tcGFuaWVzL2FtYXpvbi10by1jdXQtOS0wMDAtbW9yZS1qb2JzLWluY2x1ZGluZy1hdC1hd3MtYW5kLXR3aXRjaC0yMDIzMDMyMNIBbWh0dHBzOi8vd3d3Lm5ld3MyNC5jb20vYW1wL2ZpbjI0L2NvbXBhbmllcy9hbWF6b24tdG8tY3V0LTktMDAwLW1vcmUtam9icy1pbmNsdWRpbmctYXQtYXdzLWFuZC10d2l0Y2gtMjAyMzAzMjA?oc=5',
      urlToImage: null,
      publishedAt: '2023-03-20T17:18:03Z',
      content: null
    },
    {
      source: [Object],
      author: 'IOL',
      title: 'Eating for flavour or health? Reasons why eating the right foods is good for your mental health - IOL',
      description: null,
      url: 'https://news.google.com/rss/articles/CBMirwFodHRwczovL3d3dy5pb2wuY28uemEvbGlmZXN0eWxlL2hlYWx0aC9kaWV0L2VhdGluZy1mb3ItZmxhdm91ci1vci1oZWFsdGgtcmVhc29ucy13aHktZWF0aW5nLXRoZS1yaWdodC1mb29kcy1pcy1nb29kLWZvci15b3VyLW1lbnRhbC1oZWFsdGgtZGE1M2FiMzMtM2ZmNi00NWZkLTlhZGUtNGJiNGVhODBlYWNl0gEA?oc=5',
      urlToImage: null,
      publishedAt: '2023-03-20T17:07:02Z',
      content: null
    },
    {
      source: [Object],
      author: 'CNBCAfrica.com',
      title: 'The Rise Of Dumb Phones - CNBCAfrica.com',
      description: null,
      url: 'https://news.google.com/rss/articles/CBMiOGh0dHBzOi8vd3d3LmNuYmNhZnJpY2EuY29tLzIwMjMvdGhlLXJpc2Utb2YtZHVtYi1waG9uZXMv0gEA?oc=5',
      urlToImage: null,
      publishedAt: '2023-03-20T16:49:38Z',
      content: null
    },
    {
      source: [Object],
      author: 'News24',
      title: 'Trump indictment in hush payments case expected late Monday or Wednesday - report - News24',
      description: null,
      url: 'https://news.google.com/rss/articles/CBMigQFodHRwczovL3d3dy5uZXdzMjQuY29tL25ld3MyNC93b3JsZC9uZXdzL3RydW1wLWluZGljdG1lbnQtaW4taHVzaC1wYXltZW50cy1jYXNlLWV4cGVjdGVkLWxhdGUtbW9uZGF5LW9yLXdlZG5lc2RheS1yZXBvcnQtMjAyMzAzMjDSAYUBaHR0cHM6Ly93d3cubmV3czI0LmNvbS9hbXAvbmV3czI0L3dvcmxkL25ld3MvdHJ1bXAtaW5kaWN0bWVudC1pbi1odXNoLXBheW1lbnRzLWNhc2UtZXhwZWN0ZWQtbGF0ZS1tb25kYXktb3Itd2VkbmVzZGF5LXJlcG9ydC0yMDIzMDMyMA?oc=5',
      urlToImage: null,
      publishedAt: '2023-03-20T16:46:01Z',
      content: null
    },
    {
      source: [Object],
      author: 'Daily Maverick',
      title: 'In images: An Acehnese woman receives caning punishment... - Daily Maverick',
      description: null,
      url: 'https://news.google.com/rss/articles/CBMid2h0dHBzOi8vd3d3LmRhaWx5bWF2ZXJpY2suY28uemEvYXJ0aWNsZS8yMDIzLTAzLTIwLWluLWltYWdlcy1hbi1hY2VobmVzZS13b21hbi1yZWNlaXZlcy1jYW5pbmctcHVuaXNobWVudC1pbi1pbmRvbmVzaWEv0gEA?oc=5',
      urlToImage: null,
      publishedAt: '2023-03-20T16:35:09Z',
      content: null
    },
    {
      source: [Object],
      author: 'SuperSport',
      title: 'FNB Varsity Cup | Cape Town v University of the Witwatersrand | Highlights - SuperSport',
      description: null,
      url: 'https://news.google.com/rss/articles/CCAiC0JYUWxzRERSX2xNmAEB?oc=5',
      urlToImage: null,
      publishedAt: '2023-03-20T16:29:17Z',
      content: null
    },
    {
      source: [Object],
      author: 'eNCA',
      title: 'Media mogul Murdoch, 92, engaged for fifth time - eNCA',
      description: null,
      url: 'https://news.google.com/rss/articles/CBMiQ2h0dHBzOi8vd3d3LmVuY2EuY29tL25ld3MvbWVkaWEtbW9ndWwtbXVyZG9jaC05Mi1lbmdhZ2VkLWZpZnRoLXRpbWXSAQA?oc=5',
      urlToImage: null,
      publishedAt: '2023-03-20T15:25:56Z',
      content: null
    },
    {
      source: [Object],
      author: 'News24',
      title: 'EFF shutdown: 33 arrested at Woolies in Sandton - News24',
      description: null,
      url: 'https://news.google.com/rss/articles/CBMiXmh0dHBzOi8vd3d3Lm5ld3MyNC5jb20vZmluMjQvY29tcGFuaWVzL2VmZi1zaHV0ZG93bi0zMy1hcnJlc3RlZC1hdC13b29saWVzLWluLXNhbmR0b24tMjAyMzAzMjDSAWJodHRwczovL3d3dy5uZXdzMjQuY29tL2FtcC9maW4yNC9jb21wYW5pZXMvZWZmLXNodXRkb3duLTMzLWFycmVzdGVkLWF0LXdvb2xpZXMtaW4tc2FuZHRvbi0yMDIzMDMyMA?oc=5',
      urlToImage: null,
      publishedAt: '2023-03-20T13:55:42Z',
      content: null
    },
    {
      source: [Object],
      author: 'EWN',
      title: 'Zuma hoped to silence & discredit Maughan with private prosecution, court told - EWN',
      description: null,
      url: 'https://news.google.com/rss/articles/CBMibGh0dHBzOi8vZXduLmNvLnphLzIwMjMvMDMvMjAvenVtYS1ob3BlZC10by1zaWxlbmNlLWFuZC1kaXNjcmVkaXQtbWF1Z2hhbi13aXRoLXByaXZhdGUtcHJvc2VjdXRpb24tY291cnQtdG9sZNIBcGh0dHBzOi8vZXduLmNvLnphLzIwMjMvMDMvMjAvenVtYS1ob3BlZC10by1zaWxlbmNlLWFuZC1kaXNjcmVkaXQtbWF1Z2hhbi13aXRoLXByaXZhdGUtcHJvc2VjdXRpb24tY291cnQtdG9sZC9hbXA?oc=5',
      urlToImage: null,
      publishedAt: '2023-03-20T13:41:15Z',
      content: null
    },
    {
      source: [Object],
      author: 'Fortress of Solitude',
      title: 'Live-Action God of War Series Casting Using A.I. - Fortress of Solitude',
      description: null,
      url: 'https://news.google.com/rss/articles/CBMiVWh0dHBzOi8vd3d3LmZvcnRyZXNzb2Zzb2xpdHVkZS5jby56YS9saXZlLWFjdGlvbi1nb2Qtb2Ytd2FyLXNlcmllcy1jYXN0aW5nLXVzaW5nLWEtaS_SAQA?oc=5',
      urlToImage: null,
      publishedAt: '2023-03-20T13:35:19Z',
      content: null
    },
    {
      source: [Object],
      author: 'Radio 702',
      title: 'What is neurofibromatosis? Neurologist explains - Radio 702',
      description: null,
      url: 'https://news.google.com/rss/articles/CBMiVGh0dHBzOi8vd3d3LjcwMi5jby56YS9hcnRpY2xlcy80NjkzMzkvd2hhdC1pcy1uZXVyb2ZpYnJvbWF0b3Npcy1uZXVyb2xvZ2lzdC1leHBsYWluc9IBAA?oc=5',
      urlToImage: null,
      publishedAt: '2023-03-20T13:00:00Z',
      content: null
    },
    {
      source: [Object],
      author: 'Geo News',
      title: 'Royal family draws up plans to snub Prince Harry, Meghan Markle at coronation - Geo News',
      description: null,
      url: 'https://news.google.com/rss/articles/CBMibWh0dHBzOi8vd3d3Lmdlby50di9sYXRlc3QvNDc3NDM4LXJveWFsLWZhbWlseS1kcmF3cy11cC1wbGFucy10by1zbnViLXByaW5jZS1oYXJyeS1tZWdoYW4tbWFya2xlLWF0LWNvcm9uYXRpb27SAWpodHRwczovL3d3dy5nZW8udHYvYW1wLzQ3NzQzOC1yb3lhbC1mYW1pbHktZHJhd3MtdXAtcGxhbnMtdG8tc251Yi1wcmluY2UtaGFycnktbWVnaGFuLW1hcmtsZS1hdC1jb3JvbmF0aW9u?oc=5',
      urlToImage: null,
      publishedAt: '2023-03-20T12:28:00Z',
      content: null
    },
    {
      source: [Object],
      author: 'IOL',
      title: 'Electricity Minister Kgosientsho Ramokgopa says there is light at end of tunnel - IOL',
      description: null,
      url: 'https://news.google.com/rss/articles/CBMimAFodHRwczovL3d3dy5pb2wuY28uemEvbmV3cy9wb2xpdGljcy9lbGVjdHJpY2l0eS1taW5pc3Rlci1rZ29zaWVudHNoby1yYW1va2dvcGEtc2F5cy10aGVyZS1pcy1saWdodC1hdC1lbmQtb2YtdHVubmVsLWU4MzEyNTgwLWU4ZTgtNGI0Zi1hZTAzLWMwZjZjN2YzNDhhNNIBAA?oc=5',
      urlToImage: null,
      publishedAt: '2023-03-20T12:20:53Z',
      content: null
    }
  ]
}




type ExploreProps = {
}
export const Explore = (props: ExploreProps) => {
  const [cat, setCat] = React.useState<string>("");
  const [country, setCountry] = React.useState("");
  const [data, setData] = React.useState<any | null>(null);

  const handleChange = (event: SelectChangeEvent) => {
    setCat(event.target.value as string)
  }

  React.useEffect(() => {
    // Runs ONCE after initial rendering
    if (!(cat === "" || country === "")) {
      setData(API)
    } else {
      setData(null)
    }
  }, [cat, country]);


  return (
    <>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={false}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <Grid container justifyContent="center">

        <Item style={{ maxWidth: "1000px" }}>
          <Grid container >
            <Grid item xs={12}>
              <Typography variant="h5" sx={{ margin: 3 }}>Find out what is going in Muslim countries around the world</Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="h5" >Select a Category:</Typography>

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

              {explore.country.map(function (info: string[], idx: number) {
                return (
                  <Tooltip title={info[1]}>
                    <span onClick={() => info[0] == country ? setCountry("") : setCountry(info[0])}
                    >
                      <ReactCountryFlag countryCode={info[0]}
                        style={{ cursor: "pointer", fontSize: "5vw", opacity: country == info[0] ? 1 : .3 }}
                      />
                    </span>
                  </Tooltip>
                )
              })}
            </Grid>

          </Grid>
        </Item>

        {data && Object.keys(data).length > 0 &&

          <div style={{ paddingBottom: "120px", textAlign: "left", maxWidth: "600px" }}>
            {data.articles.map(function (info: any, idx: number) {
              return (

                <Item style={{ margin: 10, padding: 15 }}>
                  <Typography variant="h6" sx={{
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
                    <>
                      <p>{info.description}</p>

                    </>
                  }
                  <Divider />

                  <p>{info.author}</p>
                  <p>{info.publishedAt.slice(0, 10)}</p>
                </Item>
              )
            })}
          </div>
        }
      </Grid>
    </>
  );
};
