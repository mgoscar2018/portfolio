package dev.mgoscar.holaSpring.dao;

import java.util.List;

import dev.mgoscar.holaSpring.models.Usuario;

public interface usuarioDao {
    List<Usuario> getUsuarios();
}
