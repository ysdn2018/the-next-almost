import React from 'react'
import styled from 'styled-components'
import DrawerButton from '../DrawerButton'
import Instagram from '../Instagram'
import { animations, spacing, breakpoints } from '../../utils/constants.js'


const BottomNavButton = DrawerButton.extend`
  border-top: 1px solid black;
  top: -1px;
  border-bottom: 1px solid black;
  background-color: #FFE000;
`

// styled components
const Container = styled.div`
  z-index: 5;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 380px;
  background-color: #FFE000;
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

const Text = styled.p`

`

const InnerNav = styled.div`
  position: relative;
  height: 100%;
`

const ShowTitle = styled.div `

`

const ShowTimes = styled.div `
  
`

// component
export default class BottomNav extends React.Component {
  state = {
    open: false
  }

  handleClick = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }))
  }

  render() {
    return (
      <Container open={this.state.open}>

        <BottomNavButton onClick={this.handleClick}>
          {this.state.open ? "Close" : "Info"}
        </BottomNavButton>

        <InnerNav>

          <ShowTitle>
            <h1>stuff</h1>
          </ShowTitle>

          <ShowTimes></ShowTimes>
          <Instagram />

        </InnerNav>

      </Container>
    )
  }
}
