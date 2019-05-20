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
    render() {
        const { classes } = this.props;
        const {
            helperfname,
            helperlname,
            helperphone,
            helperage,
        } = this.props.clientInfo;

        return (
            <form className={classes.container} noValidate={false} autoComplete="off">
                <TextField
                    required={true}
                    error={helperfname === 'First Name field should not be empty' || helperfname === 'Value of Name is wrong'}
                    id="standard-required"
                    label="First Name"
                    className={classes.textField}
                    value={this.props.clientInfo.fname}
                    onChange={this.props.handleChange('fname')}
                    helperText={helperfname}
                    margin="normal"
                />
                <TextField
                    required={true}
                    error={helperlname === 'Last Name field should not be empty' || helperlname === 'Value of Last Name is wrong'}
                    id="standard-required"
                    label="Last Name"
                    className={classes.textField}
                    value={this.props.clientInfo.lname}
                    onChange={this.props.handleChange('lname')}
                    helperText={helperlname}
                    margin="normal"
                />
                <TextField
                    required={true}
                    error={helperphone === 'Phone field should not be empty' || helperphone === 'Value of Phone is wrong'}
                    id="standard-required"
                    label="Phone"
                    className={classes.textField}
                    value={this.props.clientInfo.phone}
                    onChange={this.props.handleChange('phone')}
                    helperText={helperphone}
                    margin="normal"
                />
                <TextField
                    required={true}
                    error={helperage === 'Age field should not be empty' || helperage === 'Value of Age is wrong'}
                    id="standard-number"
                    label="Age"
                    value={this.props.clientInfo.age}
                    onChange={this.props.handleChange('age')}
                    className={classes.textField}
                    helperText={helperage}
                    margin="normal"
                />
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel htmlFor="outlined-gender-native-simple">
                        Gender
                    </InputLabel>
                    <Select
                        native={true}
                        value={this.props.clientInfo.gender ? 'Male' : 'Female'}
                        onChange={this.props.handleChange('gender')}
                        input={
                            <OutlinedInput
                                name="gender"
                                labelWidth={0}
                            />
                        }
                    >
                        <option value="Male" checked={this.props.clientInfo.gender}>Male</option>
                        <option value="Female" checked={!this.props.clientInfo.gender}>Female</option>
                    </Select>
                </FormControl>
                <div className="addButtonWrapper" onClick={this.props.formSubmit}>
                    <AddButton />
                </div>
                <div className="clearButtonWrapper" onClick={this.props.handleClearForm}>
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
