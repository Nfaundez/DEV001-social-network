export const Login = (signIn, onNavigate) => {
  const HomeDiv = document.createElement('div');

  const textoLogin = document.createElement('h1'); // se crea un h1 de html con js
  const buttonGoogle = document.createElement('button');
  const buttonHome = document.createElement('button');

  textoLogin.textContent = 'Ingresa a nuestra app'; // texto que contiene
  buttonGoogle.textContent = 'Login con Google';
  buttonHome.textContent = 'Volver al home';

  HomeDiv.className = 'contenedorLogin';
  textoLogin.className = 'textoLogin';
  buttonGoogle.className = 'botonGoogle';
  buttonHome.className = 'botonHome';

  buttonGoogle.addEventListener('click', () => signIn().then(() => onNavigate('/muro')));
  buttonHome.addEventListener('click', () => onNavigate('/'));
  HomeDiv.append(buttonGoogle, buttonHome, textoLogin);

  return HomeDiv;
};
