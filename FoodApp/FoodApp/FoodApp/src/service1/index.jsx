import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AiFillCar } from "react-icons/ai";
import { FaAngellist } from "react-icons/fa";
import image from "../image/hero.png";
import featureImg01 from "../image/service-01.png";
import featureImg02 from "../image/service-02.png";
import featureImg03 from "../image/service-03.png";
import "./service1.css";


const featureData = [
    {
      title: "Quick Delivery",
      imgUrl: featureImg01,
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
    },
  
    {
      title: "Super Dine In",
      imgUrl: featureImg02,
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
    },
    {
      title: "Easy Pick Up",
      imgUrl: featureImg03,
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
    },
  ];
  
const Service1 = () => {
    return (
        <Container>
            <Row>
                <Col sm={12}>
                    <div className="service1">
                    <h2>What we serve</h2>
                    <h1>
                        Just sit back at home <br/> we will{" "}
                        <span style={{ color: "red" }}>take care</span>{" "}
                    </h1>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Dolor, officiis?
                        <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aperiam, eius.
                    </p>
                    </div>
                </Col>
            </Row>
            <Row>
            {featureData.map((item, index) => (
              <Col lg="4" md="6" sm="6" key={index} className="mt-5">
                <div className="feature__item text-center px-5 py-3">
                  <img
                    src={item.imgUrl}
                    alt="feature-img"
                    className="w-25 mb-3"
                  />
                  <h5 className=" fw-bold mb-3">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
            </Row>
        </Container>
    );
};

export default Service1;
