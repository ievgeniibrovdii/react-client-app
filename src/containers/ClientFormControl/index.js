import React from 'react';
import PropTypes from 'prop-types';
import { 
  withStyles, 
  TextField, 
  InputLabel, 
  FormControl, 
  Select, 
  OutlinedInput, 
} from '@material-ui/core';
import { AddButton, ClearButton } from '../../components';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: 60,
    marginBottom: 30,
    marginLeft: 50,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 225,
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
  input: {
    width: 30,
  },
});

class ClientFormComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      fname: '',
      lname: '',
      phone: '',
      age: '',
      gender: '',
      helperfname: '',
      helperlname: '',
      helperphone: '',
      helperage: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
  }

  handleChange = name => event => {
    const helper = `helper${name}`;
    this.setState({ 
        [helper]: '',
        [name]: event.target.value, 
    });
  };

   formSubmit(event) {
      event.preventDefault();
      const id = this.state.id;
      const fname = this.state.fname;
      const lname = this.state.lname;
      const phone = this.state.phone;
      const age = this.state.age;
      const gender = this.state.gender;
      if (fname === '') {
          this.setState({
              helperfname: 'Error',
          });
      }
      if (lname === '') {
          this.setState({
              helperlname: 'Error',
          });
      }
      if (phone === '') {
          this.setState({
              helperphone: 'Error',
          });
      }
      if (age === '') {
          this.setState({
              helperage: 'Error',
          });
      }
      if (fname !== '' && lname !== '' && phone !== '' && age !== '' && gender !== '') {
        this.props.addPerson(id, fname, lname, phone, age, gender);
        this.setState({ 
            id: this.state.id + 1, 
            fname: '', 
            lname: '', 
            phone: '', 
            age: '', 
            gender: '',
        });
      }
  }

  handleClearForm(event){
    event.preventDefault();
    this.setState({ id: this.state.id, fname: '', lname: '', phone: '', age: '', gender: ''});
  }

  render() {
    const { classes } = this.props;
    const { 
      helperfname, 
      helperlname, 
      helperphone, 
      helperage,  
    } = this.state;

    return (
      <form className={classes.container} noValidate={false} autoComplete="off">
        <TextField
          required
          error={helperfname === 'Error'}
          id="standard-required"
          label="First Name"
          className={classes.textField}
          value={this.state.fname}
          onChange={this.handleChange('fname')}
          helperText={helperfname}
          margin="normal"
        />
        <TextField
          required
          error={helperlname === 'Error'}
          id="standard-required"
          label="Last Name"
          className={classes.textField}
          value={this.state.lname}
          onChange={this.handleChange('lname')}
          helperText={helperlname}
          margin="normal"
        />
        <TextField
          required
          error={helperphone === 'Error'}
          id="standard-required"
          label="Phone"
          className={classes.textField}
          value={this.state.phone}
          onChange={this.handleChange('phone')}
          helperText={helperphone}
          margin="normal"
        />
        <TextField
          required
          error={helperage === 'Error'}
          id="standard-number"
          label="Age"
          value={this.state.age}
          onChange={this.handleChange('age')}
          type="number"
          inputProps={{ min: 16, max: 100 }}
          className={classes.textField}
          helperText={helperage}
          margin="normal"
        />
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel
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
                labelWidth={0}
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

ClientFormComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export const ClientForm = withStyles(styles)(ClientFormComponent);
