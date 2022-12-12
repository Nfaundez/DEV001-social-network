// Este es el punto de entrada de tu aplicacion
import { Home } from './componentes/home.js'; // se importaron todas las funciones
import { Register } from './componentes/register.js';
import { Login } from './componentes/login.js';

const rootDiv = document.getElementById('root');
const routes = {
  '/': Home, // aqui se asigna a las rutas
  '/register': Register,
  '/login': Login,
};

rootDiv.appendChild (routes[window.location.pathname]());


export const onNavigate = (pathname) => { //dar click e invocar esta funcion
  window.history.pushState( 
    {}, // es el estado
    pathname, // titulo
    window.location.origin + pathname, // ruta que queremos asignar
    ); // con el + concatenamos el pathname
    //while (rootDiv.firstChild) { // siempre que exista un primer hijo vamos a borrarlo
     // rootDiv.removeChild(rootDiv.firstChild);
     rootDiv.appendChild(routes[pathname]());
     window.onpopstate = () => {
      rootDiv.innerHTML = routes[window.location.pathname]()
    }
    
      }
    //};

    const component = routes[window.location.pathname];
    window.onpopstate = () => { // guarda una copia en nuestro historial
      //while (rootDiv.firstChild) {
        // rootDiv.removeChild(rootDiv.firstChild);
        // rootDiv.appendChild(routes[window.location.pathname]());
         }
        //};

        rootDiv.appendChild(component());






