import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import img from "../../assests/images/adoptiontxtimage/adoption_img.jpg";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import "./PetSlider.css";
import Divider from "@mui/material/Divider";
import PetsIcon from "@mui/icons-material/Pets";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";


const PetSlider = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const images = [
    {
      url: `${img}`,
      title: "Husky",
      width: "90%",
    },
    {
      url: `${img}`,
      title: "Doberman",
      width: "90%",
    },
    {
      url: `${img}`,
      title: "German Shephard",
      width: "90%",
    },
  ];

  const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: "relative",
    height: 200,
    [theme.breakpoints.down("sm")]: {
      width: "100% !important", // Overrides inline-style
      height: 100,
    },
    "&:hover, &.Mui-focusVisible": {
      zIndex: 1,
      "& .MuiImageBackdrop-root": {
        opacity: 0.15,
      },
      "& .MuiImageMarked-root": {
        opacity: 0,
      },
      "& .MuiTypography-root": {
        border: "4px solid currentColor",
      },
    },
  }));

  const ImageSrc = styled("span")({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
  });

  const Image = styled("span")(({ theme }) => ({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
  }));

  const ImageBackdrop = styled("span")(({ theme }) => ({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity"),
  }));

  const ImageMarked = styled("span")(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  }));

  return (
    <div className="pet_slider_main">
      <Divider>
        <h3>Service to Breeds</h3>
      </Divider>
      <h1>Most Popular Dog Breed</h1>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid xs={12} sm={8} md={8}>
          <div>
            <Carousel
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              autoPlaySpeed={1000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              {images.map((image, index) => (
                <div key={index}>
                  <ImageButton
                    focusRipple
                    key={image.title}
                    style={{
                      width: image.width,
                    }}
                  >
                    <ImageSrc
                      style={{ backgroundImage: `url(${image.url})` }}
                    />
                    <ImageBackdrop className="MuiImageBackdrop-root" />
                    <Image>
                      <Typography
                        component="span"
                        variant="subtitle1"
                        color="inherit"
                        sx={{
                          position: "relative",
                          p: 4,
                          pt: 2,
                          pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                        }}
                      >
                        {image.title}
                        <ImageMarked className="MuiImageMarked-root" />
                      </Typography>
                    </Image>
                  </ImageButton>
                </div>
              ))}
            </Carousel>
          </div>
        </Grid>
        <Grid xs={12} sm={4} md={4}>
        <div className="pet_slider_card">
          <Card sx={{ minWidth: 275 }} className="pet_slider_card_full">
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="white" gutterBottom>
               | Dog Breeder
              </Typography>
              <Typography variant="h5" component="div" color="white">
              Available for Breed
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="white">
                adjective
              </Typography>
              <Typography variant="body2" color="white" >
                 The best overall dog DNA test is Embark Breed & Health Kit (view at Chewy), which provid dogs
               
              </Typography>
            </CardContent>
            <CardActions>
            <Button variant="contained" className="pet_slider_card_btn" >More Pets...<PetsIcon/></Button>
            </CardActions>
          </Card>
        </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default PetSlider;
