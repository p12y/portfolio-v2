import React from 'react';
import ReactDOM from 'react-dom';
import smoothscroll from 'smoothscroll-polyfill';
import CustomThemeProvider from './components/CustomThemeProvider';
import App from './components/App';
import './index.css';

// Icons
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faLaptopCode,
  faToolbox,
  faPaperPlane,
  faSun,
  faMoon,
  faLevelDownAlt,
  faTimes,
  faExternalLinkAlt,
} from '@fortawesome/free-solid-svg-icons';

import {
  faGithub,
  faGitlab,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

library.add(
  faLaptopCode,
  faToolbox,
  faPaperPlane,
  faSun,
  faMoon,
  faLevelDownAlt,
  faTimes,
  faGithub,
  faGitlab,
  faInstagram,
  faExternalLinkAlt,
  faLinkedin
);

// Add polyfill for Element.scrollIntoView() smooth scroll
smoothscroll.polyfill();

ReactDOM.render(
  <CustomThemeProvider>
    <App />
  </CustomThemeProvider>,
  document.getElementById('root')
);
