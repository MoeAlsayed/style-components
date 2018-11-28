import React, { Component } from "react";
import "./App.css";
import styled from "styled-components";
import {dogs} from './data/data'

const Warpper = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 10%;
`;
const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Cards = styled.div`
  width: 30%;
  height: auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background: #fff;
`;

const Img = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
`;
const Title = styled.h1`
  font-size: 24px;
  padding-right: 10px;
`;
const Icon = styled.span`
  &.female {
    color: #ff779e;
    border-bottom: 2px solid #ff779e;
  }
  &.male {
    color: #00c7ff;
    border-bottom: 2px solid #00c7ff;
  }
`;

const Description = styled.p`
  color: gray;
  font-size: 16px;
  margin:20px;
  text-align:left;
`;
const Button = styled.button`
  width: 100%;
  height: 50px;
  margin-top:100px;
  text-decoration:none;
  text-align: center;
  background: ${props => props.primary ? 'palevioletred' : 'white'};
  color: ${props => props.primary ? 'white' : 'palevioletred'};
  border-style:none;
`;

class App extends Component {
  render() {
    return (
      <Warpper className="App">
        {dogs.map(dog => {
            return ( 
            <Cards className="left">
          <Img src={dog.img} />
          <Row>
            <Title>{dog.name}</Title>
            <Icon className="female"  /* {dog.gender === "female" ? :   }*/ > 
              
            </Icon>
          </Row>
          <Row>
            <Description>ID </Description>
            <Description>Age </Description>
            <Description>Regstry</Description>
          </Row>
          <Row>
            <h4>{dog.id}</h4>
            <h4>{dog.age} years</h4>
            <h4>{dog.Registry}</h4>
          </Row>

          <Button primary>button</Button>  
        </Cards>
            );
        })}
      </Warpper>
    );
  }
}

export default App;
