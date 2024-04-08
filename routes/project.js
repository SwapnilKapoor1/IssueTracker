import express from 'express';
import { createIssue, createProject, getProject} from '../controllers/project_controller.js'; 

// Create a new router
const projectRouter = express.Router();

// Route to create a project
projectRouter.post('/create', createProject);

// Route to get a project
projectRouter.get('/:id', getProject);

// Route to create an issue
projectRouter.post('/:id', createIssue);

// Export the router
export default projectRouter;
