import React from "react";
import logoBlack from "../images/logo-black-v2.png";
import logoWhite from "../images/logo-white-v2.png";
import { string } from 'prop-types';

const Logo = ({ theme }) => {
  var isLight = theme === 'light';

  return (
    <img src={isLight ? logoBlack : logoWhite} className="logo" alt="Logo"></img>
  )
};

Logo.propTypes = {
  theme: string.isRequired,
}

export default Logo;
