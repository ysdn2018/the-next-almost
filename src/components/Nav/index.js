import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import { spacing } from '../../utils/constants'
import Timer from '../Timer'
import moment from "moment";

/*
  Base component
  Copy this directory and rename to your choosing
*/

const NavContainer = styled.div`
  border-bottom: 1px solid black;
  margin-bottom: -1px;
  height: ${spacing.bigger}px;
  display: flex;

  justify-content: center;
  background-color: white;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  background-color: white;
  pointer-events: auto;
  padding: 0 ${spacing.small}px;
  
`

export default function Nav() {
  return (
    <NavContainer>
        <Timer endDate={moment("2018-04-09 16:00")} />
    </NavContainer>
  )
}
