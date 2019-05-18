import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import TypoGraphy from '@material-ui/core/Typography'
import { Link, NavLink, withRouter } from 'react-router-dom'

const styles = {
    textDecoration: 'none',
    color: 'white' 
}

function NavBar(props) {
    return (
      <AppBar color="primary" position="static">
        <Toolbar>
          <TypoGraphy variant="title"
            color="inherit"
          >
            Home Page
         </TypoGraphy>
         
         <List component="nav">
             <ListItem component="div">
                 <ListItemText inset>
                       <Link style={styles} className="brand" to="/">ClientApp</Link>
                 </ListItemText>
             </ListItem >
         </List>
        </Toolbar>
      </AppBar>
    )
}


export default withRouter(NavBar);
