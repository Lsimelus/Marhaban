import { Item } from "../../styles/Item";
import React from "react";
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CircularProgress from '@mui/material/CircularProgress';
import { ButtonComponent } from "../Button"
import { Typography } from "@mui/material";


type ContactProps = {
}



export const Contact = React.forwardRef<HTMLElement, ContactProps>((props, ref) => {
  //const { alertCallback, subjectFilled = "" } = props;
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [subject, setSubject] = React.useState<String>("");
  const [message, setMessage] = React.useState("");
  const [formDone, setFormDone] = React.useState(false);
  const [buffering, setBuffering] = React.useState(false);
  const [formEmpty, setFormEmpty] = React.useState(false);

  /*React.useEffect(() => {
    setSubject(subjectFilled)
    setName("")
    setEmail("")
    setMessage("")
    setFormDone(false)

  }, [subjectFilled]);

  function processForm() {
    setFormEmpty(false)
    if (name === "" || email === "" || message === "") {
      setFormEmpty(true)
      alertCallback("The required field must be filled in.", "warning")
    } else if (email.indexOf("@") === -1) {
      alertCallback("Improper email format", "warning")
    } else {
      setBuffering(true)
      alertCallback("Connecting to API. This may take a second.", "info")


      axios.post(`https://portfolio-webapp-pf4y.onrender.com/processform`, {
        name: name,
        email: email,
        subject: subject,
        message: message
      })
        .then(res => {
          setFormDone(true)
          alertCallback("Form successfully processed. I will respond ASAP.", "success")
          setBuffering(false)
        }).catch(function (error) {
          alertCallback("Something went wrong. Sorry for the inconvenience", "error")
          setBuffering(false)
        });

    }
  }*/

  return (
    <>

      <Grid
        container
        spacing={5}
        p={8}
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={12}>
          <Typography variant="h5" sx={{ flexGrow: 1, color: "brown"}}>Questions and Suggestions</Typography>
        </Grid>

        <Grid item xs={12} md={8} >
          <Item>
            <Grid item xs={12} m={1}>
              <TextField margin={"dense"} fullWidth label="Name*" variant="filled"
                error={formEmpty && name === ""}
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={formDone}
              />
            </Grid>
            <Grid item xs={12} m={1}>
              <TextField
                error={formEmpty && email === ""}
                value={email}
                disabled={formDone}
                onChange={(e) => setEmail(e.target.value)}
                margin={"dense"} fullWidth label="Email*" variant="filled" />
            </Grid>
            <Grid item xs={12} m={1}>
              <TextField margin={"dense"} value={message}
                error={formEmpty && message === ""}
                disabled={formDone}
                onChange={(e) => setMessage(e.target.value)}
                fullWidth multiline rows={3} label="Message*" variant="filled" />
            </Grid>


            <Box
              m={3}
              display="flex"
              justifyContent="space-between"
            >

              {formDone ?
                <CheckCircleIcon sx={{
                  fontSize: 60,
                  color: "green"
                }} />
                :
                <ButtonComponent
                  onClick={() => console.log()}
                  text={"Submit"}
                />
              }
              
              {buffering &&
                < CircularProgress />
              }
            </Box>
          </Item>
        </Grid>

      </Grid>

    </>
  );
});

export default Contact;
