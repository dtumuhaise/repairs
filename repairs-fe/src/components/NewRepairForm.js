import React from "react";
import { Button, Form, FormGroup, Label, Input, Row, Col } from "reactstrap";
import axios from "axios";
import { API_URL } from "../constants";

class NewRepairForm extends React.Component {
    state = {
        id: 0,
        firstname: "",
        lastname: "",
        phone: "",
        guitar_type: "",
        brand: "",
        model: "",
        serial_number: "",
        color: "",
        repair_notes: "",
        date_of_entry: "",
        repair_status: ""
    };

    componentDidMount() {
        if (this.props.repair) {
            const {
                id,
                firstname,
                lastname,
                phone,
                guitar_type,
                brand,
                model,
                serial_number,
                color,
                repair_notes,
                date_of_entry,
                repair_status
            } = this.props.repair;
            this.setState({
                id,
                firstname,
                lastname,
                phone,
                guitar_type,
                brand,
                model,
                serial_number,
                color,
                repair_notes,
                date_of_entry,
                repair_status
            });
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    createRepair = (e) => {
        e.preventDefault();
        axios.post(API_URL, this.state).then(() => {
            this.props.resetState();
            this.props.toggle();
        });
    };

    editRepair = (e) => {
        e.preventDefault();
        axios.put(API_URL + this.state.id, this.state).then(() => {
            this.props.resetState();
            this.props.toggle();
        });
    };

    defaultIfEmpty = (value) => {
        return value === "" ? "" : value;
    };

    render() {
        return (
            <Form onSubmit={this.props.repair ? this.editRepair : this.createRepair}>
                <Row>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="firstname">First Name:</Label>
                            <Input
                                type="text"
                                name="firstname"
                                tabIndex={1}
                                onChange={this.onChange}
                                value={this.defaultIfEmpty(this.state.firstname)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="phone">Phone:</Label>
                            <Input
                                type="text"
                                name="phone"
                                tabIndex={3}
                                onChange={this.onChange}
                                value={this.defaultIfEmpty(this.state.phone)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="brand">Brand:</Label>
                            <Input
                                type="text"
                                name="brand"
                                tabIndex={5}
                                onChange={this.onChange}
                                value={this.defaultIfEmpty(this.state.brand)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="serial_number">Serial Number:</Label>
                            <Input
                                type="text"
                                name="serial_number"
                                tabIndex={7}
                                onChange={this.onChange}
                                value={this.defaultIfEmpty(this.state.serial_number)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="date_of_entry">Date of Entry:</Label>
                            <Input
                                type="date"
                                name="date_of_entry"
                                tabIndex={9}
                                onChange={this.onChange}
                                value={this.defaultIfEmpty(this.state.date_of_entry)}
                            />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="lastname">Last Name:</Label>
                            <Input
                                type="text"
                                name="lastname"
                                tabIndex={2}
                                onChange={this.onChange}
                                value={this.defaultIfEmpty(this.state.lastname)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="guitar_type">Guitar Type:</Label>
                            <Input
                                type="select"
                                name="guitar_type"
                                tabIndex={4}
                                onChange={this.onChange}
                                value={this.defaultIfEmpty(this.state.guitar_type)}
                            >
                                <option value="Electric">Electric</option>
                                <option value="Acoustic">Acoustic</option>
                                <option value="Bass">Bass</option>
                                <option value="Classical">Classical</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="model">Model:</Label>
                            <Input
                                type="select"
                                name="model"
                                tabIndex={6}
                                onChange={this.onChange}
                                value={this.defaultIfEmpty(this.state.model)}
                            >
                                <option value="Stratocaster">Stratocaster</option>
                                <option value="Telecaster">Telecaster</option>
                                <option value="Les Paul">Les Paul</option>
                                <option value="SG">SG</option>
                                <option value="Hollow Body">Hollow Body</option>
                                <option value="Jazz Bass">Jazz Bass</option>
                                <option value="Precision Bass">Precision Bass</option>
                                <option value="Jazzmaster">Jazzmaster</option>
                                <option value="Acoustic">Acoustic</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="color">Color:</Label>
                            <Input
                                type="text"
                                name="color"
                                tabIndex={8}
                                onChange={this.onChange}
                                value={this.defaultIfEmpty(this.state.color)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="repair_status">Repair Status:</Label>
                            <Input
                                type="select"
                                name="repair_status"
                                tabIndex={10}
                                onChange={this.onChange}
                                value={this.defaultIfEmpty(this.state.repair_status)}
                            >
                                <option value="Not Started">Not Started</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Completed">Completed</option>
                            </Input>
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup>
                    <Label for="repair_notes">Repair Notes:</Label>
                    <Input
                        type="textarea"
                        name="repair_notes"
                        tabIndex={11}
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.repair_notes)}
                    />
                </FormGroup>
                <Button>Create Repair</Button>
            </Form>
        );
    }
}

export default NewRepairForm;
