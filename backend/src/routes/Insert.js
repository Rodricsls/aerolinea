const pool=require('../db');
const util = require('util');
const queryAsync = util.promisify(pool.query).bind(pool);
const insert = require('../sql/IQuerys');


module.exports = (app) => {

    //insert empleados
    app.post('/registrar-empleado', async (req, res) => {
        try{
            const values=[
                req.body.Nombre,
                req.body.Nacionalidad,
                req.body.Tiempo_Empresa,
                req.body.Puesto,
                req.body.Horas_vuelo,
                req.body.Contacto,
                req.body.Idioma,
                req.body.puntuacion
            ];
            
            await queryAsync(insert.empleados, values);
            res.json({ status: 1, mensaje: "EMPLEADO REGISTRADO!!!" });
        }catch(error){
            res.json({ status: 0, mensaje: "Error en el servidor" + error.message });
        }
    });

    //insertar aeronave

    app.post("/ingreso-aeronave", async(req, res) => {
        try{
            const values=[
                req.body.Matricula,
                req.body.Marca,
                req.body.Modelo,
                req.body.Cap_peso,
                req.body.Cap_pasajeros,
                req.body.Antiguedad
            ];
            
            await queryAsync(insert.aeronave, values);
            res.json({ status: 1, mensaje: "NAVE REGISTRADA!!!" });
        }catch(error){
            res.json({ status: 0, mensaje: "Error en el servidor" + error.message });
        }
    });

    //insertar aeropuerto
    app.post("/registro-aeropuerto", async(req, res) => {
        try{
            const values=[
                req.body.IATA,
                req.body.Nombre,
                req.body.Pais,
                req.body.Ciudad,
                req.body.ranking
            ];
            
            await queryAsync(insert.aeropuerto, values);
            res.json({ status: 1, mensaje: "AEROPUERTO REGISTRADO!!!" });
        }catch(error){
            res.json({ status: 0, mensaje: "Error en el servidor" + error.message });
        }
    });

    //insertar rutas
    app.post("/registro-ruta", async(req, res) => {
        try{
            const values=[
                req.body.origen,
                req.body.destino,
                req.body.hora_salida,
                req.body.distancia,
                req.body.tiempo_vuelo
            ];
            
            await queryAsync(insert.rutas, values);
            res.json({ status: 1, mensaje: "RUTA REGISTRADA!!!" });
        }catch(error){
            res.json({ status: 0, mensaje: "Error en el servidor" + error.message });
        }
    });

    //insertar viajes
    app.post("/registro-viaje", async(req, res) => {
        try{
            const values=[
                req.body.Fecha,
                req.body.Precio,
                req.body.Piloto,
                req.body.Azafata,
                req.body.Copiloto,
                req.body.matricula_avion,
                req.body.num_vuelo
            ];
            
            await queryAsync(insert.viajes, values);
            res.json({ status: 1, mensaje: "VIAJE REGISTRADO!!!" });
        }catch(error){
            res.json({ status: 0, mensaje: "Error en el servidor" + error.message });
        }
    });
}
