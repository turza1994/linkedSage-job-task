import mongoose from 'mongoose';

const studentSchema = mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    dob: String,
    subjects: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subject'
    }]
})

var StudentModel = mongoose.model('Student', studentSchema);

export default StudentModel;