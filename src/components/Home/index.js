import React from 'react';
import { CustomizedSelects, ClientForm, SimpleTable } from '../../containers';

class HomeComponent extends React.Component {
    render(){
        return (
            <React.Fragment>
                <SimpleTable />
            </React.Fragment>
        );
    }
}

export const Home = HomeComponent;
