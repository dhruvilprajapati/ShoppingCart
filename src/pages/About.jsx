import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

export function About() {
    return (
        <>
            <h2>About the Shopping Cart Project</h2>
            <Row className="mt-3">
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Overview</Card.Title>
                            <Card.Text>
                                The "Shopping Cart" project is a web application built using React, React-Bootstrap for styling, React Router for navigation, and incorporating advanced state management techniques with useContext and a custom hook called useLocalStorage. The project leverages the browser's localStorage to persistently store shopping cart data, providing a seamless user experience even after page reloads.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="mt-3">
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Key Features</Card.Title>
                            <Card.Text>
                                <ul>
                                    <li><strong>React Components:</strong> The project is structured with modular React components, promoting code organization and maintainability. Components utilize React-Bootstrap for a clean and responsive user interface.</li>
                                    <li><strong>Router:</strong> Navigation within the application is handled using React Router, ensuring a smooth and intuitive user experience. Users can easily navigate between different sections of the application, such as the shopping cart and checkout pages.</li>
                                    <li><strong>Global State Management with useContext:</strong> The application employs the useContext hook to manage global state, specifically for handling the shopping cart. This allows components throughout the application to access and update the cart without the need for prop drilling.</li>
                                    <li><strong>Persistent Data Storage with useLocalStorage:</strong> The useLocalStorage custom hook is utilized to manage the state of the shopping cart items in localStorage. This ensures that the user's cart remains intact even if they close or refresh the page.</li>
                                    <li><strong>Dynamic Shopping Cart:</strong> Users can view their current shopping cart, adding and removing items with ease. The cart dynamically updates both in-memory and in localStorage as items are added or removed.</li>
                                    <li><strong>Responsive Design:</strong> React-Bootstrap components contribute to a responsive design, making the application accessible across various devices and screen sizes.</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="mt-3">
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Technology Used</Card.Title>
                            <Card.Text>
                                <ul>
                                    <li><strong>React</strong></li>
                                    <li><strong>React-Bootstrap</strong></li>
                                    <li><strong>React Router</strong></li>
                                    <li><strong>useContext for global state management</strong></li>
                                    <li><strong>useLocalStorage custom hook for persistent data storage</strong></li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Developed by : DhruvilPrajapati</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </>
    )
}