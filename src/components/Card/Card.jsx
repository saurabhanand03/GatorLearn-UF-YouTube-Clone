import React from 'react';
import './Card.css';

const Card = (props) => {
    return <div className = "card  bg-blackSecondary ">{props.children}</div>;
};

export default Card;