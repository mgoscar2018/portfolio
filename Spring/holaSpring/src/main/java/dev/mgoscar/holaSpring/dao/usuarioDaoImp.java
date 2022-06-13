package dev.mgoscar.holaSpring.dao;

import dev.mgoscar.holaSpring.models.Usuario;
import org.springframework.stereotype.Repository;
//import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import java.util.List;

@Repository
//@Transactional //Se comenta ya que en este lugar por el momento no le veo la utilidad 
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
}
