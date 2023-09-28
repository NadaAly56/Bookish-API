import mongoose from 'mongoose'
export const dbConnection = ()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/bookish').then(()=>{
    console.log('DB Connected');
}).catch((e)=>{
    console.log("DB Connection Error "+ e);
})
}