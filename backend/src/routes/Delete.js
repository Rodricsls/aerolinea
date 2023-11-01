const pool = require("../db");
const util = require('util');
const queryAsync = util.promisify(pool.query).bind(pool);
const Delete = require("../sql/DQuerys");

module.exports = (app) => {
    //Delete empleados
    app.post('/del-empleados', async(req, res)=>{
        try{
            const values=[
            req.body.id
            ];
            await queryAsync(Delete.empleados,values);
            res.json({ status: 1, mensaje: "Empleado Eliminado!!!" });
        }catch(error){
            res.json({ status: 0, mensaje: "Error en el servidor" + error.message });
        }
    });

    //Delete aeronaves
    app.post('/del-aeronaves', async(req, res)=>{
        try{
            const values=[
            req.body.Matricula
            ];
            await queryAsync(Delete.aeronave,values);
            res.json({ status: 1, mensaje: "avion Eliminado!!!" });
        }catch(error){
            res.json({ status: 0, mensaje: "Error en el servidor" + error.message });
        }
    });

    //Delete AeroPuerto
    app.post('/del-aeropuerto', async(req, res)=>{
        try{
            const values=[
            req.body.IATA,
            ];
            await queryAsync(Delete.aeropuerto,values);
            res.json({ status: 1, mensaje: "Aeropuerto Eliminado!!!" });
        }catch(error){
            res.json({ status: 0, mensaje: "Error en el servidor" + error.message });
        }
    });

    //Delete rutas
    app.post('/del-rutas', async(req, res)=>{
        try{
            const values=[
            req.body.Num_vuelo
            ];
            await queryAsync(Delete.rutas,values);
            res.json({ status: 1, mensaje: "Ruta Eliminada!!!" });
        }catch(error){
            res.json({ status: 0, mensaje: "Error en el servidor" + error.message });
        }
    });

    //Delete Viajes
    app.post('/del-viajes', async(req, res)=>{
        try{
            const values=[
            req.body.num_vuelo,
            req.body.Fecha
            ];
            await queryAsync(Delete.viajes,values);
            res.json({ status: 1, mensaje: "Viaje Eliminado!!!" });
        }catch(error){
            res.json({ status: 0, mensaje: "Error en el servidor" + error.message });
        }
    });
}