import * as React from 'react';
import PropTypes from 'prop-types';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Paper,
    Tooltip,
    withStyles,
} from '@material-ui/core';
import { DeleteButton } from '../../components';

const styles = theme => ({
    root: {
        width: '89%',
        marginTop: theme.spacing.unit * 3,
        marginLeft: 50,
        overflowX: 'auto',
    },
});

export const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        fontSize: 17,
    },
    body: {
        fontSize: 15,
    },
}))(TableCell);

class SimpleTableComponent extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div className="clientTable">
                <React.Fragment>
                    <Paper className={classes.root}>
                        <Table className={classes.table}>
                            <TableHead>
                                <TableRow>
                                    <CustomTableCell onClick={() => this.props.sortBy('fname')} align="center">First Name</CustomTableCell>
                                    <CustomTableCell onClick={() => this.props.sortBy('lname')} align="center">Last Name</CustomTableCell>
                                    <CustomTableCell onClick={() => this.props.sortBy('phone')} align="center">Phone</CustomTableCell>
                                    <CustomTableCell onClick={() => this.props.sortBy('age')} align="right">Age</CustomTableCell>
                                    <CustomTableCell onClick={() => this.props.sortBy('gender')} align="right">Gender</CustomTableCell>
                                    <CustomTableCell align="right"></CustomTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.props.people.map(row => (
                                    <TableRow key={row.id}>
                                        <CustomTableCell align="center">{row.fname}</CustomTableCell>
                                        <CustomTableCell align="center">{row.lname}</CustomTableCell>
                                        <CustomTableCell align="center">{row.phone}</CustomTableCell>
                                        <CustomTableCell align="right">{row.age}</CustomTableCell>
                                        <CustomTableCell align="right">{row.gender}</CustomTableCell>
                                        <CustomTableCell align="left" onClick={this.props.deletePerson(row.id)}>
                                            <Tooltip title="Delete">
                                                <DeleteButton  />
                                            </Tooltip>
                                        </CustomTableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Paper>
                </React.Fragment>
            </div>
        );
    }
}

SimpleTableComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export const SimpleTable = withStyles(styles)(SimpleTableComponent);
