import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AiFillCar } from "react-icons/ai";
import { FaAngellist } from "react-icons/fa";
import image from "../image/hero.png";
import "./home.css";

const Home = () => {
    return (
        
        <Container>
            <Row>
                <Col sm={6} className="home">
                    <h2 style={{ bold: 800 }}>Easy way to make an order</h2>
                    <h1>
                        <span style={{ color: "red" }}>HUNGRY? </span>Just wait
                    </h1>
                    <h1>
                        food at <span style={{ color: "red" }}>your door</span>{" "}
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Qui magni delectus tenetur autem, sint veritatis!
                    </p>
                    <div className="mb-4">
                        <Button variant="primary" size="lg">
                            Order Now
                        </Button>{" "}
                        <Button variant="secondary" size="lg">
                            See all food
                        </Button>
                    </div>
                    <div className=" hero__service  d-flex align-items-center gap-5 mt-5 ">
                        <p className=" d-flex align-items-center gap-2 ">
                            <span className="shipping__icon">
                                <i class="ri-car-line"></i>
                            </span>{" "}
                            No shipping charge
                        </p>

                        <p className=" d-flex align-items-center gap-2 ">
                            <span className="shipping__icon">
                                <i class="ri-shield-check-line"></i>
                            </span>{" "}
                            100% secure checkout
                        </p>
                    </div>
                </Col>
                <Col sm={6}>
                    <div>
                        <img className="image" src={image} alt="" srcset="" />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;
