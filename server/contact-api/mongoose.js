const mongoose =  require('mongoose');
mongoose.connect('mongodb://localhost:27017/contacts-api',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('connected to db')
}).catch(error =>{
    console.log(`couldn't connect  to  db ${error}`);
});

module.exports =  mongoose;