import express from 'express';
import { getStudents, createStudent, addSubjectToStudent } from '../controllers/students.js';

const router = express.Router();

router.get('/', getStudents);
router.post('/', createStudent);
router.patch('/:studentId/:subjectId', addSubjectToStudent)

export default router;