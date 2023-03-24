import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Item } from "../../styles/Item"
import { faq } from "../../data/data"
import { Accordion, AccordionSummary, AccordionDetails } from "../../styles/Resources"
import Grid from '@mui/material/Grid';


type ResourcesProps = {
}

export const Resources = (props: ResourcesProps) => {
  const [expanded, setExpanded] = React.useState<number | false>();

  const handleChange =
    (panel: number) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(panel);
    };

  return (
    <Grid container justifyContent={"center"} >
      <Grid item xs={12}>
        <Typography variant="h4" sx={{ flexGrow: 1, margin: 3 }}>Frequently Asked Questions</Typography>

      </Grid>
      <Grid item xs={8}>

        <Item style={{ margin: 25, maxWidth: "800px" }}>
          {faq.map(function (item: string[], idx: number) {
            return (
              <Accordion expanded={idx == expanded} onChange={handleChange(idx)}>
                <AccordionSummary>
                  <Typography>{item[0]}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    {item[1]}
                  </Typography>
                </AccordionDetails>
              </Accordion>

            )
          })}
        </Item>
      </Grid>
    </Grid>
  );
};