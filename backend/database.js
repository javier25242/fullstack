const mysql = require('mysql');
const {promisify} = require('util');
const {database} = require('./keys');


const pool = mysql.createPool(database);

pool.getConnection((err, connection) => {
    if(err) {
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            console.error('DATABASE CONECTION WAS CLOSED');
        }
        if(err.code ==='ER_CON_COUNT_ERROR'){
            console.error('DATABASE HAS TO MANY CONECTIONS');
        }
        if (err.code === 'ECONNREFUSED'){
            console.error('DATABASE CONECTION WAS REFUSED');
        }
    }

    if(connection) connection.release();
    console.log('DB is Connected');
    return;
});

// promisify pool -> query
pool.query = promisify(pool.query);

module.exports = pool;


//consultas
/*app.get('/', (req:any,res:any) => {
  res.send("hola mundo");
});

app.get('/plan',bodyParser.json(),(req:any,res:any) => {
  connection.query("SELECT * FROM plan", (req1:any,resultados:any) => {
    console.log(resultados);
    res.status(200).send(resultados);
  });
});

app.get('/usuarios/:id',(req:any,res:any) => {
  let id = req.params.id;
  console.log(id);
  connection.query("SELECT * FROM usuarios WHERE id=?", id,(req1:any,resultados:any) => {
    res.status(200).send(resultados);
  });
});

app.post('/crearUsuarios', (req:any,res:any) => {
  let nombre = req.body.nombre;
  let correo = req.body.correo;
  let clave = req.body.clave;

  console.log(nombre);

  connection.query("INSERT INTO usuarios(nombre, correo, clave", (req1:any,resultados:any) => {
    res.status(201).send(`usuario creado con el id: ${resultados.insertInto}`);
  });
});


app.put('/modificarusuarios', (req:any,res:any) => {
  let id = req.body.idUsuario;
  let nombre = req.body.nombre;

  connection.query("UPDATE usuarios SET nombre=? WHERE id=?", [nombre,id], (req1:any,resultados:any) => {
    res.status(200).send("Actualizado");
  });
});

app.delete('/borrar/:id', (req:any,res:any) => {
  let id = req.params.id;

  connection.query("DELETE FROM usuarios WHERE id=?", [id], (req1:any,resultados:any) => {
    res.status(200).send("Eliminado");
  });
});*/ 