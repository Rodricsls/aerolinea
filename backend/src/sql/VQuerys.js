/* COnsultas de verificación */

/* Verificamos si ya existe una aeronave con esa matricula */
const aeronave='SELECT COUNT(*) as count FROM Aeronave WHERE Matricula = $1';

/* Verificamos si ya existe el aeropuerto */
const aeropuerto='SELECT COUNT(*) as count FROM Aeropuerto WHERE IATA = $1';

/* Verificamos si ya hay un viaje con esa fecha y numero de vuelo */
const viajes='SELECT COUNT(*) as count FROM Viajes WHERE Fecha = $1 AND num_vuelo=$2';

module.exports={
    aeronave,
    aeropuerto,
    viajes
}

