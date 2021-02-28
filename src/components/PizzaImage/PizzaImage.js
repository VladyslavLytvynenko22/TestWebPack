import PizzaImage from './../../assets/pizza.jpg';
import React from 'react'
import classes from './PizzaImage.css';

export default function pizzaImage() {
  return (
    <div className={classes.PizzaImage}>
      <img src={PizzaImage} className={PizzaImg}/>
    </div>
  )
}
