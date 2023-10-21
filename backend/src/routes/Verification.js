const pool = require("../db");
const util = require('util');
const queryAsync = util.promisify(pool.query).bind(pool);
const verificate = require("../sql/VQuerys");

module.exports = (app) => {
    //Verificamos si ya existe una aeronave
    app.post('/Vef-aeronave', async (req, res) => {
        try{
            const values=[
                req.body.Matricula
            ];
            console.log(req.body.Matricula);
            const result=await queryAsync(verificate.aeronave, values);
            if(result.rows[0].count==0){
                res.json({ status: 1, mensaje: "La aeronave no existe!!!" , exist:false});
            }else{
                res.json({ status: 1, mensaje: "La aeronave ya existe!!!" , exist:true});
            }
            
        }catch(error){
            res.json({ status: 0, mensaje: "Error en el servidor" + error.message });
        }
    });

    //Verificamos si ya existe una aeropuerto
    app.post('/Vef-aeropuerto', async (req, res) => {
        try{
            const values=[
                req.body.IATA
            ];
            
            const result=await queryAsync(verificate.aeropuerto, values);
            if(result.rows[0].count==0){
                res.json({ status: 1, mensaje: "La aeropuero no existe!!!" , exist:false});
            }else{
                res.json({ status: 1, mensaje: "La aeronave ya existe!!!" , exist:true});
            }
        }catch(error){
            res.json({ status: 0, mensaje: "Error en el servidor" + error.message });
        }
    });

    //Verificamos si ya existe el viaje
    app.post('/Vef-viaje', async (req, res) => {
        try{
            const values=[
                req.body.fecha,
                req.body.num_vuelo
            ];
            
            const result=await queryAsync(verificate.viajes, values);
            if(result.rows[0].count==0){
                res.json({ status: 1, mensaje: "La aeronave no existe!!!" , exist:false});
            }else{
                res.json({ status: 1, mensaje: "La aeronave ya existe!!!" , exist:true});
            }
        }catch(error){
            res.json({ status: 0, mensaje: "Error en el servidor" + error.message });
        }
    });
}