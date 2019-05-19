import React from 'react';
import PropTypes from 'prop-types';
import { 
    withStyles, 
    Fab, 
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

function ClearButtonComponent(props) {
    const { classes } = props;
    return (
        <Fab variant="extended" aria-label="Edit" className={classes.fab}>
            Clear
        </Fab>
    );
}

ClearButtonComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export const ClearButton = withStyles(styles)(ClearButtonComponent);
