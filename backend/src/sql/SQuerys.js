/* Obtenemos las tablas */
const empleados="SELECT * FROM Empleados";
const Aeronaves="SELECT * FROM Aeronave";//Antes tenia Aeronaves, lo cambie para que tuviera sentido con mi base de datos
const Rutas="SELECT * FROM Rutas";
const Aeropuertos="SELECT * FROM Aeropuerto";
const Viajes="SELECT * FROM Viajes";
const reservas="SELECT * FROM Reservas";

module.exports={
    empleados,
    Aeronaves,
    Rutas,
    Aeropuertos,
    Viajes,
    reservas
}