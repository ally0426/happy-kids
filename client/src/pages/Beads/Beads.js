import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import ModalExample from "../../components/ModalExample"
import axios from 'axios';
import "./Beads.css"


class Beads extends Component {
  state = {
    items: [],
    name: "",
    price: "",
    image: "",
    category: "",
    description: ""
  };

  componentDidMount() {
    axios.get('/api/items')
      .then(res => {
        this.setState({ items: res.data.filter(item => item.category === 'Beads') }, () => console.log(this.state));
        console.log(this.state.items);
      })
      .catch((error) => {
        if(error.response.status === 401) {
          this.props.history.push("/login");
        }
      });
  }

  loadItems = () => {
    API.getItems()
      .then(res => {
        console.log(res)
        this.setState({ items: res.data, name: "", price: "", image: "", category: "", description: "" })
      }
      )
      .catch(err => console.log(err));
  };

  deleteItem = id => {
    API.deleteItem(id)
      .then(res => this.loadItems())
      .catch(err => console.log(err));
  };

filterItems(beads) {
    const myItems = this.state.items
    const newArray = myItems.filter(item => item.category !== 'Beads')
    this.setState({
      items: newArray
    })
    console.log('handle remove runned', beads, myItems, newArray)
  }




  render() {
    return (
      <Container fluid>
                 <Row>
                  {this.state.items.map(item => (
                  <Col size="md-4" className="item-card">
                  <ListItem key={item._id}>
                    <List value={"/items/" + item._id}>
                      <div className='Card'>
                      <strong>

                        <p>
                          <img class="bead-img" alt=""src={item.image} />
                        </p>
                        <h4>
                          {item.name} {item.price}
                        </h4>
                        <p>Category: {item.category}</p>
                        <p>{item.description}</p>
                      </strong>
                      </div>
                    </List>
                    <button className="btn btn-danger"><ModalExample />Add To Cart</button>
                  </ListItem>
                  </Col>
                ))}
                
                </Row>
                </Container>
    );
  }
}

export default Beads;







