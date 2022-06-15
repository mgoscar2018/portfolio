package dev.mgoscar.holaSpring.dao;

import dev.mgoscar.holaSpring.models.Usuario;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import de.mkammerer.argon2.Argon2;
import de.mkammerer.argon2.Argon2Factory;

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
        String query = "FROM Usuario WHERE email = :email"; //:email es un parámetro, se utiliza de esta manera para evitar SQL Injection
        List<Usuario> lista = em.createQuery(query,Usuario.class)
            .setParameter("email", loginUsr.getEmail())
            .getResultList();
        
        if (lista.isEmpty()) return false; //En caso de no encontrar al usuario

        String pswHashed = lista.get(0).getPassword();
        Argon2 ar2 = Argon2Factory.create(Argon2Factory.Argon2Types.ARGON2id);
        return ar2.verify(pswHashed, loginUsr.getPassword().toCharArray());        
    }

    @Override
    public Usuario obtenerUsrPorCredenciales(Usuario loginUsr) {
        String query = "FROM Usuario WHERE email = :email"; //:email es un parámetro, se utiliza de esta manera para evitar SQL Injection
        List<Usuario> lista = em.createQuery(query,Usuario.class)
            .setParameter("email", loginUsr.getEmail())
            .getResultList();
        
        if (lista.isEmpty()) return null; //En caso de no encontrar al usuario

        String pswHashed = lista.get(0).getPassword();
        Argon2 ar2 = Argon2Factory.create(Argon2Factory.Argon2Types.ARGON2id);
        
        if(ar2.verify(pswHashed, loginUsr.getPassword().toCharArray())) {
            return lista.get(0); //Devuelve el usuario en caso de tener las credenciales correctas
        }
        return null;
        
    }
}
