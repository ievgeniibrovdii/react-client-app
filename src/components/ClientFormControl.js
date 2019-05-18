import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import styles from './css/FormStyles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import AddButton from './AddButton';
import FormLabel from '@material-ui/core/FormLabel'
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/Select';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';


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
      </form>
    );
  }
}

ClientForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ClientForm);



/*import React from 'react';
import MaterialUIForm from 'react-material-ui-form'
import JssProvider from 'react-jss/lib/JssProvider';
import FormLabel from '@material-ui/core/FormLabel'
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/Select';
import Select from '@material-ui/core/Select';
import formStyles from './css/FormStyles'
import { withStyles } from '@material-ui/core/styles'


class MyForm extends React.Component {
  submit = (values, pristineValues) => {
    // get all values and pristineValues on form submission
  }

  customInputHandler = (value, { name }, event) => {
    // the form will update the field as usual, and then call this handler
    // if you want to have complete control of the field, change the "value" prop to "defaultValue"
  }

  customToggleHandler = (checked, { name, value }, event) => {
    // the form will update the field as usual, and then call this handler
    // if you want to have complete control of the field, change the "value" prop to "defaultValue"
  }

  render() {
    return (
      <JssProvider>
        <MaterialUIForm onSubmit={this.submit}>
          <TextField label="Name" type="text" name="name" value="" data-validators="isRequired,isAlpha" onChange={this.customInputHandler} />

          <fieldset>
            <legend>Nested</legend>
            <Checkbox checked name="love" value="yes" onChange={this.customToggleHandler} />
            <span>I love it</span>

            <FormControl required>
              <InputLabel>Age</InputLabel>
              <Select value="" name="age">
                <MenuItem value=""><em>Please select your age ...</em></MenuItem>
                <MenuItem value={10}>Teens</MenuItem>
                <MenuItem value={20}>Twenties</MenuItem>
                <MenuItem value={30}>Thirties</MenuItem>
                <MenuItem value="40+">Fourties +</MenuItem>
              </Select>
              <FormHelperText>Some important helper text</FormHelperText>
            </FormControl>
          </fieldset>

          <FormControl>
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup aria-label="Gender" name="gender"  value="male">
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>

          <Button variant="raised" type="reset">Reset</Button>
          <Button variant="raised" type="submit">Submit</Button>
        </MaterialUIForm>
      </JssProvider>
    )
  }
}

export default withStyles(formStyles)(MyForm); */
