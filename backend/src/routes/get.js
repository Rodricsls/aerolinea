const pool = require("../db");
const util = require('util');
const queryAsync = util.promisify(pool.query).bind(pool);
const get = require("../sql/GQuerys");
/* El parametro que se envia define la acción que se quiere buscar dentro de la tabla, ver GQuerys */
module.exports = (app) =>{
    app.get('/getEmpleados', async(req, res)=>{
        let action=req.query.action;
        switch(action){
            case "pilotos_sin_vuelos":
                try{
                    const result=await queryAsync(get.empleados.pilotos_sin_vuelos, [req.body.fecha]);
                    res.json(result.rows);
                }catch(error){ 
                    res.json({ status: 0, mensaje: "Error en el servidor" + error.message });
                }
                break;
            case "copiloto_sin_vuelos":
                try{
                    const result=await queryAsync(get.empleados.copiloto_sin_vuelos, [req.body.fecha]);
                    res.json(result.rows);
                }catch(error){ 
                    res.json({ status: 0, mensaje: "Error en el servidor" + error.message });
                }
                break;
            case "azafata_sin_vuelos":
                try{
                    const result=await queryAsync(get.empleados.azafata_sin_vuelos, [req.body.fecha]);
                    res.json(result.rows);
                }catch(error){ 
                    res.json({ status: 0, mensaje: "Error en el servidor" + error.message });
                }
                break;
            case "especific_id":
                try{
                    const result=await queryAsync(get.empleados.especific_id, [req.body.id]);
                    res.json(result.rows);
                }catch(error){ 
                    res.json({ status: 0, mensaje: "Error en el servidor" + error.message });
                }
                break;
            case "especific_puesto":
                try{
                    const result=await queryAsync(get.empleados.especific_puesto, [req.body.puesto]);
                    res.json(result.rows);
                }catch(error){ 
                    res.json({ status: 0, mensaje: "Error en el servidor" + error.message });
                }
                break;
        }

    });

    app.get('/getAeronave', async(req, res) =>{
        let action=req.query.action;
        switch(action){
            case "aeronave_sin_vuelos":
                try{
                    const result=await queryAsync(get.aeronave.aeronave_sin_vuelos, [req.body.fecha]);
                    res.json(result.rows);
                }catch(error){ 
                    res.json({ status: 0, mensaje: "Error en el servidor" + error.message });
                }
                break;
            case "especific":
                try{
                    const result=await queryAsync(get.aeronave.especific, [req.body.matricula]);
                    res.json(result.rows);
                }catch(error){ 
                    res.json({ status: 0, mensaje: "Error en el servidor" + error.message });
                }
                break;
        }
    });

    app.get('/getAeropuerto', async(req, res) =>{
        let action=req.query.action;
        switch(action){
            case "paises":
                try{
                    const result=await queryAsync(get.aeropuerto.paises);
                    res.json(result.rows);
                }catch(error){ 
                    res.json({ status: 0, mensaje: "Error en el servidor" + error.message });
                }
                break;
            case "ciudad":
                try{
                    const result=await queryAsync(get.aeropuerto.ciudad, [req.body.pais]);
                    res.json(result.rows);
                }catch(error){ 
                    res.json({ status: 0, mensaje: "Error en el servidor" + error.message });
                }
                break;
            case "iata_nombre":
                try{
                    const result=await queryAsync(get.aeropuerto.iata_nombre, [req.body.ciudad]);
                    res.json(result.rows);
                }catch(error){ 
                    res.json({ status: 0, mensaje: "Error en el servidor" + error.message });
                }
                break;
            case "especific":
                try{
                    const result=await queryAsync(get.aeropuerto.especific, [req.body.iata]);
                    res.json(result.rows);
                }catch(error){ 
                    res.json({ status: 0, mensaje: "Error en el servidor" + error.message });
                }
                break;
        }
    });
}