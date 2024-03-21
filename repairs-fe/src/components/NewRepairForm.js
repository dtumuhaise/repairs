import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input, Row, Col } from "reactstrap";
import axios from "axios";
import { API_URL } from "../constants";

const NewRepairForm = ({ repair, resetState, toggle }) => {
    const [formData, setFormData] = useState({
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
    });

    useEffect(() => {
        if (repair) {
            setFormData(repair);
        }
    }, [repair]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const url = repair ? `${API_URL}${formData.id}/` : API_URL;
        const method = repair ? "put" : "post";
        axios[method](url, formData).then(() => {
            resetState();
            toggle();
        });
    };

    const handleDelete = () => {
        if (window.confirm("Are you sure you want to delete this repair?")) {
            axios.delete(`${API_URL}${formData.id}/`).then(() => {
                resetState();
                toggle();
            });
        }
    };

    const defaultIfEmpty = (value) => (value ? value : "");

    return (
        <Form onSubmit={handleSubmit}>
            <Row>
                {/* First Column */}
                <Col md={6}>
                    <FormGroup>
                        <Label for="firstname">First Name: <span className="text-danger">*</span></Label>
                        <Input
                            type="text"
                            name="firstname"
                            tabIndex={1}
                            onChange={handleChange}
                            value={defaultIfEmpty(formData.firstname)}
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="phone">Phone: <span className="text-danger">*</span></Label>
                        <Input
                            type="text"
                            name="phone"
                            tabIndex={3}
                            onChange={handleChange}
                            value={defaultIfEmpty(formData.phone)}
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="brand">Brand: <span className="text-danger">*</span></Label>
                        <Input
                            type="text"
                            name="brand"
                            tabIndex={5}
                            onChange={handleChange}
                            value={defaultIfEmpty(formData.brand)}
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="serial_number">Serial Number: <span className="text-danger">*</span></Label>
                        <Input
                            type="text"
                            name="serial_number"
                            tabIndex={7}
                            onChange={handleChange}
                            value={defaultIfEmpty(formData.serial_number)}
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="date_of_entry">Date of Entry: <span className="text-danger">*</span></Label>
                        <Input
                            type="date"
                            name="date_of_entry"
                            tabIndex={9}
                            onChange={handleChange}
                            value={defaultIfEmpty(formData.date_of_entry)}
                            required
                        />
                    </FormGroup>
                </Col>
                {/* Second Column */}
                <Col md={6}>
                    <FormGroup>
                        <Label for="lastname">Last Name: <span className="text-danger">*</span></Label>
                        <Input
                            type="text"
                            name="lastname"
                            tabIndex={2}
                            onChange={handleChange}
                            value={defaultIfEmpty(formData.lastname)}
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="guitar_type">Guitar Type: <span className="text-danger">*</span></Label>
                        <Input
                            type="select"
                            name="guitar_type"
                            tabIndex={4}
                            onChange={handleChange}
                            value={defaultIfEmpty(formData.guitar_type)}
                            required
                        >
                            <option value="">Select Guitar Type</option>
                            <option value="Electric">Electric</option>
                            <option value="Acoustic">Acoustic</option>
                            <option value="Bass">Bass</option>
                            <option value="Classical">Classical</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="model">Model: <span className="text-danger">*</span></Label>
                        <Input
                            type="select"
                            name="model"
                            tabIndex={6}
                            onChange={handleChange}
                            value={defaultIfEmpty(formData.model)}
                            required
                        >
                            <option value="">Select Model</option>
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
                        <Label for="color">Color: <span className="text-danger">*</span></Label>
                        <Input
                            type="text"
                            name="color"
                            tabIndex={8}
                            onChange={handleChange}
                            value={defaultIfEmpty(formData.color)}
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="repair_status">Repair Status: <span className="text-danger">*</span></Label>
                        <Input
                            type="select"
                            name="repair_status"
                            tabIndex={10}
                            onChange={handleChange}
                            value={defaultIfEmpty(formData.repair_status)}
                            required
                        >
                            <option value="">Select Repair Status</option>
                            <option value="Not Started">Not Started</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Completed">Completed</option>
                        </Input>
                    </FormGroup>
                </Col>
            </Row>
            {/* Repair Notes */}
            <FormGroup>
                <Label for="repair_notes">Repair Notes: <span className="text-danger">*</span></Label>
                <Input
                    type="textarea"
                    name="repair_notes"
                    tabIndex={11}
                    onChange={handleChange}
                    value={defaultIfEmpty(formData.repair_notes)}
                    required
                />
            </FormGroup>
            {/* Buttons */}
            <div className="d-flex justify-content-between">
                <Button color="primary" type="submit">Save</Button>
                {repair && (
                    <Button color="danger" onClick={handleDelete}>Delete</Button>
                )}
            </div>
        </Form>
    );
};

export default NewRepairForm;
