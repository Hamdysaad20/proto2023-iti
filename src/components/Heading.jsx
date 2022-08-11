import React from 'react'
//About - Projects - Dreams - Skills - Contact (sections)
import { Link } from "react-router-dom";
import Contact from "../Contact"

function Heading() {

  return (
    <div >
      <nav class="navStyle">
        <div className="headingContainer"> 
        <ul>
        <Link to="/" element={<Contact />}><li>Home</li></Link> |{" "}
        <Link to="/blogs"><li>Blog</li></Link> |{" "}
        <Link to="/snippets"><li>Snippets</li></Link> |{" "}
        <Link to="/contact"><li>Contact</li></Link> 
          </ul>
          </div>
        <h2 class="switcherBox">👾</h2>
      </nav>
    </div>
  )
}

export default Heading