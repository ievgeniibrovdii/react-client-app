import * as React from 'react';
import { Layout, NavBar } from './components';
import { BrowserRouter } from 'react-router-dom';

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <BrowserRouter>
                    <NavBar />
                    <Layout />
                </BrowserRouter>
            </React.Fragment>
        );
    }
}

export default App;
