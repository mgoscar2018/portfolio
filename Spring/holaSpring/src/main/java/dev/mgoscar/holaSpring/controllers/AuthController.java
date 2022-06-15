package dev.mgoscar.holaSpring.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import dev.mgoscar.holaSpring.dao.usuarioDao;
import dev.mgoscar.holaSpring.models.Usuario;
import dev.mgoscar.holaSpring.utils.JWTUtil;

@RestController
public class AuthController {
    @Autowired
    private usuarioDao usrDao;

    @Autowired
    private JWTUtil jwtUtil;
    
    @RequestMapping(value="api/login",method = RequestMethod.POST)
    public String login(@RequestBody Usuario loginUsr) {
        /*  
        if (usrDao.verificarEmailPsw(loginUsr)) { //Utilizado cuando no se trabajaba con sesión        
            return "OK";
        }
        return "FALLO";
        */
        Usuario usrLoged = usrDao.obtenerUsrPorCredenciales(loginUsr);
        if (usrLoged != null) { 
            String tokenJWT = jwtUtil.create(String.valueOf(usrLoged.getId()), usrLoged.getEmail()); //Genera un token
            return tokenJWT;
        }
        return "FALLO";
    }
}
