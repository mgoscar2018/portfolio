package dev.mgoscar.holaSpring.models;

public class Usuario {
    private Long id;
    private String nombre;
    private String apellido;
    private String email;
    private String telefono;
    private String password;

    /*
     * Para generar los métodos get y Set en Visual Studio Code, hacer lo siguiente:
     * - botón derecho del mouse y elegir: "Source Action"
     * - Elegir "Generate Getters and Setters..."
     * - Seleccionar los campos a los que se quieren crear los métodos get y set
     */
    
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    
     public String getNombre() {
        return nombre;
    }
    
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    public String getApellido() {
        return apellido;
    }
    public void setApellido(String apellido) {
        this.apellido = apellido;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getTelefono() {
        return telefono;
    }
    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }

    
    
    
}
