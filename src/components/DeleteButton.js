import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import styles from './css/DeleteButtonStyles';

function DeleteButton(props) {
  const { classes } = props;
  return (
    <div>
    <Button variant="contained" color="secondary" className={classes.button}>
      Delete
      <DeleteIcon className={classes.rightIcon} />
    </Button>

    </div>
  );
}

DeleteButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DeleteButton);
