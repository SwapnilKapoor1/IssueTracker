import express from 'express';
import { home } from '../controllers/home_controller.js'; 
import projectRouter from './project.js';

console.log('--> Router Loaded Successfully <--');

// Create a new router
const router = express.Router();

// Route for the home page
router.get('/', home);

// Route for project requests
router.use('/project', projectRouter); 

// Export the router
export default router;
