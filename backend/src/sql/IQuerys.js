/* Aqui se declaran todos los querys que hacen INSERT a una tabla de la base de datos */

/*Insertar empleados*/
const empleados="INSERT INTO Empleados (Nombre, Nacionalidad, Tiempo_Empresa, Puesto, Horas_Vuelo, Contacto, Idioma, puntuacion) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)";

/* Insertar aeronaves */
const aeronave="INSERT INTO Aeronave (Matricula, Marca, Modelo, Cap_peso, Cap_pasajeros, Antiguedad) VALUES ($1,$2,$3,$4,$5,$6)";

/* Insertar AeroPuerto */
const aeropuerto="INSERT INTO Aeropuerto (IATA, Nombre, Pais, Ciudad, ranking) VALUES ($1,$2,$3,$4,$5)";

/* Insertar Rutas */
const rutas="INSERT INTO Rutas (origen, destino, hora_salida, distancia, tiempo_vuelo) VALUES ($1,$2,$3,$4,$5)";

/* Insertar Viajes */
const viajes="INSERT INTO Viajes (Fecha, Precio, Piloto, Azafata, Copiloto, matricula_avion, num_vuelo) VALUES ($1,$2,$3,$4,$5,$6,$7)";

/* Insertar Reservas */
const reserva="INSERT INTO Reservas (pasajero, num_vuelo, fecha, fila, pos) VALUES ($1,$2,$3,$4,$5)";

module.exports={
    empleados,
    aeronave,
    aeropuerto,
    rutas,
    viajes,
    reserva
}