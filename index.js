const express = require('express')
const app = express()
const port = 3000
const mongoose=require ('mongoose');
const methodOverride=require('method-override');
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))
const Projete=require("./model/shema1");
app.set('view engine', 'ejs')
app.get("/",(req,res)=>{
  res.render("index")
})

app.get("/liste", (req, res) => {
  Projete.find().then((result) => {
    res.render("liste", { array: result })
 })
  })
  app.get("/liste/:id", (req, res) => {
  })
  app.get("/update/:id",(req,res)=>{
    Projete.findById(req.params.id).then((resultates)=>{
      res.render("update",{Array:resultates})
}).catch((parent)=>{
  console.log(parent)
})
})
app.put("/update/:id",(req,res)=>{
  Projete.findByIdAndUpdate(req.params.id.trim(), req.body)
  .then(() => {
      res.redirect('/liste'); // Fix this line
  })
  .catch((errorez) => {
      console.log(errorez);
  });
});

  app.delete("/liste/:id",(req,res)=>{
    Projete.findByIdAndDelete(req.params.id)
    .then(()=>{    res.redirect('/liste')
  }).catch((errore)=>{console.log(errore)})

  })



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
mongoose.connect("mongodb+srv://drbalyasser:Q4S7e5pQCKojah4a@cluster0.efuqymq.mongodb.net/all-data?retryWrites=true&w=majority").then(()=>{
    console.log("la connection est activer")
}).catch(()=>{console.log("eroore")})
app.post("/",(req,res)=>{
const article=new Projete(req.body)
article.save().then(()=>{
})
res.redirect("/")
  }) 
  app.post("/liste",(req,res)=>{
    console.log(req.body.searchetext)

    Projete.find({Nome:req.body.searchetext}).then((rese)=>{
      res.render("table",{arr:rese})
    })
      }) 
