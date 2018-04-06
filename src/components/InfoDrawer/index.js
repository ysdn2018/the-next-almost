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

  @media (max-width: ${breakpoints.tablet}) {
    transform: translateY(${props => props.open ? "0" : "calc(100% - 3.86rem)"});
    height: 70%;
  }
`

const Text = styled.p`

`

const InnerNav = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  width: 100%;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    justify-content: space-between;
  }
`

const ShowInfo = styled.div `
  width: 95%;
  display: flex;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    height: 100%;
    flex-direction: column;
  }
`

const ShowTitle = styled.div `
  width: 100%;
  padding: ${spacing.small}px;
  border-right: 1px solid;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;

  @media (max-width: ${breakpoints.tablet}) {
    border-right: 0px;
    border-bottom: 1px solid;
  }

`

const ShowTimes = styled.div `
  padding: ${spacing.small}px;
  border-right: 1px solid;
  width: 45%;
  display: flex;
  flex-direction: column;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    border-right: 0px;
    border-bottom: 1px solid;
    align-content: center;
  }

`

const ShowDate = styled.div `
  margin-bottom: ${spacing.big}px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-top: ${spacing.smaller}px;
    margin-bottom: ${spacing.smaller}px;
  }

`

const ShowNight = styled.div `
  display: flex;
  justify-content: space-between;
  margin-bottom: .2rem;
`

const ShowAddress = styled.div `
`

const SocialLinks = styled.div `
  display: flex;
  flex-direction: column;
  width: 5%;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    flex-direction: row;
  }

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

          <ShowInfo>

            <ShowTitle>
              <h2>The Next Design Gradshow <br></br>By York University/Sheridan College</h2>
              <ShowAddress>
                <p>The Gladstone Hotel</p>
                <p>1214 Queen St. West</p>
                <p>Toronto, Ontario</p>
              </ShowAddress>
            </ShowTitle>

            <ShowTimes>
              <ShowDate>
                <h3>April 11</h3>
                <ShowNight>
                  <h2>Industry Night</h2>
                  <h2>5-8PM</h2>
                </ShowNight>
                <ShowNight>
                  <h2>Opening Party</h2>
                  <h2>8-11PM</h2>
                </ShowNight>
              </ShowDate>
              <ShowDate>
                <h3>April 12-13</h3>
                <ShowNight>
                  <h2>Public Viewing</h2>
                  <h2>10AM-4PM</h2>
                </ShowNight>
              </ShowDate>
            </ShowTimes>

          </ShowInfo>

          <SocialLinks>
              <Instagram/>
              <Instagram/>
          </SocialLinks>

        </InnerNav>

      </Container>
    )
  }
}
