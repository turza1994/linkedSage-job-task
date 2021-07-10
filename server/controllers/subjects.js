import SubjectModel from "../models/SubjectModel.js";

export const getSubjects = async (req, res) => { 
    try {
        const allSubjects = await SubjectModel.find();
                
        res.status(200).json(allSubjects);
        console.log(allSubjects);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createSubject = async (req, res) => {
    const { name } = req.body;

    const newSubject = new SubjectModel({ name })

    try {
        await newSubject.save();

        res.status(201).json(newSubject );
        console.log(newSubject);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

