import React from "react";
import styled from "styled-components";

const TitleWrapper = styled.p`
    width: 100%;
    // background-color: orange;
    text-align: center;
    // margin: 0;
    margin: 50px 0 50px 0;
    text-transform: uppercase;
    letter-spacing: 0.07em;
`;

function Title() {
    return (
        <TitleWrapper><p class="title">Jeffrey Wong.<span class="cursor"><i></i></span></p></TitleWrapper>
    );
}

export default Title;