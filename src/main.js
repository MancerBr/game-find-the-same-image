import {Router} from './core/Router.js';
import {ConfigureGamePage} from './pages/ConfigureGamePage.js';
import {GamePage} from './pages/GamePage.js';
import {RootElement} from './core/RootElement.js';

RootElement.createRootElement(
  document.getElementById('root'),
);

new Router([
    {
      component: ConfigureGamePage,
      path: '/',
    },
    {
      component: GamePage,
      path: '/game',
    },
  ],
  '/game',
);
