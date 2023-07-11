import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import {DarkModal} from "../styled-components/AddDeviceModalStyles";

// @ts-ignore
const AddDeviceModal = ({ show, onHide }) => {
    const [vendor, setVendor] = useState('');
    const [ipAddress, setIpAddress] = useState('');
    const [sshPort, setSshPort] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleClose = () => {
        setVendor('');
        setIpAddress('');
        setSshPort('');
        setUsername('');
        setPassword('');
        onHide();
    }
    const handleAddDevice = () => {
        // Handle adding the new device
        console.log('Vendor:', vendor);
        console.log('IP Address:', ipAddress);
        console.log('SSH Port:', sshPort);
        console.log('Username:', username);
        console.log('Password:', password);

        // Clear the form fields
        setVendor('');
        setIpAddress('');
        setSshPort('');
        setUsername('');
        setPassword('');

        // Close the modal
        onHide();
    };

    const handleTestConnection = () => {
        // Perform test connection functionality here
        console.log('Test Connection');
    };

    return (
        <DarkModal show={show} onHide={onHide} centered>
            <Modal.Header closeButton onClick={handleClose}>
                <Modal.Title>Add New Device</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="vendor">
                        <Form.Label>Vendor</Form.Label>
                        <Form.Control
                            as="select"
                            value={vendor}
                            onChange={(e) => setVendor(e.target.value)}
                        >
                            <option value="">Select Vendor</option>
                            <option value="Cisco">Cisco</option>
                            <option value="Juniper">Juniper</option>
                            <option value="HP">HP</option>
                            {/* Add more vendor options */}
                        </Form.Control>
                    </Form.Group>
                    <Row>
                        <Col>
                            <Form.Group controlId="ipAddress">
                                <Form.Label>IP Address</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter IP Address"
                                    value={ipAddress}
                                    onChange={(e) => setIpAddress(e.target.value)}
                                    className="white-placeholder"
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="sshPort">
                                <Form.Label>SSH Port</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter SSH Port"
                                    value={sshPort}
                                    onChange={(e) => setSshPort(e.target.value)}
                                    className="white-placeholder"
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group controlId="username">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="white-placeholder"
                            autoComplete="username"
                        />
                    </Form.Group>
                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="white-placeholder"
                            autoComplete="current-password"
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleTestConnection}>
                    Test Connection
                </Button>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={handleAddDevice}>
                    Save
                </Button>
            </Modal.Footer>
        </DarkModal>
    );
};

export default AddDeviceModal;
