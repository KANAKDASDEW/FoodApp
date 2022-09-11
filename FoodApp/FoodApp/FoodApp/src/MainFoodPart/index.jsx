import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import products from "../fake-data/products.js";
import { ListGroup, ListGroupItem } from "reactstrap";
import foodCategoryImg01 from "../image/hamburger.png";
import foodCategoryImg02 from "../image/pizza.png";
import foodCategoryImg03 from "../image/bread.png";
import networkImg from "../image/network.png";
import whyImg from "../image/location.png";
import { FaCheck } from "react-icons/fa";

import TestimonialSlider from "../slider/TestimonialSlider";
import SimpleSlider from "../slider2/index";
import ProductCard from "../MainFoodPart/ProductCard";
import Testimonial from "../Testimonials/Testimonial";

import { AiFillCar } from "react-icons/ai";
import { FaAngellist } from "react-icons/fa";
import "./mainfood.css";

const MainFood = () => {
    const [category, setCategory] = useState("ALL");
    const [allProducts, setAllProducts] = useState(products);

    const [hotPizza, setHotPizza] = useState([]);

    useEffect(() => {
        const filteredPizza = products.filter(
            (item) => item.category === "Pizza"
        );
        const slicePizza = filteredPizza.slice(0, 4);
        setHotPizza(slicePizza);
    }, []);

    useEffect(() => {
        if (category === "ALL") {
            setAllProducts(products);
        }

        if (category === "BURGER") {
            const filteredProducts = products.filter(
                (item) => item.category === "Burger"
            );

            setAllProducts(filteredProducts);
        }

        if (category === "PIZZA") {
            const filteredProducts = products.filter(
                (item) => item.category === "Pizza"
            );

            setAllProducts(filteredProducts);
        }

        if (category === "BREAD") {
            const filteredProducts = products.filter(
                (item) => item.category === "Bread"
            );

            setAllProducts(filteredProducts);
        }
    }, [category]);

    //   common function

    return (
        <>
            <Container>
                <Row>
                    <Col lg="12" className="text-center">
                        <h2>Popular Foods</h2>
                    </Col>
                    <Col lg="12">
                        <div className="food__category d-flex align-items-center justify-content-center gap-4">
                            <button
                                className={`all__btn  ${
                                    category === "ALL" ? "foodBtnActive" : ""
                                } `}
                                onClick={() => setCategory("ALL")}
                            >
                                All
                            </button>
                            <button
                                className={`d-flex align-items-center gap-2 ${
                                    category === "BURGER" ? "foodBtnActive" : ""
                                } `}
                                onClick={() => setCategory("BURGER")}
                            >
                                <img src={foodCategoryImg01} alt="" />
                                Burger
                            </button>

                            <button
                                className={`d-flex align-items-center gap-2 ${
                                    category === "PIZZA" ? "foodBtnActive" : ""
                                } `}
                                onClick={() => setCategory("PIZZA")}
                            >
                                <img src={foodCategoryImg02} alt="" />
                                Pizza
                            </button>

                            <button
                                className={`d-flex align-items-center gap-2 ${
                                    category === "BREAD" ? "foodBtnActive" : ""
                                } `}
                                onClick={() => setCategory("BREAD")}
                            >
                                <img src={foodCategoryImg03} alt="" />
                                Bread
                            </button>
                        </div>
                    </Col>
                    {allProducts.map((item) => (
                        <Col
                            lg="3"
                            md="4"
                            sm="6"
                            xs="6"
                            key={item.id}
                            className="mt-5"
                        >
                            <ProductCard item={item} />
                        </Col>
                    ))}
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col lg="6" md="6">
                        <img
                            src={whyImg}
                            alt="why-tasty-treat"
                            className="w-100"
                        />
                    </Col>

                    <Col lg="6" md="6">
                        <div className="why__tasty-treat">
                            <h2 className="tasty__treat-title mb-4">
                                Why <span>Tasty Treat?</span>
                            </h2>
                            <p className="tasty__treat-desc">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Dolorum, minus. Tempora
                                reprehenderit a corporis velit, laboriosam vitae
                                ullam, repellat illo sequi odio esse iste fugiat
                                dolor, optio incidunt eligendi deleniti!
                            </p>

                            <ListGroup className="mt-4">
                                <ListGroupItem className="border-0 ps-0">
                                    <p className=" choose__us-title d-flex align-items-center gap-2 ">
                                        <span>
                                            <FaCheck style={{ color: "red" }} />
                                        </span>{" "}
                                        Fresh and tasty foods
                                    </p>
                                    <p className="choose__us-desc">
                                        Lorem ipsum, dolor sit amet consectetur
                                        adipisicing elit. Quia, voluptatibus.
                                    </p>
                                </ListGroupItem>

                                <ListGroupItem className="border-0 ps-0">
                                    <p className="choose__us-title d-flex align-items-center gap-2 ">
                                        <span>
                                            <FaCheck style={{ color: "red" }} />
                                        </span>
                                        Quality support
                                    </p>
                                    <p className="choose__us-desc">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Qui, earum.
                                    </p>
                                </ListGroupItem>

                                <ListGroupItem className="border-0 ps-0">
                                    <p className="choose__us-title d-flex align-items-center gap-2 ">
                                        <span>
                                            <FaCheck style={{ color: "red" }} />
                                        </span>
                                        Order from any location{" "}
                                    </p>
                                    <p className="choose__us-desc">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Qui, earum.
                                    </p>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>
                </Row>
            </Container>
            <section className="pt-0">
                <Container>
                    <Row>
                        <Col lg="12" className="text-center mb-5 ">
                            <h2>Hot Pizza</h2>
                        </Col>

                        {hotPizza.map((item) => (
                            <Col lg="3" md="4" sm="6" xs="6" key={item.id}>
                                <ProductCard item={item} />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
            <section>
                <Container>
                    <Row>
                        <Col lg="6" md="6">
                            <div className="testimonial ">
                                <h5
                                    style={{ marginTop: 50 }}
                                    className="testimonial__subtitle mb-4"
                                >
                                    Testimonial
                                </h5>
                                <h2 className="testimonial__title mb-4">
                                    What our <span>customers</span> are saying
                                </h2>
                                <p className="testimonial__desc">
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Distinctio quasi qui minus
                                    quos sit perspiciatis inventore quis
                                    provident placeat fugiat!
                                </p>
                                <Testimonial/>
                            </div>
                            
                        </Col>

                        <Col lg="6" md="6">
                            <img
                                src={networkImg}
                                alt="testimonial-img"
                                className="w-100"
                            />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default MainFood;
