import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../image/res-logo.png";
import { FaCheck } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    FaAffiliatetheme,
    faGithubSquare,
    faInstagram,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Nav from "react-bootstrap/Nav";

import "./footer.css";

import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col lg="3" md="4" sm="6">
                        <div className=" footer__logo text-start">
                            <img src={logo} alt="logo" />
                            <h5>Tasty Treat</h5>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Nesciunt pariatur accusamus
                            </p>
                        </div>
                    </Col>

                    <Col lg="3" md="4" sm="6">
                        <h5 className="footer__title">Delivery Time</h5>
                        <ListGroup className="deliver__time-list">
                            <ListGroupItem className=" delivery__time-item border-0 ps-0">
                                <span>Sunday - Thursday</span>
                                <p>10:00am - 11:00pm</p>
                            </ListGroupItem>

                            <ListGroupItem className=" delivery__time-item border-0 ps-0">
                                <span>Friday - Saturday</span>
                                <p>Off day</p>
                            </ListGroupItem>
                        </ListGroup>
                    </Col>

                    <Col lg="3" md="4" sm="6">
                        <h5 className="footer__title">Contact</h5>
                        <ListGroup className="deliver__time-list">
                            <ListGroupItem className=" delivery__time-item border-0 ps-0">
                                <p>
                                    Location: Ka 62/1, Shahjadpur, Gulshan - 2,
                                    Dhaka - 1212, Bangladesh
                                </p>
                            </ListGroupItem>
                            <ListGroupItem className=" delivery__time-item border-0 ps-0">
                                <span>Phone:01863254004</span>
                            </ListGroupItem>

                            <ListGroupItem className=" delivery__time-item border-0 ps-0">
                                <span>Email:kanakdas231@gmail.com</span>
                            </ListGroupItem>
                        </ListGroup>
                    </Col>

                    <Col lg="3" md="4" sm="6">
                        <h5 className="footer__title">Newsletter</h5>
                        <p>Subscribe our newsletter</p>
                        <div className="newsletter">
                            <input
                                type="email"
                                placeholder="Enter your email"
                            />
                            <span>
                                <FaCheck style={{ color: "red" }} />
                            </span>
                        </div>
                    </Col>
                </Row>

                <Row className="mt-5">
                    <Col lg="6" md="6">
                        <p className="copyright__text">
                            Copyright - 2022, website made by Kanak Das. @ All
                            Rights Reserved.
                        </p>
                    </Col>
                    <Col lg="6" md="6">
                        <div className="social__links d-flex align-items-center gap-4 justify-content-end">
                            <p className="m-0">Follow: </p>

                            <Nav>
                                <Nav.Item>
                                    <Nav.Link
                                        href="https://www.facebook.com/kanak.das.39982"
                                        className="Facebook"
                                    >
                                        <FontAwesomeIcon
                                            style={{
                                                color: "4267B2",
                                                height: "38",
                                            }}
                                            icon={faFacebook}
                                        />
                                    </Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link
                                        href="https://github.com/KANAKDASDEW "
                                        className="Github"
                                    >
                                        <FontAwesomeIcon
                                            style={{
                                                color: "109266",
                                                height: "38",
                                            }}
                                            icon={faGithubSquare}
                                        />
                                    </Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link
                                        href="https://www.linkedin.com/in/kanak-das-09752b201/"
                                        className="Linnkden"
                                    >
                                        {" "}
                                        <FontAwesomeIcon
                                            style={{
                                                color: "0e76a8",
                                                height: "38",
                                            }}
                                            icon={faLinkedin}
                                        />
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
