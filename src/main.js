import {Router} from './core/Router.js';
import {ConfigureGamePage} from './pages/ConfigureGamePage.js';
import {GamePage} from './pages/GamePage.js';
import {RootElement} from './core/RootElement.js';

RootElement.createRootElement(
  document.getElementById('root'),
);

new Router([
    {
      component: ConfigureGamePage, //import('./pages/ConfigureGamePage.js'),
      path: '/',
    },
    {
      component: GamePage,
      path: '/game',
    },
  ],
  '/game',
);

// test navigation:
// const iR = Router.getInstance();
//
// setTimeout(() => {
//   console.log('NAV???');
//   iR.navigate('/')
//   setTimeout(() => {
//     console.log('NAV back???');
//     iR.navigateBack()
//   }, 3000)
// }, 3000)
