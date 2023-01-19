import {
  saveTask, onGetTask, deletePost, auth,
} from '../firebase.js';

export const Muro = (onNavigate) => {
  const MuroDiv = document.createElement('div');
  const cuadroPost = document.createElement('textarea'); // textarea para post
  cuadroPost.innerHTML = '';
  const buttonLogout = document.createElement('button'); // boton para volver al home
  const buttonPost = document.createElement('button'); // boton para posteae
  const postDiv = document.createElement('div'); // div creado para almacenar y mostrar post

  buttonLogout.textContent = 'Volver al home';
  buttonPost.textContent = 'Post';

  cuadroPost.id = 'posteo';

  MuroDiv.className = 'contenedorMuro';
  buttonLogout.className = 'botonLogout';
  cuadroPost.className = 'cuadropost';
  buttonPost.className = 'post';
  postDiv.className = 'divPost';

  cuadroPost.rows = '8'; // cantidad de lineas que aguanta el textarea

  buttonLogout.addEventListener('click', () => onNavigate('/')); // evento que regresa al home

  MuroDiv.append(buttonLogout, cuadroPost, buttonPost, postDiv);
  window.addEventListener('DOMContentLoaded', async () => { // funcion para mostrar las publicaciones
    onGetTask((querySnapshot) => {
      cuadroPost.innerHTML = '';
      let html = '';
      querySnapshot.forEach((doc) => {
        const task = doc.data();
        html += ` 
            <div>
            <span>${auth.currentUser.displayName} 
</span>
            <h3>${task.publicacion}</h3>
            <button class="botonDelete" data-id=${doc.id}>eliminar</button>
            </div> `;
      }); // muestra usuario, la publicacion en h3 y el boton eliminar
      postDiv.innerHTML = html;
      postDiv.querySelectorAll('.botonDelete').forEach((button) => { // evento del boton elimianr
        button.addEventListener('click', (e) => {
          deletePost(e.target.dataset.id); // eliminar los post
        });
      });
    });

    buttonPost.addEventListener('click', () => { // funcion para guardar en la coleccion los post
      const publicacion = cuadroPost.value;
      // aqui crear en fire una funcion que tenga que ver con las  publicaciones(publicacion);
      saveTask(publicacion)
        .then(() => {
          alert('saluuuud');
        })
        .catch((error) => console.log(error));
    // cuadroPost.reset() consultar como limpiar text area con js
    });
  });
  return MuroDiv;
};
