import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }

  button {
    color: ${ ({ theme }) => theme.button };
  }

  #git:hover {
    color: ${ ({ theme }) => theme.button };
  }

  #medium:hover {
    color: ${ ({ theme }) => theme.button };
  }
  
  .cursor i {
    background-color: ${ ({ theme }) => theme.button };
  }

  .email {
    color: ${({ theme }) => theme.text};
    border-bottom: 2px solid ${({ theme }) => theme.text};
    transition: border-bottom 0.2s;
    
  }
  .email:hover {
    border-bottom: 2px solid transparent;
  }

  .footer {
    color: ${({ theme }) => theme.text};
  }
  .footer:hover {
    border-bottom: 2px solid ${({ theme }) => theme.text};
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.text};
  }

  .exppanel {
    background-color: ${({ theme }) => theme.panelBackground};
    border: 2px solid ${({ theme }) => theme.panelBorder};
    border-radius: 15px;
    box-shadow: 0 10px 6px -6px ${({ theme }) => theme.panelShadow};
  }

  .detail {
    background-color: ${({ theme }) => theme.panelDetail};
    display: inline;
    padding: 8px;
    border-radius: 5px;
  }
`