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
import { CustomizedSelects } from '../Select'
import { ClientForm } from '../';

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
  constructor(props) {
      super(props);
      this.state = { people: [] };
      this.addPerson = this.addPerson.bind(this);
      this.deletePerson = this.deletePerson.bind(this);
      this.compareBy = this.compareBy.bind(this);
      this.sortBy = this.sortBy.bind(this);
  }

  compareBy(key) {
      return function (a, b) {
          if (a[key] < b[key]) return -1;
          if (a[key] > b[key]) return 1;
          return 0;
      };
  }

  sortBy(key) {
      let arrayCopy = [...this.state.people];
      arrayCopy.sort(this.compareBy(key));
      this.setState({people: arrayCopy});
  }

  addPerson(id, fname, lname, phone, age, gender) {
      this.setState(prevState => ({
          people: [...prevState.people, { id, fname, lname, phone, age, gender }]
      }));
  }

  deletePerson(id) {
      return () => {
          this.setState(prevState => ({
              people: prevState.people.filter(person => person.id !== id)
          }));
      };
  }

  render() {
      const { classes } = this.props;
      const { people } = this.state;

      return (
          <div className="clientTableForm">
            <ClientForm addPerson={this.addPerson}/>
            { people.length ? (
                <React.Fragment>
                    <CustomizedSelects sortBy={this.sortBy}/>
                    <Paper className={classes.root}>
                        <Table className={classes.table}>
                            <TableHead>
                                <TableRow>
                                    <CustomTableCell onClick={() => this.sortBy('fname')} align="center">First Name</CustomTableCell>
                                    <CustomTableCell onClick={() => this.sortBy('lname')} align="center">Last Name</CustomTableCell>
                                    <CustomTableCell onClick={() => this.sortBy('phone')} align="center">Phone</CustomTableCell>
                                    <CustomTableCell onClick={() => this.sortBy('age')} align="right">Age</CustomTableCell>
                                    <CustomTableCell onClick={() => this.sortBy('gender')} align="right">Gender</CustomTableCell>
                                    <CustomTableCell align="right"></CustomTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.people.map(row => (
                                    <TableRow key={row.id}>
                                        <CustomTableCell align="center">{row.fname}</CustomTableCell>
                                        <CustomTableCell align="center">{row.lname}</CustomTableCell>
                                        <CustomTableCell align="center">{row.phone}</CustomTableCell>
                                        <CustomTableCell align="right">{row.age}</CustomTableCell>
                                        <CustomTableCell align="right">{row.gender}</CustomTableCell>
                                        <CustomTableCell align="left" onClick={this.deletePerson(row.id)}>
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
            ) : null }
          </div>
        );
    }
}

SimpleTableComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export const SimpleTable = withStyles(styles)(SimpleTableComponent);
