//import { onNavigate } from '../main.js'; //se importa nuestra funcion para  darle el evento
// home es la primera vista de la pantalla y nuestra primera carpeta de componentes
export const Home = (onNavigate) => {

  const HomeDiv = document.createElement('div');
  const buttonRegister = document.createElement('button'); // botones de bienvenida
  const buttonLogin = document.createElement('button');

  buttonRegister.textContent = 'Registrate'; // nombre que contienen estos botones
  buttonLogin.textContent = 'Inicia sesión';

  buttonRegister.addEventListener('click', () => onNavigate('/register')); // eventos de los botones
  buttonLogin.addEventListener('click', () => onNavigate('/login'));

  HomeDiv.appendChild(buttonRegister); // appendchild inserta un nodo dentro de la estructura dom
  HomeDiv.appendChild(buttonLogin);

  return HomeDiv;
};