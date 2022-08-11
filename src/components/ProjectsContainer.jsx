import React from 'react'

function projectContainer(props) {
  return (
   <div class={`${"sheadingContainer projectCard containerTopHeader"} ${props.cardColor}`}> <div   className="containerTopHeader Projcardcontainder">
   <div class="projectCardImage" >
<img class="imgpro" style={{position: 'relative'}} alt="hamdy saad" src={props.image}  />
</div>
   <div>
       <h1>{props.title}</h1>
     <h4>Tech Stack : <span style={{fontWeight:"normal",  color:"red"}}>{props.techStack}</span> </h4> 
         <p style={{maxWidth:"600px"}}>
{props.discription}
       </p>
   </div>
</div></div>
  )
}

export default projectContainer