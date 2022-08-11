import React from 'react'

function HeadingText(props) {
  return (
    <div class="containerTopHeader">
        <div></div>
        <div class="contentProjects">
            <h2 class="title">{props.title} <span style={{color: 'red'}}>.</span></h2>
        </div>
      
    </div>
  )
}

export default HeadingText