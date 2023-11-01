/* HAcemos las consultas para obtener datos especificos */


const empleados="DELETE FROM empleados WHERE id_empleado=$1";
const aeronave="DELETE FROM aeronave WHERE matricula=$1";
const aeropuerto= "DELETE FROM aeropuerto WHERE iata=$1";
const rutas="DELETE FROM rutas WHERE num_vuelo=$1";
const viajes="DELETE FROM viajes WHERE num_vuelo=$1 AND fecha=$2";



module.exports={
    empleados,
    aeronave,
    aeropuerto,
    rutas,
    viajes
}