const pool = require("../db");
const util = require('util');
const queryAsync = util.promisify(pool.query).bind(pool);
const service = require("../sql/WQuerys");
const { json2xml } = require('xml-js');

module.exports = (app) =>{
    app.get('/aerolinea/script_lista_vuelos', async(req, res)=>{
        let origen=req.query.origen;
        let destino=req.query.destino;
        let fecha=req.query.fecha;
        let formato=req.query.formato;

        const list=await queryAsync(service.lista_vuelos,[fecha,origen,destino]);
        const vuelos=list.rows;
        const flys =[];
        for(i=0; i<vuelos.length; i++){
            flys.push({"numero":vuelos[i].num_vuelo, "hora":vuelos[i].hora_salida, "precio":vuelos[i].precio});
        }

        if(formato==="JSON"){
            const result={"lista_vuelos":
                            {"aerolinea":"QTR",
                            "fecha":fecha,
                            "origen":origen,
                            "destino":destino,
                            "vuelos":flys
                            }
                        }
            res.json(result);
        }else{
            const resultxml={"lista_vuelos":
                            {"aerolinea":"QTR",
                            "fecha":fecha,
                            "origen":origen,
                            "destino":destino,
                            "vuelo":flys
                            }
                        }
            const json = JSON.stringify(resultxml);
            const xml = json2xml(json, {compact:true, spaces:4});
            res.status(200).send(xml);
        }
    });

    app.get('/aerolinea/script_lista_asientos', async(req, res)=>{
        let aerolinea=req.query.aerolinea;
        let vuelo=req.query.vuelo;
        let fecha=req.query.fecha;
        let formato=req.query.formato;
        let asientos=[];
        let filas=[];
        let letras=['A','B','C','D'];
        let pos=[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
        const datos=await queryAsync(service.datos_vuelo,[vuelo,fecha]);
        const asientos_reservados=await queryAsync(service.asientos_reservados,[vuelo, fecha]);

        for(i=0; i<asientos_reservados.rows.length; i++){
            let fila=asientos_reservados.rows[i].fila;
            if(!filas.includes(fila)){
                filas.push(fila);
            } 
        }

        for(i=0; i<filas.length; i++){
            let c=0;
            let pos_aux=[];
            while(filas[i]===asientos_reservados.rows[c].fila){
                pos_aux.push(asientos_reservados.rows[c].pos);
                c++;
                if(c===asientos_reservados.rows.length){
                    break;
                }
            }
            pos[i]=pos_aux;
        }

        let origen=datos.rows[0].origen;
        let destino=datos.rows[0].destino;
        let avion=datos.rows[0].marca;
        let indice=0

        for (i=0; i<20;i++){
            let dif=letras.filter(element =>!pos[i].includes(element));
            console.log(dif);
            for(a=0; a<dif.length; a++){
                console.log("aqui")
                asientos[indice]={"fila":i+1, "posicion":dif[a]}
                indice++;
            }
        }

        if(formato=="JSON"){
            const result={"lista_asientos":
                            {  "aerolinea":aerolinea,
                                "numero":vuelo,
                                "fecha":fecha,
                                "origen":origen,
                                "detino":destino,
                                "avion":avion,
                                "asientos":asientos
                            }
                        }
            res.json(result);
        }else{
            const resultxml={"lista_asientos":
                        {  "aerolinea":aerolinea,
                            "numero":vuelo,
                            "fecha":fecha,
                            "origen":origen,
                            "detino":destino,
                            "avion":avion,
                            "asiento":asientos
                        }
                    }
            const json = JSON.stringify(resultxml);
            const xml = json2xml(json, {compact:true, spaces:4});
            res.status(200).send(xml);
        }
    });

    app.get('/aerolinea/script_reserva', async(req, res)=>{
        let vuelo=req.query.vuelo;
        let fecha=req.query.fecha;
        let asiento=req.query.asiento;
        let nombre=req.query.nombre;

        let formato=req.query.formato;
        let fila=asiento.substring(0,1);
        let pos=asiento.substring(1);
        console.log("fila: ",fila," pos: ",pos);

        const hora=(await queryAsync(service.hora,[vuelo])).rows[0].hora_salida;
        
        await queryAsync(service.generar_boleto,[nombre, vuelo, fecha, fila, pos]);
        console.log("acas")
        const num_boleto=(await queryAsync(service.get_boleto,[nombre, vuelo, fecha, fila, pos])).rows[0].num_boleto;
        console.log(num_boleto);
        
        if(formato==="JSON"){
            const result={"boleto":
                            {
                                "aerolinea":"QTR",
                                "vuelo":vuelo,
                                "fecha":fecha,
                                "hora":hora,
                                "numero":num_boleto
                            }
                        }
            res.json(result);
        }else{
            const resultxml={"boleto":
                            {
                                "aerolinea":"QTR",
                                "vuelo":vuelo,
                                "fecha":fecha,
                                "hora":hora,
                                "numero":num_boleto
                            }
                        }
                const json = JSON.stringify(resultxml);
                const xml = json2xml(json, {compact:true, spaces:4});
                res.status(200).send(xml);
        }

    });
}