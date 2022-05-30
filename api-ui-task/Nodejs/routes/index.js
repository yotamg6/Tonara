import express from 'express';
import {
  AddNewAssignment,
  SelectAllAssignments,
} from '../controllers/Users.js';
const router = express.Router();

router.post('/assignment', AddNewAssignment);
router.get('/all-assignments', SelectAllAssignments);

export default router;
