import { Box, Typography, styled } from "@mui/material";
import React from "react";
import { navData } from "../Constants/data";

// const ContainerNav = styled(Box)`
//   background-color: #eee;
//   width: 100vw;
//   height: 16vh;
// `;

const Component = styled(Box)`
  display: flex;
  margin: 55px 130px 0 130px;
  justify-content: space-between;
  background: #fff;
`

const Container = styled(Box)`
  padding: 12px 8px;
  text-align: center;
`

const Text = styled(Typography)`
  font-family: inherit;
    font-weight: 600;
    font-size: 16px;
`

const Navbar = () => {
  return (
    <Component>
      {navData.map((item, index) => {
        return (
          <Container key={index} className="nav-item">
            <img src={item.url} alt={item.text} style={{width: '64px'}}/>
            <Text>{item.text}</Text>
          </Container>
        );
      })}
    </Component>
  );
};

export default Navbar;
