import React from 'react';
import { Button, Card, Row, Col, Image, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope,faPhone } from '@fortawesome/free-solid-svg-icons';

import  cake1 from './images/cake1.PNG';
import './styles/home.css';

function Home() {
    return (
        <div className="App">
            <div className="Header">
                <h1>Cakes By Dorota</h1>
                <h3>Any Occassion from Weddings to Communions</h3>
                <Button variant="primary" href="./contact">Contact Me</Button>
            </div>

            <div className="About-Me">
                <div>
                    <Image src={cake1} alt="Me"  fluid thumbnail />
                </div>
                <div className="about-text">
                    <Container>
                    <h4>About Me</h4>
                    <p>With over 20 years of experience, I'm a baker who came to this country from Poland. Baking has been my 
                    passion since I can remember, and I bring the flavors and traditions of my homeland into every cake I make. 
                    I love mixing old-fashioned techniques with new ideas to create something special for each celebration. I love developing unique
                    and different flavors that are homemade and not able to be recreated in any other bakery. Everything is created with the freshest and best
                    ingredients, as I see more than a cake, I see a celebration that I am able to be a part of. Let me make 
                    your next cake, where every slice tells a story of my dedication to baking and sharing joy.</p>
                    <div class="external-links">
                        <Link to="https://www.instagram.com/cakesbydorota/" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faInstagram} size="2x"/></Link>
                        <Link to="mailto:jastdorota@yahoo.com"><FontAwesomeIcon icon={faEnvelope} size="2x"/></Link>
                        <Link to="tel:9084208247"><FontAwesomeIcon icon={faPhone} size="2x"/></Link>
                    </div>
                    </Container>
                </div>
            </div>


            <div className="Portfolio-Highlights">
                <h4>Portfolio Highlights</h4>
                <Row xs={1} md={3} className="g-0">
                    <Col md={4} className="mb-2 px-2">
                        <Card>
                            <Card.Img variant="top" src={cake1} />
                            <Card.Body>
                                <Card.Title>Wedding Cakes</Card.Title>
                                <Card.Text className="card-text-limit">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </Card.Text>
                                <Button variant="success" href="./portfolio">Portfolio</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-2 px-2">
                        <Card>
                            <Card.Img variant="top" src={cake1} />
                            <Card.Body>
                                <Card.Title>Wedding Cakes</Card.Title>
                                <Card.Text className="card-text-limit">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </Card.Text>
                                <Button variant="success" href="./portfolio">Portfolio</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-2 px-2">
                        <Card>
                            <Card.Img variant="top" src={cake1} />
                            <Card.Body>
                                <Card.Title>Wedding Cakes</Card.Title>
                                <Card.Text className="card-text-limit">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </Card.Text>
                                <Button variant="success" href="./portfolio">Portfolio</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Home;