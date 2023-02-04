
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { CartComponent } from './CartComponent';
import {useState} from "react";






function App() {
 
 
  return (
    <div>
       <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Start Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <NavDropdown title="Shop" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">All Products</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">
                Popular items
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">New Arrivals</NavDropdown.Item>
             
             
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Button variant="outline-dark" className='cart-btn'></Button>
    </Navbar>
    <div className='heading'> 
      <h1>Shop in Style</h1>
      <p>with this shop homepage template</p>
      </div>
      <CartComponent/>
      <footer className='foot'>
      Copyright © Your Website 2023
      </footer>
  </div>
  );
}

export default App;


export const prodData = [
  {
    id:1,
    image:"https://media.istockphoto.com/id/502129687/photo/decorative-cosmetics-for-makeup.jpg?s=1024x1024&w=is&k=20&c=wGmovDLR3scv2NWrha6VGUO82qn_cWwxBh1ljemwo-0=",
    prodName:"Fancy Products",
    price:"₹3240.00-₹6480.00",
   
   },
   {
     id:2,
     product:"Sale",
     image:"https://m.media-amazon.com/images/I/71u3QxI3QvL._UY695_.jpg",
     prodName:"Special Item",
     offerprice:"Offer Price:₹1620.00",
     price:"₹1458.00",
     prodRating:"⭐⭐⭐⭐⭐"
    },
    {
     id:3,
     product:"Sale",
     image:"https://m.media-amazon.com/images/I/71Ye4QY493L._SX679_.jpg",
     prodName:"Male Puppets",
     offerprice:"Offer Price:₹4050.00",
     price:"₹2025.00"
    },
    {
     id:4,
     image:"https://m.media-amazon.com/images/I/413LMwScBjS._SX679_.jpg",
     prodName:"Wifi Booster",
     price:"₹3240.00",
     prodRating:"⭐⭐⭐⭐⭐"
    },
    {
     id:5,
     product:"Sale",
     image:"https://m.media-amazon.com/images/I/81wN5ep5CAL._SY879_.jpg",
     prodName:"JH Gallery Lotus Hangings for Decoration",
     offerprice:"Offer Price:₹4050.00",
     price:"₹2025.00"
    },
    {
     id:6,
     image:"https://m.media-amazon.com/images/I/71+FRIdP3pL._UL1500_.jpg",
     prodName:"Indian Traditional Kanjivaram Silk",
     price:"₹9720.00-₹22680.00"
    },
    {
     id:7,
     product:"Sale",
     image:"https://m.media-amazon.com/images/I/61xlUgke8BL._UX679_.jpg",
     prodName:"Men's Beige Silk Blend Sherwani Set",
     offerprice:"Offer Price:₹1620.00",
     price:"₹1458.00",
     prodRating:"⭐⭐⭐⭐⭐"
    },
    {
     id:8,
     image:"https://m.media-amazon.com/images/I/616e2t492uL._SX679_.jpg",
     prodName:"Alpha Bluetooth Calling Smart Watch ",
     price:"₹3240",
     prodRating:"⭐⭐⭐⭐⭐"
    }
]
