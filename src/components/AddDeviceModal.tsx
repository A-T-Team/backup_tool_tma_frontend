import React, {useState} from 'react';
import {Modal, Button, Form, Row, Col} from 'react-bootstrap';
import {DarkModal} from "../styled-components/AddDeviceModalStyles";
import {ip, port, vendorsLabels} from "../utils/constants";

// @ts-ignore
const AddDeviceModal = ({show, onHide, onAddDevice}) => {
    const [vendor, setVendor] = useState('');
    const [ipAddress, setIpAddress] = useState('');
    const [sshPort, setSshPort] = useState('22');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [deviceName, setDeviceName] = useState('');
    const [loading, setLoading] = useState(false);
    const [testConnectionMessage, setTestConnectionMessage] = useState('');


    const handleClose = () => {
        setVendor('');
        setIpAddress('');
        setSshPort('');
        setUsername('');
        setPassword('');
        setDeviceName('');
        onHide();
    }
    const handleAddDevice = () => {
        // Handle adding the new device
        fetch(`http://${ip}:${port}/api/devices`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "name": deviceName,
                    "vendor": vendor,
                    "ip": ipAddress,
                    "port": sshPort,
                    "user": username,
                    "password": password
                })
            }
        )
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw new Error("error");
                }
            })
            .then(data => onAddDevice(data))
            .catch(error => console.log(error));


        // Clear the form fields
        setVendor('');
        setIpAddress('');
        setSshPort('22');
        setUsername('');
        setPassword('');
        setDeviceName('');
        // Close the modal
        onHide();
    };

    const handleTestConnection = () => {
        setLoading(true);
        // Perform test connection functionality here
        fetch(`http://${ip}:${port}/api/devices/availability`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "name": deviceName,
                    "vendor": vendor,
                    "ip": ipAddress,
                    "port": sshPort,
                    "user": username,
                    "password": password
                })
            }
        )
            .then(data => data.ok ? data.json() : new Error("Connection unsuccessful"))
            .then(res => setTestConnectionMessage(res.message))
            .catch(error => setTestConnectionMessage("Connection failed"))
            .finally(() => setLoading(false));
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
                            {vendorsLabels.map((v, i) => <option key={i} value={v}>{v}</option>)}

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
                                    type="number"
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
                    <Form.Group controlId="deviceName">
                        <Form.Label>Device name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Device name"
                            value={deviceName}
                            onChange={(e) => setDeviceName(e.target.value)}
                            className="white-placeholder"
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                {loading && <div className="spinner-grow" role="status"/>}
                <Button variant="secondary" onClick={handleTestConnection} disabled={loading}>
                    {loading ? 'Testing...' : testConnectionMessage ? testConnectionMessage : 'Test Connection'}
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
