package dev.mgoscar.holaSpring.dao;

import dev.mgoscar.holaSpring.models.Usuario;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Repository
@Transactional
public class usuarioDaoImp implements usuarioDao{

    @PersistenceContext
    private EntityManager entityManager; //permite realizar la conexión con la BD

    @Override
    @Transactional
    public List<Usuario> getUsuarios() {
        String consulta = "FROM Usuario"; // "Usuario" es el nombre de la clase, no de la tabla
        /*
        List<Usuario> resultado = entityManager.createQuery(consulta).getResultList();
        return resultado;
         */
        return entityManager.createQuery(consulta).getResultList();
    }
}
