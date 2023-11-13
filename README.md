# Terriblytinytales_Assignment
## Live Demo

Explore the live working version of the application [here](https://your-vercel-app-url).

## Description

This project is a React application that features a user profile page. Built with Next.js and styled with Tailwind CSS, it incorporates various libraries and plugins to create a dynamic and visually appealing user interface.

## Components

### 1. Home (`page.js`)

The `Home` component serves as the main entry point for the application. It consists of a `Navbar` and a `Profile` component, both wrapped in a `PageWrapper` for seamless animation transitions between pages.

### 2. Navbar (`Navbar.js`)

The `Navbar` component represents the navigation bar at the top of the page. It includes a logo and a "Courses" button, utilizing the `next/image` component for optimized image loading and Tailwind CSS for styling.

### 3. Profile (`Profile.js`)

The `Profile` component displays user profile information with a background image, profile picture, user details, and a section for user posts. It leverages the Framer Motion library for animations, uses the `next/image` component for image rendering, and styles with Tailwind CSS.

### 4. PostCard (`PostCards.js`)

The `PostCard` component represents an individual post within the user profile. It displays the post title, content, author information, and additional details like post type, time, reading range, and views. The heart icon allows users to like posts, and the `next/image` component is used for image rendering. Tailwind CSS is applied for styling.

### 5. PageWrapper (`PageWrapper.js`)

The `PageWrapper` component is a utility component used for animation transitions between pages. It employs the Framer Motion library to provide a smooth entrance and exit animation for page content and is styled using Tailwind CSS.

## Libraries and Plugins

1. **React**: A JavaScript library for building user interfaces.

2. **Next.js**: A React framework for building server-rendered applications.

3. **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.

4. **Framer Motion**: A library for creating animations in React applications.

5. **next/image**: A Next.js component for optimized image loading.

## Deploy on Vercel

To deploy this project on Vercel, click the button below:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project-url)

## Setup and Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/your-repository.git

2. **Install Dependencies:**

    ```bash
   npm install

3. **Run the application**

    ```bash
   npm run dev




