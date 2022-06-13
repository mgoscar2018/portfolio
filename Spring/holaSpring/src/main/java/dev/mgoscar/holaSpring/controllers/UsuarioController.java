package dev.mgoscar.holaSpring.controllers;


import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.mgoscar.holaSpring.models.Usuario;

@RestController
public class UsuarioController {

    /*
     * @RequestMapping. Is used to map web requests to Spring Controller methods.
     * Result in: http://localhost:8080/prueba
     * public List<String> prueba() {
            return List.of("Manzana","Pera","Melón","Sandia");
        }
     */
    @RequestMapping(value="usuario/{id}") //recibe id dinámica
    public Usuario getUsuario(@PathVariable Long id) {
        Usuario usr = new Usuario();
        usr.setId(id);
        usr.setNombre("Oscar");
        usr.setApellido("Miranda");
        usr.setEmail("mgoscar@gmail.com");
        usr.setTelefono("55 1234 5678");        
        return usr;
    }

    @RequestMapping(value="usuarios") 
    public List<Usuario> getUsuarios() {
        List<Usuario> usuarios = new ArrayList<>();

        Usuario usr = new Usuario();
        usr.setId(123L);
        usr.setNombre("Oscar");
        usr.setApellido("Miranda");
        usr.setEmail("mgoscar@gmail.com");
        usr.setTelefono("55 1234 5678");

        Usuario usr2 = new Usuario();
        usr2.setId(456L);
        usr2.setNombre("Homero");
        usr2.setApellido("Simpson");
        usr2.setEmail("hsimpson@correo.com");
        usr2.setTelefono("55 3432 3678");

        Usuario usr3 = new Usuario();
        usr3.setId(789L);
        usr3.setNombre("Lisa");
        usr3.setApellido("Simpson");
        usr3.setEmail("lsimpson@correo.com");
        usr3.setTelefono("77 7234 5553");

        usuarios.add(usr);
        usuarios.add(usr2);
        usuarios.add(usr3);

        return usuarios;
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
