const pool = require("../db");
const util = require('util');
const queryAsync = util.promisify(pool.query).bind(pool);
const service = require("../sql/WQuerys");

module.exports = (app) =>{
    app.get('/aerolinea/script_lista_vuelos', async(req, res)=>{
        let origen=req.query.origen;
        let destino=req.query.detino;
        let fecha=req.query.fecha;
        let formato=req.query.formato;
    })
}