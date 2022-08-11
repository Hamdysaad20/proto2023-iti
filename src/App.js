import './App.css';
import Heading from './components/Heading';
import HeadingText from './components/HeadingText';
import TopHeader from './components/TopHeader';
import ProjectsContainer  from './components/ProjectsContainer'
import {projectDatas} from './components/JSON/ProjectsData'
import TechStack from './components/TechStack';
import { Link } from 'react-router-dom';
function App() {

 
  return (
    <div class="App">
      <div class="container ">
      <Heading/>
      <TopHeader/>
      <HeadingText title="Technologies  I Use"/>

      <TechStack/>

<div >     
<HeadingText  title="Featured Projects"/>

 
  {
  projectDatas.map((projectData,i) => (
     <ProjectsContainer  key={i}
      discription={projectData.discription}
      image={projectData.image}
      cardColor={projectData.cardColor}
      title={projectData.title}
      techStack={projectData.techStack}
      />
      ))}
      

      
      </div>
      </div>

      <Link to="/contact">
      <div class="absolute contactSh">
      <h2 class="contacttext">Contact Us</h2>
        <img class="contactimg" src="https://i.ibb.co/NCFDjV5/contact.png" alt="contact"/>
  
      </div></Link> 

   
    </div>
  );
}

export default App;
