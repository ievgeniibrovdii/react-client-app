import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import AddButton from './AddButton'
import DeleteButton from './DeleteButton'
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import ClientForm from './ClientFormControl'
import { CustomTableCell } from './css/TableStyles'
import { styles } from './css/TableStyles'

class SimpleTable extends React.Component {
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

    return (
      <div className="mainTable">
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
                <CustomTableCell align="center" >
                  {row.fname}
                </CustomTableCell>
                <CustomTableCell align="center">{row.lname}</CustomTableCell>
                <CustomTableCell align="center">{row.phone}</CustomTableCell>
                <CustomTableCell align="right">{row.age}</CustomTableCell>
                <CustomTableCell align="right">{row.gender}</CustomTableCell>
                <Tooltip title="Delete">
                  <IconButton aria-label="Delete">
                    <div className="deleteButtonWrapper" onClick={this.deletePerson(row.id)}>
                      <DeleteButton />
                    </div>
                  </IconButton>
                </Tooltip>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>

      <ClientForm addPerson={this.addPerson}/>
      </div>
    );
  }
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
