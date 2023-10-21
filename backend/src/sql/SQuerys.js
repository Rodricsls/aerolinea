/* Obtenemos las tablas */
const empleados="SELECT * FROM Empleados";
const Aeronaves="SELECT * FROM Aeronaves";
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