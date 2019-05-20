import * as React from 'react';
import {
    CustomizedSelects,
    ClientForm,
    SimpleTable,
} from '../../containers';

class HomeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            people: [],
            title: '-',
            id: 0,
            fname: '',
            lname: '',
            phone: '',
            age: '',
            gender: true,
            helperfname: '',
            helperlname: '',
            helperphone: '',
            helperage: '',
        };

        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.addPerson = this.addPerson.bind(this);
        this.deletePerson = this.deletePerson.bind(this);
        this.compareBy = this.compareBy.bind(this);
        this.sortBy = this.sortBy.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
        this.handleClearForm = this.handleClearForm.bind(this);
    }

    handleChange = name => event => {
        if (name === 'gender') {
            this.setState({
                gender: event.target.value === 'Male' ? true : false,
            });
        } else {
            const helper = `helper${name}`;
            this.setState({
                [helper]: '',
                [name]: event.target.value,
            });
        }
    };

    formSubmit(event) {
        event.preventDefault();
        const id = this.state.id;
        const fname = this.state.fname;
        const lname = this.state.lname;
        const phone = this.state.phone;
        const age = this.state.age;
        const gender = this.state.gender;
        let flag = true;

        if (fname === '') {
            this.setState({
                helperfname: 'First Name field should not be empty',
            });
            flag = false;
        } else {
            if (!fname.match(/^([\u00c0-\u01ffa-zA-Z'])+$/)) {
                this.setState({
                    helperfname: 'Value of Name is wrong',
                });
                flag = false;
            }
        }

        if (lname === '') {
            this.setState({
                helperlname: 'Last Name field should not be empty',
            });
            flag = false;
        } else {
            if (!lname.match(/^([\u00c0-\u01ffa-zA-Z'])+$/)) {
                this.setState({
                    helperfname: 'Value of Last Name is wrong',
                });
                flag = false;
            }
        }

        if (phone === '') {
            this.setState({
                helperphone: 'Phone field should not be empty',
            });
            flag = false;
        } else {
            if (!phone.match(/^\(?[\d]{3}\)?[\s-]?[\d]{3}[\s-]?[\d]{4}$/)) {
                this.setState({
                    helperphone: 'Value of Phone is wrong',
                });
                flag = false;
            }
        }

        if (age === '') {
            this.setState({
                helperage: 'Age field should not be empty',
            });
            flag = false;
        } else {
            if (!age.match(/^([\u00c0-\u01ff0-9])+$/)) {
                this.setState({
                    helperage: 'Value of Age is wrong',
                });
                flag = false;
            }
        }

        if (flag) {
            this.addPerson(id, fname, lname, phone, age, gender);
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
        this.setState({
            id: this.state.id,
            fname: '',
            lname: '',
            phone: '',
            age: '',
            gender: true,
        });
    }

    handleChangeTitle = event => {
        event.preventDefault();
        const sortFieldName = event.target.value;
        this.setState({ title: sortFieldName });
        this.sortBy(sortFieldName)
    };

    compareBy(key) {
        return function (a, b) {
            if (a[key] < b[key]) return -1;
            if (a[key] > b[key]) return 1;
            return 0;
        };
    }

    sortBy(key) {
        let arrayCopy = [...this.state.people];
        arrayCopy.sort(this.compareBy(key));
        this.setState({people: arrayCopy});
    }

    addPerson(id, fname, lname, phone, age, gender) {
        this.setState(prevState => ({
            people: [...prevState.people, {
                id,
                fname,
                lname,
                phone,
                age,
                gender: gender ? 'Male' : 'Female',
            }],
        }));
    }

    deletePerson(id) {
        return () => {
            this.setState(prevState => ({
                people: prevState.people.filter(person => person.id !== id)
            }));
        };
    }

    render() {
        const clientInfo = {
            id: this.state.id,
            fname: this.state.fname,
            lname: this.state.lname,
            phone: this.state.phone,
            age: this.state.age,
            gender: this.state.gender,
            helperfname: this.state.helperfname,
            helperlname: this.state.helperlname,
            helperphone: this.state.helperphone,
            helperage: this.state.helperage,
        }
        return (
            <React.Fragment>
                <ClientForm
                    handleChange={this.handleChange}
                    formSubmit={this.formSubmit}
                    handleClearForm={this.handleClearForm}
                    clientInfo={clientInfo}
                />
                { this.state.people.length ? (
                    <React.Fragment>
                        <CustomizedSelects
                            title={this.state.title}
                            handleChangeTitle={this.handleChangeTitle}
                        />
                        <SimpleTable
                            compareBy={this.compareBy}
                            sortBy={this.sortBy}
                            addPerson={this.addPerson}
                            deletePerson={this.deletePerson}
                            people={this.state.people}
                        />
                    </React.Fragment>
                ) : null }
            </React.Fragment>
        );
    }
}

export const Home = HomeComponent;
