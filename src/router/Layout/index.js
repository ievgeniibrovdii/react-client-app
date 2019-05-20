import * as React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { Home } from '../../containers';

class LayoutComponent extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact={true} path='/' component={Home} />
            </Switch>
        );
    }
}

export const Layout = withRouter(LayoutComponent);
