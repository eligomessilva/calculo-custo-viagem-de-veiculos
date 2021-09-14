const express = require('express')
const app = express()
const hostname = '127.0.0.1';
const port = 3000
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
  
  app.post  ('/veiculos', function (req , res) {
    
    
    
    const consumoveiculo = req.body.consumo 
    const valor = req.body.valor
    const quilometros = req.body.quilometros

    const calculo = quilometros / consumoveiculo   
    const gastos = valor * calculo

     res.send(`Este veiculo precisa de  ${calculo.toFixed(2)} litros de gasolina para percorrer 
     ${quilometros} km, contudo precisara de  R$ ${gastos.toFixed(2)} reais .`)



  })
 

app.listen(port, hostname, () =>{
  console.log(`Server running at http://${hostname}:${port}/`);
});