/* Aqui se declaran todos los querys que hacen UPDATE a una tabla de la base de datos */

/*Insertar empleados*/
const empleados="UPDATE Empleados SET nombre=$1, tiempo_empresa=$2, puesto=$3, horas_vuelo=$4, contacto=$5, idioma=$6, puntuación=$7 WHERE id_empleado=$8";

/* Insertar aeronaves */
const aeronave="UPDATE Aeronave SET Cap_peso=$1, Cap_pasajeros=$2, Antiguedad=$3 WHERE Matricula=$4";

/* Insertar AeroPuerto */
const aeropuerto="UPDATE Aeropuerto SET IATA=$1, Nombre=$2, ranking=$3 WHERE IATA=$4";

/* Insertar Rutas */
const rutas="UPDATE Rutas SET origen=$1, destino=$2, hora_salida=$3, distancia=$4, tiempo_vuelo=$5 WHERE num_vuelo=$6";

/* Insertar Viajes */
const viajes="UPDATE Viajes SET fecha=$1, precio=$2, piloto=$3, azafata=$4, copiloto=$5 WHERE num_vuelo=$6 AND fecha=$7";



module.exports={
    empleados,
    aeronave,
    aeropuerto,
    rutas,
    viajes
}