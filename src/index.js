import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes,
  Route,
   } from "react-router-dom";
  import Contact from './Contact';
  import Snippets from './Snippets';
  import Blog from './[Blogs]/index';












const root = ReactDOM.createRoot(document.getElementById('root') );

root.render(
<React.StrictMode>
      <BrowserRouter>
     

    <Routes>
    <Route path="/" element={<App />} />

          <Route path="/contact"  element={ <Contact />}/>
          <Route path="/snippets"  element={ <Snippets />}/>
          <Route path="/blogs"  element={ <Blog />}/>

          <Route path="/snippets"  element={ <Snippets />}/>
        
        </Routes>
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
