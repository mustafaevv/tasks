import React from 'react'
import styled from "styled-components";

const H1 = styled.h1`
  color: white;
  font-size: 34px;
  font-weight: bold;
  text-align: center;
  margin: 50px 0;
`

const Title = ({children}) => {
  return (
    <H1>{children}</H1>
  )
}

export default Title