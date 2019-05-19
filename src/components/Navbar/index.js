import React from 'react';
import { 
  List, 
  ListItem, 
  ListItemText, 
  AppBar, 
  Toolbar, 
  Typography, 
} from '@material-ui/core';
import { Link } from 'react-router-dom';

function NavBarComponent(props) {
    const styles = {
        textDecoration: 'none',
        color: 'white'
    }
  
    return (
        <AppBar color="primary" position="static">
            <Toolbar>
                <Typography variant="title"
                  color="inherit"
                >
                    Home Page
                </Typography>
                <List component="nav">
                    <ListItem component="div">
                        <ListItemText inset>
                            <Link style={styles} className="brand" to="/">
                                ClientApp
                            </Link>
                        </ListItemText>
                    </ListItem >
                </List>
            </Toolbar>
        </AppBar>
    );
}

export const NavBar = NavBarComponent;
