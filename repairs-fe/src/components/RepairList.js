import React, { useState } from "react";
import { Table, Modal, ModalHeader, ModalBody, ModalFooter, Button, Input } from "reactstrap";
import axios from "axios";
import { API_URL } from "../constants";
import NewRepairModal from "./NewRepairModal";

const RepairList = ({ repairs, resetState }) => {
    const [modal, setModal] = useState(false);
    const [selectedRepair, setSelectedRepair] = useState(null);
    const [sortConfig, setSortConfig] = useState({ key: null, direction: null });

    const toggleModal = (repair) => {
        setSelectedRepair(repair);
        setModal(!modal);
    };

    const handleSort = (key) => {
        let direction = "ascending";
        if (sortConfig.key === key && sortConfig.direction === "ascending") {
            direction = "descending";
        }
        setSortConfig({ key, direction });
    };

    const sortedRepairs = [...repairs].sort((a, b) => {
        if (sortConfig.key === "repair_status" || sortConfig.key === "date_of_entry") {
            if (sortConfig.direction === "ascending") {
                return a[sortConfig.key] > b[sortConfig.key] ? 1 : -1;
            } else if (sortConfig.direction === "descending") {
                return a[sortConfig.key] < b[sortConfig.key] ? 1 : -1;
            }
        }
        return 0;
    });

    const renderSortIcon = (key) => {
        if (sortConfig.key === key) {
            return sortConfig.direction === "ascending" ? "▲" : "▼";
        }
        return null;
    };

    const handleStatusChange = (repair, newStatus) => {
        const updatedRepair = { ...repair, repair_status: newStatus };
        axios.put(`${API_URL}${repair.id}/`, updatedRepair).then(() => {
            resetState();
        });
    };

    return (
        <div className="container-fluid">
            <Table responsive striped>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone</th>
                        <th onClick={() => handleSort("repair_status")} className="sortable">Status {renderSortIcon("repair_status")}</th>
                        <th onClick={() => handleSort("date_of_entry")} className="sortable">Date Added {renderSortIcon("date_of_entry")}</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {!sortedRepairs || sortedRepairs.length === 0 ? (
                        <tr>
                            <td colSpan="6" className="text-center">
                                <b>Ops, no one here yet</b>
                            </td>
                        </tr>
                    ) : (
                        sortedRepairs.map(repair => (
                            <tr key={repair.id} onClick={() => toggleModal(repair)} style={{ cursor: "pointer" }}>
                                <td>{repair.firstname}</td>
                                <td>{repair.lastname}</td>
                                <td>{repair.phone}</td>
                                <td>
                                    <Input
                                        type="select"
                                        value={repair.repair_status}
                                        onClick={(e) => e.stopPropagation()}
                                        onChange={(e) => handleStatusChange(repair, e.target.value)}
                                    >
                                        <option value="Not Started">Not Started</option>
                                        <option value="In Progress">In Progress</option>
                                        <option value="Completed">Completed</option>
                                    </Input>
                                </td>
                                <td>{repair.date_of_entry}</td>
                                <td onClick={(e) => e.stopPropagation()}>
                                    <NewRepairModal
                                        create={false}
                                        repair={repair}
                                        resetState={resetState}
                                    />
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </Table>

            <Modal isOpen={modal} toggle={toggleModal} >
                <div className="d-flex justify-content-center">
                    <ModalHeader>Repair Details</ModalHeader>
                </div>
                
                <ModalBody>
                    {selectedRepair && (
                        <div className="container-fluid">
                            <p><strong>First Name:</strong> {selectedRepair.firstname}</p>
                            <p><strong>Last Name:</strong> {selectedRepair.lastname}</p>
                            <p><strong>Phone:</strong> {selectedRepair.phone}</p>
                            <p><strong>Guitar Type:</strong> {selectedRepair.guitar_type}</p>
                            <p><strong>Model:</strong> {selectedRepair.model}</p>
                            <p><strong>Brand:</strong> {selectedRepair.brand}</p>
                            <p><strong>Status:</strong> {selectedRepair.repair_status}</p>
                            <p><strong>Date of Entry:</strong> {selectedRepair.date_of_entry}</p>
                            <p><strong>Repair Notes:</strong> {selectedRepair.repair_notes}</p>
                        </div>
                    )}
                </ModalBody>
                <ModalFooter className="d-flex justify-content-center">
                    <Button color="secondary" onClick={toggleModal}>Close</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default RepairList;
