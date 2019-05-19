import React from 'react';
import { CustomizedSelects, ClientForm, SimpleTable } from '../../containers';

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
          gender: '',
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
      this.setState({ id: this.state.id, fname: '', lname: '', phone: '', age: '', gender: ''});
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
            people: [...prevState.people, { id, fname, lname, phone, age, gender }]
        }));
    }

    deletePerson(id) {
        return () => {
            this.setState(prevState => ({
                people: prevState.people.filter(person => person.id !== id)
            }));
        };
    }
    
    render(){
        return (
            <React.Fragment>
                <ClientForm 
                  handleChange={this.handleChange}
                  formSubmit={this.formSubmit}
                  handleClearForm={this.handleClearForm}
                  clientInfo={this.state}
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
