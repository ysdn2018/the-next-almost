import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import StatementHeader from '../components/StatementHeader'
import InfoDrawer from '../components/InfoDrawer'


// styled components
const Container = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
`


// page component
export default class IndexPage extends React.Component {
  state = {
    infoOpen: false
  }

  handleInfoClick = () => {
    this.setState(prevState => ({
      infoOpen: !prevState.infoOpen
    }))
  }

  render() {
    return (
      <Container>

        <StatementHeader
          infoOpen={this.state.infoOpen}
        />

        <InfoDrawer 
          handleClick={this.handleInfoClick}
          open={this.state.infoOpen}
        />

      </Container>
    )
  }
}

