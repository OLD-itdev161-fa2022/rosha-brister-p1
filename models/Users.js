import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    email: {
        type:String, 
        required: true,
        unique: true
    },
    dateOfBirth: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }

});

const UserProject1 = mongoose.model('user', UserSchema);

export default UserProject1;