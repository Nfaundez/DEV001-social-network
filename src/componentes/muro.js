import {
  saveTask, getTasks, onGetTask, deletePost,
} from '../firebase.js';

export const Muro = (onNavigate) => {
  const MuroDiv = document.createElement('div');
  const cuadroPost = document.createElement('textarea');
  const buttonLogout = document.createElement('button');
  const buttonPost = document.createElement('button');
  const postDiv = document.createElement('div');

  buttonLogout.textContent = 'Volver al home';
  buttonPost.textContent = 'Post';

  cuadroPost.id = 'posteo';

  MuroDiv.className = 'contenedorMuro';
  buttonLogout.className = 'botonLogout';
  cuadroPost.className = 'cuadropost';
  buttonPost.className = 'post';

  cuadroPost.rows = '8';
  // intento de que se vea el nombre de uduario
  MuroDiv.innerHtml = ` 
    <span>{$currentUser.displayName}</span> `;
  buttonLogout.addEventListener('click', () => onNavigate('/'));

  // para que aparezca el nomnbre de usuario
  MuroDiv.append(buttonLogout, cuadroPost, buttonPost, postDiv);

  window.addEventListener('DOMContentLoaded', async () => {
    onGetTask((querySnapshot) => {
      let html = '';
      querySnapshot.forEach((doc) => {
        const task = doc.data();
        html += ` 
            <div>
            <h3>${task.publicacion}</h3>
            <button class="botonDelete" data-id=${doc.id}>eliminar</button>
            </div> `;
      });
      postDiv.innerHTML = html;
      postDiv.querySelectorAll('.botonDelete').forEach((button) => {
        button.addEventListener('click', (e) => {
          deletePost(e.target.dataset.id);
        });
      });
    });

    buttonPost.addEventListener('click', () => {
      const publicacion = cuadroPost.value; // aqui va el value?
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
