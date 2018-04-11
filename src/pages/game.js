import React, { Component } from "react";
import Thumbnail from "../components/Thumbnail";
import { Col, Row, Container } from "../components/Grid";
import images from "../image.json";
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron"

class Game extends Component {

  state = {
    cards: [],
    score:0,
    topScore: 0,
    clickedCard:[],
    msg:""
  };

  componentDidMount(){
    this.setState({cards: images})
  }

  cardClicked =(id) =>{
    if (this.state.score==12) {
      this.setState({
        score: 0,
        clickedCard:[],
        msg:"CONGRATES YOU WON THE GAME!"
      })
    }else if (this.state.clickedCard.indexOf(id)>=0) {
      this.setState({
        score: 0,
        clickedCard:[],
        msg:"WRONG ANSWER"
      })
      this.sortCards();
    }else {
      this.state.clickedCard.push(id);
      this.setState({score:this.state.score+1}, ()=>{
        if (this.state.topScore<this.state.score) {
          this.setState({
            topScore: this.state.score,
            msg: "GREAT! NEW TOPSCORE!"
          })
        }else{
          this.setState({
            msg: "You guessed correctly"
          })
        }
      });
      this.sortCards();
    }
  }

  sortCards =()=>{
    this.state.cards.sort(() => {
                return 0.5 - Math.random();
            });
  }

render() {
  this.sortCards();
  return(
    <Container fluid>
    <Nav score={this.state.score} topScore={this.state.topScore}/>
    <Jumbotron>
      {this.state.msg}
    </Jumbotron>
      <Row>
        <Col size="md-8 md-offset-2">
          {this.state.cards.map(card => {
            return(
              <Thumbnail key={card.id} onClick={()=>this.cardClicked(card.id)} src={card.url} id={card.id} clickedCard={card.clickedCard} />
            )
          })}
        </Col>
      </Row>
    </Container>
  );
}



}


export default Game;
