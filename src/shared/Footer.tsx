import React from 'react'
import { styled } from 'styled-components'

const Footer = () => {
  return (
    <>

        <Footers>COPYRIGHT&#169;2023 BY <Brand>VINEMA.<Red>I</Red>D</Brand></Footers>
    
    </>
  )
}

export default Footer

const Footers = styled.div `
    width: 100%;
    height: 20px;
    margin-top: 10px;
    // background: rgb(0, 0, 0, 0.9);
    text-align: center;
`

const Red = styled.span `
    color: red;
`

const Brand = styled.span `
    font-weight: 700;
`