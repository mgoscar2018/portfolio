package dev.mgoscar.holaSpring.controllers;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.mgoscar.holaSpring.dao.usuarioDao;
import dev.mgoscar.holaSpring.models.Usuario;

@RestController
public class UsuarioController {

    @Autowired
    private usuarioDao usrDao;
    /*
     * @RequestMapping. Is used to map web requests to Spring Controller methods.
     * Result in: http://localhost:8080/prueba
     * public List<String> prueba() {
            return List.of("Manzana","Pera","Melón","Sandia");
        }
     */
    @RequestMapping(value="api/usuario/{id}") //recibe id dinámica
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
    public List<Usuario> getUsuarios() {
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

    @RequestMapping(value="eliminar")
    public Usuario eliminar() {
        Usuario usr = new Usuario();
        usr.setNombre("Oscar");
        usr.setApellido("Miranda");
        usr.setEmail("mgoscar@gmail.com");
        usr.setTelefono("55 1234 5678");        
        return usr;
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
