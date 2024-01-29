
import React from 'react'
import { Link } from "react-router-dom";

const NavBar = () => {

   return (
       <div>
           <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
               <div className="container-fluid">
                   <Link className="navbar-brand" to="/">TrendTeller</Link>
                   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                       <span className="navbar-toggler-icon"></span>
                   </button>
                   <div className="collapse navbar-collapse" id="navbarSupportedContent">
                       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                           <li className="nav-item"><Link className="nav-link" aria-current="page" to="/">Home</Link></li>
                           <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
                           <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                           <li className="nav-item"><Link className="nav-link" to="/general">General</Link></li>
                           <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
                           <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
                           <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
                           <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
                           <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                       </ul>
                   </div>
               </div>
           </nav>
       </div>
   )

}

export default NavBar




// ***** if you want to remove react router comment out above code and enable the code written below & do same with the App.js Component.********* 
// import React from 'react';

// const NavBar = () => {
//   return (
//     <div>
//       <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
//         <div className="container-fluid">
//           <a className="navbar-brand" href="#">TrendTeller</a>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
//               <li className="nav-item"><a className="nav-link" href="/business">Business</a></li>
//               <li className="nav-item"><a className="nav-link" href="/entertainment">Entertainment</a></li>
//               <li className="nav-item"><a className="nav-link" href="/general">General</a></li>
//               <li className="nav-item"><a className="nav-link" href="/health">Health</a></li>
//               <li className="nav-item"><a className="nav-link" href="/science">Science</a></li>
//               <li className="nav-item"><a className="nav-link" href="/sports">Sports</a></li>
//               <li className="nav-item"><a className="nav-link" href="/technology">Technology</a></li>
//               <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default NavBar;