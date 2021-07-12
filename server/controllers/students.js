import StudentModel from "../models/StudentModel.js";
import SubjectModel from "../models/SubjectModel.js"

export const getStudents = async (req, res) => { 
    try {
        const allStudents = await StudentModel.find().populate("subjects");
                
        res.status(200).json(allStudents);
        console.log(allStudents);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createStudent = async (req, res) => {
    const { name, email, phone, dob } = req.body;

    const newStudent = new StudentModel({ name, email, phone, dob })

    try {
        await newStudent.save();

        res.status(201).json(newStudent );
        console.log(newStudent);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const addSubjectToStudent = async (req, res) => {
    const studentId = req.params.studentId
    const subjectId = req.params.subjectId
    const student = await StudentModel.findById(studentId)
    
    if(!student.subjects.includes(subjectId)){

        //adding subjectId into StudentCollection
        student.subjects.push(subjectId)
        const updatedStudent = await StudentModel.findByIdAndUpdate(studentId, student, { new: true })

        //adding studentId into SubjectCollection
        const subject = await SubjectModel.findById(subjectId)
        subject.students.push(studentId)
        const updatedSubject = await SubjectModel.findByIdAndUpdate(subjectId, subject, { new: true })

        res.json({ ...updatedStudent, ...updatedSubject })
        console.log({ ...updatedStudent, ...updatedSubject });
    }else{
        res.json({
            message: "subject already added"
        })
        console.log("subject already added");
    }  
}

