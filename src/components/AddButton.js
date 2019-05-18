import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import styles from './css/AddButtonStyles'

function AddButton(props) {
  const { classes } = props;
  return (
    <div>
      <Tooltip title="Add" aria-label="Add">
        <Fab color="primary" aria-label="Add" className={classes.fab}>
          <AddIcon />
        </Fab>
      </Tooltip>
    </div>
  );
}

AddButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddButton);
