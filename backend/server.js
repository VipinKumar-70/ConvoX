const express = require("express");
const app = express();

app.use(express.json());

app.get("/api/test",(req,res)=>{
    res.send("message received: Hello")
})

app.listen(3000, () => {
  console.log("server is running...");
});
 