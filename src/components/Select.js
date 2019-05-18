import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SelectStyles from './css/SelectStyles'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import BootstrapInput from './css/BootstrapInput'

class CustomizedSelects extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
    };
    this.handleChangeSort = this.handleChangeSort.bind(this);
  }

  handleChangeSort = event => {
    this.setState({ title: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.root} autoComplete="off">

        <FormControl className={classes.margin}>
          <InputLabel htmlFor="title-customized-select" className={classes.bootstrapFormLabel}>
            Sort by:
          </InputLabel>
          <Select
            selected="selected"
            value={this.state.data}
            onChange={this.handleChangeSort}
            input={<BootstrapInput name="title" id="title-customized-select" />}
          >
            <MenuItem value="All">
              <em>-</em>
            </MenuItem>
            <MenuItem value="First Name">First Name</MenuItem>
            <MenuItem value="Last Name">Last Name</MenuItem>
            <MenuItem value="Phone">Phone</MenuItem>
            <MenuItem value="Age">Age</MenuItem>
            <MenuItem value="Gender">Gender</MenuItem>
          </Select>
        </FormControl>

      </form>
    );
  }
}

CustomizedSelects.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(SelectStyles)(CustomizedSelects);
