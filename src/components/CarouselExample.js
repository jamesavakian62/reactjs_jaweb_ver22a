import React from "react";
import Carousel from "react-material-ui-carousel";
//import { Paper, Button } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import "../styles/carousel.css";

function CarouselExample(props) {
  var items = [
    {
      name: "Dont't be pushed by your problems. Be led by your dreams",
      description: "Ralph Waldo Emerson",
    },
    {
      name: "Dont't let the noise of others drown out your own inner creative voice",
      description: "Stanford University",
    },

    {
      name: "Mahatma Gandi",
      description: "You must be the chgange in the world you trust",
    },
    {
      name: "A great work demands sacrifice, be capable to make a sacrifice and make a great work!",
      description: "James L. Avakian",
    },

    {
      name: "The small truth has words that are clear; the great truth has great silence.",
      description: "Rabindranath",
    },
    {
      name: "Where the willingness is great, difficulties are always every present.",
      description: "James L. Avakian",
    },
    {
      name: "The lives of many souls are changed by and an act of faith.",
      description: "Anouamous",
    },
    {
      name: "Many men have stood before us, that's why this place is great!",
      description: "Anouamous",
    },

    {
      name: "The people who are crazy enough to think they can change the world are the ones who do",
      description: "Steve Jobs",
    },

    {
      name: "Some business requires many people, I can do it myself! and just might!!!",
      description: "Hello World!",
    },
    {
      name: "Black is the color of the soul, and white is the color of the light.",
      description: "You must trust yourself for change!",
    },
    {
      name: "Your time is limited, so don't waste it living someone else's life.",
      description: "Steve Jobs",
    },
  ];

  return (
    <Carousel navButtonsAlwaysVisible={true}>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}
function Item(props) {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",

          justifyContent: "center",
          "& > :not(style)": {
            m: 1,
            width: 428,
            color: "white",
            backgroundColor: "green",
            height: 128,
          },
        }}
      >
        <Paper>
          <h2>{props.item.name}</h2>
          <p>{props.item.description}</p>
        </Paper>
      </Box>
    </div>
  );
}
export default CarouselExample;
