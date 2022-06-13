// Call the dataTables jQuery plugin
$(document).ready(function() {
  cargarUsuarios();
  $('#tablaUsuarios').DataTable();
});


async function cargarUsuarios() {
  const request = await fetch('api/usuarios',{
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });

  const usuarios = await request.json();
  console.log(usuarios);

  let resultado = '';
  for (let usuario of usuarios) {
    resultado += `
    <tr>
      <td>${usuario.id}</td>
      <td>${usuario.nombre}</td>
      <td>${usuario.email}</td>
      <td>${usuario.telefono}</td>
      <td>
        <a href="#" class="btn btn-danger btn-circle btn-sm">
          <i class="fas fa-trash"></i>
        </a>
      </td>
    </tr>`;
  }
  document.querySelector("#tablaUsuarios tbody").outerHTML = resultado;
}