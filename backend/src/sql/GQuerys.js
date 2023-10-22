/* HAcemos las consultas para obtener datos especificos */


const empleados={
    pilotos_sin_vuelos:"SELECT DISTICT (E.id_empleado), E.nombre FROM empleados E, Viajes V WHERE E.id_empleado!=V.Piloto AND E.Puesto='Piloto AND V.fecha=$2 ",
    copiloto_sin_vuelos:"SELECT DISTICT (E.id_empleado), E.nombre FROM empleados E, Viajes V WHERE E.id_empleado!=V.Copiloto AND E.Puesto='Copiloto AND V.fecha=$2' ",
    azafata_sin_vuelos:"SELECT DISTICT (E.id_empleado), E.nombre FROM empleados E, Viajes V WHERE E.id_empleado!=V.Azafata AND E.Puesto='Azafara AND V.fecha=$2'",
    especific_id:"SELECT * FROM empleados WHERE id_empleado=$1",
    especific_puesto:"SELECT id_empleado, nombre FROM empleados WHERE puesto=$1" 
}

const aeronave={
    aeronave_sin_vuelos:"SELECT A.matricula, A.marca, A.modelo FROM aeronave A, Viajes V WHERE A.matricula!=V.matricula_avion AND V.fecha=$1",
    especific:"SELECT * FROM aeronave WHERE matricula = $1"
}

const aeropuerto={
    paises:"SELECT DISTINCT (pais) FROM aeropuerto",
    ciudad:"SELECT DISTINCT (ciudad) FROM aeropuerto WHERE pais=$1",
    iata_nombre:"SELECT iata, nombre FROM aeropuerto WHERE ciudad=$1",
    especific:"SELECT * FROM aeropuerto WHERE iata=$1"
}


module.exports={
    empleados,
    aeronave,
    aeropuerto
}
