const mongoose = require("mongoose");

function connectDatabase (){
    mongoose.connect(process.env.DB_URL,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true
        }
      ).then((data)=>{
      console.log(`server Connected With MongoDB ${data.connection.host}`)
      }).catch((err)=>{
      console.log(err)
      })
}


module.exports = connectDatabase