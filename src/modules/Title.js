import React from "react";
import styled from "styled-components";

const TitleWrapper = styled.div`
    width: 100%;
    text-align: center;
    margin: 50px 0 50px 0;
    text-transform: uppercase;
    letter-spacing: 0.07em;
`;

function Title() {
    return (
        <TitleWrapper><p className="title">Jeffrey Wong <span className="cursor"><i></i></span></p></TitleWrapper>
    );
}

export default Title;