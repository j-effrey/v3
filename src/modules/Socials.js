import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';

import { breakpoints } from "../components/Breakpoints";

const IconWrapper = styled.div`

    margin: 0 12px;
    display: inline;

    @media (min-width: ${breakpoints.tabletMin}) {
        margin: 0 1vw;
    }
`;

function Socials() {
    return (
        <div>
            <a
                title='Github - @j-effrey'
                target='_blank'
                rel="noopener noreferrer"
                href='https://github.com/j-effrey'
            >
                <IconWrapper><FontAwesomeIcon icon={faGithub} size='lg' class="social" id="git" /></IconWrapper>
            </a>
            <a
                title='LinkedIn - @wongjeffrey'
                target='_blank'
                rel="noopener noreferrer"
                href='https://linkedin.com/in/wongjeffrey'
            >
                <IconWrapper><FontAwesomeIcon icon={faLinkedin} size='lg' class="social" id="linkedin" /></IconWrapper>
            </a>
            <a
                title='Medium - @j.effrey'
                target='_blank'
                rel="noopener noreferrer"
                href='https://medium.com/@j.effrey'
            >
                <IconWrapper><FontAwesomeIcon icon={faMedium} size='lg' class="social" id="medium" /></IconWrapper>
            </a>
            <a
                title='Instagram - @jeff.reywong'
                target='_blank'
                rel="noopener noreferrer"
                href='https://www.instagram.com/jeff.reywong/'
            >
                <IconWrapper><FontAwesomeIcon icon={faInstagram} size='lg' class="social" id="instagram" /></IconWrapper>
            </a>
        </div>
    );
}

export default Socials;