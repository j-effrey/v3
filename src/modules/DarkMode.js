import React from "react";
import styled from "styled-components";
import { func, string } from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdjust } from '@fortawesome/free-solid-svg-icons';

const DarkModeWrapper = styled.button` 
    // background-color: aquamarine;
    width: 100%;
    text-align: right;
`;

const DarkModeButton = ({ theme, toggleTheme }) => {

    return (
        <DarkModeWrapper>
            <button onClick={toggleTheme}>
                <FontAwesomeIcon icon={faAdjust} size='lg' class='rhs' />
            </button>
        </DarkModeWrapper>
    );

};

DarkModeButton.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}

export default DarkModeButton;