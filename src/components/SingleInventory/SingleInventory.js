import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleInventory = (props) => {
    const { car, col } = props;
    const { _id, img, model, price, year, engine, body, color, dealer, quantity } = car;

    return (
        <div className={col}>
            <Card>
                <Card.Img variant="top" className="img-fluid" src={img} />
                <Card.Body className="d-flex justify-content-between gx-lg-4 gx-2">
                    <Card.Title className="fw-bold mb-0">{model}</Card.Title>
                    <Card.Title className="fw-bold mb-0">${price}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem className="d-flex justify-content-between">
                        <span>Year: {year}</span>
                        <span>Engine: {engine}cc</span>
                    </ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-between">
                        <span>Body: {body}</span>
                        <span>Color: {color}</span>
                    </ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-between">
                        <span>Dealer: {dealer}</span>
                        <span>{quantity > 0 ? `Quantity: ${quantity}` : 'Out of Stock'}</span>
                    </ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Link to={`/car/${_id}`} className="theme-btn w-100">View Details</Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleInventory;