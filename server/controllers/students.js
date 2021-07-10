import StudentModel from "../models/StudentModel.js";

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
    const studentId = req.params.id
    const subjectId = req.params.subjectId
    const student = await StudentModel.findById(studentId)
    
    if(!student.subjects.includes(subjectId)){
        student.subjects.push(subjectId)
        const updatedStudent = await StudentModel.findByIdAndUpdate(studentId, student, { new: true })
        res.json(updatedStudent)
        console.log(updatedStudent);
    }else{
        res.json({
            message: "subject already added"
        })
        console.log("subject already added");
    }  
}

