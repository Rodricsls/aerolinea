/* consultas de los web services */
 
const lista_vuelos="SELECT V.num_vuelo, R.hora_salida, V.precio FROM rutas R, viajes V WHERE V.fecha=$1 AND R.origen=$2 AND R.destino=$3 AND R.num_vuelo=V.num_vuelo ";

const datos_vuelo="SELECT R.origen, R.destino, A.marca FROM rutas R, aeronave A, viajes V WHERE V.num_vuelo=$1 AND V.fecha=$2 AND V.num_vuelo=R.num_vuelo AND V.matricula_avion=A.matricula";

const asientos_reservados="SELECT fila, pos FROM reservas WHERE num_vuelo=$1 AND fecha=$2";

const hora="SELECT hora_salida FROM rutas WHERE num_vuelo=$1";
const generar_boleto="INSERT INTO reservas (pasajero, num_vuelo, fecha, fila, pos) VALUES ($1,$2,$3,$4,$5)";
const get_boleto="SELECT num_boleto FROM reservas WHERE pasajero=$1 AND num_vuelo=$2 AND fecha=$3 AND fila=$4 AND pos=$5";


module.exports={
    lista_vuelos,
    datos_vuelo,
    asientos_reservados,
    hora,
    generar_boleto,
    get_boleto
}