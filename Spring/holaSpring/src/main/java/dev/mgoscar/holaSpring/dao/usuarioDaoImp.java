package dev.mgoscar.holaSpring.dao;

import dev.mgoscar.holaSpring.models.Usuario;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import java.util.List;

@Repository
public class usuarioDaoImp implements usuarioDao{

    @PersistenceContext
    private EntityManager em; //permite realizar la conexión con la BD

    @Override    
    public List<Usuario> getUsuarios() {
        String consulta = "FROM Usuario"; // "Usuario" es el nombre de la clase, no de la tabla
        /*
        List<Usuario> resultado = em.createQuery(consulta,Usuario.class).getResultList();
        return resultado;
         */
        return em.createQuery(consulta,Usuario.class).getResultList();        
    }

    @Override
    @Transactional //util al invocar al método de remove en la función eliminar
    public void eliminar(Long id) {
        Usuario usuario = em.find(Usuario.class, id);
        System.out.println("....ELIMINANDO=>"+usuario);
        em.remove(usuario);        
    }

    @Override
    @Transactional //también se ocupa con método "merge"
    public void registrar(Usuario nvoUsr) {
        em.merge(nvoUsr);
    }

    @Override
    public boolean verificarEmailPsw(Usuario loginUsr) {
        String query = "FROM Usuario WHERE email = :email AND password = :password"; // "Usuario" es el nombre de la clase, no de la tabla
        List<Usuario> lista = em.createQuery(query,Usuario.class)
            .setParameter("email", loginUsr.getEmail())
            .setParameter("password", loginUsr.getPassword())
            .getResultList();
        
        return !lista.isEmpty();
    }
}
