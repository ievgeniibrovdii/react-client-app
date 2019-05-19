import React from 'react';
import PropTypes from 'prop-types';
import { 
  withStyles, 
  InputLabel, 
  MenuItem, 
  FormControl, 
  Select, 
  InputBase, 
} from '@material-ui/core';


const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    width: 120,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit * 1.5,
    marginTop: 30,
    marginLeft: 50,
  },
  bootstrapFormLabel: {
    fontSize: 20,
    marginLeft: 20,
  },
});

class CustomizedSelectsComponent extends React.Component {
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

CustomizedSelectsComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export const CustomizedSelects = withStyles(styles)(CustomizedSelectsComponent);
