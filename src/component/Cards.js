import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import waterfall from "./images/img-9.jpg";
import bali from "./images/img-2.jpg";
import mountain from "./images/img-1.jpg";
import tennis from "./images/img-4.jpg";
import dessert from "./images/img-8.jpg";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out this epic destinations!!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={waterfall}
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum accusamus excepturi repudiandae, nam nesciunt tempore doloribus voluptatem ab facilis aut, repellat architecto molestiae?"
              label="Adventure"
              path="/services"
            />
            <CardItem src={bali} text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit animi eius consectetur accusamus unde voluptates illum possimus distinctio voluptatibus hic." label="Luxury" path="/services" />
          </ul>
          <ul className="cards__items">
            <CardItem src={mountain} text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia possimus non temporibus ratione iure eum." label="Sunrise" path="/services" />
            <CardItem
              src={tennis}
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum accusamus excepturi repudiandae, nam nesciunt tempore doloribus voluptatem ab facilis aut, repellat architecto molestiae?"
              label="Sports"
              path="/services"
            />
            <CardItem
              src={dessert}
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quae obcaecati nemo magni totam voluptates dolorem quisquam reiciendis. Voluptatum autem praesentium eum sint amet quam?"
              label="Heritage"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
