package dev.mgoscar.holaSpring.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import dev.mgoscar.holaSpring.dao.usuarioDao;
import dev.mgoscar.holaSpring.models.Usuario;

@RestController
public class AuthController {
    @Autowired
    private usuarioDao usrDao;
    
    @RequestMapping(value="api/login",method = RequestMethod.POST)
    public String login(@RequestBody Usuario loginUsr) {
        if (usrDao.verificarEmailPsw(loginUsr)) {
            return "OK";
        }
        return "FALLO";
    }
}
