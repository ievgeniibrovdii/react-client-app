import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SelectStyles from './css/SelectStyles'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import BootstrapInput from './css/BootstrapInput';

class CustomizedSelects extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '-',
    };
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
  }

  handleChangeTitle = event => {
    event.preventDefault();
    const sortFieldName = event.target.value;
    this.setState({ title: sortFieldName });
    this.props.sortBy(sortFieldName)
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
            value={this.state.title}
            onChange={this.handleChangeTitle}
            input={<BootstrapInput name="title" id="title-customized-select" />}
          >
            <MenuItem value="-">
              <em>-</em>
            </MenuItem>
            <MenuItem value="fname">First Name</MenuItem>
            <MenuItem value="lname">Last Name</MenuItem>
            <MenuItem value="phone">Phone</MenuItem>
            <MenuItem value="age">Age</MenuItem>
            <MenuItem value="gender">Gender</MenuItem>
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
