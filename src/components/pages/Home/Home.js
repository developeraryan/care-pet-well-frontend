import React from "react";
import HomeSlider from "../../../elements/HomeSlider/HomeSlider";
import FindWrap from "../../../elements/FindWrap/FindWrap";
import Divider from "@mui/material/Divider";
import "./Home.css";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import CountUp from "react-countup";
import Grid from "@mui/material/Grid";
import AdoptionImgWithTxt from "../../../elements/AdoptionImgWithTxt/AdoptionImgWithTxt";
import PetSlider from "../../../elements/PetSlider/PetSlider";

const Home = () => {
  const chooseUsCard = [
    { number: 75, postFix: "%", content: "Dogs are First Bred" },
    { number: 259, postFix: "+", content: "Most Dogs Are First" },
    { number: 39, postFix: "K", content: "Dog Breeding" },
    { number: 45, postFix: "+", content: "Years of History" },
  ];
  return (
    <div>
      <HomeSlider />
      <FindWrap />
      {/* Why Choose us section */}
      <div className="choose_us">
        <Divider>
          <h3>Why Choose Us?</h3>
        </Divider>
        <h1>Best Service to Breed Your Loved Dog Explore</h1>
        <div>
          <Grid container spacing={2}>
            {chooseUsCard.map((card, index) => {
              return (
                <Grid key={index} item xs={12} sm={3} md={3}>
                  <CardContent  className="card_background">
                    <Typography variant="h3" component="div">
                      <CountUp end={card.number} duration={4.75} />
                      <span>{card.postFix}</span>
                    </Typography>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      {card.content}
                    </Typography>
                  </CardContent>
                </Grid>
              );
            })}
          </Grid>
        </div>
      </div>
      {/* Why choose us section end */}

      <AdoptionImgWithTxt />
      <PetSlider/>
    </div>
  );
};

export default Home;
