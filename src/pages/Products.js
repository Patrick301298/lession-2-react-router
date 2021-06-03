import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
} from "reactstrap";
import axios from "axios";
class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }
  componentDidMount() {
    axios.get("http://localhost:8081/product").then((res) => {
      this.setState({
        products: res.data,
      });
    });
  }
  render() {
    const { products } = this.state;
    return (
      <Container>
        <h2>Product</h2>
        <Row>
          {products.map((product, index) => {
            return (
              <Col sm="3" key={index}>
                <Card>
                  <CardImg top width="100%" src={product.imageUrl} />
                  <CardBody>
                    <CardTitle>{product.name}</CardTitle>
                    <CardText>{product.description}</CardText>
                    <Button>Add to cart</Button>
                  </CardBody>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}
export default Products;
