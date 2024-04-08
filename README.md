#Issue Tracker Application

Home Page:- 

  The Home Page of the Issue Tracker Application displays a list of projects. From here, users can create a new project and view existing projects.

  Features:
  
  1. List of Projects: Displays a list of projects with their names, descriptions, and authors.
  2. Create New Project: Allows users to create a new project by providing a name, description, and author.

Create Project Page:-

  The Create Project Page enables users to create a new project by providing specific details.
  Features:
  1. Create Project Form: Accepts the following fields to create a project:

      Name: Name of the project.

      Description: Brief description of the project.

      Author: Name of the author or creator of the project.
  
Project Detail Page:-

  The Project Detail Page provides detailed information about a specific project. Users can view bugs related to the project and perform various actions.

  Features:
  
  1. Project Information: Displays project details such as name, description, and author.
  2. Bugs Related to Project: Lists bugs related to the project.
  3. Filtering and Searching:
  4. Filter by Multiple Labels: Users can filter bugs by multiple labels simultaneously.
  5. Filter by Author: Allows users to filter bugs by the author.
  6. Search by Title and Description: Enables users to search for bugs by their titles and descriptions.
  7. Create Issue Button: Allows users to create a new issue for the project.
  
Create Issue Page:-

  The Create Issue Page allows users to create a new issue for a specific project.

  Features:
  
  1. Create Issue Form: Accepts the following fields to create an issue:
  
      Title: Title or summary of the issue.

      Description: Detailed description of the issue.

      Labels: Users can add multiple labels to categorize the issue. Existing labels for the project are displayed in a dropdown as the user types.

      Author: Name of the author or creator of the issue.
  
**Getting Started**:

To run the Issue Tracker Application locally:

1. Clone the repository: git clone <repository-url>
2. Install dependencies: npm install
3. Add the required .env file with Port and Database connection string (eg.):

   MONGODB_URL=mongodb://localhost:27017/IssueTracker

    PORT = 3500
   
4.Start the server: node index.js
5.Open the application in your browser: http://localhost:{PORT}
