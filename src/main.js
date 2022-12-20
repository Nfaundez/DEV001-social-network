import { Home } from './componentes/home.js';
import { Login } from './componentes/login.js';
import { Muro } from './componentes/muro.js';
import { signIn } from './firebase.js';


const rootDiv = document.getElementById('root');
let routes = {};

const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
    );

    while (rootDiv.firstChild) {
      rootDiv.removeChild(rootDiv.firstChild);
    }
    rootDiv.appendChild(routes[pathname]); 
  };

  routes = {
    '/': Home(onNavigate),
    '/login': Login(signIn, onNavigate),
    '/muro': Muro(),
  };

  const component = () => routes[window.location.pathname];
  window.onpopstate = () => {
    while (rootDiv.firstChild) {
      rootDiv.removeChild(rootDiv.firstChild);
    }
    rootDiv.appendChild(routes[window.location.pathname]);
  };

  rootDiv.appendChild(component()); // encontrar error
  
 





