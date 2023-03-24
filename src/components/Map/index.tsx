// @ts-ignore
import {
    ComposableMap,
    Geographies,
    Geography,
    Annotation,
    ZoomableGroup,
    Marker
  } from "react-simple-maps";
  import map from "../../data/map.json"
  import Grid from '@mui/material/Grid';
  


//Indonesia, united Arab, Saudi Arabia, Morocco, and Egypt are the ones from that list. 
export const Map = () => {

    return (
      <ComposableMap>
      <Geographies geography={map}>
        {({ geographies}) =>
          geographies.map((geo: any) => (
            <Geography key={geo.rsmKey} geography={geo}
            fill="gray"
            onClick={() => console.log(geo["properties"]["name"])}
             />
          ))
        }
      </Geographies>
      <Annotation
      subject={[2.3522, 48.8566]}
      dx={-90}
      dy={-30}
      connectorProps={{
        stroke: "#FF5533",
        strokeWidth: 3,
        strokeLinecap: "round"
      }}
      onClick={()=> console.log("clickedsss")}
    >
      <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#F53">
        {"Paris"}
      </text>
    </Annotation>
    <Marker coordinates={[-0.128, 51.507]}>
      <circle r={2} fill="yellow" />
    </Marker>
      </ComposableMap>
    );
  };