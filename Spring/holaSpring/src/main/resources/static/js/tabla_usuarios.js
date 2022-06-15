// Call the dataTables jQuery plugin
$(document).ready(function() {
  cargarUsuarios();
  $('#tablaUsuarios').DataTable();
});


async function cargarUsuarios() {
  const request = await fetch('api/usuarios',{
    method: 'GET',
    headers: getHeaders()
  });

  const usuarios = await request.json();
  console.log(usuarios);

  let resultado = '';
  for (let usuario of usuarios) {
    let tel = usuario.telefono == null?'-':usuario.telefono; //Para evitar que coloque NULL cuando no tenga teléfono

    resultado += `
    <tr>
      <td>${usuario.id}</td>
      <td>${usuario.nombre} ${usuario.apellido}</td>
      <td>${usuario.email}</td>
      <td>${tel}</td>
      <td>
        <a href="#" onclick="eliminarUsr(${usuario.id})" class="btn btn-danger btn-circle btn-sm">
          <i class="fas fa-trash"></i>
        </a>
      </td>
    </tr>`;
  }
  document.querySelector("#tablaUsuarios tbody").outerHTML = resultado;
}

function getHeaders() {
  return {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': localStorage.token
  };
} 

async function eliminarUsr(id) {
  if (confirm('¿Desea eliminar este usuario?')) {    
    const request = await fetch('api/usuarios/'+id,{
      method:'DELETE',
      headers: getHeaders()
      /* Lo siguiente se mandó a una función para que quedara reutilizable
      headers: { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': localStorage.token
      }*/
    });
  }

  location.reload();
}