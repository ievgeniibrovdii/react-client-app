import React from 'react';
import PropTypes from 'prop-types';
import AddIcon from '@material-ui/icons/Add';
import {
    Tooltip,
    Fab,
    withStyles,
} from '@material-ui/core';

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit,
    marginLeft: 20,
  },
  absolute: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 3,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

function AddButtonComponent(props) {
    const { classes } = props;
    return (
        <Tooltip title="Add" aria-label="Add">
            <Fab color="primary" aria-label="Add" className={classes.fab}>
                <AddIcon />
            </Fab>
        </Tooltip>
    );
}

AddButtonComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export const AddButton = withStyles(styles)(AddButtonComponent);
