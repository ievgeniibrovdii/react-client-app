import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import styles from './css/FormStyles';
import TextField from '@material-ui/core/TextField';
import AddButton from './AddButton';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import ClearButton from './ClearButton'


class ClientForm extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      fname: '',
      lname: '',
      phone: '',
      age: '',
      gender: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

   formSubmit(event) {
    event.preventDefault();
    const id = this.state.id;
    const fname = this.state.fname;
    const lname = this.state.lname;
    const phone = this.state.phone;
    const age = this.state.age;
    const gender = this.state.gender;
    this.props.addPerson(id, fname, lname, phone, age, gender);
    this.setState({ id: this.state.id + 1, fname: '', lname: '', phone: '', age: '', gender: ''});
  }

  handleClearForm(event){
    event.preventDefault();
    this.setState({ id: this.state.id, fname: '', lname: '', phone: '', age: '', gender: ''});
  }

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">

        <TextField
          required
          id="standard-required"
          label="First Name"
          className={classes.textField}
          value={this.state.fname}
          onChange={this.handleChange('fname')}
          margin="normal"
        />

        <TextField
          required
          id="standard-required"
          label="Last Name"
          className={classes.textField}
          value={this.state.lname}
          onChange={this.handleChange('lname')}
          margin="normal"
        />

        <TextField
          required
          id="standard-required"
          label="Phone"
          className={classes.textField}
          value={this.state.phone}
          onChange={this.handleChange('phone')}
          margin="normal"
        />

        <TextField
          required
          id="standard-number"
          label="Age"
          value={this.state.age}
          onChange={this.handleChange('age')}
          type="number"
          className={classes.textField}
          margin="normal"
        />

        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel
            ref={ref => {
              this.InputLabelRef = ref;
            }}
            htmlFor="outlined-gender-native-simple"
          >
            Gender
          </InputLabel>
          <Select
            native
            value={this.state.gender}
            onChange={this.handleChange('gender')}
            input={
              <OutlinedInput
                name="gender"
                labelWidth={this.state.labelWidth}
                id="outlined-gender-native-simple"
              />
            }
          >
            <option value="" />
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </Select>
        </FormControl>


        <div className="addButtonWrapper" onClick={this.formSubmit}>
          <AddButton />
        </div>

        <div className="clearButtonWrapper" onClick={this.handleClearForm}>
          <ClearButton />
        </div>

      </form>
    );
  }
}

ClientForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ClientForm);
