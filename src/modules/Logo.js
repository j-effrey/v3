import React from "react";
import logoBlack from "../images/logo-black-v2.png";
import logoWhite from "../images/logo-white-v2.png";
import styled from "styled-components";
import { breakpoints } from "../components/Breakpoints";
import { string } from 'prop-types';

// const LogoWrapper = styled.div`
//   // width: 50%;
//   background-color: aqua;
// `;

const Logo = ({ theme }) => {
  var isLight = theme === 'light';

  return (
    <img src={isLight ? logoBlack : logoWhite} class="logo"></img>
  )
};

Logo.propTypes = {
  theme: string.isRequired,
}

export default Logo;
