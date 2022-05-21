const mongoose = require('mongoose');

const DB = process.env.DATABASE;
const url = 'mongodb + srv://anilraj:anilraj5@cluster0.wbrda.mongodb.net/mern270721?retryWrites=true&w=majority'
mongoose.connect(DB,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
        .then(()=>console.log('connection successful'))
        .catch((err)=> console.log('not connected '+ err))

        
