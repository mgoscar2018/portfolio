async function loginUsuario() {
    let datos = {};
    datos.email = document.getElementById('loginEmail').value;
    datos.password = document.getElementById('loginPassword').value;

    const request = await fetch('api/login',{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(datos)
    });
    
    const respuesta = await request.text();
    if (respuesta == 'OK') {
        window.location.href = 'usuarios.html';
    } else {
        alert('¡Las credenciales son incorrectas!');
    }
}