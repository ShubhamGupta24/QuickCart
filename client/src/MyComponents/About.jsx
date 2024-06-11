import React from 'react';
import { MdWavingHand } from "react-icons/md";
import './style.css'


export const About = () => {
  return (
    <div className='details-container' >
      <div className='intro'>
        <div><h1>Hi <MdWavingHand />, this is Shubham Gupta.</h1><br /></div>
        <div>
          <img className='myphoto' src='Photo/myphoto.png' alt='My_Photo' />
        </div>
      </div>
      <div>
        <div className="about_me">
          I am the developer of this E-commerce platform.
          My passion for programming started when I was a
          teenager and it has been my driving force eversince.
          I am excited to bring this e-commerce platform to life
          using the latest technologies like the MERN stack.
          My goal is to create a seamless and enjoyable shopping experience
          for users while showcasing my skills as a developer.
        </div>
        <div className="about_project">
          <h2>About this Application:</h2>
          <p>This is a MERN stack project. It provides a comprehensive solution for
            online shopping, catering to both customers and sellers.</p>
          <div className='details'><h3>Key Components:</h3>
            <span> Frontend (React):</span>
            <br />
            Utilizes React.js for the client-side user interface.
            Implements responsive design for seamless browsing across devices.
            Offers an intuitive and interactive shopping experience.
            <br />
            <span>Backend (Node.js & Express.js):</span>
            <br />
            Employs Node.js with Express.js to handle server-side logic and API development.
            Manages user authentication, product management, and order processing.<br />
            <span>Database (MongoDB):</span>
            <br />
            Uses MongoDB as the NoSQL database to store product data, user profiles, and transaction details.
            Ensures scalability and flexibility in data management.<br />
            <span>Authentication & Authorization:</span>
            <br />
            Implements secure authentication using JWT (JSON Web Tokens).
            Provides role-based access control for administrators, sellers, and customers.
            <br />
            <span>Shopping Cart & Checkout:</span><br />
            Integrates a dynamic shopping cart for users to add/remove items.
            Facilitates secure checkout with payment gateway integration (e.g., Stripe).
          </div>
        </div>
      </div>
    </div>
  )
} 
