import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';

const Header = props => {
  return (
    <AppBar position="fixed" color="red">
      <ToolBar>
        Arc Development
      </ToolBar>
    </AppBar>
  );
};

export default Header;