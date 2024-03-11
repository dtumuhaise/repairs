import React, { Component } from "react";
import { Table } from "reactstrap";
import NewRepairModal from "./NewRepairModal";

import ConfirmRepairRemovalModal from "./ConfirmRepairRemovalModal";


class RepairList extends Component {
    render() {
        const repairs = this.props.repairs;
        return (
            <Table dark>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone</th>
                        <th>Guitar Type</th>
                        <th>Model</th>
                        <th>Brand</th>
                        <th>Status</th>

                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {!repairs || repairs.length <= 0 ? (
                        <tr>
                            <td colSpan="6" align="center">
                                <b>Ops, no one here yet</b>
                            </td>
                        </tr>
                    ) : (
                        repairs.map(repair => (
                            <tr key={repair.id}>
                                <td>{repair.firstname}</td>
                                <td>{repair.lastname}</td>
                                <td>{repair.phone}</td>
                                <td>{repair.guitar_type}</td>
                                <td>{repair.model}</td>
                                <td>{repair.brand}</td>
                                <td>{repair.repair_status}</td>
                                <td align="center">
                                    <NewRepairModal
                                        create={false}
                                        repair={repair}
                                        resetState={this.props.resetState}
                                    />
                                    &nbsp;&nbsp;
                                    <ConfirmRepairRemovalModal
                                        id={repair.id}
                                        resetState={this.props.resetState}
                                    />
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </Table>
        );
    }
}

export default RepairList;
