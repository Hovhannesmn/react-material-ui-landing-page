import React from 'react';
import Header from './ui/Header';
import ToolBar from '@material-ui/core/Toolbar/Toolbar';

const App = props => {
  return (
    <div>
      <Header />
      {
        [
          ...new Array(120)
        ].map(
          () => ` In your terminal, navigate to the repo you want to make the changes in. Execute git config --list to check current username & email in your local repo.
             Change username & email as desired. Make it a global change or specific to the local repo: git config [--global] user.name "Full Name" Done!`
        ).join('\n')
      }
      Hello
    </div>
  );
};

export default App;
