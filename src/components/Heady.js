import React from 'react';
import { func, string } from 'prop-types';
import styled from "styled-components";
import DarkModeBtn from '../modules/DarkMode';
import Logo from '../modules/Logo';
import Title from '../modules/Title';

const HeaderWrapper = styled.div`
  display: inline-flex;
  width: 100%;
`;

const Heady = ({ theme, toggleTheme }) => {
    return (
        <div>
            <HeaderWrapper>
                <Logo theme={theme} />
                <DarkModeBtn theme={theme} toggleTheme={toggleTheme} />
            </HeaderWrapper>
            <Title />
        </div>
    );
};

Heady.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}

export default Heady;
