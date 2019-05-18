import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import styles from './css/AddButtonStyles'

function ClearButton(props) {
  const { classes } = props;
  return (
    <div>
      <Fab variant="extended" aria-label="Edit" className={classes.fab}>
          Clear
      </Fab>
    </div>
  );
}

ClearButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ClearButton);
