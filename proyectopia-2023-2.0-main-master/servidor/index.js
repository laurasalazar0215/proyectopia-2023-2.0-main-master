const express = require('express')
const app = express()
const mysql =require('mysql')
const cors = require('cors')

app.use(express.json());
app.use(cors())

app.listen(3006, ()=>{
    console.log('server started')
})

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'tamales'
})

//productos 

app.get('/datosproducto',(req, res)=>{
    db.query('select * from productos',
  (err,result) =>{
    if(err)console.log(err)
    else{
        res.send(result)
        console.log("metodo get",result)
    }
  }
    )
    
})

app.post('/crearproducto', (req,res)=>{
    const Id_producto = req.body.id;
    const Nombre_producto= req.body.Nombre_producto;
    const stock = req.body.stock ;
    const precio = req.body.precio;
    const referencias = req.body.referencias ;
    const img = req.body.img;
    

db.query('INSERT INTO productos VALUES (?,?,?,?,?,?)',[Id_producto,Nombre_producto,stock,precio,referencias,img]),
(err,result)=>{
    if(err)console.log(err)
    else{
        res.send("el producto se refistro con exito")
        console.log("el producto se registro con exito",result)
    }
}
})

app.put('/editusuario',(req,res)=>{
    const Id_producto = req.body.id;
    const Nombre_producto= req.body.Nombre_producto;
    const stock = req.body.stock ;
    const precio = req.body.precio;
    const referencias = req.body.referencias ;
    const img = req.body.img;
    
db.query('UPDATE productos SET Nombre_producto=?, stock=?, precio =?,referencias =?,img=?',[Id_producto,Nombre_producto,stock,precio,referencias,img]),
(err,result)=>{
    if(err)console.log(err)
    else{
        res.send("el producto se actualizo con exito",result)
        console.log("el producto se actualizo con exito",result)
    }
}
})

app.delete('/delete/:id',(req,res)=>{
    const id = req.body.id;

    db.query('DELETE FROM productos WHERE Id_producto=?',id),
    (err,result)=>{
if(err)console.log(err)
else{
    res.send("Eliminar",result)
    console.log("el producto fue eliminado con exito ")
}        
    }

})
//domicilio datos

app.get('/domicilios',(req, res)=>{
    db.query('select * from domicilios',
  (err,result) =>{
    if(err)console.log(err)
    else{
        res.send(result)
        console.log("metodo get",result)
    }
  }
    )

})

app.post('/crear/domicilio  ', (req,res)=>{
    const Id_domicilio  = req.body.Id_domicilio ;
    const Nombre_cliente = req.body.Nombre_cliente	;
    const Teléfono_cliente = req.body.Teléfono_cliente;
    const Dirección= req.body.Dirección;
    const metodo_pago = req.body.categoria;
    const referencia = req.body.stock;
    

db.query('INSERT INTO domicilios VALUES (?,?,?,?,?,?)',[Id_domicilio ,Nombre_cliente,Teléfono_cliente,Dirección,metodo_pago,referencia]),
(err,result)=>{
    if(err)console.log(err)
    else{
        res.send("el producto se registro con exito")
        console.log("el producto se registro con exito",result)
    }
}
})

app.put('/edit/domicilio',(req,res)=>{
    const Id_domicilio  = req.body.Id_domicilio ;
    const Nombre_cliente = req.body.Nombre_cliente	;
    const Teléfono_cliente = req.body.Teléfono_cliente;
    const Dirección= req.body.Dirección;
    const metodo_pago = req.body.categoria;
    const referencia = req.body.stock;
    
db.query('UPDATE domicilios SET Nombre_cliente=?, Teléfono_cliente=?,Dirección=?,metodo_pago=?,referencia =?',[Id_domicilio ,Nombre_cliente,Teléfono_cliente,Dirección,metodo_pago,referencia]),
(err,result)=>{
    if(err)console.log(err)
    else{
        res.send("el domicilio se actualizo con exito",result)
        console.log("el domicilio se registro con exito",result)
    }
}
})

app.delete('/deletedomicilio',(req,res)=>{
    const id = req.body.id;

    db.query('DELETE FROM domicilios  WHERE Id_producto=?',id),
    (err,result)=>{
if(err)console.log(err)
else{
    res.send("Eliminar",result)
    console.log("el domicilio fue eliminado con exito ")
}        
    }

})

//reservas 

app.get('/reservas',(req, res)=>{
    db.query('select * from reservas',
  (err,result) =>{
    if(err)console.log(err)
    else{
        res.send(result)
        console.log("metodo get",result)
    }
  }
    )
    
})
app.post('/crear/:reserva', (req,res)=>{
    const 	ID_reserva  = req.body.ID_reserva  ;
    const 	Nombre_cliente = req.body.Nombre_cliente;
    const Fecha_hora = req.body.Fecha_hora;
    const 	telefono = req.body.telefono;
    const cedula = req.body.cedula;
    const referencias= req.body.referencias;

db.query('INSERT INTO reservas VALUES (?,?,?,?,?,?)',[ID_reserva,Nombre_cliente,Fecha_hora,telefono,cedula,referencias]),
(err,result)=>{
    if(err)console.log(err)
    else{
        res.send("La reserva se registro con exito")
        console.log("La reserva se registro con exito",result)
    }
}
})

app.put('/edit/:reserva',(req,res)=>{
    const 	ID_reserva  = req.body.ID_reserva  ;
    const 	Nombre_cliente = req.body.Nombre_cliente;
    const Fecha_hora = req.body.Fecha_hora;
    const 	telefono = req.body.telefono;
    const cedula = req.body.cedula;
    const referencias= req.body.referencias;
db.query('UPDATE reservas SET Nombre_cliente=?, Fecha_hora=?,Cantidad_personas=?,Estado=?',[ID_reserva,Nombre_cliente,Fecha_hora,telefono,cedula,referencias]),
(err,result)=>{
    if(err)console.log(err)
    else{
        res.send("la reserva se actualizo con exito",result)
        console.log("la reserva se registro con exito",result)
    }
}
})

app.delete('/delete/:id_reserva',(req,res)=>{
    const id = req.body.id;

    db.query('DELETE FROM reservas WHERE Id_reserva=?',id),
    (err,result)=>{
if(err)console.log(err)
else{
    res.send("Eliminar",result)
    console.log("la reserva se cancelo con exito ")
}        
    }

})  


app.get('/encuesta',(req, res)=>{
    db.query('select * from encuesta',
  (err,result) =>{
    if(err)console.log(err)
    else{
        res.send(result)
        console.log("metodo get",result)
    }
  }
    )
    
})
app.post('/creare', (req,res)=>{
    const 	Calificacion  = req.body.Calificacion  ;
    const 	Atencion = req.body.Atencion;
    const Calidad = req.body.Calidad;
    const 	Sugerencia  = req.body.Sugerencia ;
    const Queja = req.body.Queja;

db.query('INSERT INTO encuesta VALUES (?,?,?,?,?)',[Calificacion,Atencion,Calidad,Sugerencia,Queja]),
(err,result)=>{
    if(err)console.log(err)
    else{
        res.send("La reserva se registro con exito")
        console.log("La reserva se registro con exito",result)
    }
}
})
