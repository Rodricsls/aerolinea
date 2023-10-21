/* Aqui se declaran todos los querys que hacen UPDATE a una tabla de la base de datos */

/*Insertar empleados*/
const empleados="UPDATE Empleados SET nombre=$1, tiempo_empresa=$2, puesto=$3, horas_vuelo=$4, contacto=$5, idioma=$6, puntuacion=$7 WHERE id_empleado=$7";

/* Insertar aeronaves */
const aeronave="UPDATE Aeronave SET Cap_peso=$1, Cap_pasajeros=$2, Antiguedad=$3 WHERE Matricula=$4";

/* Insertar AeroPuerto */
const aeropuerto="UPDATE Aeropuerto SET IATA=$1, Nombre=$2, ranking=$3 WHERE IATA=$4";

/* Insertar Rutas */
const rutas="UPDATE Rutas origen=$1, destino=$2, hora_salida=$3, distancia=$4, tiempo_vuelo=$5 VALUES WHERE Num_vuelo=$5";

/* Insertar Viajes */
const viajes="UPDATE Viajes Fecha=$1, Precio=$2, Piloto=$3, Azafata=$4, Copiloto=$5 WHERE num_vuelo=$5 AND Fecha=$6";



module.exports={
    empleados,
    aeronave,
    aeropuerto,
    rutas,
    viajes
}