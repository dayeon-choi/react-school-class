import React, { useState } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";

function App() {
  const data = [
    {
      id: 0,
      title: "쓴 커피",
      content: "잠을 싹 달아나게 만드는 쓰디 쓴 원두 사용",
      price: "3200",
      image: "https://heenice42.github.io/shop/coffee01.jpg",
    },
    {
      id: 1,
      title: "단 커피",
      content: "쓴 맛이 하나도 없는 달달한 원두 사용",
      price: "4300",
      image: "https://heenice42.github.io/shop/coffee02.jpg",
    },
    {
      id: 2,
      title: "신 커피",
      content: "코끼리 똥에서 직접 골라 구한 원두 사용",
      price: "2200",
      image: "https://heenice42.github.io/shop/coffee03.jpg",
    },
  ];

  const [cdata, setCdata] = useState(data);

  return (
    <>
      <div className="App">
        <div>
          <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand href="#home">SHOP</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#link">Link</Nav.Link>
                  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Something
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form inline>
                  <FormControl
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>

        <div class="p-5 mb-4 bg-light rounded-3" className="bg">
          <div class="container-fluid py-5">
            <h1 class="display-5 fw-bold">Coffee & Tea</h1>
            <p class="col-md-8 fs-4">Using a series of utilities</p>
            <button class="btn btn primary btn-lg" type="button">
              Example button
            </button>
          </div>
        </div>

        <div className="container">
          <div className="row">
            {cdata.map((a, i) => {
              return <Card cdata={cdata[i]} />;
            })}
          </div>
        </div>
      </div>

      <Route exact path="/">
        <div>메인페이지</div>
      </Route>
      <Route path="/detail">
        <div>상세페이지</div>
      </Route>
    </>
  );
}

function Card({ cdata }) {
  return (
    <div className="col-md-4">
      <img src={cdata.image} alt="coffee" width="30%" />
      <h4>{cdata.title}</h4>
      <p>{cdata.content}</p>
      <p>{cdata.price}원</p>
    </div>
  );
}

export default App;
