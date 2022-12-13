
/* eslint-disable import/no-unresolved */
import { Home } from './componentes/home.js';
import { Register } from './componentes/register.js';
import { Login } from './componentes/login.js';


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
  '/register': Register(onNavigate),
  '/login': Login(onNavigate),
};

const component = () => routes[window.location.pathname];

window.onpopstate = () => {
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(routes[window.location.pathname]);
};
rootDiv.appendChild(component());



