const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');


//initializations
const app = express();

//settings
app.set('port', process.env.PORT || 25000);
//commit
//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(bodyParser.json());

//global variables
app.use((req, res, next) => {

    next();
});

//public
app.use(express.static(path.join(__dirname, 'public')));


//starting server
app.listen(app.get('port'), () =>{
    console.log('Server on port', app.get('port')); 
});



//consultas
/*app.get('/', (req:any,res:any) => {
    res.send("hola mundo");
  });
  
  app.get('/plan',bodyParser.json(),(req:any,res:any) => {
    pool.query("SELECT * FROM plan", (req1:any,resultados:any) => {
      console.log(resultados);
      res.status(200).send(resultados);
    });
  });
  
  /*app.get('/usuarios/:id',(req:any,res:any) => {
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