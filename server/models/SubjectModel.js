import mongoose from 'mongoose';

const subjectSchema = mongoose.Schema({
    name: String,
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    }]
})

var SubjectModel = mongoose.model('Subject', subjectSchema);

export default SubjectModel;