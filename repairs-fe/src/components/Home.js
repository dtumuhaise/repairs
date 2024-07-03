import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import RepairList from "./RepairList";
import NewRepairModal from "./NewRepairModal";

import axios from "axios";

import { API_URL} from "../constants";

class Home extends Component {
    state = {
        repairs: []
    };

    componentDidMount() {
        this.resetState();
    }

    getRepairs = () => {
        axios.get(API_URL).then(res => this.setState({ repairs: res.data }));
    };

    resetState = () => {
        this.getRepairs();
    };

    render() {
        return (
            <Container style={{ marginTop: "20px" }}>

                <Row>
                    <Col>
                        <NewRepairModal create={true} resetState={this.resetState} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <RepairList
                            repairs={this.state.repairs}
                            resetState={this.resetState}
                        />
                    </Col>
                </Row>
                
            </Container>
        );
    }
}
export default Home;
