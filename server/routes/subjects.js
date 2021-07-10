import express from 'express';
import { getSubjects, createSubject } from '../controllers/subjects.js';

const router = express.Router();

router.get('/', getSubjects);
router.post('/', createSubject);

export default router;