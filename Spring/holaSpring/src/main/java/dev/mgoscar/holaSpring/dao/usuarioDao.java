package dev.mgoscar.holaSpring.dao;

import java.util.List;

import dev.mgoscar.holaSpring.models.Usuario;

public interface usuarioDao {
    List<Usuario> getUsuarios();

    void eliminar(Long id);

    void registrar(Usuario nvoUsr);

    boolean verificarEmailPsw(Usuario loginUsr);

    Usuario obtenerUsrPorCredenciales(Usuario loginUsr);

}
