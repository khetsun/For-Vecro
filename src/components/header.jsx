import React from "react"
function Header(){
    return (
        <div className="Header">
        <div className="head">
          <div className="main-video">
             <video className="video-bg" 
              src="https://uploads-ssl.webflow.com/5fc5d909ce29964856339c53/5fe335312cb0f4ed278c586b_webback22-transcode.webm"
              src="https://uploads-ssl.webflow.com/5fc5d909ce29964856339c53/5fe335312cb0f4ed278c586b_webback22-transcode.mp4"
              autoPlay loop muted/>
           </div>
          <nav class="navbar navbar-expand-lg  bg-transparent">
            <a class="navbar-brand" href="#"><img src="https://uploads-ssl.webflow.com/5fc5d909ce29964856339c53/61055ad9778a964cce077590_logo_inv_R_white_blackbgm.png" width="141"/></a>
              <button class="navbar-toggler bg-dark" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item active">
                 <a class="nav-link" href="#">ABOUT</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">SOLUTIONS</a>
               </li>
               <li class="nav-item">
                 <a class="nav-link" href="#">PRODUCTS</a>
               </li>
                <li class="nav-item">
                 <a class="nav-link" href="#">INVESTOR</a>
               </li>
               <li class="nav-item">
                 <a class="nav-link" href="#">BLOG</a>
                </li>
               <li class="nav-item">
                 <a class="nav-link">
                  <button class="btn btn-sm">SHOP</button></a></li>
               <li class="nav-item">
                  <a class="nav-link">
                   <button class="btn btn-sm">CONTACT</button></a>
               </li>
             </ul>
           </div>
         </nav>
       <div className="banner">
         <h1>Breakthrough Robotics for your inspections</h1>
         <p>Harness power of computer vision and robotics for autonomous inspections at scale</p>
       </div>
       </div>
     </div>
    )
}
export default Header;