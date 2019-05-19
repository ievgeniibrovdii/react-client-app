import React from 'react';
import PropTypes from 'prop-types';
import { 
    withStyles, 
    Button, 
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = theme => ({
    fab: {
        margin: theme.spacing.unit * 2,
    },
    button: {
        margin: theme.spacing.unit,
    },
    absolute: {
        position: 'absolute',
        bottom: theme.spacing.unit * 2,
        right: theme.spacing.unit * 3,
    },
});

function DeleteButtonComponent(props) {
    const { classes } = props;
    return (
        <Button variant="contained" color="secondary" className={classes.button}>
            Delete
            <DeleteIcon className={classes.rightIcon} />
        </Button>
    );
}

DeleteButtonComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export const DeleteButton = withStyles(styles)(DeleteButtonComponent);
