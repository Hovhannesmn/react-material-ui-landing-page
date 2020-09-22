import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import { useScrollTrigger } from '@material-ui/core';

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

const Header = props => {
  return (
    <ElevationScroll>
      <AppBar position="fixed" >
        <ToolBar>
          Arc Development
        </ToolBar>
      </AppBar>
    </ElevationScroll>
  );
};

export default Header;