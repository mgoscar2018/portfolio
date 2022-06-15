package dev.mgoscar.holaSpring.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import de.mkammerer.argon2.Argon2;
import de.mkammerer.argon2.Argon2Factory;
import dev.mgoscar.holaSpring.dao.usuarioDao;
import dev.mgoscar.holaSpring.models.Usuario;
import dev.mgoscar.holaSpring.utils.JWTUtil;

@RestController
public class UsuarioController {

    @Autowired
    private usuarioDao usrDao;

    @Autowired
    private JWTUtil jwtUtil;
    /*
     * @RequestMapping. Is used to map web requests to Spring Controller methods.
     * Result in: http://localhost:8080/prueba
     * public List<String> prueba() {
            return List.of("Manzana","Pera","Melón","Sandia");
        }
     */
    //@RequestMapping(value="api/usuarios/{id}",method = RequestMethod.GET) //por defecto es de tipo GET
    @RequestMapping(value="api/usuarios/{id}") //recibe id dinámica
    public Usuario getUsuario(@PathVariable Long id) {
        Usuario usr = new Usuario();
        usr.setId(id);
        usr.setNombre("Oscar");
        usr.setApellido("Miranda");
        usr.setEmail("mgoscar@gmail.com");
        usr.setTelefono("55 1234 5678");        
        return usr;
    }

    @RequestMapping(value="api/usuarios") 
    public List<Usuario> getUsuarios(@RequestHeader(value="Authorization") String token) {

        //Verificar que el token sea correcto
        String usuarioID = jwtUtil.getKey(token);
        if (usuarioID == null) {
            return new ArrayList<>(); //Devuelve lista vacia en caso de no estar autorizado
        }
        return usrDao.getUsuarios();
    }

    @RequestMapping(value="editar")
    public Usuario editar() {
        Usuario usr = new Usuario();
        usr.setNombre("Oscar");
        usr.setApellido("Miranda");
        usr.setEmail("mgoscar@gmail.com");
        usr.setTelefono("55 1234 5678");        
        return usr;
    }
    
    @RequestMapping(value="api/usuarios/{id}",method = RequestMethod.DELETE)
    public void eliminar(@PathVariable Long id) {
        usrDao.eliminar(id);
    }

    @RequestMapping(value="api/usuarios",method = RequestMethod.POST)
    public void registrarUsr(@RequestBody Usuario nvoUsr) { //la anotación @RequestBody convierte el JSON recibido en un usuario automáticamente

        //Hash a la contraseña (cifrado)
        Argon2 a2 = Argon2Factory.create(Argon2Factory.Argon2Types.ARGON2id);
        //1 iteración (entre más iteraciones, más seguro pero más tardado)
        //1024 de memoria
        //1 paralelismo - número de procesadores
        String pswHash = a2.hash(1, 1024, 1, nvoUsr.getPassword().toCharArray());
        nvoUsr.setPassword(pswHash);

        //Solicitar registrar al usuario en la BD
        usrDao.registrar(nvoUsr);
    }

    @RequestMapping(value="buscar")
    public Usuario buscar() {
        Usuario usr = new Usuario();
        usr.setNombre("Oscar");
        usr.setApellido("Miranda");
        usr.setEmail("mgoscar@gmail.com");
        usr.setTelefono("55 1234 5678");        
        return usr;
    }
}
