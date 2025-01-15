import React from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  Grid,
} from "@mui/material";  // Updated import for MUI v5
import ExploreIcon from "@mui/icons-material/Explore";  // Updated icon import
import RestaurantIcon from "@mui/icons-material/Restaurant";  // Updated icon import
import HotelIcon from "@mui/icons-material/Hotel";  // Updated icon import
import LocalActivityIcon from "@mui/icons-material/LocalActivity";  // Updated icon import
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";  // Updated icon import
import { makeStyles } from "@mui/styles";
import backgroundImage from "../assets/images/newHotelPage.png";



const Hero = () => {
  const classes = useStyles();

  const handleExploreClick = () => {
    // Example: Smooth scroll to the main content section
    const mainContent = document.getElementById("main-content");
    if (mainContent) {
      mainContent.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={classes.landingSection} id="hero">
      <Container  maxWidth="lg" className={classes.landingContent}>
        
        <Box display="flex" alignItems="center" flexDirection="column">
          <ExploreIcon className={classes.landingIcon} />
          <Typography variant="h2" className={classes.landingTitle}>
            Discover Your Next Adventure
          </Typography>
          <Typography variant="h5" className={classes.landingSubtitle}>
            Find the best places to eat, stay, and explore near you, now with
            AI-powered recommendations.
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={4} className={classes.categoryItem}>
              <RestaurantIcon className={classes.categoryIcon} />
              <Typography variant="h6" className={classes.categoryTitle}>
                Restaurants
              </Typography>
              <Typography variant="body1" className={classes.categoryText}>
                Discover the best dining experiences, from local favorites to
                top-rated eateries.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4} className={classes.categoryItem}>
              <HotelIcon className={classes.categoryIcon} />
              <Typography variant="h6" className={classes.categoryTitle}>
                Hotels
              </Typography>
              <Typography variant="body1" className={classes.categoryText}>
                Find the perfect place to stay, with options ranging from budget
                to luxury.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4} className={classes.categoryItem}>
              <LocalActivityIcon className={classes.categoryIcon} />
              <Typography variant="h6" className={classes.categoryTitle}>
                Attractions
              </Typography>
              <Typography variant="body1" className={classes.categoryText}>
                Explore popular attractions and hidden gems that make your trip
                memorable.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4} className={classes.categoryItem}>
              <EmojiObjectsIcon className={classes.categoryIcon} />
              <Typography variant="h6" className={classes.categoryTitle}>
                AI Recommendations
              </Typography>
              <Typography variant="body1" className={classes.categoryText}>
                Get personalized suggestions powered by AI to make your trip
                even more special.
              </Typography>
            </Grid>
          </Grid>
          <Button
            variant="contained"
            color="primary"
            className={classes.landingButton}
            onClick={handleExploreClick}
          >
            Explore Now
          </Button>
        </Box>
      </Container>
    </section>
  );
};

const useStyles = makeStyles((theme) => ({
  landingSection: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    color: theme.palette.common.orange,
    position: "relative",
    marginBottom: "20px",
  },
  landingContent: {
    textAlign: "center",
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  landingIcon: {
    fontSize: "6rem",
    marginBottom: theme.spacing(2),
    color: theme.palette.common.white,
    animation: `$fadeIn 2s ${theme.transitions.easing.easeInOut}`,
  },
  landingTitle: {
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 700,
    marginBottom: theme.spacing(4),
    animation: `$fadeIn 2.5s ${theme.transitions.easing.easeInOut}`,
  },
  landingSubtitle: {
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 400,
    marginBottom: theme.spacing(4),
    animation: `$fadeIn 3s ${theme.transitions.easing.easeInOut}`,
  },
  landingButton: {
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 600,
    borderRadius: theme.spacing(3),
    padding: theme.spacing(1.5, 4),
    marginTop: theme.spacing(3),
    backgroundColor: "#ff7e5f",
    "&:hover": { backgroundColor: "#feb47b" },
    animation: `$fadeIn 3.5s ${theme.transitions.easing.easeInOut}`,
  },
  categoryItem: {
    textAlign: "center",
    animation: `$fadeIn 4s ${theme.transitions.easing.easeInOut}`,
  },
  categoryIcon: {
    fontSize: "3rem",
    marginBottom: theme.spacing(1),
    color: theme.palette.common.orange,
  },
  categoryTitle: {
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 600,
    marginBottom: theme.spacing(1),
    color: theme.palette.common.orange,
  },
  categoryText: {
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 400,
    color: theme.palette.common.orange,
  },
  "@keyframes fadeIn": {
    "0%": { opacity: 0 },
    "100%": { opacity: 1 },
  },


  
}));

export default Hero;
