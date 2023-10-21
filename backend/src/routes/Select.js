const pool = require("../db");
const util = require('util');
const queryAsync = util.promisify(pool.query).bind(pool);
const select = require("../sql/SQuerys");

module.exports= (app)=>{
    //obtenemos empleados
    app.post('/empleados', async(req, res)=>{
        try{
            const result=await queryAsync(select.empleados);
            res.json(result.rows);
        }catch(error){
            res.json({ status: 0, mensaje: "Error en el servidor" + error.message });
        }
        
    });

    //obtenemos Aeronaves
    app.post('/aeronaves', async(req, res)=>{
        try{
            const result=await queryAsync(select.Aeronaves);
            res.json(result.rows);
        }catch(error){
            res.json({ status: 0, mensaje: "Error en el servidor" + error.message });
        }
        
    });

    //obtenemos aeropuertos
    app.post('/aeropuertos', async(req, res)=>{
        try{
            const result=await queryAsync(select.Aeropuertos);
            res.json(result.rows);
        }catch(error){
            res.json({ status: 0, mensaje: "Error en el servidor" + error.message });
        }
        
    });

    //obtenemos Rutas
    app.post('/Rutas', async(req, res)=>{
        try{
            const result=await queryAsync(select.Rutas);
            res.json(result.rows);
        }catch(error){
            res.json({ status: 0, mensaje: "Error en el servidor" + error.message });
        }
        
    });

    //obtenemos Viajes
    app.post('/viajes', async(req, res)=>{
        try{
            const result=await queryAsync(select.Viajes);
            res.json(result.rows);
        }catch(error){
            res.json({ status: 0, mensaje: "Error en el servidor" + error.message });
        }
        
    });

    //obtenemos Reservas
    app.post('/reservas', async(req, res)=>{
        try{
            const result=await queryAsync(select.reservas);
            res.json(result.rows);
        }catch(error){
            res.json({ status: 0, mensaje: "Error en el servidor" + error.message });
        }
        
    });
}