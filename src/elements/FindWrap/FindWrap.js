import React from "react";
import "./FindWrap.css";
import { Container, Row, Col } from "react-grid-system";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import PetsIcon from "@mui/icons-material/Pets";
import FlutterDashIcon from "@mui/icons-material/FlutterDash";
import EmojiNatureIcon from "@mui/icons-material/EmojiNature";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import InputBase from "@mui/material/InputBase";

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  height: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const FindWrap = () => {
  return (
    <div>
      <Container className="search_box">
        <Grid container spacing={1}>
         
            <Grid className="search_block" item xs={12} sm={3} md={3}>
          
              <div className="search_bar">
              <FmdGoodIcon />
              <StyledInputBase
                  placeholder="Enter your City,State.."
                  inputProps={{ "aria-label": "search" }}
                />
              </div>  
                
            
            </Grid>
            <Grid className="search_block orange" item xs={12} sm={3} md={3}>
            
                <h5>
                  <PetsIcon />
                  Find Your Dog
                </h5>
              
            </Grid>
            <Grid  className="search_block orange" item xs={12} sm={2} md={2}>
             
                <h5>
                  <EmojiNatureIcon />
                  Find Your Cat
                </h5>
             
            </Grid>
            <Grid className="search_block orange" item xs={12} sm={2} md={2}>
              
                <h5>
                  <FlutterDashIcon />
                  Find Your Birds
                </h5>
          
            </Grid>
            <Grid className="search_block" item xs={12} sm={2} md={2}>
              
                <h5>
                  Find Other Pets
                  <ArrowDropDownIcon />
                </h5>
           
            </Grid>
        
        </Grid>
      </Container>
    </div>
  );
};

export default FindWrap;
