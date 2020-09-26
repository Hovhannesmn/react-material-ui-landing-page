import React, { useCallback, useState } from 'react';

import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import { useScrollTrigger } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const ElevationScroll = props => {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};

const useStyles = makeStyles(theme => {
  return ({
    toolbarMargin: {
      ...theme.mixins.toolbar,
      marginBottom: '3em',
    },
    logo: {
      height: '7em',
    },
    tabContainer: {
      marginLeft: 'auto',
    },
    tab: {
      ...theme.typography.tab,
      minWidth: 10,
      marginLeft: '25px',
    },
    button: {
      ...theme.typography.estimate,
      borderRadius: '50px',
      marginLeft: '50px',
      marginRight: '25px',
      height: '45px',
    }
  })
});

const Header = props => {
  const classes = useStyles();
  const [activeTab, setActiveTab] = useState(0);

  const handleChangeTab = useCallback((e, value) => {
    setActiveTab(value);
  }, []);

  return (
    <ElevationScroll>
      <AppBar position="fixed" color="secondary">
        <ToolBar disableGutters>
          <Typography>
            Arc Development
          </Typography>
          <Tabs
            value={activeTab}
            onChange={handleChangeTab}
            className={classes.tabContainer}
            indicatorColor="primary"
          >
              <Tab className={classes.tab} label="Home" />
              <Tab className={classes.tab} label="Services" />
              <Tab className={classes.tab} label="The Revolution" />
              <Tab className={classes.tab} label="About us" />
              <Tab className={classes.tab} label="Contact us" />
            </Tabs>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              free estimate
            </Button>
        </ToolBar>
      </AppBar>
    </ElevationScroll>
  );
};

export default Header;
