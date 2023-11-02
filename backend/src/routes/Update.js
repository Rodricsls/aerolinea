const pool = require("../db");
const util = require('util');
const queryAsync = util.promisify(pool.query).bind(pool);
const update = require("../sql/UQuerys");

module.exports = (app) => {
    //Update empleados
    app.post('/up-empleados', async(req, res)=>{
        try{
            const values=[
            req.body.nombre,
            req.body.tiempo_empresa,
            req.body.puesto,
            req.body.horas_vuelo,
            req.body.contacto,
            req.body.idioma,
            req.body.puntuacion,
            req.body.id
            ];
            await queryAsync(update.empleados,values);
            res.json({ status: 1, mensaje: "Empleado Actualizado!!!" });
        }catch(error){
            res.json({ status: 0, mensaje: "Error en el servidor" + error.message });
        }
    });

    //Update aeronaves
    app.post('/up-aeronaves', async(req, res)=>{
        try{
            const values=[
            req.body.Cap_peso,
            req.body.Cap_pasajeros,
            req.body.Antiguedad,
            req.body.Matricula
            ];
            await queryAsync(update.aeronave,values);
            res.json({ status: 1, mensaje: "avion Actualizado!!!" });
        }catch(error){
            res.json({ status: 0, mensaje: "Error en el servidor" + error.message });
        }
    });

    //Update AeroPuerto
    app.post('/up-aeropuerto', async(req, res)=>{
        try{
            const values=[
            req.body.IATA,
            req.body.Nombre,
            req.body.ranking,
            req.body.IATA1
            ];
            await queryAsync(update.aeropuerto,values);
            res.json({ status: 1, mensaje: "Aeropuerto Actualizado!!!" });
        }catch(error){
            res.json({ status: 0, mensaje: "Error en el servidor" + error.message });
        }
    });

    //Update rutas
    app.post('/up-rutas', async(req, res)=>{
        try{
            const values=[
            req.body.origen,
            req.body.destino,
            req.body.hora_salida,
            req.body.distancia,
            req.body.tiempo_vuelo,
            req.body.Num_vuelo
            ];
            await queryAsync(update.rutas,values);
            res.json({ status: 1, mensaje: "Ruta Actualizada!!!" });
        }catch(error){
            res.json({ status: 0, mensaje: "Error en el servidor" + error.message });
        }
    });

    //Update Viajes
    app.post('/up-viajes', async(req, res)=>{
        try{
            const values=[
            req.body.FechaN,
            req.body.Precio,
            req.body.Piloto,
            req.body.Azafata,
            req.body.Copiloto,
            req.body.num_vuelo,
            req.body.Fecha
            ];
            await queryAsync(update.viajes,values);
            res.json({ status: 1, mensaje: "Viaje Actualizado!!!" });
        }catch(error){
            res.json({ status: 0, mensaje: "Error en el servidor" + error.message });
        }
    });
}