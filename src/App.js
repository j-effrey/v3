import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles";
import { lightTheme, darkTheme } from "./components/Themes";
import About from './modules/About';
import Home from './modules/Home';
import BucketList from './modules/BucketList';
import Work from './modules/Work';
import Games from './modules/Games';
import Playlist from './modules/Playlist';
import { breakpoints } from './components/Breakpoints';

const AppWrapper = styled.div`
  margin: 50px auto;
  width: 80%;
  max-width: 900px;
  font-family: Droid Sans Mono;

  @media (min-width: ${breakpoints.tabletMin}) {
    margin: 75px auto;
  }

  @media (min-width: ${breakpoints.desktopMin}) {
    margin: 100px auto;
  }
`;

function App() {

  var [theme, setTheme] = useState('dark');
  var toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  const HomeComp = () => (
    <Home theme={theme} toggleTheme={toggleTheme} />
  );
  
  return (
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <AppWrapper>          
          <Switch>
            <Route exact={true} path="/" component={HomeComp} />
            <Route path="/about" component={About} />
            <Route path="/work" component={Work} />
            <Route path="/games" component={Games} />
            <Route path="/playlist" component={Playlist} />
            <Route path="/bucketlist" component={BucketList} />
          </Switch>
        </AppWrapper>
      </ThemeProvider>
  );
}

export default App;