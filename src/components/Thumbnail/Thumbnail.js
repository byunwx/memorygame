import React from "react";
import "./Thumbnail.css";
import { Col, Row, Container } from "../Grid";

// The Thumbnail component renders a div that uses some CSS to render a background image
// It will always keep square proportions at any size without the image warping
// The "role" and "aria label" are there to identify the element's purpose as an image for accessibility purposes
const Thumbnail = props => (
  <Col size="md-3">
  <div
    onClick={props.onClick}
    id= {props.id}
    className="thumbnail"
    role="img"
    data-clicked={props.clickedCard}
    style={{
      backgroundImage: `url(${props.src})`
    }}
  />
  </Col>
);

export default Thumbnail;
