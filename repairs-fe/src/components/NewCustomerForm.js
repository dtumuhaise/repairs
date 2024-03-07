import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";
import { API_URL_C } from "../constants";

class NewStudentForm extends React.Component {
    state = {
        id: 0,
        firstname: "",
        lastname: "",
        phone: ""
    };

    componentDidMount() {
        if (this.props.customer) {
            const { id, firstname, lastname, phone } = this.props.student;
            this.setState({ id, firstname, lastname, phone });
        }
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    createCustomer = e => {
        e.preventDefault();
        axios.post(API_URL_C, this.state).then(() => {
           console.log("New Customer Created");

           this.setState({
                firstname: "",
                lastname: "",
                phone: ""
           })
        });
    }

    editCustomer = e => {
        e.preventDefault();
        axios.put(API_URL_C + this.state.id, this.state).then(() => {
            // this.props.resetState();
            this.props.toggle();
        });
    }

    defaultIfEmpty = value => {
        return value === "" ? "" : value;
    }

    render() {
    
    return (
        <Form onSubmit={this.props.customer ? this.editCustomer : this.createCustomer}>
            <FormGroup>
                <Label for="firstname">First Name:</Label>
                <Input
                     type="text" 
                     name="firstname" 
                     onChange={this.onChange}
                     value={this.defaultIfEmpty(this.state.firstname)}
                />
            </FormGroup>

            <FormGroup>
                <Label for="firstname">Last Name:</Label>
                <Input
                     type="text" 
                     name="lastname" 
                     onChange={this.onChange}
                     value={this.defaultIfEmpty(this.state.lastname)}
                />
            </FormGroup>

            <FormGroup>
                <Label for="firstname">Phone:</Label>
                <Input
                     type="text" 
                     name="phone" 
                     onChange={this.onChange}
                     value={this.defaultIfEmpty(this.state.phone)}
                />
            </FormGroup>

            <Button>Send</Button>
        </Form>
    );
};
}

export default NewStudentForm;
