const middleware1 = (req, res, next)=>{
    console.log("I am middleware 1")
    next()
}


// app.use(middleware1)
app.use(express.json())

app.get("/sum",middleware1, (req, res)=>{
   console.log("I am in sum Api")
   let a = 10
   let b = 20
   let sum = a+b
   res.send("Sum is: "+sum)
})

app.post("/mul", (req, res)=>{

   // let n1 = req.query.n1 
   // let n2 = req.query.n2
   console.log(req.query)
   let {n1,n2} = req.query
   let mul = n1*n2
   console.log(mul)
   res.send(n1+" "+n2)
})

app.post("/div", (req, res)=>{
  console.log(req.body.name)
  let {name,n1,n2} = req.body
   let div = n1/n2
   res.send("Division "+div)
})


