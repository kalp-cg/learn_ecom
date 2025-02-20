import mongoose from 'mongoose';

const AddressSchema = new mongoose.Schema({
    address_line:{
        type:String,
        default:"  ",
    },
    city:{
        type:String,
        default:""
    },
    state:{
        type:String,
        default:""
    },
    pincode:{
        type:Number,

    },
    country:{
        type:String,
    },
    mobile:{
        type:String,
        default:null
    }
} , 

{timestamps:true})


const AddressModel = mongoose.model(' address' , addressSchema)

export default AddressModel;