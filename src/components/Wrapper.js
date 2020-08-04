import React from "react";
import styled from "styled-components";
import { breakpoints } from './Breakpoints';

const WrapperComponent = styled.div`
    width: 100%;
    margin: auto;
    font-size: 18px;
    line-height: 150%;

    @media (min-width: ${breakpoints.tabletMin}) {
        width: 60%;
    }
    @media (min-width: ${breakpoints.desktopMin}) {
        width: 50%;
    }

`;

const Wrapper = ({children}) => (
    <WrapperComponent>
      <div>{children}</div>
    </WrapperComponent>
  );

export default Wrapper;
