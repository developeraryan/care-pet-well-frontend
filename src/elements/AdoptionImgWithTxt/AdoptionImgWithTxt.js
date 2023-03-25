import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import "./AdoptionImgWithTxt.css";
import Button from "@mui/material/Button";
import PetsIcon from "@mui/icons-material/Pets";
import img from "../../assests/images/adoptiontxtimage/adoption_img.jpg";
import cut from "../../assests/images/header/header_shape.png";

const AdoptionImgWithTxt = () => {
  return (
    <div className="adoption_background">
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid xs={12} sm={6} md={6}>
          <div className="left_text_side">
            <h1>
              <b>
                Working For Dog <span className="heading_txt">Adoption</span>{" "}
                Free, Happy Time
              </b>
            </h1>
            <h4>The best overall dog DNA test is Embark Breed & Health Kit (view at Chewy), which provides you with a breed brwn and information.</h4>
            <Button
              variant="contained"
              className="left_side_btn"
              style={{ backgroundColor: "#f04336" }}
            >
              Adoption <PetsIcon />
            </Button>
          </div>
        </Grid>
        <Grid xs={12} sm={6} md={6}>
          <div>
            <img src={cut} alt="dog" className="dog_image_top" />
            <img src={img} alt="dog" className="dog_image" />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default AdoptionImgWithTxt;
