import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";

import logo from "../../assets/logo.svg";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
}

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em"
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.25em"
    }
  },
  logo: {
    height: "8em",
    [theme.breakpoints.down("md")]: {
      height: "7em"
    },
    [theme.breakpoints.down("xs")]: {
      height: "5.5em"
    }
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  tabContainer: {
    marginLeft: "auto"
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px"
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    height: "45px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light
    },
  },
}));

const routes = [
  { name: "Home", link: "/", activeIndex: 0 },
  {
    name: "Services",
    link: "/services",
    activeIndex: 1,
    // ariaOwns: anchorEl ? "simple-menu" : undefined,
    // ariaPopup: anchorEl ? "true" : undefined,
    // mouseOver: event => handleClick(event)
  },
  { name: "The Revolution", link: "/revolution", activeIndex: 2 },
  { name: "About Us", link: "/about", activeIndex: 3 },
  { name: "Contact Us", link: "/contact", activeIndex: 4 }
];


export default function Header(props) {
  const classes = useStyles();
  const [activeTab, setActiveTab] = useState(0);

  const handleChangeTab = useCallback((e, value) => {
    setActiveTab(value);
  }, []);

  const tabs = (
    <React.Fragment>
      {routes.map((route, index) => (
        <Tab
          key={`${route}${index}`}
          className={classes.tab}
          component={Link}
          to={route.link}
          label={route.name}
          // aria-owns={route.ariaOwns}
          // aria-haspopup={route.ariaPopup}
          // onMouseOver={route.mouseOver}
        />
      ))}
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" className={classes.appbar}>
          <Toolbar disableGutters>
            <Button
              component={Link}
              to="/"
              disableRipple
              onClick={() => {}}
              className={classes.logoContainer}
            >
              <img alt="company logo" className={classes.logo} src={logo} />
            </Button>
            {tabs}
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              free estimate
            </Button>

          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}