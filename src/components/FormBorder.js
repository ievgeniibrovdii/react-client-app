import React, { Component } from 'react';
import ClientForm from './ClientFormControl'
import { withStyles } from '@material-ui/core/styles';
import styles from './css/FormStyles';

class FormBorder extends Component {
  render(){
    return (
      <div className="formTemplate">
        <ClientForm />
      </div>
    );
  }
}

export default withStyles(styles)(FormBorder);
