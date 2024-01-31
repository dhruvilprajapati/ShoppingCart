import { Button, Card } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utils/formatCurrency"

export function StoreItem({ id, name, price, imgUrl }) {
    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart()
    const quantity = getItemQuantity(id);
    return (
        <Card>
            <Card.Img
                variant="top"
                height="200px"
                style={{ objectFit: "cover" }}
                src={imgUrl} />
            <Card.Body clasName="d-flex flex-column">
                <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                    <span className="fs-2">{name}</span>
                    <span className="ms-2 text-muted">{formatCurrency(price)}</span>
                </Card.Title>
                {quantity === 0 ?
                    <Button className="w-100" onClick={() => increaseCartQuantity(id)}> + Add To Cart</Button> :
                    <div className="d-flex flex-column align-items-center" style={{ gap: "0.5rem" }}>
                        <div className="d-flex justify-content-center align-items-center" style={{ gap: "0.5rem" }}>
                            <Button onClick={() => decreaseCartQuantity(id)}>
                                -
                            </Button>
                            <div>
                                <span className="fs-3">{quantity}
                                </span> in cart
                            </div>
                            <Button onClick={() => increaseCartQuantity(id)}>
                                +
                            </Button>
                        </div>
                        <Button variant="danger" size="sm" onClick={() => removeFromCart(id)}>
                            Remove
                        </Button>
                    </div>
                }
            </Card.Body>
        </Card>
    )
}