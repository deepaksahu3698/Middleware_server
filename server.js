const express=require("express")
const app=express()

let book=[{
    id: "1159142",
    name: "Agile Web Development with Rails",
    author: "Sam Ruby, Dave Thomas, David Heinemeier Hansson"
    
    
  },
  {
    id: "2375753",
    name: "Development",
    author: "Miguel Grinberg",
    
  },
  {
    id: "592321",
    name: "Agile web development with rails: a Pragmatic guide",
    author: "Dave Thomas, David Heinemeier Hansson, Leon Breedt, Mike Clark, Thomas Fuchs, Andrea Schwarz",
    
  },
  {
    id: "643503",
    name: "CakePHP Application Development: Step-by-step introduction to rapid web development using the open-source MVC CakePHP framework",
    author: "Ahsanul Bari, Anupom Syam",
   
  },]

 
  function allBooks(req,res,next){
    console.log ( "Fetching all books")
    next()
    
  }
app.use(allBooks)

const singleBook = (req,res,next)=>{
console.log("singleBook")
next()
}

app.get("/books",(req,res)=>{
    res.send(book)
   
  })
  app.use(singleBook)
  app.get("/book/:name",(req,res)=>{
//   let newRR= book.filter((e)=>{
//        e.name==req.params.name
//    })
//    console.log(newRR)
   res.json({Bookname:req.params.name})
//  res.json(newRR)
    // console.log(req.params)
  })







app.listen(3000,()=>{
    console.log("server is running on port 3000")
})