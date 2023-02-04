import {  useState } from "react"
import { Button, Card } from "react-bootstrap";
import { prodData } from './App';
import './CartComponent.css'

export function CartComponent (){
    const [card, setCard] = useState(prodData);
    const [item, setItems] = useState(0);

    return (
        <div>
           
            <span className='cart-no'>Cart {item}</span>
        <div className="product-data">
           {card.map((prod, idx)=> (
           <CardDetails
            key = {idx}
            price ={prod.price}
            product={prod.product}
            image = {prod.image}
            prodName = {prod.prodName}
            prodRating = {prod.prodRating}
            offerprice={prod.offerprice}
            idx = {idx}
            setItems = {setItems}
            setCard = {setCard}
            item ={item}
            card ={card}
           />
           ))}
    
        </div>
        </div>
    )
}


function CardDetails ({setCard, setItems,offerprice, price,  image, prodName, prodRating,product, idx , item}) {
  
    const [showBtn, setShowBtn] = useState(true);
    const handleCartAdd = (idx, setItems, item) => {
        setShowBtn(!showBtn)
        setItems(item + 1)
 
    }
    const handleCartRemove = (idx, setItems , item, setCard) =>{
       setShowBtn(!showBtn)
       setItems(item - 1)
      ///
    }

    return(
    <Card style={{ width: '18rem', padding: "10px"}}>
      
      <p><b>{product}</b></p>
    <Card.Img variant="top" src={image} className='top-img' />
    <Card.Body>
      <Card.Title>{prodName}</Card.Title>
      <p className="rating-data">{prodRating}</p>
      <p className="price-cart">Price:{price}</p>
    <p>{offerprice}</p>
     
    </Card.Body>
    <div className="btn-area">
        {showBtn ? <Button onClick={()=>handleCartAdd(idx, setItems, item)} variant="primary">Add</Button>: 
         <Button onClick={()=>handleCartRemove(idx, setItems, item , setCard)} variant="secondary">Remove </Button>  }
    </div>
  </Card>
    )

}