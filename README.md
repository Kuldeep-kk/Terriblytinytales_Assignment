# Terriblytinytales_Assignment
Description
This project is a React application that includes components for a user profile page. It utilizes the Next.js framework for React and includes various libraries and plugins to enhance the user interface and animation capabilities.

Components
1. Home (page.js)
The Home component is the main entry point for the application. It includes a Navbar and a Profile component wrapped in a PageWrapper. The PageWrapper component provides a smooth animation transition for page changes.

2. Navbar (Navbar.js)
The Navbar component represents the navigation bar at the top of the page. It includes a logo and a "Courses" button. The component uses the Next.js Link component for navigation and leverages the next/image component for image optimization.

3. Profile (Profile.js)
The Profile component displays user profile information, including a background image, profile picture, user details, and a section for displaying user posts. The component uses the Framer Motion library for animations and includes a PageWrapper for animation transitions. It also utilizes the next/image component for optimized image loading.

4. PostCard (PostCards.js)
The PostCard component represents an individual post within the user profile. It displays the post title, content, author information, and additional details like post type, time, reading range, and views. It includes a heart icon for liking posts and uses the next/image component for image rendering.

5. PageWrapper (PageWrapper.js)
The PageWrapper component is a utility component used for animation transitions between pages. It leverages the Framer Motion library to provide a smooth entrance and exit animation for page content.

Libraries and Plugins
React: A JavaScript library for building user interfaces.

Next.js: A React framework for building server-rendered applications.

Framer Motion: A library for creating animations in React applications.

next/image: A Next.js component for optimized image loading.

Setup and Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/your-repository.git
Install dependencies:

bash
Copy code
npm install
Run the application:

bash
Copy code
npm run dev
The application should now be running locally at http://localhost:3000.

Additional Notes
Ensure that you have Node.js and npm installed on your machine.
