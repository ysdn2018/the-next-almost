import React from 'react'
import styled from 'styled-components'
import DrawerButton from '../DrawerButton'
import Instagram from '../Instagram'
import { animations, spacing, breakpoints } from '../../utils/constants.js'


const BottomNavButton = DrawerButton.extend`
  border-top: 1px solid black;
  top: -1px;
  border-bottom: 1px solid black;
`

const Container = styled.div`
  z-index: 5;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 380px;
  background-color: white;
  padding-top: calc(4rem - 1px);
  transition: transform 200ms cubic-bezier(.14,.6,.36,1);
  transform: translateY(${props => props.open ? "0" : "calc(380px - 3.86rem)"});

  &:hover {
    @media (min-width: 550px) {
      transform: translateY(${props => props.open ? "0" : "calc(100% - 4.5rem)"});
    }
    @media (min-width: ${breakpoints.mobile}) {
      transform: translateY(${props => props.open ? "0" : "calc(380px - 4.5rem)"});
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    transform: translateY(${props => props.open ? "0" : "calc(100% - 3.86rem)"});
    height: 90%;
  }
`

const InnerNav = styled.div`
  position: relative;
  height: 100%;
`

// component
export default class BottomNav extends React.Component {
  render() {
    return (
      <Container open={this.props.open}>

        <BottomNavButton onClick={this.props.handleClick}>
          {this.props.open ? "Close" : "Info"}
        </BottomNavButton>

        <InnerNav>
          <h1>stuff</h1>
          <Instagram /> 
          
        </InnerNav>

      </Container>
    )
  }
}
