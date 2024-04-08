import ProjectModel from '../models/project.js'; // Assuming project.js exports the Project model

// Define the home controller function using async/await
export const home = async (req, res) => {
  try {
    // Fetch projects from the database and sort by createdAt in descending order
    let projects = await ProjectModel.find({}).sort('-createdAt');
    
    // Render the home page with the fetched projects
    return res.render('home', {
      title: 'Issue/Bug Tracker | Home',
      projects,
    });
  } catch (err) {
    // Handle errors
    console.log('Error', err);
    return;
  }
};
