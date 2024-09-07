import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { removeItemsInCart } from "../Store/cartSlice";

const Cart = () => {
  const productsInCart = useSelector((state) => state.cart);
  const dispatchForRemovingItemFromCart = useDispatch()
  const removeItem= (id)=>{
    dispatchForRemovingItemFromCart(removeItemsInCart(id))
  };

  const cards = productsInCart.map((product, index) => (
    <div className="col-md-3" key={index}>
      <Card style={{ width: "18em" }}>
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ height: "150px", width: "150px" }}
          ></Card.Img>
        </div>
        <Card.Body>
          <Card.Title className="text-center">
            {product.title} Title
            <Card.Text>{product.price}</Card.Text>
          </Card.Title>
        </Card.Body>
        <Card.Footer style={{ backgroundColor: "lightgrey" }}>
          <Button variant="danger" onClick={()=>removeItem(product.id)}>
            Buy Now
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));
  return (
    <>
      <h2>Cart Page</h2>
      {cards}
    </>
  );
};

export default Cart;
