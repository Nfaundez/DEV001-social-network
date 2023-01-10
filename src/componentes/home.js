export const Home = (onNavigate) => {
  const HomeDiv = document.createElement('div'); // contenedor para flex con toda la info y botones
  const textoUno = document.createElement('h1'); // se crea un h1 de html con js

  const ButtonLogin = document.createElement('button'); // boton donde se permite el login
  const textoDos = document.createElement('h2');

  textoUno.textContent = 'Bienvenidas a nuestra app';
  ButtonLogin.textContent = 'Login'; // texto ingresado en el boton de login
  textoDos.textContent = 'Esperamos tus mejores consejos de lugares y tragos';
  HomeDiv.className = 'contenedorHome';// para llamarlo en CSS
  textoUno.className = 'textoUno';
  ButtonLogin.className = 'loginHome'; // nombre para css
  textoDos.className = 'textoDos';

  ButtonLogin.addEventListener('click', () => onNavigate('/login')); // evento
  HomeDiv.append(ButtonLogin, textoUno, textoDos);
  return HomeDiv;
};
