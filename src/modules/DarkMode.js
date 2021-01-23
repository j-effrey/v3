import React from "react";
import styled from "styled-components";
import { func, string } from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdjust } from '@fortawesome/free-solid-svg-icons';

const DarkModeWrapper = styled.div` 
    width: 100%;
    display: flex;
    direction: rtl;
`;

const DarkModeButton = ({ theme, toggleTheme }) => {

    return (
        <DarkModeWrapper>
            <button style={{outline: "none"}} onClick={toggleTheme} className="rhsbtn">
                <FontAwesomeIcon icon={faAdjust} size='lg' class="rhs" />
            </button>
        </DarkModeWrapper>
    );

};

DarkModeButton.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}

export default DarkModeButton;