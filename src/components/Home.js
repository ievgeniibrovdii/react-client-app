import React from 'react';
import NavBar from './Navbar';
import SympleTable from './Table';
import CustomizedSelects from './Select';
import ClientForm from './ClientFormControl';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TypoGraphy from '@material-ui/core/Typography';

function Home() {
  return (
    <div className="App">
      <NavBar />
      <SympleTable />
    </div>
  );
}

export default Home;
